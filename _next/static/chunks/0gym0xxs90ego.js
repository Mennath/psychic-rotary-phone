(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 233525, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "warnOnce", {
        enumerable: !0,
        get: function() {
            return r
        }
    });
    let r = e => {}
}
, 718967, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        DecodeError: function() {
            return w
        },
        MiddlewareNotFoundError: function() {
            return y
        },
        MissingStaticPage: function() {
            return E
        },
        NormalizeError: function() {
            return m
        },
        PageNotFoundError: function() {
            return b
        },
        SP: function() {
            return v
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return a
        },
        execOnce: function() {
            return o
        },
        getDisplayName: function() {
            return l
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return d
        },
        isAbsoluteUrl: function() {
            return c
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return h
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return S
        }
    };
    for (var i in r)
        Object.defineProperty(n, i, {
            enumerable: !0,
            get: r[i]
        });
    let a = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function o(e) {
        let t, n = !1;
        return (...r) => (n || (n = !0,
        t = e(...r)),
        t)
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
      , c = e => s.test(e);
    function u() {
        let {protocol: e, hostname: t, port: n} = window.location;
        return `${e}//${t}${n ? ":" + n : ""}`
    }
    function d() {
        let {href: e} = window.location
          , t = u();
        return e.substring(t.length)
    }
    function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }
    function f(e) {
        return e.finished || e.headersSent
    }
    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function h(e, t) {
        let n = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps)
            return t.ctx && t.Component ? {
                pageProps: await h(t.Component, t.ctx)
            } : {};
        let r = await e.getInitialProps(t);
        if (n && f(n))
            return r;
        if (!r)
            throw Object.defineProperty(Error(`"${l(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`), "__NEXT_ERROR_CODE", {
                value: "E1025",
                enumerable: !1,
                configurable: !0
            });
        return r
    }
    let v = "u" > typeof performance
      , g = v && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class w extends Error {
    }
    class m extends Error {
    }
    class b extends Error {
        constructor(e) {
            super(),
            this.code = "ENOENT",
            this.name = "PageNotFoundError",
            this.message = `Cannot find module for page: ${e}`
        }
    }
    class E extends Error {
        constructor(e, t) {
            super(),
            this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class y extends Error {
        constructor() {
            super(),
            this.code = "ENOENT",
            this.message = "Cannot find the middleware module"
        }
    }
    function S(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}
, 998183, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var r = {
        assign: function() {
            return c
        },
        searchParamsToUrlQuery: function() {
            return a
        },
        urlQueryToSearchParams: function() {
            return s
        }
    };
    for (var i in r)
        Object.defineProperty(n, i, {
            enumerable: !0,
            get: r[i]
        });
    function a(e) {
        let t = {};
        for (let[n,r] of e.entries()) {
            let e = t[n];
            void 0 === e ? t[n] = r : Array.isArray(e) ? e.push(r) : t[n] = [e, r]
        }
        return t
    }
    function o(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }
    function s(e) {
        let t = new URLSearchParams;
        for (let[n,r] of Object.entries(e))
            if (Array.isArray(r))
                for (let e of r)
                    t.append(n, o(e));
            else
                t.set(n, o(r));
        return t
    }
    function c(e, ...t) {
        for (let n of t) {
            for (let t of n.keys())
                e.delete(t);
            for (let[t,r] of n.entries())
                e.append(t, r)
        }
        return e
    }
}
, 618566, (e, t, n) => {
    t.exports = e.r(976562)
}
, 375679, e => {
    "use strict";
    function t() {
        let e = sessionStorage.getItem("_sid");
        return e || (e = crypto.randomUUID(),
        sessionStorage.setItem("_sid", e)),
        e
    }
    function n() {
        let e = window.innerWidth;
        return e < 768 ? "mobile" : e < 1024 ? "tablet" : "desktop"
    }
    function r() {
        return window.location.pathname.startsWith("/ar") ? "ar" : "en"
    }
    async function i() {
        try {
            await fetch("/api/track/pageview", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    path: window.location.pathname,
                    referrer: document.referrer || null,
                    userAgent: navigator.userAgent,
                    device: n(),
                    lang: r(),
                    sessionId: t()
                })
            })
        } catch {}
    }
    async function a() {
        try {
            await fetch("/api/track/cv-download", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    referrer: document.referrer || null,
                    userAgent: navigator.userAgent,
                    device: n(),
                    lang: r(),
                    sessionId: t()
                })
            })
        } catch {}
    }
    async function o(e, n={}) {
        try {
            await fetch("/api/track/event", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    eventName: e,
                    eventData: n,
                    sessionId: t(),
                    path: window.location.pathname
                })
            })
        } catch {}
    }
    e.s(["getSessionIdSync", 0, function() {
        return t()
    }
    , "trackCVDownload", 0, a, "trackEvent", 0, o, "trackPageView", 0, i])
}
, 957215, e => {
    "use strict";
    var t = e.i(247167)
      , n = e.i(271645)
      , r = e.i(618566);
    function i() {
        return false
    }
    function a(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`)
    }
    function o(e) {
        return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : `/${e}`
    }
    function s(e) {
        (0,
        n.useEffect)( () => {
            var t;
            e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend))
        }
        , [e.beforeSend]);
        let r = (0,
        n.useRef)(null);
        return (0,
        n.useEffect)( () => {
            if (!r.current) {
                let n = function(e={}, t) {
                    var n;
                    if (!("u" > typeof window) || null === e.route)
                        return null;
                    window.si || (window.si = function(...e) {
                        window.siq = window.siq || [],
                        window.siq.push(e)
                    }
                    );
                    let {beforeSend: r, src: a, dataset: s} = function(e, t) {
                        var n, r;
                        let a = e;
                        if (t)
                            try {
                                a = {
                                    ...null == (n = JSON.parse(t)) ? void 0 : n.speedInsights,
                                    ...e
                                }
                            } catch {}
                        let s = {
                            sdkn: "@vercel/speed-insights" + (a.framework ? `/${a.framework}` : ""),
                            sdkv: "2.0.0"
                        };
                        return a.sampleRate && (s.sampleRate = a.sampleRate.toString()),
                        a.route && (s.route = a.route),
                        i() && !1 === a.debug && (s.debug = "false"),
                        a.dsn && (s.dsn = a.dsn),
                        a.endpoint ? s.endpoint = o(a.endpoint) : a.basePath && (s.endpoint = o(`${a.basePath}/speed-insights/vitals`)),
                        {
                            src: (r = a).scriptSrc ? o(r.scriptSrc) : i() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : r.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : r.basePath ? o(`${r.basePath}/speed-insights/script.js`) : "/_vercel/speed-insights/script.js",
                            beforeSend: a.beforeSend,
                            dataset: s
                        }
                    }(e, t);
                    if (document.head.querySelector(`script[src*="${a}"]`))
                        return null;
                    r && (null == (n = window.si) || n.call(window, "beforeSend", r));
                    let c = document.createElement("script");
                    for (let[e,t] of (c.src = a,
                    c.defer = !0,
                    Object.entries(s)))
                        c.dataset[e] = t;
                    return c.onerror = () => {
                        console.log(`[Vercel Speed Insights] Failed to load script from ${a}. Please check if any content blockers are enabled and try again.`)
                    }
                    ,
                    document.head.appendChild(c),
                    {
                        setRoute: e => {
                            c.dataset.route = e ?? void 0
                        }
                    }
                }({
                    framework: e.framework ?? "react",
                    basePath: e.basePath ?? function() {
                        if (void 0 !== t.default && void 0 !== t.default.env)
                            return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                    }(),
                    ...e
                }, e.configString ?? function() {
                    if (void 0 !== t.default && void 0 !== t.default.env)
                        return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
                }());
                n && (r.current = n.setRoute)
            }
        }
        , [e]),
        (0,
        n.useEffect)( () => {
            r.current && e.route && r.current(e.route)
        }
        , [e.route]),
        null
    }
    function c(e) {
        let i = ( () => {
            let e = (0,
            r.useParams)()
              , t = (0,
            r.useSearchParams)() || new URLSearchParams
              , n = (0,
            r.usePathname)();
            if (!e)
                return null;
            let i = Object.keys(e).length ? e : Object.fromEntries(t.entries());
            if (!n || !i)
                return n;
            let o = n;
            try {
                let e = Object.entries(i);
                for (let[t,n] of e)
                    if (!Array.isArray(n)) {
                        let e = a(n);
                        e.test(o) && (o = o.replace(e, `/[${t}]`))
                    }
                for (let[t,n] of e)
                    if (Array.isArray(n)) {
                        let e = a(n.join("/"));
                        e.test(o) && (o = o.replace(e, `/[...${t}]`))
                    }
                return o
            } catch {
                return n
            }
        }
        )();
        return n.default.createElement(s, {
            route: i,
            ...e,
            framework: "next",
            basePath: function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }(),
            configString: function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return '{"analytics":{"scriptSrc":"4afa0ab8ac345ae2/script.js","viewEndpoint":"4afa0ab8ac345ae2/view","eventEndpoint":"4afa0ab8ac345ae2/event","sessionEndpoint":"4afa0ab8ac345ae2/session"},"speedInsights":{"scriptSrc":"9d768f44a526058d/script.js","endpoint":"9d768f44a526058d/vitals"}}'
            }()
        })
    }
    e.s(["SpeedInsights", 0, function(e) {
        return n.default.createElement(n.Suspense, {
            fallback: null
        }, n.default.createElement(c, {
            ...e
        }))
    }
    ])
}
, 302355, e => {
    "use strict";
    var t = e.i(247167)
      , n = e.i(271645)
      , r = e.i(618566);
    function i() {
        return "u" > typeof window
    }
    function a() {
        return "production"
    }
    function o() {
        return "development" === ((i() ? window.vam : a()) || "production")
    }
    function s(e) {
        return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`)
    }
    function c(e) {
        return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : `/${e}`
    }
    function u(e) {
        return (0,
        n.useEffect)( () => {
            var t;
            e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend))
        }
        , [e.beforeSend]),
        (0,
        n.useEffect)( () => {
            !function(e={
                debug: !0
            }, t) {
                var n;
                if (!i())
                    return;
                let {beforeSend: r, src: s, dataset: u} = function(e, t) {
                    var n, r;
                    let i = e;
                    if (t)
                        try {
                            i = {
                                ...null == (n = JSON.parse(t)) ? void 0 : n.analytics,
                                ...e
                            }
                        } catch {}
                    !function(e="auto") {
                        if ("auto" === e) {
                            window.vam = a();
                            return
                        }
                        window.vam = e
                    }(i.mode);
                    let s = {
                        sdkn: "@vercel/analytics" + (i.framework ? `/${i.framework}` : ""),
                        sdkv: "2.0.1"
                    };
                    return i.disableAutoTrack && (s.disableAutoTrack = "1"),
                    i.viewEndpoint && (s.viewEndpoint = c(i.viewEndpoint)),
                    i.eventEndpoint && (s.eventEndpoint = c(i.eventEndpoint)),
                    i.sessionEndpoint && (s.sessionEndpoint = c(i.sessionEndpoint)),
                    o() && !1 === i.debug && (s.debug = "false"),
                    i.dsn && (s.dsn = i.dsn),
                    i.endpoint ? s.endpoint = i.endpoint : i.basePath && (s.endpoint = c(`${i.basePath}/insights`)),
                    {
                        beforeSend: i.beforeSend,
                        src: (r = i).scriptSrc ? c(r.scriptSrc) : o() ? "https://va.vercel-scripts.com/v1/script.debug.js" : r.basePath ? c(`${r.basePath}/insights/script.js`) : "/_vercel/insights/script.js",
                        dataset: s
                    }
                }(e, t);
                if (window.va || (window.va = function(...e) {
                    window.vaq || (window.vaq = []),
                    window.vaq.push(e)
                }
                ),
                r && (null == (n = window.va) || n.call(window, "beforeSend", r)),
                document.head.querySelector(`script[src*="${s}"]`))
                    return;
                let d = document.createElement("script");
                for (let[e,t] of (d.src = s,
                Object.entries(u)))
                    d.dataset[e] = t;
                d.defer = !0,
                d.onerror = () => {
                    let e = o() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                    console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${e}`)
                }
                ,
                document.head.appendChild(d)
            }({
                framework: e.framework || "react",
                basePath: e.basePath ?? function() {
                    if (void 0 !== t.default && void 0 !== t.default.env)
                        return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
                }(),
                ...void 0 !== e.route && {
                    disableAutoTrack: !0
                },
                ...e
            }, e.configString ?? function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG
            }())
        }
        , []),
        (0,
        n.useEffect)( () => {
            e.route && e.path && function({route: e, path: t}) {
                var n;
                null == (n = window.va) || n.call(window, "pageview", {
                    route: e,
                    path: t
                })
            }({
                route: e.route,
                path: e.path
            })
        }
        , [e.route, e.path]),
        null
    }
    function d(e) {
        let i, a, o, {route: c, path: d} = (i = (0,
        r.useParams)(),
        a = (0,
        r.useSearchParams)(),
        o = (0,
        r.usePathname)(),
        i ? {
            route: function(e, t) {
                if (!e || !t)
                    return e;
                let n = e;
                try {
                    let e = Object.entries(t);
                    for (let[t,r] of e)
                        if (!Array.isArray(r)) {
                            let e = s(r);
                            e.test(n) && (n = n.replace(e, `/[${t}]`))
                        }
                    for (let[t,r] of e)
                        if (Array.isArray(r)) {
                            let e = s(r.join("/"));
                            e.test(n) && (n = n.replace(e, `/[...${t}]`))
                        }
                    return n
                } catch {
                    return e
                }
            }(o, Object.keys(i).length ? i : Object.fromEntries(a.entries())),
            path: o
        } : {
            route: null,
            path: o
        });
        return n.default.createElement(u, {
            path: d,
            route: c,
            ...e,
            basePath: function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH
            }(),
            configString: function() {
                if (void 0 !== t.default && void 0 !== t.default.env)
                    return '{"analytics":{"scriptSrc":"4afa0ab8ac345ae2/script.js","viewEndpoint":"4afa0ab8ac345ae2/view","eventEndpoint":"4afa0ab8ac345ae2/event","sessionEndpoint":"4afa0ab8ac345ae2/session"},"speedInsights":{"scriptSrc":"9d768f44a526058d/script.js","endpoint":"9d768f44a526058d/vitals"}}'
            }(),
            framework: "next"
        })
    }
    e.s(["Analytics", 0, function(e) {
        return n.default.createElement(n.Suspense, {
            fallback: null
        }, n.default.createElement(d, {
            ...e
        }))
    }
    ])
}
, 404640, e => {
    "use strict";
    var t = e.i(271645)
      , n = e.i(618566)
      , r = e.i(375679);
    e.s(["default", 0, function() {
        let e = (0,
        n.usePathname)();
        return (0,
        t.useEffect)( () => {
            e?.startsWith("/dashboard") || e?.startsWith("/login") || (0,
            r.trackPageView)()
        }
        , [e]),
        null
    }
    ])
}
]);
