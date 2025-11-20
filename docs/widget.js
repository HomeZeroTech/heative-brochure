(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{--heative-green: #22c55e;--heative-green-hover: #4ade80;--heative-orange: #f97316;--heative-text: #1f2937;--heative-gray-light: #f3f4f6;--heative-border: #e5e7eb}.heative-widget{font-family:inherit;color:var(--heative-text);width:100%;max-width:100%;box-sizing:border-box}.heative-widget *{box-sizing:border-box}.heative-card{background:#fff;border-radius:1rem;padding:1.5rem;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;display:flex;flex-direction:column;gap:1rem}.heative-row{display:flex;gap:1rem}.heative-col{flex:1;display:flex;flex-direction:column;gap:.25rem}.heative-label{font-size:.875rem;font-weight:500;color:#374151}.heative-input{width:100%;padding:.75rem 1rem;border:1px solid var(--heative-border);border-radius:.5rem;font-size:1rem;transition:border-color .2s,box-shadow .2s;outline:none}.heative-input:focus{border-color:var(--heative-green);box-shadow:0 0 0 3px #22c55e33}.heative-btn{width:100%;background-color:var(--heative-green);color:#fff;font-weight:600;padding:.75rem 1.5rem;border-radius:9999px;border:none;cursor:pointer;transition:background-color .2s;font-size:1rem;margin-top:.5rem}.heative-btn:hover{background-color:var(--heative-green-hover)}.heative-btn:disabled{opacity:.7;cursor:not-allowed}.heative-success{text-align:center;padding:2rem;animation:fadeIn .5s ease-out}.heative-success-icon{width:4rem;height:4rem;background-color:#dcfce7;color:var(--heative-green);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem}.heative-success h3{font-size:1.5rem;font-weight:700;margin:0 0 .5rem}.heative-success p{color:#6b7280}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (max-width: 640px){.heative-row{flex-direction:column;gap:1rem}}")),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function Jb(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var p0 = { exports: {} }, Kp = {}, v0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XR;
function Zb() {
  if (XR) return Et;
  XR = 1;
  var q = Symbol.for("react.element"), pe = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), it = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), _t = Symbol.for("react.provider"), lt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ze = Symbol.for("react.suspense"), Ee = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Me = Symbol.iterator;
  function Z(b) {
    return b === null || typeof b != "object" ? null : (b = Me && b[Me] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, we = {};
  function ct(b, B, be) {
    this.props = b, this.context = B, this.refs = we, this.updater = be || Fe;
  }
  ct.prototype.isReactComponent = {}, ct.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, ct.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Pn() {
  }
  Pn.prototype = ct.prototype;
  function an(b, B, be) {
    this.props = b, this.context = B, this.refs = we, this.updater = be || Fe;
  }
  var ut = an.prototype = new Pn();
  ut.constructor = an, le(ut, ct.prototype), ut.isPureReactComponent = !0;
  var ze = Array.isArray, Dt = Object.prototype.hasOwnProperty, Re = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(b, B, be) {
    var Pe, Ye = {}, rt = null, Ct = null;
    if (B != null) for (Pe in B.ref !== void 0 && (Ct = B.ref), B.key !== void 0 && (rt = "" + B.key), B) Dt.call(B, Pe) && !ft.hasOwnProperty(Pe) && (Ye[Pe] = B[Pe]);
    var Qe = arguments.length - 2;
    if (Qe === 1) Ye.children = be;
    else if (1 < Qe) {
      for (var gt = Array(Qe), Pt = 0; Pt < Qe; Pt++) gt[Pt] = arguments[Pt + 2];
      Ye.children = gt;
    }
    if (b && b.defaultProps) for (Pe in Qe = b.defaultProps, Qe) Ye[Pe] === void 0 && (Ye[Pe] = Qe[Pe]);
    return { $$typeof: q, type: b, key: rt, ref: Ct, props: Ye, _owner: Re.current };
  }
  function Rn(b, B) {
    return { $$typeof: q, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Nt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === q;
  }
  function dn(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(be) {
      return B[be];
    });
  }
  var It = /\/+/g;
  function yt(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? dn("" + b.key) : B.toString(36);
  }
  function Ne(b, B, be, Pe, Ye) {
    var rt = typeof b;
    (rt === "undefined" || rt === "boolean") && (b = null);
    var Ct = !1;
    if (b === null) Ct = !0;
    else switch (rt) {
      case "string":
      case "number":
        Ct = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case q:
          case pe:
            Ct = !0;
        }
    }
    if (Ct) return Ct = b, Ye = Ye(Ct), b = Pe === "" ? "." + yt(Ct, 0) : Pe, ze(Ye) ? (be = "", b != null && (be = b.replace(It, "$&/") + "/"), Ne(Ye, B, be, "", function(Pt) {
      return Pt;
    })) : Ye != null && (Nt(Ye) && (Ye = Rn(Ye, be + (!Ye.key || Ct && Ct.key === Ye.key ? "" : ("" + Ye.key).replace(It, "$&/") + "/") + b)), B.push(Ye)), 1;
    if (Ct = 0, Pe = Pe === "" ? "." : Pe + ":", ze(b)) for (var Qe = 0; Qe < b.length; Qe++) {
      rt = b[Qe];
      var gt = Pe + yt(rt, Qe);
      Ct += Ne(rt, B, be, gt, Ye);
    }
    else if (gt = Z(b), typeof gt == "function") for (b = gt.call(b), Qe = 0; !(rt = b.next()).done; ) rt = rt.value, gt = Pe + yt(rt, Qe++), Ct += Ne(rt, B, be, gt, Ye);
    else if (rt === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Ct;
  }
  function At(b, B, be) {
    if (b == null) return b;
    var Pe = [], Ye = 0;
    return Ne(b, Pe, "", "", function(rt) {
      return B.call(be, rt, Ye++);
    }), Pe;
  }
  function ht(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(function(be) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = be);
      }, function(be) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = be);
      }), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var nt = { current: null }, Y = { transition: null }, ye = { ReactCurrentDispatcher: nt, ReactCurrentBatchConfig: Y, ReactCurrentOwner: Re };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Et.Children = { map: At, forEach: function(b, B, be) {
    At(b, function() {
      B.apply(this, arguments);
    }, be);
  }, count: function(b) {
    var B = 0;
    return At(b, function() {
      B++;
    }), B;
  }, toArray: function(b) {
    return At(b, function(B) {
      return B;
    }) || [];
  }, only: function(b) {
    if (!Nt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, Et.Component = ct, Et.Fragment = A, Et.Profiler = bt, Et.PureComponent = an, Et.StrictMode = it, Et.Suspense = Ze, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ye, Et.act = ne, Et.cloneElement = function(b, B, be) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Pe = le({}, b.props), Ye = b.key, rt = b.ref, Ct = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (rt = B.ref, Ct = Re.current), B.key !== void 0 && (Ye = "" + B.key), b.type && b.type.defaultProps) var Qe = b.type.defaultProps;
      for (gt in B) Dt.call(B, gt) && !ft.hasOwnProperty(gt) && (Pe[gt] = B[gt] === void 0 && Qe !== void 0 ? Qe[gt] : B[gt]);
    }
    var gt = arguments.length - 2;
    if (gt === 1) Pe.children = be;
    else if (1 < gt) {
      Qe = Array(gt);
      for (var Pt = 0; Pt < gt; Pt++) Qe[Pt] = arguments[Pt + 2];
      Pe.children = Qe;
    }
    return { $$typeof: q, type: b.type, key: Ye, ref: rt, props: Pe, _owner: Ct };
  }, Et.createContext = function(b) {
    return b = { $$typeof: lt, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: _t, _context: b }, b.Consumer = b;
  }, Et.createElement = He, Et.createFactory = function(b) {
    var B = He.bind(null, b);
    return B.type = b, B;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, Et.isValidElement = Nt, Et.lazy = function(b) {
    return { $$typeof: se, _payload: { _status: -1, _result: b }, _init: ht };
  }, Et.memo = function(b, B) {
    return { $$typeof: Ee, type: b, compare: B === void 0 ? null : B };
  }, Et.startTransition = function(b) {
    var B = Y.transition;
    Y.transition = {};
    try {
      b();
    } finally {
      Y.transition = B;
    }
  }, Et.unstable_act = ne, Et.useCallback = function(b, B) {
    return nt.current.useCallback(b, B);
  }, Et.useContext = function(b) {
    return nt.current.useContext(b);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(b) {
    return nt.current.useDeferredValue(b);
  }, Et.useEffect = function(b, B) {
    return nt.current.useEffect(b, B);
  }, Et.useId = function() {
    return nt.current.useId();
  }, Et.useImperativeHandle = function(b, B, be) {
    return nt.current.useImperativeHandle(b, B, be);
  }, Et.useInsertionEffect = function(b, B) {
    return nt.current.useInsertionEffect(b, B);
  }, Et.useLayoutEffect = function(b, B) {
    return nt.current.useLayoutEffect(b, B);
  }, Et.useMemo = function(b, B) {
    return nt.current.useMemo(b, B);
  }, Et.useReducer = function(b, B, be) {
    return nt.current.useReducer(b, B, be);
  }, Et.useRef = function(b) {
    return nt.current.useRef(b);
  }, Et.useState = function(b) {
    return nt.current.useState(b);
  }, Et.useSyncExternalStore = function(b, B, be) {
    return nt.current.useSyncExternalStore(b, B, be);
  }, Et.useTransition = function() {
    return nt.current.useTransition();
  }, Et.version = "18.3.1", Et;
}
var Zp = { exports: {} };
Zp.exports;
var JR;
function eD() {
  return JR || (JR = 1, function(q, pe) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var it = "18.3.1", bt = Symbol.for("react.element"), _t = Symbol.for("react.portal"), lt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ze = Symbol.for("react.profiler"), Ee = Symbol.for("react.provider"), se = Symbol.for("react.context"), Me = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), ct = Symbol.for("react.offscreen"), Pn = Symbol.iterator, an = "@@iterator";
      function ut(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Pn && h[Pn] || h[an];
        return typeof C == "function" ? C : null;
      }
      var ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Dt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Rn = null;
      function Nt(h) {
        Rn = h;
      }
      He.setExtraStackFrame = function(h) {
        Rn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Rn && (h += Rn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var dn = !1, It = !1, yt = !1, Ne = !1, At = !1, ht = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: Dt,
        ReactCurrentOwner: ft
      };
      ht.ReactDebugCurrentFrame = He, ht.ReactCurrentActQueue = Re;
      function nt(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          ye("warn", h, N);
        }
      }
      function Y(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), j = 1; j < C; j++)
            N[j - 1] = arguments[j];
          ye("error", h, N);
        }
      }
      function ye(h, C, N) {
        {
          var j = ht.ReactDebugCurrentFrame, X = j.getStackAddendum();
          X !== "" && (C += "%s", N = N.concat([X]));
          var me = N.map(function(ce) {
            return String(ce);
          });
          me.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, me);
        }
      }
      var ne = {};
      function b(h, C) {
        {
          var N = h.constructor, j = N && (N.displayName || N.name) || "ReactClass", X = j + "." + C;
          if (ne[X])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, j), ne[X] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          b(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, j) {
          b(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, j) {
          b(h, "setState");
        }
      }, be = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ye(h, C, N) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = N || B;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var rt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ct = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              nt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Qe in rt)
          rt.hasOwnProperty(Qe) && Ct(Qe, rt[Qe]);
      }
      function gt() {
      }
      gt.prototype = Ye.prototype;
      function Pt(h, C, N) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = N || B;
      }
      var On = Pt.prototype = new gt();
      On.constructor = Pt, be(On, Ye.prototype), On.isPureReactComponent = !0;
      function Gn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ar = Array.isArray;
      function Ln(h) {
        return ar(h);
      }
      function Er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Vn(h) {
        try {
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function fa(h) {
        if (Vn(h))
          return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(h)), Nn(h);
      }
      function Wa(h, C, N) {
        var j = h.displayName;
        if (j)
          return j;
        var X = C.displayName || C.name || "";
        return X !== "" ? N + "(" + X + ")" : N;
      }
      function kr(h) {
        return h.displayName || "Context";
      }
      function Bn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case lt:
            return "Fragment";
          case _t:
            return "Portal";
          case Ze:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case se:
              var C = h;
              return kr(C) + ".Consumer";
            case Ee:
              var N = h;
              return kr(N._context) + ".Provider";
            case Me:
              return Wa(h, h.render, "ForwardRef");
            case le:
              var j = h.displayName || null;
              return j !== null ? j : Bn(h.type) || "Memo";
            case we: {
              var X = h, me = X._payload, ce = X._init;
              try {
                return Bn(ce(me));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Cr, Ga, Mn;
      Mn = {};
      function ir(h) {
        if (qn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (qn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Oi(h, C) {
        var N = function() {
          Cr || (Cr = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function da(h, C) {
        var N = function() {
          Ga || (Ga = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function J(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Bn(ft.current.type);
          Mn[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var ke = function(h, C, N, j, X, me, ce) {
        var Ae = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: bt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ce,
          // Record the component responsible for creating this element.
          _owner: me
        };
        return Ae._store = {}, Object.defineProperty(Ae._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ae, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: j
        }), Object.defineProperty(Ae, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ae.props), Object.freeze(Ae)), Ae;
      };
      function Je(h, C, N) {
        var j, X = {}, me = null, ce = null, Ae = null, tt = null;
        if (C != null) {
          ir(C) && (ce = C.ref, J(C)), $r(C) && (fa(C.key), me = "" + C.key), Ae = C.__self === void 0 ? null : C.__self, tt = C.__source === void 0 ? null : C.__source;
          for (j in C)
            qn.call(C, j) && !Kn.hasOwnProperty(j) && (X[j] = C[j]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          X.children = N;
        else if (jt > 1) {
          for (var Wt = Array(jt), Gt = 0; Gt < jt; Gt++)
            Wt[Gt] = arguments[Gt + 2];
          Object.freeze && Object.freeze(Wt), X.children = Wt;
        }
        if (h && h.defaultProps) {
          var Ke = h.defaultProps;
          for (j in Ke)
            X[j] === void 0 && (X[j] = Ke[j]);
        }
        if (me || ce) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          me && Oi(X, Zt), ce && da(X, Zt);
        }
        return ke(h, me, ce, Ae, tt, ft.current, X);
      }
      function Mt(h, C) {
        var N = ke(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function ln(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var j, X = be({}, h.props), me = h.key, ce = h.ref, Ae = h._self, tt = h._source, jt = h._owner;
        if (C != null) {
          ir(C) && (ce = C.ref, jt = ft.current), $r(C) && (fa(C.key), me = "" + C.key);
          var Wt;
          h.type && h.type.defaultProps && (Wt = h.type.defaultProps);
          for (j in C)
            qn.call(C, j) && !Kn.hasOwnProperty(j) && (C[j] === void 0 && Wt !== void 0 ? X[j] = Wt[j] : X[j] = C[j]);
        }
        var Gt = arguments.length - 2;
        if (Gt === 1)
          X.children = N;
        else if (Gt > 1) {
          for (var Ke = Array(Gt), Zt = 0; Zt < Gt; Zt++)
            Ke[Zt] = arguments[Zt + 2];
          X.children = Ke;
        }
        return ke(h.type, me, ce, Ae, tt, jt, X);
      }
      function un(h) {
        return typeof h == "object" && h !== null && h.$$typeof === bt;
      }
      var on = ".", Xn = ":";
      function nn(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, j = h.replace(C, function(X) {
          return N[X];
        });
        return "$" + j;
      }
      var $t = !1, zt = /\/+/g;
      function pa(h) {
        return h.replace(zt, "$&/");
      }
      function ba(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (fa(h.key), nn("" + h.key)) : C.toString(36);
      }
      function Da(h, C, N, j, X) {
        var me = typeof h;
        (me === "undefined" || me === "boolean") && (h = null);
        var ce = !1;
        if (h === null)
          ce = !0;
        else
          switch (me) {
            case "string":
            case "number":
              ce = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case bt:
                case _t:
                  ce = !0;
              }
          }
        if (ce) {
          var Ae = h, tt = X(Ae), jt = j === "" ? on + ba(Ae, 0) : j;
          if (Ln(tt)) {
            var Wt = "";
            jt != null && (Wt = pa(jt) + "/"), Da(tt, C, Wt, "", function(Xf) {
              return Xf;
            });
          } else tt != null && (un(tt) && (tt.key && (!Ae || Ae.key !== tt.key) && fa(tt.key), tt = Mt(
            tt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (tt.key && (!Ae || Ae.key !== tt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + tt.key) + "/"
            ) : "") + jt
          )), C.push(tt));
          return 1;
        }
        var Gt, Ke, Zt = 0, wn = j === "" ? on : j + Xn;
        if (Ln(h))
          for (var Jl = 0; Jl < h.length; Jl++)
            Gt = h[Jl], Ke = wn + ba(Gt, Jl), Zt += Da(Gt, C, N, Ke, X);
        else {
          var Go = ut(h);
          if (typeof Go == "function") {
            var Pi = h;
            Go === Pi.entries && ($t || nt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Zl = Go.call(Pi), qo, Kf = 0; !(qo = Zl.next()).done; )
              Gt = qo.value, Ke = wn + ba(Gt, Kf++), Zt += Da(Gt, C, N, Ke, X);
          } else if (me === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Li(h, C, N) {
        if (h == null)
          return h;
        var j = [], X = 0;
        return Da(h, j, "", "", function(me) {
          return C.call(N, me, X++);
        }), j;
      }
      function Il(h) {
        var C = 0;
        return Li(h, function() {
          C++;
        }), C;
      }
      function $l(h, C, N) {
        Li(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Ni(h) {
        return Li(h, function(C) {
          return C;
        }) || [];
      }
      function Ql(h) {
        if (!un(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function oi(h) {
        var C = {
          $$typeof: se,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Ee,
          _context: C
        };
        var N = !1, j = !1, X = !1;
        {
          var me = {
            $$typeof: se,
            _context: C
          };
          Object.defineProperties(me, {
            Provider: {
              get: function() {
                return j || (j = !0, Y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ce) {
                C.Provider = ce;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ce) {
                C._currentValue = ce;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ce) {
                C._currentValue2 = ce;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ce) {
                C._threadCount = ce;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ce) {
                X || (nt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ce), X = !0);
              }
            }
          }), C.Consumer = me;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, lr = 0, ha = 1, Qr = 2;
      function si(h) {
        if (h._status === va) {
          var C = h._result, N = C();
          if (N.then(function(me) {
            if (h._status === lr || h._status === va) {
              var ce = h;
              ce._status = ha, ce._result = me;
            }
          }, function(me) {
            if (h._status === lr || h._status === va) {
              var ce = h;
              ce._status = Qr, ce._result = me;
            }
          }), h._status === va) {
            var j = h;
            j._status = lr, j._result = N;
          }
        }
        if (h._status === ha) {
          var X = h._result;
          return X === void 0 && Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function ci(h) {
        var C = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, N = {
          $$typeof: we,
          _payload: C,
          _init: si
        };
        {
          var j, X;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return j;
              },
              set: function(me) {
                Y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), j = me, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(me) {
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = me, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function Mi(h) {
        h != null && h.$$typeof === le ? Y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Y("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Y("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Me,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(j) {
              N = j, !h.name && !h.displayName && (h.displayName = j);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === lt || h === Ze || At || h === S || h === Z || h === Fe || Ne || h === ct || dn || It || yt || typeof h == "object" && h !== null && (h.$$typeof === we || h.$$typeof === le || h.$$typeof === Ee || h.$$typeof === se || h.$$typeof === Me || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function re(h, C) {
        I(h) || Y("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: le,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var j;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return j;
            },
            set: function(X) {
              j = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return N;
      }
      function ie() {
        var h = ze.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ot(h) {
        var C = ie();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ie(h) {
        var C = ie();
        return C.useState(h);
      }
      function dt(h, C, N) {
        var j = ie();
        return j.useReducer(h, C, N);
      }
      function et(h) {
        var C = ie();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var N = ie();
        return N.useEffect(h, C);
      }
      function rn(h, C) {
        var N = ie();
        return N.useInsertionEffect(h, C);
      }
      function sn(h, C) {
        var N = ie();
        return N.useLayoutEffect(h, C);
      }
      function Rr(h, C) {
        var N = ie();
        return N.useCallback(h, C);
      }
      function qa(h, C) {
        var N = ie();
        return N.useMemo(h, C);
      }
      function Ut(h, C, N) {
        var j = ie();
        return j.useImperativeHandle(h, C, N);
      }
      function pn(h, C) {
        {
          var N = ie();
          return N.useDebugValue(h, C);
        }
      }
      function Ge() {
        var h = ie();
        return h.useTransition();
      }
      function fi(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function zi() {
        var h = ie();
        return h.useId();
      }
      function ic(h, C, N) {
        var j = ie();
        return j.useSyncExternalStore(h, C, N);
      }
      var Ui = 0, ll, Wr, Bo, Or, Yo, lc, uc;
      function Ai() {
      }
      Ai.__reactDisabledLog = !0;
      function ul() {
        {
          if (Ui === 0) {
            ll = console.log, Wr = console.info, Bo = console.warn, Or = console.error, Yo = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ai,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ui++;
        }
      }
      function Gr() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: be({}, h, {
                value: ll
              }),
              info: be({}, h, {
                value: Wr
              }),
              warn: be({}, h, {
                value: Bo
              }),
              error: be({}, h, {
                value: Or
              }),
              group: be({}, h, {
                value: Yo
              }),
              groupCollapsed: be({}, h, {
                value: lc
              }),
              groupEnd: be({}, h, {
                value: uc
              })
            });
          }
          Ui < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = ht.ReactCurrentDispatcher, ol;
      function ju(h, C, N) {
        {
          if (ol === void 0)
            try {
              throw Error();
            } catch (X) {
              var j = X.stack.trim().match(/\n( *(at )?)/);
              ol = j && j[1] || "";
            }
          return `
` + ol + h;
        }
      }
      var ji = !1, Wl;
      {
        var Gl = typeof WeakMap == "function" ? WeakMap : Map;
        Wl = new Gl();
      }
      function sl(h, C) {
        if (!h || ji)
          return "";
        {
          var N = Wl.get(h);
          if (N !== void 0)
            return N;
        }
        var j;
        ji = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var me;
        me = di.current, di.current = null, ul();
        try {
          if (C) {
            var ce = function() {
              throw Error();
            };
            if (Object.defineProperty(ce.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ce, []);
              } catch (wn) {
                j = wn;
              }
              Reflect.construct(h, [], ce);
            } else {
              try {
                ce.call();
              } catch (wn) {
                j = wn;
              }
              h.call(ce.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wn) {
              j = wn;
            }
            h();
          }
        } catch (wn) {
          if (wn && j && typeof wn.stack == "string") {
            for (var Ae = wn.stack.split(`
`), tt = j.stack.split(`
`), jt = Ae.length - 1, Wt = tt.length - 1; jt >= 1 && Wt >= 0 && Ae[jt] !== tt[Wt]; )
              Wt--;
            for (; jt >= 1 && Wt >= 0; jt--, Wt--)
              if (Ae[jt] !== tt[Wt]) {
                if (jt !== 1 || Wt !== 1)
                  do
                    if (jt--, Wt--, Wt < 0 || Ae[jt] !== tt[Wt]) {
                      var Gt = `
` + Ae[jt].replace(" at new ", " at ");
                      return h.displayName && Gt.includes("<anonymous>") && (Gt = Gt.replace("<anonymous>", h.displayName)), typeof h == "function" && Wl.set(h, Gt), Gt;
                    }
                  while (jt >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          ji = !1, di.current = me, Gr(), Error.prepareStackTrace = X;
        }
        var Ke = h ? h.displayName || h.name : "", Zt = Ke ? ju(Ke) : "";
        return typeof h == "function" && Wl.set(h, Zt), Zt;
      }
      function Io(h, C, N) {
        return sl(h, !1);
      }
      function $o(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Rt(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return sl(h, $o(h));
        if (typeof h == "string")
          return ju(h);
        switch (h) {
          case Z:
            return ju("Suspense");
          case Fe:
            return ju("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Me:
              return Io(h.render);
            case le:
              return Rt(h.type, C, N);
            case we: {
              var j = h, X = j._payload, me = j._init;
              try {
                return Rt(me(X), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, Fu = ht.ReactDebugCurrentFrame;
      function Tt(h) {
        if (h) {
          var C = h._owner, N = Rt(h.type, h._source, C ? C.type : null);
          Fu.setExtraStackFrame(N);
        } else
          Fu.setExtraStackFrame(null);
      }
      function oc(h, C, N, j, X) {
        {
          var me = Function.call.bind(qn);
          for (var ce in h)
            if (me(h, ce)) {
              var Ae = void 0;
              try {
                if (typeof h[ce] != "function") {
                  var tt = Error((j || "React class") + ": " + N + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw tt.name = "Invariant Violation", tt;
                }
                Ae = h[ce](C, ce, j, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                Ae = jt;
              }
              Ae && !(Ae instanceof Error) && (Tt(X), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", j || "React class", N, ce, typeof Ae), Tt(null)), Ae instanceof Error && !(Ae.message in Qo) && (Qo[Ae.message] = !0, Tt(X), Y("Failed %s type: %s", N, Ae.message), Tt(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, N = Rt(h.type, h._source, C ? C.type : null);
          Nt(N);
        } else
          Nt(null);
      }
      var Ve;
      Ve = !1;
      function ql() {
        if (ft.current) {
          var h = Bn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Jn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function qr(h) {
        return h != null ? Jn(h.__source) : "";
      }
      var Lr = {};
      function vi(h) {
        var C = ql();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function gn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = vi(C);
          if (!Lr[N]) {
            Lr[N] = !0;
            var j = "";
            h && h._owner && h._owner !== ft.current && (j = " It was passed a child from " + Bn(h._owner.type) + "."), pi(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, j), pi(null);
          }
        }
      }
      function Qt(h, C) {
        if (typeof h == "object") {
          if (Ln(h))
            for (var N = 0; N < h.length; N++) {
              var j = h[N];
              un(j) && gn(j, C);
            }
          else if (un(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = ut(h);
            if (typeof X == "function" && X !== h.entries)
              for (var me = X.call(h), ce; !(ce = me.next()).done; )
                un(ce.value) && gn(ce.value, C);
          }
        }
      }
      function Ka(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Me || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            N = C.propTypes;
          else
            return;
          if (N) {
            var j = Bn(C);
            oc(N, h.props, "prop", j, h);
          } else if (C.PropTypes !== void 0 && !Ve) {
            Ve = !0;
            var X = Bn(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ka(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var j = C[N];
            if (j !== "children" && j !== "key") {
              pi(h), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", j), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), Y("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function Tr(h, C, N) {
        var j = I(h);
        if (!j) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = qr(C);
          me ? X += me : X += ql();
          var ce;
          h === null ? ce = "null" : Ln(h) ? ce = "array" : h !== void 0 && h.$$typeof === bt ? (ce = "<" + (Bn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, X);
        }
        var Ae = Je.apply(this, arguments);
        if (Ae == null)
          return Ae;
        if (j)
          for (var tt = 2; tt < arguments.length; tt++)
            Qt(arguments[tt], h);
        return h === lt ? ka(Ae) : Ka(Ae), Ae;
      }
      var Nr = !1;
      function qf(h) {
        var C = Tr.bind(null, h);
        return C.type = h, Nr || (Nr = !0, nt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return nt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Hu(h, C, N) {
        for (var j = ln.apply(this, arguments), X = 2; X < arguments.length; X++)
          Qt(arguments[X], j.type);
        return Ka(j), j;
      }
      function Kl(h, C) {
        var N = Dt.transition;
        Dt.transition = {};
        var j = Dt.transition;
        Dt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Dt.transition = N, N === null && j._updatedFibers) {
            var X = j._updatedFibers.size;
            X > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), j._updatedFibers.clear();
          }
        }
      }
      var Pu = !1, Vu = null;
      function Xl(h) {
        if (Vu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = q && q[C];
            Vu = N.call(q, "timers").setImmediate;
          } catch {
            Vu = function(X) {
              Pu === !1 && (Pu = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var me = new MessageChannel();
              me.port1.onmessage = X, me.port2.postMessage(void 0);
            };
          }
        return Vu(h);
      }
      var Oa = 0, La = !1;
      function cl(h) {
        {
          var C = Oa;
          Oa++, Re.current === null && (Re.current = []);
          var N = Re.isBatchingLegacy, j;
          try {
            if (Re.isBatchingLegacy = !0, j = h(), !N && Re.didScheduleLegacyUpdate) {
              var X = Re.current;
              X !== null && (Re.didScheduleLegacyUpdate = !1, Hi(X));
            }
          } catch (Ke) {
            throw Fi(C), Ke;
          } finally {
            Re.isBatchingLegacy = N;
          }
          if (j !== null && typeof j == "object" && typeof j.then == "function") {
            var me = j, ce = !1, Ae = {
              then: function(Ke, Zt) {
                ce = !0, me.then(function(wn) {
                  Fi(C), Oa === 0 ? Bu(wn, Ke, Zt) : Ke(wn);
                }, function(wn) {
                  Fi(C), Zt(wn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ce || (La = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ae;
          } else {
            var tt = j;
            if (Fi(C), Oa === 0) {
              var jt = Re.current;
              jt !== null && (Hi(jt), Re.current = null);
              var Wt = {
                then: function(Ke, Zt) {
                  Re.current === null ? (Re.current = [], Bu(tt, Ke, Zt)) : Ke(tt);
                }
              };
              return Wt;
            } else {
              var Gt = {
                then: function(Ke, Zt) {
                  Ke(tt);
                }
              };
              return Gt;
            }
          }
        }
      }
      function Fi(h) {
        h !== Oa - 1 && Y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function Bu(h, C, N) {
        {
          var j = Re.current;
          if (j !== null)
            try {
              Hi(j), Xl(function() {
                j.length === 0 ? (Re.current = null, C(h)) : Bu(h, C, N);
              });
            } catch (X) {
              N(X);
            }
          else
            C(h);
        }
      }
      var fl = !1;
      function Hi(h) {
        if (!fl) {
          fl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (j) {
            throw h = h.slice(C + 1), j;
          } finally {
            fl = !1;
          }
        }
      }
      var Yu = Tr, Wo = Hu, Na = qf, Iu = {
        map: Li,
        forEach: $l,
        count: Il,
        toArray: Ni,
        only: Ql
      };
      pe.Children = Iu, pe.Component = Ye, pe.Fragment = lt, pe.Profiler = Ze, pe.PureComponent = Pt, pe.StrictMode = S, pe.Suspense = Z, pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ht, pe.act = cl, pe.cloneElement = Wo, pe.createContext = oi, pe.createElement = Yu, pe.createFactory = Na, pe.createRef = Gn, pe.forwardRef = Mi, pe.isValidElement = un, pe.lazy = ci, pe.memo = re, pe.startTransition = Kl, pe.unstable_act = cl, pe.useCallback = Rr, pe.useContext = ot, pe.useDebugValue = pn, pe.useDeferredValue = fi, pe.useEffect = Tn, pe.useId = zi, pe.useImperativeHandle = Ut, pe.useInsertionEffect = rn, pe.useLayoutEffect = sn, pe.useMemo = qa, pe.useReducer = dt, pe.useRef = et, pe.useState = Ie, pe.useSyncExternalStore = ic, pe.useTransition = Ge, pe.version = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var tD = {};
tD.NODE_ENV === "production" ? v0.exports = Zb() : v0.exports = eD();
var Vo = v0.exports;
const nD = /* @__PURE__ */ Jb(Vo);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function rD() {
  if (ZR) return Kp;
  ZR = 1;
  var q = Vo, pe = Symbol.for("react.element"), A = Symbol.for("react.fragment"), it = Object.prototype.hasOwnProperty, bt = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function lt(S, Ze, Ee) {
    var se, Me = {}, Z = null, Fe = null;
    Ee !== void 0 && (Z = "" + Ee), Ze.key !== void 0 && (Z = "" + Ze.key), Ze.ref !== void 0 && (Fe = Ze.ref);
    for (se in Ze) it.call(Ze, se) && !_t.hasOwnProperty(se) && (Me[se] = Ze[se]);
    if (S && S.defaultProps) for (se in Ze = S.defaultProps, Ze) Me[se] === void 0 && (Me[se] = Ze[se]);
    return { $$typeof: pe, type: S, key: Z, ref: Fe, props: Me, _owner: bt.current };
  }
  return Kp.Fragment = A, Kp.jsx = lt, Kp.jsxs = lt, Kp;
}
var Xp = {}, eT;
function aD() {
  if (eT) return Xp;
  eT = 1;
  var q = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return q.NODE_ENV !== "production" && function() {
    var pe = Vo, A = Symbol.for("react.element"), it = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), _t = Symbol.for("react.strict_mode"), lt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ze = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), we = Symbol.iterator, ct = "@@iterator";
    function Pn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = we && R[we] || R[ct];
      return typeof I == "function" ? I : null;
    }
    var an = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ut(R) {
      {
        for (var I = arguments.length, re = new Array(I > 1 ? I - 1 : 0), ie = 1; ie < I; ie++)
          re[ie - 1] = arguments[ie];
        ze("error", R, re);
      }
    }
    function ze(R, I, re) {
      {
        var ie = an.ReactDebugCurrentFrame, ot = ie.getStackAddendum();
        ot !== "" && (I += "%s", re = re.concat([ot]));
        var Ie = re.map(function(dt) {
          return String(dt);
        });
        Ie.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ie);
      }
    }
    var Dt = !1, Re = !1, ft = !1, He = !1, Rn = !1, Nt;
    Nt = Symbol.for("react.module.reference");
    function dn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === bt || R === lt || Rn || R === _t || R === se || R === Me || He || R === le || Dt || Re || ft || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === Ze || R.$$typeof === Ee || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Nt || R.getModuleId !== void 0));
    }
    function It(R, I, re) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var ot = I.displayName || I.name || "";
      return ot !== "" ? re + "(" + ot + ")" : re;
    }
    function yt(R) {
      return R.displayName || "Context";
    }
    function Ne(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ut("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case bt:
          return "Fragment";
        case it:
          return "Portal";
        case lt:
          return "Profiler";
        case _t:
          return "StrictMode";
        case se:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ze:
            var I = R;
            return yt(I) + ".Consumer";
          case S:
            var re = R;
            return yt(re._context) + ".Provider";
          case Ee:
            return It(R, R.render, "ForwardRef");
          case Z:
            var ie = R.displayName || null;
            return ie !== null ? ie : Ne(R.type) || "Memo";
          case Fe: {
            var ot = R, Ie = ot._payload, dt = ot._init;
            try {
              return Ne(dt(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, ht = 0, nt, Y, ye, ne, b, B, be;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (ht === 0) {
          nt = console.log, Y = console.info, ye = console.warn, ne = console.error, b = console.group, B = console.groupCollapsed, be = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        ht++;
      }
    }
    function rt() {
      {
        if (ht--, ht === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: nt
            }),
            info: At({}, R, {
              value: Y
            }),
            warn: At({}, R, {
              value: ye
            }),
            error: At({}, R, {
              value: ne
            }),
            group: At({}, R, {
              value: b
            }),
            groupCollapsed: At({}, R, {
              value: B
            }),
            groupEnd: At({}, R, {
              value: be
            })
          });
        }
        ht < 0 && ut("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ct = an.ReactCurrentDispatcher, Qe;
    function gt(R, I, re) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (ot) {
            var ie = ot.stack.trim().match(/\n( *(at )?)/);
            Qe = ie && ie[1] || "";
          }
        return `
` + Qe + R;
      }
    }
    var Pt = !1, On;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      On = new Gn();
    }
    function ar(R, I) {
      if (!R || Pt)
        return "";
      {
        var re = On.get(R);
        if (re !== void 0)
          return re;
      }
      var ie;
      Pt = !0;
      var ot = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = Ct.current, Ct.current = null, Ye();
      try {
        if (I) {
          var dt = function() {
            throw Error();
          };
          if (Object.defineProperty(dt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(dt, []);
            } catch (pn) {
              ie = pn;
            }
            Reflect.construct(R, [], dt);
          } else {
            try {
              dt.call();
            } catch (pn) {
              ie = pn;
            }
            R.call(dt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pn) {
            ie = pn;
          }
          R();
        }
      } catch (pn) {
        if (pn && ie && typeof pn.stack == "string") {
          for (var et = pn.stack.split(`
`), Tn = ie.stack.split(`
`), rn = et.length - 1, sn = Tn.length - 1; rn >= 1 && sn >= 0 && et[rn] !== Tn[sn]; )
            sn--;
          for (; rn >= 1 && sn >= 0; rn--, sn--)
            if (et[rn] !== Tn[sn]) {
              if (rn !== 1 || sn !== 1)
                do
                  if (rn--, sn--, sn < 0 || et[rn] !== Tn[sn]) {
                    var Rr = `
` + et[rn].replace(" at new ", " at ");
                    return R.displayName && Rr.includes("<anonymous>") && (Rr = Rr.replace("<anonymous>", R.displayName)), typeof R == "function" && On.set(R, Rr), Rr;
                  }
                while (rn >= 1 && sn >= 0);
              break;
            }
        }
      } finally {
        Pt = !1, Ct.current = Ie, rt(), Error.prepareStackTrace = ot;
      }
      var qa = R ? R.displayName || R.name : "", Ut = qa ? gt(qa) : "";
      return typeof R == "function" && On.set(R, Ut), Ut;
    }
    function Ln(R, I, re) {
      return ar(R, !1);
    }
    function Er(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Vn(R, I, re) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ar(R, Er(R));
      if (typeof R == "string")
        return gt(R);
      switch (R) {
        case se:
          return gt("Suspense");
        case Me:
          return gt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ee:
            return Ln(R.render);
          case Z:
            return Vn(R.type, I, re);
          case Fe: {
            var ie = R, ot = ie._payload, Ie = ie._init;
            try {
              return Vn(Ie(ot), I, re);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, fa = {}, Wa = an.ReactDebugCurrentFrame;
    function kr(R) {
      if (R) {
        var I = R._owner, re = Vn(R.type, R._source, I ? I.type : null);
        Wa.setExtraStackFrame(re);
      } else
        Wa.setExtraStackFrame(null);
    }
    function Bn(R, I, re, ie, ot) {
      {
        var Ie = Function.call.bind(Nn);
        for (var dt in R)
          if (Ie(R, dt)) {
            var et = void 0;
            try {
              if (typeof R[dt] != "function") {
                var Tn = Error((ie || "React class") + ": " + re + " type `" + dt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[dt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              et = R[dt](I, dt, ie, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (rn) {
              et = rn;
            }
            et && !(et instanceof Error) && (kr(ot), ut("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", re, dt, typeof et), kr(null)), et instanceof Error && !(et.message in fa) && (fa[et.message] = !0, kr(ot), ut("Failed %s type: %s", re, et.message), kr(null));
          }
      }
    }
    var qn = Array.isArray;
    function Kn(R) {
      return qn(R);
    }
    function Cr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, re = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return re;
      }
    }
    function Ga(R) {
      try {
        return Mn(R), !1;
      } catch {
        return !0;
      }
    }
    function Mn(R) {
      return "" + R;
    }
    function ir(R) {
      if (Ga(R))
        return ut("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(R)), Mn(R);
    }
    var $r = an.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, J;
    function ke(R) {
      if (Nn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Je(R) {
      if (Nn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, I) {
      typeof R.ref == "string" && $r.current;
    }
    function ln(R, I) {
      {
        var re = function() {
          da || (da = !0, ut("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function un(R, I) {
      {
        var re = function() {
          J || (J = !0, ut("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var on = function(R, I, re, ie, ot, Ie, dt) {
      var et = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: re,
        props: dt,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return et._store = {}, Object.defineProperty(et._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(et, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(et, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ot
      }), Object.freeze && (Object.freeze(et.props), Object.freeze(et)), et;
    };
    function Xn(R, I, re, ie, ot) {
      {
        var Ie, dt = {}, et = null, Tn = null;
        re !== void 0 && (ir(re), et = "" + re), Je(I) && (ir(I.key), et = "" + I.key), ke(I) && (Tn = I.ref, Mt(I, ot));
        for (Ie in I)
          Nn.call(I, Ie) && !Oi.hasOwnProperty(Ie) && (dt[Ie] = I[Ie]);
        if (R && R.defaultProps) {
          var rn = R.defaultProps;
          for (Ie in rn)
            dt[Ie] === void 0 && (dt[Ie] = rn[Ie]);
        }
        if (et || Tn) {
          var sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          et && ln(dt, sn), Tn && un(dt, sn);
        }
        return on(R, et, Tn, ot, ie, $r.current, dt);
      }
    }
    var nn = an.ReactCurrentOwner, $t = an.ReactDebugCurrentFrame;
    function zt(R) {
      if (R) {
        var I = R._owner, re = Vn(R.type, R._source, I ? I.type : null);
        $t.setExtraStackFrame(re);
      } else
        $t.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function ba(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function Da() {
      {
        if (nn.current) {
          var R = Ne(nn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Li(R) {
      return "";
    }
    var Il = {};
    function $l(R) {
      {
        var I = Da();
        if (!I) {
          var re = typeof R == "string" ? R : R.displayName || R.name;
          re && (I = `

Check the top-level render call using <` + re + ">.");
        }
        return I;
      }
    }
    function Ni(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var re = $l(I);
        if (Il[re])
          return;
        Il[re] = !0;
        var ie = "";
        R && R._owner && R._owner !== nn.current && (ie = " It was passed a child from " + Ne(R._owner.type) + "."), zt(R), ut('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, ie), zt(null);
      }
    }
    function Ql(R, I) {
      {
        if (typeof R != "object")
          return;
        if (Kn(R))
          for (var re = 0; re < R.length; re++) {
            var ie = R[re];
            ba(ie) && Ni(ie, I);
          }
        else if (ba(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ot = Pn(R);
          if (typeof ot == "function" && ot !== R.entries)
            for (var Ie = ot.call(R), dt; !(dt = Ie.next()).done; )
              ba(dt.value) && Ni(dt.value, I);
        }
      }
    }
    function oi(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var re;
        if (typeof I == "function")
          re = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === Ee || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === Z))
          re = I.propTypes;
        else
          return;
        if (re) {
          var ie = Ne(I);
          Bn(re, R.props, "prop", ie, R);
        } else if (I.PropTypes !== void 0 && !pa) {
          pa = !0;
          var ot = Ne(I);
          ut("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ot || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && ut("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(R) {
      {
        for (var I = Object.keys(R.props), re = 0; re < I.length; re++) {
          var ie = I[re];
          if (ie !== "children" && ie !== "key") {
            zt(R), ut("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), zt(null);
            break;
          }
        }
        R.ref !== null && (zt(R), ut("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var lr = {};
    function ha(R, I, re, ie, ot, Ie) {
      {
        var dt = dn(R);
        if (!dt) {
          var et = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (et += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Li();
          Tn ? et += Tn : et += Da();
          var rn;
          R === null ? rn = "null" : Kn(R) ? rn = "array" : R !== void 0 && R.$$typeof === A ? (rn = "<" + (Ne(R.type) || "Unknown") + " />", et = " Did you accidentally export a JSX literal instead of a component?") : rn = typeof R, ut("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", rn, et);
        }
        var sn = Xn(R, I, re, ot, Ie);
        if (sn == null)
          return sn;
        if (dt) {
          var Rr = I.children;
          if (Rr !== void 0)
            if (ie)
              if (Kn(Rr)) {
                for (var qa = 0; qa < Rr.length; qa++)
                  Ql(Rr[qa], R);
                Object.freeze && Object.freeze(Rr);
              } else
                ut("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(Rr, R);
        }
        if (Nn.call(I, "key")) {
          var Ut = Ne(R), pn = Object.keys(I).filter(function(zi) {
            return zi !== "key";
          }), Ge = pn.length > 0 ? "{key: someKey, " + pn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lr[Ut + Ge]) {
            var fi = pn.length > 0 ? "{" + pn.join(": ..., ") + ": ...}" : "{}";
            ut(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, Ut, fi, Ut), lr[Ut + Ge] = !0;
          }
        }
        return R === bt ? va(sn) : oi(sn), sn;
      }
    }
    function Qr(R, I, re) {
      return ha(R, I, re, !0);
    }
    function si(R, I, re) {
      return ha(R, I, re, !1);
    }
    var ci = si, Mi = Qr;
    Xp.Fragment = bt, Xp.jsx = ci, Xp.jsxs = Mi;
  }(), Xp;
}
var iD = {};
iD.NODE_ENV === "production" ? p0.exports = rD() : p0.exports = aD();
var Jt = p0.exports, ev = {}, h0 = { exports: {} }, $a = {}, Qm = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function lD() {
  return tT || (tT = 1, function(q) {
    function pe(Y, ye) {
      var ne = Y.length;
      Y.push(ye);
      e: for (; 0 < ne; ) {
        var b = ne - 1 >>> 1, B = Y[b];
        if (0 < bt(B, ye)) Y[b] = ye, Y[ne] = B, ne = b;
        else break e;
      }
    }
    function A(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function it(Y) {
      if (Y.length === 0) return null;
      var ye = Y[0], ne = Y.pop();
      if (ne !== ye) {
        Y[0] = ne;
        e: for (var b = 0, B = Y.length, be = B >>> 1; b < be; ) {
          var Pe = 2 * (b + 1) - 1, Ye = Y[Pe], rt = Pe + 1, Ct = Y[rt];
          if (0 > bt(Ye, ne)) rt < B && 0 > bt(Ct, Ye) ? (Y[b] = Ct, Y[rt] = ne, b = rt) : (Y[b] = Ye, Y[Pe] = ne, b = Pe);
          else if (rt < B && 0 > bt(Ct, ne)) Y[b] = Ct, Y[rt] = ne, b = rt;
          else break e;
        }
      }
      return ye;
    }
    function bt(Y, ye) {
      var ne = Y.sortIndex - ye.sortIndex;
      return ne !== 0 ? ne : Y.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _t = performance;
      q.unstable_now = function() {
        return _t.now();
      };
    } else {
      var lt = Date, S = lt.now();
      q.unstable_now = function() {
        return lt.now() - S;
      };
    }
    var Ze = [], Ee = [], se = 1, Me = null, Z = 3, Fe = !1, le = !1, we = !1, ct = typeof setTimeout == "function" ? setTimeout : null, Pn = typeof clearTimeout == "function" ? clearTimeout : null, an = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ut(Y) {
      for (var ye = A(Ee); ye !== null; ) {
        if (ye.callback === null) it(Ee);
        else if (ye.startTime <= Y) it(Ee), ye.sortIndex = ye.expirationTime, pe(Ze, ye);
        else break;
        ye = A(Ee);
      }
    }
    function ze(Y) {
      if (we = !1, ut(Y), !le) if (A(Ze) !== null) le = !0, ht(Dt);
      else {
        var ye = A(Ee);
        ye !== null && nt(ze, ye.startTime - Y);
      }
    }
    function Dt(Y, ye) {
      le = !1, we && (we = !1, Pn(He), He = -1), Fe = !0;
      var ne = Z;
      try {
        for (ut(ye), Me = A(Ze); Me !== null && (!(Me.expirationTime > ye) || Y && !dn()); ) {
          var b = Me.callback;
          if (typeof b == "function") {
            Me.callback = null, Z = Me.priorityLevel;
            var B = b(Me.expirationTime <= ye);
            ye = q.unstable_now(), typeof B == "function" ? Me.callback = B : Me === A(Ze) && it(Ze), ut(ye);
          } else it(Ze);
          Me = A(Ze);
        }
        if (Me !== null) var be = !0;
        else {
          var Pe = A(Ee);
          Pe !== null && nt(ze, Pe.startTime - ye), be = !1;
        }
        return be;
      } finally {
        Me = null, Z = ne, Fe = !1;
      }
    }
    var Re = !1, ft = null, He = -1, Rn = 5, Nt = -1;
    function dn() {
      return !(q.unstable_now() - Nt < Rn);
    }
    function It() {
      if (ft !== null) {
        var Y = q.unstable_now();
        Nt = Y;
        var ye = !0;
        try {
          ye = ft(!0, Y);
        } finally {
          ye ? yt() : (Re = !1, ft = null);
        }
      } else Re = !1;
    }
    var yt;
    if (typeof an == "function") yt = function() {
      an(It);
    };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), At = Ne.port2;
      Ne.port1.onmessage = It, yt = function() {
        At.postMessage(null);
      };
    } else yt = function() {
      ct(It, 0);
    };
    function ht(Y) {
      ft = Y, Re || (Re = !0, yt());
    }
    function nt(Y, ye) {
      He = ct(function() {
        Y(q.unstable_now());
      }, ye);
    }
    q.unstable_IdlePriority = 5, q.unstable_ImmediatePriority = 1, q.unstable_LowPriority = 4, q.unstable_NormalPriority = 3, q.unstable_Profiling = null, q.unstable_UserBlockingPriority = 2, q.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, q.unstable_continueExecution = function() {
      le || Fe || (le = !0, ht(Dt));
    }, q.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Rn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, q.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, q.unstable_getFirstCallbackNode = function() {
      return A(Ze);
    }, q.unstable_next = function(Y) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = Z;
      }
      var ne = Z;
      Z = ye;
      try {
        return Y();
      } finally {
        Z = ne;
      }
    }, q.unstable_pauseExecution = function() {
    }, q.unstable_requestPaint = function() {
    }, q.unstable_runWithPriority = function(Y, ye) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var ne = Z;
      Z = Y;
      try {
        return ye();
      } finally {
        Z = ne;
      }
    }, q.unstable_scheduleCallback = function(Y, ye, ne) {
      var b = q.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? b + ne : b) : ne = b, Y) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ne + B, Y = { id: se++, callback: ye, priorityLevel: Y, startTime: ne, expirationTime: B, sortIndex: -1 }, ne > b ? (Y.sortIndex = ne, pe(Ee, Y), A(Ze) === null && Y === A(Ee) && (we ? (Pn(He), He = -1) : we = !0, nt(ze, ne - b))) : (Y.sortIndex = B, pe(Ze, Y), le || Fe || (le = !0, ht(Dt))), Y;
    }, q.unstable_shouldYield = dn, q.unstable_wrapCallback = function(Y) {
      var ye = Z;
      return function() {
        var ne = Z;
        Z = ye;
        try {
          return Y.apply(this, arguments);
        } finally {
          Z = ne;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {}, nT;
function uD() {
  return nT || (nT = 1, function(q) {
    var pe = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    pe.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, it = 5;
      function bt(J, ke) {
        var Je = J.length;
        J.push(ke), S(J, ke, Je);
      }
      function _t(J) {
        return J.length === 0 ? null : J[0];
      }
      function lt(J) {
        if (J.length === 0)
          return null;
        var ke = J[0], Je = J.pop();
        return Je !== ke && (J[0] = Je, Ze(J, Je, 0)), ke;
      }
      function S(J, ke, Je) {
        for (var Mt = Je; Mt > 0; ) {
          var ln = Mt - 1 >>> 1, un = J[ln];
          if (Ee(un, ke) > 0)
            J[ln] = ke, J[Mt] = un, Mt = ln;
          else
            return;
        }
      }
      function Ze(J, ke, Je) {
        for (var Mt = Je, ln = J.length, un = ln >>> 1; Mt < un; ) {
          var on = (Mt + 1) * 2 - 1, Xn = J[on], nn = on + 1, $t = J[nn];
          if (Ee(Xn, ke) < 0)
            nn < ln && Ee($t, Xn) < 0 ? (J[Mt] = $t, J[nn] = ke, Mt = nn) : (J[Mt] = Xn, J[on] = ke, Mt = on);
          else if (nn < ln && Ee($t, ke) < 0)
            J[Mt] = $t, J[nn] = ke, Mt = nn;
          else
            return;
        }
      }
      function Ee(J, ke) {
        var Je = J.sortIndex - ke.sortIndex;
        return Je !== 0 ? Je : J.id - ke.id;
      }
      var se = 1, Me = 2, Z = 3, Fe = 4, le = 5;
      function we(J, ke) {
      }
      var ct = typeof performance == "object" && typeof performance.now == "function";
      if (ct) {
        var Pn = performance;
        q.unstable_now = function() {
          return Pn.now();
        };
      } else {
        var an = Date, ut = an.now();
        q.unstable_now = function() {
          return an.now() - ut;
        };
      }
      var ze = 1073741823, Dt = -1, Re = 250, ft = 5e3, He = 1e4, Rn = ze, Nt = [], dn = [], It = 1, yt = null, Ne = Z, At = !1, ht = !1, nt = !1, Y = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(J) {
        for (var ke = _t(dn); ke !== null; ) {
          if (ke.callback === null)
            lt(dn);
          else if (ke.startTime <= J)
            lt(dn), ke.sortIndex = ke.expirationTime, bt(Nt, ke);
          else
            return;
          ke = _t(dn);
        }
      }
      function B(J) {
        if (nt = !1, b(J), !ht)
          if (_t(Nt) !== null)
            ht = !0, Mn(be);
          else {
            var ke = _t(dn);
            ke !== null && ir(B, ke.startTime - J);
          }
      }
      function be(J, ke) {
        ht = !1, nt && (nt = !1, $r()), At = !0;
        var Je = Ne;
        try {
          var Mt;
          if (!A) return Pe(J, ke);
        } finally {
          yt = null, Ne = Je, At = !1;
        }
      }
      function Pe(J, ke) {
        var Je = ke;
        for (b(Je), yt = _t(Nt); yt !== null && !(yt.expirationTime > Je && (!J || Wa())); ) {
          var Mt = yt.callback;
          if (typeof Mt == "function") {
            yt.callback = null, Ne = yt.priorityLevel;
            var ln = yt.expirationTime <= Je, un = Mt(ln);
            Je = q.unstable_now(), typeof un == "function" ? yt.callback = un : yt === _t(Nt) && lt(Nt), b(Je);
          } else
            lt(Nt);
          yt = _t(Nt);
        }
        if (yt !== null)
          return !0;
        var on = _t(dn);
        return on !== null && ir(B, on.startTime - Je), !1;
      }
      function Ye(J, ke) {
        switch (J) {
          case se:
          case Me:
          case Z:
          case Fe:
          case le:
            break;
          default:
            J = Z;
        }
        var Je = Ne;
        Ne = J;
        try {
          return ke();
        } finally {
          Ne = Je;
        }
      }
      function rt(J) {
        var ke;
        switch (Ne) {
          case se:
          case Me:
          case Z:
            ke = Z;
            break;
          default:
            ke = Ne;
            break;
        }
        var Je = Ne;
        Ne = ke;
        try {
          return J();
        } finally {
          Ne = Je;
        }
      }
      function Ct(J) {
        var ke = Ne;
        return function() {
          var Je = Ne;
          Ne = ke;
          try {
            return J.apply(this, arguments);
          } finally {
            Ne = Je;
          }
        };
      }
      function Qe(J, ke, Je) {
        var Mt = q.unstable_now(), ln;
        if (typeof Je == "object" && Je !== null) {
          var un = Je.delay;
          typeof un == "number" && un > 0 ? ln = Mt + un : ln = Mt;
        } else
          ln = Mt;
        var on;
        switch (J) {
          case se:
            on = Dt;
            break;
          case Me:
            on = Re;
            break;
          case le:
            on = Rn;
            break;
          case Fe:
            on = He;
            break;
          case Z:
          default:
            on = ft;
            break;
        }
        var Xn = ln + on, nn = {
          id: It++,
          callback: ke,
          priorityLevel: J,
          startTime: ln,
          expirationTime: Xn,
          sortIndex: -1
        };
        return ln > Mt ? (nn.sortIndex = ln, bt(dn, nn), _t(Nt) === null && nn === _t(dn) && (nt ? $r() : nt = !0, ir(B, ln - Mt))) : (nn.sortIndex = Xn, bt(Nt, nn), !ht && !At && (ht = !0, Mn(be))), nn;
      }
      function gt() {
      }
      function Pt() {
        !ht && !At && (ht = !0, Mn(be));
      }
      function On() {
        return _t(Nt);
      }
      function Gn(J) {
        J.callback = null;
      }
      function ar() {
        return Ne;
      }
      var Ln = !1, Er = null, Vn = -1, Nn = it, fa = -1;
      function Wa() {
        var J = q.unstable_now() - fa;
        return !(J < Nn);
      }
      function kr() {
      }
      function Bn(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Nn = Math.floor(1e3 / J) : Nn = it;
      }
      var qn = function() {
        if (Er !== null) {
          var J = q.unstable_now();
          fa = J;
          var ke = !0, Je = !0;
          try {
            Je = Er(ke, J);
          } finally {
            Je ? Kn() : (Ln = !1, Er = null);
          }
        } else
          Ln = !1;
      }, Kn;
      if (typeof ne == "function")
        Kn = function() {
          ne(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Cr = new MessageChannel(), Ga = Cr.port2;
        Cr.port1.onmessage = qn, Kn = function() {
          Ga.postMessage(null);
        };
      } else
        Kn = function() {
          Y(qn, 0);
        };
      function Mn(J) {
        Er = J, Ln || (Ln = !0, Kn());
      }
      function ir(J, ke) {
        Vn = Y(function() {
          J(q.unstable_now());
        }, ke);
      }
      function $r() {
        ye(Vn), Vn = -1;
      }
      var Oi = kr, da = null;
      q.unstable_IdlePriority = le, q.unstable_ImmediatePriority = se, q.unstable_LowPriority = Fe, q.unstable_NormalPriority = Z, q.unstable_Profiling = da, q.unstable_UserBlockingPriority = Me, q.unstable_cancelCallback = Gn, q.unstable_continueExecution = Pt, q.unstable_forceFrameRate = Bn, q.unstable_getCurrentPriorityLevel = ar, q.unstable_getFirstCallbackNode = On, q.unstable_next = rt, q.unstable_pauseExecution = gt, q.unstable_requestPaint = Oi, q.unstable_runWithPriority = Ye, q.unstable_scheduleCallback = Qe, q.unstable_shouldYield = Wa, q.unstable_wrapCallback = Ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rT;
function oT() {
  if (rT) return Qm.exports;
  rT = 1;
  var q = {};
  return q.NODE_ENV === "production" ? Qm.exports = lD() : Qm.exports = uD(), Qm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function oD() {
  if (aT) return $a;
  aT = 1;
  var q = Vo, pe = oT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var it = /* @__PURE__ */ new Set(), bt = {};
  function _t(n, r) {
    lt(n, r), lt(n + "Capture", r);
  }
  function lt(n, r) {
    for (bt[n] = r, n = 0; n < r.length; n++) it.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ze = Object.prototype.hasOwnProperty, Ee = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, se = {}, Me = {};
  function Z(n) {
    return Ze.call(Me, n) ? !0 : Ze.call(se, n) ? !1 : Ee.test(n) ? Me[n] = !0 : (se[n] = !0, !1);
  }
  function Fe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function le(n, r, l, o) {
    if (r === null || typeof r > "u" || Fe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function we(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ct[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ct[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ct[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ct[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ct[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ct[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ct[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ct[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ct[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Pn = /[\-:]([a-z])/g;
  function an(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Pn,
      an
    );
    ct[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Pn, an);
    ct[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Pn, an);
    ct[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ct[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ct.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ct[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ut(n, r, l, o) {
    var c = ct.hasOwnProperty(r) ? ct[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (le(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var ze = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Dt = Symbol.for("react.element"), Re = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Rn = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), dn = Symbol.for("react.context"), It = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), Ne = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), nt = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function ye(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, b;
  function B(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var be = !1;
  function Pe(n, r) {
    if (!n || be) return "";
    be = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      be = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Ye(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Pe(n.type, !1), n;
      case 11:
        return n = Pe(n.type.render, !1), n;
      case 1:
        return n = Pe(n.type, !0), n;
      default:
        return "";
    }
  }
  function rt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Re:
        return "Portal";
      case Rn:
        return "Profiler";
      case He:
        return "StrictMode";
      case yt:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case dn:
        return (n.displayName || "Context") + ".Consumer";
      case Nt:
        return (n._context.displayName || "Context") + ".Provider";
      case It:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : rt(n.type) || "Memo";
      case ht:
        r = n._payload, n = n._init;
        try {
          return rt(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ct(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return rt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Qe(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function gt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Pt(n) {
    var r = gt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function On(n) {
    n._valueTracker || (n._valueTracker = Pt(n));
  }
  function Gn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = gt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ar(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Ln(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && ut(n, "checked", r, !1);
  }
  function Nn(n, r) {
    Vn(n, r);
    var l = Qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wa(n, r.type, Qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function fa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wa(n, r, l) {
    (r !== "number" || ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var kr = Array.isArray;
  function Bn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Qe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (kr(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Qe(l) };
  }
  function Cr(n, r) {
    var l = Qe(r.value), o = Qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Mn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ir(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, Oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function Je(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Je(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var ln = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function un(n, r) {
    if (r) {
      if (ln[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function on(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Xn = null;
  function nn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, zt = null, pa = null;
  function ba(n) {
    if (n = ss(n)) {
      if (typeof $t != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Ii(r), $t(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    zt ? pa ? pa.push(n) : pa = [n] : zt = n;
  }
  function Li() {
    if (zt) {
      var n = zt, r = pa;
      if (pa = zt = null, ba(n), r) for (n = 0; n < r.length; n++) ba(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function $l() {
  }
  var Ni = !1;
  function Ql(n, r, l) {
    if (Ni) return n(r, l);
    Ni = !0;
    try {
      return Il(n, r, l);
    } finally {
      Ni = !1, (zt !== null || pa !== null) && ($l(), Li());
    }
  }
  function oi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Ii(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var va = !1;
  if (S) try {
    var lr = {};
    Object.defineProperty(lr, "passive", { get: function() {
      va = !0;
    } }), window.addEventListener("test", lr, lr), window.removeEventListener("test", lr, lr);
  } catch {
    va = !1;
  }
  function ha(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Qr = !1, si = null, ci = !1, Mi = null, R = { onError: function(n) {
    Qr = !0, si = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    Qr = !1, si = null, ha.apply(R, arguments);
  }
  function re(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), Qr) {
      if (Qr) {
        var z = si;
        Qr = !1, si = null;
      } else throw Error(A(198));
      ci || (ci = !0, Mi = z);
    }
  }
  function ie(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function ot(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ie(n) {
    if (ie(n) !== n) throw Error(A(188));
  }
  function dt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return Ie(c), n;
          if (d === o) return Ie(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function et(n) {
    return n = dt(n), n !== null ? Tn(n) : null;
  }
  function Tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var rn = pe.unstable_scheduleCallback, sn = pe.unstable_cancelCallback, Rr = pe.unstable_shouldYield, qa = pe.unstable_requestPaint, Ut = pe.unstable_now, pn = pe.unstable_getCurrentPriorityLevel, Ge = pe.unstable_ImmediatePriority, fi = pe.unstable_UserBlockingPriority, zi = pe.unstable_NormalPriority, ic = pe.unstable_LowPriority, Ui = pe.unstable_IdlePriority, ll = null, Wr = null;
  function Bo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ll, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Yo = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / lc | 0) | 0;
  }
  var Ai = 64, ul = 4194304;
  function Gr(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Gr(E) : (d &= m, d !== 0 && (o = Gr(d)));
    } else m = l & ~c, m !== 0 ? o = Gr(m) : d !== 0 && (o = Gr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Or(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ol(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function ju(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Or(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = ol(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Wl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function Gl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function $o(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Rt = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Fu, Tt, oc, pi, Ve, ql = !1, Jn = [], qr = null, Lr = null, vi = null, gn = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), Ka = [], ka = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Tr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Tt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qr = Nr(qr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return vi = Nr(vi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return gn.set(d, Nr(gn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Qt.set(d, Nr(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Hu(n) {
    var r = au(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ot(l), r !== null) {
            n.blockedOn = r, Ve(n.priority, function() {
              oc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Kl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xn = o, l.target.dispatchEvent(o), Xn = null;
      } else return r = ss(l), r !== null && Tt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Pu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Vu() {
    ql = !1, qr !== null && Kl(qr) && (qr = null), Lr !== null && Kl(Lr) && (Lr = null), vi !== null && Kl(vi) && (vi = null), gn.forEach(Pu), Qt.forEach(Pu);
  }
  function Xl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, pe.unstable_scheduleCallback(pe.unstable_NormalPriority, Vu)));
  }
  function Oa(n) {
    function r(c) {
      return Xl(c, n);
    }
    if (0 < Jn.length) {
      Xl(Jn[0], n);
      for (var l = 1; l < Jn.length; l++) {
        var o = Jn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qr !== null && Xl(qr, n), Lr !== null && Xl(Lr, n), vi !== null && Xl(vi, n), gn.forEach(r), Qt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Hu(l), l.blockedOn === null && Ka.shift();
  }
  var La = ze.ReactCurrentBatchConfig, cl = !0;
  function Fi(n, r, l, o) {
    var c = Rt, d = La.transition;
    La.transition = null;
    try {
      Rt = 1, fl(n, r, l, o);
    } finally {
      Rt = c, La.transition = d;
    }
  }
  function Bu(n, r, l, o) {
    var c = Rt, d = La.transition;
    La.transition = null;
    try {
      Rt = 4, fl(n, r, l, o);
    } finally {
      Rt = c, La.transition = d;
    }
  }
  function fl(n, r, l, o) {
    if (cl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Hi, l), Tr(n, o);
      else if (qf(c, n, r, l, o)) o.stopPropagation();
      else if (Tr(n, o), r & 4 && -1 < ka.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && Fu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Yu(n, r, l, o) {
    if (Hi = null, n = nn(o), n = au(n), n !== null) if (r = ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ot(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
  }
  function Wo(n) {
    switch (n) {
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
        switch (pn()) {
          case Ge:
            return 1;
          case fi:
            return 4;
          case zi:
          case ic:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function N(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function j() {
    return !0;
  }
  function X() {
    return !1;
  }
  function me(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? j : X, this.isPropagationStopped = X, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = j);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = j);
    }, persist: function() {
    }, isPersistent: j }), r;
  }
  var ce = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ae = me(ce), tt = ne({}, ce, { view: 0, detail: 0 }), jt = me(tt), Wt, Gt, Ke, Zt = ne({}, tt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ke && (Ke && n.type === "mousemove" ? (Wt = n.screenX - Ke.screenX, Gt = n.screenY - Ke.screenY) : Gt = Wt = 0, Ke = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Gt;
  } }), wn = me(Zt), Jl = ne({}, Zt, { dataTransfer: 0 }), Go = me(Jl), Pi = ne({}, tt, { relatedTarget: 0 }), Zl = me(Pi), qo = ne({}, ce, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = me(qo), sc = ne({}, ce, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = me(sc), tv = ne({}, ce, { data: 0 }), cc = me(tv), nv = {
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
  }, rv = {
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
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Xa() {
    return Gm;
  }
  var qm = ne({}, tt, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = N(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(n) {
    return n.type === "keypress" ? N(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? N(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jf = me(qm), Zf = ne({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = me(Zf), Km = ne({}, tt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), dc = me(Km), iv = ne({}, ce, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = me(iv), Vi = ne({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zn = me(Vi), Bi = [9, 13, 27, 32], Ko = S && "CompositionEvent" in window, dl = null;
  S && "documentMode" in document && (dl = document.documentMode);
  var Xm = S && "TextEvent" in window && !dl, $u = S && (!Ko || dl && 8 < dl && 11 >= dl), lv = " ", uv = !1;
  function pc(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Jm(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (uv = !0, lv);
      case "textInput":
        return n = r.data, n === lv && uv ? null : n;
      default:
        return null;
    }
  }
  function sv(n, r) {
    if (Qu) return n === "compositionend" || !Ko && pc(n, r) ? (n = C(), h = Iu = Na = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return $u && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Zm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Zm[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Da(o), r = ls(r, "onChange"), 0 < r.length && (l = new Ae("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Wu = null, hi = null;
  function ed(n) {
    yc(n, 0);
  }
  function Xo(n) {
    var r = xe(n);
    if (Gn(r)) return n;
  }
  function dv(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), nd = typeof vv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    pv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    Wu && (Wu.detachEvent("onpropertychange", mv), hi = Wu = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Xo(hi)) {
      var r = [];
      fv(r, hi, n, nn(n)), Ql(ed, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (hv(), Wu = r, hi = l, Wu.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Xo(hi);
  }
  function yv(n, r) {
    if (n === "click") return Xo(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return Xo(r);
  }
  function gv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ja = typeof Object.is == "function" ? Object.is : gv;
  function Jo(n, r) {
    if (Ja(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ze.call(r, c) || !Ja(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ev(n, r) {
    var l = Sv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Sv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function pl() {
    for (var n = window, r = ar(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ar(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = pl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Ev(l, d);
          var m = Ev(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var qu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, rd = null, Zo = null, ad = !1;
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Ku == null || Ku !== ar(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Zo && Jo(Zo, o) || (Zo = o, o = ls(rd, "onSelect"), 0 < o.length && (r = new Ae("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xu = { animationend: es("Animation", "AnimationEnd"), animationiteration: es("Animation", "AnimationIteration"), animationstart: es("Animation", "AnimationStart"), transitionend: es("Transition", "TransitionEnd") }, hc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Xu.animationend.animation, delete Xu.animationiteration.animation, delete Xu.animationstart.animation), "TransitionEvent" in window || delete Xu.transitionend.transition);
  function ts(n) {
    if (hc[n]) return hc[n];
    if (!Xu[n]) return n;
    var r = Xu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return hc[n] = r[l];
    return n;
  }
  var Tv = ts("animationend"), wv = ts("animationiteration"), xv = ts("animationstart"), _v = ts("transitionend"), bv = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mi(n, r) {
    bv.set(n, r), _t(r, [n]);
  }
  for (var eu = 0; eu < id.length; eu++) {
    var ld = id[eu], ns = ld.toLowerCase(), ry = ld[0].toUpperCase() + ld.slice(1);
    mi(ns, "on" + ry);
  }
  mi(Tv, "onAnimationEnd"), mi(wv, "onAnimationIteration"), mi(xv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(_v, "onTransitionEnd"), lt("onMouseEnter", ["mouseout", "mouseover"]), lt("onMouseLeave", ["mouseout", "mouseover"]), lt("onPointerEnter", ["pointerout", "pointerover"]), lt("onPointerLeave", ["pointerout", "pointerover"]), _t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, re(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, z), d = T;
        }
      }
    }
    if (ci) throw n = Mi, ci = !1, Mi = null, n;
  }
  function Ft(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function vl(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, it.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || vl(l, !1, n), vl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, vl("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (Wo(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Bu;
        break;
      default:
        c = fl;
    }
    l = c.bind(null, r, l, n), c = void 0, !va || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function od(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = au(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Ql(function() {
      var z = d, Q = nn(l), W = [];
      e: {
        var $ = bv.get(n);
        if ($ !== void 0) {
          var fe = Ae, ge = n;
          switch (n) {
            case "keypress":
              if (N(l) === 0) break e;
            case "keydown":
            case "keyup":
              fe = Jf;
              break;
            case "focusin":
              ge = "focus", fe = Zl;
              break;
            case "focusout":
              ge = "blur", fe = Zl;
              break;
            case "beforeblur":
            case "afterblur":
              fe = Zl;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              fe = wn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              fe = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              fe = dc;
              break;
            case Tv:
            case wv:
            case xv:
              fe = Kf;
              break;
            case _v:
              fe = Kr;
              break;
            case "scroll":
              fe = jt;
              break;
            case "wheel":
              fe = zn;
              break;
            case "copy":
            case "cut":
            case "paste":
              fe = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              fe = fc;
          }
          var Ce = (r & 4) !== 0, Dn = !Ce && n === "scroll", D = Ce ? $ !== null ? $ + "Capture" : null : $;
          Ce = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var K = L.stateNode;
            if (L.tag === 5 && K !== null && (L = K, D !== null && (K = oi(x, D), K != null && Ce.push(Ju(x, K, L)))), Dn) break;
            x = x.return;
          }
          0 < Ce.length && ($ = new fe($, ge, null, l, Q), W.push({ event: $, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", fe = n === "mouseout" || n === "pointerout", $ && l !== Xn && (ge = l.relatedTarget || l.fromElement) && (au(ge) || ge[Yi])) break e;
          if ((fe || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, fe ? (ge = l.relatedTarget || l.toElement, fe = z, ge = ge ? au(ge) : null, ge !== null && (Dn = ie(ge), ge !== Dn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (fe = null, ge = z), fe !== ge)) {
            if (Ce = wn, K = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = fc, K = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = fe == null ? $ : xe(fe), L = ge == null ? $ : xe(ge), $ = new Ce(K, x + "leave", fe, l, Q), $.target = Dn, $.relatedTarget = L, K = null, au(Q) === z && (Ce = new Ce(D, x + "enter", ge, l, Q), Ce.target = L, Ce.relatedTarget = Dn, K = Ce), Dn = K, fe && ge) t: {
              for (Ce = fe, D = ge, x = 0, L = Ce; L; L = tu(L)) x++;
              for (L = 0, K = D; K; K = tu(K)) L++;
              for (; 0 < x - L; ) Ce = tu(Ce), x--;
              for (; 0 < L - x; ) D = tu(D), L--;
              for (; x--; ) {
                if (Ce === D || D !== null && Ce === D.alternate) break t;
                Ce = tu(Ce), D = tu(D);
              }
              Ce = null;
            }
            else Ce = null;
            fe !== null && gc(W, $, fe, Ce, !1), ge !== null && Dn !== null && gc(W, Dn, ge, Ce, !0);
          }
        }
        e: {
          if ($ = z ? xe(z) : window, fe = $.nodeName && $.nodeName.toLowerCase(), fe === "select" || fe === "input" && $.type === "file") var ue = dv;
          else if (cv($)) if (pv) ue = ny;
          else {
            ue = ty;
            var De = ey;
          }
          else (fe = $.nodeName) && fe.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ue = yv);
          if (ue && (ue = ue(n, z))) {
            fv(W, ue, l, Q);
            break e;
          }
          De && De(n, $, z), n === "focusout" && (De = $._wrapperState) && De.controlled && $.type === "number" && Wa($, "number", $.value);
        }
        switch (De = z ? xe(z) : window, n) {
          case "focusin":
            (cv(De) || De.contentEditable === "true") && (Ku = De, rd = z, Zo = null);
            break;
          case "focusout":
            Zo = rd = Ku = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Rv(W, l, Q);
            break;
          case "selectionchange":
            if (qu) break;
          case "keydown":
          case "keyup":
            Rv(W, l, Q);
        }
        var Le;
        if (Ko) e: {
          switch (n) {
            case "compositionstart":
              var Be = "onCompositionStart";
              break e;
            case "compositionend":
              Be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Be = "onCompositionUpdate";
              break e;
          }
          Be = void 0;
        }
        else Qu ? pc(n, l) && (Be = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Be = "onCompositionStart");
        Be && ($u && l.locale !== "ko" && (Qu || Be !== "onCompositionStart" ? Be === "onCompositionEnd" && Qu && (Le = C()) : (Na = Q, Iu = "value" in Na ? Na.value : Na.textContent, Qu = !0)), De = ls(z, Be), 0 < De.length && (Be = new cc(Be, n, null, l, Q), W.push({ event: Be, listeners: De }), Le ? Be.data = Le : (Le = ov(l), Le !== null && (Be.data = Le)))), (Le = Xm ? Jm(n, l) : sv(n, l)) && (z = ls(z, "onBeforeInput"), 0 < z.length && (Q = new cc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: z }), Q.data = Le));
      }
      yc(W, r);
    });
  }
  function Ju(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = oi(n, l), d != null && o.unshift(Ju(n, d, c)), d = oi(n, r), d != null && o.push(Ju(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function gc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = oi(l, d), T != null && m.unshift(Ju(l, T, E))) : c || (T = oi(l, d), T != null && m.push(Ju(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var iy = /\r\n?/g, Dv = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(iy, `
`).replace(Dv, "");
  }
  function Sc(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(A(425));
  }
  function Ec() {
  }
  var nu = null, us = null;
  function ru(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
    return Rc.resolve(null).then(n).catch(Zu);
  } : Cc;
  function Zu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function eo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Oa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Oa(r);
  }
  function Za(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Tc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var to = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + to, os = "__reactProps$" + to, Yi = "__reactContainer$" + to, sd = "__reactEvents$" + to, cd = "__reactListeners$" + to, no = "__reactHandles$" + to;
  function au(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Tc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Tc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function xe(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Ii(n) {
    return n[os] || null;
  }
  var Sn = [], pt = -1;
  function Xr(n) {
    return { current: n };
  }
  function Vt(n) {
    0 > pt || (n.current = Sn[pt], Sn[pt] = null, pt--);
  }
  function en(n, r) {
    pt++, Sn[pt] = n.current, n.current = r;
  }
  var at = {}, vn = Xr(at), Un = Xr(!1), za = at;
  function ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return at;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function En(n) {
    return n = n.childContextTypes, n != null;
  }
  function yi() {
    Vt(Un), Vt(vn);
  }
  function wc(n, r, l) {
    if (vn.current !== at) throw Error(A(168));
    en(vn, r), en(Un, l);
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, Ct(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function iu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || at, za = vn.current, en(vn, n), en(Un, Un.current), !0;
  }
  function xr(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = Lv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Vt(Un), Vt(vn), en(vn, n)) : Vt(Un), en(Un, l);
  }
  var ei = null, cs = !1, fs = !1;
  function hl(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  function fd(n) {
    cs = !0, hl(n);
  }
  function Mr() {
    if (!fs && ei !== null) {
      fs = !0;
      var n = 0, r = Rt;
      try {
        var l = ei;
        for (Rt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, cs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), rn(Ge, Mr), c;
      } finally {
        Rt = r, fs = !1;
      }
    }
    return null;
  }
  var ml = [], yl = 0, ro = null, gl = 0, ur = [], An = 0, lu = null, zr = 1, gi = "";
  function Sl(n, r) {
    ml[yl++] = gl, ml[yl++] = ro, ro = n, gl = r;
  }
  function Nv(n, r, l) {
    ur[An++] = zr, ur[An++] = gi, ur[An++] = lu, lu = n;
    var o = zr;
    n = gi;
    var c = 32 - Or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, zr = 1 << 32 - Or(r) + c | l << c | o, gi = d + n;
    } else zr = 1 << d | l << c | o, gi = n;
  }
  function dd(n) {
    n.return !== null && (Sl(n, 1), Nv(n, 1, 0));
  }
  function xc(n) {
    for (; n === ro; ) ro = ml[--yl], ml[yl] = null, gl = ml[--yl], ml[yl] = null;
    for (; n === lu; ) lu = ur[--An], ur[An] = null, gi = ur[--An], ur[An] = null, zr = ur[--An], ur[An] = null;
  }
  var Jr = null, Zr = null, cn = !1, ti = null;
  function pd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = Za(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = lu !== null ? { id: zr, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Jr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (cn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(A(418));
          r = Za(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, cn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, cn = !1, Jr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function xn(n) {
    if (n !== Jr) return !1;
    if (!cn) return Mv(n), cn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ru(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw zv(), Error(A(418));
      for (; r; ) pd(n, r), r = Za(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zr = Za(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = Jr ? Za(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = Zr; n; ) n = Za(n.nextSibling);
  }
  function $i() {
    Zr = Jr = null, cn = !1;
  }
  function ds(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var uu = ze.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function ao(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Ol(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, K) {
      return x === null || x.tag !== 6 ? (x = wu(L, D.mode, K), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, K) {
      var ue = L.type;
      return ue === ft ? Q(D, x, L.props.children, K, L.key) : x !== null && (x.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ht && Uv(ue) === x.type) ? (K = c(x, L.props), K.ref = ps(D, x, L), K.return = D, K) : (K = ff(L.type, L.key, L.props, null, D.mode, K), K.ref = ps(D, x, L), K.return = D, K);
    }
    function z(D, x, L, K) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Wd(L, D.mode, K), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, K, ue) {
      return x === null || x.tag !== 7 ? (x = Ll(L, D.mode, K, ue), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function W(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = wu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Dt:
            return L = ff(x.type, x.key, x.props, null, D.mode, L), L.ref = ps(D, null, x), L.return = D, L;
          case Re:
            return x = Wd(x, D.mode, L), x.return = D, x;
          case ht:
            var K = x._init;
            return W(D, K(x._payload), L);
        }
        if (kr(x) || ye(x)) return x = Ll(x, D.mode, L, null), x.return = D, x;
        ao(D, x);
      }
      return null;
    }
    function $(D, x, L, K) {
      var ue = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ue !== null ? null : E(D, x, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Dt:
            return L.key === ue ? T(D, x, L, K) : null;
          case Re:
            return L.key === ue ? z(D, x, L, K) : null;
          case ht:
            return ue = L._init, $(
              D,
              x,
              ue(L._payload),
              K
            );
        }
        if (kr(L) || ye(L)) return ue !== null ? null : Q(D, x, L, K, null);
        ao(D, L);
      }
      return null;
    }
    function fe(D, x, L, K, ue) {
      if (typeof K == "string" && K !== "" || typeof K == "number") return D = D.get(L) || null, E(x, D, "" + K, ue);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Dt:
            return D = D.get(K.key === null ? L : K.key) || null, T(x, D, K, ue);
          case Re:
            return D = D.get(K.key === null ? L : K.key) || null, z(x, D, K, ue);
          case ht:
            var De = K._init;
            return fe(D, x, L, De(K._payload), ue);
        }
        if (kr(K) || ye(K)) return D = D.get(L) || null, Q(x, D, K, ue, null);
        ao(x, K);
      }
      return null;
    }
    function ge(D, x, L, K) {
      for (var ue = null, De = null, Le = x, Be = x = 0, Qn = null; Le !== null && Be < L.length; Be++) {
        Le.index > Be ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var kt = $(D, Le, L[Be], K);
        if (kt === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && kt.alternate === null && r(D, Le), x = d(kt, x, Be), De === null ? ue = kt : De.sibling = kt, De = kt, Le = Qn;
      }
      if (Be === L.length) return l(D, Le), cn && Sl(D, Be), ue;
      if (Le === null) {
        for (; Be < L.length; Be++) Le = W(D, L[Be], K), Le !== null && (x = d(Le, x, Be), De === null ? ue = Le : De.sibling = Le, De = Le);
        return cn && Sl(D, Be), ue;
      }
      for (Le = o(D, Le); Be < L.length; Be++) Qn = fe(Le, D, Be, L[Be], K), Qn !== null && (n && Qn.alternate !== null && Le.delete(Qn.key === null ? Be : Qn.key), x = d(Qn, x, Be), De === null ? ue = Qn : De.sibling = Qn, De = Qn);
      return n && Le.forEach(function(Ml) {
        return r(D, Ml);
      }), cn && Sl(D, Be), ue;
    }
    function Ce(D, x, L, K) {
      var ue = ye(L);
      if (typeof ue != "function") throw Error(A(150));
      if (L = ue.call(L), L == null) throw Error(A(151));
      for (var De = ue = null, Le = x, Be = x = 0, Qn = null, kt = L.next(); Le !== null && !kt.done; Be++, kt = L.next()) {
        Le.index > Be ? (Qn = Le, Le = null) : Qn = Le.sibling;
        var Ml = $(D, Le, kt.value, K);
        if (Ml === null) {
          Le === null && (Le = Qn);
          break;
        }
        n && Le && Ml.alternate === null && r(D, Le), x = d(Ml, x, Be), De === null ? ue = Ml : De.sibling = Ml, De = Ml, Le = Qn;
      }
      if (kt.done) return l(
        D,
        Le
      ), cn && Sl(D, Be), ue;
      if (Le === null) {
        for (; !kt.done; Be++, kt = L.next()) kt = W(D, kt.value, K), kt !== null && (x = d(kt, x, Be), De === null ? ue = kt : De.sibling = kt, De = kt);
        return cn && Sl(D, Be), ue;
      }
      for (Le = o(D, Le); !kt.done; Be++, kt = L.next()) kt = fe(Le, D, Be, kt.value, K), kt !== null && (n && kt.alternate !== null && Le.delete(kt.key === null ? Be : kt.key), x = d(kt, x, Be), De === null ? ue = kt : De.sibling = kt, De = kt);
      return n && Le.forEach(function(Ey) {
        return r(D, Ey);
      }), cn && Sl(D, Be), ue;
    }
    function Dn(D, x, L, K) {
      if (typeof L == "object" && L !== null && L.type === ft && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Dt:
            e: {
              for (var ue = L.key, De = x; De !== null; ) {
                if (De.key === ue) {
                  if (ue = L.type, ue === ft) {
                    if (De.tag === 7) {
                      l(D, De.sibling), x = c(De, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (De.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === ht && Uv(ue) === De.type) {
                    l(D, De.sibling), x = c(De, L.props), x.ref = ps(D, De, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, De);
                  break;
                } else r(D, De);
                De = De.sibling;
              }
              L.type === ft ? (x = Ll(L.props.children, D.mode, K, L.key), x.return = D, D = x) : (K = ff(L.type, L.key, L.props, null, D.mode, K), K.ref = ps(D, x, L), K.return = D, D = K);
            }
            return m(D);
          case Re:
            e: {
              for (De = L.key; x !== null; ) {
                if (x.key === De) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Wd(L, D.mode, K), x.return = D, D = x;
            }
            return m(D);
          case ht:
            return De = L._init, Dn(D, x, De(L._payload), K);
        }
        if (kr(L)) return ge(D, x, L, K);
        if (ye(L)) return Ce(D, x, L, K);
        ao(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = wu(L, D.mode, K), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var ni = Av(!0), or = Av(!1), te = Xr(null), ya = null, _r = null, yd = null;
  function gd() {
    yd = _r = ya = null;
  }
  function Sd(n) {
    var r = te.current;
    Vt(te), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function io(n, r) {
    ya = n, yd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function Bt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ya === null) throw Error(A(308));
      _r = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var ou = null;
  function Cd(n) {
    ou === null ? ou = [n] : ou.push(n);
  }
  function jv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Si(n, o);
  }
  function Si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ua = !1;
  function El(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Cl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, vt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Si(n, l);
  }
  function _c(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $o(n, l);
    }
  }
  function Hv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function bc(n, r, l, o) {
    var c = n.updateQueue;
    Ua = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var $ = E.lane, fe = E.eventTime;
        if ((o & $) === $) {
          Q !== null && (Q = Q.next = {
            eventTime: fe,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ce = E;
            switch ($ = r, fe = l, Ce.tag) {
              case 1:
                if (ge = Ce.payload, typeof ge == "function") {
                  W = ge.call(fe, W, $);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ce.payload, $ = typeof ge == "function" ? ge.call(fe, W, $) : ge, $ == null) break e;
                W = ne({}, W, $);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else fe = { eventTime: fe, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = fe, T = W) : Q = Q.next = fe, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      gu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var lo = {}, Ei = Xr(lo), vs = Xr(lo), hs = Xr(lo);
  function su(n) {
    if (n === lo) throw Error(A(174));
    return n;
  }
  function Td(n, r) {
    switch (en(hs, r), en(vs, n), en(Ei, lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ir(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ir(r, n);
    }
    Vt(Ei), en(Ei, r);
  }
  function uo() {
    Vt(Ei), Vt(vs), Vt(hs);
  }
  function wd(n) {
    su(hs.current);
    var r = su(Ei.current), l = ir(r, n.type);
    r !== l && (en(vs, n), en(Ei, l));
  }
  function xd(n) {
    vs.current === n && (Vt(Ei), Vt(vs));
  }
  var hn = Xr(0);
  function Dc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var _d = [];
  function ms() {
    for (var n = 0; n < _d.length; n++) _d[n]._workInProgressVersionPrimary = null;
    _d.length = 0;
  }
  var _e = ze.ReactCurrentDispatcher, st = ze.ReactCurrentBatchConfig, St = 0, qe = null, qt = null, Yn = null, kc = !1, ys = !1, gs = 0, bd = 0;
  function P() {
    throw Error(A(321));
  }
  function jn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ja(n[l], r[l])) return !1;
    return !0;
  }
  function Ue(n, r, l, o, c, d) {
    if (St = d, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, _e.current = n === null || n.memoizedState === null ? Ic : $c, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(A(301));
        d += 1, Yn = qt = null, r.updateQueue = null, _e.current = Ts, n = l(o, c);
      } while (ys);
    }
    if (_e.current = Yt, r = qt !== null && qt.next !== null, St = 0, Yn = qt = qe = null, kc = !1, r) throw Error(A(300));
    return n;
  }
  function Rl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? qe.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function er() {
    if (qt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qt.next;
    var r = Yn === null ? qe.memoizedState : Yn.next;
    if (r !== null) Yn = r, qt = n;
    else {
      if (n === null) throw Error(A(310));
      qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, Yn === null ? qe.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = qt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Q = z.lane;
        if ((St & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, qe.lanes |= Q, gu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ja(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qe.lanes |= d, gu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Tl(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ja(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function oo() {
  }
  function Oc(n, r) {
    var l = qe, o = er(), c = r(), d = !Ja(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Ss(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, fu(9, Nc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      St & 30 || Lc(l, r, c);
    }
    return c;
  }
  function Lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Nc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && Uc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ja(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Si(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Ac(n) {
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rs.bind(null, qe, n), [r.memoizedState, n];
  }
  function fu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return er().memoizedState;
  }
  function so(n, r, l, o) {
    var c = Zn();
    qe.flags |= n, c.memoizedState = fu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function co(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qt !== null) {
      var m = qt.memoizedState;
      if (d = m.destroy, o !== null && jn(o, m.deps)) {
        c.memoizedState = fu(r, l, d, o);
        return;
      }
    }
    qe.flags |= n, c.memoizedState = fu(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return so(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return co(2048, 8, n, r);
  }
  function Hc(n, r) {
    return co(4, 2, n, r);
  }
  function Pc(n, r) {
    return co(4, 4, n, r);
  }
  function Es(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function du(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(4, 4, Es.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Vc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && jn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && jn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Yc(n, r, l) {
    return St & 21 ? (Ja(l, r) || (l = Wl(), qe.lanes |= l, gu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Pv(n, r) {
    var l = Rt;
    Rt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = st.transition;
    st.transition = {};
    try {
      n(!1), r();
    } finally {
      Rt = l, st.transition = o;
    }
  }
  function fo() {
    return er().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ta(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = tn();
      Ca(l, n, o, c), Bv(l, r, o);
    }
  }
  function Rs(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ta(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ja(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = jv(n, r, c, o), l !== null && (c = tn(), Ca(l, n, o, c), Bv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function ta(n, r) {
    ys = kc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Bv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, $o(n, l);
    }
  }
  var Yt = { readContext: Bt, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: !1 }, Ic = { readContext: Bt, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Bt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, so(
      4194308,
      4,
      Es.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return so(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return so(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Zn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vv.bind(null, qe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Cs, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Pv.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qe, c = Zn();
    if (cn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      St & 30 || Lc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fu(9, Nc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zn(), r = Fn.identifierPrefix;
    if (cn) {
      var l = gi, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = bd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: Bt,
    useCallback: Vc,
    useContext: Bt,
    useEffect: Ss,
    useImperativeHandle: du,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: cu,
    useRef: jc,
    useState: function() {
      return cu(ea);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = er();
      return Yc(r, qt.memoizedState, n);
    },
    useTransition: function() {
      var n = cu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: oo,
    useSyncExternalStore: Oc,
    useId: fo,
    unstable_isNewReconciler: !1
  }, Ts = { readContext: Bt, useCallback: Vc, useContext: Bt, useEffect: Ss, useImperativeHandle: du, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: Tl, useRef: jc, useState: function() {
    return Tl(ea);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = er();
    return qt === null ? r.memoizedState = n : Yc(r, qt.memoizedState, n);
  }, useTransition: function() {
    var n = Tl(ea)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: oo, useSyncExternalStore: Oc, useId: fo, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = tn(), c = Ea(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = tn(), c = Ea(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Cl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = tn(), o = Ea(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Cl(n, c, o), r !== null && (Ca(r, n, o, l), _c(r, n, o));
  } };
  function Yv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Jo(l, o) || !Jo(c, d) : !0;
  }
  function Iv(n, r, l) {
    var o = !1, c = at, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Bt(d) : (c = En(r) ? za : vn.current, o = r.contextTypes, d = (o = o != null) ? ma(n, c) : at), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, El(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Bt(d) : (d = En(r) ? za : vn.current, c.context = ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), bc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ye(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Gc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      bl || (bl = !0, Ns = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Id.bind(null, n, r, l), r.then(n, n));
  }
  function Nd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qi(-1, 1), r.tag = 2, Cl(l, r, 1))), l.lanes |= 1), n);
  }
  var pu = ze.ReactCurrentOwner, tr = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? or(r, null, l, o) : ni(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return io(r, c), o = Ue(n, r, l, o, d, c), l = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (cn && l && dd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function ra(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, vu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Jo, l(m, o) && n.ref === r.ref) return sr(n, r, c);
    }
    return r.flags |= 1, n = Ol(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Jo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, sr(n, r, c);
    }
    return Kc(n, r, l, o, c);
  }
  function Xe(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, en(mo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, en(mo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, en(mo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, en(mo, Sa), Sa |= o;
    return _n(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Kc(n, r, l, o, c) {
    var d = En(l) ? za : vn.current;
    return d = ma(r, d), io(r, c), l = Ue(n, r, l, o, d, c), o = Rl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, sr(n, r, c)) : (cn && o && dd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (En(l)) {
      var d = !0;
      iu(r);
    } else d = !1;
    if (io(r, c), r.stateNode === null) Aa(n, r), Iv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Bt(z) : (z = En(l) ? za : vn.current, z = ma(r, z));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Wc(r, m, o, z), Ua = !1;
      var $ = r.memoizedState;
      m.state = $, bc(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Un.current || Ua ? (typeof Q == "function" && (Dd(r, l, Q, o), T = r.memoizedState), (E = Ua || Yv(r, l, E, o, $, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : na(r.type, E), m.props = z, W = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Bt(T) : (T = En(l) ? za : vn.current, T = ma(r, T));
      var fe = l.getDerivedStateFromProps;
      (Q = typeof fe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || $ !== T) && Wc(r, m, o, T), Ua = !1, $ = r.memoizedState, m.state = $, bc(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || $ !== ge || Un.current || Ua ? (typeof fe == "function" && (Dd(r, l, fe, o), ge = r.memoizedState), (z = Ua || Yv(r, l, z, o, $, ge, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && xr(r, l, !1), sr(n, r, d);
    o = r.stateNode, pu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ni(r, n.child, null, d), r.child = ni(r, null, E, d)) : _n(n, r, E, d), r.memoizedState = o.state, c && xr(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? wc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && wc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function po(n, r, l, o, c) {
    return $i(), ds(c), r.flags |= 256, _n(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Wv(n, r, l) {
    var o = r.pendingProps, c = hn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), en(hn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ro(m, o, 0, null), n = Ll(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jc(l), r.memoizedState = zd, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Gv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ol(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ol(E, d) : (d = Ll(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Jc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Ol(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = Ro({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, o) {
    return o !== null && ds(o), ni(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Gv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Gc(Error(A(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ro({ mode: "visible", children: o.children }, c, 0, null), d = Ll(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Jc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Gc(d, o, void 0), Zc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, tr || E) {
      if (o = Fn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Si(n, c), Ca(o, n, c, -1));
      }
      return Bd(), o = Gc(Error(A(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = Za(c.nextSibling), Jr = r, cn = !0, ti = null, n !== null && (ur[An++] = zr, ur[An++] = gi, ur[An++] = lu, zr = n.id, gi = n.overflow, lu = r), r = _s(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function ef(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_n(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (en(hn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Dc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Dc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Aa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function sr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), gu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ol(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ol(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), $i();
        break;
      case 5:
        wd(r);
        break;
      case 1:
        En(r.type) && iu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        en(te, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (en(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Wv(n, r, l) : (en(hn, hn.current & 1), n = sr(n, r, l), n !== null ? n.sibling : null);
        en(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return aa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), en(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Xe(n, r, l);
    }
    return sr(n, r, l);
  }
  var vo, ga, In, qv;
  vo = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ga = function() {
  }, In = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, su(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Ln(n, c), o = Ln(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qn(n, c), o = qn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      un(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (bt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (bt.hasOwnProperty(z) ? (T != null && z === "onScroll" && Ft("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function bs(n, r) {
    if (!cn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function br(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (xc(r), r.tag) {
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
        return br(r), null;
      case 1:
        return En(r.type) && yi(), br(r), null;
      case 3:
        return o = r.stateNode, uo(), Vt(Un), Vt(vn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (xn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (As(ti), ti = null))), ga(n, r), br(r), null;
      case 5:
        xd(r);
        var c = su(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return br(r), null;
          }
          if (n = su(Ei.current), xn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Ft("cancel", o), Ft("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ft("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) Ft(rs[c], o);
                break;
              case "source":
                Ft("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Ft(
                  "error",
                  o
                ), Ft("load", o);
                break;
              case "details":
                Ft("toggle", o);
                break;
              case "input":
                Er(o, d), Ft("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Ft("invalid", o);
                break;
              case "textarea":
                Kn(o, d), Ft("invalid", o);
            }
            un(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : bt.hasOwnProperty(m) && E != null && m === "onScroll" && Ft("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), fa(o, d, !0);
                break;
              case "textarea":
                On(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[os] = o, vo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = on(l, o), l) {
                case "dialog":
                  Ft("cancel", n), Ft("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ft("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) Ft(rs[c], n);
                  c = o;
                  break;
                case "source":
                  Ft("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Ft(
                    "error",
                    n
                  ), Ft("load", n), c = o;
                  break;
                case "details":
                  Ft("toggle", n), c = o;
                  break;
                case "input":
                  Er(n, o), c = Ln(n, o), Ft("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Ft("invalid", n);
                  break;
                case "textarea":
                  Kn(n, o), c = qn(n, o), Ft("invalid", n);
                  break;
                default:
                  c = o;
              }
              un(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Mt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (bt.hasOwnProperty(d) ? T != null && d === "onScroll" && Ft("scroll", n) : T != null && ut(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), fa(n, o, !1);
                  break;
                case "textarea":
                  On(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Bn(n, !!o.multiple, d, !1) : o.defaultValue != null && Bn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return br(r), null;
      case 6:
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = su(hs.current), su(Ei.current), xn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return br(r), null;
      case 13:
        if (Vt(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (cn && Zr !== null && r.mode & 1 && !(r.flags & 128)) zv(), $i(), r.flags |= 98560, d = !1;
          else if (d = xn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ma] = r;
            } else $i(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            br(r), d = !1;
          } else ti !== null && (As(ti), ti = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? $n === 0 && ($n = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), br(r), null);
      case 4:
        return uo(), ga(n, r), n === null && is(r.stateNode.containerInfo), br(r), null;
      case 10:
        return Sd(r.type._context), br(r), null;
      case 17:
        return En(r.type) && yi(), br(r), null;
      case 19:
        if (Vt(hn), d = r.memoizedState, d === null) return br(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) bs(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = Dc(n), m !== null) {
              for (r.flags |= 128, bs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return en(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ut() > go && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = Dc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !cn) return br(r), null;
          } else 2 * Ut() - d.renderingStartTime > go && l !== 1073741824 && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ut(), r.sibling = null, l = hn.current, en(hn, o ? l & 1 | 2 : l & 1), r) : (br(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (br(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : br(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Kv(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return En(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return uo(), Vt(Un), Vt(vn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return xd(r), null;
      case 13:
        if (Vt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          $i();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Vt(hn), null;
      case 4:
        return uo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hu = !1, cr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function _l(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Cn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      Cn(n, r, o);
    }
  }
  var Fd = !1;
  function cy(n, r) {
    if (nu = cl, n = pl(), Gu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Q = 0, W = n, $ = null;
          t: for (; ; ) {
            for (var fe; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (fe = W.firstChild) !== null; )
              $ = W, W = fe;
            for (; ; ) {
              if (W === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++Q === o && (T = m), (fe = W.nextSibling) !== null) break;
              W = $, $ = W.parentNode;
            }
            W = fe;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, cl = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ge = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var Ce = ge.memoizedProps, Dn = ge.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : na(r.type, Ce), Dn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (K) {
        Cn(r, r.return, K);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ge = Fd, Fd = !1, ge;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function nf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function rf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Xv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[os], delete r[sd], delete r[cd], delete r[no])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ds(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  var mn = null, Ur = !1;
  function ja(n, r, l) {
    for (l = l.child; l !== null; ) Wi(n, r, l), l = l.sibling;
  }
  function Wi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ll, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        cr || _l(l, r);
      case 6:
        var o = mn, c = Ur;
        mn = null, ja(n, r, l), mn = o, Ur = c, mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? eo(n.parentNode, l) : n.nodeType === 1 && eo(n, l), Oa(n)) : eo(mn, l.stateNode));
        break;
      case 4:
        o = mn, c = Ur, mn = l.stateNode.containerInfo, Ur = !0, ja(n, r, l), mn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!cr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        ja(n, r, l);
        break;
      case 1:
        if (!cr && (_l(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Cn(l, r, E);
        }
        ja(n, r, l);
        break;
      case 21:
        ja(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (cr = (o = cr) || l.memoizedState !== null, ja(n, r, l), cr = o) : ja(n, r, l);
        break;
      default:
        ja(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new sy()), r.forEach(function(o) {
        var c = hy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              mn = E.stateNode, Ur = !1;
              break e;
            case 3:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (mn === null) throw Error(A(160));
        Wi(d, m, c), mn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        Cn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Zv(r, n), r = r.sibling;
  }
  function Zv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), ai(n), o & 4) {
          try {
            ho(3, n, n.return), nf(3, n);
          } catch (Ce) {
            Cn(n, n.return, Ce);
          }
          try {
            ho(5, n, n.return);
          } catch (Ce) {
            Cn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        ri(r, n), ai(n), o & 512 && l !== null && _l(l, l.return);
        break;
      case 5:
        if (ri(r, n), ai(n), o & 512 && l !== null && _l(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            da(c, "");
          } catch (Ce) {
            Cn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), on(E, m);
            var z = on(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? Mt(c, W) : Q === "dangerouslySetInnerHTML" ? Oi(c, W) : Q === "children" ? da(c, W) : ut(c, Q, W, z);
            }
            switch (E) {
              case "input":
                Nn(c, d);
                break;
              case "textarea":
                Cr(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var fe = d.value;
                fe != null ? Bn(c, !!d.multiple, fe, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Bn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Bn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (Ce) {
            Cn(n, n.return, Ce);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            Cn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (Ce) {
          Cn(n, n.return, Ce);
        }
        break;
      case 4:
        ri(r, n), ai(n);
        break;
      case 13:
        ri(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Ut())), o & 4 && Jv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (cr = (z = cr) || Q, ri(r, n), cr = z) : ri(r, n), ai(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (he = n, Q = n.child; Q !== null; ) {
            for (W = he = Q; he !== null; ) {
              switch ($ = he, fe = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ho(4, $, $.return);
                  break;
                case 1:
                  _l($, $.return);
                  var ge = $.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (Ce) {
                      Cn(o, l, Ce);
                    }
                  }
                  break;
                case 5:
                  _l($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    th(W);
                    continue;
                  }
              }
              fe !== null ? (fe.return = $, he = fe) : th(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Je("display", m));
                } catch (Ce) {
                  Cn(n, n.return, Ce);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ce) {
                Cn(n, n.return, Ce);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ri(r, n), ai(n), o & 4 && Jv(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (af(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Ds(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ds(n);
            Ci(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        Cn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ks(n, r, l) {
    he = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || hu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || cr;
          E = hu;
          var z = cr;
          if (hu = m, (cr = T) && !z) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : T !== null ? (T.return = m, he = T) : Os(c);
          for (; d !== null; ) he = d, eh(d), d = d.sibling;
          he = c, hu = E, cr = z;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              cr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !cr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var W = Q.dehydrated;
                    W !== null && Oa(W);
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
              throw Error(A(163));
          }
          cr || r.flags & 512 && rf(r);
        } catch ($) {
          Cn(r, r.return, $);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function th(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Os(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (T) {
              Cn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Cn(r, c, T);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (T) {
              Cn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (T) {
              Cn(r, m, T);
            }
        }
      } catch (T) {
        Cn(r, r.return, T);
      }
      if (r === n) {
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var nh = Math.ceil, lf = ze.ReactCurrentDispatcher, mu = ze.ReactCurrentOwner, Dr = ze.ReactCurrentBatchConfig, vt = 0, Fn = null, bn = null, fr = 0, Sa = 0, mo = Xr(0), $n = 0, yu = null, gu = 0, Su = 0, Ls = 0, yo = null, ia = null, Pd = 0, go = 1 / 0, Gi = null, bl = !1, Ns = null, Fa = null, uf = !1, Dl = null, Ms = 0, So = 0, Eo = null, Eu = -1, zs = 0;
  function tn() {
    return vt & 6 ? Ut() : Eu !== -1 ? Eu : Eu = Ut();
  }
  function Ea(n) {
    return n.mode & 1 ? vt & 2 && fr !== 0 ? fr & -fr : uu.transition !== null ? (zs === 0 && (zs = Wl()), zs) : (n = Rt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < So) throw So = 0, Eo = null, Error(A(185));
    sl(n, l, o), (!(vt & 2) || n !== Fn) && (n === Fn && (!(vt & 2) && (Su |= l), $n === 4 && kl(n, fr)), nr(n, o), l === 1 && vt === 0 && !(r.mode & 1) && (go = Ut() + 500, cs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    ju(n, r);
    var o = di(n, n === Fn ? fr : 0);
    if (o === 0) l !== null && sn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && sn(l), r === 1) n.tag === 0 ? fd(Fs.bind(null, n)) : hl(Fs.bind(null, n)), ly(function() {
        !(vt & 6) && Mr();
      }), l = null;
      else {
        switch (Qo(o)) {
          case 1:
            l = Ge;
            break;
          case 4:
            l = fi;
            break;
          case 16:
            l = zi;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = zi;
        }
        l = oh(l, rh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function rh(n, r) {
    if (Eu = -1, zs = 0, vt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Co() && n.callbackNode !== l) return null;
    var o = di(n, n === Fn ? fr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = vt;
      vt |= 2;
      var d = ah();
      (Fn !== n || fr !== r) && (Gi = null, go = Ut() + 500, Ru(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      gd(), lf.current = d, vt = c, bn !== null ? r = 0 : (Fn = null, fr = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = ji(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = yu, Ru(n, 0), kl(n, o), nr(n, Ut()), l;
      if (r === 6) kl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !js(c) && (r = cf(n, o), r === 2 && (d = ji(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = yu, Ru(n, 0), kl(n, o), nr(n, Ut()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Tu(n, ia, Gi);
            break;
          case 3:
            if (kl(n, o), (o & 130023424) === o && (r = Pd + 500 - Ut(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                tn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(Tu.bind(null, n, ia, Gi), r);
              break;
            }
            Tu(n, ia, Gi);
            break;
          case 4:
            if (kl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ut() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(Tu.bind(null, n, ia, Gi), o);
              break;
            }
            Tu(n, ia, Gi);
            break;
          case 5:
            Tu(n, ia, Gi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return nr(n, Ut()), n.callbackNode === l ? rh.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = yo;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ia, ia = l, r !== null && As(r)), n;
  }
  function As(n) {
    ia === null ? ia = n : ia.push.apply(ia, n);
  }
  function js(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ja(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function kl(n, r) {
    for (r &= ~Ls, r &= ~Su, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Fs(n) {
    if (vt & 6) throw Error(A(327));
    Co();
    var r = di(n, 0);
    if (!(r & 1)) return nr(n, Ut()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ji(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = yu, Ru(n, 0), kl(n, r), nr(n, Ut()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, ia, Gi), nr(n, Ut()), null;
  }
  function of(n, r) {
    var l = vt;
    vt |= 1;
    try {
      return n(r);
    } finally {
      vt = l, vt === 0 && (go = Ut() + 500, cs && Mr());
    }
  }
  function Cu(n) {
    Dl !== null && Dl.tag === 0 && !(vt & 6) && Co();
    var r = vt;
    vt |= 1;
    var l = Dr.transition, o = Rt;
    try {
      if (Dr.transition = null, Rt = 1, n) return n();
    } finally {
      Rt = o, Dr.transition = l, vt = r, !(vt & 6) && Mr();
    }
  }
  function Vd() {
    Sa = mo.current, Vt(mo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ov(l)), bn !== null) for (l = bn.return; l !== null; ) {
      var o = l;
      switch (xc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yi();
          break;
        case 3:
          uo(), Vt(Un), Vt(vn), ms();
          break;
        case 5:
          xd(o);
          break;
        case 4:
          uo();
          break;
        case 13:
          Vt(hn);
          break;
        case 19:
          Vt(hn);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Fn = n, bn = n = Ol(n.current, null), fr = Sa = r, $n = 0, yu = null, Ls = Su = gu = 0, ia = yo = null, ou !== null) {
      for (r = 0; r < ou.length; r++) if (l = ou[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      ou = null;
    }
    return n;
  }
  function sf(n, r) {
    do {
      var l = bn;
      try {
        if (gd(), _e.current = Yt, kc) {
          for (var o = qe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          kc = !1;
        }
        if (St = 0, Yn = qt = qe = null, ys = !1, gs = 0, mu.current = null, l === null || l.return === null) {
          $n = 1, yu = r, bn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = fr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var fe = Nd(m);
            if (fe !== null) {
              fe.flags &= -257, Qv(fe, m, E, d, r), fe.mode & 1 && Ld(d, z, r), r = fe, T = z;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(T), r.updateQueue = Ce;
              } else ge.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, z, r), Bd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (cn && E.mode & 1) {
            var Dn = Nd(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Qv(Dn, m, E, d, r), ds(xl(T, E));
              break e;
            }
          }
          d = T = xl(T, E), $n !== 4 && ($n = 2), yo === null ? yo = [d] : yo.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, T, r);
                Hv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fa === null || !Fa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var K = $v(d, E, r);
                  Hv(d, K);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (ue) {
        r = ue, bn === l && l !== null && (bn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ah() {
    var n = lf.current;
    return lf.current = Yt, n === null ? Yt : n;
  }
  function Bd() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), Fn === null || !(gu & 268435455) && !(Su & 268435455) || kl(Fn, fr);
  }
  function cf(n, r) {
    var l = vt;
    vt |= 2;
    var o = ah();
    (Fn !== n || fr !== r) && (Gi = null, Ru(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (gd(), vt = l, lf.current = o, bn !== null) throw Error(A(261));
    return Fn = null, fr = 0, $n;
  }
  function fy() {
    for (; bn !== null; ) Yd(bn);
  }
  function dy() {
    for (; bn !== null && !Rr(); ) Yd(bn);
  }
  function Yd(n) {
    var r = $d(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : bn = r, mu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Kv(l, r), l !== null) {
          l.flags &= 32767, bn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, bn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        bn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        bn = r;
        return;
      }
      bn = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function Tu(n, r, l) {
    var o = Rt, c = Dr.transition;
    try {
      Dr.transition = null, Rt = 1, py(n, r, l, o);
    } finally {
      Dr.transition = c, Rt = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Co();
    while (Dl !== null);
    if (vt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Fn && (bn = Fn = null, fr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(zi, function() {
      return Co(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = Rt;
      Rt = 1;
      var E = vt;
      vt |= 4, mu.current = null, cy(n, l), Zv(l, n), Cv(us), cl = !!nu, us = nu = null, n.current = l, ks(l), qa(), vt = E, Rt = m, Dr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Dl = n, Ms = c), d = n.pendingLanes, d === 0 && (Fa = null), Bo(l.stateNode), nr(n, Ut()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (bl) throw bl = !1, n = Ns, Ns = null, n;
    return Ms & 1 && n.tag !== 0 && Co(), d = n.pendingLanes, d & 1 ? n === Eo ? So++ : (So = 0, Eo = n) : So = 0, Mr(), null;
  }
  function Co() {
    if (Dl !== null) {
      var n = Qo(Ms), r = Dr.transition, l = Rt;
      try {
        if (Dr.transition = null, Rt = 16 > n ? 16 : n, Dl === null) var o = !1;
        else {
          if (n = Dl, Dl = null, Ms = 0, vt & 6) throw Error(A(331));
          var c = vt;
          for (vt |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (he = z; he !== null; ) {
                    var Q = he;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, he = W;
                    else for (; he !== null; ) {
                      Q = he;
                      var $ = Q.sibling, fe = Q.return;
                      if (Xv(Q), Q === z) {
                        he = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = fe, he = $;
                        break;
                      }
                      he = fe;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ce = ge.child;
                  if (Ce !== null) {
                    ge.child = null;
                    do {
                      var Dn = Ce.sibling;
                      Ce.sibling = null, Ce = Dn;
                    } while (Ce !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ho(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, he = D;
                break e;
              }
              he = d.return;
            }
          }
          var x = n.current;
          for (he = x; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = x; he !== null; ) {
              if (E = he, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (ue) {
                Cn(E, E.return, ue);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var K = E.sibling;
              if (K !== null) {
                K.return = E.return, he = K;
                break e;
              }
              he = E.return;
            }
          }
          if (vt = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ll, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Rt = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Cl(n, r, 1), r = tn(), n !== null && (sl(n, 1, r), nr(n, r));
  }
  function Cn(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fa === null || !Fa.has(o))) {
          n = xl(l, n), n = $v(r, n, 1), r = Cl(r, n, 1), n = tn(), r !== null && (sl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = tn(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (fr & l) === l && ($n === 4 || $n === 3 && (fr & 130023424) === fr && 500 > Ut() - Pd ? Ru(n, 0) : Ls |= l), nr(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ul, ul <<= 1, !(ul & 130023424) && (ul = 4194304)) : r = 1);
    var l = tn();
    n = Si(n, r), n !== null && (sl(n, r, l), nr(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function hy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var $d;
  $d = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Un.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, tf(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, cn && r.flags & 1048576 && Nv(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = ma(r, vn.current);
        io(r, l), c = Ue(null, r, o, n, c, l);
        var d = Rl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, En(o) ? (d = !0, iu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, El(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, cn && d && dd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = na(o, n), c) {
            case 0:
              r = Kc(null, r, o, n, l);
              break e;
            case 1:
              r = oy(null, r, o, n, l);
              break e;
            case 11:
              r = qc(null, r, o, n, l);
              break e;
            case 14:
              r = ra(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Kc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), bc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(A(423)), r), r = po(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(A(424)), r), r = po(n, r, o, l, c);
            break e;
          } else for (Zr = Za(r.stateNode.containerInfo.firstChild), Jr = r, cn = !0, ti = null, l = or(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if ($i(), o === c) {
              r = sr(n, r, l);
              break e;
            }
            _n(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return wd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ru(o, c) ? m = null : d !== null && ru(o, d) && (r.flags |= 32), xs(n, r), _n(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Wv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ni(r, null, o, l) : _n(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), qc(n, r, o, c, l);
      case 7:
        return _n(n, r, r.pendingProps, l), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, en(te, o._currentValue), o._currentValue = m, d !== null) if (Ja(d.value, m)) {
            if (d.children === c.children && !Un.current) {
              r = sr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          _n(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, io(r, l), c = Bt(c), o = o(c), r.flags |= 1, _n(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), ra(n, r, o, c, l);
      case 15:
        return vu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Aa(n, r), r.tag = 1, En(o) ? (n = !0, iu(r)) : n = !1, io(r, l), Iv(r, o, c), kd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return aa(n, r, l);
      case 22:
        return Xe(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function oh(n, r) {
    return rn(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === It) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function Ol(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Ll(l.children, c, d, r);
      case He:
        m = 8, c |= 8;
        break;
      case Rn:
        return n = Ha(12, l, r, c | 2), n.elementType = Rn, n.lanes = d, n;
      case yt:
        return n = Ha(13, l, r, c), n.elementType = yt, n.lanes = d, n;
      case Ne:
        return n = Ha(19, l, r, c), n.elementType = Ne, n.lanes = d, n;
      case nt:
        return Ro(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Nt:
            m = 10;
            break e;
          case dn:
            m = 9;
            break e;
          case It:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case ht:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ll(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function Ro(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = nt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, El(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return at;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (En(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (En(l)) return Lv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = fh(null), l = n.current, o = tn(), c = Ea(l), d = Qi(o, c), d.callback = r ?? null, Cl(l, d, c), n.current.lanes = c, sl(n, c, o), nr(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = tn(), m = Ea(c);
    return l = fh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Cl(c, r, m), n !== null && (Ca(n, c, m, d), _c(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function dh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    dh(n, r), (n = n.alternate) && dh(n, r);
  }
  function ph() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Nl(n) {
    this._internalRoot = n;
  }
  mf.prototype.render = Nl.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    pf(n, r, null, null);
  }, mf.prototype.unmount = Nl.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Cu(function() {
        pf(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function mf(n) {
    this._internalRoot = n;
  }
  mf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ka.length && r !== 0 && r < Ka[l].priority; l++) ;
      Ka.splice(l, 0, n), l === 0 && Hu(n);
    }
  };
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vh() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = vf(m);
          d.call(z);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", vh);
      return n._reactRootContainer = m, n[Yi] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = vf(T);
        E.call(z);
      };
    }
    var T = df(n, 0, !1, null, null, !1, !1, "", vh);
    return n._reactRootContainer = T, n[Yi] = T.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(function() {
      pf(r, T, l, o);
    }), T;
  }
  function gf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = vf(m);
          E.call(T);
        };
      }
      pf(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return vf(m);
  }
  Fu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gr(r.pendingLanes);
          l !== 0 && ($o(r, l | 1), nr(r, Ut()), !(vt & 6) && (go = Ut() + 500, Mr()));
        }
        break;
      case 13:
        Cu(function() {
          var o = Si(n, 1);
          if (o !== null) {
            var c = tn();
            Ca(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Tt = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var l = tn();
        Ca(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Si(n, r);
      if (l !== null) {
        var o = tn();
        Ca(l, n, r, o);
      }
      hf(n, r);
    }
  }, pi = function() {
    return Rt;
  }, Ve = function(n, r) {
    var l = Rt;
    try {
      return Rt = n, r();
    } finally {
      Rt = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Nn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(A(90));
              Gn(o), Nn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Cr(n, l);
        break;
      case "select":
        r = l.value, r != null && Bn(n, !!l.multiple, r, !1);
    }
  }, Il = of, $l = Cu;
  var hh = { usingClientEntryPoint: !1, Events: [ss, xe, Ii, Da, Li, of] }, Hs = { findFiberByHostInstance: au, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = et(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || ph, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ps.isDisabled && Ps.supportsFiber) try {
      ll = Ps.inject(Sy), Wr = Ps;
    } catch {
    }
  }
  return $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh, $a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(A(200));
    return ch(n, r, null, l);
  }, $a.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(A(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new Nl(r);
  }, $a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = et(r), n = n === null ? null : n.stateNode, n;
  }, $a.flushSync = function(n) {
    return Cu(n);
  }, $a.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(A(200));
    return gf(null, n, r, !0, l);
  }, $a.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new mf(r);
  }, $a.render = function(n, r, l) {
    if (!yf(r)) throw Error(A(200));
    return gf(null, n, r, !1, l);
  }, $a.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Cu(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, $a.unstable_batchedUpdates = of, $a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return gf(n, r, l, !1, o);
  }, $a.version = "18.3.1-next-f1338f8080-20240426", $a;
}
var Qa = {}, iT;
function sD() {
  if (iT) return Qa;
  iT = 1;
  var q = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return q.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var pe = Vo, A = oT(), it = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, bt = !1;
    function _t(e) {
      bt = e;
    }
    function lt(e) {
      if (!bt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("warn", e, a);
      }
    }
    function S(e) {
      if (!bt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ze("error", e, a);
      }
    }
    function Ze(e, t, a) {
      {
        var i = it.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ee = 0, se = 1, Me = 2, Z = 3, Fe = 4, le = 5, we = 6, ct = 7, Pn = 8, an = 9, ut = 10, ze = 11, Dt = 12, Re = 13, ft = 14, He = 15, Rn = 16, Nt = 17, dn = 18, It = 19, yt = 21, Ne = 22, At = 23, ht = 24, nt = 25, Y = !0, ye = !1, ne = !1, b = !1, B = !1, be = !0, Pe = !0, Ye = !0, rt = !0, Ct = /* @__PURE__ */ new Set(), Qe = {}, gt = {};
    function Pt(e, t) {
      On(e, t), On(e + "Capture", t);
    }
    function On(e, t) {
      Qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qe[e] = t;
      {
        var a = e.toLowerCase();
        gt[a] = e, e === "onDoubleClick" && (gt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ct.add(t[i]);
    }
    var Gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ar = Object.prototype.hasOwnProperty;
    function Ln(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Er(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Nn(e, t) {
      if (Er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function fa(e) {
      if (Er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    function Wa(e, t) {
      if (Er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function kr(e, t) {
      if (Er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ln(e)), Vn(e);
    }
    function Bn(e) {
      if (Er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    function qn(e) {
      if (Er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ln(e)), Vn(e);
    }
    var Kn = 0, Cr = 1, Ga = 2, Mn = 3, ir = 4, $r = 5, Oi = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", J = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ke = new RegExp("^[" + da + "][" + J + "]*$"), Je = {}, Mt = {};
    function ln(e) {
      return ar.call(Mt, e) ? !0 : ar.call(Je, e) ? !1 : ke.test(e) ? (Mt[e] = !0, !0) : (Je[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function un(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function on(e, t, a, i) {
      if (a !== null && a.type === Kn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || on(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case ir:
            return t === !1;
          case $r:
            return isNaN(t);
          case Oi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function nn(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Mn || t === ir, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, pa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    pa.forEach(function(e) {
      zt[e] = new $t(
        e,
        Kn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new $t(
        t,
        Cr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      zt[e] = new $t(
        e,
        Ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      zt[e] = new $t(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      zt[e] = new $t(
        e,
        Mn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new $t(
        e,
        Mn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new $t(
        e,
        ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new $t(
        e,
        Oi,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      zt[e] = new $t(
        e,
        $r,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, Da = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, Da);
      zt[t] = new $t(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, Da);
      zt[t] = new $t(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, Da);
      zt[t] = new $t(
        t,
        Cr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new $t(
        e,
        Cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Li = "xlinkHref";
    zt[Li] = new $t(
      "xlinkHref",
      Cr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new $t(
        e,
        Cr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, $l = !1;
    function Ni(e) {
      !$l && Il.test(e) && ($l = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Nn(a, t), i.sanitizeURL && Ni("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ir) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!ln(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Nn(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = nn(t);
      if (!un(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (ln(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Nn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === Mn || _ === ir && a === !0 ? w = "" : (Nn(a, y), w = "" + a, u.sanitizeURL && Ni(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var lr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), dt = Symbol.for("react.scope"), et = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), rn = Symbol.for("react.legacy_hidden"), sn = Symbol.for("react.cache"), Rr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, Ut = "@@iterator";
    function pn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[Ut];
      return typeof t == "function" ? t : null;
    }
    var Ge = Object.assign, fi = 0, zi, ic, Ui, ll, Wr, Bo, Or;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function lc() {
      {
        if (fi === 0) {
          zi = console.log, ic = console.info, Ui = console.warn, ll = console.error, Wr = console.group, Bo = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        fi++;
      }
    }
    function uc() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ge({}, e, {
              value: zi
            }),
            info: Ge({}, e, {
              value: ic
            }),
            warn: Ge({}, e, {
              value: Ui
            }),
            error: Ge({}, e, {
              value: ll
            }),
            group: Ge({}, e, {
              value: Wr
            }),
            groupCollapsed: Ge({}, e, {
              value: Bo
            }),
            groupEnd: Ge({}, e, {
              value: Or
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = it.ReactCurrentDispatcher, ul;
    function Gr(e, t, a) {
      {
        if (ul === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ul = i && i[1] || "";
          }
        return `
` + ul + e;
      }
    }
    var di = !1, ol;
    {
      var ju = typeof WeakMap == "function" ? WeakMap : Map;
      ol = new ju();
    }
    function ji(e, t) {
      if (!e || di)
        return "";
      {
        var a = ol.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      di = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, lc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && ol.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        di = !1, Ai.current = s, uc(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? Gr(w) : "";
      return typeof e == "function" && ol.set(e, M), M;
    }
    function Wl(e, t, a) {
      return ji(e, !0);
    }
    function Gl(e, t, a) {
      return ji(e, !1);
    }
    function sl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ji(e, sl(e));
      if (typeof e == "string")
        return Gr(e);
      switch (e) {
        case re:
          return Gr("Suspense");
        case ie:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Gl(e.render);
          case ot:
            return Io(e.type, t, a);
          case Ie: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Io(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function $o(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Gr(e.type);
        case Rn:
          return Gr("Lazy");
        case Re:
          return Gr("Suspense");
        case It:
          return Gr("SuspenseList");
        case Ee:
        case Me:
        case He:
          return Gl(e.type);
        case ze:
          return Gl(e.type.render);
        case se:
          return Wl(e.type);
        default:
          return "";
      }
    }
    function Rt(e) {
      try {
        var t = "", a = e;
        do
          t += $o(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case ha:
          return "Portal";
        case ci:
          return "Profiler";
        case si:
          return "StrictMode";
        case re:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Fu(t) + ".Consumer";
          case Mi:
            var a = e;
            return Fu(a._context) + ".Provider";
          case I:
            return Qo(e, e.render, "ForwardRef");
          case ot:
            var i = e.displayName || null;
            return i !== null ? i : Tt(e.type) || "Memo";
          case Ie: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Tt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function oc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pi(e) {
      return e.displayName || "Context";
    }
    function Ve(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case ht:
          return "Cache";
        case an:
          var i = a;
          return pi(i) + ".Consumer";
        case ut:
          var u = a;
          return pi(u._context) + ".Provider";
        case dn:
          return "DehydratedFragment";
        case ze:
          return oc(a, a.render, "ForwardRef");
        case ct:
          return "Fragment";
        case le:
          return a;
        case Fe:
          return "Portal";
        case Z:
          return "Root";
        case we:
          return "Text";
        case Rn:
          return Tt(a);
        case Pn:
          return a === si ? "StrictMode" : "Mode";
        case Ne:
          return "Offscreen";
        case Dt:
          return "Profiler";
        case yt:
          return "Scope";
        case Re:
          return "Suspense";
        case It:
          return "SuspenseList";
        case nt:
          return "TracingMarker";
        case se:
        case Ee:
        case Nt:
        case Me:
        case ft:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = it.ReactDebugCurrentFrame, Jn = null, qr = !1;
    function Lr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ve(e);
      }
      return null;
    }
    function vi() {
      return Jn === null ? "" : Rt(Jn);
    }
    function gn() {
      ql.getCurrentStack = null, Jn = null, qr = !1;
    }
    function Qt(e) {
      ql.getCurrentStack = e === null ? null : vi, Jn = e, qr = !1;
    }
    function Ka() {
      return Jn;
    }
    function ka(e) {
      qr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Nr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qn(e), e;
        default:
          return "";
      }
    }
    var qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Hu(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Kl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Pu(e) {
      return e._valueTracker;
    }
    function Vu(e) {
      e._valueTracker = null;
    }
    function Xl(e) {
      var t = "";
      return e && (Kl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            qn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            qn(p), i = "" + p;
          },
          stopTracking: function() {
            Vu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      Pu(e) || (e._valueTracker = Oa(e));
    }
    function cl(e) {
      if (!e)
        return !1;
      var t = Pu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Xl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Fi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bu = !1, fl = !1, Hi = !1, Yu = !1;
    function Wo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Na(e, t) {
      var a = e, i = t.checked, u = Ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Hu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !fl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), fl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Bu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), Bu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Nr(t.value != null ? t.value : i),
        controlled: Wo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && va(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Wo(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Hi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
      }
      h(e, t);
      var u = Nr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Tr(u)) : a.value !== Tr(u) && (a.value = Tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? me(a, t.type, u) : t.hasOwnProperty("defaultValue") && me(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function j(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Nn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Nh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            cl(f), C(f, p);
          }
        }
      }
    }
    function me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var ce = !1, Ae = !1, tt = !1;
    function jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? pe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ae || (Ae = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (tt || (tt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ce && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ce = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", Tr(Nr(t.value)));
    }
    var Gt = Array.isArray;
    function Ke(e) {
      return Gt(e);
    }
    var Zt;
    Zt = !1;
    function wn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Jl = ["value", "defaultValue"];
    function Go(e) {
      {
        Hu("select", e);
        for (var t = 0; t < Jl.length; t++) {
          var a = Jl[t];
          if (e[a] != null) {
            var i = Ke(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, wn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, wn());
          }
        }
      }
    }
    function Pi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Tr(Nr(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Zl(e, t) {
      return Ge({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Pi(a, !!t.multiple, i, !1) : t.defaultValue != null && Pi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Pi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Pi(a, !!t.multiple, t.defaultValue, !0) : Pi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Pi(a, !!t.multiple, i, !1);
    }
    var tv = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function nv(e, t) {
      var a = e;
      Hu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ke(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Nr(i)
      };
    }
    function rv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Tr(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      rv(e, t);
    }
    var Xa = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return qm;
        default:
          return Xa;
      }
    }
    function fc(e, t) {
      return e == null || e === Xa ? Zf(t) : e === Jf && t === "foreignObject" ? Xa : e;
    }
    var Km = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = Km(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Vi = 3, zn = 8, Bi = 9, Ko = 11, dl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, $u = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys($u).forEach(function(e) {
      uv.forEach(function(t) {
        $u[lv(t, e)] = $u[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !($u.hasOwnProperty(e) && $u[e]) ? t + "px" : (kr(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, Qu = /^ms-/;
    function Jm(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(Qu, "-ms-");
    }
    var sv = function() {
    };
    {
      var Zm = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, fv = /-(.)/g, Wu = /;\s*$/, hi = {}, ed = {}, Xo = !1, dv = !1, pv = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pv(e.replace(cv, "ms-"))
        ));
      }, nd = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wu, "")));
      }, hv = function(e, t) {
        Xo || (Xo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        dv || (dv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Zm.test(e) ? nd(e) : Wu.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var ey = sv;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Jm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ey(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Xm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ja(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ny(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Jo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Sv = Ge({
      menuitem: !0
    }, Jo), Ev = "__html";
    function vc(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function pl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Gu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Cv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, qu = {}, Ku = new RegExp("^(aria)-[" + J + "]*$"), rd = new RegExp("^(aria)[A-Z][" + J + "]*$");
    function Zo(e, t) {
      {
        if (ar.call(qu, t) && qu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), qu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), qu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return qu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), qu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Zo(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Rv(e, t) {
      pl(e, t) || ad(e, t);
    }
    var es = !1;
    function Xu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !es && (es = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var wr = {}, ts = /^on./, Tv = /^on[^A-Z]/, wv = new RegExp("^(aria)-[" + J + "]*$"), xv = new RegExp("^(aria)[A-Z][" + J + "]*$");
      hc = function(e, t, a, i) {
        if (ar.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ts.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ts.test(t))
          return Tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (wv.test(t) || xv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = nn(t), y = v !== null && v.type === Kn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && on(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : on(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var _v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function bv(e, t, a) {
      pl(e, t) || _v(e, t, a);
    }
    var id = 1, mi = 2, eu = 4, ld = id | mi | eu, ns = null;
    function ry(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function rs() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function ay(e) {
      return e === ns;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var yc = null, Ft = null, vl = null;
    function as(e) {
      var t = xo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Nh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function is(e) {
      yc = e;
    }
    function ud(e) {
      Ft ? vl ? vl.push(e) : vl = [e] : Ft = e;
    }
    function od() {
      return Ft !== null || vl !== null;
    }
    function Ju() {
      if (Ft) {
        var e = Ft, t = vl;
        if (Ft = null, vl = null, as(e), t)
          for (var a = 0; a < t.length; a++)
            as(t[a]);
      }
    }
    var ls = function(e, t) {
      return e(t);
    }, tu = function() {
    }, gc = !1;
    function iy() {
      var e = od();
      e && (tu(), Ju());
    }
    function Dv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return ls(e, t, a);
      } finally {
        gc = !1, iy();
      }
    }
    function kv(e, t, a) {
      ls = e, tu = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Sc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Nh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (Gn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        us = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Ov = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, M = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          Rc.removeEventListener(H, Oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Oe() {
          _ = !0, F(), a.apply(i, ae), w = !1;
        }
        var Te, xt = !1, mt = !1;
        function k(O) {
          if (Te = O.error, xt = !0, Te === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Rc.addEventListener(H, Oe, !1), g.initEvent(H, !1, !1), Rc.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (xt ? mt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !_)
          return F(), Cc.apply(this, arguments);
      };
    }
    var ly = Ov, Zu = !1, eo = null, Za = !1, Tc = null, to = {
      onError: function(e) {
        Zu = !0, eo = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      Zu = !1, eo = null, ly.apply(to, arguments);
    }
    function os(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), Zu) {
        var y = cd();
        Za || (Za = !0, Tc = y);
      }
    }
    function Yi() {
      if (Za) {
        var e = Tc;
        throw Za = !1, Tc = null, e;
      }
    }
    function sd() {
      return Zu;
    }
    function cd() {
      if (Zu) {
        var e = eo;
        return Zu = !1, eo = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function no(e) {
      return e._reactInternals;
    }
    function au(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var xe = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), Sn = (
      /*                    */
      2
    ), pt = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), Vt = (
      /*                 */
      32
    ), en = (
      /*                     */
      64
    ), at = (
      /*                   */
      128
    ), vn = (
      /*            */
      256
    ), Un = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ma = (
      /*                      */
      2048
    ), En = (
      /*                    */
      4096
    ), yi = (
      /*                   */
      8192
    ), wc = (
      /*             */
      16384
    ), Lv = (
      /*               */
      32767
    ), iu = (
      /*                   */
      32768
    ), xr = (
      /*                */
      65536
    ), ei = (
      /* */
      131072
    ), cs = (
      /*                       */
      1048576
    ), fs = (
      /*                    */
      2097152
    ), hl = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), ml = (
      /*              */
      33554432
    ), yl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      pt | za | 0
    ), ro = Sn | pt | Xr | Vt | Un | En | yi, gl = pt | en | Un | yi, ur = ma | Xr, An = hl | fd | fs, lu = it.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Sn | En)) !== xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function gi(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Sl(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function Nv(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = lu.current;
        if (t !== null && t.tag === se) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ve(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = no(e);
      return u ? zr(u) === u : !1;
    }
    function xc(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jr(e) {
      var t = e.alternate;
      if (!t) {
        var a = zr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return xc(s), e;
            if (v === u)
              return xc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? cn(t) : null;
    }
    function cn(e) {
      if (e.tag === le || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = cn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ti(e) {
      var t = Jr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === le || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Fe) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = A.unstable_scheduleCallback, hd = A.unstable_cancelCallback, md = A.unstable_shouldYield, Mv = A.unstable_requestPaint, xn = A.unstable_now, zv = A.unstable_getCurrentPriorityLevel, $i = A.unstable_ImmediatePriority, ds = A.unstable_UserBlockingPriority, uu = A.unstable_NormalPriority, ps = A.unstable_LowPriority, ao = A.unstable_IdlePriority, Uv = A.unstable_yieldValue, Av = A.unstable_setDisableYieldValue, ni = null, or = null, te = null, ya = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Pe && (e = Ge({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: ou
        })), ni = t.inject(e), or = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (or && typeof or.onScheduleFiberRoot == "function")
        try {
          or.onScheduleFiberRoot(ni, e, t);
        } catch (a) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (or && typeof or.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & at) === at;
          if (Ye) {
            var i;
            switch (t) {
              case aa:
                i = $i;
                break;
              case Aa:
                i = ds;
                break;
              case sr:
                i = uu;
                break;
              case tf:
                i = ao;
                break;
              default:
                i = uu;
                break;
            }
            or.onCommitFiberRoot(ni, e, i, a);
          }
        } catch (u) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (or && typeof or.onPostCommitFiberRoot == "function")
        try {
          or.onPostCommitFiberRoot(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function io(e) {
      if (or && typeof or.onCommitFiberUnmount == "function")
        try {
          or.onCommitFiberUnmount(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bt(e) {
      if (typeof Uv == "function" && (Av(e), _t(e)), or && typeof or.setStrictMode == "function")
        try {
          or.setStrictMode(ni, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ou(e) {
      te = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < bd; a++) {
          var i = Bv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jv(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Si() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Ua(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function El() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Fv(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Qi() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Cl(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function _c() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Hv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function bc() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Ei(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function su() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Td(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function uo() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function wd(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function xd() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function hn() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function Dc(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function _d(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var _e = (
      /*                         */
      0
    ), st = (
      /*                 */
      1
    ), St = (
      /*                    */
      2
    ), qe = (
      /*               */
      8
    ), qt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : gs, kc = Math.log, ys = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (kc(t) / ys | 0) | 0;
    }
    var bd = 31, P = (
      /*                        */
      0
    ), jn = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), Rl = (
      /*    */
      2
    ), Zn = (
      /*             */
      4
    ), er = (
      /*            */
      8
    ), ea = (
      /*                     */
      16
    ), cu = (
      /*                */
      32
    ), Tl = (
      /*                       */
      4194240
    ), oo = (
      /*                        */
      64
    ), Oc = (
      /*                        */
      128
    ), Lc = (
      /*                        */
      256
    ), Nc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), fu = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), so = (
      /*                       */
      65536
    ), co = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), Ss = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Pc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), du = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), Yc = (
      /*                             */
      67108864
    ), Pv = du, fo = (
      /*          */
      134217728
    ), Vv = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), ta = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & Rl)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & er)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & cu)
          return "TransitionHydration";
        if (e & Tl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & fo)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ta)
          return "Offscreen";
      }
    }
    var Yt = -1, Ic = oo, $c = du;
    function Ts(e) {
      switch (pu(e)) {
        case Ue:
          return Ue;
        case Rl:
          return Rl;
        case Zn:
          return Zn;
        case er:
          return er;
        case ea:
          return ea;
        case cu:
          return cu;
        case oo:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case fu:
        case jc:
        case so:
        case co:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return e & Tl;
        case du:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          return e & Es;
        case fo:
          return fo;
        case Rs:
          return Rs;
        case wl:
          return wl;
        case ta:
          return ta;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function na(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Vv;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = Ts(p);
        else {
          var v = f & s;
          v !== P && (i = Ts(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = Ts(y) : s !== P && (i = Ts(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = pu(i), _ = pu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (_ & Tl) !== P
        )
          return t;
      }
      (i & Zn) !== P && (i |= a & ea);
      var w = e.entangledLanes;
      if (w !== P)
        for (var M = e.entanglements, U = i & w; U > 0; ) {
          var F = _n(U), ae = 1 << F;
          i |= M[F], U &= ~ae;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var u = _n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case Ue:
        case Rl:
        case Zn:
          return t + 250;
        case er:
        case ea:
        case cu:
        case oo:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case fu:
        case jc:
        case so:
        case co:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
          return t + 5e3;
        case du:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          return Yt;
        case fo:
        case Rs:
        case wl:
        case ta:
          return Yt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function Yv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === Yt ? ((v & i) === P || (v & u) !== P) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Iv(e) {
      return Ts(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & ~ta;
      return t !== P ? t : t & ta ? ta : P;
    }
    function kd(e) {
      return (e & Ue) !== P;
    }
    function xl(e) {
      return (e & Vv) !== P;
    }
    function Gc(e) {
      return (e & Es) === e;
    }
    function Od(e) {
      var t = Ue | Zn | ea;
      return (e & t) === P;
    }
    function uy(e) {
      return (e & Tl) === e;
    }
    function ws(e, t) {
      var a = Rl | Zn | er | ea;
      return (t & a) !== P;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Ld(e) {
      return (e & Tl) !== P;
    }
    function Nd() {
      var e = Ic;
      return Ic <<= 1, (Ic & Tl) === P && (Ic = oo), e;
    }
    function Qv() {
      var e = $c;
      return $c <<= 1, ($c & Es) === P && ($c = du), e;
    }
    function pu(e) {
      return e & -e;
    }
    function tr(e) {
      return pu(e);
    }
    function _n(e) {
      return 31 - Yn(e);
    }
    function qc(e) {
      return _n(e);
    }
    function ra(e, t) {
      return (e & t) !== P;
    }
    function vu(e, t) {
      return (e & t) === t;
    }
    function Xe(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Kc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Md(e, t) {
      return e !== jn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < bd; a++)
        t.push(e);
      return t;
    }
    function po(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _n(i), s = 1 << u;
        a[u] = Yt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Wv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p;
        i[p] = P, u[p] = Yt, s[p] = Yt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _n(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Zc(e, t) {
      var a = pu(t), i;
      switch (a) {
        case Zn:
          i = Rl;
          break;
        case ea:
          i = er;
          break;
        case oo:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case fu:
        case jc:
        case so:
        case co:
        case Fc:
        case Ss:
        case Hc:
        case Pc:
        case du:
        case Cs:
        case Vc:
        case Bc:
        case Yc:
          i = cu;
          break;
        case wl:
          i = Rs;
          break;
        default:
          i = jn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== jn ? jn : i;
    }
    function Gv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var aa = Ue, Aa = Zn, sr = ea, tf = wl, vo = jn;
    function ga() {
      return vo;
    }
    function In(e) {
      vo = e;
    }
    function qv(e, t) {
      var a = vo;
      try {
        return vo = e, t();
      } finally {
        vo = a;
      }
    }
    function bs(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function br(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Kv(e) {
      var t = pu(e);
      return Ad(aa, t) ? Ad(Aa, t) ? xl(t) ? sr : tf : Aa : aa;
    }
    function hu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var cr;
    function sy(e) {
      cr = e;
    }
    function he(e) {
      cr(e);
    }
    var _l;
    function jd(e) {
      _l = e;
    }
    var Fd;
    function cy(e) {
      Fd = e;
    }
    var ho;
    function nf(e) {
      ho = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var af = !1, Ds = [], Ci = null, Ri = null, mn = null, Ur = /* @__PURE__ */ new Map(), ja = /* @__PURE__ */ new Map(), Wi = [], Jv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ri(e) {
      return Jv.indexOf(e) > -1;
    }
    function Zv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ai(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ci = null;
          break;
        case "dragenter":
        case "dragleave":
          Ri = null;
          break;
        case "mouseover":
        case "mouseout":
          mn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ja.delete(i);
          break;
        }
      }
    }
    function ks(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Zv(t, a, i, u, s);
        if (t !== null) {
          var p = xo(t);
          p !== null && _l(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function eh(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ci = ks(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ri = ks(Ri, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return mn = ks(mn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, ks(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return ja.set(_, ks(ja.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ys(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (hu(s)) {
              e.blockedOn = Sl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function th(e) {
      for (var t = ho(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Wi.length && Ad(t, Wi[i].priority); i++)
        ;
      Wi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Os(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ls(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), rs();
        } else {
          var f = xo(i);
          return f !== null && _l(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function nh(e, t, a) {
      Os(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ci !== null && Os(Ci) && (Ci = null), Ri !== null && Os(Ri) && (Ri = null), mn !== null && Os(mn) && (mn = null), Ur.forEach(nh), ja.forEach(nh);
    }
    function mu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, lf)));
    }
    function Dr(e) {
      if (Ds.length > 0) {
        mu(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ci !== null && mu(Ci, e), Ri !== null && mu(Ri, e), mn !== null && mu(mn, e);
      var i = function(p) {
        return mu(p, e);
      };
      Ur.forEach(i), ja.forEach(i);
      for (var u = 0; u < Wi.length; u++) {
        var s = Wi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wi.length > 0; ) {
        var f = Wi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Wi.shift();
      }
    }
    var vt = it.ReactCurrentBatchConfig, Fn = !0;
    function bn(e) {
      Fn = !!e;
    }
    function fr() {
      return Fn;
    }
    function Sa(e, t, a) {
      var i = yo(t), u;
      switch (i) {
        case aa:
          u = mo;
          break;
        case Aa:
          u = $n;
          break;
        case sr:
        default:
          u = yu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function mo(e, t, a, i) {
      var u = ga(), s = vt.transition;
      vt.transition = null;
      try {
        In(aa), yu(e, t, a, i);
      } finally {
        In(u), vt.transition = s;
      }
    }
    function $n(e, t, a, i) {
      var u = ga(), s = vt.transition;
      vt.transition = null;
      try {
        In(Aa), yu(e, t, a, i);
      } finally {
        In(u), vt.transition = s;
      }
    }
    function yu(e, t, a, i) {
      Fn && gu(e, t, a, i);
    }
    function gu(e, t, a, i) {
      var u = Ls(e, t, a, i);
      if (u === null) {
        by(e, t, i, Su, a), ai(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ai(e, i), t & eu && ri(e)) {
        for (; u !== null; ) {
          var s = xo(u);
          s !== null && he(s);
          var f = Ls(e, t, a, i);
          if (f === null && by(e, t, i, Su, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Su = null;
    function Ls(e, t, a, i) {
      Su = null;
      var u = mc(i), s = Ys(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = gi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (hu(y))
              return Sl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Su = s, null;
    }
    function yo(e) {
      switch (e) {
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
          return aa;
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
          return Aa;
        case "message": {
          var t = zv();
          switch (t) {
            case $i:
              return aa;
            case ds:
              return Aa;
            case uu:
            case ps:
              return sr;
            case ao:
              return tf;
            default:
              return sr;
          }
        }
        default:
          return sr;
      }
    }
    function ia(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function go(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var bl = null, Ns = null, Fa = null;
    function uf(e) {
      return bl = e, Ns = So(), !0;
    }
    function Dl() {
      bl = null, Ns = null, Fa = null;
    }
    function Ms() {
      if (Fa)
        return Fa;
      var e, t = Ns, a = t.length, i, u = So(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Fa = u.slice(e, p), Fa;
    }
    function So() {
      return "value" in bl ? bl.value : bl.textContent;
    }
    function Eo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Eu() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function tn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Eu : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Eu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Eu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Eu
      }), t;
    }
    var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ca = tn(Ea), nr = Ge({}, Ea, {
      view: 0,
      detail: 0
    }), rh = tn(nr), Us, As, js;
    function kl(e) {
      e !== js && (js && e.type === "mousemove" ? (Us = e.screenX - js.screenX, As = e.screenY - js.screenY) : (Us = 0, As = 0), js = e);
    }
    var Fs = Ge({}, nr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (kl(e), Us);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), of = tn(Fs), Cu = Ge({}, Fs, {
      dataTransfer: 0
    }), Vd = tn(Cu), Ru = Ge({}, nr, {
      relatedTarget: 0
    }), sf = tn(Ru), ah = Ge({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = tn(ah), cf = Ge({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = tn(cf), dy = Ge({}, Ea, {
      data: 0
    }), Yd = tn(dy), ih = Yd, Tu = {
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
    }, py = {
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
    function Co(e) {
      if (e.key) {
        var t = Tu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? py[e.keyCode] || "Unidentified" : "";
    }
    var lh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Cn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = lh[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return Cn;
    }
    var uh = Ge({}, nr, {
      key: Co,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Id,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Eo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = tn(uh), hy = Ge({}, Fs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), $d = tn(hy), oh = Ge({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), my = tn(oh), Ha = Ge({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = tn(Ha), yy = Ge({}, Fs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ol = tn(yy), ff = [9, 13, 27, 32], Ll = 229, Ro = Gn && "CompositionEvent" in window, wu = null;
    Gn && "documentMode" in document && (wu = document.documentMode);
    var Wd = Gn && "TextEvent" in window && !wu, sh = Gn && (!Ro || wu && wu > 8 && wu <= 11), df = 32, ch = String.fromCharCode(df);
    function fh() {
      Pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Pt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Pt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dh(e, t) {
      return e === "keydown" && t.keyCode === Ll;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ll;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ph(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function qd(e) {
      return e.locale === "ko";
    }
    var Nl = !1;
    function mf(e, t, a, i, u) {
      var s, f;
      if (Ro ? s = vf(t) : Nl ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !qd(i) && (!Nl && s === "onCompositionStart" ? Nl = uf(u) : s === "onCompositionEnd" && Nl && (f = Ms()));
      var p = Sh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ph(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Kd(e, t) {
      switch (e) {
        case "compositionend":
          return ph(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, ch);
        case "textInput":
          var i = t.data;
          return i === ch && Gd ? null : i;
        default:
          return null;
      }
    }
    function yf(e, t) {
      if (Nl) {
        if (e === "compositionend" || !Ro && hf(e, t)) {
          var a = Ms();
          return Dl(), Nl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sh && !qd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, i, u) {
      var s;
      if (Wd ? s = Kd(t, i) : s = yf(t, i), !s)
        return null;
      var f = Sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ih("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      mf(e, t, a, i, u), vh(e, t, a, i, u);
    }
    var gf = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function hh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!gf[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function Hs(e) {
      if (!Gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sy() {
      Pt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ps(e, t, a, i) {
      ud(i);
      var u = Sh(t, "onChange");
      if (u.length > 0) {
        var s = new Ca("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var n = null, r = null;
    function l(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function o(e) {
      var t = [];
      Ps(t, r, e, mc(e)), Dv(c, t);
    }
    function c(e) {
      D0(e, 0);
    }
    function d(e) {
      var t = wf(e);
      if (cl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    Gn && (E = Hs("input") && (!document.documentMode || document.documentMode > 9));
    function T(e, t) {
      n = e, r = t, n.attachEvent("onpropertychange", Q);
    }
    function z() {
      n && (n.detachEvent("onpropertychange", Q), n = null, r = null);
    }
    function Q(e) {
      e.propertyName === "value" && d(r) && o(e);
    }
    function W(e, t, a) {
      e === "focusin" ? (z(), T(t, a)) : e === "focusout" && z();
    }
    function $(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return d(r);
    }
    function fe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ge(e, t) {
      if (e === "click")
        return d(t);
    }
    function Ce(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function Dn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || me(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window, v, y;
      if (l(p) ? v = m : hh(p) ? E ? v = Ce : (v = $, y = W) : fe(p) && (v = ge), v) {
        var g = v(t, a);
        if (g) {
          Ps(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Dn(p);
    }
    function x() {
      On("onMouseEnter", ["mouseout", "mouseover"]), On("onMouseLeave", ["mouseout", "mouseover"]), On("onPointerEnter", ["pointerout", "pointerover"]), On("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function L(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ay(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ys(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, M = U ? Ys(U) : null, M !== null) {
            var F = zr(M);
            (M !== F || M.tag !== le && M.tag !== we) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var ae = of, Oe = "onMouseLeave", Te = "onMouseEnter", xt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = $d, Oe = "onPointerLeave", Te = "onPointerEnter", xt = "pointer");
          var mt = w == null ? g : wf(w), k = M == null ? g : wf(M), H = new ae(Oe, xt + "leave", w, i, u);
          H.target = mt, H.relatedTarget = k;
          var O = null, G = Ys(u);
          if (G === a) {
            var ve = new ae(Te, xt + "enter", M, i, u);
            ve.target = k, ve.relatedTarget = mt, O = ve;
          }
          OT(e, H, O, w, M);
        }
      }
    }
    function K(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ue = typeof Object.is == "function" ? Object.is : K;
    function De(e, t) {
      if (ue(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ar.call(t, s) || !ue(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Le(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Be(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Qn(e, t) {
      for (var a = Le(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Le(Be(a));
      }
    }
    function kt(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Ml(e, u, s, f, p);
    }
    function Ml(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Ey(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Qn(e, f), g = Qn(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Vi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function dT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function pT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
        if (pT(t))
          e = t.contentWindow;
        else
          return t;
        t = Fi(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vT() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? mT(e) : null
      };
    }
    function hT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && dT(a)) {
        i !== null && Cy(a) && yT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function mT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = kt(e), t || {
        start: 0,
        end: 0
      };
    }
    function yT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ey(e, t);
    }
    var gT = Gn && "documentMode" in document && document.documentMode <= 11;
    function ST() {
      Pt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Ry = null, Xd = null, Ty = !1;
    function ET(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function CT(e) {
      return e.window === e ? e.document : e.nodeType === Bi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = CT(a);
      if (!(Ty || Sf == null || Sf !== Fi(i))) {
        var u = ET(Sf);
        if (!Xd || !De(Xd, u)) {
          Xd = u;
          var s = Sh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function RT(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (hh(p) || p.contentEditable === "true") && (Sf = p, Ry = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Ry = null, Xd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, S0(e, i, u);
          break;
        case "selectionchange":
          if (gT)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function mh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: mh("Animation", "AnimationEnd"),
      animationiteration: mh("Animation", "AnimationIteration"),
      animationstart: mh("Animation", "AnimationStart"),
      transitionend: mh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    Gn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function yh(e) {
      if (wy[e])
        return wy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var C0 = yh("animationend"), R0 = yh("animationiteration"), T0 = yh("animationstart"), w0 = yh("transitionend"), x0 = /* @__PURE__ */ new Map(), _0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function To(e, t) {
      x0.set(e, t), Pt(t, [e]);
    }
    function TT() {
      for (var e = 0; e < _0.length; e++) {
        var t = _0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        To(a, "on" + i);
      }
      To(C0, "onAnimationEnd"), To(R0, "onAnimationIteration"), To(T0, "onAnimationStart"), To("dblclick", "onDoubleClick"), To("focusin", "onFocus"), To("focusout", "onBlur"), To(w0, "onTransitionEnd");
    }
    function wT(e, t, a, i, u, s, f) {
      var p = x0.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Eo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = my;
            break;
          case C0:
          case R0:
          case T0:
            v = Bd;
            break;
          case w0:
            v = Qd;
            break;
          case "scroll":
            v = rh;
            break;
          case "wheel":
            v = Ol;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = fy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $d;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = DT(a, p, i.type, g, _);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    TT(), x(), Sy(), ST(), fh();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (L(e, t, a, i, u), D(e, t, a, i, u), RT(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, os(i, t, void 0, e), e.currentTarget = null;
    }
    function _T(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          b0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          b0(e, M, w), i = _;
        }
    }
    function D0(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        _T(s, f, a);
      }
      Yi();
    }
    function bT(e, t, a, i, u) {
      var s = mc(a), f = [];
      xT(f, e, i, a, s, t), D0(f, t);
    }
    function yn(e, t) {
      xy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = rx(t), u = LT(e);
      i.has(u) || (k0(t, e, mi, a), i.add(u));
    }
    function _y(e, t, a) {
      xy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), k0(a, e, i, t);
    }
    var gh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[gh]) {
        e[gh] = !0, Ct.forEach(function(a) {
          a !== "selectionchange" && (xy.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === Bi ? e : e.ownerDocument;
        t !== null && (t[gh] || (t[gh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? go(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : ia(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === zn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & mi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === Z || _ === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (O0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Ys(y);
                if (M === null)
                  return;
                var U = M.tag;
                if (U === le || U === we) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Dv(function() {
        return bT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function DT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, M = _.tag;
        if (M === le && w !== null && (g = w, p !== null)) {
          var U = nu(y, p);
          U != null && v.push(ep(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = nu(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function kT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === le && g !== null) {
          var w = g;
          if (u) {
            var M = nu(p, s);
            M != null && f.unshift(ep(p, M, w));
          } else if (!u) {
            var U = nu(p, s);
            U != null && f.push(ep(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function OT(e, t, a, i, u) {
      var s = i && u ? kT(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function LT(e, t) {
      return e + "__bubble";
    }
    var Pa = !1, tp = "dangerouslySetInnerHTML", Eh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", N0 = "autoFocus", Vs = "children", Bs = "style", Ch = "__html", Dy, Rh, np, M0, Th, z0, U0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Rh = function(e, t) {
      Rv(e, t), Xu(e, t), bv(e, t, {
        registrationNameDependencies: Qe,
        possibleRegistrationNames: gt
      });
    }, z0 = Gn && !document.documentMode, np = function(e, t, a) {
      if (!Pa) {
        var i = wh(a), u = wh(t);
        u !== i && (Pa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, M0 = function(e) {
      if (!Pa) {
        Pa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Th = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var NT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function wh(e) {
      Bn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(NT, `
`).replace(MT, "");
    }
    function xh(e, t, a, i) {
      var u = wh(t), s = wh(e);
      if (s !== u && (i && (Pa || (Pa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Y))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Bi ? e : e.ownerDocument;
    }
    function zT() {
    }
    function _h(e) {
      e.onclick = zT;
    }
    function UT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), yv(t, f);
          else if (s === tp) {
            var p = f ? f[Ch] : void 0;
            p != null && iv(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && dl(t, f);
            } else typeof f == "number" && dl(t, "" + f);
          else s === Eh || s === wo || s === N0 || (Qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Th(s, f), s === "onScroll" && yn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function AT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === tp ? iv(e, f) : s === Vs ? dl(e, f) : va(e, s, f, i);
      }
    }
    function jT(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Xa && (p = Zf(e)), p === Xa) {
        if (u = pl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Xa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ar.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return A0(t).createTextNode(e);
    }
    function HT(e, t, a, i) {
      var u = pl(t, a);
      Rh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            yn(Jd[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Na(e, a), yn("invalid", e);
          break;
        case "option":
          jt(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = Zl(e, a), yn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), UT(t, e, i, s, u), t) {
        case "input":
          La(e), N(e, a, !1);
          break;
        case "textarea":
          La(e), av(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function PT(e, t, a, i, u) {
      Rh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Na(e, a), p = Na(e, i), s = [];
          break;
        case "select":
          f = Zl(e, a), p = Zl(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Vs || v === Eh || v === wo || v === N0 || (Qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Bs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var U = w ? w[Ch] : void 0, F = M ? M[Ch] : void 0;
            U != null && F !== U && (s = s || []).push(v, U);
          } else v === Vs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Eh || v === wo || (Qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Th(v, w), v === "onScroll" && yn("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Ja(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function VT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = pl(a, i), f = pl(a, u);
      switch (AT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function BT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function YT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = pl(t, a), Rh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            yn(Jd[y], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          Iu(e, a), yn("invalid", e);
          break;
        case "option":
          jt(e, a);
          break;
        case "select":
          qo(e, a), yn("invalid", e);
          break;
        case "textarea":
          nv(e, a), yn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var F = a[U];
          if (U === Vs)
            typeof F == "string" ? e.textContent !== F && (a[wo] !== !0 && xh(e.textContent, F, s, f), M = [Vs, F]) : typeof F == "number" && e.textContent !== "" + F && (a[wo] !== !0 && xh(e.textContent, F, s, f), M = [Vs, "" + F]);
          else if (Qe.hasOwnProperty(U))
            F != null && (typeof F != "function" && Th(U, F), U === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Oe = nn(U);
            if (a[wo] !== !0) {
              if (!(U === Eh || U === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var Te = e.innerHTML, xt = F ? F[Ch] : void 0;
                  if (xt != null) {
                    var mt = U0(e, xt);
                    mt !== Te && np(U, Te, mt);
                  }
                } else if (U === Bs) {
                  if (v.delete(U), z0) {
                    var k = ty(F);
                    ae = e.getAttribute("style"), k !== ae && np(U, ae, k);
                  }
                } else if (p && !B)
                  v.delete(U.toLowerCase()), ae = oi(e, U, F), F !== ae && np(U, ae, F);
                else if (!un(U, Oe, p) && !Xn(U, F, Oe, p)) {
                  var H = !1;
                  if (Oe !== null)
                    v.delete(Oe.attributeName), ae = Ql(e, U, F, Oe);
                  else {
                    var O = i;
                    if (O === Xa && (O = Zf(t)), O === Xa)
                      v.delete(U.toLowerCase());
                    else {
                      var G = BT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    ae = oi(e, U, F);
                  }
                  var ve = B;
                  !ve && F !== ae && !H && np(U, ae, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && M0(v), t) {
        case "input":
          La(e), N(e, a, !0);
          break;
        case "textarea":
          La(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return M;
    }
    function IT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Pa)
          return;
        Pa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Pa)
          return;
        Pa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Pa)
          return;
        Pa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          j(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var QT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], WT = j0.concat(["button"]), GT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], F0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = Ge({}, e || F0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), WT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), QT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return GT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, KT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, H0 = {};
      rp = function(e, t, a) {
        a = a || F0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qT(e, u) ? null : i, f = s ? null : KT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var bh = "suppressHydrationWarning", Dh = "$", kh = "/$", ip = "$?", lp = "$!", XT = "style", My = null, zy = null;
    function JT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case Ko: {
          t = i === Bi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === zn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZT(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function vD(e) {
      return e;
    }
    function ew(e) {
      My = fr(), zy = vT();
      var t = null;
      return bn(!1), t;
    }
    function tw(e) {
      hT(zy), bn(My), My = null, zy = null;
    }
    function nw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = jT(e, t, a, s);
      return sp(u, y), By(y, t), y;
    }
    function rw(e, t) {
      e.appendChild(t);
    }
    function aw(e, t, a, i, u) {
      switch (HT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function iw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return PT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function lw(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return sp(i, s), s;
    }
    function uw() {
      var e = window.event;
      return e === void 0 ? sr : yo(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, ow = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, P0 = typeof Promise == "function" ? Promise : void 0, sw = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(cw);
    } : Ay;
    function cw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function fw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function dw(e, t, a, i, u, s) {
      VT(e, t, a, i, u), By(e, u);
    }
    function V0(e) {
      dl(e, "");
    }
    function pw(e, t, a) {
      e.nodeValue = a;
    }
    function vw(e, t) {
      e.appendChild(t);
    }
    function hw(e, t) {
      var a;
      e.nodeType === zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function mw(e, t, a) {
      e.insertBefore(t, a);
    }
    function yw(e, t, a) {
      e.nodeType === zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function gw(e, t) {
      e.removeChild(t);
    }
    function Sw(e, t) {
      e.nodeType === zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Fy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === zn) {
          var s = u.data;
          if (s === kh)
            if (i === 0) {
              e.removeChild(u), Dr(t);
              return;
            } else
              i--;
          else (s === Dh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      Dr(t);
    }
    function Ew(e, t) {
      e.nodeType === zn ? Fy(e.parentNode, t) : e.nodeType === Kr && Fy(e, t), Dr(e);
    }
    function Cw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Rw(e) {
      e.nodeValue = "";
    }
    function Tw(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function ww(e, t) {
      e.nodeValue = t;
    }
    function xw(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function _w(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function bw(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function Dw(e) {
      return e.nodeType !== zn ? null : e;
    }
    function B0(e) {
      return e.data === ip;
    }
    function Hy(e) {
      return e.data === lp;
    }
    function kw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Ow(e, t) {
      e._reactRetry = t;
    }
    function Oh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Vi)
          break;
        if (t === zn) {
          var a = e.data;
          if (a === Dh || a === lp || a === ip)
            break;
          if (a === kh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Oh(e.nextSibling);
    }
    function Lw(e) {
      return Oh(e.firstChild);
    }
    function Nw(e) {
      return Oh(e.firstChild);
    }
    function Mw(e) {
      return Oh(e.nextSibling);
    }
    function zw(e, t, a, i, u, s, f) {
      sp(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & st) !== _e;
      return YT(e, t, a, p, i, y, f);
    }
    function Uw(e, t, a, i) {
      return sp(a, e), a.mode & st, IT(e, t);
    }
    function Aw(e, t) {
      sp(t, e);
    }
    function jw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === kh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === Dh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === Dh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === kh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fw(e) {
      Dr(e);
    }
    function Hw(e) {
      Dr(e);
    }
    function Pw(e) {
      return e !== "head" && e !== "body";
    }
    function Vw(e, t, a, i) {
      var u = !0;
      xh(t.nodeValue, a, i, u);
    }
    function Bw(e, t, a, i, u, s) {
      if (t[bh] !== !0) {
        var f = !0;
        xh(i.nodeValue, u, s, f);
      }
    }
    function Yw(e, t) {
      t.nodeType === Kr ? ky(e, t) : t.nodeType === zn || Oy(e, t);
    }
    function Iw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? ky(a, t) : t.nodeType === zn || Oy(a, t));
      }
    }
    function $w(e, t, a, i, u) {
      (u || t[bh] !== !0) && (i.nodeType === Kr ? ky(a, i) : i.nodeType === zn || Oy(a, i));
    }
    function Qw(e, t, a) {
      Ly(e, t);
    }
    function Ww(e, t) {
      Ny(e, t);
    }
    function Gw(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function qw(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function Kw(e, t, a, i, u, s) {
      (s || t[bh] !== !0) && Ly(a, i);
    }
    function Xw(e, t, a, i, u) {
      (u || t[bh] !== !0) && Ny(a, i);
    }
    function Jw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Zw(e) {
      Zd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, Py = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Vy = "__reactEvents$" + Rf, ex = "__reactListeners$" + Rf, tx = "__reactHandles$" + Rf;
    function nx(e) {
      delete e[Tf], delete e[Py], delete e[Vy], delete e[ex], delete e[tx];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function Lh(e, t) {
      t[op] = e;
    }
    function I0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Ys(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === le || t.tag === we || t.tag === Re || t.tag === Z) ? t : null;
    }
    function wf(e) {
      if (e.tag === le || e.tag === we)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Nh(e) {
      return e[Py] || null;
    }
    function By(e, t) {
      e[Py] = t;
    }
    function rx(e) {
      var t = e[Vy];
      return t === void 0 && (t = e[Vy] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Q0 = it.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function qi(e, t, a, i, u) {
      {
        var s = Function.call.bind(ar);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Mh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Mh(null)), p instanceof Error && !(p.message in $0) && ($0[p.message] = !0, Mh(u), S("Failed %s type: %s", a, p.message), Mh(null));
          }
      }
    }
    var Yy = [], zh;
    zh = [];
    var xu = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== zh[xu] && S("Unexpected Fiber popped."), e.current = Yy[xu], Yy[xu] = null, zh[xu] = null, xu--;
    }
    function ua(e, t, a) {
      xu++, Yy[xu] = e.current, zh[xu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ii = {};
    Object.freeze(ii);
    var _u = _o(ii), zl = _o(!1), $y = ii;
    function xf(e, t, a) {
      return a && Ul(t) ? $y : _u.current;
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _f(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ve(e) || "Unknown";
          qi(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function Uh() {
      return zl.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ah(e) {
      la(zl, e), la(_u, e);
    }
    function Qy(e) {
      la(zl, e), la(_u, e);
    }
    function G0(e, t, a) {
      {
        if (_u.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(_u, t, e), ua(zl, a, e);
      }
    }
    function q0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ve(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ve(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ve(e) || "Unknown";
          qi(u, f, "child context", v);
        }
        return Ge({}, a, f);
      }
    }
    function jh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return $y = _u.current, ua(_u, a, e), ua(zl, zl.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, la(zl, e), la(_u, e), ua(_u, u, e), ua(zl, a, e);
        } else
          la(zl, e), ua(zl, a, e);
      }
    }
    function ax(e) {
      {
        if (!Nv(e) || e.tag !== se)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case se: {
              var a = t.type;
              if (Ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var bo = 0, Fh = 1, bu = null, Wy = !1, Gy = !1;
    function X0(e) {
      bu === null ? bu = [e] : bu.push(e);
    }
    function ix(e) {
      Wy = !0, X0(e);
    }
    function J0() {
      Wy && Do();
    }
    function Do() {
      if (!Gy && bu !== null) {
        Gy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = bu;
          for (In(aa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          bu = null, Wy = !1;
        } catch (s) {
          throw bu !== null && (bu = bu.slice(e + 1)), vd($i, Do), s;
        } finally {
          In(t), Gy = !1;
        }
      }
      return null;
    }
    var bf = [], Df = 0, Hh = null, Ph = 0, Ti = [], wi = 0, Is = null, Du = 1, ku = "";
    function lx(e) {
      return Qs(), (e.flags & cs) !== xe;
    }
    function ux(e) {
      return Qs(), Ph;
    }
    function ox() {
      var e = ku, t = Du, a = t & ~sx(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Qs(), bf[Df++] = Ph, bf[Df++] = Hh, Hh = e, Ph = t;
    }
    function Z0(e, t, a) {
      Qs(), Ti[wi++] = Du, Ti[wi++] = ku, Ti[wi++] = Is, Is = e;
      var i = Du, u = ku, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, M = s - y, U = Vh(t) + M, F = p << M, ae = F | w, Oe = _ + u;
        Du = 1 << U | ae, ku = Oe;
      } else {
        var Te = p << s, xt = Te | f, mt = u;
        Du = 1 << v | xt, ku = mt;
      }
    }
    function qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), Z0(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Yn(e);
    }
    function sx(e) {
      return 1 << Vh(e) - 1;
    }
    function Ky(e) {
      for (; e === Hh; )
        Hh = bf[--Df], bf[Df] = null, Ph = bf[--Df], bf[Df] = null;
      for (; e === Is; )
        Is = Ti[--wi], Ti[wi] = null, ku = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null;
    }
    function cx() {
      return Qs(), Is !== null ? {
        id: Du,
        overflow: ku
      } : null;
    }
    function fx(e, t) {
      Qs(), Ti[wi++] = Du, Ti[wi++] = ku, Ti[wi++] = Is, Du = t.id, ku = t.overflow, Is = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, Ki = !1, Ws = !1, ko = null;
    function dx() {
      Ki && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      Ws = !0;
    }
    function px() {
      return Ws;
    }
    function vx(e) {
      var t = e.stateNode.containerInfo;
      return xi = Nw(t), Ar = e, Ki = !0, ko = null, Ws = !1, !0;
    }
    function hx(e, t, a) {
      return xi = Mw(t), Ar = e, Ki = !0, ko = null, Ws = !1, a !== null && fx(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case Z: {
          Yw(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & st) !== _e;
          $w(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Re: {
          var i = e.memoizedState;
          i.dehydrated !== null && Iw(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = Sb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, Qw(a, i);
                break;
              case we:
                var u = t.pendingProps;
                Ww(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & st) !== _e;
                Kw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case we: {
                var _ = t.pendingProps, w = (e.mode & st) !== _e;
                Xw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Re: {
            var M = e.memoizedState, U = M.dehydrated;
            if (U !== null) switch (t.tag) {
              case le:
                var F = t.type;
                t.pendingProps, Gw(U, F);
                break;
              case we:
                var ae = t.pendingProps;
                qw(U, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rE(e, t) {
      t.flags = t.flags & ~En | Sn, Xy(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = _w(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Lw(i), !0) : !1;
        }
        case we: {
          var u = e.pendingProps, s = bw(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case Re: {
          var f = Dw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: cx(),
              retryLane: ta
            };
            e.memoizedState = p;
            var v = Eb(f);
            return v.return = e, e.child = v, Ar = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & st) !== _e && (e.flags & at) === xe;
    }
    function Zy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (Ki) {
        var t = xi;
        if (!t) {
          Jy(e) && (Xy(Ar, e), Zy()), rE(Ar, e), Ki = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Jy(e) && (Xy(Ar, e), Zy()), t = up(a);
          var i = Ar;
          if (!t || !aE(e, t)) {
            rE(Ar, e), Ki = !1, Ar = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function mx(e, t, a) {
      var i = e.stateNode, u = !Ws, s = zw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function yx(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Uw(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & st) !== _e;
              Vw(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & st) !== _e;
              Bw(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function gx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Aw(a, e);
    }
    function Sx(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return jw(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== Z && t.tag !== Re; )
        t = t.return;
      Ar = t;
    }
    function Bh(e) {
      if (e !== Ar)
        return !1;
      if (!Ki)
        return iE(e), Ki = !0, !1;
      if (e.tag !== Z && (e.tag !== le || Pw(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (Jy(e))
            lE(e), Zy();
          else
            for (; t; )
              nE(e, t), t = up(t);
      }
      return iE(e), e.tag === Re ? xi = Sx(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function Ex() {
      return Ki && xi !== null;
    }
    function lE(e) {
      for (var t = xi; t; )
        tE(e, t), t = up(t);
    }
    function kf() {
      Ar = null, xi = null, Ki = !1, Ws = !1;
    }
    function uE() {
      ko !== null && (eR(ko), ko = null);
    }
    function jr() {
      return Ki;
    }
    function tg(e) {
      ko === null ? ko = [e] : ko.push(e);
    }
    var Cx = it.ReactCurrentBatchConfig, Rx = null;
    function Tx() {
      return Cx.transition;
    }
    var Xi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var wx = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qe && (t = a), a = a.return;
        return t;
      }, Gs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ve(w) || "Component"), qs.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ve(w) || "Component"), qs.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ve(w) || "Component"), qs.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ve(w) || "Component"), qs.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ve(w) || "Component"), qs.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ve(w) || "Component"), qs.add(w.type);
        }), mp = []), t.size > 0) {
          var f = Gs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Gs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Gs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Gs(e);
          lt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Gs(a);
          lt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Gs(u);
          lt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Yh = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = wx(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Yh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Yh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Yh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ve(s) || "Component"), oE.add(s.type);
            });
            var u = Gs(i);
            try {
              Qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              gn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Yh = /* @__PURE__ */ new Map();
      };
    }
    var ng, rg, ag, ig, lg, sE = function(e, t) {
    };
    ng = !1, rg = !1, ag = {}, ig = {}, lg = {}, sE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ve(t) || "Component";
        ig[a] || (ig[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qe || be) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== se) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xx(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ve(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== se)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = Ve(e) || "Component";
        if (lg[t])
          return;
        lg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fE(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Xr) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = ac(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= cs, H;
        var G = k.alternate;
        if (G !== null) {
          var ve = G.index;
          return ve < H ? (k.flags |= Sn, H) : ve;
        } else
          return k.flags |= Sn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Sn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== we) {
          var ve = t0(O, k.mode, G);
          return ve.return = k, ve;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, G) {
        var ve = O.type;
        if (ve === Qr)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === ve || // Keep this check inline so it only runs on the false path:
        mR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === Ie && cE(ve) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = yp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var je = e0(O, k.mode, G);
        return je.ref = yp(k, H, O), je.return = k, je;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var ve = n0(O, k.mode, G);
          return ve.return = k, ve;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, G, ve) {
        if (H === null || H.tag !== ct) {
          var oe = Po(O, k.mode, G, ve);
          return oe.return = k, oe;
        } else {
          var je = u(H, O);
          return je.return = k, je;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = t0("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case lr: {
              var ve = e0(H, k.mode, O);
              return ve.ref = yp(k, null, H), ve.return = k, ve;
            }
            case ha: {
              var oe = n0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ie: {
              var je = H._payload, We = H._init;
              return _(k, We(je), O);
            }
          }
          if (Ke(H) || pn(H)) {
            var Xt = Po(H, k.mode, O, null);
            return Xt.return = k, Xt;
          }
          Ih(k, H);
        }
        return typeof H == "function" && $h(k), null;
      }
      function w(k, H, O, G) {
        var ve = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case lr:
              return O.key === ve ? v(k, H, O, G) : null;
            case ha:
              return O.key === ve ? y(k, H, O, G) : null;
            case Ie: {
              var oe = O._payload, je = O._init;
              return w(k, H, je(oe), G);
            }
          }
          if (Ke(O) || pn(O))
            return ve !== null ? null : g(k, H, O, G, null);
          Ih(k, O);
        }
        return typeof O == "function" && $h(k), null;
      }
      function M(k, H, O, G, ve) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + G, ve);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case lr: {
              var je = k.get(G.key === null ? O : G.key) || null;
              return v(H, je, G, ve);
            }
            case ha: {
              var We = k.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, ve);
            }
            case Ie:
              var Xt = G._payload, Ot = G._init;
              return M(k, H, O, Ot(Xt), ve);
          }
          if (Ke(G) || pn(G)) {
            var Wn = k.get(O) || null;
            return g(H, Wn, G, ve, null);
          }
          Ih(H, G);
        }
        return typeof G == "function" && $h(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case lr:
            case ha:
              sE(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ie:
              var ve = k._payload, oe = k._init;
              U(oe(ve), H, O);
              break;
          }
        }
        return H;
      }
      function F(k, H, O, G) {
        for (var ve = null, oe = 0; oe < O.length; oe++) {
          var je = O[oe];
          ve = U(je, ve, k);
        }
        for (var We = null, Xt = null, Ot = H, Wn = 0, Lt = 0, Hn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (Hn = Ot, Ot = null) : Hn = Ot.sibling;
          var sa = w(k, Ot, O[Lt], G);
          if (sa === null) {
            Ot === null && (Ot = Hn);
            break;
          }
          e && Ot && sa.alternate === null && t(k, Ot), Wn = s(sa, Wn, Lt), Xt === null ? We = sa : Xt.sibling = sa, Xt = sa, Ot = Hn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), jr()) {
            var Ir = Lt;
            $s(k, Ir);
          }
          return We;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var ui = _(k, O[Lt], G);
            ui !== null && (Wn = s(ui, Wn, Lt), Xt === null ? We = ui : Xt.sibling = ui, Xt = ui);
          }
          if (jr()) {
            var xa = Lt;
            $s(k, xa);
          }
          return We;
        }
        for (var _a = i(k, Ot); Lt < O.length; Lt++) {
          var ca = M(_a, k, Lt, O[Lt], G);
          ca !== null && (e && ca.alternate !== null && _a.delete(ca.key === null ? Lt : ca.key), Wn = s(ca, Wn, Lt), Xt === null ? We = ca : Xt.sibling = ca, Xt = ca);
        }
        if (e && _a.forEach(function(Gf) {
          return t(k, Gf);
        }), jr()) {
          var Au = Lt;
          $s(k, Au);
        }
        return We;
      }
      function ae(k, H, O, G) {
        var ve = pn(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === ve && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var oe = ve.call(O);
          if (oe)
            for (var je = null, We = oe.next(); !We.done; We = oe.next()) {
              var Xt = We.value;
              je = U(Xt, je, k);
            }
        }
        var Ot = ve.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Lt = null, Hn = H, sa = 0, Ir = 0, ui = null, xa = Ot.next(); Hn !== null && !xa.done; Ir++, xa = Ot.next()) {
          Hn.index > Ir ? (ui = Hn, Hn = null) : ui = Hn.sibling;
          var _a = w(k, Hn, xa.value, G);
          if (_a === null) {
            Hn === null && (Hn = ui);
            break;
          }
          e && Hn && _a.alternate === null && t(k, Hn), sa = s(_a, sa, Ir), Lt === null ? Wn = _a : Lt.sibling = _a, Lt = _a, Hn = ui;
        }
        if (xa.done) {
          if (a(k, Hn), jr()) {
            var ca = Ir;
            $s(k, ca);
          }
          return Wn;
        }
        if (Hn === null) {
          for (; !xa.done; Ir++, xa = Ot.next()) {
            var Au = _(k, xa.value, G);
            Au !== null && (sa = s(Au, sa, Ir), Lt === null ? Wn = Au : Lt.sibling = Au, Lt = Au);
          }
          if (jr()) {
            var Gf = Ir;
            $s(k, Gf);
          }
          return Wn;
        }
        for (var qp = i(k, Hn); !xa.done; Ir++, xa = Ot.next()) {
          var Yl = M(qp, k, Ir, xa.value, G);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Ir : Yl.key), sa = s(Yl, sa, Ir), Lt === null ? Wn = Yl : Lt.sibling = Yl, Lt = Yl);
        }
        if (e && qp.forEach(function(Xb) {
          return t(k, Xb);
        }), jr()) {
          var Kb = Ir;
          $s(k, Kb);
        }
        return Wn;
      }
      function Oe(k, H, O, G) {
        if (H !== null && H.tag === we) {
          a(k, H.sibling);
          var ve = u(H, O);
          return ve.return = k, ve;
        }
        a(k, H);
        var oe = t0(O, k.mode, G);
        return oe.return = k, oe;
      }
      function Te(k, H, O, G) {
        for (var ve = O.key, oe = H; oe !== null; ) {
          if (oe.key === ve) {
            var je = O.type;
            if (je === Qr) {
              if (oe.tag === ct) {
                a(k, oe.sibling);
                var We = u(oe, O.props.children);
                return We.return = k, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (oe.elementType === je || // Keep this check inline so it only runs on the false path:
            mR(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof je == "object" && je !== null && je.$$typeof === Ie && cE(je) === oe.type) {
              a(k, oe.sibling);
              var Xt = u(oe, O.props);
              return Xt.ref = yp(k, oe, O), Xt.return = k, Xt._debugSource = O._source, Xt._debugOwner = O._owner, Xt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === Qr) {
          var Ot = Po(O.props.children, k.mode, G, O.key);
          return Ot.return = k, Ot;
        } else {
          var Wn = e0(O, k.mode, G);
          return Wn.ref = yp(k, H, O), Wn.return = k, Wn;
        }
      }
      function xt(k, H, O, G) {
        for (var ve = O.key, oe = H; oe !== null; ) {
          if (oe.key === ve)
            if (oe.tag === Fe && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var je = u(oe, O.children || []);
              return je.return = k, je;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var We = n0(O, k.mode, G);
        return We.return = k, We;
      }
      function mt(k, H, O, G) {
        var ve = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case lr:
              return f(Te(k, H, O, G));
            case ha:
              return f(xt(k, H, O, G));
            case Ie:
              var oe = O._payload, je = O._init;
              return mt(k, H, je(oe), G);
          }
          if (Ke(O))
            return F(k, H, O, G);
          if (pn(O))
            return ae(k, H, O, G);
          Ih(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Oe(k, H, "" + O, G)) : (typeof O == "function" && $h(k), a(k, H));
      }
      return mt;
    }
    var Of = fE(!0), dE = fE(!1);
    function _x(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function bx(e, t) {
      for (var a = e.child; a !== null; )
        vb(a, t), a = a.sibling;
    }
    var ug = _o(null), og;
    og = {};
    var Qh = null, Lf = null, sg = null, Wh = !1;
    function Gh() {
      Qh = null, Lf = null, sg = null, Wh = !1;
    }
    function pE() {
      Wh = !0;
    }
    function vE() {
      Wh = !1;
    }
    function hE(e, t, a) {
      ua(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      la(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (vu(i.childLanes, t) ? u !== null && !vu(u.childLanes, t) && (u.childLanes = Xe(u.childLanes, t)) : (i.childLanes = Xe(i.childLanes, t), u !== null && (u.childLanes = Xe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dx(e, t, a) {
      kx(e, t, a);
    }
    function kx(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === se) {
                var p = tr(a), v = Ou(Yt, p);
                v.tag = Kh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Xe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Xe(w.lanes, a)), fg(i.return, a, e), s.lanes = Xe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ut)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === dn) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Xe(M.lanes, a);
          var U = M.alternate;
          U !== null && (U.lanes = Xe(U.lanes, a)), fg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      Qh = e, Lf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function rr(e) {
      Wh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Qh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Qh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Ks = null;
    function dg(e) {
      Ks === null ? Ks = [e] : Ks.push(e);
    }
    function Ox() {
      if (Ks !== null) {
        for (var e = 0; e < Ks.length; e++) {
          var t = Ks[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Ks = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Lx(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Nx(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, qh(e, i);
    }
    function Va(e, t) {
      return qh(e, t);
    }
    var Mx = qh;
    function qh(e, t) {
      e.lanes = Xe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Xe(a.lanes, t)), a === null && (e.flags & (Sn | En)) !== xe && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Xe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Xe(a.childLanes, t) : (u.flags & (Sn | En)) !== xe && dR(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Kh = 2, pg = 3, Xh = !1, vg, Jh;
    vg = !1, Jh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ou(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Oo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Jh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), L1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Mx(e, a);
      } else
        return Nx(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Kc(s, e.pendingLanes);
          var f = Xe(s, a);
          u.lanes = f, _s(e, f);
        }
      }
    }
    function mg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function zx(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & qe) {
                Bt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Bt(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case pg:
          e.flags = e.flags & ~xr | at;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & qe) {
                Bt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Bt(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : Ge({}, i, y);
        }
        case Kh:
          return Xh = !0, i;
      }
      return i;
    }
    function em(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, U = P, F = null, ae = null, Oe = null, Te = s;
        do {
          var xt = Te.lane, mt = Te.eventTime;
          if (vu(i, xt)) {
            if (Oe !== null) {
              var H = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jn,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Oe = Oe.next = H;
            }
            M = zx(e, u, Te, M, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== jn) {
              e.flags |= en;
              var G = u.effects;
              G === null ? u.effects = [Te] : G.push(Te);
            }
          } else {
            var k = {
              eventTime: mt,
              lane: xt,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Oe === null ? (ae = Oe = k, F = M) : Oe = Oe.next = k, U = Xe(U, xt);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, oe = ve.next;
            ve.next = null, Te = oe, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Oe === null && (F = M), u.baseState = F, u.firstBaseUpdate = ae, u.lastBaseUpdate = Oe;
        var je = u.shared.interleaved;
        if (je !== null) {
          var We = je;
          do
            U = Xe(U, We.lane), We = We.next;
          while (We !== je);
        } else s === null && (u.shared.lanes = P);
        Ip(U), e.lanes = U, e.memoizedState = M;
      }
      Jh = null;
    }
    function Ux(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Xh = !1;
    }
    function tm() {
      return Xh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Ux(f, a));
        }
    }
    var gp = {}, Lo = _o(gp), Sp = _o(gp), nm = _o(gp);
    function rm(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RE() {
      var e = rm(nm.current);
      return e;
    }
    function yg(e, t) {
      ua(nm, t, e), ua(Sp, e, e), ua(Lo, gp, e);
      var a = JT(t);
      la(Lo, e), ua(Lo, a, e);
    }
    function Mf(e) {
      la(Lo, e), la(Sp, e), la(nm, e);
    }
    function gg() {
      var e = rm(Lo.current);
      return e;
    }
    function TE(e) {
      rm(nm.current);
      var t = rm(Lo.current), a = ZT(t, e.type);
      t !== a && (ua(Sp, e, e), ua(Lo, a, e));
    }
    function Sg(e) {
      Sp.current === e && (la(Lo, e), la(Sp, e));
    }
    var Ax = 0, wE = 1, xE = 1, Ep = 2, Ji = _o(Ax);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function jx(e, t) {
      return e | t;
    }
    function No(e, t) {
      ua(Ji, t, e);
    }
    function Uf(e) {
      la(Ji, e);
    }
    function Fx(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === It && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & at) !== xe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), dr = (
      /* */
      1
    ), Al = (
      /*  */
      2
    ), pr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function Hx(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var de = it.ReactCurrentDispatcher, Cp = it.ReactCurrentBatchConfig, wg, Af;
    wg = /* @__PURE__ */ new Set();
    var Xs = P, Kt = null, vr = null, hr = null, im = !1, Rp = !1, Tp = 0, Px = 0, Vx = 25, V = null, _i = null, Mo = -1, xg = !1;
    function Ht() {
      {
        var e = V;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ee() {
      {
        var e = V;
        _i !== null && (Mo++, _i[Mo] !== e && Bx(e));
      }
    }
    function jf(e) {
      e != null && !Ke(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Bx(e) {
      {
        var t = Ve(Kt);
        if (!wg.has(t) && (wg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Mo; u++) {
            for (var s = _i[u], f = u === Mo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function _g(e, t) {
      if (xg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ue(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, Kt = t, _i = e !== null ? e._debugHookTypes : null, Mo = -1, xg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? de.current = WE : _i !== null ? de.current = QE : de.current = $E;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Vx)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, xg = !1, vr = null, hr = null, t.updateQueue = null, Mo = -1, de.current = GE, f = a(i, u);
        } while (Rp);
      }
      de.current = gm, t._debugHookTypes = _i;
      var v = vr !== null && vr.next !== null;
      if (Xs = P, Kt = null, vr = null, hr = null, V = null, _i = null, Mo = -1, e !== null && (e.flags & An) !== (t.flags & An) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & st) !== _e && S("Internal React error: Expected static flag was missing. Please notify the React team."), im = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function _E(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== _e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function bE() {
      if (de.current = gm, im) {
        for (var e = Kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        im = !1;
      }
      Xs = P, Kt = null, vr = null, hr = null, _i = null, Mo = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function jl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return hr === null ? Kt.memoizedState = hr = e : hr = hr.next = e, hr;
    }
    function bi() {
      var e;
      if (vr === null) {
        var t = Kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = vr.next;
      var a;
      if (hr === null ? a = Kt.memoizedState : a = hr.next, a !== null)
        hr = a, a = hr.next, vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        vr = e;
        var i = {
          memoizedState: vr.memoizedState,
          baseState: vr.baseState,
          baseQueue: vr.baseQueue,
          queue: vr.queue,
          next: null
        };
        hr === null ? Kt.memoizedState = hr = i : hr = hr.next = i;
      }
      return hr;
    }
    function DE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
      var i = jl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Qx.bind(null, Kt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = vr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, M = null, U = null, F = g;
        do {
          var ae = F.lane;
          if (vu(Xs, ae)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: jn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (F.hasEagerState)
              _ = F.eagerState;
            else {
              var xt = F.action;
              _ = e(_, xt);
            }
          } else {
            var Oe = {
              lane: ae,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            U === null ? (M = U = Oe, w = _) : U = U.next = Oe, Kt.lanes = Xe(Kt.lanes, ae), Ip(ae);
          }
          F = F.next;
        } while (F !== null && F !== g);
        U === null ? w = _ : U.next = M, ue(_, i.memoizedState) || Np(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var k = mt;
        do {
          var H = k.lane;
          Kt.lanes = Xe(Kt.lanes, H), Ip(H), k = k.next;
        } while (k !== mt);
      } else f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ue(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function hD(e, t, a) {
    }
    function mD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Kt, u = jl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          ue(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = jm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Xs) || kE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, cm(LE.bind(null, i, y, e), [e]), i.flags |= ma, wp(dr | Fr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function lm(e, t, a) {
      var i = Kt, u = bi(), s = t();
      if (!Af) {
        var f = t();
        ue(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !ue(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(LE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      hr !== null && hr.memoizedState.tag & dr) {
        i.flags |= ma, wp(dr | Fr, OE.bind(null, i, y, s, t), void 0, null);
        var g = jm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Xs) || kE(i, t, s);
      }
      return s;
    }
    function kE(e, t, a) {
      e.flags |= wc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Kt.updateQueue;
      if (u === null)
        u = DE(), Kt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NE(t) && ME(e);
    }
    function LE(e, t, a) {
      var i = function() {
        NE(t) && ME(e);
      };
      return a(i);
    }
    function NE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ue(a, i);
      } catch {
        return !0;
      }
    }
    function ME(e) {
      var t = Va(e, Ue);
      t !== null && Sr(t, e, Ue, Yt);
    }
    function um(e) {
      var t = jl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Wx.bind(null, Kt, a);
      return [t.memoizedState, i];
    }
    function Ng(e) {
      return kg(bg);
    }
    function Mg(e) {
      return Og(bg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Kt.updateQueue;
      if (s === null)
        s = DE(), Kt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function zg(e) {
      var t = jl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function om(e) {
      var t = bi();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = jl(), s = i === void 0 ? null : i;
      Kt.flags |= e, u.memoizedState = wp(dr | t, a, void 0, s);
    }
    function sm(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
      if (vr !== null) {
        var p = vr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      Kt.flags |= e, u.memoizedState = wp(dr | t, a, f, s);
    }
    function cm(e, t) {
      return (Kt.mode & qt) !== _e ? xp(ml | ma | fd, Fr, e, t) : xp(ma | fd, Fr, e, t);
    }
    function _p(e, t) {
      return sm(ma, Fr, e, t);
    }
    function Ug(e, t) {
      return xp(pt, Al, e, t);
    }
    function fm(e, t) {
      return sm(pt, Al, e, t);
    }
    function Ag(e, t) {
      var a = pt;
      return a |= hl, (Kt.mode & qt) !== _e && (a |= Mr), xp(a, pr, e, t);
    }
    function dm(e, t) {
      return sm(pt, pr, e, t);
    }
    function zE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function jg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = pt;
      return u |= hl, (Kt.mode & qt) !== _e && (u |= Mr), xp(u, pr, zE.bind(null, t, e), i);
    }
    function pm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return sm(pt, pr, zE.bind(null, t, e), i);
    }
    function Yx(e, t) {
    }
    var vm = Yx;
    function Fg(e, t) {
      var a = jl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function hm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = jl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function mm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Pg(e) {
      var t = jl();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = bi(), a = vr, i = a.memoizedState;
      return jE(t, i, e);
    }
    function AE(e) {
      var t = bi();
      if (vr === null)
        return t.memoizedState = e, e;
      var a = vr.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!ue(a, t)) {
          var u = Nd();
          Kt.lanes = Xe(Kt.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Ix(e, t, a) {
      var i = ga();
      In(bs(i, Aa)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && lt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Vg() {
      var e = um(!1), t = e[0], a = e[1], i = Ix.bind(null, a), u = jl();
      return u.memoizedState = i, [t, i];
    }
    function FE() {
      var e = Ng(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Mg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function $x() {
      return PE;
    }
    function Bg() {
      var e = jl(), t = jm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = ox();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Px++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function ym() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Qx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = wa();
          Sr(s, e, i, f), YE(s, t, i);
        }
      }
      IE(e, i);
    }
    function Wx(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = de.current, de.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ue(y, v)) {
                Lx(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              de.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var _ = wa();
          Sr(g, e, i, _), YE(g, t, i);
        }
      }
      IE(e, i);
    }
    function VE(e) {
      var t = e.alternate;
      return e === Kt || t !== null && t === Kt;
    }
    function BE(e, t) {
      Rp = im = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Kc(i, e.pendingLanes);
        var u = Xe(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function IE(e, t, a) {
      ms(e, t);
    }
    var gm = {
      readContext: rr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: ye
    }, $E = null, QE = null, WE = null, GE = null, Fl = null, Zi = null, Sm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ht(), jf(t), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ht(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ht(), jf(t), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ht(), jf(a), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ht(), jf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ht(), jf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ht(), jf(t);
          var a = de.current;
          de.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ht();
          var i = de.current;
          de.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ht(), zg(e);
        },
        useState: function(e) {
          V = "useState", Ht();
          var t = de.current;
          de.current = Fl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ht(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ht(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ht(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ht(), Bg();
        },
        unstable_isNewReconciler: ye
      }, QE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = de.current;
          de.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = de.current;
          de.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), zg(e);
        },
        useState: function(e) {
          V = "useState", ee();
          var t = de.current;
          de.current = Fl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", ee(), Bg();
        },
        unstable_isNewReconciler: ye
      }, WE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = de.current;
          de.current = Zi;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = de.current;
          de.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), om();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = de.current;
          de.current = Zi;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ee(), ym();
        },
        unstable_isNewReconciler: ye
      }, GE = {
        readContext: function(e) {
          return rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = de.current;
          de.current = Sm;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = de.current;
          de.current = Sm;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), om();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = de.current;
          de.current = Sm;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", ee(), ym();
        },
        unstable_isNewReconciler: ye
      }, Fl = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), Ht(), Fg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), Ht(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), Ht(), cm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), Ht(), jg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), Ht(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), Ht(), Ag(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), Ht();
          var a = de.current;
          de.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), Ht();
          var i = de.current;
          de.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), Ht(), zg(e);
        },
        useState: function(e) {
          V = "useState", $e(), Ht();
          var t = de.current;
          de.current = Fl;
          try {
            return um(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), Ht(), Pg(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), Ht(), Vg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), Ht(), Lg(e, t, a);
        },
        useId: function() {
          return V = "useId", $e(), Ht(), Bg();
        },
        unstable_isNewReconciler: ye
      }, Zi = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), ee();
          var a = de.current;
          de.current = Zi;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), ee();
          var i = de.current;
          de.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), ee(), om();
        },
        useState: function(e) {
          V = "useState", $e(), ee();
          var t = de.current;
          de.current = Zi;
          try {
            return Ng(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), ee(), UE(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), ee(), FE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", $e(), ee(), ym();
        },
        unstable_isNewReconciler: ye
      }, Sm = {
        readContext: function(e) {
          return Yg(), rr(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", $e(), ee(), hm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", $e(), ee(), rr(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", $e(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", $e(), ee(), pm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", $e(), ee(), fm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", $e(), ee(), dm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", $e(), ee();
          var a = de.current;
          de.current = Zi;
          try {
            return mm(e, t);
          } finally {
            de.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", $e(), ee();
          var i = de.current;
          de.current = Zi;
          try {
            return Og(e, t, a);
          } finally {
            de.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", $e(), ee(), om();
        },
        useState: function(e) {
          V = "useState", $e(), ee();
          var t = de.current;
          de.current = Zi;
          try {
            return Mg(e);
          } finally {
            de.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", $e(), ee(), vm();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", $e(), ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", $e(), ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", $e(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", $e(), ee(), lm(e, t);
        },
        useId: function() {
          return V = "useId", $e(), ee(), ym();
        },
        unstable_isNewReconciler: ye
      };
    }
    var zo = A.unstable_now, qE = 0, Em = -1, bp = -1, Cm = -1, Ig = !1, Rm = !1;
    function KE() {
      return Ig;
    }
    function Gx() {
      Rm = !0;
    }
    function qx() {
      Ig = !1, Rm = !1;
    }
    function Kx() {
      Ig = Rm, Rm = !1;
    }
    function XE() {
      return qE;
    }
    function JE() {
      qE = zo();
    }
    function $g(e) {
      bp = zo(), e.actualStartTime < 0 && (e.actualStartTime = zo());
    }
    function ZE(e) {
      bp = -1;
    }
    function Tm(e, t) {
      if (bp >= 0) {
        var a = zo() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Hl(e) {
      if (Em >= 0) {
        var t = zo() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Dt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (Cm >= 0) {
        var t = zo() - Cm;
        Cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Dt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Pl() {
      Em = zo();
    }
    function Wg() {
      Cm = zo();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function el(e, t) {
      if (e && e.defaultProps) {
        var a = Ge({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Kg, Xg, Jg, Zg, eS, eC, wm, tS, nS, rS, Dp;
    {
      Kg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      wm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = Tt(e) || "Component";
          eS.has(a) || (eS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function aS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & qe) {
          Bt(!0);
          try {
            s = a(i, u);
          } finally {
            Bt(!1);
          }
        }
        eC(t, s);
      }
      var f = s == null ? u : Ge({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = no(e), u = wa(), s = Fo(i), f = Ou(u, s);
        f.payload = t, a != null && (wm(a, "setState"), f.callback = a);
        var p = Oo(i, f, s);
        p !== null && (Sr(p, i, s, u), Zh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = no(e), u = wa(), s = Fo(i), f = Ou(u, s);
        f.tag = gE, f.payload = t, a != null && (wm(a, "replaceState"), f.callback = a);
        var p = Oo(i, f, s);
        p !== null && (Sr(p, i, s, u), Zh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = no(e), i = wa(), u = Fo(a), s = Ou(i, u);
        s.tag = Kh, t != null && (wm(t, "forceUpdate"), s.callback = t);
        var f = Oo(a, s, u);
        f !== null && (Sr(f, a, u, i), Zh(f, a, u)), _d(a, u);
      }
    };
    function nC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qe) {
            Bt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Bt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Tt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !De(a, i) || !De(u, s) : !0;
    }
    function Xx(e, t, a) {
      var i = e.stateNode;
      {
        var u = Tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Ke(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, ss(t, e), t._reactInternalInstance = qg;
    }
    function aC(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Tt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = rr(f);
      else {
        u = xf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? _f(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & qe) {
        Bt(!0);
        try {
          g = new t(a, s);
        } finally {
          Bt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = Tt(t) || "Component";
          Xg.has(w) || (Xg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, U = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || U !== null || F !== null) {
            var ae = Tt(t) || "Component", Oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Zg.has(ae) || (Zg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Oe, M !== null ? `
  ` + M : "", U !== null ? `
  ` + U : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && W0(e, u, s), g;
    }
    function Jx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ve(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ve(e) || "Component";
          Kg.has(s) || (Kg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      Xx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = rr(s);
      else {
        var f = xf(e, t, !0);
        u.context = _f(e, f);
      }
      {
        if (u.state === a) {
          var p = Tt(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qe && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Jx(e, u), em(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = pt;
        y |= hl, (e.mode & qt) !== _e && (y |= Mr), e.flags |= y;
      }
    }
    function Zx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = rr(p);
      else {
        var y = xf(e, t, !0);
        v = _f(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var w = e.memoizedState, M = u.state = w;
      if (em(e, a, u, i), M = e.memoizedState, s === a && w === M && !Uh() && !tm()) {
        if (typeof u.componentDidMount == "function") {
          var U = pt;
          U |= hl, (e.mode & qt) !== _e && (U |= Mr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), M = e.memoizedState);
      var F = tm() || nC(e, t, s, a, w, M, v);
      if (F) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = pt;
          ae |= hl, (e.mode & qt) !== _e && (ae |= Mr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Oe = pt;
          Oe |= hl, (e.mode & qt) !== _e && (Oe |= Mr), e.flags |= Oe;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function e_(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : el(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ii;
      if (typeof g == "object" && g !== null)
        _ = rr(g);
      else {
        var w = xf(t, a, !0);
        _ = _f(t, w);
      }
      var M = a.getDerivedStateFromProps, U = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && iC(t, s, i, _), EE();
      var F = t.memoizedState, ae = s.state = F;
      if (em(t, i, s, u), ae = t.memoizedState, f === v && F === ae && !Uh() && !tm() && !ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), !1;
      typeof M == "function" && (aS(t, a, M, i), ae = t.memoizedState);
      var Oe = tm() || nC(t, a, p, i, F, ae, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ne;
      return Oe ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, _)), typeof s.componentDidUpdate == "function" && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= pt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = _, Oe;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Rt(t),
        digest: null
      };
    }
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function t_(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = t_(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === se)
            return;
          console.error(i);
        }
        var p = u ? Ve(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ve(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var n_ = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = Ou(Yt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        G1(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Ou(Yt, a);
      i.tag = pg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), oS(e, t), typeof u != "function" && Q1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, Ue) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ve(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new n_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = q1.bind(null, e, t, a);
        _r && $p(e, a), t.then(s, s);
      }
    }
    function r_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function a_(e, t) {
      var a = e.tag;
      if ((e.mode & st) === _e && (a === Ee || a === ze || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Re && Fx(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & st) === _e) {
        if (e === t)
          e.flags |= xr;
        else {
          if (e.flags |= at, a.flags |= ei, a.flags &= -52805, a.tag === se) {
            var s = a.alternate;
            if (s === null)
              a.tag = Nt;
            else {
              var f = Ou(Yt, Ue);
              f.tag = Kh, Oo(a, f, Ue);
            }
          }
          a.lanes = Xe(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= xr, e.lanes = u, e;
    }
    function i_(e, t, a, i, u) {
      if (a.flags |= iu, _r && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        a_(a), jr() && a.mode & st && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~vn, sC(f, t, a, e, u), f.mode & st && uC(e, s, u), r_(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & st) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & xr) === xe && (v.flags |= vn), sC(v, t, a, e, u), tg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), F1(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= xr;
            var _ = tr(u);
            y.lanes = Xe(y.lanes, _);
            var w = lC(y, g, _);
            mg(y, w);
            return;
          }
          case se:
            var M = i, U = y.type, F = y.stateNode;
            if ((y.flags & at) === xe && (typeof U.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !oR(F))) {
              y.flags |= xr;
              var ae = tr(u);
              y.lanes = Xe(y.lanes, ae);
              var Oe = sS(y, M, ae);
              mg(y, Oe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function l_() {
      return null;
    }
    var kp = it.ReactCurrentOwner, tl = !1, cS, Op, fS, dS, pS, Zs, vS, xm, Lp;
    cS = {}, Op = {}, fS = {}, dS = {}, pS = {}, Zs = !1, vS = {}, xm = {}, Lp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function u_(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), Ua(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & qe) {
          Bt(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            Bt(!1);
          }
        }
        ka(!1);
      }
      return El(), e !== null && !tl ? (_E(e, t, u), Lu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (db(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = He, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && qi(
            p,
            i,
            // Resolved props
            "prop",
            Tt(s)
          ), a.defaultProps !== void 0) {
            var v = Tt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = ZS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && qi(
          _,
          i,
          // Resolved props
          "prop",
          Tt(g)
        );
      }
      var w = e.child, M = TS(e, u);
      if (!M) {
        var U = w.memoizedProps, F = a.compare;
        if (F = F !== null ? F : De, F(U, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Ii;
      var ae = ac(w, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function dC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ie) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && qi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Tt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (De(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (tl = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & ei) !== xe && (tl = !0);
          else return t.lanes = e.lanes, Lu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & st) === _e) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (ra(a, ta)) {
          var _ = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Xe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ta;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Xe(s.baseLanes, a), t.memoizedState = null) : M = a, Fm(t, M);
      }
      return Ra(e, t, u, a), t.child;
    }
    function o_(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function s_(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function c_(e, t, a) {
      {
        t.flags |= pt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Un, t.flags |= fs);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && qi(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = _f(t, p);
      }
      var v, y;
      Nf(t, u), Ua(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & qe) {
          Bt(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            Bt(!1);
          }
        }
        ka(!1);
      }
      return El(), e !== null && !tl ? (_E(e, t, u), Lu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (bb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= at, t.flags |= xr;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = Xe(t.lanes, g);
            var _ = sS(t, Js(y, t), g);
            mg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && qi(
            w,
            i,
            // Resolved props
            "prop",
            Tt(a)
          );
        }
      }
      var M;
      Ul(a) ? (M = !0, jh(t)) : M = !1, Nf(t, u);
      var U = t.stateNode, F;
      U === null ? (bm(e, t), aC(t, a, i), lS(t, a, i, u), F = !0) : e === null ? F = Zx(t, a, i, u) : F = e_(e, t, a, i, u);
      var ae = mS(e, t, a, F, M, u);
      {
        var Oe = t.stateNode;
        F && Oe.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ve(t) || "a component"), Zs = !0);
      }
      return ae;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & at) !== xe;
      if (!i && !f)
        return u && K0(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZE();
      else {
        Ua(t);
        {
          if (ka(!0), v = p.render(), t.mode & qe) {
            Bt(!0);
            try {
              p.render();
            } finally {
              Bt(!1);
            }
          }
          ka(!1);
        }
        El();
      }
      return t.flags |= Ii, e !== null && f ? u_(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function f_(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), em(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & vn) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, _);
        } else {
          vx(t);
          var w = dE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~Sn | En, M = M.sibling;
        }
      } else {
        if (kf(), p === s)
          return Lu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return kf(), tg(u), t.flags |= vn, Ra(e, t, a, i), t.child;
    }
    function d_(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Vt), vC(e, t), Ra(e, t, f, a), t.child;
    }
    function p_(e, t) {
      return e === null && eg(t), null;
    }
    function v_(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = pb(v), g = el(v, u), _;
      switch (y) {
        case Ee:
          return yS(t, v), t.type = v = Wf(v), _ = hS(null, t, v, g, i), _;
        case se:
          return t.type = v = WS(v), _ = hC(null, t, v, g, i), _;
        case ze:
          return t.type = v = GS(v), _ = cC(null, t, v, g, i), _;
        case ft: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && qi(
              w,
              g,
              // Resolved for outer only
              "prop",
              Tt(v)
            );
          }
          return _ = fC(
            null,
            t,
            v,
            el(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ie && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function h_(e, t, a, i, u) {
      bm(e, t), t.tag = se;
      var s;
      return Ul(a) ? (s = !0, jh(t)) : s = !1, Nf(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function m_(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = _f(t, f);
      }
      Nf(t, i);
      var p, v;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Tt(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & qe && Xi.recordLegacyContextWarning(t, null), ka(!0), kp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), ka(!1);
      }
      if (El(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Tt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = Tt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = se, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ul(a) ? (w = !0, jh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Ee, t.mode & qe) {
          Bt(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            Bt(!1);
          }
        }
        return jr() && v && qy(t), Ra(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Tt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Tt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Tt(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: jn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: l_(),
        transitions: null
      };
    }
    function y_(e, t) {
      var a = null;
      return {
        baseLanes: Xe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function g_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, Ep);
    }
    function S_(e, t) {
      return xs(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      Db(t) && (t.flags |= at);
      var u = Ji.current, s = !1, f = (t.flags & at) !== xe;
      if (f || g_(u, e) ? (s = !0, t.flags &= ~at) : (e === null || e.memoizedState !== null) && (u = jx(u, xE)), u = zf(u), No(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return w_(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = E_(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, _;
        } else
          return ES(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var U = M.dehydrated;
          if (U !== null)
            return x_(e, t, f, i, U, M, a);
        }
        if (s) {
          var F = i.fallback, ae = i.children, Oe = R_(e, t, ae, F, a), Te = t.child, xt = e.child.memoizedState;
          return Te.memoizedState = xt === null ? SS(a) : y_(xt, a), Te.childLanes = S_(e, a), t.memoizedState = gS, Oe;
        } else {
          var mt = i.children, k = C_(e, t, mt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function E_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & st) === _e && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & St && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Po(a, u, i, null)) : (p = CS(f, u), v = Po(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return SR(e, t, P, null);
    }
    function SC(e, t) {
      return ac(e, t);
    }
    function C_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & st) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function R_(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & st) === _e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & St && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & An;
      var _;
      return p !== null ? _ = ac(p, i) : (_ = Po(i, s, u, null), _.flags |= Sn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function _m(e, t, a, i) {
      i !== null && tg(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= Sn, t.memoizedState = null, f;
    }
    function T_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Po(i, s, u, null);
      return v.flags |= Sn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & st) !== _e && Of(t, e.child, null, u), v;
    }
    function w_(e, t, a) {
      return (e.mode & st) === _e ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : Hy(t) ? e.lanes = er : e.lanes = ta, null;
    }
    function x_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & vn) {
          t.flags &= ~vn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= at, null;
          var H = i.children, O = i.fallback, G = T_(e, t, H, O, f), ve = t.child;
          return ve.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (dx(), (t.mode & st) === _e)
          return _m(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = kw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(_, p, y);
          return _m(e, t, f, w);
        }
        var M = ra(f, e.childLanes);
        if (tl || M) {
          var U = jm();
          if (U !== null) {
            var F = Zc(U, f);
            if (F !== jn && F !== s.retryLane) {
              s.retryLane = F;
              var ae = Yt;
              Va(e, F), Sr(U, e, F, ae);
            }
          }
          BS();
          var Oe = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, Oe);
        } else if (B0(u)) {
          t.flags |= at, t.child = e.child;
          var Te = K1.bind(null, e);
          return Ow(u, Te), null;
        } else {
          hx(t, u, s.treeContext);
          var xt = i.children, mt = ES(t, xt);
          return mt.flags |= En, mt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Xe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Xe(i.lanes, t)), fg(e.return, t, a);
    }
    function __(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && EC(i, a, e);
        } else if (i.tag === It)
          EC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function b_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && am(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function D_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function k_(e, t) {
      e !== void 0 && !xm[e] && (e !== "collapsed" && e !== "hidden" ? (xm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (xm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = Ke(e), i = !a && typeof pn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function O_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ke(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = pn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!CC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function RC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      D_(u), k_(s, u), O_(f, u), Ra(e, t, f, a);
      var p = Ji.current, v = Eg(p, Ep);
      if (v)
        p = Cg(p, Ep), t.flags |= at;
      else {
        var y = e !== null && (e.flags & at) !== xe;
        y && __(t, t.child, a), p = zf(p);
      }
      if (No(t, p), (t.mode & st) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = b_(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var U = M.alternate;
              if (U !== null && am(U) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = w, w = M, M = F;
            }
            RS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            RS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function L_(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var TC = !1;
    function N_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && qi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ue(y, p)) {
          if (f.children === s.children && !Uh())
            return Lu(e, t, a);
        } else
          Dx(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var wC = !1;
    function M_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = rr(i);
      Ua(t);
      var p;
      return kp.current = t, ka(!0), p = s(f), ka(!1), El(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Np() {
      tl = !0;
    }
    function bm(e, t) {
      (t.mode & st) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Sn);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZE(), Ip(t.lanes), ra(a, t.childLanes) ? (_x(e, t), t.child) : null;
    }
    function z_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= Sn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function U_(e, t, a) {
      switch (t.tag) {
        case Z:
          mC(t), t.stateNode, kf();
          break;
        case le:
          TE(t);
          break;
        case se: {
          var i = t.type;
          Ul(i) && jh(t);
          break;
        }
        case Fe:
          yg(t, t.stateNode.containerInfo);
          break;
        case ut: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case Dt:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= pt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return No(t, zf(Ji.current)), t.flags |= at, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return gC(e, t, a);
            No(t, zf(Ji.current));
            var _ = Lu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            No(t, zf(Ji.current));
          break;
        }
        case It: {
          var w = (e.flags & at) !== xe, M = ra(a, t.childLanes);
          if (w) {
            if (M)
              return RC(e, t, a);
            t.flags |= at;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), No(t, Ji.current), M)
            break;
          return null;
        }
        case Ne:
        case At:
          return t.lanes = P, pC(e, t, a);
      }
      return Lu(e, t, a);
    }
    function xC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return z_(e, t, ZS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Uh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          tl = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & at) === xe)
            return tl = !1, U_(e, t, a);
          (e.flags & ei) !== xe ? tl = !0 : tl = !1;
        }
      } else if (tl = !1, jr() && lx(t)) {
        var f = t.index, p = ux();
        Z0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Me:
          return m_(e, t, t.type, a);
        case Rn: {
          var v = t.elementType;
          return v_(e, t, v, a);
        }
        case Ee: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : el(y, g);
          return hS(e, t, y, _, a);
        }
        case se: {
          var w = t.type, M = t.pendingProps, U = t.elementType === w ? M : el(w, M);
          return hC(e, t, w, U, a);
        }
        case Z:
          return f_(e, t, a);
        case le:
          return d_(e, t, a);
        case we:
          return p_(e, t);
        case Re:
          return gC(e, t, a);
        case Fe:
          return L_(e, t, a);
        case ze: {
          var F = t.type, ae = t.pendingProps, Oe = t.elementType === F ? ae : el(F, ae);
          return cC(e, t, F, Oe, a);
        }
        case ct:
          return o_(e, t, a);
        case Pn:
          return s_(e, t, a);
        case Dt:
          return c_(e, t, a);
        case ut:
          return N_(e, t, a);
        case an:
          return M_(e, t, a);
        case ft: {
          var Te = t.type, xt = t.pendingProps, mt = el(Te, xt);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && qi(
              k,
              mt,
              // Resolved for outer only
              "prop",
              Tt(Te)
            );
          }
          return mt = el(Te.type, mt), fC(e, t, Te, mt, a);
        }
        case He:
          return dC(e, t, t.type, t.pendingProps, a);
        case Nt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : el(H, O);
          return h_(e, t, H, G, a);
        }
        case It:
          return RC(e, t, a);
        case yt:
          break;
        case Ne:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= pt;
    }
    function _C(e) {
      e.flags |= Un, e.flags |= fs;
    }
    var bC, wS, DC, kC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === we)
          rw(e, u.stateNode);
        else if (u.tag !== Fe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, wS = function(e, t) {
    }, DC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = gg(), v = iw(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Mp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = xe;
      if (t) {
        if ((e.mode & St) !== _e) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Xe(a, Xe(y.lanes, y.childLanes)), i |= y.subtreeFlags & An, i |= y.flags & An, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Xe(a, Xe(g.lanes, g.childLanes)), i |= g.subtreeFlags & An, i |= g.flags & An, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & St) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Xe(a, Xe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Xe(a, Xe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function A_(e, t, a) {
      if (Ex() && (t.mode & st) !== _e && (t.flags & at) === xe)
        return lE(t), kf(), t.flags |= vn | iu | xr, !1;
      var i = Bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (gx(t), Hr(t), (t.mode & St) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & at) === xe && (t.memoizedState = null), t.flags |= pt, Hr(t), (t.mode & St) !== _e) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uE(), !0;
    }
    function OC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Me:
        case Rn:
        case He:
        case Ee:
        case ze:
        case ct:
        case Pn:
        case Dt:
        case an:
        case ft:
          return Hr(t), null;
        case se: {
          var u = t.type;
          return Ul(u) && Ah(t), Hr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Mf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Bh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & vn) !== xe) && (t.flags |= za, uE());
            }
          }
          return wS(e, t), Hr(t), null;
        }
        case le: {
          Sg(t);
          var v = RE(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && _C(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = gg(), _ = Bh(t);
            if (_)
              mx(t, v, g) && Pf(t);
            else {
              var w = nw(y, i, v, g, t);
              bC(w, t, !1, !1), t.stateNode = w, aw(w, y, i, v) && Pf(t);
            }
            t.ref !== null && _C(t);
          }
          return Hr(t), null;
        }
        case we: {
          var M = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            kC(e, t, U, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = RE(), ae = gg(), Oe = Bh(t);
            Oe ? yx(t) && Pf(t) : t.stateNode = lw(M, F, ae, t);
          }
          return Hr(t), null;
        }
        case Re: {
          Uf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var xt = A_(e, t, Te);
            if (!xt)
              return t.flags & xr ? t : null;
          }
          if ((t.flags & at) !== xe)
            return t.lanes = a, (t.mode & St) !== _e && Gg(t), t;
          var mt = Te !== null, k = e !== null && e.memoizedState !== null;
          if (mt !== k && mt) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & st) !== _e) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(Ji.current, xE) ? j1() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= pt), Hr(t), (t.mode & St) !== _e && mt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Mf(t), wS(e, t), e === null && Zw(t.stateNode.containerInfo), Hr(t), null;
        case ut:
          var oe = t.type._context;
          return cg(oe, t), Hr(t), null;
        case Nt: {
          var je = t.type;
          return Ul(je) && Ah(t), Hr(t), null;
        }
        case It: {
          Uf(t);
          var We = t.memoizedState;
          if (We === null)
            return Hr(t), null;
          var Xt = (t.flags & at) !== xe, Ot = We.rendering;
          if (Ot === null)
            if (Xt)
              Mp(We, !1);
            else {
              var Wn = H1() && (e === null || (e.flags & at) === xe);
              if (!Wn)
                for (var Lt = t.child; Lt !== null; ) {
                  var Hn = am(Lt);
                  if (Hn !== null) {
                    Xt = !0, t.flags |= at, Mp(We, !1);
                    var sa = Hn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= pt), t.subtreeFlags = xe, bx(t, a), No(t, Cg(Ji.current, Ep)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              We.tail !== null && xn() > XC() && (t.flags |= at, Xt = !0, Mp(We, !1), t.lanes = Pv);
            }
          else {
            if (!Xt) {
              var Ir = am(Ot);
              if (Ir !== null) {
                t.flags |= at, Xt = !0;
                var ui = Ir.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= pt), Mp(We, !0), We.tail === null && We.tailMode === "hidden" && !Ot.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              xn() * 2 - We.renderingStartTime > XC() && a !== ta && (t.flags |= at, Xt = !0, Mp(We, !1), t.lanes = Pv);
            }
            if (We.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var xa = We.last;
              xa !== null ? xa.sibling = Ot : t.child = Ot, We.last = Ot;
            }
          }
          if (We.tail !== null) {
            var _a = We.tail;
            We.rendering = _a, We.tail = _a.sibling, We.renderingStartTime = xn(), _a.sibling = null;
            var ca = Ji.current;
            return Xt ? ca = Cg(ca, Ep) : ca = zf(ca), No(t, ca), _a;
          }
          return Hr(t), null;
        }
        case yt:
          break;
        case Ne:
        case At: {
          VS(t);
          var Au = t.memoizedState, Gf = Au !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= yi);
          }
          return !Gf || (t.mode & st) === _e ? Hr(t) : ra(Bl, ta) && (Hr(t), t.subtreeFlags & (Sn | pt) && (t.flags |= yi)), null;
        }
        case ht:
          return null;
        case nt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function j_(e, t, a) {
      switch (Ky(t), t.tag) {
        case se: {
          var i = t.type;
          Ul(i) && Ah(t);
          var u = t.flags;
          return u & xr ? (t.flags = u & ~xr | at, (t.mode & St) !== _e && Gg(t), t) : null;
        }
        case Z: {
          t.stateNode, Mf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & xr) !== xe && (s & at) === xe ? (t.flags = s & ~xr | at, t) : null;
        }
        case le:
          return Sg(t), null;
        case Re: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & xr ? (t.flags = p & ~xr | at, (t.mode & St) !== _e && Gg(t), t) : null;
        }
        case It:
          return Uf(t), null;
        case Fe:
          return Mf(t), null;
        case ut:
          var v = t.type._context;
          return cg(v, t), null;
        case Ne:
        case At:
          return VS(t), null;
        case ht:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Ky(t), t.tag) {
        case se: {
          var i = t.type.childContextTypes;
          i != null && Ah(t);
          break;
        }
        case Z: {
          t.stateNode, Mf(t), Qy(t), Tg();
          break;
        }
        case le: {
          Sg(t);
          break;
        }
        case Fe:
          Mf(t);
          break;
        case Re:
          Uf(t);
          break;
        case It:
          Uf(t);
          break;
        case ut:
          var u = t.type._context;
          cg(u, t);
          break;
        case Ne:
        case At:
          VS(t);
          break;
      }
    }
    var NC = null;
    NC = /* @__PURE__ */ new Set();
    var Dm = !1, Pr = !1, F_ = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Vf = null, Bf = null;
    function H_(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var P_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & St)
        try {
          Pl(), t.componentWillUnmount();
        } finally {
          Hl(e);
        }
      else
        t.componentWillUnmount();
    };
    function MC(e, t) {
      try {
        Uo(pr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function xS(e, t, a) {
      try {
        P_(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function V_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ye && rt && e.mode & St)
              try {
                Pl(), i = a(null);
              } finally {
                Hl(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          a.current = null;
    }
    function km(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var UC = !1;
    function B_(e, t) {
      ew(e.containerInfo), Se = t, Y_();
      var a = UC;
      return UC = !1, a;
    }
    function Y_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & yl) !== xe && t !== null ? (t.return = e, Se = t) : I_();
      }
    }
    function I_() {
      for (; Se !== null; ) {
        var e = Se;
        Qt(e);
        try {
          $_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        gn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function $_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== xe) {
        switch (Qt(e), e.tag) {
          case Ee:
          case ze:
          case He:
            break;
          case se: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : el(e.type, i), u);
              {
                var p = NC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ve(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              xw(v.containerInfo);
            }
            break;
          }
          case le:
          case we:
          case Fe:
          case Nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
      }
    }
    function nl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ba ? Cl(t) : (e & pr) !== Ba && Rd(t), (e & Al) !== Ba && Qp(!0), km(t, a, p), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? _c() : (e & pr) !== Ba && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Uo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Ba ? Fv(t) : (e & pr) !== Ba && Hv(t);
            var f = s.create;
            (e & Al) !== Ba && Qp(!0), s.destroy = f(), (e & Al) !== Ba && Qp(!1), (e & Fr) !== Ba ? Qi() : (e & pr) !== Ba && bc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & pr) !== xe ? v = "useLayoutEffect" : (s.tag & Al) !== xe ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Q_(e, t) {
      if ((t.flags & pt) !== xe)
        switch (t.tag) {
          case Dt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = XE(), p = t.alternate === null ? "mount" : "update";
            KE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Dt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function W_(e, t, a, i) {
      if ((a.flags & gl) !== xe)
        switch (a.tag) {
          case Ee:
          case ze:
          case He: {
            if (!Pr)
              if (a.mode & St)
                try {
                  Pl(), Uo(pr | dr, a);
                } finally {
                  Hl(a);
                }
              else
                Uo(pr | dr, a);
            break;
          }
          case se: {
            var u = a.stateNode;
            if (a.flags & pt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), a.mode & St)
                  try {
                    Pl(), u.componentDidMount();
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : el(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), a.mode & St)
                  try {
                    Pl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), CE(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case se:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & pt) {
              var _ = a.type, w = a.memoizedProps;
              fw(g, _, w);
            }
            break;
          }
          case we:
            break;
          case Fe:
            break;
          case Dt: {
            {
              var M = a.memoizedProps, U = M.onCommit, F = M.onRender, ae = a.stateNode.effectDuration, Oe = XE(), Te = t === null ? "mount" : "update";
              KE() && (Te = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Oe);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, ae, Oe), I1(a);
                var xt = a.return;
                e: for (; xt !== null; ) {
                  switch (xt.tag) {
                    case Z:
                      var mt = xt.stateNode;
                      mt.effectDuration += ae;
                      break e;
                    case Dt:
                      var k = xt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  xt = xt.return;
                }
              }
            }
            break;
          }
          case Re: {
            t1(e, a);
            break;
          }
          case It:
          case Nt:
          case yt:
          case Ne:
          case At:
          case nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Un && AC(a);
    }
    function G_(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          if (e.mode & St)
            try {
              Pl(), MC(e, e.return);
            } finally {
              Hl(e);
            }
          else
            MC(e, e.return);
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && V_(e, e.return, t), zC(e, e.return);
          break;
        }
        case le: {
          zC(e, e.return);
          break;
        }
      }
    }
    function q_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Cw(u) : Tw(i.stateNode, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
          }
        } else if (i.tag === we) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Rw(s) : ww(s, i.memoizedProps);
            } catch (f) {
              fn(e, e.return, f);
            }
        } else if (!((i.tag === Ne || i.tag === At) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function AC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & St)
            try {
              Pl(), u = t(i);
            } finally {
              Hl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ve(e)), t.current = i;
      }
    }
    function K_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && nx(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function X_(e) {
      for (var t = e.return; t !== null; ) {
        if (FC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FC(e) {
      return e.tag === le || e.tag === Z || e.tag === Fe;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== we && t.tag !== dn; ) {
          if (t.flags & Sn || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Sn))
          return t.stateNode;
      }
    }
    function J_(e) {
      var t = X_(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Vt && (V0(a), t.flags &= ~Vt);
          var i = HC(e);
          bS(e, i, a);
          break;
        }
        case Z:
        case Fe: {
          var u = t.stateNode.containerInfo, s = HC(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === le || i === we;
      if (u) {
        var s = e.stateNode;
        t ? yw(a, s, t) : hw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === le || i === we;
      if (u) {
        var s = e.stateNode;
        t ? mw(a, s, t) : vw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, rl = !1;
    function Z_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, rl = !1;
              break e;
            }
            case Z: {
              Vr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
            case Fe: {
              Vr = i.stateNode.containerInfo, rl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Vr = null, rl = !1;
      }
      K_(a);
    }
    function Ao(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (io(a), a.tag) {
        case le:
          Pr || Yf(a, t);
        case we: {
          {
            var i = Vr, u = rl;
            Vr = null, Ao(e, t, a), Vr = i, rl = u, Vr !== null && (rl ? Sw(Vr, a.stateNode) : gw(Vr, a.stateNode));
          }
          return;
        }
        case dn: {
          Vr !== null && (rl ? Ew(Vr, a.stateNode) : Fy(Vr, a.stateNode));
          return;
        }
        case Fe: {
          {
            var s = Vr, f = rl;
            Vr = a.stateNode.containerInfo, rl = !0, Ao(e, t, a), Vr = s, rl = f;
          }
          return;
        }
        case Ee:
        case ze:
        case ft:
        case He: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, M = _.tag;
                  w !== void 0 && ((M & Al) !== Ba ? km(a, t, w) : (M & pr) !== Ba && (Rd(a), a.mode & St ? (Pl(), km(a, t, w), Hl(a)) : km(a, t, w), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ao(e, t, a);
          return;
        }
        case se: {
          if (!Pr) {
            Yf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && xS(a, t, U);
          }
          Ao(e, t, a);
          return;
        }
        case yt: {
          Ao(e, t, a);
          return;
        }
        case Ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & st
          ) {
            var F = Pr;
            Pr = F || a.memoizedState !== null, Ao(e, t, a), Pr = F;
          } else
            Ao(e, t, a);
          break;
        }
        default: {
          Ao(e, t, a);
          return;
        }
      }
    }
    function e1(e) {
      e.memoizedState;
    }
    function t1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Hw(s);
          }
        }
      }
    }
    function VC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new F_()), t.forEach(function(i) {
          var u = X1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Vf !== null && Bf !== null)
                $p(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function n1(e, t, a) {
      Vf = a, Bf = e, Qt(t), BC(t, e), Qt(t), Vf = null, Bf = null;
    }
    function al(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Z_(e, t, s);
          } catch (v) {
            fn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ro)
        for (var p = t.child; p !== null; )
          Qt(p), BC(p, e), p = p.sibling;
      Qt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Ee:
        case ze:
        case ft:
        case He: {
          if (al(t, e), Vl(e), u & pt) {
            try {
              nl(Al | dr, e, e.return), Uo(Al | dr, e);
            } catch (je) {
              fn(e, e.return, je);
            }
            if (e.mode & St) {
              try {
                Pl(), nl(pr | dr, e, e.return);
              } catch (je) {
                fn(e, e.return, je);
              }
              Hl(e);
            } else
              try {
                nl(pr | dr, e, e.return);
              } catch (je) {
                fn(e, e.return, je);
              }
          }
          return;
        }
        case se: {
          al(t, e), Vl(e), u & Un && i !== null && Yf(i, i.return);
          return;
        }
        case le: {
          al(t, e), Vl(e), u & Un && i !== null && Yf(i, i.return);
          {
            if (e.flags & Vt) {
              var s = e.stateNode;
              try {
                V0(s);
              } catch (je) {
                fn(e, e.return, je);
              }
            }
            if (u & pt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    dw(f, g, y, v, p, e);
                  } catch (je) {
                    fn(e, e.return, je);
                  }
              }
            }
          }
          return;
        }
        case we: {
          if (al(t, e), Vl(e), u & pt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              pw(_, M, w);
            } catch (je) {
              fn(e, e.return, je);
            }
          }
          return;
        }
        case Z: {
          if (al(t, e), Vl(e), u & pt && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Fw(t.containerInfo);
              } catch (je) {
                fn(e, e.return, je);
              }
          }
          return;
        }
        case Fe: {
          al(t, e), Vl(e);
          return;
        }
        case Re: {
          al(t, e), Vl(e);
          var F = e.child;
          if (F.flags & yi) {
            var ae = F.stateNode, Oe = F.memoizedState, Te = Oe !== null;
            if (ae.isHidden = Te, Te) {
              var xt = F.alternate !== null && F.alternate.memoizedState !== null;
              xt || A1();
            }
          }
          if (u & pt) {
            try {
              e1(e);
            } catch (je) {
              fn(e, e.return, je);
            }
            VC(e);
          }
          return;
        }
        case Ne: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & st
          ) {
            var k = Pr;
            Pr = k || mt, al(t, e), Pr = k;
          } else
            al(t, e);
          if (Vl(e), u & yi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, ve = e;
            if (H.isHidden = G, G && !mt && (ve.mode & st) !== _e) {
              Se = ve;
              for (var oe = ve.child; oe !== null; )
                Se = oe, a1(oe), oe = oe.sibling;
            }
            q_(ve, G);
          }
          return;
        }
        case It: {
          al(t, e), Vl(e), u & pt && VC(e);
          return;
        }
        case yt:
          return;
        default: {
          al(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & Sn) {
        try {
          J_(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~Sn;
      }
      t & En && (e.flags &= ~En);
    }
    function r1(e, t, a) {
      Vf = a, Bf = t, Se = e, YC(e, t, a), Vf = null, Bf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & st) !== _e; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Ne && i) {
          var f = u.memoizedState !== null, p = f || Dm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = Dm, w = Pr;
            Dm = p, Pr = g, Pr && !w && (Se = u, i1(u));
            for (var M = s; M !== null; )
              Se = M, YC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Se = u, Dm = _, Pr = w, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & gl) !== xe && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & gl) !== xe) {
          var u = i.alternate;
          Qt(i);
          try {
            W_(t, u, i, a);
          } catch (f) {
            fn(i, i.return, f);
          }
          gn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function a1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case Ee:
          case ze:
          case ft:
          case He: {
            if (t.mode & St)
              try {
                Pl(), nl(pr, t, t.return);
              } finally {
                Hl(t);
              }
            else
              nl(pr, t, t.return);
            break;
          }
          case se: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && xS(t, t.return, i);
            break;
          }
          case le: {
            Yf(t, t.return);
            break;
          }
          case Ne: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : IC(e);
      }
    }
    function IC(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function i1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Ne) {
          var i = t.memoizedState !== null;
          if (i) {
            $C(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : $C(e);
      }
    }
    function $C(e) {
      for (; Se !== null; ) {
        var t = Se;
        Qt(t);
        try {
          G_(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (gn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function l1(e, t, a, i) {
      Se = t, u1(t, e, a, i);
    }
    function u1(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & ur) !== xe && s !== null ? (s.return = u, Se = s) : o1(e, t, a, i);
      }
    }
    function o1(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & ma) !== xe) {
          Qt(u);
          try {
            s1(t, u, a, i);
          } catch (f) {
            fn(u, u.return, f);
          }
          gn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function s1(e, t, a, i) {
      switch (t.tag) {
        case Ee:
        case ze:
        case He: {
          if (t.mode & St) {
            Wg();
            try {
              Uo(Fr | dr, t);
            } finally {
              Qg(t);
            }
          } else
            Uo(Fr | dr, t);
          break;
        }
      }
    }
    function c1(e) {
      Se = e, f1();
    }
    function f1() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Xr) !== xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, v1(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & ur) !== xe && t !== null ? (t.return = e, Se = t) : d1();
      }
    }
    function d1() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & ma) !== xe && (Qt(e), p1(e), gn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function p1(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          e.mode & St ? (Wg(), nl(Fr | dr, e, e.return), Qg(e)) : nl(Fr | dr, e, e.return);
          break;
        }
      }
    }
    function v1(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Qt(a), m1(a, t), gn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : h1(e);
      }
    }
    function h1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function m1(e, t) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          e.mode & St ? (Wg(), nl(Fr, e, t), Qg(e)) : nl(Fr, e, t);
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          try {
            Uo(pr | dr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          try {
            Uo(Fr | dr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He: {
          try {
            nl(pr | dr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case se: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xS(e, e.return, t);
          break;
        }
      }
    }
    function E1(e) {
      switch (e.tag) {
        case Ee:
        case ze:
        case He:
          try {
            nl(Fr | dr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var C1 = [];
    function R1() {
      C1.forEach(function(e) {
        return e();
      });
    }
    var T1 = it.ReactCurrentActQueue;
    function w1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function QC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && T1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x1 = Math.ceil, kS = it.ReactCurrentDispatcher, OS = it.ReactCurrentOwner, Br = it.ReactCurrentBatchConfig, il = it.ReactCurrentActQueue, mr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Yr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Nu = 0, Up = 1, ec = 2, Om = 3, Ap = 4, GC = 5, LS = 6, wt = mr, Ta = null, kn = null, yr = P, Bl = P, NS = _o(P), gr = Nu, jp = null, Lm = P, Fp = P, Nm = P, Hp = null, Ya = null, MS = 0, qC = 500, KC = 1 / 0, _1 = 500, Mu = null;
    function Pp() {
      KC = xn() + _1;
    }
    function XC() {
      return KC;
    }
    var Mm = !1, zS = null, If = null, tc = !1, jo = null, Vp = P, US = [], AS = null, b1 = 50, Bp = 0, jS = null, FS = !1, zm = !1, D1 = 50, $f = 0, Um = null, Yp = Yt, Am = P, JC = !1;
    function jm() {
      return Ta;
    }
    function wa() {
      return (wt & (Yr | Di)) !== mr ? xn() : (Yp !== Yt || (Yp = xn()), Yp);
    }
    function Fo(e) {
      var t = e.mode;
      if ((t & st) === _e)
        return Ue;
      if ((wt & Yr) !== mr && yr !== P)
        return tr(yr);
      var a = Tx() !== Rx;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Am === jn && (Am = Nd()), Am;
      }
      var u = ga();
      if (u !== jn)
        return u;
      var s = uw();
      return s;
    }
    function k1(e) {
      var t = e.mode;
      return (t & st) === _e ? Ue : Qv();
    }
    function Sr(e, t, a, i) {
      Z1(), JC && S("useInsertionEffect must not schedule updates."), FS && (zm = !0), po(e, a, i), (wt & Yr) !== P && e === Ta ? nb(t) : (_r && Gv(e, t, a), rb(t), e === Ta && ((wt & Yr) === mr && (Fp = Xe(Fp, a)), gr === Ap && Ho(e, yr)), Ia(e, i), a === Ue && wt === mr && (t.mode & st) === _e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !il.isBatchingLegacy && (Pp(), J0()));
    }
    function O1(e, t, a) {
      var i = e.current;
      i.lanes = t, po(e, t, a), Ia(e, a);
    }
    function L1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (wt & Yr) !== mr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Yv(e, t);
      var i = na(e, e === Ta ? yr : P);
      if (i === P) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = jn;
        return;
      }
      var u = pu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(il.current !== null && a !== $S)) {
        a == null && s !== Ue && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === Ue)
        e.tag === bo ? (il.isBatchingLegacy !== null && (il.didScheduleLegacyUpdate = !0), ix(tR.bind(null, e))) : X0(tR.bind(null, e)), il.current !== null ? il.current.push(Do) : sw(function() {
          (wt & (Yr | Di)) === mr && Do();
        }), f = null;
      else {
        var p;
        switch (Kv(i)) {
          case aa:
            p = $i;
            break;
          case Aa:
            p = ds;
            break;
          case sr:
            p = uu;
            break;
          case tf:
            p = ao;
            break;
          default:
            p = uu;
            break;
        }
        f = QS(p, ZC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function ZC(e, t) {
      if (qx(), Yp = Yt, Am = P, (wt & (Yr | Di)) !== mr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Uu();
      if (i && e.callbackNode !== a)
        return null;
      var u = na(e, e === Ta ? yr : P);
      if (u === P)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? V1(e, u) : Hm(e, u);
      if (f !== Nu) {
        if (f === ec) {
          var p = Wc(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw nc(e, P), Ho(e, u), Ia(e, xn()), v;
        }
        if (f === LS)
          Ho(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !M1(g)) {
            if (f = Hm(e, u), f === ec) {
              var _ = Wc(e);
              _ !== P && (u = _, f = HS(e, _));
            }
            if (f === Up) {
              var w = jp;
              throw nc(e, P), Ho(e, u), Ia(e, xn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, N1(e, f, u);
        }
      }
      return Ia(e, xn()), e.callbackNode === a ? ZC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Hp;
      if (hu(e)) {
        var i = nc(e, t);
        i.flags |= vn, Jw(e.containerInfo);
      }
      var u = Hm(e, t);
      if (u !== ec) {
        var s = Ya;
        Ya = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function N1(e, t, a) {
      switch (t) {
        case Nu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, Mu);
          break;
        }
        case Om: {
          if (Ho(e, a), Gc(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = MS + qC - xn();
            if (i > 10) {
              var u = na(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!vu(s, a)) {
                wa(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, Mu), i);
              break;
            }
          }
          rc(e, Ya, Mu);
          break;
        }
        case Ap: {
          if (Ho(e, a), uy(a))
            break;
          if (!hR()) {
            var f = Dd(e, a), p = f, v = xn() - p, y = J1(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(rc.bind(null, e, Ya, Mu), y);
              break;
            }
          }
          rc(e, Ya, Mu);
          break;
        }
        case GC: {
          rc(e, Ya, Mu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function M1(e) {
      for (var t = e; ; ) {
        if (t.flags & wc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ue(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & wc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Ho(e, t) {
      t = xs(t, Nm), t = xs(t, Fp), zd(e, t);
    }
    function tR(e) {
      if (Kx(), (wt & (Yr | Di)) !== mr)
        throw new Error("Should not already be working.");
      Uu();
      var t = na(e, P);
      if (!ra(t, Ue))
        return Ia(e, xn()), null;
      var a = Hm(e, t);
      if (e.tag !== bo && a === ec) {
        var i = Wc(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw nc(e, P), Ho(e, t), Ia(e, xn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, Mu), Ia(e, xn()), null;
    }
    function z1(e, t) {
      t !== P && (_s(e, Xe(t, Ue)), Ia(e, xn()), (wt & (Yr | Di)) === mr && (Pp(), Do()));
    }
    function PS(e, t) {
      var a = wt;
      wt |= WC;
      try {
        return e(t);
      } finally {
        wt = a, wt === mr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !il.isBatchingLegacy && (Pp(), J0());
      }
    }
    function U1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(aa), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, wt === mr && Pp();
      }
    }
    function zu(e) {
      jo !== null && jo.tag === bo && (wt & (Yr | Di)) === mr && Uu();
      var t = wt;
      wt |= WC;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(aa), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, wt = t, (wt & (Yr | Di)) === mr && Do();
      }
    }
    function nR() {
      return (wt & (Yr | Di)) !== mr;
    }
    function Fm(e, t) {
      ua(NS, Bl, e), Bl = Xe(Bl, t);
    }
    function VS(e) {
      Bl = NS.current, la(NS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, ow(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return kn = s, yr = Bl = t, gr = Nu, jp = null, Lm = P, Fp = P, Nm = P, Hp = null, Ya = null, Ox(), Xi.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = kn;
        try {
          if (Gh(), bE(), gn(), OS.current = null, a === null || a.return === null) {
            gr = Up, jp = t, kn = null;
            return;
          }
          if (Ye && a.mode & St && Tm(a, !0), Pe)
            if (El(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, yr);
            } else
              Ei(a, t, yr);
          i_(e, a.return, a, t, yr), uR(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = kS.current;
      return kS.current = gm, e === null ? gm : e;
    }
    function iR(e) {
      kS.current = e;
    }
    function A1() {
      MS = xn();
    }
    function Ip(e) {
      Lm = Xe(e, Lm);
    }
    function j1() {
      gr === Nu && (gr = Om);
    }
    function BS() {
      (gr === Nu || gr === Om || gr === ec) && (gr = Ap), Ta !== null && (xl(Lm) || xl(Fp)) && Ho(Ta, yr);
    }
    function F1(e) {
      gr !== Ap && (gr = ec), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function H1() {
      return gr === Nu;
    }
    function Hm(e, t) {
      var a = wt;
      wt |= Yr;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        Mu = ef(), nc(e, t);
      }
      wd(t);
      do
        try {
          P1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Gh(), wt = a, iR(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hn(), Ta = null, yr = P, gr;
    }
    function P1() {
      for (; kn !== null; )
        lR(kn);
    }
    function V1(e, t) {
      var a = wt;
      wt |= Yr;
      var i = aR();
      if (Ta !== e || yr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, yr), u.clear()), Ud(e, t);
        }
        Mu = ef(), Pp(), nc(e, t);
      }
      wd(t);
      do
        try {
          B1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Gh(), iR(i), wt = a, kn !== null ? (xd(), Nu) : (hn(), Ta = null, yr = P, gr);
    }
    function B1() {
      for (; kn !== null && !md(); )
        lR(kn);
    }
    function lR(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & St) !== _e ? ($g(e), a = YS(t, e, Bl), Tm(e, !0)) : a = YS(t, e, Bl), gn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : kn = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & iu) === xe) {
          Qt(t);
          var u = void 0;
          if ((t.mode & St) === _e ? u = OC(a, t, Bl) : ($g(t), u = OC(a, t, Bl), Tm(t, !1)), gn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = j_(a, t);
          if (s !== null) {
            s.flags &= Lv, kn = s;
            return;
          }
          if ((t.mode & St) !== _e) {
            Tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= iu, i.subtreeFlags = xe, i.deletions = null;
          else {
            gr = LS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      gr === Nu && (gr = GC);
    }
    function rc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, In(aa), Y1(e, t, a, i);
      } finally {
        Br.transition = u, In(i);
      }
      return null;
    }
    function Y1(e, t, a, i) {
      do
        Uu();
      while (jo !== null);
      if (eb(), (wt & (Yr | Di)) !== mr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Si(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = jn;
      var f = Xe(u.lanes, u.childLanes);
      Wv(e, f), e === Ta && (Ta = null, kn = null, yr = P), ((u.subtreeFlags & ur) !== xe || (u.flags & ur) !== xe) && (tc || (tc = !0, AS = a, QS(uu, function() {
        return Uu(), null;
      })));
      var p = (u.subtreeFlags & (yl | ro | gl | ur)) !== xe, v = (u.flags & (yl | ro | gl | ur)) !== xe;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(aa);
        var _ = wt;
        wt |= Di, OS.current = null, B_(e, u), JE(), n1(e, u, s), tw(e.containerInfo), e.current = u, hs(s), r1(u, e, s), su(), Mv(), wt = _, In(g), Br.transition = y;
      } else
        e.current = u, JE();
      var w = tc;
      if (tc ? (tc = !1, jo = e, Vp = s) : ($f = 0, Um = null), f = e.pendingLanes, f === P && (If = null), w || fR(e.current, !1), Sd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), R1(), Ia(e, xn()), t !== null)
        for (var M = e.onRecoverableError, U = 0; U < t.length; U++) {
          var F = t[U], ae = F.stack, Oe = F.digest;
          M(F.value, {
            componentStack: ae,
            digest: Oe
          });
        }
      if (Mm) {
        Mm = !1;
        var Te = zS;
        throw zS = null, Te;
      }
      return ra(Vp, Ue) && e.tag !== bo && Uu(), f = e.pendingLanes, ra(f, Ue) ? (Gx(), e === jS ? Bp++ : (Bp = 0, jS = e)) : Bp = 0, Do(), Si(), null;
    }
    function Uu() {
      if (jo !== null) {
        var e = Kv(Vp), t = br(sr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, In(t), $1();
        } finally {
          In(i), Br.transition = a;
        }
      }
      return !1;
    }
    function I1(e) {
      US.push(e), tc || (tc = !0, QS(uu, function() {
        return Uu(), null;
      }));
    }
    function $1() {
      if (jo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = jo, a = Vp;
      if (jo = null, Vp = P, (wt & (Yr | Di)) !== mr)
        throw new Error("Cannot flush passive effects while already rendering.");
      FS = !0, zm = !1, Td(a);
      var i = wt;
      wt |= Di, c1(t.current), l1(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Q_(t, f);
        }
      }
      uo(), fR(t.current, !0), wt = i, Do(), zm ? t === Um ? $f++ : ($f = 0, Um = t) : $f = 0, FS = !1, zm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return If !== null && If.has(e);
    }
    function Q1(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function W1(e) {
      Mm || (Mm = !0, zS = e);
    }
    var G1 = W1;
    function sR(e, t, a) {
      var i = Js(a, t), u = lC(e, i, Ue), s = Oo(e, u, Ue), f = wa();
      s !== null && (po(s, Ue, f), Ia(s, f));
    }
    function fn(e, t, a) {
      if (H_(a), Qp(!1), e.tag === Z) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          sR(i, e, a);
          return;
        } else if (i.tag === se) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Js(a, e), p = sS(i, f, Ue), v = Oo(i, p, Ue), y = wa();
            v !== null && (po(v, Ue, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function q1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = wa();
      Jc(e, a), ab(e), Ta === e && vu(yr, a) && (gr === Ap || gr === Om && Gc(yr) && xn() - MS < qC ? nc(e, P) : Nm = Xe(Nm, a)), Ia(e, u);
    }
    function cR(e, t) {
      t === jn && (t = k1(e));
      var a = wa(), i = Va(e, t);
      i !== null && (po(i, t, a), Ia(i, a));
    }
    function K1(e) {
      var t = e.memoizedState, a = jn;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function X1(e, t) {
      var a = jn, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case It:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function J1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x1(e / 1960) * 1960;
    }
    function Z1() {
      if (Bp > b1)
        throw Bp = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $f > D1 && ($f = 0, Um = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function eb() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Qt(e), Pm(e, Mr, S1), t && Pm(e, ml, E1), Pm(e, Mr, y1), t && Pm(e, ml, g1), gn();
    }
    function Pm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== xe ? i = i.child : ((i.flags & t) !== xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((wt & Yr) !== mr || !(e.mode & st))
          return;
        var t = e.tag;
        if (t !== Me && t !== Z && t !== se && t !== Ee && t !== ze && t !== ft && t !== He)
          return;
        var a = Ve(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : gn();
        }
      }
    }
    var YS;
    {
      var tb = null;
      YS = function(e, t, a) {
        var i = ER(tb, t);
        try {
          return xC(e, t, a);
        } catch (s) {
          if (px() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Gh(), bE(), LC(e, t), ER(t, i), t.mode & St && $g(t), Ma(null, xC, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function nb(e) {
      if (qr && !$x())
        switch (e.tag) {
          case Ee:
          case ze:
          case He: {
            var t = kn && Ve(kn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ve(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case se: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gv(e, i, t);
        });
      }
    }
    var $S = {};
    function QS(e, t) {
      {
        var a = il.current;
        return a !== null ? (a.push(t), $S) : vd(e, t);
      }
    }
    function vR(e) {
      if (e !== $S)
        return hd(e);
    }
    function hR() {
      return il.current !== null;
    }
    function rb(e) {
      {
        if (e.mode & st) {
          if (!QC())
            return;
        } else if (!w1() || wt !== mr || e.tag !== Ee && e.tag !== ze && e.tag !== He)
          return;
        if (il.current === null) {
          var t = Jn;
          try {
            Qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ve(e));
          } finally {
            t ? Qt(e) : gn();
          }
        }
      }
    }
    function ab(e) {
      e.tag !== bo && QC() && il.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      JC = e;
    }
    var ki = null, Qf = null, ib = function(e) {
      ki = e;
    };
    function Wf(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return Wf(e);
    }
    function GS(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: I,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mR(e, t) {
      {
        if (ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case se: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Ee: {
            (typeof i == "function" || s === Ie) && (u = !0);
            break;
          }
          case ze: {
            (s === I || s === Ie) && (u = !0);
            break;
          }
          case ft:
          case He: {
            (s === ot || s === Ie) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ki(a);
          if (f !== void 0 && f === ki(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (ki === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var lb = function(e, t) {
      {
        if (ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Uu(), zu(function() {
          qS(e.current, i, a);
        });
      }
    }, ub = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Uu(), zu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Ee:
          case He:
          case se:
            v = p;
            break;
          case ze:
            v = p.render;
            break;
        }
        if (ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ki(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === se ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, Ue);
          w !== null && Sr(w, e, Ue, Yt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var ob = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Ee:
          case He:
          case se:
            p = f;
            break;
          case ze:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? sb(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function sb(e, t) {
      {
        var a = cb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case Fe:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function cb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XS;
    {
      XS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function fb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new fb(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function db(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function pb(e) {
      if (typeof e == "function")
        return JS(e) ? se : Ee;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return ze;
        if (t === ot)
          return ft;
      }
      return Me;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = xe, a.subtreeFlags = xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & An, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Me:
        case Ee:
        case He:
          a.type = Wf(e.type);
          break;
        case se:
          a.type = WS(e.type);
          break;
        case ze:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function vb(e, t) {
      e.flags &= An | Sn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function hb(e, t, a) {
      var i;
      return e === Fh ? (i = st, t === !0 && (i |= qe, i |= qt)) : i = _e, _r && (i |= St), li(Z, null, null, i);
    }
    function ZS(e, t, a, i, u, s) {
      var f = Me, p = e;
      if (typeof e == "function")
        JS(e) ? (f = se, p = WS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case Qr:
            return Po(a.children, u, s, t);
          case si:
            f = Pn, u |= qe, (u & st) !== _e && (u |= qt);
            break;
          case ci:
            return mb(a, u, s, t);
          case re:
            return yb(a, u, s, t);
          case ie:
            return gb(a, u, s, t);
          case Tn:
            return SR(a, u, s, t);
          case rn:
          case dt:
          case sn:
          case Rr:
          case et:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = ut;
                  break e;
                case R:
                  f = an;
                  break e;
                case I:
                  f = ze, p = GS(p);
                  break e;
                case ot:
                  f = ft;
                  break e;
                case Ie:
                  f = Rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ve(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = ZS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Po(e, t, a, i) {
      var u = li(ct, e, i, t);
      return u.lanes = a, u;
    }
    function mb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(Dt, e, i, t | St);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function yb(e, t, a, i) {
      var u = li(Re, e, i, t);
      return u.elementType = re, u.lanes = a, u;
    }
    function gb(e, t, a, i) {
      var u = li(It, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = li(Ne, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = li(we, e, null, t);
      return i.lanes = a, i;
    }
    function Sb() {
      var e = li(le, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function Eb(e) {
      var t = li(dn, null, null, _e);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = li(Me, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Cb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = jn, this.eventTimes = Xc(P), this.expirationTimes = Xc(Yt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = Xc(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < bd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case bo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new Cb(e, t, a, p, v), _ = hb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return hg(_), g;
    }
    var r0 = "18.3.1";
    function Rb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ha,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var a0, i0;
    a0 = !1, i0 = {};
    function RR(e) {
      if (!e)
        return ii;
      var t = no(e), a = ax(t);
      if (t.tag === se) {
        var i = t.type;
        if (Ul(i))
          return q0(t, i, a);
      }
      return a;
    }
    function Tb(e, t) {
      {
        var a = no(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Zr(a);
        if (u === null)
          return null;
        if (u.mode & qe) {
          var s = Ve(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
            var f = Jn;
            try {
              Qt(u), a.mode & qe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : gn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = CR(a, i, g, e, u, s, f, p, v);
      _.context = RR(null);
      var w = _.current, M = wa(), U = Fo(w), F = Ou(M, U);
      return F.callback = t ?? null, Oo(w, F, U), O1(_, U, M), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = wa(), f = Fo(u);
      Dc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Jn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ve(Jn) || "Unknown"));
      var v = Ou(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Oo(u, v, f);
      return y !== null && (Sr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function wb(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (hu(t)) {
            var a = Iv(t);
            z1(t, a);
          }
          break;
        }
        case Re: {
          zu(function() {
            var u = Va(e, Ue);
            if (u !== null) {
              var s = wa();
              Sr(u, e, Ue, s);
            }
          });
          var i = Ue;
          l0(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function l0(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function xb(e) {
      if (e.tag === Re) {
        var t = fo, a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function _b(e) {
      if (e.tag === Re) {
        var t = Fo(e), a = Va(e, t);
        if (a !== null) {
          var i = wa();
          Sr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function _R(e) {
      var t = ti(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function bb(e) {
      return bR(e);
    }
    var DR = function(e) {
      return !1;
    };
    function Db(e) {
      return DR(e);
    }
    var kR = null, OR = null, LR = null, NR = null, MR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = Ke(e) ? e.slice() : Ge({}, e);
        return a + 1 === t.length ? (Ke(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = Ke(e) ? e.slice() : Ge({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Ke(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          lt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              lt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Ke(e) ? e.slice() : Ge({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return BR(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      kR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Va(e, Ue);
          f !== null && Sr(f, e, Ue, Yt);
        }
      }, OR = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ge({}, e.memoizedProps);
          var s = Va(e, Ue);
          s !== null && Sr(s, e, Ue, Yt);
        }
      }, LR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Va(e, Ue);
          f !== null && Sr(f, e, Ue, Yt);
        }
      }, NR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ue);
        i !== null && Sr(i, e, Ue, Yt);
      }, MR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, Ue);
        a !== null && Sr(a, e, Ue, Yt);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, Ue);
        i !== null && Sr(i, e, Ue, Yt);
      }, UR = function(e) {
        var t = Va(e, Ue);
        t !== null && Sr(t, e, Ue, Yt);
      }, AR = function(e) {
        bR = e;
      }, jR = function(e) {
        DR = e;
      };
    }
    function kb(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function Ob(e) {
      return null;
    }
    function Lb() {
      return Jn;
    }
    function Nb(e) {
      var t = e.findFiberByHostInstance, a = it.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: NR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: kb,
        findFiberByHostInstance: t || Ob,
        // React Refresh
        findHostInstancesForRefresh: ob,
        scheduleRefresh: lb,
        scheduleRoot: ub,
        setRefreshHandler: ib,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Lb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var IR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Ym.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Im(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== zn) {
          var i = _R(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Ym.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zu(function() {
          Wp(null, e, null, null);
        }), I0(t);
      }
    };
    function Mb(e, t) {
      if (!Im(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? lt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Lh(f.current, e);
      var p = e.nodeType === zn ? e.parentNode : e;
      return Zd(p), new o0(f);
    }
    function Ym(e) {
      this._internalRoot = e;
    }
    function zb(e) {
      e && th(e);
    }
    Ym.prototype.unstable_scheduleHydration = zb;
    function Ub(e, t, a) {
      if (!Im(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Lh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Hx(y, _);
        }
      return new Ym(y);
    }
    function Im(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Ko));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === Bi || e.nodeType === Ko || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ab = it.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Bi ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function jb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Bm(f);
            s.call(w);
          };
        }
        var f = wR(
          t,
          i,
          e,
          bo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = f, Lh(f.current, e);
        var p = e.nodeType === zn ? e.parentNode : e;
        return Zd(p), zu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Bm(g);
            y.call(w);
          };
        }
        var g = TR(
          e,
          bo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = g, Lh(g.current, e);
        var _ = e.nodeType === zn ? e.parentNode : e;
        return Zd(_), zu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Fb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      QR(a), Fb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = jb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Bm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Bm(f);
    }
    var GR = !1;
    function Hb(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ab.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : Tb(e, "findDOMNode");
    }
    function Pb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function Vb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function Bb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !au(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var qR = !1;
    function Yb(e) {
      if (qR || (qR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && xo(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(wb), jd(xb), cy(_b), nf(ga), Xv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is($T), kv(PS, U1, zu);
    function Ib(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Im(t))
        throw new Error("Target container is not a DOM element.");
      return Rb(e, t, null, a);
    }
    function $b(e, t, a, i) {
      return Bb(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, wf, Nh, ud, Ju, PS]
    };
    function Qb(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mb(e, t);
    }
    function Wb(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ub(e, t, a);
    }
    function Gb(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zu(e);
    }
    var qb = Nb({
      findFiberByHostInstance: Ys,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!qb && Gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Qa.createPortal = Ib, Qa.createRoot = Qb, Qa.findDOMNode = Hb, Qa.flushSync = Gb, Qa.hydrate = Pb, Qa.hydrateRoot = Wb, Qa.render = Vb, Qa.unmountComponentAtNode = Yb, Qa.unstable_batchedUpdates = PS, Qa.unstable_renderSubtreeIntoContainer = $b, Qa.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (q) {
      console.error(q);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), h0.exports = oD()) : h0.exports = sD();
var cD = h0.exports, fD = {}, Jp = cD;
if (fD.NODE_ENV === "production")
  ev.createRoot = Jp.createRoot, ev.hydrateRoot = Jp.hydrateRoot;
else {
  var Wm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  ev.createRoot = function(q, pe) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Jp.createRoot(q, pe);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  }, ev.hydrateRoot = function(q, pe, A) {
    Wm.usingClientEntryPoint = !0;
    try {
      return Jp.hydrateRoot(q, pe, A);
    } finally {
      Wm.usingClientEntryPoint = !1;
    }
  };
}
const lT = "YOUR_PICO_API_KEY_HERE", dD = "https://api.pico.homezero.tech/v1/public/assignments";
function pD() {
  const [q, pe] = Vo.useState({
    postalCode: "",
    houseNumber: "",
    email: "",
    phone: "",
    name: ""
  }), [A, it] = Vo.useState("idle"), [bt, _t] = Vo.useState(""), lt = (Ze) => {
    const { name: Ee, value: se } = Ze.target;
    pe((Me) => ({ ...Me, [Ee]: se }));
  }, S = async (Ze) => {
    Ze.preventDefault(), it("loading"), _t("");
    try {
      const Ee = {
        email: q.email,
        phone: q.phone || void 0,
        name: q.name || void 0,
        address: q.postalCode || q.houseNumber ? {
          postalCode: q.postalCode || void 0,
          houseNumber: q.houseNumber || void 0
        } : void 0,
        // Add any other required fields or metadata here
        source: "heative-brochure-widget"
      };
      if (console.log("Submitting to Pico:", Ee), lT === "YOUR_PICO_API_KEY_HERE") {
        console.warn("Using placeholder API key. Simulating success."), await new Promise((Me) => setTimeout(Me, 1500)), it("success");
        return;
      }
      if (!(await fetch(dD, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": lT
        },
        body: JSON.stringify(Ee)
      })).ok)
        throw new Error("Failed to submit request");
      it("success");
    } catch (Ee) {
      console.error("Submission error:", Ee), _t("Er is iets misgegaan. Probeer het later opnieuw."), it("error");
    }
  };
  return A === "success" ? /* @__PURE__ */ Jt.jsx("div", { className: "heative-widget", children: /* @__PURE__ */ Jt.jsx("div", { className: "heative-card", children: /* @__PURE__ */ Jt.jsxs("div", { className: "heative-success", children: [
    /* @__PURE__ */ Jt.jsx("div", { className: "heative-success-icon", children: /* @__PURE__ */ Jt.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /* @__PURE__ */ Jt.jsx("polyline", { points: "20 6 9 17 4 12" })
      }
    ) }),
    /* @__PURE__ */ Jt.jsx("h3", { children: "Aanvraag ontvangen!" }),
    /* @__PURE__ */ Jt.jsx("p", { children: "Bedankt voor je interesse. We nemen zo snel mogelijk contact met je op." })
  ] }) }) }) : /* @__PURE__ */ Jt.jsx("div", { className: "heative-widget", children: /* @__PURE__ */ Jt.jsxs("form", { className: "heative-card", onSubmit: S, children: [
    /* @__PURE__ */ Jt.jsxs("div", { className: "heative-row", children: [
      /* @__PURE__ */ Jt.jsxs("div", { className: "heative-col", children: [
        /* @__PURE__ */ Jt.jsx("label", { className: "heative-label", htmlFor: "postalCode", children: "Postcode (optioneel)" }),
        /* @__PURE__ */ Jt.jsx(
          "input",
          {
            type: "text",
            id: "postalCode",
            name: "postalCode",
            className: "heative-input",
            placeholder: "1234 AB",
            value: q.postalCode,
            onChange: lt
          }
        )
      ] }),
      /* @__PURE__ */ Jt.jsxs("div", { className: "heative-col", children: [
        /* @__PURE__ */ Jt.jsx("label", { className: "heative-label", htmlFor: "houseNumber", children: "Huisnummer (optioneel)" }),
        /* @__PURE__ */ Jt.jsx(
          "input",
          {
            type: "text",
            id: "houseNumber",
            name: "houseNumber",
            className: "heative-input",
            placeholder: "10",
            value: q.houseNumber,
            onChange: lt
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ Jt.jsxs("div", { className: "heative-col", children: [
      /* @__PURE__ */ Jt.jsx("label", { className: "heative-label", htmlFor: "email", children: "E-mailadres *" }),
      /* @__PURE__ */ Jt.jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          className: "heative-input",
          placeholder: "jouw@email.nl",
          required: !0,
          value: q.email,
          onChange: lt
        }
      )
    ] }),
    /* @__PURE__ */ Jt.jsxs("div", { className: "heative-col", children: [
      /* @__PURE__ */ Jt.jsx("label", { className: "heative-label", htmlFor: "phone", children: "Telefoonnummer (optioneel)" }),
      /* @__PURE__ */ Jt.jsx(
        "input",
        {
          type: "tel",
          id: "phone",
          name: "phone",
          className: "heative-input",
          placeholder: "06 12345678",
          value: q.phone,
          onChange: lt
        }
      )
    ] }),
    /* @__PURE__ */ Jt.jsxs("div", { className: "heative-col", children: [
      /* @__PURE__ */ Jt.jsx("label", { className: "heative-label", htmlFor: "name", children: "Naam (optioneel)" }),
      /* @__PURE__ */ Jt.jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          className: "heative-input",
          placeholder: "Jouw naam",
          value: q.name,
          onChange: lt
        }
      )
    ] }),
    bt && /* @__PURE__ */ Jt.jsx("div", { style: { color: "red", fontSize: "0.875rem" }, children: bt }),
    /* @__PURE__ */ Jt.jsx(
      "button",
      {
        type: "submit",
        className: "heative-btn",
        disabled: A === "loading",
        children: A === "loading" ? "Even geduld..." : "Brochure aanvragen"
      }
    )
  ] }) });
}
const fT = "pico-widget-container", uT = document.getElementById(fT);
uT ? ev.createRoot(uT).render(
  /* @__PURE__ */ Jt.jsx(nD.StrictMode, { children: /* @__PURE__ */ Jt.jsx(pD, {}) })
) : console.warn(`Pico Widget: Container element #${fT} not found. Widget will not render.`);
