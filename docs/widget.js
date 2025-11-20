function Kb(K) {
  return K && K.__esModule && Object.prototype.hasOwnProperty.call(K, "default") ? K.default : K;
}
var p0 = { exports: {} }, Gp = {}, v0 = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function Zb() {
  if (KR) return gt;
  KR = 1;
  var K = Symbol.for("react.element"), ve = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), wt = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), _t = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), xe = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Be = Symbol.iterator;
  function J(b) {
    return b === null || typeof b != "object" ? null : (b = Be && b[Be] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, Te = {};
  function ut(b, B, be) {
    this.props = b, this.context = B, this.refs = Te, this.updater = be || Fe;
  }
  ut.prototype.isReactComponent = {}, ut.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, ut.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Hn() {
  }
  Hn.prototype = ut.prototype;
  function rn(b, B, be) {
    this.props = b, this.context = B, this.refs = Te, this.updater = be || Fe;
  }
  var at = rn.prototype = new Hn();
  at.constructor = rn, le(at, ut.prototype), at.isPureReactComponent = !0;
  var Ne = Array.isArray, xt = Object.prototype.hasOwnProperty, Ce = { current: null }, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(b, B, be) {
    var He, Ye = {}, nt = null, St = null;
    if (B != null) for (He in B.ref !== void 0 && (St = B.ref), B.key !== void 0 && (nt = "" + B.key), B) xt.call(B, He) && !ot.hasOwnProperty(He) && (Ye[He] = B[He]);
    var Qe = arguments.length - 2;
    if (Qe === 1) Ye.children = be;
    else if (1 < Qe) {
      for (var mt = Array(Qe), Vt = 0; Vt < Qe; Vt++) mt[Vt] = arguments[Vt + 2];
      Ye.children = mt;
    }
    if (b && b.defaultProps) for (He in Qe = b.defaultProps, Qe) Ye[He] === void 0 && (Ye[He] = Qe[He]);
    return { $$typeof: K, type: b, key: nt, ref: St, props: Ye, _owner: Ce.current };
  }
  function Cn(b, B) {
    return { $$typeof: K, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Lt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === K;
  }
  function fn(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(be) {
      return B[be];
    });
  }
  var It = /\/+/g;
  function ht(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? fn("" + b.key) : B.toString(36);
  }
  function Me(b, B, be, He, Ye) {
    var nt = typeof b;
    (nt === "undefined" || nt === "boolean") && (b = null);
    var St = !1;
    if (b === null) St = !0;
    else switch (nt) {
      case "string":
      case "number":
        St = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case K:
          case ve:
            St = !0;
        }
    }
    if (St) return St = b, Ye = Ye(St), b = He === "" ? "." + ht(St, 0) : He, Ne(Ye) ? (be = "", b != null && (be = b.replace(It, "$&/") + "/"), Me(Ye, B, be, "", function(Vt) {
      return Vt;
    })) : Ye != null && (Lt(Ye) && (Ye = Cn(Ye, be + (!Ye.key || St && St.key === Ye.key ? "" : ("" + Ye.key).replace(It, "$&/") + "/") + b)), B.push(Ye)), 1;
    if (St = 0, He = He === "" ? "." : He + ":", Ne(b)) for (var Qe = 0; Qe < b.length; Qe++) {
      nt = b[Qe];
      var mt = He + ht(nt, Qe);
      St += Me(nt, B, be, mt, Ye);
    }
    else if (mt = J(b), typeof mt == "function") for (b = mt.call(b), Qe = 0; !(nt = b.next()).done; ) nt = nt.value, mt = He + ht(nt, Qe++), St += Me(nt, B, be, mt, Ye);
    else if (nt === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function At(b, B, be) {
    if (b == null) return b;
    var He = [], Ye = 0;
    return Me(b, He, "", "", function(nt) {
      return B.call(be, nt, Ye++);
    }), He;
  }
  function pt(b) {
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
  var tt = { current: null }, Y = { transition: null }, ye = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: Y, ReactCurrentOwner: Ce };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: At, forEach: function(b, B, be) {
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
    if (!Lt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = ut, gt.Fragment = A, gt.Profiler = Ut, gt.PureComponent = rn, gt.StrictMode = wt, gt.Suspense = dt, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ye, gt.act = ne, gt.cloneElement = function(b, B, be) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var He = le({}, b.props), Ye = b.key, nt = b.ref, St = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (nt = B.ref, St = Ce.current), B.key !== void 0 && (Ye = "" + B.key), b.type && b.type.defaultProps) var Qe = b.type.defaultProps;
      for (mt in B) xt.call(B, mt) && !ot.hasOwnProperty(mt) && (He[mt] = B[mt] === void 0 && Qe !== void 0 ? Qe[mt] : B[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) He.children = be;
    else if (1 < mt) {
      Qe = Array(mt);
      for (var Vt = 0; Vt < mt; Vt++) Qe[Vt] = arguments[Vt + 2];
      He.children = Qe;
    }
    return { $$typeof: K, type: b.type, key: Ye, ref: nt, props: He, _owner: St };
  }, gt.createContext = function(b) {
    return b = { $$typeof: _t, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: Ot, _context: b }, b.Consumer = b;
  }, gt.createElement = je, gt.createFactory = function(b) {
    var B = je.bind(null, b);
    return B.type = b, B;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, gt.isValidElement = Lt, gt.lazy = function(b) {
    return { $$typeof: pe, _payload: { _status: -1, _result: b }, _init: pt };
  }, gt.memo = function(b, B) {
    return { $$typeof: xe, type: b, compare: B === void 0 ? null : B };
  }, gt.startTransition = function(b) {
    var B = Y.transition;
    Y.transition = {};
    try {
      b();
    } finally {
      Y.transition = B;
    }
  }, gt.unstable_act = ne, gt.useCallback = function(b, B) {
    return tt.current.useCallback(b, B);
  }, gt.useContext = function(b) {
    return tt.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return tt.current.useDeferredValue(b);
  }, gt.useEffect = function(b, B) {
    return tt.current.useEffect(b, B);
  }, gt.useId = function() {
    return tt.current.useId();
  }, gt.useImperativeHandle = function(b, B, be) {
    return tt.current.useImperativeHandle(b, B, be);
  }, gt.useInsertionEffect = function(b, B) {
    return tt.current.useInsertionEffect(b, B);
  }, gt.useLayoutEffect = function(b, B) {
    return tt.current.useLayoutEffect(b, B);
  }, gt.useMemo = function(b, B) {
    return tt.current.useMemo(b, B);
  }, gt.useReducer = function(b, B, be) {
    return tt.current.useReducer(b, B, be);
  }, gt.useRef = function(b) {
    return tt.current.useRef(b);
  }, gt.useState = function(b) {
    return tt.current.useState(b);
  }, gt.useSyncExternalStore = function(b, B, be) {
    return tt.current.useSyncExternalStore(b, B, be);
  }, gt.useTransition = function() {
    return tt.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Kp = { exports: {} };
Kp.exports;
var ZR;
function Jb() {
  return ZR || (ZR = 1, function(K, ve) {
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
      var wt = "18.3.1", Ut = Symbol.for("react.element"), Ot = Symbol.for("react.portal"), _t = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), xe = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), Hn = Symbol.iterator, rn = "@@iterator";
      function at(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Hn && h[Hn] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, xt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, Cn = null;
      function Lt(h) {
        Cn = h;
      }
      je.setExtraStackFrame = function(h) {
        Cn = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        Cn && (h += Cn);
        var C = je.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var fn = !1, It = !1, ht = !1, Me = !1, At = !1, pt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: xt,
        ReactCurrentOwner: ot
      };
      pt.ReactDebugCurrentFrame = je, pt.ReactCurrentActQueue = Ce;
      function tt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          ye("warn", h, M);
        }
      }
      function Y(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          ye("error", h, M);
        }
      }
      function ye(h, C, M) {
        {
          var F = pt.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", M = M.concat([X]));
          var me = M.map(function(se) {
            return String(se);
          });
          me.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, me);
        }
      }
      var ne = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", X = F + "." + C;
          if (ne[X])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), ne[X] = !0;
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
        enqueueForceUpdate: function(h, C, M) {
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
        enqueueReplaceState: function(h, C, M, F) {
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
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, be = Object.assign, He = {};
      Object.freeze(He);
      function Ye(h, C, M) {
        this.props = h, this.context = C, this.refs = He, this.updater = M || B;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var nt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, St = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              tt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Qe in nt)
          nt.hasOwnProperty(Qe) && St(Qe, nt[Qe]);
      }
      function mt() {
      }
      mt.prototype = Ye.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = He, this.updater = M || B;
      }
      var kn = Vt.prototype = new mt();
      kn.constructor = Vt, be(kn, Ye.prototype), kn.isPureReactComponent = !0;
      function Wn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var rr = Array.isArray;
      function On(h) {
        return rr(h);
      }
      function Sr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return Ln(h), !1;
        } catch {
          return !0;
        }
      }
      function Ln(h) {
        return "" + h;
      }
      function ca(h) {
        if (Vn(h))
          return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(h)), Ln(h);
      }
      function Qa(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? M + "(" + X + ")" : M;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case _t:
            return "Fragment";
          case Ot:
            return "Portal";
          case dt:
            return "Profiler";
          case S:
            return "StrictMode";
          case J:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return Dr(C) + ".Consumer";
            case xe:
              var M = h;
              return Dr(M._context) + ".Provider";
            case Be:
              return Qa(h, h.render, "ForwardRef");
            case le:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case Te: {
              var X = h, me = X._payload, se = X._init;
              try {
                return Pn(se(me));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Gn = Object.prototype.hasOwnProperty, qn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, Wa, Mn;
      Mn = {};
      function ar(h) {
        if (Gn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (Gn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ki(h, C) {
        var M = function() {
          Er || (Er = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function fa(h, C) {
        var M = function() {
          Wa || (Wa = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function Z(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Pn(ot.current.type);
          Mn[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var ke = function(h, C, M, F, X, me, se) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ut,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: se,
          // Record the component responsible for creating this element.
          _owner: me
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function Ze(h, C, M) {
        var F, X = {}, me = null, se = null, Ue = null, et = null;
        if (C != null) {
          ar(C) && (se = C.ref, Z(C)), Ir(C) && (ca(C.key), me = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, et = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Gn.call(C, F) && !qn.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          X.children = M;
        else if (Ft > 1) {
          for (var Wt = Array(Ft), Gt = 0; Gt < Ft; Gt++)
            Wt[Gt] = arguments[Gt + 2];
          Object.freeze && Object.freeze(Wt), X.children = Wt;
        }
        if (h && h.defaultProps) {
          var Xe = h.defaultProps;
          for (F in Xe)
            X[F] === void 0 && (X[F] = Xe[F]);
        }
        if (me || se) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          me && ki(X, Zt), se && fa(X, Zt);
        }
        return ke(h, me, se, Ue, et, ot.current, X);
      }
      function Mt(h, C) {
        var M = ke(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function an(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = be({}, h.props), me = h.key, se = h.ref, Ue = h._self, et = h._source, Ft = h._owner;
        if (C != null) {
          ar(C) && (se = C.ref, Ft = ot.current), Ir(C) && (ca(C.key), me = "" + C.key);
          var Wt;
          h.type && h.type.defaultProps && (Wt = h.type.defaultProps);
          for (F in C)
            Gn.call(C, F) && !qn.hasOwnProperty(F) && (C[F] === void 0 && Wt !== void 0 ? X[F] = Wt[F] : X[F] = C[F]);
        }
        var Gt = arguments.length - 2;
        if (Gt === 1)
          X.children = M;
        else if (Gt > 1) {
          for (var Xe = Array(Gt), Zt = 0; Zt < Gt; Zt++)
            Xe[Zt] = arguments[Zt + 2];
          X.children = Xe;
        }
        return ke(h.type, me, se, Ue, et, Ft, X);
      }
      function ln(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ut;
      }
      var un = ".", Xn = ":";
      function tn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return M[X];
        });
        return "$" + F;
      }
      var $t = !1, Nt = /\/+/g;
      function da(h) {
        return h.replace(Nt, "$&/");
      }
      function xa(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), tn("" + h.key)) : C.toString(36);
      }
      function ba(h, C, M, F, X) {
        var me = typeof h;
        (me === "undefined" || me === "boolean") && (h = null);
        var se = !1;
        if (h === null)
          se = !0;
        else
          switch (me) {
            case "string":
            case "number":
              se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ut:
                case Ot:
                  se = !0;
              }
          }
        if (se) {
          var Ue = h, et = X(Ue), Ft = F === "" ? un + xa(Ue, 0) : F;
          if (On(et)) {
            var Wt = "";
            Ft != null && (Wt = da(Ft) + "/"), ba(et, C, Wt, "", function(qf) {
              return qf;
            });
          } else et != null && (ln(et) && (et.key && (!Ue || Ue.key !== et.key) && ca(et.key), et = Mt(
            et,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (et.key && (!Ue || Ue.key !== et.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + et.key) + "/"
            ) : "") + Ft
          )), C.push(et));
          return 1;
        }
        var Gt, Xe, Zt = 0, Tn = F === "" ? un : F + Xn;
        if (On(h))
          for (var Kl = 0; Kl < h.length; Kl++)
            Gt = h[Kl], Xe = Tn + xa(Gt, Kl), Zt += ba(Gt, C, M, Xe, X);
        else {
          var Qo = at(h);
          if (typeof Qo == "function") {
            var Hi = h;
            Qo === Hi.entries && ($t || tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Zl = Qo.call(Hi), Wo, Gf = 0; !(Wo = Zl.next()).done; )
              Gt = Wo.value, Xe = Tn + xa(Gt, Gf++), Zt += ba(Gt, C, M, Xe, X);
          } else if (me === "object") {
            var uc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (uc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : uc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Oi(h, C, M) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return ba(h, F, "", "", function(me) {
          return C.call(M, me, X++);
        }), F;
      }
      function Yl(h) {
        var C = 0;
        return Oi(h, function() {
          C++;
        }), C;
      }
      function Il(h, C, M) {
        Oi(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Li(h) {
        return Oi(h, function(C) {
          return C;
        }) || [];
      }
      function $l(h) {
        if (!ln(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function ui(h) {
        var C = {
          $$typeof: pe,
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
          $$typeof: xe,
          _context: C
        };
        var M = !1, F = !1, X = !1;
        {
          var me = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(me, {
            Provider: {
              get: function() {
                return F || (F = !0, Y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(se) {
                C.Provider = se;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(se) {
                C._currentValue = se;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(se) {
                C._currentValue2 = se;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(se) {
                C._threadCount = se;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, Y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(se) {
                X || (tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", se), X = !0);
              }
            }
          }), C.Consumer = me;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, ir = 0, va = 1, $r = 2;
      function oi(h) {
        if (h._status === pa) {
          var C = h._result, M = C();
          if (M.then(function(me) {
            if (h._status === ir || h._status === pa) {
              var se = h;
              se._status = va, se._result = me;
            }
          }, function(me) {
            if (h._status === ir || h._status === pa) {
              var se = h;
              se._status = $r, se._result = me;
            }
          }), h._status === pa) {
            var F = h;
            F._status = ir, F._result = M;
          }
        }
        if (h._status === va) {
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
      function si(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, M = {
          $$typeof: Te,
          _payload: C,
          _init: oi
        };
        {
          var F, X;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(me) {
                Y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = me, Object.defineProperty(M, "defaultProps", {
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
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = me, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === le ? Y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Y("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Y("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Be,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function I(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === _t || h === dt || At || h === S || h === J || h === Fe || Me || h === ut || fn || It || ht || typeof h == "object" && h !== null && (h.$$typeof === Te || h.$$typeof === le || h.$$typeof === xe || h.$$typeof === pe || h.$$typeof === Be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function re(h, C) {
        I(h) || Y("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: le,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return M;
      }
      function ie() {
        var h = Ne.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function it(h) {
        var C = ie();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? Y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && Y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ie(h) {
        var C = ie();
        return C.useState(h);
      }
      function st(h, C, M) {
        var F = ie();
        return F.useReducer(h, C, M);
      }
      function Je(h) {
        var C = ie();
        return C.useRef(h);
      }
      function Rn(h, C) {
        var M = ie();
        return M.useEffect(h, C);
      }
      function nn(h, C) {
        var M = ie();
        return M.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var M = ie();
        return M.useLayoutEffect(h, C);
      }
      function Cr(h, C) {
        var M = ie();
        return M.useCallback(h, C);
      }
      function Ga(h, C) {
        var M = ie();
        return M.useMemo(h, C);
      }
      function zt(h, C, M) {
        var F = ie();
        return F.useImperativeHandle(h, C, M);
      }
      function dn(h, C) {
        {
          var M = ie();
          return M.useDebugValue(h, C);
        }
      }
      function Ge() {
        var h = ie();
        return h.useTransition();
      }
      function ci(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function Ni() {
        var h = ie();
        return h.useId();
      }
      function rc(h, C, M) {
        var F = ie();
        return F.useSyncExternalStore(h, C, M);
      }
      var zi = 0, il, Qr, Vo, kr, Po, ac, ic;
      function Ui() {
      }
      Ui.__reactDisabledLog = !0;
      function ll() {
        {
          if (zi === 0) {
            il = console.log, Qr = console.info, Vo = console.warn, kr = console.error, Po = console.group, ac = console.groupCollapsed, ic = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ui,
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
          zi++;
        }
      }
      function Wr() {
        {
          if (zi--, zi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: be({}, h, {
                value: il
              }),
              info: be({}, h, {
                value: Qr
              }),
              warn: be({}, h, {
                value: Vo
              }),
              error: be({}, h, {
                value: kr
              }),
              group: be({}, h, {
                value: Po
              }),
              groupCollapsed: be({}, h, {
                value: ac
              }),
              groupEnd: be({}, h, {
                value: ic
              })
            });
          }
          zi < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var fi = pt.ReactCurrentDispatcher, ul;
      function Au(h, C, M) {
        {
          if (ul === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              ul = F && F[1] || "";
            }
          return `
` + ul + h;
        }
      }
      var Ai = !1, Ql;
      {
        var Wl = typeof WeakMap == "function" ? WeakMap : Map;
        Ql = new Wl();
      }
      function ol(h, C) {
        if (!h || Ai)
          return "";
        {
          var M = Ql.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        Ai = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var me;
        me = fi.current, fi.current = null, ll();
        try {
          if (C) {
            var se = function() {
              throw Error();
            };
            if (Object.defineProperty(se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(se, []);
              } catch (Tn) {
                F = Tn;
              }
              Reflect.construct(h, [], se);
            } else {
              try {
                se.call();
              } catch (Tn) {
                F = Tn;
              }
              h.call(se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tn) {
              F = Tn;
            }
            h();
          }
        } catch (Tn) {
          if (Tn && F && typeof Tn.stack == "string") {
            for (var Ue = Tn.stack.split(`
`), et = F.stack.split(`
`), Ft = Ue.length - 1, Wt = et.length - 1; Ft >= 1 && Wt >= 0 && Ue[Ft] !== et[Wt]; )
              Wt--;
            for (; Ft >= 1 && Wt >= 0; Ft--, Wt--)
              if (Ue[Ft] !== et[Wt]) {
                if (Ft !== 1 || Wt !== 1)
                  do
                    if (Ft--, Wt--, Wt < 0 || Ue[Ft] !== et[Wt]) {
                      var Gt = `
` + Ue[Ft].replace(" at new ", " at ");
                      return h.displayName && Gt.includes("<anonymous>") && (Gt = Gt.replace("<anonymous>", h.displayName)), typeof h == "function" && Ql.set(h, Gt), Gt;
                    }
                  while (Ft >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          Ai = !1, fi.current = me, Wr(), Error.prepareStackTrace = X;
        }
        var Xe = h ? h.displayName || h.name : "", Zt = Xe ? Au(Xe) : "";
        return typeof h == "function" && Ql.set(h, Zt), Zt;
      }
      function Bo(h, C, M) {
        return ol(h, !1);
      }
      function Yo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Et(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return ol(h, Yo(h));
        if (typeof h == "string")
          return Au(h);
        switch (h) {
          case J:
            return Au("Suspense");
          case Fe:
            return Au("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Be:
              return Bo(h.render);
            case le:
              return Et(h.type, C, M);
            case Te: {
              var F = h, X = F._payload, me = F._init;
              try {
                return Et(me(X), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Io = {}, Fu = pt.ReactDebugCurrentFrame;
      function Ct(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          Fu.setExtraStackFrame(M);
        } else
          Fu.setExtraStackFrame(null);
      }
      function lc(h, C, M, F, X) {
        {
          var me = Function.call.bind(Gn);
          for (var se in h)
            if (me(h, se)) {
              var Ue = void 0;
              try {
                if (typeof h[se] != "function") {
                  var et = Error((F || "React class") + ": " + M + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw et.name = "Invariant Violation", et;
                }
                Ue = h[se](C, se, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ue = Ft;
              }
              Ue && !(Ue instanceof Error) && (Ct(X), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, se, typeof Ue), Ct(null)), Ue instanceof Error && !(Ue.message in Io) && (Io[Ue.message] = !0, Ct(X), Y("Failed %s type: %s", M, Ue.message), Ct(null));
            }
        }
      }
      function di(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          Lt(M);
        } else
          Lt(null);
      }
      var Ve;
      Ve = !1;
      function Gl() {
        if (ot.current) {
          var h = Pn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Kn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Gr(h) {
        return h != null ? Kn(h.__source) : "";
      }
      var Or = {};
      function pi(h) {
        var C = Gl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function yn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = pi(C);
          if (!Or[M]) {
            Or[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ot.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), di(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), di(null);
          }
        }
      }
      function Qt(h, C) {
        if (typeof h == "object") {
          if (On(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              ln(F) && yn(F, C);
            }
          else if (ln(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = at(h);
            if (typeof X == "function" && X !== h.entries)
              for (var me = X.call(h), se; !(se = me.next()).done; )
                ln(se.value) && yn(se.value, C);
          }
        }
      }
      function qa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Pn(C);
            lc(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Ve) {
            Ve = !0;
            var X = Pn(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              di(h), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), di(null);
              break;
            }
          }
          h.ref !== null && (di(h), Y("Invalid attribute `ref` supplied to `React.Fragment`."), di(null));
        }
      }
      function Rr(h, C, M) {
        var F = I(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var me = Gr(C);
          me ? X += me : X += Gl();
          var se;
          h === null ? se = "null" : On(h) ? se = "array" : h !== void 0 && h.$$typeof === Ut ? (se = "<" + (Pn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : se = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, X);
        }
        var Ue = Ze.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (F)
          for (var et = 2; et < arguments.length; et++)
            Qt(arguments[et], h);
        return h === _t ? Da(Ue) : qa(Ue), Ue;
      }
      var Lr = !1;
      function Wf(h) {
        var C = Rr.bind(null, h);
        return C.type = h, Lr || (Lr = !0, tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function ju(h, C, M) {
        for (var F = an.apply(this, arguments), X = 2; X < arguments.length; X++)
          Qt(arguments[X], F.type);
        return qa(F), F;
      }
      function ql(h, C) {
        var M = xt.transition;
        xt.transition = {};
        var F = xt.transition;
        xt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (xt.transition = M, M === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Hu = !1, Vu = null;
      function Xl(h) {
        if (Vu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = K && K[C];
            Vu = M.call(K, "timers").setImmediate;
          } catch {
            Vu = function(X) {
              Hu === !1 && (Hu = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var me = new MessageChannel();
              me.port1.onmessage = X, me.port2.postMessage(void 0);
            };
          }
        return Vu(h);
      }
      var ka = 0, Oa = !1;
      function sl(h) {
        {
          var C = ka;
          ka++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var X = Ce.current;
              X !== null && (Ce.didScheduleLegacyUpdate = !1, ji(X));
            }
          } catch (Xe) {
            throw Fi(C), Xe;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var me = F, se = !1, Ue = {
              then: function(Xe, Zt) {
                se = !0, me.then(function(Tn) {
                  Fi(C), ka === 0 ? Pu(Tn, Xe, Zt) : Xe(Tn);
                }, function(Tn) {
                  Fi(C), Zt(Tn);
                });
              }
            };
            return !Oa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              se || (Oa = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var et = F;
            if (Fi(C), ka === 0) {
              var Ft = Ce.current;
              Ft !== null && (ji(Ft), Ce.current = null);
              var Wt = {
                then: function(Xe, Zt) {
                  Ce.current === null ? (Ce.current = [], Pu(et, Xe, Zt)) : Xe(et);
                }
              };
              return Wt;
            } else {
              var Gt = {
                then: function(Xe, Zt) {
                  Xe(et);
                }
              };
              return Gt;
            }
          }
        }
      }
      function Fi(h) {
        h !== ka - 1 && Y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function Pu(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              ji(F), Xl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : Pu(h, C, M);
              });
            } catch (X) {
              M(X);
            }
          else
            C(h);
        }
      }
      var cl = !1;
      function ji(h) {
        if (!cl) {
          cl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            cl = !1;
          }
        }
      }
      var Bu = Rr, $o = ju, La = Wf, Yu = {
        map: Oi,
        forEach: Il,
        count: Yl,
        toArray: Li,
        only: $l
      };
      ve.Children = Yu, ve.Component = Ye, ve.Fragment = _t, ve.Profiler = dt, ve.PureComponent = Vt, ve.StrictMode = S, ve.Suspense = J, ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, ve.act = sl, ve.cloneElement = $o, ve.createContext = ui, ve.createElement = Bu, ve.createFactory = La, ve.createRef = Wn, ve.forwardRef = Mi, ve.isValidElement = ln, ve.lazy = si, ve.memo = re, ve.startTransition = ql, ve.unstable_act = sl, ve.useCallback = Cr, ve.useContext = it, ve.useDebugValue = dn, ve.useDeferredValue = ci, ve.useEffect = Rn, ve.useId = Ni, ve.useImperativeHandle = zt, ve.useInsertionEffect = nn, ve.useLayoutEffect = on, ve.useMemo = Ga, ve.useReducer = st, ve.useRef = Je, ve.useState = Ie, ve.useSyncExternalStore = rc, ve.useTransition = Ge, ve.version = wt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
var eD = {};
eD.NODE_ENV === "production" ? v0.exports = Zb() : v0.exports = Jb();
var Jp = v0.exports;
const tD = /* @__PURE__ */ Kb(Jp);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function nD() {
  if (JR) return Gp;
  JR = 1;
  var K = Jp, ve = Symbol.for("react.element"), A = Symbol.for("react.fragment"), wt = Object.prototype.hasOwnProperty, Ut = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _t(S, dt, xe) {
    var pe, Be = {}, J = null, Fe = null;
    xe !== void 0 && (J = "" + xe), dt.key !== void 0 && (J = "" + dt.key), dt.ref !== void 0 && (Fe = dt.ref);
    for (pe in dt) wt.call(dt, pe) && !Ot.hasOwnProperty(pe) && (Be[pe] = dt[pe]);
    if (S && S.defaultProps) for (pe in dt = S.defaultProps, dt) Be[pe] === void 0 && (Be[pe] = dt[pe]);
    return { $$typeof: ve, type: S, key: J, ref: Fe, props: Be, _owner: Ut.current };
  }
  return Gp.Fragment = A, Gp.jsx = _t, Gp.jsxs = _t, Gp;
}
var qp = {}, eT;
function rD() {
  if (eT) return qp;
  eT = 1;
  var K = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return K.NODE_ENV !== "production" && function() {
    var ve = Jp, A = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), Ot = Symbol.for("react.strict_mode"), _t = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), dt = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), Te = Symbol.iterator, ut = "@@iterator";
    function Hn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Te && R[Te] || R[ut];
      return typeof I == "function" ? I : null;
    }
    var rn = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function at(R) {
      {
        for (var I = arguments.length, re = new Array(I > 1 ? I - 1 : 0), ie = 1; ie < I; ie++)
          re[ie - 1] = arguments[ie];
        Ne("error", R, re);
      }
    }
    function Ne(R, I, re) {
      {
        var ie = rn.ReactDebugCurrentFrame, it = ie.getStackAddendum();
        it !== "" && (I += "%s", re = re.concat([it]));
        var Ie = re.map(function(st) {
          return String(st);
        });
        Ie.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ie);
      }
    }
    var xt = !1, Ce = !1, ot = !1, je = !1, Cn = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function fn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ut || R === _t || Cn || R === Ot || R === pe || R === Be || je || R === le || xt || Ce || ot || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === J || R.$$typeof === S || R.$$typeof === dt || R.$$typeof === xe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Lt || R.getModuleId !== void 0));
    }
    function It(R, I, re) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var it = I.displayName || I.name || "";
      return it !== "" ? re + "(" + it + ")" : re;
    }
    function ht(R) {
      return R.displayName || "Context";
    }
    function Me(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && at("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ut:
          return "Fragment";
        case wt:
          return "Portal";
        case _t:
          return "Profiler";
        case Ot:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case dt:
            var I = R;
            return ht(I) + ".Consumer";
          case S:
            var re = R;
            return ht(re._context) + ".Provider";
          case xe:
            return It(R, R.render, "ForwardRef");
          case J:
            var ie = R.displayName || null;
            return ie !== null ? ie : Me(R.type) || "Memo";
          case Fe: {
            var it = R, Ie = it._payload, st = it._init;
            try {
              return Me(st(Ie));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, pt = 0, tt, Y, ye, ne, b, B, be;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ye() {
      {
        if (pt === 0) {
          tt = console.log, Y = console.info, ye = console.warn, ne = console.error, b = console.group, B = console.groupCollapsed, be = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: He,
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
        pt++;
      }
    }
    function nt() {
      {
        if (pt--, pt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: tt
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
        pt < 0 && at("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var St = rn.ReactCurrentDispatcher, Qe;
    function mt(R, I, re) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (it) {
            var ie = it.stack.trim().match(/\n( *(at )?)/);
            Qe = ie && ie[1] || "";
          }
        return `
` + Qe + R;
      }
    }
    var Vt = !1, kn;
    {
      var Wn = typeof WeakMap == "function" ? WeakMap : Map;
      kn = new Wn();
    }
    function rr(R, I) {
      if (!R || Vt)
        return "";
      {
        var re = kn.get(R);
        if (re !== void 0)
          return re;
      }
      var ie;
      Vt = !0;
      var it = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ie;
      Ie = St.current, St.current = null, Ye();
      try {
        if (I) {
          var st = function() {
            throw Error();
          };
          if (Object.defineProperty(st.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(st, []);
            } catch (dn) {
              ie = dn;
            }
            Reflect.construct(R, [], st);
          } else {
            try {
              st.call();
            } catch (dn) {
              ie = dn;
            }
            R.call(st.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            ie = dn;
          }
          R();
        }
      } catch (dn) {
        if (dn && ie && typeof dn.stack == "string") {
          for (var Je = dn.stack.split(`
`), Rn = ie.stack.split(`
`), nn = Je.length - 1, on = Rn.length - 1; nn >= 1 && on >= 0 && Je[nn] !== Rn[on]; )
            on--;
          for (; nn >= 1 && on >= 0; nn--, on--)
            if (Je[nn] !== Rn[on]) {
              if (nn !== 1 || on !== 1)
                do
                  if (nn--, on--, on < 0 || Je[nn] !== Rn[on]) {
                    var Cr = `
` + Je[nn].replace(" at new ", " at ");
                    return R.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", R.displayName)), typeof R == "function" && kn.set(R, Cr), Cr;
                  }
                while (nn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, St.current = Ie, nt(), Error.prepareStackTrace = it;
      }
      var Ga = R ? R.displayName || R.name : "", zt = Ga ? mt(Ga) : "";
      return typeof R == "function" && kn.set(R, zt), zt;
    }
    function On(R, I, re) {
      return rr(R, !1);
    }
    function Sr(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function Vn(R, I, re) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return rr(R, Sr(R));
      if (typeof R == "string")
        return mt(R);
      switch (R) {
        case pe:
          return mt("Suspense");
        case Be:
          return mt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case xe:
            return On(R.render);
          case J:
            return Vn(R.type, I, re);
          case Fe: {
            var ie = R, it = ie._payload, Ie = ie._init;
            try {
              return Vn(Ie(it), I, re);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, ca = {}, Qa = rn.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var I = R._owner, re = Vn(R.type, R._source, I ? I.type : null);
        Qa.setExtraStackFrame(re);
      } else
        Qa.setExtraStackFrame(null);
    }
    function Pn(R, I, re, ie, it) {
      {
        var Ie = Function.call.bind(Ln);
        for (var st in R)
          if (Ie(R, st)) {
            var Je = void 0;
            try {
              if (typeof R[st] != "function") {
                var Rn = Error((ie || "React class") + ": " + re + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              Je = R[st](I, st, ie, re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              Je = nn;
            }
            Je && !(Je instanceof Error) && (Dr(it), at("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", re, st, typeof Je), Dr(null)), Je instanceof Error && !(Je.message in ca) && (ca[Je.message] = !0, Dr(it), at("Failed %s type: %s", re, Je.message), Dr(null));
          }
      }
    }
    var Gn = Array.isArray;
    function qn(R) {
      return Gn(R);
    }
    function Er(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, re = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return re;
      }
    }
    function Wa(R) {
      try {
        return Mn(R), !1;
      } catch {
        return !0;
      }
    }
    function Mn(R) {
      return "" + R;
    }
    function ar(R) {
      if (Wa(R))
        return at("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(R)), Mn(R);
    }
    var Ir = rn.ReactCurrentOwner, ki = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, Z;
    function ke(R) {
      if (Ln.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ze(R) {
      if (Ln.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, I) {
      typeof R.ref == "string" && Ir.current;
    }
    function an(R, I) {
      {
        var re = function() {
          fa || (fa = !0, at("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: re,
          configurable: !0
        });
      }
    }
    function ln(R, I) {
      {
        var re = function() {
          Z || (Z = !0, at("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        re.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: re,
          configurable: !0
        });
      }
    }
    var un = function(R, I, re, ie, it, Ie, st) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: re,
        props: st,
        // Record the component responsible for creating this element.
        _owner: Ie
      };
      return Je._store = {}, Object.defineProperty(Je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: it
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function Xn(R, I, re, ie, it) {
      {
        var Ie, st = {}, Je = null, Rn = null;
        re !== void 0 && (ar(re), Je = "" + re), Ze(I) && (ar(I.key), Je = "" + I.key), ke(I) && (Rn = I.ref, Mt(I, it));
        for (Ie in I)
          Ln.call(I, Ie) && !ki.hasOwnProperty(Ie) && (st[Ie] = I[Ie]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ie in nn)
            st[Ie] === void 0 && (st[Ie] = nn[Ie]);
        }
        if (Je || Rn) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Je && an(st, on), Rn && ln(st, on);
        }
        return un(R, Je, Rn, it, ie, Ir.current, st);
      }
    }
    var tn = rn.ReactCurrentOwner, $t = rn.ReactDebugCurrentFrame;
    function Nt(R) {
      if (R) {
        var I = R._owner, re = Vn(R.type, R._source, I ? I.type : null);
        $t.setExtraStackFrame(re);
      } else
        $t.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function xa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function ba() {
      {
        if (tn.current) {
          var R = Me(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Oi(R) {
      return "";
    }
    var Yl = {};
    function Il(R) {
      {
        var I = ba();
        if (!I) {
          var re = typeof R == "string" ? R : R.displayName || R.name;
          re && (I = `

Check the top-level render call using <` + re + ">.");
        }
        return I;
      }
    }
    function Li(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var re = Il(I);
        if (Yl[re])
          return;
        Yl[re] = !0;
        var ie = "";
        R && R._owner && R._owner !== tn.current && (ie = " It was passed a child from " + Me(R._owner.type) + "."), Nt(R), at('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', re, ie), Nt(null);
      }
    }
    function $l(R, I) {
      {
        if (typeof R != "object")
          return;
        if (qn(R))
          for (var re = 0; re < R.length; re++) {
            var ie = R[re];
            xa(ie) && Li(ie, I);
          }
        else if (xa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var it = Hn(R);
          if (typeof it == "function" && it !== R.entries)
            for (var Ie = it.call(R), st; !(st = Ie.next()).done; )
              xa(st.value) && Li(st.value, I);
        }
      }
    }
    function ui(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var re;
        if (typeof I == "function")
          re = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === xe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === J))
          re = I.propTypes;
        else
          return;
        if (re) {
          var ie = Me(I);
          Pn(re, R.props, "prop", ie, R);
        } else if (I.PropTypes !== void 0 && !da) {
          da = !0;
          var it = Me(I);
          at("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", it || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && at("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var I = Object.keys(R.props), re = 0; re < I.length; re++) {
          var ie = I[re];
          if (ie !== "children" && ie !== "key") {
            Nt(R), at("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Nt(null);
            break;
          }
        }
        R.ref !== null && (Nt(R), at("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    var ir = {};
    function va(R, I, re, ie, it, Ie) {
      {
        var st = fn(R);
        if (!st) {
          var Je = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Oi();
          Rn ? Je += Rn : Je += ba();
          var nn;
          R === null ? nn = "null" : qn(R) ? nn = "array" : R !== void 0 && R.$$typeof === A ? (nn = "<" + (Me(R.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, at("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, Je);
        }
        var on = Xn(R, I, re, it, Ie);
        if (on == null)
          return on;
        if (st) {
          var Cr = I.children;
          if (Cr !== void 0)
            if (ie)
              if (qn(Cr)) {
                for (var Ga = 0; Ga < Cr.length; Ga++)
                  $l(Cr[Ga], R);
                Object.freeze && Object.freeze(Cr);
              } else
                at("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $l(Cr, R);
        }
        if (Ln.call(I, "key")) {
          var zt = Me(R), dn = Object.keys(I).filter(function(Ni) {
            return Ni !== "key";
          }), Ge = dn.length > 0 ? "{key: someKey, " + dn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[zt + Ge]) {
            var ci = dn.length > 0 ? "{" + dn.join(": ..., ") + ": ...}" : "{}";
            at(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, zt, ci, zt), ir[zt + Ge] = !0;
          }
        }
        return R === Ut ? pa(on) : ui(on), on;
      }
    }
    function $r(R, I, re) {
      return va(R, I, re, !0);
    }
    function oi(R, I, re) {
      return va(R, I, re, !1);
    }
    var si = oi, Mi = $r;
    qp.Fragment = Ut, qp.jsx = si, qp.jsxs = Mi;
  }(), qp;
}
var aD = {};
aD.NODE_ENV === "production" ? p0.exports = nD() : p0.exports = rD();
var Wm = p0.exports, Zp = {}, h0 = { exports: {} }, Ia = {}, $m = { exports: {} }, f0 = {};
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
function iD() {
  return tT || (tT = 1, function(K) {
    function ve(Y, ye) {
      var ne = Y.length;
      Y.push(ye);
      e: for (; 0 < ne; ) {
        var b = ne - 1 >>> 1, B = Y[b];
        if (0 < Ut(B, ye)) Y[b] = ye, Y[ne] = B, ne = b;
        else break e;
      }
    }
    function A(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function wt(Y) {
      if (Y.length === 0) return null;
      var ye = Y[0], ne = Y.pop();
      if (ne !== ye) {
        Y[0] = ne;
        e: for (var b = 0, B = Y.length, be = B >>> 1; b < be; ) {
          var He = 2 * (b + 1) - 1, Ye = Y[He], nt = He + 1, St = Y[nt];
          if (0 > Ut(Ye, ne)) nt < B && 0 > Ut(St, Ye) ? (Y[b] = St, Y[nt] = ne, b = nt) : (Y[b] = Ye, Y[He] = ne, b = He);
          else if (nt < B && 0 > Ut(St, ne)) Y[b] = St, Y[nt] = ne, b = nt;
          else break e;
        }
      }
      return ye;
    }
    function Ut(Y, ye) {
      var ne = Y.sortIndex - ye.sortIndex;
      return ne !== 0 ? ne : Y.id - ye.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ot = performance;
      K.unstable_now = function() {
        return Ot.now();
      };
    } else {
      var _t = Date, S = _t.now();
      K.unstable_now = function() {
        return _t.now() - S;
      };
    }
    var dt = [], xe = [], pe = 1, Be = null, J = 3, Fe = !1, le = !1, Te = !1, ut = typeof setTimeout == "function" ? setTimeout : null, Hn = typeof clearTimeout == "function" ? clearTimeout : null, rn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function at(Y) {
      for (var ye = A(xe); ye !== null; ) {
        if (ye.callback === null) wt(xe);
        else if (ye.startTime <= Y) wt(xe), ye.sortIndex = ye.expirationTime, ve(dt, ye);
        else break;
        ye = A(xe);
      }
    }
    function Ne(Y) {
      if (Te = !1, at(Y), !le) if (A(dt) !== null) le = !0, pt(xt);
      else {
        var ye = A(xe);
        ye !== null && tt(Ne, ye.startTime - Y);
      }
    }
    function xt(Y, ye) {
      le = !1, Te && (Te = !1, Hn(je), je = -1), Fe = !0;
      var ne = J;
      try {
        for (at(ye), Be = A(dt); Be !== null && (!(Be.expirationTime > ye) || Y && !fn()); ) {
          var b = Be.callback;
          if (typeof b == "function") {
            Be.callback = null, J = Be.priorityLevel;
            var B = b(Be.expirationTime <= ye);
            ye = K.unstable_now(), typeof B == "function" ? Be.callback = B : Be === A(dt) && wt(dt), at(ye);
          } else wt(dt);
          Be = A(dt);
        }
        if (Be !== null) var be = !0;
        else {
          var He = A(xe);
          He !== null && tt(Ne, He.startTime - ye), be = !1;
        }
        return be;
      } finally {
        Be = null, J = ne, Fe = !1;
      }
    }
    var Ce = !1, ot = null, je = -1, Cn = 5, Lt = -1;
    function fn() {
      return !(K.unstable_now() - Lt < Cn);
    }
    function It() {
      if (ot !== null) {
        var Y = K.unstable_now();
        Lt = Y;
        var ye = !0;
        try {
          ye = ot(!0, Y);
        } finally {
          ye ? ht() : (Ce = !1, ot = null);
        }
      } else Ce = !1;
    }
    var ht;
    if (typeof rn == "function") ht = function() {
      rn(It);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), At = Me.port2;
      Me.port1.onmessage = It, ht = function() {
        At.postMessage(null);
      };
    } else ht = function() {
      ut(It, 0);
    };
    function pt(Y) {
      ot = Y, Ce || (Ce = !0, ht());
    }
    function tt(Y, ye) {
      je = ut(function() {
        Y(K.unstable_now());
      }, ye);
    }
    K.unstable_IdlePriority = 5, K.unstable_ImmediatePriority = 1, K.unstable_LowPriority = 4, K.unstable_NormalPriority = 3, K.unstable_Profiling = null, K.unstable_UserBlockingPriority = 2, K.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, K.unstable_continueExecution = function() {
      le || Fe || (le = !0, pt(xt));
    }, K.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, K.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, K.unstable_getFirstCallbackNode = function() {
      return A(dt);
    }, K.unstable_next = function(Y) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var ye = 3;
          break;
        default:
          ye = J;
      }
      var ne = J;
      J = ye;
      try {
        return Y();
      } finally {
        J = ne;
      }
    }, K.unstable_pauseExecution = function() {
    }, K.unstable_requestPaint = function() {
    }, K.unstable_runWithPriority = function(Y, ye) {
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
      var ne = J;
      J = Y;
      try {
        return ye();
      } finally {
        J = ne;
      }
    }, K.unstable_scheduleCallback = function(Y, ye, ne) {
      var b = K.unstable_now();
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
      return B = ne + B, Y = { id: pe++, callback: ye, priorityLevel: Y, startTime: ne, expirationTime: B, sortIndex: -1 }, ne > b ? (Y.sortIndex = ne, ve(xe, Y), A(dt) === null && Y === A(xe) && (Te ? (Hn(je), je = -1) : Te = !0, tt(Ne, ne - b))) : (Y.sortIndex = B, ve(dt, Y), le || Fe || (le = !0, pt(xt))), Y;
    }, K.unstable_shouldYield = fn, K.unstable_wrapCallback = function(Y) {
      var ye = J;
      return function() {
        var ne = J;
        J = ye;
        try {
          return Y.apply(this, arguments);
        } finally {
          J = ne;
        }
      };
    };
  }(f0)), f0;
}
var d0 = {}, nT;
function lD() {
  return nT || (nT = 1, function(K) {
    var ve = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    ve.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, wt = 5;
      function Ut(Z, ke) {
        var Ze = Z.length;
        Z.push(ke), S(Z, ke, Ze);
      }
      function Ot(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function _t(Z) {
        if (Z.length === 0)
          return null;
        var ke = Z[0], Ze = Z.pop();
        return Ze !== ke && (Z[0] = Ze, dt(Z, Ze, 0)), ke;
      }
      function S(Z, ke, Ze) {
        for (var Mt = Ze; Mt > 0; ) {
          var an = Mt - 1 >>> 1, ln = Z[an];
          if (xe(ln, ke) > 0)
            Z[an] = ke, Z[Mt] = ln, Mt = an;
          else
            return;
        }
      }
      function dt(Z, ke, Ze) {
        for (var Mt = Ze, an = Z.length, ln = an >>> 1; Mt < ln; ) {
          var un = (Mt + 1) * 2 - 1, Xn = Z[un], tn = un + 1, $t = Z[tn];
          if (xe(Xn, ke) < 0)
            tn < an && xe($t, Xn) < 0 ? (Z[Mt] = $t, Z[tn] = ke, Mt = tn) : (Z[Mt] = Xn, Z[un] = ke, Mt = un);
          else if (tn < an && xe($t, ke) < 0)
            Z[Mt] = $t, Z[tn] = ke, Mt = tn;
          else
            return;
        }
      }
      function xe(Z, ke) {
        var Ze = Z.sortIndex - ke.sortIndex;
        return Ze !== 0 ? Ze : Z.id - ke.id;
      }
      var pe = 1, Be = 2, J = 3, Fe = 4, le = 5;
      function Te(Z, ke) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var Hn = performance;
        K.unstable_now = function() {
          return Hn.now();
        };
      } else {
        var rn = Date, at = rn.now();
        K.unstable_now = function() {
          return rn.now() - at;
        };
      }
      var Ne = 1073741823, xt = -1, Ce = 250, ot = 5e3, je = 1e4, Cn = Ne, Lt = [], fn = [], It = 1, ht = null, Me = J, At = !1, pt = !1, tt = !1, Y = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(Z) {
        for (var ke = Ot(fn); ke !== null; ) {
          if (ke.callback === null)
            _t(fn);
          else if (ke.startTime <= Z)
            _t(fn), ke.sortIndex = ke.expirationTime, Ut(Lt, ke);
          else
            return;
          ke = Ot(fn);
        }
      }
      function B(Z) {
        if (tt = !1, b(Z), !pt)
          if (Ot(Lt) !== null)
            pt = !0, Mn(be);
          else {
            var ke = Ot(fn);
            ke !== null && ar(B, ke.startTime - Z);
          }
      }
      function be(Z, ke) {
        pt = !1, tt && (tt = !1, Ir()), At = !0;
        var Ze = Me;
        try {
          var Mt;
          if (!A) return He(Z, ke);
        } finally {
          ht = null, Me = Ze, At = !1;
        }
      }
      function He(Z, ke) {
        var Ze = ke;
        for (b(Ze), ht = Ot(Lt); ht !== null && !(ht.expirationTime > Ze && (!Z || Qa())); ) {
          var Mt = ht.callback;
          if (typeof Mt == "function") {
            ht.callback = null, Me = ht.priorityLevel;
            var an = ht.expirationTime <= Ze, ln = Mt(an);
            Ze = K.unstable_now(), typeof ln == "function" ? ht.callback = ln : ht === Ot(Lt) && _t(Lt), b(Ze);
          } else
            _t(Lt);
          ht = Ot(Lt);
        }
        if (ht !== null)
          return !0;
        var un = Ot(fn);
        return un !== null && ar(B, un.startTime - Ze), !1;
      }
      function Ye(Z, ke) {
        switch (Z) {
          case pe:
          case Be:
          case J:
          case Fe:
          case le:
            break;
          default:
            Z = J;
        }
        var Ze = Me;
        Me = Z;
        try {
          return ke();
        } finally {
          Me = Ze;
        }
      }
      function nt(Z) {
        var ke;
        switch (Me) {
          case pe:
          case Be:
          case J:
            ke = J;
            break;
          default:
            ke = Me;
            break;
        }
        var Ze = Me;
        Me = ke;
        try {
          return Z();
        } finally {
          Me = Ze;
        }
      }
      function St(Z) {
        var ke = Me;
        return function() {
          var Ze = Me;
          Me = ke;
          try {
            return Z.apply(this, arguments);
          } finally {
            Me = Ze;
          }
        };
      }
      function Qe(Z, ke, Ze) {
        var Mt = K.unstable_now(), an;
        if (typeof Ze == "object" && Ze !== null) {
          var ln = Ze.delay;
          typeof ln == "number" && ln > 0 ? an = Mt + ln : an = Mt;
        } else
          an = Mt;
        var un;
        switch (Z) {
          case pe:
            un = xt;
            break;
          case Be:
            un = Ce;
            break;
          case le:
            un = Cn;
            break;
          case Fe:
            un = je;
            break;
          case J:
          default:
            un = ot;
            break;
        }
        var Xn = an + un, tn = {
          id: It++,
          callback: ke,
          priorityLevel: Z,
          startTime: an,
          expirationTime: Xn,
          sortIndex: -1
        };
        return an > Mt ? (tn.sortIndex = an, Ut(fn, tn), Ot(Lt) === null && tn === Ot(fn) && (tt ? Ir() : tt = !0, ar(B, an - Mt))) : (tn.sortIndex = Xn, Ut(Lt, tn), !pt && !At && (pt = !0, Mn(be))), tn;
      }
      function mt() {
      }
      function Vt() {
        !pt && !At && (pt = !0, Mn(be));
      }
      function kn() {
        return Ot(Lt);
      }
      function Wn(Z) {
        Z.callback = null;
      }
      function rr() {
        return Me;
      }
      var On = !1, Sr = null, Vn = -1, Ln = wt, ca = -1;
      function Qa() {
        var Z = K.unstable_now() - ca;
        return !(Z < Ln);
      }
      function Dr() {
      }
      function Pn(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? Ln = Math.floor(1e3 / Z) : Ln = wt;
      }
      var Gn = function() {
        if (Sr !== null) {
          var Z = K.unstable_now();
          ca = Z;
          var ke = !0, Ze = !0;
          try {
            Ze = Sr(ke, Z);
          } finally {
            Ze ? qn() : (On = !1, Sr = null);
          }
        } else
          On = !1;
      }, qn;
      if (typeof ne == "function")
        qn = function() {
          ne(Gn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), Wa = Er.port2;
        Er.port1.onmessage = Gn, qn = function() {
          Wa.postMessage(null);
        };
      } else
        qn = function() {
          Y(Gn, 0);
        };
      function Mn(Z) {
        Sr = Z, On || (On = !0, qn());
      }
      function ar(Z, ke) {
        Vn = Y(function() {
          Z(K.unstable_now());
        }, ke);
      }
      function Ir() {
        ye(Vn), Vn = -1;
      }
      var ki = Dr, fa = null;
      K.unstable_IdlePriority = le, K.unstable_ImmediatePriority = pe, K.unstable_LowPriority = Fe, K.unstable_NormalPriority = J, K.unstable_Profiling = fa, K.unstable_UserBlockingPriority = Be, K.unstable_cancelCallback = Wn, K.unstable_continueExecution = Vt, K.unstable_forceFrameRate = Pn, K.unstable_getCurrentPriorityLevel = rr, K.unstable_getFirstCallbackNode = kn, K.unstable_next = nt, K.unstable_pauseExecution = mt, K.unstable_requestPaint = ki, K.unstable_runWithPriority = Ye, K.unstable_scheduleCallback = Qe, K.unstable_shouldYield = Qa, K.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rT;
function uT() {
  if (rT) return $m.exports;
  rT = 1;
  var K = {};
  return K.NODE_ENV === "production" ? $m.exports = iD() : $m.exports = lD(), $m.exports;
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
function uD() {
  if (aT) return Ia;
  aT = 1;
  var K = Jp, ve = uT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var wt = /* @__PURE__ */ new Set(), Ut = {};
  function Ot(n, r) {
    _t(n, r), _t(n + "Capture", r);
  }
  function _t(n, r) {
    for (Ut[n] = r, n = 0; n < r.length; n++) wt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dt = Object.prototype.hasOwnProperty, xe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Be = {};
  function J(n) {
    return dt.call(Be, n) ? !0 : dt.call(pe, n) ? !1 : xe.test(n) ? Be[n] = !0 : (pe[n] = !0, !1);
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
  function Te(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ut[n] = new Te(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ut[r] = new Te(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ut[n] = new Te(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ut[n] = new Te(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ut[n] = new Te(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ut[n] = new Te(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ut[n] = new Te(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ut[n] = new Te(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ut[n] = new Te(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Hn = /[\-:]([a-z])/g;
  function rn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Hn,
      rn
    );
    ut[r] = new Te(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Hn, rn);
    ut[r] = new Te(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Hn, rn);
    ut[r] = new Te(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ut[n] = new Te(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ut.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ut[n] = new Te(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function at(n, r, l, o) {
    var c = ut.hasOwnProperty(r) ? ut[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (le(r, l, c, o) && (l = null), o || c === null ? J(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), je = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), fn = Symbol.for("react.context"), It = Symbol.for("react.forward_ref"), ht = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), Y = Symbol.iterator;
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
  function He(n, r) {
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
        return n = He(n.type, !1), n;
      case 11:
        return n = He(n.type.render, !1), n;
      case 1:
        return n = He(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ot:
        return "Fragment";
      case Ce:
        return "Portal";
      case Cn:
        return "Profiler";
      case je:
        return "StrictMode";
      case ht:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case fn:
        return (n.displayName || "Context") + ".Consumer";
      case Lt:
        return (n._context.displayName || "Context") + ".Provider";
      case It:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case pt:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function St(n) {
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
        return nt(r);
      case 8:
        return r === je ? "StrictMode" : "Mode";
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
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = mt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function kn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Wn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = mt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function rr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function On(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Sr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && at(n, "checked", r, !1);
  }
  function Ln(n, r) {
    Vn(n, r);
    var l = Qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Qa(n, r.type, Qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ca(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Qa(n, r, l) {
    (r !== "number" || rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Pn(n, r, l, o) {
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
  function Gn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function qn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Qe(l) };
  }
  function Er(n, r) {
    var l = Qe(r.value), o = Qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Wa(n) {
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
  function ar(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ir, ki = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ir.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function fa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Z = {
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
  Object.keys(Z).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Z[r] = Z[n];
    });
  });
  function Ze(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Z.hasOwnProperty(n) && Z[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ze(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var an = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (an[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function un(n, r) {
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
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $t = null, Nt = null, da = null;
  function xa(n) {
    if (n = us(n)) {
      if (typeof $t != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Yi(r), $t(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    Nt ? da ? da.push(n) : da = [n] : Nt = n;
  }
  function Oi() {
    if (Nt) {
      var n = Nt, r = da;
      if (da = Nt = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function Yl(n, r) {
    return n(r);
  }
  function Il() {
  }
  var Li = !1;
  function $l(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return Yl(n, r, l);
    } finally {
      Li = !1, (Nt !== null || da !== null) && (Il(), Oi());
    }
  }
  function ui(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Yi(l);
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
  var pa = !1;
  if (S) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var $r = !1, oi = null, si = !1, Mi = null, R = { onError: function(n) {
    $r = !0, oi = n;
  } };
  function I(n, r, l, o, c, d, m, E, T) {
    $r = !1, oi = null, va.apply(R, arguments);
  }
  function re(n, r, l, o, c, d, m, E, T) {
    if (I.apply(this, arguments), $r) {
      if ($r) {
        var z = oi;
        $r = !1, oi = null;
      } else throw Error(A(198));
      si || (si = !0, Mi = z);
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
  function it(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ie(n) {
    if (ie(n) !== n) throw Error(A(188));
  }
  function st(n) {
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
  function Je(n) {
    return n = st(n), n !== null ? Rn(n) : null;
  }
  function Rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = ve.unstable_scheduleCallback, on = ve.unstable_cancelCallback, Cr = ve.unstable_shouldYield, Ga = ve.unstable_requestPaint, zt = ve.unstable_now, dn = ve.unstable_getCurrentPriorityLevel, Ge = ve.unstable_ImmediatePriority, ci = ve.unstable_UserBlockingPriority, Ni = ve.unstable_NormalPriority, rc = ve.unstable_LowPriority, zi = ve.unstable_IdlePriority, il = null, Qr = null;
  function Vo(n) {
    if (Qr && typeof Qr.onCommitFiberRoot == "function") try {
      Qr.onCommitFiberRoot(il, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var kr = Math.clz32 ? Math.clz32 : ic, Po = Math.log, ac = Math.LN2;
  function ic(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Po(n) / ac | 0) | 0;
  }
  var Ui = 64, ll = 4194304;
  function Wr(n) {
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
  function fi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Wr(E) : (d &= m, d !== 0 && (o = Wr(d)));
    } else m = l & ~c, m !== 0 ? o = Wr(m) : d !== 0 && (o = Wr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - kr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ul(n, r) {
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
  function Au(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - kr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = ul(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Ai(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ql() {
    var n = Ui;
    return Ui <<= 1, !(Ui & 4194240) && (Ui = 64), n;
  }
  function Wl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function ol(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - kr(r), n[r] = l;
  }
  function Bo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - kr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Yo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - kr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Et = 0;
  function Io(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Fu, Ct, lc, di, Ve, Gl = !1, Kn = [], Gr = null, Or = null, pi = null, yn = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), qa = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Rr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Or = null;
        break;
      case "mouseover":
      case "mouseout":
        pi = null;
        break;
      case "pointerover":
      case "pointerout":
        yn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qt.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = us(r), r !== null && Ct(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Wf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Gr = Lr(Gr, n, r, l, o, c), !0;
      case "dragenter":
        return Or = Lr(Or, n, r, l, o, c), !0;
      case "mouseover":
        return pi = Lr(pi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return yn.set(d, Lr(yn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Qt.set(d, Lr(Qt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function ju(n) {
    var r = ru(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = it(l), r !== null) {
            n.blockedOn = r, Ve(n.priority, function() {
              lc(l);
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
  function ql(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Bu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xn = o, l.target.dispatchEvent(o), Xn = null;
      } else return r = us(l), r !== null && Ct(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Hu(n, r, l) {
    ql(n) && l.delete(r);
  }
  function Vu() {
    Gl = !1, Gr !== null && ql(Gr) && (Gr = null), Or !== null && ql(Or) && (Or = null), pi !== null && ql(pi) && (pi = null), yn.forEach(Hu), Qt.forEach(Hu);
  }
  function Xl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Gl || (Gl = !0, ve.unstable_scheduleCallback(ve.unstable_NormalPriority, Vu)));
  }
  function ka(n) {
    function r(c) {
      return Xl(c, n);
    }
    if (0 < Kn.length) {
      Xl(Kn[0], n);
      for (var l = 1; l < Kn.length; l++) {
        var o = Kn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Gr !== null && Xl(Gr, n), Or !== null && Xl(Or, n), pi !== null && Xl(pi, n), yn.forEach(r), Qt.forEach(r), l = 0; l < qa.length; l++) o = qa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < qa.length && (l = qa[0], l.blockedOn === null); ) ju(l), l.blockedOn === null && qa.shift();
  }
  var Oa = Ne.ReactCurrentBatchConfig, sl = !0;
  function Fi(n, r, l, o) {
    var c = Et, d = Oa.transition;
    Oa.transition = null;
    try {
      Et = 1, cl(n, r, l, o);
    } finally {
      Et = c, Oa.transition = d;
    }
  }
  function Pu(n, r, l, o) {
    var c = Et, d = Oa.transition;
    Oa.transition = null;
    try {
      Et = 4, cl(n, r, l, o);
    } finally {
      Et = c, Oa.transition = d;
    }
  }
  function cl(n, r, l, o) {
    if (sl) {
      var c = Bu(n, r, l, o);
      if (c === null) ld(n, r, o, ji, l), Rr(n, o);
      else if (Wf(c, n, r, l, o)) o.stopPropagation();
      else if (Rr(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = us(c);
          if (d !== null && Fu(d), d = Bu(n, r, l, o), d === null && ld(n, r, o, ji, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else ld(n, r, o, null, l);
    }
  }
  var ji = null;
  function Bu(n, r, l, o) {
    if (ji = null, n = tn(o), n = ru(n), n !== null) if (r = ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = it(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ji = n, null;
  }
  function $o(n) {
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
        switch (dn()) {
          case Ge:
            return 1;
          case ci:
            return 4;
          case Ni:
          case rc:
            return 16;
          case zi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Yu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Yu, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function X() {
    return !1;
  }
  function me(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : X, this.isPropagationStopped = X, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ue = me(se), et = ne({}, se, { view: 0, detail: 0 }), Ft = me(et), Wt, Gt, Xe, Zt = ne({}, et, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Xa, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xe && (Xe && n.type === "mousemove" ? (Wt = n.screenX - Xe.screenX, Gt = n.screenY - Xe.screenY) : Gt = Wt = 0, Xe = n), Wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Gt;
  } }), Tn = me(Zt), Kl = ne({}, Zt, { dataTransfer: 0 }), Qo = me(Kl), Hi = ne({}, et, { relatedTarget: 0 }), Zl = me(Hi), Wo = ne({}, se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gf = me(Wo), uc = ne({}, se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), qf = me(uc), ev = ne({}, se, { data: 0 }), oc = me(ev), tv = {
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
  }, nv = {
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
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Gm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function Xa() {
    return Gm;
  }
  var qm = ne({}, et, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Xa, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Xf = me(qm), Kf = ne({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sc = me(Kf), Xm = ne({}, et, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Xa }), cc = me(Xm), av = ne({}, se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), qr = me(av), Vi = ne({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Nn = me(Vi), Pi = [9, 13, 27, 32], Go = S && "CompositionEvent" in window, fl = null;
  S && "documentMode" in document && (fl = document.documentMode);
  var Km = S && "TextEvent" in window && !fl, Iu = S && (!Go || fl && 8 < fl && 11 >= fl), iv = " ", lv = !1;
  function fc(n, r) {
    switch (n) {
      case "keyup":
        return Pi.indexOf(r.keyCode) !== -1;
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
  function uv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $u = !1;
  function Zm(n, r) {
    switch (n) {
      case "compositionend":
        return uv(r);
      case "keypress":
        return r.which !== 32 ? null : (lv = !0, iv);
      case "textInput":
        return n = r.data, n === iv && lv ? null : n;
      default:
        return null;
    }
  }
  function ov(n, r) {
    if ($u) return n === "compositionend" || !Go && fc(n, r) ? (n = C(), h = Yu = La = null, $u = !1, n) : null;
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
        return Iu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Jm[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    ba(o), r = as(r, "onChange"), 0 < r.length && (l = new Ue("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Qu = null, vi = null;
  function Zf(n) {
    hc(n, 0);
  }
  function qo(n) {
    var r = we(n);
    if (Wn(r)) return n;
  }
  function fv(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (S) {
    var Jf;
    if (S) {
      var ed = "oninput" in document;
      if (!ed) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), ed = typeof pv.oninput == "function";
      }
      Jf = ed;
    } else Jf = !1;
    dv = Jf && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    Qu && (Qu.detachEvent("onpropertychange", hv), vi = Qu = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && qo(vi)) {
      var r = [];
      cv(r, vi, n, tn(n)), $l(Zf, r);
    }
  }
  function ey(n, r, l) {
    n === "focusin" ? (vv(), Qu = r, vi = l, Qu.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function ty(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return qo(vi);
  }
  function mv(n, r) {
    if (n === "click") return qo(r);
  }
  function ny(n, r) {
    if (n === "input" || n === "change") return qo(r);
  }
  function yv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ka = typeof Object.is == "function" ? Object.is : yv;
  function Xo(n, r) {
    if (Ka(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!dt.call(r, c) || !Ka(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sv(n, r) {
    var l = gv(n);
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
      l = gv(l);
    }
  }
  function dc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? dc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function dl() {
    for (var n = window, r = rr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = rr(n.document);
    }
    return r;
  }
  function Wu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ev(n) {
    var r = dl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && dc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Wu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Sv(l, d);
          var m = Sv(
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
  var Gu = S && "documentMode" in document && 11 >= document.documentMode, qu = null, td = null, Ko = null, nd = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nd || qu == null || qu !== rr(o) || (o = qu, "selectionStart" in o && Wu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Ko && Xo(Ko, o) || (Ko = o, o = as(td, "onSelect"), 0 < o.length && (r = new Ue("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = qu)));
  }
  function Zo(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xu = { animationend: Zo("Animation", "AnimationEnd"), animationiteration: Zo("Animation", "AnimationIteration"), animationstart: Zo("Animation", "AnimationStart"), transitionend: Zo("Transition", "TransitionEnd") }, pc = {}, Tr = {};
  S && (Tr = document.createElement("div").style, "AnimationEvent" in window || (delete Xu.animationend.animation, delete Xu.animationiteration.animation, delete Xu.animationstart.animation), "TransitionEvent" in window || delete Xu.transitionend.transition);
  function Jo(n) {
    if (pc[n]) return pc[n];
    if (!Xu[n]) return n;
    var r = Xu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Tr) return pc[n] = r[l];
    return n;
  }
  var Rv = Jo("animationend"), Tv = Jo("animationiteration"), wv = Jo("animationstart"), _v = Jo("transitionend"), xv = /* @__PURE__ */ new Map(), rd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function hi(n, r) {
    xv.set(n, r), Ot(r, [n]);
  }
  for (var Jl = 0; Jl < rd.length; Jl++) {
    var ad = rd[Jl], es = ad.toLowerCase(), ry = ad[0].toUpperCase() + ad.slice(1);
    hi(es, "on" + ry);
  }
  hi(Rv, "onAnimationEnd"), hi(Tv, "onAnimationIteration"), hi(wv, "onAnimationStart"), hi("dblclick", "onDoubleClick"), hi("focusin", "onFocus"), hi("focusout", "onBlur"), hi(_v, "onTransitionEnd"), _t("onMouseEnter", ["mouseout", "mouseover"]), _t("onMouseLeave", ["mouseout", "mouseover"]), _t("onPointerEnter", ["pointerout", "pointerover"]), _t("onPointerLeave", ["pointerout", "pointerover"]), Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(ts));
  function vc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, re(o, r, void 0, n), n.currentTarget = null;
  }
  function hc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
      }
    }
    if (si) throw n = Mi, si = !1, Mi = null, n;
  }
  function jt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (id(r, n, 2, !1), l.add(o));
  }
  function pl(n, r, l) {
    var o = 0;
    r && (o |= 4), id(l, n, o, r);
  }
  var ns = "_reactListening" + Math.random().toString(36).slice(2);
  function rs(n) {
    if (!n[ns]) {
      n[ns] = !0, wt.forEach(function(l) {
        l !== "selectionchange" && (ay.has(l) || pl(l, !1, n), pl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ns] || (r[ns] = !0, pl("selectionchange", !1, r));
    }
  }
  function id(n, r, l, o) {
    switch ($o(r)) {
      case 1:
        var c = Fi;
        break;
      case 4:
        c = Pu;
        break;
      default:
        c = cl;
    }
    l = c.bind(null, r, l, n), c = void 0, !pa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function ld(n, r, l, o, c) {
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
          if (m = ru(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    $l(function() {
      var z = d, Q = tn(l), W = [];
      e: {
        var $ = xv.get(n);
        if ($ !== void 0) {
          var ce = Ue, ge = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Xf;
              break;
            case "focusin":
              ge = "focus", ce = Zl;
              break;
            case "focusout":
              ge = "blur", ce = Zl;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Zl;
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
              ce = Tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = cc;
              break;
            case Rv:
            case Tv:
            case wv:
              ce = Gf;
              break;
            case _v:
              ce = qr;
              break;
            case "scroll":
              ce = Ft;
              break;
            case "wheel":
              ce = Nn;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = qf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = sc;
          }
          var Ee = (r & 4) !== 0, bn = !Ee && n === "scroll", D = Ee ? $ !== null ? $ + "Capture" : null : $;
          Ee = [];
          for (var _ = z, L; _ !== null; ) {
            L = _;
            var q = L.stateNode;
            if (L.tag === 5 && q !== null && (L = q, D !== null && (q = ui(_, D), q != null && Ee.push(Ku(_, q, L)))), bn) break;
            _ = _.return;
          }
          0 < Ee.length && ($ = new ce($, ge, null, l, Q), W.push({ event: $, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", $ && l !== Xn && (ge = l.relatedTarget || l.fromElement) && (ru(ge) || ge[Bi])) break e;
          if ((ce || $) && ($ = Q.window === Q ? Q : ($ = Q.ownerDocument) ? $.defaultView || $.parentWindow : window, ce ? (ge = l.relatedTarget || l.toElement, ce = z, ge = ge ? ru(ge) : null, ge !== null && (bn = ie(ge), ge !== bn || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (ce = null, ge = z), ce !== ge)) {
            if (Ee = Tn, q = "onMouseLeave", D = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = sc, q = "onPointerLeave", D = "onPointerEnter", _ = "pointer"), bn = ce == null ? $ : we(ce), L = ge == null ? $ : we(ge), $ = new Ee(q, _ + "leave", ce, l, Q), $.target = bn, $.relatedTarget = L, q = null, ru(Q) === z && (Ee = new Ee(D, _ + "enter", ge, l, Q), Ee.target = L, Ee.relatedTarget = bn, q = Ee), bn = q, ce && ge) t: {
              for (Ee = ce, D = ge, _ = 0, L = Ee; L; L = eu(L)) _++;
              for (L = 0, q = D; q; q = eu(q)) L++;
              for (; 0 < _ - L; ) Ee = eu(Ee), _--;
              for (; 0 < L - _; ) D = eu(D), L--;
              for (; _--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = eu(Ee), D = eu(D);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && mc(W, $, ce, Ee, !1), ge !== null && bn !== null && mc(W, bn, ge, Ee, !0);
          }
        }
        e: {
          if ($ = z ? we(z) : window, ce = $.nodeName && $.nodeName.toLowerCase(), ce === "select" || ce === "input" && $.type === "file") var ue = fv;
          else if (sv($)) if (dv) ue = ny;
          else {
            ue = ty;
            var De = ey;
          }
          else (ce = $.nodeName) && ce.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ue = mv);
          if (ue && (ue = ue(n, z))) {
            cv(W, ue, l, Q);
            break e;
          }
          De && De(n, $, z), n === "focusout" && (De = $._wrapperState) && De.controlled && $.type === "number" && Qa($, "number", $.value);
        }
        switch (De = z ? we(z) : window, n) {
          case "focusin":
            (sv(De) || De.contentEditable === "true") && (qu = De, td = z, Ko = null);
            break;
          case "focusout":
            Ko = td = qu = null;
            break;
          case "mousedown":
            nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nd = !1, Cv(W, l, Q);
            break;
          case "selectionchange":
            if (Gu) break;
          case "keydown":
          case "keyup":
            Cv(W, l, Q);
        }
        var Le;
        if (Go) e: {
          switch (n) {
            case "compositionstart":
              var Pe = "onCompositionStart";
              break e;
            case "compositionend":
              Pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Pe = "onCompositionUpdate";
              break e;
          }
          Pe = void 0;
        }
        else $u ? fc(n, l) && (Pe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Pe = "onCompositionStart");
        Pe && (Iu && l.locale !== "ko" && ($u || Pe !== "onCompositionStart" ? Pe === "onCompositionEnd" && $u && (Le = C()) : (La = Q, Yu = "value" in La ? La.value : La.textContent, $u = !0)), De = as(z, Pe), 0 < De.length && (Pe = new oc(Pe, n, null, l, Q), W.push({ event: Pe, listeners: De }), Le ? Pe.data = Le : (Le = uv(l), Le !== null && (Pe.data = Le)))), (Le = Km ? Zm(n, l) : ov(n, l)) && (z = as(z, "onBeforeInput"), 0 < z.length && (Q = new oc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: z }), Q.data = Le));
      }
      hc(W, r);
    });
  }
  function Ku(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function as(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ui(n, l), d != null && o.unshift(Ku(n, d, c)), d = ui(n, r), d != null && o.push(Ku(n, d, c))), n = n.return;
    }
    return o;
  }
  function eu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function mc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = ui(l, d), T != null && m.unshift(Ku(l, T, E))) : c || (T = ui(l, d), T != null && m.push(Ku(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var iy = /\r\n?/g, bv = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(iy, `
`).replace(bv, "");
  }
  function yc(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(A(425));
  }
  function gc() {
  }
  var tu = null, is = null;
  function nu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sc = typeof setTimeout == "function" ? setTimeout : void 0, kv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ec = typeof Promise == "function" ? Promise : void 0, ly = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ec < "u" ? function(n) {
    return Ec.resolve(null).then(n).catch(Zu);
  } : Sc;
  function Zu(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ju(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ka(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ka(r);
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
  function Cc(n) {
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
  var eo = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + eo, ls = "__reactProps$" + eo, Bi = "__reactContainer$" + eo, ud = "__reactEvents$" + eo, od = "__reactListeners$" + eo, to = "__reactHandles$" + eo;
  function ru(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Bi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Cc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function us(n) {
    return n = n[Ma] || n[Bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function we(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Yi(n) {
    return n[ls] || null;
  }
  var gn = [], ct = -1;
  function Xr(n) {
    return { current: n };
  }
  function Pt(n) {
    0 > ct || (n.current = gn[ct], gn[ct] = null, ct--);
  }
  function Jt(n, r) {
    ct++, gn[ct] = n.current, n.current = r;
  }
  var rt = {}, pn = Xr(rt), zn = Xr(!1), Na = rt;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return rt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Sn(n) {
    return n = n.childContextTypes, n != null;
  }
  function mi() {
    Pt(zn), Pt(pn);
  }
  function Rc(n, r, l) {
    if (pn.current !== rt) throw Error(A(168));
    Jt(pn, r), Jt(zn, l);
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, St(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function au(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || rt, Na = pn.current, Jt(pn, n), Jt(zn, zn.current), !0;
  }
  function wr(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = Ov(n, r, Na), o.__reactInternalMemoizedMergedChildContext = n, Pt(zn), Pt(pn), Jt(pn, n)) : Pt(zn), Jt(zn, l);
  }
  var Ja = null, os = !1, ss = !1;
  function vl(n) {
    Ja === null ? Ja = [n] : Ja.push(n);
  }
  function sd(n) {
    os = !0, vl(n);
  }
  function Mr() {
    if (!ss && Ja !== null) {
      ss = !0;
      var n = 0, r = Et;
      try {
        var l = Ja;
        for (Et = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Ja = null, os = !1;
      } catch (c) {
        throw Ja !== null && (Ja = Ja.slice(n + 1)), nn(Ge, Mr), c;
      } finally {
        Et = r, ss = !1;
      }
    }
    return null;
  }
  var hl = [], ml = 0, no = null, yl = 0, lr = [], Un = 0, iu = null, Nr = 1, yi = "";
  function gl(n, r) {
    hl[ml++] = yl, hl[ml++] = no, no = n, yl = r;
  }
  function Lv(n, r, l) {
    lr[Un++] = Nr, lr[Un++] = yi, lr[Un++] = iu, iu = n;
    var o = Nr;
    n = yi;
    var c = 32 - kr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - kr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Nr = 1 << 32 - kr(r) + c | l << c | o, yi = d + n;
    } else Nr = 1 << d | l << c | o, yi = n;
  }
  function cd(n) {
    n.return !== null && (gl(n, 1), Lv(n, 1, 0));
  }
  function Tc(n) {
    for (; n === no; ) no = hl[--ml], hl[ml] = null, yl = hl[--ml], hl[ml] = null;
    for (; n === iu; ) iu = lr[--Un], lr[Un] = null, yi = lr[--Un], lr[Un] = null, Nr = lr[--Un], lr[Un] = null;
  }
  var Kr = null, Zr = null, sn = !1, ei = null;
  function fd(n, r) {
    var l = ja(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function dd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Kr = n, Zr = Za(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Kr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = iu !== null ? { id: Nr, overflow: yi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ja(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Kr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vd(n) {
    if (sn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!dd(n, r)) {
          if (pd(n)) throw Error(A(418));
          r = Za(l.nextSibling);
          var o = Kr;
          r && dd(n, r) ? fd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Kr = n);
        }
      } else {
        if (pd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Kr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Kr = n;
  }
  function wn(n) {
    if (n !== Kr) return !1;
    if (!sn) return Mv(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !nu(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (pd(n)) throw Nv(), Error(A(418));
      for (; r; ) fd(n, r), r = Za(r.nextSibling);
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
    } else Zr = Kr ? Za(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nv() {
    for (var n = Zr; n; ) n = Za(n.nextSibling);
  }
  function Ii() {
    Zr = Kr = null, sn = !1;
  }
  function cs(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  var lu = Ne.ReactCurrentBatchConfig;
  function fs(n, r, l) {
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
  function ro(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
    function r(D, _) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [_], D.flags |= 16) : L.push(_);
      }
    }
    function l(D, _) {
      if (!n) return null;
      for (; _ !== null; ) r(D, _), _ = _.sibling;
      return null;
    }
    function o(D, _) {
      for (D = /* @__PURE__ */ new Map(); _ !== null; ) _.key !== null ? D.set(_.key, _) : D.set(_.index, _), _ = _.sibling;
      return D;
    }
    function c(D, _) {
      return D = kl(D, _), D.index = 0, D.sibling = null, D;
    }
    function d(D, _, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < _ ? (D.flags |= 2, _) : L) : (D.flags |= 2, _)) : (D.flags |= 1048576, _);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, _, L, q) {
      return _ === null || _.tag !== 6 ? (_ = Tu(L, D.mode, q), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function T(D, _, L, q) {
      var ue = L.type;
      return ue === ot ? Q(D, _, L.props.children, q, L.key) : _ !== null && (_.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === pt && zv(ue) === _.type) ? (q = c(_, L.props), q.ref = fs(D, _, L), q.return = D, q) : (q = sf(L.type, L.key, L.props, null, D.mode, q), q.ref = fs(D, _, L), q.return = D, q);
    }
    function z(D, _, L, q) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = $d(L, D.mode, q), _.return = D, _) : (_ = c(_, L.children || []), _.return = D, _);
    }
    function Q(D, _, L, q, ue) {
      return _ === null || _.tag !== 7 ? (_ = Ol(L, D.mode, q, ue), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function W(D, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number") return _ = Tu("" + _, D.mode, L), _.return = D, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case xt:
            return L = sf(_.type, _.key, _.props, null, D.mode, L), L.ref = fs(D, null, _), L.return = D, L;
          case Ce:
            return _ = $d(_, D.mode, L), _.return = D, _;
          case pt:
            var q = _._init;
            return W(D, q(_._payload), L);
        }
        if (Dr(_) || ye(_)) return _ = Ol(_, D.mode, L, null), _.return = D, _;
        ro(D, _);
      }
      return null;
    }
    function $(D, _, L, q) {
      var ue = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ue !== null ? null : E(D, _, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case xt:
            return L.key === ue ? T(D, _, L, q) : null;
          case Ce:
            return L.key === ue ? z(D, _, L, q) : null;
          case pt:
            return ue = L._init, $(
              D,
              _,
              ue(L._payload),
              q
            );
        }
        if (Dr(L) || ye(L)) return ue !== null ? null : Q(D, _, L, q, null);
        ro(D, L);
      }
      return null;
    }
    function ce(D, _, L, q, ue) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return D = D.get(L) || null, E(_, D, "" + q, ue);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case xt:
            return D = D.get(q.key === null ? L : q.key) || null, T(_, D, q, ue);
          case Ce:
            return D = D.get(q.key === null ? L : q.key) || null, z(_, D, q, ue);
          case pt:
            var De = q._init;
            return ce(D, _, L, De(q._payload), ue);
        }
        if (Dr(q) || ye(q)) return D = D.get(L) || null, Q(_, D, q, ue, null);
        ro(_, q);
      }
      return null;
    }
    function ge(D, _, L, q) {
      for (var ue = null, De = null, Le = _, Pe = _ = 0, $n = null; Le !== null && Pe < L.length; Pe++) {
        Le.index > Pe ? ($n = Le, Le = null) : $n = Le.sibling;
        var bt = $(D, Le, L[Pe], q);
        if (bt === null) {
          Le === null && (Le = $n);
          break;
        }
        n && Le && bt.alternate === null && r(D, Le), _ = d(bt, _, Pe), De === null ? ue = bt : De.sibling = bt, De = bt, Le = $n;
      }
      if (Pe === L.length) return l(D, Le), sn && gl(D, Pe), ue;
      if (Le === null) {
        for (; Pe < L.length; Pe++) Le = W(D, L[Pe], q), Le !== null && (_ = d(Le, _, Pe), De === null ? ue = Le : De.sibling = Le, De = Le);
        return sn && gl(D, Pe), ue;
      }
      for (Le = o(D, Le); Pe < L.length; Pe++) $n = ce(Le, D, Pe, L[Pe], q), $n !== null && (n && $n.alternate !== null && Le.delete($n.key === null ? Pe : $n.key), _ = d($n, _, Pe), De === null ? ue = $n : De.sibling = $n, De = $n);
      return n && Le.forEach(function(Ml) {
        return r(D, Ml);
      }), sn && gl(D, Pe), ue;
    }
    function Ee(D, _, L, q) {
      var ue = ye(L);
      if (typeof ue != "function") throw Error(A(150));
      if (L = ue.call(L), L == null) throw Error(A(151));
      for (var De = ue = null, Le = _, Pe = _ = 0, $n = null, bt = L.next(); Le !== null && !bt.done; Pe++, bt = L.next()) {
        Le.index > Pe ? ($n = Le, Le = null) : $n = Le.sibling;
        var Ml = $(D, Le, bt.value, q);
        if (Ml === null) {
          Le === null && (Le = $n);
          break;
        }
        n && Le && Ml.alternate === null && r(D, Le), _ = d(Ml, _, Pe), De === null ? ue = Ml : De.sibling = Ml, De = Ml, Le = $n;
      }
      if (bt.done) return l(
        D,
        Le
      ), sn && gl(D, Pe), ue;
      if (Le === null) {
        for (; !bt.done; Pe++, bt = L.next()) bt = W(D, bt.value, q), bt !== null && (_ = d(bt, _, Pe), De === null ? ue = bt : De.sibling = bt, De = bt);
        return sn && gl(D, Pe), ue;
      }
      for (Le = o(D, Le); !bt.done; Pe++, bt = L.next()) bt = ce(Le, D, Pe, bt.value, q), bt !== null && (n && bt.alternate !== null && Le.delete(bt.key === null ? Pe : bt.key), _ = d(bt, _, Pe), De === null ? ue = bt : De.sibling = bt, De = bt);
      return n && Le.forEach(function(Ey) {
        return r(D, Ey);
      }), sn && gl(D, Pe), ue;
    }
    function bn(D, _, L, q) {
      if (typeof L == "object" && L !== null && L.type === ot && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case xt:
            e: {
              for (var ue = L.key, De = _; De !== null; ) {
                if (De.key === ue) {
                  if (ue = L.type, ue === ot) {
                    if (De.tag === 7) {
                      l(D, De.sibling), _ = c(De, L.props.children), _.return = D, D = _;
                      break e;
                    }
                  } else if (De.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === pt && zv(ue) === De.type) {
                    l(D, De.sibling), _ = c(De, L.props), _.ref = fs(D, De, L), _.return = D, D = _;
                    break e;
                  }
                  l(D, De);
                  break;
                } else r(D, De);
                De = De.sibling;
              }
              L.type === ot ? (_ = Ol(L.props.children, D.mode, q, L.key), _.return = D, D = _) : (q = sf(L.type, L.key, L.props, null, D.mode, q), q.ref = fs(D, _, L), q.return = D, D = q);
            }
            return m(D);
          case Ce:
            e: {
              for (De = L.key; _ !== null; ) {
                if (_.key === De) if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                  l(D, _.sibling), _ = c(_, L.children || []), _.return = D, D = _;
                  break e;
                } else {
                  l(D, _);
                  break;
                }
                else r(D, _);
                _ = _.sibling;
              }
              _ = $d(L, D.mode, q), _.return = D, D = _;
            }
            return m(D);
          case pt:
            return De = L._init, bn(D, _, De(L._payload), q);
        }
        if (Dr(L)) return ge(D, _, L, q);
        if (ye(L)) return Ee(D, _, L, q);
        ro(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (l(D, _.sibling), _ = c(_, L), _.return = D, D = _) : (l(D, _), _ = Tu(L, D.mode, q), _.return = D, D = _), m(D)) : l(D, _);
    }
    return bn;
  }
  var ti = Uv(!0), ur = Uv(!1), te = Xr(null), ma = null, _r = null, hd = null;
  function md() {
    hd = _r = ma = null;
  }
  function yd(n) {
    var r = te.current;
    Pt(te), n._currentValue = r;
  }
  function gd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function ao(n, r) {
    ma = n, hd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (er = !0), n.firstContext = null);
  }
  function Bt(n) {
    var r = n._currentValue;
    if (hd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ma === null) throw Error(A(308));
      _r = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var uu = null;
  function Sd(n) {
    uu === null ? uu = [n] : uu.push(n);
  }
  function Av(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Sd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, gi(n, o);
  }
  function gi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var za = !1;
  function Sl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function $i(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function El(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ft & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, gi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Sd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, gi(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  function jv(n, r) {
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
  function _c(n, r, l, o) {
    var c = n.updateQueue;
    za = !1;
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
        var $ = E.lane, ce = E.eventTime;
        if ((o & $) === $) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, Ee = E;
            switch ($ = r, ce = l, Ee.tag) {
              case 1:
                if (ge = Ee.payload, typeof ge == "function") {
                  W = ge.call(ce, W, $);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = Ee.payload, $ = typeof ge == "function" ? ge.call(ce, W, $) : ge, $ == null) break e;
                W = ne({}, W, $);
                break e;
              case 2:
                za = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else ce = { eventTime: ce, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = ce, T = W) : Q = Q.next = ce, m |= $;
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
      yu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Ed(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var io = {}, Si = Xr(io), ds = Xr(io), ps = Xr(io);
  function ou(n) {
    if (n === io) throw Error(A(174));
    return n;
  }
  function Cd(n, r) {
    switch (Jt(ps, r), Jt(ds, n), Jt(Si, io), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    Pt(Si), Jt(Si, r);
  }
  function lo() {
    Pt(Si), Pt(ds), Pt(ps);
  }
  function Rd(n) {
    ou(ps.current);
    var r = ou(Si.current), l = ar(r, n.type);
    r !== l && (Jt(ds, n), Jt(Si, l));
  }
  function Td(n) {
    ds.current === n && (Pt(Si), Pt(ds));
  }
  var vn = Xr(0);
  function xc(n) {
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
  var wd = [];
  function vs() {
    for (var n = 0; n < wd.length; n++) wd[n]._workInProgressVersionPrimary = null;
    wd.length = 0;
  }
  var _e = Ne.ReactCurrentDispatcher, lt = Ne.ReactCurrentBatchConfig, yt = 0, qe = null, qt = null, Bn = null, bc = !1, hs = !1, ms = 0, _d = 0;
  function V() {
    throw Error(A(321));
  }
  function An(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ka(n[l], r[l])) return !1;
    return !0;
  }
  function ze(n, r, l, o, c, d) {
    if (yt = d, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, _e.current = n === null || n.memoizedState === null ? Bc : Yc, n = l(o, c), hs) {
      d = 0;
      do {
        if (hs = !1, ms = 0, 25 <= d) throw Error(A(301));
        d += 1, Bn = qt = null, r.updateQueue = null, _e.current = Cs, n = l(o, c);
      } while (hs);
    }
    if (_e.current = Yt, r = qt !== null && qt.next !== null, yt = 0, Bn = qt = qe = null, bc = !1, r) throw Error(A(300));
    return n;
  }
  function Cl() {
    var n = ms !== 0;
    return ms = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function Jn() {
    if (qt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qt.next;
    var r = Bn === null ? qe.memoizedState : Bn.next;
    if (r !== null) Bn = r, qt = n;
    else {
      if (n === null) throw Error(A(310));
      qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function Jr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function su(n) {
    var r = Jn(), l = r.queue;
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
        if ((yt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, qe.lanes |= Q, yu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Ka(o, r.memoizedState) || (er = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qe.lanes |= d, yu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Rl(n) {
    var r = Jn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ka(d, r.memoizedState) || (er = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function uo() {
  }
  function Dc(n, r) {
    var l = qe, o = Jn(), c = r(), d = !Ka(o.memoizedState, c);
    if (d && (o.memoizedState = c, er = !0), o = o.queue, ys(Lc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, cu(9, Oc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      yt & 30 || kc(l, r, c);
    }
    return c;
  }
  function kc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Oc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && Nc(n);
  }
  function Lc(n, r, l) {
    return l(function() {
      Mc(r) && Nc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ka(n, l);
    } catch {
      return !0;
    }
  }
  function Nc(n) {
    var r = gi(n, 1);
    r !== null && Ea(r, n, 1, -1);
  }
  function zc(n) {
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Es.bind(null, qe, n), [r.memoizedState, n];
  }
  function cu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return Jn().memoizedState;
  }
  function oo(n, r, l, o) {
    var c = Zn();
    qe.flags |= n, c.memoizedState = cu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function so(n, r, l, o) {
    var c = Jn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qt !== null) {
      var m = qt.memoizedState;
      if (d = m.destroy, o !== null && An(o, m.deps)) {
        c.memoizedState = cu(r, l, d, o);
        return;
      }
    }
    qe.flags |= n, c.memoizedState = cu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return oo(8390656, 8, n, r);
  }
  function ys(n, r) {
    return so(2048, 8, n, r);
  }
  function Fc(n, r) {
    return so(4, 2, n, r);
  }
  function jc(n, r) {
    return so(4, 4, n, r);
  }
  function gs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function fu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, so(4, 4, gs.bind(null, r, n), l);
  }
  function Ss() {
  }
  function Hc(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = Jn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Pc(n, r, l) {
    return yt & 21 ? (Ka(l, r) || (l = Ql(), qe.lanes |= l, yu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, er = !0), n.memoizedState = l);
  }
  function Hv(n, r) {
    var l = Et;
    Et = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = lt.transition;
    lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Et = l, lt.transition = o;
    }
  }
  function co() {
    return Jn().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Sa(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Tl(n)) ea(r, l);
    else if (l = Av(n, r, l, o), l !== null) {
      var c = en();
      Ea(l, n, o, c), Pv(l, r, o);
    }
  }
  function Es(n, r, l) {
    var o = Sa(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Tl(n)) ea(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ka(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Sd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Av(n, r, c, o), l !== null && (c = en(), Ea(l, n, o, c), Pv(l, r, o));
    }
  }
  function Tl(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function ea(n, r) {
    hs = bc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  var Yt = { readContext: Bt, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useInsertionEffect: V, useLayoutEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useMutableSource: V, useSyncExternalStore: V, useId: V, unstable_isNewReconciler: !1 }, Bc = { readContext: Bt, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Bt, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, oo(
      4194308,
      4,
      gs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return oo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return oo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Zn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vv.bind(null, qe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: zc, useDebugValue: Ss, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = zc(!1), r = n[0];
    return n = Hv.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qe, c = Zn();
    if (sn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      yt & 30 || kc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Lc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, cu(9, Oc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zn(), r = Fn.identifierPrefix;
    if (sn) {
      var l = yi, o = Nr;
      l = (o & ~(1 << 32 - kr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ms++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: Bt,
    useCallback: Hc,
    useContext: Bt,
    useEffect: ys,
    useImperativeHandle: fu,
    useInsertionEffect: Fc,
    useLayoutEffect: jc,
    useMemo: Vc,
    useReducer: su,
    useRef: Uc,
    useState: function() {
      return su(Jr);
    },
    useDebugValue: Ss,
    useDeferredValue: function(n) {
      var r = Jn();
      return Pc(r, qt.memoizedState, n);
    },
    useTransition: function() {
      var n = su(Jr)[0], r = Jn().memoizedState;
      return [n, r];
    },
    useMutableSource: uo,
    useSyncExternalStore: Dc,
    useId: co,
    unstable_isNewReconciler: !1
  }, Cs = { readContext: Bt, useCallback: Hc, useContext: Bt, useEffect: ys, useImperativeHandle: fu, useInsertionEffect: Fc, useLayoutEffect: jc, useMemo: Vc, useReducer: Rl, useRef: Uc, useState: function() {
    return Rl(Jr);
  }, useDebugValue: Ss, useDeferredValue: function(n) {
    var r = Jn();
    return qt === null ? r.memoizedState = n : Pc(r, qt.memoizedState, n);
  }, useTransition: function() {
    var n = Rl(Jr)[0], r = Jn().memoizedState;
    return [n, r];
  }, useMutableSource: uo, useSyncExternalStore: Dc, useId: co, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function xd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Sa(n), d = $i(o, c);
    d.payload = r, l != null && (d.callback = l), r = El(n, d, c), r !== null && (Ea(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = Sa(n), d = $i(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = El(n, d, c), r !== null && (Ea(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = en(), o = Sa(n), c = $i(l, o);
    c.tag = 2, r != null && (c.callback = r), r = El(n, c, o), r !== null && (Ea(r, n, o, l), wc(r, n, o));
  } };
  function Bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Xo(l, o) || !Xo(c, d) : !0;
  }
  function Yv(n, r, l) {
    var o = !1, c = rt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Bt(d) : (c = Sn(r) ? Na : pn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : rt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function $c(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function bd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Sl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Bt(d) : (d = Sn(r) ? Na : pn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (xd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function wl(n, r) {
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
  function Qc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Dd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var uy = typeof WeakMap == "function" ? WeakMap : Map;
  function Rs(n, r, l) {
    l = $i(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      xl || (xl = !0, Os = o), Dd(n, r);
    }, l;
  }
  function Iv(n, r, l) {
    l = $i(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Dd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Dd(n, r), typeof o != "function" && (Fa === null ? Fa = /* @__PURE__ */ new Set([this]) : Fa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function kd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new uy();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Bd.bind(null, n, r, l), r.then(n, n));
  }
  function Od(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $v(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = $i(-1, 1), r.tag = 2, El(l, r, 1))), l.lanes |= 1), n);
  }
  var du = Ne.ReactCurrentOwner, er = !1;
  function _n(n, r, l, o) {
    r.child = n === null ? ur(r, null, l, o) : ti(r, n.child, l, o);
  }
  function Wc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ao(r, c), o = ze(n, r, l, o, d, c), l = Cl(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && l && cd(r), r.flags |= 1, _n(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, pu(n, r, d, o, c)) : (n = sf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Xo, l(m, o) && n.ref === r.ref) return or(n, r, c);
    }
    return r.flags |= 1, n = kl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function pu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Xo(d, o) && n.ref === r.ref) if (er = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (er = !0);
      else return r.lanes = n.lanes, or(n, r, c);
    }
    return Gc(n, r, l, o, c);
  }
  function Ke(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(ho, ga), ga |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(ho, ga), ga |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Jt(ho, ga), ga |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Jt(ho, ga), ga |= o;
    return _n(n, r, c, l), r.child;
  }
  function Ts(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gc(n, r, l, o, c) {
    var d = Sn(l) ? Na : pn.current;
    return d = ha(r, d), ao(r, c), l = ze(n, r, l, o, d, c), o = Cl(), n !== null && !er ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && o && cd(r), r.flags |= 1, _n(n, r, l, c), r.child);
  }
  function oy(n, r, l, o, c) {
    if (Sn(l)) {
      var d = !0;
      au(r);
    } else d = !1;
    if (ao(r, c), r.stateNode === null) Ua(n, r), Yv(r, l, o), bd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Bt(z) : (z = Sn(l) ? Na : pn.current, z = ha(r, z));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && $c(r, m, o, z), za = !1;
      var $ = r.memoizedState;
      m.state = $, _c(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || zn.current || za ? (typeof Q == "function" && (xd(r, l, Q, o), T = r.memoizedState), (E = za || Bv(r, l, E, o, $, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : ta(r.type, E), m.props = z, W = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Bt(T) : (T = Sn(l) ? Na : pn.current, T = ha(r, T));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || $ !== T) && $c(r, m, o, T), za = !1, $ = r.memoizedState, m.state = $, _c(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || $ !== ge || zn.current || za ? (typeof ce == "function" && (xd(r, l, ce, o), ge = r.memoizedState), (z = za || Bv(r, l, z, o, $, ge, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ld(n, r, l, o, d, c);
  }
  function Ld(n, r, l, o, c, d) {
    Ts(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && wr(r, l, !1), or(n, r, d);
    o = r.stateNode, du.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ti(r, n.child, null, d), r.child = ti(r, null, E, d)) : _n(n, r, E, d), r.memoizedState = o.state, c && wr(r, l, !0), r.child;
  }
  function qc(n) {
    var r = n.stateNode;
    r.pendingContext ? Rc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rc(n, r.context, !1), Cd(n, r.containerInfo);
  }
  function fo(n, r, l, o, c) {
    return Ii(), cs(c), r.flags |= 256, _n(n, r, l, o), r.child;
  }
  var Md = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = vn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(vn, c & 1), n === null)
      return vd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Co(m, o, 0, null), n = Ol(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = Md, n) : ws(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = kl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = kl(E, d) : (d = Ol(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Md, o;
    }
    return d = n.child, n = d.sibling, o = kl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ws(n, r) {
    return r = Co({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Kc(n, r, l, o) {
    return o !== null && cs(o), ti(r, n.child, null, l), n = ws(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Qc(Error(A(422))), Kc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Co({ mode: "visible", children: o.children }, c, 0, null), d = Ol(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ti(r, n.child, null, m), r.child.memoizedState = Xc(m), r.memoizedState = Md, d);
    if (!(r.mode & 1)) return Kc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Qc(d, o, void 0), Kc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, er || E) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, gi(n, c), Ea(o, n, c, -1));
      }
      return Vd(), o = Qc(Error(A(421))), Kc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = vy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = Za(c.nextSibling), Kr = r, sn = !0, ei = null, n !== null && (lr[Un++] = Nr, lr[Un++] = yi, lr[Un++] = iu, Nr = n.id, yi = n.overflow, iu = r), r = ws(r, o.children), r.flags |= 4096, r);
  }
  function Nd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), gd(n.return, r, l);
  }
  function Zc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (_n(n, r, o.children, l), o = vn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Nd(n, l, r);
        else if (n.tag === 19) Nd(n, l, r);
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
    if (Jt(vn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && xc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Zc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && xc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Zc(r, !0, l, null, d);
        break;
      case "together":
        Zc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ua(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), yu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = kl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = kl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Jc(n, r, l) {
    switch (r.tag) {
      case 3:
        qc(r), Ii();
        break;
      case 5:
        Rd(r);
        break;
      case 1:
        Sn(r.type) && au(r);
        break;
      case 4:
        Cd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Jt(te, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Jt(vn, vn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qv(n, r, l) : (Jt(vn, vn.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Jt(vn, vn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(vn, vn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ke(n, r, l);
    }
    return or(n, r, l);
  }
  var po, ya, Yn, Gv;
  po = function(n, r) {
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
  }, ya = function() {
  }, Yn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ou(Si.current);
      var d = null;
      switch (l) {
        case "input":
          c = On(n, c), o = On(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Gn(n, c), o = Gn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = gc);
      }
      ln(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Ut.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Ut.hasOwnProperty(z) ? (T != null && z === "onScroll" && jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Gv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!sn) switch (n.tailMode) {
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
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function zd(n, r, l) {
    var o = r.pendingProps;
    switch (Tc(r), r.tag) {
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
        return xr(r), null;
      case 1:
        return Sn(r.type) && mi(), xr(r), null;
      case 3:
        return o = r.stateNode, lo(), Pt(zn), Pt(pn), vs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (wn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ei !== null && (zs(ei), ei = null))), ya(n, r), xr(r), null;
      case 5:
        Td(r);
        var c = ou(ps.current);
        if (l = r.type, n !== null && r.stateNode != null) Yn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return xr(r), null;
          }
          if (n = ou(Si.current), wn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[ls] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                jt("cancel", o), jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ts.length; c++) jt(ts[c], o);
                break;
              case "source":
                jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                jt(
                  "error",
                  o
                ), jt("load", o);
                break;
              case "details":
                jt("toggle", o);
                break;
              case "input":
                Sr(o, d), jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, jt("invalid", o);
                break;
              case "textarea":
                qn(o, d), jt("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && yc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && yc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ut.hasOwnProperty(m) && E != null && m === "onScroll" && jt("scroll", o);
            }
            switch (l) {
              case "input":
                kn(o), ca(o, d, !0);
                break;
              case "textarea":
                kn(o), Wa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = gc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ls] = o, po(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = un(l, o), l) {
                case "dialog":
                  jt("cancel", n), jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ts.length; c++) jt(ts[c], n);
                  c = o;
                  break;
                case "source":
                  jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  jt(
                    "error",
                    n
                  ), jt("load", n), c = o;
                  break;
                case "details":
                  jt("toggle", n), c = o;
                  break;
                case "input":
                  Sr(n, o), c = On(n, o), jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), jt("invalid", n);
                  break;
                case "textarea":
                  qn(n, o), c = Gn(n, o), jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Mt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ki(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ut.hasOwnProperty(d) ? T != null && d === "onScroll" && jt("scroll", n) : T != null && at(n, d, T, m));
              }
              switch (l) {
                case "input":
                  kn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  kn(n), Wa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = gc);
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
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null) Gv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = ou(ps.current), ou(Si.current), wn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Kr, n !== null)) switch (n.tag) {
              case 3:
                yc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && yc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Pt(vn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Nv(), Ii(), r.flags |= 98560, d = !1;
          else if (d = wn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ma] = r;
            } else Ii(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ei !== null && (zs(ei), ei = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || vn.current & 1 ? In === 0 && (In = 3) : Vd())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return lo(), ya(n, r), n === null && rs(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return yd(r.type._context), xr(r), null;
      case 17:
        return Sn(r.type) && mi(), xr(r), null;
      case 19:
        if (Pt(vn), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) _s(d, !1);
        else {
          if (In !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = xc(n), m !== null) {
              for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Jt(vn, vn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && zt() > yo && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = xc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return xr(r), null;
          } else 2 * zt() - d.renderingStartTime > yo && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = zt(), r.sibling = null, l = vn.current, Jt(vn, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Hd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ga & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function qv(n, r) {
    switch (Tc(r), r.tag) {
      case 1:
        return Sn(r.type) && mi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return lo(), Pt(zn), Pt(pn), vs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Td(r), null;
      case 13:
        if (Pt(vn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ii();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Pt(vn), null;
      case 4:
        return lo(), null;
      case 10:
        return yd(r.type._context), null;
      case 22:
      case 23:
        return Hd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var vu = !1, sr = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function _l(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      En(n, r, o);
    }
    else l.current = null;
  }
  function Ud(n, r, l) {
    try {
      l();
    } catch (o) {
      En(n, r, o);
    }
  }
  var Ad = !1;
  function cy(n, r) {
    if (tu = sl, n = dl(), Wu(n)) {
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
            for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
              $ = W, W = ce;
            for (; ; ) {
              if (W === n) break t;
              if ($ === l && ++z === c && (E = m), $ === d && ++Q === o && (T = m), (ce = W.nextSibling) !== null) break;
              W = $, $ = W.parentNode;
            }
            W = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (is = { focusedElem: n, selectionRange: l }, sl = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
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
              var Ee = ge.memoizedProps, bn = ge.memoizedState, D = r.stateNode, _ = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : ta(r.type, Ee), bn);
              D.__reactInternalSnapshotBeforeUpdate = _;
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
      } catch (q) {
        En(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ge = Ad, Ad = !1, ge;
  }
  function vo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ud(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ef(n, r) {
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
  function tf(n) {
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
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[ls], delete r[ud], delete r[od], delete r[to])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function nf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function xs(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || nf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ei(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = gc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ei(n, r, l), n = n.sibling; n !== null; ) Ei(n, r, l), n = n.sibling;
  }
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  var hn = null, zr = !1;
  function Aa(n, r, l) {
    for (l = l.child; l !== null; ) Qi(n, r, l), l = l.sibling;
  }
  function Qi(n, r, l) {
    if (Qr && typeof Qr.onCommitFiberUnmount == "function") try {
      Qr.onCommitFiberUnmount(il, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || _l(l, r);
      case 6:
        var o = hn, c = zr;
        hn = null, Aa(n, r, l), hn = o, zr = c, hn !== null && (zr ? (n = hn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : hn.removeChild(l.stateNode));
        break;
      case 18:
        hn !== null && (zr ? (n = hn, l = l.stateNode, n.nodeType === 8 ? Ju(n.parentNode, l) : n.nodeType === 1 && Ju(n, l), ka(n)) : Ju(hn, l.stateNode));
        break;
      case 4:
        o = hn, c = zr, hn = l.stateNode.containerInfo, zr = !0, Aa(n, r, l), hn = o, zr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ud(l, r, m), c = c.next;
          } while (c !== o);
        }
        Aa(n, r, l);
        break;
      case 1:
        if (!sr && (_l(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          En(l, r, E);
        }
        Aa(n, r, l);
        break;
      case 21:
        Aa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, Aa(n, r, l), sr = o) : Aa(n, r, l);
        break;
      default:
        Aa(n, r, l);
    }
  }
  function Kv(n) {
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
  function ni(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              hn = E.stateNode, zr = !1;
              break e;
            case 3:
              hn = E.stateNode.containerInfo, zr = !0;
              break e;
            case 4:
              hn = E.stateNode.containerInfo, zr = !0;
              break e;
          }
          E = E.return;
        }
        if (hn === null) throw Error(A(160));
        Qi(d, m, c), hn = null, zr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        En(c, r, z);
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
        if (ni(r, n), ri(n), o & 4) {
          try {
            vo(3, n, n.return), ef(3, n);
          } catch (Ee) {
            En(n, n.return, Ee);
          }
          try {
            vo(5, n, n.return);
          } catch (Ee) {
            En(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ni(r, n), ri(n), o & 512 && l !== null && _l(l, l.return);
        break;
      case 5:
        if (ni(r, n), ri(n), o & 512 && l !== null && _l(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (Ee) {
            En(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), un(E, m);
            var z = un(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? Mt(c, W) : Q === "dangerouslySetInnerHTML" ? ki(c, W) : Q === "children" ? fa(c, W) : at(c, Q, W, z);
            }
            switch (E) {
              case "input":
                Ln(c, d);
                break;
              case "textarea":
                Er(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Pn(c, !!d.multiple, ce, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ls] = d;
          } catch (Ee) {
            En(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ni(r, n), ri(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            En(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ni(r, n), ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ka(r.containerInfo);
        } catch (Ee) {
          En(n, n.return, Ee);
        }
        break;
      case 4:
        ni(r, n), ri(n);
        break;
      case 13:
        ni(r, n), ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (jd = zt())), o & 4 && Kv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (z = sr) || Q, ni(r, n), sr = z) : ni(r, n), ri(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (he = n, Q = n.child; Q !== null; ) {
            for (W = he = Q; he !== null; ) {
              switch ($ = he, ce = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, $, $.return);
                  break;
                case 1:
                  _l($, $.return);
                  var ge = $.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (Ee) {
                      En(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  _l($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    eh(W);
                    continue;
                  }
              }
              ce !== null ? (ce.return = $, he = ce) : eh(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ze("display", m));
                } catch (Ee) {
                  En(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ee) {
                En(n, n.return, Ee);
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
        ni(r, n), ri(n), o & 4 && Kv(n);
        break;
      case 21:
        break;
      default:
        ni(
          r,
          n
        ), ri(n);
    }
  }
  function ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (nf(l)) {
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
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = xs(n);
            Ci(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = xs(n);
            Ei(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        En(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function bs(n, r, l) {
    he = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || vu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || sr;
          E = vu;
          var z = sr;
          if (vu = m, (sr = T) && !z) for (he = c; he !== null; ) m = he, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ds(c) : T !== null ? (T.return = m, he = T) : Ds(c);
          for (; d !== null; ) he = d, Jv(d), d = d.sibling;
          he = c, vu = E, sr = z;
        }
        Fd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : Fd(n);
    }
  }
  function Fd(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || ef(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Ed(r, d, o);
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
                Ed(r, m, l);
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
                    W !== null && ka(W);
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
          sr || r.flags & 512 && tf(r);
        } catch ($) {
          En(r, r.return, $);
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
  function eh(n) {
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
  function Ds(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ef(4, r);
            } catch (T) {
              En(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                En(r, c, T);
              }
            }
            var d = r.return;
            try {
              tf(r);
            } catch (T) {
              En(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              tf(r);
            } catch (T) {
              En(r, m, T);
            }
        }
      } catch (T) {
        En(r, r.return, T);
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
  var th = Math.ceil, rf = Ne.ReactCurrentDispatcher, hu = Ne.ReactCurrentOwner, br = Ne.ReactCurrentBatchConfig, ft = 0, Fn = null, xn = null, cr = 0, ga = 0, ho = Xr(0), In = 0, mu = null, yu = 0, gu = 0, ks = 0, mo = null, aa = null, jd = 0, yo = 1 / 0, Wi = null, xl = !1, Os = null, Fa = null, af = !1, bl = null, Ls = 0, go = 0, So = null, Su = -1, Ms = 0;
  function en() {
    return ft & 6 ? zt() : Su !== -1 ? Su : Su = zt();
  }
  function Sa(n) {
    return n.mode & 1 ? ft & 2 && cr !== 0 ? cr & -cr : lu.transition !== null ? (Ms === 0 && (Ms = Ql()), Ms) : (n = Et, n !== 0 || (n = window.event, n = n === void 0 ? 16 : $o(n.type)), n) : 1;
  }
  function Ea(n, r, l, o) {
    if (50 < go) throw go = 0, So = null, Error(A(185));
    ol(n, l, o), (!(ft & 2) || n !== Fn) && (n === Fn && (!(ft & 2) && (gu |= l), In === 4 && Dl(n, cr)), tr(n, o), l === 1 && ft === 0 && !(r.mode & 1) && (yo = zt() + 500, os && Mr()));
  }
  function tr(n, r) {
    var l = n.callbackNode;
    Au(n, r);
    var o = fi(n, n === Fn ? cr : 0);
    if (o === 0) l !== null && on(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && on(l), r === 1) n.tag === 0 ? sd(As.bind(null, n)) : vl(As.bind(null, n)), ly(function() {
        !(ft & 6) && Mr();
      }), l = null;
      else {
        switch (Io(o)) {
          case 1:
            l = Ge;
            break;
          case 4:
            l = ci;
            break;
          case 16:
            l = Ni;
            break;
          case 536870912:
            l = zi;
            break;
          default:
            l = Ni;
        }
        l = uh(l, nh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function nh(n, r) {
    if (Su = -1, Ms = 0, ft & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Eo() && n.callbackNode !== l) return null;
    var o = fi(n, n === Fn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = ft;
      ft |= 2;
      var d = rh();
      (Fn !== n || cr !== r) && (Wi = null, yo = zt() + 500, Cu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          uf(n, E);
        }
      while (!0);
      md(), rf.current = d, ft = c, xn !== null ? r = 0 : (Fn = null, cr = 0, r = In);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ai(n), c !== 0 && (o = c, r = Ns(n, c))), r === 1) throw l = mu, Cu(n, 0), Dl(n, o), tr(n, zt()), l;
      if (r === 6) Dl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Us(c) && (r = of(n, o), r === 2 && (d = Ai(n), d !== 0 && (o = d, r = Ns(n, d))), r === 1)) throw l = mu, Cu(n, 0), Dl(n, o), tr(n, zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Ru(n, aa, Wi);
            break;
          case 3:
            if (Dl(n, o), (o & 130023424) === o && (r = jd + 500 - zt(), 10 < r)) {
              if (fi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                en(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Sc(Ru.bind(null, n, aa, Wi), r);
              break;
            }
            Ru(n, aa, Wi);
            break;
          case 4:
            if (Dl(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - kr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = zt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * th(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Sc(Ru.bind(null, n, aa, Wi), o);
              break;
            }
            Ru(n, aa, Wi);
            break;
          case 5:
            Ru(n, aa, Wi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return tr(n, zt()), n.callbackNode === l ? nh.bind(null, n) : null;
  }
  function Ns(n, r) {
    var l = mo;
    return n.current.memoizedState.isDehydrated && (Cu(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = aa, aa = l, r !== null && zs(r)), n;
  }
  function zs(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function Us(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ka(d(), c)) return !1;
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
  function Dl(n, r) {
    for (r &= ~ks, r &= ~gu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - kr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function As(n) {
    if (ft & 6) throw Error(A(327));
    Eo();
    var r = fi(n, 0);
    if (!(r & 1)) return tr(n, zt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ai(n);
      o !== 0 && (r = o, l = Ns(n, o));
    }
    if (l === 1) throw l = mu, Cu(n, 0), Dl(n, r), tr(n, zt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ru(n, aa, Wi), tr(n, zt()), null;
  }
  function lf(n, r) {
    var l = ft;
    ft |= 1;
    try {
      return n(r);
    } finally {
      ft = l, ft === 0 && (yo = zt() + 500, os && Mr());
    }
  }
  function Eu(n) {
    bl !== null && bl.tag === 0 && !(ft & 6) && Eo();
    var r = ft;
    ft |= 1;
    var l = br.transition, o = Et;
    try {
      if (br.transition = null, Et = 1, n) return n();
    } finally {
      Et = o, br.transition = l, ft = r, !(ft & 6) && Mr();
    }
  }
  function Hd() {
    ga = ho.current, Pt(ho);
  }
  function Cu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, kv(l)), xn !== null) for (l = xn.return; l !== null; ) {
      var o = l;
      switch (Tc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && mi();
          break;
        case 3:
          lo(), Pt(zn), Pt(pn), vs();
          break;
        case 5:
          Td(o);
          break;
        case 4:
          lo();
          break;
        case 13:
          Pt(vn);
          break;
        case 19:
          Pt(vn);
          break;
        case 10:
          yd(o.type._context);
          break;
        case 22:
        case 23:
          Hd();
      }
      l = l.return;
    }
    if (Fn = n, xn = n = kl(n.current, null), cr = ga = r, In = 0, mu = null, ks = gu = yu = 0, aa = mo = null, uu !== null) {
      for (r = 0; r < uu.length; r++) if (l = uu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      uu = null;
    }
    return n;
  }
  function uf(n, r) {
    do {
      var l = xn;
      try {
        if (md(), _e.current = Yt, bc) {
          for (var o = qe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          bc = !1;
        }
        if (yt = 0, Bn = qt = qe = null, hs = !1, ms = 0, hu.current = null, l === null || l.return === null) {
          In = 1, mu = r, xn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var $ = Q.alternate;
              $ ? (Q.updateQueue = $.updateQueue, Q.memoizedState = $.memoizedState, Q.lanes = $.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = Od(m);
            if (ce !== null) {
              ce.flags &= -257, $v(ce, m, E, d, r), ce.mode & 1 && kd(d, z, r), r = ce, T = z;
              var ge = r.updateQueue;
              if (ge === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ge.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                kd(d, z, r), Vd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (sn && E.mode & 1) {
            var bn = Od(m);
            if (bn !== null) {
              !(bn.flags & 65536) && (bn.flags |= 256), $v(bn, m, E, d, r), cs(wl(T, E));
              break e;
            }
          }
          d = T = wl(T, E), In !== 4 && (In = 2), mo === null ? mo = [d] : mo.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Rs(d, T, r);
                jv(d, D);
                break e;
              case 1:
                E = T;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Fa === null || !Fa.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Iv(d, E, r);
                  jv(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (ue) {
        r = ue, xn === l && l !== null && (xn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rh() {
    var n = rf.current;
    return rf.current = Yt, n === null ? Yt : n;
  }
  function Vd() {
    (In === 0 || In === 3 || In === 2) && (In = 4), Fn === null || !(yu & 268435455) && !(gu & 268435455) || Dl(Fn, cr);
  }
  function of(n, r) {
    var l = ft;
    ft |= 2;
    var o = rh();
    (Fn !== n || cr !== r) && (Wi = null, Cu(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        uf(n, c);
      }
    while (!0);
    if (md(), ft = l, rf.current = o, xn !== null) throw Error(A(261));
    return Fn = null, cr = 0, In;
  }
  function fy() {
    for (; xn !== null; ) Pd(xn);
  }
  function dy() {
    for (; xn !== null && !Cr(); ) Pd(xn);
  }
  function Pd(n) {
    var r = Yd(n.alternate, n, ga);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : xn = r, hu.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = qv(l, r), l !== null) {
          l.flags &= 32767, xn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          In = 6, xn = null;
          return;
        }
      } else if (l = zd(l, r, ga), l !== null) {
        xn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        xn = r;
        return;
      }
      xn = r = n;
    } while (r !== null);
    In === 0 && (In = 5);
  }
  function Ru(n, r, l) {
    var o = Et, c = br.transition;
    try {
      br.transition = null, Et = 1, py(n, r, l, o);
    } finally {
      br.transition = c, Et = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      Eo();
    while (bl !== null);
    if (ft & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Bo(n, d), n === Fn && (xn = Fn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || af || (af = !0, uh(Ni, function() {
      return Eo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = br.transition, br.transition = null;
      var m = Et;
      Et = 1;
      var E = ft;
      ft |= 4, hu.current = null, cy(n, l), Zv(l, n), Ev(is), sl = !!tu, is = tu = null, n.current = l, bs(l), Ga(), ft = E, Et = m, br.transition = d;
    } else n.current = l;
    if (af && (af = !1, bl = n, Ls = c), d = n.pendingLanes, d === 0 && (Fa = null), Vo(l.stateNode), tr(n, zt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (xl) throw xl = !1, n = Os, Os = null, n;
    return Ls & 1 && n.tag !== 0 && Eo(), d = n.pendingLanes, d & 1 ? n === So ? go++ : (go = 0, So = n) : go = 0, Mr(), null;
  }
  function Eo() {
    if (bl !== null) {
      var n = Io(Ls), r = br.transition, l = Et;
      try {
        if (br.transition = null, Et = 16 > n ? 16 : n, bl === null) var o = !1;
        else {
          if (n = bl, bl = null, Ls = 0, ft & 6) throw Error(A(331));
          var c = ft;
          for (ft |= 4, he = n.current; he !== null; ) {
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
                        vo(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, he = W;
                    else for (; he !== null; ) {
                      Q = he;
                      var $ = Q.sibling, ce = Q.return;
                      if (Xv(Q), Q === z) {
                        he = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = ce, he = $;
                        break;
                      }
                      he = ce;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var Ee = ge.child;
                  if (Ee !== null) {
                    ge.child = null;
                    do {
                      var bn = Ee.sibling;
                      Ee.sibling = null, Ee = bn;
                    } while (Ee !== null);
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
                  vo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, he = D;
                break e;
              }
              he = d.return;
            }
          }
          var _ = n.current;
          for (he = _; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = _; he !== null; ) {
              if (E = he, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ef(9, E);
                }
              } catch (ue) {
                En(E, E.return, ue);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, he = q;
                break e;
              }
              he = E.return;
            }
          }
          if (ft = c, Mr(), Qr && typeof Qr.onPostCommitFiberRoot == "function") try {
            Qr.onPostCommitFiberRoot(il, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Et = l, br.transition = r;
      }
    }
    return !1;
  }
  function ih(n, r, l) {
    r = wl(l, r), r = Rs(n, r, 1), n = El(n, r, 1), r = en(), n !== null && (ol(n, 1, r), tr(n, r));
  }
  function En(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Fa === null || !Fa.has(o))) {
          n = wl(l, n), n = Iv(r, n, 1), r = El(r, n, 1), n = en(), r !== null && (ol(r, 1, n), tr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Bd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = en(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (cr & l) === l && (In === 4 || In === 3 && (cr & 130023424) === cr && 500 > zt() - jd ? Cu(n, 0) : ks |= l), tr(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = ll, ll <<= 1, !(ll & 130023424) && (ll = 4194304)) : r = 1);
    var l = en();
    n = gi(n, r), n !== null && (ol(n, r, l), tr(n, l));
  }
  function vy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
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
    o !== null && o.delete(r), lh(n, l);
  }
  var Yd;
  Yd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || zn.current) er = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return er = !1, Jc(n, r, l);
      er = !!(n.flags & 131072);
    }
    else er = !1, sn && r.flags & 1048576 && Lv(r, yl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ua(n, r), n = r.pendingProps;
        var c = ha(r, pn.current);
        ao(r, l), c = ze(null, r, o, n, c, l);
        var d = Cl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Sn(o) ? (d = !0, au(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Sl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, bd(r, o, n, l), r = Ld(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && cd(r), _n(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ua(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ta(o, n), c) {
            case 0:
              r = Gc(null, r, o, n, l);
              break e;
            case 1:
              r = oy(null, r, o, n, l);
              break e;
            case 11:
              r = Wc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), oy(n, r, o, c, l);
      case 3:
        e: {
          if (qc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = wl(Error(A(423)), r), r = fo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = wl(Error(A(424)), r), r = fo(n, r, o, l, c);
            break e;
          } else for (Zr = Za(r.stateNode.containerInfo.firstChild), Kr = r, sn = !0, ei = null, l = ur(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ii(), o === c) {
              r = or(n, r, l);
              break e;
            }
            _n(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Rd(r), n === null && vd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, nu(o, c) ? m = null : d !== null && nu(o, d) && (r.flags |= 32), Ts(n, r), _n(n, r, m, l), r.child;
      case 6:
        return n === null && vd(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return Cd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ti(r, null, o, l) : _n(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Wc(n, r, o, c, l);
      case 7:
        return _n(n, r, r.pendingProps, l), r.child;
      case 8:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return _n(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Jt(te, o._currentValue), o._currentValue = m, d !== null) if (Ka(d.value, m)) {
            if (d.children === c.children && !zn.current) {
              r = or(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = $i(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), gd(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), gd(m, l, r), m = d.sibling;
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
        return c = r.type, o = r.pendingProps.children, ao(r, l), c = Bt(c), o = o(c), r.flags |= 1, _n(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return pu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Ua(n, r), r.tag = 1, Sn(o) ? (n = !0, au(r)) : n = !1, ao(r, l), Yv(r, o, c), bd(r, o, c, l), Ld(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return Ke(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function uh(n, r) {
    return nn(n, r);
  }
  function my(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ja(n, r, l, o) {
    return new my(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === It) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function kl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ja(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function sf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Id(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ot:
        return Ol(l.children, c, d, r);
      case je:
        m = 8, c |= 8;
        break;
      case Cn:
        return n = ja(12, l, r, c | 2), n.elementType = Cn, n.lanes = d, n;
      case ht:
        return n = ja(13, l, r, c), n.elementType = ht, n.lanes = d, n;
      case Me:
        return n = ja(19, l, r, c), n.elementType = Me, n.lanes = d, n;
      case tt:
        return Co(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Lt:
            m = 10;
            break e;
          case fn:
            m = 9;
            break e;
          case It:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case pt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = ja(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ol(n, r, l, o) {
    return n = ja(7, n, o, r), n.lanes = l, n;
  }
  function Co(n, r, l, o) {
    return n = ja(22, n, o, r), n.elementType = tt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Tu(n, r, l) {
    return n = ja(6, n, null, r), n.lanes = l, n;
  }
  function $d(n, r, l) {
    return r = ja(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function oh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new oh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ja(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sl(d), n;
  }
  function sh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ch(n) {
    if (!n) return rt;
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
            if (Sn(r.type)) {
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
      if (Sn(l)) return Ov(n, l, r);
    }
    return r;
  }
  function Qd(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = ch(null), l = n.current, o = en(), c = Sa(l), d = $i(o, c), d.callback = r ?? null, El(l, d, c), n.current.lanes = c, ol(n, c, o), tr(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = en(), m = Sa(c);
    return l = ch(l), r.context === null ? r.context = l : r.pendingContext = l, r = $i(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = El(c, r, m), n !== null && (Ea(n, c, m, d), wc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function fh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  function dh() {
    return null;
  }
  var Wd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Ll(n) {
    this._internalRoot = n;
  }
  vf.prototype.render = Ll.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    ff(n, r, null, null);
  }, vf.prototype.unmount = Ll.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Eu(function() {
        ff(null, n, null, null);
      }), r[Bi] = null;
    }
  };
  function vf(n) {
    this._internalRoot = n;
  }
  vf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = di();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < qa.length && r !== 0 && r < qa[l].priority; l++) ;
      qa.splice(l, 0, n), l === 0 && ju(n);
    }
  };
  function Gd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ph() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = df(m);
          d.call(z);
        };
      }
      var m = Qd(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Bi] = m.current, rs(n.nodeType === 8 ? n.parentNode : n), Eu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = df(T);
        E.call(z);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ph);
    return n._reactRootContainer = T, n[Bi] = T.current, rs(n.nodeType === 8 ? n.parentNode : n), Eu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function mf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = gy(l, r, n, c, o);
    return df(m);
  }
  Fu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Wr(r.pendingLanes);
          l !== 0 && (Yo(r, l | 1), tr(r, zt()), !(ft & 6) && (yo = zt() + 500, Mr()));
        }
        break;
      case 13:
        Eu(function() {
          var o = gi(n, 1);
          if (o !== null) {
            var c = en();
            Ea(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Ct = function(n) {
    if (n.tag === 13) {
      var r = gi(n, 134217728);
      if (r !== null) {
        var l = en();
        Ea(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, lc = function(n) {
    if (n.tag === 13) {
      var r = Sa(n), l = gi(n, r);
      if (l !== null) {
        var o = en();
        Ea(l, n, r, o);
      }
      pf(n, r);
    }
  }, di = function() {
    return Et;
  }, Ve = function(n, r) {
    var l = Et;
    try {
      return Et = n, r();
    } finally {
      Et = l;
    }
  }, $t = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ln(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Yi(o);
              if (!c) throw Error(A(90));
              Wn(o), Ln(o, c);
            }
          }
        }
        break;
      case "textarea":
        Er(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, Yl = lf, Il = Eu;
  var vh = { usingClientEntryPoint: !1, Events: [us, we, Yi, ba, Oi, lf] }, Fs = { findFiberByHostInstance: ru, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: Fs.bundleType, version: Fs.version, rendererPackageName: Fs.rendererPackageName, rendererConfig: Fs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Je(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fs.findFiberByHostInstance || dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber) try {
      il = js.inject(Sy), Qr = js;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vh, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gd(r)) throw Error(A(200));
    return sh(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!Gd(n)) throw Error(A(299));
    var l = !1, o = "", c = Wd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[Bi] = r.current, rs(n.nodeType === 8 ? n.parentNode : n), new Ll(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Je(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Eu(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return mf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!Gd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Wd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Qd(r, null, n, 1, l ?? null, c, !1, d, m), n[Bi] = r.current, rs(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new vf(r);
  }, Ia.render = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return mf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Eu(function() {
      mf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Bi] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = lf, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return mf(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var $a = {}, iT;
function oD() {
  if (iT) return $a;
  iT = 1;
  var K = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return K.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ve = Jp, A = uT(), wt = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ut = !1;
    function Ot(e) {
      Ut = e;
    }
    function _t(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        dt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        dt("error", e, a);
      }
    }
    function dt(e, t, a) {
      {
        var i = wt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var xe = 0, pe = 1, Be = 2, J = 3, Fe = 4, le = 5, Te = 6, ut = 7, Hn = 8, rn = 9, at = 10, Ne = 11, xt = 12, Ce = 13, ot = 14, je = 15, Cn = 16, Lt = 17, fn = 18, It = 19, ht = 21, Me = 22, At = 23, pt = 24, tt = 25, Y = !0, ye = !1, ne = !1, b = !1, B = !1, be = !0, He = !0, Ye = !0, nt = !0, St = /* @__PURE__ */ new Set(), Qe = {}, mt = {};
    function Vt(e, t) {
      kn(e, t), kn(e + "Capture", t);
    }
    function kn(e, t) {
      Qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qe[e] = t;
      {
        var a = e.toLowerCase();
        mt[a] = e, e === "onDoubleClick" && (mt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        St.add(t[i]);
    }
    var Wn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function On(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Sr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function Ln(e, t) {
      if (Sr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Vn(e);
    }
    function ca(e) {
      if (Sr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Vn(e);
    }
    function Qa(e, t) {
      if (Sr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Vn(e);
    }
    function Dr(e, t) {
      if (Sr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Vn(e);
    }
    function Pn(e) {
      if (Sr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Vn(e);
    }
    function Gn(e) {
      if (Sr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", On(e)), Vn(e);
    }
    var qn = 0, Er = 1, Wa = 2, Mn = 3, ar = 4, Ir = 5, ki = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Z = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ke = new RegExp("^[" + fa + "][" + Z + "]*$"), Ze = {}, Mt = {};
    function an(e) {
      return rr.call(Mt, e) ? !0 : rr.call(Ze, e) ? !1 : ke.test(e) ? (Mt[e] = !0, !0) : (Ze[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function ln(e, t, a) {
      return t !== null ? t.type === qn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === qn)
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
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case ar:
            return t === !1;
          case Ir:
            return isNaN(t);
          case ki:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return Nt.hasOwnProperty(e) ? Nt[e] : null;
    }
    function $t(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Wa || t === Mn || t === ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Nt = {}, da = [
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
    da.forEach(function(e) {
      Nt[e] = new $t(
        e,
        qn,
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
      Nt[t] = new $t(
        t,
        Er,
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
      Nt[e] = new $t(
        e,
        Wa,
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
      Nt[e] = new $t(
        e,
        Wa,
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
      Nt[e] = new $t(
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
      Nt[e] = new $t(
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
      Nt[e] = new $t(
        e,
        ar,
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
      Nt[e] = new $t(
        e,
        ki,
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
      Nt[e] = new $t(
        e,
        Ir,
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
    var xa = /[\-\:]([a-z])/g, ba = function(e) {
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
      var t = e.replace(xa, ba);
      Nt[t] = new $t(
        t,
        Er,
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
      var t = e.replace(xa, ba);
      Nt[t] = new $t(
        t,
        Er,
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
      var t = e.replace(xa, ba);
      Nt[t] = new $t(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Nt[e] = new $t(
        e,
        Er,
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
    var Oi = "xlinkHref";
    Nt[Oi] = new $t(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Nt[e] = new $t(
        e,
        Er,
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
    var Yl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Il = !1;
    function Li(e) {
      !Il && Yl.test(e) && (Il = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function $l(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Ln(a, t), i.sanitizeURL && Li("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ar) {
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
    function ui(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ln(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = tn(t);
      if (!ln(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Ln(a, t), e.setAttribute(s, "" + a));
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
          var x = u.type, w;
          x === Mn || x === ar && a === !0 ? w = "" : (Ln(a, y), w = "" + a, u.sanitizeURL && Li(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ir = Symbol.for("react.element"), va = Symbol.for("react.portal"), $r = Symbol.for("react.fragment"), oi = Symbol.for("react.strict_mode"), si = Symbol.for("react.profiler"), Mi = Symbol.for("react.provider"), R = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), it = Symbol.for("react.memo"), Ie = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Je = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Cr = Symbol.for("react.tracing_marker"), Ga = Symbol.iterator, zt = "@@iterator";
    function dn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ga && e[Ga] || e[zt];
      return typeof t == "function" ? t : null;
    }
    var Ge = Object.assign, ci = 0, Ni, rc, zi, il, Qr, Vo, kr;
    function Po() {
    }
    Po.__reactDisabledLog = !0;
    function ac() {
      {
        if (ci === 0) {
          Ni = console.log, rc = console.info, zi = console.warn, il = console.error, Qr = console.group, Vo = console.groupCollapsed, kr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Po,
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
        ci++;
      }
    }
    function ic() {
      {
        if (ci--, ci === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ge({}, e, {
              value: Ni
            }),
            info: Ge({}, e, {
              value: rc
            }),
            warn: Ge({}, e, {
              value: zi
            }),
            error: Ge({}, e, {
              value: il
            }),
            group: Ge({}, e, {
              value: Qr
            }),
            groupCollapsed: Ge({}, e, {
              value: Vo
            }),
            groupEnd: Ge({}, e, {
              value: kr
            })
          });
        }
        ci < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ui = wt.ReactCurrentDispatcher, ll;
    function Wr(e, t, a) {
      {
        if (ll === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ll = i && i[1] || "";
          }
        return `
` + ll + e;
      }
    }
    var fi = !1, ul;
    {
      var Au = typeof WeakMap == "function" ? WeakMap : Map;
      ul = new Au();
    }
    function Ai(e, t) {
      if (!e || fi)
        return "";
      {
        var a = ul.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      fi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ui.current, Ui.current = null, ac();
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
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && ul.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        fi = !1, Ui.current = s, ic(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Wr(w) : "";
      return typeof e == "function" && ul.set(e, N), N;
    }
    function Ql(e, t, a) {
      return Ai(e, !0);
    }
    function Wl(e, t, a) {
      return Ai(e, !1);
    }
    function ol(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Bo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ai(e, ol(e));
      if (typeof e == "string")
        return Wr(e);
      switch (e) {
        case re:
          return Wr("Suspense");
        case ie:
          return Wr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return Wl(e.render);
          case it:
            return Bo(e.type, t, a);
          case Ie: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Bo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Yo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Wr(e.type);
        case Cn:
          return Wr("Lazy");
        case Ce:
          return Wr("Suspense");
        case It:
          return Wr("SuspenseList");
        case xe:
        case Be:
        case je:
          return Wl(e.type);
        case Ne:
          return Wl(e.type.render);
        case pe:
          return Ql(e.type);
        default:
          return "";
      }
    }
    function Et(e) {
      try {
        var t = "", a = e;
        do
          t += Yo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Io(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case $r:
          return "Fragment";
        case va:
          return "Portal";
        case si:
          return "Profiler";
        case oi:
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
            return Io(e, e.render, "ForwardRef");
          case it:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case Ie: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function lc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function di(e) {
      return e.displayName || "Context";
    }
    function Ve(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case pt:
          return "Cache";
        case rn:
          var i = a;
          return di(i) + ".Consumer";
        case at:
          var u = a;
          return di(u._context) + ".Provider";
        case fn:
          return "DehydratedFragment";
        case Ne:
          return lc(a, a.render, "ForwardRef");
        case ut:
          return "Fragment";
        case le:
          return a;
        case Fe:
          return "Portal";
        case J:
          return "Root";
        case Te:
          return "Text";
        case Cn:
          return Ct(a);
        case Hn:
          return a === oi ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case xt:
          return "Profiler";
        case ht:
          return "Scope";
        case Ce:
          return "Suspense";
        case It:
          return "SuspenseList";
        case tt:
          return "TracingMarker";
        case pe:
        case xe:
        case Lt:
        case Be:
        case ot:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gl = wt.ReactDebugCurrentFrame, Kn = null, Gr = !1;
    function Or() {
      {
        if (Kn === null)
          return null;
        var e = Kn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ve(e);
      }
      return null;
    }
    function pi() {
      return Kn === null ? "" : Et(Kn);
    }
    function yn() {
      Gl.getCurrentStack = null, Kn = null, Gr = !1;
    }
    function Qt(e) {
      Gl.getCurrentStack = e === null ? null : pi, Kn = e, Gr = !1;
    }
    function qa() {
      return Kn;
    }
    function Da(e) {
      Gr = e;
    }
    function Rr(e) {
      return "" + e;
    }
    function Lr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Gn(e), e;
        default:
          return "";
      }
    }
    var Wf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ju(e, t) {
      Wf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ql(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Hu(e) {
      return e._valueTracker;
    }
    function Vu(e) {
      e._valueTracker = null;
    }
    function Xl(e) {
      var t = "";
      return e && (ql(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ka(e) {
      var t = ql(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Gn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Gn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Gn(p), i = "" + p;
          },
          stopTracking: function() {
            Vu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      Hu(e) || (e._valueTracker = ka(e));
    }
    function sl(e) {
      if (!e)
        return !1;
      var t = Hu(e);
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
    var Pu = !1, cl = !1, ji = !1, Bu = !1;
    function $o(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function La(e, t) {
      var a = e, i = t.checked, u = Ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Yu(e, t) {
      ju("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !cl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), cl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Pu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), Pu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
        controlled: $o(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = $o(t);
        !a._wrapperState.controlled && i && !Bu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bu = !0), a._wrapperState.controlled && !i && !ji && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ji = !0);
      }
      h(e, t);
      var u = Lr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Rr(u)) : a.value !== Rr(u) && (a.value = Rr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? me(a, t.type, u) : t.hasOwnProperty("defaultValue") && me(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Rr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ln(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Lh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            sl(f), C(f, p);
          }
        }
      }
    }
    function me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Fi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rr(e._wrapperState.initialValue) : e.defaultValue !== Rr(a) && (e.defaultValue = Rr(a)));
    }
    var se = !1, Ue = !1, et = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ve.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ue || (Ue = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (et || (et = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), se = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", Rr(Lr(t.value)));
    }
    var Gt = Array.isArray;
    function Xe(e) {
      return Gt(e);
    }
    var Zt;
    Zt = !1;
    function Tn() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Kl = ["value", "defaultValue"];
    function Qo(e) {
      {
        ju("select", e);
        for (var t = 0; t < Kl.length; t++) {
          var a = Kl[t];
          if (e[a] != null) {
            var i = Xe(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Tn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Tn());
          }
        }
      }
    }
    function Hi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Rr(Lr(a)), x = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          x === null && !u[w].disabled && (x = u[w]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function Zl(e, t) {
      return Ge({}, t, {
        value: void 0
      });
    }
    function Wo(e, t) {
      var a = e;
      Qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function Gf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Hi(a, !!t.multiple, i, !1) : t.defaultValue != null && Hi(a, !!t.multiple, t.defaultValue, !0);
    }
    function uc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Hi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Hi(a, !!t.multiple, t.defaultValue, !0) : Hi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qf(e, t) {
      var a = e, i = t.value;
      i != null && Hi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function oc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function tv(e, t) {
      var a = e;
      ju("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), ev = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Xe(u)) {
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
        initialValue: Lr(i)
      };
    }
    function nv(e, t) {
      var a = e, i = Lr(t.value), u = Lr(t.defaultValue);
      if (i != null) {
        var s = Rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Rr(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Gm(e, t) {
      nv(e, t);
    }
    var Xa = "http://www.w3.org/1999/xhtml", qm = "http://www.w3.org/1998/Math/MathML", Xf = "http://www.w3.org/2000/svg";
    function Kf(e) {
      switch (e) {
        case "svg":
          return Xf;
        case "math":
          return qm;
        default:
          return Xa;
      }
    }
    function sc(e, t) {
      return e == null || e === Xa ? Kf(t) : e === Xf && t === "foreignObject" ? Xa : e;
    }
    var Xm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, cc, av = Xm(function(e, t) {
      if (e.namespaceURI === Xf && !("innerHTML" in e)) {
        cc = cc || document.createElement("div"), cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), qr = 1, Vi = 3, Nn = 8, Pi = 9, Go = 11, fl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Km = {
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
    }, Iu = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      lv.forEach(function(t) {
        Iu[iv(t, e)] = Iu[e];
      });
    });
    function fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, $u = /^ms-/;
    function Zm(e) {
      return e.replace(uv, "-$1").toLowerCase().replace($u, "-ms-");
    }
    var ov = function() {
    };
    {
      var Jm = /^(?:webkit|moz|o)[A-Z]/, sv = /^-ms-/, cv = /-(.)/g, Qu = /;\s*$/, vi = {}, Zf = {}, qo = !1, fv = !1, dv = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, Jf = function(e) {
        vi.hasOwnProperty(e) && vi[e] || (vi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dv(e.replace(sv, "ms-"))
        ));
      }, ed = function(e) {
        vi.hasOwnProperty(e) && vi[e] || (vi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pv = function(e, t) {
        Zf.hasOwnProperty(t) && Zf[t] || (Zf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Qu, "")));
      }, vv = function(e, t) {
        qo || (qo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        fv || (fv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ov = function(e, t) {
        e.indexOf("-") > -1 ? Jf(e) : Jm.test(e) ? ed(e) : Qu.test(t) && pv(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var ey = ov;
    function ty(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Zm(i)) + ":", t += fc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || ey(i, t[i]);
          var s = fc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ny(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = Km[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Ka(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
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
    var Xo = {
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
    }, gv = Ge({
      menuitem: !0
    }, Xo), Sv = "__html";
    function dc(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function dl(e, t) {
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
    var Wu = {
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
    }, Ev = {
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
    }, Gu = {}, qu = new RegExp("^(aria)-[" + Z + "]*$"), td = new RegExp("^(aria)[A-Z][" + Z + "]*$");
    function Ko(e, t) {
      {
        if (rr.call(Gu, t) && Gu[t])
          return !0;
        if (td.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ev.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Gu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Gu[t] = !0, !0;
        }
        if (qu.test(t)) {
          var u = t.toLowerCase(), s = Ev.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Gu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Gu[t] = !0, !0;
        }
      }
      return !0;
    }
    function nd(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Ko(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Cv(e, t) {
      dl(e, t) || nd(e, t);
    }
    var Zo = !1;
    function Xu(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Zo && (Zo = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var pc = function() {
    };
    {
      var Tr = {}, Jo = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + Z + "]*$"), wv = new RegExp("^(aria)[A-Z][" + Z + "]*$");
      pc = function(e, t, a, i) {
        if (rr.call(Tr, t) && Tr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Tr[t] = !0, !0;
          if (Jo.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Tr[t] = !0, !0;
        } else if (Jo.test(t))
          return Rv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Tv.test(t) || wv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === qn;
        if (Wu.hasOwnProperty(u)) {
          var g = Wu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Tr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Tr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var _v = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = pc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function xv(e, t, a) {
      dl(e, t) || _v(e, t, a);
    }
    var rd = 1, hi = 2, Jl = 4, ad = rd | hi | Jl, es = null;
    function ry(e) {
      es !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), es = e;
    }
    function ts() {
      es === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), es = null;
    }
    function ay(e) {
      return e === es;
    }
    function vc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var hc = null, jt = null, pl = null;
    function ns(e) {
      var t = wo(e);
      if (t) {
        if (typeof hc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Lh(a);
          hc(t.stateNode, t.type, i);
        }
      }
    }
    function rs(e) {
      hc = e;
    }
    function id(e) {
      jt ? pl ? pl.push(e) : pl = [e] : jt = e;
    }
    function ld() {
      return jt !== null || pl !== null;
    }
    function Ku() {
      if (jt) {
        var e = jt, t = pl;
        if (jt = null, pl = null, ns(e), t)
          for (var a = 0; a < t.length; a++)
            ns(t[a]);
      }
    }
    var as = function(e, t) {
      return e(t);
    }, eu = function() {
    }, mc = !1;
    function iy() {
      var e = ld();
      e && (eu(), Ku());
    }
    function bv(e, t, a) {
      if (mc)
        return e(t, a);
      mc = !0;
      try {
        return as(e, t, a);
      } finally {
        mc = !1, iy();
      }
    }
    function Dv(e, t, a) {
      as = e, eu = a;
    }
    function yc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function gc(e, t, a) {
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
          return !!(a.disabled && yc(t));
        default:
          return !1;
      }
    }
    function tu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Lh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (gc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var is = !1;
    if (Wn)
      try {
        var nu = {};
        Object.defineProperty(nu, "passive", {
          get: function() {
            is = !0;
          }
        }), window.addEventListener("test", nu, nu), window.removeEventListener("test", nu, nu);
      } catch {
        is = !1;
      }
    function Sc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kv = Sc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ec = document.createElement("react");
      kv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          Ec.removeEventListener(H, Oe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Oe() {
          x = !0, j(), a.apply(i, ae), w = !1;
        }
        var Re, Tt = !1, vt = !1;
        function k(O) {
          if (Re = O.error, Tt = !0, Re === null && O.colno === 0 && O.lineno === 0 && (vt = !0), O.defaultPrevented && Re != null && typeof Re == "object")
            try {
              Re._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Ec.addEventListener(H, Oe, !1), g.initEvent(H, !1, !1), Ec.dispatchEvent(g), U && Object.defineProperty(window, "event", U), x && w && (Tt ? vt && (Re = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Re = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Re)), window.removeEventListener("error", k), !x)
          return j(), Sc.apply(this, arguments);
      };
    }
    var ly = kv, Zu = !1, Ju = null, Za = !1, Cc = null, eo = {
      onError: function(e) {
        Zu = !0, Ju = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      Zu = !1, Ju = null, ly.apply(eo, arguments);
    }
    function ls(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), Zu) {
        var y = od();
        Za || (Za = !0, Cc = y);
      }
    }
    function Bi() {
      if (Za) {
        var e = Cc;
        throw Za = !1, Cc = null, e;
      }
    }
    function ud() {
      return Zu;
    }
    function od() {
      if (Zu) {
        var e = Ju;
        return Zu = !1, Ju = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function to(e) {
      return e._reactInternals;
    }
    function ru(e) {
      return e._reactInternals !== void 0;
    }
    function us(e, t) {
      e._reactInternals = t;
    }
    var we = (
      /*                      */
      0
    ), Yi = (
      /*                */
      1
    ), gn = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), Pt = (
      /*                 */
      32
    ), Jt = (
      /*                     */
      64
    ), rt = (
      /*                   */
      128
    ), pn = (
      /*            */
      256
    ), zn = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), Sn = (
      /*                    */
      4096
    ), mi = (
      /*                   */
      8192
    ), Rc = (
      /*             */
      16384
    ), Ov = (
      /*               */
      32767
    ), au = (
      /*                   */
      32768
    ), wr = (
      /*                */
      65536
    ), Ja = (
      /* */
      131072
    ), os = (
      /*                       */
      1048576
    ), ss = (
      /*                    */
      2097152
    ), vl = (
      /*                 */
      4194304
    ), sd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), hl = (
      /*              */
      33554432
    ), ml = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Na | 0
    ), no = gn | ct | Xr | Pt | zn | Sn | mi, yl = ct | Jt | zn | mi, lr = ha | Xr, Un = vl | sd | ss, iu = wt.ReactCurrentOwner;
    function Nr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (gn | Sn)) !== we && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === J ? a : null;
    }
    function yi(e) {
      if (e.tag === Ce) {
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
    function gl(e) {
      return e.tag === J ? e.stateNode.containerInfo : null;
    }
    function Lv(e) {
      return Nr(e) === e;
    }
    function cd(e) {
      {
        var t = iu.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ve(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = to(e);
      return u ? Nr(u) === u : !1;
    }
    function Tc(e) {
      if (Nr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Kr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Nr(e);
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
              return Tc(s), e;
            if (v === u)
              return Tc(s), t;
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
      if (i.tag !== J)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Kr(e);
      return t !== null ? sn(t) : null;
    }
    function sn(e) {
      if (e.tag === le || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ei(e) {
      var t = Kr(e);
      return t !== null ? fd(t) : null;
    }
    function fd(e) {
      if (e.tag === le || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Fe) {
          var a = fd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var dd = A.unstable_scheduleCallback, pd = A.unstable_cancelCallback, vd = A.unstable_shouldYield, Mv = A.unstable_requestPaint, wn = A.unstable_now, Nv = A.unstable_getCurrentPriorityLevel, Ii = A.unstable_ImmediatePriority, cs = A.unstable_UserBlockingPriority, lu = A.unstable_NormalPriority, fs = A.unstable_LowPriority, ro = A.unstable_IdlePriority, zv = A.unstable_yieldValue, Uv = A.unstable_setDisableYieldValue, ti = null, ur = null, te = null, ma = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function hd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        He && (e = Ge({}, e, {
          getLaneLabelMap: Sd,
          injectProfilingHooks: uu
        })), ti = t.inject(e), ur = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function md(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ti, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function yd(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & rt) === rt;
          if (Ye) {
            var i;
            switch (t) {
              case ra:
                i = Ii;
                break;
              case Ua:
                i = cs;
                break;
              case or:
                i = lu;
                break;
              case Jc:
                i = ro;
                break;
              default:
                i = lu;
                break;
            }
            ur.onCommitFiberRoot(ti, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function gd(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ti, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ao(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ti, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Bt(e) {
      if (typeof zv == "function" && (Uv(e), Ot(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ti, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function uu(e) {
      te = e;
    }
    function Sd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Pv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Av(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function gi() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function za(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function Sl() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Fv(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function $i() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function El(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Ed(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function io() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Si(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function ds(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function ps(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function ou() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Cd(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function lo() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function Td() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function vn() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function xc(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function wd(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function vs(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var _e = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), yt = (
      /*                    */
      2
    ), qe = (
      /*               */
      8
    ), qt = (
      /*              */
      16
    ), Bn = Math.clz32 ? Math.clz32 : ms, bc = Math.log, hs = Math.LN2;
    function ms(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (bc(t) / hs | 0) | 0;
    }
    var _d = 31, V = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), ze = (
      /*                        */
      1
    ), Cl = (
      /*    */
      2
    ), Zn = (
      /*             */
      4
    ), Jn = (
      /*            */
      8
    ), Jr = (
      /*                     */
      16
    ), su = (
      /*                */
      32
    ), Rl = (
      /*                       */
      4194240
    ), uo = (
      /*                        */
      64
    ), Dc = (
      /*                        */
      128
    ), kc = (
      /*                        */
      256
    ), Oc = (
      /*                        */
      512
    ), Lc = (
      /*                        */
      1024
    ), Mc = (
      /*                        */
      2048
    ), Nc = (
      /*                        */
      4096
    ), zc = (
      /*                        */
      8192
    ), cu = (
      /*                        */
      16384
    ), Uc = (
      /*                       */
      32768
    ), oo = (
      /*                       */
      65536
    ), so = (
      /*                       */
      131072
    ), Ac = (
      /*                       */
      262144
    ), ys = (
      /*                       */
      524288
    ), Fc = (
      /*                       */
      1048576
    ), jc = (
      /*                       */
      2097152
    ), gs = (
      /*                            */
      130023424
    ), fu = (
      /*                             */
      4194304
    ), Ss = (
      /*                             */
      8388608
    ), Hc = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Pc = (
      /*                             */
      67108864
    ), Hv = fu, co = (
      /*          */
      134217728
    ), Vv = (
      /*                          */
      268435455
    ), Es = (
      /*               */
      268435456
    ), Tl = (
      /*                        */
      536870912
    ), ea = (
      /*                   */
      1073741824
    );
    function Pv(e) {
      {
        if (e & ze)
          return "Sync";
        if (e & Cl)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & Jn)
          return "DefaultHydration";
        if (e & Jr)
          return "Default";
        if (e & su)
          return "TransitionHydration";
        if (e & Rl)
          return "Transition";
        if (e & gs)
          return "Retry";
        if (e & co)
          return "SelectiveHydration";
        if (e & Es)
          return "IdleHydration";
        if (e & Tl)
          return "Idle";
        if (e & ea)
          return "Offscreen";
      }
    }
    var Yt = -1, Bc = uo, Yc = fu;
    function Cs(e) {
      switch (du(e)) {
        case ze:
          return ze;
        case Cl:
          return Cl;
        case Zn:
          return Zn;
        case Jn:
          return Jn;
        case Jr:
          return Jr;
        case su:
          return su;
        case uo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case oo:
        case so:
        case Ac:
        case ys:
        case Fc:
        case jc:
          return e & Rl;
        case fu:
        case Ss:
        case Hc:
        case Vc:
        case Pc:
          return e & gs;
        case co:
          return co;
        case Es:
          return Es;
        case Tl:
          return Tl;
        case ea:
          return ea;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Vv;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = Cs(p);
        else {
          var v = f & s;
          v !== V && (i = Cs(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = Cs(y) : s !== V && (i = Cs(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = du(i), x = du(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Jr && (x & Rl) !== V
        )
          return t;
      }
      (i & Zn) !== V && (i |= a & Jr);
      var w = e.entangledLanes;
      if (w !== V)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = _n(U), ae = 1 << j;
          i |= N[j], U &= ~ae;
        }
      return i;
    }
    function xd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var u = _n(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case ze:
        case Cl:
        case Zn:
          return t + 250;
        case Jn:
        case Jr:
        case su:
        case uo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case oo:
        case so:
        case Ac:
        case ys:
        case Fc:
        case jc:
          return t + 5e3;
        case fu:
        case Ss:
        case Hc:
        case Vc:
        case Pc:
          return Yt;
        case co:
        case Es:
        case Tl:
        case ea:
          return Yt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function Bv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p, y = s[p];
        y === Yt ? ((v & i) === V || (v & u) !== V) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Yv(e) {
      return Cs(e.pendingLanes);
    }
    function $c(e) {
      var t = e.pendingLanes & ~ea;
      return t !== V ? t : t & ea ? ea : V;
    }
    function bd(e) {
      return (e & ze) !== V;
    }
    function wl(e) {
      return (e & Vv) !== V;
    }
    function Qc(e) {
      return (e & gs) === e;
    }
    function Dd(e) {
      var t = ze | Zn | Jr;
      return (e & t) === V;
    }
    function uy(e) {
      return (e & Rl) === e;
    }
    function Rs(e, t) {
      var a = Cl | Zn | Jn | Jr;
      return (t & a) !== V;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function kd(e) {
      return (e & Rl) !== V;
    }
    function Od() {
      var e = Bc;
      return Bc <<= 1, (Bc & Rl) === V && (Bc = uo), e;
    }
    function $v() {
      var e = Yc;
      return Yc <<= 1, (Yc & gs) === V && (Yc = fu), e;
    }
    function du(e) {
      return e & -e;
    }
    function er(e) {
      return du(e);
    }
    function _n(e) {
      return 31 - Bn(e);
    }
    function Wc(e) {
      return _n(e);
    }
    function na(e, t) {
      return (e & t) !== V;
    }
    function pu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function Ts(e, t) {
      return e & ~t;
    }
    function Gc(e, t) {
      return e & t;
    }
    function oy(e) {
      return e;
    }
    function Ld(e, t) {
      return e !== An && e < t ? e : t;
    }
    function qc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function fo(e, t, a) {
      e.pendingLanes |= t, t !== Tl && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Wc(t);
      i[u] = a;
    }
    function Md(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = _n(i), s = 1 << u;
        a[u] = Yt, i &= ~s;
      }
    }
    function Xc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = _n(f), v = 1 << p;
        i[p] = V, u[p] = Yt, s[p] = Yt, f &= ~v;
      }
    }
    function ws(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = _n(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Kc(e, t) {
      var a = du(t), i;
      switch (a) {
        case Zn:
          i = Cl;
          break;
        case Jr:
          i = Jn;
          break;
        case uo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case cu:
        case Uc:
        case oo:
        case so:
        case Ac:
        case ys:
        case Fc:
        case jc:
        case fu:
        case Ss:
        case Hc:
        case Vc:
        case Pc:
          i = su;
          break;
        case Tl:
          i = Es;
          break;
        default:
          i = An;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== An ? An : i;
    }
    function Wv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Wc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Nd(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Wc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zc(e, t) {
      return null;
    }
    var ra = ze, Ua = Zn, or = Jr, Jc = Tl, po = An;
    function ya() {
      return po;
    }
    function Yn(e) {
      po = e;
    }
    function Gv(e, t) {
      var a = po;
      try {
        return po = e, t();
      } finally {
        po = a;
      }
    }
    function _s(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function zd(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = du(e);
      return zd(ra, t) ? zd(Ua, t) ? wl(t) ? or : Jc : Ua : ra;
    }
    function vu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sr;
    function sy(e) {
      sr = e;
    }
    function he(e) {
      sr(e);
    }
    var _l;
    function Ud(e) {
      _l = e;
    }
    var Ad;
    function cy(e) {
      Ad = e;
    }
    var vo;
    function ef(e) {
      vo = e;
    }
    var tf;
    function Xv(e) {
      tf = e;
    }
    var nf = !1, xs = [], Ei = null, Ci = null, hn = null, zr = /* @__PURE__ */ new Map(), Aa = /* @__PURE__ */ new Map(), Qi = [], Kv = [
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
    function ni(e) {
      return Kv.indexOf(e) > -1;
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
    function ri(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ei = null;
          break;
        case "dragenter":
        case "dragleave":
          Ci = null;
          break;
        case "mouseover":
        case "mouseout":
          hn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          zr.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Aa.delete(i);
          break;
        }
      }
    }
    function bs(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Zv(t, a, i, u, s);
        if (t !== null) {
          var p = wo(t);
          p !== null && _l(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Jv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ei = bs(Ei, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ci = bs(Ci, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return hn = bs(hn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return zr.set(y, bs(zr.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Aa.set(x, bs(Aa.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Fd(e) {
      var t = Ps(e.target);
      if (t !== null) {
        var a = Nr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = yi(a);
            if (u !== null) {
              e.blockedOn = u, tf(e.priority, function() {
                Ad(a);
              });
              return;
            }
          } else if (i === J) {
            var s = a.stateNode;
            if (vu(s)) {
              e.blockedOn = gl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function eh(e) {
      for (var t = vo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Qi.length && zd(t, Qi[i].priority); i++)
        ;
      Qi.splice(i, 0, a), i === 0 && Fd(a);
    }
    function Ds(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ks(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ry(s), u.target.dispatchEvent(s), ts();
        } else {
          var f = wo(i);
          return f !== null && _l(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function th(e, t, a) {
      Ds(e) && a.delete(t);
    }
    function rf() {
      nf = !1, Ei !== null && Ds(Ei) && (Ei = null), Ci !== null && Ds(Ci) && (Ci = null), hn !== null && Ds(hn) && (hn = null), zr.forEach(th), Aa.forEach(th);
    }
    function hu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nf || (nf = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, rf)));
    }
    function br(e) {
      if (xs.length > 0) {
        hu(xs[0], e);
        for (var t = 1; t < xs.length; t++) {
          var a = xs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ei !== null && hu(Ei, e), Ci !== null && hu(Ci, e), hn !== null && hu(hn, e);
      var i = function(p) {
        return hu(p, e);
      };
      zr.forEach(i), Aa.forEach(i);
      for (var u = 0; u < Qi.length; u++) {
        var s = Qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Qi.length > 0; ) {
        var f = Qi[0];
        if (f.blockedOn !== null)
          break;
        Fd(f), f.blockedOn === null && Qi.shift();
      }
    }
    var ft = wt.ReactCurrentBatchConfig, Fn = !0;
    function xn(e) {
      Fn = !!e;
    }
    function cr() {
      return Fn;
    }
    function ga(e, t, a) {
      var i = mo(t), u;
      switch (i) {
        case ra:
          u = ho;
          break;
        case Ua:
          u = In;
          break;
        case or:
        default:
          u = mu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function ho(e, t, a, i) {
      var u = ya(), s = ft.transition;
      ft.transition = null;
      try {
        Yn(ra), mu(e, t, a, i);
      } finally {
        Yn(u), ft.transition = s;
      }
    }
    function In(e, t, a, i) {
      var u = ya(), s = ft.transition;
      ft.transition = null;
      try {
        Yn(Ua), mu(e, t, a, i);
      } finally {
        Yn(u), ft.transition = s;
      }
    }
    function mu(e, t, a, i) {
      Fn && yu(e, t, a, i);
    }
    function yu(e, t, a, i) {
      var u = ks(e, t, a, i);
      if (u === null) {
        by(e, t, i, gu, a), ri(e, i);
        return;
      }
      if (Jv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ri(e, i), t & Jl && ni(e)) {
        for (; u !== null; ) {
          var s = wo(u);
          s !== null && he(s);
          var f = ks(e, t, a, i);
          if (f === null && by(e, t, i, gu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var gu = null;
    function ks(e, t, a, i) {
      gu = null;
      var u = vc(i), s = Ps(u);
      if (s !== null) {
        var f = Nr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = yi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === J) {
            var y = f.stateNode;
            if (vu(y))
              return gl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return gu = s, null;
    }
    function mo(e) {
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
          return ra;
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
          return Ua;
        case "message": {
          var t = Nv();
          switch (t) {
            case Ii:
              return ra;
            case cs:
              return Ua;
            case lu:
            case fs:
              return or;
            case ro:
              return Jc;
            default:
              return or;
          }
        }
        default:
          return or;
      }
    }
    function aa(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function jd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function yo(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Wi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var xl = null, Os = null, Fa = null;
    function af(e) {
      return xl = e, Os = go(), !0;
    }
    function bl() {
      xl = null, Os = null, Fa = null;
    }
    function Ls() {
      if (Fa)
        return Fa;
      var e, t = Os, a = t.length, i, u = go(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Fa = u.slice(e, p), Fa;
    }
    function go() {
      return "value" in xl ? xl.value : xl.textContent;
    }
    function So(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Su() {
      return !0;
    }
    function Ms() {
      return !1;
    }
    function en(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Su : this.isDefaultPrevented = Ms, this.isPropagationStopped = Ms, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Su);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Su);
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
        isPersistent: Su
      }), t;
    }
    var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ea = en(Sa), tr = Ge({}, Sa, {
      view: 0,
      detail: 0
    }), nh = en(tr), Ns, zs, Us;
    function Dl(e) {
      e !== Us && (Us && e.type === "mousemove" ? (Ns = e.screenX - Us.screenX, zs = e.screenY - Us.screenY) : (Ns = 0, zs = 0), Us = e);
    }
    var As = Ge({}, tr, {
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
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Dl(e), Ns);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : zs;
      }
    }), lf = en(As), Eu = Ge({}, As, {
      dataTransfer: 0
    }), Hd = en(Eu), Cu = Ge({}, tr, {
      relatedTarget: 0
    }), uf = en(Cu), rh = Ge({}, Sa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Vd = en(rh), of = Ge({}, Sa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fy = en(of), dy = Ge({}, Sa, {
      data: 0
    }), Pd = en(dy), ah = Pd, Ru = {
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
    function Eo(e) {
      if (e.key) {
        var t = Ru[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = So(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? py[e.keyCode] || "Unidentified" : "";
    }
    var ih = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function En(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Bd(e) {
      return En;
    }
    var lh = Ge({}, tr, {
      key: Eo,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? So(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? So(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vy = en(lh), hy = Ge({}, As, {
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
    }), Yd = en(hy), uh = Ge({}, tr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd
    }), my = en(uh), ja = Ge({}, Sa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Id = en(ja), yy = Ge({}, As, {
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
    }), kl = en(yy), sf = [9, 13, 27, 32], Ol = 229, Co = Wn && "CompositionEvent" in window, Tu = null;
    Wn && "documentMode" in document && (Tu = document.documentMode);
    var $d = Wn && "TextEvent" in window && !Tu, oh = Wn && (!Co || Tu && Tu > 8 && Tu <= 11), cf = 32, sh = String.fromCharCode(cf);
    function ch() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Qd = !1;
    function ff(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function df(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function fh(e, t) {
      return e === "keydown" && t.keyCode === Ol;
    }
    function pf(e, t) {
      switch (e) {
        case "keyup":
          return sf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ol;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function dh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Wd(e) {
      return e.locale === "ko";
    }
    var Ll = !1;
    function vf(e, t, a, i, u) {
      var s, f;
      if (Co ? s = df(t) : Ll ? pf(t, i) && (s = "onCompositionEnd") : fh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      oh && !Wd(i) && (!Ll && s === "onCompositionStart" ? Ll = af(u) : s === "onCompositionEnd" && Ll && (f = Ls()));
      var p = gh(a, s);
      if (p.length > 0) {
        var v = new Pd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = dh(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Gd(e, t) {
      switch (e) {
        case "compositionend":
          return dh(t);
        case "keypress":
          var a = t.which;
          return a !== cf ? null : (Qd = !0, sh);
        case "textInput":
          var i = t.data;
          return i === sh && Qd ? null : i;
        default:
          return null;
      }
    }
    function hf(e, t) {
      if (Ll) {
        if (e === "compositionend" || !Co && pf(e, t)) {
          var a = Ls();
          return bl(), Ll = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ff(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return oh && !Wd(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ph(e, t, a, i, u) {
      var s;
      if ($d ? s = Gd(t, i) : s = hf(t, i), !s)
        return null;
      var f = gh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gy(e, t, a, i, u, s, f) {
      vf(e, t, a, i, u), ph(e, t, a, i, u);
    }
    var mf = {
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
    function vh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!mf[e.type] : t === "textarea";
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
    function Fs(e) {
      if (!Wn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sy() {
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function js(e, t, a, i) {
      id(i);
      var u = gh(t, "onChange");
      if (u.length > 0) {
        var s = new Ea("onChange", "change", null, a, i);
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
      js(t, r, e, vc(e)), bv(c, t);
    }
    function c(e) {
      D0(e, 0);
    }
    function d(e) {
      var t = Rf(e);
      if (sl(t))
        return e;
    }
    function m(e, t) {
      if (e === "change")
        return t;
    }
    var E = !1;
    Wn && (E = Fs("input") && (!document.documentMode || document.documentMode > 9));
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
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ge(e, t) {
      if (e === "click")
        return d(t);
    }
    function Ee(e, t) {
      if (e === "input" || e === "change")
        return d(t);
    }
    function bn(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || me(e, "number", e.value);
    }
    function D(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window, v, y;
      if (l(p) ? v = m : vh(p) ? E ? v = Ee : (v = $, y = W) : ce(p) && (v = ge), v) {
        var g = v(t, a);
        if (g) {
          js(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && bn(p);
    }
    function _() {
      kn("onMouseEnter", ["mouseout", "mouseover"]), kn("onMouseLeave", ["mouseout", "mouseover"]), kn("onPointerEnter", ["pointerout", "pointerover"]), kn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function L(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ay(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ps(y) || op(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Ps(U) : null, N !== null) {
            var j = Nr(N);
            (N !== j || N.tag !== le && N.tag !== Te) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var ae = lf, Oe = "onMouseLeave", Re = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Yd, Oe = "onPointerLeave", Re = "onPointerEnter", Tt = "pointer");
          var vt = w == null ? g : Rf(w), k = N == null ? g : Rf(N), H = new ae(Oe, Tt + "leave", w, i, u);
          H.target = vt, H.relatedTarget = k;
          var O = null, G = Ps(u);
          if (G === a) {
            var de = new ae(Re, Tt + "enter", N, i, u);
            de.target = k, de.relatedTarget = vt, O = de;
          }
          kT(e, H, O, w, N);
        }
      }
    }
    function q(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ue = typeof Object.is == "function" ? Object.is : q;
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
        if (!rr.call(t, s) || !ue(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Le(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Pe(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function $n(e, t) {
      for (var a = Le(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Le(Pe(a));
      }
    }
    function bt(e) {
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
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          x = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
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
        var y = $n(e, f), g = $n(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function m0(e) {
      return e && e.nodeType === Vi;
    }
    function y0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : m0(e) ? !1 : m0(t) ? y0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fT(e) {
      return e && e.ownerDocument && y0(e.ownerDocument.documentElement, e);
    }
    function dT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function g0() {
      for (var e = window, t = Fi(); t instanceof e.HTMLIFrameElement; ) {
        if (dT(t))
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
    function pT() {
      var e = g0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? hT(e) : null
      };
    }
    function vT(e) {
      var t = g0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fT(a)) {
        i !== null && Cy(a) && mT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === qr && u.push({
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
    function hT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = bt(e), t || {
        start: 0,
        end: 0
      };
    }
    function mT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Ey(e, t);
    }
    var yT = Wn && "documentMode" in document && document.documentMode <= 11;
    function gT() {
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var yf = null, Ry = null, qd = null, Ty = !1;
    function ST(e) {
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
    function ET(e) {
      return e.window === e ? e.document : e.nodeType === Pi ? e : e.ownerDocument;
    }
    function S0(e, t, a) {
      var i = ET(a);
      if (!(Ty || yf == null || yf !== Fi(i))) {
        var u = ST(yf);
        if (!qd || !De(qd, u)) {
          qd = u;
          var s = gh(Ry, "onSelect");
          if (s.length > 0) {
            var f = new Ea("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = yf;
          }
        }
      }
    }
    function CT(e, t, a, i, u, s, f) {
      var p = a ? Rf(a) : window;
      switch (t) {
        case "focusin":
          (vh(p) || p.contentEditable === "true") && (yf = p, Ry = a, qd = null);
          break;
        case "focusout":
          yf = null, Ry = null, qd = null;
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
          if (yT)
            break;
        case "keydown":
        case "keyup":
          S0(e, i, u);
      }
    }
    function hh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var gf = {
      animationend: hh("Animation", "AnimationEnd"),
      animationiteration: hh("Animation", "AnimationIteration"),
      animationstart: hh("Animation", "AnimationStart"),
      transitionend: hh("Transition", "TransitionEnd")
    }, wy = {}, E0 = {};
    Wn && (E0 = document.createElement("div").style, "AnimationEvent" in window || (delete gf.animationend.animation, delete gf.animationiteration.animation, delete gf.animationstart.animation), "TransitionEvent" in window || delete gf.transitionend.transition);
    function mh(e) {
      if (wy[e])
        return wy[e];
      if (!gf[e])
        return e;
      var t = gf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in E0)
          return wy[e] = t[a];
      return e;
    }
    var C0 = mh("animationend"), R0 = mh("animationiteration"), T0 = mh("animationstart"), w0 = mh("transitionend"), _0 = /* @__PURE__ */ new Map(), x0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ro(e, t) {
      _0.set(e, t), Vt(t, [e]);
    }
    function RT() {
      for (var e = 0; e < x0.length; e++) {
        var t = x0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ro(a, "on" + i);
      }
      Ro(C0, "onAnimationEnd"), Ro(R0, "onAnimationIteration"), Ro(T0, "onAnimationStart"), Ro("dblclick", "onDoubleClick"), Ro("focusin", "onFocus"), Ro("focusout", "onBlur"), Ro(w0, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
      var p = _0.get(t);
      if (p !== void 0) {
        var v = Ea, y = t;
        switch (t) {
          case "keypress":
            if (So(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = vy;
            break;
          case "focusin":
            y = "focus", v = uf;
            break;
          case "focusout":
            y = "blur", v = uf;
            break;
          case "beforeblur":
          case "afterblur":
            v = uf;
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
            v = lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Hd;
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
            v = Vd;
            break;
          case w0:
            v = Id;
            break;
          case "scroll":
            v = nh;
            break;
          case "wheel":
            v = kl;
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
            v = Yd;
            break;
        }
        var g = (s & Jl) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = bT(a, p, i.type, g, x);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    RT(), _(), Sy(), gT(), ch();
    function wT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & ad) === 0;
      p && (L(e, t, a, i, u), D(e, t, a, i, u), CT(e, t, a, i, u), gy(e, t, a, i, u));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function b0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ls(i, t, void 0, e), e.currentTarget = null;
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
          var g = t[y], x = g.instance, w = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          b0(e, N, w), i = x;
        }
    }
    function D0(e, t) {
      for (var a = (t & Jl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        _T(s, f, a);
      }
      Bi();
    }
    function xT(e, t, a, i, u) {
      var s = vc(a), f = [];
      wT(f, e, i, a, s, t), D0(f, t);
    }
    function mn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = n_(t), u = OT(e);
      i.has(u) || (k0(t, e, hi, a), i.add(u));
    }
    function xy(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Jl), k0(a, e, i, t);
    }
    var yh = "_reactListening" + Math.random().toString(36).slice(2);
    function Kd(e) {
      if (!e[yh]) {
        e[yh] = !0, St.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === Pi ? e : e.ownerDocument;
        t !== null && (t[yh] || (t[yh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function k0(e, t, a, i, u) {
      var s = ga(e, t, a), f = void 0;
      is && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? yo(e, t, s, f) : jd(e, t, s) : f !== void 0 ? Wi(e, t, s, f) : aa(e, t, s);
    }
    function O0(e, t) {
      return e === t || e.nodeType === Nn && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & rd) && !(t & hi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === J || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (O0(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === J || x === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (O0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Ps(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === le || U === Te) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      bv(function() {
        return xT(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function bT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, w = x.stateNode, N = x.tag;
        if (N === le && w !== null && (g = w, p !== null)) {
          var U = tu(y, p);
          U != null && v.push(Zd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function gh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, y = tu(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var g = tu(u, t);
          g != null && i.push(Zd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function DT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Sf(s))
        u++;
      for (var f = 0, p = i; p; p = Sf(p))
        f++;
      for (; u - f > 0; )
        a = Sf(a), u--;
      for (; f - u > 0; )
        i = Sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Sf(a), i = Sf(i);
      }
      return null;
    }
    function L0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === le && g !== null) {
          var w = g;
          if (u) {
            var N = tu(p, s);
            N != null && f.unshift(Zd(p, N, w));
          } else if (!u) {
            var U = tu(p, s);
            U != null && f.push(Zd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function kT(e, t, a, i, u) {
      var s = i && u ? DT(i, u) : null;
      i !== null && L0(e, t, i, s, !1), u !== null && a !== null && L0(e, a, u, s, !0);
    }
    function OT(e, t) {
      return e + "__bubble";
    }
    var Ha = !1, Jd = "dangerouslySetInnerHTML", Sh = "suppressContentEditableWarning", To = "suppressHydrationWarning", M0 = "autoFocus", Hs = "children", Vs = "style", Eh = "__html", Dy, Ch, ep, N0, Rh, z0, U0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Ch = function(e, t) {
      Cv(e, t), Xu(e, t), xv(e, t, {
        registrationNameDependencies: Qe,
        possibleRegistrationNames: mt
      });
    }, z0 = Wn && !document.documentMode, ep = function(e, t, a) {
      if (!Ha) {
        var i = Th(a), u = Th(t);
        u !== i && (Ha = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, N0 = function(e) {
      if (!Ha) {
        Ha = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Rh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, U0 = function(e, t) {
      var a = e.namespaceURI === Xa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var LT = /\r\n?/g, MT = /\u0000|\uFFFD/g;
    function Th(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(LT, `
`).replace(MT, "");
    }
    function wh(e, t, a, i) {
      var u = Th(t), s = Th(e);
      if (s !== u && (i && (Ha || (Ha = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Y))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function A0(e) {
      return e.nodeType === Pi ? e : e.ownerDocument;
    }
    function NT() {
    }
    function _h(e) {
      e.onclick = NT;
    }
    function zT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), mv(t, f);
          else if (s === Jd) {
            var p = f ? f[Eh] : void 0;
            p != null && av(t, p);
          } else if (s === Hs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && fl(t, f);
            } else typeof f == "number" && fl(t, "" + f);
          else s === Sh || s === To || s === M0 || (Qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && Rh(s, f), s === "onScroll" && mn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function UT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? mv(e, f) : s === Jd ? av(e, f) : s === Hs ? fl(e, f) : pa(e, s, f, i);
      }
    }
    function AT(e, t, a, i) {
      var u, s = A0(a), f, p = i;
      if (p === Xa && (p = Kf(e)), p === Xa) {
        if (u = dl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Xa && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function FT(e, t) {
      return A0(t).createTextNode(e);
    }
    function jT(e, t, a, i) {
      var u = dl(t, a);
      Ch(t, a);
      var s;
      switch (t) {
        case "dialog":
          mn("cancel", e), mn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Xd.length; f++)
            mn(Xd[f], e);
          s = a;
          break;
        case "source":
          mn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e), s = a;
          break;
        case "details":
          mn("toggle", e), s = a;
          break;
        case "input":
          Yu(e, a), s = La(e, a), mn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          Wo(e, a), s = Zl(e, a), mn("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = oc(e, a), mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (dc(t, s), zT(t, e, i, s, u), t) {
        case "input":
          Oa(e), M(e, a, !1);
          break;
        case "textarea":
          Oa(e), rv(e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          Gf(e, a);
          break;
        default:
          typeof s.onClick == "function" && _h(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      Ch(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = La(e, a), p = La(e, i), s = [];
          break;
        case "select":
          f = Zl(e, a), p = Zl(e, i), s = [];
          break;
        case "textarea":
          f = oc(e, a), p = oc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && _h(e);
          break;
      }
      dc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Jd || v === Hs || v === Sh || v === To || v === M0 || (Qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Vs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Jd) {
            var U = w ? w[Eh] : void 0, j = N ? N[Eh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Hs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === Sh || v === To || (Qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && Rh(v, w), v === "onScroll" && mn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Ka(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function VT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = dl(a, i), f = dl(a, u);
      switch (UT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          uc(e, u);
          break;
      }
    }
    function PT(e) {
      {
        var t = e.toLowerCase();
        return Wu.hasOwnProperty(t) && Wu[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = dl(t, a), Ch(t, a), t) {
        case "dialog":
          mn("cancel", e), mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Xd.length; y++)
            mn(Xd[y], e);
          break;
        case "source":
          mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e);
          break;
        case "details":
          mn("toggle", e);
          break;
        case "input":
          Yu(e, a), mn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          Wo(e, a), mn("invalid", e);
          break;
        case "textarea":
          tv(e, a), mn("invalid", e);
          break;
      }
      dc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var w = g[x].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Hs)
            typeof j == "string" ? e.textContent !== j && (a[To] !== !0 && wh(e.textContent, j, s, f), N = [Hs, j]) : typeof j == "number" && e.textContent !== "" + j && (a[To] !== !0 && wh(e.textContent, j, s, f), N = [Hs, "" + j]);
          else if (Qe.hasOwnProperty(U))
            j != null && (typeof j != "function" && Rh(U, j), U === "onScroll" && mn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Oe = tn(U);
            if (a[To] !== !0) {
              if (!(U === Sh || U === To || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Jd) {
                  var Re = e.innerHTML, Tt = j ? j[Eh] : void 0;
                  if (Tt != null) {
                    var vt = U0(e, Tt);
                    vt !== Re && ep(U, Re, vt);
                  }
                } else if (U === Vs) {
                  if (v.delete(U), z0) {
                    var k = ty(j);
                    ae = e.getAttribute("style"), k !== ae && ep(U, ae, k);
                  }
                } else if (p && !B)
                  v.delete(U.toLowerCase()), ae = ui(e, U, j), j !== ae && ep(U, ae, j);
                else if (!ln(U, Oe, p) && !Xn(U, j, Oe, p)) {
                  var H = !1;
                  if (Oe !== null)
                    v.delete(Oe.attributeName), ae = $l(e, U, j, Oe);
                  else {
                    var O = i;
                    if (O === Xa && (O = Kf(t)), O === Xa)
                      v.delete(U.toLowerCase());
                    else {
                      var G = PT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    ae = ui(e, U, j);
                  }
                  var de = B;
                  !de && j !== ae && !H && ep(U, ae, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[To] !== !0 && N0(v), t) {
        case "input":
          Oa(e), M(e, a, !0);
          break;
        case "textarea":
          Oa(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && _h(e);
          break;
      }
      return N;
    }
    function YT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Ha)
          return;
        Ha = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Ha)
          return;
        Ha = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Ha)
          return;
        Ha = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function IT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Gm(e, a);
          return;
        case "select":
          qf(e, a);
          return;
      }
    }
    var tp = function() {
    }, np = function() {
    };
    {
      var $T = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], F0 = [
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
      ], QT = F0.concat(["button"]), WT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], j0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      np = function(e, t) {
        var a = Ge({}, e || j0), i = {
          tag: t
        };
        return F0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), QT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $T.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var GT = function(e, t) {
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
            return WT.indexOf(t) === -1;
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
      }, qT = function(e, t) {
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
      tp = function(e, t, a) {
        a = a || j0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = GT(e, u) ? null : i, f = s ? null : qT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!H0[y]) {
            H0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var xh = "suppressHydrationWarning", bh = "$", Dh = "/$", rp = "$?", ap = "$!", XT = "style", Ny = null, zy = null;
    function KT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pi:
        case Go: {
          t = i === Pi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : sc(null, "");
          break;
        }
        default: {
          var s = i === Nn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = sc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = np(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function ZT(e, t, a) {
      {
        var i = e, u = sc(i.namespace, t), s = np(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function dD(e) {
      return e;
    }
    function JT(e) {
      Ny = cr(), zy = pT();
      var t = null;
      return xn(!1), t;
    }
    function ew(e) {
      vT(zy), xn(Ny), Ny = null, zy = null;
    }
    function tw(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (tp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = np(f.ancestorInfo, e);
          tp(null, p, v);
        }
        s = f.namespace;
      }
      var y = AT(e, t, a, s);
      return up(u, y), By(y, t), y;
    }
    function nw(e, t) {
      e.appendChild(t);
    }
    function rw(e, t, a, i, u) {
      switch (jT(e, t, a, i), t) {
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
    function aw(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = np(f.ancestorInfo, t);
          tp(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iw(e, t, a, i) {
      {
        var u = a;
        tp(null, e, u.ancestorInfo);
      }
      var s = FT(e, t);
      return up(i, s), s;
    }
    function lw() {
      var e = window.event;
      return e === void 0 ? or : mo(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, uw = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, V0 = typeof Promise == "function" ? Promise : void 0, ow = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
      return V0.resolve(null).then(e).catch(sw);
    } : Ay;
    function sw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cw(e, t, a, i) {
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
    function fw(e, t, a, i, u, s) {
      VT(e, t, a, i, u), By(e, u);
    }
    function P0(e) {
      fl(e, "");
    }
    function dw(e, t, a) {
      e.nodeValue = a;
    }
    function pw(e, t) {
      e.appendChild(t);
    }
    function vw(e, t) {
      var a;
      e.nodeType === Nn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && _h(a);
    }
    function hw(e, t, a) {
      e.insertBefore(t, a);
    }
    function mw(e, t, a) {
      e.nodeType === Nn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yw(e, t) {
      e.removeChild(t);
    }
    function gw(e, t) {
      e.nodeType === Nn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Nn) {
          var s = u.data;
          if (s === Dh)
            if (i === 0) {
              e.removeChild(u), br(t);
              return;
            } else
              i--;
          else (s === bh || s === rp || s === ap) && i++;
        }
        a = u;
      } while (a);
      br(t);
    }
    function Sw(e, t) {
      e.nodeType === Nn ? jy(e.parentNode, t) : e.nodeType === qr && jy(e, t), br(e);
    }
    function Ew(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Cw(e) {
      e.nodeValue = "";
    }
    function Rw(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = fc("display", i);
    }
    function Tw(e, t) {
      e.nodeValue = t;
    }
    function ww(e) {
      e.nodeType === qr ? e.textContent = "" : e.nodeType === Pi && e.documentElement && e.removeChild(e.documentElement);
    }
    function _w(e, t, a) {
      return e.nodeType !== qr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xw(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function bw(e) {
      return e.nodeType !== Nn ? null : e;
    }
    function B0(e) {
      return e.data === rp;
    }
    function Hy(e) {
      return e.data === ap;
    }
    function Dw(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function kw(e, t) {
      e._reactRetry = t;
    }
    function kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === qr || t === Vi)
          break;
        if (t === Nn) {
          var a = e.data;
          if (a === bh || a === ap || a === rp)
            break;
          if (a === Dh)
            return null;
        }
      }
      return e;
    }
    function ip(e) {
      return kh(e.nextSibling);
    }
    function Ow(e) {
      return kh(e.firstChild);
    }
    function Lw(e) {
      return kh(e.firstChild);
    }
    function Mw(e) {
      return kh(e.nextSibling);
    }
    function Nw(e, t, a, i, u, s, f) {
      up(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & lt) !== _e;
      return BT(e, t, a, p, i, y, f);
    }
    function zw(e, t, a, i) {
      return up(a, e), a.mode & lt, YT(e, t);
    }
    function Uw(e, t) {
      up(t, e);
    }
    function Aw(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === Dh) {
            if (a === 0)
              return ip(t);
            a--;
          } else (i === bh || i === ap || i === rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Nn) {
          var i = t.data;
          if (i === bh || i === ap || i === rp) {
            if (a === 0)
              return t;
            a--;
          } else i === Dh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Fw(e) {
      br(e);
    }
    function jw(e) {
      br(e);
    }
    function Hw(e) {
      return e !== "head" && e !== "body";
    }
    function Vw(e, t, a, i) {
      var u = !0;
      wh(t.nodeValue, a, i, u);
    }
    function Pw(e, t, a, i, u, s) {
      if (t[xh] !== !0) {
        var f = !0;
        wh(i.nodeValue, u, s, f);
      }
    }
    function Bw(e, t) {
      t.nodeType === qr ? ky(e, t) : t.nodeType === Nn || Oy(e, t);
    }
    function Yw(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === qr ? ky(a, t) : t.nodeType === Nn || Oy(a, t));
      }
    }
    function Iw(e, t, a, i, u) {
      (u || t[xh] !== !0) && (i.nodeType === qr ? ky(a, i) : i.nodeType === Nn || Oy(a, i));
    }
    function $w(e, t, a) {
      Ly(e, t);
    }
    function Qw(e, t) {
      My(e, t);
    }
    function Ww(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function Gw(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function qw(e, t, a, i, u, s) {
      (s || t[xh] !== !0) && Ly(a, i);
    }
    function Xw(e, t, a, i, u) {
      (u || t[xh] !== !0) && My(a, i);
    }
    function Kw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Zw(e) {
      Kd(e);
    }
    var Ef = Math.random().toString(36).slice(2), Cf = "__reactFiber$" + Ef, Vy = "__reactProps$" + Ef, lp = "__reactContainer$" + Ef, Py = "__reactEvents$" + Ef, Jw = "__reactListeners$" + Ef, e_ = "__reactHandles$" + Ef;
    function t_(e) {
      delete e[Cf], delete e[Vy], delete e[Py], delete e[Jw], delete e[e_];
    }
    function up(e, t) {
      t[Cf] = e;
    }
    function Oh(e, t) {
      t[lp] = e;
    }
    function I0(e) {
      e[lp] = null;
    }
    function op(e) {
      return !!e[lp];
    }
    function Ps(e) {
      var t = e[Cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lp] || a[Cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[Cf];
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
    function wo(e) {
      var t = e[Cf] || e[lp];
      return t && (t.tag === le || t.tag === Te || t.tag === Ce || t.tag === J) ? t : null;
    }
    function Rf(e) {
      if (e.tag === le || e.tag === Te)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Lh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function n_(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var $0 = {}, Q0 = wt.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = Bo(e.type, e._source, t ? t.type : null);
        Q0.setExtraStackFrame(a);
      } else
        Q0.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
      {
        var s = Function.call.bind(rr);
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
    var Yy = [], Nh;
    Nh = [];
    var wu = -1;
    function _o(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (wu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Nh[wu] && S("Unexpected Fiber popped."), e.current = Yy[wu], Yy[wu] = null, Nh[wu] = null, wu--;
    }
    function la(e, t, a) {
      wu++, Yy[wu] = e.current, Nh[wu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ai = {};
    Object.freeze(ai);
    var _u = _o(ai), Nl = _o(!1), $y = ai;
    function Tf(e, t, a) {
      return a && zl(t) ? $y : _u.current;
    }
    function W0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function wf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ve(e) || "Unknown";
          Gi(i, s, "context", p);
        }
        return u && W0(e, t, s), s;
      }
    }
    function zh() {
      return Nl.current;
    }
    function zl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Uh(e) {
      ia(Nl, e), ia(_u, e);
    }
    function Qy(e) {
      ia(Nl, e), ia(_u, e);
    }
    function G0(e, t, a) {
      {
        if (_u.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(_u, t, e), la(Nl, a, e);
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
          Gi(u, f, "child context", v);
        }
        return Ge({}, a, f);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return $y = _u.current, la(_u, a, e), la(Nl, Nl.current, e), !0;
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = q0(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Nl, e), ia(_u, e), la(_u, u, e), la(Nl, a, e);
        } else
          ia(Nl, e), la(Nl, a, e);
      }
    }
    function r_(e) {
      {
        if (!Lv(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case J:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (zl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var xo = 0, Fh = 1, xu = null, Wy = !1, Gy = !1;
    function K0(e) {
      xu === null ? xu = [e] : xu.push(e);
    }
    function a_(e) {
      Wy = !0, K0(e);
    }
    function Z0() {
      Wy && bo();
    }
    function bo() {
      if (!Gy && xu !== null) {
        Gy = !0;
        var e = 0, t = ya();
        try {
          var a = !0, i = xu;
          for (Yn(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          xu = null, Wy = !1;
        } catch (s) {
          throw xu !== null && (xu = xu.slice(e + 1)), dd(Ii, bo), s;
        } finally {
          Yn(t), Gy = !1;
        }
      }
      return null;
    }
    var _f = [], xf = 0, jh = null, Hh = 0, Ri = [], Ti = 0, Bs = null, bu = 1, Du = "";
    function i_(e) {
      return Is(), (e.flags & os) !== we;
    }
    function l_(e) {
      return Is(), Hh;
    }
    function u_() {
      var e = Du, t = bu, a = t & ~o_(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), _f[xf++] = Hh, _f[xf++] = jh, jh = e, Hh = t;
    }
    function J0(e, t, a) {
      Is(), Ri[Ti++] = bu, Ri[Ti++] = Du, Ri[Ti++] = Bs, Bs = e;
      var i = bu, u = Du, s = Vh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Vh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), w = f >> y, N = s - y, U = Vh(t) + N, j = p << N, ae = j | w, Oe = x + u;
        bu = 1 << U | ae, Du = Oe;
      } else {
        var Re = p << s, Tt = Re | f, vt = u;
        bu = 1 << v | Tt, Du = vt;
      }
    }
    function qy(e) {
      Is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), J0(e, a, i);
      }
    }
    function Vh(e) {
      return 32 - Bn(e);
    }
    function o_(e) {
      return 1 << Vh(e) - 1;
    }
    function Xy(e) {
      for (; e === jh; )
        jh = _f[--xf], _f[xf] = null, Hh = _f[--xf], _f[xf] = null;
      for (; e === Bs; )
        Bs = Ri[--Ti], Ri[Ti] = null, Du = Ri[--Ti], Ri[Ti] = null, bu = Ri[--Ti], Ri[Ti] = null;
    }
    function s_() {
      return Is(), Bs !== null ? {
        id: bu,
        overflow: Du
      } : null;
    }
    function c_(e, t) {
      Is(), Ri[Ti++] = bu, Ri[Ti++] = Du, Ri[Ti++] = Bs, bu = t.id, Du = t.overflow, Bs = e;
    }
    function Is() {
      Ar() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ur = null, wi = null, qi = !1, $s = !1, Do = null;
    function f_() {
      qi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eE() {
      $s = !0;
    }
    function d_() {
      return $s;
    }
    function p_(e) {
      var t = e.stateNode.containerInfo;
      return wi = Lw(t), Ur = e, qi = !0, Do = null, $s = !1, !0;
    }
    function v_(e, t, a) {
      return wi = Mw(t), Ur = e, qi = !0, Do = null, $s = !1, a !== null && c_(e, a), !0;
    }
    function tE(e, t) {
      switch (e.tag) {
        case J: {
          Bw(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & lt) !== _e;
          Iw(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && Yw(i.dehydrated, t);
          break;
        }
      }
    }
    function nE(e, t) {
      tE(e, t);
      var a = gb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Ky(e, t) {
      {
        if ($s)
          return;
        switch (e.tag) {
          case J: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, $w(a, i);
                break;
              case Te:
                var u = t.pendingProps;
                Qw(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & lt) !== _e;
                qw(
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
              case Te: {
                var x = t.pendingProps, w = (e.mode & lt) !== _e;
                Xw(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case le:
                var j = t.type;
                t.pendingProps, Ww(U, j);
                break;
              case Te:
                var ae = t.pendingProps;
                Gw(U, ae);
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
      t.flags = t.flags & ~Sn | gn, Ky(e, t);
    }
    function aE(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = _w(t, a);
          return i !== null ? (e.stateNode = i, Ur = e, wi = Ow(i), !0) : !1;
        }
        case Te: {
          var u = e.pendingProps, s = xw(t, u);
          return s !== null ? (e.stateNode = s, Ur = e, wi = null, !0) : !1;
        }
        case Ce: {
          var f = bw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: s_(),
              retryLane: ea
            };
            e.memoizedState = p;
            var v = Sb(f);
            return v.return = e, e.child = v, Ur = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & lt) !== _e && (e.flags & rt) === we;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (qi) {
        var t = wi;
        if (!t) {
          Zy(e) && (Ky(Ur, e), Jy()), rE(Ur, e), qi = !1, Ur = e;
          return;
        }
        var a = t;
        if (!aE(e, t)) {
          Zy(e) && (Ky(Ur, e), Jy()), t = ip(a);
          var i = Ur;
          if (!t || !aE(e, t)) {
            rE(Ur, e), qi = !1, Ur = e;
            return;
          }
          nE(i, a);
        }
      }
    }
    function h_(e, t, a) {
      var i = e.stateNode, u = !$s, s = Nw(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function m_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zw(t, a, e);
      if (i) {
        var u = Ur;
        if (u !== null)
          switch (u.tag) {
            case J: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== _e;
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
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & lt) !== _e;
              Pw(
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
    function y_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Uw(a, e);
    }
    function g_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Aw(a);
    }
    function iE(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== J && t.tag !== Ce; )
        t = t.return;
      Ur = t;
    }
    function Ph(e) {
      if (e !== Ur)
        return !1;
      if (!qi)
        return iE(e), qi = !0, !1;
      if (e.tag !== J && (e.tag !== le || Hw(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Zy(e))
            lE(e), Jy();
          else
            for (; t; )
              nE(e, t), t = ip(t);
      }
      return iE(e), e.tag === Ce ? wi = g_(e) : wi = Ur ? ip(e.stateNode) : null, !0;
    }
    function S_() {
      return qi && wi !== null;
    }
    function lE(e) {
      for (var t = wi; t; )
        tE(e, t), t = ip(t);
    }
    function bf() {
      Ur = null, wi = null, qi = !1, $s = !1;
    }
    function uE() {
      Do !== null && (eR(Do), Do = null);
    }
    function Ar() {
      return qi;
    }
    function tg(e) {
      Do === null ? Do = [e] : Do.push(e);
    }
    var E_ = wt.ReactCurrentBatchConfig, C_ = null;
    function R_() {
      return E_.transition;
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
      var T_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qe && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Ws = /* @__PURE__ */ new Set();
      Xi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ws.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillMount == "function" && cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillReceiveProps == "function" && dp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillUpdate == "function" && vp.push(e));
      }, Xi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(w) {
          e.add(Ve(w) || "Component"), Ws.add(w.type);
        }), sp = []);
        var t = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          t.add(Ve(w) || "Component"), Ws.add(w.type);
        }), cp = []);
        var a = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          a.add(Ve(w) || "Component"), Ws.add(w.type);
        }), fp = []);
        var i = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          i.add(Ve(w) || "Component"), Ws.add(w.type);
        }), dp = []);
        var u = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          u.add(Ve(w) || "Component"), Ws.add(w.type);
        }), pp = []);
        var s = /* @__PURE__ */ new Set();
        if (vp.length > 0 && (vp.forEach(function(w) {
          s.add(Ve(w) || "Component"), Ws.add(w.type);
        }), vp = []), t.size > 0) {
          var f = Qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Qs(e);
          _t(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Qs(a);
          _t(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Qs(u);
          _t(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Bh = /* @__PURE__ */ new Map(), oE = /* @__PURE__ */ new Set();
      Xi.recordLegacyContextWarning = function(e, t) {
        var a = T_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oE.has(e.type)) {
          var i = Bh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Bh.set(a, i)), i.push(e));
        }
      }, Xi.flushLegacyContextWarning = function() {
        Bh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ve(s) || "Component"), oE.add(s.type);
            });
            var u = Qs(i);
            try {
              Qt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              yn();
            }
          }
        });
      }, Xi.discardPendingWarnings = function() {
        sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Bh = /* @__PURE__ */ new Map();
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
    function w_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qe || be) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !w_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ve(e) || "Component";
          ag[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ag[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Qa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var w = v.refs;
            x === null ? delete w[y] : w[y] = x;
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
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
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
        var O = nc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= os, H;
        var G = k.alternate;
        if (G !== null) {
          var de = G.index;
          return de < H ? (k.flags |= gn, H) : de;
        } else
          return k.flags |= gn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= gn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== Te) {
          var de = t0(O, k.mode, G);
          return de.return = k, de;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, G) {
        var de = O.type;
        if (de === $r)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === de || // Keep this check inline so it only runs on the false path:
        mR(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Ie && cE(de) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = hp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Ae = e0(O, k.mode, G);
        return Ae.ref = hp(k, H, O), Ae.return = k, Ae;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var de = n0(O, k.mode, G);
          return de.return = k, de;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, G, de) {
        if (H === null || H.tag !== ut) {
          var oe = Ho(O, k.mode, G, de);
          return oe.return = k, oe;
        } else {
          var Ae = u(H, O);
          return Ae.return = k, Ae;
        }
      }
      function x(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = t0("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ir: {
              var de = e0(H, k.mode, O);
              return de.ref = hp(k, null, H), de.return = k, de;
            }
            case va: {
              var oe = n0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case Ie: {
              var Ae = H._payload, We = H._init;
              return x(k, We(Ae), O);
            }
          }
          if (Xe(H) || dn(H)) {
            var Kt = Ho(H, k.mode, O, null);
            return Kt.return = k, Kt;
          }
          Yh(k, H);
        }
        return typeof H == "function" && Ih(k), null;
      }
      function w(k, H, O, G) {
        var de = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return O.key === de ? v(k, H, O, G) : null;
            case va:
              return O.key === de ? y(k, H, O, G) : null;
            case Ie: {
              var oe = O._payload, Ae = O._init;
              return w(k, H, Ae(oe), G);
            }
          }
          if (Xe(O) || dn(O))
            return de !== null ? null : g(k, H, O, G, null);
          Yh(k, O);
        }
        return typeof O == "function" && Ih(k), null;
      }
      function N(k, H, O, G, de) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + G, de);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ir: {
              var Ae = k.get(G.key === null ? O : G.key) || null;
              return v(H, Ae, G, de);
            }
            case va: {
              var We = k.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, de);
            }
            case Ie:
              var Kt = G._payload, Dt = G._init;
              return N(k, H, O, Dt(Kt), de);
          }
          if (Xe(G) || dn(G)) {
            var Qn = k.get(O) || null;
            return g(H, Qn, G, de, null);
          }
          Yh(H, G);
        }
        return typeof G == "function" && Ih(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case ir:
            case va:
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
              var de = k._payload, oe = k._init;
              U(oe(de), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var de = null, oe = 0; oe < O.length; oe++) {
          var Ae = O[oe];
          de = U(Ae, de, k);
        }
        for (var We = null, Kt = null, Dt = H, Qn = 0, kt = 0, jn = null; Dt !== null && kt < O.length; kt++) {
          Dt.index > kt ? (jn = Dt, Dt = null) : jn = Dt.sibling;
          var oa = w(k, Dt, O[kt], G);
          if (oa === null) {
            Dt === null && (Dt = jn);
            break;
          }
          e && Dt && oa.alternate === null && t(k, Dt), Qn = s(oa, Qn, kt), Kt === null ? We = oa : Kt.sibling = oa, Kt = oa, Dt = jn;
        }
        if (kt === O.length) {
          if (a(k, Dt), Ar()) {
            var Yr = kt;
            Ys(k, Yr);
          }
          return We;
        }
        if (Dt === null) {
          for (; kt < O.length; kt++) {
            var li = x(k, O[kt], G);
            li !== null && (Qn = s(li, Qn, kt), Kt === null ? We = li : Kt.sibling = li, Kt = li);
          }
          if (Ar()) {
            var wa = kt;
            Ys(k, wa);
          }
          return We;
        }
        for (var _a = i(k, Dt); kt < O.length; kt++) {
          var sa = N(_a, k, kt, O[kt], G);
          sa !== null && (e && sa.alternate !== null && _a.delete(sa.key === null ? kt : sa.key), Qn = s(sa, Qn, kt), Kt === null ? We = sa : Kt.sibling = sa, Kt = sa);
        }
        if (e && _a.forEach(function(Qf) {
          return t(k, Qf);
        }), Ar()) {
          var Uu = kt;
          Ys(k, Uu);
        }
        return We;
      }
      function ae(k, H, O, G) {
        var de = dn(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), rg = !0), O.entries === de && (ng || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ng = !0);
          var oe = de.call(O);
          if (oe)
            for (var Ae = null, We = oe.next(); !We.done; We = oe.next()) {
              var Kt = We.value;
              Ae = U(Kt, Ae, k);
            }
        }
        var Dt = de.call(O);
        if (Dt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, kt = null, jn = H, oa = 0, Yr = 0, li = null, wa = Dt.next(); jn !== null && !wa.done; Yr++, wa = Dt.next()) {
          jn.index > Yr ? (li = jn, jn = null) : li = jn.sibling;
          var _a = w(k, jn, wa.value, G);
          if (_a === null) {
            jn === null && (jn = li);
            break;
          }
          e && jn && _a.alternate === null && t(k, jn), oa = s(_a, oa, Yr), kt === null ? Qn = _a : kt.sibling = _a, kt = _a, jn = li;
        }
        if (wa.done) {
          if (a(k, jn), Ar()) {
            var sa = Yr;
            Ys(k, sa);
          }
          return Qn;
        }
        if (jn === null) {
          for (; !wa.done; Yr++, wa = Dt.next()) {
            var Uu = x(k, wa.value, G);
            Uu !== null && (oa = s(Uu, oa, Yr), kt === null ? Qn = Uu : kt.sibling = Uu, kt = Uu);
          }
          if (Ar()) {
            var Qf = Yr;
            Ys(k, Qf);
          }
          return Qn;
        }
        for (var Wp = i(k, jn); !wa.done; Yr++, wa = Dt.next()) {
          var Bl = N(Wp, k, Yr, wa.value, G);
          Bl !== null && (e && Bl.alternate !== null && Wp.delete(Bl.key === null ? Yr : Bl.key), oa = s(Bl, oa, Yr), kt === null ? Qn = Bl : kt.sibling = Bl, kt = Bl);
        }
        if (e && Wp.forEach(function(Xb) {
          return t(k, Xb);
        }), Ar()) {
          var qb = Yr;
          Ys(k, qb);
        }
        return Qn;
      }
      function Oe(k, H, O, G) {
        if (H !== null && H.tag === Te) {
          a(k, H.sibling);
          var de = u(H, O);
          return de.return = k, de;
        }
        a(k, H);
        var oe = t0(O, k.mode, G);
        return oe.return = k, oe;
      }
      function Re(k, H, O, G) {
        for (var de = O.key, oe = H; oe !== null; ) {
          if (oe.key === de) {
            var Ae = O.type;
            if (Ae === $r) {
              if (oe.tag === ut) {
                a(k, oe.sibling);
                var We = u(oe, O.props.children);
                return We.return = k, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (oe.elementType === Ae || // Keep this check inline so it only runs on the false path:
            mR(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ie && cE(Ae) === oe.type) {
              a(k, oe.sibling);
              var Kt = u(oe, O.props);
              return Kt.ref = hp(k, oe, O), Kt.return = k, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === $r) {
          var Dt = Ho(O.props.children, k.mode, G, O.key);
          return Dt.return = k, Dt;
        } else {
          var Qn = e0(O, k.mode, G);
          return Qn.ref = hp(k, H, O), Qn.return = k, Qn;
        }
      }
      function Tt(k, H, O, G) {
        for (var de = O.key, oe = H; oe !== null; ) {
          if (oe.key === de)
            if (oe.tag === Fe && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Ae = u(oe, O.children || []);
              return Ae.return = k, Ae;
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
      function vt(k, H, O, G) {
        var de = typeof O == "object" && O !== null && O.type === $r && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return f(Re(k, H, O, G));
            case va:
              return f(Tt(k, H, O, G));
            case Ie:
              var oe = O._payload, Ae = O._init;
              return vt(k, H, Ae(oe), G);
          }
          if (Xe(O))
            return j(k, H, O, G);
          if (dn(O))
            return ae(k, H, O, G);
          Yh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Oe(k, H, "" + O, G)) : (typeof O == "function" && Ih(k), a(k, H));
      }
      return vt;
    }
    var Df = fE(!0), dE = fE(!1);
    function __(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = nc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = nc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function x_(e, t) {
      for (var a = e.child; a !== null; )
        pb(a, t), a = a.sibling;
    }
    var ug = _o(null), og;
    og = {};
    var $h = null, kf = null, sg = null, Qh = !1;
    function Wh() {
      $h = null, kf = null, sg = null, Qh = !1;
    }
    function pE() {
      Qh = !0;
    }
    function vE() {
      Qh = !1;
    }
    function hE(e, t, a) {
      la(ug, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== og && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = og;
    }
    function cg(e, t) {
      var a = ug.current;
      ia(ug, t), e._currentValue = a;
    }
    function fg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (pu(i.childLanes, t) ? u !== null && !pu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function b_(e, t, a) {
      D_(e, t, a);
    }
    function D_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = er(a), v = ku(Yt, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ke(w.lanes, a)), fg(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === at)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === fn) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ke(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), fg(N, a, e), u = i.sibling;
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
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Of(e, t) {
      $h = e, kf = null, sg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Op(), a.firstContext = null);
      }
    }
    function nr(e) {
      Qh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (sg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (kf === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          kf = a, $h.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          kf = kf.next = a;
      }
      return t;
    }
    var Gs = null;
    function dg(e) {
      Gs === null ? Gs = [e] : Gs.push(e);
    }
    function k_() {
      if (Gs !== null) {
        for (var e = 0; e < Gs.length; e++) {
          var t = Gs[e], a = t.interleaved;
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
        Gs = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function O_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function L_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, dg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Gh(e, i);
    }
    function Va(e, t) {
      return Gh(e, t);
    }
    var M_ = Gh;
    function Gh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (gn | Sn)) !== we && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (gn | Sn)) !== we && dR(e), i = u, u = u.return;
      if (i.tag === J) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, qh = 2, pg = 3, Xh = !1, vg, Kh;
    vg = !1, Kh = null;
    function hg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
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
    function ku(e, t) {
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
    function ko(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Kh === u && !vg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), vg = !0), O1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, M_(e, a);
      } else
        return L_(e, u, t, a);
    }
    function Zh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (kd(a)) {
          var s = u.lanes;
          s = Gc(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, ws(e, f);
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
    function N_(e, t, a, i, u, s) {
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
          e.flags = e.flags & ~wr | rt;
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
        case qh:
          return Xh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var u = e.updateQueue;
      Xh = !1, Kh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, w = x.lastBaseUpdate;
          w !== f && (w === null ? x.firstBaseUpdate = y : w.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = V, j = null, ae = null, Oe = null, Re = s;
        do {
          var Tt = Re.lane, vt = Re.eventTime;
          if (pu(i, Tt)) {
            if (Oe !== null) {
              var H = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: Re.tag,
                payload: Re.payload,
                callback: Re.callback,
                next: null
              };
              Oe = Oe.next = H;
            }
            N = N_(e, u, Re, N, t, a);
            var O = Re.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Re.lane !== An) {
              e.flags |= Jt;
              var G = u.effects;
              G === null ? u.effects = [Re] : G.push(Re);
            }
          } else {
            var k = {
              eventTime: vt,
              lane: Tt,
              tag: Re.tag,
              payload: Re.payload,
              callback: Re.callback,
              next: null
            };
            Oe === null ? (ae = Oe = k, j = N) : Oe = Oe.next = k, U = Ke(U, Tt);
          }
          if (Re = Re.next, Re === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, oe = de.next;
            de.next = null, Re = oe, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Oe === null && (j = N), u.baseState = j, u.firstBaseUpdate = ae, u.lastBaseUpdate = Oe;
        var Ae = u.shared.interleaved;
        if (Ae !== null) {
          var We = Ae;
          do
            U = Ke(U, We.lane), We = We.next;
          while (We !== Ae);
        } else s === null && (u.shared.lanes = V);
        Bp(U), e.lanes = U, e.memoizedState = N;
      }
      Kh = null;
    }
    function z_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Xh = !1;
    }
    function em() {
      return Xh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, z_(f, a));
        }
    }
    var mp = {}, Oo = _o(mp), yp = _o(mp), tm = _o(mp);
    function nm(e) {
      if (e === mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RE() {
      var e = nm(tm.current);
      return e;
    }
    function yg(e, t) {
      la(tm, t, e), la(yp, e, e), la(Oo, mp, e);
      var a = KT(t);
      ia(Oo, e), la(Oo, a, e);
    }
    function Lf(e) {
      ia(Oo, e), ia(yp, e), ia(tm, e);
    }
    function gg() {
      var e = nm(Oo.current);
      return e;
    }
    function TE(e) {
      nm(tm.current);
      var t = nm(Oo.current), a = ZT(t, e.type);
      t !== a && (la(yp, e, e), la(Oo, a, e));
    }
    function Sg(e) {
      yp.current === e && (ia(Oo, e), ia(yp, e));
    }
    var U_ = 0, wE = 1, _E = 1, gp = 2, Ki = _o(U_);
    function Eg(e, t) {
      return (e & t) !== 0;
    }
    function Mf(e) {
      return e & wE;
    }
    function Cg(e, t) {
      return e & wE | t;
    }
    function A_(e, t) {
      return e | t;
    }
    function Lo(e, t) {
      la(Ki, t, e);
    }
    function Nf(e) {
      ia(Ki, e);
    }
    function F_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function rm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || B0(i) || Hy(i))
              return t;
          }
        } else if (t.tag === It && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & rt) !== we;
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
    var Pa = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Ul = (
      /*  */
      2
    ), dr = (
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
    function j_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = wt.ReactCurrentDispatcher, Sp = wt.ReactCurrentBatchConfig, wg, zf;
    wg = /* @__PURE__ */ new Set();
    var qs = V, Xt = null, pr = null, vr = null, am = !1, Ep = !1, Cp = 0, H_ = 0, V_ = 25, P = null, _i = null, Mo = -1, _g = !1;
    function Ht() {
      {
        var e = P;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ee() {
      {
        var e = P;
        _i !== null && (Mo++, _i[Mo] !== e && P_(e));
      }
    }
    function Uf(e) {
      e != null && !Xe(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function P_(e) {
      {
        var t = Ve(Xt);
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
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function xg(e, t) {
      if (_g)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ue(e[a], t[a]))
          return !1;
      return !0;
    }
    function Af(e, t, a, i, u, s) {
      qs = s, Xt = t, _i = e !== null ? e._debugHookTypes : null, Mo = -1, _g = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? fe.current = WE : _i !== null ? fe.current = QE : fe.current = $E;
      var f = a(i, u);
      if (Ep) {
        var p = 0;
        do {
          if (Ep = !1, Cp = 0, p >= V_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, _g = !1, pr = null, vr = null, t.updateQueue = null, Mo = -1, fe.current = GE, f = a(i, u);
        } while (Ep);
      }
      fe.current = ym, t._debugHookTypes = _i;
      var v = pr !== null && pr.next !== null;
      if (qs = V, Xt = null, pr = null, vr = null, P = null, _i = null, Mo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== _e && S("Internal React error: Expected static flag was missing. Please notify the React team."), am = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Ff() {
      var e = Cp !== 0;
      return Cp = 0, e;
    }
    function xE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== _e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ts(e.lanes, a);
    }
    function bE() {
      if (fe.current = ym, am) {
        for (var e = Xt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        am = !1;
      }
      qs = V, Xt = null, pr = null, vr = null, _i = null, Mo = -1, P = null, VE = !1, Ep = !1, Cp = 0;
    }
    function Al() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Xt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function xi() {
      var e;
      if (pr === null) {
        var t = Xt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Xt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Xt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
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
      var i = Al(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = $_.bind(null, Xt, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var ae = j.lane;
          if (pu(qs, ae)) {
            if (U !== null) {
              var Re = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = Re;
            }
            if (j.hasEagerState)
              x = j.eagerState;
            else {
              var Tt = j.action;
              x = e(x, Tt);
            }
          } else {
            var Oe = {
              lane: ae,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Oe, w = x) : U = U.next = Oe, Xt.lanes = Ke(Xt.lanes, ae), Bp(ae);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = x : U.next = N, ue(x, i.memoizedState) || Op(), i.memoizedState = x, i.baseState = w, i.baseQueue = U, u.lastRenderedState = x;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var k = vt;
        do {
          var H = k.lane;
          Xt.lanes = Ke(Xt.lanes, H), Bp(H), k = k.next;
        } while (k !== vt);
      } else f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = xi(), u = i.queue;
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
        ue(p, i.memoizedState) || Op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function pD(e, t, a) {
    }
    function vD(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Xt, u = Al(), s, f = Ar();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), zf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), zf = !0);
      } else {
        if (s = t(), !zf) {
          var p = t();
          ue(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
        }
        var v = Am();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(v, qs) || kE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, sm(LE.bind(null, i, y, e), [e]), i.flags |= ha, Rp(fr | Fr, OE.bind(null, i, y, s, t), void 0, null), s;
    }
    function im(e, t, a) {
      var i = Xt, u = xi(), s = t();
      if (!zf) {
        var f = t();
        ue(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), zf = !0);
      }
      var p = u.memoizedState, v = !ue(p, s);
      v && (u.memoizedState = s, Op());
      var y = u.queue;
      if (wp(LE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= ha, Rp(fr | Fr, OE.bind(null, i, y, s, t), void 0, null);
        var g = Am();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Rs(g, qs) || kE(i, t, s);
      }
      return s;
    }
    function kE(e, t, a) {
      e.flags |= Rc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Xt.updateQueue;
      if (u === null)
        u = DE(), Xt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ME(t) && NE(e);
    }
    function LE(e, t, a) {
      var i = function() {
        ME(t) && NE(e);
      };
      return a(i);
    }
    function ME(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ue(a, i);
      } catch {
        return !0;
      }
    }
    function NE(e) {
      var t = Va(e, ze);
      t !== null && gr(t, e, ze, Yt);
    }
    function lm(e) {
      var t = Al();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Q_.bind(null, Xt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return kg(bg);
    }
    function Ng(e) {
      return Og(bg);
    }
    function Rp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Xt.updateQueue;
      if (s === null)
        s = DE(), Xt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = Al();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function um(e) {
      var t = xi();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = Al(), s = i === void 0 ? null : i;
      Xt.flags |= e, u.memoizedState = Rp(fr | t, a, void 0, s);
    }
    function om(e, t, a, i) {
      var u = xi(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (xg(s, v)) {
            u.memoizedState = Rp(t, a, f, s);
            return;
          }
        }
      }
      Xt.flags |= e, u.memoizedState = Rp(fr | t, a, f, s);
    }
    function sm(e, t) {
      return (Xt.mode & qt) !== _e ? Tp(hl | ha | sd, Fr, e, t) : Tp(ha | sd, Fr, e, t);
    }
    function wp(e, t) {
      return om(ha, Fr, e, t);
    }
    function Ug(e, t) {
      return Tp(ct, Ul, e, t);
    }
    function cm(e, t) {
      return om(ct, Ul, e, t);
    }
    function Ag(e, t) {
      var a = ct;
      return a |= vl, (Xt.mode & qt) !== _e && (a |= Mr), Tp(a, dr, e, t);
    }
    function fm(e, t) {
      return om(ct, dr, e, t);
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
    function Fg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = ct;
      return u |= vl, (Xt.mode & qt) !== _e && (u |= Mr), Tp(u, dr, zE.bind(null, t, e), i);
    }
    function dm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return om(ct, dr, zE.bind(null, t, e), i);
    }
    function B_(e, t) {
    }
    var pm = B_;
    function jg(e, t) {
      var a = Al(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function vm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Hg(e, t) {
      var a = Al(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function hm(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (xg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Al();
      return t.memoizedState = e, e;
    }
    function UE(e) {
      var t = xi(), a = pr, i = a.memoizedState;
      return FE(t, i, e);
    }
    function AE(e) {
      var t = xi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return FE(t, a, e);
    }
    function FE(e, t, a) {
      var i = !Dd(qs);
      if (i) {
        if (!ue(a, t)) {
          var u = Od();
          Xt.lanes = Ke(Xt.lanes, u), Bp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Op()), e.memoizedState = a, a;
    }
    function Y_(e, t, a) {
      var i = ya();
      Yn(_s(i, Ua)), e(!0);
      var u = Sp.transition;
      Sp.transition = {};
      var s = Sp.transition;
      Sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(i), Sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && _t("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = lm(!1), t = e[0], a = e[1], i = Y_.bind(null, a), u = Al();
      return u.memoizedState = i, [t, i];
    }
    function jE() {
      var e = Mg(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    function HE() {
      var e = Ng(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    var VE = !1;
    function I_() {
      return VE;
    }
    function Bg() {
      var e = Al(), t = Am(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = u_();
        i = ":" + a + "R" + u;
        var s = Cp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = H_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function mm() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function $_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          gr(s, e, i, f), YE(s, t, i);
        }
      }
      IE(e, i);
    }
    function Q_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Fo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (PE(e))
        BE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = Zi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ue(y, v)) {
                O_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var x = Ta();
          gr(g, e, i, x), YE(g, t, i);
        }
      }
      IE(e, i);
    }
    function PE(e) {
      var t = e.alternate;
      return e === Xt || t !== null && t === Xt;
    }
    function BE(e, t) {
      Ep = am = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (kd(a)) {
        var i = t.lanes;
        i = Gc(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, ws(e, u);
      }
    }
    function IE(e, t, a) {
      vs(e, t);
    }
    var ym = {
      readContext: nr,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: ye
    }, $E = null, QE = null, WE = null, GE = null, Fl = null, Zi = null, gm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, $e = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $E = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), Uf(t), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), Uf(t), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), Uf(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), Uf(t), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), Uf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), Uf(t);
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), zg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = fe.current;
          fe.current = Fl;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Bg();
        },
        unstable_isNewReconciler: ye
      }, QE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), zg(e);
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = Fl;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", ee(), Bg();
        },
        unstable_isNewReconciler: ye
      }, WE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), vm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), fm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), um();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), pm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), im(e, t);
        },
        useId: function() {
          return P = "useId", ee(), mm();
        },
        unstable_isNewReconciler: ye
      }, GE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", ee(), vm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", ee(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", ee(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", ee(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", ee(), fm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", ee();
          var a = fe.current;
          fe.current = gm;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", ee();
          var i = fe.current;
          fe.current = gm;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", ee(), um();
        },
        useState: function(e) {
          P = "useState", ee();
          var t = fe.current;
          fe.current = gm;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", ee(), pm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", ee(), AE(e);
        },
        useTransition: function() {
          return P = "useTransition", ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", ee(), im(e, t);
        },
        useId: function() {
          return P = "useId", ee(), mm();
        },
        unstable_isNewReconciler: ye
      }, Fl = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), Ht(), jg(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), Ht(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), Ht(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), Ht(), Ug(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), Ht(), Ag(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), Ht();
          var a = fe.current;
          fe.current = Fl;
          try {
            return Hg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), Ht();
          var i = fe.current;
          fe.current = Fl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), Ht(), zg(e);
        },
        useState: function(e) {
          P = "useState", $e(), Ht();
          var t = fe.current;
          fe.current = Fl;
          try {
            return lm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), Ht(), Vg(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), Ht(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), Ht(), Lg(e, t, a);
        },
        useId: function() {
          return P = "useId", $e(), Ht(), Bg();
        },
        unstable_isNewReconciler: ye
      }, Zi = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), ee(), vm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), ee(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), ee(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), ee(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), ee(), fm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return kg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), ee(), um();
        },
        useState: function(e) {
          P = "useState", $e(), ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), ee(), pm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), ee(), UE(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), ee(), jE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), ee(), im(e, t);
        },
        useId: function() {
          return P = "useId", $e(), ee(), mm();
        },
        unstable_isNewReconciler: ye
      }, gm = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", $e(), ee(), vm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", $e(), ee(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", $e(), ee(), wp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", $e(), ee(), dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", $e(), ee(), cm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", $e(), ee(), fm(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", $e(), ee();
          var a = fe.current;
          fe.current = Zi;
          try {
            return hm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", $e(), ee();
          var i = fe.current;
          fe.current = Zi;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", $e(), ee(), um();
        },
        useState: function(e) {
          P = "useState", $e(), ee();
          var t = fe.current;
          fe.current = Zi;
          try {
            return Ng(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", $e(), ee(), pm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", $e(), ee(), AE(e);
        },
        useTransition: function() {
          return P = "useTransition", $e(), ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", $e(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", $e(), ee(), im(e, t);
        },
        useId: function() {
          return P = "useId", $e(), ee(), mm();
        },
        unstable_isNewReconciler: ye
      };
    }
    var No = A.unstable_now, qE = 0, Sm = -1, _p = -1, Em = -1, Ig = !1, Cm = !1;
    function XE() {
      return Ig;
    }
    function W_() {
      Cm = !0;
    }
    function G_() {
      Ig = !1, Cm = !1;
    }
    function q_() {
      Ig = Cm, Cm = !1;
    }
    function KE() {
      return qE;
    }
    function ZE() {
      qE = No();
    }
    function $g(e) {
      _p = No(), e.actualStartTime < 0 && (e.actualStartTime = No());
    }
    function JE(e) {
      _p = -1;
    }
    function Rm(e, t) {
      if (_p >= 0) {
        var a = No() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function jl(e) {
      if (Sm >= 0) {
        var t = No() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case xt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Qg(e) {
      if (Em >= 0) {
        var t = No() - Em;
        Em = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case J:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case xt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Hl() {
      Sm = No();
    }
    function Wg() {
      Em = No();
    }
    function Gg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ji(e, t) {
      if (e && e.defaultProps) {
        var a = Ge({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Xg, Kg, Zg, Jg, eS, eC, Tm, tS, nS, rS, xp;
    {
      Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), xp = /* @__PURE__ */ new Set();
      var tC = /* @__PURE__ */ new Set();
      Tm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          tC.has(a) || (tC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, eC = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
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
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var iS = {
      isMounted: cd,
      enqueueSetState: function(e, t, a) {
        var i = to(e), u = Ta(), s = Fo(i), f = ku(u, s);
        f.payload = t, a != null && (Tm(a, "setState"), f.callback = a);
        var p = ko(i, f, s);
        p !== null && (gr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = to(e), u = Ta(), s = Fo(i), f = ku(u, s);
        f.tag = gE, f.payload = t, a != null && (Tm(a, "replaceState"), f.callback = a);
        var p = ko(i, f, s);
        p !== null && (gr(p, i, s, u), Zh(p, i, s)), vs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = to(e), i = Ta(), u = Fo(a), s = ku(i, u);
        s.tag = qh, t != null && (Tm(t, "forceUpdate"), s.callback = t);
        var f = ko(a, s, u);
        f !== null && (gr(f, a, u, i), Zh(f, a, u)), wd(a, u);
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
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !De(a, i) || !De(u, s) : !0;
    }
    function X_(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (xp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (xp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !nS.has(t) && (nS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Zg.has(t) && (Zg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Xe(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function rC(e, t) {
      t.updater = iS, e.stateNode = t, us(t, e), t._reactInternalInstance = qg;
    }
    function aC(e, t, a) {
      var i = !1, u = ai, s = ai, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !rS.has(t)) {
          rS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Mi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = Tf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? wf(e, u) : ai;
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
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      rC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var w = Ct(t) || "Component";
          Kg.has(w) || (Kg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var ae = Ct(t) || "Component", Oe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(ae) || (Jg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Oe, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && W0(e, u, s), g;
    }
    function K_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ve(e) || "Component"), iS.enqueueReplaceState(t, t.state, null));
    }
    function iC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ve(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        iS.enqueueReplaceState(t, t.state, null);
      }
    }
    function lS(e, t, a, i) {
      X_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, hg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = Tf(e, t, !0);
        u.context = wf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          tS.has(p) || (tS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qe && Xi.recordLegacyContextWarning(e, u), Xi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (aS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (K_(e, u), Jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = ct;
        y |= vl, (e.mode & qt) !== _e && (y |= Mr), e.flags |= y;
      }
    }
    function Z_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ai;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = Tf(e, t, !0);
        v = wf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && iC(e, u, a, v), EE();
      var w = e.memoizedState, N = u.state = w;
      if (Jh(e, a, u, i), N = e.memoizedState, s === a && w === N && !zh() && !em()) {
        if (typeof u.componentDidMount == "function") {
          var U = ct;
          U |= vl, (e.mode & qt) !== _e && (U |= Mr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (aS(e, t, g, a), N = e.memoizedState);
      var j = em() || nC(e, t, s, a, w, N, v);
      if (j) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = ct;
          ae |= vl, (e.mode & qt) !== _e && (ae |= Mr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Oe = ct;
          Oe |= vl, (e.mode & qt) !== _e && (Oe |= Mr), e.flags |= Oe;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function J_(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ji(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = ai;
      if (typeof g == "object" && g !== null)
        x = nr(g);
      else {
        var w = Tf(t, a, !0);
        x = wf(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && iC(t, s, i, x), EE();
      var j = t.memoizedState, ae = s.state = j;
      if (Jh(t, i, s, u), ae = t.memoizedState, f === v && j === ae && !zh() && !em() && !ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), !1;
      typeof N == "function" && (aS(t, a, N, i), ae = t.memoizedState);
      var Oe = em() || nC(t, a, p, i, j, ae, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ne;
      return Oe ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, x)), typeof s.componentDidUpdate == "function" && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = x, Oe;
    }
    function Xs(e, t) {
      return {
        value: e,
        source: t,
        stack: Et(t),
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
    function ex(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = ex(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Ve(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === J)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ve(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var tx = typeof WeakMap == "function" ? WeakMap : Map;
    function lC(e, t, a) {
      var i = ku(Yt, a);
      i.tag = pg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        W1(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = ku(Yt, a);
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
        yR(e), oS(e, t), typeof u != "function" && $1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, ze) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ve(e) || "Unknown"));
      }), i;
    }
    function uC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new tx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = G1.bind(null, e, t, a);
        _r && Yp(e, a), t.then(s, s);
      }
    }
    function nx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function rx(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === _e && (a === xe || a === Ne || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function oC(e) {
      var t = e;
      do {
        if (t.tag === Ce && F_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function sC(e, t, a, i, u) {
      if ((e.mode & lt) === _e) {
        if (e === t)
          e.flags |= wr;
        else {
          if (e.flags |= rt, a.flags |= Ja, a.flags &= -52805, a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = ku(Yt, ze);
              f.tag = qh, ko(a, f, ze);
            }
          }
          a.lanes = Ke(a.lanes, ze);
        }
        return e;
      }
      return e.flags |= wr, e.lanes = u, e;
    }
    function ax(e, t, a, i, u) {
      if (a.flags |= au, _r && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        rx(a), Ar() && a.mode & lt && eE();
        var f = oC(t);
        if (f !== null) {
          f.flags &= ~pn, sC(f, t, a, e, u), f.mode & lt && uC(e, s, u), nx(f, e, s);
          return;
        } else {
          if (!bd(u)) {
            uC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ar() && a.mode & lt) {
        eE();
        var v = oC(t);
        if (v !== null) {
          (v.flags & wr) === we && (v.flags |= pn), sC(v, t, a, e, u), tg(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), F1(i);
      var y = t;
      do {
        switch (y.tag) {
          case J: {
            var g = i;
            y.flags |= wr;
            var x = er(u);
            y.lanes = Ke(y.lanes, x);
            var w = lC(y, g, x);
            mg(y, w);
            return;
          }
          case pe:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & rt) === we && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !oR(j))) {
              y.flags |= wr;
              var ae = er(u);
              y.lanes = Ke(y.lanes, ae);
              var Oe = sS(y, N, ae);
              mg(y, Oe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ix() {
      return null;
    }
    var bp = wt.ReactCurrentOwner, el = !1, cS, Dp, fS, dS, pS, Ks, vS, wm, kp;
    cS = {}, Dp = {}, fS = {}, dS = {}, pS = {}, Ks = !1, vS = {}, wm = {}, kp = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = dE(t, null, a, i) : t.child = Df(t, e.child, a, i);
    }
    function lx(e, t, a, i) {
      t.child = Df(t, e.child, null, i), t.child = Df(t, null, a, i);
    }
    function cC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Of(t, u), za(t);
      {
        if (bp.current = t, Da(!0), v = Af(e, t, f, i, p, u), y = Ff(), t.mode & qe) {
          Bt(!0);
          try {
            v = Af(e, t, f, i, p, u), y = Ff();
          } finally {
            Bt(!1);
          }
        }
        Da(!1);
      }
      return Sl(), e !== null && !el ? (xE(e, t, u), Ou(e, t, u)) : (Ar() && y && qy(t), t.flags |= Yi, Ca(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (fb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = $f(s), t.tag = je, t.type = f, yS(t, s), dC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Gi(
            p,
            i,
            // Resolved props
            "prop",
            Ct(s)
          ), a.defaultProps !== void 0) {
            var v = Ct(s) || "Unknown";
            kp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), kp[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Gi(
          x,
          i,
          // Resolved props
          "prop",
          Ct(g)
        );
      }
      var w = e.child, N = TS(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : De, j(U, i) && e.ref === t.ref)
          return Ou(e, t, u);
      }
      t.flags |= Yi;
      var ae = nc(w, i);
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
          y && Gi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (De(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (el = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & Ja) !== we && (el = !0);
          else return t.lanes = e.lanes, Ou(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function pC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & lt) === _e) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Fm(t, a);
        } else if (na(a, ea)) {
          var x = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var w = s !== null ? s.baseLanes : a;
          Fm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ea;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Fm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ke(s.baseLanes, a), t.memoizedState = null) : N = a, Fm(t, N);
      }
      return Ca(e, t, u, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function sx(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function vC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= zn, t.flags |= ss);
    }
    function hS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Gi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = Tf(t, a, !0);
        f = wf(t, p);
      }
      var v, y;
      Of(t, u), za(t);
      {
        if (bp.current = t, Da(!0), v = Af(e, t, a, i, f, u), y = Ff(), t.mode & qe) {
          Bt(!0);
          try {
            v = Af(e, t, a, i, f, u), y = Ff();
          } finally {
            Bt(!1);
          }
        }
        Da(!1);
      }
      return Sl(), e !== null && !el ? (xE(e, t, u), Ou(e, t, u)) : (Ar() && y && qy(t), t.flags |= Yi, Ca(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      {
        switch (xb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= rt, t.flags |= wr;
            var y = new Error("Simulated error coming from DevTools"), g = er(u);
            t.lanes = Ke(t.lanes, g);
            var x = sS(t, Xs(y, t), g);
            mg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Gi(
            w,
            i,
            // Resolved props
            "prop",
            Ct(a)
          );
        }
      }
      var N;
      zl(a) ? (N = !0, Ah(t)) : N = !1, Of(t, u);
      var U = t.stateNode, j;
      U === null ? (xm(e, t), aC(t, a, i), lS(t, a, i, u), j = !0) : e === null ? j = Z_(t, a, i, u) : j = J_(e, t, a, i, u);
      var ae = mS(e, t, a, j, N, u);
      {
        var Oe = t.stateNode;
        j && Oe.props !== i && (Ks || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ve(t) || "a component"), Ks = !0);
      }
      return ae;
    }
    function mS(e, t, a, i, u, s) {
      vC(e, t);
      var f = (t.flags & rt) !== we;
      if (!i && !f)
        return u && X0(t, a, !1), Ou(e, t, s);
      var p = t.stateNode;
      bp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, JE();
      else {
        za(t);
        {
          if (Da(!0), v = p.render(), t.mode & qe) {
            Bt(!0);
            try {
              p.render();
            } finally {
              Bt(!1);
            }
          }
          Da(!1);
        }
        Sl();
      }
      return t.flags |= Yi, e !== null && f ? lx(e, t, v, s) : Ca(e, t, v, s), t.memoizedState = p.state, u && X0(t, a, !0), t.child;
    }
    function mC(e) {
      var t = e.stateNode;
      t.pendingContext ? G0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && G0(e, t.context, !1), yg(e, t.containerInfo);
    }
    function cx(e, t, a) {
      if (mC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), Jh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & pn) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return yC(e, t, p, a, g);
        } else if (p !== s) {
          var x = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return yC(e, t, p, a, x);
        } else {
          p_(t);
          var w = dE(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~gn | Sn, N = N.sibling;
        }
      } else {
        if (bf(), p === s)
          return Ou(e, t, a);
        Ca(e, t, p, a);
      }
      return t.child;
    }
    function yC(e, t, a, i, u) {
      return bf(), tg(u), t.flags |= pn, Ca(e, t, a, i), t.child;
    }
    function fx(e, t, a) {
      TE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= Pt), vC(e, t), Ca(e, t, f, a), t.child;
    }
    function dx(e, t) {
      return e === null && eg(t), null;
    }
    function px(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = db(v), g = Ji(v, u), x;
      switch (y) {
        case xe:
          return yS(t, v), t.type = v = $f(v), x = hS(null, t, v, g, i), x;
        case pe:
          return t.type = v = WS(v), x = hC(null, t, v, g, i), x;
        case Ne:
          return t.type = v = GS(v), x = cC(null, t, v, g, i), x;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Gi(
              w,
              g,
              // Resolved for outer only
              "prop",
              Ct(v)
            );
          }
          return x = fC(
            null,
            t,
            v,
            Ji(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ie && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function vx(e, t, a, i, u) {
      xm(e, t), t.tag = pe;
      var s;
      return zl(a) ? (s = !0, Ah(t)) : s = !1, Of(t, u), aC(t, a, i), lS(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function hx(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Tf(t, a, !1);
        s = wf(t, f);
      }
      Of(t, i);
      var p, v;
      za(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Ct(a) || "Unknown";
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & qe && Xi.recordLegacyContextWarning(t, null), Da(!0), bp.current = t, p = Af(null, t, a, u, s, i), v = Ff(), Da(!1);
      }
      if (Sl(), t.flags |= Yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Ct(a) || "Unknown";
        Dp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Dp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Ct(a) || "Unknown";
          Dp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Dp[x] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return zl(a) ? (w = !0, Ah(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, hg(t), rC(t, p), lS(t, a, u, i), mS(null, t, a, !0, w, i);
      } else {
        if (t.tag = xe, t.mode & qe) {
          Bt(!0);
          try {
            p = Af(null, t, a, u, s, i), v = Ff();
          } finally {
            Bt(!1);
          }
        }
        return Ar() && v && qy(t), Ca(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ct(t) || "Unknown";
          kp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), kp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ct(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), dS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ct(t) || "Unknown";
          fS[v] || (S("%s: Function components do not support contextType.", v), fS[v] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: An
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: ix(),
        transitions: null
      };
    }
    function mx(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function yx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Eg(e, gp);
    }
    function gx(e, t) {
      return Ts(e.childLanes, t);
    }
    function gC(e, t, a) {
      var i = t.pendingProps;
      bb(t) && (t.flags |= rt);
      var u = Ki.current, s = !1, f = (t.flags & rt) !== we;
      if (f || yx(u, e) ? (s = !0, t.flags &= ~rt) : (e === null || e.memoizedState !== null) && (u = A_(u, _E)), u = Mf(u), Lo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = Sx(t, y, g, a), w = t.child;
          return w.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return wx(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, ae = i.children, Oe = Cx(e, t, ae, j, a), Re = t.child, Tt = e.child.memoizedState;
          return Re.memoizedState = Tt === null ? SS(a) : mx(Tt, a), Re.childLanes = gx(e, a), t.memoizedState = gS, Oe;
        } else {
          var vt = i.children, k = Ex(e, t, vt, a);
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
    function Sx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === _e && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & yt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ho(a, u, i, null)) : (p = CS(f, u), v = Ho(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return SR(e, t, V, null);
    }
    function SC(e, t) {
      return nc(e, t);
    }
    function Ex(e, t, a, i) {
      var u = e.child, s = u.sibling, f = SC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === _e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & yt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = SC(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var x;
      return p !== null ? x = nc(p, i) : (x = Ho(i, s, u, null), x.flags |= gn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function _m(e, t, a, i) {
      i !== null && tg(i), Df(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= gn, t.memoizedState = null, f;
    }
    function Rx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = Ho(i, s, u, null);
      return v.flags |= gn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== _e && Df(t, e.child, null, u), v;
    }
    function Tx(e, t, a) {
      return (e.mode & lt) === _e ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ze) : Hy(t) ? e.lanes = Jn : e.lanes = ea, null;
    }
    function wx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & pn) {
          t.flags &= ~pn;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return _m(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= rt, null;
          var H = i.children, O = i.fallback, G = Rx(e, t, H, O, f), de = t.child;
          return de.memoizedState = SS(f), t.memoizedState = gS, G;
        }
      else {
        if (f_(), (t.mode & lt) === _e)
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
            var g = Dw(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = uS(x, p, y);
          return _m(e, t, f, w);
        }
        var N = na(f, e.childLanes);
        if (el || N) {
          var U = Am();
          if (U !== null) {
            var j = Kc(U, f);
            if (j !== An && j !== s.retryLane) {
              s.retryLane = j;
              var ae = Yt;
              Va(e, j), gr(U, e, j, ae);
            }
          }
          BS();
          var Oe = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return _m(e, t, f, Oe);
        } else if (B0(u)) {
          t.flags |= rt, t.child = e.child;
          var Re = q1.bind(null, e);
          return kw(u, Re), null;
        } else {
          v_(t, u, s.treeContext);
          var Tt = i.children, vt = ES(t, Tt);
          return vt.flags |= Sn, vt;
        }
      }
    }
    function EC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), fg(e.return, t, a);
    }
    function _x(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
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
    function xx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && rm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function bx(e) {
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
    function Dx(e, t) {
      e !== void 0 && !wm[e] && (e !== "collapsed" && e !== "hidden" ? (wm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (wm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function CC(e, t) {
      {
        var a = Xe(e), i = !a && typeof dn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function kx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Xe(e)) {
          for (var a = 0; a < e.length; a++)
            if (!CC(e[a], a))
              return;
        } else {
          var i = dn(e);
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
      bx(u), Dx(s, u), kx(f, u), Ca(e, t, f, a);
      var p = Ki.current, v = Eg(p, gp);
      if (v)
        p = Cg(p, gp), t.flags |= rt;
      else {
        var y = e !== null && (e.flags & rt) !== we;
        y && _x(t, t.child, a), p = Mf(p);
      }
      if (Lo(t, p), (t.mode & lt) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xx(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), RS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && rm(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
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
    function Ox(e, t, a) {
      yg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Df(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var TC = !1;
    function Lx(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || TC || (TC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Gi(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ue(y, p)) {
          if (f.children === s.children && !zh())
            return Ou(e, t, a);
        } else
          b_(t, u, a);
      }
      var g = s.children;
      return Ca(e, t, g, a), t.child;
    }
    var wC = !1;
    function Mx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wC || (wC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Of(t, a);
      var f = nr(i);
      za(t);
      var p;
      return bp.current = t, Da(!0), p = s(f), Da(!1), Sl(), t.flags |= Yi, Ca(e, t, p, a), t.child;
    }
    function Op() {
      el = !0;
    }
    function xm(e, t) {
      (t.mode & lt) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= gn);
    }
    function Ou(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), JE(), Bp(t.lanes), na(a, t.childLanes) ? (__(e, t), t.child) : null;
    }
    function Nx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= gn, a;
      }
    }
    function TS(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function zx(e, t, a) {
      switch (t.tag) {
        case J:
          mC(t), t.stateNode, bf();
          break;
        case le:
          TE(t);
          break;
        case pe: {
          var i = t.type;
          zl(i) && Ah(t);
          break;
        }
        case Fe:
          yg(t, t.stateNode.containerInfo);
          break;
        case at: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case xt:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Lo(t, Mf(Ki.current)), t.flags |= rt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return gC(e, t, a);
            Lo(t, Mf(Ki.current));
            var x = Ou(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Lo(t, Mf(Ki.current));
          break;
        }
        case It: {
          var w = (e.flags & rt) !== we, N = na(a, t.childLanes);
          if (w) {
            if (N)
              return RC(e, t, a);
            t.flags |= rt;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Lo(t, Ki.current), N)
            break;
          return null;
        }
        case Me:
        case At:
          return t.lanes = V, pC(e, t, a);
      }
      return Ou(e, t, a);
    }
    function _C(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Nx(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || zh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          el = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & rt) === we)
            return el = !1, zx(e, t, a);
          (e.flags & Ja) !== we ? el = !0 : el = !1;
        }
      } else if (el = !1, Ar() && i_(t)) {
        var f = t.index, p = l_();
        J0(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case Be:
          return hx(e, t, t.type, a);
        case Cn: {
          var v = t.elementType;
          return px(e, t, v, a);
        }
        case xe: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : Ji(y, g);
          return hS(e, t, y, x, a);
        }
        case pe: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : Ji(w, N);
          return hC(e, t, w, U, a);
        }
        case J:
          return cx(e, t, a);
        case le:
          return fx(e, t, a);
        case Te:
          return dx(e, t);
        case Ce:
          return gC(e, t, a);
        case Fe:
          return Ox(e, t, a);
        case Ne: {
          var j = t.type, ae = t.pendingProps, Oe = t.elementType === j ? ae : Ji(j, ae);
          return cC(e, t, j, Oe, a);
        }
        case ut:
          return ux(e, t, a);
        case Hn:
          return ox(e, t, a);
        case xt:
          return sx(e, t, a);
        case at:
          return Lx(e, t, a);
        case rn:
          return Mx(e, t, a);
        case ot: {
          var Re = t.type, Tt = t.pendingProps, vt = Ji(Re, Tt);
          if (t.type !== t.elementType) {
            var k = Re.propTypes;
            k && Gi(
              k,
              vt,
              // Resolved for outer only
              "prop",
              Ct(Re)
            );
          }
          return vt = Ji(Re.type, vt), fC(e, t, Re, vt, a);
        }
        case je:
          return dC(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : Ji(H, O);
          return vx(e, t, H, G, a);
        }
        case It:
          return RC(e, t, a);
        case ht:
          break;
        case Me:
          return pC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= ct;
    }
    function xC(e) {
      e.flags |= zn, e.flags |= ss;
    }
    var bC, wS, DC, kC;
    bC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === Te)
          nw(e, u.stateNode);
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
        var f = t.stateNode, p = gg(), v = aw(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, kC = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Lp(e, t) {
      if (!Ar())
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
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = we;
      if (t) {
        if ((e.mode & yt) !== _e) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & yt) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ux(e, t, a) {
      if (S_() && (t.mode & lt) !== _e && (t.flags & rt) === we)
        return lE(t), bf(), t.flags |= pn | au | wr, !1;
      var i = Ph(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (y_(t), jr(t), (t.mode & yt) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & rt) === we && (t.memoizedState = null), t.flags |= ct, jr(t), (t.mode & yt) !== _e) {
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
      switch (Xy(t), t.tag) {
        case Be:
        case Cn:
        case je:
        case xe:
        case Ne:
        case ut:
        case Hn:
        case xt:
        case rn:
        case ot:
          return jr(t), null;
        case pe: {
          var u = t.type;
          return zl(u) && Uh(t), jr(t), null;
        }
        case J: {
          var s = t.stateNode;
          if (Lf(t), Qy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ph(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & pn) !== we) && (t.flags |= Na, uE());
            }
          }
          return wS(e, t), jr(t), null;
        }
        case le: {
          Sg(t);
          var v = RE(), y = t.type;
          if (e !== null && t.stateNode != null)
            DC(e, t, y, i, v), e.ref !== t.ref && xC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var g = gg(), x = Ph(t);
            if (x)
              h_(t, v, g) && jf(t);
            else {
              var w = tw(y, i, v, g, t);
              bC(w, t, !1, !1), t.stateNode = w, rw(w, y, i, v) && jf(t);
            }
            t.ref !== null && xC(t);
          }
          return jr(t), null;
        }
        case Te: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            kC(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = RE(), ae = gg(), Oe = Ph(t);
            Oe ? m_(t) && jf(t) : t.stateNode = iw(N, j, ae, t);
          }
          return jr(t), null;
        }
        case Ce: {
          Nf(t);
          var Re = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Ux(e, t, Re);
            if (!Tt)
              return t.flags & wr ? t : null;
          }
          if ((t.flags & rt) !== we)
            return t.lanes = a, (t.mode & yt) !== _e && Gg(t), t;
          var vt = Re !== null, k = e !== null && e.memoizedState !== null;
          if (vt !== k && vt) {
            var H = t.child;
            if (H.flags |= mi, (t.mode & lt) !== _e) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || Eg(Ki.current, _E) ? A1() : BS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= ct), jr(t), (t.mode & yt) !== _e && vt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Lf(t), wS(e, t), e === null && Zw(t.stateNode.containerInfo), jr(t), null;
        case at:
          var oe = t.type._context;
          return cg(oe, t), jr(t), null;
        case Lt: {
          var Ae = t.type;
          return zl(Ae) && Uh(t), jr(t), null;
        }
        case It: {
          Nf(t);
          var We = t.memoizedState;
          if (We === null)
            return jr(t), null;
          var Kt = (t.flags & rt) !== we, Dt = We.rendering;
          if (Dt === null)
            if (Kt)
              Lp(We, !1);
            else {
              var Qn = j1() && (e === null || (e.flags & rt) === we);
              if (!Qn)
                for (var kt = t.child; kt !== null; ) {
                  var jn = rm(kt);
                  if (jn !== null) {
                    Kt = !0, t.flags |= rt, Lp(We, !1);
                    var oa = jn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= ct), t.subtreeFlags = we, x_(t, a), Lo(t, Cg(Ki.current, gp)), t.child;
                  }
                  kt = kt.sibling;
                }
              We.tail !== null && wn() > KC() && (t.flags |= rt, Kt = !0, Lp(We, !1), t.lanes = Hv);
            }
          else {
            if (!Kt) {
              var Yr = rm(Dt);
              if (Yr !== null) {
                t.flags |= rt, Kt = !0;
                var li = Yr.updateQueue;
                if (li !== null && (t.updateQueue = li, t.flags |= ct), Lp(We, !0), We.tail === null && We.tailMode === "hidden" && !Dt.alternate && !Ar())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              wn() * 2 - We.renderingStartTime > KC() && a !== ea && (t.flags |= rt, Kt = !0, Lp(We, !1), t.lanes = Hv);
            }
            if (We.isBackwards)
              Dt.sibling = t.child, t.child = Dt;
            else {
              var wa = We.last;
              wa !== null ? wa.sibling = Dt : t.child = Dt, We.last = Dt;
            }
          }
          if (We.tail !== null) {
            var _a = We.tail;
            We.rendering = _a, We.tail = _a.sibling, We.renderingStartTime = wn(), _a.sibling = null;
            var sa = Ki.current;
            return Kt ? sa = Cg(sa, gp) : sa = Mf(sa), Lo(t, sa), _a;
          }
          return jr(t), null;
        }
        case ht:
          break;
        case Me:
        case At: {
          PS(t);
          var Uu = t.memoizedState, Qf = Uu !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Bl = Wp !== null;
            Bl !== Qf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= mi);
          }
          return !Qf || (t.mode & lt) === _e ? jr(t) : na(Pl, ea) && (jr(t), t.subtreeFlags & (gn | ct) && (t.flags |= mi)), null;
        }
        case pt:
          return null;
        case tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ax(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type;
          zl(i) && Uh(t);
          var u = t.flags;
          return u & wr ? (t.flags = u & ~wr | rt, (t.mode & yt) !== _e && Gg(t), t) : null;
        }
        case J: {
          t.stateNode, Lf(t), Qy(t), Tg();
          var s = t.flags;
          return (s & wr) !== we && (s & rt) === we ? (t.flags = s & ~wr | rt, t) : null;
        }
        case le:
          return Sg(t), null;
        case Ce: {
          Nf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & wr ? (t.flags = p & ~wr | rt, (t.mode & yt) !== _e && Gg(t), t) : null;
        }
        case It:
          return Nf(t), null;
        case Fe:
          return Lf(t), null;
        case at:
          var v = t.type._context;
          return cg(v, t), null;
        case Me:
        case At:
          return PS(t), null;
        case pt:
          return null;
        default:
          return null;
      }
    }
    function LC(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && Uh(t);
          break;
        }
        case J: {
          t.stateNode, Lf(t), Qy(t), Tg();
          break;
        }
        case le: {
          Sg(t);
          break;
        }
        case Fe:
          Lf(t);
          break;
        case Ce:
          Nf(t);
          break;
        case It:
          Nf(t);
          break;
        case at:
          var u = t.type._context;
          cg(u, t);
          break;
        case Me:
        case At:
          PS(t);
          break;
      }
    }
    var MC = null;
    MC = /* @__PURE__ */ new Set();
    var bm = !1, Hr = !1, Fx = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Hf = null, Vf = null;
    function jx(e) {
      Ma(null, function() {
        throw e;
      }), od();
    }
    var Hx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & yt)
        try {
          Hl(), t.componentWillUnmount();
        } finally {
          jl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NC(e, t) {
      try {
        zo(dr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Hx(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Vx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function zC(e, t) {
      try {
        AC(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ye && nt && e.mode & yt)
              try {
                Hl(), i = a(null);
              } finally {
                jl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          a.current = null;
    }
    function Dm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var UC = !1;
    function Px(e, t) {
      JT(e.containerInfo), Se = t, Bx();
      var a = UC;
      return UC = !1, a;
    }
    function Bx() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & ml) !== we && t !== null ? (t.return = e, Se = t) : Yx();
      }
    }
    function Yx() {
      for (; Se !== null; ) {
        var e = Se;
        Qt(e);
        try {
          Ix(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        yn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function Ix(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== we) {
        switch (Qt(e), e.tag) {
          case xe:
          case Ne:
          case je:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ks && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ji(e.type, i), u);
              {
                var p = MC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ve(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case J: {
            {
              var v = e.stateNode;
              ww(v.containerInfo);
            }
            break;
          }
          case le:
          case Te:
          case Fe:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        yn();
      }
    }
    function tl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Pa ? El(t) : (e & dr) !== Pa && Ed(t), (e & Ul) !== Pa && Ip(!0), Dm(t, a, p), (e & Ul) !== Pa && Ip(!1), (e & Fr) !== Pa ? wc() : (e & dr) !== Pa && io());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function zo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== Pa ? Fv(t) : (e & dr) !== Pa && jv(t);
            var f = s.create;
            (e & Ul) !== Pa && Ip(!0), s.destroy = f(), (e & Ul) !== Pa && Ip(!1), (e & Fr) !== Pa ? $i() : (e & dr) !== Pa && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== we ? v = "useLayoutEffect" : (s.tag & Ul) !== we ? v = "useInsertionEffect" : v = "useEffect";
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
    function $x(e, t) {
      if ((t.flags & ct) !== we)
        switch (t.tag) {
          case xt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KE(), p = t.alternate === null ? "mount" : "update";
            XE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case J:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case xt:
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
    function Qx(e, t, a, i) {
      if ((a.flags & yl) !== we)
        switch (a.tag) {
          case xe:
          case Ne:
          case je: {
            if (!Hr)
              if (a.mode & yt)
                try {
                  Hl(), zo(dr | fr, a);
                } finally {
                  jl(a);
                }
              else
                zo(dr | fr, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & ct && !Hr)
              if (t === null)
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), a.mode & yt)
                  try {
                    Hl(), u.componentDidMount();
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ji(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), a.mode & yt)
                  try {
                    Hl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    jl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ve(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ve(a) || "instance")), CE(a, p, u));
            break;
          }
          case J: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & ct) {
              var x = a.type, w = a.memoizedProps;
              cw(g, x, w);
            }
            break;
          }
          case Te:
            break;
          case Fe:
            break;
          case xt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, ae = a.stateNode.effectDuration, Oe = KE(), Re = t === null ? "mount" : "update";
              XE() && (Re = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Re, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Oe);
              {
                typeof U == "function" && U(a.memoizedProps.id, Re, ae, Oe), Y1(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case J:
                      var vt = Tt.stateNode;
                      vt.effectDuration += ae;
                      break e;
                    case xt:
                      var k = Tt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            e1(e, a);
            break;
          }
          case It:
          case Lt:
          case ht:
          case Me:
          case At:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Hr || a.flags & zn && AC(a);
    }
    function Wx(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          if (e.mode & yt)
            try {
              Hl(), NC(e, e.return);
            } finally {
              jl(e);
            }
          else
            NC(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Vx(e, e.return, t), zC(e, e.return);
          break;
        }
        case le: {
          zC(e, e.return);
          break;
        }
      }
    }
    function Gx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Ew(u) : Rw(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === Te) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Cw(s) : Tw(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === At) && i.memoizedState !== null && i !== e)) {
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
          if (e.mode & yt)
            try {
              Hl(), u = t(i);
            } finally {
              jl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ve(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ve(e)), t.current = i;
      }
    }
    function qx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function FC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, FC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && t_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xx(e) {
      for (var t = e.return; t !== null; ) {
        if (jC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function jC(e) {
      return e.tag === le || e.tag === J || e.tag === Fe;
    }
    function HC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || jC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== Te && t.tag !== fn; ) {
          if (t.flags & gn || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & gn))
          return t.stateNode;
      }
    }
    function Kx(e) {
      var t = Xx(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Pt && (P0(a), t.flags &= ~Pt);
          var i = HC(e);
          bS(e, i, a);
          break;
        }
        case J:
        case Fe: {
          var u = t.stateNode.containerInfo, s = HC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === le || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? mw(a, s, t) : vw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === le || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? hw(a, s, t) : pw(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, nl = !1;
    function Zx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Vr = i.stateNode, nl = !1;
              break e;
            }
            case J: {
              Vr = i.stateNode.containerInfo, nl = !0;
              break e;
            }
            case Fe: {
              Vr = i.stateNode.containerInfo, nl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VC(e, t, a), Vr = null, nl = !1;
      }
      qx(a);
    }
    function Uo(e, t, a) {
      for (var i = a.child; i !== null; )
        VC(e, t, i), i = i.sibling;
    }
    function VC(e, t, a) {
      switch (ao(a), a.tag) {
        case le:
          Hr || Pf(a, t);
        case Te: {
          {
            var i = Vr, u = nl;
            Vr = null, Uo(e, t, a), Vr = i, nl = u, Vr !== null && (nl ? gw(Vr, a.stateNode) : yw(Vr, a.stateNode));
          }
          return;
        }
        case fn: {
          Vr !== null && (nl ? Sw(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case Fe: {
          {
            var s = Vr, f = nl;
            Vr = a.stateNode.containerInfo, nl = !0, Uo(e, t, a), Vr = s, nl = f;
          }
          return;
        }
        case xe:
        case Ne:
        case ot:
        case je: {
          if (!Hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, w = x.destroy, N = x.tag;
                  w !== void 0 && ((N & Ul) !== Pa ? Dm(a, t, w) : (N & dr) !== Pa && (Ed(a), a.mode & yt ? (Hl(), Dm(a, t, w), jl(a)) : Dm(a, t, w), io())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Uo(e, t, a);
          return;
        }
        case pe: {
          if (!Hr) {
            Pf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _S(a, t, U);
          }
          Uo(e, t, a);
          return;
        }
        case ht: {
          Uo(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var j = Hr;
            Hr = j || a.memoizedState !== null, Uo(e, t, a), Hr = j;
          } else
            Uo(e, t, a);
          break;
        }
        default: {
          Uo(e, t, a);
          return;
        }
      }
    }
    function Jx(e) {
      e.memoizedState;
    }
    function e1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && jw(s);
          }
        }
      }
    }
    function PC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Fx()), t.forEach(function(i) {
          var u = X1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Hf !== null && Vf !== null)
                Yp(Vf, Hf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function t1(e, t, a) {
      Hf = a, Vf = e, Qt(t), BC(t, e), Qt(t), Hf = null, Vf = null;
    }
    function rl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Zx(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = qa();
      if (t.subtreeFlags & no)
        for (var p = t.child; p !== null; )
          Qt(p), BC(p, e), p = p.sibling;
      Qt(f);
    }
    function BC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case xe:
        case Ne:
        case ot:
        case je: {
          if (rl(t, e), Vl(e), u & ct) {
            try {
              tl(Ul | fr, e, e.return), zo(Ul | fr, e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            if (e.mode & yt) {
              try {
                Hl(), tl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
              jl(e);
            } else
              try {
                tl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case pe: {
          rl(t, e), Vl(e), u & zn && i !== null && Pf(i, i.return);
          return;
        }
        case le: {
          rl(t, e), Vl(e), u & zn && i !== null && Pf(i, i.return);
          {
            if (e.flags & Pt) {
              var s = e.stateNode;
              try {
                P0(s);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
            }
            if (u & ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    fw(f, g, y, v, p, e);
                  } catch (Ae) {
                    cn(e, e.return, Ae);
                  }
              }
            }
          }
          return;
        }
        case Te: {
          if (rl(t, e), Vl(e), u & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              dw(x, N, w);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
          }
          return;
        }
        case J: {
          if (rl(t, e), Vl(e), u & ct && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                Fw(t.containerInfo);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case Fe: {
          rl(t, e), Vl(e);
          return;
        }
        case Ce: {
          rl(t, e), Vl(e);
          var j = e.child;
          if (j.flags & mi) {
            var ae = j.stateNode, Oe = j.memoizedState, Re = Oe !== null;
            if (ae.isHidden = Re, Re) {
              var Tt = j.alternate !== null && j.alternate.memoizedState !== null;
              Tt || U1();
            }
          }
          if (u & ct) {
            try {
              Jx(e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            PC(e);
          }
          return;
        }
        case Me: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var k = Hr;
            Hr = k || vt, rl(t, e), Hr = k;
          } else
            rl(t, e);
          if (Vl(e), u & mi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, de = e;
            if (H.isHidden = G, G && !vt && (de.mode & lt) !== _e) {
              Se = de;
              for (var oe = de.child; oe !== null; )
                Se = oe, r1(oe), oe = oe.sibling;
            }
            Gx(de, G);
          }
          return;
        }
        case It: {
          rl(t, e), Vl(e), u & ct && PC(e);
          return;
        }
        case ht:
          return;
        default: {
          rl(t, e), Vl(e);
          return;
        }
      }
    }
    function Vl(e) {
      var t = e.flags;
      if (t & gn) {
        try {
          Kx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= ~gn;
      }
      t & Sn && (e.flags &= ~Sn);
    }
    function n1(e, t, a) {
      Hf = a, Vf = t, Se = e, YC(e, t, a), Hf = null, Vf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & lt) !== _e; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Hr, x = bm, w = Hr;
            bm = p, Hr = g, Hr && !w && (Se = u, a1(u));
            for (var N = s; N !== null; )
              Se = N, YC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, bm = x, Hr = w, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & yl) !== we && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & yl) !== we) {
          var u = i.alternate;
          Qt(i);
          try {
            Qx(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          yn();
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
    function r1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case xe:
          case Ne:
          case ot:
          case je: {
            if (t.mode & yt)
              try {
                Hl(), tl(dr, t, t.return);
              } finally {
                jl(t);
              }
            else
              tl(dr, t, t.return);
            break;
          }
          case pe: {
            Pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case le: {
            Pf(t, t.return);
            break;
          }
          case Me: {
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
    function a1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Me) {
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
          Wx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (yn(), t === e) {
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
    function i1(e, t, a, i) {
      Se = t, l1(t, e, a, i);
    }
    function l1(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & lr) !== we && s !== null ? (s.return = u, Se = s) : u1(e, t, a, i);
      }
    }
    function u1(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & ha) !== we) {
          Qt(u);
          try {
            o1(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          yn();
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
    function o1(e, t, a, i) {
      switch (t.tag) {
        case xe:
        case Ne:
        case je: {
          if (t.mode & yt) {
            Wg();
            try {
              zo(Fr | fr, t);
            } finally {
              Qg(t);
            }
          } else
            zo(Fr | fr, t);
          break;
        }
      }
    }
    function s1(e) {
      Se = e, c1();
    }
    function c1() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Xr) !== we) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, p1(u, e);
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
        (e.subtreeFlags & lr) !== we && t !== null ? (t.return = e, Se = t) : f1();
      }
    }
    function f1() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & ha) !== we && (Qt(e), d1(e), yn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function d1(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          e.mode & yt ? (Wg(), tl(Fr | fr, e, e.return), Qg(e)) : tl(Fr | fr, e, e.return);
          break;
        }
      }
    }
    function p1(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        Qt(a), h1(a, t), yn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : v1(e);
      }
    }
    function v1(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (FC(t), t === e) {
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
    function h1(e, t) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          e.mode & yt ? (Wg(), tl(Fr, e, t), Qg(e)) : tl(Fr, e, t);
          break;
        }
      }
    }
    function m1(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          try {
            zo(dr | fr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function y1(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          try {
            zo(Fr | fr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function g1(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je: {
          try {
            tl(dr | fr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case xe:
        case Ne:
        case je:
          try {
            tl(Fr | fr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Mp = Symbol.for;
      Mp("selector.component"), Mp("selector.has_pseudo_class"), Mp("selector.role"), Mp("selector.test_id"), Mp("selector.text");
    }
    var E1 = [];
    function C1() {
      E1.forEach(function(e) {
        return e();
      });
    }
    var R1 = wt.ReactCurrentActQueue;
    function T1(e) {
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
        return !e && R1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var w1 = Math.ceil, kS = wt.ReactCurrentDispatcher, OS = wt.ReactCurrentOwner, Pr = wt.ReactCurrentBatchConfig, al = wt.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), WC = (
      /*               */
      1
    ), Br = (
      /*                */
      2
    ), bi = (
      /*                */
      4
    ), Lu = 0, Np = 1, Zs = 2, km = 3, zp = 4, GC = 5, LS = 6, Rt = hr, Ra = null, Dn = null, mr = V, Pl = V, MS = _o(V), yr = Lu, Up = null, Om = V, Ap = V, Lm = V, Fp = null, Ba = null, NS = 0, qC = 500, XC = 1 / 0, _1 = 500, Mu = null;
    function jp() {
      XC = wn() + _1;
    }
    function KC() {
      return XC;
    }
    var Mm = !1, zS = null, Bf = null, Js = !1, Ao = null, Hp = V, US = [], AS = null, x1 = 50, Vp = 0, FS = null, jS = !1, Nm = !1, b1 = 50, Yf = 0, zm = null, Pp = Yt, Um = V, ZC = !1;
    function Am() {
      return Ra;
    }
    function Ta() {
      return (Rt & (Br | bi)) !== hr ? wn() : (Pp !== Yt || (Pp = wn()), Pp);
    }
    function Fo(e) {
      var t = e.mode;
      if ((t & lt) === _e)
        return ze;
      if ((Rt & Br) !== hr && mr !== V)
        return er(mr);
      var a = R_() !== C_;
      if (a) {
        if (Pr.transition !== null) {
          var i = Pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Um === An && (Um = Od()), Um;
      }
      var u = ya();
      if (u !== An)
        return u;
      var s = lw();
      return s;
    }
    function D1(e) {
      var t = e.mode;
      return (t & lt) === _e ? ze : $v();
    }
    function gr(e, t, a, i) {
      Z1(), ZC && S("useInsertionEffect must not schedule updates."), jS && (Nm = !0), fo(e, a, i), (Rt & Br) !== V && e === Ra ? tb(t) : (_r && Wv(e, t, a), nb(t), e === Ra && ((Rt & Br) === hr && (Ap = Ke(Ap, a)), yr === zp && jo(e, mr)), Ya(e, i), a === ze && Rt === hr && (t.mode & lt) === _e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !al.isBatchingLegacy && (jp(), Z0()));
    }
    function k1(e, t, a) {
      var i = e.current;
      i.lanes = t, fo(e, t, a), Ya(e, a);
    }
    function O1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Br) !== hr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      Bv(e, t);
      var i = ta(e, e === Ra ? mr : V);
      if (i === V) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var u = du(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(al.current !== null && a !== $S)) {
        a == null && s !== ze && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === ze)
        e.tag === xo ? (al.isBatchingLegacy !== null && (al.didScheduleLegacyUpdate = !0), a_(tR.bind(null, e))) : K0(tR.bind(null, e)), al.current !== null ? al.current.push(bo) : ow(function() {
          (Rt & (Br | bi)) === hr && bo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case ra:
            p = Ii;
            break;
          case Ua:
            p = cs;
            break;
          case or:
            p = lu;
            break;
          case Jc:
            p = ro;
            break;
          default:
            p = lu;
            break;
        }
        f = QS(p, JC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function JC(e, t) {
      if (G_(), Pp = Yt, Um = V, (Rt & (Br | bi)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = zu();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ra ? mr : V);
      if (u === V)
        return null;
      var s = !Rs(e, u) && !Iv(e, u) && !t, f = s ? V1(e, u) : jm(e, u);
      if (f !== Lu) {
        if (f === Zs) {
          var p = $c(e);
          p !== V && (u = p, f = HS(e, p));
        }
        if (f === Np) {
          var v = Up;
          throw ec(e, V), jo(e, u), Ya(e, wn()), v;
        }
        if (f === LS)
          jo(e, u);
        else {
          var y = !Rs(e, u), g = e.current.alternate;
          if (y && !M1(g)) {
            if (f = jm(e, u), f === Zs) {
              var x = $c(e);
              x !== V && (u = x, f = HS(e, x));
            }
            if (f === Np) {
              var w = Up;
              throw ec(e, V), jo(e, u), Ya(e, wn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, L1(e, f, u);
        }
      }
      return Ya(e, wn()), e.callbackNode === a ? JC.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Fp;
      if (vu(e)) {
        var i = ec(e, t);
        i.flags |= pn, Kw(e.containerInfo);
      }
      var u = jm(e, t);
      if (u !== Zs) {
        var s = Ba;
        Ba = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function L1(e, t, a) {
      switch (t) {
        case Lu:
        case Np:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          tc(e, Ba, Mu);
          break;
        }
        case km: {
          if (jo(e, a), Qc(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = NS + qC - wn();
            if (i > 10) {
              var u = ta(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!pu(s, a)) {
                Ta(), Xc(e, s);
                break;
              }
              e.timeoutHandle = Ay(tc.bind(null, e, Ba, Mu), i);
              break;
            }
          }
          tc(e, Ba, Mu);
          break;
        }
        case zp: {
          if (jo(e, a), uy(a))
            break;
          if (!hR()) {
            var f = xd(e, a), p = f, v = wn() - p, y = K1(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(tc.bind(null, e, Ba, Mu), y);
              break;
            }
          }
          tc(e, Ba, Mu);
          break;
        }
        case GC: {
          tc(e, Ba, Mu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function M1(e) {
      for (var t = e; ; ) {
        if (t.flags & Rc) {
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
        if (t.subtreeFlags & Rc && v !== null) {
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
    function jo(e, t) {
      t = Ts(t, Lm), t = Ts(t, Ap), Md(e, t);
    }
    function tR(e) {
      if (q_(), (Rt & (Br | bi)) !== hr)
        throw new Error("Should not already be working.");
      zu();
      var t = ta(e, V);
      if (!na(t, ze))
        return Ya(e, wn()), null;
      var a = jm(e, t);
      if (e.tag !== xo && a === Zs) {
        var i = $c(e);
        i !== V && (t = i, a = HS(e, i));
      }
      if (a === Np) {
        var u = Up;
        throw ec(e, V), jo(e, t), Ya(e, wn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, tc(e, Ba, Mu), Ya(e, wn()), null;
    }
    function N1(e, t) {
      t !== V && (ws(e, Ke(t, ze)), Ya(e, wn()), (Rt & (Br | bi)) === hr && (jp(), bo()));
    }
    function VS(e, t) {
      var a = Rt;
      Rt |= WC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !al.isBatchingLegacy && (jp(), Z0());
      }
    }
    function z1(e, t, a, i, u) {
      var s = ya(), f = Pr.transition;
      try {
        return Pr.transition = null, Yn(ra), e(t, a, i, u);
      } finally {
        Yn(s), Pr.transition = f, Rt === hr && jp();
      }
    }
    function Nu(e) {
      Ao !== null && Ao.tag === xo && (Rt & (Br | bi)) === hr && zu();
      var t = Rt;
      Rt |= WC;
      var a = Pr.transition, i = ya();
      try {
        return Pr.transition = null, Yn(ra), e ? e() : void 0;
      } finally {
        Yn(i), Pr.transition = a, Rt = t, (Rt & (Br | bi)) === hr && bo();
      }
    }
    function nR() {
      return (Rt & (Br | bi)) !== hr;
    }
    function Fm(e, t) {
      la(MS, Pl, e), Pl = Ke(Pl, t);
    }
    function PS(e) {
      Pl = MS.current, ia(MS, e);
    }
    function ec(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, uw(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          LC(u, i), i = i.return;
        }
      Ra = e;
      var s = nc(e.current, null);
      return Dn = s, mr = Pl = t, yr = Lu, Up = null, Om = V, Ap = V, Lm = V, Fp = null, Ba = null, k_(), Xi.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = Dn;
        try {
          if (Wh(), bE(), yn(), OS.current = null, a === null || a.return === null) {
            yr = Np, Up = t, Dn = null;
            return;
          }
          if (Ye && a.mode & yt && Rm(a, !0), He)
            if (Sl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ds(a, i, mr);
            } else
              Si(a, t, mr);
          ax(e, a.return, a, t, mr), uR(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = kS.current;
      return kS.current = ym, e === null ? ym : e;
    }
    function iR(e) {
      kS.current = e;
    }
    function U1() {
      NS = wn();
    }
    function Bp(e) {
      Om = Ke(e, Om);
    }
    function A1() {
      yr === Lu && (yr = km);
    }
    function BS() {
      (yr === Lu || yr === km || yr === Zs) && (yr = zp), Ra !== null && (wl(Om) || wl(Ap)) && jo(Ra, mr);
    }
    function F1(e) {
      yr !== zp && (yr = Zs), Fp === null ? Fp = [e] : Fp.push(e);
    }
    function j1() {
      return yr === Lu;
    }
    function jm(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = aR();
      if (Ra !== e || mr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), Nd(e, t);
        }
        Mu = Zc(), ec(e, t);
      }
      Rd(t);
      do
        try {
          H1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Wh(), Rt = a, iR(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return vn(), Ra = null, mr = V, yr;
    }
    function H1() {
      for (; Dn !== null; )
        lR(Dn);
    }
    function V1(e, t) {
      var a = Rt;
      Rt |= Br;
      var i = aR();
      if (Ra !== e || mr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), Nd(e, t);
        }
        Mu = Zc(), jp(), ec(e, t);
      }
      Rd(t);
      do
        try {
          P1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Wh(), iR(i), Rt = a, Dn !== null ? (Td(), Lu) : (vn(), Ra = null, mr = V, yr);
    }
    function P1() {
      for (; Dn !== null && !vd(); )
        lR(Dn);
    }
    function lR(e) {
      var t = e.alternate;
      Qt(e);
      var a;
      (e.mode & yt) !== _e ? ($g(e), a = YS(t, e, Pl), Rm(e, !0)) : a = YS(t, e, Pl), yn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : Dn = a, OS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & au) === we) {
          Qt(t);
          var u = void 0;
          if ((t.mode & yt) === _e ? u = OC(a, t, Pl) : ($g(t), u = OC(a, t, Pl), Rm(t, !1)), yn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = Ax(a, t);
          if (s !== null) {
            s.flags &= Ov, Dn = s;
            return;
          }
          if ((t.mode & yt) !== _e) {
            Rm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= au, i.subtreeFlags = we, i.deletions = null;
          else {
            yr = LS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      yr === Lu && (yr = GC);
    }
    function tc(e, t, a) {
      var i = ya(), u = Pr.transition;
      try {
        Pr.transition = null, Yn(ra), B1(e, t, a, i);
      } finally {
        Pr.transition = u, Yn(i);
      }
      return null;
    }
    function B1(e, t, a, i) {
      do
        zu();
      while (Ao !== null);
      if (J1(), (Rt & (Br | bi)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Av(s), u === null)
        return gi(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var f = Ke(u.lanes, u.childLanes);
      Qv(e, f), e === Ra && (Ra = null, Dn = null, mr = V), ((u.subtreeFlags & lr) !== we || (u.flags & lr) !== we) && (Js || (Js = !0, AS = a, QS(lu, function() {
        return zu(), null;
      })));
      var p = (u.subtreeFlags & (ml | no | yl | lr)) !== we, v = (u.flags & (ml | no | yl | lr)) !== we;
      if (p || v) {
        var y = Pr.transition;
        Pr.transition = null;
        var g = ya();
        Yn(ra);
        var x = Rt;
        Rt |= bi, OS.current = null, Px(e, u), ZE(), t1(e, u, s), ew(e.containerInfo), e.current = u, ps(s), n1(u, e, s), ou(), Mv(), Rt = x, Yn(g), Pr.transition = y;
      } else
        e.current = u, ZE();
      var w = Js;
      if (Js ? (Js = !1, Ao = e, Hp = s) : (Yf = 0, zm = null), f = e.pendingLanes, f === V && (Bf = null), w || fR(e.current, !1), yd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), C1(), Ya(e, wn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ae = j.stack, Oe = j.digest;
          N(j.value, {
            componentStack: ae,
            digest: Oe
          });
        }
      if (Mm) {
        Mm = !1;
        var Re = zS;
        throw zS = null, Re;
      }
      return na(Hp, ze) && e.tag !== xo && zu(), f = e.pendingLanes, na(f, ze) ? (W_(), e === FS ? Vp++ : (Vp = 0, FS = e)) : Vp = 0, bo(), gi(), null;
    }
    function zu() {
      if (Ao !== null) {
        var e = qv(Hp), t = xr(or, e), a = Pr.transition, i = ya();
        try {
          return Pr.transition = null, Yn(t), I1();
        } finally {
          Yn(i), Pr.transition = a;
        }
      }
      return !1;
    }
    function Y1(e) {
      US.push(e), Js || (Js = !0, QS(lu, function() {
        return zu(), null;
      }));
    }
    function I1() {
      if (Ao === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Ao, a = Hp;
      if (Ao = null, Hp = V, (Rt & (Br | bi)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Nm = !1, Cd(a);
      var i = Rt;
      Rt |= bi, s1(t.current), i1(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          $x(t, f);
        }
      }
      lo(), fR(t.current, !0), Rt = i, bo(), Nm ? t === zm ? Yf++ : (Yf = 0, zm = t) : Yf = 0, jS = !1, Nm = !1, gd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Bf !== null && Bf.has(e);
    }
    function $1(e) {
      Bf === null ? Bf = /* @__PURE__ */ new Set([e]) : Bf.add(e);
    }
    function Q1(e) {
      Mm || (Mm = !0, zS = e);
    }
    var W1 = Q1;
    function sR(e, t, a) {
      var i = Xs(a, t), u = lC(e, i, ze), s = ko(e, u, ze), f = Ta();
      s !== null && (fo(s, ze, f), Ya(s, f));
    }
    function cn(e, t, a) {
      if (jx(a), Ip(!1), e.tag === J) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === J) {
          sR(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Xs(a, e), p = sS(i, f, ze), v = ko(i, p, ze), y = Ta();
            v !== null && (fo(v, ze, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function G1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      Xc(e, a), rb(e), Ra === e && pu(mr, a) && (yr === zp || yr === km && Qc(mr) && wn() - NS < qC ? ec(e, V) : Lm = Ke(Lm, a)), Ya(e, u);
    }
    function cR(e, t) {
      t === An && (t = D1(e));
      var a = Ta(), i = Va(e, t);
      i !== null && (fo(i, t, a), Ya(i, a));
    }
    function q1(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function X1(e, t) {
      var a = An, i;
      switch (e.tag) {
        case Ce:
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
    function K1(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : w1(e / 1960) * 1960;
    }
    function Z1() {
      if (Vp > x1)
        throw Vp = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Yf > b1 && (Yf = 0, zm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J1() {
      Xi.flushLegacyContextWarning(), Xi.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Qt(e), Hm(e, Mr, g1), t && Hm(e, hl, S1), Hm(e, Mr, m1), t && Hm(e, hl, y1), yn();
    }
    function Hm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== we ? i = i.child : ((i.flags & t) !== we && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Vm = null;
    function dR(e) {
      {
        if ((Rt & Br) !== hr || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== Be && t !== J && t !== pe && t !== xe && t !== Ne && t !== ot && t !== je)
          return;
        var a = Ve(e) || "ReactComponent";
        if (Vm !== null) {
          if (Vm.has(a))
            return;
          Vm.add(a);
        } else
          Vm = /* @__PURE__ */ new Set([a]);
        var i = Kn;
        try {
          Qt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Qt(e) : yn();
        }
      }
    }
    var YS;
    {
      var eb = null;
      YS = function(e, t, a) {
        var i = ER(eb, t);
        try {
          return _C(e, t, a);
        } catch (s) {
          if (d_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Wh(), bE(), LC(e, t), ER(t, i), t.mode & yt && $g(t), Ma(null, _C, null, e, t, a), ud()) {
            var u = od();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function tb(e) {
      if (Gr && !I_())
        switch (e.tag) {
          case xe:
          case Ne:
          case je: {
            var t = Dn && Ve(Dn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ve(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Wv(e, i, t);
        });
      }
    }
    var $S = {};
    function QS(e, t) {
      {
        var a = al.current;
        return a !== null ? (a.push(t), $S) : dd(e, t);
      }
    }
    function vR(e) {
      if (e !== $S)
        return pd(e);
    }
    function hR() {
      return al.current !== null;
    }
    function nb(e) {
      {
        if (e.mode & lt) {
          if (!QC())
            return;
        } else if (!T1() || Rt !== hr || e.tag !== xe && e.tag !== Ne && e.tag !== je)
          return;
        if (al.current === null) {
          var t = Kn;
          try {
            Qt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ve(e));
          } finally {
            t ? Qt(e) : yn();
          }
        }
      }
    }
    function rb(e) {
      e.tag !== xo && QC() && al.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      ZC = e;
    }
    var Di = null, If = null, ab = function(e) {
      Di = e;
    };
    function $f(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        return t === void 0 ? e : t.current;
      }
    }
    function WS(e) {
      return $f(e);
    }
    function GS(e) {
      {
        if (Di === null)
          return e;
        var t = Di(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = $f(e.render);
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
        if (Di === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case xe: {
            (typeof i == "function" || s === Ie) && (u = !0);
            break;
          }
          case Ne: {
            (s === I || s === Ie) && (u = !0);
            break;
          }
          case ot:
          case je: {
            (s === it || s === Ie) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Di(a);
          if (f !== void 0 && f === Di(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (Di === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var ib = function(e, t) {
      {
        if (Di === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        zu(), Nu(function() {
          qS(e.current, i, a);
        });
      }
    }, lb = function(e, t) {
      {
        if (e.context !== ai)
          return;
        zu(), Nu(function() {
          $p(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case xe:
          case je:
          case pe:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (Di === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Di(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === pe ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Va(e, ze);
          w !== null && gr(w, e, ze, Yt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var ub = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case xe:
          case je:
          case pe:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ob(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function ob(e, t) {
      {
        var a = sb(e, t);
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
            case J:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function sb(e, t) {
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
    var KS;
    {
      KS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function cb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = we, this.subtreeFlags = we, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new cb(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fb(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function db(e) {
      if (typeof e == "function")
        return ZS(e) ? pe : xe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return Ne;
        if (t === it)
          return ot;
      }
      return Be;
    }
    function nc(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = we, a.subtreeFlags = we, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Be:
        case xe:
        case je:
          a.type = $f(e.type);
          break;
        case pe:
          a.type = WS(e.type);
          break;
        case Ne:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function pb(e, t) {
      e.flags &= Un | gn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = we, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = we, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function vb(e, t, a) {
      var i;
      return e === Fh ? (i = lt, t === !0 && (i |= qe, i |= qt)) : i = _e, _r && (i |= yt), ii(J, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Be, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = pe, p = WS(p)) : p = $f(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case $r:
            return Ho(a.children, u, s, t);
          case oi:
            f = Hn, u |= qe, (u & lt) !== _e && (u |= qt);
            break;
          case si:
            return hb(a, u, s, t);
          case re:
            return mb(a, u, s, t);
          case ie:
            return yb(a, u, s, t);
          case Rn:
            return SR(a, u, s, t);
          case nn:
          case st:
          case on:
          case Cr:
          case Je:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Mi:
                  f = at;
                  break e;
                case R:
                  f = rn;
                  break e;
                case I:
                  f = Ne, p = GS(p);
                  break e;
                case it:
                  f = ot;
                  break e;
                case Ie:
                  f = Cn, p = null;
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
      var g = ii(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ho(e, t, a, i) {
      var u = ii(ut, e, i, t);
      return u.lanes = a, u;
    }
    function hb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ii(xt, e, i, t | yt);
      return u.elementType = si, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function mb(e, t, a, i) {
      var u = ii(Ce, e, i, t);
      return u.elementType = re, u.lanes = a, u;
    }
    function yb(e, t, a, i) {
      var u = ii(It, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = ii(Me, e, i, t);
      u.elementType = Rn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = ii(Te, e, null, t);
      return i.lanes = a, i;
    }
    function gb() {
      var e = ii(le, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function Sb(e) {
      var t = ii(fn, null, null, _e);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ii(Fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = ii(Be, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Eb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = qc(V), this.expirationTimes = qc(Yt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = qc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case xo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new Eb(e, t, a, p, v), x = vb(t, s);
      g.current = x, x.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = w;
      }
      return hg(x), g;
    }
    var r0 = "18.3.1";
    function Cb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ca(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: va,
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
        return ai;
      var t = to(e), a = r_(t);
      if (t.tag === pe) {
        var i = t.type;
        if (zl(i))
          return q0(t, i, a);
      }
      return a;
    }
    function Rb(e, t) {
      {
        var a = to(e);
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
            var f = Kn;
            try {
              Qt(u), a.mode & qe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Qt(f) : yn();
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
      var g = !0, x = CR(a, i, g, e, u, s, f, p, v);
      x.context = RR(null);
      var w = x.current, N = Ta(), U = Fo(w), j = ku(N, U);
      return j.callback = t ?? null, ko(w, j, U), k1(x, U, N), x;
    }
    function $p(e, t, a, i) {
      md(t, e);
      var u = t.current, s = Ta(), f = Fo(u);
      xc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && Kn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ve(Kn) || "Unknown"));
      var v = ku(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = ko(u, v, f);
      return y !== null && (gr(y, u, f, s), Zh(y, u, f)), f;
    }
    function Pm(e) {
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
    function Tb(e) {
      switch (e.tag) {
        case J: {
          var t = e.stateNode;
          if (vu(t)) {
            var a = Yv(t);
            N1(t, a);
          }
          break;
        }
        case Ce: {
          Nu(function() {
            var u = Va(e, ze);
            if (u !== null) {
              var s = Ta();
              gr(u, e, ze, s);
            }
          });
          var i = ze;
          l0(e, i);
          break;
        }
      }
    }
    function _R(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ld(a.retryLane, t));
    }
    function l0(e, t) {
      _R(e, t);
      var a = e.alternate;
      a && _R(a, t);
    }
    function wb(e) {
      if (e.tag === Ce) {
        var t = co, a = Va(e, t);
        if (a !== null) {
          var i = Ta();
          gr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function _b(e) {
      if (e.tag === Ce) {
        var t = Fo(e), a = Va(e, t);
        if (a !== null) {
          var i = Ta();
          gr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function xR(e) {
      var t = ei(e);
      return t === null ? null : t.stateNode;
    }
    var bR = function(e) {
      return null;
    };
    function xb(e) {
      return bR(e);
    }
    var DR = function(e) {
      return !1;
    };
    function bb(e) {
      return DR(e);
    }
    var kR = null, OR = null, LR = null, MR = null, NR = null, zR = null, UR = null, AR = null, FR = null;
    {
      var jR = function(e, t, a) {
        var i = t[a], u = Xe(e) ? e.slice() : Ge({}, e);
        return a + 1 === t.length ? (Xe(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = jR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return jR(e, t, 0);
      }, VR = function(e, t, a, i) {
        var u = t[i], s = Xe(e) ? e.slice() : Ge({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Xe(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = VR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, PR = function(e, t, a) {
        if (t.length !== a.length) {
          _t("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              _t("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return VR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Xe(e) ? e.slice() : Ge({}, e);
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
          var f = Va(e, ze);
          f !== null && gr(f, e, ze, Yt);
        }
      }, OR = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ge({}, e.memoizedProps);
          var s = Va(e, ze);
          s !== null && gr(s, e, ze, Yt);
        }
      }, LR = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = PR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Va(e, ze);
          f !== null && gr(f, e, ze, Yt);
        }
      }, MR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ze);
        i !== null && gr(i, e, ze, Yt);
      }, NR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Va(e, ze);
        a !== null && gr(a, e, ze, Yt);
      }, zR = function(e, t, a) {
        e.pendingProps = PR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Va(e, ze);
        i !== null && gr(i, e, ze, Yt);
      }, UR = function(e) {
        var t = Va(e, ze);
        t !== null && gr(t, e, ze, Yt);
      }, AR = function(e) {
        bR = e;
      }, FR = function(e) {
        DR = e;
      };
    }
    function Db(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function kb(e) {
      return null;
    }
    function Ob() {
      return Kn;
    }
    function Lb(e) {
      var t = e.findFiberByHostInstance, a = wt.ReactCurrentDispatcher;
      return hd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: kR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: MR,
        overridePropsDeletePath: NR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: FR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Db,
        findFiberByHostInstance: t || kb,
        // React Refresh
        findHostInstancesForRefresh: ub,
        scheduleRefresh: ib,
        scheduleRoot: lb,
        setRefreshHandler: ab,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ob,
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
    Bm.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Ym(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Nn) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      $p(e, t, null, null);
    }, Bm.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Nu(function() {
          $p(null, e, null, null);
        }), I0(t);
      }
    };
    function Mb(e, t) {
      if (!Ym(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $R(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? _t("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, Fh, null, a, i, u, s);
      Oh(f.current, e);
      var p = e.nodeType === Nn ? e.parentNode : e;
      return Kd(p), new o0(f);
    }
    function Bm(e) {
      this._internalRoot = e;
    }
    function Nb(e) {
      e && eh(e);
    }
    Bm.prototype.unstable_scheduleHydration = Nb;
    function zb(e, t, a) {
      if (!Ym(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $R(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Fh, i, s, f, p, v);
      if (Oh(y.current, e), Kd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          j_(y, x);
        }
      return new Bm(y);
    }
    function Ym(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Pi || e.nodeType === Go));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === qr || e.nodeType === Pi || e.nodeType === Go || e.nodeType === Nn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $R(e) {
      e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), op(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ub = wt.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Nn) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && wo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === qr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === Pi ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function Ab(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Pm(f);
            s.call(w);
          };
        }
        var f = wR(
          t,
          i,
          e,
          xo,
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
        e._reactRootContainer = f, Oh(f.current, e);
        var p = e.nodeType === Nn ? e.parentNode : e;
        return Kd(p), Nu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Pm(g);
            y.call(w);
          };
        }
        var g = TR(
          e,
          xo,
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
        e._reactRootContainer = g, Oh(g.current, e);
        var x = e.nodeType === Nn ? e.parentNode : e;
        return Kd(x), Nu(function() {
          $p(t, g, a, i);
        }), g;
      }
    }
    function Fb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Im(e, t, a, i, u) {
      QR(a), Fb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ab(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Pm(f);
            p.call(v);
          };
        }
        $p(t, f, e, u);
      }
      return Pm(f);
    }
    var GR = !1;
    function jb(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Ub.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === qr ? e : Rb(e, "findDOMNode");
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Im(null, e, t, !0, a);
    }
    function Vb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Im(null, e, t, !1, a);
    }
    function Pb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ru(e))
        throw new Error("parentComponent must be a valid React Component");
      return Im(e, t, a, !1, i);
    }
    var qR = !1;
    function Bb(e) {
      if (qR || (qR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = op(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !wo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Nu(function() {
          Im(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && wo(u)), f = e.nodeType === qr && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    sy(Tb), Ud(wb), cy(_b), ef(ya), Xv(Gv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), rs(IT), Dv(VS, z1, Nu);
    function Yb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ym(t))
        throw new Error("Target container is not a DOM element.");
      return Cb(e, t, null, a);
    }
    function Ib(e, t, a, i) {
      return Pb(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [wo, Rf, Lh, id, Ku, VS]
    };
    function $b(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Mb(e, t);
    }
    function Qb(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), zb(e, t, a);
    }
    function Wb(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Nu(e);
    }
    var Gb = Lb({
      findFiberByHostInstance: Ps,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!Gb && Wn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    $a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, $a.createPortal = Yb, $a.createRoot = $b, $a.findDOMNode = jb, $a.flushSync = Wb, $a.hydrate = Hb, $a.hydrateRoot = Qb, $a.render = Vb, $a.unmountComponentAtNode = Bb, $a.unstable_batchedUpdates = VS, $a.unstable_renderSubtreeIntoContainer = Ib, $a.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), $a;
}
var oT = {};
function sT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (oT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sT);
    } catch (K) {
      console.error(K);
    }
  }
}
oT.NODE_ENV === "production" ? (sT(), h0.exports = uD()) : h0.exports = oD();
var sD = h0.exports, cD = {}, Xp = sD;
if (cD.NODE_ENV === "production")
  Zp.createRoot = Xp.createRoot, Zp.hydrateRoot = Xp.hydrateRoot;
else {
  var Qm = Xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Zp.createRoot = function(K, ve) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Xp.createRoot(K, ve);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  }, Zp.hydrateRoot = function(K, ve, A) {
    Qm.usingClientEntryPoint = !0;
    try {
      return Xp.hydrateRoot(K, ve, A);
    } finally {
      Qm.usingClientEntryPoint = !1;
    }
  };
}
function fD() {
  return /* @__PURE__ */ Wm.jsx("div", { children: /* @__PURE__ */ Wm.jsx("h1", { children: "Hello World" }) });
}
const cT = "pico-widget-container", lT = document.getElementById(cT);
lT ? Zp.createRoot(lT).render(
  /* @__PURE__ */ Wm.jsx(tD.StrictMode, { children: /* @__PURE__ */ Wm.jsx(fD, {}) })
) : console.warn(`Pico Widget: Container element #${cT} not found. Widget will not render.`);
