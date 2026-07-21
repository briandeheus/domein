(function () {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) o(j);
  new MutationObserver((j) => {
    for (const Y of j)
      if (Y.type === "childList")
        for (const Q of Y.addedNodes)
          Q.tagName === "LINK" && Q.rel === "modulepreload" && o(Q);
  }).observe(document, { childList: !0, subtree: !0 });
  function x(j) {
    const Y = {};
    return (
      j.integrity && (Y.integrity = j.integrity),
      j.referrerPolicy && (Y.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (Y.credentials = "include")
        : j.crossOrigin === "anonymous"
          ? (Y.credentials = "omit")
          : (Y.credentials = "same-origin"),
      Y
    );
  }
  function o(j) {
    if (j.ep) return;
    j.ep = !0;
    const Y = x(j);
    fetch(j.href, Y);
  }
})();
function uv(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var oi = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm;
function ev() {
  if (Tm) return Ae;
  Tm = 1;
  var b = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.fragment");
  function x(o, j, Y) {
    var Q = null;
    if (
      (Y !== void 0 && (Q = "" + Y),
      j.key !== void 0 && (Q = "" + j.key),
      "key" in j)
    ) {
      Y = {};
      for (var ll in j) ll !== "key" && (Y[ll] = j[ll]);
    } else Y = j;
    return (
      (j = Y.ref),
      { $$typeof: b, type: o, key: Q, ref: j !== void 0 ? j : null, props: Y }
    );
  }
  return ((Ae.Fragment = p), (Ae.jsx = x), (Ae.jsxs = x), Ae);
}
var Am;
function nv() {
  return (Am || ((Am = 1), (oi.exports = ev())), oi.exports);
}
var S = nv(),
  yi = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om;
function cv() {
  if (Om) return X;
  Om = 1;
  var b = Symbol.for("react.transitional.element"),
    p = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    Y = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    ll = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    C = Symbol.for("react.activity"),
    Z = Symbol.iterator;
  function El(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (Z && d[Z]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Sl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Dl = Object.assign,
    Il = {};
  function M(d, O, D) {
    ((this.props = d),
      (this.context = O),
      (this.refs = Il),
      (this.updater = D || Sl));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (d, O) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, O, "setState");
    }),
    (M.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function dt() {}
  dt.prototype = M.prototype;
  function Ul(d, O, D) {
    ((this.props = d),
      (this.context = O),
      (this.refs = Il),
      (this.updater = D || Sl));
  }
  var mt = (Ul.prototype = new dt());
  ((mt.constructor = Ul), Dl(mt, M.prototype), (mt.isPureReactComponent = !0));
  var Mt = Array.isArray;
  function Zl() {}
  var I = { H: null, A: null, T: null, S: null },
    Ll = Object.prototype.hasOwnProperty;
  function Nt(d, O, D) {
    var H = D.ref;
    return {
      $$typeof: b,
      type: d,
      key: O,
      ref: H !== void 0 ? H : null,
      props: D,
    };
  }
  function Va(d, O) {
    return Nt(d.type, O, d.props);
  }
  function Dt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === b;
  }
  function Vl(d) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (D) {
        return O[D];
      })
    );
  }
  var Aa = /\/+/g;
  function Rt(d, O) {
    return typeof d == "object" && d !== null && d.key != null
      ? Vl("" + d.key)
      : O.toString(36);
  }
  function Tt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Zl, Zl)
            : ((d.status = "pending"),
              d.then(
                function (O) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = O));
                },
                function (O) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = O));
                },
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function z(d, O, D, H, L) {
    var w = typeof d;
    (w === "undefined" || w === "boolean") && (d = null);
    var el = !1;
    if (d === null) el = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          el = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case b:
            case p:
              el = !0;
              break;
            case J:
              return ((el = d._init), z(el(d._payload), O, D, H, L));
          }
      }
    if (el)
      return (
        (L = L(d)),
        (el = H === "" ? "." + Rt(d, 0) : H),
        Mt(L)
          ? ((D = ""),
            el != null && (D = el.replace(Aa, "$&/") + "/"),
            z(L, O, D, "", function (Uu) {
              return Uu;
            }))
          : L != null &&
            (Dt(L) &&
              (L = Va(
                L,
                D +
                  (L.key == null || (d && d.key === L.key)
                    ? ""
                    : ("" + L.key).replace(Aa, "$&/") + "/") +
                  el,
              )),
            O.push(L)),
        1
      );
    el = 0;
    var Gl = H === "" ? "." : H + ":";
    if (Mt(d))
      for (var zl = 0; zl < d.length; zl++)
        ((H = d[zl]), (w = Gl + Rt(H, zl)), (el += z(H, O, D, w, L)));
    else if (((zl = El(d)), typeof zl == "function"))
      for (d = zl.call(d), zl = 0; !(H = d.next()).done;)
        ((H = H.value), (w = Gl + Rt(H, zl++)), (el += z(H, O, D, w, L)));
    else if (w === "object") {
      if (typeof d.then == "function") return z(Tt(d), O, D, H, L);
      throw (
        (O = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return el;
  }
  function N(d, O, D) {
    if (d == null) return d;
    var H = [],
      L = 0;
    return (
      z(d, H, "", "", function (w) {
        return O.call(D, w, L++);
      }),
      H
    );
  }
  function G(d) {
    if (d._status === -1) {
      var O = d._result;
      ((O = O()),
        O.then(
          function (D) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = D));
          },
          function (D) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = D));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = O)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var il =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var O = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(O)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    ol = {
      map: N,
      forEach: function (d, O, D) {
        N(
          d,
          function () {
            O.apply(this, arguments);
          },
          D,
        );
      },
      count: function (d) {
        var O = 0;
        return (
          N(d, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (d) {
        return (
          N(d, function (O) {
            return O;
          }) || []
        );
      },
      only: function (d) {
        if (!Dt(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    };
  return (
    (X.Activity = C),
    (X.Children = ol),
    (X.Component = M),
    (X.Fragment = x),
    (X.Profiler = j),
    (X.PureComponent = Ul),
    (X.StrictMode = o),
    (X.Suspense = _),
    (X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (X.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return I.H.useMemoCache(d);
      },
    }),
    (X.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (X.cacheSignal = function () {
      return null;
    }),
    (X.cloneElement = function (d, O, D) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + ".",
        );
      var H = Dl({}, d.props),
        L = d.key;
      if (O != null)
        for (w in (O.key !== void 0 && (L = "" + O.key), O))
          !Ll.call(O, w) ||
            w === "key" ||
            w === "__self" ||
            w === "__source" ||
            (w === "ref" && O.ref === void 0) ||
            (H[w] = O[w]);
      var w = arguments.length - 2;
      if (w === 1) H.children = D;
      else if (1 < w) {
        for (var el = Array(w), Gl = 0; Gl < w; Gl++)
          el[Gl] = arguments[Gl + 2];
        H.children = el;
      }
      return Nt(d.type, L, H);
    }),
    (X.createContext = function (d) {
      return (
        (d = {
          $$typeof: Q,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: Y, _context: d }),
        d
      );
    }),
    (X.createElement = function (d, O, D) {
      var H,
        L = {},
        w = null;
      if (O != null)
        for (H in (O.key !== void 0 && (w = "" + O.key), O))
          Ll.call(O, H) &&
            H !== "key" &&
            H !== "__self" &&
            H !== "__source" &&
            (L[H] = O[H]);
      var el = arguments.length - 2;
      if (el === 1) L.children = D;
      else if (1 < el) {
        for (var Gl = Array(el), zl = 0; zl < el; zl++)
          Gl[zl] = arguments[zl + 2];
        L.children = Gl;
      }
      if (d && d.defaultProps)
        for (H in ((el = d.defaultProps), el))
          L[H] === void 0 && (L[H] = el[H]);
      return Nt(d, w, L);
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (d) {
      return { $$typeof: ll, render: d };
    }),
    (X.isValidElement = Dt),
    (X.lazy = function (d) {
      return { $$typeof: J, _payload: { _status: -1, _result: d }, _init: G };
    }),
    (X.memo = function (d, O) {
      return { $$typeof: E, type: d, compare: O === void 0 ? null : O };
    }),
    (X.startTransition = function (d) {
      var O = I.T,
        D = {};
      I.T = D;
      try {
        var H = d(),
          L = I.S;
        (L !== null && L(D, H),
          typeof H == "object" &&
            H !== null &&
            typeof H.then == "function" &&
            H.then(Zl, il));
      } catch (w) {
        il(w);
      } finally {
        (O !== null && D.types !== null && (O.types = D.types), (I.T = O));
      }
    }),
    (X.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (X.use = function (d) {
      return I.H.use(d);
    }),
    (X.useActionState = function (d, O, D) {
      return I.H.useActionState(d, O, D);
    }),
    (X.useCallback = function (d, O) {
      return I.H.useCallback(d, O);
    }),
    (X.useContext = function (d) {
      return I.H.useContext(d);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (d, O) {
      return I.H.useDeferredValue(d, O);
    }),
    (X.useEffect = function (d, O) {
      return I.H.useEffect(d, O);
    }),
    (X.useEffectEvent = function (d) {
      return I.H.useEffectEvent(d);
    }),
    (X.useId = function () {
      return I.H.useId();
    }),
    (X.useImperativeHandle = function (d, O, D) {
      return I.H.useImperativeHandle(d, O, D);
    }),
    (X.useInsertionEffect = function (d, O) {
      return I.H.useInsertionEffect(d, O);
    }),
    (X.useLayoutEffect = function (d, O) {
      return I.H.useLayoutEffect(d, O);
    }),
    (X.useMemo = function (d, O) {
      return I.H.useMemo(d, O);
    }),
    (X.useOptimistic = function (d, O) {
      return I.H.useOptimistic(d, O);
    }),
    (X.useReducer = function (d, O, D) {
      return I.H.useReducer(d, O, D);
    }),
    (X.useRef = function (d) {
      return I.H.useRef(d);
    }),
    (X.useState = function (d) {
      return I.H.useState(d);
    }),
    (X.useSyncExternalStore = function (d, O, D) {
      return I.H.useSyncExternalStore(d, O, D);
    }),
    (X.useTransition = function () {
      return I.H.useTransition();
    }),
    (X.version = "19.2.7"),
    X
  );
}
var _m;
function bi() {
  return (_m || ((_m = 1), (yi.exports = cv())), yi.exports);
}
var fl = bi();
const fv = uv(fl);
var vi = { exports: {} },
  Oe = {},
  hi = { exports: {} },
  ri = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mm;
function iv() {
  return (
    Mm ||
      ((Mm = 1),
      (function (b) {
        function p(z, N) {
          var G = z.length;
          z.push(N);
          l: for (; 0 < G;) {
            var il = (G - 1) >>> 1,
              ol = z[il];
            if (0 < j(ol, N)) ((z[il] = N), (z[G] = ol), (G = il));
            else break l;
          }
        }
        function x(z) {
          return z.length === 0 ? null : z[0];
        }
        function o(z) {
          if (z.length === 0) return null;
          var N = z[0],
            G = z.pop();
          if (G !== N) {
            z[0] = G;
            l: for (var il = 0, ol = z.length, d = ol >>> 1; il < d;) {
              var O = 2 * (il + 1) - 1,
                D = z[O],
                H = O + 1,
                L = z[H];
              if (0 > j(D, G))
                H < ol && 0 > j(L, D)
                  ? ((z[il] = L), (z[H] = G), (il = H))
                  : ((z[il] = D), (z[O] = G), (il = O));
              else if (H < ol && 0 > j(L, G))
                ((z[il] = L), (z[H] = G), (il = H));
              else break l;
            }
          }
          return N;
        }
        function j(z, N) {
          var G = z.sortIndex - N.sortIndex;
          return G !== 0 ? G : z.id - N.id;
        }
        if (
          ((b.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var Y = performance;
          b.unstable_now = function () {
            return Y.now();
          };
        } else {
          var Q = Date,
            ll = Q.now();
          b.unstable_now = function () {
            return Q.now() - ll;
          };
        }
        var _ = [],
          E = [],
          J = 1,
          C = null,
          Z = 3,
          El = !1,
          Sl = !1,
          Dl = !1,
          Il = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          dt = typeof clearTimeout == "function" ? clearTimeout : null,
          Ul = typeof setImmediate < "u" ? setImmediate : null;
        function mt(z) {
          for (var N = x(E); N !== null;) {
            if (N.callback === null) o(E);
            else if (N.startTime <= z)
              (o(E), (N.sortIndex = N.expirationTime), p(_, N));
            else break;
            N = x(E);
          }
        }
        function Mt(z) {
          if (((Dl = !1), mt(z), !Sl))
            if (x(_) !== null) ((Sl = !0), Zl || ((Zl = !0), Vl()));
            else {
              var N = x(E);
              N !== null && Tt(Mt, N.startTime - z);
            }
        }
        var Zl = !1,
          I = -1,
          Ll = 5,
          Nt = -1;
        function Va() {
          return Il ? !0 : !(b.unstable_now() - Nt < Ll);
        }
        function Dt() {
          if (((Il = !1), Zl)) {
            var z = b.unstable_now();
            Nt = z;
            var N = !0;
            try {
              l: {
                ((Sl = !1), Dl && ((Dl = !1), dt(I), (I = -1)), (El = !0));
                var G = Z;
                try {
                  t: {
                    for (
                      mt(z), C = x(_);
                      C !== null && !(C.expirationTime > z && Va());
                    ) {
                      var il = C.callback;
                      if (typeof il == "function") {
                        ((C.callback = null), (Z = C.priorityLevel));
                        var ol = il(C.expirationTime <= z);
                        if (((z = b.unstable_now()), typeof ol == "function")) {
                          ((C.callback = ol), mt(z), (N = !0));
                          break t;
                        }
                        (C === x(_) && o(_), mt(z));
                      } else o(_);
                      C = x(_);
                    }
                    if (C !== null) N = !0;
                    else {
                      var d = x(E);
                      (d !== null && Tt(Mt, d.startTime - z), (N = !1));
                    }
                  }
                  break l;
                } finally {
                  ((C = null), (Z = G), (El = !1));
                }
                N = void 0;
              }
            } finally {
              N ? Vl() : (Zl = !1);
            }
          }
        }
        var Vl;
        if (typeof Ul == "function")
          Vl = function () {
            Ul(Dt);
          };
        else if (typeof MessageChannel < "u") {
          var Aa = new MessageChannel(),
            Rt = Aa.port2;
          ((Aa.port1.onmessage = Dt),
            (Vl = function () {
              Rt.postMessage(null);
            }));
        } else
          Vl = function () {
            M(Dt, 0);
          };
        function Tt(z, N) {
          I = M(function () {
            z(b.unstable_now());
          }, N);
        }
        ((b.unstable_IdlePriority = 5),
          (b.unstable_ImmediatePriority = 1),
          (b.unstable_LowPriority = 4),
          (b.unstable_NormalPriority = 3),
          (b.unstable_Profiling = null),
          (b.unstable_UserBlockingPriority = 2),
          (b.unstable_cancelCallback = function (z) {
            z.callback = null;
          }),
          (b.unstable_forceFrameRate = function (z) {
            0 > z || 125 < z
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ll = 0 < z ? Math.floor(1e3 / z) : 5);
          }),
          (b.unstable_getCurrentPriorityLevel = function () {
            return Z;
          }),
          (b.unstable_next = function (z) {
            switch (Z) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = Z;
            }
            var G = Z;
            Z = N;
            try {
              return z();
            } finally {
              Z = G;
            }
          }),
          (b.unstable_requestPaint = function () {
            Il = !0;
          }),
          (b.unstable_runWithPriority = function (z, N) {
            switch (z) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                z = 3;
            }
            var G = Z;
            Z = z;
            try {
              return N();
            } finally {
              Z = G;
            }
          }),
          (b.unstable_scheduleCallback = function (z, N, G) {
            var il = b.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? il + G : il))
                : (G = il),
              z)
            ) {
              case 1:
                var ol = -1;
                break;
              case 2:
                ol = 250;
                break;
              case 5:
                ol = 1073741823;
                break;
              case 4:
                ol = 1e4;
                break;
              default:
                ol = 5e3;
            }
            return (
              (ol = G + ol),
              (z = {
                id: J++,
                callback: N,
                priorityLevel: z,
                startTime: G,
                expirationTime: ol,
                sortIndex: -1,
              }),
              G > il
                ? ((z.sortIndex = G),
                  p(E, z),
                  x(_) === null &&
                    z === x(E) &&
                    (Dl ? (dt(I), (I = -1)) : (Dl = !0), Tt(Mt, G - il)))
                : ((z.sortIndex = ol),
                  p(_, z),
                  Sl || El || ((Sl = !0), Zl || ((Zl = !0), Vl()))),
              z
            );
          }),
          (b.unstable_shouldYield = Va),
          (b.unstable_wrapCallback = function (z) {
            var N = Z;
            return function () {
              var G = Z;
              Z = N;
              try {
                return z.apply(this, arguments);
              } finally {
                Z = G;
              }
            };
          }));
      })(ri)),
    ri
  );
}
var Nm;
function sv() {
  return (Nm || ((Nm = 1), (hi.exports = iv())), hi.exports);
}
var Si = { exports: {} },
  Yl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm;
function dv() {
  if (Dm) return Yl;
  Dm = 1;
  var b = bi();
  function p(_) {
    var E = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        E += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return (
      "Minified React error #" +
      _ +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x() {}
  var o = {
      d: {
        f: x,
        r: function () {
          throw Error(p(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
      },
      p: 0,
      findDOMNode: null,
    },
    j = Symbol.for("react.portal");
  function Y(_, E, J) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: C == null ? null : "" + C,
      children: _,
      containerInfo: E,
      implementation: J,
    };
  }
  var Q = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ll(_, E) {
    if (_ === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Yl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Yl.createPortal = function (_, E) {
      var J =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(p(299));
      return Y(_, E, null, J);
    }),
    (Yl.flushSync = function (_) {
      var E = Q.T,
        J = o.p;
      try {
        if (((Q.T = null), (o.p = 2), _)) return _();
      } finally {
        ((Q.T = E), (o.p = J), o.d.f());
      }
    }),
    (Yl.preconnect = function (_, E) {
      typeof _ == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        o.d.C(_, E));
    }),
    (Yl.prefetchDNS = function (_) {
      typeof _ == "string" && o.d.D(_);
    }),
    (Yl.preinit = function (_, E) {
      if (typeof _ == "string" && E && typeof E.as == "string") {
        var J = E.as,
          C = ll(J, E.crossOrigin),
          Z = typeof E.integrity == "string" ? E.integrity : void 0,
          El = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        J === "style"
          ? o.d.S(_, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: C,
              integrity: Z,
              fetchPriority: El,
            })
          : J === "script" &&
            o.d.X(_, {
              crossOrigin: C,
              integrity: Z,
              fetchPriority: El,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Yl.preinitModule = function (_, E) {
      if (typeof _ == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var J = ll(E.as, E.crossOrigin);
            o.d.M(_, {
              crossOrigin: J,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && o.d.M(_);
    }),
    (Yl.preload = function (_, E) {
      if (
        typeof _ == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var J = E.as,
          C = ll(J, E.crossOrigin);
        o.d.L(_, J, {
          crossOrigin: C,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Yl.preloadModule = function (_, E) {
      if (typeof _ == "string")
        if (E) {
          var J = ll(E.as, E.crossOrigin);
          o.d.m(_, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: J,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else o.d.m(_);
    }),
    (Yl.requestFormReset = function (_) {
      o.d.r(_);
    }),
    (Yl.unstable_batchedUpdates = function (_, E) {
      return _(E);
    }),
    (Yl.useFormState = function (_, E, J) {
      return Q.H.useFormState(_, E, J);
    }),
    (Yl.useFormStatus = function () {
      return Q.H.useHostTransitionStatus();
    }),
    (Yl.version = "19.2.7"),
    Yl
  );
}
var pm;
function mv() {
  if (pm) return Si.exports;
  pm = 1;
  function b() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (p) {
        console.error(p);
      }
  }
  return (b(), (Si.exports = dv()), Si.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um;
function ov() {
  if (Um) return Oe;
  Um = 1;
  var b = sv(),
    p = bi(),
    x = mv();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function Y(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return;) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function Q(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ll(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _(l) {
    if (Y(l) !== l) throw Error(o(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = Y(l)), t === null)) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ;) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n;) {
          if (n === a) return (_(e), l);
          if (n === u) return (_(e), t);
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var c = !1, f = e.child; f;) {
          if (f === a) {
            ((c = !0), (a = e), (u = n));
            break;
          }
          if (f === u) {
            ((c = !0), (u = e), (a = n));
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f;) {
            if (f === a) {
              ((c = !0), (a = n), (u = e));
              break;
            }
            if (f === u) {
              ((c = !0), (u = n), (a = e));
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null;) {
      if (((t = J(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign,
    Z = Symbol.for("react.element"),
    El = Symbol.for("react.transitional.element"),
    Sl = Symbol.for("react.portal"),
    Dl = Symbol.for("react.fragment"),
    Il = Symbol.for("react.strict_mode"),
    M = Symbol.for("react.profiler"),
    dt = Symbol.for("react.consumer"),
    Ul = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    Mt = Symbol.for("react.suspense"),
    Zl = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Ll = Symbol.for("react.lazy"),
    Nt = Symbol.for("react.activity"),
    Va = Symbol.for("react.memo_cache_sentinel"),
    Dt = Symbol.iterator;
  function Vl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Dt && l[Dt]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Aa = Symbol.for("react.client.reference");
  function Rt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Aa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Dl:
        return "Fragment";
      case M:
        return "Profiler";
      case Il:
        return "StrictMode";
      case Mt:
        return "Suspense";
      case Zl:
        return "SuspenseList";
      case Nt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Sl:
          return "Portal";
        case Ul:
          return l.displayName || "Context";
        case dt:
          return (l._context.displayName || "Context") + ".Consumer";
        case mt:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case I:
          return (
            (t = l.displayName || null),
            t !== null ? t : Rt(l.type) || "Memo"
          );
        case Ll:
          ((t = l._payload), (l = l._init));
          try {
            return Rt(l(t));
          } catch {}
      }
    return null;
  }
  var Tt = Array.isArray,
    z = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    il = [],
    ol = -1;
  function d(l) {
    return { current: l };
  }
  function O(l) {
    0 > ol || ((l.current = il[ol]), (il[ol] = null), ol--);
  }
  function D(l, t) {
    (ol++, (il[ol] = l.current), (l.current = t));
  }
  var H = d(null),
    L = d(null),
    w = d(null),
    el = d(null);
  function Gl(l, t) {
    switch ((D(w, t), D(L, l), D(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? K0(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = K0(t)), (l = J0(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (O(H), D(H, l));
  }
  function zl() {
    (O(H), O(L), O(w));
  }
  function Uu(l) {
    l.memoizedState !== null && D(el, l);
    var t = H.current,
      a = J0(t, l.type);
    t !== a && (D(L, l), D(H, a));
  }
  function _e(l) {
    (L.current === l && (O(H), O(L)),
      el.current === l && (O(el), (be._currentValue = G)));
  }
  var wn, zi;
  function Oa(l) {
    if (wn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((wn = (t && t[1]) || ""),
          (zi =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      wn +
      l +
      zi
    );
  }
  var $n = !1;
  function Wn(l, t) {
    if (!l || $n) return "";
    $n = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var A = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(A.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(A, []);
                } catch (r) {
                  var h = r;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (r) {
                  h = r;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                h = r;
              }
              (A = l()) &&
                typeof A.catch == "function" &&
                A.catch(function () {});
            }
          } catch (r) {
            if (r && h && typeof r.stack == "string") return [r.stack, h.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          v = f.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < v.length && !v[e].includes("DetermineComponentFrameRoot");)
          e++;
        if (u === i.length || e === v.length)
          for (
            u = i.length - 1, e = v.length - 1;
            1 <= u && 0 <= e && i[u] !== v[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== v[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== v[e])) {
                  var g =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (($n = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Oa(a) : "";
  }
  function Rm(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Oa(l.type);
      case 16:
        return Oa("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Oa("Suspense Fallback")
          : Oa("Suspense");
      case 19:
        return Oa("SuspenseList");
      case 0:
      case 15:
        return Wn(l.type, !1);
      case 11:
        return Wn(l.type.render, !1);
      case 1:
        return Wn(l.type, !0);
      case 31:
        return Oa("Activity");
      default:
        return "";
    }
  }
  function Ti(l) {
    try {
      var t = "",
        a = null;
      do ((t += Rm(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var kn = Object.prototype.hasOwnProperty,
    Fn = b.unstable_scheduleCallback,
    In = b.unstable_cancelCallback,
    xm = b.unstable_shouldYield,
    Cm = b.unstable_requestPaint,
    Pl = b.unstable_now,
    Bm = b.unstable_getCurrentPriorityLevel,
    Ai = b.unstable_ImmediatePriority,
    Oi = b.unstable_UserBlockingPriority,
    Me = b.unstable_NormalPriority,
    qm = b.unstable_LowPriority,
    _i = b.unstable_IdlePriority,
    Ym = b.log,
    Gm = b.unstable_setDisableYieldValue,
    ju = null,
    lt = null;
  function It(l) {
    if (
      (typeof Ym == "function" && Gm(l),
      lt && typeof lt.setStrictMode == "function")
    )
      try {
        lt.setStrictMode(ju, l);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : Zm,
    Xm = Math.log,
    Qm = Math.LN2;
  function Zm(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Xm(l) / Qm) | 0)) | 0);
  }
  var Ne = 256,
    De = 262144,
    pe = 4194304;
  function _a(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ue(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return (
      f !== 0
        ? ((u = f & ~n),
          u !== 0
            ? (e = _a(u))
            : ((c &= f),
              c !== 0
                ? (e = _a(c))
                : a || ((a = f & ~l), a !== 0 && (e = _a(a)))))
        : ((f = u & ~n),
          f !== 0
            ? (e = _a(f))
            : c !== 0
              ? (e = _a(c))
              : a || ((a = u & ~l), a !== 0 && (e = _a(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Hu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Lm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mi() {
    var l = pe;
    return ((pe <<= 1), (pe & 62914560) === 0 && (pe = 4194304), l);
  }
  function Pn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ru(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Vm(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      i = l.expirationTimes,
      v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a;) {
      var g = 31 - tt(a),
        A = 1 << g;
      ((f[g] = 0), (i[g] = -1));
      var h = v[g];
      if (h !== null)
        for (v[g] = null, g = 0; g < h.length; g++) {
          var r = h[g];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~A;
    }
    (u !== 0 && Ni(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function Ni(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - tt(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Di(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a;) {
      var u = 31 - tt(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function pi(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : lc(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function lc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function tc(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ui() {
    var l = N.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : hm(l.type));
  }
  function ji(l, t) {
    var a = N.p;
    try {
      return ((N.p = l), t());
    } finally {
      N.p = a;
    }
  }
  var Pt = Math.random().toString(36).slice(2),
    Rl = "__reactFiber$" + Pt,
    Kl = "__reactProps$" + Pt,
    Ka = "__reactContainer$" + Pt,
    ac = "__reactEvents$" + Pt,
    Km = "__reactListeners$" + Pt,
    Jm = "__reactHandles$" + Pt,
    Hi = "__reactResources$" + Pt,
    xu = "__reactMarker$" + Pt;
  function uc(l) {
    (delete l[Rl], delete l[Kl], delete l[ac], delete l[Km], delete l[Jm]);
  }
  function Ja(l) {
    var t = l[Rl];
    if (t) return t;
    for (var a = l.parentNode; a;) {
      if ((t = a[Ka] || a[Rl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = P0(l); l !== null;) {
            if ((a = l[Rl])) return a;
            l = P0(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function wa(l) {
    if ((l = l[Rl] || l[Ka])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function Cu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function $a(l) {
    var t = l[Hi];
    return (
      t ||
        (t = l[Hi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function jl(l) {
    l[xu] = !0;
  }
  var Ri = new Set(),
    xi = {};
  function Ma(l, t) {
    (Wa(l, t), Wa(l + "Capture", t));
  }
  function Wa(l, t) {
    for (xi[l] = t, l = 0; l < t.length; l++) Ri.add(t[l]);
  }
  var wm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ci = {},
    Bi = {};
  function $m(l) {
    return kn.call(Bi, l)
      ? !0
      : kn.call(Ci, l)
        ? !1
        : wm.test(l)
          ? (Bi[l] = !0)
          : ((Ci[l] = !0), !1);
  }
  function je(l, t, a) {
    if ($m(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function He(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function xt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function ot(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function qi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Wm(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function ec(l) {
    if (!l._valueTracker) {
      var t = qi(l) ? "checked" : "value";
      l._valueTracker = Wm(l, t, "" + l[t]);
    }
  }
  function Yi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = qi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Re(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var km = /[\n"\\]/g;
  function yt(l) {
    return l.replace(km, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function nc(l, t, a, u, e, n, c, f) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ot(t))
          : l.value !== "" + ot(t) && (l.value = "" + ot(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? cc(l, c, ot(t))
        : a != null
          ? cc(l, c, ot(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ot(f))
        : l.removeAttribute("name"));
  }
  function Gi(l, t, a, u, e, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        ec(l);
        return;
      }
      ((a = a != null ? "" + ot(a) : ""),
        (t = t != null ? "" + ot(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      ec(l));
  }
  function cc(l, t, a) {
    (t === "number" && Re(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function ka(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ot(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xi(l, t, a) {
    if (
      t != null &&
      ((t = "" + ot(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ot(a) : "";
  }
  function Qi(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (Tt(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ot(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      ec(l));
  }
  function Fa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Fm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Zi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Fm.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Li(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Zi(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && Zi(l, n, t[n]);
  }
  function fc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Im = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xe(l) {
    return Pm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Ct() {}
  var ic = null;
  function sc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Ia = null,
    Pa = null;
  function Vi(l) {
    var t = wa(l);
    if (t && (l = t.stateNode)) {
      var a = l[Kl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (nc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + yt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Kl] || null;
                if (!e) throw Error(o(90));
                nc(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && Yi(u));
          }
          break l;
        case "textarea":
          Xi(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && ka(l, !!a.multiple, t, !1));
      }
    }
  }
  var dc = !1;
  function Ki(l, t, a) {
    if (dc) return l(t, a);
    dc = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((dc = !1),
        (Ia !== null || Pa !== null) &&
          (Tn(), Ia && ((t = Ia), (l = Pa), (Pa = Ia = null), Vi(t), l)))
      )
        for (t = 0; t < l.length; t++) Vi(l[t]);
    }
  }
  function Bu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Kl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Bt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    mc = !1;
  if (Bt)
    try {
      var qu = {};
      (Object.defineProperty(qu, "passive", {
        get: function () {
          mc = !0;
        },
      }),
        window.addEventListener("test", qu, qu),
        window.removeEventListener("test", qu, qu));
    } catch {
      mc = !1;
    }
  var la = null,
    oc = null,
    Ce = null;
  function Ji() {
    if (Ce) return Ce;
    var l,
      t = oc,
      a = t.length,
      u,
      e = "value" in la ? la.value : la.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Ce = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Be(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function qe() {
    return !0;
  }
  function wi() {
    return !1;
  }
  function Jl(l) {
    function t(a, u, e, n, c) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? qe
          : wi),
        (this.isPropagationStopped = wi),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = qe));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = qe));
        },
        persist: function () {},
        isPersistent: qe,
      }),
      t
    );
  }
  var Na = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ye = Jl(Na),
    Yu = C({}, Na, { view: 0, detail: 0 }),
    lo = Jl(Yu),
    yc,
    vc,
    Gu,
    Ge = C({}, Yu, {
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
      getModifierState: rc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Gu &&
              (Gu && l.type === "mousemove"
                ? ((yc = l.screenX - Gu.screenX), (vc = l.screenY - Gu.screenY))
                : (vc = yc = 0),
              (Gu = l)),
            yc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : vc;
      },
    }),
    $i = Jl(Ge),
    to = C({}, Ge, { dataTransfer: 0 }),
    ao = Jl(to),
    uo = C({}, Yu, { relatedTarget: 0 }),
    hc = Jl(uo),
    eo = C({}, Na, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    no = Jl(eo),
    co = C({}, Na, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    fo = Jl(co),
    io = C({}, Na, { data: 0 }),
    Wi = Jl(io),
    so = {
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
      MozPrintableKey: "Unidentified",
    },
    mo = {
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
      224: "Meta",
    },
    oo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function yo(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = oo[l])
        ? !!t[l]
        : !1;
  }
  function rc() {
    return yo;
  }
  var vo = C({}, Yu, {
      key: function (l) {
        if (l.key) {
          var t = so[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Be(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? mo[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rc,
      charCode: function (l) {
        return l.type === "keypress" ? Be(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Be(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    ho = Jl(vo),
    ro = C({}, Ge, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ki = Jl(ro),
    So = C({}, Yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rc,
    }),
    go = Jl(So),
    bo = C({}, Na, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Eo = Jl(bo),
    zo = C({}, Ge, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    To = Jl(zo),
    Ao = C({}, Na, { newState: 0, oldState: 0 }),
    Oo = Jl(Ao),
    _o = [9, 13, 27, 32],
    Sc = Bt && "CompositionEvent" in window,
    Xu = null;
  Bt && "documentMode" in document && (Xu = document.documentMode);
  var Mo = Bt && "TextEvent" in window && !Xu,
    Fi = Bt && (!Sc || (Xu && 8 < Xu && 11 >= Xu)),
    Ii = " ",
    Pi = !1;
  function ls(l, t) {
    switch (l) {
      case "keyup":
        return _o.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ts(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var lu = !1;
  function No(l, t) {
    switch (l) {
      case "compositionend":
        return ts(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pi = !0), Ii);
      case "textInput":
        return ((l = t.data), l === Ii && Pi ? null : l);
      default:
        return null;
    }
  }
  function Do(l, t) {
    if (lu)
      return l === "compositionend" || (!Sc && ls(l, t))
        ? ((l = Ji()), (Ce = oc = la = null), (lu = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var po = {
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
    week: !0,
  };
  function as(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!po[l.type] : t === "textarea";
  }
  function us(l, t, a, u) {
    (Ia ? (Pa ? Pa.push(u) : (Pa = [u])) : (Ia = u),
      (t = pn(t, "onChange")),
      0 < t.length &&
        ((a = new Ye("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var Qu = null,
    Zu = null;
  function Uo(l) {
    G0(l, 0);
  }
  function Xe(l) {
    var t = Cu(l);
    if (Yi(t)) return l;
  }
  function es(l, t) {
    if (l === "change") return t;
  }
  var ns = !1;
  if (Bt) {
    var gc;
    if (Bt) {
      var bc = "oninput" in document;
      if (!bc) {
        var cs = document.createElement("div");
        (cs.setAttribute("oninput", "return;"),
          (bc = typeof cs.oninput == "function"));
      }
      gc = bc;
    } else gc = !1;
    ns = gc && (!document.documentMode || 9 < document.documentMode);
  }
  function fs() {
    Qu && (Qu.detachEvent("onpropertychange", is), (Zu = Qu = null));
  }
  function is(l) {
    if (l.propertyName === "value" && Xe(Zu)) {
      var t = [];
      (us(t, Zu, l, sc(l)), Ki(Uo, t));
    }
  }
  function jo(l, t, a) {
    l === "focusin"
      ? (fs(), (Qu = t), (Zu = a), Qu.attachEvent("onpropertychange", is))
      : l === "focusout" && fs();
  }
  function Ho(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Xe(Zu);
  }
  function Ro(l, t) {
    if (l === "click") return Xe(t);
  }
  function xo(l, t) {
    if (l === "input" || l === "change") return Xe(t);
  }
  function Co(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : Co;
  function Lu(l, t) {
    if (at(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!kn.call(t, e) || !at(l[e], t[e])) return !1;
    }
    return !0;
  }
  function ss(l) {
    for (; l && l.firstChild;) l = l.firstChild;
    return l;
  }
  function ds(l, t) {
    var a = ss(l);
    l = 0;
    for (var u; a;) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ss(a);
    }
  }
  function ms(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ms(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function os(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Re(l.document); t instanceof l.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Re(l.document);
    }
    return t;
  }
  function Ec(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Bo = Bt && "documentMode" in document && 11 >= document.documentMode,
    tu = null,
    zc = null,
    Vu = null,
    Tc = !1;
  function ys(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Tc ||
      tu == null ||
      tu !== Re(u) ||
      ((u = tu),
      "selectionStart" in u && Ec(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Vu && Lu(Vu, u)) ||
        ((Vu = u),
        (u = pn(zc, "onSelect")),
        0 < u.length &&
          ((t = new Ye("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = tu))));
  }
  function Da(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var au = {
      animationend: Da("Animation", "AnimationEnd"),
      animationiteration: Da("Animation", "AnimationIteration"),
      animationstart: Da("Animation", "AnimationStart"),
      transitionrun: Da("Transition", "TransitionRun"),
      transitionstart: Da("Transition", "TransitionStart"),
      transitioncancel: Da("Transition", "TransitionCancel"),
      transitionend: Da("Transition", "TransitionEnd"),
    },
    Ac = {},
    vs = {};
  Bt &&
    ((vs = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete au.animationend.animation,
      delete au.animationiteration.animation,
      delete au.animationstart.animation),
    "TransitionEvent" in window || delete au.transitionend.transition);
  function pa(l) {
    if (Ac[l]) return Ac[l];
    if (!au[l]) return l;
    var t = au[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in vs) return (Ac[l] = t[a]);
    return l;
  }
  var hs = pa("animationend"),
    rs = pa("animationiteration"),
    Ss = pa("animationstart"),
    qo = pa("transitionrun"),
    Yo = pa("transitionstart"),
    Go = pa("transitioncancel"),
    gs = pa("transitionend"),
    bs = new Map(),
    Oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Oc.push("scrollEnd");
  function At(l, t) {
    (bs.set(l, t), Ma(t, [l]));
  }
  var Qe =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    vt = [],
    uu = 0,
    _c = 0;
  function Ze() {
    for (var l = uu, t = (_c = uu = 0); t < l;) {
      var a = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (((vt[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        (c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e));
      }
      n !== 0 && Es(a, e, n);
    }
  }
  function Le(l, t, a, u) {
    ((vt[uu++] = l),
      (vt[uu++] = t),
      (vt[uu++] = a),
      (vt[uu++] = u),
      (_c |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function Mc(l, t, a, u) {
    return (Le(l, t, a, u), Ve(l));
  }
  function Ua(l, t) {
    return (Le(l, null, null, t), Ve(l));
  }
  function Es(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null;)
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - tt(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ve(l) {
    if (50 < oe) throw ((oe = 0), (Bf = null), Error(o(185)));
    for (var t = l.return; t !== null;) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var eu = {};
  function Xo(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ut(l, t, a, u) {
    return new Xo(l, t, a, u);
  }
  function Nc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function qt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ut(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function zs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ke(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Nc(l) && (c = 1);
    else if (typeof l == "string")
      c = Ky(l, a, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Nt:
          return (
            (l = ut(31, a, t, e)),
            (l.elementType = Nt),
            (l.lanes = n),
            l
          );
        case Dl:
          return ja(a.children, e, n, t);
        case Il:
          ((c = 8), (e |= 24));
          break;
        case M:
          return (
            (l = ut(12, a, t, e | 2)),
            (l.elementType = M),
            (l.lanes = n),
            l
          );
        case Mt:
          return (
            (l = ut(13, a, t, e)),
            (l.elementType = Mt),
            (l.lanes = n),
            l
          );
        case Zl:
          return (
            (l = ut(19, a, t, e)),
            (l.elementType = Zl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Ul:
                c = 10;
                break l;
              case dt:
                c = 9;
                break l;
              case mt:
                c = 11;
                break l;
              case I:
                c = 14;
                break l;
              case Ll:
                ((c = 16), (u = null));
                break l;
            }
          ((c = 29),
            (a = Error(o(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = ut(c, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function ja(l, t, a, u) {
    return ((l = ut(7, l, u, t)), (l.lanes = a), l);
  }
  function Dc(l, t, a) {
    return ((l = ut(6, l, null, t)), (l.lanes = a), l);
  }
  function Ts(l) {
    var t = ut(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function pc(l, t, a) {
    return (
      (t = ut(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var As = new WeakMap();
  function ht(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = As.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Ti(t) }), As.set(l, t), t);
    }
    return { value: l, source: t, stack: Ti(t) };
  }
  var nu = [],
    cu = 0,
    Je = null,
    Ku = 0,
    rt = [],
    St = 0,
    ta = null,
    pt = 1,
    Ut = "";
  function Yt(l, t) {
    ((nu[cu++] = Ku), (nu[cu++] = Je), (Je = l), (Ku = t));
  }
  function Os(l, t, a) {
    ((rt[St++] = pt), (rt[St++] = Ut), (rt[St++] = ta), (ta = l));
    var u = pt;
    l = Ut;
    var e = 32 - tt(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - tt(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      ((n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (pt = (1 << (32 - tt(t) + e)) | (a << e) | u),
        (Ut = n + l));
    } else ((pt = (1 << n) | (a << e) | u), (Ut = l));
  }
  function Uc(l) {
    l.return !== null && (Yt(l, 1), Os(l, 1, 0));
  }
  function jc(l) {
    for (; l === Je;)
      ((Je = nu[--cu]), (nu[cu] = null), (Ku = nu[--cu]), (nu[cu] = null));
    for (; l === ta;)
      ((ta = rt[--St]),
        (rt[St] = null),
        (Ut = rt[--St]),
        (rt[St] = null),
        (pt = rt[--St]),
        (rt[St] = null));
  }
  function _s(l, t) {
    ((rt[St++] = pt),
      (rt[St++] = Ut),
      (rt[St++] = ta),
      (pt = t.id),
      (Ut = t.overflow),
      (ta = l));
  }
  var xl = null,
    vl = null,
    P = !1,
    aa = null,
    gt = !1,
    Hc = Error(o(519));
  function ua(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Ju(ht(t, l)), Hc);
  }
  function Ms(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Rl] = l), (t[Kl] = u), a)) {
      case "dialog":
        (W("cancel", t), W("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ve.length; a++) W(ve[a], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (W("error", t), W("load", t));
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        (W("invalid", t),
          Gi(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        (W("invalid", t), Qi(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      L0(t.textContent, a)
        ? (u.popover != null && (W("beforetoggle", t), W("toggle", t)),
          u.onScroll != null && W("scroll", t),
          u.onScrollEnd != null && W("scrollend", t),
          u.onClick != null && (t.onclick = Ct),
          (t = !0))
        : (t = !1),
      t || ua(l, !0));
  }
  function Ns(l) {
    for (xl = l.return; xl;)
      switch (xl.tag) {
        case 5:
        case 31:
        case 13:
          gt = !1;
          return;
        case 27:
        case 3:
          gt = !0;
          return;
        default:
          xl = xl.return;
      }
  }
  function fu(l) {
    if (l !== xl) return !1;
    if (!P) return (Ns(l), (P = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Ff(l.type, l.memoizedProps))),
        (a = !a)),
      a && vl && ua(l),
      Ns(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      vl = I0(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(o(317));
      vl = I0(l);
    } else
      t === 27
        ? ((t = vl), Sa(l.type) ? ((l = ai), (ai = null), (vl = l)) : (vl = t))
        : (vl = xl ? Et(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ha() {
    ((vl = xl = null), (P = !1));
  }
  function Rc() {
    var l = aa;
    return (
      l !== null &&
        (kl === null ? (kl = l) : kl.push.apply(kl, l), (aa = null)),
      l
    );
  }
  function Ju(l) {
    aa === null ? (aa = [l]) : aa.push(l);
  }
  var xc = d(null),
    Ra = null,
    Gt = null;
  function ea(l, t, a) {
    (D(xc, t._currentValue), (t._currentValue = a));
  }
  function Xt(l) {
    ((l._currentValue = xc.current), O(xc));
  }
  function Cc(l, t, a) {
    for (; l !== null;) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Bc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null;) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null;) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              ((n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Cc(n.return, a, l),
                u || (c = null));
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(o(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Cc(c, a, l),
          (c = null));
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null;) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            ((e.return = c.return), (c = e));
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function iu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null;) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(o(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = e.type;
          at(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === el.current) {
        if (((c = e.alternate), c === null)) throw Error(o(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(be) : (l = [be]));
      }
      e = e.return;
    }
    (l !== null && Bc(t, l, a, u), (t.flags |= 262144));
  }
  function we(l) {
    for (l = l.firstContext; l !== null;) {
      if (!at(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function xa(l) {
    ((Ra = l),
      (Gt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Cl(l) {
    return Ds(Ra, l);
  }
  function $e(l, t) {
    return (Ra === null && xa(l), Ds(l, t));
  }
  function Ds(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Gt === null)) {
      if (l === null) throw Error(o(308));
      ((Gt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Gt = Gt.next = t;
    return a;
  }
  var Qo =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    Zo = b.unstable_scheduleCallback,
    Lo = b.unstable_NormalPriority,
    Ol = {
      $$typeof: Ul,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function qc() {
    return { controller: new Qo(), data: new Map(), refCount: 0 };
  }
  function wu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Zo(Lo, function () {
          l.controller.abort();
        }));
  }
  var $u = null,
    Yc = 0,
    su = 0,
    du = null;
  function Vo(l, t) {
    if ($u === null) {
      var a = ($u = []);
      ((Yc = 0),
        (su = Zf()),
        (du = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Yc++, t.then(ps, ps), t);
  }
  function ps() {
    if (--Yc === 0 && $u !== null) {
      du !== null && (du.status = "fulfilled");
      var l = $u;
      (($u = null), (su = 0), (du = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ko(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var Us = z.S;
  z.S = function (l, t) {
    ((y0 = Pl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Vo(l, t),
      Us !== null && Us(l, t));
  };
  var Ca = d(null);
  function Gc() {
    var l = Ca.current;
    return l !== null ? l : yl.pooledCache;
  }
  function We(l, t) {
    t === null ? D(Ca, Ca.current) : D(Ca, t.pool);
  }
  function js() {
    var l = Gc();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var mu = Error(o(460)),
    Xc = Error(o(474)),
    ke = Error(o(542)),
    Fe = { then: function () {} };
  function Hs(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Rs(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ct, Ct), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Cs(l), l);
      default:
        if (typeof t.status == "string") t.then(Ct, Ct);
        else {
          if (((l = yl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(o(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Cs(l), l);
        }
        throw ((qa = t), mu);
    }
  }
  function Ba(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((qa = a), mu)
        : a;
    }
  }
  var qa = null;
  function xs() {
    if (qa === null) throw Error(o(459));
    var l = qa;
    return ((qa = null), l);
  }
  function Cs(l) {
    if (l === mu || l === ke) throw Error(o(483));
  }
  var ou = null,
    Wu = 0;
  function Ie(l) {
    var t = Wu;
    return ((Wu += 1), ou === null && (ou = []), Rs(ou, l, t));
  }
  function ku(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Pe(l, t) {
    throw t.$$typeof === Z
      ? Error(o(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Bs(l) {
    function t(m, s) {
      if (l) {
        var y = m.deletions;
        y === null ? ((m.deletions = [s]), (m.flags |= 16)) : y.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null;) (t(m, s), (s = s.sibling));
      return null;
    }
    function u(m) {
      for (var s = new Map(); m !== null;)
        (m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
      return s;
    }
    function e(m, s) {
      return ((m = qt(m, s)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, s, y) {
      return (
        (m.index = y),
        l
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < s ? ((m.flags |= 67108866), s) : y)
              : ((m.flags |= 67108866), s))
          : ((m.flags |= 1048576), s)
      );
    }
    function c(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function f(m, s, y, T) {
      return s === null || s.tag !== 6
        ? ((s = Dc(y, m.mode, T)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function i(m, s, y, T) {
      var B = y.type;
      return B === Dl
        ? g(m, s, y.props.children, T, y.key)
        : s !== null &&
            (s.elementType === B ||
              (typeof B == "object" &&
                B !== null &&
                B.$$typeof === Ll &&
                Ba(B) === s.type))
          ? ((s = e(s, y.props)), ku(s, y), (s.return = m), s)
          : ((s = Ke(y.type, y.key, y.props, null, m.mode, T)),
            ku(s, y),
            (s.return = m),
            s);
    }
    function v(m, s, y, T) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== y.containerInfo ||
        s.stateNode.implementation !== y.implementation
        ? ((s = pc(y, m.mode, T)), (s.return = m), s)
        : ((s = e(s, y.children || [])), (s.return = m), s);
    }
    function g(m, s, y, T, B) {
      return s === null || s.tag !== 7
        ? ((s = ja(y, m.mode, T, B)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function A(m, s, y) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Dc("" + s, m.mode, y)), (s.return = m), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case El:
            return (
              (y = Ke(s.type, s.key, s.props, null, m.mode, y)),
              ku(y, s),
              (y.return = m),
              y
            );
          case Sl:
            return ((s = pc(s, m.mode, y)), (s.return = m), s);
          case Ll:
            return ((s = Ba(s)), A(m, s, y));
        }
        if (Tt(s) || Vl(s))
          return ((s = ja(s, m.mode, y, null)), (s.return = m), s);
        if (typeof s.then == "function") return A(m, Ie(s), y);
        if (s.$$typeof === Ul) return A(m, $e(m, s), y);
        Pe(m, s);
      }
      return null;
    }
    function h(m, s, y, T) {
      var B = s !== null ? s.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return B !== null ? null : f(m, s, "" + y, T);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case El:
            return y.key === B ? i(m, s, y, T) : null;
          case Sl:
            return y.key === B ? v(m, s, y, T) : null;
          case Ll:
            return ((y = Ba(y)), h(m, s, y, T));
        }
        if (Tt(y) || Vl(y)) return B !== null ? null : g(m, s, y, T, null);
        if (typeof y.then == "function") return h(m, s, Ie(y), T);
        if (y.$$typeof === Ul) return h(m, s, $e(m, y), T);
        Pe(m, y);
      }
      return null;
    }
    function r(m, s, y, T, B) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((m = m.get(y) || null), f(s, m, "" + T, B));
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case El:
            return (
              (m = m.get(T.key === null ? y : T.key) || null),
              i(s, m, T, B)
            );
          case Sl:
            return (
              (m = m.get(T.key === null ? y : T.key) || null),
              v(s, m, T, B)
            );
          case Ll:
            return ((T = Ba(T)), r(m, s, y, T, B));
        }
        if (Tt(T) || Vl(T))
          return ((m = m.get(y) || null), g(s, m, T, B, null));
        if (typeof T.then == "function") return r(m, s, y, Ie(T), B);
        if (T.$$typeof === Ul) return r(m, s, y, $e(s, T), B);
        Pe(s, T);
      }
      return null;
    }
    function U(m, s, y, T) {
      for (
        var B = null, tl = null, R = s, K = (s = 0), F = null;
        R !== null && K < y.length;
        K++
      ) {
        R.index > K ? ((F = R), (R = null)) : (F = R.sibling);
        var al = h(m, R, y[K], T);
        if (al === null) {
          R === null && (R = F);
          break;
        }
        (l && R && al.alternate === null && t(m, R),
          (s = n(al, s, K)),
          tl === null ? (B = al) : (tl.sibling = al),
          (tl = al),
          (R = F));
      }
      if (K === y.length) return (a(m, R), P && Yt(m, K), B);
      if (R === null) {
        for (; K < y.length; K++)
          ((R = A(m, y[K], T)),
            R !== null &&
              ((s = n(R, s, K)),
              tl === null ? (B = R) : (tl.sibling = R),
              (tl = R)));
        return (P && Yt(m, K), B);
      }
      for (R = u(R); K < y.length; K++)
        ((F = r(R, m, K, y[K], T)),
          F !== null &&
            (l && F.alternate !== null && R.delete(F.key === null ? K : F.key),
            (s = n(F, s, K)),
            tl === null ? (B = F) : (tl.sibling = F),
            (tl = F)));
      return (
        l &&
          R.forEach(function (Ta) {
            return t(m, Ta);
          }),
        P && Yt(m, K),
        B
      );
    }
    function q(m, s, y, T) {
      if (y == null) throw Error(o(151));
      for (
        var B = null, tl = null, R = s, K = (s = 0), F = null, al = y.next();
        R !== null && !al.done;
        K++, al = y.next()
      ) {
        R.index > K ? ((F = R), (R = null)) : (F = R.sibling);
        var Ta = h(m, R, al.value, T);
        if (Ta === null) {
          R === null && (R = F);
          break;
        }
        (l && R && Ta.alternate === null && t(m, R),
          (s = n(Ta, s, K)),
          tl === null ? (B = Ta) : (tl.sibling = Ta),
          (tl = Ta),
          (R = F));
      }
      if (al.done) return (a(m, R), P && Yt(m, K), B);
      if (R === null) {
        for (; !al.done; K++, al = y.next())
          ((al = A(m, al.value, T)),
            al !== null &&
              ((s = n(al, s, K)),
              tl === null ? (B = al) : (tl.sibling = al),
              (tl = al)));
        return (P && Yt(m, K), B);
      }
      for (R = u(R); !al.done; K++, al = y.next())
        ((al = r(R, m, K, al.value, T)),
          al !== null &&
            (l &&
              al.alternate !== null &&
              R.delete(al.key === null ? K : al.key),
            (s = n(al, s, K)),
            tl === null ? (B = al) : (tl.sibling = al),
            (tl = al)));
      return (
        l &&
          R.forEach(function (av) {
            return t(m, av);
          }),
        P && Yt(m, K),
        B
      );
    }
    function ml(m, s, y, T) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Dl &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case El:
            l: {
              for (var B = y.key; s !== null;) {
                if (s.key === B) {
                  if (((B = y.type), B === Dl)) {
                    if (s.tag === 7) {
                      (a(m, s.sibling),
                        (T = e(s, y.props.children)),
                        (T.return = m),
                        (m = T));
                      break l;
                    }
                  } else if (
                    s.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Ll &&
                      Ba(B) === s.type)
                  ) {
                    (a(m, s.sibling),
                      (T = e(s, y.props)),
                      ku(T, y),
                      (T.return = m),
                      (m = T));
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              y.type === Dl
                ? ((T = ja(y.props.children, m.mode, T, y.key)),
                  (T.return = m),
                  (m = T))
                : ((T = Ke(y.type, y.key, y.props, null, m.mode, T)),
                  ku(T, y),
                  (T.return = m),
                  (m = T));
            }
            return c(m);
          case Sl:
            l: {
              for (B = y.key; s !== null;) {
                if (s.key === B)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === y.containerInfo &&
                    s.stateNode.implementation === y.implementation
                  ) {
                    (a(m, s.sibling),
                      (T = e(s, y.children || [])),
                      (T.return = m),
                      (m = T));
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              ((T = pc(y, m.mode, T)), (T.return = m), (m = T));
            }
            return c(m);
          case Ll:
            return ((y = Ba(y)), ml(m, s, y, T));
        }
        if (Tt(y)) return U(m, s, y, T);
        if (Vl(y)) {
          if (((B = Vl(y)), typeof B != "function")) throw Error(o(150));
          return ((y = B.call(y)), q(m, s, y, T));
        }
        if (typeof y.then == "function") return ml(m, s, Ie(y), T);
        if (y.$$typeof === Ul) return ml(m, s, $e(m, y), T);
        Pe(m, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          s !== null && s.tag === 6
            ? (a(m, s.sibling), (T = e(s, y)), (T.return = m), (m = T))
            : (a(m, s), (T = Dc(y, m.mode, T)), (T.return = m), (m = T)),
          c(m))
        : a(m, s);
    }
    return function (m, s, y, T) {
      try {
        Wu = 0;
        var B = ml(m, s, y, T);
        return ((ou = null), B);
      } catch (R) {
        if (R === mu || R === ke) throw R;
        var tl = ut(29, R, null, m.mode);
        return ((tl.lanes = T), (tl.return = m), tl);
      } finally {
      }
    };
  }
  var Ya = Bs(!0),
    qs = Bs(!1),
    na = !1;
  function Qc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ca(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function fa(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (ul & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ve(l)),
        Es(l, null, a),
        t
      );
    }
    return (Le(l, u, t, a), Ve(l));
  }
  function Fu(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Di(l, a));
    }
  }
  function Lc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Vc = !1;
  function Iu() {
    if (Vc) {
      var l = du;
      if (l !== null) throw l;
    }
  }
  function Pu(l, t, a, u) {
    Vc = !1;
    var e = l.updateQueue;
    na = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f,
        v = i.next;
      ((i.next = null), c === null ? (n = v) : (c.next = v), (c = i));
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (f = g.lastBaseUpdate),
        f !== c &&
          (f === null ? (g.firstBaseUpdate = v) : (f.next = v),
          (g.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var A = e.baseState;
      ((c = 0), (g = v = i = null), (f = n));
      do {
        var h = f.lane & -536870913,
          r = h !== f.lane;
        if (r ? (k & h) === h : (u & h) === h) {
          (h !== 0 && h === su && (Vc = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var U = l,
              q = f;
            h = t;
            var ml = a;
            switch (q.tag) {
              case 1:
                if (((U = q.payload), typeof U == "function")) {
                  A = U.call(ml, A, h);
                  break l;
                }
                A = U;
                break l;
              case 3:
                U.flags = (U.flags & -65537) | 128;
              case 0:
                if (
                  ((U = q.payload),
                  (h = typeof U == "function" ? U.call(ml, A, h) : U),
                  h == null)
                )
                  break l;
                A = C({}, A, h);
                break l;
              case 2:
                na = !0;
            }
          }
          ((h = f.callback),
            h !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = e.callbacks),
              r === null ? (e.callbacks = [h]) : r.push(h)));
        } else
          ((r = {
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            g === null ? ((v = g = r), (i = A)) : (g = g.next = r),
            (c |= h));
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          ((r = f),
            (f = r.next),
            (r.next = null),
            (e.lastBaseUpdate = r),
            (e.shared.pending = null));
        }
      } while (!0);
      (g === null && (i = A),
        (e.baseState = i),
        (e.firstBaseUpdate = v),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (oa |= c),
        (l.lanes = c),
        (l.memoizedState = A));
    }
  }
  function Ys(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function Gs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Ys(a[l], t);
  }
  var yu = d(null),
    ln = d(0);
  function Xs(l, t) {
    ((l = Wt), D(ln, l), D(yu, t), (Wt = l | t.baseLanes));
  }
  function Kc() {
    (D(ln, Wt), D(yu, yu.current));
  }
  function Jc() {
    ((Wt = ln.current), O(yu), O(ln));
  }
  var et = d(null),
    bt = null;
  function ia(l) {
    var t = l.alternate;
    (D(Tl, Tl.current & 1),
      D(et, l),
      bt === null &&
        (t === null || yu.current !== null || t.memoizedState !== null) &&
        (bt = l));
  }
  function wc(l) {
    (D(Tl, Tl.current), D(et, l), bt === null && (bt = l));
  }
  function Qs(l) {
    l.tag === 22
      ? (D(Tl, Tl.current), D(et, l), bt === null && (bt = l))
      : sa();
  }
  function sa() {
    (D(Tl, Tl.current), D(et, et.current));
  }
  function nt(l) {
    (O(et), bt === l && (bt = null), O(Tl));
  }
  var Tl = d(0);
  function tn(l) {
    for (var t = l; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || li(a) || ti(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Qt = 0,
    V = null,
    sl = null,
    _l = null,
    an = !1,
    vu = !1,
    Ga = !1,
    un = 0,
    le = 0,
    hu = null,
    Jo = 0;
  function gl() {
    throw Error(o(321));
  }
  function $c(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!at(l[a], t[a])) return !1;
    return !0;
  }
  function Wc(l, t, a, u, e, n) {
    return (
      (Qt = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (z.H = l === null || l.memoizedState === null ? Od : mf),
      (Ga = !1),
      (n = a(u, e)),
      (Ga = !1),
      vu && (n = Ls(t, a, u, e)),
      Zs(l),
      n
    );
  }
  function Zs(l) {
    z.H = ue;
    var t = sl !== null && sl.next !== null;
    if (((Qt = 0), (_l = sl = V = null), (an = !1), (le = 0), (hu = null), t))
      throw Error(o(300));
    l === null ||
      Ml ||
      ((l = l.dependencies), l !== null && we(l) && (Ml = !0));
  }
  function Ls(l, t, a, u) {
    V = l;
    var e = 0;
    do {
      if ((vu && (hu = null), (le = 0), (vu = !1), 25 <= e))
        throw Error(o(301));
      if (((e += 1), (_l = sl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((z.H = _d), (n = t(a, u)));
    } while (vu);
    return n;
  }
  function wo() {
    var l = z.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? te(t) : t),
      (l = l.useState()[0]),
      (sl !== null ? sl.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function kc() {
    var l = un !== 0;
    return ((un = 0), l);
  }
  function Fc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Ic(l) {
    if (an) {
      for (l = l.memoizedState; l !== null;) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      an = !1;
    }
    ((Qt = 0), (_l = sl = V = null), (vu = !1), (le = un = 0), (hu = null));
  }
  function Xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (_l === null ? (V.memoizedState = _l = l) : (_l = _l.next = l), _l);
  }
  function Al() {
    if (sl === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = sl.next;
    var t = _l === null ? V.memoizedState : _l.next;
    if (t !== null) ((_l = t), (sl = l));
    else {
      if (l === null)
        throw V.alternate === null ? Error(o(467)) : Error(o(310));
      ((sl = l),
        (l = {
          memoizedState: sl.memoizedState,
          baseState: sl.baseState,
          baseQueue: sl.baseQueue,
          queue: sl.queue,
          next: null,
        }),
        _l === null ? (V.memoizedState = _l = l) : (_l = _l.next = l));
    }
    return _l;
  }
  function en() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function te(l) {
    var t = le;
    return (
      (le += 1),
      hu === null && (hu = []),
      (l = Rs(hu, l, t)),
      (t = V),
      (_l === null ? t.memoizedState : _l.next) === null &&
        ((t = t.alternate),
        (z.H = t === null || t.memoizedState === null ? Od : mf)),
      l
    );
  }
  function nn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return te(l);
      if (l.$$typeof === Ul) return Cl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Pc(l) {
    var t = null,
      a = V.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = V.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = en()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Va;
    return (t.index++, a);
  }
  function Zt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function cn(l) {
    var t = Al();
    return lf(t, sl, l);
  }
  function lf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        ((e.next = n.next), (n.next = c));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (c = null),
        i = null,
        v = t,
        g = !1;
      do {
        var A = v.lane & -536870913;
        if (A !== v.lane ? (k & A) === A : (Qt & A) === A) {
          var h = v.revertLane;
          if (h === 0)
            (i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: v.action,
                  hasEagerState: v.hasEagerState,
                  eagerState: v.eagerState,
                  next: null,
                }),
              A === su && (g = !0));
          else if ((Qt & h) === h) {
            ((v = v.next), h === su && (g = !0));
            continue;
          } else
            ((A = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null,
            }),
              i === null ? ((f = i = A), (c = n)) : (i = i.next = A),
              (V.lanes |= h),
              (oa |= h));
          ((A = v.action),
            Ga && a(n, A),
            (n = v.hasEagerState ? v.eagerState : a(n, A)));
        } else
          ((h = {
            lane: A,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null,
          }),
            i === null ? ((f = i = h), (c = n)) : (i = i.next = h),
            (V.lanes |= A),
            (oa |= A));
        v = v.next;
      } while (v !== null && v !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !at(n, l.memoizedState) && ((Ml = !0), g && ((a = du), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function tf(l) {
    var t = Al(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== e);
      (at(n, t.memoizedState) || (Ml = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function Vs(l, t, a) {
    var u = V,
      e = Al(),
      n = P;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var c = !at((sl || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (Ml = !0)),
      (e = e.queue),
      ef(ws.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (_l !== null && _l.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        ru(9, { destroy: void 0 }, Js.bind(null, u, e, a, t), null),
        yl === null)
      )
        throw Error(o(349));
      n || (Qt & 127) !== 0 || Ks(u, t, a);
    }
    return a;
  }
  function Ks(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = en()), (V.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function Js(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), $s(t) && Ws(l));
  }
  function ws(l, t, a) {
    return a(function () {
      $s(t) && Ws(l);
    });
  }
  function $s(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !at(l, a);
    } catch {
      return !0;
    }
  }
  function Ws(l) {
    var t = Ua(l, 2);
    t !== null && Fl(t, l, 2);
  }
  function af(l) {
    var t = Xl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ga)) {
        It(!0);
        try {
          a();
        } finally {
          It(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function ks(l, t, a, u) {
    return ((l.baseState = a), lf(l, sl, typeof u == "function" ? u : Zt));
  }
  function $o(l, t, a, u, e) {
    if (dn(l)) throw Error(o(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (z.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Fs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Fs(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = z.T,
        c = {};
      z.T = c;
      try {
        var f = a(e, u),
          i = z.S;
        (i !== null && i(c, f), Is(l, t, f));
      } catch (v) {
        uf(l, t, v);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (z.T = n));
      }
    } else
      try {
        ((n = a(e, u)), Is(l, t, n));
      } catch (v) {
        uf(l, t, v);
      }
  }
  function Is(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            Ps(l, t, u);
          },
          function (u) {
            return uf(l, t, u);
          },
        )
      : Ps(l, t, a);
  }
  function Ps(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      ld(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Fs(l, a))));
  }
  function uf(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), ld(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function ld(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function td(l, t) {
    return t;
  }
  function ad(l, t) {
    if (P) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var u = V;
          if (P) {
            if (vl) {
              t: {
                for (var e = vl, n = gt; e.nodeType !== 8;) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = Et(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((vl = Et(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            ua(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Xl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: td,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = zd.bind(null, V, u)),
      (u.dispatch = a),
      (u = af(!1)),
      (n = df.bind(null, V, !1, u.queue)),
      (u = Xl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = $o.bind(null, V, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function ud(l) {
    var t = Al();
    return ed(t, sl, l);
  }
  function ed(l, t, a) {
    if (
      ((t = lf(l, t, td)[0]),
      (l = cn(Zt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = te(t);
      } catch (c) {
        throw c === mu ? ke : c;
      }
    else u = t;
    t = Al();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048),
        ru(9, { destroy: void 0 }, Wo.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function Wo(l, t) {
    l.action = t;
  }
  function nd(l) {
    var t = Al(),
      a = sl;
    if (a !== null) return ed(t, a, l);
    (Al(), (t = t.memoizedState), (a = Al()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function ru(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = en()), (V.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function cd() {
    return Al().memoizedState;
  }
  function fn(l, t, a, u) {
    var e = Xl();
    ((V.flags |= l),
      (e.memoizedState = ru(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function sn(l, t, a, u) {
    var e = Al();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    sl !== null && u !== null && $c(u, sl.memoizedState.deps)
      ? (e.memoizedState = ru(t, n, a, u))
      : ((V.flags |= l), (e.memoizedState = ru(1 | t, n, a, u)));
  }
  function fd(l, t) {
    fn(8390656, 8, l, t);
  }
  function ef(l, t) {
    sn(2048, 8, l, t);
  }
  function ko(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null) ((t = en()), (V.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function id(l) {
    var t = Al().memoizedState;
    return (
      ko({ ref: t, nextImpl: l }),
      function () {
        if ((ul & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function sd(l, t) {
    return sn(4, 2, l, t);
  }
  function dd(l, t) {
    return sn(4, 4, l, t);
  }
  function md(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function od(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), sn(4, 4, md.bind(null, t, l), a));
  }
  function nf() {}
  function yd(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && $c(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function vd(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && $c(t, u[1])) return u[0];
    if (((u = l()), Ga)) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function cf(l, t, a) {
    return a === void 0 || ((Qt & 1073741824) !== 0 && (k & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = h0()), (V.lanes |= l), (oa |= l), a);
  }
  function hd(l, t, a, u) {
    return at(a, t)
      ? a
      : yu.current !== null
        ? ((l = cf(l, a, u)), at(l, t) || (Ml = !0), l)
        : (Qt & 42) === 0 || ((Qt & 1073741824) !== 0 && (k & 261930) === 0)
          ? ((Ml = !0), (l.memoizedState = a))
          : ((l = h0()), (V.lanes |= l), (oa |= l), t);
  }
  function rd(l, t, a, u, e) {
    var n = N.p;
    N.p = n !== 0 && 8 > n ? n : 8;
    var c = z.T,
      f = {};
    ((z.T = f), df(l, !1, t, a));
    try {
      var i = e(),
        v = z.S;
      if (
        (v !== null && v(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var g = Ko(i, u);
        ae(l, t, g, it(l));
      } else ae(l, t, u, it(l));
    } catch (A) {
      ae(l, t, { then: function () {}, status: "rejected", reason: A }, it());
    } finally {
      ((N.p = n),
        c !== null && f.types !== null && (c.types = f.types),
        (z.T = c));
    }
  }
  function Fo() {}
  function ff(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var e = Sd(l).queue;
    rd(
      l,
      e,
      t,
      G,
      a === null
        ? Fo
        : function () {
            return (gd(l), a(u));
          },
    );
  }
  function Sd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function gd(l) {
    var t = Sd(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ae(l, t.next.queue, {}, it()));
  }
  function sf() {
    return Cl(be);
  }
  function bd() {
    return Al().memoizedState;
  }
  function Ed() {
    return Al().memoizedState;
  }
  function Io(l) {
    for (var t = l.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = it();
          l = ca(a);
          var u = fa(t, l, a);
          (u !== null && (Fl(u, t, a), Fu(u, t, a)),
            (t = { cache: qc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Po(l, t, a) {
    var u = it();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(l)
        ? Td(t, a)
        : ((a = Mc(l, t, a, u)), a !== null && (Fl(a, l, u), Ad(a, t, u))));
  }
  function zd(l, t, a) {
    var u = it();
    ae(l, t, a, u);
  }
  function ae(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(l)) Td(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), at(f, c)))
            return (Le(l, t, e, 0), yl === null && Ze(), !1);
        } catch {
        } finally {
        }
      if (((a = Mc(l, t, e, u)), a !== null))
        return (Fl(a, l, u), Ad(a, t, u), !0);
    }
    return !1;
  }
  function df(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Zf(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(l))
    ) {
      if (t) throw Error(o(479));
    } else ((t = Mc(l, a, u, 2)), t !== null && Fl(t, l, 2));
  }
  function dn(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function Td(l, t) {
    vu = an = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function Ad(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Di(l, a));
    }
  }
  var ue = {
    readContext: Cl,
    use: nn,
    useCallback: gl,
    useContext: gl,
    useEffect: gl,
    useImperativeHandle: gl,
    useLayoutEffect: gl,
    useInsertionEffect: gl,
    useMemo: gl,
    useReducer: gl,
    useRef: gl,
    useState: gl,
    useDebugValue: gl,
    useDeferredValue: gl,
    useTransition: gl,
    useSyncExternalStore: gl,
    useId: gl,
    useHostTransitionStatus: gl,
    useFormState: gl,
    useActionState: gl,
    useOptimistic: gl,
    useMemoCache: gl,
    useCacheRefresh: gl,
  };
  ue.useEffectEvent = gl;
  var Od = {
      readContext: Cl,
      use: nn,
      useCallback: function (l, t) {
        return ((Xl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Cl,
      useEffect: fd,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          fn(4194308, 4, md.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return fn(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        fn(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Xl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Ga) {
          It(!0);
          try {
            l();
          } finally {
            It(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Xl();
        if (a !== void 0) {
          var e = a(t);
          if (Ga) {
            It(!0);
            try {
              a(t);
            } finally {
              It(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Po.bind(null, V, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Xl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = af(l);
        var t = l.queue,
          a = zd.bind(null, V, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: nf,
      useDeferredValue: function (l, t) {
        var a = Xl();
        return cf(a, l, t);
      },
      useTransition: function () {
        var l = af(!1);
        return (
          (l = rd.bind(null, V, l.queue, !0, !1)),
          (Xl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = V,
          e = Xl();
        if (P) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), yl === null)) throw Error(o(349));
          (k & 127) !== 0 || Ks(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          fd(ws.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          ru(9, { destroy: void 0 }, Js.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Xl(),
          t = yl.identifierPrefix;
        if (P) {
          var a = Ut,
            u = pt;
          ((a = (u & ~(1 << (32 - tt(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = un++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = Jo++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: sf,
      useFormState: ad,
      useActionState: ad,
      useOptimistic: function (l) {
        var t = Xl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = df.bind(null, V, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Pc,
      useCacheRefresh: function () {
        return (Xl().memoizedState = Io.bind(null, V));
      },
      useEffectEvent: function (l) {
        var t = Xl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((ul & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mf = {
      readContext: Cl,
      use: nn,
      useCallback: yd,
      useContext: Cl,
      useEffect: ef,
      useImperativeHandle: od,
      useInsertionEffect: sd,
      useLayoutEffect: dd,
      useMemo: vd,
      useReducer: cn,
      useRef: cd,
      useState: function () {
        return cn(Zt);
      },
      useDebugValue: nf,
      useDeferredValue: function (l, t) {
        var a = Al();
        return hd(a, sl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = cn(Zt)[0],
          t = Al().memoizedState;
        return [typeof l == "boolean" ? l : te(l), t];
      },
      useSyncExternalStore: Vs,
      useId: bd,
      useHostTransitionStatus: sf,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (l, t) {
        var a = Al();
        return ks(a, sl, l, t);
      },
      useMemoCache: Pc,
      useCacheRefresh: Ed,
    };
  mf.useEffectEvent = id;
  var _d = {
    readContext: Cl,
    use: nn,
    useCallback: yd,
    useContext: Cl,
    useEffect: ef,
    useImperativeHandle: od,
    useInsertionEffect: sd,
    useLayoutEffect: dd,
    useMemo: vd,
    useReducer: tf,
    useRef: cd,
    useState: function () {
      return tf(Zt);
    },
    useDebugValue: nf,
    useDeferredValue: function (l, t) {
      var a = Al();
      return sl === null ? cf(a, l, t) : hd(a, sl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = tf(Zt)[0],
        t = Al().memoizedState;
      return [typeof l == "boolean" ? l : te(l), t];
    },
    useSyncExternalStore: Vs,
    useId: bd,
    useHostTransitionStatus: sf,
    useFormState: nd,
    useActionState: nd,
    useOptimistic: function (l, t) {
      var a = Al();
      return sl !== null
        ? ks(a, sl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Pc,
    useCacheRefresh: Ed,
  };
  _d.useEffectEvent = id;
  function of(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : C({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var yf = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = it(),
        e = ca(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = fa(l, e, u)),
        t !== null && (Fl(t, l, u), Fu(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = it(),
        e = ca(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = fa(l, e, u)),
        t !== null && (Fl(t, l, u), Fu(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = it(),
        u = ca(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = fa(l, u, a)),
        t !== null && (Fl(t, l, a), Fu(t, l, a)));
    },
  };
  function Md(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Lu(a, u) || !Lu(e, n)
          : !0
    );
  }
  function Nd(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && yf.enqueueReplaceState(t, t.state, null));
  }
  function Xa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = C({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function Dd(l) {
    Qe(l);
  }
  function pd(l) {
    console.error(l);
  }
  function Ud(l) {
    Qe(l);
  }
  function mn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function jd(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function vf(l, t, a) {
    return (
      (a = ca(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        mn(l, t);
      }),
      a
    );
  }
  function Hd(l) {
    return ((l = ca(l)), (l.tag = 3), l);
  }
  function Rd(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          jd(t, a, u);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (jd(t, a, u),
          typeof e != "function" &&
            (ya === null ? (ya = new Set([this])) : ya.add(this)));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function ly(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && iu(t, a, e, !0),
        (a = et.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              bt === null ? An() : a.alternate === null && bl === 0 && (bl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Fe
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Gf(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Fe
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Gf(l, u, e)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Gf(l, u, e), An(), !1);
    }
    if (P)
      return (
        (t = et.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Hc && ((l = Error(o(422), { cause: u })), Ju(ht(l, a))))
          : (u !== Hc && ((t = Error(o(423), { cause: u })), Ju(ht(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ht(u, a)),
            (e = vf(l.stateNode, u, e)),
            Lc(l, e),
            bl !== 4 && (bl = 2)),
        !1
      );
    var n = Error(o(520), { cause: u });
    if (
      ((n = ht(n, a)),
      me === null ? (me = [n]) : me.push(n),
      bl !== 4 && (bl = 2),
      t === null)
    )
      return !0;
    ((u = ht(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = vf(a.stateNode, u, l)),
            Lc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ya === null || !ya.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = Hd(e)),
              Rd(e, l, a, u),
              Lc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var hf = Error(o(461)),
    Ml = !1;
  function Bl(l, t, a, u) {
    t.child = l === null ? qs(t, null, a, u) : Ya(t, l.child, a, u);
  }
  function xd(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return (
      xa(t),
      (u = Wc(l, t, a, c, n, e)),
      (f = kc()),
      l !== null && !Ml
        ? (Fc(l, t, e), Lt(l, t, e))
        : (P && f && Uc(t), (t.flags |= 1), Bl(l, t, u, e), t.child)
    );
  }
  function Cd(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Nc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Bd(l, t, n, u, e))
        : ((l = Ke(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Af(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Lu), a(c, u) && l.ref === t.ref)
      )
        return Lt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = qt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Bd(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Lu(n, u) && l.ref === t.ref)
        if (((Ml = !1), (t.pendingProps = u = n), Af(l, e)))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else return ((t.lanes = l.lanes), Lt(l, t, e));
    }
    return rf(l, t, a, u, e);
  }
  function qd(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null;)
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return Yd(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && We(t, n !== null ? n.cachePool : null),
          n !== null ? Xs(t, n) : Kc(),
          Qs(t));
      else
        return (
          (u = t.lanes = 536870912),
          Yd(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (We(t, n.cachePool), Xs(t, n), sa(), (t.memoizedState = null))
        : (l !== null && We(t, null), Kc(), sa());
    return (Bl(l, t, e, a), t.child);
  }
  function ee(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Yd(l, t, a, u, e) {
    var n = Gc();
    return (
      (n = n === null ? null : { parent: Ol._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && We(t, null),
      Kc(),
      Qs(t),
      l !== null && iu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function on(l, t) {
    return (
      (t = vn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Gd(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = on(t, t.pendingProps)),
      (l.flags |= 2),
      nt(t),
      (t.memoizedState = null),
      l
    );
  }
  function ty(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (P) {
        if (u.mode === "hidden")
          return ((l = on(t, u)), (t.lanes = 536870912), ee(null, l));
        if (
          (wc(t),
          (l = vl)
            ? ((l = F0(l, gt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: pt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ts(l)),
                (a.return = t),
                (t.child = a),
                (xl = t),
                (vl = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return ((t.lanes = 536870912), null);
      }
      return on(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((wc(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = Gd(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Ml || iu(l, t, a, !1), (e = (a & l.childLanes) !== 0), Ml || e)
      ) {
        if (
          ((u = yl),
          u !== null && ((c = pi(u, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), Ua(l, c), Fl(u, l, c), hf);
        (An(), (t = Gd(l, t, a)));
      } else
        ((l = n.treeContext),
          (vl = Et(c.nextSibling)),
          (xl = t),
          (P = !0),
          (aa = null),
          (gt = !1),
          l !== null && _s(t, l),
          (t = on(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = qt(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function yn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function rf(l, t, a, u, e) {
    return (
      xa(t),
      (a = Wc(l, t, a, u, void 0, e)),
      (u = kc()),
      l !== null && !Ml
        ? (Fc(l, t, e), Lt(l, t, e))
        : (P && u && Uc(t), (t.flags |= 1), Bl(l, t, a, e), t.child)
    );
  }
  function Xd(l, t, a, u, e, n) {
    return (
      xa(t),
      (t.updateQueue = null),
      (a = Ls(t, u, a, e)),
      Zs(l),
      (u = kc()),
      l !== null && !Ml
        ? (Fc(l, t, n), Lt(l, t, n))
        : (P && u && Uc(t), (t.flags |= 1), Bl(l, t, a, n), t.child)
    );
  }
  function Qd(l, t, a, u, e) {
    if ((xa(t), t.stateNode === null)) {
      var n = eu,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = Cl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = yf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Qc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Cl(c) : eu),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (of(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && yf.enqueueReplaceState(n, n.state, null),
          Pu(t, u, n, e),
          Iu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Xa(a, f);
      n.props = i;
      var v = n.context,
        g = a.contextType;
      ((c = eu), typeof g == "object" && g !== null && (c = Cl(g)));
      var A = a.getDerivedStateFromProps;
      ((g =
        typeof A == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || v !== c) && Nd(t, n, u, c)),
        (na = !1));
      var h = t.memoizedState;
      ((n.state = h),
        Pu(t, u, n, e),
        Iu(),
        (v = t.memoizedState),
        f || h !== v || na
          ? (typeof A == "function" && (of(t, a, A, u), (v = t.memoizedState)),
            (i = na || Md(t, a, i, u, h, v, c))
              ? (g ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = v)),
            (n.props = u),
            (n.state = v),
            (n.context = c),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        Zc(l, t),
        (c = t.memoizedProps),
        (g = Xa(a, c)),
        (n.props = g),
        (A = t.pendingProps),
        (h = n.context),
        (v = a.contextType),
        (i = eu),
        typeof v == "object" && v !== null && (i = Cl(v)),
        (f = a.getDerivedStateFromProps),
        (v =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== A || h !== i) && Nd(t, n, u, i)),
        (na = !1),
        (h = t.memoizedState),
        (n.state = h),
        Pu(t, u, n, e),
        Iu());
      var r = t.memoizedState;
      c !== A ||
      h !== r ||
      na ||
      (l !== null && l.dependencies !== null && we(l.dependencies))
        ? (typeof f == "function" && (of(t, a, f, u), (r = t.memoizedState)),
          (g =
            na ||
            Md(t, a, g, u, h, r, i) ||
            (l !== null && l.dependencies !== null && we(l.dependencies)))
            ? (v ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, r, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, r, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && h === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = r)),
          (n.props = u),
          (n.state = r),
          (n.context = i),
          (u = g))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && h === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      yn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = Ya(t, l.child, null, e)),
              (t.child = Ya(t, null, a, e)))
            : Bl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Lt(l, t, e)),
      l
    );
  }
  function Zd(l, t, a, u) {
    return (Ha(), (t.flags |= 256), Bl(l, t, a, u), t.child);
  }
  var Sf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function gf(l) {
    return { baseLanes: l, cachePool: js() };
  }
  function bf(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ft), l);
  }
  function Ld(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Tl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if (
          (e ? ia(t) : sa(),
          (l = vl)
            ? ((l = F0(l, gt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: ta !== null ? { id: pt, overflow: Ut } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ts(l)),
                (a.return = t),
                (t.child = a),
                (xl = t),
                (vl = null)))
            : (l = null),
          l === null)
        )
          throw ua(t);
        return (ti(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = u.children;
      return (
        (u = u.fallback),
        e
          ? (sa(),
            (e = t.mode),
            (f = vn({ mode: "hidden", children: f }, e)),
            (u = ja(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (u = t.child),
            (u.memoizedState = gf(a)),
            (u.childLanes = bf(l, c, a)),
            (t.memoizedState = Sf),
            ee(null, u))
          : (ia(t), Ef(t, f))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((f = i.dehydrated), f !== null)) {
      if (n)
        t.flags & 256
          ? (ia(t), (t.flags &= -257), (t = zf(l, t, a)))
          : t.memoizedState !== null
            ? (sa(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (sa(),
              (f = u.fallback),
              (e = t.mode),
              (u = vn({ mode: "visible", children: u.children }, e)),
              (f = ja(f, e, a, null)),
              (f.flags |= 2),
              (u.return = t),
              (f.return = t),
              (u.sibling = f),
              (t.child = u),
              Ya(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = gf(a)),
              (u.childLanes = bf(l, c, a)),
              (t.memoizedState = Sf),
              (t = ee(null, u)));
      else if ((ia(t), ti(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var v = c.dgst;
        ((c = v),
          (u = Error(o(419))),
          (u.stack = ""),
          (u.digest = c),
          Ju({ value: u, source: null, stack: null }),
          (t = zf(l, t, a)));
      } else if (
        (Ml || iu(l, t, a, !1), (c = (a & l.childLanes) !== 0), Ml || c)
      ) {
        if (
          ((c = yl),
          c !== null && ((u = pi(c, a)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Ua(l, u), Fl(c, l, u), hf);
        (li(f) || An(), (t = zf(l, t, a)));
      } else
        li(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (vl = Et(f.nextSibling)),
            (xl = t),
            (P = !0),
            (aa = null),
            (gt = !1),
            l !== null && _s(t, l),
            (t = Ef(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (sa(),
        (f = u.fallback),
        (e = t.mode),
        (i = l.child),
        (v = i.sibling),
        (u = qt(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        v !== null ? (f = qt(v, f)) : ((f = ja(f, e, a, null)), (f.flags |= 2)),
        (f.return = t),
        (u.return = t),
        (u.sibling = f),
        (t.child = u),
        ee(null, u),
        (u = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = gf(a))
          : ((e = f.cachePool),
            e !== null
              ? ((i = Ol._currentValue),
                (e = e.parent !== i ? { parent: i, pool: i } : e))
              : (e = js()),
            (f = { baseLanes: f.baseLanes | a, cachePool: e })),
        (u.memoizedState = f),
        (u.childLanes = bf(l, c, a)),
        (t.memoizedState = Sf),
        ee(l.child, u))
      : (ia(t),
        (a = l.child),
        (l = a.sibling),
        (a = qt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Ef(l, t) {
    return (
      (t = vn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function vn(l, t) {
    return ((l = ut(22, l, null, t)), (l.lanes = 0), l);
  }
  function zf(l, t, a) {
    return (
      Ya(t, l.child, null, a),
      (l = Ef(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Vd(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Cc(l.return, t, a));
  }
  function Tf(l, t, a, u, e, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = a),
        (c.tailMode = e),
        (c.treeForkCount = n));
  }
  function Kd(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var c = Tl.current,
      f = (c & 2) !== 0;
    if (
      (f ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      D(Tl, c),
      Bl(l, t, u, a),
      (u = P ? Ku : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null;) {
        if (l.tag === 13) l.memoizedState !== null && Vd(l, a, t);
        else if (l.tag === 19) Vd(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null;) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null;)
          ((l = a.alternate),
            l !== null && tn(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          Tf(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null;) {
          if (((l = e.alternate), l !== null && tn(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        Tf(t, !0, a, null, n, u);
        break;
      case "together":
        Tf(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Lt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (oa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((iu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        l = t.child, a = qt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = qt(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Af(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && we(l)));
  }
  function ay(l, t, a) {
    switch (t.tag) {
      case 3:
        (Gl(t, t.stateNode.containerInfo),
          ea(t, Ol, l.memoizedState.cache),
          Ha());
        break;
      case 27:
      case 5:
        Uu(t);
        break;
      case 4:
        Gl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ea(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), wc(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (ia(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Ld(l, t, a)
              : (ia(t), (l = Lt(l, t, a)), l !== null ? l.sibling : null);
        ia(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (iu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Kd(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          D(Tl, Tl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), qd(l, t, a, t.pendingProps));
      case 24:
        ea(t, Ol, l.memoizedState.cache);
    }
    return Lt(l, t, a);
  }
  function Jd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ml = !0;
      else {
        if (!Af(l, a) && (t.flags & 128) === 0) return ((Ml = !1), ay(l, t, a));
        Ml = (l.flags & 131072) !== 0;
      }
    else ((Ml = !1), P && (t.flags & 1048576) !== 0 && Os(t, Ku, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = Ba(t.elementType)), (t.type = l), typeof l == "function"))
            Nc(l)
              ? ((u = Xa(l, u)), (t.tag = 1), (t = Qd(null, t, l, u, a)))
              : ((t.tag = 0), (t = rf(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === mt) {
                ((t.tag = 11), (t = xd(null, t, l, u, a)));
                break l;
              } else if (e === I) {
                ((t.tag = 14), (t = Cd(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = Rt(l) || l), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return rf(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Xa(u, t.pendingProps)), Qd(l, t, u, e, a));
      case 3:
        l: {
          if ((Gl(t, t.stateNode.containerInfo), l === null))
            throw Error(o(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), Zc(l, t), Pu(t, u, null, a));
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            ea(t, Ol, u),
            u !== n.cache && Bc(t, [Ol], a, !0),
            Iu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Zd(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = ht(Error(o(424)), t)), Ju(e), (t = Zd(l, t, u, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                vl = Et(l.firstChild),
                  xl = t,
                  P = !0,
                  aa = null,
                  gt = !0,
                  a = qs(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Ha(), u === e)) {
              t = Lt(l, t, a);
              break l;
            }
            Bl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          yn(l, t),
          l === null
            ? (a = um(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : P ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Un(w.current).createElement(a)),
                (u[Rl] = t),
                (u[Kl] = l),
                ql(u, a, l),
                jl(u),
                (t.stateNode = u))
            : (t.memoizedState = um(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Uu(t),
          l === null &&
            P &&
            ((u = t.stateNode = lm(t.type, t.pendingProps, w.current)),
            (xl = t),
            (gt = !0),
            (e = vl),
            Sa(t.type) ? ((ai = e), (vl = Et(u.firstChild))) : (vl = e)),
          Bl(l, t, t.pendingProps.children, a),
          yn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((e = u = vl) &&
              ((u = Hy(u, t.type, t.pendingProps, gt)),
              u !== null
                ? ((t.stateNode = u),
                  (xl = t),
                  (vl = Et(u.firstChild)),
                  (gt = !1),
                  (e = !0))
                : (e = !1)),
            e || ua(t)),
          Uu(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Ff(e, n) ? (u = null) : c !== null && Ff(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Wc(l, t, wo, null, null, a)), (be._currentValue = e)),
          yn(l, t),
          Bl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = a = vl) &&
              ((a = Ry(a, t.pendingProps, gt)),
              a !== null
                ? ((t.stateNode = a), (xl = t), (vl = null), (l = !0))
                : (l = !1)),
            l || ua(t)),
          null
        );
      case 13:
        return Ld(l, t, a);
      case 4:
        return (
          Gl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = Ya(t, null, u, a)) : Bl(l, t, u, a),
          t.child
        );
      case 11:
        return xd(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Bl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Bl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Bl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          ea(t, t.type, u.value),
          Bl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          xa(t),
          (e = Cl(e)),
          (u = u(e)),
          (t.flags |= 1),
          Bl(l, t, u, a),
          t.child
        );
      case 14:
        return Cd(l, t, t.type, t.pendingProps, a);
      case 15:
        return Bd(l, t, t.type, t.pendingProps, a);
      case 19:
        return Kd(l, t, a);
      case 31:
        return ty(l, t, a);
      case 22:
        return qd(l, t, a, t.pendingProps);
      case 24:
        return (
          xa(t),
          (u = Cl(Ol)),
          l === null
            ? ((e = Gc()),
              e === null &&
                ((e = yl),
                (n = qc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Qc(t),
              ea(t, Ol, e))
            : ((l.lanes & a) !== 0 && (Zc(l, t), Pu(t, null, null, a), Iu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  ea(t, Ol, u))
                : ((u = n.cache),
                  ea(t, Ol, u),
                  u !== e.cache && Bc(t, [Ol], a, !0))),
          Bl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Vt(l) {
    l.flags |= 4;
  }
  function Of(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (b0()) l.flags |= 8192;
        else throw ((qa = Fe), Xc);
    } else l.flags &= -16777217;
  }
  function wd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !im(t)))
      if (b0()) l.flags |= 8192;
      else throw ((qa = Fe), Xc);
  }
  function hn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Mi() : 536870912), (l.lanes |= t), (Eu |= t)));
  }
  function ne(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null;)
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function hl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null;)
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null;)
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function uy(l, t, a) {
    var u = t.pendingProps;
    switch ((jc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (hl(t), null);
      case 1:
        return (hl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Xt(Ol),
          zl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (fu(t)
              ? Vt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Rc())),
          hl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Vt(t),
              n !== null ? (hl(t), wd(t, n)) : (hl(t), Of(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Vt(t), hl(t), wd(t, n))
                : (hl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Vt(t),
                hl(t),
                Of(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (_e(t),
          (a = w.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Vt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return (hl(t), null);
          }
          ((l = H.current),
            fu(t) ? Ms(t) : ((l = lm(e, u, a)), (t.stateNode = l), Vt(t)));
        }
        return (hl(t), null);
      case 5:
        if ((_e(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Vt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return (hl(t), null);
          }
          if (((n = H.current), fu(t))) Ms(t);
          else {
            var c = Un(w.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? c.createElement(e, { is: u.is })
                        : c.createElement(e);
                }
            }
            ((n[Rl] = t), (n[Kl] = u));
            l: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((ql(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Vt(t);
          }
        }
        return (
          hl(t),
          Of(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Vt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (((l = w.current), fu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = xl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Rl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                L0(l.nodeValue, a)
              )),
              l || ua(t, !0));
          } else
            ((l = Un(l).createTextNode(u)), (l[Rl] = t), (t.stateNode = l));
        }
        return (hl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = fu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(557));
              l[Rl] = t;
            } else
              (Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (hl(t), (l = !1));
          } else
            ((a = Rc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (nt(t), t) : (nt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (hl(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = fu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(317));
              e[Rl] = t;
            } else
              (Ha(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (hl(t), (e = !1));
          } else
            ((e = Rc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (nt(t), t) : (nt(t), null);
        }
        return (
          nt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              hn(t, t.updateQueue),
              hl(t),
              null)
        );
      case 4:
        return (zl(), l === null && Jf(t.stateNode.containerInfo), hl(t), null);
      case 10:
        return (Xt(t.type), hl(t), null);
      case 19:
        if ((O(Tl), (u = t.memoizedState), u === null)) return (hl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) ne(u, !1);
          else {
            if (bl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null;) {
                if (((n = tn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      ne(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      hn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (zs(a, l), (a = a.sibling));
                  return (
                    D(Tl, (Tl.current & 1) | 2),
                    P && Yt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Pl() > En &&
              ((t.flags |= 128), (e = !0), ne(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = tn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                hn(t, l),
                ne(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return (hl(t), null);
            } else
              2 * Pl() - u.renderingStartTime > En &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), ne(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Pl()),
            (l.sibling = null),
            (a = Tl.current),
            D(Tl, e ? (a & 1) | 2 : a & 1),
            P && Yt(t, u.treeForkCount),
            l)
          : (hl(t), null);
      case 22:
      case 23:
        return (
          nt(t),
          Jc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : hl(t),
          (a = t.updateQueue),
          a !== null && hn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && O(Ca),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(Ol),
          hl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function ey(l, t) {
    switch ((jc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(Ol),
          zl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (_e(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((nt(t), t.alternate === null)) throw Error(o(340));
          Ha();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (nt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Ha();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (O(Tl), null);
      case 4:
        return (zl(), null);
      case 10:
        return (Xt(t.type), null);
      case 22:
      case 23:
        return (
          nt(t),
          Jc(),
          l !== null && O(Ca),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (Xt(Ol), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $d(l, t) {
    switch ((jc(t), t.tag)) {
      case 3:
        (Xt(Ol), zl());
        break;
      case 26:
      case 27:
      case 5:
        _e(t);
        break;
      case 4:
        zl();
        break;
      case 31:
        t.memoizedState !== null && nt(t);
        break;
      case 13:
        nt(t);
        break;
      case 19:
        O(Tl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        (nt(t), Jc(), l !== null && O(Ca));
        break;
      case 24:
        Xt(Ol);
    }
  }
  function ce(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            ((u = n()), (c.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      cl(t, t.return, f);
    }
  }
  function da(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              f = c.destroy;
            if (f !== void 0) {
              ((c.destroy = void 0), (e = t));
              var i = a,
                v = f;
              try {
                v();
              } catch (g) {
                cl(e, i, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      cl(t, t.return, g);
    }
  }
  function Wd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Gs(t, a);
      } catch (u) {
        cl(l, l.return, u);
      }
    }
  }
  function kd(l, t, a) {
    ((a.props = Xa(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      cl(l, t, u);
    }
  }
  function fe(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      cl(l, t, e);
    }
  }
  function jt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          cl(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          cl(l, t, e);
        }
      else a.current = null;
  }
  function Fd(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function _f(l, t, a) {
    try {
      var u = l.stateNode;
      (My(u, l.type, a, t), (u[Kl] = t));
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function Id(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && Sa(l.type)) ||
      l.tag === 4
    );
  }
  function Mf(l) {
    l: for (;;) {
      for (; l.sibling === null;) {
        if (l.return === null || Id(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && Sa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Nf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ct)));
    else if (
      u !== 4 &&
      (u === 27 && Sa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Nf(l, t, a), l = l.sibling; l !== null;)
        (Nf(l, t, a), (l = l.sibling));
  }
  function rn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && Sa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (rn(l, t, a), l = l.sibling; l !== null;)
        (rn(l, t, a), (l = l.sibling));
  }
  function Pd(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length;)
        t.removeAttributeNode(e[0]);
      (ql(t, u, a), (t[Rl] = l), (t[Kl] = a));
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var Kt = !1,
    Nl = !1,
    Df = !1,
    l0 = typeof WeakSet == "function" ? WeakSet : Set,
    Hl = null;
  function ny(l, t) {
    if (((l = l.containerInfo), (Wf = qn), (l = os(l)), Ec(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              v = 0,
              g = 0,
              A = l,
              h = null;
            t: for (;;) {
              for (
                var r;
                A !== a || (e !== 0 && A.nodeType !== 3) || (f = c + e),
                  A !== n || (u !== 0 && A.nodeType !== 3) || (i = c + u),
                  A.nodeType === 3 && (c += A.nodeValue.length),
                  (r = A.firstChild) !== null;
              )
                ((h = A), (A = r));
              for (;;) {
                if (A === l) break t;
                if (
                  (h === a && ++v === e && (f = c),
                  h === n && ++g === u && (i = c),
                  (r = A.nextSibling) !== null)
                )
                  break;
                ((A = h), (h = A.parentNode));
              }
              A = r;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      kf = { focusedElem: l, selectionRange: a }, qn = !1, Hl = t;
      Hl !== null;
    )
      if (
        ((t = Hl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Hl = l));
      else
        for (; Hl !== null;) {
          switch (((t = Hl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var U = Xa(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(U, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (q) {
                  cl(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Pf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Pf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Hl = l));
            break;
          }
          Hl = t.return;
        }
  }
  function t0(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (wt(l, a), u & 4 && ce(5, a));
        break;
      case 1:
        if ((wt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              cl(a, a.return, c);
            }
          else {
            var e = Xa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              cl(a, a.return, c);
            }
          }
        (u & 64 && Wd(a), u & 512 && fe(a, a.return));
        break;
      case 3:
        if ((wt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Gs(l, t);
          } catch (c) {
            cl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Pd(a);
      case 26:
      case 5:
        (wt(l, a), t === null && u & 4 && Fd(a), u & 512 && fe(a, a.return));
        break;
      case 12:
        wt(l, a);
        break;
      case 31:
        (wt(l, a), u & 4 && e0(l, a));
        break;
      case 13:
        (wt(l, a),
          u & 4 && n0(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = vy.bind(null, a)), xy(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Kt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || Nl), (e = Kt));
          var n = Nl;
          ((Kt = u),
            (Nl = t) && !n ? $t(l, a, (a.subtreeFlags & 8772) !== 0) : wt(l, a),
            (Kt = e),
            (Nl = n));
        }
        break;
      case 30:
        break;
      default:
        wt(l, a);
    }
  }
  function a0(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), a0(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && uc(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var rl = null,
    wl = !1;
  function Jt(l, t, a) {
    for (a = a.child; a !== null;) (u0(l, t, a), (a = a.sibling));
  }
  function u0(l, t, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(ju, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Nl || jt(a, t),
          Jt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Nl || jt(a, t);
        var u = rl,
          e = wl;
        (Sa(a.type) && ((rl = a.stateNode), (wl = !1)),
          Jt(l, t, a),
          re(a.stateNode),
          (rl = u),
          (wl = e));
        break;
      case 5:
        Nl || jt(a, t);
      case 6:
        if (
          ((u = rl),
          (e = wl),
          (rl = null),
          Jt(l, t, a),
          (rl = u),
          (wl = e),
          rl !== null)
        )
          if (wl)
            try {
              (rl.nodeType === 9
                ? rl.body
                : rl.nodeName === "HTML"
                  ? rl.ownerDocument.body
                  : rl
              ).removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
          else
            try {
              rl.removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
        break;
      case 18:
        rl !== null &&
          (wl
            ? ((l = rl),
              W0(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Du(l))
            : W0(rl, a.stateNode));
        break;
      case 4:
        ((u = rl),
          (e = wl),
          (rl = a.stateNode.containerInfo),
          (wl = !0),
          Jt(l, t, a),
          (rl = u),
          (wl = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, a, t), Nl || da(4, a, t), Jt(l, t, a));
        break;
      case 1:
        (Nl ||
          (jt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && kd(a, t, u)),
          Jt(l, t, a));
        break;
      case 21:
        Jt(l, t, a);
        break;
      case 22:
        ((Nl = (u = Nl) || a.memoizedState !== null), Jt(l, t, a), (Nl = u));
        break;
      default:
        Jt(l, t, a);
    }
  }
  function e0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Du(l);
      } catch (a) {
        cl(t, t.return, a);
      }
    }
  }
  function n0(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Du(l);
      } catch (a) {
        cl(t, t.return, a);
      }
  }
  function cy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new l0()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new l0()),
          t
        );
      default:
        throw Error(o(435, l.tag));
    }
  }
  function Sn(l, t) {
    var a = cy(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = hy.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function $l(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null;) {
          switch (f.tag) {
            case 27:
              if (Sa(f.type)) {
                ((rl = f.stateNode), (wl = !1));
                break l;
              }
              break;
            case 5:
              ((rl = f.stateNode), (wl = !1));
              break l;
            case 3:
            case 4:
              ((rl = f.stateNode.containerInfo), (wl = !0));
              break l;
          }
          f = f.return;
        }
        if (rl === null) throw Error(o(160));
        (u0(n, c, e),
          (rl = null),
          (wl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (c0(t, l), (t = t.sibling));
  }
  var Ot = null;
  function c0(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ($l(t, l),
          Wl(l),
          u & 4 && (da(3, l, l.return), ce(3, l), da(5, l, l.return)));
        break;
      case 1:
        ($l(t, l),
          Wl(l),
          u & 512 && (Nl || a === null || jt(a, a.return)),
          u & 64 &&
            Kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = Ot;
        if (
          ($l(t, l),
          Wl(l),
          u & 512 && (Nl || a === null || jt(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[xu] ||
                          n[Rl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        ql(n, u, a),
                        (n[Rl] = l),
                        jl(n),
                        (u = n));
                      break l;
                    case "link":
                      var c = cm("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        ql(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = cm("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        ql(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(o(468, u));
                  }
                  ((n[Rl] = l), jl(n), (u = n));
                }
                l.stateNode = u;
              } else fm(e, l.type, l.stateNode);
            else l.stateNode = nm(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? fm(e, l.type, l.stateNode)
                  : nm(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                _f(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        ($l(t, l),
          Wl(l),
          u & 512 && (Nl || a === null || jt(a, a.return)),
          a !== null && u & 4 && _f(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          ($l(t, l),
          Wl(l),
          u & 512 && (Nl || a === null || jt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Fa(e, "");
          } catch (U) {
            cl(l, l.return, U);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), _f(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Df = !0));
        break;
      case 6:
        if (($l(t, l), Wl(l), u & 4)) {
          if (l.stateNode === null) throw Error(o(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (U) {
            cl(l, l.return, U);
          }
        }
        break;
      case 3:
        if (
          ((Rn = null),
          (e = Ot),
          (Ot = jn(t.containerInfo)),
          $l(t, l),
          (Ot = e),
          Wl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Du(t.containerInfo);
          } catch (U) {
            cl(l, l.return, U);
          }
        Df && ((Df = !1), f0(l));
        break;
      case 4:
        ((u = Ot),
          (Ot = jn(l.stateNode.containerInfo)),
          $l(t, l),
          Wl(l),
          (Ot = u));
        break;
      case 12:
        ($l(t, l), Wl(l));
        break;
      case 31:
        ($l(t, l),
          Wl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), Sn(l, u))));
        break;
      case 13:
        ($l(t, l),
          Wl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (bn = Pl()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), Sn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          v = Kt,
          g = Nl;
        if (
          ((Kt = v || e),
          (Nl = g || i),
          $l(t, l),
          (Nl = g),
          (Kt = v),
          Wl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || Kt || Nl || Qa(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    f = i.stateNode;
                    var A = i.memoizedProps.style,
                      h =
                        A != null && A.hasOwnProperty("display")
                          ? A.display
                          : null;
                    f.style.display =
                      h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (U) {
                  cl(i, i.return, U);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (U) {
                  cl(i, i.return, U);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var r = i.stateNode;
                  e ? k0(r, !0) : k0(i.stateNode, !1);
                } catch (U) {
                  cl(i, i.return, U);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), Sn(l, a))));
        break;
      case 19:
        ($l(t, l),
          Wl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), Sn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ($l(t, l), Wl(l));
    }
  }
  function Wl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null;) {
          if (Id(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = Mf(l);
            rn(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Fa(c, ""), (a.flags &= -33));
            var f = Mf(l);
            rn(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              v = Mf(l);
            Nf(l, v, i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (g) {
        cl(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function f0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null;) {
        var t = l;
        (f0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (t0(l, t.alternate, t), (t = t.sibling));
  }
  function Qa(l) {
    for (l = l.child; l !== null;) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Qa(t));
          break;
        case 1:
          jt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && kd(t, t.return, a),
            Qa(t));
          break;
        case 27:
          re(t.stateNode);
        case 26:
        case 5:
          (jt(t, t.return), Qa(t));
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function $t(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ($t(e, n, a), ce(4, n));
          break;
        case 1:
          if (
            ($t(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (v) {
              cl(u, u.return, v);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ys(i[e], f);
            } catch (v) {
              cl(u, u.return, v);
            }
          }
          (a && c & 64 && Wd(n), fe(n, n.return));
          break;
        case 27:
          Pd(n);
        case 26:
        case 5:
          ($t(e, n, a), a && u === null && c & 4 && Fd(n), fe(n, n.return));
          break;
        case 12:
          $t(e, n, a);
          break;
        case 31:
          ($t(e, n, a), a && c & 4 && e0(e, n));
          break;
        case 13:
          ($t(e, n, a), a && c & 4 && n0(e, n));
          break;
        case 22:
          (n.memoizedState === null && $t(e, n, a), fe(n, n.return));
          break;
        case 30:
          break;
        default:
          $t(e, n, a);
      }
      t = t.sibling;
    }
  }
  function pf(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && wu(a)));
  }
  function Uf(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && wu(l)));
  }
  function _t(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (i0(l, t, a, u), (t = t.sibling));
  }
  function i0(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (_t(l, t, a, u), e & 2048 && ce(9, t));
        break;
      case 1:
        _t(l, t, a, u);
        break;
      case 3:
        (_t(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && wu(l))));
        break;
      case 12:
        if (e & 2048) {
          (_t(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (i) {
            cl(t, t.return, i);
          }
        } else _t(l, t, a, u);
        break;
      case 31:
        _t(l, t, a, u);
        break;
      case 13:
        _t(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? _t(l, t, a, u)
              : ie(l, t)
            : n._visibility & 2
              ? _t(l, t, a, u)
              : ((n._visibility |= 2),
                Su(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && pf(c, t));
        break;
      case 24:
        (_t(l, t, a, u), e & 2048 && Uf(t.alternate, t));
        break;
      default:
        _t(l, t, a, u);
    }
  }
  function Su(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        f = a,
        i = u,
        v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (Su(n, c, f, i, e), ce(8, c));
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          (c.memoizedState !== null
            ? g._visibility & 2
              ? Su(n, c, f, i, e)
              : ie(n, c)
            : ((g._visibility |= 2), Su(n, c, f, i, e)),
            e && v & 2048 && pf(c.alternate, c));
          break;
        case 24:
          (Su(n, c, f, i, e), e && v & 2048 && Uf(c.alternate, c));
          break;
        default:
          Su(n, c, f, i, e);
      }
      t = t.sibling;
    }
  }
  function ie(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ie(a, u), e & 2048 && pf(u.alternate, u));
            break;
          case 24:
            (ie(a, u), e & 2048 && Uf(u.alternate, u));
            break;
          default:
            ie(a, u);
        }
        t = t.sibling;
      }
  }
  var se = 8192;
  function gu(l, t, a) {
    if (l.subtreeFlags & se)
      for (l = l.child; l !== null;) (s0(l, t, a), (l = l.sibling));
  }
  function s0(l, t, a) {
    switch (l.tag) {
      case 26:
        (gu(l, t, a),
          l.flags & se &&
            l.memoizedState !== null &&
            Jy(a, Ot, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        gu(l, t, a);
        break;
      case 3:
      case 4:
        var u = Ot;
        ((Ot = jn(l.stateNode.containerInfo)), gu(l, t, a), (Ot = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = se), (se = 16777216), gu(l, t, a), (se = u))
            : gu(l, t, a));
        break;
      default:
        gu(l, t, a);
    }
  }
  function d0(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function de(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Hl = u), o0(u, l));
        }
      d0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null;) (m0(l), (l = l.sibling));
  }
  function m0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (de(l), l.flags & 2048 && da(9, l, l.return));
        break;
      case 3:
        de(l);
        break;
      case 12:
        de(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), gn(l))
          : de(l);
        break;
      default:
        de(l);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Hl = u), o0(u, l));
        }
      d0(l);
    }
    for (l = l.child; l !== null;) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), gn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), gn(t)));
          break;
        default:
          gn(t);
      }
      l = l.sibling;
    }
  }
  function o0(l, t) {
    for (; Hl !== null;) {
      var a = Hl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          wu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (Hl = u));
      else
        l: for (a = l; Hl !== null;) {
          u = Hl;
          var e = u.sibling,
            n = u.return;
          if ((a0(u), u === a)) {
            Hl = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (Hl = e));
            break l;
          }
          Hl = n;
        }
    }
  }
  var fy = {
      getCacheForType: function (l) {
        var t = Cl(Ol),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Cl(Ol).controller.signal;
      },
    },
    iy = typeof WeakMap == "function" ? WeakMap : Map,
    ul = 0,
    yl = null,
    $ = null,
    k = 0,
    nl = 0,
    ct = null,
    ma = !1,
    bu = !1,
    jf = !1,
    Wt = 0,
    bl = 0,
    oa = 0,
    Za = 0,
    Hf = 0,
    ft = 0,
    Eu = 0,
    me = null,
    kl = null,
    Rf = !1,
    bn = 0,
    y0 = 0,
    En = 1 / 0,
    zn = null,
    ya = null,
    pl = 0,
    va = null,
    zu = null,
    kt = 0,
    xf = 0,
    Cf = null,
    v0 = null,
    oe = 0,
    Bf = null;
  function it() {
    return (ul & 2) !== 0 && k !== 0 ? k & -k : z.T !== null ? Zf() : Ui();
  }
  function h0() {
    if (ft === 0)
      if ((k & 536870912) === 0 || P) {
        var l = De;
        ((De <<= 1), (De & 3932160) === 0 && (De = 262144), (ft = l));
      } else ft = 536870912;
    return ((l = et.current), l !== null && (l.flags |= 32), ft);
  }
  function Fl(l, t, a) {
    (((l === yl && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
      (Tu(l, 0), ha(l, k, ft, !1)),
      Ru(l, a),
      ((ul & 2) === 0 || l !== yl) &&
        (l === yl &&
          ((ul & 2) === 0 && (Za |= a), bl === 4 && ha(l, k, ft, !1)),
        Ht(l)));
  }
  function r0(l, t, a) {
    if ((ul & 6) !== 0) throw Error(o(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Hu(l, t),
      e = u ? my(l, t) : Yf(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        bu && !u && ha(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !sy(a))) {
          ((e = Yf(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = me;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (Tu(f, c).flags |= 256), (c = Yf(f, c, !1)), c !== 2)) {
                if (jf && !i) {
                  ((f.errorRecoveryDisabledLanes |= n), (Za |= n), (e = 4));
                  break l;
                }
                ((n = kl),
                  (kl = e),
                  n !== null &&
                    (kl === null ? (kl = n) : kl.push.apply(kl, n)));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (Tu(l, 0), ha(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ha(u, t, ft, !ma);
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((e = bn + 300 - Pl()), 10 < e)) {
            if ((ha(u, t, ft, !ma), Ue(u, 0, !0) !== 0)) break l;
            ((kt = t),
              (u.timeoutHandle = w0(
                S0.bind(
                  null,
                  u,
                  a,
                  kl,
                  zn,
                  Rf,
                  t,
                  ft,
                  Za,
                  Eu,
                  ma,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          S0(u, a, kl, zn, Rf, t, ft, Za, Eu, ma, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ht(l);
  }
  function S0(l, t, a, u, e, n, c, f, i, v, g, A, h, r) {
    if (
      ((l.timeoutHandle = -1),
      (A = t.subtreeFlags),
      A & 8192 || (A & 16785408) === 16785408)
    ) {
      ((A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ct,
      }),
        s0(t, n, A));
      var U =
        (n & 62914560) === n ? bn - Pl() : (n & 4194048) === n ? y0 - Pl() : 0;
      if (((U = wy(A, U)), U !== null)) {
        ((kt = n),
          (l.cancelPendingCommit = U(
            _0.bind(null, l, t, n, a, u, e, c, f, i, g, A, null, h, r),
          )),
          ha(l, n, c, !v));
        return;
      }
    }
    _0(l, t, n, a, u, e, c, f, i);
  }
  function sy(l) {
    for (var t = l; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!at(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ha(l, t, a, u) {
    ((t &= ~Hf),
      (t &= ~Za),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e;) {
      var n = 31 - tt(e),
        c = 1 << n;
      ((u[n] = -1), (e &= ~c));
    }
    a !== 0 && Ni(l, a, t);
  }
  function Tn() {
    return (ul & 6) === 0 ? (ye(0), !1) : !0;
  }
  function qf() {
    if ($ !== null) {
      if (nl === 0) var l = $.return;
      else ((l = $), (Gt = Ra = null), Ic(l), (ou = null), (Wu = 0), (l = $));
      for (; l !== null;) ($d(l.alternate, l), (l = l.return));
      $ = null;
    }
  }
  function Tu(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), py(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (kt = 0),
      qf(),
      (yl = l),
      ($ = a = qt(l.current, null)),
      (k = t),
      (nl = 0),
      (ct = null),
      (ma = !1),
      (bu = Hu(l, t)),
      (jf = !1),
      (Eu = ft = Hf = Za = oa = bl = 0),
      (kl = me = null),
      (Rf = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u;) {
        var e = 31 - tt(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Wt = t), Ze(), a);
  }
  function g0(l, t) {
    ((V = null),
      (z.H = ue),
      t === mu || t === ke
        ? ((t = xs()), (nl = 3))
        : t === Xc
          ? ((t = xs()), (nl = 4))
          : (nl =
              t === hf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ct = t),
      $ === null && ((bl = 1), mn(l, ht(t, l.current))));
  }
  function b0() {
    var l = et.current;
    return l === null
      ? !0
      : (k & 4194048) === k
        ? bt === null
        : (k & 62914560) === k || (k & 536870912) !== 0
          ? l === bt
          : !1;
  }
  function E0() {
    var l = z.H;
    return ((z.H = ue), l === null ? ue : l);
  }
  function z0() {
    var l = z.A;
    return ((z.A = fy), l);
  }
  function An() {
    ((bl = 4),
      ma || ((k & 4194048) !== k && et.current !== null) || (bu = !0),
      ((oa & 134217727) === 0 && (Za & 134217727) === 0) ||
        yl === null ||
        ha(yl, k, ft, !1));
  }
  function Yf(l, t, a) {
    var u = ul;
    ul |= 2;
    var e = E0(),
      n = z0();
    ((yl !== l || k !== t) && ((zn = null), Tu(l, t)), (t = !1));
    var c = bl;
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          var f = $,
            i = ct;
          switch (nl) {
            case 8:
              (qf(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              et.current === null && (t = !0);
              var v = nl;
              if (((nl = 0), (ct = null), Au(l, f, i, v), a && bu)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((v = nl), (nl = 0), (ct = null), Au(l, f, i, v));
          }
        }
        (dy(), (c = bl));
        break;
      } catch (g) {
        g0(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Gt = Ra = null),
      (ul = u),
      (z.H = e),
      (z.A = n),
      $ === null && ((yl = null), (k = 0), Ze()),
      c
    );
  }
  function dy() {
    for (; $ !== null;) T0($);
  }
  function my(l, t) {
    var a = ul;
    ul |= 2;
    var u = E0(),
      e = z0();
    yl !== l || k !== t
      ? ((zn = null), (En = Pl() + 500), Tu(l, t))
      : (bu = Hu(l, t));
    l: do
      try {
        if (nl !== 0 && $ !== null) {
          t = $;
          var n = ct;
          t: switch (nl) {
            case 1:
              ((nl = 0), (ct = null), Au(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Hs(n)) {
                ((nl = 0), (ct = null), A0(t));
                break;
              }
              ((t = function () {
                ((nl !== 2 && nl !== 9) || yl !== l || (nl = 7), Ht(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              Hs(n)
                ? ((nl = 0), (ct = null), A0(t))
                : ((nl = 0), (ct = null), Au(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch ($.tag) {
                case 26:
                  c = $.memoizedState;
                case 5:
                case 27:
                  var f = $;
                  if (c ? im(c) : f.stateNode.complete) {
                    ((nl = 0), (ct = null));
                    var i = f.sibling;
                    if (i !== null) $ = i;
                    else {
                      var v = f.return;
                      v !== null ? (($ = v), On(v)) : ($ = null);
                    }
                    break t;
                  }
              }
              ((nl = 0), (ct = null), Au(l, t, n, 5));
              break;
            case 6:
              ((nl = 0), (ct = null), Au(l, t, n, 6));
              break;
            case 8:
              (qf(), (bl = 6));
              break l;
            default:
              throw Error(o(462));
          }
        }
        oy();
        break;
      } catch (g) {
        g0(l, g);
      }
    while (!0);
    return (
      (Gt = Ra = null),
      (z.H = u),
      (z.A = e),
      (ul = a),
      $ !== null ? 0 : ((yl = null), (k = 0), Ze(), bl)
    );
  }
  function oy() {
    for (; $ !== null && !xm();) T0($);
  }
  function T0(l) {
    var t = Jd(l.alternate, l, Wt);
    ((l.memoizedProps = l.pendingProps), t === null ? On(l) : ($ = t));
  }
  function A0(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Xd(a, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = Xd(a, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        Ic(t);
      default:
        ($d(a, t), (t = $ = zs(t, Wt)), (t = Jd(a, t, Wt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? On(l) : ($ = t));
  }
  function Au(l, t, a, u) {
    ((Gt = Ra = null), Ic(t), (ou = null), (Wu = 0));
    var e = t.return;
    try {
      if (ly(l, e, t, a, k)) {
        ((bl = 1), mn(l, ht(a, l.current)), ($ = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw (($ = e), n);
      ((bl = 1), mn(l, ht(a, l.current)), ($ = null));
      return;
    }
    t.flags & 32768
      ? (P || u === 1
          ? (l = !0)
          : bu || (k & 536870912) !== 0
            ? (l = !1)
            : ((ma = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = et.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        O0(t, l))
      : On(t);
  }
  function On(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        O0(t, ma);
        return;
      }
      l = t.return;
      var a = uy(t.alternate, t, Wt);
      if (a !== null) {
        $ = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function O0(l, t) {
    do {
      var a = ey(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), ($ = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        $ = l;
        return;
      }
      $ = l = a;
    } while (l !== null);
    ((bl = 6), ($ = null));
  }
  function _0(l, t, a, u, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do _n();
    while (pl !== 0);
    if ((ul & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= _c),
        Vm(l, a, n, c, f, i),
        l === yl && (($ = yl = null), (k = 0)),
        (zu = t),
        (va = l),
        (kt = a),
        (xf = n),
        (Cf = e),
        (v0 = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ry(Me, function () {
              return (U0(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = z.T), (z.T = null), (e = N.p), (N.p = 2), (c = ul), (ul |= 4));
        try {
          ny(l, t, a);
        } finally {
          ((ul = c), (N.p = e), (z.T = u));
        }
      }
      ((pl = 1), M0(), N0(), D0());
    }
  }
  function M0() {
    if (pl === 1) {
      pl = 0;
      var l = va,
        t = zu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var u = N.p;
        N.p = 2;
        var e = ul;
        ul |= 4;
        try {
          c0(t, l);
          var n = kf,
            c = os(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            ms(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && Ec(f)) {
              var v = i.start,
                g = i.end;
              if ((g === void 0 && (g = v), "selectionStart" in f))
                ((f.selectionStart = v),
                  (f.selectionEnd = Math.min(g, f.value.length)));
              else {
                var A = f.ownerDocument || document,
                  h = (A && A.defaultView) || window;
                if (h.getSelection) {
                  var r = h.getSelection(),
                    U = f.textContent.length,
                    q = Math.min(i.start, U),
                    ml = i.end === void 0 ? q : Math.min(i.end, U);
                  !r.extend && q > ml && ((c = ml), (ml = q), (q = c));
                  var m = ds(f, q),
                    s = ds(f, ml);
                  if (
                    m &&
                    s &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== m.node ||
                      r.anchorOffset !== m.offset ||
                      r.focusNode !== s.node ||
                      r.focusOffset !== s.offset)
                  ) {
                    var y = A.createRange();
                    (y.setStart(m.node, m.offset),
                      r.removeAllRanges(),
                      q > ml
                        ? (r.addRange(y), r.extend(s.node, s.offset))
                        : (y.setEnd(s.node, s.offset), r.addRange(y)));
                  }
                }
              }
            }
            for (A = [], r = f; (r = r.parentNode);)
              r.nodeType === 1 &&
                A.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < A.length;
              f++
            ) {
              var T = A[f];
              ((T.element.scrollLeft = T.left), (T.element.scrollTop = T.top));
            }
          }
          ((qn = !!Wf), (kf = Wf = null));
        } finally {
          ((ul = e), (N.p = u), (z.T = a));
        }
      }
      ((l.current = t), (pl = 2));
    }
  }
  function N0() {
    if (pl === 2) {
      pl = 0;
      var l = va,
        t = zu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = z.T), (z.T = null));
        var u = N.p;
        N.p = 2;
        var e = ul;
        ul |= 4;
        try {
          t0(l, t.alternate, t);
        } finally {
          ((ul = e), (N.p = u), (z.T = a));
        }
      }
      pl = 3;
    }
  }
  function D0() {
    if (pl === 4 || pl === 3) {
      ((pl = 0), Cm());
      var l = va,
        t = zu,
        a = kt,
        u = v0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (pl = 5)
        : ((pl = 0), (zu = va = null), p0(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ya = null),
        tc(a),
        (t = t.stateNode),
        lt && typeof lt.onCommitFiberRoot == "function")
      )
        try {
          lt.onCommitFiberRoot(ju, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = z.T), (e = N.p), (N.p = 2), (z.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          ((z.T = t), (N.p = e));
        }
      }
      ((kt & 3) !== 0 && _n(),
        Ht(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === Bf
            ? oe++
            : ((oe = 0), (Bf = l))
          : (oe = 0),
        ye(0));
    }
  }
  function p0(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), wu(t)));
  }
  function _n() {
    return (M0(), N0(), D0(), U0());
  }
  function U0() {
    if (pl !== 5) return !1;
    var l = va,
      t = xf;
    xf = 0;
    var a = tc(kt),
      u = z.T,
      e = N.p;
    try {
      ((N.p = 32 > a ? 32 : a), (z.T = null), (a = Cf), (Cf = null));
      var n = va,
        c = kt;
      if (((pl = 0), (zu = va = null), (kt = 0), (ul & 6) !== 0))
        throw Error(o(331));
      var f = ul;
      if (
        ((ul |= 4),
        m0(n.current),
        i0(n, n.current, c, a),
        (ul = f),
        ye(0, !1),
        lt && typeof lt.onPostCommitFiberRoot == "function")
      )
        try {
          lt.onPostCommitFiberRoot(ju, n);
        } catch {}
      return !0;
    } finally {
      ((N.p = e), (z.T = u), p0(l, t));
    }
  }
  function j0(l, t, a) {
    ((t = ht(a, t)),
      (t = vf(l.stateNode, t, 2)),
      (l = fa(l, t, 2)),
      l !== null && (Ru(l, 2), Ht(l)));
  }
  function cl(l, t, a) {
    if (l.tag === 3) j0(l, l, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          j0(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ya === null || !ya.has(u)))
          ) {
            ((l = ht(a, l)),
              (a = Hd(2)),
              (u = fa(t, a, 2)),
              u !== null && (Rd(a, u, t, l), Ru(u, 2), Ht(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new iy();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((jf = !0), e.add(a), (l = yy.bind(null, l, t, a)), t.then(l, l));
  }
  function yy(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      yl === l &&
        (k & a) === a &&
        (bl === 4 || (bl === 3 && (k & 62914560) === k && 300 > Pl() - bn)
          ? (ul & 2) === 0 && Tu(l, 0)
          : (Hf |= a),
        Eu === k && (Eu = 0)),
      Ht(l));
  }
  function H0(l, t) {
    (t === 0 && (t = Mi()), (l = Ua(l, t)), l !== null && (Ru(l, t), Ht(l)));
  }
  function vy(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), H0(l, a));
  }
  function hy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (u !== null && u.delete(t), H0(l, a));
  }
  function ry(l, t) {
    return Fn(l, t);
  }
  var Mn = null,
    Ou = null,
    Xf = !1,
    Nn = !1,
    Qf = !1,
    ra = 0;
  function Ht(l) {
    (l !== Ou &&
      l.next === null &&
      (Ou === null ? (Mn = Ou = l) : (Ou = Ou.next = l)),
      (Nn = !0),
      Xf || ((Xf = !0), gy()));
  }
  function ye(l, t) {
    if (!Qf && Nn) {
      Qf = !0;
      do
        for (var a = !1, u = Mn; u !== null;) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                f = u.pingedLanes;
              ((n = (1 << (31 - tt(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), B0(u, n));
          } else
            ((n = k),
              (n = Ue(
                u,
                u === yl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Hu(u, n) || ((a = !0), B0(u, n)));
          u = u.next;
        }
      while (a);
      Qf = !1;
    }
  }
  function Sy() {
    R0();
  }
  function R0() {
    Nn = Xf = !1;
    var l = 0;
    ra !== 0 && Dy() && (l = ra);
    for (var t = Pl(), a = null, u = Mn; u !== null;) {
      var e = u.next,
        n = x0(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (Mn = e) : (a.next = e),
          e === null && (Ou = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (Nn = !0)),
        (u = e));
    }
    ((pl !== 0 && pl !== 5) || ye(l), ra !== 0 && (ra = 0));
  }
  function x0(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - tt(n),
        f = 1 << c,
        i = e[c];
      (i === -1
        ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = Lm(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = yl),
      (a = k),
      (a = Ue(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (nl === 2 || nl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && In(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Hu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && In(u), tc(a))) {
        case 2:
        case 8:
          a = Oi;
          break;
        case 32:
          a = Me;
          break;
        case 268435456:
          a = _i;
          break;
        default:
          a = Me;
      }
      return (
        (u = C0.bind(null, l)),
        (a = Fn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && In(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function C0(l, t) {
    if (pl !== 0 && pl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (_n() && l.callbackNode !== a) return null;
    var u = k;
    return (
      (u = Ue(
        l,
        l === yl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (r0(l, u, t),
          x0(l, Pl()),
          l.callbackNode != null && l.callbackNode === a
            ? C0.bind(null, l)
            : null)
    );
  }
  function B0(l, t) {
    if (_n()) return null;
    r0(l, t, !0);
  }
  function gy() {
    Uy(function () {
      (ul & 6) !== 0 ? Fn(Ai, Sy) : R0();
    });
  }
  function Zf() {
    if (ra === 0) {
      var l = su;
      (l === 0 && ((l = Ne), (Ne <<= 1), (Ne & 261888) === 0 && (Ne = 256)),
        (ra = l));
    }
    return ra;
  }
  function q0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : xe("" + l);
  }
  function Y0(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function by(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = q0((e[Kl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Kl] || null)
          ? q0(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new Ye("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (ra !== 0) {
                  var i = c ? Y0(e, c) : new FormData(e);
                  ff(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? Y0(e, c) : new FormData(e)),
                  ff(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Lf = 0; Lf < Oc.length; Lf++) {
    var Vf = Oc[Lf],
      Ey = Vf.toLowerCase(),
      zy = Vf[0].toUpperCase() + Vf.slice(1);
    At(Ey, "on" + zy);
  }
  (At(hs, "onAnimationEnd"),
    At(rs, "onAnimationIteration"),
    At(Ss, "onAnimationStart"),
    At("dblclick", "onDoubleClick"),
    At("focusin", "onFocus"),
    At("focusout", "onBlur"),
    At(qo, "onTransitionRun"),
    At(Yo, "onTransitionStart"),
    At(Go, "onTransitionCancel"),
    At(gs, "onTransitionEnd"),
    Wa("onMouseEnter", ["mouseout", "mouseover"]),
    Wa("onMouseLeave", ["mouseout", "mouseover"]),
    Wa("onPointerEnter", ["pointerout", "pointerover"]),
    Wa("onPointerLeave", ["pointerout", "pointerover"]),
    Ma(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ma(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ma("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ma(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ma(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ve =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Ty = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ve),
    );
  function G0(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c],
              i = f.instance,
              v = f.currentTarget;
            if (((f = f.listener), i !== n && e.isPropagationStopped()))
              break l;
            ((n = f), (e.currentTarget = v));
            try {
              n(e);
            } catch (g) {
              Qe(g);
            }
            ((e.currentTarget = null), (n = i));
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((f = u[c]),
              (i = f.instance),
              (v = f.currentTarget),
              (f = f.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            ((n = f), (e.currentTarget = v));
            try {
              n(e);
            } catch (g) {
              Qe(g);
            }
            ((e.currentTarget = null), (n = i));
          }
      }
    }
  }
  function W(l, t) {
    var a = t[ac];
    a === void 0 && (a = t[ac] = new Set());
    var u = l + "__bubble";
    a.has(u) || (X0(t, l, 2, !1), a.add(u));
  }
  function Kf(l, t, a) {
    var u = 0;
    (t && (u |= 4), X0(a, l, u, t));
  }
  var Dn = "_reactListening" + Math.random().toString(36).slice(2);
  function Jf(l) {
    if (!l[Dn]) {
      ((l[Dn] = !0),
        Ri.forEach(function (a) {
          a !== "selectionchange" && (Ty.has(a) || Kf(a, !1, l), Kf(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Dn] || ((t[Dn] = !0), Kf("selectionchange", !1, t));
    }
  }
  function X0(l, t, a, u) {
    switch (hm(t)) {
      case 2:
        var e = ky;
        break;
      case 8:
        e = Fy;
        break;
      default:
        e = fi;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !mc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function wf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = u.return; c !== null;) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null;) {
            if (((c = Ja(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Ki(function () {
      var v = n,
        g = sc(a),
        A = [];
      l: {
        var h = bs.get(l);
        if (h !== void 0) {
          var r = Ye,
            U = l;
          switch (l) {
            case "keypress":
              if (Be(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = ho;
              break;
            case "focusin":
              ((U = "focus"), (r = hc));
              break;
            case "focusout":
              ((U = "blur"), (r = hc));
              break;
            case "beforeblur":
            case "afterblur":
              r = hc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = $i;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = ao;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = go;
              break;
            case hs:
            case rs:
            case Ss:
              r = no;
              break;
            case gs:
              r = Eo;
              break;
            case "scroll":
            case "scrollend":
              r = lo;
              break;
            case "wheel":
              r = To;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = fo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = ki;
              break;
            case "toggle":
            case "beforetoggle":
              r = Oo;
          }
          var q = (t & 4) !== 0,
            ml = !q && (l === "scroll" || l === "scrollend"),
            m = q ? (h !== null ? h + "Capture" : null) : h;
          q = [];
          for (var s = v, y; s !== null;) {
            var T = s;
            if (
              ((y = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                y === null ||
                m === null ||
                ((T = Bu(s, m)), T != null && q.push(he(s, T, y))),
              ml)
            )
              break;
            s = s.return;
          }
          0 < q.length &&
            ((h = new r(h, U, null, a, g)), A.push({ event: h, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((h = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            h &&
              a !== ic &&
              (U = a.relatedTarget || a.fromElement) &&
              (Ja(U) || U[Ka]))
          )
            break l;
          if (
            (r || h) &&
            ((h =
              g.window === g
                ? g
                : (h = g.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            r
              ? ((U = a.relatedTarget || a.toElement),
                (r = v),
                (U = U ? Ja(U) : null),
                U !== null &&
                  ((ml = Y(U)),
                  (q = U.tag),
                  U !== ml || (q !== 5 && q !== 27 && q !== 6)) &&
                  (U = null))
              : ((r = null), (U = v)),
            r !== U)
          ) {
            if (
              ((q = $i),
              (T = "onMouseLeave"),
              (m = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = ki),
                (T = "onPointerLeave"),
                (m = "onPointerEnter"),
                (s = "pointer")),
              (ml = r == null ? h : Cu(r)),
              (y = U == null ? h : Cu(U)),
              (h = new q(T, s + "leave", r, a, g)),
              (h.target = ml),
              (h.relatedTarget = y),
              (T = null),
              Ja(g) === v &&
                ((q = new q(m, s + "enter", U, a, g)),
                (q.target = y),
                (q.relatedTarget = ml),
                (T = q)),
              (ml = T),
              r && U)
            )
              t: {
                for (q = Ay, m = r, s = U, y = 0, T = m; T; T = q(T)) y++;
                T = 0;
                for (var B = s; B; B = q(B)) T++;
                for (; 0 < y - T;) ((m = q(m)), y--);
                for (; 0 < T - y;) ((s = q(s)), T--);
                for (; y--;) {
                  if (m === s || (s !== null && m === s.alternate)) {
                    q = m;
                    break t;
                  }
                  ((m = q(m)), (s = q(s)));
                }
                q = null;
              }
            else q = null;
            (r !== null && Q0(A, h, r, q, !1),
              U !== null && ml !== null && Q0(A, ml, U, q, !0));
          }
        }
        l: {
          if (
            ((h = v ? Cu(v) : window),
            (r = h.nodeName && h.nodeName.toLowerCase()),
            r === "select" || (r === "input" && h.type === "file"))
          )
            var tl = es;
          else if (as(h))
            if (ns) tl = xo;
            else {
              tl = Ho;
              var R = jo;
            }
          else
            ((r = h.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (h.type !== "checkbox" && h.type !== "radio")
                ? v && fc(v.elementType) && (tl = es)
                : (tl = Ro));
          if (tl && (tl = tl(l, v))) {
            us(A, tl, a, g);
            break l;
          }
          (R && R(l, h, v),
            l === "focusout" &&
              v &&
              h.type === "number" &&
              v.memoizedProps.value != null &&
              cc(h, "number", h.value));
        }
        switch (((R = v ? Cu(v) : window), l)) {
          case "focusin":
            (as(R) || R.contentEditable === "true") &&
              ((tu = R), (zc = v), (Vu = null));
            break;
          case "focusout":
            Vu = zc = tu = null;
            break;
          case "mousedown":
            Tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Tc = !1), ys(A, a, g));
            break;
          case "selectionchange":
            if (Bo) break;
          case "keydown":
          case "keyup":
            ys(A, a, g);
        }
        var K;
        if (Sc)
          l: {
            switch (l) {
              case "compositionstart":
                var F = "onCompositionStart";
                break l;
              case "compositionend":
                F = "onCompositionEnd";
                break l;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break l;
            }
            F = void 0;
          }
        else
          lu
            ? ls(l, a) && (F = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (F = "onCompositionStart");
        (F &&
          (Fi &&
            a.locale !== "ko" &&
            (lu || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && lu && (K = Ji())
              : ((la = g),
                (oc = "value" in la ? la.value : la.textContent),
                (lu = !0))),
          (R = pn(v, F)),
          0 < R.length &&
            ((F = new Wi(F, l, null, a, g)),
            A.push({ event: F, listeners: R }),
            K ? (F.data = K) : ((K = ts(a)), K !== null && (F.data = K)))),
          (K = Mo ? No(l, a) : Do(l, a)) &&
            ((F = pn(v, "onBeforeInput")),
            0 < F.length &&
              ((R = new Wi("onBeforeInput", "beforeinput", null, a, g)),
              A.push({ event: R, listeners: F }),
              (R.data = K))),
          by(A, l, v, a, g));
      }
      G0(A, t);
    });
  }
  function he(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function pn(l, t) {
    for (var a = t + "Capture", u = []; l !== null;) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Bu(l, a)),
          e != null && u.unshift(he(l, e, n)),
          (e = Bu(l, t)),
          e != null && u.push(he(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function Ay(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Q0(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u;) {
      var f = a,
        i = f.alternate,
        v = f.stateNode;
      if (((f = f.tag), i !== null && i === u)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        v === null ||
        ((i = v),
        e
          ? ((v = Bu(a, n)), v != null && c.unshift(he(a, v, i)))
          : e || ((v = Bu(a, n)), v != null && c.push(he(a, v, i)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Oy = /\r\n?/g,
    _y = /\u0000|\uFFFD/g;
  function Z0(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Oy,
        `
`,
      )
      .replace(_y, "");
  }
  function L0(l, t) {
    return ((t = Z0(t)), Z0(l) === t);
  }
  function dl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Fa(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Fa(l, "" + u);
        break;
      case "className":
        He(l, "class", u);
        break;
      case "tabIndex":
        He(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        He(l, a, u);
        break;
      case "style":
        Li(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          He(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && dl(l, t, "name", e.name, e, null),
                dl(l, t, "formEncType", e.formEncType, e, null),
                dl(l, t, "formMethod", e.formMethod, e, null),
                dl(l, t, "formTarget", e.formTarget, e, null))
              : (dl(l, t, "encType", e.encType, e, null),
                dl(l, t, "method", e.method, e, null),
                dl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = xe("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (W("beforetoggle", l), W("toggle", l), je(l, "popover", u));
        break;
      case "xlinkActuate":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        je(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Im.get(a) || a), je(l, a, u));
    }
  }
  function $f(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Li(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Fa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Fa(l, "" + u);
        break;
      case "onScroll":
        u != null && W("scroll", l);
        break;
      case "onScrollEnd":
        u != null && W("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ct);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!xi.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Kl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : je(l, a, u);
          }
    }
  }
  function ql(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (W("error", l), W("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  dl(l, t, n, c, a, null);
              }
          }
        (e && dl(l, t, "srcSet", a.srcSet, a, null),
          u && dl(l, t, "src", a.src, a, null));
        return;
      case "input":
        W("invalid", l);
        var f = (n = c = e = null),
          i = null,
          v = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  v = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  f = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(o(137, t));
                  break;
                default:
                  dl(l, t, u, g, a, null);
              }
          }
        Gi(l, n, f, i, v, c, e, !1);
        return;
      case "select":
        (W("invalid", l), (u = c = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                dl(l, t, e, f, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? ka(l, !!u, t, !1) : a != null && ka(l, !!u, a, !0));
        return;
      case "textarea":
        (W("invalid", l), (n = e = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                dl(l, t, c, f, a, null);
            }
        Qi(l, u, e, n);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                dl(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        (W("beforetoggle", l), W("toggle", l), W("cancel", l), W("close", l));
        break;
      case "iframe":
      case "object":
        W("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ve.length; u++) W(ve[u], l);
        break;
      case "image":
        (W("error", l), W("load", l));
        break;
      case "details":
        W("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (W("error", l), W("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (v in a)
          if (a.hasOwnProperty(v) && ((u = a[v]), u != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                dl(l, t, v, u, a, null);
            }
        return;
      default:
        if (fc(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((u = a[g]), u !== void 0 && $f(l, t, g, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && dl(l, t, f, u, a, null));
  }
  function My(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          f = null,
          i = null,
          v = null,
          g = null;
        for (r in a) {
          var A = a[r];
          if (a.hasOwnProperty(r) && A != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = A;
              default:
                u.hasOwnProperty(r) || dl(l, t, r, null, u, A);
            }
        }
        for (var h in u) {
          var r = u[h];
          if (((A = a[h]), u.hasOwnProperty(h) && (r != null || A != null)))
            switch (h) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                v = r;
                break;
              case "defaultChecked":
                g = r;
                break;
              case "value":
                c = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(137, t));
                break;
              default:
                r !== A && dl(l, t, h, r, u, A);
            }
        }
        nc(l, c, f, i, v, g, n, e);
        return;
      case "select":
        r = c = f = h = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                u.hasOwnProperty(n) || dl(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && dl(l, t, e, n, u, i);
            }
        ((t = f),
          (a = c),
          (u = r),
          h != null
            ? ka(l, !!a, h, !1)
            : !!u != !!a &&
              (t != null ? ka(l, !!a, t, !0) : ka(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        r = h = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                dl(l, t, f, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(o(91));
                break;
              default:
                e !== n && dl(l, t, c, e, u, n);
            }
        Xi(l, h, r);
        return;
      case "option":
        for (var U in a)
          if (
            ((h = a[U]),
            a.hasOwnProperty(U) && h != null && !u.hasOwnProperty(U))
          )
            switch (U) {
              case "selected":
                l.selected = !1;
                break;
              default:
                dl(l, t, U, null, u, h);
            }
        for (i in u)
          if (
            ((h = u[i]),
            (r = a[i]),
            u.hasOwnProperty(i) && h !== r && (h != null || r != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                dl(l, t, i, h, u, r);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          ((h = a[q]),
            a.hasOwnProperty(q) &&
              h != null &&
              !u.hasOwnProperty(q) &&
              dl(l, t, q, null, u, h));
        for (v in u)
          if (
            ((h = u[v]),
            (r = a[v]),
            u.hasOwnProperty(v) && h !== r && (h != null || r != null))
          )
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(137, t));
                break;
              default:
                dl(l, t, v, h, u, r);
            }
        return;
      default:
        if (fc(t)) {
          for (var ml in a)
            ((h = a[ml]),
              a.hasOwnProperty(ml) &&
                h !== void 0 &&
                !u.hasOwnProperty(ml) &&
                $f(l, t, ml, void 0, u, h));
          for (g in u)
            ((h = u[g]),
              (r = a[g]),
              !u.hasOwnProperty(g) ||
                h === r ||
                (h === void 0 && r === void 0) ||
                $f(l, t, g, h, u, r));
          return;
        }
    }
    for (var m in a)
      ((h = a[m]),
        a.hasOwnProperty(m) &&
          h != null &&
          !u.hasOwnProperty(m) &&
          dl(l, t, m, null, u, h));
    for (A in u)
      ((h = u[A]),
        (r = a[A]),
        !u.hasOwnProperty(A) ||
          h === r ||
          (h == null && r == null) ||
          dl(l, t, A, h, u, r));
  }
  function V0(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ny() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          c = e.initiatorType,
          f = e.duration;
        if (n && f && V0(c)) {
          for (c = 0, f = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u],
              v = i.startTime;
            if (v > f) break;
            var g = i.transferSize,
              A = i.initiatorType;
            g &&
              V0(A) &&
              ((i = i.responseEnd), (c += g * (i < f ? 1 : (f - v) / (i - v))));
          }
          if ((--u, (t += (8 * (n + c)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Wf = null,
    kf = null;
  function Un(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function K0(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function J0(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Ff(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var If = null;
  function Dy() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === If
        ? !1
        : ((If = l), !0)
      : ((If = null), !1);
  }
  var w0 = typeof setTimeout == "function" ? setTimeout : void 0,
    py = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $0 = typeof Promise == "function" ? Promise : void 0,
    Uy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $0 < "u"
          ? function (l) {
              return $0.resolve(null).then(l).catch(jy);
            }
          : w0;
  function jy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function Sa(l) {
    return l === "head";
  }
  function W0(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), Du(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") re(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), re(a));
          for (var n = a.firstChild; n;) {
            var c = n.nextSibling,
              f = n.nodeName;
            (n[xu] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && re(l.ownerDocument.body);
      a = e;
    } while (a);
    Du(t);
  }
  function k0(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function Pf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Pf(a), uc(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Hy(l, t, a, u) {
    for (; l.nodeType === 1;) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[xu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Ry(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function F0(l, t) {
    for (; l.nodeType !== 8;)
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function li(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function ti(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function xy(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var ai = null;
  function I0(l) {
    l = l.nextSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Et(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function P0(l) {
    l = l.previousSibling;
    for (var t = 0; l;) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function lm(l, t, a) {
    switch (((t = Un(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(o(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(o(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function re(l) {
    for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
    uc(l);
  }
  var zt = new Map(),
    tm = new Set();
  function jn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var Ft = N.d;
  N.d = { f: Cy, r: By, D: qy, C: Yy, L: Gy, m: Xy, X: Zy, S: Qy, M: Ly };
  function Cy() {
    var l = Ft.f(),
      t = Tn();
    return l || t;
  }
  function By(l) {
    var t = wa(l);
    t !== null && t.tag === 5 && t.type === "form" ? gd(t) : Ft.r(l);
  }
  var _u = typeof document > "u" ? null : document;
  function am(l, t, a) {
    var u = _u;
    if (u && typeof t == "string" && t) {
      var e = yt(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        tm.has(e) ||
          (tm.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            ql(t, "link", l),
            jl(t),
            u.head.appendChild(t))));
    }
  }
  function qy(l) {
    (Ft.D(l), am("dns-prefetch", l, null));
  }
  function Yy(l, t) {
    (Ft.C(l, t), am("preconnect", l, t));
  }
  function Gy(l, t, a) {
    Ft.L(l, t, a);
    var u = _u;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + yt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + yt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + yt(a.imageSizes) + '"]'))
        : (e += '[href="' + yt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Mu(l);
          break;
        case "script":
          n = Nu(l);
      }
      zt.has(n) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        zt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(Se(n))) ||
          (t === "script" && u.querySelector(ge(n))) ||
          ((t = u.createElement("link")),
          ql(t, "link", l),
          jl(t),
          u.head.appendChild(t)));
    }
  }
  function Xy(l, t) {
    Ft.m(l, t);
    var a = _u;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + yt(u) + '"][href="' + yt(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Nu(l);
      }
      if (
        !zt.has(n) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        zt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ge(n))) return;
        }
        ((u = a.createElement("link")),
          ql(u, "link", l),
          jl(u),
          a.head.appendChild(u));
      }
    }
  }
  function Qy(l, t, a) {
    Ft.S(l, t, a);
    var u = _u;
    if (u && l) {
      var e = $a(u).hoistableStyles,
        n = Mu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = u.querySelector(Se(n)))) f.loading = 5;
        else {
          ((l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = zt.get(n)) && ui(l, a));
          var i = (c = u.createElement("link"));
          (jl(i),
            ql(i, "link", l),
            (i._p = new Promise(function (v, g) {
              ((i.onload = v), (i.onerror = g));
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Hn(c, t, u));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: f }),
          e.set(n, c));
      }
    }
  }
  function Zy(l, t) {
    Ft.X(l, t);
    var a = _u;
    if (a && l) {
      var u = $a(a).hoistableScripts,
        e = Nu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ge(e))),
        n ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = zt.get(e)) && ei(l, t),
          (n = a.createElement("script")),
          jl(n),
          ql(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Ly(l, t) {
    Ft.M(l, t);
    var a = _u;
    if (a && l) {
      var u = $a(a).hoistableScripts,
        e = Nu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ge(e))),
        n ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = zt.get(e)) && ei(l, t),
          (n = a.createElement("script")),
          jl(n),
          ql(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function um(l, t, a, u) {
    var e = (e = w.current) ? jn(e) : null;
    if (!e) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Mu(a.href)),
            (a = $a(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Mu(a.href);
          var n = $a(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(Se(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              zt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                zt.set(l, a),
                n || Vy(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(o(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Nu(a)),
              (a = $a(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, l));
    }
  }
  function Mu(l) {
    return 'href="' + yt(l) + '"';
  }
  function Se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function em(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Vy(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        ql(t, "link", a),
        jl(t),
        l.head.appendChild(t));
  }
  function Nu(l) {
    return '[src="' + yt(l) + '"]';
  }
  function ge(l) {
    return "script[async]" + l;
  }
  function nm(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + yt(a.href) + '"]');
          if (u) return ((t.instance = u), jl(u), u);
          var e = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            jl(u),
            ql(u, "style", e),
            Hn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Mu(a.href);
          var n = l.querySelector(Se(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), jl(n), n);
          ((u = em(a)),
            (e = zt.get(e)) && ui(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            jl(n));
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              ((c.onload = f), (c.onerror = i));
            })),
            ql(n, "link", u),
            (t.state.loading |= 4),
            Hn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Nu(a.src)),
            (e = l.querySelector(ge(n)))
              ? ((t.instance = e), jl(e), e)
              : ((u = a),
                (e = zt.get(n)) && ((u = C({}, a)), ei(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                jl(e),
                ql(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Hn(u, a.precedence, l));
    return t.instance;
  }
  function Hn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function ui(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function ei(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Rn = null;
  function cm(l, t, a) {
    if (Rn === null) {
      var u = new Map(),
        e = (Rn = new Map());
      e.set(a, u);
    } else ((e = Rn), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[xu] ||
          n[Rl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function fm(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Ky(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function im(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Jy(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = Mu(u.href),
          n = t.querySelector(Se(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = xn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            jl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = em(u)),
          (e = zt.get(e)) && ui(u, e),
          (n = n.createElement("link")),
          jl(n));
        var c = n;
        ((c._p = new Promise(function (f, i) {
          ((c.onload = f), (c.onerror = i));
        })),
          ql(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = xn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var ni = 0;
  function wy(l, t) {
    return (
      l.stylesheets && l.count === 0 && Bn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Bn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && ni === 0 && (ni = 62500 * Ny());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Bn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > ni ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function xn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Bn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Cn = null;
  function Bn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Cn = new Map()),
        t.forEach($y, l),
        (Cn = null),
        xn.call(l)));
  }
  function $y(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Cn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Cn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = xn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var be = {
    $$typeof: Ul,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function Wy(l, t, a, u, e, n, c, f, i) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Pn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Pn(0)),
      (this.hiddenUpdates = Pn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function sm(l, t, a, u, e, n, c, f, i, v, g, A) {
    return (
      (l = new Wy(l, t, a, c, i, v, g, A, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ut(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = qc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Qc(n),
      l
    );
  }
  function dm(l) {
    return l ? ((l = eu), l) : eu;
  }
  function mm(l, t, a, u, e, n) {
    ((e = dm(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ca(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = fa(l, u, t)),
      a !== null && (Fl(a, l, t), Fu(a, l, t)));
  }
  function om(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ci(l, t) {
    (om(l, t), (l = l.alternate) && om(l, t));
  }
  function ym(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ua(l, 67108864);
      (t !== null && Fl(t, l, 67108864), ci(l, 67108864));
    }
  }
  function vm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = it();
      t = lc(t);
      var a = Ua(l, t);
      (a !== null && Fl(a, l, t), ci(l, t));
    }
  }
  var qn = !0;
  function ky(l, t, a, u) {
    var e = z.T;
    z.T = null;
    var n = N.p;
    try {
      ((N.p = 2), fi(l, t, a, u));
    } finally {
      ((N.p = n), (z.T = e));
    }
  }
  function Fy(l, t, a, u) {
    var e = z.T;
    z.T = null;
    var n = N.p;
    try {
      ((N.p = 8), fi(l, t, a, u));
    } finally {
      ((N.p = n), (z.T = e));
    }
  }
  function fi(l, t, a, u) {
    if (qn) {
      var e = ii(u);
      if (e === null) (wf(l, t, u, Yn, a), rm(l, u));
      else if (Py(e, l, t, a, u)) u.stopPropagation();
      else if ((rm(l, u), t & 4 && -1 < Iy.indexOf(l))) {
        for (; e !== null;) {
          var n = wa(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = _a(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c;) {
                      var i = 1 << (31 - tt(c));
                      ((f.entanglements[1] |= i), (c &= ~i));
                    }
                    (Ht(n), (ul & 6) === 0 && ((En = Pl() + 500), ye(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Ua(n, 2)), f !== null && Fl(f, n, 2), Tn(), ci(n, 2));
            }
          if (((n = ii(u)), n === null && wf(l, t, u, Yn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else wf(l, t, u, null, a);
    }
  }
  function ii(l) {
    return ((l = sc(l)), si(l));
  }
  var Yn = null;
  function si(l) {
    if (((Yn = null), (l = Ja(l)), l !== null)) {
      var t = Y(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = Q(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = ll(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Yn = l), null);
  }
  function hm(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Bm()) {
          case Ai:
            return 2;
          case Oi:
            return 8;
          case Me:
          case qm:
            return 32;
          case _i:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var di = !1,
    ga = null,
    ba = null,
    Ea = null,
    Ee = new Map(),
    ze = new Map(),
    za = [],
    Iy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function rm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ga = null;
        break;
      case "dragenter":
      case "dragleave":
        ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Ea = null;
        break;
      case "pointerover":
      case "pointerout":
        Ee.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ze.delete(t.pointerId);
    }
  }
  function Te(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = wa(t)), t !== null && ym(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Py(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((ga = Te(ga, l, t, a, u, e)), !0);
      case "dragenter":
        return ((ba = Te(ba, l, t, a, u, e)), !0);
      case "mouseover":
        return ((Ea = Te(Ea, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (Ee.set(n, Te(Ee.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          ze.set(n, Te(ze.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function Sm(l) {
    var t = Ja(l.target);
    if (t !== null) {
      var a = Y(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = Q(a)), t !== null)) {
            ((l.blockedOn = t),
              ji(l.priority, function () {
                vm(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = ll(a)), t !== null)) {
            ((l.blockedOn = t),
              ji(l.priority, function () {
                vm(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Gn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length;) {
      var a = ii(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((ic = u), a.target.dispatchEvent(u), (ic = null));
      } else return ((t = wa(a)), t !== null && ym(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function gm(l, t, a) {
    Gn(l) && a.delete(t);
  }
  function lv() {
    ((di = !1),
      ga !== null && Gn(ga) && (ga = null),
      ba !== null && Gn(ba) && (ba = null),
      Ea !== null && Gn(Ea) && (Ea = null),
      Ee.forEach(gm),
      ze.forEach(gm));
  }
  function Xn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      di ||
        ((di = !0),
        b.unstable_scheduleCallback(b.unstable_NormalPriority, lv)));
  }
  var Qn = null;
  function bm(l) {
    Qn !== l &&
      ((Qn = l),
      b.unstable_scheduleCallback(b.unstable_NormalPriority, function () {
        Qn === l && (Qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (si(u || a) === null) continue;
            break;
          }
          var n = wa(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            ff(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function Du(l) {
    function t(i) {
      return Xn(i, l);
    }
    (ga !== null && Xn(ga, l),
      ba !== null && Xn(ba, l),
      Ea !== null && Xn(Ea, l),
      Ee.forEach(t),
      ze.forEach(t));
    for (var a = 0; a < za.length; a++) {
      var u = za[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < za.length && ((a = za[0]), a.blockedOn === null);)
      (Sm(a), a.blockedOn === null && za.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Kl] || null;
        if (typeof n == "function") c || bm(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Kl] || null))) f = c.formAction;
            else if (si(e) !== null) continue;
          } else f = c.action;
          (typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            bm(a));
        }
      }
  }
  function Em() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (e = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function mi(l) {
    this._internalRoot = l;
  }
  ((Zn.prototype.render = mi.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        u = it();
      mm(a, u, l, t, null, null);
    }),
    (Zn.prototype.unmount = mi.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (mm(l.current, 2, null, l, null, null), Tn(), (t[Ka] = null));
        }
      }));
  function Zn(l) {
    this._internalRoot = l;
  }
  Zn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ui();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < za.length && t !== 0 && t < za[a].priority; a++);
      (za.splice(a, 0, l), a === 0 && Sm(l));
    }
  };
  var zm = p.version;
  if (zm !== "19.2.7") throw Error(o(527, zm, "19.2.7"));
  N.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(o(188))
        : ((l = Object.keys(l).join(",")), Error(o(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? J(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var tv = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.7",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ln = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ln.isDisabled && Ln.supportsFiber)
      try {
        ((ju = Ln.inject(tv)), (lt = Ln));
      } catch {}
  }
  return (
    (Oe.createRoot = function (l, t) {
      if (!j(l)) throw Error(o(299));
      var a = !1,
        u = "",
        e = Dd,
        n = pd,
        c = Ud;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = sm(l, 1, !1, null, null, a, u, null, e, n, c, Em)),
        (l[Ka] = t.current),
        Jf(l),
        new mi(t)
      );
    }),
    (Oe.hydrateRoot = function (l, t, a) {
      if (!j(l)) throw Error(o(299));
      var u = !1,
        e = "",
        n = Dd,
        c = pd,
        f = Ud,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.formState !== void 0 && (i = a.formState)),
        (t = sm(l, 1, !0, t, a ?? null, u, e, i, n, c, f, Em)),
        (t.context = dm(null)),
        (a = t.current),
        (u = it()),
        (u = lc(u)),
        (e = ca(u)),
        (e.callback = null),
        fa(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Ru(t, a),
        Ht(t),
        (l[Ka] = t.current),
        Jf(l),
        new Zn(t)
      );
    }),
    (Oe.version = "19.2.7"),
    Oe
  );
}
var jm;
function yv() {
  if (jm) return vi.exports;
  jm = 1;
  function b() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b);
      } catch (p) {
        console.error(p);
      }
  }
  return (b(), (vi.exports = ov()), vi.exports);
}
var vv = yv();
class Ei extends Error {
  constructor(p, x) {
    (super(x), (this.status = p));
  }
}
async function Jn(b, p) {
  const x = await fetch(b, {
    headers: { "Content-Type": "application/json" },
    ...p,
  });
  if (!x.ok) {
    let o = x.statusText;
    try {
      const j = await x.json();
      typeof j.detail == "string" && (o = j.detail);
    } catch {}
    throw new Ei(x.status, o);
  }
  return x.json();
}
const Vn = (b) => Jn(b),
  pu = (b, p) =>
    Jn(b, { method: "POST", body: p === void 0 ? void 0 : JSON.stringify(p) }),
  Hm = (b, p) => Jn(b, { method: "PATCH", body: JSON.stringify(p) }),
  gi = (b) => Jn(b, { method: "DELETE" }),
  st = "/api/v1",
  Ql = {
    login: (b) => pu("/api/login", { password: b }),
    logout: () => pu("/api/logout"),
    status: () => Vn(`${st}/status`),
    blocklists: () => Vn(`${st}/blocklists`),
    addBlocklist: (b) => pu(`${st}/blocklists`, b),
    patchBlocklist: (b, p) => Hm(`${st}/blocklists/${b}`, p),
    refreshBlocklist: (b) => pu(`${st}/blocklists/${b}/refresh`),
    deleteBlocklist: (b) => gi(`${st}/blocklists/${b}`),
    records: () => Vn(`${st}/records`),
    addRecord: (b) => pu(`${st}/records`, b),
    patchRecord: (b, p) => Hm(`${st}/records/${b}`, p),
    deleteRecord: (b) => gi(`${st}/records/${b}`),
    allowlist: () => Vn(`${st}/allowlist`),
    addAllow: (b) => pu(`${st}/allowlist`, { domain: b }),
    deleteAllow: (b) => gi(`${st}/allowlist/${b}`),
  };
function La(b) {
  return b instanceof Ei || b instanceof Error ? b.message : String(b);
}
function hv({ onChanged: b }) {
  const [p, x] = fl.useState(null),
    [o, j] = fl.useState(""),
    [Y, Q] = fl.useState(!1),
    [ll, _] = fl.useState("");
  async function E() {
    x(await Ql.allowlist());
  }
  fl.useEffect(() => {
    E().catch((Z) => j(La(Z)));
  }, []);
  async function J(Z) {
    (j(""), Q(!0));
    try {
      (await Z(), await E(), b());
    } catch (El) {
      j(La(El));
    } finally {
      Q(!1);
    }
  }
  function C(Z) {
    (Z.preventDefault(),
      J(async () => {
        (await Ql.addAllow(ll.trim()), _(""));
      }));
  }
  return S.jsxs("section", {
    className: "section",
    children: [
      S.jsxs("table", {
        children: [
          S.jsx("thead", {
            children: S.jsxs("tr", {
              children: [
                S.jsx("th", { children: "Domain" }),
                S.jsx("th", { className: "num", "aria-label": "actions" }),
              ],
            }),
          }),
          S.jsxs("tbody", {
            children: [
              p == null
                ? void 0
                : p.map((Z) =>
                    S.jsxs(
                      "tr",
                      {
                        children: [
                          S.jsx("td", {
                            className: "cell-main",
                            children: Z.domain,
                          }),
                          S.jsx("td", {
                            className: "actions",
                            children: S.jsx("button", {
                              className: "btn btn--red",
                              disabled: Y,
                              onClick: () => J(() => Ql.deleteAllow(Z.id)),
                              children: "Delete",
                            }),
                          }),
                        ],
                      },
                      Z.id,
                    ),
                  ),
              p &&
                p.length === 0 &&
                S.jsx("tr", {
                  children: S.jsx("td", {
                    colSpan: 2,
                    className: "empty",
                    children: "NO ALLOWLIST ENTRIES.",
                  }),
                }),
            ],
          }),
        ],
      }),
      S.jsxs("form", {
        className: "addbar",
        onSubmit: C,
        children: [
          S.jsx("div", {
            className: "addbar-grow",
            children: S.jsx("input", {
              className: "field",
              placeholder: "DOMAIN.TLD",
              value: ll,
              onChange: (Z) => _(Z.target.value),
            }),
          }),
          S.jsx("button", {
            className: "btn btn--solid",
            type: "submit",
            disabled: Y || !ll.trim(),
            children: "Allow",
          }),
        ],
      }),
      o && S.jsx("p", { className: "error", children: o }),
      S.jsx("p", {
        className: "footnote",
        children:
          "Allowlisted domains are removed from every blocklist at compile time (exact match).",
      }),
    ],
  });
}
function Kn(b) {
  return b.toLocaleString("de-CH");
}
function rv(b) {
  if (b === null) return "NEVER";
  const p = Math.max(0, Date.now() / 1e3 - b);
  return p < 60
    ? "JUST NOW"
    : p < 3600
      ? `${Math.floor(p / 60)} MIN AGO`
      : p < 86400
        ? `${Math.floor(p / 3600)} H AGO`
        : `${Math.floor(p / 86400)} D AGO`;
}
function Sv(b) {
  if (b === null) return "—";
  const p = Math.max(0, Date.now() / 1e3 - b),
    x = Math.floor(p / 86400),
    o = Math.floor((p % 86400) / 3600),
    j = Math.floor((p % 3600) / 60);
  return x > 0 ? `${x} D ${o} H` : o > 0 ? `${o} H ${j} MIN` : `${j} MIN`;
}
function gv({ onChanged: b }) {
  const [p, x] = fl.useState(null),
    [o, j] = fl.useState(""),
    [Y, Q] = fl.useState(null),
    [ll, _] = fl.useState(""),
    [E, J] = fl.useState(""),
    [C, Z] = fl.useState("24");
  async function El() {
    x(await Ql.blocklists());
  }
  fl.useEffect(() => {
    El().catch((M) => j(La(M)));
  }, []);
  async function Sl(M, dt) {
    (j(""), Q(M));
    try {
      (await dt(), await El(), b());
    } catch (Ul) {
      j(La(Ul));
    } finally {
      Q(null);
    }
  }
  function Dl(M) {
    (M.preventDefault(),
      Sl("add", async () => {
        (await Ql.addBlocklist({
          url: ll.trim(),
          name: E.trim() || void 0,
          refresh_hours: parseInt(C, 10) || 24,
        }),
          _(""),
          J(""),
          Z("24"));
      }));
  }
  function Il(M) {
    return M.enabled
      ? M.last_status && M.last_status !== "ok"
        ? S.jsx("span", {
            className: "flag flag--err",
            title: M.last_status,
            children: "ERROR",
          })
        : S.jsx("span", { className: "flag flag--ok", children: "OK" })
      : S.jsx("span", { className: "flag flag--off", children: "OFF" });
  }
  return S.jsxs("section", {
    className: "section",
    children: [
      S.jsxs("table", {
        children: [
          S.jsx("thead", {
            children: S.jsxs("tr", {
              children: [
                S.jsx("th", { children: "List" }),
                S.jsx("th", { className: "num", children: "Entries" }),
                S.jsx("th", { children: "Updated" }),
                S.jsx("th", { children: "Every" }),
                S.jsx("th", { children: "State" }),
                S.jsx("th", { className: "num", "aria-label": "actions" }),
              ],
            }),
          }),
          S.jsxs("tbody", {
            children: [
              p == null
                ? void 0
                : p.map((M) =>
                    S.jsxs(
                      "tr",
                      {
                        className: M.enabled ? "" : "row--off",
                        children: [
                          S.jsxs("td", {
                            children: [
                              S.jsx("div", {
                                className: "cell-main",
                                children: M.name,
                              }),
                              S.jsx("div", {
                                className: "cell-sub",
                                title: M.url,
                                children: M.url,
                              }),
                            ],
                          }),
                          S.jsx("td", {
                            className: "num",
                            children: Kn(M.entry_count),
                          }),
                          S.jsx("td", { children: rv(M.last_fetched_at) }),
                          S.jsxs("td", { children: [M.refresh_hours, " H"] }),
                          S.jsx("td", { children: Il(M) }),
                          S.jsxs("td", {
                            className: "actions",
                            children: [
                              S.jsx("button", {
                                className: "btn",
                                disabled: Y !== null,
                                onClick: () =>
                                  Sl(M.id, () =>
                                    Ql.patchBlocklist(M.id, {
                                      enabled: !M.enabled,
                                    }),
                                  ),
                                children: M.enabled ? "Disable" : "Enable",
                              }),
                              S.jsx("button", {
                                className: "btn",
                                disabled: Y !== null,
                                onClick: () =>
                                  Sl(M.id, () => Ql.refreshBlocklist(M.id)),
                                children: Y === M.id ? "Working…" : "Refresh",
                              }),
                              S.jsx("button", {
                                className: "btn btn--red",
                                disabled: Y !== null,
                                onClick: () => {
                                  window.confirm(
                                    `Delete blocklist "${M.name}"?`,
                                  ) && Sl(M.id, () => Ql.deleteBlocklist(M.id));
                                },
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      },
                      M.id,
                    ),
                  ),
              p &&
                p.length === 0 &&
                S.jsx("tr", {
                  children: S.jsx("td", {
                    colSpan: 6,
                    className: "empty",
                    children: "NO BLOCKLISTS. ADD ONE BELOW.",
                  }),
                }),
            ],
          }),
        ],
      }),
      S.jsxs("form", {
        className: "addbar",
        onSubmit: Dl,
        children: [
          S.jsx("div", {
            className: "addbar-grow",
            children: S.jsx("input", {
              className: "field",
              placeholder: "HTTPS://… BLOCKLIST URL",
              value: ll,
              onChange: (M) => _(M.target.value),
            }),
          }),
          S.jsx("div", {
            className: "addbar-mid",
            children: S.jsx("input", {
              className: "field",
              placeholder: "NAME (OPTIONAL)",
              value: E,
              onChange: (M) => J(M.target.value),
            }),
          }),
          S.jsx("div", {
            className: "addbar-small",
            children: S.jsx("input", {
              className: "field",
              type: "number",
              min: "1",
              placeholder: "EVERY (H)",
              value: C,
              onChange: (M) => Z(M.target.value),
            }),
          }),
          S.jsx("button", {
            className: "btn btn--solid",
            type: "submit",
            disabled: Y !== null || !ll.trim(),
            children: Y === "add" ? "Fetching…" : "Add list",
          }),
        ],
      }),
      o && S.jsx("p", { className: "error", children: o }),
      S.jsx("p", {
        className: "footnote",
        children:
          "Hosts-format and plain domain lists are supported. Lists are re-fetched automatically on their interval; changes reload dnsmasq without downtime.",
      }),
    ],
  });
}
function bv({ onSuccess: b }) {
  const [p, x] = fl.useState(""),
    [o, j] = fl.useState(""),
    [Y, Q] = fl.useState(!1);
  async function ll(_) {
    (_.preventDefault(), j(""), Q(!0));
    try {
      (await Ql.login(p), b());
    } catch (E) {
      j(La(E));
    } finally {
      Q(!1);
    }
  }
  return S.jsx("div", {
    className: "login",
    children: S.jsxs("div", {
      className: "login-box",
      children: [
        S.jsxs("h1", {
          className: "wordmark",
          children: [
            "DOMEIN",
            S.jsx("span", { className: "dot", children: "." }),
          ],
        }),
        S.jsx("p", {
          className: "kicker kicker--gray",
          children: "PRIVATE DNS. AUTHORIZED PERSONNEL ONLY.",
        }),
        S.jsx("div", { className: "login-rule" }),
        S.jsxs("form", {
          onSubmit: ll,
          children: [
            S.jsx("input", {
              className: "field",
              type: "password",
              placeholder: "PASSWORD",
              value: p,
              onChange: (_) => x(_.target.value),
              autoFocus: !0,
            }),
            S.jsx("button", {
              className: "btn btn--solid",
              type: "submit",
              disabled: Y || !p,
              children: "ENTER",
            }),
          ],
        }),
        o && S.jsx("p", { className: "error", children: o }),
      ],
    }),
  });
}
const Ev = ["A", "AAAA", "CNAME", "TXT"];
function zv({ onChanged: b }) {
  const [p, x] = fl.useState(null),
    [o, j] = fl.useState(""),
    [Y, Q] = fl.useState(!1),
    [ll, _] = fl.useState("A"),
    [E, J] = fl.useState(""),
    [C, Z] = fl.useState("");
  async function El() {
    x(await Ql.records());
  }
  fl.useEffect(() => {
    El().catch((M) => j(La(M)));
  }, []);
  async function Sl(M) {
    (j(""), Q(!0));
    try {
      (await M(), await El(), b());
    } catch (dt) {
      j(La(dt));
    } finally {
      Q(!1);
    }
  }
  function Dl(M) {
    (M.preventDefault(),
      Sl(async () => {
        (await Ql.addRecord({ type: ll, name: E.trim(), value: C.trim() }),
          J(""),
          Z(""));
      }));
  }
  const Il =
    ll === "A"
      ? "192.168.1.10"
      : ll === "AAAA"
        ? "FD00::10"
        : ll === "CNAME"
          ? "TARGET.HOME.ARPA"
          : "TEXT VALUE";
  return S.jsxs("section", {
    className: "section",
    children: [
      S.jsxs("table", {
        children: [
          S.jsx("thead", {
            children: S.jsxs("tr", {
              children: [
                S.jsx("th", { className: "col-type", children: "Type" }),
                S.jsx("th", { children: "Name" }),
                S.jsx("th", { children: "Value" }),
                S.jsx("th", { children: "State" }),
                S.jsx("th", { className: "num", "aria-label": "actions" }),
              ],
            }),
          }),
          S.jsxs("tbody", {
            children: [
              p == null
                ? void 0
                : p.map((M) =>
                    S.jsxs(
                      "tr",
                      {
                        className: M.enabled ? "" : "row--off",
                        children: [
                          S.jsx("td", {
                            children: S.jsx("span", {
                              className: "flag",
                              children: M.type,
                            }),
                          }),
                          S.jsx("td", {
                            className: "cell-main",
                            children: M.name,
                          }),
                          S.jsx("td", { children: M.value }),
                          S.jsx("td", {
                            children: M.enabled
                              ? S.jsx("span", {
                                  className: "flag flag--ok",
                                  children: "ON",
                                })
                              : S.jsx("span", {
                                  className: "flag flag--off",
                                  children: "OFF",
                                }),
                          }),
                          S.jsxs("td", {
                            className: "actions",
                            children: [
                              S.jsx("button", {
                                className: "btn",
                                disabled: Y,
                                onClick: () =>
                                  Sl(() =>
                                    Ql.patchRecord(M.id, {
                                      enabled: !M.enabled,
                                    }),
                                  ),
                                children: M.enabled ? "Disable" : "Enable",
                              }),
                              S.jsx("button", {
                                className: "btn btn--red",
                                disabled: Y,
                                onClick: () => {
                                  window.confirm(`Delete record ${M.name}?`) &&
                                    Sl(() => Ql.deleteRecord(M.id));
                                },
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      },
                      M.id,
                    ),
                  ),
              p &&
                p.length === 0 &&
                S.jsx("tr", {
                  children: S.jsx("td", {
                    colSpan: 5,
                    className: "empty",
                    children: "NO CUSTOM RECORDS.",
                  }),
                }),
            ],
          }),
        ],
      }),
      S.jsxs("form", {
        className: "addbar",
        onSubmit: Dl,
        children: [
          S.jsx("div", {
            className: "addbar-small",
            children: S.jsx("select", {
              className: "field",
              value: ll,
              onChange: (M) => _(M.target.value),
              children: Ev.map((M) =>
                S.jsx("option", { value: M, children: M }, M),
              ),
            }),
          }),
          S.jsx("div", {
            className: "addbar-mid",
            children: S.jsx("input", {
              className: "field",
              placeholder: "NAS.HOME.ARPA",
              value: E,
              onChange: (M) => J(M.target.value),
            }),
          }),
          S.jsx("div", {
            className: "addbar-grow",
            children: S.jsx("input", {
              className: "field",
              placeholder: Il,
              value: C,
              onChange: (M) => Z(M.target.value),
            }),
          }),
          S.jsx("button", {
            className: "btn btn--solid",
            type: "submit",
            disabled: Y || !E.trim() || !C.trim(),
            children: "Add record",
          }),
        ],
      }),
      o && S.jsx("p", { className: "error", children: o }),
      S.jsx("p", {
        className: "footnote",
        children:
          "Prefix a name with *. for wildcard A/AAAA (covers the domain and all subdomains). CNAME targets must be names this resolver itself answers for (a dnsmasq limitation).",
      }),
    ],
  });
}
const Tv = [
  { key: "blocklists", label: "Blocklists" },
  { key: "records", label: "Records" },
  { key: "allowlist", label: "Allowlist" },
];
function Av() {
  const [b, p] = fl.useState(null),
    [x, o] = fl.useState(null),
    [j, Y] = fl.useState("blocklists"),
    Q = fl.useCallback(async () => {
      try {
        (o(await Ql.status()), p(!0));
      } catch (E) {
        E instanceof Ei && E.status === 401 && p(!1);
      }
    }, []);
  (fl.useEffect(() => {
    Q();
  }, [Q]),
    fl.useEffect(() => {
      if (!b) return;
      const E = setInterval(Q, 1e4);
      return () => clearInterval(E);
    }, [b, Q]));
  async function ll() {
    (await Ql.logout(), p(!1), o(null));
  }
  if (b === null) return null;
  if (!b) return S.jsx(bv, { onSuccess: Q });
  const _ = x == null ? void 0 : x.dnsmasq;
  return S.jsxs("div", {
    className: "wrap",
    children: [
      S.jsxs("header", {
        className: "masthead",
        children: [
          S.jsxs("h1", {
            className: "wordmark",
            children: [
              "DOMEIN",
              S.jsx("span", { className: "dot", children: "." }),
            ],
          }),
          S.jsx("div", {
            className: "masthead-meta",
            children: S.jsx("button", {
              className: "btn btn--red",
              onClick: ll,
              style: { margin: 0 },
              children: "Log out",
            }),
          }),
        ],
      }),
      S.jsxs("dl", {
        className: "board",
        children: [
          S.jsxs("div", {
            children: [
              S.jsx("dt", {
                className: "kicker kicker--gray",
                children: "Resolver",
              }),
              S.jsx("dd", {
                className: _ != null && _.running ? "" : "bad",
                title: (_ == null ? void 0 : _.error) ?? void 0,
                children: _ != null && _.running ? "RUNNING" : "DOWN",
              }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("dt", {
                className: "kicker kicker--gray",
                children: "Uptime",
              }),
              S.jsx("dd", {
                children: Sv((_ == null ? void 0 : _.started_at) ?? null),
              }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("dt", {
                className: "kicker kicker--gray",
                children: "Blocked domains",
              }),
              S.jsx("dd", { children: x ? Kn(x.blocked_domains) : "—" }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("dt", {
                className: "kicker kicker--gray",
                children: "Lists",
              }),
              S.jsx("dd", { children: x ? Kn(x.blocklists) : "—" }),
            ],
          }),
          S.jsxs("div", {
            children: [
              S.jsx("dt", {
                className: "kicker kicker--gray",
                children: "Records",
              }),
              S.jsx("dd", { children: x ? Kn(x.records) : "—" }),
            ],
          }),
        ],
      }),
      _ &&
        !_.running &&
        _.error &&
        S.jsxs("p", {
          className: "error",
          children: ["RESOLVER DOWN: ", _.error],
        }),
      S.jsx("nav", {
        className: "tabs",
        children: Tv.map((E) =>
          S.jsx(
            "button",
            {
              className: `tab${j === E.key ? " active" : ""}`,
              onClick: () => Y(E.key),
              children: E.label,
            },
            E.key,
          ),
        ),
      }),
      j === "blocklists" && S.jsx(gv, { onChanged: Q }),
      j === "records" && S.jsx(zv, { onChanged: Q }),
      j === "allowlist" && S.jsx(hv, { onChanged: Q }),
    ],
  });
}
vv.createRoot(document.getElementById("root")).render(
  S.jsx(fv.StrictMode, { children: S.jsx(Av, {}) }),
);
