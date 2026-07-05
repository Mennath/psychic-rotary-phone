(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 845678, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970);
    let l = [{
        label: "About",
        href: "#about"
    }, {
        label: "Services",
        href: "#services"
    }, {
        label: "Projects",
        href: "#projects"
    }, {
        label: "Experience",
        href: "#experience"
    }, {
        label: "Certifications",
        href: "#certifications"
    }, {
        label: "Contact",
        href: "#contact"
    }];
    function s() {
        let[e,s] = (0,
        a.useState)(!1)
          , [o,i] = (0,
        a.useState)("")
          , [n,c] = (0,
        a.useState)(!1)
          , d = (0,
        a.useRef)(null);
        (0,
        a.useEffect)( () => {
            let e = () => {
                s(window.scrollY > 50);
                let e = l.map(e => e.href.replace("#", ""));
                for (let t = e.length - 1; t >= 0; t--) {
                    let a = document.getElementById(e[t]);
                    if (a && a.getBoundingClientRect().top <= 150)
                        return void i(e[t])
                }
                i("")
            }
            ;
            return window.addEventListener("scroll", e, {
                passive: !0
            }),
            () => window.removeEventListener("scroll", e)
        }
        , []),
        (0,
        a.useEffect)( () => {
            d.current && r.default.fromTo(d.current, {
                marginTop: -30,
                opacity: 0
            }, {
                marginTop: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                delay: .5
            })
        }
        , []),
        (0,
        a.useEffect)( () => {
            n && (r.default.fromTo(".mob-backdrop", {
                autoAlpha: 0
            }, {
                autoAlpha: 1,
                duration: .3,
                ease: "power2.out"
            }),
            r.default.fromTo(".mob-link", {
                x: 30,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .4,
                ease: "power3.out",
                stagger: .06,
                delay: .1
            }))
        }
        , [n]);
        let p = () => {
            r.default.to(".mob-link", {
                x: 30,
                opacity: 0,
                duration: .2,
                ease: "power3.in",
                stagger: .03
            }),
            r.default.to(".mob-backdrop", {
                autoAlpha: 0,
                duration: .25,
                ease: "power2.in",
                delay: .1,
                onComplete: () => c(!1)
            })
        }
        ;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)("div", {
                className: "fixed top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4 md:px-0",
                children: (0,
                t.jsx)("nav", {
                    ref: d,
                    className: "transition-all duration-500 opacity-0 pointer-events-auto w-full md:w-auto",
                    style: {
                        background: e ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderRadius: "9999px",
                        border: e ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.1)",
                        boxShadow: e ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
                        padding: "6px 6px 6px 20px"
                    },
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-between md:justify-start gap-1 w-full md:w-auto",
                        children: [(0,
                        t.jsxs)("a", {
                            href: "#",
                            className: "heading text-lg mr-4",
                            style: {
                                color: e ? "#0A0A0A" : "#fff"
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
                            className: "hidden md:flex items-center gap-0.5",
                            children: l.map(a => {
                                let r = o === a.href.replace("#", "");
                                return (0,
                                t.jsx)("a", {
                                    href: a.href,
                                    className: "relative px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300",
                                    style: {
                                        color: r ? "#0A0A0A" : e ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
                                        background: r ? "#4FFFB0" : "transparent"
                                    },
                                    onMouseEnter: t => {
                                        r || (t.currentTarget.style.color = e ? "#0A0A0A" : "#fff",
                                        t.currentTarget.style.background = e ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)")
                                    }
                                    ,
                                    onMouseLeave: t => {
                                        r || (t.currentTarget.style.color = e ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
                                        t.currentTarget.style.background = "transparent")
                                    }
                                    ,
                                    children: a.label
                                }, a.label)
                            }
                            )
                        }), (0,
                        t.jsxs)("a", {
                            href: "/ar",
                            className: "hidden md:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[12px] font-bold transition-all duration-200 hover:-translate-y-0.5 ml-1",
                            style: {
                                background: e ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)",
                                color: e ? "#0A0A0A" : "#fff",
                                border: e ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.1)"
                            },
                            title: "العربية",
                            children: [(0,
                            t.jsx)("img", {
                                src: "/flags/sa.svg",
                                alt: "",
                                width: 18,
                                height: 18,
                                style: {
                                    borderRadius: "50%",
                                    flexShrink: 0
                                }
                            }), "AR"]
                        }), (0,
                        t.jsx)("a", {
                            href: "#contact",
                            className: "hidden md:inline-flex items-center h-9 px-5 rounded-full text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 ml-1",
                            style: {
                                background: "#4FFFB0",
                                color: "#0A0A0A",
                                border: "2px solid #0A0A0A",
                                boxShadow: "3px 3px 0px 0px #0A0A0A"
                            },
                            children: "Let's Talk"
                        }), (0,
                        t.jsxs)("button", {
                            onClick: () => n ? p() : c(!0),
                            className: "md:hidden w-9 h-9 rounded-full flex flex-col items-center justify-center gap-[5px] cursor-pointer ml-2",
                            style: {
                                background: e ? "#0A0A0A" : "rgba(255,255,255,0.15)",
                                border: "none"
                            },
                            "aria-label": "Menu",
                            children: [(0,
                            t.jsx)("span", {
                                className: "block h-[2px] rounded-full transition-all duration-300",
                                style: {
                                    width: 18,
                                    background: e ? "#4FFFB0" : "#fff",
                                    transform: n ? "translateY(3.5px) rotate(45deg)" : "none"
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "block h-[2px] rounded-full transition-all duration-300",
                                style: {
                                    width: 12,
                                    background: e ? "#4FFFB0" : "#fff",
                                    opacity: +!n
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "block h-[2px] rounded-full transition-all duration-300",
                                style: {
                                    width: n ? 18 : 15,
                                    background: e ? "#4FFFB0" : "#fff",
                                    transform: n ? "translateY(-3.5px) rotate(-45deg)" : "none"
                                }
                            })]
                        })]
                    })
                })
            }), n && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("div", {
                    className: "mob-backdrop fixed inset-0 z-[98]",
                    style: {
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        opacity: 0
                    },
                    onClick: p
                }), (0,
                t.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 z-[99] w-[280px] flex flex-col justify-center px-8",
                    style: {
                        background: "#0A0A0A"
                    },
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [l.map(e => (0,
                        t.jsx)("a", {
                            href: e.href,
                            onClick: p,
                            className: "mob-link heading text-2xl py-3 transition-colors duration-200 hover:text-[#4FFFB0]",
                            style: {
                                color: "#fff",
                                opacity: 0,
                                borderBottom: "1px solid rgba(255,255,255,0.06)"
                            },
                            children: e.label
                        }, e.label)), (0,
                        t.jsx)("a", {
                            href: "#contact",
                            onClick: p,
                            className: "mob-link inline-flex items-center justify-center h-12 rounded-full text-base font-bold mt-4",
                            style: {
                                background: "#4FFFB0",
                                color: "#0A0A0A",
                                opacity: 0,
                                border: "2px solid #0A0A0A",
                                boxShadow: "4px 4px 0px 0px #0A0A0A"
                            },
                            children: "Let's Talk"
                        }), (0,
                        t.jsxs)("a", {
                            href: "/ar",
                            className: "mob-link inline-flex items-center justify-center gap-2 h-10 rounded-full text-sm font-bold mt-2",
                            style: {
                                background: "rgba(255,255,255,0.08)",
                                color: "#fff",
                                opacity: 0,
                                border: "1px solid rgba(255,255,255,0.15)"
                            },
                            children: [(0,
                            t.jsx)("img", {
                                src: "/flags/sa.svg",
                                alt: "",
                                width: 20,
                                height: 20,
                                style: {
                                    borderRadius: "50%"
                                }
                            }), "العربية"]
                        })]
                    })
                })]
            })]
        })
    }
    e.s(["default", 0, function() {
        return (0,
        t.jsx)(s, {})
    }
    ], 845678)
}
, 390928, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645);
    e.i(247167);
    var r = e.i(231178)
      , l = e.i(947414)
      , s = e.i(674008)
      , o = e.i(821476)
      , i = e.i(772846)
      , n = a
      , c = e.i(737806);
    function d(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    class p extends n.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if ((0,
            i.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let e = t.offsetParent
                  , a = (0,
                i.isHTMLElement)(e) && e.offsetWidth || 0
                  , r = (0,
                i.isHTMLElement)(e) && e.offsetHeight || 0
                  , l = getComputedStyle(t)
                  , s = this.props.sizeRef.current;
                s.height = parseFloat(l.height),
                s.width = parseFloat(l.width),
                s.top = t.offsetTop,
                s.left = t.offsetLeft,
                s.right = a - s.width - s.left,
                s.bottom = r - s.height - s.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }
    function x({children: e, isPresent: r, anchorX: l, anchorY: s, root: o, pop: i}) {
        let g = (0,
        n.useId)()
          , m = (0,
        n.useRef)(null)
          , f = (0,
        n.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })
          , {nonce: u} = (0,
        n.useContext)(c.MotionConfigContext)
          , h = function(...e) {
            return a.useCallback(function(...e) {
                return t => {
                    let a = !1
                      , r = e.map(e => {
                        let r = d(e, t);
                        return a || "function" != typeof r || (a = !0),
                        r
                    }
                    );
                    if (a)
                        return () => {
                            for (let t = 0; t < r.length; t++) {
                                let a = r[t];
                                "function" == typeof a ? a() : d(e[t], null)
                            }
                        }
                }
            }(...e), e)
        }(m, e.props?.ref ?? e?.ref);
        return (0,
        n.useInsertionEffect)( () => {
            let {width: e, height: t, top: a, left: n, right: c, bottom: d} = f.current;
            if (r || !1 === i || !m.current || !e || !t)
                return;
            let p = "left" === l ? `left: ${n}` : `right: ${c}`
              , x = "bottom" === s ? `bottom: ${d}` : `top: ${a}`;
            m.current.dataset.motionPopId = g;
            let h = document.createElement("style");
            u && (h.nonce = u);
            let b = o ?? document.head;
            return b.appendChild(h),
            h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${p}px !important;
            ${x}px !important;
          }
        `),
            () => {
                m.current?.removeAttribute("data-motion-pop-id"),
                b.contains(h) && b.removeChild(h)
            }
        }
        , [r]),
        (0,
        t.jsx)(p, {
            isPresent: r,
            childRef: m,
            sizeRef: f,
            pop: i,
            children: !1 === i ? e : n.cloneElement(e, {
                ref: h
            })
        })
    }
    let g = ({children: e, initial: r, isPresent: s, onExitComplete: i, custom: n, presenceAffectsLayout: c, mode: d, anchorX: p, anchorY: g, root: f}) => {
        let u = (0,
        l.useConstant)(m)
          , h = (0,
        a.useId)()
          , b = !0
          , y = (0,
        a.useMemo)( () => (b = !1,
        {
            id: h,
            initial: r,
            isPresent: s,
            custom: n,
            onExitComplete: e => {
                for (let t of (u.set(e, !0),
                u.values()))
                    if (!t)
                        return;
                i && i()
            }
            ,
            register: e => (u.set(e, !1),
            () => u.delete(e))
        }), [s, u, i]);
        return c && b && (y = {
            ...y
        }),
        (0,
        a.useMemo)( () => {
            u.forEach( (e, t) => u.set(t, !1))
        }
        , [s]),
        a.useEffect( () => {
            s || u.size || !i || i()
        }
        , [s]),
        e = (0,
        t.jsx)(x, {
            pop: "popLayout" === d,
            isPresent: s,
            anchorX: p,
            anchorY: g,
            root: f,
            children: e
        }),
        (0,
        t.jsx)(o.PresenceContext.Provider, {
            value: y,
            children: e
        })
    }
    ;
    function m() {
        return new Map
    }
    var f = e.i(464978);
    let u = e => e.key || "";
    function h(e) {
        let t = [];
        return a.Children.forEach(e, e => {
            (0,
            a.isValidElement)(e) && t.push(e)
        }
        ),
        t
    }
    let b = ({children: e, custom: o, initial: i=!0, onExitComplete: n, presenceAffectsLayout: c=!0, mode: d="sync", propagate: p=!1, anchorX: x="left", anchorY: m="top", root: b}) => {
        let[y,A] = (0,
        f.usePresence)(p)
          , v = (0,
        a.useMemo)( () => h(e), [e])
          , j = p && !y ? [] : v.map(u)
          , k = (0,
        a.useRef)(!0)
          , w = (0,
        a.useRef)(v)
          , F = (0,
        l.useConstant)( () => new Map)
          , N = (0,
        a.useRef)(new Set)
          , [S,C] = (0,
        a.useState)(v)
          , [E,B] = (0,
        a.useState)(v);
        (0,
        s.useIsomorphicLayoutEffect)( () => {
            k.current = !1,
            w.current = v;
            for (let e = 0; e < E.length; e++) {
                let t = u(E[e]);
                j.includes(t) ? (F.delete(t),
                N.current.delete(t)) : !0 !== F.get(t) && F.set(t, !1)
            }
        }
        , [E, j.length, j.join("-")]);
        let T = [];
        if (v !== S) {
            let e = [...v];
            for (let t = 0; t < E.length; t++) {
                let a = E[t]
                  , r = u(a);
                j.includes(r) || (e.splice(t, 0, a),
                T.push(a))
            }
            return "wait" === d && T.length && (e = T),
            B(h(e)),
            C(v),
            null
        }
        let {forceRender: M} = (0,
        a.useContext)(r.LayoutGroupContext);
        return (0,
        t.jsx)(t.Fragment, {
            children: E.map(e => {
                let a = u(e)
                  , r = (!p || !!y) && (v === E || j.includes(a));
                return (0,
                t.jsx)(g, {
                    isPresent: r,
                    initial: (!k.current || !!i) && void 0,
                    custom: o,
                    presenceAffectsLayout: c,
                    mode: d,
                    root: b,
                    onExitComplete: r ? void 0 : () => {
                        if (N.current.has(a) || !F.has(a))
                            return;
                        N.current.add(a),
                        F.set(a, !0);
                        let e = !0;
                        F.forEach(t => {
                            t || (e = !1)
                        }
                        ),
                        e && (M?.(),
                        B(w.current),
                        p && A?.(),
                        n && n())
                    }
                    ,
                    anchorX: x,
                    anchorY: m,
                    children: e
                }, a)
            }
            )
        })
    }
    ;
    var y = e.i(846932);
    e.s(["default", 0, function({texts: e, mainClassName: r="", initial: l={
        y: "0.7em",
        opacity: 0,
        filter: "blur(12px)",
        rotateX: -70,
        scale: .94
    }, animate: s={
        y: "0em",
        opacity: 1,
        filter: "blur(0px)",
        rotateX: 0,
        scale: 1
    }, exit: o={
        y: "-0.5em",
        opacity: 0,
        filter: "blur(10px)",
        rotateX: 55,
        scale: 1.03
    }, transition: i={
        duration: .65,
        ease: [.22, 1, .36, 1]
    }, rotationInterval: n=2500}) {
        let[c,d] = (0,
        a.useState)(0)
          , p = (0,
        a.useRef)(null)
          , x = e.reduce( (e, t) => t.length > e.length ? t : e, e[0] ?? "");
        return (0,
        a.useEffect)( () => {
            if (!(e.length <= 1))
                return p.current = setInterval( () => {
                    d(t => (t + 1) % e.length)
                }
                , n),
                () => {
                    p.current && clearInterval(p.current)
                }
        }
        , [e.length, n]),
        (0,
        t.jsxs)("span", {
            className: `relative inline-grid align-baseline ${r}`.trim(),
            style: {
                perspective: 1200
            },
            "aria-live": "polite",
            children: [(0,
            t.jsx)("span", {
                "aria-hidden": !0,
                className: "invisible pointer-events-none select-none whitespace-nowrap",
                children: x
            }), (0,
            t.jsx)(b, {
                initial: !1,
                mode: "sync",
                children: (0,
                t.jsx)(y.motion.span, {
                    initial: l,
                    animate: s,
                    exit: o,
                    transition: i,
                    className: "absolute inset-0 inline-flex items-center whitespace-nowrap",
                    style: {
                        transformOrigin: "50% 100%",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden"
                    },
                    children: e[c]
                }, e[c])
            })]
        })
    }
    ], 390928)
}
, 232177, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(972520)
      , s = e.i(440160)
      , o = e.i(390928)
      , i = e.i(770703);
    let n = (0,
    i.default)( () => e.A(363902), {
        loadableGenerated: {
            modules: [639214]
        },
        ssr: !1
    })
      , c = (0,
    i.default)( () => e.A(509012), {
        loadableGenerated: {
            modules: [289999]
        },
        ssr: !1
    })
      , d = [{
        name: "Ooredoo",
        src: "/logos/ooredoo.png"
    }, {
        name: "QNB",
        src: "/logos/qnb.png"
    }, {
        name: "Amazon",
        src: "/logos/amazon.svg"
    }, {
        name: "BinGhatti",
        src: "/logos/binghatti.png"
    }, {
        name: "CarTech",
        src: "/logos/cartech.png"
    }, {
        name: "Saudia",
        src: "/ext/saudia.svg",
        size: "65px"
    }, {
        name: "Chelsea",
        src: "/logos/chelsea.png",
        noFilter: !0,
        size: "52px"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".h-anim", {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    ease: "power3.out",
                    stagger: .12,
                    delay: .3
                })
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsxs)("section", {
            ref: e,
            className: "min-h-screen flex items-center relative overflow-hidden",
            style: {
                background: "#0A0A0A"
            },
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 z-0 opacity-40 hidden md:block",
                children: (0,
                t.jsx)(n, {
                    colorStops: ["#5227FF", "#4FFFB0", "#5227FF"],
                    amplitude: 1,
                    blend: .5,
                    speed: 1
                })
            }), (0,
            t.jsx)("div", {
                className: "absolute inset-0 z-[2] opacity-25 hidden md:block",
                style: {
                    pointerEvents: "auto"
                },
                children: (0,
                t.jsx)(c, {
                    count: 150,
                    magnetRadius: 6,
                    ringRadius: 7,
                    waveSpeed: .4,
                    waveAmplitude: 1,
                    particleSize: 1.2,
                    lerpSpeed: .05,
                    color: "#4FFFB0",
                    autoAnimate: !0,
                    particleVariance: 1,
                    rotationSpeed: 0,
                    depthFactor: 1,
                    pulseSpeed: 3,
                    particleShape: "capsule",
                    fieldStrength: 10
                })
            }), (0,
            t.jsx)("div", {
                className: "absolute inset-0 z-0 md:hidden",
                style: {
                    background: "radial-gradient(ellipse at 50% 30%, rgba(79,255,176,0.12) 0%, transparent 60%)"
                }
            }), (0,
            t.jsx)("div", {
                className: "relative z-10 w-full px-6 md:px-12 lg:px-20 pointer-events-none",
                children: (0,
                t.jsxs)("div", {
                    className: "max-w-6xl mx-auto text-center pt-32 pb-0",
                    children: [(0,
                    t.jsx)("div", {
                        className: "h-anim opacity-0 mb-7",
                        children: (0,
                        t.jsxs)("span", {
                            className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold",
                            style: {
                                background: "#fff",
                                color: "#0F0F0F",
                                border: "1px solid rgba(255,255,255,0.15)"
                            },
                            children: [(0,
                            t.jsx)("span", {
                                className: "w-2 h-2 rounded-full inline-block",
                                style: {
                                    background: "#22C55E",
                                    boxShadow: "0 0 8px #22C55E"
                                }
                            }), "Available for Work"]
                        })
                    }), (0,
                    t.jsx)("div", {
                        className: "h-anim opacity-0 mb-7",
                        children: (0,
                        t.jsxs)("h1", {
                            className: "heading text-4xl sm:text-5xl md:text-6xl lg:text-[64px]",
                            style: {
                                color: "#fff"
                            },
                            children: ["I craft digital", " ", (0,
                            t.jsx)("span", {
                                className: "inline-block",
                                children: (0,
                                t.jsx)(o.default, {
                                    texts: ["products", "strategies", "solutions", "growth"],
                                    mainClassName: "inline-block overflow-hidden text-[#4FFFB0]",
                                    rotationInterval: 2500
                                })
                            }), (0,
                            t.jsx)("br", {}), "that drive real growth."]
                        })
                    }), (0,
                    t.jsxs)("p", {
                        className: "h-anim opacity-0 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10",
                        style: {
                            color: "#fff"
                        },
                        children: ["Performance marketing, product development, and AI integration.", (0,
                        t.jsx)("br", {}), "5+ years across Egypt, Qatar, Saudi Arabia & UAE."]
                    }), (0,
                    t.jsxs)("div", {
                        className: "h-anim opacity-0 flex flex-wrap justify-center gap-5 mb-10 pointer-events-auto",
                        children: [(0,
                        t.jsxs)("a", {
                            href: "#projects",
                            className: "group relative inline-flex items-center gap-3 h-14 px-9 rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                            style: {
                                background: "#4FFFB0",
                                color: "#0A0A0A",
                                border: "2px solid #0A0A0A",
                                boxShadow: "5px 5px 0px 0px #0A0A0A"
                            },
                            children: [(0,
                            t.jsx)(l.ArrowRight, {
                                size: 16
                            }), "View My Work"]
                        }), (0,
                        t.jsxs)("a", {
                            href: "/Ahmed-Ali-CV.pdf",
                            download: !0,
                            className: "group relative inline-flex items-center gap-3 h-14 px-9 rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                            style: {
                                background: "#fff",
                                color: "#0A0A0A",
                                border: "2px solid #0A0A0A",
                                boxShadow: "5px 5px 0px 0px #0A0A0A"
                            },
                            children: [(0,
                            t.jsx)(s.Download, {
                                size: 16
                            }), "Download CV"]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "h-anim opacity-0 mb-12",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "relative inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5",
                            style: {
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.08)"
                            },
                            children: [(0,
                            t.jsx)("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0,
                                t.jsx)("path", {
                                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
                                    fill: "#4FFFB0"
                                })
                            }), (0,
                            t.jsx)("span", {
                                className: "text-xs font-semibold tracking-wide uppercase",
                                style: {
                                    color: "rgba(255,255,255,0.7)"
                                },
                                children: "Trusted by"
                            }), (0,
                            t.jsx)("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0,
                                t.jsx)("path", {
                                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
                                    fill: "#4FFFB0"
                                })
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "flex flex-wrap justify-center items-center gap-x-10 gap-y-5",
                            children: d.map(e => (0,
                            t.jsx)("img", {
                                src: e.src,
                                alt: e.name,
                                className: "hover:opacity-80 transition-opacity duration-300 object-contain",
                                style: {
                                    height: e.size || "32px",
                                    width: "auto",
                                    maxWidth: "120px",
                                    filter: e.noFilter ? "none" : "brightness(0) invert(1)",
                                    opacity: 1
                                }
                            }, e.name))
                        })]
                    })]
                })
            })]
        })
    }
    ])
}
, 168003, e => {
    "use strict";
    var t = e.i(843476);
    let a = ["Performance Marketing", "SEO & SEM", "Web Development", "AI Integration", "Google Ads", "Flutter Apps", "Data Analytics"]
      , r = ["Next.js", "React", "Brand Strategy", "Meta Ads", "WordPress", "Growth Hacking", "Product Design"];
    function l({items: e, direction: a}) {
        let r = [...e, ...e, ...e, ...e];
        return (0,
        t.jsx)("div", {
            className: "flex overflow-hidden",
            children: (0,
            t.jsx)("div", {
                className: `flex gap-5 shrink-0 ${"left" === a ? "animate-[ml_60s_linear_infinite]" : "animate-[mr_60s_linear_infinite]"}`,
                style: {
                    willChange: "transform"
                },
                children: r.map( (e, a) => (0,
                t.jsxs)("span", {
                    className: "contents",
                    children: [(0,
                    t.jsx)("span", {
                        className: "shrink-0 text-base md:text-lg px-5 md:px-6 py-2 md:py-2.5 rounded-full whitespace-nowrap",
                        style: {
                            background: "#4FFFB0",
                            color: "#0A0A0A",
                            fontFamily: "'TAN Headline'",
                            fontWeight: 400
                        },
                        children: e
                    }), (0,
                    t.jsx)("span", {
                        className: "flex items-center text-xl md:text-2xl shrink-0",
                        style: {
                            color: "#fff"
                        },
                        children: "✳"
                    })]
                }, a))
            })
        })
    }
    e.s(["default", 0, function() {
        return (0,
        t.jsxs)("div", {
            className: "relative",
            style: {
                background: "#0A0A0A",
                padding: "60px 0",
                overflow: "hidden"
            },
            children: [(0,
            t.jsx)("style", {
                children: `
        @keyframes ml { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes mr { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `
            }), (0,
            t.jsx)("div", {
                className: "absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none",
                style: {
                    background: "linear-gradient(to right, #0A0A0A, transparent)"
                }
            }), (0,
            t.jsx)("div", {
                className: "absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none",
                style: {
                    background: "linear-gradient(to left, #0A0A0A, transparent)"
                }
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [(0,
                t.jsx)(l, {
                    items: a,
                    direction: "left"
                }), (0,
                t.jsx)(l, {
                    items: r,
                    direction: "right"
                })]
            })]
        })
    }
    ])
}
, 175543, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(870273)
      , o = e.i(346897)
      , i = e.i(115057)
      , n = e.i(868127);
    r.default.registerPlugin(l.ScrollTrigger);
    let c = [{
        icon: n.SiGoogleads,
        label: "Google Ads",
        color: "#fff",
        bg: "#34A853",
        top: "15%",
        left: "2%",
        rotate: -8
    }, {
        icon: n.SiMeta,
        label: "Meta Ads",
        color: "#fff",
        bg: "#0081FB",
        top: "40%",
        left: "5%",
        rotate: 5
    }, {
        icon: n.SiTiktok,
        label: "TikTok",
        color: "#fff",
        bg: "#111",
        top: "62%",
        left: "1%",
        rotate: -3
    }, {
        icon: n.SiFlutter,
        label: "Flutter",
        color: "#fff",
        bg: "#02569B",
        top: "80%",
        left: "8%",
        rotate: 7
    }, {
        icon: n.SiInstagram,
        label: "Instagram",
        color: "#fff",
        bg: "#E4405F",
        top: "12%",
        right: "3%",
        rotate: 6
    }, {
        icon: n.SiSnapchat,
        label: "Snapchat",
        color: "#111",
        bg: "#FFFC00",
        top: "40%",
        right: "1%",
        rotate: -5
    }, {
        icon: n.SiWordpress,
        label: "WordPress",
        color: "#fff",
        bg: "#21759B",
        top: "62%",
        right: "6%",
        rotate: 4
    }, {
        icon: n.SiReact,
        label: "React",
        color: "#fff",
        bg: "#61DAFB",
        top: "80%",
        right: "1%",
        rotate: -6
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".about-anim", {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    ease: "power3.out",
                    stagger: .1,
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 75%"
                    }
                }),
                r.default.fromTo(".float-pill", {
                    scale: 0,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: .6,
                    ease: "back.out(1.7)",
                    stagger: .1,
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 70%"
                    }
                }),
                document.querySelectorAll(".float-pill").forEach( (e, t) => {
                    r.default.to(e, {
                        y: "random(-12, 12)",
                        x: "random(-6, 6)",
                        duration: "random(3, 5)",
                        ease: "sine.inOut",
                        repeat: -1,
                        yoyo: !0,
                        delay: .3 * t
                    })
                }
                )
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsx)("section", {
            ref: e,
            id: "about",
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 0"
            },
            children: (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto px-6 relative",
                style: {
                    minHeight: "650px"
                },
                children: [c.map( (e, a) => (0,
                t.jsxs)("div", {
                    className: "float-pill absolute hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full cursor-default opacity-0",
                    style: {
                        background: e.bg,
                        color: e.color,
                        top: e.top,
                        left: e.left,
                        right: e.right,
                        transform: `rotate(${e.rotate}deg)`,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                        zIndex: 5
                    },
                    children: [(0,
                    t.jsx)(e.icon, {
                        size: 18
                    }), (0,
                    t.jsx)("span", {
                        className: "text-sm font-semibold",
                        children: e.label
                    })]
                }, a)), (0,
                t.jsxs)("div", {
                    className: "relative z-10 flex flex-col items-center text-center",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "about-anim opacity-0 mb-10",
                        children: [(0,
                        t.jsx)("p", {
                            className: "script text-xl md:text-2xl mb-3",
                            style: {
                                color: "#4FFFB0"
                            },
                            children: "About Me"
                        }), (0,
                        t.jsx)("h2", {
                            className: "heading text-3xl md:text-4xl",
                            style: {
                                color: "#fff"
                            },
                            children: "Full-Service Digital Solutions"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "about-anim opacity-0 w-[320px] rounded-[32px] overflow-hidden mb-10",
                        style: {
                            background: "#111",
                            border: "1px solid rgba(79,255,176,0.1)",
                            boxShadow: "0 0 80px rgba(79,255,176,0.04), 0 30px 60px rgba(0,0,0,0.4)"
                        },
                        children: [(0,
                        t.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            t.jsx)("img", {
                                src: "/myphoto-profile.png",
                                alt: "Ahmed Ali",
                                className: "w-full h-[340px] object-cover",
                                style: {
                                    objectPosition: "center top"
                                }
                            }), (0,
                            t.jsx)("div", {
                                className: "absolute inset-0",
                                style: {
                                    background: "linear-gradient(to top, #111 0%, transparent 60%)"
                                }
                            }), (0,
                            t.jsxs)("div", {
                                className: "absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                                style: {
                                    background: "rgba(0,0,0,0.5)",
                                    backdropFilter: "blur(10px)"
                                },
                                children: [(0,
                                t.jsx)("span", {
                                    className: "w-2 h-2 rounded-full",
                                    style: {
                                        background: "#4FFFB0",
                                        boxShadow: "0 0 6px #4FFFB0"
                                    }
                                }), (0,
                                t.jsx)("span", {
                                    className: "text-[10px] font-bold",
                                    style: {
                                        color: "#4FFFB0"
                                    },
                                    children: "Available"
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "absolute top-4 right-4 flex items-center gap-0.5 px-2.5 py-1.5 rounded-full",
                                style: {
                                    background: "rgba(0,0,0,0.5)",
                                    backdropFilter: "blur(10px)"
                                },
                                children: [1, 2, 3, 4, 5].map(e => (0,
                                t.jsx)(s.Star, {
                                    size: 10,
                                    fill: "#4FFFB0",
                                    style: {
                                        color: "#4FFFB0"
                                    }
                                }, e))
                            }), (0,
                            t.jsxs)("div", {
                                className: "absolute bottom-4 left-5 right-5",
                                children: [(0,
                                t.jsx)("h3", {
                                    className: "heading text-xl",
                                    style: {
                                        color: "#fff"
                                    },
                                    children: "Ahmed Ali"
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-xs",
                                    style: {
                                        color: "#4FFFB0"
                                    },
                                    children: "Full-Stack Digital Strategist"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            className: "px-5 pb-5 pt-3",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-1.5 mb-4",
                                children: [(0,
                                t.jsx)(o.MapPin, {
                                    size: 12,
                                    style: {
                                        color: "#555"
                                    }
                                }), (0,
                                t.jsx)("span", {
                                    className: "text-xs",
                                    style: {
                                        color: "#888"
                                    },
                                    children: "Cairo, Egypt"
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "flex items-center justify-between mb-4 px-1",
                                children: [{
                                    v: "5+",
                                    l: "Years"
                                }, {
                                    v: "50+",
                                    l: "Projects"
                                }, {
                                    v: "4",
                                    l: "Countries"
                                }].map( (e, a, r) => (0,
                                t.jsxs)("div", {
                                    className: "flex-1 text-center relative",
                                    children: [(0,
                                    t.jsx)("p", {
                                        className: "text-lg font-bold",
                                        style: {
                                            color: "#fff",
                                            fontFamily: "'TAN Headline'"
                                        },
                                        children: e.v
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-[9px] font-medium uppercase tracking-wider",
                                        style: {
                                            color: "rgba(255,255,255,0.4)"
                                        },
                                        children: e.l
                                    }), a < r.length - 1 && (0,
                                    t.jsx)("div", {
                                        className: "absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px",
                                        style: {
                                            background: "rgba(255,255,255,0.08)"
                                        }
                                    })]
                                }, e.l))
                            }), (0,
                            t.jsxs)("a", {
                                href: "#contact",
                                className: "flex items-center justify-center gap-2 w-full h-11 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-0.5",
                                style: {
                                    background: "#4FFFB0",
                                    color: "#0A0A0A",
                                    border: "2px solid #0A0A0A",
                                    boxShadow: "4px 4px 0px 0px #0A0A0A"
                                },
                                children: ["Let's Work Together ", (0,
                                t.jsx)(i.ArrowUpRight, {
                                    size: 15
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "about-anim opacity-0 text-base md:text-lg leading-relaxed max-w-lg",
                        style: {
                            color: "rgba(255,255,255,0.7)"
                        },
                        children: "I build complete digital products, and I make them grow. From the first line of strategy to the last line of code, everything ships under one roof."
                    })]
                })]
            })
        })
    }
    ])
}
, 334872, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(348013);
    let l = [{
        label: "Google Ads",
        bg: "#34A853",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/googleads/ffffff"
    }, {
        label: "Meta Ads",
        bg: "#0081FB",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/meta/ffffff"
    }, {
        label: "TikTok",
        bg: "#000",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/tiktok/ffffff"
    }, {
        label: "Instagram",
        bg: "#E4405F",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/instagram/ffffff"
    }, {
        label: "SEO",
        bg: "#4FFFB0",
        color: "#0A0A0A",
        icon: ""
    }, {
        label: "React",
        bg: "#222",
        color: "#61DAFB",
        icon: "https://cdn.simpleicons.org/react/61DAFB"
    }, {
        label: "Flutter",
        bg: "#02569B",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/flutter/ffffff"
    }, {
        label: "Next.js",
        bg: "#fff",
        color: "#000",
        icon: "https://cdn.simpleicons.org/nextdotjs/000000"
    }, {
        label: "Firebase",
        bg: "#FFCA28",
        color: "#0A0A0A",
        icon: "https://cdn.simpleicons.org/firebase/000000"
    }, {
        label: "AI",
        bg: "#4FFFB0",
        color: "#0A0A0A",
        icon: "/ext/openai.png"
    }, {
        label: "WordPress",
        bg: "#21759B",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/wordpress/ffffff"
    }, {
        label: "Supabase",
        bg: "#3FCF8E",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/supabase/ffffff"
    }, {
        label: "LinkedIn",
        bg: "#0A66C2",
        color: "#fff",
        icon: "/ext/linkedin-icon.png"
    }, {
        label: "Snapchat",
        bg: "#FFFC00",
        color: "#000",
        icon: "https://cdn.simpleicons.org/snapchat/000000"
    }, {
        label: "Analytics",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: "https://cdn.simpleicons.org/googleanalytics/ffffff"
    }, {
        label: "Strategy",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }, {
        label: "Automation",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }, {
        label: "Performance",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }, {
        label: "Development",
        bg: "#4FFFB0",
        color: "#0A0A0A",
        icon: ""
    }, {
        label: "Branding",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }, {
        label: "Facebook",
        bg: "#1877F2",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/facebook/ffffff"
    }, {
        label: "TypeScript",
        bg: "#3178C6",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/typescript/ffffff"
    }, {
        label: "Tailwind",
        bg: "#06B6D4",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/tailwindcss/ffffff"
    }, {
        label: "Google",
        bg: "#fff",
        color: "#000",
        icon: "/ext/google.svg"
    }, {
        label: "Zapier",
        bg: "#FF4A00",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/zapier/ffffff"
    }, {
        label: "Figma",
        bg: "#F24E1E",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/figma/ffffff"
    }, {
        label: "Slack",
        bg: "#4A154B",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/slack/ffffff"
    }, {
        label: "GitHub",
        bg: "#222",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/github/ffffff"
    }, {
        label: "Notion",
        bg: "#fff",
        color: "#000",
        icon: "https://cdn.simpleicons.org/notion/000000"
    }, {
        label: "Vercel",
        bg: "#000",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/vercel/ffffff"
    }, {
        label: "Stripe",
        bg: "#635BFF",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/stripe/ffffff"
    }, {
        label: "Shopify",
        bg: "#96BF48",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/shopify/ffffff"
    }, {
        label: "Twitter/X",
        bg: "#000",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/x/ffffff"
    }, {
        label: "YouTube",
        bg: "#FF0000",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/youtube/ffffff"
    }, {
        label: "WhatsApp",
        bg: "#25D366",
        color: "#fff",
        icon: "https://cdn.simpleicons.org/whatsapp/ffffff"
    }, {
        label: "Growth",
        bg: "#4FFFB0",
        color: "#0A0A0A",
        icon: ""
    }, {
        label: "UX Design",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }, {
        label: "Conversion",
        bg: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.5)",
        icon: ""
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null)
          , [s,o] = (0,
        a.useState)(!1);
        return (0,
        a.useEffect)( () => {
            if (!e.current)
                return;
            let t = new IntersectionObserver( ([e]) => {
                e.isIntersecting && (o(!0),
                t.disconnect())
            }
            ,{
                threshold: .05
            });
            return t.observe(e.current),
            () => t.disconnect()
        }
        , []),
        (0,
        a.useEffect)( () => {
            let t;
            if (!s || !e.current)
                return;
            let a = e.current
              , {Engine: o, World: i, Bodies: n, Runner: c, Mouse: d, MouseConstraint: p, Body: x} = r.default
              , g = a.offsetWidth
              , m = a.offsetHeight;
            if (g <= 0 || m <= 0)
                return;
            let f = o.create();
            f.world.gravity.y = 1.2;
            let u = {
                isStatic: !0,
                render: {
                    fillStyle: "transparent"
                }
            };
            i.add(f.world, [n.rectangle(g / 2, m + 30, g + 100, 60, u), n.rectangle(g / 2, -300, g + 100, 60, u), n.rectangle(-30, m / 2, 60, m + 600, u), n.rectangle(g + 30, m / 2, 60, m + 600, u)]);
            let h = [];
            l.forEach( (e, t) => {
                let r = document.createElement("div");
                if (r.style.cssText = `position:absolute;left:0;top:0;z-index:10;pointer-events:auto;cursor:grab;user-select:none;display:inline-flex;align-items:center;gap:8px;padding:10px 22px;border-radius:9999px;font-size:1rem;font-weight:600;white-space:nowrap;background:${e.bg};color:${e.color};box-shadow:0 2px 8px rgba(0,0,0,0.2);will-change:transform;backface-visibility:hidden;-webkit-backface-visibility:hidden;`,
                e.icon) {
                    let t = document.createElement("img");
                    t.src = e.icon,
                    t.alt = "",
                    t.style.cssText = "width:18px;height:18px;flex-shrink:0;",
                    r.appendChild(t)
                }
                let l = document.createElement("span");
                l.textContent = e.label,
                r.appendChild(l),
                a.appendChild(r);
                let s = r.offsetWidth
                  , o = r.offsetHeight
                  , c = 80 + Math.random() * (g - 160)
                  , d = n.rectangle(c, -(10 + 12 * t), s, o, {
                    restitution: .3,
                    frictionAir: .04,
                    friction: .4,
                    render: {
                        fillStyle: "transparent"
                    },
                    chamfer: {
                        radius: o / 2
                    }
                });
                x.setVelocity(d, {
                    x: (Math.random() - .5) * 2,
                    y: 2 + 3 * Math.random()
                }),
                x.setAngularVelocity(d, (Math.random() - .5) * .03),
                i.add(f.world, d),
                h.push({
                    el: r,
                    body: d
                })
            }
            );
            let b = d.create(a)
              , y = p.create(f, {
                mouse: b,
                constraint: {
                    stiffness: .8,
                    render: {
                        visible: !1
                    }
                }
            })
              , A = b.mousewheel;
            A && b.element && (b.element.removeEventListener("wheel", A),
            b.element.removeEventListener("DOMMouseScroll", A)),
            i.add(f.world, y);
            let v = c.create({
                delta: 1e3 / 120
            });
            c.run(v, f);
            let j = () => {
                h.forEach( ({body: e, el: t}) => {
                    t.style.transform = `translate3d(${e.position.x}px, ${e.position.y}px, 0) translate(-50%, -50%) rotate(${e.angle}rad)`
                }
                ),
                t = requestAnimationFrame(j)
            }
            ;
            return j(),
            () => {
                cancelAnimationFrame(t),
                c.stop(v),
                h.forEach( ({el: e}) => e.remove()),
                i.clear(f.world, !1),
                o.clear(f)
            }
        }
        , [s]),
        (0,
        t.jsxs)("div", {
            style: {
                background: "#0A0A0A",
                position: "relative"
            },
            children: [(0,
            t.jsxs)("div", {
                className: "flex items-center justify-center gap-4 md:gap-6",
                style: {
                    paddingTop: "60px",
                    paddingBottom: "16px"
                },
                children: [(0,
                t.jsx)("span", {
                    style: {
                        fontSize: "clamp(4rem, 11vw, 9.5rem)",
                        lineHeight: 1,
                        backgroundImage: "linear-gradient(90deg, #444 0%, #999 40%, #fff 50%, #999 60%, #444 100%)",
                        backgroundSize: "400% 100%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shineMove 12s ease-in-out infinite"
                    },
                    children: "✨"
                }), (0,
                t.jsx)("h2", {
                    className: "heading text-center",
                    style: {
                        fontSize: "clamp(4rem, 11vw, 9.5rem)",
                        letterSpacing: "-2px",
                        backgroundImage: "linear-gradient(90deg, #444 0%, #999 40%, #fff 50%, #999 60%, #444 100%)",
                        backgroundSize: "400% 100%",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shineMove 12s ease-in-out infinite"
                    },
                    children: "Built Different"
                }), (0,
                t.jsx)("style", {
                    children: "@keyframes shineMove { 0% { background-position: 100% 0; } 50% { background-position: -100% 0; } 100% { background-position: 100% 0; } }"
                })]
            }), (0,
            t.jsx)("div", {
                ref: e,
                style: {
                    height: "450px",
                    position: "relative",
                    overflow: "hidden"
                }
            })]
        })
    }
    ])
}
, 127641, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(217923)
      , o = e.i(555436)
      , i = e.i(997625)
      , n = e.i(531245)
      , c = e.i(730267)
      , d = e.i(209912);
    r.default.registerPlugin(l.ScrollTrigger);
    let p = [{
        num: "01",
        Icon: s.BarChart3,
        title: "Performance Marketing",
        desc: "Data-driven campaigns across Google, Meta, and TikTok that maximize ROAS and scale revenue. From strategy to execution, I manage ad budgets up to $15K+/month with full tracking and optimization.",
        tools: ["Google Ads", "Meta Ads", "TikTok Ads", "Snapchat Ads"],
        variant: "green",
        imageSrc: "/services/16.png",
        imageAlt: "Premium green illustration representing performance marketing and campaign growth"
    }, {
        num: "02",
        Icon: o.Search,
        title: "SEO & Organic Growth",
        desc: "Technical audits, keyword strategy, on-page optimization, and link building that drive organic visibility. I've achieved top-10 rankings for competitive keywords within 8 months.",
        tools: ["Technical SEO", "On-Page", "Off-Page", "Local SEO"],
        variant: "white",
        imageSrc: "/services/14.png",
        imageAlt: "Editorial illustration representing SEO and organic growth strategy"
    }, {
        num: "03",
        Icon: i.Code2,
        title: "Web & Mobile Development",
        desc: "Full-stack applications built with modern frameworks, from landing pages to complex platforms with payment gateways, real-time databases, and AI integrations. Shipped to App Store & Google Play.",
        tools: ["React", "Next.js", "Flutter", "Firebase", "Supabase"],
        variant: "green",
        imageSrc: "/services/16.png",
        imageAlt: "Premium green illustration representing web and mobile product development"
    }, {
        num: "04",
        Icon: n.Bot,
        title: "AI Integration & Automation",
        desc: "Custom AI chatbots, automated workflows, and AI-powered products that save time and unlock new capabilities. From Zapier automations to full AI product builds.",
        tools: ["AI Chatbots", "Zapier", "Make", "OpenAI"],
        variant: "white",
        imageSrc: "/services/15.png",
        imageAlt: "Editorial illustration representing AI integration and workflow automation"
    }, {
        num: "05",
        Icon: c.LineChart,
        title: "Data & Analytics",
        desc: "GA4 setup, Google Tag Manager, conversion tracking, and Looker Studio dashboards. Full tracking infrastructure that turns raw data into actionable growth insights.",
        tools: ["GA4", "GTM", "Looker Studio", "Search Console"],
        variant: "green",
        imageSrc: "/services/16.png",
        imageAlt: "Premium green illustration representing data dashboards and analytics systems"
    }, {
        num: "06",
        Icon: d.Rocket,
        title: "Full-Stack Digital Strategy",
        desc: "End-to-end from idea to live product, connecting marketing, product, and technology into one cohesive plan. Strategy, build, launch, grow. All under one roof.",
        tools: ["Strategy", "Branding", "UX", "Growth"],
        variant: "white",
        imageSrc: "/services/13.png",
        imageAlt: "Editorial illustration representing full-stack digital strategy and collaboration"
    }];
    function x({service: e}) {
        return (0,
        t.jsx)("div", {
            className: "group/art relative w-full max-w-[390px] aspect-square overflow-hidden mx-auto",
            children: (0,
            t.jsx)("img", {
                src: e.imageSrc,
                alt: e.imageAlt,
                loading: "01" === e.num ? "eager" : "lazy",
                decoding: "async",
                className: "absolute inset-0 w-full h-full object-contain"
            })
        })
    }
    function g({service: e}) {
        let a = "green" === e.variant
          , r = "#0A0A0A"
          , l = a ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.45)"
          , s = a ? "rgba(0,0,0,0.08)" : "rgba(79,255,176,0.15)";
        return (0,
        t.jsxs)("div", {
            className: "rounded-[24px] p-8 md:p-14 relative overflow-hidden flex flex-col justify-center",
            style: {
                background: a ? "#4FFFB0" : "#fff",
                minHeight: "70vh"
            },
            children: [(0,
            t.jsx)("span", {
                className: "heading absolute top-5 right-8 text-[92px] md:text-[132px] leading-none pointer-events-none select-none",
                style: {
                    color: a ? "rgba(0,0,0,0.08)" : "rgba(79,255,176,0.15)"
                },
                children: e.num
            }), (0,
            t.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-5 gap-8 items-center relative z-10 h-full",
                children: [(0,
                t.jsxs)("div", {
                    className: "md:col-span-3",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [(0,
                        t.jsx)("div", {
                            className: "w-12 h-12 rounded-2xl flex items-center justify-center",
                            style: {
                                background: a ? "rgba(0,0,0,0.08)" : "rgba(79,255,176,0.15)"
                            },
                            children: (0,
                            t.jsx)(e.Icon, {
                                size: 22,
                                style: {
                                    color: r
                                }
                            })
                        }), (0,
                        t.jsx)("span", {
                            className: "text-sm font-bold",
                            style: {
                                color: l
                            },
                            children: e.num
                        })]
                    }), (0,
                    t.jsx)("h3", {
                        className: "heading text-3xl md:text-4xl mb-4",
                        style: {
                            color: r
                        },
                        children: e.title
                    }), (0,
                    t.jsx)("p", {
                        className: "text-sm md:text-base leading-relaxed mb-6",
                        style: {
                            color: l
                        },
                        children: e.desc
                    }), (0,
                    t.jsx)("div", {
                        className: "flex flex-wrap gap-2 mb-6",
                        children: e.tools.map(e => (0,
                        t.jsx)("span", {
                            className: "px-3 py-1.5 rounded-full text-xs font-semibold",
                            style: {
                                background: s,
                                color: "#0A0A0A"
                            },
                            children: e
                        }, e))
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "md:col-span-2 flex flex-col items-center justify-center",
                    children: (0,
                    t.jsx)(x, {
                        service: e
                    })
                })]
            })]
        })
    }
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null)
          , l = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".services-header", {
                    y: 32,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 78%",
                        once: !0
                    }
                });
                let t = r.default.utils.toArray(".service-card-shell");
                t.forEach( (e, t) => {
                    (r.default.set(e, {
                        transformOrigin: "top center",
                        force3D: !0,
                        zIndex: t + 1
                    }),
                    0 === t) ? r.default.set(e, {
                        yPercent: 0,
                        y: 0,
                        scale: 1,
                        rotateX: 0
                    }) : r.default.set(e, {
                        yPercent: 115,
                        y: 0,
                        scale: 1,
                        rotateX: 0
                    })
                }
                );
                let a = r.default.timeline({
                    defaults: {
                        ease: "power2.inOut",
                        duration: 1
                    },
                    scrollTrigger: {
                        trigger: l.current,
                        start: "top top+=110",
                        end: () => `+=${Math.max(1, t.length - 1) * window.innerHeight * .65}`,
                        scrub: .8,
                        invalidateOnRefresh: !0
                    }
                });
                t.slice(1).forEach( (e, r) => {
                    let l = t[r];
                    l && a.to(l, {
                        scale: .97,
                        y: -16
                    }, r),
                    a.to(e, {
                        yPercent: 0,
                        y: 0,
                        scale: 1
                    }, r)
                }
                )
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsxs)("section", {
            ref: e,
            id: "services",
            style: {
                background: "#0A0A0A"
            },
            children: [(0,
            t.jsxs)("div", {
                className: "services-header text-center pt-24 pb-10 px-6 opacity-0",
                children: [(0,
                t.jsx)("p", {
                    className: "script text-xl md:text-2xl mb-3",
                    style: {
                        color: "#4FFFB0"
                    },
                    children: "Services"
                }), (0,
                t.jsx)("h2", {
                    className: "heading text-3xl md:text-4xl",
                    style: {
                        color: "#fff"
                    },
                    children: "What I Do Best"
                })]
            }), (0,
            t.jsx)("div", {
                ref: l,
                className: "max-w-6xl mx-auto px-4 md:px-6 pb-24 relative",
                style: {
                    minHeight: `calc(${72 * p.length}vh)`
                },
                children: (0,
                t.jsx)("div", {
                    className: "sticky",
                    style: {
                        top: "110px",
                        height: "72vh"
                    },
                    children: (0,
                    t.jsx)("div", {
                        className: "relative h-full overflow-hidden",
                        children: p.map( (e, a) => (0,
                        t.jsx)("div", {
                            className: "service-card-shell absolute inset-0",
                            style: {
                                zIndex: a + 1
                            },
                            children: (0,
                            t.jsx)(g, {
                                service: e
                            })
                        }, e.num))
                    })
                })
            })]
        })
    }
    ])
}
, 747940, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495);
    r.default.registerPlugin(l.ScrollTrigger);
    let s = [{
        num: "01",
        title: "Research First",
        subtitle: "Data over assumptions",
        desc: "Every project starts with understanding the market, the audience, and the real problem. I dig into data, audit what exists, and identify the highest-impact opportunities before writing a single line of code or launching a single ad.",
        highlights: ["Market & competitor analysis", "Technical audits", "Opportunity mapping"]
    }, {
        num: "02",
        title: "Think in Systems",
        subtitle: "Strategy meets architecture",
        desc: "I don't work in silos. Marketing, product, and technology are one connected system. I design strategies where every piece, from the ad copy to the database schema, works together toward the same goal.",
        highlights: ["Cross-functional planning", "KPI-driven roadmaps", "Scalable architecture"]
    }, {
        num: "03",
        title: "Ship & Iterate",
        subtitle: "Speed with precision",
        desc: "I believe in shipping fast and improving continuously. Whether it's a product launch, a campaign rollout, or a full platform build, I move with urgency, test assumptions early, and refine based on real results.",
        highlights: ["Agile sprints", "Rapid prototyping", "Continuous deployment"]
    }, {
        num: "04",
        title: "Measure Everything",
        subtitle: "Decisions backed by data",
        desc: "Nothing runs without tracking. I set up proper analytics from day one, build dashboards that surface what matters, and use performance data to drive every optimization and strategic decision.",
        highlights: ["Full-funnel analytics", "Performance dashboards", "Data-driven optimization"]
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null)
          , l = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".hiw-header", {
                    y: 32,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 78%",
                        once: !0
                    }
                }),
                l.current && r.default.fromTo(l.current, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        scrub: .5
                    }
                }),
                r.default.utils.toArray(".hiw-step").forEach(e => {
                    r.default.fromTo(e, {
                        y: 40,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: .8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 85%",
                            once: !0
                        }
                    })
                }
                ),
                r.default.utils.toArray(".hiw-num").forEach(e => {
                    r.default.fromTo(e, {
                        scale: .8,
                        opacity: 0
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: .6,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 85%",
                            once: !0
                        }
                    })
                }
                ),
                r.default.utils.toArray(".hiw-pills").forEach(e => {
                    r.default.fromTo(e.children, {
                        x: -20,
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: .5,
                        stagger: .08,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 88%",
                            once: !0
                        }
                    })
                }
                )
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsxs)("section", {
            ref: e,
            id: "how-i-work",
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 24px"
            },
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }
            }), (0,
            t.jsx)("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]",
                style: {
                    background: "radial-gradient(circle, #4FFFB0 0%, transparent 70%)"
                }
            }), (0,
            t.jsxs)("div", {
                className: "max-w-5xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "hiw-header opacity-0 text-center mb-20",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Approach"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-5xl",
                        style: {
                            color: "#fff"
                        },
                        children: "How I Work"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "relative",
                    children: [(0,
                    t.jsx)("div", {
                        className: "hidden md:block absolute top-0 bottom-0 w-[2px]",
                        style: {
                            left: "156px",
                            background: "rgba(79,255,176,0.06)"
                        }
                    }), (0,
                    t.jsx)("div", {
                        ref: l,
                        className: "hidden md:block absolute top-0 bottom-0 w-[2px] origin-top",
                        style: {
                            left: "156px",
                            background: "linear-gradient(to bottom, #4FFFB0, rgba(79,255,176,0.15))"
                        }
                    }), (0,
                    t.jsx)("div", {
                        className: "flex flex-col",
                        children: s.map( (e, a) => (0,
                        t.jsx)("div", {
                            className: "hiw-step opacity-0 group",
                            children: (0,
                            t.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12 items-start py-12 md:py-16 relative",
                                style: {
                                    borderBottom: a < s.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none"
                                },
                                children: [(0,
                                t.jsx)("div", {
                                    className: "absolute -inset-x-6 inset-y-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                                    style: {
                                        background: "radial-gradient(ellipse at 20% 50%, rgba(79,255,176,0.03), transparent 70%)"
                                    }
                                }), (0,
                                t.jsx)("div", {
                                    className: "relative z-10",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "hiw-num flex items-center gap-4 md:flex-col md:items-start md:gap-2",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "heading text-6xl md:text-[88px]",
                                            style: {
                                                background: "linear-gradient(180deg, #4FFFB0 0%, rgba(79,255,176,0.4) 100%)",
                                                WebkitBackgroundClip: "text",
                                                backgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                lineHeight: 1.3
                                            },
                                            children: e.num
                                        }), (0,
                                        t.jsxs)("div", {
                                            className: "hidden md:block absolute",
                                            style: {
                                                left: "150px",
                                                top: "28px"
                                            },
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "w-3 h-3 rounded-full relative",
                                                style: {
                                                    background: "#4FFFB0",
                                                    boxShadow: "0 0 12px rgba(79,255,176,0.5)"
                                                }
                                            }), (0,
                                            t.jsx)("div", {
                                                className: "absolute inset-0 w-3 h-3 rounded-full animate-ping",
                                                style: {
                                                    background: "#4FFFB0",
                                                    opacity: .2,
                                                    animationDuration: `${3 + a}s`
                                                }
                                            })]
                                        })]
                                    })
                                }), (0,
                                t.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [(0,
                                    t.jsx)("h3", {
                                        className: "heading text-2xl md:text-4xl mb-2 transition-colors duration-300 group-hover:text-[#4FFFB0]",
                                        style: {
                                            color: "#fff"
                                        },
                                        children: e.title
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-xs font-semibold uppercase tracking-wider mb-5",
                                        style: {
                                            color: "rgba(79,255,176,0.6)"
                                        },
                                        children: e.subtitle
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-sm md:text-base leading-relaxed mb-6 max-w-xl",
                                        style: {
                                            color: "rgba(255,255,255,0.55)"
                                        },
                                        children: e.desc
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "hiw-pills flex flex-wrap gap-2",
                                        children: e.highlights.map(e => (0,
                                        t.jsx)("span", {
                                            className: "px-4 py-2 rounded-full text-[11px] font-bold transition-all duration-300 hover:bg-[rgba(79,255,176,0.15)] hover:border-[rgba(79,255,176,0.3)]",
                                            style: {
                                                background: "rgba(79,255,176,0.06)",
                                                color: "#4FFFB0",
                                                border: "1px solid rgba(79,255,176,0.12)"
                                            },
                                            children: e
                                        }, e))
                                    })]
                                })]
                            })
                        }, e.num))
                    })]
                })]
            })]
        })
    }
    ])
}
, 648005, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(778917)
      , o = e.i(115057);
    r.default.registerPlugin(l.ScrollTrigger);
    let i = {
        Flutter: {
            icon: "/ext/flutter.svg",
            color: "#02569B"
        },
        AI: {
            icon: "/ext/openai.png",
            color: "#10A37F"
        },
        Payment: {
            icon: "/ext/visa-logo.png",
            color: "#1A1F71"
        },
        Firebase: {
            icon: "/ext/firebase.svg",
            color: "#FFCA28"
        },
        Events: {
            icon: "/ext/google.svg",
            color: "#4285F4"
        },
        "Google Ads": {
            icon: "/ext/google-ads-icon.png",
            color: "#4285F4"
        },
        Strategy: {
            icon: "/ext/trello.svg",
            color: "#0079BF"
        },
        WordPress: {
            icon: "/ext/wordpress.svg",
            color: "#21759B"
        },
        SEO: {
            icon: "/ext/semrush.png",
            color: "#FF642D"
        },
        GA4: {
            icon: "/ext/gtm.svg",
            color: "#4285F4"
        },
        React: {
            icon: "/ext/react.svg",
            color: "#61DAFB"
        },
        "Next.js": {
            icon: "/ext/nextjs.svg",
            color: "#ffffff"
        },
        Booking: {
            icon: "/ext/flaticon-seo.png",
            color: "#fff"
        },
        "SEO Strategy": {
            icon: "/ext/semrush.png",
            color: "#FF642D"
        },
        "Real Estate": {
            icon: "/ext/google-ads-icon.png",
            color: "#4285F4"
        },
        Content: {
            icon: "/ext/flaticon-social.png",
            color: "#fff"
        },
        Analytics: {
            icon: "/ext/google-analytics.png",
            color: "#E37400"
        },
        "UX Research": {
            icon: "/ext/figma.svg",
            color: "#F24E1E"
        },
        "E-commerce": {
            icon: "/ext/flaticon-target.png",
            color: "#4285F4"
        },
        Optimization: {
            icon: "/ext/gsc.png",
            color: "#4285F4"
        },
        "Market Research": {
            icon: "/ext/google.svg",
            color: "#4285F4"
        },
        "UX Strategy": {
            icon: "/ext/figma.svg",
            color: "#A259FF"
        },
        "Growth Planning": {
            icon: "/ext/trello.svg",
            color: "#0079BF"
        },
        Hospitality: {
            icon: "/ext/flaticon-photo.png",
            color: "#FF9800"
        }
    }
      , n = {
        KSA: {
            flag: "🇸🇦",
            name: "Saudi Arabia"
        },
        UAE: {
            flag: "🇦🇪",
            name: "UAE"
        },
        UK: {
            flag: "🇬🇧",
            name: "United Kingdom"
        }
    }
      , c = [{
        category: "Strategy & UX",
        title: "Saudi Arabian Airlines",
        client: "Saudia · Saudi Arabia",
        year: "2023",
        country: "KSA",
        logo: "/ext/saudia.svg",
        logoSize: "65px",
        desc: "Conducted comprehensive competitor analysis, SWOT assessment, and user experience evaluation for Saudi Arabian Airlines' official website. Delivered strategic insights on key international flight routes and UX improvement recommendations.",
        results: ["Competitor & SWOT analysis", "UX audit for official website", "Flight route keyword gap analysis"],
        tags: ["UX Research", "SEO Strategy", "Analytics", "Market Research"],
        accent: "#4FFFB0",
        link: null,
        image: "/ext/saudia-plane.png"
    }, {
        category: "UX & Growth",
        title: "QNB · Qatar National Bank",
        client: "QNB Group · Qatar",
        year: "2023",
        country: "UAE",
        logo: "/logos/qnb.png",
        logoSize: "35px",
        desc: "User experience analysis and optimization recommendations for QNB's official mobile banking app. Focused on simplifying user journeys, reducing friction points, and increasing lead generation to drive higher app adoption and engagement.",
        results: ["UX audit for mobile app", "Lead generation strategy", "User journey optimization"],
        tags: ["UX Research", "Analytics", "Optimization", "Market Research"],
        accent: "#4FFFB0",
        link: null,
        image: "/projects/qnb.webp"
    }, {
        category: "UX Optimization",
        title: "Chelsea FC Store",
        client: "Chelsea Football Club · UK",
        year: "2023",
        country: "UK",
        logo: "/logos/chelsea.png",
        logoNoFilter: !0,
        desc: "UX optimization recommendations for the official Chelsea FC online merchandise store. Analyzed user journeys and provided actionable improvements for conversion optimization.",
        results: ["UX audit", "Conversion optimization", "Global brand"],
        tags: ["UX Research", "E-commerce", "Optimization", "Analytics", "GA4"],
        accent: "#4FFFB0",
        link: "https://store.chelseafc.com/en/",
        image: "/projects/chealse.webp"
    }, {
        category: "Real Estate SEO",
        title: "Mohammed BinGhatti",
        client: "BinGhatti Investments · Dubai",
        year: "2024",
        country: "UAE",
        logo: "/ext/binghatti-white.png",
        desc: "SEO strategy and digital presence management for one of Dubai's leading luxury real estate developers. Increased rankings for high-value property keywords across the UAE market.",
        results: ["Luxury real estate SEO", "UAE market reach", "High-value keywords"],
        tags: ["SEO Strategy", "GA4", "Content", "Analytics"],
        accent: "#4FFFB0",
        link: "https://www.binghatti.com/en/",
        image: "/projects/binghatti.webp"
    }, {
        category: "Event Strategy",
        title: "Mobile Developers Week",
        client: "Abu Dhabi Energy Center",
        year: "2025",
        country: "UAE",
        logo: "/ext/mdw.png",
        desc: "Served as digital strategy consultant for this landmark international tech conference at Abu Dhabi Energy Center, unifying droidcon and Swift Heroes under one roof for the first time. Consulted on ticket sales growth campaigns, audience acquisition, and full digital marketing strategy contributing to the commercial success of one of the region's biggest tech events.",
        results: ["3,000+ attendees", "60+ global speakers", "Backed by Abu Dhabi Bureau"],
        tags: ["Events", "Google Ads", "Strategy"],
        accent: "#4FFFB0",
        link: "https://mobiledevelopersweek.com/",
        image: "/projects/mdw.webp"
    }, {
        category: "AI Platform",
        title: "Omnis Media AI",
        client: "Omnis Media · Dubai",
        year: "2026",
        country: "UAE",
        logo: "/ext/omnes.svg",
        desc: "Led development of an AI-powered digital media platform for MENA's MarTech innovation leader, organizer of Mobile Developers Week. Built with React, Next.js, and Firebase featuring intelligent automation, data pipelines, real-time analytics dashboards, and AI-driven content workflows. Integrated APIs, payment gateways, and automation tools.",
        results: ["AI-powered platform", "MarTech innovation", "Full-stack delivery"],
        tags: ["React", "Next.js", "Firebase", "AI", "Analytics", "Optimization"],
        accent: "#4FFFB0",
        link: "https://arab-marketing-net-web-app.web.app/",
        image: "/projects/omnis.webp"
    }, {
        category: "Mobile App",
        title: "Maasob Al-Sultan App",
        client: "Restaurant Chain · Jeddah",
        year: "2026",
        country: "KSA",
        logo: "/ext/masoub.png",
        desc: "End-to-end Flutter mobile app for a leading Jeddah restaurant chain. Built AI-powered chatbot for customer support, customer loyalty program, multi-branch order management across 5 locations, real-time performance dashboards for management, and fully integrated payment gateways. Designed, developed, and shipped to both stores in under one month.",
        results: ["Shipped in < 1 month", "5 branches connected", "Live on App Store & Google Play"],
        tags: ["Flutter", "AI", "Payment", "Firebase", "Analytics"],
        accent: "#4FFFB0",
        link: null,
        image: "/projects/maasob.webp",
        appStore: "https://apps.apple.com/ca/app/%D9%85%D8%B9%D8%B5%D9%88%D8%A8-%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86/id6757263587",
        playStore: "https://play.google.com/store/apps/details?id=com.masoubalsultan.app"
    }, {
        category: "SEO & Web",
        title: "Finance & Business UAE",
        client: "UAE Editorial Platform",
        year: "2025",
        country: "UAE",
        logo: "/ext/finance-business.png",
        desc: "Built and managed the complete digital presence from scratch. Website development, comprehensive SEO strategy (On-Page, Off-Page, Technical), analytics integration, and content strategy. Secured top-10 Google rankings for competitive finance keywords within just 8 months of launch. Partners include Mohammed BinGhatti and other major UAE brands.",
        results: ["Top 10 in 8 months", "Full digital ecosystem", "Major brand partners"],
        tags: ["WordPress", "SEO", "GA4", "Analytics", "Optimization", "SEO Strategy"],
        accent: "#4FFFB0",
        link: "https://financebusinessuae.com",
        image: "/projects/fnb.webp"
    }, {
        category: "Healthcare",
        title: "RM Clinic · Mecca",
        client: "Medical Clinic · KSA",
        year: "2024",
        country: "KSA",
        logo: "/ext/rmclinic.png",
        desc: "Designed and developed a complete medical platform with integrated online booking system, payment gateways, and patient management. Implemented full SEO strategy driving local patient acquisition in Mecca. Managed Google Ads and Meta Ads campaigns for the clinic.",
        results: ["Online booking & payment", "Local SEO strategy", "Paid campaigns"],
        tags: ["WordPress", "Booking", "Payment", "Optimization", "Analytics", "GA4", "SEO"],
        accent: "#4FFFB0",
        link: "https://rmclinic.sa",
        image: "/projects/rmclinic.webp"
    }, {
        category: "Hospitality & Strategy",
        title: "Wejhat × Kadana Partnership",
        client: "Wejhat Hospitality · Mecca, KSA",
        year: "2024",
        country: "KSA",
        logo: "/1.svg",
        desc: "Led market research and strategic planning for Wejhat, a premium hospitality and hotel management company in Mecca, during their high-profile partnership with Kadana, one of Saudi Arabia's largest Hajj and Umrah service operators. Conducted comprehensive market analysis, UX improvement strategy for their digital platforms, and developed a full expansion and growth roadmap to scale operations across the holy city.",
        results: ["Kadana partnership", "Market research & UX", "Expansion roadmap"],
        tags: ["Market Research", "UX Strategy", "Growth Planning", "Hospitality"],
        accent: "#4FFFB0",
        link: "https://kidana.com.sa/",
        image: "/ext/ghrannews.jpg"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".proj-header", {
                    y: 30,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 80%"
                    }
                }),
                r.default.utils.toArray(".proj-item").forEach(e => {
                    r.default.fromTo(e, {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: .7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 88%"
                        }
                    })
                }
                )
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsx)("section", {
            ref: e,
            id: "projects",
            style: {
                background: "#0A0A0A",
                padding: "100px 0"
            },
            children: (0,
            t.jsxs)("div", {
                className: "max-w-[1400px] mx-auto px-6",
                children: [(0,
                t.jsxs)("div", {
                    className: "proj-header opacity-0 text-center mb-14",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Impact"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-4xl",
                        style: {
                            color: "#fff"
                        },
                        children: "Featured Projects"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "flex flex-col gap-6",
                    children: c.map( (e, a) => {
                        let r = a % 2 == 0
                          , l = "#0A0A0A"
                          , o = r ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.45)"
                          , c = r ? "rgba(0,0,0,0.08)" : "#F4F4F5"
                          , d = r ? "rgba(0,0,0,0.1)" : "#E4E4E7"
                          , p = n[e.country];
                        return (0,
                        t.jsx)("div", {
                            className: "proj-item opacity-0 rounded-[28px] overflow-hidden",
                            style: {
                                background: r ? "#4FFFB0" : "#fff"
                            },
                            children: (0,
                            t.jsxs)("div", {
                                className: `flex flex-col ${a % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                                style: {
                                    minHeight: "500px"
                                },
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "md:w-[55%] flex-shrink-0 relative overflow-hidden",
                                    style: {
                                        minHeight: "500px",
                                        background: "#161616"
                                    },
                                    children: [e.image ? (0,
                                    t.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                        className: "absolute inset-0 w-full h-full object-cover object-center"
                                    }) : (0,
                                    t.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center"
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-bold",
                                        style: {
                                            background: "rgba(0,0,0,0.5)",
                                            backdropFilter: "blur(8px)",
                                            color: "#4FFFB0"
                                        },
                                        children: e.year
                                    }), p && (0,
                                    t.jsxs)("div", {
                                        className: "absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold",
                                        style: {
                                            background: "rgba(0,0,0,0.5)",
                                            backdropFilter: "blur(8px)",
                                            color: "#fff"
                                        },
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "text-base",
                                            children: p.flag
                                        }), p.name]
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "absolute bottom-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-semibold",
                                        style: {
                                            background: r ? "#fff" : "#4FFFB0",
                                            color: "#0A0A0A"
                                        },
                                        children: e.category
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "flex-1 p-8 md:p-10 flex flex-col justify-between",
                                    style: {
                                        color: l
                                    },
                                    children: [(0,
                                    t.jsxs)("div", {
                                        children: [e.logo && (0,
                                        t.jsx)("img", {
                                            src: e.logo,
                                            alt: "",
                                            className: "mb-3 object-contain",
                                            style: {
                                                height: e.logoSize || "50px",
                                                width: "auto",
                                                maxWidth: "160px",
                                                filter: e.logoNoFilter ? "none" : "brightness(0)"
                                            }
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-xs mb-2",
                                            style: {
                                                color: o
                                            },
                                            children: e.client
                                        }), (0,
                                        t.jsx)("h3", {
                                            className: "heading text-2xl md:text-3xl mb-4",
                                            style: {
                                                color: l
                                            },
                                            children: e.title
                                        }), (0,
                                        t.jsx)("p", {
                                            className: "text-sm leading-relaxed mb-6",
                                            style: {
                                                color: o
                                            },
                                            children: e.desc
                                        }), (0,
                                        t.jsx)("div", {
                                            className: "flex flex-wrap gap-2 mb-6",
                                            children: e.results.map(e => (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center gap-2 px-3 py-2 rounded-xl",
                                                style: {
                                                    background: c,
                                                    border: `1px solid ${d}`
                                                },
                                                children: [(0,
                                                t.jsx)("div", {
                                                    className: "w-1.5 h-1.5 rounded-full",
                                                    style: {
                                                        background: r ? "#0A0A0A" : "#4FFFB0"
                                                    }
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "text-xs font-medium",
                                                    style: {
                                                        color: l
                                                    },
                                                    children: e
                                                })]
                                            }, e))
                                        }), (0,
                                        t.jsx)("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: e.tags.map(e => {
                                                let a = i[e];
                                                return (0,
                                                t.jsxs)("div", {
                                                    className: "flex flex-col items-center gap-1.5",
                                                    children: [(0,
                                                    t.jsx)("div", {
                                                        className: "w-9 h-9 rounded-lg flex items-center justify-center",
                                                        style: {
                                                            background: "#fff",
                                                            border: "1px solid #e0e0e0"
                                                        },
                                                        children: a ? (0,
                                                        t.jsx)("img", {
                                                            src: a.icon,
                                                            alt: e,
                                                            width: 20,
                                                            height: 20
                                                        }) : (0,
                                                        t.jsx)("span", {
                                                            className: "text-xs font-bold",
                                                            style: {
                                                                color: "#4FFFB0"
                                                            },
                                                            children: e[0]
                                                        })
                                                    }), (0,
                                                    t.jsx)("span", {
                                                        className: "text-[10px] font-medium",
                                                        style: {
                                                            color: l
                                                        },
                                                        children: e
                                                    })]
                                                }, e)
                                            }
                                            )
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-wrap items-center gap-3 mt-6",
                                        children: [e.link && (0,
                                        t.jsxs)("a", {
                                            href: e.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-2 h-10 px-6 rounded-full text-xs font-bold transition-all duration-200 hover:-translate-y-0.5",
                                            style: {
                                                background: r ? "#fff" : "#4FFFB0",
                                                color: "#0A0A0A",
                                                border: "2px solid #0A0A0A",
                                                boxShadow: "3px 3px 0px 0px #0A0A0A"
                                            },
                                            children: ["Visit Live ", (0,
                                            t.jsx)(s.ExternalLink, {
                                                size: 12
                                            })]
                                        }), e.playStore && (0,
                                        t.jsxs)("a", {
                                            href: e.playStore,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-3 h-11 px-4 rounded-xl transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "#000",
                                                border: "1px solid #333"
                                            },
                                            children: [(0,
                                            t.jsxs)("svg", {
                                                width: "20",
                                                height: "22",
                                                viewBox: "0 0 512 512",
                                                children: [(0,
                                                t.jsx)("path", {
                                                    fill: "#2196F3",
                                                    d: "M48 59.49v393a17 17 0 0 0 27.24 13.6l383-196.49a17 17 0 0 0 0-27.21L75.24 45.89A17 17 0 0 0 48 59.49z"
                                                }), (0,
                                                t.jsx)("path", {
                                                    fill: "#4CAF50",
                                                    d: "M48 59.49v393l240-196.5z"
                                                }), (0,
                                                t.jsx)("path", {
                                                    fill: "#FFC107",
                                                    d: "M288 256l-240 196.5 383-196.5z"
                                                }), (0,
                                                t.jsx)("path", {
                                                    fill: "#F44336",
                                                    d: "M288 256L48 59.49l240 196.5z"
                                                })]
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "text-left",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "block text-[8px] leading-none",
                                                    style: {
                                                        color: "#aaa"
                                                    },
                                                    children: "GET IT ON"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "block text-sm font-semibold leading-tight",
                                                    style: {
                                                        color: "#fff"
                                                    },
                                                    children: "Google Play"
                                                })]
                                            })]
                                        }), e.appStore && (0,
                                        t.jsxs)("a", {
                                            href: e.appStore,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "inline-flex items-center gap-3 h-11 px-4 rounded-xl transition-all hover:-translate-y-0.5",
                                            style: {
                                                background: "#000",
                                                border: "1px solid #333"
                                            },
                                            children: [(0,
                                            t.jsx)("svg", {
                                                width: "18",
                                                height: "22",
                                                viewBox: "0 0 384 512",
                                                fill: "#fff",
                                                children: (0,
                                                t.jsx)("path", {
                                                    d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                                })
                                            }), (0,
                                            t.jsxs)("div", {
                                                className: "text-left",
                                                children: [(0,
                                                t.jsx)("span", {
                                                    className: "block text-[8px] leading-none",
                                                    style: {
                                                        color: "#aaa"
                                                    },
                                                    children: "Download on the"
                                                }), (0,
                                                t.jsx)("span", {
                                                    className: "block text-sm font-semibold leading-tight",
                                                    style: {
                                                        color: "#fff"
                                                    },
                                                    children: "App Store"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        }, e.title)
                    }
                    )
                }), (0,
                t.jsx)("div", {
                    className: "text-center mt-14",
                    children: (0,
                    t.jsxs)("a", {
                        href: "#contact",
                        className: "inline-flex items-center gap-2 h-12 px-8 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-0.5",
                        style: {
                            background: "#4FFFB0",
                            color: "#0A0A0A",
                            border: "2px solid #0A0A0A",
                            boxShadow: "4px 4px 0px 0px #0A0A0A"
                        },
                        children: ["Start a Project ", (0,
                        t.jsx)(o.ArrowUpRight, {
                            size: 16
                        })]
                    })
                })]
            })
        })
    }
    ])
}
, 607429, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(87316)
      , o = e.i(761911)
      , i = e.i(565157)
      , n = e.i(212426);
    r.default.registerPlugin(l.ScrollTrigger);
    let c = [{
        value: 5,
        suffix: "+",
        label: "Years of Experience",
        prefix: "",
        icon: s.Calendar,
        description: "Across 4 markets"
    }, {
        value: 3e3,
        suffix: "+",
        label: "Attendees Reached",
        prefix: "",
        icon: o.Users,
        description: "At live events"
    }, {
        value: 4,
        suffix: "",
        label: "Countries Served",
        prefix: "",
        icon: i.Globe2,
        description: "EG · QA · SA · UAE"
    }, {
        value: 15,
        suffix: "K+",
        label: "Ad Budget Managed",
        prefix: "$",
        icon: n.DollarSign,
        description: "Monthly spend"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                let t = e.current?.querySelectorAll(".stat-num");
                t && (t.forEach( (t, a) => {
                    let l = c[a].value
                      , s = {
                        val: 0
                    };
                    r.default.to(s, {
                        val: l,
                        duration: 2.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: e.current,
                            start: "top 80%"
                        },
                        onUpdate: () => {
                            let e = l >= 100 ? Math.round(s.val).toLocaleString() : Math.round(s.val);
                            t.textContent = `${c[a].prefix}${e}${c[a].suffix}`
                        }
                    })
                }
                ),
                r.default.fromTo(".stat-card", {
                    y: 60,
                    opacity: 0,
                    scale: .9
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: .8,
                    stagger: .12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 80%"
                    }
                }),
                r.default.fromTo(".stat-ring-fill", {
                    strokeDashoffset: 251
                }, {
                    strokeDashoffset: 50,
                    duration: 2.5,
                    stagger: .15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 80%"
                    }
                }))
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsxs)("section", {
            ref: e,
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 24px"
            },
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }
            }), (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Impact"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-4xl",
                        style: {
                            color: "#fff"
                        },
                        children: "By The Numbers"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6",
                    children: c.map( ({label: e, prefix: a, suffix: r, icon: l, description: s}, o) => (0,
                    t.jsxs)("div", {
                        className: "stat-card opacity-0 relative group",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute -inset-[1px] rounded-[24px] overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-500",
                            children: (0,
                            t.jsx)("div", {
                                className: "absolute inset-[-50%] w-[200%] h-[200%]",
                                style: {
                                    background: "conic-gradient(from 0deg, #4FFFB0, #0A0A0A, #4FFFB0, #0A0A0A, #4FFFB0)",
                                    animation: `spinBorder ${6 + o}s linear infinite`,
                                    transformOrigin: "center center"
                                }
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative rounded-[24px] p-6 md:p-10 flex flex-col items-center text-center h-full overflow-hidden",
                            style: {
                                background: "#111"
                            },
                            children: [(0,
                            t.jsxs)("div", {
                                className: "relative w-16 h-16 mb-8",
                                children: [(0,
                                t.jsxs)("svg", {
                                    className: "absolute inset-0 w-full h-full -rotate-90",
                                    viewBox: "0 0 88 88",
                                    children: [(0,
                                    t.jsx)("circle", {
                                        cx: "44",
                                        cy: "44",
                                        r: "40",
                                        fill: "none",
                                        stroke: "#1a1a1a",
                                        strokeWidth: "3"
                                    }), (0,
                                    t.jsx)("circle", {
                                        className: "stat-ring-fill",
                                        cx: "44",
                                        cy: "44",
                                        r: "40",
                                        fill: "none",
                                        stroke: "#4FFFB0",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        strokeDasharray: "251",
                                        strokeDashoffset: "251"
                                    })]
                                }), (0,
                                t.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: (0,
                                    t.jsx)(l, {
                                        size: 22,
                                        style: {
                                            color: "#4FFFB0"
                                        }
                                    })
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                className: "stat-num heading font-bold mb-3",
                                style: {
                                    fontSize: "clamp(2rem, 4.5vw, 3rem)",
                                    background: "linear-gradient(135deg, #fff 0%, #4FFFB0 100%)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    lineHeight: 1.6,
                                    paddingTop: "0.2em"
                                },
                                children: [a, "0", r]
                            }), (0,
                            t.jsx)("p", {
                                className: "text-sm font-semibold mb-1",
                                style: {
                                    color: "#fff"
                                },
                                children: e
                            }), (0,
                            t.jsx)("p", {
                                className: "text-[11px]",
                                style: {
                                    color: "rgba(255,255,255,0.35)"
                                },
                                children: s
                            })]
                        })]
                    }, o))
                })]
            }), (0,
            t.jsx)("style", {
                children: `
        @keyframes spinBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `
            })]
        })
    }
    ])
}
, 700015, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(346897)
      , o = e.i(87316)
      , i = e.i(25652)
      , n = e.i(972520);
    r.default.registerPlugin(l.ScrollTrigger);
    let c = [{
        role: "Digital Marketing Executive",
        company: "Elite Marketing Services",
        location: "Doha, Qatar",
        flag: "🇶🇦",
        period: "Aug 2025 – Mar 2026",
        type: "Full-time",
        active: !1,
        color: "#FF4D4D",
        description: "Managed and executed digital marketing strategies for a diverse client portfolio across multiple industries in the MENA region.",
        achievements: ["Ran and optimized PPC campaigns across Google Ads, Meta Ads, and TikTok Ads, improving ROAS and reducing CPA", "Conducted technical SEO audits and on-page optimization to improve search rankings and organic visibility", "Built performance reports using GA4 and Google Tag Manager, delivering data-backed strategic recommendations"],
        tools: ["Google Ads", "Meta Ads", "TikTok Ads", "GA4", "GTM", "SEMrush", "Search Console", "WordPress"],
        toolIcons: ["/ext/google-ads-icon.png", "https://cdn.simpleicons.org/meta/0081FB", "https://cdn.simpleicons.org/tiktok/000000", "/ext/google-analytics.png", "/ext/gtm.svg", "/ext/semrush.png", "/ext/gsc.png", "/ext/wordpress.svg"]
    }, {
        role: "Digital Product Manager",
        company: "Omnis Media Group",
        location: "Dubai, UAE",
        flag: "🇦🇪",
        period: "Aug 2025 – Mar 2026",
        type: "Full-time",
        active: !1,
        color: "#FF8C00",
        description: "Key digital strategy consultant for Omnis Media Group, MENA's MarTech innovation leader and organizer of Mobile Developers Week, a landmark international tech conference at Abu Dhabi Energy Center with 3,000+ attendees and 60+ global speakers.",
        achievements: ["Consulted with senior leadership on digital strategy, ticket sales growth, and audience acquisition for MDW 2025", "Led development of AI-powered platforms using React, Next.js, and Firebase, from strategy to launch", "Drove growth through performance marketing, technical SEO, and UX optimization across all managed platforms"],
        tools: ["React", "Next.js", "Firebase", "AI", "Google Ads", "Search Console", "GA4"],
        toolIcons: ["/ext/react.svg", "/ext/nextjs.svg", "/ext/firebase.svg", "/ext/openai.png", "/ext/google-ads-icon.png", "/ext/gsc.png", "/ext/google-analytics.png"]
    }, {
        role: "Digital Marketing & Web Projects Specialist",
        company: "Ezz Al-Afaq Company",
        location: "Saudi Arabia",
        flag: "🇸🇦",
        period: "Jan 2024 – Jul 2025",
        type: "Full-time",
        active: !1,
        color: "#E67E22",
        description: "Spearheaded digital marketing campaigns, web design, and SEO for multiple high-value client accounts across diverse industries including hospitality, healthcare, and F&B.",
        achievements: ["Developed integrated web systems using WordPress and custom APIs, enhancing functionality and user engagement", "Managed Google Ads, Meta Ads, and TikTok Ads campaigns to drive measurable ROI for clients", "Built high-converting landing pages optimized for lead generation and CPA reduction", "Implemented GA4 and GTM tracking to monitor user behavior and campaign performance"],
        tools: ["Google Ads", "WordPress", "GA4", "GTM", "Meta Ads", "TikTok Ads", "Search Console", "SEMrush"],
        toolIcons: ["/ext/google-ads-icon.png", "/ext/wordpress.svg", "/ext/google-analytics.png", "/ext/gtm.svg", "https://cdn.simpleicons.org/meta/0081FB", "https://cdn.simpleicons.org/tiktok/000000", "/ext/gsc.png", "/ext/semrush.png"]
    }, {
        role: "SEO & Web Development Lead",
        company: "Finance & Business Magazine",
        location: "UAE (Remote)",
        flag: "🇦🇪",
        period: "2024 – Feb 2025",
        type: "Contract",
        active: !1,
        color: "#00BFFF",
        description: "Built and managed the complete digital presence of Finance & Business, a premier UAE editorial platform for business leaders, with partners including Mohammed BinGhatti and major regional brands.",
        achievements: ["Implemented comprehensive SEO strategy (On-Page, Off-Page, Technical). Achieved top-10 Google rankings in 8 months", "Integrated analytics and automation tools to track user behavior and inform editorial decisions", "Managed content strategy driving sustained organic growth for competitive finance keywords"],
        tools: ["WordPress", "SEO", "GA4", "Search Console"],
        toolIcons: ["/ext/wordpress.svg", "/ext/semrush.png", "/ext/google-analytics.png", "/ext/gsc.png"]
    }, {
        role: "Search Engine Optimization Specialist",
        company: "Binghatti Investments",
        location: "UAE (Remote)",
        flag: "🇦🇪",
        period: "Dec 2022 – Aug 2023",
        type: "Contract · 9 Months",
        active: !1,
        color: "#A855F7",
        description: "Collaborated within the SEO team to execute strategies increasing rankings for high-value real estate keywords for one of Dubai's leading luxury real estate developers.",
        achievements: ["Executed SEO strategy increasing rankings for high-value real estate keywords in the UAE market", "Monitored and reported on performance using Google Analytics and Search Console", "Provided strategic insights for continuous refinement of organic search visibility"],
        tools: ["SEO", "GA4", "Search Console", "GTM"],
        toolIcons: ["/ext/semrush.png", "/ext/google-analytics.png", "/ext/gsc.png", "/ext/gtm.svg"]
    }, {
        role: "Digital Strategy Consultant & Full-Stack Developer",
        company: "Freelance",
        location: "Remote · Worldwide",
        flag: "🌍",
        period: "2020 – Present",
        type: "Freelance",
        active: !0,
        color: "#4FFFB0",
        description: "Delivering complete digital solutions across Egypt, Saudi Arabia, UAE, and Oman for clients spanning healthcare, real estate, hospitality, legal, e-commerce, and F&B sectors.",
        achievements: ["Healthcare: Full digital ecosystems for Om Al-Hamam (Riyadh), Obaid Hospital, Al-Ruqi Medical, RM Clinic (Mecca)", "Real Estate: SEO & performance marketing for BinGhatti, Evolution Dubai, Bin Laden UAE", "Mobile: Built Maasob Al-Sultan Flutter app with AI chatbot, 5-branch management, shipped in < 1 month", "Hospitality: Delivered Wejhat MGT platform and multiple GCC service-sector websites", "In Progress: B2B/B2C laundry app, AI-powered educational platform, Masar (personal project, my own product), and RMC nursing training center for student education"],
        tools: ["Flutter", "React", "Next.js", "Firebase", "WordPress", "Google Ads", "Meta Ads", "TikTok Ads", "GA4", "GTM", "SEMrush", "Search Console", "AI"],
        toolIcons: ["/ext/flutter.svg", "/ext/react.svg", "/ext/nextjs.svg", "/ext/firebase.svg", "/ext/wordpress.svg", "/ext/google-ads-icon.png", "https://cdn.simpleicons.org/meta/0081FB", "https://cdn.simpleicons.org/tiktok/000000", "/ext/google-analytics.png", "/ext/gtm.svg", "/ext/semrush.png", "/ext/gsc.png", "/ext/openai.png"]
    }]
      , d = [{
        name: "Ooredoo",
        logo: "/logos/ooredoo.png",
        work: "Technical SEO Audit",
        flag: "🇶🇦"
    }, {
        name: "QNB",
        logo: "/logos/qnb.png",
        work: "UX Analysis",
        flag: "🇶🇦"
    }, {
        name: "Amazon Egypt",
        logo: "/logos/amazon.svg",
        work: "SEO Content Strategy",
        flag: "🇪🇬"
    }, {
        name: "Saudi Arabian Airlines",
        logo: "/ext/saudia.svg",
        work: "Competitor & SWOT Analysis",
        flag: "🇸🇦"
    }, {
        name: "BinGhatti",
        logo: "/logos/binghatti.png",
        work: "SEO & Digital Presence",
        flag: "🇦🇪"
    }, {
        name: "Chelsea FC",
        logo: "/logos/chelsea.png",
        work: "UX Optimization",
        flag: "🇬🇧"
    }, {
        name: "Elite Marketing",
        logo: "/ext/elite-qatar.png",
        work: "Performance Marketing",
        flag: "🇶🇦"
    }, {
        name: "Omnis Media",
        logo: "/ext/omnes.svg",
        work: "AI Platform Development",
        flag: "🇦🇪"
    }, {
        name: "RM Clinic",
        logo: "/ext/rmclinic.png",
        work: "Full Digital Ecosystem",
        flag: "🇸🇦"
    }, {
        name: "Finance & Business",
        logo: "/ext/finance-business.png",
        work: "SEO & Web Platform",
        flag: "🇦🇪"
    }, {
        name: "MDW",
        logo: "/ext/mdw.png",
        work: "Event Digital Strategy",
        flag: "🇦🇪"
    }, {
        name: "Maasob Al-Sultan",
        logo: "/ext/masoub.png",
        work: "Flutter Mobile App",
        flag: "🇸🇦"
    }, {
        name: "CarTech",
        logo: "/logos/cartech.png",
        work: "Digital Marketing",
        flag: "🇪🇬"
    }, {
        name: "Advert on Click",
        logo: "/ext/advertonclick.svg",
        work: "Performance Campaigns",
        flag: "🇪🇬"
    }, {
        name: "Omnes Influencers",
        logo: "/ext/omnes-influencers.svg",
        work: "Influencer Platform",
        flag: "🇦🇪"
    }, {
        name: "Kadana",
        logo: "/1.svg",
        work: "Market Research & Strategy",
        flag: "🇸🇦"
    }];
    function p({exp: e, variant: a}) {
        let r = "white" === a
          , l = "#0A0A0A"
          , c = "#0A0A0A"
          , d = e.color;
        return (0,
        t.jsxs)("div", {
            className: "rounded-[20px] p-6 md:p-7 transition-all duration-300 group",
            style: {
                background: r ? "#fff" : "#4FFFB0",
                border: "none"
            },
            children: [(0,
            t.jsxs)("div", {
                className: "flex items-center gap-2 mb-3 flex-wrap",
                children: [(0,
                t.jsx)("span", {
                    className: "text-xs font-medium",
                    style: {
                        color: c
                    },
                    children: e.company
                }), (0,
                t.jsx)("span", {
                    className: "text-[10px] px-2 py-0.5 rounded-full font-semibold",
                    style: {
                        background: r ? "rgba(0,0,0,0.06)" : "rgba(0,0,0,0.1)",
                        color: l,
                        border: `1px solid ${r ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.15)"}`
                    },
                    children: e.active ? "Current" : e.type
                })]
            }), (0,
            t.jsx)("h3", {
                className: "heading text-xl md:text-2xl mb-2",
                style: {
                    color: l,
                    lineHeight: 1.5
                },
                children: e.role
            }), (0,
            t.jsxs)("div", {
                className: "flex items-center gap-3 mb-4 flex-wrap",
                children: [(0,
                t.jsxs)("span", {
                    className: "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium",
                    style: {
                        background: r ? `${d}15` : "#fff",
                        color: r ? d : "#0A0A0A",
                        border: r ? `1px solid ${d}30` : "1px solid #e0e0e0"
                    },
                    children: [(0,
                    t.jsx)(s.MapPin, {
                        size: 10
                    }), " ", e.location]
                }), (0,
                t.jsxs)("span", {
                    className: "flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium",
                    style: {
                        background: r ? `${d}15` : "#fff",
                        color: r ? d : "#0A0A0A",
                        border: r ? `1px solid ${d}30` : "1px solid #e0e0e0"
                    },
                    children: [(0,
                    t.jsx)(o.Calendar, {
                        size: 10
                    }), " ", e.period]
                })]
            }), (0,
            t.jsx)("p", {
                className: "text-sm leading-relaxed mb-5",
                style: {
                    color: c
                },
                children: e.description
            }), (0,
            t.jsx)("div", {
                className: "flex flex-col gap-2 mb-5",
                children: e.achievements.map( (e, a) => (0,
                t.jsxs)("div", {
                    className: "flex items-start gap-2",
                    children: [(0,
                    t.jsx)(i.TrendingUp, {
                        size: 12,
                        className: "mt-0.5 flex-shrink-0",
                        style: {
                            color: l
                        }
                    }), (0,
                    t.jsx)("span", {
                        className: "text-xs",
                        style: {
                            color: "#0A0A0A"
                        },
                        children: e
                    })]
                }, a))
            }), (0,
            t.jsx)("div", {
                className: "flex items-center gap-3 flex-wrap mb-5",
                children: e.toolIcons.map( (a, r) => (0,
                t.jsxs)("div", {
                    className: "flex flex-col items-center gap-1",
                    children: [(0,
                    t.jsx)("div", {
                        className: "w-7 h-7 rounded-md flex items-center justify-center",
                        style: {
                            background: "#fff",
                            border: "1px solid #e0e0e0"
                        },
                        children: (0,
                        t.jsx)("img", {
                            src: a,
                            alt: e.tools[r],
                            width: 16,
                            height: 16,
                            className: "object-contain"
                        })
                    }), (0,
                    t.jsx)("span", {
                        className: "text-[9px] font-medium",
                        style: {
                            color: c
                        },
                        children: e.tools[r]
                    })]
                }, r))
            }), (0,
            t.jsxs)("a", {
                href: "#contact",
                className: "inline-flex items-center gap-2 h-10 px-6 rounded-full text-xs font-bold transition-all duration-200 hover:-translate-y-0.5",
                style: {
                    background: r ? "#4FFFB0" : "#fff",
                    color: "#0A0A0A",
                    border: "2px solid #0A0A0A",
                    boxShadow: "3px 3px 0px 0px #0A0A0A"
                },
                children: ["Let's Talk ", (0,
                t.jsx)(n.ArrowRight, {
                    size: 13
                })]
            })]
        })
    }
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null)
          , l = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.utils.toArray(".exp-card").forEach(e => {
                    r.default.fromTo(e, {
                        y: 50,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: .8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 88%"
                        }
                    })
                }
                ),
                l.current && r.default.fromTo(l.current, {
                    scaleY: 0
                }, {
                    scaleY: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 70%"
                    }
                });
                let t = e.current?.querySelector(".client-row-1");
                if (t) {
                    let e = t.scrollWidth / 2;
                    r.default.to(t, {
                        x: -e,
                        duration: 30,
                        ease: "none",
                        repeat: -1
                    })
                }
                let a = e.current?.querySelector(".client-row-2");
                if (a) {
                    let e = a.scrollWidth / 2;
                    r.default.set(a, {
                        x: -e
                    }),
                    r.default.to(a, {
                        x: 0,
                        duration: 30,
                        ease: "none",
                        repeat: -1
                    })
                }
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsxs)("section", {
            ref: e,
            id: "experience",
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 24px"
            },
            children: [(0,
            t.jsx)("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]",
                style: {
                    background: "radial-gradient(circle, #4FFFB0 0%, transparent 70%)"
                }
            }), (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center mb-20",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Career Path"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-5xl",
                        style: {
                            color: "#fff"
                        },
                        children: "Where I've Made Impact"
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "relative",
                    children: [(0,
                    t.jsx)("div", {
                        ref: l,
                        className: "hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] origin-top",
                        style: {
                            background: "linear-gradient(to bottom, #4FFFB0, rgba(79,255,176,0.1))"
                        }
                    }), (0,
                    t.jsx)("div", {
                        className: "md:hidden absolute left-5 top-0 bottom-0 w-[2px]",
                        style: {
                            background: "linear-gradient(to bottom, #4FFFB0, rgba(79,255,176,0.1))"
                        }
                    }), (0,
                    t.jsx)("div", {
                        className: "flex flex-col gap-12 md:gap-16",
                        children: c.map( (e, a) => {
                            let r = a % 2 == 0;
                            return (0,
                            t.jsxs)("div", {
                                className: "exp-card opacity-0 relative",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "hidden md:grid grid-cols-[1fr_60px_1fr] items-start",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: r ? "" : "order-3",
                                        children: (0,
                                        t.jsx)(p, {
                                            exp: e,
                                            variant: a % 2 == 0 ? "white" : "green"
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "flex justify-center order-2 pt-6",
                                        children: (0,
                                        t.jsxs)("div", {
                                            className: "relative",
                                            children: [(0,
                                            t.jsx)("div", {
                                                className: "w-5 h-5 rounded-full border-[3px] z-10 relative",
                                                style: {
                                                    background: e.active ? "#4FFFB0" : "#0A0A0A",
                                                    borderColor: "#4FFFB0",
                                                    boxShadow: e.active ? "0 0 20px rgba(79,255,176,0.5)" : "none"
                                                }
                                            }), e.active && (0,
                                            t.jsx)("div", {
                                                className: "absolute inset-0 w-5 h-5 rounded-full animate-ping opacity-30",
                                                style: {
                                                    background: "#4FFFB0"
                                                }
                                            })]
                                        })
                                    }), (0,
                                    t.jsx)("div", {
                                        className: r ? "order-3" : ""
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    className: "md:hidden relative pl-14",
                                    children: [(0,
                                    t.jsx)("div", {
                                        className: "absolute left-[12px] top-6",
                                        children: (0,
                                        t.jsx)("div", {
                                            className: "w-4 h-4 rounded-full border-[2px]",
                                            style: {
                                                background: e.active ? "#4FFFB0" : "#0A0A0A",
                                                borderColor: "#4FFFB0",
                                                boxShadow: e.active ? "0 0 15px rgba(79,255,176,0.4)" : "none"
                                            }
                                        })
                                    }), (0,
                                    t.jsx)(p, {
                                        exp: e,
                                        variant: a % 2 == 0 ? "white" : "green"
                                    })]
                                })]
                            }, a)
                        }
                        )
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "mt-24 -mx-6 px-0",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "text-center mb-10 px-6",
                        children: [(0,
                        t.jsx)("p", {
                            className: "script text-xl md:text-2xl mb-3",
                            style: {
                                color: "#4FFFB0"
                            },
                            children: "Trusted By"
                        }), (0,
                        t.jsx)("h3", {
                            className: "heading text-2xl md:text-3xl",
                            style: {
                                color: "#fff"
                            },
                            children: "Key Client Highlights"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "relative overflow-hidden mb-8",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute left-0 top-0 bottom-0 w-28 z-10",
                            style: {
                                background: "linear-gradient(to right, #0A0A0A, transparent)"
                            }
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute right-0 top-0 bottom-0 w-28 z-10",
                            style: {
                                background: "linear-gradient(to left, #0A0A0A, transparent)"
                            }
                        }), (0,
                        t.jsx)("div", {
                            className: "client-row-1 flex items-center gap-17",
                            style: {
                                width: "max-content"
                            },
                            children: [...d.slice(0, 8), ...d.slice(0, 8)].map( (e, a) => (0,
                            t.jsx)("img", {
                                src: e.logo,
                                alt: e.name,
                                className: "object-contain flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300",
                                style: {
                                    filter: "Chelsea FC" === e.name ? "none" : "brightness(0) invert(1)",
                                    height: "50px",
                                    width: "120px"
                                }
                            }, a))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "relative overflow-hidden",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute left-0 top-0 bottom-0 w-28 z-10",
                            style: {
                                background: "linear-gradient(to right, #0A0A0A, transparent)"
                            }
                        }), (0,
                        t.jsx)("div", {
                            className: "absolute right-0 top-0 bottom-0 w-28 z-10",
                            style: {
                                background: "linear-gradient(to left, #0A0A0A, transparent)"
                            }
                        }), (0,
                        t.jsx)("div", {
                            className: "client-row-2 flex items-center gap-17",
                            style: {
                                width: "max-content"
                            },
                            children: [...d.slice(8), ...d.slice(8)].map( (e, a) => (0,
                            t.jsx)("img", {
                                src: e.logo,
                                alt: e.name,
                                className: "object-contain flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300",
                                style: {
                                    filter: "Chelsea FC" === e.name ? "none" : "brightness(0) invert(1)",
                                    height: "50px",
                                    width: "120px"
                                }
                            }, a))
                        })]
                    })]
                })]
            })]
        })
    }
    ])
}
, 466825, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(778917)
      , o = e.i(269638)
      , i = e.i(503116)
      , n = e.i(32095);
    r.default.registerPlugin(l.ScrollTrigger);
    let c = [{
        title: "Google Analytics 4 (GA4) Certification",
        issuer: "Google Digital Academy (Skillshop)",
        issuerLogo: "/ext/google-analytics.png",
        status: "completed",
        issued: "Jan 2026",
        expires: "Jan 2027",
        credentialId: "173041626",
        credentialUrl: "https://skillshop.credential.net/6e74a492-3eaa-4c04-aa6b-0b43914de8c2#acc.KSvTF42P",
        color: "#E37400",
        description: "Certified in Google Analytics 4. Event-based tracking, reporting, audience building, and data-driven attribution."
    }, {
        title: "AI-Powered Shopping Ads Certification",
        issuer: "Google Digital Academy (Skillshop)",
        issuerLogo: "/ext/google.svg",
        status: "completed",
        issued: "Jul 2025",
        expires: "Jul 2026",
        credentialId: "156676960",
        credentialUrl: "https://skillshop.credential.net/5e70d36f-60e4-491f-a217-536b8fbb169d#acc.twOHon6z",
        color: "#34A853",
        description: "Certified in AI-powered Performance Max and Shopping campaigns. Feed optimization, bidding strategies, and automation."
    }, {
        title: "AI for Business Professionals",
        issuer: "HP LIFE",
        issuerLogo: "/ext/hp-logo.svg",
        status: "completed",
        issued: "Jan 2026",
        expires: null,
        credentialId: "9f360f1d-56e2-42aa-8947-6f6ebd2a0224",
        credentialUrl: "https://www.life-global.org/certificate/9f360f1d-56e2-42aa-8947-6f6ebd2a0224",
        color: "#0096D6",
        badge: "Ambassador Badge Holder",
        description: "AI integration in business operations. Prompt engineering, AI tools evaluation, and strategic implementation for enterprises."
    }, {
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        issuerLogo: "/ext/coursera.png",
        status: "in-progress",
        issued: "Mar 2026",
        expires: null,
        credentialId: null,
        credentialUrl: null,
        color: "#4285F4",
        progress: 0,
        description: "Professional certificate in data analytics. Data cleaning, SQL, R, Tableau, and data visualization. 6-month program starting March 2026."
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        return (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.utils.toArray(".cert-card").forEach(e => {
                    r.default.fromTo(e, {
                        y: 40,
                        opacity: 0,
                        scale: .95
                    }, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: .7,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: e,
                            start: "top 88%"
                        }
                    })
                }
                ),
                r.default.fromTo(".progress-fill", {
                    width: "0%"
                }, {
                    width: "0%",
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".progress-fill",
                        start: "top 88%"
                    }
                })
            }
            , e);
            return () => t.revert()
        }
        , []),
        (0,
        t.jsx)("section", {
            ref: e,
            id: "certifications",
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 24px"
            },
            children: (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Credentials"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-5xl",
                        style: {
                            color: "#fff"
                        },
                        children: "Certifications"
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                    children: c.map( (e, a) => {
                        let r = "in-progress" === e.status
                          , l = a % 2 == 0 ? "white" : "green";
                        return (0,
                        t.jsxs)("div", {
                            className: `cert-card opacity-0 rounded-[24px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${a === c.length - 1 && c.length % 2 != 0 ? "md:col-span-2 md:max-w-[calc(50%-10px)] md:mx-auto" : ""}`,
                            style: {
                                background: "white" === l ? "#fff" : "#4FFFB0",
                                minHeight: "320px"
                            },
                            children: [(0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "flex items-center justify-between mb-5",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center gap-3",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                            style: {
                                                background: "#fff",
                                                border: "1px solid #e0e0e0"
                                            },
                                            children: (0,
                                            t.jsx)("img", {
                                                src: e.issuerLogo,
                                                alt: e.issuer,
                                                width: 22,
                                                height: 22,
                                                className: "object-contain"
                                            })
                                        }), (0,
                                        t.jsxs)("div", {
                                            children: [(0,
                                            t.jsx)("p", {
                                                className: "text-xs font-semibold",
                                                style: {
                                                    color: "#0A0A0A"
                                                },
                                                children: e.issuer
                                            }), e.expires && (0,
                                            t.jsxs)("p", {
                                                className: "text-[10px]",
                                                style: {
                                                    color: "rgba(0,0,0,0.4)"
                                                },
                                                children: ["Valid until ", e.expires]
                                            })]
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
                                        style: {
                                            background: "#fff",
                                            border: "1px solid #e0e0e0"
                                        },
                                        children: [r ? (0,
                                        t.jsx)(i.Clock, {
                                            size: 11,
                                            color: "#CC8800"
                                        }) : (0,
                                        t.jsx)(o.CheckCircle, {
                                            size: 11,
                                            color: "#0A0A0A"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "text-[10px] font-bold",
                                            style: {
                                                color: r ? "#CC8800" : "#0A0A0A"
                                            },
                                            children: r ? "In Progress" : "Verified"
                                        })]
                                    })]
                                }), (0,
                                t.jsx)("h3", {
                                    className: "heading text-xl md:text-2xl mb-3",
                                    style: {
                                        color: "#0A0A0A",
                                        lineHeight: 1.5
                                    },
                                    children: e.title
                                }), e.badge && (0,
                                t.jsxs)("div", {
                                    className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3",
                                    style: {
                                        background: "rgba(0,0,0,0.08)",
                                        border: "1px solid rgba(0,0,0,0.1)"
                                    },
                                    children: [(0,
                                    t.jsx)("span", {
                                        className: "text-sm",
                                        children: "🏅"
                                    }), (0,
                                    t.jsx)("span", {
                                        className: "text-[11px] font-bold",
                                        style: {
                                            color: "#0A0A0A"
                                        },
                                        children: e.badge
                                    })]
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-sm leading-relaxed mb-4",
                                    style: {
                                        color: "rgba(0,0,0,0.6)"
                                    },
                                    children: e.description
                                }), r && (0,
                                t.jsxs)("div", {
                                    className: "mb-5",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        className: "flex items-center justify-between mb-2",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "text-[10px] font-bold",
                                            style: {
                                                color: "#0A0A0A"
                                            },
                                            children: "Starting March 2026"
                                        }), (0,
                                        t.jsx)("span", {
                                            className: "text-[10px] font-bold px-2 py-0.5 rounded-full",
                                            style: {
                                                background: "#fff",
                                                border: "1px solid #e0e0e0",
                                                color: "#CC8800"
                                            },
                                            children: "0%"
                                        })]
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "w-full h-2 rounded-full overflow-hidden",
                                        style: {
                                            background: "rgba(0,0,0,0.1)"
                                        },
                                        children: (0,
                                        t.jsx)("div", {
                                            className: "progress-fill h-full rounded-full",
                                            style: {
                                                width: "0%",
                                                background: "#CC8800"
                                            }
                                        })
                                    }), (0,
                                    t.jsxs)("div", {
                                        className: "flex items-center gap-2 flex-wrap mt-3",
                                        children: [(0,
                                        t.jsx)("span", {
                                            className: "inline-block text-[10px] px-2.5 py-1 rounded-full font-medium",
                                            style: {
                                                background: "#fff",
                                                border: "1px solid #e0e0e0",
                                                color: "#0A0A0A"
                                            },
                                            children: "6-month professional program"
                                        }), (0,
                                        t.jsxs)("span", {
                                            className: "inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full font-medium",
                                            style: {
                                                background: "#fff",
                                                border: "1px solid #e0e0e0",
                                                color: "#0A0A0A"
                                            },
                                            children: [(0,
                                            t.jsx)(n.GraduationCap, {
                                                size: 11
                                            }), " Issued ", e.issued]
                                        })]
                                    })]
                                }), !r && (0,
                                t.jsxs)("div", {
                                    className: "flex items-center gap-2 flex-wrap mb-3",
                                    children: [e.credentialId && (0,
                                    t.jsxs)("span", {
                                        className: "inline-block text-[10px] font-mono px-2.5 py-1 rounded-full",
                                        style: {
                                            background: "white" === l ? `${e.color}12` : "#fff",
                                            border: "white" === l ? `1px solid ${e.color}30` : "1px solid #e0e0e0",
                                            color: "white" === l ? e.color : "#0A0A0A"
                                        },
                                        children: ["ID: ", e.credentialId]
                                    }), (0,
                                    t.jsxs)("span", {
                                        className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium",
                                        style: {
                                            background: "green" === l ? "#fff" : `${e.color}15`,
                                            border: "green" === l ? "1px solid #e0e0e0" : `1px solid ${e.color}30`,
                                            color: "green" === l ? "#0A0A0A" : e.color
                                        },
                                        children: [(0,
                                        t.jsx)(n.GraduationCap, {
                                            size: 11
                                        }), " Issued ", e.issued]
                                    })]
                                })]
                            }), e.credentialUrl && (0,
                            t.jsxs)("a", {
                                href: e.credentialUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-2 h-10 px-6 rounded-full text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 w-fit",
                                style: {
                                    background: "white" === l ? "#4FFFB0" : "#fff",
                                    color: "#0A0A0A",
                                    border: "2px solid #0A0A0A",
                                    boxShadow: "3px 3px 0px 0px #0A0A0A"
                                },
                                children: ["Verify Credential ", (0,
                                t.jsx)(s.ExternalLink, {
                                    size: 12
                                })]
                            })]
                        }, a)
                    }
                    )
                })]
            })
        })
    }
    ])
}
, 478177, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(989970)
      , l = e.i(883495)
      , s = e.i(263488)
      , o = e.i(343432)
      , i = e.i(551348)
      , n = e.i(194983)
      , c = e.i(514764)
      , d = e.i(346897)
      , p = e.i(972520);
    r.default.registerPlugin(l.ScrollTrigger);
    let x = [{
        icon: s.Mail,
        label: "Email",
        value: "hello@ahmedali.online",
        href: "mailto:hello@ahmedali.online",
        color: "#4FFFB0"
    }, {
        icon: o.Phone,
        label: "Phone",
        value: "+20 101 164 8156",
        href: "tel:+201011648156",
        color: "#4FFFB0"
    }, {
        icon: n.MessageCircle,
        label: "WhatsApp",
        value: "Chat Now",
        href: "https://wa.me/201011648156",
        color: "#25D366",
        customIcon: "https://cdn.simpleicons.org/whatsapp/25D366"
    }, {
        icon: i.Linkedin,
        label: "LinkedIn",
        value: "ahmed-alli",
        href: "https://linkedin.com/in/ahmed-alli",
        color: "#0A66C2"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        a.useRef)(null);
        (0,
        a.useEffect)( () => {
            let t = r.default.context( () => {
                r.default.fromTo(".ct-anim", {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .7,
                    ease: "power3.out",
                    stagger: .1,
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top 80%"
                    }
                })
            }
            , e);
            return () => t.revert()
        }
        , []);
        let[l,s] = (0,
        a.useState)("idle")
          , o = async e => {
            e.preventDefault(),
            s("sending");
            let t = e.currentTarget
              , a = new FormData(t);
            try {
                if (!(await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: a.get("name"),
                        email: a.get("email"),
                        subject: a.get("subject"),
                        message: a.get("message")
                    })
                })).ok)
                    throw Error("Failed to send");
                s("sent"),
                t.reset()
            } catch {
                s("error")
            }
        }
        ;
        return (0,
        t.jsxs)("section", {
            ref: e,
            id: "contact",
            className: "relative overflow-hidden",
            style: {
                background: "#0A0A0A",
                padding: "100px 24px"
            },
            children: [(0,
            t.jsx)("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04]",
                style: {
                    background: "radial-gradient(circle, #4FFFB0 0%, transparent 70%)"
                }
            }), (0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "ct-anim opacity-0 text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-3",
                        style: {
                            color: "#4FFFB0"
                        },
                        children: "Get in Touch"
                    }), (0,
                    t.jsx)("h2", {
                        className: "heading text-3xl md:text-5xl mb-4",
                        style: {
                            color: "#fff"
                        },
                        children: "Let's Work Together"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-base max-w-xl mx-auto",
                        style: {
                            color: "rgba(255,255,255,0.5)"
                        },
                        children: "Have a project in mind? Let's turn your vision into reality."
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-5 gap-8",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "lg:col-span-2 flex flex-col gap-5",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "ct-anim opacity-0 rounded-[20px] p-6",
                            style: {
                                background: "#4FFFB0"
                            },
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                    style: {
                                        background: "#fff",
                                        border: "1px solid #e0e0e0"
                                    },
                                    children: (0,
                                    t.jsx)(d.MapPin, {
                                        size: 18,
                                        color: "#0A0A0A"
                                    })
                                }), (0,
                                t.jsxs)("div", {
                                    children: [(0,
                                    t.jsx)("p", {
                                        className: "text-xs font-semibold",
                                        style: {
                                            color: "rgba(0,0,0,0.5)"
                                        },
                                        children: "Based in"
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-sm font-bold",
                                        style: {
                                            color: "#0A0A0A"
                                        },
                                        children: "Cairo, Egypt"
                                    })]
                                })]
                            }), (0,
                            t.jsx)("p", {
                                className: "text-xs",
                                style: {
                                    color: "rgba(0,0,0,0.5)"
                                },
                                children: "Available for remote work across MENA & worldwide"
                            })]
                        }), x.map( (e, a) => (0,
                        t.jsxs)("a", {
                            href: e.href,
                            target: e.href.startsWith("http") ? "_blank" : void 0,
                            rel: e.href.startsWith("http") ? "noopener noreferrer" : void 0,
                            className: "ct-anim opacity-0 rounded-[20px] p-5 flex items-center gap-4 group transition-all duration-300 hover:-translate-y-0.5",
                            style: {
                                background: "#fff"
                            },
                            children: [(0,
                            t.jsx)("div", {
                                className: "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0",
                                style: {
                                    background: `${e.color}15`,
                                    border: `1px solid ${e.color}30`
                                },
                                children: e.customIcon ? (0,
                                t.jsx)("img", {
                                    src: e.customIcon,
                                    alt: "",
                                    width: 22,
                                    height: 22,
                                    className: "object-contain"
                                }) : (0,
                                t.jsx)(e.icon, {
                                    size: 20,
                                    color: e.color
                                })
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex-1 min-w-0",
                                children: [(0,
                                t.jsx)("p", {
                                    className: "text-[10px] font-semibold uppercase tracking-wider mb-0.5",
                                    style: {
                                        color: "rgba(0,0,0,0.4)"
                                    },
                                    children: e.label
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-sm font-bold truncate",
                                    style: {
                                        color: "#0A0A0A"
                                    },
                                    children: e.value
                                })]
                            }), (0,
                            t.jsx)(p.ArrowRight, {
                                size: 16,
                                className: "flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
                                style: {
                                    color: "#0A0A0A"
                                }
                            })]
                        }, a))]
                    }), (0,
                    t.jsx)("div", {
                        className: "lg:col-span-3 ct-anim opacity-0",
                        children: (0,
                        t.jsxs)("div", {
                            className: "rounded-[24px] p-8 md:p-10",
                            style: {
                                background: "#fff"
                            },
                            children: [(0,
                            t.jsx)("h3", {
                                className: "heading text-2xl md:text-3xl mb-2",
                                style: {
                                    color: "#0A0A0A",
                                    lineHeight: 1.5
                                },
                                children: "Send a Message"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-sm mb-8",
                                style: {
                                    color: "rgba(0,0,0,0.45)"
                                },
                                children: "I'll get back to you within 24 hours."
                            }), (0,
                            t.jsxs)("form", {
                                onSubmit: o,
                                className: "flex flex-col gap-5",
                                children: [(0,
                                t.jsxs)("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                    children: [(0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("label", {
                                            className: "block text-xs font-bold mb-2",
                                            style: {
                                                color: "#0A0A0A"
                                            },
                                            children: "Name"
                                        }), (0,
                                        t.jsx)("input", {
                                            name: "name",
                                            type: "text",
                                            required: !0,
                                            placeholder: "Your name",
                                            className: "w-full h-12 px-4 rounded-xl text-sm outline-none transition-all duration-200",
                                            style: {
                                                background: "#f7f7f7",
                                                border: "2px solid #e8e8e8",
                                                color: "#0A0A0A"
                                            },
                                            onFocus: e => {
                                                e.target.style.borderColor = "#4FFFB0"
                                            }
                                            ,
                                            onBlur: e => {
                                                e.target.style.borderColor = "#e8e8e8"
                                            }
                                        })]
                                    }), (0,
                                    t.jsxs)("div", {
                                        children: [(0,
                                        t.jsx)("label", {
                                            className: "block text-xs font-bold mb-2",
                                            style: {
                                                color: "#0A0A0A"
                                            },
                                            children: "Email"
                                        }), (0,
                                        t.jsx)("input", {
                                            name: "email",
                                            type: "email",
                                            required: !0,
                                            placeholder: "your@email.com",
                                            className: "w-full h-12 px-4 rounded-xl text-sm outline-none transition-all duration-200",
                                            style: {
                                                background: "#f7f7f7",
                                                border: "2px solid #e8e8e8",
                                                color: "#0A0A0A"
                                            },
                                            onFocus: e => {
                                                e.target.style.borderColor = "#4FFFB0"
                                            }
                                            ,
                                            onBlur: e => {
                                                e.target.style.borderColor = "#e8e8e8"
                                            }
                                        })]
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    children: [(0,
                                    t.jsx)("label", {
                                        className: "block text-xs font-bold mb-2",
                                        style: {
                                            color: "#0A0A0A"
                                        },
                                        children: "Subject"
                                    }), (0,
                                    t.jsx)("input", {
                                        name: "subject",
                                        type: "text",
                                        placeholder: "What's this about?",
                                        className: "w-full h-12 px-4 rounded-xl text-sm outline-none transition-all duration-200",
                                        style: {
                                            background: "#f7f7f7",
                                            border: "2px solid #e8e8e8",
                                            color: "#0A0A0A"
                                        },
                                        onFocus: e => {
                                            e.target.style.borderColor = "#4FFFB0"
                                        }
                                        ,
                                        onBlur: e => {
                                            e.target.style.borderColor = "#e8e8e8"
                                        }
                                    })]
                                }), (0,
                                t.jsxs)("div", {
                                    children: [(0,
                                    t.jsx)("label", {
                                        className: "block text-xs font-bold mb-2",
                                        style: {
                                            color: "#0A0A0A"
                                        },
                                        children: "Message"
                                    }), (0,
                                    t.jsx)("textarea", {
                                        name: "message",
                                        required: !0,
                                        rows: 5,
                                        placeholder: "Tell me about your project, goals, and timeline...",
                                        className: "w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none",
                                        style: {
                                            background: "#f7f7f7",
                                            border: "2px solid #e8e8e8",
                                            color: "#0A0A0A"
                                        },
                                        onFocus: e => {
                                            e.target.style.borderColor = "#4FFFB0"
                                        }
                                        ,
                                        onBlur: e => {
                                            e.target.style.borderColor = "#e8e8e8"
                                        }
                                    })]
                                }), "sent" === l ? (0,
                                t.jsxs)("div", {
                                    className: "flex items-center justify-center gap-2 h-14 rounded-full text-base font-bold",
                                    style: {
                                        background: "#4FFFB0",
                                        color: "#0A0A0A"
                                    },
                                    children: [(0,
                                    t.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        children: (0,
                                        t.jsx)("path", {
                                            d: "M4 10l4 4 8-8",
                                            stroke: "#0A0A0A",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), "Message Sent! Check your inbox."]
                                }) : "error" === l ? (0,
                                t.jsxs)("div", {
                                    className: "text-center",
                                    children: [(0,
                                    t.jsxs)("button", {
                                        type: "submit",
                                        className: "inline-flex items-center justify-center gap-3 h-14 w-full rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 cursor-pointer",
                                        style: {
                                            background: "#ff4d4d",
                                            color: "#fff",
                                            border: "2px solid #0A0A0A",
                                            boxShadow: "5px 5px 0px 0px #0A0A0A"
                                        },
                                        children: [(0,
                                        t.jsx)(c.Send, {
                                            size: 16
                                        }), "Try Again"]
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-xs mt-2",
                                        style: {
                                            color: "rgba(0,0,0,0.4)"
                                        },
                                        children: "Something went wrong. Please try again."
                                    })]
                                }) : (0,
                                t.jsx)("button", {
                                    type: "submit",
                                    disabled: "sending" === l,
                                    className: "inline-flex items-center justify-center gap-3 h-14 w-full rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed",
                                    style: {
                                        background: "#4FFFB0",
                                        color: "#0A0A0A",
                                        border: "2px solid #0A0A0A",
                                        boxShadow: "5px 5px 0px 0px #0A0A0A"
                                    },
                                    children: "sending" === l ? (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [(0,
                                        t.jsx)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            style: {
                                                animation: "spin 1s linear infinite"
                                            },
                                            children: (0,
                                            t.jsx)("circle", {
                                                cx: "8",
                                                cy: "8",
                                                r: "6",
                                                stroke: "#0A0A0A",
                                                strokeWidth: "2",
                                                strokeDasharray: "28",
                                                strokeDashoffset: "8",
                                                strokeLinecap: "round"
                                            })
                                        }), "Sending..."]
                                    }) : (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [(0,
                                        t.jsx)(c.Send, {
                                            size: 16
                                        }), "Send Message"]
                                    })
                                }), (0,
                                t.jsx)("style", {
                                    children: "@keyframes spin { to { transform: rotate(360deg); } }"
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    ])
}
, 13642, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(975558)
      , r = e.i(972520)
      , l = e.i(390928);
    let s = [{
        label: "LinkedIn",
        href: "https://linkedin.com/in/ahmed-alli",
        iconClass: "fa-brands fa-linkedin-in"
    }, {
        label: "WhatsApp",
        href: "https://wa.me/201011648156",
        iconClass: "fa-brands fa-whatsapp"
    }, {
        label: "Email",
        href: "mailto:hello@ahmedali.online",
        iconClass: "fa-solid fa-envelope"
    }]
      , o = [{
        label: "About",
        href: "#about"
    }, {
        label: "Services",
        href: "#services"
    }, {
        label: "Projects",
        href: "#projects"
    }, {
        label: "Experience",
        href: "#experience"
    }, {
        label: "Contact",
        href: "#contact"
    }];
    e.s(["default", 0, function() {
        return (0,
        t.jsxs)("footer", {
            className: "relative overflow-hidden",
            style: {
                background: "#4FFFB0"
            },
            children: [(0,
            t.jsxs)("div", {
                className: "max-w-6xl mx-auto px-6 pt-20 pb-16",
                children: [(0,
                t.jsxs)("div", {
                    className: "text-center mb-14",
                    children: [(0,
                    t.jsx)("p", {
                        className: "script text-xl md:text-2xl mb-4",
                        style: {
                            color: "#0A0A0A"
                        },
                        children: "Ready to start?"
                    }), (0,
                    t.jsxs)("h2", {
                        className: "heading text-4xl md:text-6xl lg:text-7xl mb-6",
                        style: {
                            color: "#0A0A0A"
                        },
                        children: ["Let's Build", (0,
                        t.jsx)("br", {}), "Something", " ", (0,
                        t.jsx)("span", {
                            className: "inline-block",
                            children: (0,
                            t.jsx)(l.default, {
                                texts: ["Great", "Bold", "Impactful", "Different"],
                                mainClassName: "inline-block overflow-hidden text-[#0A0A0A]",
                                rotationInterval: 2500
                            })
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "text-base md:text-lg max-w-lg mx-auto mb-10",
                        style: {
                            color: "rgba(0,0,0,0.5)"
                        },
                        children: "Got a project, idea, or just want to say hi? I'd love to hear from you."
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-wrap justify-center gap-4",
                        children: [(0,
                        t.jsxs)("a", {
                            href: "#contact",
                            className: "group relative inline-flex items-center gap-3 h-14 px-9 rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                            style: {
                                background: "#fff",
                                color: "#0A0A0A",
                                border: "2px solid #0A0A0A",
                                boxShadow: "5px 5px 0px 0px #0A0A0A"
                            },
                            children: [(0,
                            t.jsx)(r.ArrowRight, {
                                size: 16
                            }), "Start a Project"]
                        }), (0,
                        t.jsx)("a", {
                            href: "mailto:hello@ahmedali.online",
                            className: "group relative inline-flex items-center gap-3 h-14 px-9 rounded-full text-base font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
                            style: {
                                background: "#fff",
                                color: "#0A0A0A",
                                border: "2px solid #0A0A0A",
                                boxShadow: "5px 5px 0px 0px #0A0A0A"
                            },
                            children: "Say Hello"
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "w-full h-[1px] mb-12",
                    style: {
                        background: "rgba(0,0,0,0.1)"
                    }
                }), (0,
                t.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "md:col-span-2",
                        children: [(0,
                        t.jsxs)("a", {
                            href: "#",
                            className: "heading text-3xl font-bold inline-block mb-3",
                            style: {
                                color: "#0A0A0A"
                            },
                            children: ["Ahmed Ali", (0,
                            t.jsx)("span", {
                                style: {
                                    color: "#fff"
                                },
                                children: "."
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "text-sm leading-relaxed mb-5",
                            style: {
                                color: "rgba(0,0,0,0.5)"
                            },
                            children: "Full-Stack Digital Strategist crafting high-impact digital products, campaigns, and growth systems across MENA."
                        }), (0,
                        t.jsx)("div", {
                            className: "flex items-center gap-3",
                            children: s.map(e => (0,
                            t.jsx)("a", {
                                href: e.href,
                                target: e.href.startsWith("http") ? "_blank" : void 0,
                                rel: e.href.startsWith("http") ? "noopener noreferrer" : void 0,
                                "aria-label": e.label,
                                className: "w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1",
                                style: {
                                    background: "#fff",
                                    border: "2px solid #0A0A0A",
                                    boxShadow: "2px 2px 0px 0px #0A0A0A"
                                },
                                children: (0,
                                t.jsx)("i", {
                                    className: e.iconClass,
                                    style: {
                                        fontSize: "16px",
                                        color: "#0A0A0A"
                                    }
                                })
                            }, e.label))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("h4", {
                            className: "text-xs font-bold uppercase tracking-wider mb-4",
                            style: {
                                color: "#0A0A0A"
                            },
                            children: "Navigate"
                        }), (0,
                        t.jsx)("div", {
                            className: "flex flex-col gap-2.5",
                            children: o.map(e => (0,
                            t.jsx)("a", {
                                href: e.href,
                                className: "text-sm font-medium transition-all duration-200 hover:translate-x-1",
                                style: {
                                    color: "rgba(0,0,0,0.6)"
                                },
                                children: e.label
                            }, e.label))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("h4", {
                            className: "text-xs font-bold uppercase tracking-wider mb-4",
                            style: {
                                color: "#0A0A0A"
                            },
                            children: "Reach Out"
                        }), (0,
                        t.jsxs)("div", {
                            className: "flex flex-col gap-2.5 mb-6",
                            children: [(0,
                            t.jsx)("a", {
                                href: "mailto:hello@ahmedali.online",
                                className: "text-sm font-medium transition-all duration-200 hover:translate-x-1",
                                style: {
                                    color: "rgba(0,0,0,0.6)"
                                },
                                children: "hello@ahmedali.online"
                            }), (0,
                            t.jsx)("a", {
                                href: "tel:+201011648156",
                                className: "text-sm font-medium transition-all duration-200 hover:translate-x-1",
                                style: {
                                    color: "rgba(0,0,0,0.6)"
                                },
                                children: "+20 101 164 8156"
                            }), (0,
                            t.jsx)("p", {
                                className: "text-sm font-medium",
                                style: {
                                    color: "rgba(0,0,0,0.6)"
                                },
                                children: "Cairo, Egypt"
                            })]
                        }), (0,
                        t.jsxs)("button", {
                            onClick: () => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            }
                            ,
                            className: "inline-flex items-center gap-2 h-10 px-5 rounded-full text-xs font-bold transition-all duration-200 hover:-translate-y-1 cursor-pointer",
                            style: {
                                background: "#0A0A0A",
                                color: "#4FFFB0",
                                border: "2px solid #0A0A0A",
                                boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.2)"
                            },
                            children: [(0,
                            t.jsx)(a.ArrowUp, {
                                size: 14
                            }), "Top"]
                        })]
                    })]
                })]
            }), (0,
            t.jsx)("div", {
                style: {
                    background: "#0A0A0A"
                },
                children: (0,
                t.jsxs)("div", {
                    className: "max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2",
                    children: [(0,
                    t.jsxs)("p", {
                        className: "text-xs",
                        style: {
                            color: "rgba(255,255,255,0.4)"
                        },
                        children: ["© ", new Date().getFullYear(), " Ahmed Ali. All rights reserved."]
                    }), (0,
                    t.jsx)("p", {
                        className: "text-xs",
                        style: {
                            color: "rgba(255,255,255,0.4)"
                        },
                        children: "Designed & Developed by Ahmed Ali"
                    })]
                })
            })]
        })
    }
    ])
}
, 596233, e => {
    "use strict";
    var t = e.i(843476)
      , a = e.i(271645)
      , r = e.i(194983)
      , l = e.i(37727)
      , s = e.i(514764);
    let o = ["What services do you offer?", "Tell me about your projects", "SEO & marketing experience", "Mobile app development", "Available for hire?", "GCC work experience"];
    function i() {
        return (0,
        t.jsxs)("div", {
            style: {
                display: "flex",
                gap: "8px",
                marginTop: "10px"
            },
            children: [(0,
            t.jsxs)("a", {
                href: "https://wa.me/201011648156",
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    background: "#25D366",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "2px solid #0A0A0A",
                    boxShadow: "2px 2px 0px 0px #0A0A0A",
                    transition: "all 0.2s"
                },
                children: [(0,
                t.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "#fff",
                    children: (0,
                    t.jsx)("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    })
                }), "WhatsApp"]
            }), (0,
            t.jsxs)("a", {
                href: "mailto:hello@ahmedali.online",
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    background: "#fff",
                    color: "#0A0A0A",
                    fontSize: "12px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "2px solid #0A0A0A",
                    boxShadow: "2px 2px 0px 0px #0A0A0A",
                    transition: "all 0.2s"
                },
                children: [(0,
                t.jsxs)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#0A0A0A",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [(0,
                    t.jsx)("rect", {
                        x: "2",
                        y: "4",
                        width: "20",
                        height: "16",
                        rx: "2"
                    }), (0,
                    t.jsx)("path", {
                        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    })]
                }), "Email"]
            })]
        })
    }
    function n() {
        try {
            let e = new (window.AudioContext || window.webkitAudioContext)
              , t = e.currentTime
              , a = e.createOscillator()
              , r = e.createOscillator()
              , l = e.createGain();
            a.connect(l),
            r.connect(l),
            l.connect(e.destination),
            a.type = "sine",
            r.type = "sine",
            a.frequency.setValueAtTime(587, t),
            r.frequency.setValueAtTime(784, t + .1),
            l.gain.setValueAtTime(0, t),
            l.gain.linearRampToValueAtTime(.06, t + .02),
            l.gain.exponentialRampToValueAtTime(.001, t + .25),
            a.start(t),
            a.stop(t + .12),
            r.start(t + .1),
            r.stop(t + .25)
        } catch {}
    }
    let c = ["Still here if you need anything, feel free to ask!", "Got any questions about my work? I'm happy to help.", "Don't be shy, I can tell you about my projects, skills, or availability.", "Curious about something? I'm just a message away."];
    e.s(["default", 0, function() {
        let[d,p] = (0,
        a.useState)(!1)
          , [x,g] = (0,
        a.useState)([])
          , [m,f] = (0,
        a.useState)("")
          , [u,h] = (0,
        a.useState)(!1)
          , [b,y] = (0,
        a.useState)(!1)
          , [A,v] = (0,
        a.useState)(!0)
          , [j,k] = (0,
        a.useState)(!1)
          , [w,F] = (0,
        a.useState)(0)
          , [N,S] = (0,
        a.useState)("")
          , C = (0,
        a.useRef)(null)
          , E = (0,
        a.useRef)(null)
          , B = (0,
        a.useRef)(null)
          , T = (0,
        a.useRef)(0)
          , M = (0,
        a.useRef)(!1);
        (0,
        a.useEffect)( () => {
            M.current = d
        }
        , [d]),
        (0,
        a.useEffect)( () => {
            let e = setTimeout( () => {
                d || (y(!0),
                n())
            }
            , 4e3);
            return () => clearTimeout(e)
        }
        , [d]),
        (0,
        a.useEffect)( () => {
            C.current && (C.current.scrollTop = C.current.scrollHeight)
        }
        , [x, u]);
        let z = (0,
        a.useCallback)( () => {
            B.current && clearTimeout(B.current),
            B.current = setTimeout( () => {
                if (!M.current && T.current < c.length) {
                    let e = c[T.current];
                    T.current++,
                    S(e),
                    F(e => e + 1),
                    n(),
                    setTimeout( () => S(""), 8e3)
                }
            }
            , 15e3)
        }
        , [])
          , I = (0,
        a.useCallback)( () => {
            p(!0),
            y(!1),
            F(0),
            S(""),
            B.current && clearTimeout(B.current),
            j || (k(!0),
            setTimeout( () => {
                g([{
                    role: "assistant",
                    content: "Hey! 👋 Welcome to my portfolio. I'm Ahmed, what's your name so I can help you better?"
                }]),
                n()
            }
            , 300)),
            setTimeout( () => E.current?.focus(), 400)
        }
        , [j])
          , D = (0,
        a.useCallback)( () => {
            p(!1),
            z()
        }
        , [z])
          , R = async e => {
            let t = (e || m).trim();
            if (!t || u)
                return;
            f(""),
            v(!1),
            B.current && clearTimeout(B.current);
            let a = [...x, {
                role: "user",
                content: t
            }];
            g(a),
            h(!0);
            try {
                let e = await fetch("/api/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messages: a.map(e => ({
                            role: e.role,
                            content: e.content
                        }))
                    })
                })
                  , t = (await e.json()).reply || "Reach me at hello@ahmedali.online";
                g(e => [...e, {
                    role: "assistant",
                    content: t
                }]),
                n()
            } catch {
                g(e => [...e, {
                    role: "assistant",
                    content: "Couldn't connect. Reach Ahmed at hello@ahmedali.online"
                }])
            } finally {
                h(!1)
            }
        }
          , P = ({size: e=30}) => (0,
        t.jsx)("img", {
            src: "/myphoto-profile.png",
            alt: "Ahmed Ali",
            style: {
                width: e,
                height: e,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
                border: "2px solid #0A0A0A"
            }
        });
        return (0,
        t.jsxs)(t.Fragment, {
            children: [!d && (0,
            t.jsxs)("div", {
                className: "fixed bottom-7 right-7 z-[97] flex items-end gap-3",
                children: [(b || N) && (0,
                t.jsx)("div", {
                    className: "cursor-pointer",
                    onClick: I,
                    style: {
                        background: "#fff",
                        border: "2px solid #0A0A0A",
                        boxShadow: "4px 4px 0px 0px #0A0A0A",
                        borderRadius: "20px 20px 4px 20px",
                        padding: "14px 18px",
                        maxWidth: "260px",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "#0A0A0A",
                        animation: "askahmed-float-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards"
                    },
                    children: N || (0,
                    t.jsxs)(t.Fragment, {
                        children: [(0,
                        t.jsx)("span", {
                            style: {
                                display: "inline-block",
                                animation: "askahmed-wave 1s infinite",
                                transformOrigin: "70% 70%",
                                fontSize: "16px"
                            },
                            children: "👋"
                        }), " ", "Ask me anything about Ahmed's work, skills, or availability."]
                    })
                }), (0,
                t.jsxs)("button", {
                    onClick: I,
                    "aria-label": "Open chat with Ahmed",
                    className: "group relative cursor-pointer",
                    style: {
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#4FFFB0",
                        border: "2px solid #0A0A0A",
                        boxShadow: "4px 4px 0px 0px #0A0A0A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s"
                    },
                    children: [w > 0 && (0,
                    t.jsx)("span", {
                        style: {
                            position: "absolute",
                            top: "-4px",
                            right: "-4px",
                            width: "22px",
                            height: "22px",
                            background: "#EF4444",
                            borderRadius: "50%",
                            border: "2px solid #0A0A0A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "11px",
                            fontWeight: 800,
                            color: "#fff",
                            zIndex: 2,
                            animation: "askahmed-badge-pop 0.3s cubic-bezier(0.34,1.56,0.64,1)"
                        },
                        children: w
                    }), 0 === w && (0,
                    t.jsx)("span", {
                        style: {
                            position: "absolute",
                            top: "3px",
                            right: "3px",
                            width: "12px",
                            height: "12px",
                            background: "#22C55E",
                            borderRadius: "50%",
                            border: "2px solid #0A0A0A"
                        }
                    }), (0,
                    t.jsx)(r.MessageCircle, {
                        size: 24,
                        color: "#0A0A0A",
                        strokeWidth: 2.5
                    })]
                })]
            }), (0,
            t.jsx)("a", {
                href: "https://wa.me/201011648156",
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Chat on WhatsApp",
                onClick: () => {
                    e.A(61668).then(e => e.trackEvent("whatsapp_click", {
                        source: "floating_button"
                    }))
                }
                ,
                className: "fixed bottom-7 left-7 z-[97]",
                style: {
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "#25D366",
                    border: "2px solid #0A0A0A",
                    boxShadow: "-4px 4px 0px 0px #0A0A0A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s"
                },
                children: (0,
                t.jsx)("svg", {
                    width: "26",
                    height: "26",
                    viewBox: "0 0 24 24",
                    fill: "#fff",
                    children: (0,
                    t.jsx)("path", {
                        d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    })
                })
            }), (0,
            t.jsxs)("div", {
                className: "fixed bottom-7 right-7 z-[97] flex flex-col askahmed-window",
                style: {
                    width: "400px",
                    height: "600px",
                    maxHeight: "calc(100vh - 80px)",
                    background: "#fff",
                    border: "2px solid #0A0A0A",
                    borderRadius: "28px",
                    overflow: "hidden",
                    boxShadow: "8px 8px 0px 0px #0A0A0A",
                    transform: d ? "scale(1) translateY(0)" : "scale(0.9) translateY(20px)",
                    opacity: +!!d,
                    pointerEvents: d ? "all" : "none",
                    transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                },
                children: [(0,
                t.jsxs)("div", {
                    style: {
                        padding: "16px 20px",
                        background: "#4FFFB0",
                        borderBottom: "2px solid #0A0A0A",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexShrink: 0
                    },
                    children: [(0,
                    t.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [(0,
                        t.jsx)(P, {
                            size: 42
                        }), (0,
                        t.jsx)("span", {
                            style: {
                                position: "absolute",
                                bottom: "0px",
                                right: "-2px",
                                width: "12px",
                                height: "12px",
                                background: "#22C55E",
                                borderRadius: "50%",
                                border: "2px solid #4FFFB0"
                            }
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        style: {
                            flex: 1
                        },
                        children: [(0,
                        t.jsx)("div", {
                            style: {
                                fontFamily: "'TAN Headline'",
                                fontWeight: 700,
                                fontSize: "15px",
                                color: "#0A0A0A",
                                lineHeight: 1.2
                            },
                            children: "Ask Ahmed"
                        }), (0,
                        t.jsx)("div", {
                            style: {
                                fontSize: "12px",
                                color: "rgba(0,0,0,0.5)",
                                marginTop: "2px"
                            },
                            children: "Online · replies instantly"
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: D,
                        "aria-label": "Close chat",
                        className: "cursor-pointer",
                        style: {
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            background: "rgba(0,0,0,0.08)",
                            border: "none",
                            color: "#0A0A0A",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        },
                        children: (0,
                        t.jsx)(l.X, {
                            size: 16
                        })
                    })]
                }), (0,
                t.jsxs)("div", {
                    ref: C,
                    style: {
                        flex: 1,
                        overflowY: "auto",
                        padding: "20px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        background: "#FAFAFA"
                    },
                    children: [x.map( (e, a) => (0,
                    t.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            flexDirection: "user" === e.role ? "row-reverse" : "row",
                            animation: "askahmed-msg-in 0.3s ease forwards"
                        },
                        children: ["assistant" === e.role ? (0,
                        t.jsx)("div", {
                            style: {
                                marginTop: "2px"
                            },
                            children: (0,
                            t.jsx)(P, {
                                size: 28
                            })
                        }) : (0,
                        t.jsx)("div", {
                            style: {
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "#E4E4E7",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#52525B",
                                flexShrink: 0,
                                marginTop: "2px",
                                border: "1px solid #D1D5DB"
                            },
                            children: "You"
                        }), (0,
                        t.jsxs)("div", {
                            style: {
                                maxWidth: "78%"
                            },
                            children: [(0,
                            t.jsx)("div", {
                                style: {
                                    padding: "12px 16px",
                                    fontSize: "13.5px",
                                    lineHeight: 1.65,
                                    ..."user" === e.role ? {
                                        background: "#4FFFB0",
                                        color: "#0A0A0A",
                                        fontWeight: 500,
                                        border: "2px solid #0A0A0A",
                                        boxShadow: "3px 3px 0px 0px #0A0A0A",
                                        borderRadius: "18px 18px 4px 18px"
                                    } : {
                                        background: "#fff",
                                        color: "#0A0A0A",
                                        border: "1px solid #E4E4E7",
                                        borderRadius: "18px 18px 18px 4px"
                                    }
                                },
                                dangerouslySetInnerHTML: {
                                    __html: e.content.replace(/\[SHOW_CONTACT_BUTTONS\]/g, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/(hello@ahmedali\.online)/g, '<a href="mailto:$1" style="color:#0A0A0A;font-weight:700;text-decoration:underline">$1</a>').replace(/\n/g, "<br>").replace(/(<br>)+$/g, "").trim()
                                }
                            }), "assistant" === e.role && e.content.includes("[SHOW_CONTACT_BUTTONS]") && (0,
                            t.jsx)(i, {}), (0,
                            t.jsx)("div", {
                                style: {
                                    fontSize: "10px",
                                    color: "#A1A1AA",
                                    marginTop: "5px",
                                    textAlign: "user" === e.role ? "right" : "left",
                                    paddingLeft: "user" === e.role ? void 0 : "4px",
                                    paddingRight: "user" === e.role ? "4px" : void 0
                                },
                                children: new Date().toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            })]
                        })]
                    }, a)), u && (0,
                    t.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-end"
                        },
                        children: [(0,
                        t.jsx)(P, {
                            size: 28
                        }), (0,
                        t.jsxs)("div", {
                            style: {
                                background: "#fff",
                                border: "1px solid #E4E4E7",
                                borderRadius: "18px 18px 18px 4px",
                                padding: "14px 18px",
                                display: "flex",
                                gap: "5px",
                                alignItems: "center"
                            },
                            children: [(0,
                            t.jsx)("span", {
                                className: "askahmed-dot",
                                style: {
                                    animationDelay: "0s"
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "askahmed-dot",
                                style: {
                                    animationDelay: "0.2s"
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "askahmed-dot",
                                style: {
                                    animationDelay: "0.4s"
                                }
                            })]
                        })]
                    })]
                }), A && x.length <= 1 && (0,
                t.jsx)("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        padding: "0 16px 12px",
                        background: "#FAFAFA"
                    },
                    children: o.map(e => (0,
                    t.jsx)("button", {
                        onClick: () => R(e),
                        className: "cursor-pointer",
                        style: {
                            background: "#fff",
                            border: "1px solid #E4E4E7",
                            borderRadius: "100px",
                            padding: "6px 14px",
                            fontSize: "12px",
                            color: "#52525B",
                            transition: "all 0.2s",
                            fontFamily: "inherit",
                            whiteSpace: "nowrap"
                        },
                        onMouseEnter: e => {
                            e.currentTarget.style.borderColor = "#0A0A0A",
                            e.currentTarget.style.color = "#0A0A0A",
                            e.currentTarget.style.boxShadow = "2px 2px 0px 0px #0A0A0A"
                        }
                        ,
                        onMouseLeave: e => {
                            e.currentTarget.style.borderColor = "#E4E4E7",
                            e.currentTarget.style.color = "#52525B",
                            e.currentTarget.style.boxShadow = "none"
                        }
                        ,
                        children: e
                    }, e))
                }), (0,
                t.jsx)("div", {
                    style: {
                        padding: "12px 16px 16px",
                        borderTop: "2px solid #E4E4E7",
                        flexShrink: 0,
                        background: "#fff"
                    },
                    children: (0,
                    t.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            alignItems: "center",
                            background: "#fff",
                            border: "2px solid #0A0A0A",
                            borderRadius: "100px",
                            padding: "6px 6px 6px 18px",
                            boxShadow: "3px 3px 0px 0px #0A0A0A"
                        },
                        children: [(0,
                        t.jsx)("textarea", {
                            ref: E,
                            value: m,
                            onChange: e => f(e.target.value),
                            onKeyDown: e => {
                                "Enter" !== e.key || e.shiftKey || (e.preventDefault(),
                                R())
                            }
                            ,
                            placeholder: "Ask me anything...",
                            rows: 1,
                            style: {
                                flex: 1,
                                background: "none",
                                border: "none",
                                outline: "none",
                                color: "#0A0A0A",
                                fontFamily: "inherit",
                                fontSize: "14px",
                                resize: "none",
                                maxHeight: "60px",
                                minHeight: "22px",
                                lineHeight: 1.5
                            }
                        }), (0,
                        t.jsx)("button", {
                            onClick: () => R(),
                            disabled: u || !m.trim(),
                            "aria-label": "Send message",
                            className: "cursor-pointer",
                            style: {
                                width: "38px",
                                height: "38px",
                                borderRadius: "50%",
                                background: m.trim() && !u ? "#4FFFB0" : "#F4F4F5",
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s",
                                flexShrink: 0
                            },
                            children: (0,
                            t.jsx)(s.Send, {
                                size: 16,
                                color: m.trim() && !u ? "#0A0A0A" : "#A1A1AA"
                            })
                        })]
                    })
                })]
            }), (0,
            t.jsx)("style", {
                children: `
        @keyframes askahmed-badge-pop {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes askahmed-wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes askahmed-float-in {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes askahmed-msg-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes askahmed-typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        .askahmed-dot {
          width: 6px;
          height: 6px;
          background: #A1A1AA;
          border-radius: 50%;
          display: inline-block;
          animation: askahmed-typing 1.2s infinite;
        }
        .askahmed-window::-webkit-scrollbar { width: 3px; }
        .askahmed-window::-webkit-scrollbar-thumb { background: #E4E4E7; border-radius: 3px; }
        @media (max-width: 480px) {
          .askahmed-window {
            width: calc(100vw - 24px) !important;
            height: calc(100vh - 100px) !important;
            bottom: 12px !important;
            right: 12px !important;
            border-radius: 20px !important;
          }
        }
      `
            })]
        })
    }
    ])
}
]);
