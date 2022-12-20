/*!
FullCalendar v5.3.2
Docs & License: https://fullcalendar.io/
(c) 2020 Adam Shaw
*/
var FullCalendar = (function (e) {
    "use strict";
    var t = function (e, n) {
        return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                    e.__proto__ = t;
                }) ||
            function (e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, n);
    };
    function n(e, n) {
        function r() {
            this.constructor = e;
        }
        t(e, n),
            (e.prototype =
                null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
    }
    var r = function () {
        return (r =
            Object.assign ||
            function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in (t = arguments[n]))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                            (e[o] = t[o]);
                return e;
            }).apply(this, arguments);
    };
    function o() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
            e += arguments[t].length;
        var r = Array(e),
            o = 0;
        for (t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++)
                r[o] = i[a];
        return r;
    }
    var i,
        a,
        s,
        l,
        u,
        c,
        d,
        p = {},
        f = [],
        h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function v(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function g(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function m(e, t, n) {
        var r,
            o = arguments,
            i = {};
        for (r in t) "key" !== r && "ref" !== r && (i[r] = t[r]);
        if (arguments.length > 3)
            for (n = [n], r = 3; r < arguments.length; r++) n.push(o[r]);
        if (
            (null != n && (i.children = n),
            "function" == typeof e && null != e.defaultProps)
        )
            for (r in e.defaultProps)
                void 0 === i[r] && (i[r] = e.defaultProps[r]);
        return y(e, i, t && t.key, t && t.ref, null);
    }
    function y(e, t, n, r, o) {
        var a = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: o,
        };
        return null == o && (a.__v = a), i.vnode && i.vnode(a), a;
    }
    function E(e) {
        return e.children;
    }
    function S(e, t) {
        (this.props = e), (this.context = t);
    }
    function D(e, t) {
        if (null == t) return e.__ ? D(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? D(e) : null;
    }
    function b(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break;
                }
            return b(e);
        }
    }
    function C(e) {
        ((!e.__d && (e.__d = !0) && a.push(e) && !s++) ||
            u !== i.debounceRendering) &&
            ((u = i.debounceRendering) || l)(w);
    }
    function w() {
        for (var e; (s = a.length); )
            (e = a.sort(function (e, t) {
                return e.__v.__b - t.__v.__b;
            })),
                (a = []),
                e.some(function (e) {
                    var t, n, r, o, i, a, s;
                    e.__d &&
                        ((a = (i = (t = e).__v).__e),
                        (s = t.__P) &&
                            ((n = []),
                            ((r = v({}, i)).__v = r),
                            (o = _(
                                s,
                                i,
                                r,
                                t.__n,
                                void 0 !== s.ownerSVGElement,
                                null,
                                n,
                                null == a ? D(i) : a
                            )),
                            I(n, i),
                            o != a && b(i)));
                });
    }
    function R(e, t, n, r, o, i, a, s, l) {
        var u,
            c,
            d,
            h,
            v,
            m,
            y,
            E = (n && n.__k) || f,
            S = E.length;
        if (
            (s == p && (s = null != i ? i[0] : S ? D(n, 0) : null),
            (u = 0),
            (t.__k = T(t.__k, function (n) {
                if (null != n) {
                    if (
                        ((n.__ = t),
                        (n.__b = t.__b + 1),
                        null === (d = E[u]) ||
                            (d && n.key == d.key && n.type === d.type))
                    )
                        E[u] = void 0;
                    else
                        for (c = 0; c < S; c++) {
                            if (
                                (d = E[c]) &&
                                n.key == d.key &&
                                n.type === d.type
                            ) {
                                E[c] = void 0;
                                break;
                            }
                            d = null;
                        }
                    if (
                        ((h = _(e, n, (d = d || p), r, o, i, a, s, l)),
                        (c = n.ref) &&
                            d.ref != c &&
                            (y || (y = []),
                            d.ref && y.push(d.ref, null, n),
                            y.push(c, n.__c || h, n)),
                        null != h)
                    ) {
                        var f;
                        if ((null == m && (m = h), void 0 !== n.__d))
                            (f = n.__d), (n.__d = void 0);
                        else if (i == d || h != s || null == h.parentNode) {
                            e: if (null == s || s.parentNode !== e)
                                e.appendChild(h), (f = null);
                            else {
                                for (
                                    v = s, c = 0;
                                    (v = v.nextSibling) && c < S;
                                    c += 2
                                )
                                    if (v == h) break e;
                                e.insertBefore(h, s), (f = s);
                            }
                            "option" == t.type && (e.value = "");
                        }
                        (s = void 0 !== f ? f : h.nextSibling),
                            "function" == typeof t.type && (t.__d = s);
                    } else s && d.__e == s && s.parentNode != e && (s = D(d));
                }
                return u++, n;
            })),
            (t.__e = m),
            null != i && "function" != typeof t.type)
        )
            for (u = i.length; u--; ) null != i[u] && g(i[u]);
        for (u = S; u--; ) null != E[u] && H(E[u], E[u]);
        if (y) for (u = 0; u < y.length; u++) N(y[u], y[++u], y[++u]);
    }
    function T(e, t, n) {
        if ((null == n && (n = []), null == e || "boolean" == typeof e))
            t && n.push(t(null));
        else if (Array.isArray(e))
            for (var r = 0; r < e.length; r++) T(e[r], t, n);
        else
            n.push(
                t
                    ? t(
                          "string" == typeof e || "number" == typeof e
                              ? y(null, e, null, null, e)
                              : null != e.__e || null != e.__c
                              ? y(e.type, e.props, e.key, null, e.__v)
                              : e
                      )
                    : e
            );
        return n;
    }
    function k(e, t, n) {
        "-" === t[0]
            ? e.setProperty(t, n)
            : (e[t] =
                  "number" == typeof n && !1 === h.test(t)
                      ? n + "px"
                      : null == n
                      ? ""
                      : n);
    }
    function M(e, t, n, r, o) {
        var i, a, s, l, u;
        if (
            (o
                ? "className" === t && (t = "class")
                : "class" === t && (t = "className"),
            "style" === t)
        )
            if (((i = e.style), "string" == typeof n)) i.cssText = n;
            else {
                if (("string" == typeof r && ((i.cssText = ""), (r = null)), r))
                    for (l in r) (n && l in n) || k(i, l, "");
                if (n) for (u in n) (r && n[u] === r[u]) || k(i, u, n[u]);
            }
        else
            "o" === t[0] && "n" === t[1]
                ? ((a = t !== (t = t.replace(/Capture$/, ""))),
                  (s = t.toLowerCase()),
                  (t = (s in e ? s : t).slice(2)),
                  n
                      ? (r || e.addEventListener(t, x, a),
                        ((e.l || (e.l = {}))[t] = n))
                      : e.removeEventListener(t, x, a))
                : "list" !== t &&
                  "tagName" !== t &&
                  "form" !== t &&
                  "type" !== t &&
                  "size" !== t &&
                  !o &&
                  t in e
                ? (e[t] = null == n ? "" : n)
                : "function" != typeof n &&
                  "dangerouslySetInnerHTML" !== t &&
                  (t !== (t = t.replace(/^xlink:?/, ""))
                      ? null == n || !1 === n
                          ? e.removeAttributeNS(
                                "http://www.w3.org/1999/xlink",
                                t.toLowerCase()
                            )
                          : e.setAttributeNS(
                                "http://www.w3.org/1999/xlink",
                                t.toLowerCase(),
                                n
                            )
                      : null == n || (!1 === n && !/^ar/.test(t))
                      ? e.removeAttribute(t)
                      : e.setAttribute(t, n));
    }
    function x(e) {
        this.l[e.type](i.event ? i.event(e) : e);
    }
    function _(e, t, n, r, o, a, s, l, u) {
        var c,
            d,
            p,
            f,
            h,
            g,
            m,
            y,
            D,
            b,
            C = t.type;
        if (void 0 !== t.constructor) return null;
        (c = i.__b) && c(t);
        try {
            e: if ("function" == typeof C) {
                if (
                    ((y = t.props),
                    (D = (c = C.contextType) && r[c.__c]),
                    (b = c ? (D ? D.props.value : c.__) : r),
                    n.__c
                        ? (m = (d = t.__c = n.__c).__ = d.__E)
                        : ("prototype" in C && C.prototype.render
                              ? (t.__c = d = new C(y, b))
                              : ((t.__c = d = new S(y, b)),
                                (d.constructor = C),
                                (d.render = O)),
                          D && D.sub(d),
                          (d.props = y),
                          d.state || (d.state = {}),
                          (d.context = b),
                          (d.__n = r),
                          (p = d.__d = !0),
                          (d.__h = [])),
                    null == d.__s && (d.__s = d.state),
                    null != C.getDerivedStateFromProps &&
                        (d.__s == d.state && (d.__s = v({}, d.__s)),
                        v(d.__s, C.getDerivedStateFromProps(y, d.__s))),
                    (f = d.props),
                    (h = d.state),
                    p)
                )
                    null == C.getDerivedStateFromProps &&
                        null != d.componentWillMount &&
                        d.componentWillMount(),
                        null != d.componentDidMount &&
                            d.__h.push(d.componentDidMount);
                else {
                    if (
                        (null == C.getDerivedStateFromProps &&
                            y !== f &&
                            null != d.componentWillReceiveProps &&
                            d.componentWillReceiveProps(y, b),
                        (!d.__e &&
                            null != d.shouldComponentUpdate &&
                            !1 === d.shouldComponentUpdate(y, d.__s, b)) ||
                            (t.__v === n.__v && !d.__))
                    ) {
                        for (
                            d.props = y,
                                d.state = d.__s,
                                t.__v !== n.__v && (d.__d = !1),
                                d.__v = t,
                                t.__e = n.__e,
                                t.__k = n.__k,
                                d.__h.length && s.push(d),
                                c = 0;
                            c < t.__k.length;
                            c++
                        )
                            t.__k[c] && (t.__k[c].__ = t);
                        break e;
                    }
                    null != d.componentWillUpdate &&
                        d.componentWillUpdate(y, d.__s, b),
                        null != d.componentDidUpdate &&
                            d.__h.push(function () {
                                d.componentDidUpdate(f, h, g);
                            });
                }
                (d.context = b),
                    (d.props = y),
                    (d.state = d.__s),
                    (c = i.__r) && c(t),
                    (d.__d = !1),
                    (d.__v = t),
                    (d.__P = e),
                    (c = d.render(d.props, d.state, d.context)),
                    (t.__k =
                        null != c && c.type == E && null == c.key
                            ? c.props.children
                            : Array.isArray(c)
                            ? c
                            : [c]),
                    null != d.getChildContext &&
                        (r = v(v({}, r), d.getChildContext())),
                    p ||
                        null == d.getSnapshotBeforeUpdate ||
                        (g = d.getSnapshotBeforeUpdate(f, h)),
                    R(e, t, n, r, o, a, s, l, u),
                    (d.base = t.__e),
                    d.__h.length && s.push(d),
                    m && (d.__E = d.__ = null),
                    (d.__e = !1);
            } else
                null == a && t.__v === n.__v
                    ? ((t.__k = n.__k), (t.__e = n.__e))
                    : (t.__e = P(n.__e, t, n, r, o, a, s, u));
            (c = i.diffed) && c(t);
        } catch (e) {
            (t.__v = null), i.__e(e, t, n);
        }
        return t.__e;
    }
    function I(e, t) {
        i.__c && i.__c(t, e),
            e.some(function (t) {
                try {
                    (e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    i.__e(e, t.__v);
                }
            });
    }
    function P(e, t, n, r, o, i, a, s) {
        var l,
            u,
            c,
            d,
            h,
            v = n.props,
            g = t.props;
        if (((o = "svg" === t.type || o), null != i))
            for (l = 0; l < i.length; l++)
                if (
                    null != (u = i[l]) &&
                    ((null === t.type
                        ? 3 === u.nodeType
                        : u.localName === t.type) ||
                        e == u)
                ) {
                    (e = u), (i[l] = null);
                    break;
                }
        if (null == e) {
            if (null === t.type) return document.createTextNode(g);
            (e = o
                ? document.createElementNS("http://www.w3.org/2000/svg", t.type)
                : document.createElement(t.type, g.is && { is: g.is })),
                (i = null),
                (s = !1);
        }
        if (null === t.type) v !== g && e.data != g && (e.data = g);
        else {
            if (
                (null != i && (i = f.slice.call(e.childNodes)),
                (c = (v = n.props || p).dangerouslySetInnerHTML),
                (d = g.dangerouslySetInnerHTML),
                !s)
            ) {
                if (v === p)
                    for (v = {}, h = 0; h < e.attributes.length; h++)
                        v[e.attributes[h].name] = e.attributes[h].value;
                (d || c) &&
                    ((d && c && d.__html == c.__html) ||
                        (e.innerHTML = (d && d.__html) || ""));
            }
            (function (e, t, n, r, o) {
                var i;
                for (i in n)
                    "children" === i ||
                        "key" === i ||
                        i in t ||
                        M(e, i, null, n[i], r);
                for (i in t)
                    (o && "function" != typeof t[i]) ||
                        "children" === i ||
                        "key" === i ||
                        "value" === i ||
                        "checked" === i ||
                        n[i] === t[i] ||
                        M(e, i, t[i], n[i], r);
            })(e, g, v, o, s),
                d
                    ? (t.__k = [])
                    : ((t.__k = t.props.children),
                      R(
                          e,
                          t,
                          n,
                          r,
                          "foreignObject" !== t.type && o,
                          i,
                          a,
                          p,
                          s
                      )),
                s ||
                    ("value" in g &&
                        void 0 !== (l = g.value) &&
                        l !== e.value &&
                        M(e, "value", l, v.value, !1),
                    "checked" in g &&
                        void 0 !== (l = g.checked) &&
                        l !== e.checked &&
                        M(e, "checked", l, v.checked, !1));
        }
        return e;
    }
    function N(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            i.__e(e, n);
        }
    }
    function H(e, t, n) {
        var r, o, a;
        if (
            (i.unmount && i.unmount(e),
            (r = e.ref) &&
                ((r.current && r.current !== e.__e) || N(r, null, t)),
            n || "function" == typeof e.type || (n = null != (o = e.__e)),
            (e.__e = e.__d = void 0),
            null != (r = e.__c))
        ) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount();
                } catch (e) {
                    i.__e(e, t);
                }
            r.base = r.__P = null;
        }
        if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && H(r[a], t, n);
        null != o && g(o);
    }
    function O(e, t, n) {
        return this.constructor(e, n);
    }
    function A(e, t, n) {
        var r, o, a;
        i.__ && i.__(e, t),
            (o = (r = n === c) ? null : (n && n.__k) || t.__k),
            (e = m(E, null, [e])),
            (a = []),
            _(
                t,
                ((r ? t : n || t).__k = e),
                o || p,
                p,
                void 0 !== t.ownerSVGElement,
                n && !r ? [n] : o ? null : f.slice.call(t.childNodes),
                a,
                n || p,
                r
            ),
            I(a, e);
    }
    (i = {
        __e: function (e, t) {
            for (var n, r; (t = t.__); )
                if ((n = t.__c) && !n.__)
                    try {
                        if (
                            (n.constructor &&
                                null !=
                                    n.constructor.getDerivedStateFromError &&
                                ((r = !0),
                                n.setState(
                                    n.constructor.getDerivedStateFromError(e)
                                )),
                            null != n.componentDidCatch &&
                                ((r = !0), n.componentDidCatch(e)),
                            r)
                        )
                            return C((n.__E = n));
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
    }),
        (S.prototype.setState = function (e, t) {
            var n;
            (n =
                this.__s !== this.state
                    ? this.__s
                    : (this.__s = v({}, this.state))),
                "function" == typeof e && (e = e(n, this.props)),
                e && v(n, e),
                null != e && this.__v && (t && this.__h.push(t), C(this));
        }),
        (S.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), C(this));
        }),
        (S.prototype.render = E),
        (a = []),
        (s = 0),
        (l =
            "function" == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
        (c = p),
        (d = 0),
        (("undefined" != typeof globalThis
            ? globalThis
            : window
        ).FullCalendarVDom = {
            Component: S,
            createElement: m,
            render: A,
            createRef: function () {
                return {};
            },
            Fragment: E,
            createContext: function (e) {
                var t = (function (e) {
                        var t = {},
                            n = {
                                __c: "__cC" + d++,
                                __: e,
                                Consumer: function (e, t) {
                                    return e.children(t);
                                },
                                Provider: function (e) {
                                    var r,
                                        o = this;
                                    return (
                                        this.getChildContext ||
                                            ((r = []),
                                            (this.getChildContext =
                                                function () {
                                                    return (t[n.__c] = o), t;
                                                }),
                                            (this.shouldComponentUpdate =
                                                function (e) {
                                                    o.props.value !== e.value &&
                                                        r.some(function (t) {
                                                            (t.context =
                                                                e.value),
                                                                C(t);
                                                        });
                                                }),
                                            (this.sub = function (e) {
                                                r.push(e);
                                                var t = e.componentWillUnmount;
                                                e.componentWillUnmount =
                                                    function () {
                                                        r.splice(
                                                            r.indexOf(e),
                                                            1
                                                        ),
                                                            t && t.call(e);
                                                    };
                                            })),
                                        e.children
                                    );
                                },
                            };
                        return (
                            (n.Consumer.contextType = n), (n.Provider.__ = n), n
                        );
                    })(e),
                    n = t.Provider;
                return (
                    (t.Provider = function () {
                        var e = this,
                            t = !this.getChildContext,
                            r = n.apply(this, arguments);
                        if (t) {
                            var o = [];
                            (this.shouldComponentUpdate = function (t) {
                                e.props.value !== t.value &&
                                    o.some(function (e) {
                                        (e.context = t.value), e.forceUpdate();
                                    });
                            }),
                                (this.sub = function (e) {
                                    o.push(e);
                                    var t = e.componentWillUnmount;
                                    e.componentWillUnmount = function () {
                                        o.splice(o.indexOf(e), 1),
                                            t && t.call(e);
                                    };
                                });
                        }
                        return r;
                    }),
                    t
                );
            },
            flushToDom: function () {
                var e = i.debounceRendering,
                    t = [];
                (i.debounceRendering = function (e) {
                    t.push(e);
                }),
                    A(m(U, {}), document.createElement("div"));
                for (; t.length; ) t.shift()();
                i.debounceRendering = e;
            },
        });
    var U = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return m("div", {});
            }),
            (t.prototype.componentDidMount = function () {
                this.setState({});
            }),
            t
        );
    })(S);
    var L = (function () {
        function e(e, t) {
            (this.context = e), (this.internalEventSource = t);
        }
        return (
            (e.prototype.remove = function () {
                this.context.dispatch({
                    type: "REMOVE_EVENT_SOURCE",
                    sourceId: this.internalEventSource.sourceId,
                });
            }),
            (e.prototype.refetch = function () {
                this.context.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    sourceIds: [this.internalEventSource.sourceId],
                });
            }),
            Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.internalEventSource.publicId;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this.internalEventSource.meta.url;
                },
                enumerable: !1,
                configurable: !0,
            }),
            e
        );
    })();
    function W(e) {
        e.parentNode && e.parentNode.removeChild(e);
    }
    function V(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (z(e, t)) return e;
            e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
    }
    function z(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(
            e,
            t
        );
    }
    function F(e, t) {
        for (
            var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
            o < n.length;
            o++
        )
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a++)
                r.push(i[a]);
        return r;
    }
    var B = /(top|left|right|bottom|width|height)$/i;
    function j(e, t) {
        for (var n in t) G(e, n, t[n]);
    }
    function G(e, t, n) {
        null == n
            ? (e.style[t] = "")
            : "number" == typeof n && B.test(t)
            ? (e.style[t] = n + "px")
            : (e.style[t] = n);
    }
    function q(e) {
        e.preventDefault();
    }
    function Y(e, t) {
        return function (n) {
            var r = V(n.target, e);
            r && t.call(r, n, r);
        };
    }
    function Z(e, t, n, r) {
        var o = Y(n, r);
        return (
            e.addEventListener(t, o),
            function () {
                e.removeEventListener(t, o);
            }
        );
    }
    var X = [
        "webkitTransitionEnd",
        "otransitionend",
        "oTransitionEnd",
        "msTransitionEnd",
        "transitionend",
    ];
    function K(e, t) {
        var n = function (r) {
            t(r),
                X.forEach(function (t) {
                    e.removeEventListener(t, n);
                });
        };
        X.forEach(function (t) {
            e.addEventListener(t, n);
        });
    }
    var J = 0;
    function $() {
        return String(J++);
    }
    function Q() {
        document.body.classList.add("fc-not-allowed");
    }
    function ee() {
        document.body.classList.remove("fc-not-allowed");
    }
    function te(e) {
        e.classList.add("fc-unselectable"),
            e.addEventListener("selectstart", q);
    }
    function ne(e) {
        e.classList.remove("fc-unselectable"),
            e.removeEventListener("selectstart", q);
    }
    function re(e) {
        e.addEventListener("contextmenu", q);
    }
    function oe(e) {
        e.removeEventListener("contextmenu", q);
    }
    function ie(e) {
        var t,
            n,
            r = [],
            o = [];
        for (
            "string" == typeof e
                ? (o = e.split(/\s*,\s*/))
                : "function" == typeof e
                ? (o = [e])
                : Array.isArray(e) && (o = e),
                t = 0;
            t < o.length;
            t++
        )
            "string" == typeof (n = o[t])
                ? r.push(
                      "-" === n.charAt(0)
                          ? { field: n.substring(1), order: -1 }
                          : { field: n, order: 1 }
                  )
                : "function" == typeof n && r.push({ func: n });
        return r;
    }
    function ae(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r++) if ((o = se(e, t, n[r]))) return o;
        return 0;
    }
    function se(e, t, n) {
        return n.func
            ? n.func(e, t)
            : le(e[n.field], t[n.field]) * (n.order || 1);
    }
    function le(e, t) {
        return e || t
            ? null == t
                ? -1
                : null == e
                ? 1
                : "string" == typeof e || "string" == typeof t
                ? String(e).localeCompare(String(t))
                : e - t
            : 0;
    }
    function ue(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n;
    }
    function ce(e, t) {
        return e - t;
    }
    function de(e) {
        return e % 1 == 0;
    }
    function pe(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return (
            e.getBoundingClientRect().width -
            t.getBoundingClientRect().width +
            n.getBoundingClientRect().width
        );
    }
    var fe = ["sun", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    function he(e, t) {
        var n = ke(e);
        return (n[2] += 7 * t), Me(n);
    }
    function ve(e, t) {
        var n = ke(e);
        return (n[2] += t), Me(n);
    }
    function ge(e, t) {
        var n = ke(e);
        return (n[6] += t), Me(n);
    }
    function me(e, t) {
        return ye(e, t) / 7;
    }
    function ye(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5;
    }
    function Ee(e, t) {
        var n = be(e),
            r = be(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(ye(n, r)),
            milliseconds:
                t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
        };
    }
    function Se(e, t) {
        var n = De(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null;
    }
    function De(e, t) {
        return _e(e) === _e(t) ? Math.round(ye(e, t)) : null;
    }
    function be(e) {
        return Me([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
    }
    function Ce(e, t, n, r) {
        var o = Me([t, 0, 1 + we(t, n, r)]),
            i = be(e),
            a = Math.round(ye(o, i));
        return Math.floor(a / 7) + 1;
    }
    function we(e, t, n) {
        var r = 7 + t - n;
        return -((7 + Me([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
    }
    function Re(e) {
        return [
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds(),
        ];
    }
    function Te(e) {
        return new Date(
            e[0],
            e[1] || 0,
            null == e[2] ? 1 : e[2],
            e[3] || 0,
            e[4] || 0,
            e[5] || 0
        );
    }
    function ke(e) {
        return [
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds(),
            e.getUTCMilliseconds(),
        ];
    }
    function Me(e) {
        return (
            1 === e.length && (e = e.concat([0])),
            new Date(Date.UTC.apply(Date, e))
        );
    }
    function xe(e) {
        return !isNaN(e.valueOf());
    }
    function _e(e) {
        return (
            1e3 * e.getUTCHours() * 60 * 60 +
            1e3 * e.getUTCMinutes() * 60 +
            1e3 * e.getUTCSeconds() +
            e.getUTCMilliseconds()
        );
    }
    function Ie(e, t, n, r) {
        return {
            instanceId: $(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r,
        };
    }
    var Pe = Object.prototype.hasOwnProperty;
    function Ne(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i--) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break;
                    }
                }
                o.length && (n[r] = Ne(o));
            }
        for (i = e.length - 1; i >= 0; i--) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l]);
        }
        return n;
    }
    function He(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n;
    }
    function Oe(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n;
    }
    function Ae(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0;
        }
        return t;
    }
    function Ue(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t;
    }
    function Le(e, t) {
        if (e === t) return !0;
        for (var n in e) if (Pe.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (Pe.call(t, n) && e[n] !== t[n]) return !1;
        return !0;
    }
    function We(e, t) {
        var n = [];
        for (var r in e) Pe.call(e, r) && (r in t || n.push(r));
        for (var r in t) Pe.call(t, r) && e[r] !== t[r] && n.push(r);
        return n;
    }
    function Ve(e, t, n) {
        if ((void 0 === n && (n = {}), e === t)) return !0;
        for (var r in t) if (!(r in e) || !ze(e[r], t[r], n[r])) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0;
    }
    function ze(e, t, n) {
        return e === t || !0 === n || (!!n && n(e, t));
    }
    function Fe(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a);
        }
        return o;
    }
    function Be(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in ((s = He(s, function (e) {
            return !a[e.defId].recurringDef;
        })),
        a)) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c ||
                    (c = u.allDay
                        ? i.defaultAllDayEventDuration
                        : i.defaultTimedEventDuration);
                for (
                    var d = 0, p = je(u, c, t, r, o.recurringTypes);
                    d < p.length;
                    d++
                ) {
                    var f = p[d],
                        h = Ie(l, { start: f, end: r.add(f, c) });
                    s[h.instanceId] = h;
                }
            }
        }
        return { defs: a, instances: s };
    }
    function je(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(
            e.recurringDef.typeData,
            { start: r.subtract(n.start, t), end: n.end },
            r
        );
        return e.allDay && (i = i.map(be)), i;
    }
    var Ge = ["years", "months", "days", "milliseconds"],
        qe = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function Ye(e, t) {
        var n;
        return "string" == typeof e
            ? (function (e) {
                  var t = qe.exec(e);
                  if (t) {
                      var n = t[1] ? -1 : 1;
                      return {
                          years: 0,
                          months: 0,
                          days: n * (t[2] ? parseInt(t[2], 10) : 0),
                          milliseconds:
                              n *
                              (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                                  (t[6] ? parseInt(t[6], 10) : 0)),
                      };
                  }
                  return null;
              })(e)
            : "object" == typeof e && e
            ? Ze(e)
            : "number" == typeof e
            ? Ze((((n = {})[t || "milliseconds"] = e), n))
            : null;
    }
    function Ze(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds:
                    60 * (e.hours || e.hour || 0) * 60 * 1e3 +
                    60 * (e.minutes || e.minute || 0) * 1e3 +
                    1e3 * (e.seconds || e.second || 0) +
                    (e.milliseconds || e.millisecond || e.ms || 0),
            },
            n = e.weeks || e.week;
        return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
    }
    function Xe(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds,
        };
    }
    function Ke(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t,
        };
    }
    function Je(e) {
        return $e(e) / 864e5;
    }
    function $e(e) {
        return (
            31536e6 * e.years +
            2592e6 * e.months +
            864e5 * e.days +
            e.milliseconds
        );
    }
    function Qe(e, t) {
        for (var n = null, r = 0; r < Ge.length; r++) {
            var o = Ge[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!de(i) || (null !== n && n !== i)) return null;
                n = i;
            } else if (e[o]) return null;
        }
        return n;
    }
    function et(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return { unit: "millisecond", value: t };
            if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
            if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
            if (t) return { unit: "hour", value: t / 36e5 };
        }
        return e.days
            ? e.specifiedWeeks && e.days % 7 == 0
                ? { unit: "week", value: e.days / 7 }
                : { unit: "day", value: e.days }
            : e.months
            ? { unit: "month", value: e.months }
            : e.years
            ? { unit: "year", value: e.years }
            : { unit: "millisecond", value: 0 };
    }
    function tt(e) {
        return e.toISOString().replace(/T.*$/, "");
    }
    function nt(e) {
        return (
            ue(e.getUTCHours(), 2) +
            ":" +
            ue(e.getUTCMinutes(), 2) +
            ":" +
            ue(e.getUTCSeconds(), 2)
        );
    }
    function rt(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t
            ? n + ue(o, 2) + ":" + ue(i, 2)
            : "GMT" + n + o + (i ? ":" + ue(i, 2) : "");
    }
    function ot(e, t, n) {
        if (e === t) return !0;
        var r,
            o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r++)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0;
    }
    function it(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
            if (r) {
                if (!ot(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    (t && t(s, o)) || (o = s);
                }
            } else o = e.apply(this, i);
            return (r = i), o;
        };
    }
    function at(e, t, n) {
        var r, o;
        return function (i) {
            if (r) {
                if (!Le(r, i)) {
                    n && n(o);
                    var a = e.call(this, i);
                    (t && t(a, o)) || (o = a);
                }
            } else o = e.call(this, i);
            return (r = i), o;
        };
    }
    var st = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0,
        },
        lt = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1,
        },
        ut = /\s*([ap])\.?m\.?/i,
        ct = /,/g,
        dt = /\s+/g,
        pt = /\u200e/g,
        ft = /UTC|GMT/,
        ht = (function () {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var o in e)
                    o in st
                        ? ((n[o] = e[o]), (r = Math.max(st[o], r)))
                        : ((t[o] = e[o]), o in lt && (r = Math.max(lt[o], r)));
                (this.standardDateProps = t),
                    (this.extendedSettings = n),
                    (this.severity = r),
                    (this.buildFormattingFunc = it(vt));
            }
            return (
                (e.prototype.format = function (e, t) {
                    return this.buildFormattingFunc(
                        this.standardDateProps,
                        this.extendedSettings,
                        t
                    )(e);
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    var o = this.standardDateProps,
                        i = this.extendedSettings,
                        a = (function (e, t, n) {
                            if (n.getMarkerYear(e) !== n.getMarkerYear(t))
                                return 5;
                            if (n.getMarkerMonth(e) !== n.getMarkerMonth(t))
                                return 4;
                            if (n.getMarkerDay(e) !== n.getMarkerDay(t))
                                return 2;
                            if (_e(e) !== _e(t)) return 1;
                            return 0;
                        })(e.marker, t.marker, n.calendarSystem);
                    if (!a) return this.format(e, n);
                    var s = a;
                    !(s > 1) ||
                        ("numeric" !== o.year && "2-digit" !== o.year) ||
                        ("numeric" !== o.month && "2-digit" !== o.month) ||
                        ("numeric" !== o.day && "2-digit" !== o.day) ||
                        (s = 1);
                    var l = this.format(e, n),
                        u = this.format(t, n);
                    if (l === u) return l;
                    var c = vt(
                            (function (e, t) {
                                var n = {};
                                for (var r in e)
                                    (!(r in lt) || lt[r] <= t) && (n[r] = e[r]);
                                return n;
                            })(o, s),
                            i,
                            n
                        ),
                        d = c(e),
                        p = c(t),
                        f = (function (e, t, n, r) {
                            var o = 0;
                            for (; o < e.length; ) {
                                var i = e.indexOf(t, o);
                                if (-1 === i) break;
                                var a = e.substr(0, i);
                                o = i + t.length;
                                for (
                                    var s = e.substr(o), l = 0;
                                    l < n.length;

                                ) {
                                    var u = n.indexOf(r, l);
                                    if (-1 === u) break;
                                    var c = n.substr(0, u);
                                    l = u + r.length;
                                    var d = n.substr(l);
                                    if (a === c && s === d)
                                        return { before: a, after: s };
                                }
                            }
                            return null;
                        })(l, d, u, p),
                        h = i.separator || r || n.defaultSeparator || "";
                    return f ? f.before + d + h + p + f.after : l + h + u;
                }),
                (e.prototype.getLargestUnit = function () {
                    switch (this.severity) {
                        case 7:
                        case 6:
                        case 5:
                            return "year";
                        case 4:
                            return "month";
                        case 3:
                            return "week";
                        case 2:
                            return "day";
                        default:
                            return "time";
                    }
                }),
                e
            );
        })();
    function vt(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName
            ? function (e) {
                  return rt(e.timeZoneOffset);
              }
            : 0 === o && t.week
            ? function (e) {
                  return (function (e, t, n, r) {
                      var o = [];
                      "narrow" === r
                          ? o.push(t)
                          : "short" === r && o.push(t, " ");
                      o.push(n.simpleNumberFormat.format(e)),
                          "rtl" === n.options.direction && o.reverse();
                      return o.join("");
                  })(
                      n.computeWeekNumber(e.marker),
                      n.weekText,
                      n.locale,
                      t.week
                  );
              }
            : (function (e, t, n) {
                  (e = r({}, e)),
                      (t = r({}, t)),
                      (function (e, t) {
                          e.timeZoneName &&
                              (e.hour || (e.hour = "2-digit"),
                              e.minute || (e.minute = "2-digit"));
                          "long" === e.timeZoneName &&
                              (e.timeZoneName = "short");
                          t.omitZeroMinute &&
                              (e.second || e.millisecond) &&
                              delete t.omitZeroMinute;
                      })(e, t),
                      (e.timeZone = "Asia/Jakarta");
                  var o,
                      i = new Intl.DateTimeFormat(n.locale.codes, e);
                  if (t.omitZeroMinute) {
                      var a = r({}, e);
                      delete a.minute,
                          (o = new Intl.DateTimeFormat(n.locale.codes, a));
                  }
                  return function (r) {
                      var a = r.marker;
                      return (function (e, t, n, r, o) {
                          (e = e.replace(pt, "")),
                              "short" === n.timeZoneName &&
                                  (e = (function (e, t) {
                                      var n = !1;
                                      (e = e.replace(ft, function () {
                                          return (n = !0), t;
                                      })),
                                          n || (e += " " + t);
                                      return e;
                                  })(
                                      e,
                                      "Asia/Jakarta" === o.timeZone ||
                                          null == t.timeZoneOffset
                                          ? "Asia/Jakarta"
                                          : rt(t.timeZoneOffset)
                                  ));
                          r.omitCommas && (e = e.replace(ct, "").trim());
                          r.omitZeroMinute && (e = e.replace(":00", ""));
                          !1 === r.meridiem
                              ? (e = e.replace(ut, "").trim())
                              : "narrow" === r.meridiem
                              ? (e = e.replace(ut, function (e, t) {
                                    return t.toLocaleLowerCase();
                                }))
                              : "short" === r.meridiem
                              ? (e = e.replace(ut, function (e, t) {
                                    return t.toLocaleLowerCase() + "m";
                                }))
                              : "lowercase" === r.meridiem &&
                                (e = e.replace(ut, function (e) {
                                    return e.toLocaleLowerCase();
                                }));
                          return (e = (e = e.replace(dt, " ")).trim());
                      })(
                          (o && !a.getUTCMinutes() ? o : i).format(a),
                          r,
                          e,
                          t,
                          n
                      );
                  };
              })(e, t, n);
    }
    function gt(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6],
        };
    }
    function mt(e, t, n, r) {
        var o = gt(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? gt(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator,
        };
    }
    var yt = (function () {
            function e(e) {
                this.cmdStr = e;
            }
            return (
                (e.prototype.format = function (e, t, n) {
                    return t.cmdFormatter(this.cmdStr, mt(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return n.cmdFormatter(this.cmdStr, mt(e, t, n, r));
                }),
                e
            );
        })(),
        Et = (function () {
            function e(e) {
                this.func = e;
            }
            return (
                (e.prototype.format = function (e, t, n) {
                    return this.func(mt(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return this.func(mt(e, t, n, r));
                }),
                e
            );
        })();
    function St(e) {
        return "object" == typeof e && e
            ? new ht(e)
            : "string" == typeof e
            ? new yt(e)
            : "function" == typeof e
            ? new Et(e)
            : void 0;
    }
    var Dt = {
            navLinkDayClick: _t,
            navLinkWeekClick: _t,
            duration: Ye,
            bootstrapFontAwesome: _t,
            buttonIcons: _t,
            customButtons: _t,
            defaultAllDayEventDuration: Ye,
            defaultTimedEventDuration: Ye,
            nextDayThreshold: Ye,
            scrollTime: Ye,
            slotMinTime: Ye,
            slotMaxTime: Ye,
            dayPopoverFormat: St,
            slotDuration: Ye,
            snapDuration: Ye,
            headerToolbar: _t,
            footerToolbar: _t,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: St,
            dayHeaderClassNames: _t,
            dayHeaderContent: _t,
            dayHeaderDidMount: _t,
            dayHeaderWillUnmount: _t,
            dayCellClassNames: _t,
            dayCellContent: _t,
            dayCellDidMount: _t,
            dayCellWillUnmount: _t,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: _t,
            weekNumbers: Boolean,
            weekNumberClassNames: _t,
            weekNumberContent: _t,
            weekNumberDidMount: _t,
            weekNumberWillUnmount: _t,
            editable: Boolean,
            viewClassNames: _t,
            viewDidMount: _t,
            viewWillUnmount: _t,
            nowIndicator: Boolean,
            nowIndicatorClassNames: _t,
            nowIndicatorContent: _t,
            nowIndicatorDidMount: _t,
            nowIndicatorWillUnmount: _t,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: _t,
            locale: _t,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: _t,
            eventOrder: ie,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: _t,
            contentHeight: _t,
            direction: String,
            weekNumberFormat: St,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            progressiveEventRendering: Boolean,
            businessHours: _t,
            initialDate: _t,
            now: _t,
            eventDataTransform: _t,
            stickyHeaderDates: _t,
            stickyFooterScrollbar: _t,
            viewHeight: _t,
            defaultAllDay: Boolean,
            eventSourceFailure: _t,
            eventSourceSuccess: _t,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: _t,
            eventConstraint: _t,
            eventAllow: _t,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: _t,
            eventContent: _t,
            eventDidMount: _t,
            eventWillUnmount: _t,
            selectConstraint: _t,
            selectOverlap: _t,
            selectAllow: _t,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: _t,
            slotLaneClassNames: _t,
            slotLaneContent: _t,
            slotLaneDidMount: _t,
            slotLaneWillUnmount: _t,
            slotLabelClassNames: _t,
            slotLabelContent: _t,
            slotLabelDidMount: _t,
            slotLabelWillUnmount: _t,
            dayMaxEvents: _t,
            dayMaxEventRows: _t,
            dayMinWidth: Number,
            slotLabelInterval: Ye,
            allDayText: String,
            allDayClassNames: _t,
            allDayContent: _t,
            allDayDidMount: _t,
            allDayWillUnmount: _t,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: St,
            rerenderDelay: Number,
            moreLinkText: _t,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMinHeight: Number,
            slotEventOverlap: Boolean,
            plugins: _t,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: Ye,
            hiddenDays: _t,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: _t,
            visibleRange: _t,
            titleFormat: _t,
            noEventsText: String,
        },
        bt = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " – ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: { day: 1 },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next",
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric",
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
        },
        Ct = {
            datesSet: _t,
            eventsSet: _t,
            eventAdd: _t,
            eventChange: _t,
            eventRemove: _t,
            windowResize: _t,
            eventClick: _t,
            eventMouseEnter: _t,
            eventMouseLeave: _t,
            select: _t,
            unselect: _t,
            loading: _t,
            _unmount: _t,
            _beforeprint: _t,
            _afterprint: _t,
            _noEventDrop: _t,
            _noEventResize: _t,
            _resize: _t,
            _scrollRequest: _t,
        },
        wt = {
            buttonText: _t,
            views: _t,
            plugins: _t,
            initialEvents: _t,
            events: _t,
            eventSources: _t,
        },
        Rt = {
            headerToolbar: Tt,
            footerToolbar: Tt,
            buttonText: Tt,
            buttonIcons: Tt,
        };
    function Tt(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t
            ? Le(e, t)
            : e === t;
    }
    var kt = {
        type: String,
        component: _t,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: _t,
        usesMinMaxTime: Boolean,
        classNames: _t,
        content: _t,
        didMount: _t,
        willUnmount: _t,
    };
    function Mt(e) {
        return Ne(e, Rt);
    }
    function xt(e, t) {
        var n = {},
            r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return { refined: n, extra: r };
    }
    function _t(e) {
        return e;
    }
    function It(e, t, n, r) {
        for (
            var o = { defs: {}, instances: {} }, i = Zt(n), a = 0, s = e;
            a < s.length;
            a++
        ) {
            var l = qt(s[a], t, n, r, i);
            l && Pt(l, o);
        }
        return o;
    }
    function Pt(e, t) {
        return (
            void 0 === t && (t = { defs: {}, instances: {} }),
            (t.defs[e.def.defId] = e.def),
            e.instance && (t.instances[e.instance.instanceId] = e.instance),
            t
        );
    }
    function Nt(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                o = At(e, function (e) {
                    return (
                        (t = r),
                        (n = e),
                        Boolean(t.groupId && t.groupId === n.groupId)
                    );
                    var t, n;
                });
            return (o.defs[r.defId] = r), (o.instances[n.instanceId] = n), o;
        }
        return { defs: {}, instances: {} };
    }
    function Ht() {
        return { defs: {}, instances: {} };
    }
    function Ot(e, t) {
        return {
            defs: r(r({}, e.defs), t.defs),
            instances: r(r({}, e.instances), t.instances),
        };
    }
    function At(e, t) {
        var n = He(e.defs, t),
            r = He(e.instances, function (e) {
                return n[e.defId];
            });
        return { defs: n, instances: r };
    }
    function Ut(e) {
        return Array.isArray(e)
            ? e
            : "string" == typeof e
            ? e.split(/\s+/)
            : [];
    }
    var Lt = {
        display: String,
        editable: Boolean,
        startEditable: Boolean,
        durationEditable: Boolean,
        constraint: _t,
        overlap: _t,
        allow: _t,
        className: Ut,
        classNames: Ut,
        color: String,
        backgroundColor: String,
        borderColor: String,
        textColor: String,
    };
    function Wt(e, t) {
        var n = (function (e, t) {
            return Array.isArray(e)
                ? It(e, null, t, !0)
                : "object" == typeof e && e
                ? It([e], null, t, !0)
                : null != e
                ? String(e)
                : null;
        })(e.constraint, t);
        return {
            display: e.display || null,
            startEditable:
                null != e.startEditable ? e.startEditable : e.editable,
            durationEditable:
                null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || []),
        };
    }
    function Vt(e) {
        return e.reduce(zt, Ft);
    }
    function zt(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable:
                null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable:
                null != t.durationEditable
                    ? t.durationEditable
                    : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames),
        };
    }
    var Ft = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: [],
        },
        Bt = { id: String, groupId: String, title: String, url: String },
        jt = { start: _t, end: _t, date: _t, allDay: Boolean },
        Gt = r(r(r({}, Bt), jt), { extendedProps: _t });
    function qt(e, t, n, r, o) {
        void 0 === o && (o = Zt(n));
        var i = Yt(e, n, o),
            a = i.refined,
            s = i.extra,
            l = (function (e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n;
            })(t, n),
            u = (function (e, t, n, r) {
                for (var o = 0; o < r.length; o++) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return (
                            null == a &&
                                null == (a = t) &&
                                null == (a = i.allDayGuess) &&
                                (a = !1),
                            {
                                allDay: a,
                                duration: i.duration,
                                typeData: i.typeData,
                                typeId: o,
                            }
                        );
                    }
                }
                return null;
            })(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u)
            return (
                ((c = Xt(
                    a,
                    s,
                    t ? t.sourceId : "",
                    u.allDay,
                    Boolean(u.duration),
                    n
                )).recurringDef = {
                    typeId: u.typeId,
                    typeData: u.typeData,
                    duration: u.duration,
                }),
                { def: c, instance: null }
            );
        var c,
            d = (function (e, t, n, r) {
                var o,
                    i,
                    a = e.allDay,
                    s = null,
                    l = !1,
                    u = null,
                    c = null != e.start ? e.start : e.date;
                if ((o = n.dateEnv.createMarkerMeta(c))) s = o.marker;
                else if (!r) return null;
                null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
                null == a &&
                    (a =
                        null != t
                            ? t
                            : (!o || o.isTimeUnspecified) &&
                              (!i || i.isTimeUnspecified));
                a && s && (s = be(s));
                i &&
                    ((u = i.marker),
                    a && (u = be(u)),
                    s && u <= s && (u = null));
                u
                    ? (l = !0)
                    : r ||
                      ((l = n.options.forceEventDuration || !1),
                      (u = n.dateEnv.add(
                          s,
                          a
                              ? n.options.defaultAllDayEventDuration
                              : n.options.defaultTimedEventDuration
                      )));
                return {
                    allDay: a,
                    hasEnd: l,
                    range: { start: s, end: u },
                    forcedStartTzo: o ? o.forcedTzo : null,
                    forcedEndTzo: i ? i.forcedTzo : null,
                };
            })(a, l, n, r);
        return d
            ? {
                  def: (c = Xt(
                      a,
                      s,
                      t ? t.sourceId : "",
                      d.allDay,
                      d.hasEnd,
                      n
                  )),
                  instance: Ie(
                      c.defId,
                      d.range,
                      d.forcedStartTzo,
                      d.forcedEndTzo
                  ),
              }
            : null;
    }
    function Yt(e, t, n) {
        return void 0 === n && (n = Zt(t)), xt(e, n);
    }
    function Zt(e) {
        return r(r(r({}, Lt), Gt), e.pluginHooks.eventRefiners);
    }
    function Xt(e, t, n, o, i, a) {
        for (
            var s = {
                    title: e.title || "",
                    groupId: e.groupId || "",
                    publicId: e.id || "",
                    url: e.url || "",
                    recurringDef: null,
                    defId: $(),
                    sourceId: n,
                    allDay: o,
                    hasEnd: i,
                    ui: Wt(e, a),
                    extendedProps: r(r({}, e.extendedProps || {}), t),
                },
                l = 0,
                u = a.pluginHooks.eventDefMemberAdders;
            l < u.length;
            l++
        ) {
            var c = u[l];
            r(s, c(e));
        }
        return (
            Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
        );
    }
    function Kt(e) {
        var t = Math.floor(ye(e.start, e.end)) || 1,
            n = be(e.start);
        return { start: n, end: ve(n, t) };
    }
    function Jt(e, t) {
        void 0 === t && (t = Ye(0));
        var n = null,
            r = null;
        if (e.end) {
            r = be(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= $e(t) && (r = ve(r, 1));
        }
        return (
            e.start && ((n = be(e.start)), r && r <= n && (r = ve(n, 1))),
            { start: n, end: r }
        );
    }
    function $t(e) {
        var t = Jt(e);
        return ye(t.start, t.end) > 1;
    }
    function Qt(e, t, n, r) {
        return "year" === r
            ? Ye(n.diffWholeYears(e, t), "year")
            : "month" === r
            ? Ye(n.diffWholeMonths(e, t), "month")
            : Ee(e, t);
    }
    function en(e, t) {
        var n,
            r,
            o = [],
            i = t.start;
        for (e.sort(tn), n = 0; n < e.length; n++)
            (r = e[n]).start > i && o.push({ start: i, end: r.start }),
                r.end > i && (i = r.end);
        return i < t.end && o.push({ start: i, end: t.end }), o;
    }
    function tn(e, t) {
        return e.start.valueOf() - t.start.valueOf();
    }
    function nn(e, t) {
        var n = e.start,
            r = e.end,
            o = null;
        return (
            null !== t.start &&
                (n =
                    null === n
                        ? t.start
                        : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
            null != t.end &&
                (r =
                    null === r
                        ? t.end
                        : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
            (null === n || null === r || n < r) && (o = { start: n, end: r }),
            o
        );
    }
    function rn(e, t) {
        return (
            (null === e.start ? null : e.start.valueOf()) ===
                (null === t.start ? null : t.start.valueOf()) &&
            (null === e.end ? null : e.end.valueOf()) ===
                (null === t.end ? null : t.end.valueOf())
        );
    }
    function on(e, t) {
        return (
            (null === e.end || null === t.start || e.end > t.start) &&
            (null === e.start || null === t.end || e.start < t.end)
        );
    }
    function an(e, t) {
        return (
            (null === e.start || (null !== t.start && t.start >= e.start)) &&
            (null === e.end || (null !== t.end && t.end <= e.end))
        );
    }
    function sn(e, t) {
        return (
            (null === e.start || t >= e.start) && (null === e.end || t < e.end)
        );
    }
    function ln(e, t, n, r) {
        var o = {},
            i = {},
            a = {},
            s = [],
            l = [],
            u = pn(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(S = e.defs[c]).defId]).display &&
                (S.groupId
                    ? ((o[S.groupId] = []), a[S.groupId] || (a[S.groupId] = S))
                    : (i[c] = []));
        }
        for (var d in e.instances) {
            var p = e.instances[d],
                f = u[(S = e.defs[p.defId]).defId],
                h = p.range,
                v = !S.allDay && r ? Jt(h, r) : h,
                g = nn(v, n);
            g &&
                ("inverse-background" === f.display
                    ? S.groupId
                        ? o[S.groupId].push(g)
                        : i[p.defId].push(g)
                    : "none" !== f.display &&
                      ("background" === f.display ? s : l).push({
                          def: S,
                          ui: f,
                          instance: p,
                          range: g,
                          isStart:
                              v.start &&
                              v.start.valueOf() === g.start.valueOf(),
                          isEnd: v.end && v.end.valueOf() === g.end.valueOf(),
                      }));
        }
        for (var m in o)
            for (var y = 0, E = en(o[m], n); y < E.length; y++) {
                var S,
                    D = E[y];
                f = u[(S = a[m]).defId];
                s.push({
                    def: S,
                    ui: f,
                    instance: null,
                    range: D,
                    isStart: !1,
                    isEnd: !1,
                });
            }
        for (var c in i)
            for (var b = 0, C = en(i[c], n); b < C.length; b++) {
                D = C[b];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: D,
                    isStart: !1,
                    isEnd: !1,
                });
            }
        return { bg: s, fg: l };
    }
    function un(e) {
        return (
            "background" === e.ui.display ||
            "inverse-background" === e.ui.display
        );
    }
    function cn(e, t) {
        e.fcSeg = t;
    }
    function dn(e) {
        return e.fcSeg || e.parentNode.fcSeg || null;
    }
    function pn(e, t) {
        return Oe(e, function (e) {
            return fn(e, t);
        });
    }
    function fn(e, t) {
        var n = [];
        return (
            t[""] && n.push(t[""]),
            t[e.defId] && n.push(t[e.defId]),
            n.push(e.ui),
            Vt(n)
        );
    }
    function hn(e, t) {
        var n = e.map(vn);
        return (
            n.sort(function (e, n) {
                return ae(e, n, t);
            }),
            n.map(function (e) {
                return e._seg;
            })
        );
    }
    function vn(e) {
        var t = e.eventRange,
            n = t.def,
            o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0,
            a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e,
        });
    }
    function gn(e, t) {
        for (
            var n = t.pluginHooks.isDraggableTransformers,
                r = e.eventRange,
                o = r.def,
                i = r.ui,
                a = i.startEditable,
                s = 0,
                l = n;
            s < l.length;
            s++
        ) {
            a = (0, l[s])(a, o, i, t);
        }
        return a;
    }
    function mn(e, t) {
        return (
            e.isStart &&
            e.eventRange.ui.durationEditable &&
            t.options.eventResizableFromStart
        );
    }
    function yn(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable;
    }
    function En(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        if (
            (null == u && (u = !1 !== r),
            null == c && (c = !1 !== o),
            u && !d.allDay && (e.isStart || e.isEnd))
        ) {
            var f =
                    i ||
                    (e.isStart
                        ? p.range.start
                        : e.start || e.eventRange.range.start),
                h =
                    a ||
                    (e.isEnd ? p.range.end : e.end || e.eventRange.range.end);
            return c && d.hasEnd
                ? s.formatRange(f, h, t, {
                      forcedStartTzo: i ? null : p.forcedStartTzo,
                      forcedEndTzo: a ? null : p.forcedEndTzo,
                  })
                : s.format(f, t, { forcedTzo: i ? null : p.forcedStartTzo });
        }
        return "";
    }
    function Sn(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && sn(t, r.start),
        };
    }
    function Dn(e) {
        var t = ["fc-event"];
        return (
            e.isMirror && t.push("fc-event-mirror"),
            e.isDraggable && t.push("fc-event-draggable"),
            (e.isStartResizable || e.isEndResizable) &&
                t.push("fc-event-resizable"),
            e.isDragging && t.push("fc-event-dragging"),
            e.isResizing && t.push("fc-event-resizing"),
            e.isSelected && t.push("fc-event-selected"),
            e.isStart && t.push("fc-event-start"),
            e.isEnd && t.push("fc-event-end"),
            e.isPast && t.push("fc-event-past"),
            e.isToday && t.push("fc-event-today"),
            e.isFuture && t.push("fc-event-future"),
            t
        );
    }
    function bn(e) {
        return e.instance
            ? e.instance.instanceId
            : e.def.defId + ":" + e.range.start.toISOString();
    }
    var Cn = { start: _t, end: _t, allDay: Boolean };
    function wn(e, t, n) {
        var o = (function (e, t) {
                var n = xt(e, Cn),
                    o = n.refined,
                    i = n.extra,
                    a = o.start ? t.createMarkerMeta(o.start) : null,
                    s = o.end ? t.createMarkerMeta(o.end) : null,
                    l = o.allDay;
                null == l &&
                    (l =
                        a &&
                        a.isTimeUnspecified &&
                        (!s || s.isTimeUnspecified));
                return r(
                    {
                        range: {
                            start: a ? a.marker : null,
                            end: s ? s.marker : null,
                        },
                        allDay: l,
                    },
                    i
                );
            })(e, t),
            i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n);
        }
        return o;
    }
    function Rn(e, t) {
        return (
            rn(e.range, t.range) &&
            e.allDay === t.allDay &&
            (function (e, t) {
                for (var n in t)
                    if ("range" !== n && "allDay" !== n && e[n] !== t[n])
                        return !1;
                for (var n in e) if (!(n in t)) return !1;
                return !0;
            })(e, t)
        );
    }
    function Tn(e, t, n) {
        return r(r({}, kn(e, t, n)), { timeZone: t.timeZone });
    }
    function kn(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, { omitTime: n }),
            endStr: t.formatIso(e.end, { omitTime: n }),
        };
    }
    function Mn(e, t, n) {
        var r = Yt({ editable: !1 }, n),
            o = Xt(r.refined, r.extra, "", e.allDay, !0, n);
        return {
            def: o,
            ui: fn(o, t),
            instance: Ie(o.defId, e.range),
            range: e.range,
            isStart: !0,
            isEnd: !0,
        };
    }
    function xn(e, t, n) {
        n.emitter.trigger(
            "select",
            r(r({}, _n(e, n)), {
                jsEvent: t ? t.origEvent : null,
                view: n.viewApi || n.calendarApi.view,
            })
        );
    }
    function _n(e, t) {
        for (
            var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t));
        }
        return (
            r(
                i,
                ((n = e),
                (o = t.dateEnv),
                r(r({}, kn(n.range, o, n.allDay)), { allDay: n.allDay }))
            ),
            i
        );
    }
    function In(e, t, n) {
        var r = n.dateEnv,
            o = n.options,
            i = t;
        return (
            e
                ? ((i = be(i)), (i = r.add(i, o.defaultAllDayEventDuration)))
                : (i = r.add(i, o.defaultTimedEventDuration)),
            i
        );
    }
    function Pn(e, t, n, r) {
        var o = pn(e.defs, t),
            i = { defs: {}, instances: {} };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = Nn(s, o[a], n, r);
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = Hn(u, s, o[u.defId], n, r);
        }
        return i;
    }
    function Nn(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd &&
            t.durationEditable &&
            (n.startDelta || n.endDelta) &&
            (i.hasEnd = !0);
        var a = r(r(r({}, e), i), { ui: r(r({}, e.ui), i.ui) });
        n.extendedProps &&
            (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (
            var s = 0, l = o.pluginHooks.eventDefMutationAppliers;
            s < l.length;
            s++
        ) {
            (0, l[s])(a, n, o);
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a;
    }
    function Hn(e, t, n, o, i) {
        var a = i.dateEnv,
            s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd,
            u = r({}, e);
        return (
            s && (u.range = Kt(u.range)),
            o.datesDelta &&
                n.startEditable &&
                (u.range = {
                    start: a.add(u.range.start, o.datesDelta),
                    end: a.add(u.range.end, o.datesDelta),
                }),
            o.startDelta &&
                n.durationEditable &&
                (u.range = {
                    start: a.add(u.range.start, o.startDelta),
                    end: u.range.end,
                }),
            o.endDelta &&
                n.durationEditable &&
                (u.range = {
                    start: u.range.start,
                    end: a.add(u.range.end, o.endDelta),
                }),
            l &&
                (u.range = {
                    start: u.range.start,
                    end: In(t.allDay, u.range.start, i),
                }),
            t.allDay &&
                (u.range = { start: be(u.range.start), end: be(u.range.end) }),
            u.range.end < u.range.start &&
                (u.range.end = In(t.allDay, u.range.start, i)),
            u
        );
    }
    var On = (function () {
            function e(e, t, n) {
                (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
            }
            return (
                Object.defineProperty(e.prototype, "calendar", {
                    get: function () {
                        return this.getCurrentData().calendarApi;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                    get: function () {
                        return this.getCurrentData().viewTitle;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeStart", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.activeRange.start
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeEnd", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.activeRange.end
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentStart", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.currentRange.start
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentEnd", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.currentRange.end
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.getOption = function (e) {
                    return this.getCurrentData().options[e];
                }),
                e
            );
        })(),
        An = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            events: _t,
            eventDataTransform: _t,
            success: _t,
            failure: _t,
        };
    function Un(e, t, n) {
        var r;
        if (
            (void 0 === n && (n = Ln(t)),
            "string" == typeof e
                ? (r = { url: e })
                : "function" == typeof e || Array.isArray(e)
                ? (r = { events: e })
                : "object" == typeof e && e && (r = e),
            r)
        ) {
            var o = xt(r, n),
                i = o.refined,
                a = o.extra,
                s = (function (e, t) {
                    for (
                        var n = t.pluginHooks.eventSourceDefs, r = n.length - 1;
                        r >= 0;
                        r--
                    ) {
                        var o = n[r].parseMeta(e);
                        if (o) return { sourceDefId: r, meta: o };
                    }
                    return null;
                })(i, t);
            if (s)
                return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: i.defaultAllDay,
                    eventDataTransform: i.eventDataTransform,
                    success: i.success,
                    failure: i.failure,
                    publicId: i.id || "",
                    sourceId: $(),
                    sourceDefId: s.sourceDefId,
                    meta: s.meta,
                    ui: Wt(i, t),
                    extendedProps: a,
                };
        }
        return null;
    }
    function Ln(e) {
        return r(r(r({}, Lt), An), e.pluginHooks.eventSourceRefiners);
    }
    function Wn(e, t) {
        return (
            "function" == typeof e && (e = e()),
            null == e ? t.createNowMarker() : t.createMarker(e)
        );
    }
    var Vn = (function () {
            function e() {}
            return (
                (e.prototype.getCurrentData = function () {
                    return this.currentDataManager.getCurrentData();
                }),
                (e.prototype.dispatch = function (e) {
                    return this.currentDataManager.dispatch(e);
                }),
                Object.defineProperty(e.prototype, "view", {
                    get: function () {
                        return this.getCurrentData().viewApi;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.batchRendering = function (e) {
                    e();
                }),
                (e.prototype.updateSize = function () {
                    this.trigger("_resize", !0);
                }),
                (e.prototype.setOption = function (e, t) {
                    this.dispatch({
                        type: "SET_OPTION",
                        optionName: e,
                        rawOptionValue: t,
                    });
                }),
                (e.prototype.getOption = function (e) {
                    return this.currentDataManager.currentCalendarOptionsInput[
                        e
                    ];
                }),
                (e.prototype.getAvailableLocaleCodes = function () {
                    return Object.keys(
                        this.getCurrentData().availableRawLocales
                    );
                }),
                (e.prototype.on = function (e, t) {
                    var n = this.currentDataManager;
                    n.currentCalendarOptionsRefiners[e]
                        ? n.emitter.on(e, t)
                        : console.warn("Unknown listener name '" + e + "'");
                }),
                (e.prototype.off = function (e, t) {
                    this.currentDataManager.emitter.off(e, t);
                }),
                (e.prototype.trigger = function (e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    (t = this.currentDataManager.emitter).trigger.apply(
                        t,
                        o([e], n)
                    );
                }),
                (e.prototype.changeView = function (e, t) {
                    var n = this;
                    this.batchRendering(function () {
                        if ((n.unselect(), t))
                            if (t.start && t.end)
                                n.dispatch({
                                    type: "CHANGE_VIEW_TYPE",
                                    viewType: e,
                                }),
                                    n.dispatch({
                                        type: "SET_OPTION",
                                        optionName: "visibleRange",
                                        rawOptionValue: t,
                                    });
                            else {
                                var r = n.getCurrentData().dateEnv;
                                n.dispatch({
                                    type: "CHANGE_VIEW_TYPE",
                                    viewType: e,
                                    dateMarker: r.createMarker(t),
                                });
                            }
                        else
                            n.dispatch({
                                type: "CHANGE_VIEW_TYPE",
                                viewType: e,
                            });
                    });
                }),
                (e.prototype.zoomTo = function (e, t) {
                    var n;
                    (t = t || "day"),
                        (n =
                            this.getCurrentData().viewSpecs[t] ||
                            this.getUnitViewSpec(t)),
                        this.unselect(),
                        n
                            ? this.dispatch({
                                  type: "CHANGE_VIEW_TYPE",
                                  viewType: n.type,
                                  dateMarker: e,
                              })
                            : this.dispatch({
                                  type: "CHANGE_DATE",
                                  dateMarker: e,
                              });
                }),
                (e.prototype.getUnitViewSpec = function (e) {
                    var t,
                        n,
                        r = this.getCurrentData(),
                        o = r.viewSpecs,
                        i = r.toolbarConfig,
                        a = [].concat(i.viewsWithButtons);
                    for (var s in o) a.push(s);
                    for (t = 0; t < a.length; t++)
                        if ((n = o[a[t]]) && n.singleUnit === e) return n;
                }),
                (e.prototype.prev = function () {
                    this.unselect(), this.dispatch({ type: "PREV" });
                }),
                (e.prototype.next = function () {
                    this.unselect(), this.dispatch({ type: "NEXT" });
                }),
                (e.prototype.prevYear = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: e.dateEnv.addYears(e.currentDate, -1),
                        });
                }),
                (e.prototype.nextYear = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: e.dateEnv.addYears(e.currentDate, 1),
                        });
                }),
                (e.prototype.today = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: Wn(e.calendarOptions.now, e.dateEnv),
                        });
                }),
                (e.prototype.gotoDate = function (e) {
                    var t = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: t.dateEnv.createMarker(e),
                        });
                }),
                (e.prototype.incrementDate = function (e) {
                    var t = this.getCurrentData(),
                        n = Ye(e);
                    n &&
                        (this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: t.dateEnv.add(t.currentDate, n),
                        }));
                }),
                (e.prototype.getDate = function () {
                    var e = this.getCurrentData();
                    return e.dateEnv.toDate(e.currentDate);
                }),
                (e.prototype.formatDate = function (e, t) {
                    var n = this.getCurrentData().dateEnv;
                    return n.format(n.createMarker(e), St(t));
                }),
                (e.prototype.formatRange = function (e, t, n) {
                    var r = this.getCurrentData().dateEnv;
                    return r.formatRange(
                        r.createMarker(e),
                        r.createMarker(t),
                        St(n),
                        n
                    );
                }),
                (e.prototype.formatIso = function (e, t) {
                    var n = this.getCurrentData().dateEnv;
                    return n.formatIso(n.createMarker(e), { omitTime: t });
                }),
                (e.prototype.select = function (e, t) {
                    var n;
                    n =
                        null == t
                            ? null != e.start
                                ? e
                                : { start: e, end: null }
                            : { start: e, end: t };
                    var r = this.getCurrentData(),
                        o = wn(n, r.dateEnv, Ye({ days: 1 }));
                    o &&
                        (this.dispatch({ type: "SELECT_DATES", selection: o }),
                        xn(o, null, r));
                }),
                (e.prototype.unselect = function (e) {
                    var t = this.getCurrentData();
                    t.dateSelection &&
                        (this.dispatch({ type: "UNSELECT_DATES" }),
                        (function (e, t) {
                            t.emitter.trigger("unselect", {
                                jsEvent: e ? e.origEvent : null,
                                view: t.viewApi || t.calendarApi.view,
                            });
                        })(e, t));
                }),
                (e.prototype.addEvent = function (e, t) {
                    if (e instanceof zn) {
                        var n = e._def,
                            r = e._instance;
                        return (
                            this.getCurrentData().eventStore.defs[n.defId] ||
                                (this.dispatch({
                                    type: "ADD_EVENTS",
                                    eventStore: Pt({ def: n, instance: r }),
                                }),
                                this.triggerEventAdd(e)),
                            e
                        );
                    }
                    var o,
                        i = this.getCurrentData();
                    if (t instanceof L) o = t.internalEventSource;
                    else if ("boolean" == typeof t)
                        t && (o = Ue(i.eventSources)[0]);
                    else if (null != t) {
                        var a = this.getEventSourceById(t);
                        if (!a)
                            return (
                                console.warn(
                                    'Could not find an event source with ID "' +
                                        t +
                                        '"'
                                ),
                                null
                            );
                        o = a.internalEventSource;
                    }
                    var s = qt(e, o, i, !1);
                    if (s) {
                        var l = new zn(
                            i,
                            s.def,
                            s.def.recurringDef ? null : s.instance
                        );
                        return (
                            this.dispatch({
                                type: "ADD_EVENTS",
                                eventStore: Pt(s),
                            }),
                            this.triggerEventAdd(l),
                            l
                        );
                    }
                    return null;
                }),
                (e.prototype.triggerEventAdd = function (e) {
                    var t = this;
                    this.getCurrentData().emitter.trigger("eventAdd", {
                        event: e,
                        relatedEvents: [],
                        revert: function () {
                            t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: Fn(e),
                            });
                        },
                    });
                }),
                (e.prototype.getEventById = function (e) {
                    var t = this.getCurrentData(),
                        n = t.eventStore,
                        r = n.defs,
                        o = n.instances;
                    for (var i in ((e = String(e)), r)) {
                        var a = r[i];
                        if (a.publicId === e) {
                            if (a.recurringDef) return new zn(t, a, null);
                            for (var s in o) {
                                var l = o[s];
                                if (l.defId === a.defId) return new zn(t, a, l);
                            }
                        }
                    }
                    return null;
                }),
                (e.prototype.getEvents = function () {
                    var e = this.getCurrentData();
                    return Bn(e.eventStore, e);
                }),
                (e.prototype.removeAllEvents = function () {
                    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
                }),
                (e.prototype.getEventSources = function () {
                    var e = this.getCurrentData(),
                        t = e.eventSources,
                        n = [];
                    for (var r in t) n.push(new L(e, t[r]));
                    return n;
                }),
                (e.prototype.getEventSourceById = function (e) {
                    var t = this.getCurrentData(),
                        n = t.eventSources;
                    for (var r in ((e = String(e)), n))
                        if (n[r].publicId === e) return new L(t, n[r]);
                    return null;
                }),
                (e.prototype.addEventSource = function (e) {
                    var t = this.getCurrentData();
                    if (e instanceof L)
                        return (
                            t.eventSources[e.internalEventSource.sourceId] ||
                                this.dispatch({
                                    type: "ADD_EVENT_SOURCES",
                                    sources: [e.internalEventSource],
                                }),
                            e
                        );
                    var n = Un(e, t);
                    return n
                        ? (this.dispatch({
                              type: "ADD_EVENT_SOURCES",
                              sources: [n],
                          }),
                          new L(t, n))
                        : null;
                }),
                (e.prototype.removeAllEventSources = function () {
                    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
                }),
                (e.prototype.refetchEvents = function () {
                    this.dispatch({ type: "FETCH_EVENT_SOURCES" });
                }),
                (e.prototype.scrollToTime = function (e) {
                    var t = Ye(e);
                    t && this.trigger("_scrollRequest", { time: t });
                }),
                e
            );
        })(),
        zn = (function () {
            function e(e, t, n) {
                (this._context = e),
                    (this._def = t),
                    (this._instance = n || null);
            }
            return (
                (e.prototype.setProp = function (e, t) {
                    var n, r;
                    if (e in jt)
                        console.warn(
                            "Could not set date-related prop 'name'. Use one of the date-related methods instead."
                        );
                    else if (e in Bt)
                        (t = Bt[e](t)),
                            this.mutate({
                                standardProps: ((n = {}), (n[e] = t), n),
                            });
                    else if (e in Lt) {
                        var o = Lt[e](t);
                        "color" === e
                            ? (o = { backgroundColor: t, borderColor: t })
                            : "editable" === e
                            ? (o = { startEditable: t, durationEditable: t })
                            : (((r = {})[e] = t), (o = r)),
                            this.mutate({ standardProps: { ui: o } });
                    } else
                        console.warn(
                            "Could not set prop '" +
                                e +
                                "'. Use setExtendedProp instead."
                        );
                }),
                (e.prototype.setExtendedProp = function (e, t) {
                    var n;
                    this.mutate({ extendedProps: ((n = {}), (n[e] = t), n) });
                }),
                (e.prototype.setStart = function (e, t) {
                    void 0 === t && (t = {});
                    var n = this._context.dateEnv,
                        r = n.createMarker(e);
                    if (r && this._instance) {
                        var o = Qt(
                            this._instance.range.start,
                            r,
                            n,
                            t.granularity
                        );
                        t.maintainDuration
                            ? this.mutate({ datesDelta: o })
                            : this.mutate({ startDelta: o });
                    }
                }),
                (e.prototype.setEnd = function (e, t) {
                    void 0 === t && (t = {});
                    var n,
                        r = this._context.dateEnv;
                    if (
                        (null == e || (n = r.createMarker(e))) &&
                        this._instance
                    )
                        if (n) {
                            var o = Qt(
                                this._instance.range.end,
                                n,
                                r,
                                t.granularity
                            );
                            this.mutate({ endDelta: o });
                        } else this.mutate({ standardProps: { hasEnd: !1 } });
                }),
                (e.prototype.setDates = function (e, t, n) {
                    void 0 === n && (n = {});
                    var r,
                        o,
                        i,
                        a = this._context.dateEnv,
                        s = { allDay: n.allDay },
                        l = a.createMarker(e);
                    if (
                        l &&
                        (null == t || (r = a.createMarker(t))) &&
                        this._instance
                    ) {
                        var u = this._instance.range;
                        !0 === n.allDay && (u = Kt(u));
                        var c = Qt(u.start, l, a, n.granularity);
                        if (r) {
                            var d = Qt(u.end, r, a, n.granularity);
                            (i = d),
                                (o = c).years === i.years &&
                                o.months === i.months &&
                                o.days === i.days &&
                                o.milliseconds === i.milliseconds
                                    ? this.mutate({
                                          datesDelta: c,
                                          standardProps: s,
                                      })
                                    : this.mutate({
                                          startDelta: c,
                                          endDelta: d,
                                          standardProps: s,
                                      });
                        } else
                            (s.hasEnd = !1),
                                this.mutate({
                                    datesDelta: c,
                                    standardProps: s,
                                });
                    }
                }),
                (e.prototype.moveStart = function (e) {
                    var t = Ye(e);
                    t && this.mutate({ startDelta: t });
                }),
                (e.prototype.moveEnd = function (e) {
                    var t = Ye(e);
                    t && this.mutate({ endDelta: t });
                }),
                (e.prototype.moveDates = function (e) {
                    var t = Ye(e);
                    t && this.mutate({ datesDelta: t });
                }),
                (e.prototype.setAllDay = function (e, t) {
                    void 0 === t && (t = {});
                    var n = { allDay: e },
                        r = t.maintainDuration;
                    null == r &&
                        (r = this._context.options.allDayMaintainDuration),
                        this._def.allDay !== e && (n.hasEnd = r),
                        this.mutate({ standardProps: n });
                }),
                (e.prototype.formatRange = function (e) {
                    var t = this._context.dateEnv,
                        n = this._instance,
                        r = St(e);
                    return this._def.hasEnd
                        ? t.formatRange(n.range.start, n.range.end, r, {
                              forcedStartTzo: n.forcedStartTzo,
                              forcedEndTzo: n.forcedEndTzo,
                          })
                        : t.format(n.range.start, r, {
                              forcedTzo: n.forcedStartTzo,
                          });
                }),
                (e.prototype.mutate = function (t) {
                    var n = this._instance;
                    if (n) {
                        var r = this._def,
                            o = this._context,
                            i = Nt(o.getCurrentData().eventStore, n.instanceId);
                        i = Pn(
                            i,
                            {
                                "": {
                                    display: "",
                                    startEditable: !0,
                                    durationEditable: !0,
                                    constraints: [],
                                    overlap: null,
                                    allows: [],
                                    backgroundColor: "",
                                    borderColor: "",
                                    textColor: "",
                                    classNames: [],
                                },
                            },
                            t,
                            o
                        );
                        var a = new e(o, r, n);
                        (this._def = i.defs[r.defId]),
                            (this._instance = i.instances[n.instanceId]),
                            o.dispatch({ type: "MERGE_EVENTS", eventStore: i }),
                            o.emitter.trigger("eventChange", {
                                oldEvent: a,
                                event: this,
                                relatedEvents: Bn(i, o, n),
                                revert: function () {
                                    o.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: i,
                                    });
                                },
                            });
                    }
                }),
                (e.prototype.remove = function () {
                    var e = this._context,
                        t = Fn(this);
                    e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
                        e.emitter.trigger("eventRemove", {
                            event: this,
                            relatedEvents: [],
                            revert: function () {
                                e.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: t,
                                });
                            },
                        });
                }),
                Object.defineProperty(e.prototype, "source", {
                    get: function () {
                        var e = this._def.sourceId;
                        return e
                            ? new L(
                                  this._context,
                                  this._context.getCurrentData().eventSources[e]
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "start", {
                    get: function () {
                        return this._instance
                            ? this._context.dateEnv.toDate(
                                  this._instance.range.start
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "end", {
                    get: function () {
                        return this._instance && this._def.hasEnd
                            ? this._context.dateEnv.toDate(
                                  this._instance.range.end
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startStr", {
                    get: function () {
                        var e = this._instance;
                        return e
                            ? this._context.dateEnv.formatIso(e.range.start, {
                                  omitTime: this._def.allDay,
                                  forcedTzo: e.forcedStartTzo,
                              })
                            : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "endStr", {
                    get: function () {
                        var e = this._instance;
                        return e && this._def.hasEnd
                            ? this._context.dateEnv.formatIso(e.range.end, {
                                  omitTime: this._def.allDay,
                                  forcedTzo: e.forcedEndTzo,
                              })
                            : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._def.publicId;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "groupId", {
                    get: function () {
                        return this._def.groupId;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allDay", {
                    get: function () {
                        return this._def.allDay;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                    get: function () {
                        return this._def.title;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "url", {
                    get: function () {
                        return this._def.url;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "display", {
                    get: function () {
                        return this._def.ui.display || "auto";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startEditable", {
                    get: function () {
                        return this._def.ui.startEditable;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "durationEditable", {
                    get: function () {
                        return this._def.ui.durationEditable;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "constraint", {
                    get: function () {
                        return this._def.ui.constraints[0] || null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "overlap", {
                    get: function () {
                        return this._def.ui.overlap;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allow", {
                    get: function () {
                        return this._def.ui.allows[0] || null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "backgroundColor", {
                    get: function () {
                        return this._def.ui.backgroundColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "borderColor", {
                    get: function () {
                        return this._def.ui.borderColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "textColor", {
                    get: function () {
                        return this._def.ui.textColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "classNames", {
                    get: function () {
                        return this._def.ui.classNames;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "extendedProps", {
                    get: function () {
                        return this._def.extendedProps;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.toPlainObject = function (e) {
                    void 0 === e && (e = {});
                    var t = this._def,
                        n = t.ui,
                        o = this.startStr,
                        i = this.endStr,
                        a = {};
                    return (
                        t.title && (a.title = t.title),
                        o && (a.start = o),
                        i && (a.end = i),
                        t.publicId && (a.id = t.publicId),
                        t.groupId && (a.groupId = t.groupId),
                        t.url && (a.url = t.url),
                        n.display &&
                            "auto" !== n.display &&
                            (a.display = n.display),
                        e.collapseColor &&
                        n.backgroundColor &&
                        n.backgroundColor === n.borderColor
                            ? (a.color = n.backgroundColor)
                            : (n.backgroundColor &&
                                  (a.backgroundColor = n.backgroundColor),
                              n.borderColor && (a.borderColor = n.borderColor)),
                        n.textColor && (a.textColor = n.textColor),
                        n.classNames.length && (a.classNames = n.classNames),
                        Object.keys(t.extendedProps).length &&
                            (e.collapseExtendedProps
                                ? r(a, t.extendedProps)
                                : (a.extendedProps = t.extendedProps)),
                        a
                    );
                }),
                (e.prototype.toJSON = function () {
                    return this.toPlainObject();
                }),
                e
            );
        })();
    function Fn(e) {
        var t,
            n,
            r = e._def,
            o = e._instance;
        return {
            defs: ((t = {}), (t[r.defId] = r), t),
            instances: o ? ((n = {}), (n[o.instanceId] = o), n) : {},
        };
    }
    function Bn(e, t, n) {
        var r = e.defs,
            o = e.instances,
            i = [],
            a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s],
                u = r[l.defId];
            l.instanceId !== a && i.push(new zn(t, u, l));
        }
        return i;
    }
    var jn = {};
    var Gn,
        qn = (function () {
            function e() {}
            return (
                (e.prototype.getMarkerYear = function (e) {
                    return e.getUTCFullYear();
                }),
                (e.prototype.getMarkerMonth = function (e) {
                    return e.getUTCMonth();
                }),
                (e.prototype.getMarkerDay = function (e) {
                    return e.getUTCDate();
                }),
                (e.prototype.arrayToMarker = function (e) {
                    return Me(e);
                }),
                (e.prototype.markerToArray = function (e) {
                    return ke(e);
                }),
                e
            );
        })();
    (Gn = qn), (jn["gregory"] = Gn);
    var Yn =
        /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function Zn(e) {
        var t = Yn.exec(e);
        if (t) {
            var n = new Date(
                Date.UTC(
                    Number(t[1]),
                    t[3] ? Number(t[3]) - 1 : 0,
                    Number(t[5] || 1),
                    Number(t[7] || 0),
                    Number(t[8] || 0),
                    Number(t[10] || 0),
                    t[12] ? 1e3 * Number("0." + t[12]) : 0
                )
            );
            if (xe(n)) {
                var r = null;
                return (
                    t[13] &&
                        (r =
                            ("-" === t[15] ? -1 : 1) *
                            (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                    { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
                );
            }
        }
        return null;
    }
    var Xn = (function () {
            function e(e) {
                var t = (this.timeZone = e.timeZone),
                    n = "local" !== t && "Asia/Jakarta" !== t;
                e.namedTimeZoneImpl &&
                    n &&
                    (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
                    (this.canComputeOffset = Boolean(
                        !n || this.namedTimeZoneImpl
                    )),
                    (this.calendarSystem = (function (e) {
                        return new jn[e]();
                    })(e.calendarSystem)),
                    (this.locale = e.locale),
                    (this.weekDow = e.locale.week.dow),
                    (this.weekDoy = e.locale.week.doy),
                    "ISO" === e.weekNumberCalculation &&
                        ((this.weekDow = 1), (this.weekDoy = 4)),
                    "number" == typeof e.firstDay &&
                        (this.weekDow = e.firstDay),
                    "function" == typeof e.weekNumberCalculation &&
                        (this.weekNumberFunc = e.weekNumberCalculation),
                    (this.weekText =
                        null != e.weekText
                            ? e.weekText
                            : e.locale.options.weekText),
                    (this.cmdFormatter = e.cmdFormatter),
                    (this.defaultSeparator = e.defaultSeparator);
            }
            return (
                (e.prototype.createMarker = function (e) {
                    var t = this.createMarkerMeta(e);
                    return null === t ? null : t.marker;
                }),
                (e.prototype.createNowMarker = function () {
                    return this.canComputeOffset
                        ? this.timestampToMarker(new Date().valueOf())
                        : Me(Re(new Date()));
                }),
                (e.prototype.createMarkerMeta = function (e) {
                    if ("string" == typeof e) return this.parse(e);
                    var t = null;
                    return (
                        "number" == typeof e
                            ? (t = this.timestampToMarker(e))
                            : e instanceof Date
                            ? ((e = e.valueOf()),
                              isNaN(e) || (t = this.timestampToMarker(e)))
                            : Array.isArray(e) && (t = Me(e)),
                        null !== t && xe(t)
                            ? {
                                  marker: t,
                                  isTimeUnspecified: !1,
                                  forcedTzo: null,
                              }
                            : null
                    );
                }),
                (e.prototype.parse = function (e) {
                    var t = Zn(e);
                    if (null === t) return null;
                    var n = t.marker,
                        r = null;
                    return (
                        null !== t.timeZoneOffset &&
                            (this.canComputeOffset
                                ? (n = this.timestampToMarker(
                                      n.valueOf() - 60 * t.timeZoneOffset * 1e3
                                  ))
                                : (r = t.timeZoneOffset)),
                        {
                            marker: n,
                            isTimeUnspecified: t.isTimeUnspecified,
                            forcedTzo: r,
                        }
                    );
                }),
                (e.prototype.getYear = function (e) {
                    return this.calendarSystem.getMarkerYear(e);
                }),
                (e.prototype.getMonth = function (e) {
                    return this.calendarSystem.getMarkerMonth(e);
                }),
                (e.prototype.add = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (
                        (n[0] += t.years),
                        (n[1] += t.months),
                        (n[2] += t.days),
                        (n[6] += t.milliseconds),
                        this.calendarSystem.arrayToMarker(n)
                    );
                }),
                (e.prototype.subtract = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (
                        (n[0] -= t.years),
                        (n[1] -= t.months),
                        (n[2] -= t.days),
                        (n[6] -= t.milliseconds),
                        this.calendarSystem.arrayToMarker(n)
                    );
                }),
                (e.prototype.addYears = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (n[0] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.addMonths = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (n[1] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.diffWholeYears = function (e, t) {
                    var n = this.calendarSystem;
                    return _e(e) === _e(t) &&
                        n.getMarkerDay(e) === n.getMarkerDay(t) &&
                        n.getMarkerMonth(e) === n.getMarkerMonth(t)
                        ? n.getMarkerYear(t) - n.getMarkerYear(e)
                        : null;
                }),
                (e.prototype.diffWholeMonths = function (e, t) {
                    var n = this.calendarSystem;
                    return _e(e) === _e(t) &&
                        n.getMarkerDay(e) === n.getMarkerDay(t)
                        ? n.getMarkerMonth(t) -
                              n.getMarkerMonth(e) +
                              12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
                        : null;
                }),
                (e.prototype.greatestWholeUnit = function (e, t) {
                    var n = this.diffWholeYears(e, t);
                    return null !== n
                        ? { unit: "year", value: n }
                        : null !== (n = this.diffWholeMonths(e, t))
                        ? { unit: "month", value: n }
                        : null !== (n = Se(e, t))
                        ? { unit: "week", value: n }
                        : null !== (n = De(e, t))
                        ? { unit: "day", value: n }
                        : de(
                              (n = (function (e, t) {
                                  return (t.valueOf() - e.valueOf()) / 36e5;
                              })(e, t))
                          )
                        ? { unit: "hour", value: n }
                        : de(
                              (n = (function (e, t) {
                                  return (t.valueOf() - e.valueOf()) / 6e4;
                              })(e, t))
                          )
                        ? { unit: "minute", value: n }
                        : de(
                              (n = (function (e, t) {
                                  return (t.valueOf() - e.valueOf()) / 1e3;
                              })(e, t))
                          )
                        ? { unit: "second", value: n }
                        : {
                              unit: "millisecond",
                              value: t.valueOf() - e.valueOf(),
                          };
                }),
                (e.prototype.countDurationsBetween = function (e, t, n) {
                    var r;
                    return n.years && null !== (r = this.diffWholeYears(e, t))
                        ? r / (Je(n) / 365)
                        : n.months && null !== (r = this.diffWholeMonths(e, t))
                        ? r /
                          (function (e) {
                              return Je(e) / 30;
                          })(n)
                        : n.days && null !== (r = De(e, t))
                        ? r / Je(n)
                        : (t.valueOf() - e.valueOf()) / $e(n);
                }),
                (e.prototype.startOf = function (e, t) {
                    return "year" === t
                        ? this.startOfYear(e)
                        : "month" === t
                        ? this.startOfMonth(e)
                        : "week" === t
                        ? this.startOfWeek(e)
                        : "day" === t
                        ? be(e)
                        : "hour" === t
                        ? (function (e) {
                              return Me([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                              ]);
                          })(e)
                        : "minute" === t
                        ? (function (e) {
                              return Me([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                                  e.getUTCMinutes(),
                              ]);
                          })(e)
                        : "second" === t
                        ? (function (e) {
                              return Me([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                                  e.getUTCMinutes(),
                                  e.getUTCSeconds(),
                              ]);
                          })(e)
                        : void 0;
                }),
                (e.prototype.startOfYear = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                    ]);
                }),
                (e.prototype.startOfMonth = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                        this.calendarSystem.getMarkerMonth(e),
                    ]);
                }),
                (e.prototype.startOfWeek = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                        this.calendarSystem.getMarkerMonth(e),
                        e.getUTCDate() -
                            ((e.getUTCDay() - this.weekDow + 7) % 7),
                    ]);
                }),
                (e.prototype.computeWeekNumber = function (e) {
                    return this.weekNumberFunc
                        ? this.weekNumberFunc(this.toDate(e))
                        : (function (e, t, n) {
                              var r = e.getUTCFullYear(),
                                  o = Ce(e, r, t, n);
                              if (o < 1) return Ce(e, r - 1, t, n);
                              var i = Ce(e, r + 1, t, n);
                              return i >= 1 ? Math.min(o, i) : o;
                          })(e, this.weekDow, this.weekDoy);
                }),
                (e.prototype.format = function (e, t, n) {
                    return (
                        void 0 === n && (n = {}),
                        t.format(
                            {
                                marker: e,
                                timeZoneOffset:
                                    null != n.forcedTzo
                                        ? n.forcedTzo
                                        : this.offsetForMarker(e),
                            },
                            this
                        )
                    );
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return (
                        void 0 === r && (r = {}),
                        r.isEndExclusive && (t = ge(t, -1)),
                        n.formatRange(
                            {
                                marker: e,
                                timeZoneOffset:
                                    null != r.forcedStartTzo
                                        ? r.forcedStartTzo
                                        : this.offsetForMarker(e),
                            },
                            {
                                marker: t,
                                timeZoneOffset:
                                    null != r.forcedEndTzo
                                        ? r.forcedEndTzo
                                        : this.offsetForMarker(t),
                            },
                            this,
                            r.defaultSeparator
                        )
                    );
                }),
                (e.prototype.formatIso = function (e, t) {
                    void 0 === t && (t = {});
                    var n = null;
                    return (
                        t.omitTimeZoneOffset ||
                            (n =
                                null != t.forcedTzo
                                    ? t.forcedTzo
                                    : this.offsetForMarker(e)),
                        (function (e, t, n) {
                            void 0 === n && (n = !1);
                            var r = e.toISOString();
                            return (
                                (r = r.replace(".000", "")),
                                n && (r = r.replace("T00:00:00Z", "")),
                                r.length > 10 &&
                                    (null == t
                                        ? (r = r.replace("Z", ""))
                                        : 0 !== t &&
                                          (r = r.replace("Z", rt(t, !0)))),
                                r
                            );
                        })(e, n, t.omitTime)
                    );
                }),
                (e.prototype.timestampToMarker = function (e) {
                    return "local" === this.timeZone
                        ? Me(Re(new Date(e)))
                        : "Asia/Jakarta" !== this.timeZone && this.namedTimeZoneImpl
                        ? Me(this.namedTimeZoneImpl.timestampToArray(e))
                        : new Date(e);
                }),
                (e.prototype.offsetForMarker = function (e) {
                    return "local" === this.timeZone
                        ? -Te(ke(e)).getTimezoneOffset()
                        : "Asia/Jakarta" === this.timeZone
                        ? 0
                        : this.namedTimeZoneImpl
                        ? this.namedTimeZoneImpl.offsetForArray(ke(e))
                        : null;
                }),
                (e.prototype.toDate = function (e, t) {
                    return "local" === this.timeZone
                        ? Te(ke(e))
                        : "Asia/Jakarta" === this.timeZone
                        ? new Date(e.valueOf())
                        : this.namedTimeZoneImpl
                        ? new Date(
                              e.valueOf() -
                                  1e3 *
                                      this.namedTimeZoneImpl.offsetForArray(
                                          ke(e)
                                      ) *
                                      60
                          )
                        : new Date(e.valueOf() - (t || 0));
                }),
                e
            );
        })(),
        Kn = [],
        Jn = {
            code: "id",
            week: { dow: 0, doy: 4 },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "Hari Ini",
                month: "Bulan",
                week: "Minggu",
                day: "Hari",
                list: "list",
            },
            weekText: "W",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display",
        };
    function $n(e) {
        for (
            var t = e.length > 0 ? e[0].code : "en",
                n = Kn.concat(e),
                r = { en: Jn },
                o = 0,
                i = n;
            o < i.length;
            o++
        ) {
            var a = i[o];
            r[a.code] = a;
        }
        return { map: r, defaultCode: t };
    }
    function Qn(e, t) {
        return "object" != typeof e || Array.isArray(e)
            ? (function (e, t) {
                  var n = [].concat(e || []),
                      r =
                          (function (e, t) {
                              for (var n = 0; n < e.length; n++)
                                  for (
                                      var r = e[n]
                                              .toLocaleLowerCase()
                                              .split("-"),
                                          o = r.length;
                                      o > 0;
                                      o--
                                  ) {
                                      var i = r.slice(0, o).join("-");
                                      if (t[i]) return t[i];
                                  }
                              return null;
                          })(n, t) || Jn;
                  return er(e, n, r);
              })(e, t)
            : er(e.code, [e.code], e);
    }
    function er(e, t, n) {
        var r = Ne([Jn, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return (
            delete r.week,
            {
                codeArg: e,
                codes: t,
                week: o,
                simpleNumberFormat: new Intl.NumberFormat(e),
                options: r,
            }
        );
    }
    function tr(e) {
        var t = Qn(e.locale || "Asia/Jakarta", $n([]).map);
        return new Xn(
            r(r({ timeZone: bt.timeZone, calendarSystem: "Asia/Jakarta" }, e), {
                locale: t,
            })
        );
    }
    var nr,
        rr = {
            startTime: "00:00",
            endTime: "24:00",
            daysOfWeek: [1, 2, 3, 4, 5, 6],
            display: "inverse-background",
            classNames: "fc-non-business",
            groupId: "_businessHours",
        };
    function or(e, t) {
        return It(
            (function (e) {
                var t;
                t =
                    !0 === e
                        ? [{}]
                        : Array.isArray(e)
                        ? e.filter(function (e) {
                              return e.daysOfWeek;
                          })
                        : "object" == typeof e && e
                        ? [e]
                        : [];
                return (t = t.map(function (e) {
                    return r(r({}, rr), e);
                }));
            })(e),
            null,
            t
        );
    }
    function ir(e, t) {
        return (
            e.left >= t.left &&
            e.left < t.right &&
            e.top >= t.top &&
            e.top < t.bottom
        );
    }
    function ar(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom),
        };
        return n.left < n.right && n.top < n.bottom && n;
    }
    function sr(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom),
        };
    }
    function lr(e) {
        return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
    }
    function ur(e, t) {
        return { left: e.left - t.left, top: e.top - t.top };
    }
    function cr() {
        return (
            null == nr &&
                (nr = (function () {
                    if ("undefined" == typeof document) return !0;
                    var e = document.createElement("div");
                    (e.style.position = "absolute"),
                        (e.style.top = "0px"),
                        (e.style.left = "0px"),
                        (e.innerHTML =
                            "<table><tr><td><div></div></td></tr></table>"),
                        (e.querySelector("table").style.height = "100px"),
                        (e.querySelector("div").style.height = "100%"),
                        document.body.appendChild(e);
                    var t = e.querySelector("div").offsetHeight > 0;
                    return document.body.removeChild(e), t;
                })()),
            nr
        );
    }
    var dr = { defs: {}, instances: {} },
        pr = (function () {
            function e() {
                (this.getKeysForEventDefs = it(this._getKeysForEventDefs)),
                    (this.splitDateSelection = it(this._splitDateSpan)),
                    (this.splitEventStore = it(this._splitEventStore)),
                    (this.splitIndividualUi = it(this._splitIndividualUi)),
                    (this.splitEventDrag = it(this._splitInteraction)),
                    (this.splitEventResize = it(this._splitInteraction)),
                    (this.eventUiBuilders = {});
            }
            return (
                (e.prototype.splitProps = function (e) {
                    var t = this,
                        n = this.getKeyInfo(e),
                        r = this.getKeysForEventDefs(e.eventStore),
                        o = this.splitDateSelection(e.dateSelection),
                        i = this.splitIndividualUi(e.eventUiBases, r),
                        a = this.splitEventStore(e.eventStore, r),
                        s = this.splitEventDrag(e.eventDrag),
                        l = this.splitEventResize(e.eventResize),
                        u = {};
                    for (var c in ((this.eventUiBuilders = Oe(
                        n,
                        function (e, n) {
                            return t.eventUiBuilders[n] || it(fr);
                        }
                    )),
                    n)) {
                        var d = n[c],
                            p = a[c] || dr,
                            f = this.eventUiBuilders[c];
                        u[c] = {
                            businessHours: d.businessHours || e.businessHours,
                            dateSelection: o[c] || null,
                            eventStore: p,
                            eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                            eventSelection: p.instances[e.eventSelection]
                                ? e.eventSelection
                                : "",
                            eventDrag: s[c] || null,
                            eventResize: l[c] || null,
                        };
                    }
                    return u;
                }),
                (e.prototype._splitDateSpan = function (e) {
                    var t = {};
                    if (e)
                        for (
                            var n = 0, r = this.getKeysForDateSpan(e);
                            n < r.length;
                            n++
                        ) {
                            t[r[n]] = e;
                        }
                    return t;
                }),
                (e.prototype._getKeysForEventDefs = function (e) {
                    var t = this;
                    return Oe(e.defs, function (e) {
                        return t.getKeysForEventDef(e);
                    });
                }),
                (e.prototype._splitEventStore = function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {};
                    for (var i in n)
                        for (var a = 0, s = t[i]; a < s.length; a++) {
                            o[(p = s[a])] ||
                                (o[p] = { defs: {}, instances: {} }),
                                (o[p].defs[i] = n[i]);
                        }
                    for (var l in r)
                        for (
                            var u = r[l], c = 0, d = t[u.defId];
                            c < d.length;
                            c++
                        ) {
                            var p;
                            o[(p = d[c])] && (o[p].instances[l] = u);
                        }
                    return o;
                }),
                (e.prototype._splitIndividualUi = function (e, t) {
                    var n = {};
                    for (var r in e)
                        if (r)
                            for (var o = 0, i = t[r]; o < i.length; o++) {
                                var a = i[o];
                                n[a] || (n[a] = {}), (n[a][r] = e[r]);
                            }
                    return n;
                }),
                (e.prototype._splitInteraction = function (e) {
                    var t = {};
                    if (e) {
                        var n = this._splitEventStore(
                                e.affectedEvents,
                                this._getKeysForEventDefs(e.affectedEvents)
                            ),
                            r = this._getKeysForEventDefs(e.mutatedEvents),
                            o = this._splitEventStore(e.mutatedEvents, r),
                            i = function (r) {
                                t[r] ||
                                    (t[r] = {
                                        affectedEvents: n[r] || dr,
                                        mutatedEvents: o[r] || dr,
                                        isEvent: e.isEvent,
                                    });
                            };
                        for (var a in n) i(a);
                        for (var a in o) i(a);
                    }
                    return t;
                }),
                e
            );
        })();
    function fr(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = { "": Vt(o) };
        return n && r(i, n), i;
    }
    function hr(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !sn(r.activeRange, e)),
            isOther: Boolean(r && !sn(r.currentRange, e)),
            isToday: Boolean(t && sn(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end),
        };
    }
    function vr(e, t) {
        var n = ["fc-day", "fc-day-" + fe[e.dow]];
        return (
            e.isDisabled
                ? n.push("fc-day-disabled")
                : (e.isToday &&
                      (n.push("fc-day-today"), n.push(t.getClass("today"))),
                  e.isPast && n.push("fc-day-past"),
                  e.isFuture && n.push("fc-day-future"),
                  e.isOther && n.push("fc-day-other")),
            n
        );
    }
    function gr(e, t) {
        return (
            void 0 === t && (t = "day"),
            JSON.stringify({ date: tt(e), type: t })
        );
    }
    var mr,
        yr = null;
    function Er() {
        return (
            null === yr &&
                (yr = (function () {
                    var e = document.createElement("div");
                    j(e, {
                        position: "absolute",
                        top: -1e3,
                        left: 0,
                        border: 0,
                        padding: 0,
                        overflow: "scroll",
                        direction: "rtl",
                    }),
                        (e.innerHTML = "<div></div>"),
                        document.body.appendChild(e);
                    var t =
                        e.firstChild.getBoundingClientRect().left >
                        e.getBoundingClientRect().left;
                    return W(e), t;
                })()),
            yr
        );
    }
    function Sr() {
        return (
            mr ||
                (mr = (function () {
                    var e = document.createElement("div");
                    (e.style.overflow = "scroll"), document.body.appendChild(e);
                    var t = Dr(e);
                    return document.body.removeChild(e), t;
                })()),
            mr
        );
    }
    function Dr(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth,
        };
    }
    function br(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = Dr(e),
            l = s.y - r - o,
            u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0,
            };
        return (
            Er() && "rtl" === n.direction
                ? (u.scrollbarLeft = l)
                : (u.scrollbarRight = l),
            t &&
                ((u.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
                (u.paddingRight = parseInt(n.paddingRight, 10) || 0),
                (u.paddingTop = parseInt(n.paddingTop, 10) || 0),
                (u.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
            u
        );
    }
    function Cr(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : wr(e),
            o = br(e, t),
            i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom,
            };
        return (
            t &&
                ((i.left += o.paddingLeft),
                (i.right -= o.paddingRight),
                (i.top += o.paddingTop),
                (i.bottom -= o.paddingBottom)),
            i
        );
    }
    function wr(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset,
        };
    }
    function Rr(e) {
        for (var t = []; e instanceof HTMLElement; ) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
                t.push(e),
                (e = e.parentNode);
        }
        return t;
    }
    function Tr(e, t, n) {
        var r = !1,
            o = function () {
                r || ((r = !0), t.apply(this, arguments));
            },
            i = function () {
                r || ((r = !0), n && n.apply(this, arguments));
            },
            a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i);
    }
    var kr = (function () {
        function e() {
            (this.handlers = {}), (this.thisContext = null);
        }
        return (
            (e.prototype.setThisContext = function (e) {
                this.thisContext = e;
            }),
            (e.prototype.setOptions = function (e) {
                this.options = e;
            }),
            (e.prototype.on = function (e, t) {
                !(function (e, t, n) {
                    (e[t] || (e[t] = [])).push(n);
                })(this.handlers, e, t);
            }),
            (e.prototype.off = function (e, t) {
                !(function (e, t, n) {
                    n
                        ? e[t] &&
                          (e[t] = e[t].filter(function (e) {
                              return e !== n;
                          }))
                        : delete e[t];
                })(this.handlers, e, t);
            }),
            (e.prototype.trigger = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                for (
                    var r = this.handlers[e] || [],
                        o = this.options && this.options[e],
                        i = [].concat(o || [], r),
                        a = 0,
                        s = i;
                    a < s.length;
                    a++
                ) {
                    var l = s[a];
                    l.apply(this.thisContext, t);
                }
            }),
            (e.prototype.hasHandlers = function (e) {
                return (
                    (this.handlers[e] && this.handlers[e].length) ||
                    (this.options && this.options[e])
                );
            }),
            e
        );
    })();
    var Mr = (function () {
            function e(e, t, n, r) {
                this.els = t;
                var o = (this.originClientRect = e.getBoundingClientRect());
                n && this.buildElHorizontals(o.left),
                    r && this.buildElVerticals(o.top);
            }
            return (
                (e.prototype.buildElHorizontals = function (e) {
                    for (
                        var t = [], n = [], r = 0, o = this.els;
                        r < o.length;
                        r++
                    ) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.left - e), n.push(i.right - e);
                    }
                    (this.lefts = t), (this.rights = n);
                }),
                (e.prototype.buildElVerticals = function (e) {
                    for (
                        var t = [], n = [], r = 0, o = this.els;
                        r < o.length;
                        r++
                    ) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.top - e), n.push(i.bottom - e);
                    }
                    (this.tops = t), (this.bottoms = n);
                }),
                (e.prototype.leftToIndex = function (e) {
                    var t,
                        n = this.lefts,
                        r = this.rights,
                        o = n.length;
                    for (t = 0; t < o; t++) if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.topToIndex = function (e) {
                    var t,
                        n = this.tops,
                        r = this.bottoms,
                        o = n.length;
                    for (t = 0; t < o; t++) if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.getWidth = function (e) {
                    return this.rights[e] - this.lefts[e];
                }),
                (e.prototype.getHeight = function (e) {
                    return this.bottoms[e] - this.tops[e];
                }),
                e
            );
        })(),
        xr = (function () {
            function e() {}
            return (
                (e.prototype.getMaxScrollTop = function () {
                    return this.getScrollHeight() - this.getClientHeight();
                }),
                (e.prototype.getMaxScrollLeft = function () {
                    return this.getScrollWidth() - this.getClientWidth();
                }),
                (e.prototype.canScrollVertically = function () {
                    return this.getMaxScrollTop() > 0;
                }),
                (e.prototype.canScrollHorizontally = function () {
                    return this.getMaxScrollLeft() > 0;
                }),
                (e.prototype.canScrollUp = function () {
                    return this.getScrollTop() > 0;
                }),
                (e.prototype.canScrollDown = function () {
                    return this.getScrollTop() < this.getMaxScrollTop();
                }),
                (e.prototype.canScrollLeft = function () {
                    return this.getScrollLeft() > 0;
                }),
                (e.prototype.canScrollRight = function () {
                    return this.getScrollLeft() < this.getMaxScrollLeft();
                }),
                e
            );
        })(),
        _r = (function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return (n.el = t), n;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return this.el.scrollTop;
                }),
                (t.prototype.getScrollLeft = function () {
                    return this.el.scrollLeft;
                }),
                (t.prototype.setScrollTop = function (e) {
                    this.el.scrollTop = e;
                }),
                (t.prototype.setScrollLeft = function (e) {
                    this.el.scrollLeft = e;
                }),
                (t.prototype.getScrollWidth = function () {
                    return this.el.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return this.el.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return this.el.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return this.el.clientWidth;
                }),
                t
            );
        })(xr),
        Ir = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return window.pageYOffset;
                }),
                (t.prototype.getScrollLeft = function () {
                    return window.pageXOffset;
                }),
                (t.prototype.setScrollTop = function (e) {
                    window.scroll(window.pageXOffset, e);
                }),
                (t.prototype.setScrollLeft = function (e) {
                    window.scroll(e, window.pageYOffset);
                }),
                (t.prototype.getScrollWidth = function () {
                    return document.documentElement.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return document.documentElement.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return document.documentElement.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return document.documentElement.clientWidth;
                }),
                t
            );
        })(xr),
        Pr = (function () {
            function e(e) {
                this.iconOverrideOption &&
                    this.setIconOverride(e[this.iconOverrideOption]);
            }
            return (
                (e.prototype.setIconOverride = function (e) {
                    var t, n;
                    if ("object" == typeof e && e) {
                        for (n in ((t = r({}, this.iconClasses)), e))
                            t[n] = this.applyIconOverridePrefix(e[n]);
                        this.iconClasses = t;
                    } else !1 === e && (this.iconClasses = {});
                }),
                (e.prototype.applyIconOverridePrefix = function (e) {
                    var t = this.iconOverridePrefix;
                    return t && 0 !== e.indexOf(t) && (e = t + e), e;
                }),
                (e.prototype.getClass = function (e) {
                    return this.classes[e] || "";
                }),
                (e.prototype.getIconClass = function (e, t) {
                    var n;
                    return (n =
                        (t && this.rtlIconClasses && this.rtlIconClasses[e]) ||
                        this.iconClasses[e])
                        ? this.baseIconClass + " " + n
                        : "";
                }),
                (e.prototype.getCustomButtonIconClass = function (e) {
                    var t;
                    return this.iconOverrideCustomButtonOption &&
                        (t = e[this.iconOverrideCustomButtonOption])
                        ? this.baseIconClass +
                              " " +
                              this.applyIconOverridePrefix(t)
                        : "";
                }),
                e
            );
        })();
    if (
        ((Pr.prototype.classes = {}),
        (Pr.prototype.iconClasses = {}),
        (Pr.prototype.baseIconClass = ""),
        (Pr.prototype.iconOverridePrefix = ""),
        "undefined" == typeof FullCalendarVDom)
    )
        throw new Error(
            "Please import the top-level fullcalendar lib before attempting to import a plugin."
        );
    var Nr = FullCalendarVDom.Component,
        Hr = FullCalendarVDom.createElement,
        Or = FullCalendarVDom.render,
        Ar = FullCalendarVDom.createRef,
        Ur = FullCalendarVDom.Fragment,
        Lr = FullCalendarVDom.createContext,
        Wr = FullCalendarVDom.flushToDom,
        Vr = (function () {
            function e(e, t, n) {
                var o = this;
                (this.execFunc = e),
                    (this.emitter = t),
                    (this.scrollTime = n),
                    (this.handleScrollRequest = function (e) {
                        (o.queuedRequest = r({}, o.queuedRequest || {}, e)),
                            o.drain();
                    }),
                    t.on("_scrollRequest", this.handleScrollRequest),
                    this.fireInitialScroll();
            }
            return (
                (e.prototype.detach = function () {
                    this.emitter.off(
                        "_scrollRequest",
                        this.handleScrollRequest
                    );
                }),
                (e.prototype.update = function (e) {
                    e ? this.fireInitialScroll() : this.drain();
                }),
                (e.prototype.fireInitialScroll = function () {
                    this.handleScrollRequest({ time: this.scrollTime });
                }),
                (e.prototype.drain = function () {
                    this.queuedRequest &&
                        this.execFunc(this.queuedRequest) &&
                        (this.queuedRequest = null);
                }),
                e
            );
        })(),
        zr = Lr({});
    function Fr(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e);
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e);
            },
            createScrollResponder: function (e) {
                return new Vr(e, u, Ye(n.scrollTime));
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p,
        };
    }
    var Br = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return (
                    this.debug &&
                        console.log(We(e, this.props), We(t, this.state)),
                    !Ve(this.props, e, this.propEquality) ||
                        !Ve(this.state, t, this.stateEquality)
                );
            }),
            (t.addPropsEquality = Gr),
            (t.addStateEquality = qr),
            (t.contextType = zr),
            t
        );
    })(Nr);
    (Br.prototype.propEquality = {}), (Br.prototype.stateEquality = {});
    var jr = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), (t.contextType = zr), t;
    })(Br);
    function Gr(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), (this.prototype.propEquality = t);
    }
    function qr(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), (this.prototype.stateEquality = t);
    }
    function Yr(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
    }
    function Zr(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return (function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = It(
                            (function (e, t, n) {
                                var r = n.options.eventDataTransform,
                                    o = t ? t.eventDataTransform : null;
                                o && (e = Xr(e, o));
                                r && (e = Xr(e, r));
                                return e;
                            })(o, t, i),
                            t,
                            i
                        );
                        return r && (a = Be(a, r, i)), Ot(Kr(e, t.sourceId), a);
                    }
                    return e;
                })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return (function (e, t, n, r) {
                    n && (t = Be(t, n, r));
                    return Ot(e, t);
                })(e, t.eventStore, r ? r.activeRange : null, o);
            case "MERGE_EVENTS":
                return Ot(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? Be(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return (function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r)
                        !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return { defs: o, instances: i };
                })(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return Kr(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return At(e, function (e) {
                    return !e.sourceId;
                });
            case "REMOVE_ALL_EVENTS":
                return { defs: {}, instances: {} };
            default:
                return e;
        }
    }
    function Xr(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i);
            }
        } else n = e;
        return n;
    }
    function Kr(e, t) {
        return At(e, function (e) {
            return e.sourceId !== t;
        });
    }
    function Jr(e, t) {
        return $r({ eventDrag: e }, t);
    }
    function $r(e, t) {
        var n = t.getCurrentData(),
            o = r(
                {
                    businessHours: n.businessHours,
                    dateSelection: "",
                    eventStore: n.eventStore,
                    eventUiBases: n.eventUiBases,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null,
                },
                e
            );
        return (t.pluginHooks.isPropsValid || Qr)(o, t);
    }
    function Qr(e, t, n, o) {
        return (
            void 0 === n && (n = {}),
            !(
                e.eventDrag &&
                !(function (e, t, n, o) {
                    var i = t.getCurrentData(),
                        a = e.eventDrag,
                        s = a.mutatedEvents,
                        l = s.defs,
                        u = s.instances,
                        c = pn(
                            l,
                            a.isEvent
                                ? e.eventUiBases
                                : { "": i.selectionConfig }
                        );
                    o && (c = Oe(c, o));
                    var d =
                            ((v = e.eventStore),
                            (g = a.affectedEvents.instances),
                            {
                                defs: v.defs,
                                instances: He(v.instances, function (e) {
                                    return !g[e.instanceId];
                                }),
                            }),
                        p = d.defs,
                        f = d.instances,
                        h = pn(p, e.eventUiBases);
                    var v, g;
                    for (var m in u) {
                        var y = u[m],
                            E = y.range,
                            S = c[y.defId],
                            D = l[y.defId];
                        if (!eo(S.constraints, E, d, e.businessHours, t))
                            return !1;
                        var b = t.options.eventOverlap,
                            C = "function" == typeof b ? b : null;
                        for (var w in f) {
                            var R = f[w];
                            if (on(E, R.range)) {
                                if (!1 === h[R.defId].overlap && a.isEvent)
                                    return !1;
                                if (!1 === S.overlap) return !1;
                                if (
                                    C &&
                                    !C(
                                        new zn(t, p[R.defId], R),
                                        new zn(t, D, y)
                                    )
                                )
                                    return !1;
                            }
                        }
                        for (
                            var T = i.eventStore, k = 0, M = S.allows;
                            k < M.length;
                            k++
                        ) {
                            var x = M[k],
                                _ = r(r({}, n), {
                                    range: y.range,
                                    allDay: D.allDay,
                                }),
                                I = T.defs[D.defId],
                                P = T.instances[m],
                                N = void 0;
                            if (
                                ((N = I ? new zn(t, I, P) : new zn(t, D)),
                                !x(_n(_, t), N))
                            )
                                return !1;
                        }
                    }
                    return !0;
                })(e, t, n, o)
            ) &&
                !(
                    e.dateSelection &&
                    !(function (e, t, n, o) {
                        var i = e.eventStore,
                            a = i.defs,
                            s = i.instances,
                            l = e.dateSelection,
                            u = l.range,
                            c = t.getCurrentData().selectionConfig;
                        o && (c = o(c));
                        if (!eo(c.constraints, u, i, e.businessHours, t))
                            return !1;
                        var d = t.options.selectOverlap,
                            p = "function" == typeof d ? d : null;
                        for (var f in s) {
                            var h = s[f];
                            if (on(u, h.range)) {
                                if (!1 === c.overlap) return !1;
                                if (p && !p(new zn(t, a[h.defId], h), null))
                                    return !1;
                            }
                        }
                        for (var v = 0, g = c.allows; v < g.length; v++) {
                            var m = g[v],
                                y = r(r({}, n), l);
                            if (!m(_n(y, t), null)) return !1;
                        }
                        return !0;
                    })(e, t, n, o)
                )
        );
    }
    function eo(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!ro(to(a[i], t, n, r, o), t)) return !1;
        }
        return !0;
    }
    function to(e, t, n, r, o) {
        return "businessHours" === e
            ? no(Be(r, t, o))
            : "string" == typeof e
            ? no(
                  At(n, function (t) {
                      return t.groupId === e;
                  })
              )
            : "object" == typeof e && e
            ? no(Be(e, t, o))
            : [];
    }
    function no(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n;
    }
    function ro(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (an(r[n], t)) return !0;
        }
        return !1;
    }
    var oo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.uid = $()), t;
        }
        return (
            n(t, e),
            (t.prototype.prepareHits = function () {}),
            (t.prototype.queryHit = function (e, t, n, r) {
                return null;
            }),
            (t.prototype.isInteractionValid = function (e) {
                var t = this.props.dateProfile,
                    n = e.mutatedEvents.instances;
                if (t)
                    for (var r in n)
                        if (!an(t.validRange, n[r].range)) return !1;
                return Jr(e, this.context);
            }),
            (t.prototype.isDateSelectionValid = function (e) {
                var t,
                    n,
                    r = this.props.dateProfile;
                return (
                    !(r && !an(r.validRange, e.range)) &&
                    ((t = e), (n = this.context), $r({ dateSelection: t }, n))
                );
            }),
            (t.prototype.isValidSegDownEl = function (e) {
                return (
                    !this.props.eventDrag &&
                    !this.props.eventResize &&
                    !V(e, ".fc-event-mirror") &&
                    (this.isPopover() || !this.isInPopover(e))
                );
            }),
            (t.prototype.isValidDateDownEl = function (e) {
                return !(
                    V(e, ".fc-event:not(.fc-bg-event)") ||
                    V(e, ".fc-daygrid-more-link") ||
                    V(e, "a[data-navlink]") ||
                    this.isInPopover(e)
                );
            }),
            (t.prototype.isPopover = function () {
                return !1;
            }),
            (t.prototype.isInPopover = function (e) {
                return Boolean(V(e, ".fc-popover"));
            }),
            t
        );
    })(jr);
    function io(e) {
        return {
            id: $(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            eventResizeJoinTransforms: e.eventResizeJoinTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {},
        };
    }
    function ao() {
        var e,
            t = [],
            n = [];
        return function (o, i) {
            return (
                (e && ot(o, t) && ot(i, n)) ||
                    (e = (function (e, t) {
                        var n = {},
                            o = {
                                reducers: [],
                                contextInit: [],
                                eventRefiners: {},
                                eventDefMemberAdders: [],
                                eventSourceRefiners: {},
                                isDraggableTransformers: [],
                                eventDragMutationMassagers: [],
                                eventDefMutationAppliers: [],
                                dateSelectionTransformers: [],
                                datePointTransforms: [],
                                dateSpanTransforms: [],
                                views: {},
                                viewPropsTransformers: [],
                                isPropsValid: null,
                                externalDefTransforms: [],
                                eventResizeJoinTransforms: [],
                                viewContainerAppends: [],
                                eventDropTransformers: [],
                                componentInteractions: [],
                                calendarInteractions: [],
                                themeClasses: {},
                                eventSourceDefs: [],
                                cmdFormatter: null,
                                recurringTypes: [],
                                namedTimeZonedImpl: null,
                                initialView: "",
                                elementDraggingImpl: null,
                                optionChangeHandlers: {},
                                scrollGridImpl: null,
                                contentTypeHandlers: {},
                                listenerRefiners: {},
                                optionRefiners: {},
                                propSetHandlers: {},
                            };
                        function i(e) {
                            for (var t = 0, a = e; t < a.length; t++) {
                                var s = a[t];
                                n[s.id] ||
                                    ((n[s.id] = !0),
                                    i(s.deps),
                                    (u = s),
                                    (o = {
                                        reducers: (l = o).reducers.concat(
                                            u.reducers
                                        ),
                                        contextInit: l.contextInit.concat(
                                            u.contextInit
                                        ),
                                        eventRefiners: r(
                                            r({}, l.eventRefiners),
                                            u.eventRefiners
                                        ),
                                        eventDefMemberAdders:
                                            l.eventDefMemberAdders.concat(
                                                u.eventDefMemberAdders
                                            ),
                                        eventSourceRefiners: r(
                                            r({}, l.eventSourceRefiners),
                                            u.eventSourceRefiners
                                        ),
                                        isDraggableTransformers:
                                            l.isDraggableTransformers.concat(
                                                u.isDraggableTransformers
                                            ),
                                        eventDragMutationMassagers:
                                            l.eventDragMutationMassagers.concat(
                                                u.eventDragMutationMassagers
                                            ),
                                        eventDefMutationAppliers:
                                            l.eventDefMutationAppliers.concat(
                                                u.eventDefMutationAppliers
                                            ),
                                        dateSelectionTransformers:
                                            l.dateSelectionTransformers.concat(
                                                u.dateSelectionTransformers
                                            ),
                                        datePointTransforms:
                                            l.datePointTransforms.concat(
                                                u.datePointTransforms
                                            ),
                                        dateSpanTransforms:
                                            l.dateSpanTransforms.concat(
                                                u.dateSpanTransforms
                                            ),
                                        views: r(r({}, l.views), u.views),
                                        viewPropsTransformers:
                                            l.viewPropsTransformers.concat(
                                                u.viewPropsTransformers
                                            ),
                                        isPropsValid:
                                            u.isPropsValid || l.isPropsValid,
                                        externalDefTransforms:
                                            l.externalDefTransforms.concat(
                                                u.externalDefTransforms
                                            ),
                                        eventResizeJoinTransforms:
                                            l.eventResizeJoinTransforms.concat(
                                                u.eventResizeJoinTransforms
                                            ),
                                        viewContainerAppends:
                                            l.viewContainerAppends.concat(
                                                u.viewContainerAppends
                                            ),
                                        eventDropTransformers:
                                            l.eventDropTransformers.concat(
                                                u.eventDropTransformers
                                            ),
                                        calendarInteractions:
                                            l.calendarInteractions.concat(
                                                u.calendarInteractions
                                            ),
                                        componentInteractions:
                                            l.componentInteractions.concat(
                                                u.componentInteractions
                                            ),
                                        themeClasses: r(
                                            r({}, l.themeClasses),
                                            u.themeClasses
                                        ),
                                        eventSourceDefs:
                                            l.eventSourceDefs.concat(
                                                u.eventSourceDefs
                                            ),
                                        cmdFormatter:
                                            u.cmdFormatter || l.cmdFormatter,
                                        recurringTypes: l.recurringTypes.concat(
                                            u.recurringTypes
                                        ),
                                        namedTimeZonedImpl:
                                            u.namedTimeZonedImpl ||
                                            l.namedTimeZonedImpl,
                                        initialView:
                                            l.initialView || u.initialView,
                                        elementDraggingImpl:
                                            l.elementDraggingImpl ||
                                            u.elementDraggingImpl,
                                        optionChangeHandlers: r(
                                            r({}, l.optionChangeHandlers),
                                            u.optionChangeHandlers
                                        ),
                                        scrollGridImpl:
                                            u.scrollGridImpl ||
                                            l.scrollGridImpl,
                                        contentTypeHandlers: r(
                                            r({}, l.contentTypeHandlers),
                                            u.contentTypeHandlers
                                        ),
                                        listenerRefiners: r(
                                            r({}, l.listenerRefiners),
                                            u.listenerRefiners
                                        ),
                                        optionRefiners: r(
                                            r({}, l.optionRefiners),
                                            u.optionRefiners
                                        ),
                                        propSetHandlers: r(
                                            r({}, l.propSetHandlers),
                                            u.propSetHandlers
                                        ),
                                    }));
                            }
                            var l, u;
                        }
                        return e && i(e), i(t), o;
                    })(o, i)),
                (t = o),
                (n = i),
                e
            );
        };
    }
    var so = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), t;
    })(Pr);
    function lo(e, t, n, o) {
        if (t[e]) return t[e];
        var i = (function (e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function (e) {
                    return i && null !== i[e]
                        ? i[e]
                        : a && null !== a[e]
                        ? a[e]
                        : null;
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e)
                    throw new Error(
                        "Can't have a custom view type that references itself"
                    );
                c = lo(u, t, n, o);
            }
            !l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(
                    r({}, c ? c.overrides : {}),
                    a ? a.rawOptions : {}
                ),
            };
        })(e, t, n, o);
        return i && (t[e] = i), i;
    }
    (so.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active",
    }),
        (so.prototype.baseIconClass = "fc-icon"),
        (so.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-chevron-left",
            next: "fc-icon-chevron-right",
            prevYear: "fc-icon-chevrons-left",
            nextYear: "fc-icon-chevrons-right",
        }),
        (so.prototype.rtlIconClasses = {
            prev: "fc-icon-chevron-right",
            next: "fc-icon-chevron-left",
            prevYear: "fc-icon-chevrons-right",
            nextYear: "fc-icon-chevrons-left",
        }),
        (so.prototype.iconOverrideOption = "buttonIcons"),
        (so.prototype.iconOverrideCustomButtonOption = "icon"),
        (so.prototype.iconOverridePrefix = "fc-icon-");
    var uo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.rootElRef = Ar()),
                    (t.handleRootEl = function (e) {
                        Yr(t.rootElRef, e),
                            t.props.elRef && Yr(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.hookProps;
                    return Hr(
                        ho,
                        {
                            hookProps: n,
                            didMount: t.didMount,
                            willUnmount: t.willUnmount,
                            elRef: this.handleRootEl,
                        },
                        function (r) {
                            return Hr(
                                po,
                                {
                                    hookProps: n,
                                    content: t.content,
                                    defaultContent: t.defaultContent,
                                    backupElRef: e.rootElRef,
                                },
                                function (e, o) {
                                    return t.children(
                                        r,
                                        go(t.classNames, n),
                                        e,
                                        o
                                    );
                                }
                            );
                        }
                    );
                }),
                t
            );
        })(jr),
        co = Lr(0);
    function po(e) {
        return Hr(co.Consumer, null, function (t) {
            return Hr(fo, r({ renderId: t }, e));
        });
    }
    var fo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.innerElRef = Ar()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(
                        this.innerElRef,
                        this.renderInnerContent()
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.renderInnerContent = function () {
                    var e = this.context.pluginHooks.contentTypeHandlers,
                        t = this.props,
                        n = this.customContentInfo,
                        r = mo(t.content, t.hookProps),
                        o = null;
                    if (
                        (void 0 === r &&
                            (r = mo(t.defaultContent, t.hookProps)),
                        void 0 !== r)
                    ) {
                        if (n) n.contentVal = r[n.contentKey];
                        else if ("object" == typeof r)
                            for (var i in e)
                                if (void 0 !== r[i]) {
                                    n = this.customContentInfo = {
                                        contentKey: i,
                                        contentVal: r[i],
                                        handler: e[i](),
                                    };
                                    break;
                                }
                        o = n ? [] : r;
                    }
                    return o;
                }),
                (t.prototype.updateCustomContent = function () {
                    this.customContentInfo &&
                        this.customContentInfo.handler(
                            this.innerElRef.current ||
                                this.props.backupElRef.current,
                            this.customContentInfo.contentVal
                        );
                }),
                t
            );
        })(jr),
        ho = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), t.props.elRef && Yr(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(this.handleRootEl);
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props.didMount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                (t.prototype.componentWillUnmount = function () {
                    var e = this.props.willUnmount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                t
            );
        })(jr);
    function vo() {
        var e,
            t,
            n = [];
        return function (r, o) {
            return (
                (t && Le(t, o) && r === e) ||
                    ((e = r), (t = o), (n = go(r, o))),
                n
            );
        };
    }
    function go(e, t) {
        return "function" == typeof e && (e = e(t)), Ut(e);
    }
    function mo(e, t) {
        return "function" == typeof e ? e(t, Hr) : e;
    }
    var yo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.normalizeClassNames = vo()), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = { view: t.viewApi },
                    o = this.normalizeClassNames(n.viewClassNames, r);
                return Hr(
                    ho,
                    {
                        hookProps: r,
                        didMount: n.viewDidMount,
                        willUnmount: n.viewWillUnmount,
                        elRef: e.elRef,
                    },
                    function (t) {
                        return e.children(
                            t,
                            [
                                "fc-" + e.viewSpec.type + "-view",
                                "fc-view",
                            ].concat(o)
                        );
                    }
                );
            }),
            t
        );
    })(jr);
    function Eo(e) {
        return Oe(e, So);
    }
    function So(e) {
        var t,
            n = "function" == typeof e ? { component: e } : e,
            o = n.component;
        return (
            n.content &&
                ((t = n),
                (o = function (e) {
                    return Hr(zr.Consumer, null, function (n) {
                        return Hr(
                            yo,
                            { viewSpec: n.viewSpec },
                            function (o, i) {
                                var a = r(r({}, e), {
                                    nextDayThreshold:
                                        n.options.nextDayThreshold,
                                });
                                return Hr(
                                    uo,
                                    {
                                        hookProps: a,
                                        classNames: t.classNames,
                                        content: t.content,
                                        didMount: t.didMount,
                                        willUnmount: t.willUnmount,
                                        elRef: o,
                                    },
                                    function (e, t, n, r) {
                                        return Hr(
                                            "div",
                                            {
                                                className: i
                                                    .concat(t)
                                                    .join(" "),
                                                ref: e,
                                            },
                                            r
                                        );
                                    }
                                );
                            }
                        );
                    });
                })),
            { superType: n.type, component: o, rawOptions: n }
        );
    }
    function Do(e, t, n, o) {
        var i = Eo(e),
            a = Eo(t.views);
        return Oe(
            (function (e, t) {
                var n,
                    r = {};
                for (n in e) lo(n, r, e, t);
                for (n in t) lo(n, r, e, t);
                return r;
            })(i, a),
            function (e) {
                return (function (e, t, n, o, i) {
                    var a =
                            e.overrides.duration ||
                            e.defaults.duration ||
                            o.duration ||
                            n.duration,
                        s = null,
                        l = "",
                        u = "",
                        c = {};
                    if (
                        a &&
                        (s = (function (e) {
                            var t = JSON.stringify(e),
                                n = bo[t];
                            void 0 === n && ((n = Ye(e)), (bo[t] = n));
                            return n;
                        })(a))
                    ) {
                        var d = et(s);
                        (l = d.unit),
                            1 === d.value &&
                                ((u = l), (c = t[l] ? t[l].rawOptions : {}));
                    }
                    var p = function (t) {
                        var n = t.buttonText || {},
                            r = e.defaults.buttonTextKey;
                        return null != r && null != n[r]
                            ? n[r]
                            : null != n[e.type]
                            ? n[e.type]
                            : null != n[u]
                            ? n[u]
                            : void 0;
                    };
                    return {
                        type: e.type,
                        component: e.component,
                        duration: s,
                        durationUnit: l,
                        singleUnit: u,
                        optionDefaults: e.defaults,
                        optionOverrides: r(r({}, c), e.overrides),
                        buttonTextOverride:
                            p(o) || p(n) || e.overrides.buttonText,
                        buttonTextDefault:
                            p(i) || e.defaults.buttonText || p(bt) || e.type,
                    };
                })(e, a, t, n, o);
            }
        );
    }
    var bo = {};
    var Co = (function () {
        function e(e) {
            (this.props = e),
                (this.nowDate = Wn(e.nowInput, e.dateEnv)),
                this.initHiddenDays();
        }
        return (
            (e.prototype.buildPrev = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.subtract(
                        r.startOf(t, e.currentRangeUnit),
                        e.dateIncrement
                    );
                return this.build(o, -1, n);
            }),
            (e.prototype.buildNext = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.add(
                        r.startOf(t, e.currentRangeUnit),
                        e.dateIncrement
                    );
                return this.build(o, 1, n);
            }),
            (e.prototype.build = function (e, t, n) {
                void 0 === n && (n = !0);
                var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = this.props;
                return (
                    (r = this.buildValidRange()),
                    (r = this.trimHiddenDays(r)),
                    n &&
                        ((u = e),
                        (e =
                            null != (c = r).start && u < c.start
                                ? c.start
                                : null != c.end && u >= c.end
                                ? new Date(c.end.valueOf() - 1)
                                : u)),
                    (o = this.buildCurrentRangeInfo(e, t)),
                    (i = /^(year|month|week|day)$/.test(o.unit)),
                    (a = this.buildRenderRange(
                        this.trimHiddenDays(o.range),
                        o.unit,
                        i
                    )),
                    (s = a = this.trimHiddenDays(a)),
                    d.showNonCurrentDates || (s = nn(s, o.range)),
                    (s = nn((s = this.adjustActiveRange(s)), r)),
                    (l = on(o.range, r)),
                    {
                        validRange: r,
                        currentRange: o.range,
                        currentRangeUnit: o.unit,
                        isRangeAllDay: i,
                        activeRange: s,
                        renderRange: a,
                        slotMinTime: d.slotMinTime,
                        slotMaxTime: d.slotMaxTime,
                        isValid: l,
                        dateIncrement: this.buildDateIncrement(o.duration),
                    }
                );
            }),
            (e.prototype.buildValidRange = function () {
                var e = this.props.validRangeInput,
                    t =
                        "function" == typeof e
                            ? e.call(this.props.calendarApi, this.nowDate)
                            : e;
                return this.refineRange(t) || { start: null, end: null };
            }),
            (e.prototype.buildCurrentRangeInfo = function (e, t) {
                var n,
                    r = this.props,
                    o = null,
                    i = null,
                    a = null;
                return (
                    r.duration
                        ? ((o = r.duration),
                          (i = r.durationUnit),
                          (a = this.buildRangeFromDuration(e, t, o, i)))
                        : (n = this.props.dayCount)
                        ? ((i = "day"),
                          (a = this.buildRangeFromDayCount(e, t, n)))
                        : (a = this.buildCustomVisibleRange(e))
                        ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
                        : ((i = et((o = this.getFallbackDuration())).unit),
                          (a = this.buildRangeFromDuration(e, t, o, i))),
                    { duration: o, unit: i, range: a }
                );
            }),
            (e.prototype.getFallbackDuration = function () {
                return Ye({ day: 1 });
            }),
            (e.prototype.adjustActiveRange = function (e) {
                var t = this.props,
                    n = t.dateEnv,
                    r = t.usesMinMaxTime,
                    o = t.slotMinTime,
                    i = t.slotMaxTime,
                    a = e.start,
                    s = e.end;
                return (
                    r &&
                        (Je(o) < 0 && ((a = be(a)), (a = n.add(a, o))),
                        Je(i) > 1 &&
                            ((s = ve((s = be(s)), -1)), (s = n.add(s, i)))),
                    { start: a, end: s }
                );
            }),
            (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    s = this.props,
                    l = s.dateEnv,
                    u = s.dateAlignment;
                if (!u) {
                    var c = this.props.dateIncrement;
                    u = c && $e(c) < $e(n) ? et(c).unit : r;
                }
                function d() {
                    (o = l.startOf(e, u)),
                        (i = l.add(o, n)),
                        (a = { start: o, end: i });
                }
                return (
                    Je(n) <= 1 &&
                        this.isHiddenDay(o) &&
                        (o = be((o = this.skipHiddenDays(o, t)))),
                    d(),
                    this.trimHiddenDays(a) ||
                        ((e = this.skipHiddenDays(e, t)), d()),
                    a
                );
            }),
            (e.prototype.buildRangeFromDayCount = function (e, t, n) {
                var r,
                    o = this.props,
                    i = o.dateEnv,
                    a = o.dateAlignment,
                    s = 0,
                    l = e;
                a && (l = i.startOf(l, a)),
                    (l = be(l)),
                    (r = l = this.skipHiddenDays(l, t));
                do {
                    (r = ve(r, 1)), this.isHiddenDay(r) || s++;
                } while (s < n);
                return { start: l, end: r };
            }),
            (e.prototype.buildCustomVisibleRange = function (e) {
                var t = this.props,
                    n = t.visibleRangeInput,
                    r =
                        "function" == typeof n
                            ? n.call(t.calendarApi, t.dateEnv.toDate(e))
                            : n,
                    o = this.refineRange(r);
                return !o || (null != o.start && null != o.end) ? o : null;
            }),
            (e.prototype.buildRenderRange = function (e, t, n) {
                return e;
            }),
            (e.prototype.buildDateIncrement = function (e) {
                var t,
                    n = this.props.dateIncrement;
                return (
                    n ||
                    ((t = this.props.dateAlignment)
                        ? Ye(1, t)
                        : e || Ye({ days: 1 }))
                );
            }),
            (e.prototype.refineRange = function (e) {
                if (e) {
                    var t =
                        ((n = e),
                        (r = this.props.dateEnv),
                        (o = null),
                        (i = null),
                        n.start && (o = r.createMarker(n.start)),
                        n.end && (i = r.createMarker(n.end)),
                        o || i
                            ? o && i && i < o
                                ? null
                                : { start: o, end: i }
                            : null);
                    return t && (t = Jt(t)), t;
                }
                var n, r, o, i;
                return null;
            }),
            (e.prototype.initHiddenDays = function () {
                var e,
                    t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                for (
                    !1 === this.props.weekends && t.push(0, 6), e = 0;
                    e < 7;
                    e++
                )
                    (n[e] = -1 !== t.indexOf(e)) || r++;
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n;
            }),
            (e.prototype.trimHiddenDays = function (e) {
                var t = e.start,
                    n = e.end;
                return (
                    t && (t = this.skipHiddenDays(t)),
                    n && (n = this.skipHiddenDays(n, -1, !0)),
                    null == t || null == n || t < n
                        ? { start: t, end: n }
                        : null
                );
            }),
            (e.prototype.isHiddenDay = function (e) {
                return (
                    e instanceof Date && (e = e.getUTCDay()),
                    this.isHiddenDayHash[e]
                );
            }),
            (e.prototype.skipHiddenDays = function (e, t, n) {
                for (
                    void 0 === t && (t = 1), void 0 === n && (n = !1);
                    this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];

                )
                    e = ve(e, t);
                return e;
            }),
            e
        );
    })();
    function wo(e, t, n) {
        var r = t ? t.activeRange : null;
        return ko(
            {},
            (function (e, t) {
                var n = Ln(t),
                    r = [].concat(e.eventSources || []),
                    o = [];
                e.initialEvents && r.unshift(e.initialEvents);
                e.events && r.unshift(e.events);
                for (var i = 0, a = r; i < a.length; i++) {
                    var s = Un(a[i], t, n);
                    s && o.push(s);
                }
                return o;
            })(e, n),
            r,
            n
        );
    }
    function Ro(e, t, n, o) {
        var i,
            a,
            s = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return ko(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return (
                    (i = e),
                    (a = t.sourceId),
                    He(i, function (e) {
                        return e.sourceId !== a;
                    })
                );
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? Mo(e, s, o) : e;
            case "FETCH_EVENT_SOURCES":
                return xo(e, t.sourceIds ? Ae(t.sourceIds) : Io(e, o), s, o);
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return (function (e, t, n, o) {
                    var i,
                        a = e[t];
                    if (a && n === a.latestFetchId)
                        return r(
                            r({}, e),
                            (((i = {})[t] = r(r({}, a), {
                                isFetching: !1,
                                fetchRange: o,
                            })),
                            i)
                        );
                    return e;
                })(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e;
        }
    }
    function To(e) {
        var t = 0;
        for (var n in e) e[n].isFetching && t++;
        return t;
    }
    function ko(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l;
        }
        return n && (i = Mo(i, n, o)), r(r({}, e), i);
    }
    function Mo(e, t, n) {
        return xo(
            e,
            He(e, function (e) {
                return (function (e, t, n) {
                    return Po(e, n)
                        ? !n.options.lazyFetching ||
                              !e.fetchRange ||
                              e.isFetching ||
                              t.start < e.fetchRange.start ||
                              t.end > e.fetchRange.end
                        : !e.latestFetchId;
                })(e, t, n);
            }),
            t,
            n
        );
    }
    function xo(e, t, n, r) {
        var o = {};
        for (var i in e) {
            var a = e[i];
            t[i] ? (o[i] = _o(a, n, r)) : (o[i] = a);
        }
        return o;
    }
    function _o(e, t, n) {
        var o = n.options,
            i = n.calendarApi,
            a = n.pluginHooks.eventSourceDefs[e.sourceDefId],
            s = $();
        return (
            a.fetch(
                { eventSource: e, range: t, context: n },
                function (r) {
                    var a = r.rawEvents;
                    o.eventSourceSuccess &&
                        (a = o.eventSourceSuccess.call(i, a, r.xhr) || a),
                        e.success && (a = e.success.call(i, a, r.xhr) || a),
                        n.dispatch({
                            type: "RECEIVE_EVENTS",
                            sourceId: e.sourceId,
                            fetchId: s,
                            fetchRange: t,
                            rawEvents: a,
                        });
                },
                function (r) {
                    console.warn(r.message, r),
                        o.eventSourceFailure && o.eventSourceFailure.call(i, r),
                        e.failure && e.failure(r),
                        n.dispatch({
                            type: "RECEIVE_EVENT_ERROR",
                            sourceId: e.sourceId,
                            fetchId: s,
                            fetchRange: t,
                            error: r,
                        });
                }
            ),
            r(r({}, e), { isFetching: !0, latestFetchId: s })
        );
    }
    function Io(e, t) {
        return He(e, function (e) {
            return Po(e, t);
        });
    }
    function Po(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
    }
    function No(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e;
        }
    }
    function Ho(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e;
        }
    }
    function Oo(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                };
            default:
                return e;
        }
    }
    function Ao(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                };
            default:
                return e;
        }
    }
    function Uo(e, t, n, r, o) {
        var i = [];
        return {
            headerToolbar: e.headerToolbar
                ? Lo(e.headerToolbar, e, t, n, r, o, i)
                : null,
            footerToolbar: e.footerToolbar
                ? Lo(e.footerToolbar, e, t, n, r, o, i)
                : null,
            viewsWithButtons: i,
        };
    }
    function Lo(e, t, n, r, o, i, a) {
        return Oe(e, function (e) {
            return (function (e, t, n, r, o, i, a) {
                var s = "rtl" === t.direction,
                    l = t.customButtons || {},
                    u = n.buttonText || {},
                    c = t.buttonText || {};
                return (e ? e.split(" ") : []).map(function (e) {
                    return e.split(",").map(function (e) {
                        if ("title" === e) return { buttonName: e };
                        var t,
                            n = void 0,
                            d = void 0,
                            p = void 0,
                            f = void 0;
                        return (
                            (t = l[e])
                                ? ((d = function (e) {
                                      t.click &&
                                          t.click.call(e.target, e, e.target);
                                  }),
                                  (p = r.getCustomButtonIconClass(t)) ||
                                      (p = r.getIconClass(e, s)) ||
                                      (f = t.text))
                                : (n = o[e])
                                ? (a.push(e),
                                  (d = function () {
                                      i.changeView(e);
                                  }),
                                  (f = n.buttonTextOverride) ||
                                      (p = r.getIconClass(e, s)) ||
                                      (f = n.buttonTextDefault))
                                : i[e] &&
                                  ((d = function () {
                                      i[e]();
                                  }),
                                  (f = u[e]) ||
                                      (p = r.getIconClass(e, s)) ||
                                      (f = c[e])),
                            {
                                buttonName: e,
                                buttonClick: d,
                                buttonIcon: p,
                                buttonText: f,
                            }
                        );
                    });
                });
            })(e, t, n, r, o, i, a);
        });
    }
    function Wo(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase())
            ? (t = (function (e, t) {
                  return e + (-1 === e.indexOf("?") ? "?" : "&") + Vo(t);
              })(t, n))
            : (i = Vo(n));
        var a = new XMLHttpRequest();
        a.open(e, t, !0),
            "GET" !== e &&
                a.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                ),
            (a.onload = function () {
                if (a.status >= 200 && a.status < 400) {
                    var e = !1,
                        t = void 0;
                    try {
                        (t = JSON.parse(a.responseText)), (e = !0);
                    } catch (e) {}
                    e ? r(t, a) : o("Failure parsing JSON", a);
                } else o("Request failed", a);
            }),
            (a.onerror = function () {
                o("Request failed", a);
            }),
            a.send(i);
    }
    function Vo(e) {
        var t = [];
        for (var n in e)
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&");
    }
    function zo(e, t) {
        for (
            var n = Ue(t.getCurrentData().eventSources), r = [], o = 0, i = e;
            o < i.length;
            o++
        ) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l++)
                if (n[l]._raw === a) {
                    n.splice(l, 1), (s = !0);
                    break;
                }
            s || r.push(a);
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h);
        }
    }
    var Fo = [
        io({
            eventSourceDefs: [
                {
                    ignoreRange: !0,
                    parseMeta: function (e) {
                        return Array.isArray(e.events) ? e.events : null;
                    },
                    fetch: function (e, t) {
                        t({ rawEvents: e.eventSource.meta });
                    },
                },
            ],
        }),
        io({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return "function" == typeof e.events ? e.events : null;
                    },
                    fetch: function (e, t, n) {
                        var r = e.context.dateEnv;
                        Tr(
                            e.eventSource.meta.bind(null, Tn(e.range, r)),
                            function (e) {
                                t({ rawEvents: e });
                            },
                            n
                        );
                    },
                },
            ],
        }),
        io({
            eventSourceRefiners: {
                method: String,
                extraParams: _t,
                startParam: String,
                endParam: String,
                timeZoneParam: String,
            },
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return e.url
                            ? {
                                  url: e.url,
                                  method: (e.method || "GET").toUpperCase(),
                                  extraParams: e.extraParams,
                                  startParam: e.startParam,
                                  endParam: e.endParam,
                                  timeZoneParam: e.timeZoneParam,
                              }
                            : null;
                    },
                    fetch: function (e, t, n) {
                        var o = e.eventSource.meta,
                            i = (function (e, t, n) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    l = n.dateEnv,
                                    u = n.options,
                                    c = {};
                                null == (o = e.startParam) &&
                                    (o = u.startParam);
                                null == (i = e.endParam) && (i = u.endParam);
                                null == (a = e.timeZoneParam) &&
                                    (a = u.timeZoneParam);
                                s =
                                    "function" == typeof e.extraParams
                                        ? e.extraParams()
                                        : e.extraParams || {};
                                r(c, s),
                                    (c[o] = l.formatIso(t.start)),
                                    (c[i] = l.formatIso(t.end)),
                                    "local" !== l.timeZone &&
                                        (c[a] = l.timeZone);
                                return c;
                            })(o, e.range, e.context);
                        Wo(
                            o.method,
                            o.url,
                            i,
                            function (e, n) {
                                t({ rawEvents: e, xhr: n });
                            },
                            function (e, t) {
                                n({ message: e, xhr: t });
                            }
                        );
                    },
                },
            ],
        }),
        io({
            recurringTypes: [
                {
                    parse: function (e, t) {
                        if (
                            e.daysOfWeek ||
                            e.startTime ||
                            e.endTime ||
                            e.startRecur ||
                            e.endRecur
                        ) {
                            var n = {
                                    daysOfWeek: e.daysOfWeek || null,
                                    startTime: e.startTime || null,
                                    endTime: e.endTime || null,
                                    startRecur: e.startRecur
                                        ? t.createMarker(e.startRecur)
                                        : null,
                                    endRecur: e.endRecur
                                        ? t.createMarker(e.endRecur)
                                        : null,
                                },
                                r = void 0;
                            return (
                                e.duration && (r = e.duration),
                                !r &&
                                    e.startTime &&
                                    e.endTime &&
                                    ((o = e.endTime),
                                    (i = e.startTime),
                                    (r = {
                                        years: o.years - i.years,
                                        months: o.months - i.months,
                                        days: o.days - i.days,
                                        milliseconds:
                                            o.milliseconds - i.milliseconds,
                                    })),
                                {
                                    allDayGuess: Boolean(
                                        !e.startTime && !e.endTime
                                    ),
                                    duration: r,
                                    typeData: n,
                                }
                            );
                        }
                        var o, i;
                        return null;
                    },
                    expand: function (e, t, n) {
                        var r = nn(t, { start: e.startRecur, end: e.endRecur });
                        return r
                            ? (function (e, t, n, r) {
                                  var o = e ? Ae(e) : null,
                                      i = be(n.start),
                                      a = n.end,
                                      s = [];
                                  for (; i < a; ) {
                                      var l = void 0;
                                      (o && !o[i.getUTCDay()]) ||
                                          ((l = t ? r.add(i, t) : i),
                                          s.push(l)),
                                          (i = ve(i, 1));
                                  }
                                  return s;
                              })(e.daysOfWeek, e.startTime, r, n)
                            : [];
                    },
                },
            ],
            eventRefiners: {
                daysOfWeek: _t,
                startTime: Ye,
                endTime: Ye,
                duration: Ye,
                startRecur: _t,
                endRecur: _t,
            },
        }),
        io({
            optionChangeHandlers: {
                events: function (e, t) {
                    zo([e], t);
                },
                eventSources: zo,
            },
        }),
        io({
            contentTypeHandlers: {
                html: function () {
                    return Bo;
                },
                domNodes: function () {
                    return jo;
                },
            },
            propSetHandlers: {
                dateProfile: function (e, t) {
                    t.emitter.trigger(
                        "datesSet",
                        r(r({}, Tn(e.activeRange, t.dateEnv)), {
                            view: t.viewApi,
                        })
                    );
                },
                eventStore: function (e, t) {
                    var n = t.emitter;
                    n.hasHandlers("eventsSet") &&
                        n.trigger("eventsSet", Bn(e, t));
                },
            },
        }),
    ];
    function Bo(e, t) {
        e.innerHTML = t;
    }
    function jo(e, t) {
        var n = Array.prototype.slice.call(e.childNodes),
            r = Array.prototype.slice.call(t);
        if (!ot(n, r)) {
            for (var o = 0, i = r; o < i.length; o++) {
                var a = i[o];
                e.appendChild(a);
            }
            n.forEach(W);
        }
    }
    var Go = (function () {
            function e(e) {
                (this.drainedOption = e),
                    (this.isRunning = !1),
                    (this.isDirty = !1),
                    (this.pauseDepths = {}),
                    (this.timeoutId = 0);
            }
            return (
                (e.prototype.request = function (e) {
                    (this.isDirty = !0),
                        this.isPaused() ||
                            (this.clearTimeout(),
                            null == e
                                ? this.tryDrain()
                                : (this.timeoutId = setTimeout(
                                      this.tryDrain.bind(this),
                                      e
                                  )));
                }),
                (e.prototype.pause = function (e) {
                    void 0 === e && (e = "");
                    var t = this.pauseDepths;
                    (t[e] = (t[e] || 0) + 1), this.clearTimeout();
                }),
                (e.prototype.resume = function (e, t) {
                    void 0 === e && (e = "");
                    var n = this.pauseDepths;
                    if (e in n) {
                        if (t) delete n[e];
                        else --n[e] <= 0 && delete n[e];
                        this.tryDrain();
                    }
                }),
                (e.prototype.isPaused = function () {
                    return Object.keys(this.pauseDepths).length;
                }),
                (e.prototype.tryDrain = function () {
                    if (!this.isRunning && !this.isPaused()) {
                        for (this.isRunning = !0; this.isDirty; )
                            (this.isDirty = !1), this.drained();
                        this.isRunning = !1;
                    }
                }),
                (e.prototype.clear = function () {
                    this.clearTimeout(),
                        (this.isDirty = !1),
                        (this.pauseDepths = {});
                }),
                (e.prototype.clearTimeout = function () {
                    this.timeoutId &&
                        (clearTimeout(this.timeoutId), (this.timeoutId = 0));
                }),
                (e.prototype.drained = function () {
                    this.drainedOption && this.drainedOption();
                }),
                e
            );
        })(),
        qo = (function () {
            function e(e, t) {
                (this.runTaskOption = e),
                    (this.drainedOption = t),
                    (this.queue = []),
                    (this.delayedRunner = new Go(this.drain.bind(this)));
            }
            return (
                (e.prototype.request = function (e, t) {
                    this.queue.push(e), this.delayedRunner.request(t);
                }),
                (e.prototype.pause = function (e) {
                    this.delayedRunner.pause(e);
                }),
                (e.prototype.resume = function (e, t) {
                    this.delayedRunner.resume(e, t);
                }),
                (e.prototype.drain = function () {
                    for (var e = this.queue; e.length; ) {
                        for (var t = [], n = void 0; (n = e.shift()); )
                            this.runTask(n), t.push(n);
                        this.drained(t);
                    }
                }),
                (e.prototype.runTask = function (e) {
                    this.runTaskOption && this.runTaskOption(e);
                }),
                (e.prototype.drained = function (e) {
                    this.drainedOption && this.drainedOption(e);
                }),
                e
            );
        })();
    function Yo(e, t, n) {
        var r;
        return (
            (r = /^(year|month)$/.test(e.currentRangeUnit)
                ? e.currentRange
                : e.activeRange),
            n.formatRange(
                r.start,
                r.end,
                St(
                    t.titleFormat ||
                        (function (e) {
                            var t = e.currentRangeUnit;
                            if ("year" === t) return { year: "numeric" };
                            if ("month" === t)
                                return { year: "numeric", month: "long" };
                            var n = De(
                                e.currentRange.start,
                                e.currentRange.end
                            );
                            return null !== n && n > 1
                                ? {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                  }
                                : {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                  };
                        })(e)
                ),
                {
                    isEndExclusive: e.isRangeAllDay,
                    defaultSeparator: t.titleRangeSeparator,
                }
            )
        );
    }
    var Zo = (function () {
        function e(e) {
            var t = this;
            (this.computeOptionsData = it(this._computeOptionsData)),
                (this.computeCurrentViewData = it(
                    this._computeCurrentViewData
                )),
                (this.organizeRawLocales = it($n)),
                (this.buildLocale = it(Qn)),
                (this.buildPluginHooks = ao()),
                (this.buildDateEnv = it(Xo)),
                (this.buildTheme = it(Ko)),
                (this.parseToolbars = it(Uo)),
                (this.buildViewSpecs = it(Do)),
                (this.buildDateProfileGenerator = at(Jo)),
                (this.buildViewApi = it($o)),
                (this.buildViewUiProps = at(ti)),
                (this.buildEventUiBySource = it(Qo, Le)),
                (this.buildEventUiBases = it(ei)),
                (this.parseContextBusinessHours = at(ni)),
                (this.buildTitle = it(Yo)),
                (this.emitter = new kr()),
                (this.actionRunner = new qo(
                    this._handleAction.bind(this),
                    this.updateData.bind(this)
                )),
                (this.currentCalendarOptionsInput = {}),
                (this.currentCalendarOptionsRefined = {}),
                (this.currentViewOptionsInput = {}),
                (this.currentViewOptionsRefined = {}),
                (this.currentCalendarOptionsRefiners = {}),
                (this.getCurrentData = function () {
                    return t.data;
                }),
                (this.dispatch = function (e) {
                    t.actionRunner.request(e);
                }),
                (this.props = e),
                this.actionRunner.pause();
            var n = {},
                o = this.computeOptionsData(
                    e.optionOverrides,
                    n,
                    e.calendarApi
                ),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            (e.calendarApi.currentDataManager = this),
                this.emitter.setThisContext(e.calendarApi),
                this.emitter.setOptions(a.options);
            var s,
                l,
                u,
                c =
                    ((s = o.calendarOptions),
                    (l = o.dateEnv),
                    null != (u = s.initialDate)
                        ? l.createMarker(u)
                        : Wn(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            sn(d.activeRange, c) || (c = d.currentRange.start);
            for (
                var p = {
                        dateEnv: o.dateEnv,
                        options: o.calendarOptions,
                        pluginHooks: o.pluginHooks,
                        calendarApi: e.calendarApi,
                        dispatch: this.dispatch,
                        emitter: this.emitter,
                        getCurrentData: this.getCurrentData,
                    },
                    f = 0,
                    h = o.pluginHooks.contextInit;
                f < h.length;
                f++
            ) {
                (0, h[f])(p);
            }
            for (
                var v = wo(o.calendarOptions, d, p),
                    g = {
                        dynamicOptionOverrides: n,
                        currentViewType: i,
                        currentDate: c,
                        dateProfile: d,
                        businessHours: this.parseContextBusinessHours(p),
                        eventSources: v,
                        eventUiBases: {},
                        loadingLevel: To(v),
                        eventStore: { defs: {}, instances: {} },
                        renderableEventStore: { defs: {}, instances: {} },
                        dateSelection: null,
                        eventSelection: "",
                        eventDrag: null,
                        eventResize: null,
                        selectionConfig:
                            this.buildViewUiProps(p).selectionConfig,
                    },
                    m = r(r({}, p), g),
                    y = 0,
                    E = o.pluginHooks.reducers;
                y < E.length;
                y++
            ) {
                var S = E[y];
                r(g, S(null, null, m));
            }
            g.loadingLevel && this.emitter.trigger("loading", !0),
                (this.state = g),
                this.updateData(),
                this.actionRunner.resume();
        }
        return (
            (e.prototype.resetOptions = function (e, t) {
                var n = this.props;
                (n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e),
                    this.actionRunner.request({ type: "NOTHING" });
            }),
            (e.prototype._handleAction = function (e) {
                var t = this.props,
                    n = this.state,
                    o = this.emitter,
                    i = (function (e, t) {
                        var n;
                        switch (t.type) {
                            case "SET_OPTION":
                                return r(
                                    r({}, e),
                                    (((n = {})[t.optionName] =
                                        t.rawOptionValue),
                                    n)
                                );
                            default:
                                return e;
                        }
                    })(n.dynamicOptionOverrides, e),
                    a = this.computeOptionsData(
                        t.optionOverrides,
                        i,
                        t.calendarApi
                    ),
                    s = (function (e, t) {
                        switch (t.type) {
                            case "CHANGE_VIEW_TYPE":
                                return t.viewType;
                        }
                        return e;
                    })(n.currentViewType, e),
                    l = this.computeCurrentViewData(s, a, t.optionOverrides, i);
                (t.calendarApi.currentDataManager = this),
                    o.setThisContext(t.calendarApi),
                    o.setOptions(l.options);
                var u = {
                        dateEnv: a.dateEnv,
                        options: a.calendarOptions,
                        pluginHooks: a.pluginHooks,
                        calendarApi: t.calendarApi,
                        dispatch: this.dispatch,
                        emitter: o,
                        getCurrentData: this.getCurrentData,
                    },
                    c = n.currentDate,
                    d = n.dateProfile;
                this.data &&
                    this.data.dateProfileGenerator !== l.dateProfileGenerator &&
                    (d = l.dateProfileGenerator.build(c)),
                    (d = (function (e, t, n, r) {
                        var o;
                        switch (t.type) {
                            case "CHANGE_VIEW_TYPE":
                                return r.build(t.dateMarker || n);
                            case "CHANGE_DATE":
                                if (
                                    !e.activeRange ||
                                    !sn(e.currentRange, t.dateMarker)
                                )
                                    return r.build(t.dateMarker);
                                break;
                            case "PREV":
                                if ((o = r.buildPrev(e, n)).isValid) return o;
                                break;
                            case "NEXT":
                                if ((o = r.buildNext(e, n)).isValid) return o;
                        }
                        return e;
                    })(
                        d,
                        e,
                        (c = (function (e, t) {
                            switch (t.type) {
                                case "CHANGE_DATE":
                                    return t.dateMarker;
                                default:
                                    return e;
                            }
                        })(c, e)),
                        l.dateProfileGenerator
                    )),
                    sn(d.currentRange, c) || (c = d.currentRange.start);
                for (
                    var p = Ro(n.eventSources, e, d, u),
                        f = To(p),
                        h = Zr(n.eventStore, e, p, d, u),
                        v =
                            (f &&
                                !l.options.progressiveEventRendering &&
                                n.renderableEventStore) ||
                            h,
                        g = this.buildViewUiProps(u),
                        m = g.eventUiSingleBase,
                        y = g.selectionConfig,
                        E = this.buildEventUiBySource(p),
                        S = this.buildEventUiBases(v.defs, m, E),
                        D = n.loadingLevel || 0,
                        b = f,
                        C = {
                            dynamicOptionOverrides: i,
                            currentViewType: s,
                            currentDate: c,
                            dateProfile: d,
                            eventSources: p,
                            eventStore: h,
                            renderableEventStore: v,
                            selectionConfig: y,
                            eventUiBases: S,
                            loadingLevel: b,
                            businessHours: this.parseContextBusinessHours(u),
                            dateSelection: No(n.dateSelection, e),
                            eventSelection: Ho(n.eventSelection, e),
                            eventDrag: Oo(n.eventDrag, e),
                            eventResize: Ao(n.eventResize, e),
                        },
                        w = r(r({}, u), C),
                        R = 0,
                        T = a.pluginHooks.reducers;
                    R < T.length;
                    R++
                ) {
                    var k = T[R];
                    r(C, k(n, e, w));
                }
                !D && b
                    ? o.trigger("loading", !0)
                    : D && !b && o.trigger("loading", !1),
                    (this.state = C),
                    t.onAction && t.onAction(e);
            }),
            (e.prototype.updateData = function () {
                var e,
                    t,
                    n,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c = this.props,
                    d = this.state,
                    p = this.data,
                    f = this.computeOptionsData(
                        c.optionOverrides,
                        d.dynamicOptionOverrides,
                        c.calendarApi
                    ),
                    h = this.computeCurrentViewData(
                        d.currentViewType,
                        f,
                        c.optionOverrides,
                        d.dynamicOptionOverrides
                    ),
                    v = (this.data = r(
                        r(
                            r(
                                {
                                    viewTitle: this.buildTitle(
                                        d.dateProfile,
                                        h.options,
                                        f.dateEnv
                                    ),
                                    calendarApi: c.calendarApi,
                                    dispatch: this.dispatch,
                                    emitter: this.emitter,
                                    getCurrentData: this.getCurrentData,
                                },
                                f
                            ),
                            h
                        ),
                        d
                    )),
                    g = f.pluginHooks.optionChangeHandlers,
                    m = p && p.calendarOptions,
                    y = f.calendarOptions;
                if (m && m !== y)
                    for (var E in (m.timeZone !== y.timeZone &&
                        ((d.eventSources = v.eventSources =
                            ((a = v.eventSources),
                            (s = d.dateProfile),
                            (l = v),
                            (u = s ? s.activeRange : null),
                            xo(a, Io(a, l), u, l))),
                        (d.eventStore = v.eventStore =
                            ((e = v.eventStore),
                            (t = p.dateEnv),
                            (n = v.dateEnv),
                            (o = e.defs),
                            (i = Oe(e.instances, function (e) {
                                var i = o[e.defId];
                                return i.allDay || i.recurringDef
                                    ? e
                                    : r(r({}, e), {
                                          range: {
                                              start: n.createMarker(
                                                  t.toDate(
                                                      e.range.start,
                                                      e.forcedStartTzo
                                                  )
                                              ),
                                              end: n.createMarker(
                                                  t.toDate(
                                                      e.range.end,
                                                      e.forcedEndTzo
                                                  )
                                              ),
                                          },
                                          forcedStartTzo: n.canComputeOffset
                                              ? null
                                              : e.forcedStartTzo,
                                          forcedEndTzo: n.canComputeOffset
                                              ? null
                                              : e.forcedEndTzo,
                                      });
                            })),
                            { defs: o, instances: i }))),
                    g))
                        m[E] !== y[E] && g[E](y[E], v);
                c.onData && c.onData(v);
            }),
            (e.prototype._computeOptionsData = function (e, t, n) {
                var r = this.processRawCalendarOptions(e, t),
                    o = r.refinedOptions,
                    i = r.pluginHooks,
                    a = r.localeDefaults,
                    s = r.availableLocaleData;
                ri(r.extra);
                var l = this.buildDateEnv(
                        o.timeZone,
                        o.locale,
                        o.weekNumberCalculation,
                        o.firstDay,
                        o.weekText,
                        i,
                        s,
                        o.defaultRangeSeparator
                    ),
                    u = this.buildViewSpecs(i.views, e, t, a),
                    c = this.buildTheme(o, i);
                return {
                    calendarOptions: o,
                    pluginHooks: i,
                    dateEnv: l,
                    viewSpecs: u,
                    theme: c,
                    toolbarConfig: this.parseToolbars(o, e, c, u, n),
                    localeDefaults: a,
                    availableRawLocales: s.map,
                };
            }),
            (e.prototype.processRawCalendarOptions = function (e, t) {
                var n = Mt([bt, e, t]),
                    o = n.locales,
                    i = n.locale,
                    a = this.organizeRawLocales(o),
                    s = a.map,
                    l = this.buildLocale(i || a.defaultCode, s).options,
                    u = this.buildPluginHooks(e.plugins || [], Fo),
                    c = (this.currentCalendarOptionsRefiners = r(
                        r(r(r(r({}, Dt), Ct), wt), u.listenerRefiners),
                        u.optionRefiners
                    )),
                    d = {},
                    p = Mt([bt, l, e, t]),
                    f = {},
                    h = this.currentCalendarOptionsInput,
                    v = this.currentCalendarOptionsRefined,
                    g = !1;
                for (var m in p)
                    "plugins" !== m &&
                        (p[m] === h[m] || (Rt[m] && m in h && Rt[m](h[m], p[m]))
                            ? (f[m] = v[m])
                            : c[m]
                            ? ((f[m] = c[m](p[m])), (g = !0))
                            : (d[m] = h[m]));
                return (
                    g &&
                        ((this.currentCalendarOptionsInput = p),
                        (this.currentCalendarOptionsRefined = f)),
                    {
                        rawOptions: this.currentCalendarOptionsInput,
                        refinedOptions: this.currentCalendarOptionsRefined,
                        pluginHooks: u,
                        availableLocaleData: a,
                        localeDefaults: l,
                        extra: d,
                    }
                );
            }),
            (e.prototype._computeCurrentViewData = function (e, t, n, r) {
                var o = t.viewSpecs[e];
                if (!o)
                    throw new Error(
                        'viewType "' +
                            e +
                            "\" is not available. Please make sure you've loaded all neccessary plugins"
                    );
                var i = this.processRawViewOptions(
                        o,
                        t.pluginHooks,
                        t.localeDefaults,
                        n,
                        r
                    ),
                    a = i.refinedOptions;
                return (
                    ri(i.extra),
                    {
                        viewSpec: o,
                        options: a,
                        dateProfileGenerator: this.buildDateProfileGenerator({
                            dateProfileGeneratorClass:
                                o.optionDefaults.dateProfileGeneratorClass,
                            duration: o.duration,
                            durationUnit: o.durationUnit,
                            usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                            dateEnv: t.dateEnv,
                            calendarApi: this.props.calendarApi,
                            slotMinTime: a.slotMinTime,
                            slotMaxTime: a.slotMaxTime,
                            showNonCurrentDates: a.showNonCurrentDates,
                            dayCount: a.dayCount,
                            dateAlignment: a.dateAlignment,
                            dateIncrement: a.dateIncrement,
                            hiddenDays: a.hiddenDays,
                            weekends: a.weekends,
                            nowInput: a.now,
                            validRangeInput: a.validRange,
                            visibleRangeInput: a.visibleRange,
                            monthMode: a.monthMode,
                            fixedWeekCount: a.fixedWeekCount,
                        }),
                        viewApi: this.buildViewApi(
                            e,
                            this.getCurrentData,
                            t.dateEnv
                        ),
                    }
                );
            }),
            (e.prototype.processRawViewOptions = function (e, t, n, o, i) {
                var a = Mt([bt, e.optionDefaults, n, o, e.optionOverrides, i]),
                    s = r(
                        r(r(r(r(r({}, Dt), Ct), wt), kt), t.listenerRefiners),
                        t.optionRefiners
                    ),
                    l = {},
                    u = this.currentViewOptionsInput,
                    c = this.currentViewOptionsRefined,
                    d = !1,
                    p = {};
                for (var f in a)
                    a[f] === u[f]
                        ? (l[f] = c[f])
                        : (a[f] === this.currentCalendarOptionsInput[f]
                              ? f in this.currentCalendarOptionsRefined &&
                                (l[f] = this.currentCalendarOptionsRefined[f])
                              : s[f]
                              ? (l[f] = s[f](a[f]))
                              : (p[f] = a[f]),
                          (d = !0));
                return (
                    d &&
                        ((this.currentViewOptionsInput = a),
                        (this.currentViewOptionsRefined = l)),
                    {
                        rawOptions: this.currentViewOptionsInput,
                        refinedOptions: this.currentViewOptionsRefined,
                        extra: p,
                    }
                );
            }),
            e
        );
    })();
    function Xo(e, t, n, r, o, i, a, s) {
        var l = Qn(t || a.defaultCode, a.map);
        return new Xn({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s,
        });
    }
    function Ko(e, t) {
        return new (t.themeClasses[e.themeSystem] || so)(e);
    }
    function Jo(e) {
        return new (e.dateProfileGeneratorClass || Co)(e);
    }
    function $o(e, t, n) {
        return new On(e, t, n);
    }
    function Qo(e) {
        return Oe(e, function (e) {
            return e.ui;
        });
    }
    function ei(e, t, n) {
        var r = { "": t };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
        }
        return r;
    }
    function ti(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Wt(
                {
                    display: t.eventDisplay,
                    editable: t.editable,
                    startEditable: t.eventStartEditable,
                    durationEditable: t.eventDurationEditable,
                    constraint: t.eventConstraint,
                    overlap:
                        "boolean" == typeof t.eventOverlap
                            ? t.eventOverlap
                            : void 0,
                    allow: t.eventAllow,
                    backgroundColor: t.eventBackgroundColor,
                    borderColor: t.eventBorderColor,
                    textColor: t.eventTextColor,
                    color: t.eventColor,
                },
                e
            ),
            selectionConfig: Wt(
                {
                    constraint: t.selectConstraint,
                    overlap:
                        "boolean" == typeof t.selectOverlap
                            ? t.selectOverlap
                            : void 0,
                    allow: t.selectAllow,
                },
                e
            ),
        };
    }
    function ni(e) {
        return or(e.options.businessHours, e);
    }
    function ri(e, t) {
        for (var n in e)
            console.warn(
                "Unknown option '" +
                    n +
                    "'" +
                    (t ? " for view '" + t + "'" : "")
            );
    }
    var oi = (function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return (
                (n.handleData = function (e) {
                    n.dataManager ? n.setState(e) : (n.state = e);
                }),
                (n.dataManager = new Zo({
                    optionOverrides: t.optionOverrides,
                    calendarApi: t.calendarApi,
                    onData: n.handleData,
                })),
                n
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return this.props.children(this.state);
            }),
            (t.prototype.componentDidUpdate = function (e) {
                var t = this.props.optionOverrides;
                t !== e.optionOverrides && this.dataManager.resetOptions(t);
            }),
            t
        );
    })(Nr);
    var ii = function (e) {
            this.timeZoneName = e;
        },
        ai = (function () {
            function e(e) {
                this.component = e.component;
            }
            return (e.prototype.destroy = function () {}), e;
        })();
    function si(e, t) {
        return {
            component: e,
            el: t.el,
            useEventCenter: null == t.useEventCenter || t.useEventCenter,
        };
    }
    function li(e) {
        var t;
        return ((t = {})[e.component.uid] = e), t;
    }
    var ui = {},
        ci = (function () {
            function e(e, t) {
                this.emitter = new kr();
            }
            return (
                (e.prototype.destroy = function () {}),
                (e.prototype.setMirrorIsVisible = function (e) {}),
                (e.prototype.setMirrorNeedsRevert = function (e) {}),
                (e.prototype.setAutoScrollEnabled = function (e) {}),
                e
            );
        })(),
        di = {},
        pi = { startTime: Ye, duration: Ye, create: Boolean, sourceId: String };
    function fi(e) {
        var t = xt(e, pi),
            n = t.refined,
            r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r,
        };
    }
    var hi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t,
                        n = this.props,
                        r = n.model,
                        o = n.extraClassName,
                        i = !1,
                        a = r.center;
                    return (
                        r.left ? ((i = !0), (e = r.left)) : (e = r.start),
                        r.right ? ((i = !0), (t = r.right)) : (t = r.end),
                        Hr(
                            "div",
                            {
                                className: [
                                    o || "",
                                    "fc-toolbar",
                                    i ? "fc-toolbar-ltr" : "",
                                ].join(" "),
                            },
                            this.renderSection("start", e || []),
                            this.renderSection("center", a || []),
                            this.renderSection("end", t || [])
                        )
                    );
                }),
                (t.prototype.renderSection = function (e, t) {
                    var n = this.props;
                    return Hr(vi, {
                        key: e,
                        widgetGroups: t,
                        title: n.title,
                        activeButton: n.activeButton,
                        isTodayEnabled: n.isTodayEnabled,
                        isPrevEnabled: n.isPrevEnabled,
                        isNextEnabled: n.isNextEnabled,
                    });
                }),
                t
            );
        })(jr),
        vi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props.widgetGroups.map(function (t) {
                            return e.renderWidgetGroup(t);
                        });
                    return Hr.apply(
                        void 0,
                        o(["div", { className: "fc-toolbar-chunk" }], t)
                    );
                }),
                (t.prototype.renderWidgetGroup = function (e) {
                    for (
                        var t = this.props,
                            n = this.context.theme,
                            i = [],
                            a = !0,
                            s = 0,
                            l = e;
                        s < l.length;
                        s++
                    ) {
                        var u = l[s],
                            c = u.buttonName,
                            d = u.buttonClick,
                            p = u.buttonText,
                            f = u.buttonIcon;
                        if ("title" === c)
                            (a = !1),
                                i.push(
                                    Hr(
                                        "h2",
                                        { className: "fc-toolbar-title" },
                                        t.title
                                    )
                                );
                        else {
                            var h = f ? { "aria-label": c } : {},
                                v = [
                                    "fc-" + c + "-button",
                                    n.getClass("button"),
                                ];
                            c === t.activeButton &&
                                v.push(n.getClass("buttonActive"));
                            var g =
                                (!t.isTodayEnabled && "today" === c) ||
                                (!t.isPrevEnabled && "prev" === c) ||
                                (!t.isNextEnabled && "next" === c);
                            i.push(
                                Hr(
                                    "button",
                                    r(
                                        {
                                            disabled: g,
                                            className: v.join(" "),
                                            onClick: d,
                                            type: "button",
                                        },
                                        h
                                    ),
                                    p || (f ? Hr("span", { className: f }) : "")
                                )
                            );
                        }
                    }
                    if (i.length > 1) {
                        var m = (a && n.getClass("buttonGroup")) || "";
                        return Hr.apply(
                            void 0,
                            o(["div", { className: m }], i)
                        );
                    }
                    return i[0];
                }),
                t
            );
        })(jr),
        gi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { availableWidth: null }),
                    (t.handleEl = function (e) {
                        (t.el = e),
                            Yr(t.props.elRef, e),
                            t.updateAvailableWidth();
                    }),
                    (t.handleResize = function () {
                        t.updateAvailableWidth();
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.state,
                        n = e.aspectRatio,
                        r = [
                            "fc-view-harness",
                            n || e.liquid || e.height
                                ? "fc-view-harness-active"
                                : "fc-view-harness-passive",
                        ],
                        o = "",
                        i = "";
                    return (
                        n
                            ? null !== t.availableWidth
                                ? (o = t.availableWidth / n)
                                : (i = (1 / n) * 100 + "%")
                            : (o = e.height || ""),
                        Hr(
                            "div",
                            {
                                ref: this.handleEl,
                                onClick: e.onClick,
                                className: r.join(" "),
                                style: { height: o, paddingBottom: i },
                            },
                            e.children
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.context.addResizeHandler(this.handleResize);
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.context.removeResizeHandler(this.handleResize);
                }),
                (t.prototype.updateAvailableWidth = function () {
                    this.el &&
                        this.props.aspectRatio &&
                        this.setState({ availableWidth: this.el.offsetWidth });
                }),
                t
            );
        })(jr),
        mi = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return (
                    (n.handleSegClick = function (e, t) {
                        var r = n.component,
                            o = r.context,
                            i = dn(t);
                        if (i && r.isValidSegDownEl(e.target)) {
                            var a = V(e.target, ".fc-event-forced-url"),
                                s = a ? a.querySelector("a[href]").href : "";
                            o.emitter.trigger("eventClick", {
                                el: t,
                                event: new zn(
                                    r.context,
                                    i.eventRange.def,
                                    i.eventRange.instance
                                ),
                                jsEvent: e,
                                view: o.viewApi,
                            }),
                                s &&
                                    !e.defaultPrevented &&
                                    (window.location.href = s);
                        }
                    }),
                    (n.destroy = Z(
                        t.el,
                        "click",
                        ".fc-event",
                        n.handleSegClick
                    )),
                    n
                );
            }
            return n(t, e), t;
        })(ai),
        yi = (function (e) {
            function t(t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    s = e.call(this, t) || this;
                return (
                    (s.handleEventElRemove = function (e) {
                        e === s.currentSegEl &&
                            s.handleSegLeave(null, s.currentSegEl);
                    }),
                    (s.handleSegEnter = function (e, t) {
                        dn(t) &&
                            ((s.currentSegEl = t),
                            s.triggerEvent("eventMouseEnter", e, t));
                    }),
                    (s.handleSegLeave = function (e, t) {
                        s.currentSegEl &&
                            ((s.currentSegEl = null),
                            s.triggerEvent("eventMouseLeave", e, t));
                    }),
                    (s.removeHoverListeners =
                        ((n = t.el),
                        (r = ".fc-event"),
                        (o = s.handleSegEnter),
                        (i = s.handleSegLeave),
                        Z(n, "mouseover", r, function (e, t) {
                            if (t !== a) {
                                (a = t), o(e, t);
                                var n = function (e) {
                                    (a = null),
                                        i(e, t),
                                        t.removeEventListener("mouseleave", n);
                                };
                                t.addEventListener("mouseleave", n);
                            }
                        }))),
                    s
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.removeHoverListeners();
                }),
                (t.prototype.triggerEvent = function (e, t, n) {
                    var r = this.component,
                        o = r.context,
                        i = dn(n);
                    (t && !r.isValidSegDownEl(t.target)) ||
                        o.emitter.trigger(e, {
                            el: n,
                            event: new zn(
                                o,
                                i.eventRange.def,
                                i.eventRange.instance
                            ),
                            jsEvent: t,
                            view: o.viewApi,
                        });
                }),
                t
            );
        })(ai),
        Ei = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildViewContext = it(Fr)),
                    (t.buildViewPropTransformers = it(Di)),
                    (t.buildToolbarProps = it(Si)),
                    (t.handleNavLinkClick = Y(
                        "a[data-navlink]",
                        t._handleNavLinkClick.bind(t)
                    )),
                    (t.headerRef = Ar()),
                    (t.footerRef = Ar()),
                    (t.interactionsStore = {}),
                    (t.registerInteractiveComponent = function (e, n) {
                        var r = si(e, n),
                            o = [mi, yi]
                                .concat(
                                    t.props.pluginHooks.componentInteractions
                                )
                                .map(function (e) {
                                    return new e(r);
                                });
                        (t.interactionsStore[e.uid] = o), (ui[e.uid] = r);
                    }),
                    (t.unregisterInteractiveComponent = function (e) {
                        for (
                            var n = 0, r = t.interactionsStore[e.uid];
                            n < r.length;
                            n++
                        ) {
                            r[n].destroy();
                        }
                        delete t.interactionsStore[e.uid], delete ui[e.uid];
                    }),
                    (t.resizeRunner = new Go(function () {
                        t.props.emitter.trigger("_resize", !0),
                            t.props.emitter.trigger("windowResize", {
                                view: t.props.viewApi,
                            });
                    })),
                    (t.handleWindowResize = function (e) {
                        var n = t.props.options;
                        n.handleWindowResize &&
                            e.target === window &&
                            t.resizeRunner.request(n.windowResizeDelay);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t = this.props,
                        n = t.toolbarConfig,
                        o = t.options,
                        i = this.buildToolbarProps(
                            t.viewSpec,
                            t.dateProfile,
                            t.dateProfileGenerator,
                            t.currentDate,
                            Wn(t.options.now, t.dateEnv),
                            t.viewTitle
                        ),
                        a = !1,
                        s = "";
                    t.isHeightAuto || t.forPrint
                        ? (s = "")
                        : null != o.height
                        ? (a = !0)
                        : null != o.contentHeight
                        ? (s = o.contentHeight)
                        : (e = Math.max(o.aspectRatio, 0.5));
                    var l = this.buildViewContext(
                        t.viewSpec,
                        t.viewApi,
                        t.options,
                        t.dateProfileGenerator,
                        t.dateEnv,
                        t.theme,
                        t.pluginHooks,
                        t.dispatch,
                        t.getCurrentData,
                        t.emitter,
                        t.calendarApi,
                        this.registerInteractiveComponent,
                        this.unregisterInteractiveComponent
                    );
                    return Hr(
                        zr.Provider,
                        { value: l },
                        n.headerToolbar &&
                            Hr(
                                hi,
                                r(
                                    {
                                        ref: this.headerRef,
                                        extraClassName: "fc-header-toolbar",
                                        model: n.headerToolbar,
                                    },
                                    i
                                )
                            ),
                        Hr(
                            gi,
                            {
                                liquid: a,
                                height: s,
                                aspectRatio: e,
                                onClick: this.handleNavLinkClick,
                            },
                            this.renderView(t),
                            this.buildAppendContent()
                        ),
                        n.footerToolbar &&
                            Hr(
                                hi,
                                r(
                                    {
                                        ref: this.footerRef,
                                        extraClassName: "fc-footer-toolbar",
                                        model: n.footerToolbar,
                                    },
                                    i
                                )
                            )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props;
                    (this.calendarInteractions =
                        e.pluginHooks.calendarInteractions.map(function (t) {
                            return new t(e);
                        })),
                        window.addEventListener(
                            "resize",
                            this.handleWindowResize
                        );
                    var t = e.pluginHooks.propSetHandlers;
                    for (var n in t) t[n](e[n], e);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props,
                        n = t.pluginHooks.propSetHandlers;
                    for (var r in n) t[r] !== e[r] && n[r](t[r], t);
                }),
                (t.prototype.componentWillUnmount = function () {
                    window.removeEventListener(
                        "resize",
                        this.handleWindowResize
                    ),
                        this.resizeRunner.clear();
                    for (
                        var e = 0, t = this.calendarInteractions;
                        e < t.length;
                        e++
                    ) {
                        t[e].destroy();
                    }
                    this.props.emitter.trigger("_unmount");
                }),
                (t.prototype._handleNavLinkClick = function (e, t) {
                    var n = this.props,
                        r = n.dateEnv,
                        o = n.options,
                        i = n.calendarApi,
                        a = t.getAttribute("data-navlink");
                    a = a ? JSON.parse(a) : {};
                    var s = r.createMarker(a.date),
                        l = a.type,
                        u =
                            "day" === l
                                ? o.navLinkDayClick
                                : "week" === l
                                ? o.navLinkWeekClick
                                : null;
                    "function" == typeof u
                        ? u.call(i, r.toDate(s), e)
                        : ("string" == typeof u && (l = u), i.zoomTo(s, l));
                }),
                (t.prototype.buildAppendContent = function () {
                    var e = this.props,
                        t = e.pluginHooks.viewContainerAppends.map(function (
                            t
                        ) {
                            return t(e);
                        });
                    return Hr.apply(void 0, o([Ur, {}], t));
                }),
                (t.prototype.renderView = function (e) {
                    for (
                        var t = e.pluginHooks,
                            n = e.viewSpec,
                            o = {
                                dateProfile: e.dateProfile,
                                businessHours: e.businessHours,
                                eventStore: e.renderableEventStore,
                                eventUiBases: e.eventUiBases,
                                dateSelection: e.dateSelection,
                                eventSelection: e.eventSelection,
                                eventDrag: e.eventDrag,
                                eventResize: e.eventResize,
                                isHeightAuto: e.isHeightAuto,
                                forPrint: e.forPrint,
                            },
                            i = 0,
                            a = this.buildViewPropTransformers(
                                t.viewPropsTransformers
                            );
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        r(o, s.transform(o, e));
                    }
                    var l = n.component;
                    return Hr(l, r({}, o));
                }),
                t
            );
        })(Br);
    function Si(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            isTodayEnabled: a.isValid && !sn(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid,
        };
    }
    function Di(e) {
        return e.map(function (e) {
            return new e();
        });
    }
    var bi = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.state = { forPrint: !1 }),
                (t.handleBeforePrint = function () {
                    t.setState({ forPrint: !0 });
                }),
                (t.handleAfterPrint = function () {
                    t.setState({ forPrint: !1 });
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = e.options,
                    n = this.state.forPrint,
                    r = n || "auto" === t.height || "auto" === t.contentHeight,
                    o = r || null == t.height ? "" : t.height,
                    i = [
                        "fc",
                        n ? "fc-media-print" : "fc-media-screen",
                        "fc-direction-" + t.direction,
                        e.theme.getClass("root"),
                    ];
                return cr() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
            }),
            (t.prototype.componentDidMount = function () {
                var e = this.props.emitter;
                e.on("_beforeprint", this.handleBeforePrint),
                    e.on("_afterprint", this.handleAfterPrint);
            }),
            (t.prototype.componentWillUnmount = function () {
                var e = this.props.emitter;
                e.off("_beforeprint", this.handleBeforePrint),
                    e.off("_afterprint", this.handleAfterPrint);
            }),
            t
        );
    })(jr);
    function Ci(e, t) {
        return St(
            !e || t > 10
                ? { weekday: "short" }
                : t > 1
                ? {
                      weekday: "short",
                      month: "numeric",
                      day: "numeric",
                      omitCommas: !0,
                  }
                : { weekday: "long" }
        );
    }
    var wi = "fc-col-header-cell",
        Ri = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.dateEnv,
                        n = e.options,
                        o = e.theme,
                        i = e.viewApi,
                        a = this.props,
                        s = a.date,
                        l = a.dateProfile,
                        u = hr(s, a.todayRange, null, l),
                        c = [wi].concat(vr(u, o)),
                        d = t.format(s, a.dayHeaderFormat),
                        p =
                            n.navLinks && !u.isDisabled && a.colCnt > 1
                                ? { "data-navlink": gr(s), tabIndex: 0 }
                                : {},
                        f = r(
                            r(
                                r(
                                    { date: t.toDate(s), view: i },
                                    a.extraHookProps
                                ),
                                { text: d }
                            ),
                            u
                        );
                    return Hr(
                        uo,
                        {
                            hookProps: f,
                            classNames: n.dayHeaderClassNames,
                            content: n.dayHeaderContent,
                            defaultContent: ki,
                            didMount: n.dayHeaderDidMount,
                            willUnmount: n.dayHeaderWillUnmount,
                        },
                        function (e, t, n, o) {
                            return Hr(
                                "th",
                                r(
                                    {
                                        ref: e,
                                        className: c.concat(t).join(" "),
                                        "data-date": u.isDisabled
                                            ? void 0
                                            : tt(s),
                                        colSpan: a.colSpan,
                                    },
                                    a.extraDataAttrs
                                ),
                                Hr(
                                    "div",
                                    { className: "fc-scrollgrid-sync-inner" },
                                    !u.isDisabled &&
                                        Hr(
                                            "a",
                                            r(
                                                {
                                                    ref: n,
                                                    className: [
                                                        "fc-col-header-cell-cushion",
                                                        a.isSticky
                                                            ? "fc-sticky"
                                                            : "",
                                                    ].join(" "),
                                                },
                                                p
                                            ),
                                            o
                                        )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr),
        Ti = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.dateEnv,
                        o = t.theme,
                        i = t.viewApi,
                        a = t.options,
                        s = ve(new Date(2592e5), e.dow),
                        l = {
                            dow: e.dow,
                            isDisabled: !1,
                            isFuture: !1,
                            isPast: !1,
                            isToday: !1,
                            isOther: !1,
                        },
                        u = [wi].concat(vr(l, o), e.extraClassNames || []),
                        c = n.format(s, e.dayHeaderFormat),
                        d = r(
                            r(
                                r(r({ date: s }, l), { view: i }),
                                e.extraHookProps
                            ),
                            { text: c }
                        );
                    return Hr(
                        uo,
                        {
                            hookProps: d,
                            classNames: a.dayHeaderClassNames,
                            content: a.dayHeaderContent,
                            defaultContent: ki,
                            didMount: a.dayHeaderDidMount,
                            willUnmount: a.dayHeaderWillUnmount,
                        },
                        function (t, n, o, i) {
                            return Hr(
                                "th",
                                r(
                                    {
                                        ref: t,
                                        className: u.concat(n).join(" "),
                                        colSpan: e.colSpan,
                                    },
                                    e.extraDataAttrs
                                ),
                                Hr(
                                    "div",
                                    { className: "fc-scrollgrid-sync-inner" },
                                    Hr(
                                        "a",
                                        {
                                            className: [
                                                "fc-col-header-cell-cushion",
                                                e.isSticky ? "fc-sticky" : "",
                                            ].join(" "),
                                            ref: o,
                                        },
                                        i
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr);
    function ki(e) {
        return e.text;
    }
    var Mi = (function (e) {
        function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (
                (r.initialNowDate = Wn(n.options.now, n.dateEnv)),
                (r.initialNowQueriedMs = new Date().valueOf()),
                (r.state = r.computeTiming().currentState),
                r
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return e.children(t.nowDate, t.todayRange);
            }),
            (t.prototype.componentDidMount = function () {
                this.setTimeout();
            }),
            (t.prototype.componentDidUpdate = function (e) {
                e.unit !== this.props.unit &&
                    (this.clearTimeout(), this.setTimeout());
            }),
            (t.prototype.componentWillUnmount = function () {
                this.clearTimeout();
            }),
            (t.prototype.computeTiming = function () {
                var e = this.props,
                    t = this.context,
                    n = ge(
                        this.initialNowDate,
                        new Date().valueOf() - this.initialNowQueriedMs
                    ),
                    r = t.dateEnv.startOf(n, e.unit),
                    o = t.dateEnv.add(r, Ye(1, e.unit)),
                    i = o.valueOf() - n.valueOf();
                return {
                    currentState: { nowDate: r, todayRange: xi(r) },
                    nextState: { nowDate: o, todayRange: xi(o) },
                    waitMs: i,
                };
            }),
            (t.prototype.setTimeout = function () {
                var e = this,
                    t = this.computeTiming(),
                    n = t.nextState,
                    r = t.waitMs;
                this.timeoutId = setTimeout(function () {
                    e.setState(n, function () {
                        e.setTimeout();
                    });
                }, r);
            }),
            (t.prototype.clearTimeout = function () {
                this.timeoutId && clearTimeout(this.timeoutId);
            }),
            (t.contextType = zr),
            t
        );
    })(Nr);
    function xi(e) {
        var t = be(e);
        return { start: t, end: ve(t, 1) };
    }
    var _i = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.createDayHeaderFormatter = it(Ii)), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.context,
                    t = this.props,
                    n = t.dates,
                    r = t.dateProfile,
                    o = t.datesRepDistinctDays,
                    i = t.renderIntro,
                    a = this.createDayHeaderFormatter(
                        e.options.dayHeaderFormat,
                        o,
                        n.length
                    );
                return Hr(Mi, { unit: "day" }, function (e, t) {
                    return Hr(
                        "tr",
                        null,
                        i && i(),
                        n.map(function (e) {
                            return o
                                ? Hr(Ri, {
                                      key: e.toISOString(),
                                      date: e,
                                      dateProfile: r,
                                      todayRange: t,
                                      colCnt: n.length,
                                      dayHeaderFormat: a,
                                  })
                                : Hr(Ti, {
                                      key: e.getUTCDay(),
                                      dow: e.getUTCDay(),
                                      dayHeaderFormat: a,
                                  });
                        })
                    );
                });
            }),
            t
        );
    })(jr);
    function Ii(e, t, n) {
        return e || Ci(t, n);
    }
    var Pi = (function () {
            function e(e, t) {
                for (
                    var n = e.start, r = e.end, o = [], i = [], a = -1;
                    n < r;

                )
                    t.isHiddenDay(n)
                        ? o.push(a + 0.5)
                        : (a++, o.push(a), i.push(n)),
                        (n = ve(n, 1));
                (this.dates = i), (this.indices = o), (this.cnt = i.length);
            }
            return (
                (e.prototype.sliceRange = function (e) {
                    var t = this.getDateDayIndex(e.start),
                        n = this.getDateDayIndex(ve(e.end, -1)),
                        r = Math.max(0, t),
                        o = Math.min(this.cnt - 1, n);
                    return (r = Math.ceil(r)) <= (o = Math.floor(o))
                        ? {
                              firstIndex: r,
                              lastIndex: o,
                              isStart: t === r,
                              isEnd: n === o,
                          }
                        : null;
                }),
                (e.prototype.getDateDayIndex = function (e) {
                    var t = this.indices,
                        n = Math.floor(ye(this.dates[0], e));
                    return n < 0
                        ? t[0] - 1
                        : n >= t.length
                        ? t[t.length - 1] + 1
                        : t[n];
                }),
                e
            );
        })(),
        Ni = (function () {
            function e(e, t) {
                var n,
                    r,
                    o,
                    i = e.dates;
                if (t) {
                    for (
                        r = i[0].getUTCDay(), n = 1;
                        n < i.length && i[n].getUTCDay() !== r;
                        n++
                    );
                    o = Math.ceil(i.length / n);
                } else (o = 1), (n = i.length);
                (this.rowCnt = o),
                    (this.colCnt = n),
                    (this.daySeries = e),
                    (this.cells = this.buildCells()),
                    (this.headerDates = this.buildHeaderDates());
            }
            return (
                (e.prototype.buildCells = function () {
                    for (var e = [], t = 0; t < this.rowCnt; t++) {
                        for (var n = [], r = 0; r < this.colCnt; r++)
                            n.push(this.buildCell(t, r));
                        e.push(n);
                    }
                    return e;
                }),
                (e.prototype.buildCell = function (e, t) {
                    var n = this.daySeries.dates[e * this.colCnt + t];
                    return { key: n.toISOString(), date: n };
                }),
                (e.prototype.buildHeaderDates = function () {
                    for (var e = [], t = 0; t < this.colCnt; t++)
                        e.push(this.cells[0][t].date);
                    return e;
                }),
                (e.prototype.sliceRange = function (e) {
                    var t = this.colCnt,
                        n = this.daySeries.sliceRange(e),
                        r = [];
                    if (n)
                        for (
                            var o = n.firstIndex, i = n.lastIndex, a = o;
                            a <= i;

                        ) {
                            var s = Math.floor(a / t),
                                l = Math.min((s + 1) * t, i + 1);
                            r.push({
                                row: s,
                                firstCol: a % t,
                                lastCol: (l - 1) % t,
                                isStart: n.isStart && a === o,
                                isEnd: n.isEnd && l - 1 === i,
                            }),
                                (a = l);
                        }
                    return r;
                }),
                e
            );
        })(),
        Hi = (function () {
            function e() {
                (this.sliceBusinessHours = it(this._sliceBusinessHours)),
                    (this.sliceDateSelection = it(this._sliceDateSpan)),
                    (this.sliceEventStore = it(this._sliceEventStore)),
                    (this.sliceEventDrag = it(this._sliceInteraction)),
                    (this.sliceEventResize = it(this._sliceInteraction)),
                    (this.forceDayIfListItem = !1);
            }
            return (
                (e.prototype.sliceProps = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++)
                        i[a - 4] = arguments[a];
                    var s = e.eventUiBases,
                        l = this.sliceEventStore.apply(
                            this,
                            o([e.eventStore, s, t, n], i)
                        );
                    return {
                        dateSelectionSegs: this.sliceDateSelection.apply(
                            this,
                            o([e.dateSelection, s, r], i)
                        ),
                        businessHourSegs: this.sliceBusinessHours.apply(
                            this,
                            o([e.businessHours, t, n, r], i)
                        ),
                        fgEventSegs: l.fg,
                        bgEventSegs: l.bg,
                        eventDrag: this.sliceEventDrag.apply(
                            this,
                            o([e.eventDrag, s, t, n], i)
                        ),
                        eventResize: this.sliceEventResize.apply(
                            this,
                            o([e.eventResize, s, t, n], i)
                        ),
                        eventSelection: e.eventSelection,
                    };
                }),
                (e.prototype.sliceNowDate = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++)
                        n[r - 2] = arguments[r];
                    return this._sliceDateSpan.apply(
                        this,
                        o(
                            [
                                {
                                    range: { start: e, end: ge(e, 1) },
                                    allDay: !1,
                                },
                                {},
                                t,
                            ],
                            n
                        )
                    );
                }),
                (e.prototype._sliceBusinessHours = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++)
                        i[a - 4] = arguments[a];
                    return e
                        ? this._sliceEventStore.apply(
                              this,
                              o([Be(e, Oi(t, Boolean(n)), r), {}, t, n], i)
                          ).bg
                        : [];
                }),
                (e.prototype._sliceEventStore = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++)
                        o[i - 4] = arguments[i];
                    if (e) {
                        var a = ln(e, t, Oi(n, Boolean(r)), r);
                        return {
                            bg: this.sliceEventRanges(a.bg, o),
                            fg: this.sliceEventRanges(a.fg, o),
                        };
                    }
                    return { bg: [], fg: [] };
                }),
                (e.prototype._sliceInteraction = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++)
                        o[i - 4] = arguments[i];
                    if (!e) return null;
                    var a = ln(e.mutatedEvents, t, Oi(n, Boolean(r)), r);
                    return {
                        segs: this.sliceEventRanges(a.fg, o),
                        affectedInstances: e.affectedEvents.instances,
                        isEvent: e.isEvent,
                    };
                }),
                (e.prototype._sliceDateSpan = function (e, t, n) {
                    for (var r = [], i = 3; i < arguments.length; i++)
                        r[i - 3] = arguments[i];
                    if (!e) return [];
                    for (
                        var a = Mn(e, t, n),
                            s = this.sliceRange.apply(this, o([e.range], r)),
                            l = 0,
                            u = s;
                        l < u.length;
                        l++
                    ) {
                        var c = u[l];
                        c.eventRange = a;
                    }
                    return s;
                }),
                (e.prototype.sliceEventRanges = function (e, t) {
                    for (var n = [], r = 0, o = e; r < o.length; r++) {
                        var i = o[r];
                        n.push.apply(n, this.sliceEventRange(i, t));
                    }
                    return n;
                }),
                (e.prototype.sliceEventRange = function (e, t) {
                    var n = e.range;
                    this.forceDayIfListItem &&
                        "list-item" === e.ui.display &&
                        (n = { start: n.start, end: ve(n.start, 1) });
                    for (
                        var r = this.sliceRange.apply(this, o([n], t)),
                            i = 0,
                            a = r;
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        (s.eventRange = e),
                            (s.isStart = e.isStart && s.isStart),
                            (s.isEnd = e.isEnd && s.isEnd);
                    }
                    return r;
                }),
                e
            );
        })();
    function Oi(e, t) {
        var n = e.activeRange;
        return t
            ? n
            : {
                  start: ge(n.start, e.slotMinTime.milliseconds),
                  end: ge(n.end, e.slotMaxTime.milliseconds - 864e5),
              };
    }
    var Ai = /^(visible|hidden)$/,
        Ui = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleEl = function (e) {
                        (t.el = e), Yr(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = e.liquid,
                        n = e.liquidIsAbsolute,
                        r = t && n,
                        o = ["fc-scroller"];
                    return (
                        t &&
                            (n
                                ? o.push("fc-scroller-liquid-absolute")
                                : o.push("fc-scroller-liquid")),
                        Hr(
                            "div",
                            {
                                ref: this.handleEl,
                                className: o.join(" "),
                                style: {
                                    overflowX: e.overflowX,
                                    overflowY: e.overflowY,
                                    left: (r && -(e.overcomeLeft || 0)) || "",
                                    right: (r && -(e.overcomeRight || 0)) || "",
                                    bottom:
                                        (r && -(e.overcomeBottom || 0)) || "",
                                    marginLeft:
                                        (!r && -(e.overcomeLeft || 0)) || "",
                                    marginRight:
                                        (!r && -(e.overcomeRight || 0)) || "",
                                    marginBottom:
                                        (!r && -(e.overcomeBottom || 0)) || "",
                                    maxHeight: e.maxHeight || "",
                                },
                            },
                            e.children
                        )
                    );
                }),
                (t.prototype.needsXScrolling = function () {
                    if (Ai.test(this.props.overflowX)) return !1;
                    for (
                        var e = this.el,
                            t =
                                this.el.getBoundingClientRect().width -
                                this.getYScrollbarWidth(),
                            n = e.children,
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        if (n[r].getBoundingClientRect().width > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.needsYScrolling = function () {
                    if (Ai.test(this.props.overflowY)) return !1;
                    for (
                        var e = this.el,
                            t =
                                this.el.getBoundingClientRect().height -
                                this.getXScrollbarWidth(),
                            n = e.children,
                            r = 0;
                        r < n.length;
                        r++
                    ) {
                        if (n[r].getBoundingClientRect().height > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.getXScrollbarWidth = function () {
                    return Ai.test(this.props.overflowX)
                        ? 0
                        : this.el.offsetHeight - this.el.clientHeight;
                }),
                (t.prototype.getYScrollbarWidth = function () {
                    return Ai.test(this.props.overflowY)
                        ? 0
                        : this.el.offsetWidth - this.el.clientWidth;
                }),
                t
            );
        })(jr),
        Li = (function () {
            function e(e) {
                var t = this;
                (this.masterCallback = e),
                    (this.currentMap = {}),
                    (this.depths = {}),
                    (this.callbackMap = {}),
                    (this.handleValue = function (e, n) {
                        var r = t,
                            o = r.depths,
                            i = r.currentMap,
                            a = !1,
                            s = !1;
                        null !== e
                            ? ((a = n in i),
                              (i[n] = e),
                              (o[n] = (o[n] || 0) + 1),
                              (s = !0))
                            : 0 == --o[n] &&
                              (delete i[n], delete t.callbackMap[n], (a = !0)),
                            t.masterCallback &&
                                (a && t.masterCallback(null, String(n)),
                                s && t.masterCallback(e, String(n)));
                    });
            }
            return (
                (e.prototype.createRef = function (e) {
                    var t = this,
                        n = this.callbackMap[e];
                    return (
                        n ||
                            (n = this.callbackMap[e] =
                                function (n) {
                                    t.handleValue(n, String(e));
                                }),
                        n
                    );
                }),
                (e.prototype.collect = function (e, t, n) {
                    return Fe(this.currentMap, e, t, n);
                }),
                (e.prototype.getAll = function () {
                    return Ue(this.currentMap);
                }),
                e
            );
        })();
    function Wi(e) {
        for (
            var t = 0, n = 0, r = F(e, ".fc-scrollgrid-shrink");
            n < r.length;
            n++
        ) {
            var o = r[n];
            t = Math.max(t, pe(o));
        }
        return Math.ceil(t);
    }
    function Vi(e, t) {
        return e.liquid && t.liquid;
    }
    function zi(e, t) {
        return null != t.maxHeight || Vi(e, t);
    }
    function Fi(e, t, n) {
        var r = n.expandRows;
        return "function" == typeof t.content
            ? t.content(n)
            : Hr(
                  "table",
                  {
                      className: [
                          t.tableClassName,
                          e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
                      ].join(" "),
                      style: {
                          minWidth: n.tableMinWidth,
                          width: n.clientWidth,
                          height: r ? n.clientHeight : "",
                      },
                  },
                  n.tableColGroupNode,
                  Hr(
                      "tbody",
                      {},
                      "function" == typeof t.rowContent
                          ? t.rowContent(n)
                          : t.rowContent
                  )
              );
    }
    function Bi(e, t) {
        return ot(e, t, Le);
    }
    function ji(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++)
            for (var a = i[r], s = a.span || 1, l = 0; l < s; l++)
                n.push(
                    Hr("col", {
                        style: {
                            width: "shrink" === a.width ? Gi(t) : a.width || "",
                            minWidth: a.minWidth || "",
                        },
                    })
                );
        return Hr.apply(void 0, o(["colgroup", {}], n));
    }
    function Gi(e) {
        return null == e ? 4 : e;
    }
    function qi(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0;
        }
        return !1;
    }
    function Yi(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n;
    }
    function Zi(e, t) {
        var n = [
            "fc-scrollgrid-section",
            "fc-scrollgrid-section-" + e.type,
            e.className,
        ];
        return (
            t &&
                e.liquid &&
                null == e.maxHeight &&
                n.push("fc-scrollgrid-section-liquid"),
            e.isSticky && n.push("fc-scrollgrid-section-sticky"),
            n
        );
    }
    function Xi(e) {
        return Hr("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        });
    }
    function Ki(e) {
        var t = e.stickyHeaderDates;
        return (
            (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
            t
        );
    }
    function Ji(e) {
        var t = e.stickyFooterScrollbar;
        return (
            (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
            t
        );
    }
    var $i = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.processCols = it(function (e) {
                    return e;
                }, Bi)),
                (t.renderMicroColGroup = it(ji)),
                (t.scrollerRefs = new Li()),
                (t.scrollerElRefs = new Li(t._handleScrollerEl.bind(t))),
                (t.state = {
                    shrinkWidth: null,
                    forceYScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {},
                }),
                (t.handleSizing = function () {
                    t.setState(
                        r(
                            { shrinkWidth: t.computeShrinkWidth() },
                            t.computeScrollerDims()
                        )
                    );
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                for (
                    var e,
                        t = this.props,
                        n = this.state,
                        r = this.context,
                        i = t.sections || [],
                        a = this.processCols(t.cols),
                        s = this.renderMicroColGroup(a, n.shrinkWidth),
                        l = Yi(t.liquid, r),
                        u = i.length,
                        c = 0,
                        d = [],
                        p = [],
                        f = [];
                    c < u && "header" === (e = i[c]).type;

                )
                    d.push(this.renderSection(e, c, s)), c++;
                for (; c < u && "body" === (e = i[c]).type; )
                    p.push(this.renderSection(e, c, s)), c++;
                for (; c < u && "footer" === (e = i[c]).type; )
                    f.push(this.renderSection(e, c, s)), c++;
                var h = !cr();
                return Hr(
                    "table",
                    { className: l.join(" "), style: { height: t.height } },
                    Boolean(!h && d.length) &&
                        Hr.apply(void 0, o(["thead", {}], d)),
                    Boolean(!h && p.length) &&
                        Hr.apply(void 0, o(["tbody", {}], p)),
                    Boolean(!h && f.length) &&
                        Hr.apply(void 0, o(["tfoot", {}], f)),
                    h && Hr.apply(void 0, o(["tbody", {}], d, p, f))
                );
            }),
            (t.prototype.renderSection = function (e, t, n) {
                return "outerContent" in e
                    ? Hr(Ur, { key: e.key }, e.outerContent)
                    : Hr(
                          "tr",
                          {
                              key: e.key,
                              className: Zi(e, this.props.liquid).join(" "),
                          },
                          this.renderChunkTd(e, t, n, e.chunk)
                      );
            }),
            (t.prototype.renderChunkTd = function (e, t, n, r) {
                if ("outerContent" in r) return r.outerContent;
                var o = this.props,
                    i = this.state,
                    a = i.forceYScrollbars,
                    s = i.scrollerClientWidths,
                    l = i.scrollerClientHeights,
                    u = zi(o, e),
                    c = Vi(o, e),
                    d = o.liquid
                        ? a
                            ? "scroll"
                            : u
                            ? "auto"
                            : "hidden"
                        : "visible",
                    p = Fi(e, r, {
                        tableColGroupNode: n,
                        tableMinWidth: "",
                        clientWidth: void 0 !== s[t] ? s[t] : null,
                        clientHeight: void 0 !== l[t] ? l[t] : null,
                        expandRows: e.expandRows,
                        syncRowHeights: !1,
                        rowSyncHeights: [],
                        reportRowHeightChange: function () {},
                    });
                return Hr(
                    "td",
                    { ref: r.elRef },
                    Hr(
                        "div",
                        {
                            className:
                                "fc-scroller-harness" +
                                (c ? " fc-scroller-harness-liquid" : ""),
                        },
                        Hr(
                            Ui,
                            {
                                ref: this.scrollerRefs.createRef(t),
                                elRef: this.scrollerElRefs.createRef(t),
                                overflowY: d,
                                overflowX: o.liquid ? "hidden" : "visible",
                                maxHeight: e.maxHeight,
                                liquid: c,
                                liquidIsAbsolute: !0,
                            },
                            p
                        )
                    )
                );
            }),
            (t.prototype._handleScrollerEl = function (e, t) {
                var n = parseInt(t, 10);
                Yr(this.props.sections[n].chunk.scrollerElRef, e);
            }),
            (t.prototype.componentDidMount = function () {
                this.handleSizing(),
                    this.context.addResizeHandler(this.handleSizing);
            }),
            (t.prototype.componentDidUpdate = function () {
                this.handleSizing();
            }),
            (t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleSizing);
            }),
            (t.prototype.computeShrinkWidth = function () {
                return qi(this.props.cols)
                    ? Wi(this.scrollerElRefs.getAll())
                    : 0;
            }),
            (t.prototype.computeScrollerDims = function () {
                for (
                    var e = Sr(),
                        t = this.props.sections.length,
                        n = this.scrollerRefs,
                        r = this.scrollerElRefs,
                        o = !1,
                        i = {},
                        a = {},
                        s = 0;
                    s < t;
                    s++
                ) {
                    var l = n.currentMap[s];
                    if (l && l.needsYScrolling()) {
                        o = !0;
                        break;
                    }
                }
                for (s = 0; s < t; s++) {
                    var u = r.currentMap[s];
                    if (u) {
                        var c = u.parentNode;
                        (i[s] = Math.floor(
                            c.getBoundingClientRect().width - (o ? e.y : 0)
                        )),
                            (a[s] = Math.floor(
                                c.getBoundingClientRect().height
                            ));
                    }
                }
                return {
                    forceYScrollbars: o,
                    scrollerClientWidths: i,
                    scrollerClientHeights: a,
                };
            }),
            t
        );
    })(jr);
    $i.addStateEquality({
        scrollerClientWidths: Le,
        scrollerClientHeights: Le,
    });
    var Qi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.elRef = Ar()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = e.seg,
                        o = r.eventRange,
                        i = o.ui,
                        a = {
                            event: new zn(t, o.def, o.instance),
                            view: t.viewApi,
                            timeText: e.timeText,
                            textColor: i.textColor,
                            backgroundColor: i.backgroundColor,
                            borderColor: i.borderColor,
                            isDraggable: !e.disableDragging && gn(r, t),
                            isStartResizable: !e.disableResizing && mn(r, t),
                            isEndResizable: !e.disableResizing && yn(r),
                            isMirror: Boolean(
                                e.isDragging ||
                                    e.isResizing ||
                                    e.isDateSelecting
                            ),
                            isStart: Boolean(r.isStart),
                            isEnd: Boolean(r.isEnd),
                            isPast: Boolean(e.isPast),
                            isFuture: Boolean(e.isFuture),
                            isToday: Boolean(e.isToday),
                            isSelected: Boolean(e.isSelected),
                            isDragging: Boolean(e.isDragging),
                            isResizing: Boolean(e.isResizing),
                        },
                        s = Dn(a).concat(i.classNames);
                    return Hr(
                        uo,
                        {
                            hookProps: a,
                            classNames: n.eventClassNames,
                            content: n.eventContent,
                            defaultContent: e.defaultContent,
                            didMount: n.eventDidMount,
                            willUnmount: n.eventWillUnmount,
                            elRef: this.elRef,
                        },
                        function (t, n, r, o) {
                            return e.children(t, s.concat(n), r, o, a);
                        }
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    cn(this.elRef.current, this.props.seg);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props.seg;
                    t !== e.seg && cn(this.elRef.current, t);
                }),
                t
            );
        })(jr),
        ea = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = e.seg,
                        o = t.options.eventTimeFormat || e.defaultTimeFormat,
                        i = En(
                            n,
                            o,
                            t,
                            e.defaultDisplayEventTime,
                            e.defaultDisplayEventEnd
                        );
                    return Hr(
                        Qi,
                        {
                            seg: n,
                            timeText: i,
                            disableDragging: e.disableDragging,
                            disableResizing: e.disableResizing,
                            defaultContent: e.defaultContent || ta,
                            isDragging: e.isDragging,
                            isResizing: e.isResizing,
                            isDateSelecting: e.isDateSelecting,
                            isSelected: e.isSelected,
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                        },
                        function (t, o, i, a, s) {
                            return Hr(
                                "a",
                                r(
                                    {
                                        className: e.extraClassNames
                                            .concat(o)
                                            .join(" "),
                                        style: {
                                            borderColor: s.borderColor,
                                            backgroundColor: s.backgroundColor,
                                        },
                                        ref: t,
                                    },
                                    (function (e) {
                                        var t = e.eventRange.def.url;
                                        return t ? { href: t } : {};
                                    })(n)
                                ),
                                Hr(
                                    "div",
                                    {
                                        className: "fc-event-main",
                                        ref: i,
                                        style: { color: s.textColor },
                                    },
                                    a
                                ),
                                s.isStartResizable &&
                                    Hr("div", {
                                        className:
                                            "fc-event-resizer fc-event-resizer-start",
                                    }),
                                s.isEndResizable &&
                                    Hr("div", {
                                        className:
                                            "fc-event-resizer fc-event-resizer-end",
                                    })
                            );
                        }
                    );
                }),
                t
            );
        })(jr);
    function ta(e) {
        return Hr(
            "div",
            { className: "fc-event-main-frame" },
            e.timeText && Hr("div", { className: "fc-event-time" }, e.timeText),
            Hr(
                "div",
                { className: "fc-event-title-container" },
                Hr(
                    "div",
                    { className: "fc-event-title fc-sticky" },
                    e.event.title || Hr(Ur, null, " ")
                )
            )
        );
    }
    var na = function (e) {
            return Hr(zr.Consumer, null, function (t) {
                var n = t.options,
                    r = {
                        isAxis: e.isAxis,
                        date: t.dateEnv.toDate(e.date),
                        view: t.viewApi,
                    };
                return Hr(
                    uo,
                    {
                        hookProps: r,
                        classNames: n.nowIndicatorClassNames,
                        content: n.nowIndicatorContent,
                        didMount: n.nowIndicatorDidMount,
                        willUnmount: n.nowIndicatorWillUnmount,
                    },
                    e.children
                );
            });
        },
        ra = St({ day: "numeric" }),
        oa = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.refineHookProps = at(aa)),
                    (t.normalizeClassNames = vo()),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = this.refineHookProps({
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            showDayNumber: e.showDayNumber,
                            extraProps: e.extraHookProps,
                            viewApi: t.viewApi,
                            dateEnv: t.dateEnv,
                        }),
                        o = vr(r, t.theme).concat(
                            r.isDisabled
                                ? []
                                : this.normalizeClassNames(
                                      n.dayCellClassNames,
                                      r
                                  )
                        ),
                        i = r.isDisabled ? {} : { "data-date": tt(e.date) };
                    return Hr(
                        ho,
                        {
                            hookProps: r,
                            didMount: n.dayCellDidMount,
                            willUnmount: n.dayCellWillUnmount,
                            elRef: e.elRef,
                        },
                        function (t) {
                            return e.children(t, o, i, r.isDisabled);
                        }
                    );
                }),
                t
            );
        })(jr),
        ia = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = aa({
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            showDayNumber: e.showDayNumber,
                            extraProps: e.extraHookProps,
                            viewApi: t.viewApi,
                            dateEnv: t.dateEnv,
                        });
                    return Hr(
                        po,
                        {
                            hookProps: r,
                            content: n.dayCellContent,
                            defaultContent: e.defaultContent,
                        },
                        e.children
                    );
                }),
                t
            );
        })(jr);
    function aa(e) {
        var t = e.date,
            n = e.dateEnv,
            o = hr(t, e.todayRange, null, e.dateProfile);
        return r(
            r(r({ date: n.toDate(t), view: e.viewApi }, o), {
                dayNumberText: e.showDayNumber ? n.format(t, ra) : "",
            }),
            e.extraProps
        );
    }
    function sa(e) {
        return Hr("div", { className: "fc-" + e });
    }
    var la = function (e) {
        return Hr(
            Qi,
            {
                defaultContent: ua,
                seg: e.seg,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: !1,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
            },
            function (e, t, n, r, o) {
                return Hr(
                    "div",
                    {
                        ref: e,
                        className: ["fc-bg-event"].concat(t).join(" "),
                        style: { backgroundColor: o.backgroundColor },
                    },
                    r
                );
            }
        );
    };
    function ua(e) {
        return (
            e.event.title &&
            Hr("div", { className: "fc-event-title" }, e.event.title)
        );
    }
    var ca = function (e) {
        return Hr(zr.Consumer, null, function (t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return Hr(
                uo,
                {
                    hookProps: { num: a, text: s, date: o },
                    classNames: r.weekNumberClassNames,
                    content: r.weekNumberContent,
                    defaultContent: da,
                    didMount: r.weekNumberDidMount,
                    willUnmount: r.weekNumberWillUnmount,
                },
                e.children
            );
        });
    };
    function da(e) {
        return e.text;
    }
    var pa = (function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return (
                (o.isRendering = !1),
                (o.isRendered = !1),
                (o.currentClassNames = []),
                (o.customContentRenderId = 0),
                (o.handleAction = function (e) {
                    switch (e.type) {
                        case "SET_EVENT_DRAG":
                        case "SET_EVENT_RESIZE":
                            o.renderRunner.tryDrain();
                    }
                }),
                (o.handleData = function (e) {
                    (o.currentData = e),
                        o.renderRunner.request(e.calendarOptions.rerenderDelay);
                }),
                (o.handleRenderRequest = function () {
                    if (o.isRendering) {
                        o.isRendered = !0;
                        var e = o.currentData;
                        Or(
                            Hr(
                                bi,
                                {
                                    options: e.calendarOptions,
                                    theme: e.theme,
                                    emitter: e.emitter,
                                },
                                function (t, n, i, a) {
                                    return (
                                        o.setClassNames(t),
                                        o.setHeight(n),
                                        Hr(
                                            co.Provider,
                                            { value: o.customContentRenderId },
                                            Hr(
                                                Ei,
                                                r(
                                                    {
                                                        isHeightAuto: i,
                                                        forPrint: a,
                                                    },
                                                    e
                                                )
                                            )
                                        )
                                    );
                                }
                            ),
                            o.el
                        );
                    } else
                        o.isRendered &&
                            ((o.isRendered = !1),
                            Or(null, o.el),
                            o.setClassNames([]),
                            o.setHeight(""));
                    Wr();
                }),
                (o.el = t),
                (o.renderRunner = new Go(o.handleRenderRequest)),
                new Zo({
                    optionOverrides: n,
                    calendarApi: o,
                    onAction: o.handleAction,
                    onData: o.handleData,
                }),
                o
            );
        }
        return (
            n(t, e),
            Object.defineProperty(t.prototype, "view", {
                get: function () {
                    return this.currentData.viewApi;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.render = function () {
                var e = this.isRendering;
                e ? this.customContentRenderId++ : (this.isRendering = !0),
                    this.renderRunner.request(),
                    e && this.updateSize();
            }),
            (t.prototype.destroy = function () {
                this.isRendering &&
                    ((this.isRendering = !1), this.renderRunner.request());
            }),
            (t.prototype.updateSize = function () {
                e.prototype.updateSize.call(this), Wr();
            }),
            (t.prototype.batchRendering = function (e) {
                this.renderRunner.pause("batchRendering"),
                    e(),
                    this.renderRunner.resume("batchRendering");
            }),
            (t.prototype.pauseRendering = function () {
                this.renderRunner.pause("pauseRendering");
            }),
            (t.prototype.resumeRendering = function () {
                this.renderRunner.resume("pauseRendering", !0);
            }),
            (t.prototype.resetOptions = function (e, t) {
                this.currentDataManager.resetOptions(e, t);
            }),
            (t.prototype.setClassNames = function (e) {
                if (!ot(e, this.currentClassNames)) {
                    for (
                        var t = this.el.classList,
                            n = 0,
                            r = this.currentClassNames;
                        n < r.length;
                        n++
                    ) {
                        var o = r[n];
                        t.remove(o);
                    }
                    for (var i = 0, a = e; i < a.length; i++) {
                        o = a[i];
                        t.add(o);
                    }
                    this.currentClassNames = e;
                }
            }),
            (t.prototype.setHeight = function (e) {
                G(this.el, "height", e);
            }),
            t
        );
    })(Vn);
    di.touchMouseIgnoreWait = 500;
    var fa = 0,
        ha = 0,
        va = !1,
        ga = (function () {
            function e(e) {
                var t = this;
                (this.subjectEl = null),
                    (this.selector = ""),
                    (this.handleSelector = ""),
                    (this.shouldIgnoreMove = !1),
                    (this.shouldWatchScroll = !0),
                    (this.isDragging = !1),
                    (this.isTouchDragging = !1),
                    (this.wasTouchScroll = !1),
                    (this.handleMouseDown = function (e) {
                        if (
                            !t.shouldIgnoreMouse() &&
                            (function (e) {
                                return 0 === e.button && !e.ctrlKey;
                            })(e) &&
                            t.tryStart(e)
                        ) {
                            var n = t.createEventFromMouse(e, !0);
                            t.emitter.trigger("pointerdown", n),
                                t.initScrollWatch(n),
                                t.shouldIgnoreMove ||
                                    document.addEventListener(
                                        "mousemove",
                                        t.handleMouseMove
                                    ),
                                document.addEventListener(
                                    "mouseup",
                                    t.handleMouseUp
                                );
                        }
                    }),
                    (this.handleMouseMove = function (e) {
                        var n = t.createEventFromMouse(e);
                        t.recordCoords(n), t.emitter.trigger("pointermove", n);
                    }),
                    (this.handleMouseUp = function (e) {
                        document.removeEventListener(
                            "mousemove",
                            t.handleMouseMove
                        ),
                            document.removeEventListener(
                                "mouseup",
                                t.handleMouseUp
                            ),
                            t.emitter.trigger(
                                "pointerup",
                                t.createEventFromMouse(e)
                            ),
                            t.cleanup();
                    }),
                    (this.handleTouchStart = function (e) {
                        if (t.tryStart(e)) {
                            t.isTouchDragging = !0;
                            var n = t.createEventFromTouch(e, !0);
                            t.emitter.trigger("pointerdown", n),
                                t.initScrollWatch(n);
                            var r = e.target;
                            t.shouldIgnoreMove ||
                                r.addEventListener(
                                    "touchmove",
                                    t.handleTouchMove
                                ),
                                r.addEventListener(
                                    "touchend",
                                    t.handleTouchEnd
                                ),
                                r.addEventListener(
                                    "touchcancel",
                                    t.handleTouchEnd
                                ),
                                window.addEventListener(
                                    "scroll",
                                    t.handleTouchScroll,
                                    !0
                                );
                        }
                    }),
                    (this.handleTouchMove = function (e) {
                        var n = t.createEventFromTouch(e);
                        t.recordCoords(n), t.emitter.trigger("pointermove", n);
                    }),
                    (this.handleTouchEnd = function (e) {
                        if (t.isDragging) {
                            var n = e.target;
                            n.removeEventListener(
                                "touchmove",
                                t.handleTouchMove
                            ),
                                n.removeEventListener(
                                    "touchend",
                                    t.handleTouchEnd
                                ),
                                n.removeEventListener(
                                    "touchcancel",
                                    t.handleTouchEnd
                                ),
                                window.removeEventListener(
                                    "scroll",
                                    t.handleTouchScroll,
                                    !0
                                ),
                                t.emitter.trigger(
                                    "pointerup",
                                    t.createEventFromTouch(e)
                                ),
                                t.cleanup(),
                                (t.isTouchDragging = !1),
                                fa++,
                                setTimeout(function () {
                                    fa--;
                                }, di.touchMouseIgnoreWait);
                        }
                    }),
                    (this.handleTouchScroll = function () {
                        t.wasTouchScroll = !0;
                    }),
                    (this.handleScroll = function (e) {
                        if (!t.shouldIgnoreMove) {
                            var n =
                                    window.pageXOffset -
                                    t.prevScrollX +
                                    t.prevPageX,
                                r =
                                    window.pageYOffset -
                                    t.prevScrollY +
                                    t.prevPageY;
                            t.emitter.trigger("pointermove", {
                                origEvent: e,
                                isTouch: t.isTouchDragging,
                                subjectEl: t.subjectEl,
                                pageX: n,
                                pageY: r,
                                deltaX: n - t.origPageX,
                                deltaY: r - t.origPageY,
                            });
                        }
                    }),
                    (this.containerEl = e),
                    (this.emitter = new kr()),
                    e.addEventListener("mousedown", this.handleMouseDown),
                    e.addEventListener("touchstart", this.handleTouchStart, {
                        passive: !0,
                    }),
                    ha++ ||
                        window.addEventListener("touchmove", ma, {
                            passive: !1,
                        });
            }
            return (
                (e.prototype.destroy = function () {
                    this.containerEl.removeEventListener(
                        "mousedown",
                        this.handleMouseDown
                    ),
                        this.containerEl.removeEventListener(
                            "touchstart",
                            this.handleTouchStart,
                            { passive: !0 }
                        ),
                        --ha ||
                            window.removeEventListener("touchmove", ma, {
                                passive: !1,
                            });
                }),
                (e.prototype.tryStart = function (e) {
                    var t = this.querySubjectEl(e),
                        n = e.target;
                    return (
                        !(
                            !t ||
                            (this.handleSelector && !V(n, this.handleSelector))
                        ) &&
                        ((this.subjectEl = t),
                        (this.isDragging = !0),
                        (this.wasTouchScroll = !1),
                        !0)
                    );
                }),
                (e.prototype.cleanup = function () {
                    (va = !1),
                        (this.isDragging = !1),
                        (this.subjectEl = null),
                        this.destroyScrollWatch();
                }),
                (e.prototype.querySubjectEl = function (e) {
                    return this.selector
                        ? V(e.target, this.selector)
                        : this.containerEl;
                }),
                (e.prototype.shouldIgnoreMouse = function () {
                    return fa || this.isTouchDragging;
                }),
                (e.prototype.cancelTouchScroll = function () {
                    this.isDragging && (va = !0);
                }),
                (e.prototype.initScrollWatch = function (e) {
                    this.shouldWatchScroll &&
                        (this.recordCoords(e),
                        window.addEventListener(
                            "scroll",
                            this.handleScroll,
                            !0
                        ));
                }),
                (e.prototype.recordCoords = function (e) {
                    this.shouldWatchScroll &&
                        ((this.prevPageX = e.pageX),
                        (this.prevPageY = e.pageY),
                        (this.prevScrollX = window.pageXOffset),
                        (this.prevScrollY = window.pageYOffset));
                }),
                (e.prototype.destroyScrollWatch = function () {
                    this.shouldWatchScroll &&
                        window.removeEventListener(
                            "scroll",
                            this.handleScroll,
                            !0
                        );
                }),
                (e.prototype.createEventFromMouse = function (e, t) {
                    var n = 0,
                        r = 0;
                    return (
                        t
                            ? ((this.origPageX = e.pageX),
                              (this.origPageY = e.pageY))
                            : ((n = e.pageX - this.origPageX),
                              (r = e.pageY - this.origPageY)),
                        {
                            origEvent: e,
                            isTouch: !1,
                            subjectEl: this.subjectEl,
                            pageX: e.pageX,
                            pageY: e.pageY,
                            deltaX: n,
                            deltaY: r,
                        }
                    );
                }),
                (e.prototype.createEventFromTouch = function (e, t) {
                    var n,
                        r,
                        o = e.touches,
                        i = 0,
                        a = 0;
                    return (
                        o && o.length
                            ? ((n = o[0].pageX), (r = o[0].pageY))
                            : ((n = e.pageX), (r = e.pageY)),
                        t
                            ? ((this.origPageX = n), (this.origPageY = r))
                            : ((i = n - this.origPageX),
                              (a = r - this.origPageY)),
                        {
                            origEvent: e,
                            isTouch: !0,
                            subjectEl: this.subjectEl,
                            pageX: n,
                            pageY: r,
                            deltaX: i,
                            deltaY: a,
                        }
                    );
                }),
                e
            );
        })();
    function ma(e) {
        va && e.preventDefault();
    }
    var ya = (function () {
            function e() {
                (this.isVisible = !1),
                    (this.sourceEl = null),
                    (this.mirrorEl = null),
                    (this.sourceElRect = null),
                    (this.parentNode = document.body),
                    (this.zIndex = 9999),
                    (this.revertDuration = 0);
            }
            return (
                (e.prototype.start = function (e, t, n) {
                    (this.sourceEl = e),
                        (this.sourceElRect =
                            this.sourceEl.getBoundingClientRect()),
                        (this.origScreenX = t - window.pageXOffset),
                        (this.origScreenY = n - window.pageYOffset),
                        (this.deltaX = 0),
                        (this.deltaY = 0),
                        this.updateElPosition();
                }),
                (e.prototype.handleMove = function (e, t) {
                    (this.deltaX = e - window.pageXOffset - this.origScreenX),
                        (this.deltaY =
                            t - window.pageYOffset - this.origScreenY),
                        this.updateElPosition();
                }),
                (e.prototype.setIsVisible = function (e) {
                    e
                        ? this.isVisible ||
                          (this.mirrorEl && (this.mirrorEl.style.display = ""),
                          (this.isVisible = e),
                          this.updateElPosition())
                        : this.isVisible &&
                          (this.mirrorEl &&
                              (this.mirrorEl.style.display = "none"),
                          (this.isVisible = e));
                }),
                (e.prototype.stop = function (e, t) {
                    var n = this,
                        r = function () {
                            n.cleanup(), t();
                        };
                    e &&
                    this.mirrorEl &&
                    this.isVisible &&
                    this.revertDuration &&
                    (this.deltaX || this.deltaY)
                        ? this.doRevertAnimation(r, this.revertDuration)
                        : setTimeout(r, 0);
                }),
                (e.prototype.doRevertAnimation = function (e, t) {
                    var n = this.mirrorEl,
                        r = this.sourceEl.getBoundingClientRect();
                    (n.style.transition = "top " + t + "ms,left " + t + "ms"),
                        j(n, { left: r.left, top: r.top }),
                        K(n, function () {
                            (n.style.transition = ""), e();
                        });
                }),
                (e.prototype.cleanup = function () {
                    this.mirrorEl && (W(this.mirrorEl), (this.mirrorEl = null)),
                        (this.sourceEl = null);
                }),
                (e.prototype.updateElPosition = function () {
                    this.sourceEl &&
                        this.isVisible &&
                        j(this.getMirrorEl(), {
                            left: this.sourceElRect.left + this.deltaX,
                            top: this.sourceElRect.top + this.deltaY,
                        });
                }),
                (e.prototype.getMirrorEl = function () {
                    var e = this.sourceElRect,
                        t = this.mirrorEl;
                    return (
                        t ||
                            ((t = this.mirrorEl =
                                this.sourceEl.cloneNode(!0)).classList.add(
                                "fc-unselectable"
                            ),
                            t.classList.add("fc-event-dragging"),
                            j(t, {
                                position: "fixed",
                                zIndex: this.zIndex,
                                visibility: "",
                                boxSizing: "border-box",
                                width: e.right - e.left,
                                height: e.bottom - e.top,
                                right: "auto",
                                bottom: "auto",
                                margin: 0,
                            }),
                            this.parentNode.appendChild(t)),
                        t
                    );
                }),
                e
            );
        })(),
        Ea = (function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return (
                    (r.handleScroll = function () {
                        (r.scrollTop = r.scrollController.getScrollTop()),
                            (r.scrollLeft = r.scrollController.getScrollLeft()),
                            r.handleScrollChange();
                    }),
                    (r.scrollController = t),
                    (r.doesListening = n),
                    (r.scrollTop = r.origScrollTop = t.getScrollTop()),
                    (r.scrollLeft = r.origScrollLeft = t.getScrollLeft()),
                    (r.scrollWidth = t.getScrollWidth()),
                    (r.scrollHeight = t.getScrollHeight()),
                    (r.clientWidth = t.getClientWidth()),
                    (r.clientHeight = t.getClientHeight()),
                    (r.clientRect = r.computeClientRect()),
                    r.doesListening &&
                        r
                            .getEventTarget()
                            .addEventListener("scroll", r.handleScroll),
                    r
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.doesListening &&
                        this.getEventTarget().removeEventListener(
                            "scroll",
                            this.handleScroll
                        );
                }),
                (t.prototype.getScrollTop = function () {
                    return this.scrollTop;
                }),
                (t.prototype.getScrollLeft = function () {
                    return this.scrollLeft;
                }),
                (t.prototype.setScrollTop = function (e) {
                    this.scrollController.setScrollTop(e),
                        this.doesListening ||
                            ((this.scrollTop = Math.max(
                                Math.min(e, this.getMaxScrollTop()),
                                0
                            )),
                            this.handleScrollChange());
                }),
                (t.prototype.setScrollLeft = function (e) {
                    this.scrollController.setScrollLeft(e),
                        this.doesListening ||
                            ((this.scrollLeft = Math.max(
                                Math.min(e, this.getMaxScrollLeft()),
                                0
                            )),
                            this.handleScrollChange());
                }),
                (t.prototype.getClientWidth = function () {
                    return this.clientWidth;
                }),
                (t.prototype.getClientHeight = function () {
                    return this.clientHeight;
                }),
                (t.prototype.getScrollWidth = function () {
                    return this.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return this.scrollHeight;
                }),
                (t.prototype.handleScrollChange = function () {}),
                t
            );
        })(xr),
        Sa = (function (e) {
            function t(t, n) {
                return e.call(this, new _r(t), n) || this;
            }
            return (
                n(t, e),
                (t.prototype.getEventTarget = function () {
                    return this.scrollController.el;
                }),
                (t.prototype.computeClientRect = function () {
                    return Cr(this.scrollController.el);
                }),
                t
            );
        })(Ea),
        Da = (function (e) {
            function t(t) {
                return e.call(this, new Ir(), t) || this;
            }
            return (
                n(t, e),
                (t.prototype.getEventTarget = function () {
                    return window;
                }),
                (t.prototype.computeClientRect = function () {
                    return {
                        left: this.scrollLeft,
                        right: this.scrollLeft + this.clientWidth,
                        top: this.scrollTop,
                        bottom: this.scrollTop + this.clientHeight,
                    };
                }),
                (t.prototype.handleScrollChange = function () {
                    this.clientRect = this.computeClientRect();
                }),
                t
            );
        })(Ea),
        ba = "function" == typeof performance ? performance.now : Date.now,
        Ca = (function () {
            function e() {
                var e = this;
                (this.isEnabled = !0),
                    (this.scrollQuery = [window, ".fc-scroller"]),
                    (this.edgeThreshold = 50),
                    (this.maxVelocity = 300),
                    (this.pointerScreenX = null),
                    (this.pointerScreenY = null),
                    (this.isAnimating = !1),
                    (this.scrollCaches = null),
                    (this.everMovedUp = !1),
                    (this.everMovedDown = !1),
                    (this.everMovedLeft = !1),
                    (this.everMovedRight = !1),
                    (this.animate = function () {
                        if (e.isAnimating) {
                            var t = e.computeBestEdge(
                                e.pointerScreenX + window.pageXOffset,
                                e.pointerScreenY + window.pageYOffset
                            );
                            if (t) {
                                var n = ba();
                                e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                                    e.requestAnimation(n);
                            } else e.isAnimating = !1;
                        }
                    });
            }
            return (
                (e.prototype.start = function (e, t) {
                    this.isEnabled &&
                        ((this.scrollCaches = this.buildCaches()),
                        (this.pointerScreenX = null),
                        (this.pointerScreenY = null),
                        (this.everMovedUp = !1),
                        (this.everMovedDown = !1),
                        (this.everMovedLeft = !1),
                        (this.everMovedRight = !1),
                        this.handleMove(e, t));
                }),
                (e.prototype.handleMove = function (e, t) {
                    if (this.isEnabled) {
                        var n = e - window.pageXOffset,
                            r = t - window.pageYOffset,
                            o =
                                null === this.pointerScreenY
                                    ? 0
                                    : r - this.pointerScreenY,
                            i =
                                null === this.pointerScreenX
                                    ? 0
                                    : n - this.pointerScreenX;
                        o < 0
                            ? (this.everMovedUp = !0)
                            : o > 0 && (this.everMovedDown = !0),
                            i < 0
                                ? (this.everMovedLeft = !0)
                                : i > 0 && (this.everMovedRight = !0),
                            (this.pointerScreenX = n),
                            (this.pointerScreenY = r),
                            this.isAnimating ||
                                ((this.isAnimating = !0),
                                this.requestAnimation(ba()));
                    }
                }),
                (e.prototype.stop = function () {
                    if (this.isEnabled) {
                        this.isAnimating = !1;
                        for (
                            var e = 0, t = this.scrollCaches;
                            e < t.length;
                            e++
                        ) {
                            t[e].destroy();
                        }
                        this.scrollCaches = null;
                    }
                }),
                (e.prototype.requestAnimation = function (e) {
                    (this.msSinceRequest = e),
                        requestAnimationFrame(this.animate);
                }),
                (e.prototype.handleSide = function (e, t) {
                    var n = e.scrollCache,
                        r = this.edgeThreshold,
                        o = r - e.distance,
                        i = ((o * o) / (r * r)) * this.maxVelocity * t,
                        a = 1;
                    switch (e.name) {
                        case "left":
                            a = -1;
                        case "right":
                            n.setScrollLeft(n.getScrollLeft() + i * a);
                            break;
                        case "top":
                            a = -1;
                        case "bottom":
                            n.setScrollTop(n.getScrollTop() + i * a);
                    }
                }),
                (e.prototype.computeBestEdge = function (e, t) {
                    for (
                        var n = this.edgeThreshold,
                            r = null,
                            o = 0,
                            i = this.scrollCaches;
                        o < i.length;
                        o++
                    ) {
                        var a = i[o],
                            s = a.clientRect,
                            l = e - s.left,
                            u = s.right - e,
                            c = t - s.top,
                            d = s.bottom - t;
                        l >= 0 &&
                            u >= 0 &&
                            c >= 0 &&
                            d >= 0 &&
                            (c <= n &&
                                this.everMovedUp &&
                                a.canScrollUp() &&
                                (!r || r.distance > c) &&
                                (r = {
                                    scrollCache: a,
                                    name: "top",
                                    distance: c,
                                }),
                            d <= n &&
                                this.everMovedDown &&
                                a.canScrollDown() &&
                                (!r || r.distance > d) &&
                                (r = {
                                    scrollCache: a,
                                    name: "bottom",
                                    distance: d,
                                }),
                            l <= n &&
                                this.everMovedLeft &&
                                a.canScrollLeft() &&
                                (!r || r.distance > l) &&
                                (r = {
                                    scrollCache: a,
                                    name: "left",
                                    distance: l,
                                }),
                            u <= n &&
                                this.everMovedRight &&
                                a.canScrollRight() &&
                                (!r || r.distance > u) &&
                                (r = {
                                    scrollCache: a,
                                    name: "right",
                                    distance: u,
                                }));
                    }
                    return r;
                }),
                (e.prototype.buildCaches = function () {
                    return this.queryScrollEls().map(function (e) {
                        return e === window ? new Da(!1) : new Sa(e, !1);
                    });
                }),
                (e.prototype.queryScrollEls = function () {
                    for (
                        var e = [], t = 0, n = this.scrollQuery;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        "object" == typeof r
                            ? e.push(r)
                            : e.push.apply(
                                  e,
                                  Array.prototype.slice.call(
                                      document.querySelectorAll(r)
                                  )
                              );
                    }
                    return e;
                }),
                e
            );
        })(),
        wa = (function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                (r.delay = null),
                    (r.minDistance = 0),
                    (r.touchScrollAllowed = !0),
                    (r.mirrorNeedsRevert = !1),
                    (r.isInteracting = !1),
                    (r.isDragging = !1),
                    (r.isDelayEnded = !1),
                    (r.isDistanceSurpassed = !1),
                    (r.delayTimeoutId = null),
                    (r.onPointerDown = function (e) {
                        r.isDragging ||
                            ((r.isInteracting = !0),
                            (r.isDelayEnded = !1),
                            (r.isDistanceSurpassed = !1),
                            te(document.body),
                            re(document.body),
                            e.isTouch || e.origEvent.preventDefault(),
                            r.emitter.trigger("pointerdown", e),
                            r.isInteracting &&
                                !r.pointer.shouldIgnoreMove &&
                                (r.mirror.setIsVisible(!1),
                                r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                                r.startDelay(e),
                                r.minDistance || r.handleDistanceSurpassed(e)));
                    }),
                    (r.onPointerMove = function (e) {
                        if (r.isInteracting) {
                            if (
                                (r.emitter.trigger("pointermove", e),
                                !r.isDistanceSurpassed)
                            ) {
                                var t = r.minDistance,
                                    n = e.deltaX,
                                    o = e.deltaY;
                                n * n + o * o >= t * t &&
                                    r.handleDistanceSurpassed(e);
                            }
                            r.isDragging &&
                                ("scroll" !== e.origEvent.type &&
                                    (r.mirror.handleMove(e.pageX, e.pageY),
                                    r.autoScroller.handleMove(
                                        e.pageX,
                                        e.pageY
                                    )),
                                r.emitter.trigger("dragmove", e));
                        }
                    }),
                    (r.onPointerUp = function (e) {
                        r.isInteracting &&
                            ((r.isInteracting = !1),
                            ne(document.body),
                            oe(document.body),
                            r.emitter.trigger("pointerup", e),
                            r.isDragging &&
                                (r.autoScroller.stop(), r.tryStopDrag(e)),
                            r.delayTimeoutId &&
                                (clearTimeout(r.delayTimeoutId),
                                (r.delayTimeoutId = null)));
                    });
                var o = (r.pointer = new ga(t));
                return (
                    o.emitter.on("pointerdown", r.onPointerDown),
                    o.emitter.on("pointermove", r.onPointerMove),
                    o.emitter.on("pointerup", r.onPointerUp),
                    n && (o.selector = n),
                    (r.mirror = new ya()),
                    (r.autoScroller = new Ca()),
                    r
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.pointer.destroy(), this.onPointerUp({});
                }),
                (t.prototype.startDelay = function (e) {
                    var t = this;
                    "number" == typeof this.delay
                        ? (this.delayTimeoutId = setTimeout(function () {
                              (t.delayTimeoutId = null), t.handleDelayEnd(e);
                          }, this.delay))
                        : this.handleDelayEnd(e);
                }),
                (t.prototype.handleDelayEnd = function (e) {
                    (this.isDelayEnded = !0), this.tryStartDrag(e);
                }),
                (t.prototype.handleDistanceSurpassed = function (e) {
                    (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
                }),
                (t.prototype.tryStartDrag = function (e) {
                    this.isDelayEnded &&
                        this.isDistanceSurpassed &&
                        ((this.pointer.wasTouchScroll &&
                            !this.touchScrollAllowed) ||
                            ((this.isDragging = !0),
                            (this.mirrorNeedsRevert = !1),
                            this.autoScroller.start(e.pageX, e.pageY),
                            this.emitter.trigger("dragstart", e),
                            !1 === this.touchScrollAllowed &&
                                this.pointer.cancelTouchScroll()));
                }),
                (t.prototype.tryStopDrag = function (e) {
                    this.mirror.stop(
                        this.mirrorNeedsRevert,
                        this.stopDrag.bind(this, e)
                    );
                }),
                (t.prototype.stopDrag = function (e) {
                    (this.isDragging = !1), this.emitter.trigger("dragend", e);
                }),
                (t.prototype.setIgnoreMove = function (e) {
                    this.pointer.shouldIgnoreMove = e;
                }),
                (t.prototype.setMirrorIsVisible = function (e) {
                    this.mirror.setIsVisible(e);
                }),
                (t.prototype.setMirrorNeedsRevert = function (e) {
                    this.mirrorNeedsRevert = e;
                }),
                (t.prototype.setAutoScrollEnabled = function (e) {
                    this.autoScroller.isEnabled = e;
                }),
                t
            );
        })(ci),
        Ra = (function () {
            function e(e) {
                (this.origRect = wr(e)),
                    (this.scrollCaches = Rr(e).map(function (e) {
                        return new Sa(e, !0);
                    }));
            }
            return (
                (e.prototype.destroy = function () {
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy();
                    }
                }),
                (e.prototype.computeLeft = function () {
                    for (
                        var e = this.origRect.left,
                            t = 0,
                            n = this.scrollCaches;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        e += r.origScrollLeft - r.getScrollLeft();
                    }
                    return e;
                }),
                (e.prototype.computeTop = function () {
                    for (
                        var e = this.origRect.top, t = 0, n = this.scrollCaches;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        e += r.origScrollTop - r.getScrollTop();
                    }
                    return e;
                }),
                (e.prototype.isWithinClipping = function (e, t) {
                    for (
                        var n,
                            r,
                            o = { left: e, top: t },
                            i = 0,
                            a = this.scrollCaches;
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        if (
                            ((n = s.getEventTarget()),
                            (r = void 0),
                            "HTML" !== (r = n.tagName) &&
                                "BODY" !== r &&
                                !ir(o, s.clientRect))
                        )
                            return !1;
                    }
                    return !0;
                }),
                e
            );
        })();
    var Ta = (function () {
        function e(e, t) {
            var n = this;
            (this.useSubjectCenter = !1),
                (this.requireInitial = !0),
                (this.initialHit = null),
                (this.movingHit = null),
                (this.finalHit = null),
                (this.handlePointerDown = function (e) {
                    var t = n.dragging;
                    (n.initialHit = null),
                        (n.movingHit = null),
                        (n.finalHit = null),
                        n.prepareHits(),
                        n.processFirstCoord(e),
                        n.initialHit || !n.requireInitial
                            ? (t.setIgnoreMove(!1),
                              n.emitter.trigger("pointerdown", e))
                            : t.setIgnoreMove(!0);
                }),
                (this.handleDragStart = function (e) {
                    n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
                }),
                (this.handleDragMove = function (e) {
                    n.emitter.trigger("dragmove", e), n.handleMove(e);
                }),
                (this.handlePointerUp = function (e) {
                    n.releaseHits(), n.emitter.trigger("pointerup", e);
                }),
                (this.handleDragEnd = function (e) {
                    n.movingHit && n.emitter.trigger("hitupdate", null, !0, e),
                        (n.finalHit = n.movingHit),
                        (n.movingHit = null),
                        n.emitter.trigger("dragend", e);
                }),
                (this.droppableStore = t),
                e.emitter.on("pointerdown", this.handlePointerDown),
                e.emitter.on("dragstart", this.handleDragStart),
                e.emitter.on("dragmove", this.handleDragMove),
                e.emitter.on("pointerup", this.handlePointerUp),
                e.emitter.on("dragend", this.handleDragEnd),
                (this.dragging = e),
                (this.emitter = new kr());
        }
        return (
            (e.prototype.processFirstCoord = function (e) {
                var t,
                    n = { left: e.pageX, top: e.pageY },
                    r = n,
                    o = e.subjectEl;
                o !== document && (r = sr(r, (t = wr(o))));
                var i = (this.initialHit = this.queryHitForOffset(
                    r.left,
                    r.top
                ));
                if (i) {
                    if (this.useSubjectCenter && t) {
                        var a = ar(t, i.rect);
                        a && (r = lr(a));
                    }
                    this.coordAdjust = ur(r, n);
                } else this.coordAdjust = { left: 0, top: 0 };
            }),
            (e.prototype.handleMove = function (e, t) {
                var n = this.queryHitForOffset(
                    e.pageX + this.coordAdjust.left,
                    e.pageY + this.coordAdjust.top
                );
                (!t && ka(this.movingHit, n)) ||
                    ((this.movingHit = n),
                    this.emitter.trigger("hitupdate", n, !1, e));
            }),
            (e.prototype.prepareHits = function () {
                this.offsetTrackers = Oe(this.droppableStore, function (e) {
                    return e.component.prepareHits(), new Ra(e.el);
                });
            }),
            (e.prototype.releaseHits = function () {
                var e = this.offsetTrackers;
                for (var t in e) e[t].destroy();
                this.offsetTrackers = {};
            }),
            (e.prototype.queryHitForOffset = function (e, t) {
                var n = this.droppableStore,
                    r = this.offsetTrackers,
                    o = null;
                for (var i in n) {
                    var a = n[i].component,
                        s = r[i];
                    if (s && s.isWithinClipping(e, t)) {
                        var l = s.computeLeft(),
                            u = s.computeTop(),
                            c = e - l,
                            d = t - u,
                            p = s.origRect,
                            f = p.right - p.left,
                            h = p.bottom - p.top;
                        if (c >= 0 && c < f && d >= 0 && d < h) {
                            var v = a.queryHit(c, d, f, h),
                                g = a.context.getCurrentData().dateProfile;
                            v &&
                                an(g.activeRange, v.dateSpan.range) &&
                                (!o || v.layer > o.layer) &&
                                ((v.rect.left += l),
                                (v.rect.right += l),
                                (v.rect.top += u),
                                (v.rect.bottom += u),
                                (o = v));
                        }
                    }
                }
                return o;
            }),
            e
        );
    })();
    function ka(e, t) {
        return (
            (!e && !t) ||
            (Boolean(e) === Boolean(t) && Rn(e.dateSpan, t.dateSpan))
        );
    }
    function Ma(e, t) {
        for (
            var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t));
        }
        return (
            r(
                i,
                ((n = e),
                {
                    date: (o = t.dateEnv).toDate(n.range.start),
                    dateStr: o.formatIso(n.range.start, { omitTime: n.allDay }),
                    allDay: n.allDay,
                })
            ),
            i
        );
    }
    var xa = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = e.origEvent.target;
                    t.setIgnoreMove(!n.component.isValidDateDownEl(r));
                }),
                    (n.handleDragEnd = function (e) {
                        var t = n.component;
                        if (!n.dragging.pointer.wasTouchScroll) {
                            var o = n.hitDragging,
                                i = o.initialHit,
                                a = o.finalHit;
                            if (i && a && ka(i, a)) {
                                var s = t.context,
                                    l = r(r({}, Ma(i.dateSpan, s)), {
                                        dayEl: i.dayEl,
                                        jsEvent: e.origEvent,
                                        view: s.viewApi || s.calendarApi.view,
                                    });
                                s.emitter.trigger("dateClick", l);
                            }
                        }
                    }),
                    (n.dragging = new wa(t.el)),
                    (n.dragging.autoScroller.isEnabled = !1);
                var o = (n.hitDragging = new Ta(n.dragging, li(t)));
                return (
                    o.emitter.on("pointerdown", n.handlePointerDown),
                    o.emitter.on("dragend", n.handleDragEnd),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                t
            );
        })(ai),
        _a = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.dragSelection = null),
                    (n.handlePointerDown = function (e) {
                        var t = n,
                            r = t.component,
                            o = t.dragging,
                            i =
                                r.context.options.selectable &&
                                r.isValidDateDownEl(e.origEvent.target);
                        o.setIgnoreMove(!i),
                            (o.delay = e.isTouch
                                ? (function (e) {
                                      var t = e.context.options,
                                          n = t.selectLongPressDelay;
                                      null == n && (n = t.longPressDelay);
                                      return n;
                                  })(r)
                                : null);
                    }),
                    (n.handleDragStart = function (e) {
                        n.component.context.calendarApi.unselect(e);
                    }),
                    (n.handleHitUpdate = function (e, t) {
                        var o = n.component.context,
                            i = null,
                            a = !1;
                        e &&
                            (((i = (function (e, t, n) {
                                var o = e.dateSpan,
                                    i = t.dateSpan,
                                    a = [
                                        o.range.start,
                                        o.range.end,
                                        i.range.start,
                                        i.range.end,
                                    ];
                                a.sort(ce);
                                for (
                                    var s = {}, l = 0, u = n;
                                    l < u.length;
                                    l++
                                ) {
                                    var c = (0, u[l])(e, t);
                                    if (!1 === c) return null;
                                    c && r(s, c);
                                }
                                return (
                                    (s.range = { start: a[0], end: a[3] }),
                                    (s.allDay = o.allDay),
                                    s
                                );
                            })(
                                n.hitDragging.initialHit,
                                e,
                                o.pluginHooks.dateSelectionTransformers
                            )) &&
                                n.component.isDateSelectionValid(i)) ||
                                ((a = !0), (i = null))),
                            i
                                ? o.dispatch({
                                      type: "SELECT_DATES",
                                      selection: i,
                                  })
                                : t || o.dispatch({ type: "UNSELECT_DATES" }),
                            a ? Q() : ee(),
                            t || (n.dragSelection = i);
                    }),
                    (n.handlePointerUp = function (e) {
                        n.dragSelection &&
                            (xn(n.dragSelection, e, n.component.context),
                            (n.dragSelection = null));
                    });
                var o = t.component.context.options,
                    i = (n.dragging = new wa(t.el));
                (i.touchScrollAllowed = !1),
                    (i.minDistance = o.selectMinDistance || 0),
                    (i.autoScroller.isEnabled = o.dragScroll);
                var a = (n.hitDragging = new Ta(n.dragging, li(t)));
                return (
                    a.emitter.on("pointerdown", n.handlePointerDown),
                    a.emitter.on("dragstart", n.handleDragStart),
                    a.emitter.on("hitupdate", n.handleHitUpdate),
                    a.emitter.on("pointerup", n.handlePointerUp),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                t
            );
        })(ai);
    var Ia = (function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            (o.subjectEl = null),
                (o.subjectSeg = null),
                (o.isDragging = !1),
                (o.eventRange = null),
                (o.relevantEvents = null),
                (o.receivingContext = null),
                (o.validMutation = null),
                (o.mutatedRelevantEvents = null),
                (o.handlePointerDown = function (e) {
                    var t = e.origEvent.target,
                        n = o,
                        r = n.component,
                        i = n.dragging,
                        a = i.mirror,
                        s = r.context.options,
                        l = r.context;
                    o.subjectEl = e.subjectEl;
                    var u = (o.subjectSeg = dn(e.subjectEl)),
                        c = (o.eventRange = u.eventRange).instance.instanceId;
                    (o.relevantEvents = Nt(l.getCurrentData().eventStore, c)),
                        (i.minDistance = e.isTouch
                            ? 0
                            : s.eventDragMinDistance),
                        (i.delay =
                            e.isTouch && c !== r.props.eventSelection
                                ? (function (e) {
                                      var t = e.context.options,
                                          n = t.eventLongPressDelay;
                                      null == n && (n = t.longPressDelay);
                                      return n;
                                  })(r)
                                : null),
                        (a.parentNode = V(t, ".fc")),
                        (a.revertDuration = s.dragRevertDuration);
                    var d = r.isValidSegDownEl(t) && !V(t, ".fc-event-resizer");
                    i.setIgnoreMove(!d),
                        (o.isDragging =
                            d &&
                            e.subjectEl.classList.contains(
                                "fc-event-draggable"
                            ));
                }),
                (o.handleDragStart = function (e) {
                    var t = o.component.context,
                        n = o.eventRange,
                        r = n.instance.instanceId;
                    e.isTouch
                        ? r !== o.component.props.eventSelection &&
                          t.dispatch({
                              type: "SELECT_EVENT",
                              eventInstanceId: r,
                          })
                        : t.dispatch({ type: "UNSELECT_EVENT" }),
                        o.isDragging &&
                            (t.calendarApi.unselect(e),
                            t.emitter.trigger("eventDragStart", {
                                el: o.subjectEl,
                                event: new zn(t, n.def, n.instance),
                                jsEvent: e.origEvent,
                                view: t.viewApi,
                            }));
                }),
                (o.handleHitUpdate = function (e, t) {
                    if (o.isDragging) {
                        var n = o.relevantEvents,
                            r = o.hitDragging.initialHit,
                            i = o.component.context,
                            a = null,
                            s = null,
                            l = null,
                            u = !1,
                            c = {
                                affectedEvents: n,
                                mutatedEvents: { defs: {}, instances: {} },
                                isEvent: !0,
                            };
                        if (e) {
                            var d = e.component,
                                p = (a = d.context).options;
                            i === a || (p.editable && p.droppable)
                                ? (s = (function (e, t, n) {
                                      var r = e.dateSpan,
                                          o = t.dateSpan,
                                          i = r.range.start,
                                          a = o.range.start,
                                          s = {};
                                      r.allDay !== o.allDay &&
                                          ((s.allDay = o.allDay),
                                          (s.hasEnd =
                                              t.component.context.options.allDayMaintainDuration),
                                          o.allDay && (i = be(i)));
                                      var l = Qt(
                                          i,
                                          a,
                                          e.component.context.dateEnv,
                                          e.component === t.component
                                              ? e.component.largeUnit
                                              : null
                                      );
                                      l.milliseconds && (s.allDay = !1);
                                      for (
                                          var u = {
                                                  datesDelta: l,
                                                  standardProps: s,
                                              },
                                              c = 0,
                                              d = n;
                                          c < d.length;
                                          c++
                                      ) {
                                          (0, d[c])(u, e, t);
                                      }
                                      return u;
                                  })(
                                      r,
                                      e,
                                      a.getCurrentData().pluginHooks
                                          .eventDragMutationMassagers
                                  )) &&
                                  ((l = Pn(
                                      n,
                                      a.getCurrentData().eventUiBases,
                                      s,
                                      a
                                  )),
                                  (c.mutatedEvents = l),
                                  d.isInteractionValid(c) ||
                                      ((u = !0),
                                      (s = null),
                                      (l = null),
                                      (c.mutatedEvents = {
                                          defs: {},
                                          instances: {},
                                      })))
                                : (a = null);
                        }
                        o.displayDrag(a, c),
                            u ? Q() : ee(),
                            t ||
                                (i === a && ka(r, e) && (s = null),
                                o.dragging.setMirrorNeedsRevert(!s),
                                o.dragging.setMirrorIsVisible(
                                    !e ||
                                        !document.querySelector(
                                            ".fc-event-mirror"
                                        )
                                ),
                                (o.receivingContext = a),
                                (o.validMutation = s),
                                (o.mutatedRelevantEvents = l));
                    }
                }),
                (o.handlePointerUp = function () {
                    o.isDragging || o.cleanup();
                }),
                (o.handleDragEnd = function (e) {
                    if (o.isDragging) {
                        var t = o.component.context,
                            n = t.viewApi,
                            i = o,
                            a = i.receivingContext,
                            s = i.validMutation,
                            l = o.eventRange.def,
                            u = o.eventRange.instance,
                            c = new zn(t, l, u),
                            d = o.relevantEvents,
                            p = o.mutatedRelevantEvents,
                            f = o.hitDragging.finalHit;
                        if (
                            (o.clearDrag(),
                            t.emitter.trigger("eventDragStop", {
                                el: o.subjectEl,
                                event: c,
                                jsEvent: e.origEvent,
                                view: n,
                            }),
                            s)
                        ) {
                            if (a === t) {
                                var h = new zn(
                                    t,
                                    p.defs[l.defId],
                                    u ? p.instances[u.instanceId] : null
                                );
                                t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: p,
                                });
                                for (
                                    var v = {
                                            oldEvent: c,
                                            event: h,
                                            relatedEvents: Bn(p, t, u),
                                            revert: function () {
                                                t.dispatch({
                                                    type: "MERGE_EVENTS",
                                                    eventStore: d,
                                                });
                                            },
                                        },
                                        g = {},
                                        m = 0,
                                        y =
                                            t.getCurrentData().pluginHooks
                                                .eventDropTransformers;
                                    m < y.length;
                                    m++
                                ) {
                                    var E = y[m];
                                    r(g, E(s, t));
                                }
                                t.emitter.trigger(
                                    "eventDrop",
                                    r(r(r({}, v), g), {
                                        el: e.subjectEl,
                                        delta: s.datesDelta,
                                        jsEvent: e.origEvent,
                                        view: n,
                                    })
                                ),
                                    t.emitter.trigger("eventChange", v);
                            } else if (a) {
                                var S = {
                                    event: c,
                                    relatedEvents: Bn(d, t, u),
                                    revert: function () {
                                        t.dispatch({
                                            type: "MERGE_EVENTS",
                                            eventStore: d,
                                        });
                                    },
                                };
                                t.emitter.trigger(
                                    "eventLeave",
                                    r(r({}, S), {
                                        draggedEl: e.subjectEl,
                                        view: n,
                                    })
                                ),
                                    t.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: d,
                                    }),
                                    t.emitter.trigger("eventRemove", S);
                                var D = p.defs[l.defId],
                                    b = p.instances[u.instanceId],
                                    C = new zn(a, D, b);
                                a.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: p,
                                });
                                var w = {
                                    event: C,
                                    relatedEvents: Bn(p, a, b),
                                    revert: function () {
                                        a.dispatch({
                                            type: "REMOVE_EVENTS",
                                            eventStore: p,
                                        });
                                    },
                                };
                                a.emitter.trigger("eventAdd", w),
                                    e.isTouch &&
                                        a.dispatch({
                                            type: "SELECT_EVENT",
                                            eventInstanceId: u.instanceId,
                                        }),
                                    a.emitter.trigger(
                                        "drop",
                                        r(r({}, Ma(f.dateSpan, a)), {
                                            draggedEl: e.subjectEl,
                                            jsEvent: e.origEvent,
                                            view: f.component.context.viewApi,
                                        })
                                    ),
                                    a.emitter.trigger(
                                        "eventReceive",
                                        r(r({}, w), {
                                            draggedEl: e.subjectEl,
                                            view: f.component.context.viewApi,
                                        })
                                    );
                            }
                        } else t.emitter.trigger("_noEventDrop");
                    }
                    o.cleanup();
                });
            var i = o.component.context.options,
                a = (o.dragging = new wa(n.el));
            (a.pointer.selector = t.SELECTOR),
                (a.touchScrollAllowed = !1),
                (a.autoScroller.isEnabled = i.dragScroll);
            var s = (o.hitDragging = new Ta(o.dragging, ui));
            return (
                (s.useSubjectCenter = n.useEventCenter),
                s.emitter.on("pointerdown", o.handlePointerDown),
                s.emitter.on("dragstart", o.handleDragStart),
                s.emitter.on("hitupdate", o.handleHitUpdate),
                s.emitter.on("pointerup", o.handlePointerUp),
                s.emitter.on("dragend", o.handleDragEnd),
                o
            );
        }
        return (
            n(t, e),
            (t.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            (t.prototype.displayDrag = function (e, t) {
                var n = this.component.context,
                    r = this.receivingContext;
                r &&
                    r !== e &&
                    (r === n
                        ? r.dispatch({
                              type: "SET_EVENT_DRAG",
                              state: {
                                  affectedEvents: t.affectedEvents,
                                  mutatedEvents: { defs: {}, instances: {} },
                                  isEvent: !0,
                              },
                          })
                        : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
                    e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
            }),
            (t.prototype.clearDrag = function () {
                var e = this.component.context,
                    t = this.receivingContext;
                t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
                    e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
            }),
            (t.prototype.cleanup = function () {
                (this.subjectSeg = null),
                    (this.isDragging = !1),
                    (this.eventRange = null),
                    (this.relevantEvents = null),
                    (this.receivingContext = null),
                    (this.validMutation = null),
                    (this.mutatedRelevantEvents = null);
            }),
            (t.SELECTOR = ".fc-event-draggable, .fc-event-resizable"),
            t
        );
    })(ai);
    var Pa = (function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            (n.draggingSegEl = null),
                (n.draggingSeg = null),
                (n.eventRange = null),
                (n.relevantEvents = null),
                (n.validMutation = null),
                (n.mutatedRelevantEvents = null),
                (n.handlePointerDown = function (e) {
                    var t = n.component,
                        r = dn(n.querySegEl(e)),
                        o = (n.eventRange = r.eventRange);
                    (n.dragging.minDistance =
                        t.context.options.eventDragMinDistance),
                        n.dragging.setIgnoreMove(
                            !n.component.isValidSegDownEl(e.origEvent.target) ||
                                (e.isTouch &&
                                    n.component.props.eventSelection !==
                                        o.instance.instanceId)
                        );
                }),
                (n.handleDragStart = function (e) {
                    var t = n.component.context,
                        r = n.eventRange;
                    n.relevantEvents = Nt(
                        t.getCurrentData().eventStore,
                        n.eventRange.instance.instanceId
                    );
                    var o = n.querySegEl(e);
                    (n.draggingSegEl = o),
                        (n.draggingSeg = dn(o)),
                        t.calendarApi.unselect(),
                        t.emitter.trigger("eventResizeStart", {
                            el: o,
                            event: new zn(t, r.def, r.instance),
                            jsEvent: e.origEvent,
                            view: t.viewApi,
                        });
                }),
                (n.handleHitUpdate = function (e, t, o) {
                    var i = n.component.context,
                        a = n.relevantEvents,
                        s = n.hitDragging.initialHit,
                        l = n.eventRange.instance,
                        u = null,
                        c = null,
                        d = !1,
                        p = {
                            affectedEvents: a,
                            mutatedEvents: { defs: {}, instances: {} },
                            isEvent: !0,
                        };
                    e &&
                        (u = (function (e, t, n, o, i) {
                            for (
                                var a = e.component.context.dateEnv,
                                    s = e.dateSpan.range.start,
                                    l = t.dateSpan.range.start,
                                    u = Qt(s, l, a, e.component.largeUnit),
                                    c = {},
                                    d = 0,
                                    p = i;
                                d < p.length;
                                d++
                            ) {
                                var f = (0, p[d])(e, t);
                                if (!1 === f) return null;
                                f && r(c, f);
                            }
                            if (n) {
                                if (a.add(o.start, u) < o.end)
                                    return (c.startDelta = u), c;
                            } else if (a.add(o.end, u) > o.start)
                                return (c.endDelta = u), c;
                            return null;
                        })(
                            s,
                            e,
                            o.subjectEl.classList.contains(
                                "fc-event-resizer-start"
                            ),
                            l.range,
                            i.pluginHooks.eventResizeJoinTransforms
                        )),
                        u &&
                            ((c = Pn(a, i.getCurrentData().eventUiBases, u, i)),
                            (p.mutatedEvents = c),
                            n.component.isInteractionValid(p) ||
                                ((d = !0),
                                (u = null),
                                (c = null),
                                (p.mutatedEvents = null))),
                        c
                            ? i.dispatch({ type: "SET_EVENT_RESIZE", state: p })
                            : i.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                        d ? Q() : ee(),
                        t ||
                            (u && ka(s, e) && (u = null),
                            (n.validMutation = u),
                            (n.mutatedRelevantEvents = c));
                }),
                (n.handleDragEnd = function (e) {
                    var t = n.component.context,
                        o = n.eventRange.def,
                        i = n.eventRange.instance,
                        a = new zn(t, o, i),
                        s = n.relevantEvents,
                        l = n.mutatedRelevantEvents;
                    if (
                        (t.emitter.trigger("eventResizeStop", {
                            el: n.draggingSegEl,
                            event: a,
                            jsEvent: e.origEvent,
                            view: t.viewApi,
                        }),
                        n.validMutation)
                    ) {
                        var u = new zn(
                            t,
                            l.defs[o.defId],
                            i ? l.instances[i.instanceId] : null
                        );
                        t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                        var c = {
                            oldEvent: a,
                            event: u,
                            relatedEvents: Bn(l, t, i),
                            revert: function () {
                                t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: s,
                                });
                            },
                        };
                        t.emitter.trigger(
                            "eventResize",
                            r(r({}, c), {
                                el: n.draggingSegEl,
                                startDelta: n.validMutation.startDelta || Ye(0),
                                endDelta: n.validMutation.endDelta || Ye(0),
                                jsEvent: e.origEvent,
                                view: t.viewApi,
                            })
                        ),
                            t.emitter.trigger("eventChange", c);
                    } else t.emitter.trigger("_noEventResize");
                    (n.draggingSeg = null),
                        (n.relevantEvents = null),
                        (n.validMutation = null);
                });
            var o = t.component,
                i = (n.dragging = new wa(t.el));
            (i.pointer.selector = ".fc-event-resizer"),
                (i.touchScrollAllowed = !1),
                (i.autoScroller.isEnabled = o.context.options.dragScroll);
            var a = (n.hitDragging = new Ta(n.dragging, li(t)));
            return (
                a.emitter.on("pointerdown", n.handlePointerDown),
                a.emitter.on("dragstart", n.handleDragStart),
                a.emitter.on("hitupdate", n.handleHitUpdate),
                a.emitter.on("dragend", n.handleDragEnd),
                n
            );
        }
        return (
            n(t, e),
            (t.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            (t.prototype.querySegEl = function (e) {
                return V(e.subjectEl, ".fc-event");
            }),
            t
        );
    })(ai);
    var Na = (function () {
            function e(e) {
                var t = this;
                (this.context = e),
                    (this.isRecentPointerDateSelect = !1),
                    (this.matchesCancel = !1),
                    (this.matchesEvent = !1),
                    (this.onSelect = function (e) {
                        e.jsEvent && (t.isRecentPointerDateSelect = !0);
                    }),
                    (this.onDocumentPointerDown = function (e) {
                        var n = t.context.options.unselectCancel,
                            r = e.origEvent.target;
                        (t.matchesCancel = !!V(r, n)),
                            (t.matchesEvent = !!V(r, Ia.SELECTOR));
                    }),
                    (this.onDocumentPointerUp = function (e) {
                        var n = t.context,
                            r = t.documentPointer,
                            o = n.getCurrentData();
                        if (!r.wasTouchScroll) {
                            if (
                                o.dateSelection &&
                                !t.isRecentPointerDateSelect
                            ) {
                                var i = n.options.unselectAuto;
                                !i ||
                                    (i && t.matchesCancel) ||
                                    n.calendarApi.unselect(e);
                            }
                            o.eventSelection &&
                                !t.matchesEvent &&
                                n.dispatch({ type: "UNSELECT_EVENT" });
                        }
                        t.isRecentPointerDateSelect = !1;
                    });
                var n = (this.documentPointer = new ga(document));
                (n.shouldIgnoreMove = !0),
                    (n.shouldWatchScroll = !1),
                    n.emitter.on("pointerdown", this.onDocumentPointerDown),
                    n.emitter.on("pointerup", this.onDocumentPointerUp),
                    e.emitter.on("select", this.onSelect);
            }
            return (
                (e.prototype.destroy = function () {
                    this.context.emitter.off("select", this.onSelect),
                        this.documentPointer.destroy();
                }),
                e
            );
        })(),
        Ha = {
            dateClick: _t,
            eventDragStart: _t,
            eventDragStop: _t,
            eventDrop: _t,
            eventResizeStart: _t,
            eventResizeStop: _t,
            eventResize: _t,
            drop: _t,
            eventReceive: _t,
            eventLeave: _t,
        },
        Oa = (function () {
            function e(e, t) {
                var n = this;
                (this.receivingContext = null),
                    (this.droppableEvent = null),
                    (this.suppliedDragMeta = null),
                    (this.dragMeta = null),
                    (this.handleDragStart = function (e) {
                        n.dragMeta = n.buildDragMeta(e.subjectEl);
                    }),
                    (this.handleHitUpdate = function (e, t, o) {
                        var i = n.hitDragging.dragging,
                            a = null,
                            s = null,
                            l = !1,
                            u = {
                                affectedEvents: { defs: {}, instances: {} },
                                mutatedEvents: { defs: {}, instances: {} },
                                isEvent: n.dragMeta.create,
                            };
                        e &&
                            ((a = e.component.context),
                            n.canDropElOnCalendar(o.subjectEl, a) &&
                                ((s = (function (e, t, n) {
                                    for (
                                        var o = r({}, t.leftoverProps),
                                            i = 0,
                                            a =
                                                n.pluginHooks
                                                    .externalDefTransforms;
                                        i < a.length;
                                        i++
                                    ) {
                                        var s = a[i];
                                        r(o, s(e, t));
                                    }
                                    var l = Yt(o, n),
                                        u = l.refined,
                                        c = l.extra,
                                        d = Xt(
                                            u,
                                            c,
                                            t.sourceId,
                                            e.allDay,
                                            n.options.forceEventDuration ||
                                                Boolean(t.duration),
                                            n
                                        ),
                                        p = e.range.start;
                                    e.allDay &&
                                        t.startTime &&
                                        (p = n.dateEnv.add(p, t.startTime));
                                    var f = t.duration
                                            ? n.dateEnv.add(p, t.duration)
                                            : In(e.allDay, p, n),
                                        h = Ie(d.defId, { start: p, end: f });
                                    return { def: d, instance: h };
                                })(e.dateSpan, n.dragMeta, a)),
                                (u.mutatedEvents = Pt(s)),
                                (l = !Jr(u, a)) &&
                                    ((u.mutatedEvents = {
                                        defs: {},
                                        instances: {},
                                    }),
                                    (s = null)))),
                            n.displayDrag(a, u),
                            i.setMirrorIsVisible(
                                t ||
                                    !s ||
                                    !document.querySelector(".fc-event-mirror")
                            ),
                            l ? Q() : ee(),
                            t ||
                                (i.setMirrorNeedsRevert(!s),
                                (n.receivingContext = a),
                                (n.droppableEvent = s));
                    }),
                    (this.handleDragEnd = function (e) {
                        var t = n,
                            o = t.receivingContext,
                            i = t.droppableEvent;
                        if ((n.clearDrag(), o && i)) {
                            var a = n.hitDragging.finalHit,
                                s = a.component.context.viewApi,
                                l = n.dragMeta;
                            if (
                                (o.emitter.trigger(
                                    "drop",
                                    r(r({}, Ma(a.dateSpan, o)), {
                                        draggedEl: e.subjectEl,
                                        jsEvent: e.origEvent,
                                        view: s,
                                    })
                                ),
                                l.create)
                            ) {
                                var u = Pt(i);
                                o.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: u,
                                }),
                                    e.isTouch &&
                                        o.dispatch({
                                            type: "SELECT_EVENT",
                                            eventInstanceId:
                                                i.instance.instanceId,
                                        }),
                                    o.emitter.trigger("eventReceive", {
                                        event: new zn(o, i.def, i.instance),
                                        relatedEvents: [],
                                        revert: function () {
                                            o.dispatch({
                                                type: "REMOVE_EVENTS",
                                                eventStore: u,
                                            });
                                        },
                                        draggedEl: e.subjectEl,
                                        view: s,
                                    });
                            }
                        }
                        (n.receivingContext = null), (n.droppableEvent = null);
                    });
                var o = (this.hitDragging = new Ta(e, ui));
                (o.requireInitial = !1),
                    o.emitter.on("dragstart", this.handleDragStart),
                    o.emitter.on("hitupdate", this.handleHitUpdate),
                    o.emitter.on("dragend", this.handleDragEnd),
                    (this.suppliedDragMeta = t);
            }
            return (
                (e.prototype.buildDragMeta = function (e) {
                    return "object" == typeof this.suppliedDragMeta
                        ? fi(this.suppliedDragMeta)
                        : "function" == typeof this.suppliedDragMeta
                        ? fi(this.suppliedDragMeta(e))
                        : fi(
                              (t = (function (e, t) {
                                  var n = di.dataAttrPrefix,
                                      r = (n ? n + "-" : "") + t;
                                  return e.getAttribute("data-" + r) || "";
                              })(e, "event"))
                                  ? JSON.parse(t)
                                  : { create: !1 }
                          );
                    var t;
                }),
                (e.prototype.displayDrag = function (e, t) {
                    var n = this.receivingContext;
                    n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
                        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
                }),
                (e.prototype.clearDrag = function () {
                    this.receivingContext &&
                        this.receivingContext.dispatch({
                            type: "UNSET_EVENT_DRAG",
                        });
                }),
                (e.prototype.canDropElOnCalendar = function (e, t) {
                    var n = t.options.dropAccept;
                    return "function" == typeof n
                        ? n.call(t.calendarApi, e)
                        : "string" != typeof n || !n || Boolean(z(e, n));
                }),
                e
            );
        })();
    di.dataAttrPrefix = "";
    var Aa = (function () {
            function e(e, t) {
                var n = this;
                void 0 === t && (t = {}),
                    (this.handlePointerDown = function (e) {
                        var t = n.dragging,
                            r = n.settings,
                            o = r.minDistance,
                            i = r.longPressDelay;
                        (t.minDistance =
                            null != o
                                ? o
                                : e.isTouch
                                ? 0
                                : bt.eventDragMinDistance),
                            (t.delay = e.isTouch
                                ? null != i
                                    ? i
                                    : bt.longPressDelay
                                : 0);
                    }),
                    (this.handleDragStart = function (e) {
                        e.isTouch &&
                            n.dragging.delay &&
                            e.subjectEl.classList.contains("fc-event") &&
                            n.dragging.mirror
                                .getMirrorEl()
                                .classList.add("fc-event-selected");
                    }),
                    (this.settings = t);
                var r = (this.dragging = new wa(e));
                (r.touchScrollAllowed = !1),
                    null != t.itemSelector &&
                        (r.pointer.selector = t.itemSelector),
                    null != t.appendTo && (r.mirror.parentNode = t.appendTo),
                    r.emitter.on("pointerdown", this.handlePointerDown),
                    r.emitter.on("dragstart", this.handleDragStart),
                    new Oa(r, t.eventData);
            }
            return (
                (e.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                e
            );
        })(),
        Ua = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.shouldIgnoreMove = !1),
                    (n.mirrorSelector = ""),
                    (n.currentMirrorEl = null),
                    (n.handlePointerDown = function (e) {
                        n.emitter.trigger("pointerdown", e),
                            n.shouldIgnoreMove ||
                                n.emitter.trigger("dragstart", e);
                    }),
                    (n.handlePointerMove = function (e) {
                        n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
                    }),
                    (n.handlePointerUp = function (e) {
                        n.emitter.trigger("pointerup", e),
                            n.shouldIgnoreMove ||
                                n.emitter.trigger("dragend", e);
                    });
                var r = (n.pointer = new ga(t));
                return (
                    r.emitter.on("pointerdown", n.handlePointerDown),
                    r.emitter.on("pointermove", n.handlePointerMove),
                    r.emitter.on("pointerup", n.handlePointerUp),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.pointer.destroy();
                }),
                (t.prototype.setIgnoreMove = function (e) {
                    this.shouldIgnoreMove = e;
                }),
                (t.prototype.setMirrorIsVisible = function (e) {
                    if (e)
                        this.currentMirrorEl &&
                            ((this.currentMirrorEl.style.visibility = ""),
                            (this.currentMirrorEl = null));
                    else {
                        var t = this.mirrorSelector
                            ? document.querySelector(this.mirrorSelector)
                            : null;
                        t &&
                            ((this.currentMirrorEl = t),
                            (t.style.visibility = "hidden"));
                    }
                }),
                t
            );
        })(ci),
        La = (function () {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element
                    ? ((n = e), (t = t || {}))
                    : (t = e || {});
                var r = (this.dragging = new Ua(n));
                "string" == typeof t.itemSelector
                    ? (r.pointer.selector = t.itemSelector)
                    : n === document && (r.pointer.selector = "[data-event]"),
                    "string" == typeof t.mirrorSelector &&
                        (r.mirrorSelector = t.mirrorSelector),
                    new Oa(r, t.eventData);
            }
            return (
                (e.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                e
            );
        })(),
        Wa = io({
            componentInteractions: [xa, _a, Ia, Pa],
            calendarInteractions: [Na],
            elementDraggingImpl: wa,
            listenerRefiners: Ha,
        }),
        Va = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.headerElRef = Ar()), t;
            }
            return (
                n(t, e),
                (t.prototype.renderSimpleLayout = function (e, t) {
                    var n = this.props,
                        r = this.context,
                        o = [],
                        i = Ki(r.options);
                    return (
                        e &&
                            o.push({
                                type: "header",
                                key: "header",
                                isSticky: i,
                                chunk: {
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            }),
                        o.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            chunk: { content: t },
                        }),
                        Hr(yo, { viewSpec: r.viewSpec }, function (e, t) {
                            return Hr(
                                "div",
                                {
                                    ref: e,
                                    className: ["fc-daygrid"]
                                        .concat(t)
                                        .join(" "),
                                },
                                Hr($i, {
                                    liquid: !n.isHeightAuto && !n.forPrint,
                                    cols: [],
                                    sections: o,
                                })
                            );
                        })
                    );
                }),
                (t.prototype.renderHScrollLayout = function (e, t, n, r) {
                    var o = this.context.pluginHooks.scrollGridImpl;
                    if (!o) throw new Error("No ScrollGrid implementation");
                    var i = this.props,
                        a = this.context,
                        s = !i.forPrint && Ki(a.options),
                        l = !i.forPrint && Ji(a.options),
                        u = [];
                    return (
                        e &&
                            u.push({
                                type: "header",
                                key: "header",
                                isSticky: s,
                                chunks: [
                                    {
                                        key: "main",
                                        elRef: this.headerElRef,
                                        tableClassName: "fc-col-header",
                                        rowContent: e,
                                    },
                                ],
                            }),
                        u.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            chunks: [{ key: "main", content: t }],
                        }),
                        l &&
                            u.push({
                                type: "footer",
                                key: "footer",
                                isSticky: !0,
                                chunks: [{ key: "main", content: Xi }],
                            }),
                        Hr(yo, { viewSpec: a.viewSpec }, function (e, t) {
                            return Hr(
                                "div",
                                {
                                    ref: e,
                                    className: ["fc-daygrid"]
                                        .concat(t)
                                        .join(" "),
                                },
                                Hr(o, {
                                    liquid: !i.isHeightAuto && !i.forPrint,
                                    colGroups: [
                                        { cols: [{ span: n, minWidth: r }] },
                                    ],
                                    sections: u,
                                })
                            );
                        })
                    );
                }),
                t
            );
        })(oo);
    function za(e, t) {
        for (var n = [], r = 0; r < t; r++) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a);
        }
        return n;
    }
    function Fa(e, t) {
        for (var n = [], r = 0; r < t; r++) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a);
        }
        return n;
    }
    function Ba(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a++)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: [],
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i);
            }
        } else for (var a = 0; a < t; a++) n[a] = null;
        return n;
    }
    var ja = St({ week: "narrow" }),
        Ga = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), Yr(t.props.elRef, e);
                    }),
                    (t.handleMoreLinkClick = function (e) {
                        var n = t.props;
                        if (n.onMoreClick) {
                            var r = n.segsByEachCol,
                                o = r.filter(function (e) {
                                    return n
                                        .segIsHidden[e.eventRange.instance.instanceId];
                                });
                            n.onMoreClick({
                                date: n.date,
                                allSegs: r,
                                hiddenSegs: o,
                                moreCnt: n.moreCnt,
                                dayEl: t.rootEl,
                                ev: e,
                            });
                        }
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.context,
                        n = t.options,
                        o = t.viewApi,
                        i = this.props,
                        a = i.date,
                        s = i.dateProfile,
                        l = {
                            num: i.moreCnt,
                            text: i.buildMoreLinkText(i.moreCnt),
                            view: o,
                        },
                        u = n.navLinks
                            ? { "data-navlink": gr(a, "week"), tabIndex: 0 }
                            : {};
                    return Hr(
                        oa,
                        {
                            date: a,
                            dateProfile: s,
                            todayRange: i.todayRange,
                            showDayNumber: i.showDayNumber,
                            extraHookProps: i.extraHookProps,
                            elRef: this.handleRootEl,
                        },
                        function (t, o, c, d) {
                            return Hr(
                                "td",
                                r(
                                    {
                                        ref: t,
                                        className: ["fc-daygrid-day"]
                                            .concat(o, i.extraClassNames || [])
                                            .join(" "),
                                    },
                                    c,
                                    i.extraDataAttrs
                                ),
                                Hr(
                                    "div",
                                    {
                                        className:
                                            "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                                        ref: i.innerElRef,
                                    },
                                    i.showWeekNumber &&
                                        Hr(
                                            ca,
                                            { date: a, defaultFormat: ja },
                                            function (e, t, n, o) {
                                                return Hr(
                                                    "a",
                                                    r(
                                                        {
                                                            ref: e,
                                                            className: [
                                                                "fc-daygrid-week-number",
                                                            ]
                                                                .concat(t)
                                                                .join(" "),
                                                        },
                                                        u
                                                    ),
                                                    o
                                                );
                                            }
                                        ),
                                    !d &&
                                        Hr(Za, {
                                            date: a,
                                            dateProfile: s,
                                            showDayNumber: i.showDayNumber,
                                            forceDayTop: i.forceDayTop,
                                            todayRange: i.todayRange,
                                            extraHookProps: i.extraHookProps,
                                        }),
                                    Hr(
                                        "div",
                                        {
                                            className: "fc-daygrid-day-events",
                                            ref: i.fgContentElRef,
                                            style: {
                                                paddingBottom:
                                                    i.fgPaddingBottom,
                                            },
                                        },
                                        i.fgContent,
                                        Boolean(i.moreCnt) &&
                                            Hr(
                                                "div",
                                                {
                                                    className:
                                                        "fc-daygrid-day-bottom",
                                                    style: {
                                                        marginTop:
                                                            i.moreMarginTop,
                                                    },
                                                },
                                                Hr(
                                                    uo,
                                                    {
                                                        hookProps: l,
                                                        classNames:
                                                            n.moreLinkClassNames,
                                                        content:
                                                            n.moreLinkContent,
                                                        defaultContent: Ya,
                                                        didMount:
                                                            n.moreLinkDidMount,
                                                        willUnmount:
                                                            n.moreLinkWillUnmount,
                                                    },
                                                    function (t, n, r, o) {
                                                        return Hr(
                                                            "a",
                                                            {
                                                                onClick:
                                                                    e.handleMoreLinkClick,
                                                                ref: t,
                                                                className: [
                                                                    "fc-daygrid-more-link",
                                                                ]
                                                                    .concat(n)
                                                                    .join(" "),
                                                            },
                                                            o
                                                        );
                                                    }
                                                )
                                            )
                                    ),
                                    Hr(
                                        "div",
                                        { className: "fc-daygrid-day-bg" },
                                        i.bgContent
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(oo);
    function qa(e) {
        return e.dayNumberText;
    }
    function Ya(e) {
        return e.text;
    }
    var Za = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context.options.navLinks
                            ? { "data-navlink": gr(e.date), tabIndex: 0 }
                            : {};
                    return Hr(
                        ia,
                        {
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            showDayNumber: e.showDayNumber,
                            extraHookProps: e.extraHookProps,
                            defaultContent: qa,
                        },
                        function (n, o) {
                            return (
                                (o || e.forceDayTop) &&
                                Hr(
                                    "div",
                                    { className: "fc-daygrid-day-top", ref: n },
                                    Hr(
                                        "a",
                                        r(
                                            {
                                                className:
                                                    "fc-daygrid-day-number",
                                            },
                                            t
                                        ),
                                        o || Hr(Ur, null, " ")
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr),
        Xa = St({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "narrow",
        });
    function Ka(e) {
        var t = e.eventRange.ui.display;
        return (
            "list-item" === t ||
            ("auto" === t &&
                !e.eventRange.def.allDay &&
                e.firstCol === e.lastCol &&
                e.isStart &&
                e.isEnd)
        );
    }
    var Ja = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options.eventTimeFormat || Xa,
                    o = En(e.seg, n, t, !0, e.defaultDisplayEventEnd);
                return Hr(
                    Qi,
                    {
                        seg: e.seg,
                        timeText: o,
                        defaultContent: $a,
                        isDragging: e.isDragging,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: e.isSelected,
                        isPast: e.isPast,
                        isFuture: e.isFuture,
                        isToday: e.isToday,
                    },
                    function (t, n, o, i) {
                        return Hr(
                            "a",
                            r(
                                {
                                    className: [
                                        "fc-daygrid-event",
                                        "fc-daygrid-dot-event",
                                    ]
                                        .concat(n)
                                        .join(" "),
                                    ref: t,
                                },
                                ((a = e.seg),
                                (s = a.eventRange.def.url) ? { href: s } : {})
                            ),
                            i
                        );
                        var a, s;
                    }
                );
            }),
            t
        );
    })(jr);
    function $a(e) {
        return Hr(
            Ur,
            null,
            Hr("div", {
                className: "fc-daygrid-event-dot",
                style: { borderColor: e.borderColor || e.backgroundColor },
            }),
            e.timeText && Hr("div", { className: "fc-event-time" }, e.timeText),
            Hr(
                "div",
                { className: "fc-event-title" },
                e.event.title || Hr(Ur, null, " ")
            )
        );
    }
    var Qa = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props;
                return Hr(
                    ea,
                    r({}, e, {
                        extraClassNames: [
                            "fc-daygrid-event",
                            "fc-daygrid-block-event",
                            "fc-h-event",
                        ],
                        defaultTimeFormat: Xa,
                        defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                        disableResizing: !e.seg.eventRange.def.allDay,
                    })
                );
            }),
            t
        );
    })(jr);
    function es(e, t, n, o, i, a, s, l) {
        for (
            var u = [], c = [], d = {}, p = {}, f = {}, h = {}, v = {}, g = 0;
            g < s;
            g++
        )
            u.push([]), c.push(0);
        for (var m = 0, y = (t = hn(t, l)); m < y.length; m++) {
            T(
                (w = y[m]),
                i[w.eventRange.instance.instanceId + ":" + w.firstCol] || 0
            );
        }
        !0 === n || !0 === o
            ? (function (e, t, n, r) {
                  ns(e, t, n, !0, function (e) {
                      return e.bottom <= r;
                  });
              })(c, d, u, a)
            : "number" == typeof n
            ? (function (e, t, n, r) {
                  ns(e, t, n, !1, function (e, t) {
                      return t < r;
                  });
              })(c, d, u, n)
            : "number" == typeof o &&
              (function (e, t, n, r) {
                  ns(e, t, n, !0, function (e, t) {
                      return t < r;
                  });
              })(c, d, u, o);
        for (var E = 0; E < s; E++) {
            for (var S = 0, D = 0, b = 0, C = u[E]; b < C.length; b++) {
                var w,
                    R = C[b];
                d[(w = R.seg).eventRange.instance.instanceId] ||
                    ((p[w.eventRange.instance.instanceId] = R.top),
                    w.firstCol === w.lastCol && w.isStart && w.isEnd
                        ? ((f[w.eventRange.instance.instanceId] = R.top - S),
                          (D = 0),
                          (S = R.bottom))
                        : (D = R.bottom - S));
            }
            D && (c[E] ? (h[E] = D) : (v[E] = D));
        }
        function T(e, t) {
            if (!k(e, t, 0))
                for (var n = e.firstCol; n <= e.lastCol; n++)
                    for (var r = 0, o = u[n]; r < o.length; r++) {
                        if (k(e, t, o[r].bottom)) return;
                    }
        }
        function k(e, t, n) {
            if (
                (function (e, t, n) {
                    for (var r = e.firstCol; r <= e.lastCol; r++)
                        for (var o = 0, i = u[r]; o < i.length; o++) {
                            var a = i[o];
                            if (n < a.bottom && n + t > a.top) return !1;
                        }
                    return !0;
                })(e, t, n)
            ) {
                for (var r = e.firstCol; r <= e.lastCol; r++) {
                    for (var o = u[r], i = 0; i < o.length && n >= o[i].top; )
                        i++;
                    o.splice(i, 0, { seg: e, top: n, bottom: n + t });
                }
                return !0;
            }
            return !1;
        }
        for (var M in i) i[M] || (d[M.split(":")[0]] = !0);
        return {
            segsByFirstCol: u.map(ts),
            segsByEachCol: u.map(function (t, n) {
                var o = (function (e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        t.push(o.seg);
                    }
                    return t;
                })(t);
                return (o = (function (e, t, n) {
                    for (
                        var o = t,
                            i = ve(o, 1),
                            a = { start: o, end: i },
                            s = [],
                            l = 0,
                            u = e;
                        l < u.length;
                        l++
                    ) {
                        var c = u[l],
                            d = c.eventRange,
                            p = d.range,
                            f = nn(p, a);
                        f &&
                            s.push(
                                r(r({}, c), {
                                    firstCol: n,
                                    lastCol: n,
                                    eventRange: {
                                        def: d.def,
                                        ui: r(r({}, d.ui), {
                                            durationEditable: !1,
                                        }),
                                        instance: d.instance,
                                        range: f,
                                    },
                                    isStart:
                                        c.isStart &&
                                        f.start.valueOf() === p.start.valueOf(),
                                    isEnd:
                                        c.isEnd &&
                                        f.end.valueOf() === p.end.valueOf(),
                                })
                            );
                    }
                    return s;
                })(o, e[n].date, n));
            }),
            segIsHidden: d,
            segTops: p,
            segMarginTops: f,
            moreCnts: c,
            moreTops: h,
            paddingBottoms: v,
        };
    }
    function ts(e, t) {
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            i.seg.firstCol === t && n.push(i.seg);
        }
        return n;
    }
    function ns(e, t, n, r, o) {
        for (var i = e.length, a = {}, s = [], l = 0; l < i; l++) s.push([]);
        for (l = 0; l < i; l++)
            for (var u = 0, c = 0, d = n[l]; c < d.length; c++) {
                var p = d[c];
                o(p, u) ? f(p) : h(p, u, r), p.top !== p.bottom && u++;
            }
        function f(e) {
            var t = e.seg,
                n = t.eventRange.instance.instanceId;
            if (!a[n]) {
                a[n] = !0;
                for (var r = t.firstCol; r <= t.lastCol; r++) s[r].push(e);
            }
        }
        function h(n, r, o) {
            var i = n.seg,
                a = i.eventRange.instance.instanceId;
            if (!t[a]) {
                t[a] = !0;
                for (var l = i.firstCol; l <= i.lastCol; l++) {
                    var u = ++e[l];
                    if (o && 1 === u)
                        for (var c = r - 1; s[l].length > c; )
                            h(s[l].pop(), s[l].length, !1);
                }
            }
        }
    }
    var rs = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.cellElRefs = new Li()),
                (t.frameElRefs = new Li()),
                (t.fgElRefs = new Li()),
                (t.segHarnessRefs = new Li()),
                (t.rootElRef = Ar()),
                (t.state = {
                    framePositions: null,
                    maxContentHeight: null,
                    segHeights: {},
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.state,
                    r = this.context,
                    o = t.cells.length,
                    i = Fa(t.businessHourSegs, o),
                    a = Fa(t.bgEventSegs, o),
                    s = Fa(this.getHighlightSegs(), o),
                    l = Fa(this.getMirrorSegs(), o),
                    u = es(
                        t.cells,
                        t.fgEventSegs,
                        t.dayMaxEvents,
                        t.dayMaxEventRows,
                        n.segHeights,
                        n.maxContentHeight,
                        o,
                        r.options.eventOrder
                    ),
                    c = u.paddingBottoms,
                    d = u.segsByFirstCol,
                    p = u.segsByEachCol,
                    f = u.segIsHidden,
                    h = u.segTops,
                    v = u.segMarginTops,
                    g = u.moreCnts,
                    m = u.moreTops,
                    y =
                        (t.eventDrag && t.eventDrag.affectedInstances) ||
                        (t.eventResize && t.eventResize.affectedInstances) ||
                        {};
                return Hr(
                    "tr",
                    { ref: this.rootElRef },
                    t.renderIntro && t.renderIntro(),
                    t.cells.map(function (n, r) {
                        var o = e.renderFgSegs(d[r], f, h, v, y, t.todayRange),
                            u = e.renderFgSegs(
                                l[r],
                                {},
                                h,
                                {},
                                {},
                                t.todayRange,
                                Boolean(t.eventDrag),
                                Boolean(t.eventResize),
                                !1
                            );
                        return Hr(Ga, {
                            key: n.key,
                            elRef: e.cellElRefs.createRef(n.key),
                            innerElRef: e.frameElRefs.createRef(n.key),
                            dateProfile: t.dateProfile,
                            date: n.date,
                            showDayNumber: t.showDayNumbers,
                            showWeekNumber: t.showWeekNumbers && 0 === r,
                            forceDayTop: t.showWeekNumbers,
                            todayRange: t.todayRange,
                            extraHookProps: n.extraHookProps,
                            extraDataAttrs: n.extraDataAttrs,
                            extraClassNames: n.extraClassNames,
                            moreCnt: g[r],
                            buildMoreLinkText: t.buildMoreLinkText,
                            onMoreClick: t.onMoreClick,
                            segIsHidden: f,
                            moreMarginTop: m[r],
                            segsByEachCol: p[r],
                            fgPaddingBottom: c[r],
                            fgContentElRef: e.fgElRefs.createRef(n.key),
                            fgContent: Hr(
                                Ur,
                                null,
                                Hr(Ur, null, o),
                                Hr(Ur, null, u)
                            ),
                            bgContent: Hr(
                                Ur,
                                null,
                                e.renderFillSegs(s[r], "highlight"),
                                e.renderFillSegs(i[r], "non-business"),
                                e.renderFillSegs(a[r], "bg-event")
                            ),
                        });
                    })
                );
            }),
            (t.prototype.componentDidMount = function () {
                this.updateSizing(!0);
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
                var n = this.props;
                this.updateSizing(!Le(e, n));
            }),
            (t.prototype.getHighlightSegs = function () {
                var e = this.props;
                return e.eventDrag && e.eventDrag.segs.length
                    ? e.eventDrag.segs
                    : e.eventResize && e.eventResize.segs.length
                    ? e.eventResize.segs
                    : e.dateSelectionSegs;
            }),
            (t.prototype.getMirrorSegs = function () {
                var e = this.props;
                return e.eventResize && e.eventResize.segs.length
                    ? e.eventResize.segs
                    : [];
            }),
            (t.prototype.renderFgSegs = function (e, t, n, o, i, a, s, l, u) {
                var c = this.context,
                    d = this.props.eventSelection,
                    p = this.state.framePositions,
                    f = 1 === this.props.cells.length,
                    h = [];
                if (p)
                    for (var v = 0, g = e; v < g.length; v++) {
                        var m = g[v],
                            y = m.eventRange.instance.instanceId,
                            E = s || l || u,
                            S = i[y],
                            D = t[y] || S,
                            b =
                                t[y] ||
                                E ||
                                m.firstCol !== m.lastCol ||
                                !m.isStart ||
                                !m.isEnd,
                            C = void 0,
                            w = void 0,
                            R = void 0,
                            T = void 0;
                        b
                            ? ((w = n[y]),
                              c.isRtl
                                  ? ((T = 0),
                                    (R =
                                        p.lefts[m.lastCol] -
                                        p.lefts[m.firstCol]))
                                  : ((R = 0),
                                    (T =
                                        p.rights[m.firstCol] -
                                        p.rights[m.lastCol])))
                            : (C = o[y]),
                            h.push(
                                Hr(
                                    "div",
                                    {
                                        className:
                                            "fc-daygrid-event-harness" +
                                            (b
                                                ? " fc-daygrid-event-harness-abs"
                                                : ""),
                                        key: y,
                                        ref: E
                                            ? null
                                            : this.segHarnessRefs.createRef(
                                                  y + ":" + m.firstCol
                                              ),
                                        style: {
                                            visibility: D ? "hidden" : "",
                                            marginTop: C || "",
                                            top: w || "",
                                            left: R || "",
                                            right: T || "",
                                        },
                                    },
                                    Ka(m)
                                        ? Hr(
                                              Ja,
                                              r(
                                                  {
                                                      seg: m,
                                                      isDragging: s,
                                                      isSelected: y === d,
                                                      defaultDisplayEventEnd: f,
                                                  },
                                                  Sn(m, a)
                                              )
                                          )
                                        : Hr(
                                              Qa,
                                              r(
                                                  {
                                                      seg: m,
                                                      isDragging: s,
                                                      isResizing: l,
                                                      isDateSelecting: u,
                                                      isSelected: y === d,
                                                      defaultDisplayEventEnd: f,
                                                  },
                                                  Sn(m, a)
                                              )
                                          )
                                )
                            );
                    }
                return h;
            }),
            (t.prototype.renderFillSegs = function (e, t) {
                var n = this.context.isRtl,
                    i = this.props.todayRange,
                    a = this.state.framePositions,
                    s = [];
                if (a)
                    for (var l = 0, u = e; l < u.length; l++) {
                        var c = u[l],
                            d = n
                                ? {
                                      right: 0,
                                      left:
                                          a.lefts[c.lastCol] -
                                          a.lefts[c.firstCol],
                                  }
                                : {
                                      left: 0,
                                      right:
                                          a.rights[c.firstCol] -
                                          a.rights[c.lastCol],
                                  };
                        s.push(
                            Hr(
                                "div",
                                {
                                    key: bn(c.eventRange),
                                    className: "fc-daygrid-bg-harness",
                                    style: d,
                                },
                                "bg-event" === t
                                    ? Hr(la, r({ seg: c }, Sn(c, i)))
                                    : sa(t)
                            )
                        );
                    }
                return Hr.apply(void 0, o([Ur, {}], s));
            }),
            (t.prototype.updateSizing = function (e) {
                var t = this.props,
                    n = this.frameElRefs;
                if (null !== t.clientWidth) {
                    if (e) {
                        var r = t.cells.map(function (e) {
                            return n.currentMap[e.key];
                        });
                        if (r.length) {
                            var o = this.rootElRef.current;
                            this.setState({
                                framePositions: new Mr(o, r, !0, !1),
                            });
                        }
                    }
                    var i = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                    this.setState({
                        segHeights: this.computeSegHeights(),
                        maxContentHeight: i
                            ? this.computeMaxContentHeight()
                            : null,
                    });
                }
            }),
            (t.prototype.computeSegHeights = function () {
                return Oe(this.segHarnessRefs.currentMap, function (e) {
                    return e.getBoundingClientRect().height;
                });
            }),
            (t.prototype.computeMaxContentHeight = function () {
                var e = this.props.cells[0].key,
                    t = this.cellElRefs.currentMap[e],
                    n = this.fgElRefs.currentMap[e];
                return (
                    t.getBoundingClientRect().bottom -
                    n.getBoundingClientRect().top
                );
            }),
            (t.prototype.getCellEls = function () {
                var e = this.cellElRefs.currentMap;
                return this.props.cells.map(function (t) {
                    return e[t.key];
                });
            }),
            t
        );
    })(oo);
    rs.addStateEquality({ segHeights: Le });
    var os = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.repositioner = new Go(t.updateSize.bind(t))),
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), t.props.elRef && Yr(t.props.elRef, e);
                    }),
                    (t.handleDocumentMousedown = function (e) {
                        var n = t.props.onClose;
                        n && !t.rootEl.contains(e.target) && n();
                    }),
                    (t.handleDocumentScroll = function () {
                        t.repositioner.request(10);
                    }),
                    (t.handleCloseClick = function () {
                        var e = t.props.onClose;
                        e && e();
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context.theme,
                        t = this.props,
                        n = ["fc-popover", e.getClass("popover")].concat(
                            t.extraClassNames || []
                        );
                    return Hr(
                        "div",
                        r({ className: n.join(" ") }, t.extraAttrs, {
                            ref: this.handleRootEl,
                        }),
                        Hr(
                            "div",
                            {
                                className:
                                    "fc-popover-header " +
                                    e.getClass("popoverHeader"),
                            },
                            Hr(
                                "span",
                                { className: "fc-popover-title" },
                                t.title
                            ),
                            Hr("span", {
                                className:
                                    "fc-popover-close " +
                                    e.getIconClass("close"),
                                onClick: this.handleCloseClick,
                            })
                        ),
                        Hr(
                            "div",
                            {
                                className:
                                    "fc-popover-body " +
                                    e.getClass("popoverContent"),
                            },
                            t.children
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    document.addEventListener(
                        "mousedown",
                        this.handleDocumentMousedown
                    ),
                        document.addEventListener(
                            "scroll",
                            this.handleDocumentScroll
                        ),
                        this.updateSize();
                }),
                (t.prototype.componentWillUnmount = function () {
                    document.removeEventListener(
                        "mousedown",
                        this.handleDocumentMousedown
                    ),
                        document.removeEventListener(
                            "scroll",
                            this.handleDocumentScroll
                        );
                }),
                (t.prototype.updateSize = function () {
                    var e = this.props,
                        t = e.alignmentEl,
                        n = e.topAlignmentEl,
                        r = this.rootEl;
                    if (r) {
                        var o,
                            i = r.getBoundingClientRect(),
                            a = t.getBoundingClientRect(),
                            s = n ? n.getBoundingClientRect().top : a.top;
                        (s = Math.min(s, window.innerHeight - i.height - 10)),
                            (s = Math.max(s, 10)),
                            (o = this.context.isRtl
                                ? a.right - i.width
                                : a.left),
                            (o = Math.min(o, window.innerWidth - i.width - 10)),
                            j(r, { top: s, left: (o = Math.max(o, 10)) });
                    }
                }),
                t
            );
        })(jr),
        is = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handlePopoverEl = function (e) {
                        (t.popoverEl = e),
                            e
                                ? t.context.registerInteractiveComponent(t, {
                                      el: e,
                                      useEventCenter: !1,
                                  })
                                : t.context.unregisterInteractiveComponent(t);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.options,
                        n = e.dateEnv,
                        o = this.props,
                        i = o.date,
                        a = o.hiddenInstances,
                        s = o.todayRange,
                        l = o.dateProfile,
                        u = o.selectedInstanceId,
                        c = n.format(i, t.dayPopoverFormat);
                    return Hr(
                        oa,
                        {
                            date: i,
                            dateProfile: l,
                            todayRange: s,
                            elRef: this.handlePopoverEl,
                        },
                        function (e, t, n) {
                            return Hr(
                                os,
                                {
                                    elRef: e,
                                    title: c,
                                    extraClassNames: ["fc-more-popover"].concat(
                                        t
                                    ),
                                    extraAttrs: n,
                                    onClose: o.onCloseClick,
                                    alignmentEl: o.alignmentEl,
                                    topAlignmentEl: o.topAlignmentEl,
                                },
                                Hr(
                                    ia,
                                    { date: i, dateProfile: l, todayRange: s },
                                    function (e, t) {
                                        return (
                                            t &&
                                            Hr(
                                                "div",
                                                {
                                                    className:
                                                        "fc-more-popover-misc",
                                                    ref: e,
                                                },
                                                t
                                            )
                                        );
                                    }
                                ),
                                o.segs.map(function (e) {
                                    var t = e.eventRange.instance.instanceId;
                                    return Hr(
                                        "div",
                                        {
                                            className:
                                                "fc-daygrid-event-harness",
                                            key: t,
                                            style: {
                                                visibility: a[t]
                                                    ? "hidden"
                                                    : "",
                                            },
                                        },
                                        Ka(e)
                                            ? Hr(
                                                  Ja,
                                                  r(
                                                      {
                                                          seg: e,
                                                          isDragging: !1,
                                                          isSelected: t === u,
                                                          defaultDisplayEventEnd:
                                                              !1,
                                                      },
                                                      Sn(e, s)
                                                  )
                                              )
                                            : Hr(
                                                  Qa,
                                                  r(
                                                      {
                                                          seg: e,
                                                          isDragging: !1,
                                                          isResizing: !1,
                                                          isDateSelecting: !1,
                                                          isSelected: t === u,
                                                          defaultDisplayEventEnd:
                                                              !1,
                                                      },
                                                      Sn(e, s)
                                                  )
                                              )
                                    );
                                })
                            );
                        }
                    );
                }),
                (t.prototype.queryHit = function (e, t, n, r) {
                    var o = this.props.date;
                    if (e < n && t < r)
                        return {
                            component: this,
                            dateSpan: {
                                allDay: !0,
                                range: { start: o, end: ve(o, 1) },
                            },
                            dayEl: this.popoverEl,
                            rect: { left: 0, top: 0, right: n, bottom: r },
                            layer: 1,
                        };
                }),
                (t.prototype.isPopover = function () {
                    return !0;
                }),
                t
            );
        })(oo),
        as = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.splitBusinessHourSegs = it(za)),
                    (t.splitBgEventSegs = it(za)),
                    (t.splitFgEventSegs = it(za)),
                    (t.splitDateSelectionSegs = it(za)),
                    (t.splitEventDrag = it(Ba)),
                    (t.splitEventResize = it(Ba)),
                    (t.buildBuildMoreLinkText = it(ss)),
                    (t.rowRefs = new Li()),
                    (t.state = { morePopoverState: null }),
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), Yr(t.props.elRef, e);
                    }),
                    (t.handleMoreLinkClick = function (e) {
                        var n = t.context,
                            o = n.dateEnv,
                            i = n.options.moreLinkClick;
                        function a(e) {
                            var t = e.eventRange,
                                r = t.def,
                                i = t.instance,
                                a = t.range;
                            return {
                                event: new zn(n, r, i),
                                start: o.toDate(a.start),
                                end: o.toDate(a.end),
                                isStart: e.isStart,
                                isEnd: e.isEnd,
                            };
                        }
                        "function" == typeof i &&
                            (i = i({
                                date: o.toDate(e.date),
                                allDay: !0,
                                allSegs: e.allSegs.map(a),
                                hiddenSegs: e.hiddenSegs.map(a),
                                jsEvent: e.ev,
                                view: n.viewApi,
                            })),
                            i && "popover" !== i
                                ? "string" == typeof i &&
                                  n.calendarApi.zoomTo(e.date, i)
                                : t.setState({
                                      morePopoverState: r(r({}, e), {
                                          currentFgEventSegs:
                                              t.props.fgEventSegs,
                                      }),
                                  });
                    }),
                    (t.handleMorePopoverClose = function () {
                        t.setState({ morePopoverState: null });
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.dateProfile,
                        r = t.dayMaxEventRows,
                        o = t.dayMaxEvents,
                        i = t.expandRows,
                        a = this.state.morePopoverState,
                        s = t.cells.length,
                        l = this.splitBusinessHourSegs(t.businessHourSegs, s),
                        u = this.splitBgEventSegs(t.bgEventSegs, s),
                        c = this.splitFgEventSegs(t.fgEventSegs, s),
                        d = this.splitDateSelectionSegs(t.dateSelectionSegs, s),
                        p = this.splitEventDrag(t.eventDrag, s),
                        f = this.splitEventResize(t.eventResize, s),
                        h = this.buildBuildMoreLinkText(
                            this.context.options.moreLinkText
                        ),
                        v = !0 === o || !0 === r;
                    return (
                        v && !i && ((v = !1), (r = null), (o = null)),
                        Hr(
                            "div",
                            {
                                className: [
                                    "fc-daygrid-body",
                                    v
                                        ? "fc-daygrid-body-balanced"
                                        : "fc-daygrid-body-unbalanced",
                                    i ? "" : "fc-daygrid-body-natural",
                                ].join(" "),
                                ref: this.handleRootEl,
                                style: {
                                    width: t.clientWidth,
                                    minWidth: t.tableMinWidth,
                                },
                            },
                            Hr(Mi, { unit: "day" }, function (v, g) {
                                return Hr(
                                    Ur,
                                    null,
                                    Hr(
                                        "table",
                                        {
                                            className:
                                                "fc-scrollgrid-sync-table",
                                            style: {
                                                width: t.clientWidth,
                                                minWidth: t.tableMinWidth,
                                                height: i ? t.clientHeight : "",
                                            },
                                        },
                                        t.colGroupNode,
                                        Hr(
                                            "tbody",
                                            null,
                                            t.cells.map(function (i, a) {
                                                return Hr(rs, {
                                                    ref: e.rowRefs.createRef(a),
                                                    key: i.length
                                                        ? i[0].date.toISOString()
                                                        : a,
                                                    showDayNumbers: s > 1,
                                                    showWeekNumbers:
                                                        t.showWeekNumbers,
                                                    todayRange: g,
                                                    dateProfile: n,
                                                    cells: i,
                                                    renderIntro:
                                                        t.renderRowIntro,
                                                    businessHourSegs: l[a],
                                                    eventSelection:
                                                        t.eventSelection,
                                                    bgEventSegs:
                                                        u[a].filter(ls),
                                                    fgEventSegs: c[a],
                                                    dateSelectionSegs: d[a],
                                                    eventDrag: p[a],
                                                    eventResize: f[a],
                                                    dayMaxEvents: o,
                                                    dayMaxEventRows: r,
                                                    clientWidth: t.clientWidth,
                                                    clientHeight:
                                                        t.clientHeight,
                                                    buildMoreLinkText: h,
                                                    onMoreClick:
                                                        e.handleMoreLinkClick,
                                                });
                                            })
                                        )
                                    ),
                                    !t.forPrint &&
                                        a &&
                                        a.currentFgEventSegs ===
                                            t.fgEventSegs &&
                                        Hr(is, {
                                            date: a.date,
                                            dateProfile: n,
                                            segs: a.allSegs,
                                            alignmentEl: a.dayEl,
                                            topAlignmentEl:
                                                1 === s
                                                    ? t.headerAlignElRef.current
                                                    : null,
                                            onCloseClick:
                                                e.handleMorePopoverClose,
                                            selectedInstanceId:
                                                t.eventSelection,
                                            hiddenInstances:
                                                (t.eventDrag
                                                    ? t.eventDrag
                                                          .affectedInstances
                                                    : null) ||
                                                (t.eventResize
                                                    ? t.eventResize
                                                          .affectedInstances
                                                    : null) ||
                                                {},
                                            todayRange: g,
                                        })
                                );
                            })
                        )
                    );
                }),
                (t.prototype.prepareHits = function () {
                    (this.rowPositions = new Mr(
                        this.rootEl,
                        this.rowRefs.collect().map(function (e) {
                            return e.getCellEls()[0];
                        }),
                        !1,
                        !0
                    )),
                        (this.colPositions = new Mr(
                            this.rootEl,
                            this.rowRefs.currentMap[0].getCellEls(),
                            !0,
                            !1
                        ));
                }),
                (t.prototype.positionToHit = function (e, t) {
                    var n = this.colPositions,
                        r = this.rowPositions,
                        o = n.leftToIndex(e),
                        i = r.topToIndex(t);
                    if (null != i && null != o)
                        return {
                            row: i,
                            col: o,
                            dateSpan: {
                                range: this.getCellRange(i, o),
                                allDay: !0,
                            },
                            dayEl: this.getCellEl(i, o),
                            relativeRect: {
                                left: n.lefts[o],
                                right: n.rights[o],
                                top: r.tops[i],
                                bottom: r.bottoms[i],
                            },
                        };
                }),
                (t.prototype.getCellEl = function (e, t) {
                    return this.rowRefs.currentMap[e].getCellEls()[t];
                }),
                (t.prototype.getCellRange = function (e, t) {
                    var n = this.props.cells[e][t].date;
                    return { start: n, end: ve(n, 1) };
                }),
                t
            );
        })(oo);
    function ss(e) {
        return "function" == typeof e
            ? e
            : function (t) {
                  return "+" + t + " " + e;
              };
    }
    function ls(e) {
        return e.eventRange.def.allDay;
    }
    var us = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.slicer = new cs()),
                    (t.tableRef = Ar()),
                    (t.handleRootEl = function (e) {
                        e
                            ? t.context.registerInteractiveComponent(t, {
                                  el: e,
                              })
                            : t.context.unregisterInteractiveComponent(t);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context;
                    return Hr(
                        as,
                        r(
                            { ref: this.tableRef, elRef: this.handleRootEl },
                            this.slicer.sliceProps(
                                e,
                                e.dateProfile,
                                e.nextDayThreshold,
                                t,
                                e.dayTableModel
                            ),
                            {
                                dateProfile: e.dateProfile,
                                cells: e.dayTableModel.cells,
                                colGroupNode: e.colGroupNode,
                                tableMinWidth: e.tableMinWidth,
                                renderRowIntro: e.renderRowIntro,
                                dayMaxEvents: e.dayMaxEvents,
                                dayMaxEventRows: e.dayMaxEventRows,
                                showWeekNumbers: e.showWeekNumbers,
                                expandRows: e.expandRows,
                                headerAlignElRef: e.headerAlignElRef,
                                clientWidth: e.clientWidth,
                                clientHeight: e.clientHeight,
                                forPrint: e.forPrint,
                            }
                        )
                    );
                }),
                (t.prototype.prepareHits = function () {
                    this.tableRef.current.prepareHits();
                }),
                (t.prototype.queryHit = function (e, t) {
                    var n = this.tableRef.current.positionToHit(e, t);
                    if (n)
                        return {
                            component: this,
                            dateSpan: n.dateSpan,
                            dayEl: n.dayEl,
                            rect: {
                                left: n.relativeRect.left,
                                right: n.relativeRect.right,
                                top: n.relativeRect.top,
                                bottom: n.relativeRect.bottom,
                            },
                            layer: 0,
                        };
                }),
                t
            );
        })(oo),
        cs = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.forceDayIfListItem = !0), t;
            }
            return (
                n(t, e),
                (t.prototype.sliceRange = function (e, t) {
                    return t.sliceRange(e);
                }),
                t
            );
        })(Hi),
        ds = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildDayTableModel = it(ps)),
                    (t.headerRef = Ar()),
                    (t.tableRef = Ar()),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.context,
                        n = t.options,
                        r = t.dateProfileGenerator,
                        o = this.props,
                        i = this.buildDayTableModel(o.dateProfile, r),
                        a =
                            n.dayHeaders &&
                            Hr(_i, {
                                ref: this.headerRef,
                                dateProfile: o.dateProfile,
                                dates: i.headerDates,
                                datesRepDistinctDays: 1 === i.rowCnt,
                            }),
                        s = function (t) {
                            return Hr(us, {
                                ref: e.tableRef,
                                dateProfile: o.dateProfile,
                                dayTableModel: i,
                                businessHours: o.businessHours,
                                dateSelection: o.dateSelection,
                                eventStore: o.eventStore,
                                eventUiBases: o.eventUiBases,
                                eventSelection: o.eventSelection,
                                eventDrag: o.eventDrag,
                                eventResize: o.eventResize,
                                nextDayThreshold: n.nextDayThreshold,
                                colGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                dayMaxEvents: n.dayMaxEvents,
                                dayMaxEventRows: n.dayMaxEventRows,
                                showWeekNumbers: n.weekNumbers,
                                expandRows: !o.isHeightAuto,
                                headerAlignElRef: e.headerElRef,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                forPrint: o.forPrint,
                            });
                        };
                    return n.dayMinWidth
                        ? this.renderHScrollLayout(
                              a,
                              s,
                              i.colCnt,
                              n.dayMinWidth
                          )
                        : this.renderSimpleLayout(a, s);
                }),
                t
            );
        })(Va);
    function ps(e, t) {
        var n = new Pi(e.renderRange, t);
        return new Ni(n, /year|month|week/.test(e.currentRangeUnit));
    }
    var fs = io({
            initialView: "dayGridMonth",
            optionRefiners: {
                moreLinkClick: _t,
                moreLinkClassNames: _t,
                moreLinkContent: _t,
                moreLinkDidMount: _t,
                moreLinkWillUnmount: _t,
            },
            views: {
                dayGrid: {
                    component: ds,
                    dateProfileGeneratorClass: (function (e) {
                        function t() {
                            return (
                                (null !== e && e.apply(this, arguments)) || this
                            );
                        }
                        return (
                            n(t, e),
                            (t.prototype.buildRenderRange = function (t, n, r) {
                                var o,
                                    i = this.props.dateEnv,
                                    a = e.prototype.buildRenderRange.call(
                                        this,
                                        t,
                                        n,
                                        r
                                    ),
                                    s = a.start,
                                    l = a.end;
                                (/^(year|month)$/.test(n) &&
                                    ((s = i.startOfWeek(s)),
                                    (o = i.startOfWeek(l)).valueOf() !==
                                        l.valueOf() && (l = he(o, 1))),
                                this.props.monthMode &&
                                    this.props.fixedWeekCount) &&
                                    (l = he(l, 6 - Math.ceil(me(s, l))));
                                return { start: s, end: l };
                            }),
                            t
                        );
                    })(Co),
                },
                dayGridDay: { type: "dayGrid", duration: { days: 1 } },
                dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: { months: 1 },
                    monthMode: !0,
                    fixedWeekCount: !0,
                },
            },
        }),
        hs = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.getKeyInfo = function () {
                    return { allDay: {}, timed: {} };
                }),
                (t.prototype.getKeysForDateSpan = function (e) {
                    return e.allDay ? ["allDay"] : ["timed"];
                }),
                (t.prototype.getKeysForEventDef = function (e) {
                    return e.allDay
                        ? un(e)
                            ? ["timed", "allDay"]
                            : ["allDay"]
                        : ["timed"];
                }),
                t
            );
        })(pr),
        vs = (function () {
            function e(e, t, n) {
                (this.positions = e),
                    (this.dateProfile = t),
                    (this.slatMetas = n);
            }
            return (
                (e.prototype.safeComputeTop = function (e) {
                    var t = this.dateProfile;
                    if (sn(t.currentRange, e)) {
                        var n = be(e),
                            r = e.valueOf() - n.valueOf();
                        if (r >= $e(t.slotMinTime) && r < $e(t.slotMaxTime))
                            return this.computeTimeTop(Ye(r));
                    }
                }),
                (e.prototype.computeDateTop = function (e, t) {
                    return (
                        t || (t = be(e)),
                        this.computeTimeTop(Ye(e.valueOf() - t.valueOf()))
                    );
                }),
                (e.prototype.computeTimeTop = function (e) {
                    var t,
                        n,
                        r = this.positions,
                        o = this.dateProfile,
                        i = this.slatMetas,
                        a = r.els.length,
                        s = i[1].date.valueOf() - i[0].date.valueOf(),
                        l = (e.milliseconds - $e(o.slotMinTime)) / s;
                    return (
                        (l = Math.max(0, l)),
                        (l = Math.min(a, l)),
                        (t = Math.floor(l)),
                        (n = l - (t = Math.min(t, a - 1))),
                        r.tops[t] + r.getHeight(t) * n
                    );
                }),
                e
            );
        })(),
        gs = [
            { hours: 1 },
            { minutes: 30 },
            { minutes: 15 },
            { seconds: 30 },
            { seconds: 15 },
        ],
        ms = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.rootElRef = Ar()), (t.slatElRefs = new Li()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context;
                    return Hr(
                        "div",
                        { className: "fc-timegrid-slots", ref: this.rootElRef },
                        Hr(
                            "table",
                            {
                                className: t.theme.getClass("table"),
                                style: {
                                    minWidth: e.tableMinWidth,
                                    width: e.clientWidth,
                                    height: e.minHeight,
                                },
                            },
                            e.tableColGroupNode,
                            Hr(ys, {
                                slatElRefs: this.slatElRefs,
                                axis: e.axis,
                                slatMetas: e.slatMetas,
                            })
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateSizing();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateSizing();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.props.onCoords && this.props.onCoords(null);
                }),
                (t.prototype.updateSizing = function () {
                    var e,
                        t = this.props;
                    t.onCoords &&
                        null !== t.clientWidth &&
                        this.rootElRef.current.offsetHeight &&
                        t.onCoords(
                            new vs(
                                new Mr(
                                    this.rootElRef.current,
                                    ((e = this.slatElRefs.currentMap),
                                    t.slatMetas.map(function (t) {
                                        return e[t.key];
                                    })),
                                    !1,
                                    !0
                                ),
                                this.props.dateProfile,
                                t.slatMetas
                            )
                        );
                }),
                t
            );
        })(jr);
    var ys = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        o = e.slatElRefs;
                    return Hr(
                        "tbody",
                        null,
                        e.slatMetas.map(function (i, a) {
                            var s = {
                                    time: i.time,
                                    date: t.dateEnv.toDate(i.date),
                                    view: t.viewApi,
                                },
                                l = [
                                    "fc-timegrid-slot",
                                    "fc-timegrid-slot-lane",
                                    i.isLabeled ? "" : "fc-timegrid-slot-minor",
                                ];
                            return Hr(
                                "tr",
                                { key: i.key, ref: o.createRef(i.key) },
                                e.axis && Hr(Ss, r({}, i)),
                                Hr(
                                    uo,
                                    {
                                        hookProps: s,
                                        classNames: n.slotLaneClassNames,
                                        content: n.slotLaneContent,
                                        didMount: n.slotLaneDidMount,
                                        willUnmount: n.slotLaneWillUnmount,
                                    },
                                    function (e, t, n, r) {
                                        return Hr(
                                            "td",
                                            {
                                                ref: e,
                                                className: l
                                                    .concat(t)
                                                    .join(" "),
                                                "data-time": i.isoTimeStr,
                                            },
                                            r
                                        );
                                    }
                                )
                            );
                        })
                    );
                }),
                t
            );
        })(jr),
        Es = St({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short",
        });
    function Ss(e) {
        var t = [
            "fc-timegrid-slot",
            "fc-timegrid-slot-label",
            e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
        ];
        return Hr(zr.Consumer, null, function (n) {
            if (e.isLabeled) {
                var r = n.dateEnv,
                    o = n.options,
                    i = n.viewApi,
                    a =
                        null == o.slotLabelFormat
                            ? Es
                            : Array.isArray(o.slotLabelFormat)
                            ? St(o.slotLabelFormat[0])
                            : St(o.slotLabelFormat),
                    s = {
                        level: 0,
                        time: e.time,
                        date: r.toDate(e.date),
                        view: i,
                        text: r.format(e.date, a),
                    };
                return Hr(
                    uo,
                    {
                        hookProps: s,
                        classNames: o.slotLabelClassNames,
                        content: o.slotLabelContent,
                        defaultContent: Ds,
                        didMount: o.slotLabelDidMount,
                        willUnmount: o.slotLabelWillUnmount,
                    },
                    function (n, r, o, i) {
                        return Hr(
                            "td",
                            {
                                ref: n,
                                className: t.concat(r).join(" "),
                                "data-time": e.isoTimeStr,
                            },
                            Hr(
                                "div",
                                {
                                    className:
                                        "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
                                },
                                Hr(
                                    "div",
                                    {
                                        className:
                                            "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                                        ref: o,
                                    },
                                    i
                                )
                            )
                        );
                    }
                );
            }
            return Hr("td", {
                className: t.join(" "),
                "data-time": e.isoTimeStr,
            });
        });
    }
    function Ds(e) {
        return e.text;
    }
    function bs(e, t, n, r, o) {
        for (
            var i = new Date(0),
                a = e,
                s = Ye(0),
                l =
                    n ||
                    (function (e) {
                        var t, n, r;
                        for (t = gs.length - 1; t >= 0; t--)
                            if (
                                ((n = Ye(gs[t])),
                                null !== (r = Qe(n, e)) && r > 1)
                            )
                                return n;
                        return e;
                    })(r),
                u = [];
            $e(a) < $e(t);

        ) {
            var c = o.add(i, a),
                d = null !== Qe(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: nt(c),
                isLabeled: d,
            }),
                (a = Xe(a, r)),
                (s = Xe(s, r));
        }
        return u;
    }
    var Cs = St({ week: "short" }),
        ws = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.allDaySplitter = new hs()),
                    (t.headerElRef = Ar()),
                    (t.rootElRef = Ar()),
                    (t.scrollerElRef = Ar()),
                    (t.state = { slatCoords: null }),
                    (t.handleScrollTopRequest = function (e) {
                        var n = t.scrollerElRef.current;
                        n && (n.scrollTop = e);
                    }),
                    (t.renderHeadAxis = function (e) {
                        void 0 === e && (e = "");
                        var n = t.context.options,
                            o = t.props.dateProfile.renderRange,
                            i = ye(o.start, o.end),
                            a =
                                n.navLinks && 1 === i
                                    ? {
                                          "data-navlink": gr(o.start, "week"),
                                          tabIndex: 0,
                                      }
                                    : {};
                        return n.weekNumbers
                            ? Hr(
                                  ca,
                                  { date: o.start, defaultFormat: Cs },
                                  function (t, n, o, i) {
                                      return Hr(
                                          "th",
                                          {
                                              ref: t,
                                              className: [
                                                  "fc-timegrid-axis",
                                                  "fc-scrollgrid-shrink",
                                              ]
                                                  .concat(n)
                                                  .join(" "),
                                          },
                                          Hr(
                                              "div",
                                              {
                                                  className:
                                                      "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                                                  style: { height: e },
                                              },
                                              Hr(
                                                  "a",
                                                  r(
                                                      {
                                                          ref: o,
                                                          className:
                                                              "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                                      },
                                                      a
                                                  ),
                                                  i
                                              )
                                          )
                                      );
                                  }
                              )
                            : Hr(
                                  "th",
                                  { className: "fc-timegrid-axis" },
                                  Hr("div", {
                                      className: "fc-timegrid-axis-frame",
                                      style: { height: e },
                                  })
                              );
                    }),
                    (t.renderTableRowAxis = function (e) {
                        var n = t.context,
                            r = n.options,
                            o = n.viewApi,
                            i = { text: r.allDayText, view: o };
                        return Hr(
                            uo,
                            {
                                hookProps: i,
                                classNames: r.allDayClassNames,
                                content: r.allDayContent,
                                defaultContent: Rs,
                                didMount: r.allDayDidMount,
                                willUnmount: r.allDayWillUnmount,
                            },
                            function (t, n, r, o) {
                                return Hr(
                                    "td",
                                    {
                                        ref: t,
                                        className: [
                                            "fc-timegrid-axis",
                                            "fc-scrollgrid-shrink",
                                        ]
                                            .concat(n)
                                            .join(" "),
                                    },
                                    Hr(
                                        "div",
                                        {
                                            className:
                                                "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" +
                                                (null == e
                                                    ? " fc-timegrid-axis-frame-liquid"
                                                    : ""),
                                            style: { height: e },
                                        },
                                        Hr(
                                            "span",
                                            {
                                                className:
                                                    "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                                ref: r,
                                            },
                                            o
                                        )
                                    )
                                );
                            }
                        );
                    }),
                    (t.handleSlatCoords = function (e) {
                        t.setState({ slatCoords: e });
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.renderSimpleLayout = function (e, t, n) {
                    var r = this.context,
                        o = this.props,
                        i = [],
                        a = Ki(r.options);
                    return (
                        e &&
                            i.push({
                                type: "header",
                                key: "header",
                                isSticky: a,
                                chunk: {
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            }),
                        t &&
                            (i.push({
                                type: "body",
                                key: "all-day",
                                chunk: { content: t },
                            }),
                            i.push({
                                type: "body",
                                key: "all-day-divider",
                                outerContent: Hr(
                                    "tr",
                                    { className: "fc-scrollgrid-section" },
                                    Hr("td", {
                                        className:
                                            "fc-timegrid-divider " +
                                            r.theme.getClass("tableCellShaded"),
                                    })
                                ),
                            })),
                        i.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            expandRows: Boolean(r.options.expandRows),
                            chunk: {
                                scrollerElRef: this.scrollerElRef,
                                content: n,
                            },
                        }),
                        Hr(
                            yo,
                            { viewSpec: r.viewSpec, elRef: this.rootElRef },
                            function (e, t) {
                                return Hr(
                                    "div",
                                    {
                                        className: ["fc-timegrid"]
                                            .concat(t)
                                            .join(" "),
                                        ref: e,
                                    },
                                    Hr($i, {
                                        liquid: !o.isHeightAuto && !o.forPrint,
                                        cols: [{ width: "shrink" }],
                                        sections: i,
                                    })
                                );
                            }
                        )
                    );
                }),
                (t.prototype.renderHScrollLayout = function (
                    e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    a
                ) {
                    var s = this,
                        l = this.context.pluginHooks.scrollGridImpl;
                    if (!l) throw new Error("No ScrollGrid implementation");
                    var u = this.context,
                        c = this.props,
                        d = !c.forPrint && Ki(u.options),
                        p = !c.forPrint && Ji(u.options),
                        f = [];
                    e &&
                        f.push({
                            type: "header",
                            key: "header",
                            isSticky: d,
                            syncRowHeights: !0,
                            chunks: [
                                {
                                    key: "axis",
                                    rowContent: function (e) {
                                        return Hr(
                                            "tr",
                                            null,
                                            s.renderHeadAxis(
                                                e.rowSyncHeights[0]
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "cols",
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            ],
                        }),
                        t &&
                            (f.push({
                                type: "body",
                                key: "all-day",
                                syncRowHeights: !0,
                                chunks: [
                                    {
                                        key: "axis",
                                        rowContent: function (e) {
                                            return Hr(
                                                "tr",
                                                null,
                                                s.renderTableRowAxis(
                                                    e.rowSyncHeights[0]
                                                )
                                            );
                                        },
                                    },
                                    { key: "cols", content: t },
                                ],
                            }),
                            f.push({
                                key: "all-day-divider",
                                type: "body",
                                outerContent: Hr(
                                    "tr",
                                    { className: "fc-scrollgrid-section" },
                                    Hr("td", {
                                        colSpan: 2,
                                        className:
                                            "fc-timegrid-divider " +
                                            u.theme.getClass("tableCellShaded"),
                                    })
                                ),
                            }));
                    var h = u.options.nowIndicator;
                    return (
                        f.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            expandRows: Boolean(u.options.expandRows),
                            chunks: [
                                {
                                    key: "axis",
                                    content: function (e) {
                                        return Hr(
                                            "div",
                                            {
                                                className:
                                                    "fc-timegrid-axis-chunk",
                                            },
                                            Hr(
                                                "table",
                                                {
                                                    style: {
                                                        height: e.expandRows
                                                            ? e.clientHeight
                                                            : "",
                                                    },
                                                },
                                                e.tableColGroupNode,
                                                Hr(
                                                    "tbody",
                                                    null,
                                                    Hr(Ts, { slatMetas: i })
                                                )
                                            ),
                                            Hr(
                                                "div",
                                                {
                                                    className:
                                                        "fc-timegrid-now-indicator-container",
                                                },
                                                Hr(
                                                    Mi,
                                                    {
                                                        unit: h
                                                            ? "minute"
                                                            : "day",
                                                    },
                                                    function (e) {
                                                        var t =
                                                            h &&
                                                            a &&
                                                            a.safeComputeTop(e);
                                                        return "number" ==
                                                            typeof t
                                                            ? Hr(
                                                                  na,
                                                                  {
                                                                      isAxis: !0,
                                                                      date: e,
                                                                  },
                                                                  function (
                                                                      e,
                                                                      n,
                                                                      r,
                                                                      o
                                                                  ) {
                                                                      return Hr(
                                                                          "div",
                                                                          {
                                                                              ref: e,
                                                                              className:
                                                                                  [
                                                                                      "fc-timegrid-now-indicator-arrow",
                                                                                  ]
                                                                                      .concat(
                                                                                          n
                                                                                      )
                                                                                      .join(
                                                                                          " "
                                                                                      ),
                                                                              style: {
                                                                                  top: t,
                                                                              },
                                                                          },
                                                                          o
                                                                      );
                                                                  }
                                                              )
                                                            : null;
                                                    }
                                                )
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "cols",
                                    scrollerElRef: this.scrollerElRef,
                                    content: n,
                                },
                            ],
                        }),
                        p &&
                            f.push({
                                key: "footer",
                                type: "footer",
                                isSticky: !0,
                                chunks: [
                                    { key: "axis", content: Xi },
                                    { key: "cols", content: Xi },
                                ],
                            }),
                        Hr(
                            yo,
                            { viewSpec: u.viewSpec, elRef: this.rootElRef },
                            function (e, t) {
                                return Hr(
                                    "div",
                                    {
                                        className: ["fc-timegrid"]
                                            .concat(t)
                                            .join(" "),
                                        ref: e,
                                    },
                                    Hr(l, {
                                        liquid: !c.isHeightAuto && !c.forPrint,
                                        colGroups: [
                                            {
                                                width: "shrink",
                                                cols: [{ width: "shrink" }],
                                            },
                                            {
                                                cols: [
                                                    { span: r, minWidth: o },
                                                ],
                                            },
                                        ],
                                        sections: f,
                                    })
                                );
                            }
                        )
                    );
                }),
                (t.prototype.getAllDayMaxEventProps = function () {
                    var e = this.context.options,
                        t = e.dayMaxEvents,
                        n = e.dayMaxEventRows;
                    return (
                        (!0 !== t && !0 !== n) || ((t = void 0), (n = 5)),
                        { dayMaxEvents: t, dayMaxEventRows: n }
                    );
                }),
                t
            );
        })(oo);
    function Rs(e) {
        return e.text;
    }
    var Ts = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return this.props.slatMetas.map(function (e) {
                    return Hr("tr", { key: e.key }, Hr(Ss, r({}, e)));
                });
            }),
            t
        );
    })(jr);
    function ks(e, t) {
        var n,
            r = [];
        for (n = 0; n < t; n++) r.push([]);
        if (e) for (n = 0; n < e.length; n++) r[e[n].col].push(e[n]);
        return r;
    }
    function Ms(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a++)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: [],
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i);
            }
        } else for (var a = 0; a < t; a++) n[a] = null;
        return n;
    }
    function xs(e, t, n, r, o) {
        return (
            _s(e, t, n, r),
            (function (e, t) {
                for (var n = 0, r = e; n < r.length; n++) {
                    ((c = r[n]).level = null),
                        (c.forwardCoord = null),
                        (c.backwardCoord = null),
                        (c.forwardPressure = null);
                }
                var o,
                    i = (function (e) {
                        var t,
                            n,
                            r,
                            o = [];
                        for (t = 0; t < e.length; t++) {
                            for (
                                n = e[t], r = 0;
                                r < o.length && Is(n, o[r]).length;
                                r++
                            );
                            (n.level = r), (o[r] || (o[r] = [])).push(n);
                        }
                        return o;
                    })((e = hn(e, t)));
                if (
                    ((function (e) {
                        var t, n, r, o, i;
                        for (t = 0; t < e.length; t++)
                            for (n = e[t], r = 0; r < n.length; r++)
                                for (
                                    (o = n[r]).forwardSegs = [], i = t + 1;
                                    i < e.length;
                                    i++
                                )
                                    Is(o, e[i], o.forwardSegs);
                    })(i),
                    (o = i[0]))
                ) {
                    for (var a = 0, s = o; a < s.length; a++) {
                        Ps((c = s[a]));
                    }
                    for (var l = 0, u = o; l < u.length; l++) {
                        var c;
                        Ns((c = u[l]), 0, 0, t);
                    }
                }
                return e;
            })(e, o)
        );
    }
    function _s(e, t, n, r) {
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            (a.top = n.computeDateTop(a.start, t)),
                (a.bottom = Math.max(
                    a.top + (r || 0),
                    n.computeDateTop(a.end, t)
                ));
        }
    }
    function Is(e, t, n) {
        void 0 === n && (n = []);
        for (var r = 0; r < t.length; r++)
            (o = e),
                (i = t[r]),
                o.bottom > i.top && o.top < i.bottom && n.push(t[r]);
        var o, i;
        return n;
    }
    function Ps(e) {
        var t,
            n,
            r = e.forwardSegs,
            o = 0;
        if (null == e.forwardPressure) {
            for (t = 0; t < r.length; t++)
                Ps((n = r[t])), (o = Math.max(o, 1 + n.forwardPressure));
            e.forwardPressure = o;
        }
    }
    function Ns(e, t, n, r) {
        var o,
            i = e.forwardSegs;
        if (null == e.forwardCoord)
            for (
                i.length
                    ? (!(function (e, t) {
                          var n = e.map(Hs),
                              r = [
                                  { field: "forwardPressure", order: -1 },
                                  { field: "backwardCoord", order: 1 },
                              ].concat(t);
                          n.sort(function (e, t) {
                              return ae(e, t, r);
                          }),
                              n.map(function (e) {
                                  return e._seg;
                              });
                      })(i, r),
                      Ns(i[0], t + 1, n, r),
                      (e.forwardCoord = i[0].backwardCoord))
                    : (e.forwardCoord = 1),
                    e.backwardCoord =
                        e.forwardCoord - (e.forwardCoord - n) / (t + 1),
                    o = 0;
                o < i.length;
                o++
            )
                Ns(i[o], 0, e.forwardCoord, r);
    }
    function Hs(e) {
        var t = vn(e);
        return (
            (t.forwardPressure = e.forwardPressure),
            (t.backwardCoord = e.backwardCoord),
            t
        );
    }
    var Os = St({ hour: "numeric", minute: "2-digit", meridiem: !1 }),
        As = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = ["fc-timegrid-event", "fc-v-event"];
                    return (
                        this.props.isCondensed &&
                            e.push("fc-timegrid-event-condensed"),
                        Hr(
                            ea,
                            r({}, this.props, {
                                defaultTimeFormat: Os,
                                extraClassNames: e,
                            })
                        )
                    );
                }),
                t
            );
        })(jr);
    di.timeGridEventCondensedHeight = 30;
    var Us = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = this.context.options.selectMirror,
                        o =
                            (t.eventDrag && t.eventDrag.segs) ||
                            (t.eventResize && t.eventResize.segs) ||
                            (n && t.dateSelectionSegs) ||
                            [],
                        i =
                            (t.eventDrag && t.eventDrag.affectedInstances) ||
                            (t.eventResize &&
                                t.eventResize.affectedInstances) ||
                            {};
                    return Hr(
                        oa,
                        {
                            elRef: t.elRef,
                            date: t.date,
                            dateProfile: t.dateProfile,
                            todayRange: t.todayRange,
                            extraHookProps: t.extraHookProps,
                        },
                        function (a, s, l) {
                            return Hr(
                                "td",
                                r(
                                    {
                                        ref: a,
                                        className: ["fc-timegrid-col"]
                                            .concat(s, t.extraClassNames || [])
                                            .join(" "),
                                    },
                                    l,
                                    t.extraDataAttrs
                                ),
                                Hr(
                                    "div",
                                    { className: "fc-timegrid-col-frame" },
                                    Hr(
                                        "div",
                                        { className: "fc-timegrid-col-bg" },
                                        e.renderFillSegs(
                                            t.businessHourSegs,
                                            "non-business"
                                        ),
                                        e.renderFillSegs(
                                            t.bgEventSegs,
                                            "bg-event"
                                        ),
                                        e.renderFillSegs(
                                            t.dateSelectionSegs,
                                            "highlight"
                                        )
                                    ),
                                    Hr(
                                        "div",
                                        { className: "fc-timegrid-col-events" },
                                        e.renderFgSegs(t.fgEventSegs, i)
                                    ),
                                    Hr(
                                        "div",
                                        { className: "fc-timegrid-col-events" },
                                        e.renderFgSegs(
                                            o,
                                            {},
                                            Boolean(t.eventDrag),
                                            Boolean(t.eventResize),
                                            Boolean(n)
                                        )
                                    ),
                                    Hr(
                                        "div",
                                        {
                                            className:
                                                "fc-timegrid-now-indicator-container",
                                        },
                                        e.renderNowIndicator(t.nowIndicatorSegs)
                                    ),
                                    Hr(Ls, {
                                        date: t.date,
                                        dateProfile: t.dateProfile,
                                        todayRange: t.todayRange,
                                        extraHookProps: t.extraHookProps,
                                    })
                                )
                            );
                        }
                    );
                }),
                (t.prototype.renderFgSegs = function (e, t, n, r, o) {
                    var i = this.props;
                    return i.forPrint
                        ? this.renderPrintFgSegs(e)
                        : i.slatCoords
                        ? this.renderPositionedFgSegs(e, t, n, r, o)
                        : void 0;
                }),
                (t.prototype.renderPrintFgSegs = function (e) {
                    var t = this.props;
                    return (e = hn(e, this.context.options.eventOrder)).map(
                        function (e) {
                            return Hr(
                                "div",
                                {
                                    className: "fc-timegrid-event-harness",
                                    key: e.eventRange.instance.instanceId,
                                },
                                Hr(
                                    As,
                                    r(
                                        {
                                            seg: e,
                                            isDragging: !1,
                                            isResizing: !1,
                                            isDateSelecting: !1,
                                            isSelected: !1,
                                            isCondensed: !1,
                                        },
                                        Sn(e, t.todayRange, t.nowDate)
                                    )
                                )
                            );
                        }
                    );
                }),
                (t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
                    var a = this,
                        s = this.context,
                        l = this.props;
                    return (e = xs(
                        e,
                        l.date,
                        l.slatCoords,
                        s.options.eventMinHeight,
                        s.options.eventOrder
                    )).map(function (e) {
                        var s = e.eventRange.instance.instanceId,
                            u =
                                n || o || i
                                    ? r(
                                          { left: 0, right: 0 },
                                          a.computeSegTopBottomCss(e)
                                      )
                                    : a.computeFgSegPositionCss(e);
                        return Hr(
                            "div",
                            {
                                className:
                                    "fc-timegrid-event-harness" +
                                    (e.level > 0
                                        ? " fc-timegrid-event-harness-inset"
                                        : ""),
                                key: s,
                                style: r(
                                    { visibility: t[s] ? "hidden" : "" },
                                    u
                                ),
                            },
                            Hr(
                                As,
                                r(
                                    {
                                        seg: e,
                                        isDragging: n,
                                        isResizing: o,
                                        isDateSelecting: i,
                                        isSelected: s === l.eventSelection,
                                        isCondensed:
                                            e.bottom - e.top <
                                            di.timeGridEventCondensedHeight,
                                    },
                                    Sn(e, l.todayRange, l.nowDate)
                                )
                            )
                        );
                    });
                }),
                (t.prototype.renderFillSegs = function (e, t) {
                    var n = this,
                        o = this.context,
                        i = this.props;
                    if (i.slatCoords) {
                        _s(e, i.date, i.slatCoords, o.options.eventMinHeight);
                        var a = e.map(function (e) {
                            return Hr(
                                "div",
                                {
                                    key: bn(e.eventRange),
                                    className: "fc-timegrid-bg-harness",
                                    style: n.computeSegTopBottomCss(e),
                                },
                                "bg-event" === t
                                    ? Hr(
                                          la,
                                          r(
                                              { seg: e },
                                              Sn(e, i.todayRange, i.nowDate)
                                          )
                                      )
                                    : sa(t)
                            );
                        });
                        return Hr(Ur, null, a);
                    }
                }),
                (t.prototype.renderNowIndicator = function (e) {
                    var t = this.props,
                        n = t.slatCoords,
                        r = t.date;
                    if (n)
                        return e.map(function (e, t) {
                            return Hr(
                                na,
                                { isAxis: !1, date: r, key: t },
                                function (t, o, i, a) {
                                    return Hr(
                                        "div",
                                        {
                                            ref: t,
                                            className: [
                                                "fc-timegrid-now-indicator-line",
                                            ]
                                                .concat(o)
                                                .join(" "),
                                            style: {
                                                top: n.computeDateTop(
                                                    e.start,
                                                    r
                                                ),
                                            },
                                        },
                                        a
                                    );
                                }
                            );
                        });
                }),
                (t.prototype.computeFgSegPositionCss = function (e) {
                    var t,
                        n,
                        o = this.context,
                        i = o.isRtl,
                        a = o.options.slotEventOverlap,
                        s = e.backwardCoord,
                        l = e.forwardCoord;
                    a && (l = Math.min(1, s + 2 * (l - s))),
                        i ? ((t = 1 - l), (n = s)) : ((t = s), (n = 1 - l));
                    var u = {
                        zIndex: e.level + 1,
                        left: 100 * t + "%",
                        right: 100 * n + "%",
                    };
                    return (
                        a &&
                            e.forwardPressure &&
                            (u[i ? "marginLeft" : "marginRight"] = 20),
                        r(r({}, u), this.computeSegTopBottomCss(e))
                    );
                }),
                (t.prototype.computeSegTopBottomCss = function (e) {
                    return { top: e.top, bottom: -e.bottom };
                }),
                t
            );
        })(jr),
        Ls = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props;
                    return Hr(
                        ia,
                        {
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            extraHookProps: e.extraHookProps,
                        },
                        function (e, t) {
                            return (
                                t &&
                                Hr(
                                    "div",
                                    {
                                        className: "fc-timegrid-col-misc",
                                        ref: e,
                                    },
                                    t
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr),
        Ws = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.splitFgEventSegs = it(ks)),
                    (t.splitBgEventSegs = it(ks)),
                    (t.splitBusinessHourSegs = it(ks)),
                    (t.splitNowIndicatorSegs = it(ks)),
                    (t.splitDateSelectionSegs = it(ks)),
                    (t.splitEventDrag = it(Ms)),
                    (t.splitEventResize = it(Ms)),
                    (t.rootElRef = Ar()),
                    (t.cellElRefs = new Li()),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n =
                            this.context.options.nowIndicator &&
                            t.slatCoords &&
                            t.slatCoords.safeComputeTop(t.nowDate),
                        r = t.cells.length,
                        o = this.splitFgEventSegs(t.fgEventSegs, r),
                        i = this.splitBgEventSegs(t.bgEventSegs, r),
                        a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                        s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                        l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
                        u = this.splitEventDrag(t.eventDrag, r),
                        c = this.splitEventResize(t.eventResize, r);
                    return Hr(
                        "div",
                        { className: "fc-timegrid-cols", ref: this.rootElRef },
                        Hr(
                            "table",
                            {
                                style: {
                                    minWidth: t.tableMinWidth,
                                    width: t.clientWidth,
                                },
                            },
                            t.tableColGroupNode,
                            Hr(
                                "tbody",
                                null,
                                Hr(
                                    "tr",
                                    null,
                                    t.axis &&
                                        Hr(
                                            "td",
                                            {
                                                className:
                                                    "fc-timegrid-col fc-timegrid-axis",
                                            },
                                            Hr(
                                                "div",
                                                {
                                                    className:
                                                        "fc-timegrid-col-frame",
                                                },
                                                Hr(
                                                    "div",
                                                    {
                                                        className:
                                                            "fc-timegrid-now-indicator-container",
                                                    },
                                                    "number" == typeof n &&
                                                        Hr(
                                                            na,
                                                            {
                                                                isAxis: !0,
                                                                date: t.nowDate,
                                                            },
                                                            function (
                                                                e,
                                                                t,
                                                                r,
                                                                o
                                                            ) {
                                                                return Hr(
                                                                    "div",
                                                                    {
                                                                        ref: e,
                                                                        className:
                                                                            [
                                                                                "fc-timegrid-now-indicator-arrow",
                                                                            ]
                                                                                .concat(
                                                                                    t
                                                                                )
                                                                                .join(
                                                                                    " "
                                                                                ),
                                                                        style: {
                                                                            top: n,
                                                                        },
                                                                    },
                                                                    o
                                                                );
                                                            }
                                                        )
                                                )
                                            )
                                        ),
                                    t.cells.map(function (n, r) {
                                        return Hr(Us, {
                                            key: n.key,
                                            elRef: e.cellElRefs.createRef(
                                                n.key
                                            ),
                                            dateProfile: t.dateProfile,
                                            date: n.date,
                                            nowDate: t.nowDate,
                                            todayRange: t.todayRange,
                                            extraHookProps: n.extraHookProps,
                                            extraDataAttrs: n.extraDataAttrs,
                                            extraClassNames: n.extraClassNames,
                                            fgEventSegs: o[r],
                                            bgEventSegs: i[r],
                                            businessHourSegs: a[r],
                                            nowIndicatorSegs: s[r],
                                            dateSelectionSegs: l[r],
                                            eventDrag: u[r],
                                            eventResize: c[r],
                                            slatCoords: t.slatCoords,
                                            eventSelection: t.eventSelection,
                                            forPrint: t.forPrint,
                                        });
                                    })
                                )
                            )
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateCoords();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateCoords();
                }),
                (t.prototype.updateCoords = function () {
                    var e,
                        t = this.props;
                    t.onColCoords &&
                        null !== t.clientWidth &&
                        t.onColCoords(
                            new Mr(
                                this.rootElRef.current,
                                ((e = this.cellElRefs.currentMap),
                                t.cells.map(function (t) {
                                    return e[t.key];
                                })),
                                !0,
                                !1
                            )
                        );
                }),
                t
            );
        })(jr);
    var Vs = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.processSlotOptions = it(zs)),
                (t.state = { slatCoords: null }),
                (t.handleScrollRequest = function (e) {
                    var n = t.props.onScrollTopRequest,
                        r = t.state.slatCoords;
                    if (n && r) {
                        if (e.time) {
                            var o = r.computeTimeTop(e.time);
                            (o = Math.ceil(o)) && o++, n(o);
                        }
                        return !0;
                    }
                }),
                (t.handleColCoords = function (e) {
                    t.colCoords = e;
                }),
                (t.handleSlatCoords = function (e) {
                    t.setState({ slatCoords: e }),
                        t.props.onSlatCoords && t.props.onSlatCoords(e);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return Hr(
                    "div",
                    {
                        className: "fc-timegrid-body",
                        ref: e.rootElRef,
                        style: {
                            width: e.clientWidth,
                            minWidth: e.tableMinWidth,
                        },
                    },
                    Hr(ms, {
                        axis: e.axis,
                        dateProfile: e.dateProfile,
                        slatMetas: e.slatMetas,
                        clientWidth: e.clientWidth,
                        minHeight: e.expandRows ? e.clientHeight : "",
                        tableMinWidth: e.tableMinWidth,
                        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                        onCoords: this.handleSlatCoords,
                    }),
                    Hr(Ws, {
                        cells: e.cells,
                        axis: e.axis,
                        dateProfile: e.dateProfile,
                        businessHourSegs: e.businessHourSegs,
                        bgEventSegs: e.bgEventSegs,
                        fgEventSegs: e.fgEventSegs,
                        dateSelectionSegs: e.dateSelectionSegs,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        todayRange: e.todayRange,
                        nowDate: e.nowDate,
                        nowIndicatorSegs: e.nowIndicatorSegs,
                        clientWidth: e.clientWidth,
                        tableMinWidth: e.tableMinWidth,
                        tableColGroupNode: e.tableColGroupNode,
                        slatCoords: t.slatCoords,
                        onColCoords: this.handleColCoords,
                        forPrint: e.forPrint,
                    })
                );
            }),
            (t.prototype.componentDidMount = function () {
                this.scrollResponder = this.context.createScrollResponder(
                    this.handleScrollRequest
                );
            }),
            (t.prototype.componentDidUpdate = function (e) {
                this.scrollResponder.update(
                    e.dateProfile !== this.props.dateProfile
                );
            }),
            (t.prototype.componentWillUnmount = function () {
                this.scrollResponder.detach();
            }),
            (t.prototype.positionToHit = function (e, t) {
                var n = this.context,
                    r = n.dateEnv,
                    o = n.options,
                    i = this.colCoords,
                    a = this.props.dateProfile,
                    s = this.state.slatCoords,
                    l = this.processSlotOptions(
                        this.props.slotDuration,
                        o.snapDuration
                    ),
                    u = l.snapDuration,
                    c = l.snapsPerSlot,
                    d = i.leftToIndex(e),
                    p = s.positions.topToIndex(t);
                if (null != d && null != p) {
                    var f = s.positions.tops[p],
                        h = s.positions.getHeight(p),
                        v = (t - f) / h,
                        g = p * c + Math.floor(v * c),
                        m = this.props.cells[d].date,
                        y = Xe(a.slotMinTime, Ke(u, g)),
                        E = r.add(m, y);
                    return {
                        col: d,
                        dateSpan: {
                            range: { start: E, end: r.add(E, u) },
                            allDay: !1,
                        },
                        dayEl: i.els[d],
                        relativeRect: {
                            left: i.lefts[d],
                            right: i.rights[d],
                            top: f,
                            bottom: f + h,
                        },
                    };
                }
            }),
            t
        );
    })(jr);
    function zs(e, t) {
        var n = t || e,
            r = Qe(e, n);
        return (
            null === r && ((n = e), (r = 1)),
            { snapDuration: n, snapsPerSlot: r }
        );
    }
    var Fs = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.buildDayRanges = it(Bs)),
                (t.slicer = new js()),
                (t.timeColsRef = Ar()),
                (t.handleRootEl = function (e) {
                    e
                        ? t.context.registerInteractiveComponent(t, { el: e })
                        : t.context.unregisterInteractiveComponent(t);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    o = t.dateProfile,
                    i = t.dayTableModel,
                    a = n.options.nowIndicator,
                    s = this.buildDayRanges(i, o, n.dateEnv);
                return Hr(Mi, { unit: a ? "minute" : "day" }, function (l, u) {
                    return Hr(
                        Vs,
                        r(
                            { ref: e.timeColsRef, rootElRef: e.handleRootEl },
                            e.slicer.sliceProps(t, o, null, n, s),
                            {
                                forPrint: t.forPrint,
                                axis: t.axis,
                                dateProfile: o,
                                slatMetas: t.slatMetas,
                                slotDuration: t.slotDuration,
                                cells: i.cells[0],
                                tableColGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                expandRows: t.expandRows,
                                nowDate: l,
                                nowIndicatorSegs:
                                    a && e.slicer.sliceNowDate(l, n, s),
                                todayRange: u,
                                onScrollTopRequest: t.onScrollTopRequest,
                                onSlatCoords: t.onSlatCoords,
                            }
                        )
                    );
                });
            }),
            (t.prototype.queryHit = function (e, t) {
                var n = this.timeColsRef.current.positionToHit(e, t);
                if (n)
                    return {
                        component: this,
                        dateSpan: n.dateSpan,
                        dayEl: n.dayEl,
                        rect: {
                            left: n.relativeRect.left,
                            right: n.relativeRect.right,
                            top: n.relativeRect.top,
                            bottom: n.relativeRect.bottom,
                        },
                        layer: 0,
                    };
            }),
            t
        );
    })(oo);
    function Bs(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime),
            });
        }
        return r;
    }
    var js = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.sliceRange = function (e, t) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var o = nn(e, t[r]);
                        o &&
                            n.push({
                                start: o.start,
                                end: o.end,
                                isStart:
                                    o.start.valueOf() === e.start.valueOf(),
                                isEnd: o.end.valueOf() === e.end.valueOf(),
                                col: r,
                            });
                    }
                    return n;
                }),
                t
            );
        })(Hi),
        Gs = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildTimeColsModel = it(qs)),
                    (t.buildSlatMetas = it(bs)),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.context,
                        n = t.options,
                        o = t.dateEnv,
                        i = t.dateProfileGenerator,
                        a = this.props,
                        s = a.dateProfile,
                        l = this.buildTimeColsModel(s, i),
                        u = this.allDaySplitter.splitProps(a),
                        c = this.buildSlatMetas(
                            s.slotMinTime,
                            s.slotMaxTime,
                            n.slotLabelInterval,
                            n.slotDuration,
                            o
                        ),
                        d = n.dayMinWidth,
                        p = !d,
                        f = d,
                        h =
                            n.dayHeaders &&
                            Hr(_i, {
                                dates: l.headerDates,
                                dateProfile: s,
                                datesRepDistinctDays: !0,
                                renderIntro: p ? this.renderHeadAxis : null,
                            }),
                        v =
                            !1 !== n.allDaySlot &&
                            function (t) {
                                return Hr(
                                    us,
                                    r(
                                        {},
                                        u.allDay,
                                        {
                                            dateProfile: s,
                                            dayTableModel: l,
                                            nextDayThreshold:
                                                n.nextDayThreshold,
                                            tableMinWidth: t.tableMinWidth,
                                            colGroupNode: t.tableColGroupNode,
                                            renderRowIntro: p
                                                ? e.renderTableRowAxis
                                                : null,
                                            showWeekNumbers: !1,
                                            expandRows: !1,
                                            headerAlignElRef: e.headerElRef,
                                            clientWidth: t.clientWidth,
                                            clientHeight: t.clientHeight,
                                            forPrint: a.forPrint,
                                        },
                                        e.getAllDayMaxEventProps()
                                    )
                                );
                            },
                        g = function (t) {
                            return Hr(
                                Fs,
                                r({}, u.timed, {
                                    dayTableModel: l,
                                    dateProfile: s,
                                    axis: p,
                                    slotDuration: n.slotDuration,
                                    slatMetas: c,
                                    forPrint: a.forPrint,
                                    tableColGroupNode: t.tableColGroupNode,
                                    tableMinWidth: t.tableMinWidth,
                                    clientWidth: t.clientWidth,
                                    clientHeight: t.clientHeight,
                                    onSlatCoords: e.handleSlatCoords,
                                    expandRows: t.expandRows,
                                    onScrollTopRequest:
                                        e.handleScrollTopRequest,
                                })
                            );
                        };
                    return f
                        ? this.renderHScrollLayout(
                              h,
                              v,
                              g,
                              l.colCnt,
                              d,
                              c,
                              this.state.slatCoords
                          )
                        : this.renderSimpleLayout(h, v, g);
                }),
                t
            );
        })(ws);
    function qs(e, t) {
        var n = new Pi(e.renderRange, t);
        return new Ni(n, !1);
    }
    var Ys = io({
            initialView: "timeGridWeek",
            optionRefiners: { allDaySlot: Boolean },
            views: {
                timeGrid: {
                    component: Gs,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0,
                },
                timeGridDay: { type: "timeGrid", duration: { days: 1 } },
                timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
            },
        }),
        Zs = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = e.dayDate,
                        n = e.todayRange,
                        o = this.context,
                        i = o.theme,
                        a = o.dateEnv,
                        s = o.options,
                        l = o.viewApi,
                        u = hr(t, n),
                        c = s.listDayFormat ? a.format(t, s.listDayFormat) : "",
                        d = s.listDaySideFormat
                            ? a.format(t, s.listDaySideFormat)
                            : "",
                        p = s.navLinks ? gr(t) : null,
                        f = r(
                            {
                                date: a.toDate(t),
                                view: l,
                                text: c,
                                sideText: d,
                                navLinkData: p,
                            },
                            u
                        ),
                        h = ["fc-list-day"].concat(vr(u, i));
                    return Hr(
                        uo,
                        {
                            hookProps: f,
                            classNames: s.dayHeaderClassNames,
                            content: s.dayHeaderContent,
                            defaultContent: Xs,
                            didMount: s.dayHeaderDidMount,
                            willUnmount: s.dayHeaderWillUnmount,
                        },
                        function (e, n, r, o) {
                            return Hr(
                                "tr",
                                {
                                    ref: e,
                                    className: h.concat(n).join(" "),
                                    "data-date": tt(t),
                                },
                                Hr(
                                    "th",
                                    { colSpan: 3 },
                                    Hr(
                                        "div",
                                        {
                                            className:
                                                "fc-list-day-cushion " +
                                                i.getClass("tableCellShaded"),
                                            ref: r,
                                        },
                                        o
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr);
    function Xs(e) {
        var t = e.navLinkData
            ? { "data-navlink": e.navLinkData, tabIndex: 0 }
            : {};
        return Hr(
            Ur,
            null,
            e.text && Hr("a", r({ className: "fc-list-day-text" }, t), e.text),
            e.sideText &&
                Hr(
                    "a",
                    r({ className: "fc-list-day-side-text" }, t),
                    e.sideText
                )
        );
    }
    var Ks = St({ hour: "numeric", minute: "2-digit", meridiem: "short" }),
        Js = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = e.seg,
                        r = t.options.eventTimeFormat || Ks;
                    return Hr(
                        Qi,
                        {
                            seg: n,
                            timeText: "",
                            disableDragging: !0,
                            disableResizing: !0,
                            defaultContent: $s,
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                            isSelected: e.isSelected,
                            isDragging: e.isDragging,
                            isResizing: e.isResizing,
                            isDateSelecting: e.isDateSelecting,
                        },
                        function (e, o, i, a, s) {
                            return Hr(
                                "tr",
                                {
                                    className: [
                                        "fc-list-event",
                                        s.event.url
                                            ? "fc-event-forced-url"
                                            : "",
                                    ]
                                        .concat(o)
                                        .join(" "),
                                    ref: e,
                                },
                                (function (e, t, n) {
                                    var r = n.options;
                                    if (!1 !== r.displayEventTime) {
                                        var o = e.eventRange.def,
                                            i = e.eventRange.instance,
                                            a = !1,
                                            s = void 0;
                                        if (
                                            (o.allDay
                                                ? (a = !0)
                                                : $t(e.eventRange.range)
                                                ? e.isStart
                                                    ? (s = En(
                                                          e,
                                                          t,
                                                          n,
                                                          null,
                                                          null,
                                                          i.range.start,
                                                          e.end
                                                      ))
                                                    : e.isEnd
                                                    ? (s = En(
                                                          e,
                                                          t,
                                                          n,
                                                          null,
                                                          null,
                                                          e.start,
                                                          i.range.end
                                                      ))
                                                    : (a = !0)
                                                : (s = En(e, t, n)),
                                            a)
                                        ) {
                                            var l = {
                                                text: n.options.allDayText,
                                                view: n.viewApi,
                                            };
                                            return Hr(
                                                uo,
                                                {
                                                    hookProps: l,
                                                    classNames:
                                                        r.allDayClassNames,
                                                    content: r.allDayContent,
                                                    defaultContent: Qs,
                                                    didMount: r.allDayDidMount,
                                                    willUnmount:
                                                        r.allDayWillUnmount,
                                                },
                                                function (e, t, n, r) {
                                                    return Hr(
                                                        "td",
                                                        {
                                                            className: [
                                                                "fc-list-event-time",
                                                            ]
                                                                .concat(t)
                                                                .join(" "),
                                                            ref: e,
                                                        },
                                                        r
                                                    );
                                                }
                                            );
                                        }
                                        return Hr(
                                            "td",
                                            { className: "fc-list-event-time" },
                                            s
                                        );
                                    }
                                    return null;
                                })(n, r, t),
                                Hr(
                                    "td",
                                    { className: "fc-list-event-graphic" },
                                    Hr("span", {
                                        className: "fc-list-event-dot",
                                        style: {
                                            borderColor:
                                                s.borderColor ||
                                                s.backgroundColor,
                                        },
                                    })
                                ),
                                Hr(
                                    "td",
                                    {
                                        className: "fc-list-event-title",
                                        ref: i,
                                    },
                                    a
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(jr);
    function $s(e) {
        var t = e.event,
            n = t.url;
        return Hr("a", r({}, n ? { href: n } : {}), t.title);
    }
    function Qs(e) {
        return e.text;
    }
    var el = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.computeDateVars = it(nl)),
                (t.eventStoreToSegs = it(t._eventStoreToSegs)),
                (t.setRootEl = function (e) {
                    e
                        ? t.context.registerInteractiveComponent(t, { el: e })
                        : t.context.unregisterInteractiveComponent(t);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = [
                        "fc-list",
                        n.theme.getClass("table"),
                        !1 !== n.options.stickyHeaderDates
                            ? "fc-list-sticky"
                            : "",
                    ],
                    o = this.computeDateVars(t.dateProfile),
                    i = o.dayDates,
                    a = o.dayRanges,
                    s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
                return Hr(
                    yo,
                    { viewSpec: n.viewSpec, elRef: this.setRootEl },
                    function (n, o) {
                        return Hr(
                            "div",
                            { ref: n, className: r.concat(o).join(" ") },
                            Hr(
                                Ui,
                                {
                                    liquid: !t.isHeightAuto,
                                    overflowX: t.isHeightAuto
                                        ? "visible"
                                        : "hidden",
                                    overflowY: t.isHeightAuto
                                        ? "visible"
                                        : "auto",
                                },
                                s.length > 0
                                    ? e.renderSegList(s, i)
                                    : e.renderEmptyMessage()
                            )
                        );
                    }
                );
            }),
            (t.prototype.renderEmptyMessage = function () {
                var e = this.context,
                    t = e.options,
                    n = e.viewApi,
                    r = { text: t.noEventsText, view: n };
                return Hr(
                    uo,
                    {
                        hookProps: r,
                        classNames: t.noEventsClassNames,
                        content: t.noEventsContent,
                        defaultContent: tl,
                        didMount: t.noEventsDidMount,
                        willUnmount: t.noEventsWillUnmount,
                    },
                    function (e, t, n, r) {
                        return Hr(
                            "div",
                            {
                                className: ["fc-list-empty"]
                                    .concat(t)
                                    .join(" "),
                                ref: e,
                            },
                            Hr(
                                "div",
                                { className: "fc-list-empty-cushion", ref: n },
                                r
                            )
                        );
                    }
                );
            }),
            (t.prototype.renderSegList = function (e, t) {
                var n = this.context,
                    o = n.theme,
                    i = n.options,
                    a = (function (e) {
                        var t,
                            n,
                            r = [];
                        for (t = 0; t < e.length; t++)
                            (n = e[t]),
                                (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                        return r;
                    })(e);
                return Hr(Mi, { unit: "day" }, function (e, n) {
                    for (var s = [], l = 0; l < a.length; l++) {
                        var u = a[l];
                        if (u) {
                            var c = t[l].toISOString();
                            s.push(
                                Hr(Zs, { key: c, dayDate: t[l], todayRange: n })
                            );
                            for (
                                var d = 0, p = (u = hn(u, i.eventOrder));
                                d < p.length;
                                d++
                            ) {
                                var f = p[d];
                                s.push(
                                    Hr(
                                        Js,
                                        r(
                                            {
                                                key:
                                                    c +
                                                    ":" +
                                                    f.eventRange.instance
                                                        .instanceId,
                                                seg: f,
                                                isDragging: !1,
                                                isResizing: !1,
                                                isDateSelecting: !1,
                                                isSelected: !1,
                                            },
                                            Sn(f, n, e)
                                        )
                                    )
                                );
                            }
                        }
                    }
                    return Hr(
                        "table",
                        { className: "fc-list-table " + o.getClass("table") },
                        Hr("tbody", null, s)
                    );
                });
            }),
            (t.prototype._eventStoreToSegs = function (e, t, n) {
                return this.eventRangesToSegs(
                    ln(
                        e,
                        t,
                        this.props.dateProfile.activeRange,
                        this.context.options.nextDayThreshold
                    ).fg,
                    n
                );
            }),
            (t.prototype.eventRangesToSegs = function (e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.eventRangeToSegs(i, t));
                }
                return n;
            }),
            (t.prototype.eventRangeToSegs = function (e, t) {
                var n,
                    r,
                    o,
                    i = this.context.dateEnv,
                    a = this.context.options.nextDayThreshold,
                    s = e.range,
                    l = e.def.allDay,
                    u = [];
                for (n = 0; n < t.length; n++)
                    if (
                        (r = nn(s, t[n])) &&
                        ((o = {
                            component: this,
                            eventRange: e,
                            start: r.start,
                            end: r.end,
                            isStart:
                                e.isStart &&
                                r.start.valueOf() === s.start.valueOf(),
                            isEnd:
                                e.isEnd && r.end.valueOf() === s.end.valueOf(),
                            dayIndex: n,
                        }),
                        u.push(o),
                        !o.isEnd &&
                            !l &&
                            n + 1 < t.length &&
                            s.end < i.add(t[n + 1].start, a))
                    ) {
                        (o.end = s.end), (o.isEnd = !0);
                        break;
                    }
                return u;
            }),
            t
        );
    })(oo);
    function tl(e) {
        return e.text;
    }
    function nl(e) {
        for (
            var t = be(e.renderRange.start),
                n = e.renderRange.end,
                r = [],
                o = [];
            t < n;

        )
            r.push(t), o.push({ start: t, end: ve(t, 1) }), (t = ve(t, 1));
        return { dayDates: r, dayRanges: o };
    }
    function rl(e) {
        return !1 === e ? null : St(e);
    }
    var ol = io({
            optionRefiners: {
                listDayFormat: rl,
                listDaySideFormat: rl,
                noEventsClassNames: _t,
                noEventsContent: _t,
                noEventsDidMount: _t,
                noEventsWillUnmount: _t,
            },
            views: {
                list: {
                    component: el,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    },
                },
                listDay: {
                    type: "list",
                    duration: { days: 1 },
                    listDayFormat: { weekday: "long" },
                },
                listWeek: {
                    type: "list",
                    duration: { weeks: 1 },
                    listDayFormat: { weekday: "long" },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    },
                },
                listMonth: {
                    type: "list",
                    duration: { month: 1 },
                    listDaySideFormat: { weekday: "long" },
                },
                listYear: {
                    type: "list",
                    duration: { year: 1 },
                    listDaySideFormat: { weekday: "long" },
                },
            },
        }),
        il = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), t;
        })(Pr);
    (il.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body",
    }),
        (il.prototype.baseIconClass = "fa"),
        (il.prototype.iconClasses = {
            close: "fa-times",
            prev: "fa-chevron-left",
            next: "fa-chevron-right",
            prevYear: "fa-angle-double-left",
            nextYear: "fa-angle-double-right",
        }),
        (il.prototype.rtlIconClasses = {
            prev: "fa-chevron-right",
            next: "fa-chevron-left",
            prevYear: "fa-angle-double-right",
            nextYear: "fa-angle-double-left",
        }),
        (il.prototype.iconOverrideOption = "bootstrapFontAwesome"),
        (il.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
        (il.prototype.iconOverridePrefix = "fa-");
    var al = io({ themeClasses: { bootstrap: il } });
    var sl = io({
        eventSourceDefs: [
            {
                parseMeta: function (e) {
                    var t = e.googleCalendarId;
                    return (
                        !t &&
                            e.url &&
                            (t = (function (e) {
                                var t;
                                if (
                                    /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(
                                        e
                                    )
                                )
                                    return e;
                                if (
                                    (t =
                                        /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(
                                            e
                                        )) ||
                                    (t =
                                        /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(
                                            e
                                        ))
                                )
                                    return decodeURIComponent(t[1]);
                            })(e.url)),
                        t
                            ? {
                                  googleCalendarId: t,
                                  googleCalendarApiKey: e.googleCalendarApiKey,
                                  googleCalendarApiBase:
                                      e.googleCalendarApiBase,
                                  extraParams: e.extraParams,
                              }
                            : null
                    );
                },
                fetch: function (e, t, n) {
                    var o = e.context,
                        i = o.dateEnv,
                        a = o.options,
                        s = e.eventSource.meta,
                        l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                    if (l) {
                        var u = (function (e) {
                                var t = e.googleCalendarApiBase;
                                t ||
                                    (t =
                                        "https://www.googleapis.com/calendar/v3/calendars");
                                return (
                                    t +
                                    "/" +
                                    encodeURIComponent(e.googleCalendarId) +
                                    "/events"
                                );
                            })(s),
                            c = s.extraParams,
                            d = "function" == typeof c ? c() : c,
                            p = (function (e, t, n, o) {
                                var i, a, s;
                                o.canComputeOffset
                                    ? ((a = o.formatIso(e.start)),
                                      (s = o.formatIso(e.end)))
                                    : ((a = ve(e.start, -1).toISOString()),
                                      (s = ve(e.end, 1).toISOString()));
                                (i = r(r({}, n || {}), {
                                    key: t,
                                    timeMin: a,
                                    timeMax: s,
                                    singleEvents: !0,
                                    maxResults: 9999,
                                })),
                                    "local" !== o.timeZone &&
                                        (i.timeZone = o.timeZone);
                                return i;
                            })(e.range, l, d, i);
                        Wo(
                            "GET",
                            u,
                            p,
                            function (e, r) {
                                var o, i;
                                e.error
                                    ? n({
                                          message:
                                              "Google Calendar API: " +
                                              e.error.message,
                                          errors: e.error.errors,
                                          xhr: r,
                                      })
                                    : t({
                                          rawEvents:
                                              ((o = e.items),
                                              (i = p.timeZone),
                                              o.map(function (e) {
                                                  return (function (e, t) {
                                                      var n =
                                                          e.htmlLink || null;
                                                      n &&
                                                          t &&
                                                          (n = (function (
                                                              e,
                                                              t
                                                          ) {
                                                              return e.replace(
                                                                  /(\?.*?)?(#|$)/,
                                                                  function (
                                                                      e,
                                                                      n,
                                                                      r
                                                                  ) {
                                                                      return (
                                                                          (n
                                                                              ? n +
                                                                                "&"
                                                                              : "?") +
                                                                          t +
                                                                          r
                                                                      );
                                                                  }
                                                              );
                                                          })(n, "ctz=" + t));
                                                      return {
                                                          id: e.id,
                                                          title: e.summary,
                                                          start:
                                                              e.start
                                                                  .dateTime ||
                                                              e.start.date,
                                                          end:
                                                              e.end.dateTime ||
                                                              e.end.date,
                                                          url: n,
                                                          location: e.location,
                                                          description:
                                                              e.description,
                                                      };
                                                  })(e, i);
                                              })),
                                          xhr: r,
                                      });
                            },
                            function (e, t) {
                                n({ message: e, xhr: t });
                            }
                        );
                    } else
                        n({
                            message:
                                "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/",
                        });
                },
            },
        ],
        optionRefiners: { googleCalendarApiKey: String },
        eventSourceRefiners: {
            googleCalendarApiKey: String,
            googleCalendarId: String,
            googleCalendarApiBase: String,
            extraParams: _t,
        },
    });
    return (
        Fo.push(Wa, fs, Ys, ol, al, sl),
        (e.BASE_OPTION_DEFAULTS = bt),
        (e.BASE_OPTION_REFINERS = Dt),
        (e.BaseComponent = jr),
        (e.BgEvent = la),
        (e.BootstrapTheme = il),
        (e.Calendar = pa),
        (e.CalendarApi = Vn),
        (e.CalendarContent = Ei),
        (e.CalendarDataManager = Zo),
        (e.CalendarDataProvider = oi),
        (e.CalendarRoot = bi),
        (e.Component = Nr),
        (e.ContentHook = po),
        (e.CustomContentRenderContext = co),
        (e.DateComponent = oo),
        (e.DateEnv = Xn),
        (e.DateProfileGenerator = Co),
        (e.DayCellContent = ia),
        (e.DayCellRoot = oa),
        (e.DayGridView = ds),
        (e.DayHeader = _i),
        (e.DaySeriesModel = Pi),
        (e.DayTable = us),
        (e.DayTableModel = Ni),
        (e.DayTableSlicer = cs),
        (e.DayTimeCols = Fs),
        (e.DayTimeColsSlicer = js),
        (e.DayTimeColsView = Gs),
        (e.DelayedRunner = Go),
        (e.Draggable = Aa),
        (e.ElementDragging = ci),
        (e.ElementScrollController = _r),
        (e.Emitter = kr),
        (e.EventApi = zn),
        (e.EventRoot = Qi),
        (e.EventSourceApi = L),
        (e.FeaturefulElementDragging = wa),
        (e.Fragment = Ur),
        (e.Interaction = ai),
        (e.ListView = el),
        (e.MountHook = ho),
        (e.NamedTimeZoneImpl = ii),
        (e.NowIndicatorRoot = na),
        (e.NowTimer = Mi),
        (e.PointerDragging = ga),
        (e.PositionCache = Mr),
        (e.RefMap = Li),
        (e.RenderHook = uo),
        (e.ScrollController = xr),
        (e.ScrollResponder = Vr),
        (e.Scroller = Ui),
        (e.SimpleScrollGrid = $i),
        (e.Slicer = Hi),
        (e.Splitter = pr),
        (e.StandardEvent = ea),
        (e.Table = as),
        (e.TableDateCell = Ri),
        (e.TableDowCell = Ti),
        (e.TableView = Va),
        (e.Theme = Pr),
        (e.ThirdPartyDraggable = La),
        (e.TimeCols = Vs),
        (e.TimeColsSlatsCoords = vs),
        (e.TimeColsView = ws),
        (e.ViewApi = On),
        (e.ViewContextType = zr),
        (e.ViewRoot = yo),
        (e.WeekNumberRoot = ca),
        (e.WindowScrollController = Ir),
        (e.addDays = ve),
        (e.addDurations = Xe),
        (e.addMs = ge),
        (e.addWeeks = he),
        (e.allowContextMenu = oe),
        (e.allowSelection = ne),
        (e.applyMutationToEventStore = Pn),
        (e.applyStyle = j),
        (e.applyStyleProp = G),
        (e.asCleanDays = function (e) {
            return e.years || e.months || e.milliseconds ? 0 : e.days;
        }),
        (e.asRoughMinutes = function (e) {
            return $e(e) / 6e4;
        }),
        (e.asRoughMs = $e),
        (e.asRoughSeconds = function (e) {
            return $e(e) / 1e3;
        }),
        (e.buildClassNameNormalizer = vo),
        (e.buildDayRanges = Bs),
        (e.buildDayTableModel = ps),
        (e.buildEventApis = Bn),
        (e.buildEventRangeKey = bn),
        (e.buildHashFromArray = function (e, t) {
            for (var n = {}, r = 0; r < e.length; r++) {
                var o = t(e[r], r);
                n[o[0]] = o[1];
            }
            return n;
        }),
        (e.buildNavLinkData = gr),
        (e.buildSegCompareObj = vn),
        (e.buildSegTimeText = En),
        (e.buildSlatMetas = bs),
        (e.buildTimeColsModel = qs),
        (e.collectFromHash = Fe),
        (e.combineEventUis = Vt),
        (e.compareByFieldSpec = se),
        (e.compareByFieldSpecs = ae),
        (e.compareNumbers = ce),
        (e.compareObjs = Ve),
        (e.computeEdges = br),
        (e.computeFallbackHeaderFormat = Ci),
        (e.computeHeightAndMargins = function (e) {
            return (
                e.getBoundingClientRect().height +
                (function (e) {
                    var t = window.getComputedStyle(e);
                    return (
                        parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
                    );
                })(e)
            );
        }),
        (e.computeInnerRect = Cr),
        (e.computeRect = wr),
        (e.computeSegDraggable = gn),
        (e.computeSegEndResizable = yn),
        (e.computeSegStartResizable = mn),
        (e.computeShrinkWidth = Wi),
        (e.computeSmallestCellWidth = pe),
        (e.computeVisibleDayRange = Jt),
        (e.config = di),
        (e.constrainPoint = sr),
        (e.createContext = Lr),
        (e.createDuration = Ye),
        (e.createElement = Hr),
        (e.createEmptyEventStore = Ht),
        (e.createEventInstance = Ie),
        (e.createEventUi = Wt),
        (e.createFormatter = St),
        (e.createPlugin = io),
        (e.createRef = Ar),
        (e.diffDates = Qt),
        (e.diffDayAndTime = Ee),
        (e.diffDays = ye),
        (e.diffPoints = ur),
        (e.diffWeeks = me),
        (e.diffWholeDays = De),
        (e.diffWholeWeeks = Se),
        (e.disableCursor = Q),
        (e.elementClosest = V),
        (e.elementMatches = z),
        (e.enableCursor = ee),
        (e.eventTupleToStore = Pt),
        (e.filterEventStoreDefs = At),
        (e.filterHash = He),
        (e.findDirectChildren = function (e, t) {
            for (
                var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
                o < n.length;
                o++
            )
                for (var i = n[o].children, a = 0; a < i.length; a++) {
                    var s = i[a];
                    (t && !z(s, t)) || r.push(s);
                }
            return r;
        }),
        (e.findElements = F),
        (e.flexibleCompare = le),
        (e.flushToDom = Wr),
        (e.formatDate = function (e, t) {
            void 0 === t && (t = {});
            var n = tr(t),
                r = St(t),
                o = n.createMarkerMeta(e);
            return o ? n.format(o.marker, r, { forcedTzo: o.forcedTzo }) : "";
        }),
        (e.formatDayString = tt),
        (e.formatIsoTimeString = nt),
        (e.formatRange = function (e, t, n) {
            var r = tr("object" == typeof n && n ? n : {}),
                o = St(n),
                i = r.createMarkerMeta(e),
                a = r.createMarkerMeta(t);
            return i && a
                ? r.formatRange(i.marker, a.marker, o, {
                      forcedStartTzo: i.forcedTzo,
                      forcedEndTzo: a.forcedTzo,
                      isEndExclusive: n.isEndExclusive,
                      defaultSeparator: bt.defaultRangeSeparator,
                  })
                : "";
        }),
        (e.getAllowYScrolling = zi),
        (e.getCanVGrowWithinCell = cr),
        (e.getClippingParents = Rr),
        (e.getDateMeta = hr),
        (e.getDayClassNames = vr),
        (e.getDefaultEventEnd = In),
        (e.getElSeg = dn),
        (e.getEventClassNames = Dn),
        (e.getIsRtlScrollbarOnLeft = Er),
        (e.getRectCenter = lr),
        (e.getRelevantEvents = Nt),
        (e.getScrollGridClassNames = Yi),
        (e.getScrollbarWidths = Sr),
        (e.getSectionClassNames = Zi),
        (e.getSectionHasLiquidHeight = Vi),
        (e.getSegMeta = Sn),
        (e.getSlotClassNames = function (e, t) {
            var n = ["fc-slot", "fc-slot-" + fe[e.dow]];
            return (
                e.isDisabled
                    ? n.push("fc-slot-disabled")
                    : (e.isToday &&
                          (n.push("fc-slot-today"),
                          n.push(t.getClass("today"))),
                      e.isPast && n.push("fc-slot-past"),
                      e.isFuture && n.push("fc-slot-future")),
                n
            );
        }),
        (e.getStickyFooterScrollbar = Ji),
        (e.getStickyHeaderDates = Ki),
        (e.getUnequalProps = We),
        (e.globalLocales = Kn),
        (e.globalPlugins = Fo),
        (e.greatestDurationDenominator = et),
        (e.guid = $),
        (e.hasBgRendering = un),
        (e.hasShrinkWidth = qi),
        (e.identity = _t),
        (e.interactionSettingsStore = ui),
        (e.interactionSettingsToStore = li),
        (e.intersectRanges = nn),
        (e.intersectRects = ar),
        (e.isArraysEqual = ot),
        (e.isColPropsEqual = Bi),
        (e.isDateSpansEqual = Rn),
        (e.isInt = de),
        (e.isInteractionValid = Jr),
        (e.isMultiDayRange = $t),
        (e.isPropsEqual = Le),
        (e.isPropsValid = Qr),
        (e.isValidDate = xe),
        (e.listenBySelector = Z),
        (e.mapHash = Oe),
        (e.memoize = it),
        (e.memoizeArraylike = function (e, t, n) {
            var r = [],
                o = [];
            return function (i) {
                for (var a = r.length, s = i.length, l = 0; l < a; l++)
                    if (i[l]) {
                        if (!ot(r[l], i[l])) {
                            n && n(o[l]);
                            var u = e.apply(this, i[l]);
                            (t && t(u, o[l])) || (o[l] = u);
                        }
                    } else n && n(o[l]);
                for (; l < s; l++) o[l] = e.apply(this, i[l]);
                return (r = i), o.splice(s), o;
            };
        }),
        (e.memoizeHashlike = function (e, t, n) {
            var r = {},
                o = {};
            return function (i) {
                var a = {};
                for (var s in i)
                    if (o[s])
                        if (ot(r[s], i[s])) a[s] = o[s];
                        else {
                            n && n(o[s]);
                            var l = e.apply(this, i[s]);
                            a[s] = t && t(l, o[s]) ? o[s] : l;
                        }
                    else a[s] = e.apply(this, i[s]);
                return (r = i), (o = a), a;
            };
        }),
        (e.memoizeObjArg = at),
        (e.mergeEventStores = Ot),
        (e.multiplyDuration = Ke),
        (e.padStart = ue),
        (e.parseBusinessHours = or),
        (e.parseClassNames = Ut),
        (e.parseDragMeta = fi),
        (e.parseEventDef = Xt),
        (e.parseFieldSpecs = ie),
        (e.parseMarker = Zn),
        (e.pointInsideRect = ir),
        (e.preventContextMenu = re),
        (e.preventDefault = q),
        (e.preventSelection = te),
        (e.rangeContainsMarker = sn),
        (e.rangeContainsRange = an),
        (e.rangesEqual = rn),
        (e.rangesIntersect = on),
        (e.refineEventDef = Yt),
        (e.refineProps = xt),
        (e.removeElement = W),
        (e.removeExact = function (e, t) {
            for (var n = 0, r = 0; r < e.length; )
                e[r] === t ? (e.splice(r, 1), n++) : r++;
            return n;
        }),
        (e.render = Or),
        (e.renderChunkContent = Fi),
        (e.renderFill = sa),
        (e.renderMicroColGroup = ji),
        (e.renderScrollShim = Xi),
        (e.requestJson = Wo),
        (e.sanitizeShrinkWidth = Gi),
        (e.setElSeg = cn),
        (e.setRef = Yr),
        (e.sliceEventStore = ln),
        (e.sliceEvents = function (e, t) {
            return ln(
                e.eventStore,
                e.eventUiBases,
                e.dateProfile.activeRange,
                t ? e.nextDayThreshold : null
            ).fg;
        }),
        (e.sortEventSegs = hn),
        (e.startOfDay = be),
        (e.translateRect = function (e, t, n) {
            return {
                left: e.left + t,
                right: e.right + t,
                top: e.top + n,
                bottom: e.bottom + n,
            };
        }),
        (e.triggerDateSelect = xn),
        (e.unpromisify = Tr),
        (e.version = "5.3.2"),
        (e.whenTransitionDone = K),
        (e.wholeDivideDurations = Qe),
        e
    );
})({});
