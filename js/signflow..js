webpackJsonp([2], {
    1255: function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), n.d(t, "default", function () {
            return f
        });
        var i = n(0), c = n.n(i), u = n(40), l = n(563), s = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), f = function (e) {
            function t() {
                return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return a(t, e), s(t, [{
                key: "render", value: function () {
                    var e = this.props, t = e.onClose, n = e.signType;
                    return c.a.createElement(u.b, {
                        className: "signFlowModal",
                        onClose: t
                    }, c.a.createElement(l.a, {signType: n}))
                }
            }]), t
        }(i.Component)
    }, 1788: function (e, t) {
    }, 1789: function (e, t) {
    }, 2008: function (e, t) {
    }, 2850: function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function c(e) {
            var t = e.active;
            return {
                sendDigitsError: t.sendDigitsError,
                activeConfirmSucceeded: t.activeConfirmSucceeded,
                activeConfirmError: t.activeConfirmError
            }
        }

        function u(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function p(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function d(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function h(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function m(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function b(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function y(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function g(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var E, w, C, O, P, N, S, _, k, T, j = n(1), B = n.n(j), D = n(0), I = n.n(D), R = n(5), q = n(3), A = n(567),
            F = n(21), U = n(78), M = n(117), x = n(194), V = (n(1788), function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()), z = (E = Object(R.connect)(c, {
                getUnlockTicketAndDigits: A.c,
                activeUserByEmail: A.a,
                validateAndActiveUserByDigits: A.d,
                activeUser: F.b
            }))((O = C = function (e) {
                function t(e) {
                    o(this, t);
                    var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return n.checkUserAccountType = function (e) {
                        return e.email ? "email" : "noInfo"
                    }, n.handleChange = function (e, t) {
                        n.setState(r({}, e, t))
                    }, n.handleChangeSmsType = function () {
                        n.setState(function (e) {
                            var t = e.smsType;
                            return {
                                smsType: "text" === t ? "voice" : "text",
                                smsBackUpName: "text" === t ? "短信" : "语音",
                                reStartTime: Date.now()
                            }
                        })
                    }, n.handleCountDownEndEvent = function () {
                        n.setState({smsBackUpDisplay: !0})
                    }, n.handleSendDigits = function () {
                        var e = n.props.getUnlockTicketAndDigits, t = n.state, r = t.selectedCountry.code, o = t.phoneNo,
                            a = t.smsType;
                        n.setState({manualError: null}, function () {
                            if (o) return e({newPhoneNo: "" + r + o, smsType: a}), void n.setState({smsBackUpDisplay: !1});
                            n.setState({manualError: "请输入手机号", smsInputInterceptTime: Date.now()})
                        })
                    }, n.handleSubmit = function (e) {
                        var t = n.props, r = t.email, o = t.activeUserByEmail, a = t.validateAndActiveUserByDigits,
                            i = t.onClose, c = n.state, u = c.accountType, l = c.selectedCountry.code, s = e.username,
                            f = e.digits;
                        "email" === u ? (o({email: r}), "function" == typeof i && i()) : a({
                            newPhoneNo: "" + l + s,
                            digits: f
                        })
                    }, n.parseServerError = function () {
                        var e = n.props, t = e.activeConfirmError, r = e.sendDigitsError, o = t || {}, a = o.username,
                            i = o.digits, c = r || {}, u = c.username;
                        return {usernameServerError: a || u, digitsServerError: i}
                    }, n.renderAccountInfo = function () {
                        var e = n.props.email, t = n.state, r = t.accountType, o = t.manualError, a = n.parseServerError(),
                            i = a.usernameServerError;
                        return "noInfo" !== r ? I.a.createElement("div", {className: "SignFlowActive-account"}, e, "email" === r && I.a.createElement("a", {
                            target: "_blank",
                            href: "/settings/account",
                            className: "SignFlowActive-editEmail"
                        }, "修改邮箱")) : I.a.createElement(M.a, {
                            type: "digits",
                            supportedCountriesShown: !0,
                            manualValidateError: i || o,
                            onSelect: function (e) {
                                return n.handleChange("selectedCountry", e)
                            },
                            onChange: function (e) {
                                return n.handleChange("phoneNo", e)
                            }
                        })
                    }, n.state = {
                        accountType: n.checkUserAccountType(e),
                        selectedCountry: {code: "+86", name: "中国"},
                        phoneNo: null,
                        smsInputInterceptTime: -1,
                        manualError: null,
                        smsType: "text",
                        smsBackUpName: "语音",
                        smsBackUpDisplay: !0,
                        reStartTime: -1
                    }, n
                }

                return i(t, e), V(t, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        var t = this.props, n = t.sendDigitsError, r = t.onClose, o = t.activeUser,
                            a = e.activeConfirmSucceeded, i = e.sendDigitsError;
                        a ? (r(), o()) : !n && i && (this.setState({smsInputInterceptTime: Date.now()}), this.handleCountDownEndEvent())
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state, t = e.accountType, n = e.smsInputInterceptTime, r = e.smsType,
                            o = e.smsBackUpName, a = e.smsBackUpDisplay, i = e.reStartTime, c = this.parseServerError(),
                            u = c.digitsServerError;
                        return I.a.createElement(U.b, {
                            className: "SignFlowActive SignFlow",
                            onSubmit: this.handleSubmit
                        }, this.renderAccountInfo(), "email" !== t && [I.a.createElement(x.a, {
                            key: "sms-input",
                            manualValidateError: u,
                            interceptTime: n,
                            countDownEvent: this.handleSendDigits,
                            countDownEndEvent: this.handleCountDownEndEvent,
                            smsType: r,
                            reStartTime: i
                        }), a && I.a.createElement("div", {
                            key: "smsBackUp-button",
                            className: "SignFlowActive-options"
                        }, I.a.createElement(q.c, {
                            preset: "plain",
                            className: "SignFlowActive-cutSmsType",
                            onClick: this.handleChangeSmsType
                        }, "接收" + o + "验证码"))], I.a.createElement(q.c, {
                            className: "email" === t ? "SignFlowActive-sendEmail" : "SignFlowActive-sendDigits",
                            preset: "primary",
                            color: "blue",
                            type: "submit"
                        }, "email" === t ? "发送激活邮件" : "激活"))
                    }
                }]), t
            }(D.Component), C.propTypes = {
                email: B.a.string,
                sendDigitsError: B.a.object,
                getUnlockTicketAndDigits: B.a.func,
                activeUserByEmail: B.a.func,
                validateAndActiveUserByEmail: B.a.func,
                activeConfirmSucceeded: B.a.bool,
                activeConfirmError: B.a.object,
                onClose: B.a.func
            }, w = O)) || w, W = z, H = n(40), L = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, K = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), Y = (N = P = function (e) {
                function t() {
                    var e, n, r, o;
                    l(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.state = {snackbar: null}, r.handleSetSnackbar = function (e) {
                        return r.setState({snackbar: e})
                    }, o = n, s(r, o)
                }

                return f(t, e), K(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.shown, n = e.onClose, r = u(e, ["shown", "onClose"]);
                        return I.a.createElement(H.b, {
                            className: "SignFlow-modal",
                            title: "激活帐号",
                            subtitle: "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机",
                            onClose: n,
                            maskClosable: !1,
                            footer: this.state.snackbar
                        }, t && I.a.createElement(W, L({onClose: n, onSetSnackbar: this.handleSetSnackbar}, r)))
                    }
                }]), t
            }(D.Component), P.propTypes = {shown: B.a.bool.isRequired, onClose: B.a.func.isRequired}, N), G = Y,
            Z = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, J = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), $ = (_ = S = function (e) {
                function t() {
                    return d(this, t), h(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }

                return m(t, e), J(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.isInModal, n = e.shown, r = e.onClose,
                            o = p(e, ["isInModal", "shown", "onClose"]);
                        return I.a.createElement("div", null, t ? I.a.createElement(G, Z({
                            onClose: r,
                            shown: n
                        }, o)) : I.a.createElement(W, o))
                    }
                }]), t
            }(D.Component), S.propTypes = {
                isInModal: B.a.bool,
                shown: B.a.bool,
                onClose: B.a.func
            }, S.defaultProps = {isInModal: !1}, _), Q = $, X = (n(568), Q), ee = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }, te = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), ne = (T = k = function (e) {
                function t() {
                    return y(this, t), v(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }

                return g(t, e), te(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.type, n = b(e, ["type"]), r = ee({isInModal: !0}, n);
                        return I.a.createElement("div", {className: "SignFlowModal"}, I.a.createElement(X, ee({}, r, {shown: "active" === t})))
                    }
                }]), t
            }(D.Component), k.propTypes = {type: B.a.oneOf(["initial", "active"]), onClose: B.a.func.isRequired}, T);
        t.default = ne
    }, 2851: function (e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function f(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function p(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function h(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function m(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function b(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function y(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function v(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function g(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function E(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function w(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function C(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function O(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function P(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function N(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function S(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var _, k, T, j, B, D, I, R, q, A, F, U, M, x, V = n(1), z = n.n(V), W = n(0), H = n.n(W), L = n(5), K = n(550),
            Y = n(193), G = n(3), Z = n(68), J = n(6), $ = n(78), Q = n(117), X = n(533), ee = n(534), te = n(86),
            ne = (n(2008), Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }), re = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), oe = function (e, t) {
                return Object.freeze(Object.defineProperties(e, {raw: {value: Object.freeze(t)}}))
            }(["", "s 后可重发"], ["", "s 后可重发"]), ae = (_ = Object(L.connect)(function (e) {
                return {isIOS: e.env.userAgent.iOS}
            }))((j = T = function (e) {
                function t() {
                    return a(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }

                return c(t, e), re(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.countDownEvent, n = e.startAtOnce, a = e.interceptTime, i = e.resetText,
                            c = e.manualValidateError, u = e.onChange, l = e.validations, s = e.countDownEndEvent,
                            f = e.reStartTime, p = e.isIOS,
                            d = o(e, ["countDownEvent", "startAtOnce", "interceptTime", "resetText", "manualValidateError", "onChange", "validations", "countDownEndEvent", "reStartTime", "isIOS"]);
                        return H.a.createElement("div", {className: "SignFlow SignFlow-smsBindPhoneInputContainer"}, H.a.createElement(te.a, ne({
                            name: "digits",
                            className: "SignFlow-smsBindPhoneInput",
                            type: p ? "tel" : "number",
                            errorMessageClassName: "SignFlow-smsBindPhoneInputErrorMask",
                            placeholder: "输入 6 位验证码",
                            manualValidateError: c,
                            onChange: u,
                            validations: [{
                                type: "required",
                                message: "请填写验证码",
                                className: "SignFlow-smsInputBindPhoneRequiredErrorMask"
                            }].concat(r(l || []))
                        }, d)), H.a.createElement(X.a, {
                            className: "SignFlow-smsBindPhoneInputButton",
                            preset: "plain",
                            initialText: "发送验证码",
                            resetText: i,
                            countingText: Object(ee.a)(oe, "count"),
                            startAtOnce: n,
                            event: t,
                            countDownEndEvent: s,
                            interceptTime: a,
                            reStartTime: f
                        }))
                    }
                }]), t
            }(W.Component), T.propTypes = {
                countDownEvent: z.a.func.isRequired,
                startAtOnce: z.a.bool,
                interceptTime: z.a.number,
                resetText: z.a.string,
                manualValidateError: z.a.string
            }, T.defaultProps = {startAtOnce: !1, resetText: "重发验证码"}, k = j)) || k, ie = ae, ce = n(9),
            ue = (n(1788), n(1789), function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }()), le = (D = B = function (e) {
                function t() {
                    var e, n, r, o;
                    l(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.state = {
                        selectedCountry: {
                            code: "+86",
                            name: "中国"
                        },
                        phoneNo: null,
                        smsInputInterceptTime: -1,
                        manualError: null,
                        showFooter: !1,
                        sendValidationCodeButtonText: "发送验证码",
                        identifyingCodeError: null
                    }, r.testPhoneNo = function () {
                        var e = r.state, t = e.selectedCountry.code, n = e.phoneNo, o = /^\d{11}$/;
                        return "+86" !== t || o.test(n)
                    }, r.handleChange = function (e) {
                        return function (t) {
                            r.setState(u({}, e, t))
                        }
                    }, r.handleSendDigits = function (e) {
                        var t = r.props.requestPhoneVerificationCode, n = r.state, o = n.selectedCountry.code,
                            a = n.phoneNo, i = n.manualError;
                        if (J.default.trackEvent(e.target, {action: "GetCaptcha"}), r.testPhoneNo()) return t("" + o + a).then(function () {
                            r.setState({manualError: null})
                        }).catch(function (e) {
                            var t = e.payload;
                            t = void 0 === t ? {} : t;
                            var n = t.message;
                            return r.setState({manualError: n, smsInputInterceptTime: Date.now()})
                        });
                        return r.setState({
                            manualError: "请输入正确的手机号" === i ? " 请输入正确的手机号" : "请输入正确的手机号",
                            smsInputInterceptTime: Date.now()
                        })
                    }, r.handleSubmit = function (e) {
                        var t = e.phoneNo, n = e.digits, o = r.props, a = o.updatePhoneNumber, i = o.onSuccess,
                            c = o.onNeedUnbind, u = r.state, l = u.selectedCountry.code, s = u.identifyingCodeError;
                        a("" + l + t, n).then(function (e) {
                            var n = e.payload, r = n.data;
                            if (n.success) return i();
                            var o = r.bindedAccountFullname, a = r.requestAccountFullname;
                            return c({phoneNumber: t, bindName: o, requiredName: a})
                        }).catch(function (e) {
                            var t = e.payload;
                            t = void 0 === t ? {} : t;
                            var n = t.code, o = t.message;
                            n === ce.t && r.setState({identifyingCodeError: s === o ? " " + o : o})
                        })
                    }, r.handleZaOK = function (e) {
                        J.default.trackEvent(e.target, {action: "Ok"})
                    }, r.renderContent = function () {
                        var e = r.state, t = e.smsInputInterceptTime, n = e.manualError, o = e.sendValidationCodeButtonText,
                            a = e.identifyingCodeError;
                        return H.a.createElement("div", {
                            ref: function (e) {
                                r.container = e
                            }
                        }, H.a.createElement($.b, {
                            className: "SignFlowActive SignFlow BindPhoneForm",
                            onSubmit: r.handleSubmit
                        }, !1, H.a.createElement(Q.a, {
                            type: "register",
                            supportedCountriesShown: !0,
                            manualValidateError: n,
                            onSelect: r.handleChange("selectedCountry"),
                            onChange: r.handleChange("phoneNo")
                        }), H.a.createElement(ie, {
                            key: "sms-input",
                            resetText: o,
                            interceptTime: t,
                            countDownEvent: r.handleSendDigits,
                            manualValidateError: a
                        }), H.a.createElement("div", {className: "BindPhone-helpWrapper"}, H.a.createElement(G.c, {
                            className: "BindPhone-helpText",
                            preset: "link",
                            onClick: function () {
                                r.setState({showFooter: !0})
                            }
                        }, "需要帮助？")), H.a.createElement(G.c, {
                            className: "SignFlowActive-sendDigits",
                            preset: "primary",
                            color: "blue",
                            type: "submit",
                            onClick: r.handleZaOK
                        }, "确认")))
                    }, o = n, s(r, o)
                }

                return f(t, e), ue(t, [{
                    key: "componentDidMount", value: function () {
                        J.default.setModule(this.container, {module: "BindPhoneForm"}), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.onClose, t = this.state.showFooter;
                        return H.a.createElement(Z.b, {
                            title: "设置手机号",
                            subtitle: "绑定手机后，你就可以使用知乎的提问、回答、评论等功能。",
                            footer: t ? "如需要帮助，请联系 i@zhihu.com，我们会尽快帮你解决" : null,
                            onClose: e,
                            size: "default"
                        }, this.renderContent())
                    }
                }]), t
            }(W.Component), B.propTypes = {
                requestPhoneVerificationCode: z.a.func.isRequired,
                updatePhoneNumber: z.a.func.isRequired,
                onClose: z.a.func.isRequired,
                onSuccess: z.a.func.isRequired,
                onNeedUnbind: z.a.func.isRequired
            }, D), se = n(66), fe = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), pe = (R = I = function (e) {
                function t() {
                    var e, n, r, o;
                    p(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.zaKnowMore = function (e) {
                        J.default.trackEvent(e.target, {action: "OpenUrl", name: "了解更多"})
                    }, r.toBindPhone = function (e) {
                        var t = r.props.onBindPhone;
                        J.default.trackEvent(e.target, {action: "OpenUrl", name: "去绑定手机"}), t()
                    }, r.handleClose = function (e) {
                        var t = r.props, n = t.onClose, o = t.config.canWrite;
                        J.default.trackEvent(e.target, {action: "Cancel", name: o ? "暂不绑定" : "取消"}), n()
                    }, r.renderContent = function () {
                        var e = r.props.config, t = e.tip, n = e.canWrite;
                        return H.a.createElement("div", {
                            ref: function (e) {
                                r.container = e
                            }
                        }, H.a.createElement("p", null, t, H.a.createElement(se.a, {
                            preset: "link",
                            target: "_blank",
                            href: "https://zhuanlan.zhihu.com/p/27257715",
                            onClick: r.zaKnowMore
                        }, "了解更多")), H.a.createElement("div", {className: "BindPhone-buttonSection"}, H.a.createElement(se.a, {
                            className: "BindPhone-button",
                            onClick: r.handleClose
                        }, n ? "暂不绑定" : "取消"), H.a.createElement(G.c, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: r.toBindPhone
                        }, "去绑定手机")))
                    }, o = n, d(r, o)
                }

                return h(t, e), fe(t, [{
                    key: "componentDidMount", value: function () {
                        J.default.setModule(this.container, {module: "BindPhoneForm"}), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props.onClose;
                        return H.a.createElement(Z.b, {
                            className: !1,
                            title: "绑定手机",
                            onClose: e,
                            size: "default"
                        }, this.renderContent())
                    }
                }]), t
            }(W.Component), I.propTypes = {config: z.a.object, onClose: z.a.func, onBindPhone: z.a.func}, R),
            de = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), he = (A = q = function (e) {
                function t() {
                    var e, n, r, o;
                    m(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = b(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.handleCancel = function (e) {
                        var t = r.props.onClose;
                        J.default.trackEvent(e.target, {action: "Cancel", name: "不绑定"}), t()
                    }, o = n, b(r, o)
                }

                return y(t, e), de(t, [{
                    key: "componentDidMount", value: function () {
                        J.default.setModule(this.container, {module: "BindMailForm"}), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props.onClose;
                        return H.a.createElement(Z.b, {
                            className: !1,
                            title: "手机号绑定成功",
                            onClose: t,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, "由于你此前绑定的邮箱未经验证，未来请使用手机号登录知乎。"), H.a.createElement(G.c, {
                            className: "BindPhone-remindLoginWithPhoneButton",
                            onClick: this.handleCancel,
                            preset: "primary",
                            color: "blue"
                        }, "知道了")))
                    }
                }]), t
            }(W.Component), q.propTypes = {onClose: z.a.func}, A), me = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), be = (U = F = function (e) {
                function t() {
                    var e, n, r, o;
                    v(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = g(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.handleCancel = function (e) {
                        var t = r.props.onCancel;
                        J.default.trackEvent(e.target, {action: "Click", name: "暂不绑定"}), t()
                    }, r.handleConfirm = function (e) {
                        var t = r.props.onConfirm;
                        J.default.trackEvent(e.target, {action: "Click", name: "确认解绑"}), t()
                    }, o = n, g(r, o)
                }

                return E(t, e), me(t, [{
                    key: "componentDidMount", value: function () {
                        J.default.setModule(this.container, {module: "BindPhoneFailForm"}), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.onClose, r = t.phoneNumber, o = t.bindName, a = t.requiredName;
                        return H.a.createElement(Z.b, {
                            className: !1,
                            title: "绑定失败",
                            onClose: n,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, "你所输入的手机号 ", r, " 已经被绑定到帐号「", o, "」。"), !1, H.a.createElement("p", null, "你可以选择将该手机号从该帐号中解绑，并绑定至当前帐号「", a, "」。"), !1, H.a.createElement("p", null, H.a.createElement("b", null, "解绑后，你将无法再通过手机号登录原帐号「", o, "」。")), H.a.createElement("div", {className: "BindPhone-buttonSection"}, H.a.createElement(G.c, {
                            className: "BindPhone-button",
                            onClick: this.handleConfirm
                        }, "确认解绑"), H.a.createElement(G.c, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: this.handleCancel
                        }, "暂不绑定"))))
                    }
                }]), t
            }(W.Component), F.propTypes = {
                onClose: z.a.func.isRequired,
                onCancel: z.a.func.isRequired,
                onConfirm: z.a.func.isRequired,
                phoneNumber: z.a.string.isRequired,
                bindName: z.a.string.isRequired,
                requiredName: z.a.string.isRequired
            }, U), ye = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(), ve = (x = M = function (e) {
                function t() {
                    var e, n, r, o;
                    w(this, t);
                    for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                    return n = r = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.handleUnbind = function (e) {
                        var t = r.props, n = t.onSuccess, o = t.monopolizePhoneNumber, a = t.showNotification;
                        J.default.trackEvent(e.target, {action: "Click", name: "确认解绑"}), o().then(function () {
                            return a("绑定成功！", "white"), n()
                        })
                    }, r.handleCancel = function (e) {
                        var t = r.props.onCancel;
                        J.default.trackEvent(e.target, {action: "Click", name: "暂不绑定"}), t()
                    }, o = n, C(r, o)
                }

                return O(t, e), ye(t, [{
                    key: "componentDidMount", value: function () {
                        J.default.setModule(this.container, {module: "BindPhoneVerifyForm"}), J.default.trackCardShow(this.container)
                    }
                }, {
                    key: "render", value: function () {
                        var e = this, t = this.props, n = t.onClose, r = t.bindName;
                        return H.a.createElement(Z.b, {
                            className: !1,
                            title: "解绑手机",
                            onClose: n,
                            size: "default"
                        }, H.a.createElement("div", {
                            ref: function (t) {
                                e.container = t
                            }
                        }, H.a.createElement("p", null, H.a.createElement("b", null, "解绑操作无法撤销。")), !1, H.a.createElement("p", null, "如果你没有其他登录方式，你将无法再使用帐号「", r, "」。"), H.a.createElement("div", {className: "BindPhone-buttonSection"}, H.a.createElement(G.c, {
                            className: "BindPhone-button",
                            onClick: this.handleUnbind
                        }, "确认解绑"), H.a.createElement(G.c, {
                            className: "BindPhone-button",
                            preset: "primary",
                            color: "blue",
                            onClick: this.handleCancel
                        }, "暂不绑定"))))
                    }
                }]), t
            }(W.Component), M.propTypes = {
                onClose: z.a.func.isRequired,
                onSuccess: z.a.func.isRequired,
                onCancel: z.a.func.isRequired,
                bindName: z.a.string.isRequired,
                showNotification: z.a.func.isRequired,
                monopolizePhoneNumber: z.a.string.isRequired
            }, x), ge = n(269), Ee = n(21), we = n(19);
        n.d(t, "default", function () {
            return De
        });
        var Ce, Oe, Pe, Ne, Se, _e, ke = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), Te = "LOGIN_WITH_PHONE", je = "NEED_UNBIND", Be = function (e, t) {
            var n = e.account, r = t.currentUser, o = r.isActive, a = r.email;
            return {
                account: n,
                hasActiveEmail: o && a,
                needShowLoginWithPhoneNumber: !o && !!a,
                config: ce.E,
                isWindow: ce.E.isWindow
            }
        }, De = (Ce = Object(Y.b)(), Oe = Object(L.connect)(Be, {
            requestPhoneVerificationCode: ge.l,
            updatePhoneNumber: ge.t,
            monopolizePhoneNumber: ge.i,
            showNotification: we.g,
            getUnlockRequest: ge.g,
            unlockTicketByDigits: ge.p,
            requestUnlockTicket: ge.m,
            unlockTicketByPassword: ge.q,
            loadCurrentUser: Ee.i
        }), Pe = Object(Y.a)({
            load: function (e) {
                return e.loadCurrentUser("email,is_active")
            }, shouldLoad: function (e) {
                if (!e.currentUser) return !1;
                var t = e.currentUser, n = t.email, r = t.isActive;
                return void 0 === n || void 0 === r
            }
        }), Ce(Ne = Oe(Ne = Pe((_e = Se = function (e) {
            function t() {
                var e, n, r, o;
                P(this, t);
                for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
                return n = r = N(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(i))), r.state = {}, r.handleBindPhoneSuccess = function () {
                    var e = r.props, t = e.needShowLoginWithPhoneNumber, n = e.showNotification, o = e.onToggle;
                    return t ? r.goToStep(Te)() : (n("绑定成功！", "white"), setTimeout(function () {
                        return location.reload()
                    }, 2e3), o())
                }, r.handleNeedUnbind = function (e) {
                    var t = e.bindName, n = e.phoneNumber, o = e.requiredName;
                    return r.setState({bindName: t, phoneNumber: n, requiredName: o, step: je})
                }, r.goToStep = function (e) {
                    return function () {
                        return r.setState({step: e})
                    }
                }, r.handleCloseWithReload = function () {
                    return location.reload()
                }, o = n, N(r, o)
            }

            return S(t, e), ke(t, [{
                key: "componentWillReceiveProps", value: function (e) {
                    var t = this.props, n = t.getUnlockRequest, r = t.hasActiveEmail, o = t.shown, a = t.isWindow,
                        i = t.account, c = i.errorStatus, u = i.challenge,
                        l = document.querySelector(".VerificationDialogModalHeader");
                    if (e.shown && !o) {
                        a || n();
                        var s = "";
                        s = r ? "CONFIRM_BIND_PHONE" : !a && c && !l && u && u.length ? "SAFETY_VERIFICATION" : "BIND_PHONE", this.setState({step: s})
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.shown, n = e.requestPhoneVerificationCode, r = e.updatePhoneNumber,
                        o = e.monopolizePhoneNumber, a = e.showNotification, i = e.config, c = e.account,
                        u = e.isWindow, l = e.unlockTicketByDigits, s = e.requestUnlockTicket,
                        f = e.unlockTicketByPassword, p = e.onToggle, d = this.state, h = d.step, m = d.bindName,
                        b = d.phoneNumber, y = d.requiredName;
                    return t ? "CONFIRM_BIND_PHONE" === h ? H.a.createElement(pe, {
                        onBindPhone: this.goToStep(u ? "BIND_PHONE" : "SAFETY_VERIFICATION"),
                        onClose: p,
                        config: i
                    }) : "BIND_PHONE" === h ? H.a.createElement(le, {
                        onClose: p,
                        onSuccess: this.handleBindPhoneSuccess,
                        onNeedUnbind: this.handleNeedUnbind,
                        requestPhoneVerificationCode: n,
                        updatePhoneNumber: r
                    }) : h === Te ? H.a.createElement(he, {onClose: this.handleCloseWithReload}) : h === je ? H.a.createElement(be, {
                        onClose: p,
                        onCancel: this.goToStep("BIND_PHONE"),
                        onConfirm: this.goToStep("CONFIRM_UNBIND"),
                        bindName: m,
                        phoneNumber: b,
                        requiredName: y
                    }) : "CONFIRM_UNBIND" === h ? H.a.createElement(ve, {
                        onClose: p,
                        onSuccess: this.handleBindPhoneSuccess,
                        onCancel: this.goToStep("BIND_PHONE"),
                        bindName: m,
                        monopolizePhoneNumber: o,
                        showNotification: a
                    }) : "SAFETY_VERIFICATION" === h ? H.a.createElement(K.a, {
                        isShown: !0,
                        account: c,
                        unlockTicketByDigits: l,
                        requestUnlockTicket: s,
                        unlockTicketByPassword: f,
                        onClose: p,
                        onSuccess: this.goToStep("BIND_PHONE"),
                        zaModuleName: "BindMailForm"
                    }) : null : null
                }
            }]), t
        }(W.Component), Se.propTypes = {
            shown: z.a.bool.isRequired,
            onToggle: z.a.func.isRequired,
            needShowLoginWithPhoneNumber: z.a.bool.isRequired,
            config: z.a.object.isRequired,
            requestPhoneVerificationCode: z.a.func.isRequired,
            updatePhoneNumber: z.a.func.isRequired,
            monopolizePhoneNumber: z.a.func.isRequired
        }, Ne = _e)) || Ne) || Ne) || Ne)
    }
});
//# sourceMappingURL=main.signflow.c3d5843bb23e2af66024.js.map