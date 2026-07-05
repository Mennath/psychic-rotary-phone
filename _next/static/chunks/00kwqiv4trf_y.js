(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 224179, e => {
    "use strict";
    var t = e.i(843476)
      , n = e.i(271645);
    e.s(["default", 0, function() {
        let[e,o] = (0,
        n.useState)(!0)
          , [i,r] = (0,
        n.useState)(!1);
        return ((0,
        n.useEffect)( () => {
            let e = setTimeout( () => r(!0), 1800)
              , t = setTimeout( () => o(!1), 2500);
            return () => {
                clearTimeout(e),
                clearTimeout(t)
            }
        }
        , []),
        e) ? (0,
        t.jsxs)("div", {
            className: "fixed inset-0 z-[10000] flex items-center justify-center",
            style: {
                background: "#0A0A0A",
                opacity: +!i,
                transition: "opacity 0.7s ease-out"
            },
            children: [(0,
            t.jsxs)("div", {
                className: "flex flex-col items-center gap-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "heading text-5xl md:text-6xl",
                    style: {
                        color: "#fff",
                        animation: "preloaderIn 0.8s ease-out both"
                    },
                    children: ["Ahmed", (0,
                    t.jsx)("span", {
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "w-32 h-[2px] rounded-full overflow-hidden",
                    style: {
                        background: "rgba(255,255,255,0.08)"
                    },
                    children: (0,
                    t.jsx)("div", {
                        className: "h-full rounded-full",
                        style: {
                            background: "#4FFFB0",
                            animation: "preloaderBar 1.6s ease-in-out infinite"
                        }
                    })
                })]
            }), (0,
            t.jsx)("style", {
                children: `
        @keyframes preloaderIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloaderBar {
          0% { width: 0%; margin-left: 0; }
          50% { width: 100%; margin-left: 0; }
          100% { width: 0%; margin-left: 100%; }
        }
      `
            })]
        }) : null
    }
    ])
}
, 667585, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(132061);
    function i({reason: e, children: t}) {
        if ("u" < typeof window)
            throw Object.defineProperty(new o.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: !1,
                configurable: !0
            });
        return t
    }
}
, 309885, (e, t, n) => {
    "use strict";
    function o(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return o
        }
    })
}
, 652157, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let o = e.r(843476)
      , i = e.r(174080)
      , r = e.r(563599)
      , a = e.r(309885)
      , s = e.r(543369);
    function l({moduleIds: e}) {
        if ("u" > typeof window)
            return null;
        let t = r.workAsyncStorage.getStore();
        if (void 0 === t)
            return null;
        let n = [];
        if (t.reactLoadableManifest && e) {
            let o = t.reactLoadableManifest;
            for (let t of e) {
                if (!o[t])
                    continue;
                let e = o[t].files;
                n.push(...e)
            }
        }
        if (0 === n.length)
            return null;
        let c = (0,
        s.getAssetTokenQuery)();
        return (0,
        o.jsx)(o.Fragment, {
            children: n.map(e => {
                let n = `${t.assetPrefix}/_next/${(0,
                a.encodeURIPath)(e)}${c}`;
                return e.endsWith(".css") ? (0,
                o.jsx)("link", {
                    precedence: "dynamic",
                    href: n,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0,
                i.preload)(n, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }),
                null)
            }
            )
        })
    }
}
, 869093, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let o = e.r(843476)
      , i = e.r(271645)
      , r = e.r(667585)
      , a = e.r(652157);
    function s(e) {
        return {
            default: e && "default"in e ? e.default : e
        }
    }
    let l = {
        loader: () => Promise.resolve(s( () => null)),
        loading: null,
        ssr: !0
    }
      , c = function(e) {
        let t = {
            ...l,
            ...e
        }
          , n = (0,
        i.lazy)( () => t.loader().then(s))
          , c = t.loading;
        function u(e) {
            let s = c ? (0,
            o.jsx)(c, {
                isLoading: !0,
                pastDelay: !0,
                error: null
            }) : null
              , l = !t.ssr || !!t.loading
              , u = l ? i.Suspense : i.Fragment
              , d = t.ssr ? (0,
            o.jsxs)(o.Fragment, {
                children: ["u" < typeof window ? (0,
                o.jsx)(a.PreloadChunks, {
                    moduleIds: t.modules
                }) : null, (0,
                o.jsx)(n, {
                    ...e
                })]
            }) : (0,
            o.jsx)(r.BailoutToCSR, {
                reason: "next/dynamic",
                children: (0,
                o.jsx)(n, {
                    ...e
                })
            });
            return (0,
            o.jsx)(u, {
                ...l ? {
                    fallback: s
                } : {},
                children: d
            })
        }
        return u.displayName = "LoadableComponent",
        u
    }
}
, 770703, (e, t, n) => {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let o = e.r(555682)._(e.r(869093));
    function i(e, t) {
        let n = {};
        "function" == typeof e && (n.loader = e);
        let i = {
            ...n,
            ...t
        };
        return (0,
        o.default)({
            ...i,
            modules: i.loadableGenerated?.modules
        })
    }
    ("function" == typeof n.default || "object" == typeof n.default && null !== n.default) && void 0 === n.default.__esModule && (Object.defineProperty(n.default, "__esModule", {
        value: !0
    }),
    Object.assign(n.default, n),
    t.exports = n.default)
}
, 868127, e => {
    "use strict";
    var t = e.i(940141);
    e.s(["SiFlutter", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
                },
                child: []
            }]
        })(e)
    }
    , "SiGoogleads", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z"
                },
                child: []
            }]
        })(e)
    }
    , "SiInstagram", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                },
                child: []
            }]
        })(e)
    }
    , "SiMeta", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
                },
                child: []
            }]
        })(e)
    }
    , "SiReact", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                },
                child: []
            }]
        })(e)
    }
    , "SiSnapchat", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
                },
                child: []
            }]
        })(e)
    }
    , "SiTiktok", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                },
                child: []
            }]
        })(e)
    }
    , "SiWordpress", 0, function(e) {
        return (0,
        t.GenIcon)({
            tag: "svg",
            attr: {
                role: "img",
                viewBox: "0 0 24 24"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
                },
                child: []
            }]
        })(e)
    }
    ])
}
, 348013, (e, t, n) => {
    e.e,
    t.exports = function() {
        var t = [function(t, n) {
            var o, i = {};
            t.exports = i,
            i._baseDelta = 1e3 / 60,
            i._nextId = 0,
            i._seed = 0,
            i._nowStartTime = +new Date,
            i._warnedOnce = {},
            i._decomp = null,
            i.extend = function(e, t) {
                var n, o;
                "boolean" == typeof t ? (n = 2,
                o = t) : (n = 1,
                o = !0);
                for (var r = n; r < arguments.length; r++) {
                    var a = arguments[r];
                    if (a)
                        for (var s in a)
                            o && a[s] && a[s].constructor === Object ? e[s] && e[s].constructor !== Object ? e[s] = a[s] : (e[s] = e[s] || {},
                            i.extend(e[s], o, a[s])) : e[s] = a[s]
                }
                return e
            }
            ,
            i.clone = function(e, t) {
                return i.extend({}, t, e)
            }
            ,
            i.keys = function(e) {
                if (Object.keys)
                    return Object.keys(e);
                var t = [];
                for (var n in e)
                    t.push(n);
                return t
            }
            ,
            i.values = function(e) {
                var t = [];
                if (Object.keys) {
                    for (var n = Object.keys(e), o = 0; o < n.length; o++)
                        t.push(e[n[o]]);
                    return t
                }
                for (var i in e)
                    t.push(e[i]);
                return t
            }
            ,
            i.get = function(e, t, n, o) {
                t = t.split(".").slice(n, o);
                for (var i = 0; i < t.length; i += 1)
                    e = e[t[i]];
                return e
            }
            ,
            i.set = function(e, t, n, o, r) {
                var a = t.split(".").slice(o, r);
                return i.get(e, t, 0, -1)[a[a.length - 1]] = n,
                n
            }
            ,
            i.shuffle = function(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(i.random() * (t + 1))
                      , o = e[t];
                    e[t] = e[n],
                    e[n] = o
                }
                return e
            }
            ,
            i.choose = function(e) {
                return e[Math.floor(i.random() * e.length)]
            }
            ,
            i.isElement = function(e) {
                return "u" > typeof HTMLElement ? e instanceof HTMLElement : !!(e && e.nodeType && e.nodeName)
            }
            ,
            i.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            i.isFunction = function(e) {
                return "function" == typeof e
            }
            ,
            i.isPlainObject = function(e) {
                return "object" == typeof e && e.constructor === Object
            }
            ,
            i.isString = function(e) {
                return "[object String]" === toString.call(e)
            }
            ,
            i.clamp = function(e, t, n) {
                return e < t ? t : e > n ? n : e
            }
            ,
            i.sign = function(e) {
                return e < 0 ? -1 : 1
            }
            ,
            i.now = function() {
                if ("u" > typeof window && window.performance) {
                    if (window.performance.now)
                        return window.performance.now();
                    else if (window.performance.webkitNow)
                        return window.performance.webkitNow()
                }
                return Date.now ? Date.now() : new Date - i._nowStartTime
            }
            ,
            i.random = function(e, t) {
                return t = void 0 !== t ? t : 1,
                (e = void 0 !== e ? e : 0) + o() * (t - e)
            }
            ,
            o = function() {
                return i._seed = (9301 * i._seed + 49297) % 233280,
                i._seed / 233280
            }
            ,
            i.colorToNumber = function(e) {
                return 3 == (e = e.replace("#", "")).length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
                parseInt(e, 16)
            }
            ,
            i.logLevel = 1,
            i.log = function() {
                console && i.logLevel > 0 && i.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
            }
            ,
            i.info = function() {
                console && i.logLevel > 0 && i.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
            }
            ,
            i.warn = function() {
                console && i.logLevel > 0 && i.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
            }
            ,
            i.warnOnce = function() {
                var e = Array.prototype.slice.call(arguments).join(" ");
                i._warnedOnce[e] || (i.warn(e),
                i._warnedOnce[e] = !0)
            }
            ,
            i.deprecated = function(e, t, n) {
                e[t] = i.chain(function() {
                    i.warnOnce("🔅 deprecated 🔅", n)
                }, e[t])
            }
            ,
            i.nextId = function() {
                return i._nextId++
            }
            ,
            i.indexOf = function(e, t) {
                if (e.indexOf)
                    return e.indexOf(t);
                for (var n = 0; n < e.length; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            ,
            i.map = function(e, t) {
                if (e.map)
                    return e.map(t);
                for (var n = [], o = 0; o < e.length; o += 1)
                    n.push(t(e[o]));
                return n
            }
            ,
            i.topologicalSort = function(e) {
                var t = []
                  , n = []
                  , o = [];
                for (var r in e)
                    n[r] || o[r] || i._topologicalSort(r, n, o, e, t);
                return t
            }
            ,
            i._topologicalSort = function(e, t, n, o, r) {
                var a = o[e] || [];
                n[e] = !0;
                for (var s = 0; s < a.length; s += 1) {
                    var l = a[s];
                    !n[l] && (t[l] || i._topologicalSort(l, t, n, o, r))
                }
                n[e] = !1,
                t[e] = !0,
                r.push(e)
            }
            ,
            i.chain = function() {
                for (var e = [], t = 0; t < arguments.length; t += 1) {
                    var n = arguments[t];
                    n._chained ? e.push.apply(e, n._chained) : e.push(n)
                }
                var o = function() {
                    for (var t, n = Array(arguments.length), o = 0, i = arguments.length; o < i; o++)
                        n[o] = arguments[o];
                    for (o = 0; o < e.length; o += 1) {
                        var r = e[o].apply(t, n);
                        void 0 !== r && (t = r)
                    }
                    return t
                };
                return o._chained = e,
                o
            }
            ,
            i.chainPathBefore = function(e, t, n) {
                return i.set(e, t, i.chain(n, i.get(e, t)))
            }
            ,
            i.chainPathAfter = function(e, t, n) {
                return i.set(e, t, i.chain(i.get(e, t), n))
            }
            ,
            i.setDecomp = function(e) {
                i._decomp = e
            }
            ,
            i.getDecomp = function() {
                var t = i._decomp;
                try {
                    !t && "u" > typeof window && (t = window.decomp),
                    t || (t = e.g.decomp)
                } catch (e) {
                    t = null
                }
                return t
            }
        }
        , function(e, t) {
            var n = {};
            e.exports = n,
            n.create = function(e) {
                var t = {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                return e && n.update(t, e),
                t
            }
            ,
            n.update = function(e, t, n) {
                e.min.x = 1 / 0,
                e.max.x = -1 / 0,
                e.min.y = 1 / 0,
                e.max.y = -1 / 0;
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    i.x > e.max.x && (e.max.x = i.x),
                    i.x < e.min.x && (e.min.x = i.x),
                    i.y > e.max.y && (e.max.y = i.y),
                    i.y < e.min.y && (e.min.y = i.y)
                }
                n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x,
                n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
            }
            ,
            n.contains = function(e, t) {
                return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
            }
            ,
            n.overlaps = function(e, t) {
                return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
            }
            ,
            n.translate = function(e, t) {
                e.min.x += t.x,
                e.max.x += t.x,
                e.min.y += t.y,
                e.max.y += t.y
            }
            ,
            n.shift = function(e, t) {
                var n = e.max.x - e.min.x
                  , o = e.max.y - e.min.y;
                e.min.x = t.x,
                e.max.x = t.x + n,
                e.min.y = t.y,
                e.max.y = t.y + o
            }
        }
        , function(e, t) {
            var n = {};
            e.exports = n,
            n.create = function(e, t) {
                return {
                    x: e || 0,
                    y: t || 0
                }
            }
            ,
            n.clone = function(e) {
                return {
                    x: e.x,
                    y: e.y
                }
            }
            ,
            n.magnitude = function(e) {
                return Math.sqrt(e.x * e.x + e.y * e.y)
            }
            ,
            n.magnitudeSquared = function(e) {
                return e.x * e.x + e.y * e.y
            }
            ,
            n.rotate = function(e, t, n) {
                var o = Math.cos(t)
                  , i = Math.sin(t);
                n || (n = {});
                var r = e.x * o - e.y * i;
                return n.y = e.x * i + e.y * o,
                n.x = r,
                n
            }
            ,
            n.rotateAbout = function(e, t, n, o) {
                var i = Math.cos(t)
                  , r = Math.sin(t);
                o || (o = {});
                var a = n.x + ((e.x - n.x) * i - (e.y - n.y) * r);
                return o.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * i),
                o.x = a,
                o
            }
            ,
            n.normalise = function(e) {
                var t = n.magnitude(e);
                return 0 === t ? {
                    x: 0,
                    y: 0
                } : {
                    x: e.x / t,
                    y: e.y / t
                }
            }
            ,
            n.dot = function(e, t) {
                return e.x * t.x + e.y * t.y
            }
            ,
            n.cross = function(e, t) {
                return e.x * t.y - e.y * t.x
            }
            ,
            n.cross3 = function(e, t, n) {
                return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
            }
            ,
            n.add = function(e, t, n) {
                return n || (n = {}),
                n.x = e.x + t.x,
                n.y = e.y + t.y,
                n
            }
            ,
            n.sub = function(e, t, n) {
                return n || (n = {}),
                n.x = e.x - t.x,
                n.y = e.y - t.y,
                n
            }
            ,
            n.mult = function(e, t) {
                return {
                    x: e.x * t,
                    y: e.y * t
                }
            }
            ,
            n.div = function(e, t) {
                return {
                    x: e.x / t,
                    y: e.y / t
                }
            }
            ,
            n.perp = function(e, t) {
                return {
                    x: -((t = !0 === t ? -1 : 1) * e.y),
                    y: t * e.x
                }
            }
            ,
            n.neg = function(e) {
                return {
                    x: -e.x,
                    y: -e.y
                }
            }
            ,
            n.angle = function(e, t) {
                return Math.atan2(t.y - e.y, t.x - e.x)
            }
            ,
            n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(2)
              , r = n(0);
            o.create = function(e, t) {
                for (var n = [], o = 0; o < e.length; o++) {
                    var i = e[o]
                      , r = {
                        x: i.x,
                        y: i.y,
                        index: o,
                        body: t,
                        isInternal: !1
                    };
                    n.push(r)
                }
                return n
            }
            ,
            o.fromPath = function(e, t) {
                var n = [];
                return e.replace(/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig, function(e, t, o) {
                    n.push({
                        x: parseFloat(t),
                        y: parseFloat(o)
                    })
                }),
                o.create(n, t)
            }
            ,
            o.centre = function(e) {
                for (var t, n, r, a = o.area(e, !0), s = {
                    x: 0,
                    y: 0
                }, l = 0; l < e.length; l++)
                    r = (l + 1) % e.length,
                    t = i.cross(e[l], e[r]),
                    n = i.mult(i.add(e[l], e[r]), t),
                    s = i.add(s, n);
                return i.div(s, 6 * a)
            }
            ,
            o.mean = function(e) {
                for (var t = {
                    x: 0,
                    y: 0
                }, n = 0; n < e.length; n++)
                    t.x += e[n].x,
                    t.y += e[n].y;
                return i.div(t, e.length)
            }
            ,
            o.area = function(e, t) {
                for (var n = 0, o = e.length - 1, i = 0; i < e.length; i++)
                    n += (e[o].x - e[i].x) * (e[o].y + e[i].y),
                    o = i;
                return t ? n / 2 : Math.abs(n) / 2
            }
            ,
            o.inertia = function(e, t) {
                for (var n, o, r = 0, a = 0, s = 0; s < e.length; s++)
                    o = (s + 1) % e.length,
                    r += (n = Math.abs(i.cross(e[o], e[s]))) * (i.dot(e[o], e[o]) + i.dot(e[o], e[s]) + i.dot(e[s], e[s])),
                    a += n;
                return t / 6 * (r / a)
            }
            ,
            o.translate = function(e, t, n) {
                n = void 0 !== n ? n : 1;
                var o, i = e.length, r = t.x * n, a = t.y * n;
                for (o = 0; o < i; o++)
                    e[o].x += r,
                    e[o].y += a;
                return e
            }
            ,
            o.rotate = function(e, t, n) {
                if (0 !== t) {
                    var o, i, r, a, s = Math.cos(t), l = Math.sin(t), c = n.x, u = n.y, d = e.length;
                    for (a = 0; a < d; a++)
                        i = (o = e[a]).x - c,
                        r = o.y - u,
                        o.x = c + (i * s - r * l),
                        o.y = u + (i * l + r * s);
                    return e
                }
            }
            ,
            o.contains = function(e, t) {
                for (var n, o = t.x, i = t.y, r = e.length, a = e[r - 1], s = 0; s < r; s++) {
                    if (n = e[s],
                    (o - a.x) * (n.y - a.y) + (i - a.y) * (a.x - n.x) > 0)
                        return !1;
                    a = n
                }
                return !0
            }
            ,
            o.scale = function(e, t, n, r) {
                if (1 === t && 1 === n)
                    return e;
                r = r || o.centre(e);
                for (var a, s, l = 0; l < e.length; l++)
                    a = e[l],
                    s = i.sub(a, r),
                    e[l].x = r.x + s.x * t,
                    e[l].y = r.y + s.y * n;
                return e
            }
            ,
            o.chamfer = function(e, t, n, o, a) {
                t = "number" == typeof t ? [t] : t || [8],
                n = void 0 !== n ? n : -1,
                o = o || 2,
                a = a || 14;
                for (var s = [], l = 0; l < e.length; l++) {
                    var c = e[l - 1 >= 0 ? l - 1 : e.length - 1]
                      , u = e[l]
                      , d = e[(l + 1) % e.length]
                      , p = t[l < t.length ? l : t.length - 1];
                    if (0 === p) {
                        s.push(u);
                        continue
                    }
                    var f = i.normalise({
                        x: u.y - c.y,
                        y: c.x - u.x
                    })
                      , m = i.normalise({
                        x: d.y - u.y,
                        y: u.x - d.x
                    })
                      , y = Math.sqrt(2 * Math.pow(p, 2))
                      , v = i.mult(r.clone(f), p)
                      , g = i.normalise(i.mult(i.add(f, m), .5))
                      , x = i.sub(u, i.mult(g, y))
                      , h = n;
                    -1 === n && (h = 1.75 * Math.pow(p, .32)),
                    (h = r.clamp(h, o, a)) % 2 == 1 && (h += 1);
                    for (var b = Math.acos(i.dot(f, m)) / h, S = 0; S < h; S++)
                        s.push(i.add(i.rotate(v, b * S), x))
                }
                return s
            }
            ,
            o.clockwiseSort = function(e) {
                var t = o.mean(e);
                return e.sort(function(e, n) {
                    return i.angle(t, e) - i.angle(t, n)
                }),
                e
            }
            ,
            o.isConvex = function(e) {
                var t, n, o, i, r = 0, a = e.length;
                if (a < 3)
                    return null;
                for (t = 0; t < a; t++)
                    if (n = (t + 1) % a,
                    o = (t + 2) % a,
                    (i = (e[n].x - e[t].x) * (e[o].y - e[n].y) - (e[n].y - e[t].y) * (e[o].x - e[n].x)) < 0 ? r |= 1 : i > 0 && (r |= 2),
                    3 === r)
                        return !1;
                return 0 !== r || null
            }
            ,
            o.hull = function(e) {
                var t, n, o = [], r = [];
                for ((e = e.slice(0)).sort(function(e, t) {
                    var n = e.x - t.x;
                    return 0 !== n ? n : e.y - t.y
                }),
                n = 0; n < e.length; n += 1) {
                    for (t = e[n]; r.length >= 2 && 0 >= i.cross3(r[r.length - 2], r[r.length - 1], t); )
                        r.pop();
                    r.push(t)
                }
                for (n = e.length - 1; n >= 0; n -= 1) {
                    for (t = e[n]; o.length >= 2 && 0 >= i.cross3(o[o.length - 2], o[o.length - 1], t); )
                        o.pop();
                    o.push(t)
                }
                return o.pop(),
                r.pop(),
                o.concat(r)
            }
        }
        , function(e, t, n) {
            var o, i = {};
            e.exports = i;
            var r = n(3)
              , a = n(2)
              , s = n(7)
              , l = n(0)
              , c = n(1)
              , u = n(11);
            i._timeCorrection = !0,
            i._inertiaScale = 4,
            i._nextCollidingGroupId = 1,
            i._nextNonCollidingGroupId = -1,
            i._nextCategory = 1,
            i._baseDelta = 1e3 / 60,
            i.create = function(e) {
                var t = {
                    id: l.nextId(),
                    type: "body",
                    label: "Body",
                    parts: [],
                    plugin: {},
                    angle: 0,
                    vertices: r.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                    position: {
                        x: 0,
                        y: 0
                    },
                    force: {
                        x: 0,
                        y: 0
                    },
                    torque: 0,
                    positionImpulse: {
                        x: 0,
                        y: 0
                    },
                    constraintImpulse: {
                        x: 0,
                        y: 0,
                        angle: 0
                    },
                    totalContacts: 0,
                    speed: 0,
                    angularSpeed: 0,
                    velocity: {
                        x: 0,
                        y: 0
                    },
                    angularVelocity: 0,
                    isSensor: !1,
                    isStatic: !1,
                    isSleeping: !1,
                    motion: 0,
                    sleepThreshold: 60,
                    density: .001,
                    restitution: 0,
                    friction: .1,
                    frictionStatic: .5,
                    frictionAir: .01,
                    collisionFilter: {
                        category: 1,
                        mask: 0xffffffff,
                        group: 0
                    },
                    slop: .05,
                    timeScale: 1,
                    render: {
                        visible: !0,
                        opacity: 1,
                        strokeStyle: null,
                        fillStyle: null,
                        lineWidth: null,
                        sprite: {
                            xScale: 1,
                            yScale: 1,
                            xOffset: 0,
                            yOffset: 0
                        }
                    },
                    events: null,
                    bounds: null,
                    chamfer: null,
                    circleRadius: 0,
                    positionPrev: null,
                    anglePrev: 0,
                    parent: null,
                    axes: null,
                    area: 0,
                    mass: 0,
                    inertia: 0,
                    deltaTime: 1e3 / 60,
                    _original: null
                }
                  , n = l.extend(t, e);
                return o(n, e),
                n
            }
            ,
            i.nextGroup = function(e) {
                return e ? i._nextNonCollidingGroupId-- : i._nextCollidingGroupId++
            }
            ,
            i.nextCategory = function() {
                return i._nextCategory = i._nextCategory << 1,
                i._nextCategory
            }
            ,
            o = function(e, t) {
                t = t || {},
                i.set(e, {
                    bounds: e.bounds || c.create(e.vertices),
                    positionPrev: e.positionPrev || a.clone(e.position),
                    anglePrev: e.anglePrev || e.angle,
                    vertices: e.vertices,
                    parts: e.parts || [e],
                    isStatic: e.isStatic,
                    isSleeping: e.isSleeping,
                    parent: e.parent || e
                }),
                r.rotate(e.vertices, e.angle, e.position),
                u.rotate(e.axes, e.angle),
                c.update(e.bounds, e.vertices, e.velocity),
                i.set(e, {
                    axes: t.axes || e.axes,
                    area: t.area || e.area,
                    mass: t.mass || e.mass,
                    inertia: t.inertia || e.inertia
                });
                var n = e.isStatic ? "#14151f" : l.choose(["#f19648", "#f5d259", "#f55a3c", "#063e7b", "#ececd1"])
                  , o = e.isStatic ? "#555" : "#ccc"
                  , s = e.isStatic && null === e.render.fillStyle ? 1 : 0;
                e.render.fillStyle = e.render.fillStyle || n,
                e.render.strokeStyle = e.render.strokeStyle || o,
                e.render.lineWidth = e.render.lineWidth || s,
                e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x),
                e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
            }
            ,
            i.set = function(e, t, n) {
                var o;
                for (o in "string" == typeof t && (o = t,
                (t = {})[o] = n),
                t)
                    if (Object.prototype.hasOwnProperty.call(t, o))
                        switch (n = t[o],
                        o) {
                        case "isStatic":
                            i.setStatic(e, n);
                            break;
                        case "isSleeping":
                            s.set(e, n);
                            break;
                        case "mass":
                            i.setMass(e, n);
                            break;
                        case "density":
                            i.setDensity(e, n);
                            break;
                        case "inertia":
                            i.setInertia(e, n);
                            break;
                        case "vertices":
                            i.setVertices(e, n);
                            break;
                        case "position":
                            i.setPosition(e, n);
                            break;
                        case "angle":
                            i.setAngle(e, n);
                            break;
                        case "velocity":
                            i.setVelocity(e, n);
                            break;
                        case "angularVelocity":
                            i.setAngularVelocity(e, n);
                            break;
                        case "speed":
                            i.setSpeed(e, n);
                            break;
                        case "angularSpeed":
                            i.setAngularSpeed(e, n);
                            break;
                        case "parts":
                            i.setParts(e, n);
                            break;
                        case "centre":
                            i.setCentre(e, n);
                            break;
                        default:
                            e[o] = n
                        }
            }
            ,
            i.setStatic = function(e, t) {
                for (var n = 0; n < e.parts.length; n++) {
                    var o = e.parts[n];
                    t ? (o.isStatic || (o._original = {
                        restitution: o.restitution,
                        friction: o.friction,
                        mass: o.mass,
                        inertia: o.inertia,
                        density: o.density,
                        inverseMass: o.inverseMass,
                        inverseInertia: o.inverseInertia
                    }),
                    o.restitution = 0,
                    o.friction = 1,
                    o.mass = o.inertia = o.density = 1 / 0,
                    o.inverseMass = o.inverseInertia = 0,
                    o.positionPrev.x = o.position.x,
                    o.positionPrev.y = o.position.y,
                    o.anglePrev = o.angle,
                    o.angularVelocity = 0,
                    o.speed = 0,
                    o.angularSpeed = 0,
                    o.motion = 0) : o._original && (o.restitution = o._original.restitution,
                    o.friction = o._original.friction,
                    o.mass = o._original.mass,
                    o.inertia = o._original.inertia,
                    o.density = o._original.density,
                    o.inverseMass = o._original.inverseMass,
                    o.inverseInertia = o._original.inverseInertia,
                    o._original = null),
                    o.isStatic = t
                }
            }
            ,
            i.setMass = function(e, t) {
                var n = e.inertia / (e.mass / 6);
                e.inertia = t / 6 * n,
                e.inverseInertia = 1 / e.inertia,
                e.mass = t,
                e.inverseMass = 1 / e.mass,
                e.density = e.mass / e.area
            }
            ,
            i.setDensity = function(e, t) {
                i.setMass(e, t * e.area),
                e.density = t
            }
            ,
            i.setInertia = function(e, t) {
                e.inertia = t,
                e.inverseInertia = 1 / e.inertia
            }
            ,
            i.setVertices = function(e, t) {
                t[0].body === e ? e.vertices = t : e.vertices = r.create(t, e),
                e.axes = u.fromVertices(e.vertices),
                e.area = r.area(e.vertices),
                i.setMass(e, e.density * e.area);
                var n = r.centre(e.vertices);
                r.translate(e.vertices, n, -1),
                i.setInertia(e, i._inertiaScale * r.inertia(e.vertices, e.mass)),
                r.translate(e.vertices, e.position),
                c.update(e.bounds, e.vertices, e.velocity)
            }
            ,
            i.setParts = function(e, t, n) {
                for (t = t.slice(0),
                e.parts.length = 0,
                e.parts.push(e),
                e.parent = e,
                o = 0; o < t.length; o++) {
                    var o, a = t[o];
                    a !== e && (a.parent = e,
                    e.parts.push(a))
                }
                if (1 !== e.parts.length) {
                    if (n = void 0 === n || n) {
                        var s = [];
                        for (o = 0; o < t.length; o++)
                            s = s.concat(t[o].vertices);
                        r.clockwiseSort(s);
                        var l = r.hull(s)
                          , c = r.centre(l);
                        i.setVertices(e, l),
                        r.translate(e.vertices, c)
                    }
                    var u = i._totalProperties(e);
                    e.area = u.area,
                    e.parent = e,
                    e.position.x = u.centre.x,
                    e.position.y = u.centre.y,
                    e.positionPrev.x = u.centre.x,
                    e.positionPrev.y = u.centre.y,
                    i.setMass(e, u.mass),
                    i.setInertia(e, u.inertia),
                    i.setPosition(e, u.centre)
                }
            }
            ,
            i.setCentre = function(e, t, n) {
                n ? (e.positionPrev.x += t.x,
                e.positionPrev.y += t.y,
                e.position.x += t.x,
                e.position.y += t.y) : (e.positionPrev.x = t.x - (e.position.x - e.positionPrev.x),
                e.positionPrev.y = t.y - (e.position.y - e.positionPrev.y),
                e.position.x = t.x,
                e.position.y = t.y)
            }
            ,
            i.setPosition = function(e, t, n) {
                var o = a.sub(t, e.position);
                n ? (e.positionPrev.x = e.position.x,
                e.positionPrev.y = e.position.y,
                e.velocity.x = o.x,
                e.velocity.y = o.y,
                e.speed = a.magnitude(o)) : (e.positionPrev.x += o.x,
                e.positionPrev.y += o.y);
                for (var i = 0; i < e.parts.length; i++) {
                    var s = e.parts[i];
                    s.position.x += o.x,
                    s.position.y += o.y,
                    r.translate(s.vertices, o),
                    c.update(s.bounds, s.vertices, e.velocity)
                }
            }
            ,
            i.setAngle = function(e, t, n) {
                var o = t - e.angle;
                n ? (e.anglePrev = e.angle,
                e.angularVelocity = o,
                e.angularSpeed = Math.abs(o)) : e.anglePrev += o;
                for (var i = 0; i < e.parts.length; i++) {
                    var s = e.parts[i];
                    s.angle += o,
                    r.rotate(s.vertices, o, e.position),
                    u.rotate(s.axes, o),
                    c.update(s.bounds, s.vertices, e.velocity),
                    i > 0 && a.rotateAbout(s.position, o, e.position, s.position)
                }
            }
            ,
            i.setVelocity = function(e, t) {
                var n = e.deltaTime / i._baseDelta;
                e.positionPrev.x = e.position.x - t.x * n,
                e.positionPrev.y = e.position.y - t.y * n,
                e.velocity.x = (e.position.x - e.positionPrev.x) / n,
                e.velocity.y = (e.position.y - e.positionPrev.y) / n,
                e.speed = a.magnitude(e.velocity)
            }
            ,
            i.getVelocity = function(e) {
                var t = i._baseDelta / e.deltaTime;
                return {
                    x: (e.position.x - e.positionPrev.x) * t,
                    y: (e.position.y - e.positionPrev.y) * t
                }
            }
            ,
            i.getSpeed = function(e) {
                return a.magnitude(i.getVelocity(e))
            }
            ,
            i.setSpeed = function(e, t) {
                i.setVelocity(e, a.mult(a.normalise(i.getVelocity(e)), t))
            }
            ,
            i.setAngularVelocity = function(e, t) {
                var n = e.deltaTime / i._baseDelta;
                e.anglePrev = e.angle - t * n,
                e.angularVelocity = (e.angle - e.anglePrev) / n,
                e.angularSpeed = Math.abs(e.angularVelocity)
            }
            ,
            i.getAngularVelocity = function(e) {
                return (e.angle - e.anglePrev) * i._baseDelta / e.deltaTime
            }
            ,
            i.getAngularSpeed = function(e) {
                return Math.abs(i.getAngularVelocity(e))
            }
            ,
            i.setAngularSpeed = function(e, t) {
                i.setAngularVelocity(e, l.sign(i.getAngularVelocity(e)) * t)
            }
            ,
            i.translate = function(e, t, n) {
                i.setPosition(e, a.add(e.position, t), n)
            }
            ,
            i.rotate = function(e, t, n, o) {
                if (n) {
                    var r = Math.cos(t)
                      , a = Math.sin(t)
                      , s = e.position.x - n.x
                      , l = e.position.y - n.y;
                    i.setPosition(e, {
                        x: n.x + (s * r - l * a),
                        y: n.y + (s * a + l * r)
                    }, o),
                    i.setAngle(e, e.angle + t, o)
                } else
                    i.setAngle(e, e.angle + t, o)
            }
            ,
            i.scale = function(e, t, n, o) {
                var a = 0
                  , s = 0;
                o = o || e.position;
                for (var l = 0; l < e.parts.length; l++) {
                    var d = e.parts[l];
                    r.scale(d.vertices, t, n, o),
                    d.axes = u.fromVertices(d.vertices),
                    d.area = r.area(d.vertices),
                    i.setMass(d, e.density * d.area),
                    r.translate(d.vertices, {
                        x: -d.position.x,
                        y: -d.position.y
                    }),
                    i.setInertia(d, i._inertiaScale * r.inertia(d.vertices, d.mass)),
                    r.translate(d.vertices, {
                        x: d.position.x,
                        y: d.position.y
                    }),
                    l > 0 && (a += d.area,
                    s += d.inertia),
                    d.position.x = o.x + (d.position.x - o.x) * t,
                    d.position.y = o.y + (d.position.y - o.y) * n,
                    c.update(d.bounds, d.vertices, e.velocity)
                }
                e.parts.length > 1 && (e.area = a,
                e.isStatic || (i.setMass(e, e.density * a),
                i.setInertia(e, s))),
                e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
            }
            ,
            i.update = function(e, t) {
                var n = (t = (void 0 !== t ? t : 1e3 / 60) * e.timeScale) * t
                  , o = i._timeCorrection ? t / (e.deltaTime || t) : 1
                  , s = 1 - e.frictionAir * (t / l._baseDelta)
                  , d = (e.position.x - e.positionPrev.x) * o
                  , p = (e.position.y - e.positionPrev.y) * o;
                e.velocity.x = d * s + e.force.x / e.mass * n,
                e.velocity.y = p * s + e.force.y / e.mass * n,
                e.positionPrev.x = e.position.x,
                e.positionPrev.y = e.position.y,
                e.position.x += e.velocity.x,
                e.position.y += e.velocity.y,
                e.deltaTime = t,
                e.angularVelocity = (e.angle - e.anglePrev) * s * o + e.torque / e.inertia * n,
                e.anglePrev = e.angle,
                e.angle += e.angularVelocity;
                for (var f = 0; f < e.parts.length; f++) {
                    var m = e.parts[f];
                    r.translate(m.vertices, e.velocity),
                    f > 0 && (m.position.x += e.velocity.x,
                    m.position.y += e.velocity.y),
                    0 !== e.angularVelocity && (r.rotate(m.vertices, e.angularVelocity, e.position),
                    u.rotate(m.axes, e.angularVelocity),
                    f > 0 && a.rotateAbout(m.position, e.angularVelocity, e.position, m.position)),
                    c.update(m.bounds, m.vertices, e.velocity)
                }
            }
            ,
            i.updateVelocities = function(e) {
                var t = i._baseDelta / e.deltaTime
                  , n = e.velocity;
                n.x = (e.position.x - e.positionPrev.x) * t,
                n.y = (e.position.y - e.positionPrev.y) * t,
                e.speed = Math.sqrt(n.x * n.x + n.y * n.y),
                e.angularVelocity = (e.angle - e.anglePrev) * t,
                e.angularSpeed = Math.abs(e.angularVelocity)
            }
            ,
            i.applyForce = function(e, t, n) {
                var o = {
                    x: t.x - e.position.x,
                    y: t.y - e.position.y
                };
                e.force.x += n.x,
                e.force.y += n.y,
                e.torque += o.x * n.y - o.y * n.x
            }
            ,
            i._totalProperties = function(e) {
                for (var t = {
                    mass: 0,
                    area: 0,
                    inertia: 0,
                    centre: {
                        x: 0,
                        y: 0
                    }
                }, n = +(1 !== e.parts.length); n < e.parts.length; n++) {
                    var o = e.parts[n]
                      , i = o.mass !== 1 / 0 ? o.mass : 1;
                    t.mass += i,
                    t.area += o.area,
                    t.inertia += o.inertia,
                    t.centre = a.add(t.centre, a.mult(o.position, i))
                }
                return t.centre = a.div(t.centre, t.mass),
                t
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(0);
            o.on = function(e, t, n) {
                for (var o, i = t.split(" "), r = 0; r < i.length; r++)
                    o = i[r],
                    e.events = e.events || {},
                    e.events[o] = e.events[o] || [],
                    e.events[o].push(n);
                return n
            }
            ,
            o.off = function(e, t, n) {
                if (!t) {
                    e.events = {};
                    return
                }
                "function" == typeof t && (n = t,
                t = i.keys(e.events).join(" "));
                for (var o = t.split(" "), r = 0; r < o.length; r++) {
                    var a = e.events[o[r]]
                      , s = [];
                    if (n && a)
                        for (var l = 0; l < a.length; l++)
                            a[l] !== n && s.push(a[l]);
                    e.events[o[r]] = s
                }
            }
            ,
            o.trigger = function(e, t, n) {
                var o, r, a, s, l = e.events;
                if (l && i.keys(l).length > 0) {
                    n || (n = {}),
                    o = t.split(" ");
                    for (var c = 0; c < o.length; c++)
                        if (a = l[r = o[c]]) {
                            (s = i.clone(n, !1)).name = r,
                            s.source = e;
                            for (var u = 0; u < a.length; u++)
                                a[u].apply(e, [s])
                        }
                }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(5)
              , r = n(0)
              , a = n(1)
              , s = n(4);
            o.create = function(e) {
                return r.extend({
                    id: r.nextId(),
                    type: "composite",
                    parent: null,
                    isModified: !1,
                    bodies: [],
                    constraints: [],
                    composites: [],
                    label: "Composite",
                    plugin: {},
                    cache: {
                        allBodies: null,
                        allConstraints: null,
                        allComposites: null
                    }
                }, e)
            }
            ,
            o.setModified = function(e, t, n, i) {
                if (e.isModified = t,
                t && e.cache && (e.cache.allBodies = null,
                e.cache.allConstraints = null,
                e.cache.allComposites = null),
                n && e.parent && o.setModified(e.parent, t, n, i),
                i)
                    for (var r = 0; r < e.composites.length; r++) {
                        var a = e.composites[r];
                        o.setModified(a, t, n, i)
                    }
            }
            ,
            o.add = function(e, t) {
                var n = [].concat(t);
                i.trigger(e, "beforeAdd", {
                    object: t
                });
                for (var a = 0; a < n.length; a++) {
                    var s = n[a];
                    switch (s.type) {
                    case "body":
                        if (s.parent !== s) {
                            r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                            break
                        }
                        o.addBody(e, s);
                        break;
                    case "constraint":
                        o.addConstraint(e, s);
                        break;
                    case "composite":
                        o.addComposite(e, s);
                        break;
                    case "mouseConstraint":
                        o.addConstraint(e, s.constraint)
                    }
                }
                return i.trigger(e, "afterAdd", {
                    object: t
                }),
                e
            }
            ,
            o.remove = function(e, t, n) {
                var r = [].concat(t);
                i.trigger(e, "beforeRemove", {
                    object: t
                });
                for (var a = 0; a < r.length; a++) {
                    var s = r[a];
                    switch (s.type) {
                    case "body":
                        o.removeBody(e, s, n);
                        break;
                    case "constraint":
                        o.removeConstraint(e, s, n);
                        break;
                    case "composite":
                        o.removeComposite(e, s, n);
                        break;
                    case "mouseConstraint":
                        o.removeConstraint(e, s.constraint)
                    }
                }
                return i.trigger(e, "afterRemove", {
                    object: t
                }),
                e
            }
            ,
            o.addComposite = function(e, t) {
                return e.composites.push(t),
                t.parent = e,
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.removeComposite = function(e, t, n) {
                var i = r.indexOf(e.composites, t);
                if (-1 !== i) {
                    var a = o.allBodies(t);
                    o.removeCompositeAt(e, i);
                    for (var s = 0; s < a.length; s++)
                        a[s].sleepCounter = 0
                }
                if (n)
                    for (var s = 0; s < e.composites.length; s++)
                        o.removeComposite(e.composites[s], t, !0);
                return e
            }
            ,
            o.removeCompositeAt = function(e, t) {
                return e.composites.splice(t, 1),
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.addBody = function(e, t) {
                return e.bodies.push(t),
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.removeBody = function(e, t, n) {
                var i = r.indexOf(e.bodies, t);
                if (-1 !== i && (o.removeBodyAt(e, i),
                t.sleepCounter = 0),
                n)
                    for (var a = 0; a < e.composites.length; a++)
                        o.removeBody(e.composites[a], t, !0);
                return e
            }
            ,
            o.removeBodyAt = function(e, t) {
                return e.bodies.splice(t, 1),
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.addConstraint = function(e, t) {
                return e.constraints.push(t),
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.removeConstraint = function(e, t, n) {
                var i = r.indexOf(e.constraints, t);
                if (-1 !== i && o.removeConstraintAt(e, i),
                n)
                    for (var a = 0; a < e.composites.length; a++)
                        o.removeConstraint(e.composites[a], t, !0);
                return e
            }
            ,
            o.removeConstraintAt = function(e, t) {
                return e.constraints.splice(t, 1),
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.clear = function(e, t, n) {
                if (n)
                    for (var i = 0; i < e.composites.length; i++)
                        o.clear(e.composites[i], t, !0);
                return t ? e.bodies = e.bodies.filter(function(e) {
                    return e.isStatic
                }) : e.bodies.length = 0,
                e.constraints.length = 0,
                e.composites.length = 0,
                o.setModified(e, !0, !0, !1),
                e
            }
            ,
            o.allBodies = function(e) {
                if (e.cache && e.cache.allBodies)
                    return e.cache.allBodies;
                for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
                    t = t.concat(o.allBodies(e.composites[n]));
                return e.cache && (e.cache.allBodies = t),
                t
            }
            ,
            o.allConstraints = function(e) {
                if (e.cache && e.cache.allConstraints)
                    return e.cache.allConstraints;
                for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++)
                    t = t.concat(o.allConstraints(e.composites[n]));
                return e.cache && (e.cache.allConstraints = t),
                t
            }
            ,
            o.allComposites = function(e) {
                if (e.cache && e.cache.allComposites)
                    return e.cache.allComposites;
                for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++)
                    t = t.concat(o.allComposites(e.composites[n]));
                return e.cache && (e.cache.allComposites = t),
                t
            }
            ,
            o.get = function(e, t, n) {
                var i, r;
                switch (n) {
                case "body":
                    i = o.allBodies(e);
                    break;
                case "constraint":
                    i = o.allConstraints(e);
                    break;
                case "composite":
                    i = o.allComposites(e).concat(e)
                }
                return i ? 0 === (r = i.filter(function(e) {
                    return e.id.toString() === t.toString()
                })).length ? null : r[0] : null
            }
            ,
            o.move = function(e, t, n) {
                return o.remove(e, t),
                o.add(n, t),
                e
            }
            ,
            o.rebase = function(e) {
                for (var t = o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)), n = 0; n < t.length; n++)
                    t[n].id = r.nextId();
                return e
            }
            ,
            o.translate = function(e, t, n) {
                for (var i = n ? o.allBodies(e) : e.bodies, r = 0; r < i.length; r++)
                    s.translate(i[r], t);
                return e
            }
            ,
            o.rotate = function(e, t, n, i) {
                for (var r = Math.cos(t), a = Math.sin(t), l = i ? o.allBodies(e) : e.bodies, c = 0; c < l.length; c++) {
                    var u = l[c]
                      , d = u.position.x - n.x
                      , p = u.position.y - n.y;
                    s.setPosition(u, {
                        x: n.x + (d * r - p * a),
                        y: n.y + (d * a + p * r)
                    }),
                    s.rotate(u, t)
                }
                return e
            }
            ,
            o.scale = function(e, t, n, i, r) {
                for (var a = r ? o.allBodies(e) : e.bodies, l = 0; l < a.length; l++) {
                    var c = a[l]
                      , u = c.position.x - i.x
                      , d = c.position.y - i.y;
                    s.setPosition(c, {
                        x: i.x + u * t,
                        y: i.y + d * n
                    }),
                    s.scale(c, t, n)
                }
                return e
            }
            ,
            o.bounds = function(e) {
                for (var t = o.allBodies(e), n = [], i = 0; i < t.length; i += 1) {
                    var r = t[i];
                    n.push(r.bounds.min, r.bounds.max)
                }
                return a.create(n)
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(4)
              , r = n(5)
              , a = n(0);
            o._motionWakeThreshold = .18,
            o._motionSleepThreshold = .08,
            o._minBias = .9,
            o.update = function(e, t) {
                for (var n = t / a._baseDelta, r = o._motionSleepThreshold, s = 0; s < e.length; s++) {
                    var l = e[s]
                      , c = i.getSpeed(l)
                      , u = i.getAngularSpeed(l)
                      , d = c * c + u * u;
                    if (0 !== l.force.x || 0 !== l.force.y) {
                        o.set(l, !1);
                        continue
                    }
                    var p = Math.min(l.motion, d)
                      , f = Math.max(l.motion, d);
                    l.motion = o._minBias * p + (1 - o._minBias) * f,
                    l.sleepThreshold > 0 && l.motion < r ? (l.sleepCounter += 1,
                    l.sleepCounter >= l.sleepThreshold / n && o.set(l, !0)) : l.sleepCounter > 0 && (l.sleepCounter -= 1)
                }
            }
            ,
            o.afterCollisions = function(e) {
                for (var t = o._motionSleepThreshold, n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (i.isActive) {
                        var r = i.collision
                          , a = r.bodyA.parent
                          , s = r.bodyB.parent;
                        if ((!a.isSleeping || !s.isSleeping) && !a.isStatic && !s.isStatic && (a.isSleeping || s.isSleeping)) {
                            var l = a.isSleeping && !a.isStatic ? a : s
                              , c = l === a ? s : a;
                            !l.isStatic && c.motion > t && o.set(l, !1)
                        }
                    }
                }
            }
            ,
            o.set = function(e, t) {
                var n = e.isSleeping;
                t ? (e.isSleeping = !0,
                e.sleepCounter = e.sleepThreshold,
                e.positionImpulse.x = 0,
                e.positionImpulse.y = 0,
                e.positionPrev.x = e.position.x,
                e.positionPrev.y = e.position.y,
                e.anglePrev = e.angle,
                e.speed = 0,
                e.angularSpeed = 0,
                e.motion = 0,
                n || r.trigger(e, "sleepStart")) : (e.isSleeping = !1,
                e.sleepCounter = 0,
                n && r.trigger(e, "sleepEnd"))
            }
        }
        , function(e, t, n) {
            var o, i, r, a = {};
            e.exports = a;
            var s = n(3)
              , l = n(9);
            o = [],
            i = {
                overlap: 0,
                axis: null
            },
            r = {
                overlap: 0,
                axis: null
            },
            a.create = function(e, t) {
                return {
                    pair: null,
                    collided: !1,
                    bodyA: e,
                    bodyB: t,
                    parentA: e.parent,
                    parentB: t.parent,
                    depth: 0,
                    normal: {
                        x: 0,
                        y: 0
                    },
                    tangent: {
                        x: 0,
                        y: 0
                    },
                    penetration: {
                        x: 0,
                        y: 0
                    },
                    supports: [null, null],
                    supportCount: 0
                }
            }
            ,
            a.collides = function(e, t, n) {
                if (a._overlapAxes(i, e.vertices, t.vertices, e.axes),
                i.overlap <= 0 || (a._overlapAxes(r, t.vertices, e.vertices, t.axes),
                r.overlap <= 0))
                    return null;
                var o, c, u = n && n.table[l.id(e, t)];
                u ? c = u.collision : ((c = a.create(e, t)).collided = !0,
                c.bodyA = e.id < t.id ? e : t,
                c.bodyB = e.id < t.id ? t : e,
                c.parentA = c.bodyA.parent,
                c.parentB = c.bodyB.parent),
                e = c.bodyA,
                t = c.bodyB,
                o = i.overlap < r.overlap ? i : r;
                var d = c.normal
                  , p = c.tangent
                  , f = c.penetration
                  , m = c.supports
                  , y = o.overlap
                  , v = o.axis
                  , g = v.x
                  , x = v.y;
                g * (t.position.x - e.position.x) + x * (t.position.y - e.position.y) >= 0 && (g = -g,
                x = -x),
                d.x = g,
                d.y = x,
                p.x = -x,
                p.y = g,
                f.x = g * y,
                f.y = x * y,
                c.depth = y;
                var h = a._findSupports(e, t, d, 1)
                  , b = 0;
                if (s.contains(e.vertices, h[0]) && (m[b++] = h[0]),
                s.contains(e.vertices, h[1]) && (m[b++] = h[1]),
                b < 2) {
                    var S = a._findSupports(t, e, d, -1);
                    s.contains(t.vertices, S[0]) && (m[b++] = S[0]),
                    b < 2 && s.contains(t.vertices, S[1]) && (m[b++] = S[1])
                }
                return 0 === b && (m[b++] = h[0]),
                c.supportCount = b,
                c
            }
            ,
            a._overlapAxes = function(e, t, n, o) {
                var i, r, a, s, l, c, u = t.length, d = n.length, p = t[0].x, f = t[0].y, m = n[0].x, y = n[0].y, v = o.length, g = Number.MAX_VALUE, x = 0;
                for (l = 0; l < v; l++) {
                    var h = o[l]
                      , b = h.x
                      , S = h.y
                      , w = p * b + f * S
                      , P = m * b + y * S
                      , A = w
                      , M = P;
                    for (c = 1; c < u; c += 1)
                        (s = t[c].x * b + t[c].y * S) > A ? A = s : s < w && (w = s);
                    for (c = 1; c < d; c += 1)
                        (s = n[c].x * b + n[c].y * S) > M ? M = s : s < P && (P = s);
                    if ((i = (r = A - P) < (a = M - w) ? r : a) < g && (g = i,
                    x = l,
                    i <= 0))
                        break
                }
                e.axis = o[x],
                e.overlap = g
            }
            ,
            a._findSupports = function(e, t, n, i) {
                var r, a, s, l = t.vertices, c = l.length, u = e.position.x, d = e.position.y, p = n.x * i, f = n.y * i, m = l[0], y = m, v = p * (u - y.x) + f * (d - y.y);
                for (s = 1; s < c; s += 1)
                    (a = p * (u - (y = l[s]).x) + f * (d - y.y)) < v && (v = a,
                    m = y);
                return (v = p * (u - (r = l[(c + m.index - 1) % c]).x) + f * (d - r.y),
                p * (u - (y = l[(m.index + 1) % c]).x) + f * (d - y.y) < v) ? (o[0] = m,
                o[1] = y) : (o[0] = m,
                o[1] = r),
                o
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(16);
            o.create = function(e, t) {
                var n = e.bodyA
                  , r = e.bodyB
                  , a = {
                    id: o.id(n, r),
                    bodyA: n,
                    bodyB: r,
                    collision: e,
                    contacts: [i.create(), i.create()],
                    contactCount: 0,
                    separation: 0,
                    isActive: !0,
                    isSensor: n.isSensor || r.isSensor,
                    timeCreated: t,
                    timeUpdated: t,
                    inverseMass: 0,
                    friction: 0,
                    frictionStatic: 0,
                    restitution: 0,
                    slop: 0
                };
                return o.update(a, e, t),
                a
            }
            ,
            o.update = function(e, t, n) {
                var o = t.supports
                  , i = t.supportCount
                  , r = e.contacts
                  , a = t.parentA
                  , s = t.parentB;
                e.isActive = !0,
                e.timeUpdated = n,
                e.collision = t,
                e.separation = t.depth,
                e.inverseMass = a.inverseMass + s.inverseMass,
                e.friction = a.friction < s.friction ? a.friction : s.friction,
                e.frictionStatic = a.frictionStatic > s.frictionStatic ? a.frictionStatic : s.frictionStatic,
                e.restitution = a.restitution > s.restitution ? a.restitution : s.restitution,
                e.slop = a.slop > s.slop ? a.slop : s.slop,
                e.contactCount = i,
                t.pair = e;
                var l = o[0]
                  , c = r[0]
                  , u = o[1]
                  , d = r[1];
                (d.vertex === l || c.vertex === u) && (r[1] = c,
                r[0] = c = d,
                d = r[1]),
                c.vertex = l,
                d.vertex = u
            }
            ,
            o.setActive = function(e, t, n) {
                t ? (e.isActive = !0,
                e.timeUpdated = n) : (e.isActive = !1,
                e.contactCount = 0)
            }
            ,
            o.id = function(e, t) {
                return e.id < t.id ? e.id.toString(36) + ":" + t.id.toString(36) : t.id.toString(36) + ":" + e.id.toString(36)
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(3)
              , r = n(2)
              , a = n(7)
              , s = n(1)
              , l = n(11)
              , c = n(0);
            o._warming = .4,
            o._torqueDampen = 1,
            o._minLength = 1e-6,
            o.create = function(e) {
                e.bodyA && !e.pointA && (e.pointA = {
                    x: 0,
                    y: 0
                }),
                e.bodyB && !e.pointB && (e.pointB = {
                    x: 0,
                    y: 0
                });
                var t = e.bodyA ? r.add(e.bodyA.position, e.pointA) : e.pointA
                  , n = e.bodyB ? r.add(e.bodyB.position, e.pointB) : e.pointB
                  , o = r.magnitude(r.sub(t, n));
                e.length = void 0 !== e.length ? e.length : o,
                e.id = e.id || c.nextId(),
                e.label = e.label || "Constraint",
                e.type = "constraint",
                e.stiffness = e.stiffness || (e.length > 0 ? 1 : .7),
                e.damping = e.damping || 0,
                e.angularStiffness = e.angularStiffness || 0,
                e.angleA = e.bodyA ? e.bodyA.angle : e.angleA,
                e.angleB = e.bodyB ? e.bodyB.angle : e.angleB,
                e.plugin = {};
                var i = {
                    visible: !0,
                    lineWidth: 2,
                    strokeStyle: "#ffffff",
                    type: "line",
                    anchors: !0
                };
                return 0 === e.length && e.stiffness > .1 ? (i.type = "pin",
                i.anchors = !1) : e.stiffness < .9 && (i.type = "spring"),
                e.render = c.extend(i, e.render),
                e
            }
            ,
            o.preSolveAll = function(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var n = e[t]
                      , o = n.constraintImpulse;
                    n.isStatic || 0 === o.x && 0 === o.y && 0 === o.angle || (n.position.x += o.x,
                    n.position.y += o.y,
                    n.angle += o.angle)
                }
            }
            ,
            o.solveAll = function(e, t) {
                for (var n = c.clamp(t / c._baseDelta, 0, 1), i = 0; i < e.length; i += 1) {
                    var r = e[i]
                      , a = !r.bodyA || r.bodyA && r.bodyA.isStatic
                      , s = !r.bodyB || r.bodyB && r.bodyB.isStatic;
                    (a || s) && o.solve(e[i], n)
                }
                for (i = 0; i < e.length; i += 1)
                    a = !(r = e[i]).bodyA || r.bodyA && r.bodyA.isStatic,
                    s = !r.bodyB || r.bodyB && r.bodyB.isStatic,
                    a || s || o.solve(e[i], n)
            }
            ,
            o.solve = function(e, t) {
                var n = e.bodyA
                  , i = e.bodyB
                  , a = e.pointA
                  , s = e.pointB;
                if (n || i) {
                    n && !n.isStatic && (r.rotate(a, n.angle - e.angleA, a),
                    e.angleA = n.angle),
                    i && !i.isStatic && (r.rotate(s, i.angle - e.angleB, s),
                    e.angleB = i.angle);
                    var l = a
                      , c = s;
                    if (n && (l = r.add(n.position, a)),
                    i && (c = r.add(i.position, s)),
                    l && c) {
                        var u = r.sub(l, c)
                          , d = r.magnitude(u);
                        d < o._minLength && (d = o._minLength);
                        var p, f, m, y, v, g = (d - e.length) / d, x = e.stiffness >= 1 || 0 === e.length ? e.stiffness * t : e.stiffness * t * t, h = e.damping * t, b = r.mult(u, g * x), S = (n ? n.inverseMass : 0) + (i ? i.inverseMass : 0), w = S + ((n ? n.inverseInertia : 0) + (i ? i.inverseInertia : 0));
                        if (h > 0) {
                            var P = r.create();
                            m = r.div(u, d),
                            v = r.sub(i && r.sub(i.position, i.positionPrev) || P, n && r.sub(n.position, n.positionPrev) || P),
                            y = r.dot(m, v)
                        }
                        n && !n.isStatic && (f = n.inverseMass / S,
                        n.constraintImpulse.x -= b.x * f,
                        n.constraintImpulse.y -= b.y * f,
                        n.position.x -= b.x * f,
                        n.position.y -= b.y * f,
                        h > 0 && (n.positionPrev.x -= h * m.x * y * f,
                        n.positionPrev.y -= h * m.y * y * f),
                        p = r.cross(a, b) / w * o._torqueDampen * n.inverseInertia * (1 - e.angularStiffness),
                        n.constraintImpulse.angle -= p,
                        n.angle -= p),
                        i && !i.isStatic && (f = i.inverseMass / S,
                        i.constraintImpulse.x += b.x * f,
                        i.constraintImpulse.y += b.y * f,
                        i.position.x += b.x * f,
                        i.position.y += b.y * f,
                        h > 0 && (i.positionPrev.x += h * m.x * y * f,
                        i.positionPrev.y += h * m.y * y * f),
                        p = r.cross(s, b) / w * o._torqueDampen * i.inverseInertia * (1 - e.angularStiffness),
                        i.constraintImpulse.angle += p,
                        i.angle += p)
                    }
                }
            }
            ,
            o.postSolveAll = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                      , c = n.constraintImpulse;
                    if (!n.isStatic && (0 !== c.x || 0 !== c.y || 0 !== c.angle)) {
                        a.set(n, !1);
                        for (var u = 0; u < n.parts.length; u++) {
                            var d = n.parts[u];
                            i.translate(d.vertices, c),
                            u > 0 && (d.position.x += c.x,
                            d.position.y += c.y),
                            0 !== c.angle && (i.rotate(d.vertices, c.angle, n.position),
                            l.rotate(d.axes, c.angle),
                            u > 0 && r.rotateAbout(d.position, c.angle, n.position, d.position)),
                            s.update(d.bounds, d.vertices, n.velocity)
                        }
                        c.angle *= o._warming,
                        c.x *= o._warming,
                        c.y *= o._warming
                    }
                }
            }
            ,
            o.pointAWorld = function(e) {
                return {
                    x: (e.bodyA ? e.bodyA.position.x : 0) + (e.pointA ? e.pointA.x : 0),
                    y: (e.bodyA ? e.bodyA.position.y : 0) + (e.pointA ? e.pointA.y : 0)
                }
            }
            ,
            o.pointBWorld = function(e) {
                return {
                    x: (e.bodyB ? e.bodyB.position.x : 0) + (e.pointB ? e.pointB.x : 0),
                    y: (e.bodyB ? e.bodyB.position.y : 0) + (e.pointB ? e.pointB.y : 0)
                }
            }
            ,
            o.currentLength = function(e) {
                var t = (e.bodyA ? e.bodyA.position.x : 0) + (e.pointA ? e.pointA.x : 0)
                  , n = (e.bodyA ? e.bodyA.position.y : 0) + (e.pointA ? e.pointA.y : 0)
                  , o = (e.bodyB ? e.bodyB.position.x : 0) + (e.pointB ? e.pointB.x : 0)
                  , i = (e.bodyB ? e.bodyB.position.y : 0) + (e.pointB ? e.pointB.y : 0)
                  , r = t - o
                  , a = n - i;
                return Math.sqrt(r * r + a * a)
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(2)
              , r = n(0);
            o.fromVertices = function(e) {
                for (var t = {}, n = 0; n < e.length; n++) {
                    var o = (n + 1) % e.length
                      , a = i.normalise({
                        x: e[o].y - e[n].y,
                        y: e[n].x - e[o].x
                    })
                      , s = 0 === a.y ? 1 / 0 : a.x / a.y;
                    t[s = s.toFixed(3).toString()] = a
                }
                return r.values(t)
            }
            ,
            o.rotate = function(e, t) {
                if (0 !== t)
                    for (var n = Math.cos(t), o = Math.sin(t), i = 0; i < e.length; i++) {
                        var r, a = e[i];
                        r = a.x * n - a.y * o,
                        a.y = a.x * o + a.y * n,
                        a.x = r
                    }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(3)
              , r = n(0)
              , a = n(4)
              , s = n(1)
              , l = n(2);
            o.rectangle = function(e, t, n, o, s) {
                s = s || {};
                var l = {
                    label: "Rectangle Body",
                    position: {
                        x: e,
                        y: t
                    },
                    vertices: i.fromPath("L 0 0 L " + n + " 0 L " + n + " " + o + " L 0 " + o)
                };
                if (s.chamfer) {
                    var c = s.chamfer;
                    l.vertices = i.chamfer(l.vertices, c.radius, c.quality, c.qualityMin, c.qualityMax),
                    delete s.chamfer
                }
                return a.create(r.extend({}, l, s))
            }
            ,
            o.trapezoid = function(e, t, n, o, s, l) {
                l = l || {},
                s >= 1 && r.warn("Bodies.trapezoid: slope parameter must be < 1.");
                var c, u = (1 - 2 * (s *= .5)) * n, d = n * s, p = d + u, f = p + d;
                c = s < .5 ? "L 0 0 L " + d + " " + -o + " L " + p + " " + -o + " L " + f + " 0" : "L 0 0 L " + p + " " + -o + " L " + f + " 0";
                var m = {
                    label: "Trapezoid Body",
                    position: {
                        x: e,
                        y: t
                    },
                    vertices: i.fromPath(c)
                };
                if (l.chamfer) {
                    var y = l.chamfer;
                    m.vertices = i.chamfer(m.vertices, y.radius, y.quality, y.qualityMin, y.qualityMax),
                    delete l.chamfer
                }
                return a.create(r.extend({}, m, l))
            }
            ,
            o.circle = function(e, t, n, i, a) {
                i = i || {};
                var s = Math.ceil(Math.max(10, Math.min(a = a || 25, n)));
                return s % 2 == 1 && (s += 1),
                o.polygon(e, t, s, n, r.extend({}, {
                    label: "Circle Body",
                    circleRadius: n
                }, i))
            }
            ,
            o.polygon = function(e, t, n, s, l) {
                if (l = l || {},
                n < 3)
                    return o.circle(e, t, s, l);
                for (var c = 2 * Math.PI / n, u = "", d = .5 * c, p = 0; p < n; p += 1) {
                    var f = d + p * c
                      , m = Math.cos(f) * s
                      , y = Math.sin(f) * s;
                    u += "L " + m.toFixed(3) + " " + y.toFixed(3) + " "
                }
                var v = {
                    label: "Polygon Body",
                    position: {
                        x: e,
                        y: t
                    },
                    vertices: i.fromPath(u)
                };
                if (l.chamfer) {
                    var g = l.chamfer;
                    v.vertices = i.chamfer(v.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax),
                    delete l.chamfer
                }
                return a.create(r.extend({}, v, l))
            }
            ,
            o.fromVertices = function(e, t, n, o, c, u, d, p) {
                var f, m, y, v, g, x, h, b, S, w, P = r.getDecomp();
                for (f = !!(P && P.quickDecomp),
                o = o || {},
                y = [],
                c = void 0 !== c && c,
                u = void 0 !== u ? u : .01,
                d = void 0 !== d ? d : 10,
                p = void 0 !== p ? p : .01,
                r.isArray(n[0]) || (n = [n]),
                S = 0; S < n.length; S += 1)
                    if (g = n[S],
                    (v = i.isConvex(g)) || f || r.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),
                    v || !f)
                        g = v ? i.clockwiseSort(g) : i.hull(g),
                        y.push({
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: g
                        });
                    else {
                        var A = g.map(function(e) {
                            return [e.x, e.y]
                        });
                        P.makeCCW(A),
                        !1 !== u && P.removeCollinearPoints(A, u),
                        !1 !== p && P.removeDuplicatePoints && P.removeDuplicatePoints(A, p);
                        var M = P.quickDecomp(A);
                        for (x = 0; x < M.length; x++) {
                            var B = M[x].map(function(e) {
                                return {
                                    x: e[0],
                                    y: e[1]
                                }
                            });
                            d > 0 && i.area(B) < d || y.push({
                                position: i.centre(B),
                                vertices: B
                            })
                        }
                    }
                for (x = 0; x < y.length; x++)
                    y[x] = a.create(r.extend(y[x], o));
                if (c)
                    for (x = 0; x < y.length; x++) {
                        var _ = y[x];
                        for (h = x + 1; h < y.length; h++) {
                            var C = y[h];
                            if (s.overlaps(_.bounds, C.bounds)) {
                                var k = _.vertices
                                  , I = C.vertices;
                                for (b = 0; b < _.vertices.length; b++)
                                    for (w = 0; w < C.vertices.length; w++) {
                                        var T = l.magnitudeSquared(l.sub(k[(b + 1) % k.length], I[w]))
                                          , R = l.magnitudeSquared(l.sub(k[b], I[(w + 1) % I.length]));
                                        T < 5 && R < 5 && (k[b].isInternal = !0,
                                        I[w].isInternal = !0)
                                    }
                            }
                        }
                    }
                return y.length > 1 ? (m = a.create(r.extend({
                    parts: y.slice(0)
                }, o)),
                a.setPosition(m, {
                    x: e,
                    y: t
                }),
                m) : y[0]
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(0)
              , r = n(8);
            o.create = function(e) {
                return i.extend({
                    bodies: [],
                    collisions: [],
                    pairs: null
                }, e)
            }
            ,
            o.setBodies = function(e, t) {
                e.bodies = t.slice(0)
            }
            ,
            o.clear = function(e) {
                e.bodies = [],
                e.collisions = []
            }
            ,
            o.collisions = function(e) {
                var t, n, i = e.pairs, a = e.bodies, s = a.length, l = o.canCollide, c = r.collides, u = e.collisions, d = 0;
                for (a.sort(o._compareBoundsX),
                t = 0; t < s; t++) {
                    var p = a[t]
                      , f = p.bounds
                      , m = p.bounds.max.x
                      , y = p.bounds.max.y
                      , v = p.bounds.min.y
                      , g = p.isStatic || p.isSleeping
                      , x = p.parts.length
                      , h = 1 === x;
                    for (n = t + 1; n < s; n++) {
                        var b = a[n]
                          , S = b.bounds;
                        if (S.min.x > m)
                            break;
                        if (!(y < S.min.y) && !(v > S.max.y) && (!g || !b.isStatic && !b.isSleeping) && l(p.collisionFilter, b.collisionFilter)) {
                            var w = b.parts.length;
                            if (h && 1 === w) {
                                var P = c(p, b, i);
                                P && (u[d++] = P)
                            } else
                                for (var A = +(x > 1), M = +(w > 1), B = A; B < x; B++)
                                    for (var _ = p.parts[B], f = _.bounds, C = M; C < w; C++) {
                                        var k = b.parts[C]
                                          , S = k.bounds;
                                        if (!(f.min.x > S.max.x) && !(f.max.x < S.min.x) && !(f.max.y < S.min.y) && !(f.min.y > S.max.y)) {
                                            var P = c(_, k, i);
                                            P && (u[d++] = P)
                                        }
                                    }
                        }
                    }
                }
                return u.length !== d && (u.length = d),
                u
            }
            ,
            o.canCollide = function(e, t) {
                return e.group === t.group && 0 !== e.group ? e.group > 0 : (e.mask & t.category) != 0 && (t.mask & e.category) != 0
            }
            ,
            o._compareBoundsX = function(e, t) {
                return e.bounds.min.x - t.bounds.min.x
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(0);
            o.create = function(e) {
                var t = {};
                return e || i.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                t.element = e || document.body,
                t.absolute = {
                    x: 0,
                    y: 0
                },
                t.position = {
                    x: 0,
                    y: 0
                },
                t.mousedownPosition = {
                    x: 0,
                    y: 0
                },
                t.mouseupPosition = {
                    x: 0,
                    y: 0
                },
                t.offset = {
                    x: 0,
                    y: 0
                },
                t.scale = {
                    x: 1,
                    y: 1
                },
                t.wheelDelta = 0,
                t.button = -1,
                t.pixelRatio = parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1,
                t.sourceEvents = {
                    mousemove: null,
                    mousedown: null,
                    mouseup: null,
                    mousewheel: null
                },
                t.mousemove = function(e) {
                    var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches && (t.button = 0,
                    e.preventDefault()),
                    t.absolute.x = n.x,
                    t.absolute.y = n.y,
                    t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                    t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                    t.sourceEvents.mousemove = e
                }
                ,
                t.mousedown = function(e) {
                    var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches ? (t.button = 0,
                    e.preventDefault()) : t.button = e.button,
                    t.absolute.x = n.x,
                    t.absolute.y = n.y,
                    t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                    t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                    t.mousedownPosition.x = t.position.x,
                    t.mousedownPosition.y = t.position.y,
                    t.sourceEvents.mousedown = e
                }
                ,
                t.mouseup = function(e) {
                    var n = o._getRelativeMousePosition(e, t.element, t.pixelRatio);
                    e.changedTouches && e.preventDefault(),
                    t.button = -1,
                    t.absolute.x = n.x,
                    t.absolute.y = n.y,
                    t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                    t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                    t.mouseupPosition.x = t.position.x,
                    t.mouseupPosition.y = t.position.y,
                    t.sourceEvents.mouseup = e
                }
                ,
                t.mousewheel = function(e) {
                    t.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)),
                    e.preventDefault(),
                    t.sourceEvents.mousewheel = e
                }
                ,
                o.setElement(t, t.element),
                t
            }
            ,
            o.setElement = function(e, t) {
                e.element = t,
                t.addEventListener("mousemove", e.mousemove, {
                    passive: !0
                }),
                t.addEventListener("mousedown", e.mousedown, {
                    passive: !0
                }),
                t.addEventListener("mouseup", e.mouseup, {
                    passive: !0
                }),
                t.addEventListener("wheel", e.mousewheel, {
                    passive: !1
                }),
                t.addEventListener("touchmove", e.mousemove, {
                    passive: !1
                }),
                t.addEventListener("touchstart", e.mousedown, {
                    passive: !1
                }),
                t.addEventListener("touchend", e.mouseup, {
                    passive: !1
                })
            }
            ,
            o.clearSourceEvents = function(e) {
                e.sourceEvents.mousemove = null,
                e.sourceEvents.mousedown = null,
                e.sourceEvents.mouseup = null,
                e.sourceEvents.mousewheel = null,
                e.wheelDelta = 0
            }
            ,
            o.setOffset = function(e, t) {
                e.offset.x = t.x,
                e.offset.y = t.y,
                e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                e.position.y = e.absolute.y * e.scale.y + e.offset.y
            }
            ,
            o.setScale = function(e, t) {
                e.scale.x = t.x,
                e.scale.y = t.y,
                e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                e.position.y = e.absolute.y * e.scale.y + e.offset.y
            }
            ,
            o._getRelativeMousePosition = function(e, t, n) {
                var o, i, r = t.getBoundingClientRect(), a = document.documentElement || document.body.parentNode || document.body, s = void 0 !== window.pageXOffset ? window.pageXOffset : a.scrollLeft, l = void 0 !== window.pageYOffset ? window.pageYOffset : a.scrollTop, c = e.changedTouches;
                return c ? (o = c[0].pageX - r.left - s,
                i = c[0].pageY - r.top - l) : (o = e.pageX - r.left - s,
                i = e.pageY - r.top - l),
                {
                    x: o / (t.clientWidth / (t.width || t.clientWidth) * n),
                    y: i / (t.clientHeight / (t.height || t.clientHeight) * n)
                }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(0);
            o._registry = {},
            o.register = function(e) {
                if (o.isPlugin(e) || i.warn("Plugin.register:", o.toString(e), "does not implement all required fields."),
                e.name in o._registry) {
                    var t = o._registry[e.name]
                      , n = o.versionParse(e.version).number
                      , r = o.versionParse(t.version).number;
                    n > r ? (i.warn("Plugin.register:", o.toString(t), "was upgraded to", o.toString(e)),
                    o._registry[e.name] = e) : n < r ? i.warn("Plugin.register:", o.toString(t), "can not be downgraded to", o.toString(e)) : e !== t && i.warn("Plugin.register:", o.toString(e), "is already registered to different plugin object")
                } else
                    o._registry[e.name] = e;
                return e
            }
            ,
            o.resolve = function(e) {
                return o._registry[o.dependencyParse(e).name]
            }
            ,
            o.toString = function(e) {
                return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
            }
            ,
            o.isPlugin = function(e) {
                return e && e.name && e.version && e.install
            }
            ,
            o.isUsed = function(e, t) {
                return e.used.indexOf(t) > -1
            }
            ,
            o.isFor = function(e, t) {
                var n = e.for && o.dependencyParse(e.for);
                return !e.for || t.name === n.name && o.versionSatisfies(t.version, n.range)
            }
            ,
            o.use = function(e, t) {
                if (e.uses = (e.uses || []).concat(t || []),
                0 === e.uses.length)
                    return void i.warn("Plugin.use:", o.toString(e), "does not specify any dependencies to install.");
                for (var n = o.dependencies(e), r = i.topologicalSort(n), a = [], s = 0; s < r.length; s += 1)
                    if (r[s] !== e.name) {
                        var l = o.resolve(r[s]);
                        if (!l) {
                            a.push("❌ " + r[s]);
                            continue
                        }
                        o.isUsed(e, l.name) || (o.isFor(l, e) || (i.warn("Plugin.use:", o.toString(l), "is for", l.for, "but installed on", o.toString(e) + "."),
                        l._warned = !0),
                        l.install ? l.install(e) : (i.warn("Plugin.use:", o.toString(l), "does not specify an install function."),
                        l._warned = !0),
                        l._warned ? (a.push("🔶 " + o.toString(l)),
                        delete l._warned) : a.push("✅ " + o.toString(l)),
                        e.used.push(l.name))
                    }
                a.length > 0 && i.info(a.join("  "))
            }
            ,
            o.dependencies = function(e, t) {
                var n = o.dependencyParse(e)
                  , r = n.name;
                if (!(r in (t = t || {}))) {
                    e = o.resolve(e) || e,
                    t[r] = i.map(e.uses || [], function(t) {
                        o.isPlugin(t) && o.register(t);
                        var r = o.dependencyParse(t)
                          , a = o.resolve(t);
                        return a && !o.versionSatisfies(a.version, r.range) ? (i.warn("Plugin.dependencies:", o.toString(a), "does not satisfy", o.toString(r), "used by", o.toString(n) + "."),
                        a._warned = !0,
                        e._warned = !0) : a || (i.warn("Plugin.dependencies:", o.toString(t), "used by", o.toString(n), "could not be resolved."),
                        e._warned = !0),
                        r.name
                    });
                    for (var a = 0; a < t[r].length; a += 1)
                        o.dependencies(t[r][a], t);
                    return t
                }
            }
            ,
            o.dependencyParse = function(e) {
                return i.isString(e) ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(e) || i.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."),
                {
                    name: e.split("@")[0],
                    range: e.split("@")[1] || "*"
                }) : {
                    name: e.name,
                    range: e.range || e.version
                }
            }
            ,
            o.versionParse = function(e) {
                var t = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                t.test(e) || i.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                var n = t.exec(e)
                  , o = Number(n[4])
                  , r = Number(n[5])
                  , a = Number(n[6]);
                return {
                    isRange: !!(n[1] || n[2]),
                    version: n[3],
                    range: e,
                    operator: n[1] || n[2] || "",
                    major: o,
                    minor: r,
                    patch: a,
                    parts: [o, r, a],
                    prerelease: n[7],
                    number: 1e8 * o + 1e4 * r + a
                }
            }
            ,
            o.versionSatisfies = function(e, t) {
                t = t || "*";
                var n = o.versionParse(t)
                  , i = o.versionParse(e);
                if (n.isRange) {
                    if ("*" === n.operator || "*" === e)
                        return !0;
                    if (">" === n.operator)
                        return i.number > n.number;
                    if (">=" === n.operator)
                        return i.number >= n.number;
                    if ("~" === n.operator)
                        return i.major === n.major && i.minor === n.minor && i.patch >= n.patch;
                    if ("^" === n.operator)
                        return n.major > 0 ? i.major === n.major && i.number >= n.number : n.minor > 0 ? i.minor === n.minor && i.patch >= n.patch : i.patch === n.patch
                }
                return e === t || "*" === e
            }
        }
        , function(e, t) {
            var n = {};
            e.exports = n,
            n.create = function(e) {
                return {
                    vertex: e,
                    normalImpulse: 0,
                    tangentImpulse: 0
                }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(7)
              , r = n(18)
              , a = n(13)
              , s = n(19)
              , l = n(5)
              , c = n(6)
              , u = n(10)
              , d = n(0)
              , p = n(4);
            o._deltaMax = 1e3 / 60,
            o.create = function(e) {
                e = e || {};
                var t = d.extend({
                    positionIterations: 6,
                    velocityIterations: 4,
                    constraintIterations: 2,
                    enableSleeping: !1,
                    events: [],
                    plugin: {},
                    gravity: {
                        x: 0,
                        y: 1,
                        scale: .001
                    },
                    timing: {
                        timestamp: 0,
                        timeScale: 1,
                        lastDelta: 0,
                        lastElapsed: 0,
                        lastUpdatesPerFrame: 0
                    }
                }, e);
                return t.world = e.world || c.create({
                    label: "World"
                }),
                t.pairs = e.pairs || s.create(),
                t.detector = e.detector || a.create(),
                t.detector.pairs = t.pairs,
                t.grid = {
                    buckets: []
                },
                t.world.gravity = t.gravity,
                t.broadphase = t.grid,
                t.metrics = {},
                t
            }
            ,
            o.update = function(e, t) {
                var n, p = d.now(), f = e.world, m = e.detector, y = e.pairs, v = e.timing, g = v.timestamp;
                t > o._deltaMax && d.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to", o._deltaMax.toFixed(3), "ms."),
                t = (void 0 !== t ? t : d._baseDelta) * v.timeScale,
                v.timestamp += t,
                v.lastDelta = t;
                var x = {
                    timestamp: v.timestamp,
                    delta: t
                };
                l.trigger(e, "beforeUpdate", x);
                var h = c.allBodies(f)
                  , b = c.allConstraints(f);
                for (f.isModified && (a.setBodies(m, h),
                c.setModified(f, !1, !1, !0)),
                e.enableSleeping && i.update(h, t),
                o._bodiesApplyGravity(h, e.gravity),
                t > 0 && o._bodiesUpdate(h, t),
                l.trigger(e, "beforeSolve", x),
                u.preSolveAll(h),
                n = 0; n < e.constraintIterations; n++)
                    u.solveAll(b, t);
                u.postSolveAll(h);
                var S = a.collisions(m);
                s.update(y, S, g),
                e.enableSleeping && i.afterCollisions(y.list),
                y.collisionStart.length > 0 && l.trigger(e, "collisionStart", {
                    pairs: y.collisionStart,
                    timestamp: v.timestamp,
                    delta: t
                });
                var w = d.clamp(20 / e.positionIterations, 0, 1);
                for (r.preSolvePosition(y.list),
                n = 0; n < e.positionIterations; n++)
                    r.solvePosition(y.list, t, w);
                for (r.postSolvePosition(h),
                u.preSolveAll(h),
                n = 0; n < e.constraintIterations; n++)
                    u.solveAll(b, t);
                for (u.postSolveAll(h),
                r.preSolveVelocity(y.list),
                n = 0; n < e.velocityIterations; n++)
                    r.solveVelocity(y.list, t);
                return o._bodiesUpdateVelocities(h),
                y.collisionActive.length > 0 && l.trigger(e, "collisionActive", {
                    pairs: y.collisionActive,
                    timestamp: v.timestamp,
                    delta: t
                }),
                y.collisionEnd.length > 0 && l.trigger(e, "collisionEnd", {
                    pairs: y.collisionEnd,
                    timestamp: v.timestamp,
                    delta: t
                }),
                o._bodiesClearForces(h),
                l.trigger(e, "afterUpdate", x),
                e.timing.lastElapsed = d.now() - p,
                e
            }
            ,
            o.merge = function(e, t) {
                if (d.extend(e, t),
                t.world) {
                    e.world = t.world,
                    o.clear(e);
                    for (var n = c.allBodies(e.world), r = 0; r < n.length; r++) {
                        var a = n[r];
                        i.set(a, !1),
                        a.id = d.nextId()
                    }
                }
            }
            ,
            o.clear = function(e) {
                s.clear(e.pairs),
                a.clear(e.detector)
            }
            ,
            o._bodiesClearForces = function(e) {
                for (var t = e.length, n = 0; n < t; n++) {
                    var o = e[n];
                    o.force.x = 0,
                    o.force.y = 0,
                    o.torque = 0
                }
            }
            ,
            o._bodiesApplyGravity = function(e, t) {
                var n = void 0 !== t.scale ? t.scale : .001
                  , o = e.length;
                if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                    for (var i = 0; i < o; i++) {
                        var r = e[i];
                        r.isStatic || r.isSleeping || (r.force.y += r.mass * t.y * n,
                        r.force.x += r.mass * t.x * n)
                    }
            }
            ,
            o._bodiesUpdate = function(e, t) {
                for (var n = e.length, o = 0; o < n; o++) {
                    var i = e[o];
                    i.isStatic || i.isSleeping || p.update(i, t)
                }
            }
            ,
            o._bodiesUpdateVelocities = function(e) {
                for (var t = e.length, n = 0; n < t; n++)
                    p.updateVelocities(e[n])
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(3)
              , r = n(0)
              , a = n(1);
            o._restingThresh = 2,
            o._restingThreshTangent = Math.sqrt(6),
            o._positionDampen = .9,
            o._positionWarming = .8,
            o._frictionNormalMultiplier = 5,
            o._frictionMaxStatic = Number.MAX_VALUE,
            o.preSolvePosition = function(e) {
                var t, n, o, i = e.length;
                for (t = 0; t < i; t++)
                    (n = e[t]).isActive && (o = n.contactCount,
                    n.collision.parentA.totalContacts += o,
                    n.collision.parentB.totalContacts += o)
            }
            ,
            o.solvePosition = function(e, t, n) {
                var i, a, s, l, c, u, d, p, f = o._positionDampen * (n || 1), m = r.clamp(t / r._baseDelta, 0, 1), y = e.length;
                for (i = 0; i < y; i++)
                    (a = e[i]).isActive && !a.isSensor && (l = (s = a.collision).parentA,
                    c = s.parentB,
                    u = s.normal,
                    a.separation = s.depth + u.x * (c.positionImpulse.x - l.positionImpulse.x) + u.y * (c.positionImpulse.y - l.positionImpulse.y));
                for (i = 0; i < y; i++)
                    (a = e[i]).isActive && !a.isSensor && (l = (s = a.collision).parentA,
                    c = s.parentB,
                    u = s.normal,
                    p = a.separation - a.slop * m,
                    (l.isStatic || c.isStatic) && (p *= 2),
                    l.isStatic || l.isSleeping || (d = f / l.totalContacts,
                    l.positionImpulse.x += u.x * p * d,
                    l.positionImpulse.y += u.y * p * d),
                    c.isStatic || c.isSleeping || (d = f / c.totalContacts,
                    c.positionImpulse.x -= u.x * p * d,
                    c.positionImpulse.y -= u.y * p * d))
            }
            ,
            o.postSolvePosition = function(e) {
                for (var t = o._positionWarming, n = e.length, r = i.translate, s = a.update, l = 0; l < n; l++) {
                    var c = e[l]
                      , u = c.positionImpulse
                      , d = u.x
                      , p = u.y
                      , f = c.velocity;
                    if (c.totalContacts = 0,
                    0 !== d || 0 !== p) {
                        for (var m = 0; m < c.parts.length; m++) {
                            var y = c.parts[m];
                            r(y.vertices, u),
                            s(y.bounds, y.vertices, f),
                            y.position.x += d,
                            y.position.y += p
                        }
                        c.positionPrev.x += d,
                        c.positionPrev.y += p,
                        d * f.x + p * f.y < 0 ? (u.x = 0,
                        u.y = 0) : (u.x *= t,
                        u.y *= t)
                    }
                }
            }
            ,
            o.preSolveVelocity = function(e) {
                var t, n, o = e.length;
                for (t = 0; t < o; t++) {
                    var i = e[t];
                    if (i.isActive && !i.isSensor) {
                        var r = i.contacts
                          , a = i.contactCount
                          , s = i.collision
                          , l = s.parentA
                          , c = s.parentB
                          , u = s.normal
                          , d = s.tangent;
                        for (n = 0; n < a; n++) {
                            var p = r[n]
                              , f = p.vertex
                              , m = p.normalImpulse
                              , y = p.tangentImpulse;
                            if (0 !== m || 0 !== y) {
                                var v = u.x * m + d.x * y
                                  , g = u.y * m + d.y * y;
                                l.isStatic || l.isSleeping || (l.positionPrev.x += v * l.inverseMass,
                                l.positionPrev.y += g * l.inverseMass,
                                l.anglePrev += l.inverseInertia * ((f.x - l.position.x) * g - (f.y - l.position.y) * v)),
                                c.isStatic || c.isSleeping || (c.positionPrev.x -= v * c.inverseMass,
                                c.positionPrev.y -= g * c.inverseMass,
                                c.anglePrev -= c.inverseInertia * ((f.x - c.position.x) * g - (f.y - c.position.y) * v))
                            }
                        }
                    }
                }
            }
            ,
            o.solveVelocity = function(e, t) {
                var n, i, a, s, l = t / r._baseDelta, c = l * l * l, u = -o._restingThresh * l, d = o._restingThreshTangent, p = o._frictionNormalMultiplier * l, f = o._frictionMaxStatic, m = e.length;
                for (a = 0; a < m; a++) {
                    var y = e[a];
                    if (y.isActive && !y.isSensor) {
                        var v = y.collision
                          , g = v.parentA
                          , x = v.parentB
                          , h = v.normal.x
                          , b = v.normal.y
                          , S = v.tangent.x
                          , w = v.tangent.y
                          , P = y.inverseMass
                          , A = y.friction * y.frictionStatic * p
                          , M = y.contacts
                          , B = y.contactCount
                          , _ = 1 / B
                          , C = g.position.x - g.positionPrev.x
                          , k = g.position.y - g.positionPrev.y
                          , I = g.angle - g.anglePrev
                          , T = x.position.x - x.positionPrev.x
                          , R = x.position.y - x.positionPrev.y
                          , D = x.angle - x.anglePrev;
                        for (s = 0; s < B; s++) {
                            var E = M[s]
                              , L = E.vertex
                              , F = L.x - g.position.x
                              , V = L.y - g.position.y
                              , j = L.x - x.position.x
                              , O = L.y - x.position.y
                              , H = C - V * I - (T - O * D)
                              , q = k + F * I - (R + j * D)
                              , z = h * H + b * q
                              , U = S * H + w * q
                              , W = y.separation + z
                              , G = Math.min(W, 1)
                              , N = (G = W < 0 ? 0 : G) * A;
                            U < -N || U > N ? (i = U > 0 ? U : -U,
                            (n = y.friction * (U > 0 ? 1 : -1) * c) < -i ? n = -i : n > i && (n = i)) : (n = U,
                            i = f);
                            var X = F * b - V * h
                              , Q = j * b - O * h
                              , Y = _ / (P + g.inverseInertia * X * X + x.inverseInertia * Q * Q)
                              , $ = (1 + y.restitution) * z * Y;
                            if (n *= Y,
                            z < u)
                                E.normalImpulse = 0;
                            else {
                                var Z = E.normalImpulse;
                                E.normalImpulse += $,
                                E.normalImpulse > 0 && (E.normalImpulse = 0),
                                $ = E.normalImpulse - Z
                            }
                            if (U < -d || U > d)
                                E.tangentImpulse = 0;
                            else {
                                var K = E.tangentImpulse;
                                E.tangentImpulse += n,
                                E.tangentImpulse < -i && (E.tangentImpulse = -i),
                                E.tangentImpulse > i && (E.tangentImpulse = i),
                                n = E.tangentImpulse - K
                            }
                            var J = h * $ + S * n
                              , ee = b * $ + w * n;
                            g.isStatic || g.isSleeping || (g.positionPrev.x += J * g.inverseMass,
                            g.positionPrev.y += ee * g.inverseMass,
                            g.anglePrev += (F * ee - V * J) * g.inverseInertia),
                            x.isStatic || x.isSleeping || (x.positionPrev.x -= J * x.inverseMass,
                            x.positionPrev.y -= ee * x.inverseMass,
                            x.anglePrev -= (j * ee - O * J) * x.inverseInertia)
                        }
                    }
                }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(9)
              , r = n(0);
            o.create = function(e) {
                return r.extend({
                    table: {},
                    list: [],
                    collisionStart: [],
                    collisionActive: [],
                    collisionEnd: []
                }, e)
            }
            ,
            o.update = function(e, t, n) {
                var o, r, a, s = i.update, l = i.create, c = i.setActive, u = e.table, d = e.list, p = d.length, f = p, m = e.collisionStart, y = e.collisionEnd, v = e.collisionActive, g = t.length, x = 0, h = 0, b = 0;
                for (a = 0; a < g; a++)
                    (r = (o = t[a]).pair) ? (r.isActive && (v[b++] = r),
                    s(r, o, n)) : (u[(r = l(o, n)).id] = r,
                    m[x++] = r,
                    d[f++] = r);
                for (a = 0,
                f = 0,
                p = d.length; a < p; a++)
                    (r = d[a]).timeUpdated >= n ? d[f++] = r : (c(r, !1, n),
                    r.collision.bodyA.sleepCounter > 0 && r.collision.bodyB.sleepCounter > 0 ? d[f++] = r : (y[h++] = r,
                    delete u[r.id]));
                d.length !== f && (d.length = f),
                m.length !== x && (m.length = x),
                y.length !== h && (y.length = h),
                v.length !== b && (v.length = b)
            }
            ,
            o.clear = function(e) {
                return e.table = {},
                e.list.length = 0,
                e.collisionStart.length = 0,
                e.collisionActive.length = 0,
                e.collisionEnd.length = 0,
                e
            }
        }
        , function(e, t, n) {
            var o = e.exports = n(21);
            o.Axes = n(11),
            o.Bodies = n(12),
            o.Body = n(4),
            o.Bounds = n(1),
            o.Collision = n(8),
            o.Common = n(0),
            o.Composite = n(6),
            o.Composites = n(22),
            o.Constraint = n(10),
            o.Contact = n(16),
            o.Detector = n(13),
            o.Engine = n(17),
            o.Events = n(5),
            o.Grid = n(23),
            o.Mouse = n(14),
            o.MouseConstraint = n(24),
            o.Pair = n(9),
            o.Pairs = n(19),
            o.Plugin = n(15),
            o.Query = n(25),
            o.Render = n(26),
            o.Resolver = n(18),
            o.Runner = n(27),
            o.SAT = n(28),
            o.Sleeping = n(7),
            o.Svg = n(29),
            o.Vector = n(2),
            o.Vertices = n(3),
            o.World = n(30),
            o.Engine.run = o.Runner.run,
            o.Common.deprecated(o.Engine, "run", "Engine.run ➤ use Matter.Runner.run(engine) instead")
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(15)
              , r = n(0);
            o.name = "matter-js",
            o.version = "0.20.0",
            o.uses = [],
            o.used = [],
            o.use = function() {
                i.use(o, Array.prototype.slice.call(arguments))
            }
            ,
            o.before = function(e, t) {
                return e = e.replace(/^Matter./, ""),
                r.chainPathBefore(o, e, t)
            }
            ,
            o.after = function(e, t) {
                return e = e.replace(/^Matter./, ""),
                r.chainPathAfter(o, e, t)
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(6)
              , r = n(10)
              , a = n(0)
              , s = n(4)
              , l = n(12)
              , c = a.deprecated;
            o.stack = function(e, t, n, o, r, a, l) {
                for (var c, u = i.create({
                    label: "Stack"
                }), d = e, p = t, f = 0, m = 0; m < o; m++) {
                    for (var y = 0, v = 0; v < n; v++) {
                        var g = l(d, p, v, m, c, f);
                        if (g) {
                            var x = g.bounds.max.y - g.bounds.min.y
                              , h = g.bounds.max.x - g.bounds.min.x;
                            x > y && (y = x),
                            s.translate(g, {
                                x: .5 * h,
                                y: .5 * x
                            }),
                            d = g.bounds.max.x + r,
                            i.addBody(u, g),
                            c = g,
                            f += 1
                        } else
                            d += r
                    }
                    p += y + a,
                    d = e
                }
                return u
            }
            ,
            o.chain = function(e, t, n, o, s, l) {
                for (var c = e.bodies, u = 1; u < c.length; u++) {
                    var d = c[u - 1]
                      , p = c[u]
                      , f = d.bounds.max.y - d.bounds.min.y
                      , m = d.bounds.max.x - d.bounds.min.x
                      , y = p.bounds.max.y - p.bounds.min.y
                      , v = p.bounds.max.x - p.bounds.min.x
                      , g = {
                        bodyA: d,
                        pointA: {
                            x: m * t,
                            y: f * n
                        },
                        bodyB: p,
                        pointB: {
                            x: v * o,
                            y: y * s
                        }
                    }
                      , x = a.extend(g, l);
                    i.addConstraint(e, r.create(x))
                }
                return e.label += " Chain",
                e
            }
            ,
            o.mesh = function(e, t, n, o, s) {
                var l, c, u, d, p, f = e.bodies;
                for (l = 0; l < n; l++) {
                    for (c = 1; c < t; c++)
                        u = f[c - 1 + l * t],
                        d = f[c + l * t],
                        i.addConstraint(e, r.create(a.extend({
                            bodyA: u,
                            bodyB: d
                        }, s)));
                    if (l > 0)
                        for (c = 0; c < t; c++)
                            u = f[c + (l - 1) * t],
                            d = f[c + l * t],
                            i.addConstraint(e, r.create(a.extend({
                                bodyA: u,
                                bodyB: d
                            }, s))),
                            o && c > 0 && (p = f[c - 1 + (l - 1) * t],
                            i.addConstraint(e, r.create(a.extend({
                                bodyA: p,
                                bodyB: d
                            }, s)))),
                            o && c < t - 1 && (p = f[c + 1 + (l - 1) * t],
                            i.addConstraint(e, r.create(a.extend({
                                bodyA: p,
                                bodyB: d
                            }, s))))
                }
                return e.label += " Mesh",
                e
            }
            ,
            o.pyramid = function(e, t, n, i, r, a, l) {
                return o.stack(e, t, n, i, r, a, function(t, o, a, c, u, d) {
                    var p = Math.min(i, Math.ceil(n / 2))
                      , f = u ? u.bounds.max.x - u.bounds.min.x : 0;
                    if (!(c > p)) {
                        var m = c = p - c
                          , y = n - 1 - c;
                        if (!(a < m) && !(a > y))
                            return 1 === d && s.translate(u, {
                                x: (a + (n % 2 == 1 ? 1 : -1)) * f,
                                y: 0
                            }),
                            l(e + (u ? a * f : 0) + a * r, o, a, c, u, d)
                    }
                })
            }
            ,
            o.newtonsCradle = function(e, t, n, o, a) {
                for (var s = i.create({
                    label: "Newtons Cradle"
                }), c = 0; c < n; c++) {
                    var u = l.circle(e + 1.9 * o * c, t + a, o, {
                        inertia: 1 / 0,
                        restitution: 1,
                        friction: 0,
                        frictionAir: 1e-4,
                        slop: 1
                    })
                      , d = r.create({
                        pointA: {
                            x: e + 1.9 * o * c,
                            y: t
                        },
                        bodyB: u
                    });
                    i.addBody(s, u),
                    i.addConstraint(s, d)
                }
                return s
            }
            ,
            c(o, "newtonsCradle", "Composites.newtonsCradle ➤ moved to newtonsCradle example"),
            o.car = function(e, t, n, o, a) {
                var c = s.nextGroup(!0)
                  , u = -(.5 * n) + 20
                  , d = .5 * n - 20
                  , p = i.create({
                    label: "Car"
                })
                  , f = l.rectangle(e, t, n, o, {
                    collisionFilter: {
                        group: c
                    },
                    chamfer: {
                        radius: .5 * o
                    },
                    density: 2e-4
                })
                  , m = l.circle(e + u, t + 0, a, {
                    collisionFilter: {
                        group: c
                    },
                    friction: .8
                })
                  , y = l.circle(e + d, t + 0, a, {
                    collisionFilter: {
                        group: c
                    },
                    friction: .8
                })
                  , v = r.create({
                    bodyB: f,
                    pointB: {
                        x: u,
                        y: 0
                    },
                    bodyA: m,
                    stiffness: 1,
                    length: 0
                })
                  , g = r.create({
                    bodyB: f,
                    pointB: {
                        x: d,
                        y: 0
                    },
                    bodyA: y,
                    stiffness: 1,
                    length: 0
                });
                return i.addBody(p, f),
                i.addBody(p, m),
                i.addBody(p, y),
                i.addConstraint(p, v),
                i.addConstraint(p, g),
                p
            }
            ,
            c(o, "car", "Composites.car ➤ moved to car example"),
            o.softBody = function(e, t, n, i, r, s, c, u, d, p) {
                d = a.extend({
                    inertia: 1 / 0
                }, d),
                p = a.extend({
                    stiffness: .2,
                    render: {
                        type: "line",
                        anchors: !1
                    }
                }, p);
                var f = o.stack(e, t, n, i, r, s, function(e, t) {
                    return l.circle(e, t, u, d)
                });
                return o.mesh(f, n, i, c, p),
                f.label = "Soft Body",
                f
            }
            ,
            c(o, "softBody", "Composites.softBody ➤ moved to softBody and cloth examples")
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(9)
              , r = n(0)
              , a = r.deprecated;
            o.create = function(e) {
                return r.extend({
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48
                }, e)
            }
            ,
            o.update = function(e, t, n, i) {
                var r, a, s, l, c, u = n.world, d = e.buckets, p = !1;
                for (r = 0; r < t.length; r++) {
                    var f = t[r];
                    if ((!f.isSleeping || i) && (!u.bounds || !(f.bounds.max.x < u.bounds.min.x) && !(f.bounds.min.x > u.bounds.max.x) && !(f.bounds.max.y < u.bounds.min.y) && !(f.bounds.min.y > u.bounds.max.y))) {
                        var m = o._getRegion(e, f);
                        if (!f.region || m.id !== f.region.id || i) {
                            (!f.region || i) && (f.region = m);
                            var y = o._regionUnion(m, f.region);
                            for (a = y.startCol; a <= y.endCol; a++)
                                for (s = y.startRow; s <= y.endRow; s++) {
                                    l = d[c = o._getBucketId(a, s)];
                                    var v = a >= m.startCol && a <= m.endCol && s >= m.startRow && s <= m.endRow
                                      , g = a >= f.region.startCol && a <= f.region.endCol && s >= f.region.startRow && s <= f.region.endRow;
                                    !v && g && g && l && o._bucketRemoveBody(e, l, f),
                                    (f.region === m || v && !g || i) && (l || (l = o._createBucket(d, c)),
                                    o._bucketAddBody(e, l, f))
                                }
                            f.region = m,
                            p = !0
                        }
                    }
                }
                p && (e.pairsList = o._createActivePairsList(e))
            }
            ,
            a(o, "update", "Grid.update ➤ replaced by Matter.Detector"),
            o.clear = function(e) {
                e.buckets = {},
                e.pairs = {},
                e.pairsList = []
            }
            ,
            a(o, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
            o._regionUnion = function(e, t) {
                var n = Math.min(e.startCol, t.startCol)
                  , i = Math.max(e.endCol, t.endCol)
                  , r = Math.min(e.startRow, t.startRow)
                  , a = Math.max(e.endRow, t.endRow);
                return o._createRegion(n, i, r, a)
            }
            ,
            o._getRegion = function(e, t) {
                var n = t.bounds
                  , i = Math.floor(n.min.x / e.bucketWidth)
                  , r = Math.floor(n.max.x / e.bucketWidth)
                  , a = Math.floor(n.min.y / e.bucketHeight)
                  , s = Math.floor(n.max.y / e.bucketHeight);
                return o._createRegion(i, r, a, s)
            }
            ,
            o._createRegion = function(e, t, n, o) {
                return {
                    id: e + "," + t + "," + n + "," + o,
                    startCol: e,
                    endCol: t,
                    startRow: n,
                    endRow: o
                }
            }
            ,
            o._getBucketId = function(e, t) {
                return "C" + e + "R" + t
            }
            ,
            o._createBucket = function(e, t) {
                return e[t] = []
            }
            ,
            o._bucketAddBody = function(e, t, n) {
                var o, r = e.pairs, a = i.id, s = t.length;
                for (o = 0; o < s; o++) {
                    var l = t[o];
                    if (n.id !== l.id && (!n.isStatic || !l.isStatic)) {
                        var c = a(n, l)
                          , u = r[c];
                        u ? u[2] += 1 : r[c] = [n, l, 1]
                    }
                }
                t.push(n)
            }
            ,
            o._bucketRemoveBody = function(e, t, n) {
                var o, a = e.pairs, s = i.id;
                t.splice(r.indexOf(t, n), 1);
                var l = t.length;
                for (o = 0; o < l; o++) {
                    var c = a[s(n, t[o])];
                    c && (c[2] -= 1)
                }
            }
            ,
            o._createActivePairsList = function(e) {
                var t, n, o = e.pairs, i = r.keys(o), a = i.length, s = [];
                for (n = 0; n < a; n++)
                    (t = o[i[n]])[2] > 0 ? s.push(t) : delete o[i[n]];
                return s
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(3)
              , r = n(7)
              , a = n(14)
              , s = n(5)
              , l = n(13)
              , c = n(10)
              , u = n(6)
              , d = n(0)
              , p = n(1);
            o.create = function(e, t) {
                var n = (e ? e.mouse : null) || (t ? t.mouse : null);
                n || (e && e.render && e.render.canvas ? n = a.create(e.render.canvas) : t && t.element ? n = a.create(t.element) : (n = a.create(),
                d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                var i = c.create({
                    label: "Mouse Constraint",
                    pointA: n.position,
                    pointB: {
                        x: 0,
                        y: 0
                    },
                    length: .01,
                    stiffness: .1,
                    angularStiffness: 1,
                    render: {
                        strokeStyle: "#90EE90",
                        lineWidth: 3
                    }
                })
                  , r = {
                    type: "mouseConstraint",
                    mouse: n,
                    element: null,
                    body: null,
                    constraint: i,
                    collisionFilter: {
                        category: 1,
                        mask: 0xffffffff,
                        group: 0
                    }
                }
                  , l = d.extend(r, t);
                return s.on(e, "beforeUpdate", function() {
                    var t = u.allBodies(e.world);
                    o.update(l, t),
                    o._triggerEvents(l)
                }),
                l
            }
            ,
            o.update = function(e, t) {
                var n = e.mouse
                  , o = e.constraint
                  , a = e.body;
                if (0 === n.button) {
                    if (o.bodyB)
                        r.set(o.bodyB, !1),
                        o.pointA = n.position;
                    else
                        for (var c = 0; c < t.length; c++)
                            if (a = t[c],
                            p.contains(a.bounds, n.position) && l.canCollide(a.collisionFilter, e.collisionFilter))
                                for (var u = +(a.parts.length > 1); u < a.parts.length; u++) {
                                    var d = a.parts[u];
                                    if (i.contains(d.vertices, n.position)) {
                                        o.pointA = n.position,
                                        o.bodyB = e.body = a,
                                        o.pointB = {
                                            x: n.position.x - a.position.x,
                                            y: n.position.y - a.position.y
                                        },
                                        o.angleB = a.angle,
                                        r.set(a, !1),
                                        s.trigger(e, "startdrag", {
                                            mouse: n,
                                            body: a
                                        });
                                        break
                                    }
                                }
                } else
                    o.bodyB = e.body = null,
                    o.pointB = null,
                    a && s.trigger(e, "enddrag", {
                        mouse: n,
                        body: a
                    })
            }
            ,
            o._triggerEvents = function(e) {
                var t = e.mouse
                  , n = t.sourceEvents;
                n.mousemove && s.trigger(e, "mousemove", {
                    mouse: t
                }),
                n.mousedown && s.trigger(e, "mousedown", {
                    mouse: t
                }),
                n.mouseup && s.trigger(e, "mouseup", {
                    mouse: t
                }),
                a.clearSourceEvents(t)
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(2)
              , r = n(8)
              , a = n(1)
              , s = n(12)
              , l = n(3);
            o.collides = function(e, t) {
                for (var n = [], o = t.length, i = e.bounds, s = r.collides, l = a.overlaps, c = 0; c < o; c++) {
                    var u = t[c]
                      , d = u.parts.length
                      , p = +(1 !== d);
                    if (l(u.bounds, i))
                        for (var f = p; f < d; f++) {
                            var m = u.parts[f];
                            if (l(m.bounds, i)) {
                                var y = s(m, e);
                                if (y) {
                                    n.push(y);
                                    break
                                }
                            }
                        }
                }
                return n
            }
            ,
            o.ray = function(e, t, n, r) {
                r = r || 1e-100;
                for (var a = i.angle(t, n), l = i.magnitude(i.sub(t, n)), c = (n.x + t.x) * .5, u = (n.y + t.y) * .5, d = s.rectangle(c, u, l, r, {
                    angle: a
                }), p = o.collides(d, e), f = 0; f < p.length; f += 1) {
                    var m = p[f];
                    m.body = m.bodyB = m.bodyA
                }
                return p
            }
            ,
            o.region = function(e, t, n) {
                for (var o = [], i = 0; i < e.length; i++) {
                    var r = e[i]
                      , s = a.overlaps(r.bounds, t);
                    (s && !n || !s && n) && o.push(r)
                }
                return o
            }
            ,
            o.point = function(e, t) {
                for (var n = [], o = 0; o < e.length; o++) {
                    var i = e[o];
                    if (a.contains(i.bounds, t))
                        for (var r = +(1 !== i.parts.length); r < i.parts.length; r++) {
                            var s = i.parts[r];
                            if (a.contains(s.bounds, t) && l.contains(s.vertices, t)) {
                                n.push(i);
                                break
                            }
                        }
                }
                return n
            }
        }
        , function(e, t, n) {
            var o, i, r, a, s, l, c, u, d = {};
            e.exports = d;
            var p = n(4)
              , f = n(0)
              , m = n(6)
              , y = n(1)
              , v = n(5)
              , g = n(2)
              , x = n(14);
            "u" > typeof window && (o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                window.setTimeout(function() {
                    e(f.now())
                }, 1e3 / 60)
            }
            ,
            i = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
            d._goodFps = 30,
            d._goodDelta = 1e3 / 60,
            d.create = function(e) {
                var t = {
                    engine: null,
                    element: null,
                    canvas: null,
                    mouse: null,
                    frameRequestId: null,
                    timing: {
                        historySize: 60,
                        delta: 0,
                        deltaHistory: [],
                        lastTime: 0,
                        lastTimestamp: 0,
                        lastElapsed: 0,
                        timestampElapsed: 0,
                        timestampElapsedHistory: [],
                        engineDeltaHistory: [],
                        engineElapsedHistory: [],
                        engineUpdatesHistory: [],
                        elapsedHistory: []
                    },
                    options: {
                        width: 800,
                        height: 600,
                        pixelRatio: 1,
                        background: "#14151f",
                        wireframeBackground: "#14151f",
                        wireframeStrokeStyle: "#bbb",
                        hasBounds: !!e.bounds,
                        enabled: !0,
                        wireframes: !0,
                        showSleeping: !0,
                        showDebug: !1,
                        showStats: !1,
                        showPerformance: !1,
                        showBounds: !1,
                        showVelocity: !1,
                        showCollisions: !1,
                        showSeparations: !1,
                        showAxes: !1,
                        showPositions: !1,
                        showAngleIndicator: !1,
                        showIds: !1,
                        showVertexNumbers: !1,
                        showConvexHulls: !1,
                        showInternalEdges: !1,
                        showMousePosition: !1
                    }
                }
                  , n = f.extend(t, e);
                return n.canvas && (n.canvas.width = n.options.width || n.canvas.width,
                n.canvas.height = n.options.height || n.canvas.height),
                n.mouse = e.mouse,
                n.engine = e.engine,
                n.canvas = n.canvas || s(n.options.width, n.options.height),
                n.context = n.canvas.getContext("2d"),
                n.textures = {},
                n.bounds = n.bounds || {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: n.canvas.width,
                        y: n.canvas.height
                    }
                },
                n.controller = d,
                n.options.showBroadphase = !1,
                1 !== n.options.pixelRatio && d.setPixelRatio(n, n.options.pixelRatio),
                f.isElement(n.element) && n.element.appendChild(n.canvas),
                n
            }
            ,
            d.run = function(e) {
                !function t(n) {
                    e.frameRequestId = o(t),
                    r(e, n),
                    d.world(e, n),
                    e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0),
                    (e.options.showStats || e.options.showDebug) && d.stats(e, e.context, n),
                    (e.options.showPerformance || e.options.showDebug) && d.performance(e, e.context, n),
                    e.context.setTransform(1, 0, 0, 1, 0, 0)
                }()
            }
            ,
            d.stop = function(e) {
                i(e.frameRequestId)
            }
            ,
            d.setPixelRatio = function(e, t) {
                var n = e.options
                  , o = e.canvas;
                "auto" === t && (t = l(o)),
                n.pixelRatio = t,
                o.setAttribute("data-pixel-ratio", t),
                o.width = n.width * t,
                o.height = n.height * t,
                o.style.width = n.width + "px",
                o.style.height = n.height + "px"
            }
            ,
            d.setSize = function(e, t, n) {
                e.options.width = t,
                e.options.height = n,
                e.bounds.max.x = e.bounds.min.x + t,
                e.bounds.max.y = e.bounds.min.y + n,
                1 !== e.options.pixelRatio ? d.setPixelRatio(e, e.options.pixelRatio) : (e.canvas.width = t,
                e.canvas.height = n)
            }
            ,
            d.lookAt = function(e, t, n, o) {
                o = void 0 === o || o,
                t = f.isArray(t) ? t : [t],
                n = n || {
                    x: 0,
                    y: 0
                };
                for (var i = {
                    min: {
                        x: 1 / 0,
                        y: 1 / 0
                    },
                    max: {
                        x: -1 / 0,
                        y: -1 / 0
                    }
                }, r = 0; r < t.length; r += 1) {
                    var a = t[r]
                      , s = a.bounds ? a.bounds.min : a.min || a.position || a
                      , l = a.bounds ? a.bounds.max : a.max || a.position || a;
                    s && l && (s.x < i.min.x && (i.min.x = s.x),
                    l.x > i.max.x && (i.max.x = l.x),
                    s.y < i.min.y && (i.min.y = s.y),
                    l.y > i.max.y && (i.max.y = l.y))
                }
                var c = i.max.x - i.min.x + 2 * n.x
                  , u = i.max.y - i.min.y + 2 * n.y
                  , d = e.canvas.height
                  , p = e.canvas.width / d
                  , m = c / u
                  , y = 1
                  , v = 1;
                m > p ? v = m / p : y = p / m,
                e.options.hasBounds = !0,
                e.bounds.min.x = i.min.x,
                e.bounds.max.x = i.min.x + c * y,
                e.bounds.min.y = i.min.y,
                e.bounds.max.y = i.min.y + u * v,
                o && (e.bounds.min.x += .5 * c - c * y * .5,
                e.bounds.max.x += .5 * c - c * y * .5,
                e.bounds.min.y += .5 * u - u * v * .5,
                e.bounds.max.y += .5 * u - u * v * .5),
                e.bounds.min.x -= n.x,
                e.bounds.max.x -= n.x,
                e.bounds.min.y -= n.y,
                e.bounds.max.y -= n.y,
                e.mouse && (x.setScale(e.mouse, {
                    x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                    y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                }),
                x.setOffset(e.mouse, e.bounds.min))
            }
            ,
            d.startViewTransform = function(e) {
                var t = e.bounds.max.x - e.bounds.min.x
                  , n = e.bounds.max.y - e.bounds.min.y
                  , o = t / e.options.width
                  , i = n / e.options.height;
                e.context.setTransform(e.options.pixelRatio / o, 0, 0, e.options.pixelRatio / i, 0, 0),
                e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
            }
            ,
            d.endViewTransform = function(e) {
                e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
            }
            ,
            d.world = function(e, t) {
                var n, o = f.now(), i = e.engine, r = i.world, a = e.canvas, s = e.context, l = e.options, c = e.timing, p = m.allBodies(r), h = m.allConstraints(r), b = l.wireframes ? l.wireframeBackground : l.background, S = [], w = [], P = {
                    timestamp: i.timing.timestamp
                };
                if (v.trigger(e, "beforeRender", P),
                e.currentBackground !== b && u(e, b),
                s.globalCompositeOperation = "source-in",
                s.fillStyle = "transparent",
                s.fillRect(0, 0, a.width, a.height),
                s.globalCompositeOperation = "source-over",
                l.hasBounds) {
                    for (n = 0; n < p.length; n++) {
                        var A = p[n];
                        y.overlaps(A.bounds, e.bounds) && S.push(A)
                    }
                    for (n = 0; n < h.length; n++) {
                        var M = h[n]
                          , B = M.bodyA
                          , _ = M.bodyB
                          , C = M.pointA
                          , k = M.pointB;
                        B && (C = g.add(B.position, M.pointA)),
                        _ && (k = g.add(_.position, M.pointB)),
                        C && k && (y.contains(e.bounds, C) || y.contains(e.bounds, k)) && w.push(M)
                    }
                    d.startViewTransform(e),
                    e.mouse && (x.setScale(e.mouse, {
                        x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                        y: (e.bounds.max.y - e.bounds.min.y) / e.options.height
                    }),
                    x.setOffset(e.mouse, e.bounds.min))
                } else
                    w = h,
                    S = p,
                    1 !== e.options.pixelRatio && e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0);
                !l.wireframes || i.enableSleeping && l.showSleeping ? d.bodies(e, S, s) : (l.showConvexHulls && d.bodyConvexHulls(e, S, s),
                d.bodyWireframes(e, S, s)),
                l.showBounds && d.bodyBounds(e, S, s),
                (l.showAxes || l.showAngleIndicator) && d.bodyAxes(e, S, s),
                l.showPositions && d.bodyPositions(e, S, s),
                l.showVelocity && d.bodyVelocity(e, S, s),
                l.showIds && d.bodyIds(e, S, s),
                l.showSeparations && d.separations(e, i.pairs.list, s),
                l.showCollisions && d.collisions(e, i.pairs.list, s),
                l.showVertexNumbers && d.vertexNumbers(e, S, s),
                l.showMousePosition && d.mousePosition(e, e.mouse, s),
                d.constraints(w, s),
                l.hasBounds && d.endViewTransform(e),
                v.trigger(e, "afterRender", P),
                c.lastElapsed = f.now() - o
            }
            ,
            d.stats = function(e, t, n) {
                for (var o = e.engine, i = o.world, r = m.allBodies(i), a = 0, s = 0, l = 0; l < r.length; l += 1)
                    a += r[l].parts.length;
                var c = {
                    Part: a,
                    Body: r.length,
                    Cons: m.allConstraints(i).length,
                    Comp: m.allComposites(i).length,
                    Pair: o.pairs.list.length
                };
                for (var u in t.fillStyle = "#0e0f19",
                t.fillRect(s, 0, 302.5, 44),
                t.font = "12px Arial",
                t.textBaseline = "top",
                t.textAlign = "right",
                c) {
                    var d = c[u];
                    t.fillStyle = "#aaa",
                    t.fillText(u, s + 55, 8),
                    t.fillStyle = "#eee",
                    t.fillText(d, s + 55, 26),
                    s += 55
                }
            }
            ,
            d.performance = function(e, t) {
                var n = e.engine
                  , o = e.timing
                  , i = o.deltaHistory
                  , r = o.elapsedHistory
                  , s = o.timestampElapsedHistory
                  , l = o.engineDeltaHistory
                  , c = o.engineUpdatesHistory
                  , u = o.engineElapsedHistory
                  , p = n.timing.lastUpdatesPerFrame
                  , m = n.timing.lastDelta
                  , y = a(i)
                  , v = a(r)
                  , g = a(l)
                  , x = a(c)
                  , h = a(u)
                  , b = a(s) / y || 0
                  , S = Math.round(y / m)
                  , w = 1e3 / y || 0;
                t.fillStyle = "#0e0f19",
                t.fillRect(0, 50, 442, 34),
                d.status(t, 10, 69, 60, 4, i.length, Math.round(w) + " fps", w / d._goodFps, function(e) {
                    return i[e] / y - 1
                }),
                d.status(t, 82, 69, 60, 4, l.length, m.toFixed(2) + " dt", d._goodDelta / m, function(e) {
                    return l[e] / g - 1
                }),
                d.status(t, 154, 69, 60, 4, c.length, p + " upf", Math.pow(f.clamp(x / S || 1, 0, 1), 4), function(e) {
                    return c[e] / x - 1
                }),
                d.status(t, 226, 69, 60, 4, u.length, h.toFixed(2) + " ut", 1 - p * h / d._goodFps, function(e) {
                    return u[e] / h - 1
                }),
                d.status(t, 298, 69, 60, 4, r.length, v.toFixed(2) + " rt", 1 - v / d._goodFps, function(e) {
                    return r[e] / v - 1
                }),
                d.status(t, 370, 69, 60, 4, s.length, b.toFixed(2) + " x", b * b * b, function(e) {
                    return (s[e] / i[e] / b || 0) - 1
                })
            }
            ,
            d.status = function(e, t, n, o, i, r, a, s, l) {
                e.strokeStyle = "#888",
                e.fillStyle = "#444",
                e.lineWidth = 1,
                e.fillRect(t, n + 7, o, 1),
                e.beginPath(),
                e.moveTo(t, n + 7 - i * f.clamp(.4 * l(0), -2, 2));
                for (var c = 0; c < o; c += 1)
                    e.lineTo(t + c, n + 7 - (c < r ? i * f.clamp(.4 * l(c), -2, 2) : 0));
                e.stroke(),
                e.fillStyle = "hsl(" + f.clamp(25 + 95 * s, 0, 120) + ",100%,60%)",
                e.fillRect(t, n - 7, 4, 4),
                e.font = "12px Arial",
                e.textBaseline = "middle",
                e.textAlign = "right",
                e.fillStyle = "#eee",
                e.fillText(a, t + o, n - 5)
            }
            ,
            d.constraints = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (o.render.visible && o.pointA && o.pointB) {
                        var i, r, a = o.bodyA, s = o.bodyB;
                        if (i = a ? g.add(a.position, o.pointA) : o.pointA,
                        "pin" === o.render.type)
                            t.beginPath(),
                            t.arc(i.x, i.y, 3, 0, 2 * Math.PI),
                            t.closePath();
                        else {
                            if (r = s ? g.add(s.position, o.pointB) : o.pointB,
                            t.beginPath(),
                            t.moveTo(i.x, i.y),
                            "spring" === o.render.type)
                                for (var l, c = g.sub(r, i), u = g.perp(g.normalise(c)), d = Math.ceil(f.clamp(o.length / 5, 12, 20)), p = 1; p < d; p += 1)
                                    l = p % 2 == 0 ? 1 : -1,
                                    t.lineTo(i.x + c.x * (p / d) + u.x * l * 4, i.y + c.y * (p / d) + u.y * l * 4);
                            t.lineTo(r.x, r.y)
                        }
                        o.render.lineWidth && (t.lineWidth = o.render.lineWidth,
                        t.strokeStyle = o.render.strokeStyle,
                        t.stroke()),
                        o.render.anchors && (t.fillStyle = o.render.strokeStyle,
                        t.beginPath(),
                        t.arc(i.x, i.y, 3, 0, 2 * Math.PI),
                        t.arc(r.x, r.y, 3, 0, 2 * Math.PI),
                        t.closePath(),
                        t.fill())
                    }
                }
            }
            ,
            d.bodies = function(e, t, n) {
                e.engine;
                var o, i, r, a, s = e.options, l = s.showInternalEdges || !s.wireframes;
                for (r = 0; r < t.length; r++)
                    if ((o = t[r]).render.visible) {
                        for (a = +(o.parts.length > 1); a < o.parts.length; a++)
                            if ((i = o.parts[a]).render.visible) {
                                if (s.showSleeping && o.isSleeping ? n.globalAlpha = .5 * i.render.opacity : 1 !== i.render.opacity && (n.globalAlpha = i.render.opacity),
                                i.render.sprite && i.render.sprite.texture && !s.wireframes) {
                                    var u = i.render.sprite
                                      , d = c(e, u.texture);
                                    n.translate(i.position.x, i.position.y),
                                    n.rotate(i.angle),
                                    n.drawImage(d, -(d.width * u.xOffset) * u.xScale, -(d.height * u.yOffset) * u.yScale, d.width * u.xScale, d.height * u.yScale),
                                    n.rotate(-i.angle),
                                    n.translate(-i.position.x, -i.position.y)
                                } else {
                                    if (i.circleRadius)
                                        n.beginPath(),
                                        n.arc(i.position.x, i.position.y, i.circleRadius, 0, 2 * Math.PI);
                                    else {
                                        n.beginPath(),
                                        n.moveTo(i.vertices[0].x, i.vertices[0].y);
                                        for (var p = 1; p < i.vertices.length; p++)
                                            !i.vertices[p - 1].isInternal || l ? n.lineTo(i.vertices[p].x, i.vertices[p].y) : n.moveTo(i.vertices[p].x, i.vertices[p].y),
                                            i.vertices[p].isInternal && !l && n.moveTo(i.vertices[(p + 1) % i.vertices.length].x, i.vertices[(p + 1) % i.vertices.length].y);
                                        n.lineTo(i.vertices[0].x, i.vertices[0].y),
                                        n.closePath()
                                    }
                                    s.wireframes ? (n.lineWidth = 1,
                                    n.strokeStyle = e.options.wireframeStrokeStyle,
                                    n.stroke()) : (n.fillStyle = i.render.fillStyle,
                                    i.render.lineWidth && (n.lineWidth = i.render.lineWidth,
                                    n.strokeStyle = i.render.strokeStyle,
                                    n.stroke()),
                                    n.fill())
                                }
                                n.globalAlpha = 1
                            }
                    }
            }
            ,
            d.bodyWireframes = function(e, t, n) {
                var o, i, r, a, s, l = e.options.showInternalEdges;
                for (n.beginPath(),
                r = 0; r < t.length; r++)
                    if ((o = t[r]).render.visible)
                        for (s = +(o.parts.length > 1); s < o.parts.length; s++) {
                            for (i = o.parts[s],
                            n.moveTo(i.vertices[0].x, i.vertices[0].y),
                            a = 1; a < i.vertices.length; a++)
                                !i.vertices[a - 1].isInternal || l ? n.lineTo(i.vertices[a].x, i.vertices[a].y) : n.moveTo(i.vertices[a].x, i.vertices[a].y),
                                i.vertices[a].isInternal && !l && n.moveTo(i.vertices[(a + 1) % i.vertices.length].x, i.vertices[(a + 1) % i.vertices.length].y);
                            n.lineTo(i.vertices[0].x, i.vertices[0].y)
                        }
                n.lineWidth = 1,
                n.strokeStyle = e.options.wireframeStrokeStyle,
                n.stroke()
            }
            ,
            d.bodyConvexHulls = function(e, t, n) {
                var o, i, r;
                for (n.beginPath(),
                i = 0; i < t.length; i++)
                    if ((o = t[i]).render.visible && 1 !== o.parts.length) {
                        for (n.moveTo(o.vertices[0].x, o.vertices[0].y),
                        r = 1; r < o.vertices.length; r++)
                            n.lineTo(o.vertices[r].x, o.vertices[r].y);
                        n.lineTo(o.vertices[0].x, o.vertices[0].y)
                    }
                n.lineWidth = 1,
                n.strokeStyle = "rgba(255,255,255,0.2)",
                n.stroke()
            }
            ,
            d.vertexNumbers = function(e, t, n) {
                var o, i, r;
                for (o = 0; o < t.length; o++) {
                    var a = t[o].parts;
                    for (r = +(a.length > 1); r < a.length; r++) {
                        var s = a[r];
                        for (i = 0; i < s.vertices.length; i++)
                            n.fillStyle = "rgba(255,255,255,0.2)",
                            n.fillText(o + "_" + i, s.position.x + (s.vertices[i].x - s.position.x) * .8, s.position.y + (s.vertices[i].y - s.position.y) * .8)
                    }
                }
            }
            ,
            d.mousePosition = function(e, t, n) {
                n.fillStyle = "rgba(255,255,255,0.8)",
                n.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
            }
            ,
            d.bodyBounds = function(e, t, n) {
                e.engine;
                var o = e.options;
                n.beginPath();
                for (var i = 0; i < t.length; i++)
                    if (t[i].render.visible)
                        for (var r = t[i].parts, a = +(r.length > 1); a < r.length; a++) {
                            var s = r[a];
                            n.rect(s.bounds.min.x, s.bounds.min.y, s.bounds.max.x - s.bounds.min.x, s.bounds.max.y - s.bounds.min.y)
                        }
                o.wireframes ? n.strokeStyle = "rgba(255,255,255,0.08)" : n.strokeStyle = "rgba(0,0,0,0.1)",
                n.lineWidth = 1,
                n.stroke()
            }
            ,
            d.bodyAxes = function(e, t, n) {
                e.engine;
                var o, i, r, a, s = e.options;
                for (n.beginPath(),
                i = 0; i < t.length; i++) {
                    var l = t[i]
                      , c = l.parts;
                    if (l.render.visible)
                        if (s.showAxes)
                            for (r = +(c.length > 1); r < c.length; r++)
                                for (a = 0,
                                o = c[r]; a < o.axes.length; a++) {
                                    var u = o.axes[a];
                                    n.moveTo(o.position.x, o.position.y),
                                    n.lineTo(o.position.x + 20 * u.x, o.position.y + 20 * u.y)
                                }
                        else
                            for (r = +(c.length > 1); r < c.length; r++)
                                for (a = 0,
                                o = c[r]; a < o.axes.length; a++)
                                    n.moveTo(o.position.x, o.position.y),
                                    n.lineTo((o.vertices[0].x + o.vertices[o.vertices.length - 1].x) / 2, (o.vertices[0].y + o.vertices[o.vertices.length - 1].y) / 2)
                }
                s.wireframes ? (n.strokeStyle = "indianred",
                n.lineWidth = 1) : (n.strokeStyle = "rgba(255, 255, 255, 0.4)",
                n.globalCompositeOperation = "overlay",
                n.lineWidth = 2),
                n.stroke(),
                n.globalCompositeOperation = "source-over"
            }
            ,
            d.bodyPositions = function(e, t, n) {
                e.engine;
                var o, i, r, a, s = e.options;
                for (n.beginPath(),
                r = 0; r < t.length; r++)
                    if ((o = t[r]).render.visible)
                        for (a = 0; a < o.parts.length; a++)
                            i = o.parts[a],
                            n.arc(i.position.x, i.position.y, 3, 0, 2 * Math.PI, !1),
                            n.closePath();
                for (s.wireframes ? n.fillStyle = "indianred" : n.fillStyle = "rgba(0,0,0,0.5)",
                n.fill(),
                n.beginPath(),
                r = 0; r < t.length; r++)
                    (o = t[r]).render.visible && (n.arc(o.positionPrev.x, o.positionPrev.y, 2, 0, 2 * Math.PI, !1),
                    n.closePath());
                n.fillStyle = "rgba(255,165,0,0.8)",
                n.fill()
            }
            ,
            d.bodyVelocity = function(e, t, n) {
                n.beginPath();
                for (var o = 0; o < t.length; o++) {
                    var i = t[o];
                    if (i.render.visible) {
                        var r = p.getVelocity(i);
                        n.moveTo(i.position.x, i.position.y),
                        n.lineTo(i.position.x + r.x, i.position.y + r.y)
                    }
                }
                n.lineWidth = 3,
                n.strokeStyle = "cornflowerblue",
                n.stroke()
            }
            ,
            d.bodyIds = function(e, t, n) {
                var o, i;
                for (o = 0; o < t.length; o++)
                    if (t[o].render.visible) {
                        var r = t[o].parts;
                        for (i = +(r.length > 1); i < r.length; i++) {
                            var a = r[i];
                            n.font = "12px Arial",
                            n.fillStyle = "rgba(255,255,255,0.5)",
                            n.fillText(a.id, a.position.x + 10, a.position.y - 10)
                        }
                    }
            }
            ,
            d.collisions = function(e, t, n) {
                var o, i, r, a, s = e.options;
                for (n.beginPath(),
                r = 0; r < t.length; r++)
                    if ((o = t[r]).isActive)
                        for (a = 0,
                        i = o.collision; a < o.contactCount; a++) {
                            var l = o.contacts[a].vertex;
                            n.rect(l.x - 1.5, l.y - 1.5, 3.5, 3.5)
                        }
                for (s.wireframes ? n.fillStyle = "rgba(255,255,255,0.7)" : n.fillStyle = "orange",
                n.fill(),
                n.beginPath(),
                r = 0; r < t.length; r++)
                    if ((o = t[r]).isActive && (i = o.collision,
                    o.contactCount > 0)) {
                        var c = o.contacts[0].vertex.x
                          , u = o.contacts[0].vertex.y;
                        2 === o.contactCount && (c = (o.contacts[0].vertex.x + o.contacts[1].vertex.x) / 2,
                        u = (o.contacts[0].vertex.y + o.contacts[1].vertex.y) / 2),
                        i.bodyB === i.supports[0].body || !0 === i.bodyA.isStatic ? n.moveTo(c - 8 * i.normal.x, u - 8 * i.normal.y) : n.moveTo(c + 8 * i.normal.x, u + 8 * i.normal.y),
                        n.lineTo(c, u)
                    }
                s.wireframes ? n.strokeStyle = "rgba(255,165,0,0.7)" : n.strokeStyle = "orange",
                n.lineWidth = 1,
                n.stroke()
            }
            ,
            d.separations = function(e, t, n) {
                var o, i, r, a, s, l = e.options;
                for (n.beginPath(),
                s = 0; s < t.length; s++)
                    if ((o = t[s]).isActive) {
                        r = (i = o.collision).bodyA;
                        var c = 1;
                        (a = i.bodyB).isStatic || r.isStatic || (c = .5),
                        a.isStatic && (c = 0),
                        n.moveTo(a.position.x, a.position.y),
                        n.lineTo(a.position.x - i.penetration.x * c, a.position.y - i.penetration.y * c),
                        c = 1,
                        a.isStatic || r.isStatic || (c = .5),
                        r.isStatic && (c = 0),
                        n.moveTo(r.position.x, r.position.y),
                        n.lineTo(r.position.x + i.penetration.x * c, r.position.y + i.penetration.y * c)
                    }
                l.wireframes ? n.strokeStyle = "rgba(255,165,0,0.5)" : n.strokeStyle = "orange",
                n.stroke()
            }
            ,
            d.inspector = function(e, t) {
                e.engine;
                var n, o = e.selected, i = e.render, r = i.options;
                if (r.hasBounds) {
                    var a = i.bounds.max.x - i.bounds.min.x
                      , s = i.bounds.max.y - i.bounds.min.y
                      , l = a / i.options.width
                      , c = s / i.options.height;
                    t.scale(1 / l, 1 / c),
                    t.translate(-i.bounds.min.x, -i.bounds.min.y)
                }
                for (var u = 0; u < o.length; u++) {
                    var d = o[u].data;
                    switch (t.translate(.5, .5),
                    t.lineWidth = 1,
                    t.strokeStyle = "rgba(255,165,0,0.9)",
                    t.setLineDash([1, 2]),
                    d.type) {
                    case "body":
                        n = d.bounds,
                        t.beginPath(),
                        t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)),
                        t.closePath(),
                        t.stroke();
                        break;
                    case "constraint":
                        var p = d.pointA;
                        d.bodyA && (p = d.pointB),
                        t.beginPath(),
                        t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke()
                    }
                    t.setLineDash([]),
                    t.translate(-.5, -.5)
                }
                null !== e.selectStart && (t.translate(.5, .5),
                t.lineWidth = 1,
                t.strokeStyle = "rgba(255,165,0,0.6)",
                t.fillStyle = "rgba(255,165,0,0.1)",
                n = e.selectBounds,
                t.beginPath(),
                t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)),
                t.closePath(),
                t.stroke(),
                t.fill(),
                t.translate(-.5, -.5)),
                r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
            }
            ,
            r = function(e, t) {
                var n = e.engine
                  , o = e.timing
                  , i = o.historySize
                  , r = n.timing.timestamp;
                o.delta = t - o.lastTime || d._goodDelta,
                o.lastTime = t,
                o.timestampElapsed = r - o.lastTimestamp || 0,
                o.lastTimestamp = r,
                o.deltaHistory.unshift(o.delta),
                o.deltaHistory.length = Math.min(o.deltaHistory.length, i),
                o.engineDeltaHistory.unshift(n.timing.lastDelta),
                o.engineDeltaHistory.length = Math.min(o.engineDeltaHistory.length, i),
                o.timestampElapsedHistory.unshift(o.timestampElapsed),
                o.timestampElapsedHistory.length = Math.min(o.timestampElapsedHistory.length, i),
                o.engineUpdatesHistory.unshift(n.timing.lastUpdatesPerFrame),
                o.engineUpdatesHistory.length = Math.min(o.engineUpdatesHistory.length, i),
                o.engineElapsedHistory.unshift(n.timing.lastElapsed),
                o.engineElapsedHistory.length = Math.min(o.engineElapsedHistory.length, i),
                o.elapsedHistory.unshift(o.lastElapsed),
                o.elapsedHistory.length = Math.min(o.elapsedHistory.length, i)
            }
            ,
            a = function(e) {
                for (var t = 0, n = 0; n < e.length; n += 1)
                    t += e[n];
                return t / e.length || 0
            }
            ,
            s = function(e, t) {
                var n = document.createElement("canvas");
                return n.width = e,
                n.height = t,
                n.oncontextmenu = function() {
                    return !1
                }
                ,
                n.onselectstart = function() {
                    return !1
                }
                ,
                n
            }
            ,
            l = function(e) {
                var t = e.getContext("2d");
                return (window.devicePixelRatio || 1) / (t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
            }
            ,
            c = function(e, t) {
                var n = e.textures[t];
                return n || ((n = e.textures[t] = new Image).src = t),
                n
            }
            ,
            u = function(e, t) {
                var n = t;
                /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                e.canvas.style.background = n,
                e.canvas.style.backgroundSize = "contain",
                e.currentBackground = t
            }
        }
        , function(e, t, n) {
            var o, i = {};
            e.exports = i;
            var r = n(5)
              , a = n(17)
              , s = n(0);
            i._maxFrameDelta = 1e3 / 15,
            i._frameDeltaFallback = 1e3 / 60,
            i._timeBufferMargin = 1.5,
            i._elapsedNextEstimate = 1,
            i._smoothingLowerBound = .1,
            i._smoothingUpperBound = .9,
            i.create = function(e) {
                var t = s.extend({
                    delta: 1e3 / 60,
                    frameDelta: null,
                    frameDeltaSmoothing: !0,
                    frameDeltaSnapping: !0,
                    frameDeltaHistory: [],
                    frameDeltaHistorySize: 100,
                    frameRequestId: null,
                    timeBuffer: 0,
                    timeLastTick: null,
                    maxUpdates: null,
                    maxFrameTime: 1e3 / 30,
                    lastUpdatesDeferred: 0,
                    enabled: !0
                }, e);
                return t.fps = 0,
                t
            }
            ,
            i.run = function(e, t) {
                return e.timeBuffer = i._frameDeltaFallback,
                !function n(o) {
                    e.frameRequestId = i._onNextFrame(e, n),
                    o && e.enabled && i.tick(e, t, o)
                }(),
                e
            }
            ,
            i.tick = function(e, t, n) {
                var l = s.now()
                  , c = e.delta
                  , u = 0
                  , d = n - e.timeLastTick;
                if ((!d || !e.timeLastTick || d > Math.max(i._maxFrameDelta, e.maxFrameTime)) && (d = e.frameDelta || i._frameDeltaFallback),
                e.frameDeltaSmoothing) {
                    e.frameDeltaHistory.push(d),
                    e.frameDeltaHistory = e.frameDeltaHistory.slice(-e.frameDeltaHistorySize);
                    var p = e.frameDeltaHistory.slice(0).sort();
                    d = o(e.frameDeltaHistory.slice(p.length * i._smoothingLowerBound, p.length * i._smoothingUpperBound)) || d
                }
                e.frameDeltaSnapping && (d = 1e3 / Math.round(1e3 / d)),
                e.frameDelta = d,
                e.timeLastTick = n,
                e.timeBuffer += e.frameDelta,
                e.timeBuffer = s.clamp(e.timeBuffer, 0, e.frameDelta + c * i._timeBufferMargin),
                e.lastUpdatesDeferred = 0;
                var f = e.maxUpdates || Math.ceil(e.maxFrameTime / c)
                  , m = {
                    timestamp: t.timing.timestamp
                };
                r.trigger(e, "beforeTick", m),
                r.trigger(e, "tick", m);
                for (var y = s.now(); c > 0 && e.timeBuffer >= c * i._timeBufferMargin; ) {
                    r.trigger(e, "beforeUpdate", m),
                    a.update(t, c),
                    r.trigger(e, "afterUpdate", m),
                    e.timeBuffer -= c,
                    u += 1;
                    var v = s.now() - l
                      , g = s.now() - y
                      , x = v + i._elapsedNextEstimate * g / u;
                    if (u >= f || x > e.maxFrameTime) {
                        e.lastUpdatesDeferred = Math.round(Math.max(0, e.timeBuffer / c - i._timeBufferMargin));
                        break
                    }
                }
                t.timing.lastUpdatesPerFrame = u,
                r.trigger(e, "afterTick", m),
                e.frameDeltaHistory.length >= 100 && (e.lastUpdatesDeferred && Math.round(e.frameDelta / c) > f ? s.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs.") : e.lastUpdatesDeferred && s.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),
                void 0 !== e.isFixed && s.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),
                (e.deltaMin || e.deltaMax) && s.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),
                0 !== e.fps && s.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))
            }
            ,
            i.stop = function(e) {
                i._cancelNextFrame(e)
            }
            ,
            i._onNextFrame = function(e, t) {
                if ("u" > typeof window && window.requestAnimationFrame)
                    e.frameRequestId = window.requestAnimationFrame(t);
                else
                    throw Error("Matter.Runner: missing required global window.requestAnimationFrame.");
                return e.frameRequestId
            }
            ,
            i._cancelNextFrame = function(e) {
                if ("u" > typeof window && window.cancelAnimationFrame)
                    window.cancelAnimationFrame(e.frameRequestId);
                else
                    throw Error("Matter.Runner: missing required global window.cancelAnimationFrame.")
            }
            ,
            o = function(e) {
                for (var t = 0, n = e.length, o = 0; o < n; o += 1)
                    t += e[o];
                return t / n || 0
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(8)
              , r = n(0).deprecated;
            o.collides = function(e, t) {
                return i.collides(e, t)
            }
            ,
            r(o, "collides", "SAT.collides ➤ replaced by Collision.collides")
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o,
            n(1);
            var i = n(0);
            o.pathToVertices = function(e, t) {
                !("u" > typeof window) || "SVGPathSeg"in window || i.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");
                var n, r, a, s, l, c, u, d, p, f, m, y = [], v = 0, g = 0, x = 0;
                t = t || 15;
                var h = function(e, t, n) {
                    var o = n % 2 == 1 && n > 1;
                    if (!p || e != p.x || t != p.y) {
                        p && o ? (f = p.x,
                        m = p.y) : (f = 0,
                        m = 0);
                        var i = {
                            x: f + e,
                            y: m + t
                        };
                        (o || !p) && (p = i),
                        y.push(i),
                        g = f + e,
                        x = m + t
                    }
                }
                  , b = function(e) {
                    var t = e.pathSegTypeAsLetter.toUpperCase();
                    if ("Z" !== t) {
                        switch (t) {
                        case "M":
                        case "L":
                        case "T":
                        case "C":
                        case "S":
                        case "Q":
                            g = e.x,
                            x = e.y;
                            break;
                        case "H":
                            g = e.x;
                            break;
                        case "V":
                            x = e.y
                        }
                        h(g, x, e.pathSegType)
                    }
                };
                for (o._svgPathToAbsolute(e),
                a = e.getTotalLength(),
                c = [],
                n = 0; n < e.pathSegList.numberOfItems; n += 1)
                    c.push(e.pathSegList.getItem(n));
                for (u = c.concat(); v < a; ) {
                    if ((l = c[e.getPathSegAtLength(v)]) != d) {
                        for (; u.length && u[0] != l; )
                            b(u.shift());
                        d = l
                    }
                    switch (l.pathSegTypeAsLetter.toUpperCase()) {
                    case "C":
                    case "T":
                    case "S":
                    case "Q":
                    case "A":
                        h((s = e.getPointAtLength(v)).x, s.y, 0)
                    }
                    v += t
                }
                for (n = 0,
                r = u.length; n < r; ++n)
                    b(u[n]);
                return y
            }
            ,
            o._svgPathToAbsolute = function(e) {
                for (var t, n, o, i, r, a, s = e.pathSegList, l = 0, c = 0, u = s.numberOfItems, d = 0; d < u; ++d) {
                    var p = s.getItem(d)
                      , f = p.pathSegTypeAsLetter;
                    if (/[MLHVCSQTA]/.test(f))
                        "x"in p && (l = p.x),
                        "y"in p && (c = p.y);
                    else
                        switch ("x1"in p && (o = l + p.x1),
                        "x2"in p && (r = l + p.x2),
                        "y1"in p && (i = c + p.y1),
                        "y2"in p && (a = c + p.y2),
                        "x"in p && (l += p.x),
                        "y"in p && (c += p.y),
                        f) {
                        case "m":
                            s.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                            break;
                        case "l":
                            s.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                            break;
                        case "h":
                            s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(l), d);
                            break;
                        case "v":
                            s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d);
                            break;
                        case "c":
                            s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(l, c, o, i, r, a), d);
                            break;
                        case "s":
                            s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, a), d);
                            break;
                        case "q":
                            s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(l, c, o, i), d);
                            break;
                        case "t":
                            s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c), d);
                            break;
                        case "a":
                            s.replaceItem(e.createSVGPathSegArcAbs(l, c, p.r1, p.r2, p.angle, p.largeArcFlag, p.sweepFlag), d);
                            break;
                        case "z":
                        case "Z":
                            l = t,
                            c = n
                        }
                    ("M" == f || "m" == f) && (t = l,
                    n = c)
                }
            }
        }
        , function(e, t, n) {
            var o = {};
            e.exports = o;
            var i = n(6);
            n(0),
            o.create = i.create,
            o.add = i.add,
            o.remove = i.remove,
            o.clear = i.clear,
            o.addComposite = i.addComposite,
            o.addBody = i.addBody,
            o.addConstraint = i.addConstraint
        }
        ]
          , n = {};
        function o(e) {
            if (n[e])
                return n[e].exports;
            var i = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
        }
        return o.m = t,
        o.c = n,
        o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        o.r = function(e) {
            "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        o.t = function(e, t) {
            if (1 & t && (e = o(e)),
            8 & t || 4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    o.d(n, i, (function(t) {
                        return e[t]
                    }
                    ).bind(null, i));
            return n
        }
        ,
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return o.d(t, "a", t),
            t
        }
        ,
        o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        o.p = "",
        o(o.s = 20)
    }()
}
, 565157, 212426, e => {
    "use strict";
    var t = e.i(475254);
    let n = (0,
    t.default)("earth", [["path", {
        d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
        key: "1djwo0"
    }], ["path", {
        d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
        key: "1tzkfa"
    }], ["path", {
        d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
        key: "14pb5j"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }]]);
    e.s(["Globe2", 0, n], 565157);
    let o = (0,
    t.default)("dollar-sign", [["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }], ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]]);
    e.s(["DollarSign", 0, o], 212426)
}
, 269638, e => {
    "use strict";
    let t = (0,
    e.i(475254).default)("circle-check-big", [["path", {
        d: "M21.801 10A10 10 0 1 1 17 3.335",
        key: "yps3ct"
    }], ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]]);
    e.s(["CheckCircle", 0, t], 269638)
}
]);
