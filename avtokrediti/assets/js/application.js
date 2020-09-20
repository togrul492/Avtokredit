function adriver(e, t, n, i) {
	var r = this,
		o = e;
	return this instanceof adriver ? ("string" == typeof o ? o = document.getElementById(e) : e = o.id, o || i ? adriver(e) ? adriver(e) : (r.p = o, r.defer = n, r.prm = adriver.extend(t, {
		ph: e
	}), i || adriver.initQueue.push(function () {
		r.init()
	}), r.loadCompleteQueue = new adriver.queue, r.domReadyQueue = new adriver.queue(adriver.isDomReady), adriver.items[e] = r) : (adriver.isDomReady || adriver.onDomReady(function () {
		new adriver(e, t, n, i)
	}), {})) : e ? adriver.items[e] : adriver.items
}

function getParamFromUrl(e) {
	var t = new RegExp("(?:(\\[|%5B)?" + e + "(\\]|%5D)?=)(.*?)(?=&|$)"),
		n = window.location.href.match(t);
	return n ? n[3] : ""
}

function dynamicSelect(e, t, n) {
	var i, r;
	n ? (i = $(e)[0], r = $(t)[0]) : (i = document.getElementById(e), r = document.getElementById(t));
	for (var o = r.cloneNode(!0).children, s = [], a = 0, l = o.length; a < l; a++) s[a] = o[a].cloneNode(!0);
	refreshDynamicSelectOptions(i, r, s), i.onchange = function () {
		refreshDynamicSelectOptions(i, r, s)
	}
}

function refreshDynamicSelectOptions(e, t, n) {
	for (; t.firstChild;) t.removeChild(t.firstChild);
	for (var i = /^\s*$/, r = -1 !== e.selectedIndex ? new RegExp("( |^)(" + e.options[e.selectedIndex].value + ")( |$)") : null, o = 0; o < n.length; o++)(n[o].className.match(i) || n[o].className.match(r)) && t.appendChild(n[o].cloneNode(!0))
}! function (e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).bugsnag = e()
	}
}(function () {
	function u(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function e() {
		return G((Math.random() * le << 0).toString(ae), se)
	}

	function t() {
		return oe = oe < le ? oe : 0, ++oe - 1
	}

	function n() {
		return "c" + (new Date).getTime().toString(ae) + G(t().toString(ae), se) + re() + (e() + e())
	}

	function i(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function r(e) {
		switch (Object.prototype.toString.call(e)) {
			case "[object Error]":
			case "[object Exception]":
			case "[object DOMException]":
				return !0;
			default:
				return e instanceof Error
		}
	}

	function l(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function o(e) {
		var t = [e.tagName];
		if (e.id && t.push("#" + e.id), e.className && e.className.length && t.push("." + e.className.split(" ").join(".")), !document.querySelectorAll || !Array.prototype.indexOf) return t.join("");
		try {
			if (1 === document.querySelectorAll(t.join("")).length) return t.join("")
		} catch (i) {
			return t.join("")
		}
		if (1 < e.parentNode.childNodes.length) {
			var n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
			t.push(":nth-child(" + n + ")")
		}
		return 1 === document.querySelectorAll(t.join("")).length ? t.join("") : e.parentNode ? o(e.parentNode) + " > " + t.join("") : t.join("")
	}

	function s(e, t) {
		var n = "(...)";
		return e && e.length <= t ? e : e.slice(0, t - n.length) + n
	}

	function c() {
		if (!ut(dt(), this[at])) {
			var e = {
				status: this.status,
				request: this[lt] + " " + this[at]
			};
			400 <= this.status ? ct.leaveBreadcrumb("XMLHttpRequest failed", e, ot) : ct.leaveBreadcrumb("XMLHttpRequest succeeded", e, ot)
		}
	}

	function d() {
		ut(dt(), this[at]) || ct.leaveBreadcrumb("XMLHttpRequest error", {
			request: this[lt] + " " + this[at]
		}, ot)
	}

	function p(e) {
		return "[Throws: " + (e ? e.message : "?") + "]"
	}

	function m(e, t) {
		for (var n = 0, i = e.length; n < i; n++)
			if (e[n] === t) return !0;
		return !1
	}

	function g(e) {
		return "[object Array]" === Object.prototype.toString.call(e)
	}

	function v(e, t) {
		try {
			return e[t]
		} catch (n) {
			return p(n)
		}
	}

	function f(e) {
		function d(e, t) {
			function n() {
				return Lt < t && Ft < h
			}
			if (h++, t === undefined && (t = 0), Ot < t) return Mt;
			if (n()) return Mt;
			if (null === e || "object" != typeof e) return e;
			if (m(f, e)) return "[Circular]";
			if (f.push(e), "function" == typeof e.toJSON) try {
				h--;
				var i = d(e.toJSON(), t);
				return f.pop(), i
			} catch (u) {
				return p(u)
			}
			if (g(e)) {
				for (var r = [], o = 0, s = e.length; o < s; o++) {
					if (n()) {
						r.push(Mt);
						break
					}
					r.push(d(e[o], t + 1))
				}
				return f.pop(), r
			}
			var a = {};
			try {
				for (var l in e)
					if (Object.prototype.hasOwnProperty.call(e, l)) {
						if (n()) {
							a[l] = Mt;
							break
						}
						a[l] = d(v(e, l), t + 1)
					}
			} catch (c) {}
			return f.pop(), a
		}
		var f = [],
			h = 0;
		return d(e)
	}
	var h, y = function (e, t, n) {
			for (var i = n, r = 0, o = e.length; r < o; r++) i = t(i, e[r], r, e);
			return i
		},
		b = function (e, r) {
			return y(e, function (e, t, n, i) {
				return r(t, n, i) ? e.concat(t) : e
			}, [])
		},
		w = function (e, r) {
			return y(e, function (e, t, n, i) {
				return e.concat(r(t, n, i))
			}, [])
		},
		x = function (e, n) {
			return y(e, function (e, t) {
				return !0 === e || t === n
			}, !1)
		},
		_ = !{
			toString: null
		}.propertyIsEnumerable("toString"),
		C = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
		S = function (e) {
			return e < 10 ? "0" + e : e
		},
		k = {
			map: w,
			reduce: y,
			filter: b,
			includes: x,
			keys: function (e) {
				var t = [],
					n = void 0;
				for (n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
				if (!_) return t;
				for (var i = 0, r = C.length; i < r; i++) Object.prototype.hasOwnProperty.call(e, C[i]) && t.push(C[i]);
				return t
			},
			isArray: function (e) {
				return "[object Array]" === Object.prototype.toString.call(e)
			},
			isoDate: function () {
				var e = new Date;
				return e.getUTCFullYear() + "-" + S(e.getUTCMonth() + 1) + "-" + S(e.getUTCDate()) + "T" + S(e.getUTCHours()) + ":" + S(e.getUTCMinutes()) + ":" + S(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
			}
		},
		E = k.isoDate,
		T = function () {
			function l(e, t, n, i) {
				var r = 0 < arguments.length && e !== undefined ? e : "[anonymous]",
					o = 1 < arguments.length && t !== undefined ? t : {},
					s = 2 < arguments.length && n !== undefined ? n : "manual",
					a = 3 < arguments.length && i !== undefined ? i : E();
				u(this, l), this.type = s, this.name = r, this.metaData = o, this.timestamp = a
			}
			return l.prototype.toJSON = function e() {
				return {
					type: this.type,
					name: this.name,
					timestamp: this.timestamp,
					metaData: this.metaData
				}
			}, l
		}(),
		$ = {},
		D = k.includes;
	$.positiveIntIfDefined = function (e) {
		return D(["undefined", "number"], typeof e) && parseInt("" + e, 10) === e && 0 < e
	}, $.stringWithLength = function (e) {
		return "string" == typeof e && !!e.length
	};
	var I = {},
		P = k.filter,
		j = k.reduce,
		N = k.keys,
		A = k.isArray,
		O = k.includes,
		F = $.positiveIntIfDefined,
		L = $.stringWithLength;
	I.schema = {
		apiKey: {
			defaultValue: function () {
				return null
			},
			message: "is required",
			validate: L
		},
		appVersion: {
			defaultValue: function () {
				return null
			},
			message: "should be a string",
			validate: function (e) {
				return null === e || L(e)
			}
		},
		autoNotify: {
			defaultValue: function () {
				return !0
			},
			message: "should be true|false",
			validate: function (e) {
				return !0 === e || !1 === e
			}
		},
		beforeSend: {
			defaultValue: function () {
				return []
			},
			message: "should be a function or array of functions",
			validate: function (e) {
				return "function" == typeof e || A(e) && P(e, function (e) {
					return "function" == typeof e
				}).length === e.length
			}
		},
		endpoints: {
			defaultValue: function () {
				return {
					notify: "https://notify.bugsnag.com",
					sessions: "https://sessions.bugsnag.com"
				}
			},
			message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
			validate: function (e, t) {
				return e && "object" == typeof e && L(e.notify) && (!1 === t.autoCaptureSessions || L(e.sessions)) && 0 === P(N(e), function (e) {
					return !O(["notify", "sessions"], e)
				}).length
			}
		},
		autoCaptureSessions: {
			defaultValue: function (e, t) {
				return t.endpoints === undefined || !!t.endpoints && !!t.endpoints.sessions
			},
			message: "should be true|false",
			validate: function (e) {
				return !0 === e || !1 === e
			}
		},
		notifyReleaseStages: {
			defaultValue: function () {
				return null
			},
			message: "should be an array of strings",
			validate: function (e) {
				return null === e || A(e) && P(e, function (e) {
					return "string" == typeof e
				}).length === e.length
			}
		},
		releaseStage: {
			defaultValue: function () {
				return "production"
			},
			message: "should be a string",
			validate: function (e) {
				return "string" == typeof e && e.length
			}
		},
		maxBreadcrumbs: {
			defaultValue: function () {
				return 20
			},
			message: "should be a number \u226440",
			validate: function (e) {
				return 0 === e || F(e) && (e === undefined || e <= 40)
			}
		},
		autoBreadcrumbs: {
			defaultValue: function () {
				return !0
			},
			message: "should be true|false",
			validate: function (e) {
				return "boolean" == typeof e
			}
		},
		user: {
			defaultValue: function () {
				return null
			},
			message: "(object) user should be an object",
			validate: function (e) {
				return "object" == typeof e
			}
		},
		metaData: {
			defaultValue: function () {
				return null
			},
			message: "should be an object",
			validate: function (e) {
				return "object" == typeof e
			}
		},
		logger: {
			defaultValue: function () {
				return undefined
			},
			message: "should be null or an object with methods { debug, info, warn, error }",
			validate: function (n) {
				return !n || n && j(["debug", "info", "warn", "error"], function (e, t) {
					return e && "function" == typeof n[t]
				}, !0)
			}
		}
	}, I.mergeDefaults = function (n, i) {
		if (!n || !i) throw new Error("opts and schema objects are required");
		return j(N(i), function (e, t) {
			return e[t] = n[t] !== undefined ? n[t] : i[t].defaultValue(n[t], n), e
		}, {})
	}, I.validate = function (n, i) {
		if (!n || !i) throw new Error("opts and schema objects are required");
		var e = j(N(i), function (e, t) {
			return i[t].validate(n[t], n) ? e : e.concat({
				key: t,
				message: i[t].message,
				value: n[t]
			})
		}, []);
		return {
			valid: !e.length,
			errors: e
		}
	};
	var M = function (e) {
			return e.app && "string" == typeof e.app.releaseStage ? e.app.releaseStage : e.config.releaseStage
		},
		R = function (e) {
			return !(!e || !e.stack && !e.stacktrace && !e["opera#sourceloc"] || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message)
		},
		q = {};
	! function (e, t) {
		"use strict";
		"function" == typeof h && h.amd ? h("stackframe", [], t) : "object" == typeof q ? q = t() : e.StackFrame = t()
	}(this, function () {
		"use strict";

		function n(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		}

		function i(e) {
			return e.charAt(0).toUpperCase() + e.substring(1)
		}

		function e(e) {
			return function () {
				return this[e]
			}
		}

		function t(e) {
			if (e instanceof Object)
				for (var t = 0; t < l.length; t++) e.hasOwnProperty(l[t]) && e[l[t]] !== undefined && this["set" + i(l[t])](e[l[t]])
		}
		var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
			o = ["columnNumber", "lineNumber"],
			s = ["fileName", "functionName", "source"],
			a = ["args"],
			l = r.concat(o, s, a);
		t.prototype = {
			getArgs: function () {
				return this.args
			},
			setArgs: function (e) {
				if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
				this.args = e
			},
			getEvalOrigin: function () {
				return this.evalOrigin
			},
			setEvalOrigin: function (e) {
				if (e instanceof t) this.evalOrigin = e;
				else {
					if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
					this.evalOrigin = new t(e)
				}
			},
			toString: function () {
				return (this.getFunctionName() || "{anonymous}") + ("(" + (this.getArgs() || []).join(",") + ")") + (this.getFileName() ? "@" + this.getFileName() : "") + (n(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (n(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
			}
		};
		for (var u = 0; u < r.length; u++) t.prototype["get" + i(r[u])] = e(r[u]), t.prototype["set" + i(r[u])] = function (t) {
			return function (e) {
				this[t] = Boolean(e)
			}
		}(r[u]);
		for (var c = 0; c < o.length; c++) t.prototype["get" + i(o[c])] = e(o[c]), t.prototype["set" + i(o[c])] = function (t) {
			return function (e) {
				if (!n(e)) throw new TypeError(t + " must be a Number");
				this[t] = Number(e)
			}
		}(o[c]);
		for (var d = 0; d < s.length; d++) t.prototype["get" + i(s[d])] = e(s[d]), t.prototype["set" + i(s[d])] = function (t) {
			return function (e) {
				this[t] = String(e)
			}
		}(s[d]);
		return t
	});
	var H = {};
	! function (e, t) {
		"use strict";
		"function" == typeof h && h.amd ? h("error-stack-parser", ["stackframe"], t) : "object" == typeof H ? H = t(q) : e.ErrorStackParser = t(e.StackFrame)
	}(this, function nn(a) {
		"use strict";
		var t = /(^|@)\S+\:\d+/,
			n = /^\s*at .*(\S+\:\d+|\(native\))/m,
			i = /^(eval@)?(\[native code\])?$/;
		return {
			parse: function r(e) {
				if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
				if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
				if (e.stack) return this.parseFFOrSafari(e);
				throw new Error("Cannot parse given Error object")
			},
			extractLocation: function o(e) {
				if (-1 === e.indexOf(":")) return [e];
				var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
				return [t[1], t[2] || undefined, t[3] || undefined]
			},
			parseV8OrIE: function s(e) {
				return e.stack.split("\n").filter(function (e) {
					return !!e.match(n)
				}, this).map(function (e) {
					-1 < e.indexOf("(eval ") && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
					var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
						n = this.extractLocation(t.pop()),
						i = t.join(" ") || undefined,
						r = -1 < ["eval", "<anonymous>"].indexOf(n[0]) ? undefined : n[0];
					return new a({
						functionName: i,
						fileName: r,
						lineNumber: n[1],
						columnNumber: n[2],
						source: e
					})
				}, this)
			},
			parseFFOrSafari: function l(e) {
				return e.stack.split("\n").filter(function (e) {
					return !e.match(i)
				}, this).map(function (e) {
					if (-1 < e.indexOf(" > eval") && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new a({
						functionName: e
					});
					var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
						n = e.match(t),
						i = n && n[1] ? n[1] : undefined,
						r = this.extractLocation(e.replace(t, ""));
					return new a({
						functionName: i,
						fileName: r[0],
						lineNumber: r[1],
						columnNumber: r[2],
						source: e
					})
				}, this)
			},
			parseOpera: function u(e) {
				return !e.stacktrace || -1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
			},
			parseOpera9: function c(e) {
				for (var t = /Line (\d+).*script (?:in )?(\S+)/i, n = e.message.split("\n"), i = [], r = 2, o = n.length; r < o; r += 2) {
					var s = t.exec(n[r]);
					s && i.push(new a({
						fileName: s[2],
						lineNumber: s[1],
						source: n[r]
					}))
				}
				return i
			},
			parseOpera10: function d(e) {
				for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = e.stacktrace.split("\n"), i = [], r = 0, o = n.length; r < o; r += 2) {
					var s = t.exec(n[r]);
					s && i.push(new a({
						functionName: s[3] || undefined,
						fileName: s[2],
						lineNumber: s[1],
						source: n[r]
					}))
				}
				return i
			},
			parseOpera11: function f(e) {
				return e.stack.split("\n").filter(function (e) {
					return !!e.match(t) && !e.match(/^Error created at/)
				}, this).map(function (e) {
					var t, n = e.split("@"),
						i = this.extractLocation(n.pop()),
						r = n.shift() || "",
						o = r.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
					r.match(/\(([^\)]*)\)/) && (t = r.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
					var s = t === undefined || "[arguments not available]" === t ? undefined : t.split(",");
					return new a({
						functionName: o,
						args: s,
						fileName: i[0],
						lineNumber: i[1],
						columnNumber: i[2],
						source: e
					})
				}, this)
			}
		}
	});
	var B = {};
	! function (e, t) {
		"use strict";
		"function" == typeof h && h.amd ? h("stack-generator", ["stackframe"], t) : "object" == typeof B ? B = t(q) : e.StackGenerator = t(e.StackFrame)
	}(this, function (a) {
		return {
			backtrace: function l(e) {
				var t = [],
					n = 10;
				"object" == typeof e && "number" == typeof e.maxStackSize && (n = e.maxStackSize);
				for (var i = arguments.callee; i && t.length < n && i.arguments;) {
					for (var r = new Array(i.arguments.length), o = 0; o < r.length; ++o) r[o] = i.arguments[o];
					/function(?:\s+([\w$]+))+\s*\(/.test(i.toString()) ? t.push(new a({
						functionName: RegExp.$1 || undefined,
						args: r
					})) : t.push(new a({
						args: r
					}));
					try {
						i = i.caller
					} catch (s) {
						break
					}
				}
				return t
			}
		}
	});
	var z = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		W = k.reduce,
		U = k.filter,
		X = function () {
			function s(e, t, n, i) {
				var r = 2 < arguments.length && n !== undefined ? n : [],
					o = 3 < arguments.length && i !== undefined ? i : Y();
				a(this, s), this.__isBugsnagReport = !0, this._ignored = !1, this._handledState = o, this.app = undefined, this.apiKey = undefined, this.breadcrumbs = [], this.context = undefined, this.device = undefined, this.errorClass = K(e, "[no error class]"), this.errorMessage = K(t, "[no error message]"), this.groupingHash = undefined, this.metaData = {}, this.request = undefined, this.severity = this._handledState.severity, this.stacktrace = W(r, function (e, t) {
					var n = V(t);
					try {
						return "{}" === JSON.stringify(n) ? e : e.concat(n)
					} catch (i) {
						return e
					}
				}, []), this.user = undefined, this.session = undefined
			}
			return s.prototype.ignore = function e() {
				this._ignored = !0
			}, s.prototype.isIgnored = function t() {
				return this._ignored
			}, s.prototype.updateMetaData = function o(e, t, n) {
				var i;
				if (!e) return this;
				var r = void 0;
				return null === (arguments.length <= 1 ? undefined : t) ? this.removeMetaData(e) : null === (arguments.length <= 2 ? undefined : n) ? this.removeMetaData(e, arguments.length <= 1 ? undefined : t, arguments.length <= 2 ? undefined : n) : ("object" == typeof (arguments.length <= 1 ? undefined : t) && (r = arguments.length <= 1 ? undefined : t), "string" == typeof (arguments.length <= 1 ? undefined : t) && ((i = {})[arguments.length <= 1 ? undefined : t] = arguments.length <= 2 ? undefined : n, r = i), r && (this.metaData[e] || (this.metaData[e] = {}), this.metaData[e] = z({}, this.metaData[e], r)), this)
			}, s.prototype.removeMetaData = function n(e, t) {
				return "string" != typeof e || (t ? this.metaData[e] && delete this.metaData[e][t] : delete this.metaData[e]), this
			}, s.prototype.toJSON = function i() {
				return {
					payloadVersion: "4",
					exceptions: [{
						errorClass: this.errorClass,
						message: this.errorMessage,
						stacktrace: this.stacktrace,
						type: "browserjs"
					}],
					severity: this.severity,
					unhandled: this._handledState.unhandled,
					severityReason: this._handledState.severityReason,
					app: this.app,
					device: this.device,
					breadcrumbs: this.breadcrumbs,
					context: this.context,
					user: this.user,
					metaData: this.metaData,
					groupingHash: this.groupingHash,
					request: this.request,
					session: this.session
				}
			}, s
		}(),
		V = function (e) {
			var t = {
				file: e.fileName,
				method: Q(e.functionName),
				lineNumber: e.lineNumber,
				columnNumber: e.columnNumber,
				code: undefined,
				inProject: undefined
			};
			return -1 < t.lineNumber && !t.file && !t.method && (t.file = "global code"), t
		},
		Q = function (e) {
			return /^global code$/i.test(e) ? "global code" : e
		},
		Y = function () {
			return {
				unhandled: !1,
				severity: "warning",
				severityReason: {
					type: "handledException"
				}
			}
		},
		K = function (e, t) {
			return "string" == typeof e && e ? e : t
		};
	X.getStacktrace = function (e, t, n) {
		var i = 1 < arguments.length && t !== undefined ? t : 0,
			r = 2 < arguments.length && n !== undefined ? n : 0;
		return R(e) ? H.parse(e).slice(i) : U(B.backtrace(), function (e) {
			return -1 === (e.functionName || "").indexOf("StackGenerator$$")
		}).slice(1 + r)
	}, X.ensureReport = function (e, t, n) {
		var i = 1 < arguments.length && t !== undefined ? t : 0,
			r = 2 < arguments.length && n !== undefined ? n : 0;
		if (e.__isBugsnagReport) return e;
		try {
			var o = X.getStacktrace(e, i, 1 + r);
			return new X(e.name, e.message, o)
		} catch (s) {
			return new X(e.name, e.message, [])
		}
	};
	var Z = X,
		G = function rn(e, t) {
			var n = "000000000" + e;
			return n.substr(n.length - t)
		},
		J = "object" == typeof window ? window : self,
		ee = 0;
	for (var te in J) Object.hasOwnProperty.call(J, te) && ee++;
	var ne = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
		ie = G((ne + navigator.userAgent.length).toString(36) + ee.toString(36), 4),
		re = function on() {
			return ie
		},
		oe = 0,
		se = 4,
		ae = 36,
		le = Math.pow(ae, se);
	n.fingerprint = re;
	var ue = n,
		ce = k.isoDate,
		de = function () {
			function e() {
				i(this, e), this.id = ue(), this.startedAt = ce(), this._handled = 0, this._unhandled = 0
			}
			return e.prototype.toJSON = function t() {
				return {
					id: this.id,
					startedAt: this.startedAt,
					events: {
						handled: this._handled,
						unhandled: this._unhandled
					}
				}
			}, e.prototype.trackError = function n(e) {
				this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
			}, e
		}(),
		fe = r,
		he = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		pe = k.map,
		me = k.reduce,
		ge = k.includes,
		ve = k.isArray,
		ye = "Usage error.",
		be = "Bugsnag usage error.",
		we = function () {},
		xe = function () {
			function o(e, t, n) {
				var i = 1 < arguments.length && t !== undefined ? t : I.schema,
					r = 2 < arguments.length && n !== undefined ? n : null;
				if (l(this, o), !(e && e.name && e.version && e.url)) throw new Error("`notifier` argument is required");
				this.notifier = e, this.configSchema = i, this._configured = !1, this._transport = {
					sendSession: we,
					sendReport: we
				}, this._logger = {
					debug: we,
					info: we,
					warn: we,
					error: we
				}, this.plugins = [], this.session = r, this.beforeSession = [], this.breadcrumbs = [], this.app = {}, this.context = undefined, this.device = undefined, this.metaData = undefined, this.request = undefined, this.user = {}, this.BugsnagReport = Z, this.BugsnagBreadcrumb = T, this.BugsnagSession = de
			}
			return o.prototype.configure = function i(e) {
				var t = 0 < arguments.length && e !== undefined ? e : {};
				this.config = I.mergeDefaults(he({}, this.config, t), this.configSchema);
				var n = I.validate(this.config, this.configSchema);
				if (!0 == !n.valid) throw new Error(Se(n.errors));
				return "function" == typeof this.config.beforeSend && (this.config.beforeSend = [this.config.beforeSend]), null !== this.config.appVersion && (this.app.version = this.config.appVersion), this.config.metaData && (this.metaData = this.config.metaData), this.config.user && (this.user = this.config.user), this.config.logger && this.logger(this.config.logger), this._configured = !0, this._logger.debug("Loaded!"), this
			}, o.prototype.use = function t(e) {
				return this.plugins.push(e), e.init(this)
			}, o.prototype.transport = function n(e) {
				return this._transport = e, this
			}, o.prototype.logger = function r(e) {
				return this._logger = e, this
			}, o.prototype.sessionDelegate = function s(e) {
				return this._sessionDelegate = e, this
			}, o.prototype.startSession = function e() {
				return this._sessionDelegate ? this._sessionDelegate.startSession(this) : (this._logger.warn("No session implementation is installed"), this)
			}, o.prototype.leaveBreadcrumb = function a(e, t, n, i) {
				if (!this._configured) throw new Error("client not configured");
				if (e = e || undefined, n = "string" == typeof n ? n : undefined, i = "string" == typeof i ? i : undefined, t = "object" == typeof t && null !== t ? t : undefined, "string" == typeof e || t) {
					var r = new T(e, t, n, i);
					return this.breadcrumbs.push(r), this.breadcrumbs.length > this.config.maxBreadcrumbs && (this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs)), this
				}
			}, o.prototype.notify = function f(e, t) {
				var n = 1 < arguments.length && t !== undefined ? t : {};
				if (!this._configured) throw new Error("client not configured");
				var i = M(this),
					r = _e(e, n, this._logger),
					o = r.err,
					s = r.errorFramesToSkip,
					a = r._opts;
				if (a && (n = a), !o) {
					var l = ke("nothing");
					this._logger.warn(ye + " " + l), o = new Error(be + " " + l)
				}
				"object" == typeof n && null !== n || (n = {});
				var u = Z.ensureReport(o, s, 1);
				if (u.app = he({
						releaseStage: i
					}, u.app, this.app), u.context = u.context || n.context || this.context || undefined, u.device = he({}, u.device, this.device, n.device), u.request = he({}, u.request, this.request, n.request), u.user = he({}, u.user, this.user, n.user), u.metaData = he({}, u.metaData, this.metaData, n.metaData), u.breadcrumbs = this.breadcrumbs.slice(0), this.session && (this.session.trackError(u), u.session = this.session), n.severity !== undefined && (u.severity = n.severity, u._handledState.severityReason = {
						type: "userSpecifiedSeverity"
					}), ve(this.config.notifyReleaseStages) && !ge(this.config.notifyReleaseStages, i)) return this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration"), !1;
				var c = u.severity,
					d = [].concat(n.beforeSend).concat(this.config.beforeSend);
				return me(d, function (e, t) {
					return !0 === e || ("function" == typeof t && !1 === t(u) || !!u.isIgnored())
				}, !1) ? (this._logger.debug("Report not sent due to beforeSend callback"), !1) : (this.config.autoBreadcrumbs && this.leaveBreadcrumb(u.errorClass, {
					errorClass: u.errorClass,
					errorMessage: u.errorMessage,
					severity: u.severity
				}, "error"), c !== u.severity && (u._handledState.severityReason = {
					type: "userCallbackSetSeverity"
				}), this._transport.sendReport(this._logger, this.config, {
					apiKey: u.apiKey || this.config.apiKey,
					notifier: this.notifier,
					events: [u]
				}), !0)
			}, o
		}(),
		_e = function (e, t, n) {
			var i = void 0,
				r = 0,
				o = void 0;
			switch (typeof e) {
				case "string":
					if ("string" == typeof t) {
						var s = ke("string/string");
						n.warn(ye + " " + s), i = new Error(be + " " + s), o = {
							metaData: {
								notifier: {
									notifyArgs: [e, t]
								}
							}
						}
					} else i = new Error(String(e)), r += 2;
					break;
				case "number":
				case "boolean":
					i = new Error(String(e));
					break;
				case "function":
					var a = ke("function");
					n.warn(ye + " " + a), i = new Error(be + " " + a);
					break;
				case "object":
					if (null !== e && (fe(e) || e.__isBugsnagReport)) i = e;
					else if (null !== e && Ce(e))(i = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass, r += 2;
					else {
						var l = ke("unsupported object");
						n.warn(ye + " " + l), i = new Error(be + " " + l)
					}
			}
			return {
				err: i,
				errorFramesToSkip: r,
				_opts: o
			}
		},
		Ce = function (e) {
			return !("string" != typeof e.name && "string" != typeof e.errorClass || "string" != typeof e.message && "string" != typeof e.errorMessage)
		},
		Se = function (e) {
			return "Bugsnag configuration error\n" + pe(e, function (e) {
				return '"' + e.key + '" ' + e.message + " \n    got " + Ee(e.value)
			}).join("\n\n")
		},
		ke = function (e) {
			return "notify() expected error/opts parameters, got " + e
		},
		Ee = function (e) {
			return "object" == typeof e ? JSON.stringify(e) : String(e)
		},
		Te = xe,
		$e = $.positiveIntIfDefined,
		De = {
			init: function (t) {
				var n = 0;
				t.config.beforeSend.push(function (e) {
					if (n >= t.config.maxEvents) return e.ignore();
					n++
				}), t.refresh = function () {
					n = 0
				}
			},
			configSchema: {
				maxEvents: {
					defaultValue: function () {
						return 10
					},
					message: "should be a positive integer \u2264100",
					validate: function (e) {
						return $e(e) && e < 100
					}
				}
			}
		},
		Ie = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		Pe = I.schema,
		je = k.map,
		Ne = {
			releaseStage: {
				defaultValue: function () {
					return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
				},
				message: "should be set",
				validate: $.stringWithLength
			},
			collectUserIp: {
				defaultValue: function () {
					return !0
				},
				message: "should be true|false",
				validate: function (e) {
					return !0 === e || !1 === e
				}
			},
			logger: Ie({}, Pe.logger, {
				defaultValue: function () {
					return "undefined" != typeof console && "function" == typeof console.debug ? Ae() : undefined
				}
			})
		},
		Ae = function () {
			var n = {},
				i = console.log;
			return je(["debug", "info", "warn", "error"], function (e) {
				var t = console[e];
				n[e] = "function" == typeof t ? t.bind(console, "[bugsnag]") : i.bind(console, "[bugsnag]")
			}), n
		},
		Oe = {},
		Fe = k.map,
		Le = k.reduce,
		Me = k.filter;
	Oe.init = function (o) {
		Fe(Re, function (i) {
			var r = console[i];
			console[i] = function () {
				for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				o.leaveBreadcrumb("Console output", Le(t, function (e, t, n) {
					var i = String(t);
					if ("[object Object]" === i) try {
						i = JSON.stringify(t)
					} catch (r) {}
					return e["[" + n + "]"] = i, e
				}, {
					severity: 0 === i.indexOf("group") ? "log" : i
				}), "log"), r.apply(console, t)
			}, console[i]._restore = function () {
				console[i] = r
			}
		})
	}, Oe.configSchema = {
		consoleBreadcrumbsEnabled: {
			defaultValue: function () {
				return undefined
			},
			validate: function (e) {
				return !0 === e || !1 === e || e === undefined
			},
			message: "should be true|false"
		}
	};
	var Re = Me(["log", "debug", "info", "warn", "error"], function (e) {
			return "undefined" != typeof console && "function" == typeof console[e]
		}),
		qe = {
			init: function (e) {
				e.config.beforeSend.unshift(function (e) {
					e.context || (e.context = window.location.pathname)
				})
			}
		},
		He = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		Be = k.isoDate,
		ze = {
			init: function (e) {
				e.config.beforeSend.unshift(function (e) {
					e.device = He({
						time: Be(),
						locale: navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || navigator.language,
						userAgent: navigator.userAgent
					}, e.device)
				}), e.beforeSession.push(function (e) {
					e.device = {
						userAgent: navigator.userAgent
					}
				})
			}
		},
		We = {},
		Ue = k.reduce,
		Xe = /^.*<script.*?>/,
		Ve = /<\/script>.*$/,
		Qe = (We = {
			init: function (e) {
				var a = "",
					l = !1,
					u = function () {
						return document.documentElement.outerHTML
					},
					c = window.location.href,
					t = function (e) {
						var i = e.stacktrace[0];
						if (!i || !i.file || !i.lineNumber) return i;
						if (i.file.replace(/#.*$/, "") !== c.replace(/#.*$/, "")) return i;
						l && a || (a = u());
						var t = ["<!-- DOC START -->"].concat(a.split("\n")),
							n = Qe(t, i.lineNumber - 1),
							r = n.script,
							o = n.start,
							s = Ue(r, function (e, t, n) {
								return 10 < Math.abs(o + n + 1 - i.lineNumber) || (e["" + (o + n + 1)] = t), e
							}, {});
						i.code = s, e.updateMetaData("script", {
							content: r.join("\n")
						})
					};
				a = u(), document.onreadystatechange = function () {
					"interactive" === document.readyState && (a = u(), l = !0)
				}, e.config.beforeSend.unshift(t)
			}
		}).extractScriptContent = function (e, t) {
			for (var n = t; n < e.length && !Ve.test(e[n]);) n++;
			for (var i = n; 0 < n && !Xe.test(e[n]);) n--;
			var r = n,
				o = e.slice(r, i + 1);
			return o[0] = o[0].replace(Xe, ""), o[o.length - 1] = o[o.length - 1].replace(Ve, ""), {
				script: o,
				start: r
			}
		},
		Ye = {
			init: function (r) {
				"addEventListener" in window && window.addEventListener("click", function (e) {
					var t = void 0,
						n = void 0;
					try {
						t = Ke(e.target), n = o(e.target)
					} catch (i) {
						n = t = "[hidden]", r._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm")
					}
					r.leaveBreadcrumb("UI click", {
						targetText: t,
						targetSelector: n
					}, "user")
				}, !0)
			},
			configSchema: {
				interactionBreadcrumbsEnabled: {
					defaultValue: function () {
						return undefined
					},
					validate: function (e) {
						return !0 === e || !1 === e || e === undefined
					},
					message: "should be true|false"
				}
			}
		},
		Ke = function (e) {
			var t = e.textContent || e.innerText || "";
			return t || "submit" !== e.type && "button" !== e.type || (t = e.value), s(t = t.replace(/^\s+|\s+$/g, ""), 140)
		},
		Ze = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		Ge = {
			init: function (e) {
				e.config.collectUserIp || e.config.beforeSend.push(function (e) {
					e.user = Ze({
						id: "[NOT COLLECTED]"
					}, e.user), e.request = Ze({
						clientIp: "[NOT COLLECTED]"
					}, e.request)
				})
			}
		},
		Je = {
			init: function (n) {
				if ("addEventListener" in window) {
					var e = function (e) {
						return function () {
							return n.leaveBreadcrumb(e, {}, "navigation")
						}
					};
					window.addEventListener("pagehide", e("Page hidden"), !0), window.addEventListener("pageshow", e("Page shown"), !0), window.addEventListener("load", e("Page loaded"), !0), window.document.addEventListener("DOMContentLoaded", e("DOMContentLoaded"), !0), window.addEventListener("load", function () {
						return window.addEventListener("popstate", e("Navigated back"), !0)
					}), window.addEventListener("hashchange", function (e) {
						var t = e.oldURL ? {
							from: et(e.oldURL),
							to: et(e.newURL),
							state: it()
						} : {
							to: et(window.location.href)
						};
						n.leaveBreadcrumb("Hash changed", t, "navigation")
					}, !0), window.history.replaceState && nt(n, window.history, "replaceState"), window.history.pushState && nt(n, window.history, "pushState"), n.leaveBreadcrumb("Bugsnag loaded", {}, "navigation")
				}
			}
		};
	Je.configSchema = {
		navigationBreadcrumbsEnabled: {
			defaultValue: function () {
				return undefined
			},
			validate: function (e) {
				return !0 === e || !1 === e || e === undefined
			},
			message: "should be true|false"
		}
	};
	var et = function (e) {
			var t = document.createElement("A");
			return t.href = e, "" + t.pathname + t.search + t.hash
		},
		tt = function (e, t, n) {
			var i = et(window.location.href);
			return {
				title: t,
				state: e,
				prevState: it(),
				to: n || i,
				from: i
			}
		},
		nt = function (i, r, o) {
			var s = r[o];
			r[o] = function (e, t, n) {
				i.leaveBreadcrumb("History " + o, tt(e, t, n), "navigation"), "function" == typeof i.refresh && i.refresh(), i.session && i.startSession(), s.apply(r, [e, t].concat(n !== undefined ? n : []))
			}, r[o]._restore = function () {
				r[o] = s
			}
		},
		it = function () {
			try {
				return window.history.state
			} catch (e) {}
		},
		rt = {},
		ot = "request",
		st = "BS~~S",
		at = "BS~~U",
		lt = "BS~~M",
		ut = k.includes,
		ct = void 0,
		dt = function () {
			return [ct.config.endpoints.notify, ct.config.endpoints.sessions]
		};
	rt.init = function (e) {
		ct = e, ft(), ht()
	}, rt.configSchema = {
		networkBreadcrumbsEnabled: {
			defaultValue: function () {
				return undefined
			},
			validate: function (e) {
				return !0 === e || !1 === e || e === undefined
			},
			message: "should be true|false"
		}
	};
	var ft = function () {
			if ("addEventListener" in window.XMLHttpRequest.prototype) {
				var n = window.XMLHttpRequest.prototype.open;
				window.XMLHttpRequest.prototype.open = function i(e, t) {
					this[at] = t, this[lt] = e, this[st] && (this.removeEventListener("load", c), this.removeEventListener("error", d)), this.addEventListener("load", c), this.addEventListener("error", d), this[st] = !0, n.apply(this, arguments)
				}
			}
		},
		ht = function () {
			if ("fetch" in window) {
				var s = window.fetch;
				window.fetch = function a() {
					for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) i[t] = arguments[t];
					var r = i[0],
						n = i[1],
						o = "GET";
					return n && n.method && (o = n.method), new Promise(function (t, n) {
						s.apply(undefined, i).then(function (e) {
							pt(e, o, r), t(e)
						})["catch"](function (e) {
							mt(o, r), n(e)
						})
					})
				}
			}
		},
		pt = function (e, t, n) {
			var i = {
				status: e.status,
				request: t + " " + n
			};
			400 <= e.status ? ct.leaveBreadcrumb("fetch() failed", i, ot) : ct.leaveBreadcrumb("fetch() succeeded", i, ot)
		},
		mt = function (e, t) {
			ct.leaveBreadcrumb("fetch() error", {
				request: e + " " + t
			}, ot)
		},
		gt = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		vt = {
			init: function (e) {
				e.config.beforeSend.unshift(function (e) {
					e.request && e.request.url || (e.request = gt({}, e.request, {
						url: window.location.href
					}))
				})
			}
		},
		yt = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		bt = k.map,
		wt = k.isArray,
		xt = k.includes,
		_t = {
			init: function (e) {
				return e.sessionDelegate(Ct)
			}
		},
		Ct = {
			startSession: function (e) {
				var t = e;
				t.session = new e.BugsnagSession, bt(t.beforeSession, function (e) {
					return e(t)
				});
				var n = M(t);
				return wt(t.config.notifyReleaseStages) && !xt(t.config.notifyReleaseStages, n) ? t._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration") : t.config.endpoints.sessions ? t._transport.sendSession(t._logger, t.config, {
					notifier: t.notifier,
					device: t.device,
					app: yt({
						releaseStage: n
					}, t.app),
					sessions: [{
						id: t.session.id,
						startedAt: t.session.startedAt,
						user: t.user
					}]
				}) : t._logger.warn("Session not sent due to missing endpoints.sessions configuration"), t
			}
		},
		St = {},
		kt = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		Et = k.map,
		Tt = (St = {
			init: function (e) {
				e.config.beforeSend.push(function (e) {
					e.stacktrace = Et(e.stacktrace, function (e) {
						return kt({}, e, {
							file: Tt(e.file)
						})
					})
				})
			}
		})._strip = function (e) {
			return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
		},
		$t = {},
		Dt = k.reduce;
	$t.init = function (s) {
		var n = function (e) {
			var t = e.reason,
				n = !1;
			e.detail && e.detail.reason && (t = e.detail.reason, n = !0);
			var i = {
					severity: "error",
					unhandled: !0,
					severityReason: {
						type: "unhandledPromiseRejection"
					}
				},
				r = void 0;
			if (t && R(t)) r = new s.BugsnagReport(t.name, t.message, H.parse(t), i), n && (r.stacktrace = Dt(r.stacktrace, Pt(t), []));
			else {
				var o = 'Rejection reason was not an Error. See "Promise" tab for more detail.';
				(r = new s.BugsnagReport(t && t.name ? t.name : "UnhandledRejection",
					t && t.message ? t.message : o, [], i)).updateMetaData("promise", "rejection reason", It(t))
			}
			s.notify(r)
		};
		"addEventListener" in window ? window.addEventListener("unhandledrejection", n) : window.onunhandledrejection = function (e, t) {
			n({
				detail: {
					reason: e,
					promise: t
				}
			})
		}, n
	};
	var It = function (e) {
			return null === e || e === undefined ? "undefined (or null)" : fe(e) ? ((t = {})[Object.prototype.toString.call(e)] = {
				name: e.name,
				message: e.message,
				code: e.code,
				stack: e.stack
			}, t) : e;
			var t
		},
		Pt = function (n) {
			return function (e, t) {
				return t.file === n.toString() ? e : (t.method && (t.method = t.method.replace(/^\s+/, "")), e.concat(t))
			}
		},
		jt = {
			init: function (u) {
				var e = function (e, t, n, i, r) {
						if (0 === n && /Script error\.?/.test(e)) u._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm");
						else {
							var o = {
									severity: "error",
									unhandled: !0,
									severityReason: {
										type: "unhandledException"
									}
								},
								s = void 0;
							if (r) r.name && r.message ? s = new u.BugsnagReport(r.name, r.message, Nt(u.BugsnagReport.getStacktrace(r), t, n, i), o) : (s = new u.BugsnagReport("window.onerror", String(r), Nt(u.BugsnagReport.getStacktrace(r, 1), t, n, i), o)).updateMetaData("window onerror", {
								error: r
							});
							else if ("object" != typeof e || null === e || t || n || i || r)(s = new u.BugsnagReport("window.onerror", String(e), Nt(u.BugsnagReport.getStacktrace(r, 1), t, n, i), o)).updateMetaData("window onerror", {
								event: e
							});
							else {
								var a = e.type ? "Event: " + e.type : "window.onerror",
									l = e.message || e.detail || "";
								(s = new u.BugsnagReport(a, l, u.BugsnagReport.getStacktrace(new Error, 1).slice(1), o)).updateMetaData("window onerror", {
									event: e
								})
							}
							u.notify(s), "function" == typeof c && c(e, t, n, i, r)
						}
					},
					c = window.onerror;
				window.onerror = e
			}
		},
		Nt = function (e, t, n, i) {
			var r = e[0];
			return r && (r.fileName || r.setFileName(t), r.lineNumber || r.setLineNumber(n), r.columnNumber || (i !== undefined ? r.setColumnNumber(i) : window.event && window.event.errorCharacter && r.setColumnNumber(window.event && window.event.errorCharacter))), e
		},
		At = function (e, t, n) {
			return JSON.stringify(f(e), t, n)
		},
		Ot = 20,
		Ft = 25e3,
		Lt = 8,
		Mt = "...",
		Rt = function (e) {
			var t = At(e);
			if (1e6 < t.length && (delete e.events[0].metaData, e.events[0].metaData = {
					notifier: "WARNING!\nSerialized payload was " + t.length / 1e6 + "MB (limit = 1MB)\nmetaData was removed"
				}, 1e6 < (t = At(e)).length)) throw new Error("payload exceeded 1MB limit");
			return t
		},
		qt = {},
		Ht = k.isoDate;
	qt = {
		sendReport: function (t, e, n, i) {
			var r = 3 < arguments.length && i !== undefined ? i : function () {},
				o = Bt(e, "notify", "4.0"),
				s = new window.XDomainRequest;
			s.onload = function () {
				r(null, s.responseText)
			}, s.open("POST", o), setTimeout(function () {
				try {
					s.send(Rt(n))
				} catch (e) {
					t.error(e)
				}
			}, 0)
		},
		sendSession: function (t, e, n, i) {
			var r = 3 < arguments.length && i !== undefined ? i : function () {},
				o = Bt(e, "sessions", "1.0"),
				s = new window.XDomainRequest;
			s.onload = function () {
				r(null, s.responseText)
			}, s.open("POST", o), setTimeout(function () {
				try {
					s.send(At(n))
				} catch (e) {
					t.error(e)
				}
			}, 0)
		}
	};
	var Bt = function (e, t, n) {
			return zt(e.endpoints[t], window.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(Ht())
		},
		zt = qt._matchPageProtocol = function (e, t) {
			return "http:" === t ? e.replace(/^https:/, "http:") : e
		},
		Wt = k.isoDate,
		Ut = {
			sendReport: function (e, t, n, i) {
				var r = 3 < arguments.length && i !== undefined ? i : function () {};
				try {
					var o = t.endpoints.notify,
						s = new window.XMLHttpRequest;
					s.onreadystatechange = function () {
						s.readyState === window.XMLHttpRequest.DONE && r(null, s.responseText)
					}, s.open("POST", o), s.setRequestHeader("Content-Type", "application/json"), s.setRequestHeader("Bugsnag-Api-Key", n.apiKey || t.apiKey), s.setRequestHeader("Bugsnag-Payload-Version", "4.0"), s.setRequestHeader("Bugsnag-Sent-At", Wt()), s.send(Rt(n))
				} catch (a) {
					e.error(a)
				}
			},
			sendSession: function (e, t, n, i) {
				var r = 3 < arguments.length && i !== undefined ? i : function () {};
				try {
					var o = t.endpoints.sessions,
						s = new window.XMLHttpRequest;
					s.onreadystatechange = function () {
						s.readyState === window.XMLHttpRequest.DONE && r(null, s.responseText)
					}, s.open("POST", o), s.setRequestHeader("Content-Type", "application/json"), s.setRequestHeader("Bugsnag-Api-Key", t.apiKey), s.setRequestHeader("Bugsnag-Payload-Version", "1.0"), s.setRequestHeader("Bugsnag-Sent-At", Wt()), s.send(At(n))
				} catch (a) {
					e.error(a)
				}
			}
		},
		Xt = {},
		Vt = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		},
		Qt = "Bugsnag JavaScript",
		Yt = "4.7.3",
		Kt = "https://github.com/bugsnag/bugsnag-js",
		Zt = k.map,
		Gt = k.reduce,
		Jt = Vt({}, I.schema, Ne),
		en = [jt, $t, ze, qe, vt, De, Oe, rt, Je, Ye, We, _t, Ge, St];
	Xt = function (e, t) {
		var n = 1 < arguments.length && t !== undefined ? t : [];
		"string" == typeof e && (e = {
			apiKey: e
		});
		var i = [];
		e.sessionTrackingEnabled && (i.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions"), e.autoCaptureSessions = e.sessionTrackingEnabled), !e.endpoint && !e.sessionEndpoint || e.endpoints || (i.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object"), e.endpoints = {
			notify: e.endpoint,
			sessions: e.sessionEndpoint
		}), e.endpoints && e.endpoints.notify && !e.endpoints.sessions && i.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
		var r = Gt([].concat(en).concat(n), function (e, t) {
				return t.configSchema ? Vt({}, e, t.configSchema) : e
			}, Jt),
			o = new Te({
				name: Qt,
				version: Yt,
				url: Kt
			}, r);
		return o.transport(window.XDomainRequest ? qt : Ut), o.configure(e), Zt(i, function (e) {
			return o._logger.warn(e)
		}), o.use(ze), o.use(qe), o.use(vt), o.use(We), o.use(De), o.use(_t), o.use(Ge), o.use(St), !1 !== o.config.autoNotify && (o.use(jt), o.use($t)), tn(o.config, "navigationBreadcrumbsEnabled") && o.use(Je), tn(o.config, "interactionBreadcrumbsEnabled") && o.use(Ye), tn(o.config, "networkBreadcrumbsEnabled") && o.use(rt), tn(o.config, "consoleBreadcrumbsEnabled", !1) && o.use(Oe), Zt(n, function (e) {
			return o.use(e)
		}), o.config.autoCaptureSessions ? o.startSession() : o
	};
	var tn = function (e, t, n) {
		var i = !(2 < arguments.length && n !== undefined) || n;
		return "boolean" == typeof e[t] ? e[t] : e.autoBreadcrumbs && (i || !/^dev(elopment)?$/.test(e.releaseStage))
	};
	return Xt.Bugsnag = {
		Client: Te,
		Report: Z,
		Session: de,
		Breadcrumb: T
	}, Xt["default"] = Xt
}),
function () {
	bugsnag({
		apiKey: "4172eaa2ede6ad256443f28bdf5dc41c",
		autoNotify: !0
	})
}.call(this),
	function (e, t) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return t(e)
		} : t(e)
	}("undefined" != typeof window ? window : this, function (p, e) {
		function a(e) {
			var t = e.length,
				n = J.type(e);
			return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
		}

		function t(e, n, i) {
			if (J.isFunction(n)) return J.grep(e, function (e, t) {
				return !!n.call(e, t, e) !== i
			});
			if (n.nodeType) return J.grep(e, function (e) {
				return e === n !== i
			});
			if ("string" == typeof n) {
				if (ae.test(n)) return J.filter(n, e, i);
				n = J.filter(n, e)
			}
			return J.grep(e, function (e) {
				return 0 <= X.call(n, e) !== i
			})
		}

		function n(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}

		function f(e) {
			var n = pe[e] = {};
			return J.each(e.match(he) || [], function (e, t) {
				n[t] = !0
			}), n
		}

		function i() {
			Z.removeEventListener("DOMContentLoaded", i, !1), p.removeEventListener("load", i, !1), J.ready()
		}

		function r() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function () {
					return {}
				}
			}), this.expando = J.expando + r.uid++
		}

		function l(e, t, n) {
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(be, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? J.parseJSON(n) : n)
					} catch (W) {}
					ve.set(e, t, n)
				} else n = void 0;
			return n
		}

		function o() {
			return !0
		}

		function u() {
			return !1
		}

		function s() {
			try {
				return Z.activeElement
			} catch (p) {}
		}

		function c(e, t) {
			return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
		}

		function m(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function g(e) {
			var t = Le.exec(e.type);
			return t ? e.type = t[1] : e.removeAttribute("type"), e
		}

		function v(e, t) {
			for (var n = 0, i = e.length; n < i; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
		}

		function d(e, t) {
			var n, i, r, o, s, a, l, u;
			if (1 === t.nodeType) {
				if (ge.hasData(e) && (o = ge.access(e), s = ge.set(t, o), u = o.events))
					for (r in delete s.handle, s.events = {}, u)
						for (n = 0, i = u[r].length; n < i; n++) J.event.add(t, r, u[r][n]);
				ve.hasData(e) && (a = ve.access(e), l = J.extend({}, a), ve.set(t, l))
			}
		}

		function y(e, t) {
			var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
			return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
		}

		function h(e, t) {
			var n = t.nodeName.toLowerCase();
			"input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}

		function b(e, t) {
			var n, i = J(t.createElement(e)).appendTo(t.body),
				r = p.getDefaultComputedStyle && (n = p.getDefaultComputedStyle(i[0])) ? n.display : J.css(i[0], "display");
			return i.detach(), r
		}

		function w(e) {
			var t = Z,
				n = He[e];
			return n || ("none" !== (n = b(e, t)) && n || ((t = (qe = (qe || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = b(e, t), qe.detach()), He[e] = n), n
		}

		function x(e, t, n) {
			var i, r, o, s, a = e.style;
			return (n = n || We(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || J.contains(e.ownerDocument, e) || (s = J.style(e, t)), ze.test(s) && Be.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
		}

		function _(e, t) {
			return {
				get: function () {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments)
				}
			}
		}

		function C(e, t) {
			if (t in e) return t;
			for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ke.length; r--;)
				if ((t = Ke[r] + n) in e) return t;
			return i
		}

		function S(e, t, n) {
			var i = Xe.exec(t);
			return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
		}

		function k(e, t, n, i, r) {
			for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += J.css(e, n + Ce[o], !0, r)), i ? ("content" === n && (s -= J.css(e, "padding" + Ce[o], !0, r)), "margin" !== n && (s -= J.css(e, "border" + Ce[o] + "Width", !0, r))) : (s += J.css(e, "padding" + Ce[o], !0, r), "padding" !== n && (s += J.css(e, "border" + Ce[o] + "Width", !0, r)));
			return s
		}

		function E(e, t, n) {
			var i = !0,
				r = "width" === t ? e.offsetWidth : e.offsetHeight,
				o = We(e),
				s = "border-box" === J.css(e, "boxSizing", !1, o);
			if (r <= 0 || null == r) {
				if (((r = x(e, t, o)) < 0 || null == r) && (r = e.style[t]), ze.test(r)) return r;
				i = s && (K.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
			}
			return r + k(e, t, n || (s ? "border" : "content"), i, o) + "px"
		}

		function T(e, t) {
			for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)(i = e[s]).style && (o[s] = ge.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Se(i) && (o[s] = ge.access(i, "olddisplay", w(i.nodeName)))) : (r = Se(i), "none" === n && r || ge.set(i, "olddisplay", r ? n : J.css(i, "display"))));
			for (s = 0; s < a; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
			return e
		}

		function $(e, t, n, i, r) {
			return new $.prototype.init(e, t, n, i, r)
		}

		function D() {
			return setTimeout(function () {
				Ze = void 0
			}), Ze = J.now()
		}

		function I(e, t) {
			var n, i = 0,
				r = {
					height: e
				};
			for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Ce[i])] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function P(e, t, n) {
			for (var i, r = (st[t] || []).concat(st["*"]), o = 0, s = r.length; o < s; o++)
				if (i = r[o].call(n, t, e)) return i
		}

		function j(t, e, n) {
			var i, r, o, s, a, l, u, c = this,
				d = {},
				f = t.style,
				h = t.nodeType && Se(t),
				p = ge.get(t, "fxshow");
			for (i in n.queue || (null == (a = J._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
					a.unqueued || l()
				}), a.unqueued++, c.always(function () {
					c.always(function () {
						a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = J.css(t, "display")) ? ge.get(t, "olddisplay") || w(t.nodeName) : u) && "none" === J.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
					f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
				})), e)
				if (r = e[i], nt.exec(r)) {
					if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
						if ("show" !== r || !p || void 0 === p[i]) continue;
						h = !0
					}
					d[i] = p && p[i] || J.style(t, i)
				} else u = void 0;
			if (J.isEmptyObject(d)) "inline" === ("none" === u ? w(t.nodeName) : u) && (f.display = u);
			else
				for (i in p ? "hidden" in p && (h = p.hidden) : p = ge.access(t, "fxshow", {}), o && (p.hidden = !h), h ? J(t).show() : c.done(function () {
						J(t).hide()
					}), c.done(function () {
						var e;
						for (e in ge.remove(t, "fxshow"), d) J.style(t, e, d[e])
					}), d) s = P(h ? p[i] : 0, i, c), i in p || (p[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
		}

		function N(e, t) {
			var n, i, r, o, s;
			for (n in e)
				if (r = t[i = J.camelCase(n)], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = J.cssHooks[i]) && "expand" in s)
					for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
				else t[i] = r
		}

		function A(o, e, t) {
			var n, s, i = 0,
				r = ot.length,
				a = J.Deferred().always(function () {
					delete l.elem
				}),
				l = function () {
					if (s) return !1;
					for (var e = Ze || D(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
					return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (a.resolveWith(o, [u]), !1)
				},
				u = a.promise({
					elem: o,
					props: J.extend({}, e),
					opts: J.extend(!0, {
						specialEasing: {}
					}, t),
					originalProperties: e,
					originalOptions: t,
					startTime: Ze || D(),
					duration: t.duration,
					tweens: [],
					createTween: function (e, t) {
						var n = J.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
						return u.tweens.push(n), n
					},
					stop: function (e) {
						var t = 0,
							n = e ? u.tweens.length : 0;
						if (s) return this;
						for (s = !0; t < n; t++) u.tweens[t].run(1);
						return e ? a.resolveWith(o, [u, e]) : a.rejectWith(o, [u, e]), this
					}
				}),
				c = u.props;
			for (N(c, u.opts.specialEasing); i < r; i++)
				if (n = ot[i].call(u, o, c, u.opts)) return n;
			return J.map(c, P, u), J.isFunction(u.opts.start) && u.opts.start.call(o, u), J.fx.timer(J.extend(l, {
				elem: o,
				anim: u,
				queue: u.opts.queue
			})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
		}

		function O(o) {
			return function (e, t) {
				"string" != typeof e && (t = e, e = "*");
				var n, i = 0,
					r = e.toLowerCase().match(he) || [];
				if (J.isFunction(t))
					for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
			}
		}

		function F(t, r, o, s) {
			function a(e) {
				var i;
				return l[e] = !0, J.each(t[e] || [], function (e, t) {
					var n = t(r, o, s);
					return "string" != typeof n || u || l[n] ? u ? !(i = n) : void 0 : (r.dataTypes.unshift(n), a(n), !1)
				}), i
			}
			var l = {},
				u = t === Ct;
			return a(r.dataTypes[0]) || !l["*"] && a("*")
		}

		function L(e, t) {
			var n, i, r = J.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
			return i && J.extend(!0, e, i), e
		}

		function M(e, t, n) {
			for (var i, r, o, s, a = e.contents, l = e.dataTypes;
				"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
			if (i)
				for (r in a)
					if (a[r] && a[r].test(i)) {
						l.unshift(r);
						break
					}
			if (l[0] in n) o = l[0];
			else {
				for (r in n) {
					if (!l[0] || e.converters[r + " " + l[0]]) {
						o = r;
						break
					}
					s || (s = r)
				}
				o = o || s
			}
			return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
		}

		function R(e, t, n, i) {
			var r, o, s, a, l, u = {},
				c = e.dataTypes.slice();
			if (c[1])
				for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
			for (o = c.shift(); o;)
				if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
					if ("*" === o) o = l;
					else if ("*" !== l && l !== o) {
				if (!(s = u[l + " " + o] || u["* " + o]))
					for (r in u)
						if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
							!0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
							break
						}
				if (!0 !== s)
					if (s && e["throws"]) t = s(t);
					else try {
						t = s(t)
					} catch (Z) {
						return {
							state: "parsererror",
							error: s ? Z : "No conversion from " + l + " to " + o
						}
					}
			}
			return {
				state: "success",
				data: t
			}
		}

		function q(n, e, i, r) {
			var t;
			if (J.isArray(e)) J.each(e, function (e, t) {
				i || $t.test(n) ? r(n, t) : q(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r)
			});
			else if (i || "object" !== J.type(e)) r(n, e);
			else
				for (t in e) q(n + "[" + t + "]", e[t], i, r)
		}

		function H(e) {
			return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
		}
		var B = [],
			z = B.slice,
			W = B.concat,
			U = B.push,
			X = B.indexOf,
			V = {},
			Q = V.toString,
			Y = V.hasOwnProperty,
			K = {},
			Z = p.document,
			G = "2.1.3",
			J = function (e, t) {
				return new J.fn.init(e, t)
			},
			ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			te = /^-ms-/,
			ne = /-([\da-z])/gi,
			ie = function (e, t) {
				return t.toUpperCase()
			};
		J.fn = J.prototype = {
			jquery: G,
			constructor: J,
			selector: "",
			length: 0,
			toArray: function () {
				return z.call(this)
			},
			get: function (e) {
				return null != e ? e < 0 ? this[e + this.length] : this[e] : z.call(this)
			},
			pushStack: function (e) {
				var t = J.merge(this.constructor(), e);
				return t.prevObject = this, t.context = this.context, t
			},
			each: function (e, t) {
				return J.each(this, e, t)
			},
			map: function (n) {
				return this.pushStack(J.map(this, function (e, t) {
					return n.call(e, t, e)
				}))
			},
			slice: function () {
				return this.pushStack(z.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(0 <= n && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor(null)
			},
			push: U,
			sort: B.sort,
			splice: B.splice
		}, J.extend = J.fn.extend = function (e) {
			var t, n, i, r, o, s, a = e || {},
				l = 1,
				u = arguments.length,
				c = !1;
			for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" == typeof a || J.isFunction(a) || (a = {}), l === u && (a = this, l--); l < u; l++)
				if (null != (t = arguments[l]))
					for (n in t) i = a[n], a !== (r = t[n]) && (c && r && (J.isPlainObject(r) || (o = J.isArray(r))) ? (o ? (o = !1, s = i && J.isArray(i) ? i : []) : s = i && J.isPlainObject(i) ? i : {}, a[n] = J.extend(c, s, r)) : void 0 !== r && (a[n] = r));
			return a
		}, J.extend({
			expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isFunction: function (e) {
				return "function" === J.type(e)
			},
			isArray: Array.isArray,
			isWindow: function (e) {
				return null != e && e === e.window
			},
			isNumeric: function (e) {
				return !J.isArray(e) && 0 <= e - parseFloat(e) + 1
			},
			isPlainObject: function (e) {
				return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			type: function (e) {
				return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Q.call(e)] || "object" : typeof e
			},
			globalEval: function (e) {
				var t, n = eval;
				(e = J.trim(e)) && (1 === e.indexOf("use strict") ? ((t = Z.createElement("script")).text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
			},
			camelCase: function (e) {
				return e.replace(te, "ms-").replace(ne, ie)
			},
			nodeName: function (e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
			},
			each: function (e, t, n) {
				var i = 0,
					r = e.length,
					o = a(e);
				if (n) {
					if (o)
						for (; i < r && !1 !== t.apply(e[i], n); i++);
					else
						for (i in e)
							if (!1 === t.apply(e[i], n)) break
				} else if (o)
					for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
				else
					for (i in e)
						if (!1 === t.call(e[i], i, e[i])) break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(ee, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (a(Object(e)) ? J.merge(n, "string" == typeof e ? [e] : e) : U.call(n, e)), n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : X.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
				return e.length = r, e
			},
			grep: function (e, t, n) {
				for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
				return i
			},
			map: function (e, t, n) {
				var i, r = 0,
					o = e.length,
					s = [];
				if (a(e))
					for (; r < o; r++) null != (i = t(e[r], r, n)) && s.push(i);
				else
					for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
				return W.apply([], s)
			},
			guid: 1,
			proxy: function (e, t) {
				var n, i, r;
				return "string" == typeof t && (n = e[t], t = e, e = n), J.isFunction(e) ? (i = z.call(arguments, 2), (r = function () {
					return e.apply(t || this, i.concat(z.call(arguments)))
				}).guid = e.guid = e.guid || J.guid++, r) : void 0
			},
			now: Date.now,
			support: K
		}), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
			V["[object " + t + "]"] = t.toLowerCase()
		});
		var re = function (n) {
			function w(e, t, n, i) {
				var r, o, s, a, l, u, c, d, f, h;
				if ((t ? t.ownerDocument || t : q) !== j && P(t), n = n || [], a = (t = t || j).nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
				if (!i && A) {
					if (11 !== a && (r = ye.exec(e)))
						if (s = r[1]) {
							if (9 === a) {
								if (!(o = t.getElementById(s)) || !o.parentNode) return n;
								if (o.id === s) return n.push(o), n
							} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s) return n.push(o), n
						} else {
							if (r[2]) return G.apply(n, t.getElementsByTagName(e)), n;
							if ((s = r[3]) && v.getElementsByClassName) return G.apply(n, t.getElementsByClassName(s)), n
						}
					if (v.qsa && (!O || !O.test(e))) {
						if (d = c = R, f = t, h = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
							for (u = k(e), (c = t.getAttribute("id")) ? d = c.replace(we, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + m(u[l]);
							f = be.test(e) && p(t.parentNode) || t, h = u.join(",")
						}
						if (h) try {
							return G.apply(n, f.querySelectorAll(h)), n
						} catch (z) {} finally {
							c || t.removeAttribute("id")
						}
					}
				}
				return T(e.replace(le, "$1"), t, n, i)
			}

			function e() {
				function n(e, t) {
					return i.push(e + " ") > _.cacheLength && delete n[i.shift()], n[e + " "] = t
				}
				var i = [];
				return n
			}

			function l(e) {
				return e[R] = !0, e
			}

			function i(e) {
				var t = j.createElement("div");
				try {
					return !!e(t)
				} catch (v) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function t(e, t) {
				for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
			}

			function u(e, t) {
				var n = t && e,
					i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function r(t) {
				return function (e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}

			function o(n) {
				return function (e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}

			function s(s) {
				return l(function (o) {
					return o = +o, l(function (e, t) {
						for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
					})
				})
			}

			function p(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}

			function a() {}

			function m(e) {
				for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
				return i
			}

			function d(s, e, t) {
				var a = e.dir,
					l = t && "parentNode" === a,
					u = B++;
				return e.first ? function (e, t, n) {
					for (; e = e[a];)
						if (1 === e.nodeType || l) return s(e, t, n)
				} : function (e, t, n) {
					var i, r, o = [H, u];
					if (n) {
						for (; e = e[a];)
							if ((1 === e.nodeType || l) && s(e, t, n)) return !0
					} else
						for (; e = e[a];)
							if (1 === e.nodeType || l) {
								if ((i = (r = e[R] || (e[R] = {}))[a]) && i[0] === H && i[1] === u) return o[2] = i[2];
								if ((r[a] = o)[2] = s(e, t, n)) return !0
							}
				}
			}

			function f(r) {
				return 1 < r.length ? function (e, t, n) {
					for (var i = r.length; i--;)
						if (!r[i](e, t, n)) return !1;
					return !0
				} : r[0]
			}

			function y(e, t, n) {
				for (var i = 0, r = t.length; i < r; i++) w(e, t[i], n);
				return n
			}

			function x(e, t, n, i, r) {
				for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
				return s
			}

			function b(h, p, m, g, v, e) {
				return g && !g[R] && (g = b(g)), v && !v[R] && (v = b(v, e)), l(function (e, t, n, i) {
					var r, o, s, a = [],
						l = [],
						u = t.length,
						c = e || y(p || "*", n.nodeType ? [n] : n, []),
						d = !h || !e && p ? c : x(c, a, h, n, i),
						f = m ? v || (e ? h : u || g) ? [] : t : d;
					if (m && m(d, f, n, i), g)
						for (r = x(f, l), g(r, [], n, i), o = r.length; o--;)(s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
					if (e) {
						if (v || h) {
							if (v) {
								for (r = [], o = f.length; o--;)(s = f[o]) && r.push(d[o] = s);
								v(null, f = [], r, i)
							}
							for (o = f.length; o--;)(s = f[o]) && -1 < (r = v ? ee(e, s) : a[o]) && (e[r] = !(t[r] = s))
						}
					} else f = x(f === t ? f.splice(u, f.length) : f), v ? v(null, t, f, i) : G.apply(t, f)
				})
			}

			function h(e) {
				for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function (e) {
						return e === r
					}, s, !0), u = d(function (e) {
						return -1 < ee(r, e)
					}, s, !0), c = [function (e, t, n) {
						var i = !o && (n || t !== $) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
						return r = null, i
					}]; a < i; a++)
					if (t = _.relative[e[a].type]) c = [d(f(c), t)];
					else {
						if ((t = _.filter[e[a].type].apply(null, e[a].matches))[R]) {
							for (n = ++a; n < i && !_.relative[e[n].type]; n++);
							return b(1 < a && f(c), 1 < a && m(e.slice(0, a - 1).concat({
								value: " " === e[a - 2].type ? "*" : ""
							})).replace(le, "$1"), t, a < n && h(e.slice(a, n)), n < i && h(e = e.slice(n)), n < i && m(e))
						}
						c.push(t)
					}
				return f(c)
			}

			function c(g, v) {
				var y = 0 < v.length,
					b = 0 < g.length,
					e = function (e, t, n, i, r) {
						var o, s, a, l = 0,
							u = "0",
							c = e && [],
							d = [],
							f = $,
							h = e || b && _.find.TAG("*", r),
							p = H += null == f ? 1 : Math.random() || .1,
							m = h.length;
						for (r && ($ = t !== j && t); u !== m && null != (o = h[u]); u++) {
							if (b && o) {
								for (s = 0; a = g[s++];)
									if (a(o, t, n)) {
										i.push(o);
										break
									}
								r && (H = p)
							}
							y && ((o = !a && o) && l--, e && c.push(o))
						}
						if (l += u, y && u !== l) {
							for (s = 0; a = v[s++];) a(c, d, t, n);
							if (e) {
								if (0 < l)
									for (; u--;) c[u] || d[u] || (d[u] = K.call(i));
								d = x(d)
							}
							G.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && w.uniqueSort(i)
						}
						return r && (H = p, $ = f), c
					};
				return y ? l(e) : e
			}
			var g, v, _, C, S, k, E, T, $, D, I, P, j, N, A, O, F, L, M, R = "sizzle" + 1 * new Date,
				q = n.document,
				H = 0,
				B = 0,
				z = e(),
				W = e(),
				U = e(),
				X = function (e, t) {
					return e === t && (I = !0), 0
				},
				V = 1 << 31,
				Q = {}.hasOwnProperty,
				Y = [],
				K = Y.pop,
				Z = Y.push,
				G = Y.push,
				J = Y.slice,
				ee = function (e, t) {
					for (var n = 0, i = e.length; n < i; n++)
						if (e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\\x20\\t\\r\\n\\f]",
				ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				re = ie.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
				se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
				ae = new RegExp(ne + "+", "g"),
				le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				ue = new RegExp("^" + ne + "*," + ne + "*"),
				ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				fe = new RegExp(se),
				he = new RegExp("^" + re + "$"),
				pe = {
					ID: new RegExp("^#(" + ie + ")"),
					CLASS: new RegExp("^\\.(" + ie + ")"),
					TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + se),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				me = /^(?:input|select|textarea|button)$/i,
				ge = /^h\d$/i,
				ve = /^[^{]+\{\s*\[native \w/,
				ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				be = /[+~]/,
				we = /'|\\/g,
				xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				_e = function (e, t, n) {
					var i = "0x" + t - 65536;
					return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				Ce = function () {
					P()
				};
			try {
				G.apply(Y = J.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
			} catch (Fe) {
				G = {
					apply: Y.length ? function (e, t) {
						Z.apply(e, J.call(t))
					} : function (e, t) {
						for (var n = e.length, i = 0; e[n++] = t[i++];);
						e.length = n - 1
					}
				}
			}
			for (g in v = w.support = {}, S = w.isXML = function (e) {
					var t = e && (e.ownerDocument || e).documentElement;
					return !!t && "HTML" !== t.nodeName
				}, P = w.setDocument = function (e) {
					var t, n, l = e ? e.ownerDocument || e : q;
					return l !== j && 9 === l.nodeType && l.documentElement ? (N = (j = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), A = !S(l), v.attributes = i(function (e) {
						return e.className = "i", !e.getAttribute("className")
					}), v.getElementsByTagName = i(function (e) {
						return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
					}), v.getElementsByClassName = ve.test(l.getElementsByClassName), v.getById = i(function (e) {
						return N.appendChild(e).id = R, !l.getElementsByName || !l.getElementsByName(R).length
					}), v.getById ? (_.find.ID = function (e, t) {
						if ("undefined" != typeof t.getElementById && A) {
							var n = t.getElementById(e);
							return n && n.parentNode ? [n] : []
						}
					}, _.filter.ID = function (e) {
						var t = e.replace(xe, _e);
						return function (e) {
							return e.getAttribute("id") === t
						}
					}) : (delete _.find.ID, _.filter.ID = function (e) {
						var n = e.replace(xe, _e);
						return function (e) {
							var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}), _.find.TAG = v.getElementsByTagName ? function (e, t) {
						return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : v.qsa ? t.querySelectorAll(e) : void 0
					} : function (e, t) {
						var n, i = [],
							r = 0,
							o = t.getElementsByTagName(e);
						if ("*" !== e) return o;
						for (; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}, _.find.CLASS = v.getElementsByClassName && function (e, t) {
						return A ? t.getElementsByClassName(e) : void 0
					}, F = [], O = [], (v.qsa = ve.test(l.querySelectorAll)) && (i(function (e) {
						N.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || O.push(".#.+[+~]")
					}), i(function (e) {
						var t = l.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
					})), (v.matchesSelector = ve.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function (e) {
						v.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), F.push("!=", se)
					}), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(N.compareDocumentPosition), M = t || ve.test(N.contains) ? function (e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							i = t && t.parentNode;
						return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
					} : function (e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, X = t ? function (e, t) {
						if (e === t) return I = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !v.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === q && M(q, e) ? -1 : t === l || t.ownerDocument === q && M(q, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
					} : function (e, t) {
						if (e === t) return I = !0, 0;
						var n, i = 0,
							r = e.parentNode,
							o = t.parentNode,
							s = [e],
							a = [t];
						if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
						if (r === o) return u(e, t);
						for (n = e; n = n.parentNode;) s.unshift(n);
						for (n = t; n = n.parentNode;) a.unshift(n);
						for (; s[i] === a[i];) i++;
						return i ? u(s[i], a[i]) : s[i] === q ? -1 : a[i] === q ? 1 : 0
					}, l) : j
				}, w.matches = function (e, t) {
					return w(e, null, null, t)
				}, w.matchesSelector = function (e, t) {
					if ((e.ownerDocument || e) !== j && P(e), t = t.replace(de, "='$1']"), !(!v.matchesSelector || !A || F && F.test(t) || O && O.test(t))) try {
						var n = L.call(e, t);
						if (n || v.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (C) {}
					return 0 < w(t, j, null, [e]).length
				}, w.contains = function (e, t) {
					return (e.ownerDocument || e) !== j && P(e), M(e, t)
				}, w.attr = function (e, t) {
					(e.ownerDocument || e) !== j && P(e);
					var n = _.attrHandle[t.toLowerCase()],
						i = n && Q.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
					return void 0 !== i ? i : v.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				}, w.error = function (e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, w.uniqueSort = function (e) {
					var t, n = [],
						i = 0,
						r = 0;
					if (I = !v.detectDuplicates, D = !v.sortStable && e.slice(0), e.sort(X), I) {
						for (; t = e[r++];) t === e[r] && (i = n.push(r));
						for (; i--;) e.splice(n[i], 1)
					}
					return D = null, e
				}, C = w.getText = function (e) {
					var t, n = "",
						i = 0,
						r = e.nodeType;
					if (r) {
						if (1 === r || 9 === r || 11 === r) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
						} else if (3 === r || 4 === r) return e.nodeValue
					} else
						for (; t = e[i++];) n += C(t);
					return n
				}, (_ = w.selectors = {
					cacheLength: 50,
					createPseudo: l,
					match: pe,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function (e) {
							return e[1] = e[1].replace(xe, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function (e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
						},
						PSEUDO: function (e) {
							var t, n = !e[6] && e[2];
							return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
						}
					},
					filter: {
						TAG: function (e) {
							var t = e.replace(xe, _e).toLowerCase();
							return "*" === e ? function () {
								return !0
							} : function (e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function (e) {
							var t = z[e + " "];
							return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function (e) {
								return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
							})
						},
						ATTR: function (n, i, r) {
							return function (e) {
								var t = w.attr(e, n);
								return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
							}
						},
						CHILD: function (h, e, t, p, m) {
							var g = "nth" !== h.slice(0, 3),
								v = "last" !== h.slice(-4),
								y = "of-type" === e;
							return 1 === p && 0 === m ? function (e) {
								return !!e.parentNode
							} : function (e, t, n) {
								var i, r, o, s, a, l, u = g !== v ? "nextSibling" : "previousSibling",
									c = e.parentNode,
									d = y && e.nodeName.toLowerCase(),
									f = !n && !y;
								if (c) {
									if (g) {
										for (; u;) {
											for (o = e; o = o[u];)
												if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
											l = u = "only" === h && !l && "nextSibling"
										}
										return !0
									}
									if (l = [v ? c.firstChild : c.lastChild], v && f) {
										for (a = (i = (r = c[R] || (c[R] = {}))[h] || [])[0] === H && i[1], s = i[0] === H && i[2], o = a && c.childNodes[a]; o = ++a && o && o[u] || (s = a = 0) || l.pop();)
											if (1 === o.nodeType && ++s && o === e) {
												r[h] = [H, a, s];
												break
											}
									} else if (f && (i = (e[R] || (e[R] = {}))[h]) && i[0] === H) s = i[1];
									else
										for (;
											(o = ++a && o && o[u] || (s = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++s || (f && ((o[R] || (o[R] = {}))[h] = [H, s]), o !== e)););
									return (s -= m) === p || s % p == 0 && 0 <= s / p
								}
							}
						},
						PSEUDO: function (e, o) {
							var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
							return s[R] ? s(o) : 1 < s.length ? (t = [e, e, "", o], _.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function (e, t) {
								for (var n, i = s(e, o), r = i.length; r--;) e[n = ee(e, i[r])] = !(t[n] = i[r])
							}) : function (e) {
								return s(e, 0, t)
							}) : s
						}
					},
					pseudos: {
						not: l(function (e) {
							var i = [],
								r = [],
								a = E(e.replace(le, "$1"));
							return a[R] ? l(function (e, t, n, i) {
								for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
							}) : function (e, t, n) {
								return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
							}
						}),
						has: l(function (t) {
							return function (e) {
								return 0 < w(t, e).length
							}
						}),
						contains: l(function (t) {
							return t = t.replace(xe, _e),
								function (e) {
									return -1 < (e.textContent || e.innerText || C(e)).indexOf(t)
								}
						}),
						lang: l(function (n) {
							return he.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(xe, _e).toLowerCase(),
								function (e) {
									var t;
									do {
										if (t = A ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function (e) {
							var t = n.location && n.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function (e) {
							return e === N
						},
						focus: function (e) {
							return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
						},
						enabled: function (e) {
							return !1 === e.disabled
						},
						disabled: function (e) {
							return !0 === e.disabled
						},
						checked: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function (e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function (e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function (e) {
							return !_.pseudos.empty(e)
						},
						header: function (e) {
							return ge.test(e.nodeName)
						},
						input: function (e) {
							return me.test(e.nodeName)
						},
						button: function (e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function (e) {
							var t;
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
						},
						first: s(function () {
							return [0]
						}),
						last: s(function (e, t) {
							return [t - 1]
						}),
						eq: s(function (e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: s(function (e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: s(function (e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: s(function (e, t, n) {
							for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
							return e
						}),
						gt: s(function (e, t, n) {
							for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
							return e
						})
					}
				}).pseudos.nth = _.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) _.pseudos[g] = r(g);
			for (g in {
					submit: !0,
					reset: !0
				}) _.pseudos[g] = o(g);
			return a.prototype = _.filters = _.pseudos, _.setFilters = new a, k = w.tokenize = function (e, t) {
				var n, i, r, o, s, a, l, u = W[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (s = e, a = [], l = _.preFilter; s;) {
					for (o in (!n || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = ce.exec(s)) && (n = i.shift(), r.push({
							value: n,
							type: i[0].replace(le, " ")
						}), s = s.slice(n.length)), _.filter) !(i = pe[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
						value: n,
						type: o,
						matches: i
					}), s = s.slice(n.length));
					if (!n) break
				}
				return t ? s.length : s ? w.error(e) : W(e, a).slice(0)
			}, E = w.compile = function (e, t) {
				var n, i = [],
					r = [],
					o = U[e + " "];
				if (!o) {
					for (t || (t = k(e)), n = t.length; n--;)(o = h(t[n]))[R] ? i.push(o) : r.push(o);
					(o = U(e, c(r, i))).selector = e
				}
				return o
			}, T = w.select = function (e, t, n, i) {
				var r, o, s, a, l, u = "function" == typeof e && e,
					c = !i && k(e = u.selector || e);
				if (n = n || [], 1 === c.length) {
					if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && v.getById && 9 === t.nodeType && A && _.relative[o[1].type]) {
						if (!(t = (_.find.ID(s.matches[0].replace(xe, _e), t) || [])[0])) return n;
						u && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)
						if ((l = _.find[a]) && (i = l(s.matches[0].replace(xe, _e), be.test(o[0].type) && p(t.parentNode) || t))) {
							if (o.splice(r, 1), !(e = i.length && m(o))) return G.apply(n, i), n;
							break
						}
				}
				return (u || E(e, c))(i, t, !A, n, be.test(e) && p(t.parentNode) || t), n
			}, v.sortStable = R.split("").sort(X).join("") === R, v.detectDuplicates = !!I, P(), v.sortDetached = i(function (e) {
				return 1 & e.compareDocumentPosition(j.createElement("div"))
			}), i(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || t("type|href|height|width", function (e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), v.attributes && i(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || t("value", function (e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function (e) {
				return null == e.getAttribute("disabled")
			}) || t(te, function (e, t, n) {
				var i;
				return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), w
		}(p);
		J.find = re, J.expr = re.selectors, J.expr[":"] = J.expr.pseudos, J.unique = re.uniqueSort, J.text = re.getText, J.isXMLDoc = re.isXML, J.contains = re.contains;
		var oe = J.expr.match.needsContext,
			se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ae = /^.[^:#\[\.,]*$/;
		J.filter = function (e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, J.fn.extend({
			find: function (e) {
				var t, n = this.length,
					i = [],
					r = this;
				if ("string" != typeof e) return this.pushStack(J(e).filter(function () {
					for (t = 0; t < n; t++)
						if (J.contains(r[t], this)) return !0
				}));
				for (t = 0; t < n; t++) J.find(e, r[t], i);
				return (i = this.pushStack(1 < n ? J.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
			},
			filter: function (e) {
				return this.pushStack(t(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(t(this, e || [], !0))
			},
			is: function (e) {
				return !!t(this, "string" == typeof e && oe.test(e) ? J(e) : e || [], !1).length
			}
		});
		var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
		(J.fn.init = function (e, t) {
			var n, i;
			if (!e) return this;
			if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : J.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this));
			if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ue.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
			if (n[1]) {
				if (t = t instanceof J ? t[0] : t, J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), se.test(n[1]) && J.isPlainObject(t))
					for (n in t) J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
				return this
			}
			return (i = Z.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = Z, this.selector = e, this
		}).prototype = J.fn, le = J(Z);
		var ce = /^(?:parents|prev(?:Until|All))/,
			de = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		J.extend({
			dir: function (e, t, n) {
				for (var i = [], r = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (r && J(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			sibling: function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			}
		}), J.fn.extend({
			has: function (e) {
				var t = J(e, this),
					n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (J.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				for (var n, i = 0, r = this.length, o = [], s = oe.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
				return this.pushStack(1 < o.length ? J.unique(o) : o)
			},
			index: function (e) {
				return e ? "string" == typeof e ? X.call(J(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), J.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return J.dir(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return J.dir(e, "parentNode", n)
			},
			next: function (e) {
				return n(e, "nextSibling")
			},
			prev: function (e) {
				return n(e, "previousSibling")
			},
			nextAll: function (e) {
				return J.dir(e, "nextSibling")
			},
			prevAll: function (e) {
				return J.dir(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return J.dir(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return J.dir(e, "previousSibling", n)
			},
			siblings: function (e) {
				return J.sibling((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return J.sibling(e.firstChild)
			},
			contents: function (e) {
				return e.contentDocument || J.merge([], e.childNodes)
			}
		}, function (i, r) {
			J.fn[i] = function (e, t) {
				var n = J.map(this, r, e);
				return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = J.filter(t, n)), 1 < this.length && (de[i] || J.unique(n), ce.test(i) && n.reverse()), this.pushStack(n)
			}
		});
		var fe, he = /\S+/g,
			pe = {};
		J.Callbacks = function (r) {
			r = "string" == typeof r ? pe[r] || f(r) : J.extend({}, r);
			var t, n, o, s, a, i, l = [],
				u = !r.once && [],
				c = function (e) {
					for (t = r.memory && e, n = !0, i = s || 0, s = 0, a = l.length, o = !0; l && i < a; i++)
						if (!1 === l[i].apply(e[0], e[1]) && r.stopOnFalse) {
							t = !1;
							break
						}
					o = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
				},
				d = {
					add: function () {
						if (l) {
							var e = l.length;
							! function i(e) {
								J.each(e, function (e, t) {
									var n = J.type(t);
									"function" === n ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && i(t)
								})
							}(arguments), o ? a = l.length : t && (s = e, c(t))
						}
						return this
					},
					remove: function () {
						return l && J.each(arguments, function (e, t) {
							for (var n; - 1 < (n = J.inArray(t, l, n));) l.splice(n, 1), o && (n <= a && a--, n <= i && i--)
						}), this
					},
					has: function (e) {
						return e ? -1 < J.inArray(e, l) : !(!l || !l.length)
					},
					empty: function () {
						return l = [], a = 0, this
					},
					disable: function () {
						return l = u = t = void 0, this
					},
					disabled: function () {
						return !l
					},
					lock: function () {
						return u = void 0, t || d.disable(), this
					},
					locked: function () {
						return !u
					},
					fireWith: function (e, t) {
						return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], o ? u.push(t) : c(t)), this
					},
					fire: function () {
						return d.fireWith(this, arguments), this
					},
					fired: function () {
						return !!n
					}
				};
			return d
		}, J.extend({
			Deferred: function (e) {
				var o = [
						["resolve", "done", J.Callbacks("once memory"), "resolved"],
						["reject", "fail", J.Callbacks("once memory"), "rejected"],
						["notify", "progress", J.Callbacks("memory")]
					],
					r = "pending",
					s = {
						state: function () {
							return r
						},
						always: function () {
							return a.done(arguments).fail(arguments), this
						},
						then: function () {
							var r = arguments;
							return J.Deferred(function (i) {
								J.each(o, function (e, t) {
									var n = J.isFunction(r[e]) && r[e];
									a[t[1]](function () {
										var e = n && n.apply(this, arguments);
										e && J.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === s ? i.promise() : this, n ? [e] : arguments)
									})
								}), r = null
							}).promise()
						},
						promise: function (e) {
							return null != e ? J.extend(e, s) : s
						}
					},
					a = {};
				return s.pipe = s.then, J.each(o, function (e, t) {
					var n = t[2],
						i = t[3];
					s[t[1]] = n.add, i && n.add(function () {
						r = i
					}, o[1 ^ e][2].disable, o[2][2].lock), a[t[0]] = function () {
						return a[t[0] + "With"](this === a ? s : this, arguments), this
					}, a[t[0] + "With"] = n.fireWith
				}), s.promise(a), e && e.call(a, a), a
			},
			when: function (e) {
				var r, t, n, i = 0,
					o = z.call(arguments),
					s = o.length,
					a = 1 !== s || e && J.isFunction(e.promise) ? s : 0,
					l = 1 === a ? e : J.Deferred(),
					u = function (t, n, i) {
						return function (e) {
							n[t] = this, i[t] = 1 < arguments.length ? z.call(arguments) : e, i === r ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
						}
					};
				if (1 < s)
					for (r = new Array(s), t = new Array(s), n = new Array(s); i < s; i++) o[i] && J.isFunction(o[i].promise) ? o[i].promise().done(u(i, n, o)).fail(l.reject).progress(u(i, t, r)) : --a;
				return a || l.resolveWith(n, o), l.promise()
			}
		}), J.fn.ready = function (e) {
			return J.ready.promise().done(e), this
		}, J.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (e) {
				e ? J.readyWait++ : J.ready(!0)
			},
			ready: function (e) {
				(!0 === e ? --J.readyWait : J.isReady) || ((J.isReady = !0) !== e && 0 < --J.readyWait || (fe.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
			}
		}), J.ready.promise = function (e) {
			return fe || (fe = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", i, !1), p.addEventListener("load", i, !1))), fe.promise(e)
		}, J.ready.promise();
		var me = J.access = function (e, t, n, i, r, o, s) {
			var a = 0,
				l = e.length,
				u = null == n;
			if ("object" === J.type(n))
				for (a in r = !0, n) J.access(e, t, a, n[a], !0, o, s);
			else if (void 0 !== i && (r = !0, J.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
					return u.call(J(e), n)
				})), t))
				for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
			return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
		};
		J.acceptData = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		}, r.uid = 1, r.accepts = J.acceptData, r.prototype = {
			key: function (e) {
				if (!r.accepts(e)) return 0;
				var t = {},
					n = e[this.expando];
				if (!n) {
					n = r.uid++;
					try {
						t[this.expando] = {
							value: n
						}, Object.defineProperties(e, t)
					} catch (z) {
						t[this.expando] = n, J.extend(e, t)
					}
				}
				return this.cache[n] || (this.cache[n] = {}), n
			},
			set: function (e, t, n) {
				var i, r = this.key(e),
					o = this.cache[r];
				if ("string" == typeof t) o[t] = n;
				else if (J.isEmptyObject(o)) J.extend(this.cache[r], t);
				else
					for (i in t) o[i] = t[i];
				return o
			},
			get: function (e, t) {
				var n = this.cache[this.key(e)];
				return void 0 === t ? n : n[t]
			},
			access: function (e, t, n) {
				var i;
				return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, J.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n, i, r, o = this.key(e),
					s = this.cache[o];
				if (void 0 === t) this.cache[o] = {};
				else {
					J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t), t in s ? i = [t, r] : i = (i = r) in s ? [i] : i.match(he) || []), n = i.length;
					for (; n--;) delete s[i[n]]
				}
			},
			hasData: function (e) {
				return !J.isEmptyObject(this.cache[e[this.expando]] || {})
			},
			discard: function (e) {
				e[this.expando] && delete this.cache[e[this.expando]]
			}
		};
		var ge = new r,
			ve = new r,
			ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			be = /([A-Z])/g;
		J.extend({
			hasData: function (e) {
				return ve.hasData(e) || ge.hasData(e)
			},
			data: function (e, t, n) {
				return ve.access(e, t, n)
			},
			removeData: function (e, t) {
				ve.remove(e, t)
			},
			_data: function (e, t, n) {
				return ge.access(e, t, n)
			},
			_removeData: function (e, t) {
				ge.remove(e, t)
			}
		}), J.fn.extend({
			data: function (i, e) {
				var t, n, r, o = this[0],
					s = o && o.attributes;
				if (void 0 !== i) return "object" == typeof i ? this.each(function () {
					ve.set(this, i)
				}) : me(this, function (t) {
					var e, n = J.camelCase(i);
					if (o && void 0 === t) {
						if (void 0 !== (e = ve.get(o, i))) return e;
						if (void 0 !== (e = ve.get(o, n))) return e;
						if (void 0 !== (e = l(o, n, void 0))) return e
					} else this.each(function () {
						var e = ve.get(this, n);
						ve.set(this, n, t), -1 !== i.indexOf("-") && void 0 !== e && ve.set(this, i, t)
					})
				}, null, e, 1 < arguments.length, null, !0);
				if (this.length && (r = ve.get(o), 1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
					for (t = s.length; t--;) s[t] && (0 === (n = s[t].name).indexOf("data-") && (n = J.camelCase(n.slice(5)), l(o, n, r[n])));
					ge.set(o, "hasDataAttrs", !0)
				}
				return r
			},
			removeData: function (e) {
				return this.each(function () {
					ve.remove(this, e)
				})
			}
		}), J.extend({
			queue: function (e, t, n) {
				var i;
				return e ? (t = (t || "fx") + "queue", i = ge.get(e, t), n && (!i || J.isArray(n) ? i = ge.access(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = J.queue(e, t),
					i = n.length,
					r = n.shift(),
					o = J._queueHooks(e, t),
					s = function () {
						J.dequeue(e, t)
					};
				"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return ge.get(e, n) || ge.access(e, n, {
					empty: J.Callbacks("once memory").add(function () {
						ge.remove(e, [t + "queue", n])
					})
				})
			}
		}), J.fn.extend({
			queue: function (t, n) {
				var e = 2;
				return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? J.queue(this[0], t) : void 0 === n ? this : this.each(function () {
					var e = J.queue(this, t, n);
					J._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && J.dequeue(this, t)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					J.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, i = 1,
					r = J.Deferred(),
					o = this,
					s = this.length,
					a = function () {
						--i || r.resolveWith(o, [o])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ge.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
				return a(), r.promise(t)
			}
		});
		var we, xe, _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ce = ["Top", "Right", "Bottom", "Left"],
			Se = function (e, t) {
				return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
			},
			ke = /^(?:checkbox|radio)$/i;
		we = Z.createDocumentFragment().appendChild(Z.createElement("div")), (xe = Z.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), we.appendChild(xe), K.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
		var Ee = "undefined";
		K.focusinBubbles = "onfocusin" in p;
		var Te = /^key/,
			$e = /^(?:mouse|pointer|contextmenu)|click/,
			De = /^(?:focusinfocus|focusoutblur)$/,
			Ie = /^([^.]*)(?:\.(.+)|)$/;
		J.event = {
			global: {},
			add: function (t, e, n, i, r) {
				var o, s, a, l, u, c, d, f, h, p, m, g = ge.get(t);
				if (g)
					for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = J.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (e) {
							return typeof J !== Ee && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
						}), u = (e = (e || "").match(he) || [""]).length; u--;) h = m = (a = Ie.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = J.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = J.event.special[h] || {}, c = J.extend({
						type: h,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && J.expr.match.needsContext.test(r),
						namespace: p.join(".")
					}, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s, !1)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), J.event.global[h] = !0)
			},
			remove: function (e, t, n, i, r) {
				var o, s, a, l, u, c, d, f, h, p, m, g = ge.hasData(e) && ge.get(e);
				if (g && (l = g.events)) {
					for (u = (t = (t || "").match(he) || [""]).length; u--;)
						if (h = m = (a = Ie.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
							for (d = J.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));
							s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || J.removeEvent(e, h, g.handle), delete l[h])
						} else
							for (h in l) J.event.remove(e, h + t[u], n, i, !0);
					J.isEmptyObject(l) && (delete g.handle, ge.remove(e, "events"))
				}
			},
			trigger: function (e, t, n, i) {
				var r, o, s, a, l, u, c, d = [n || Z],
					f = Y.call(e, "type") ? e.type : e,
					h = Y.call(e, "namespace") ? e.namespace.split(".") : [];
				if (o = s = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !De.test(f + J.event.triggered) && (0 <= f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : J.makeArray(t, [e]), c = J.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
					if (!i && !c.noBubble && !J.isWindow(n)) {
						for (a = c.delegateType || f, De.test(a + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
						s === (n.ownerDocument || Z) && d.push(s.defaultView || s.parentWindow || p)
					}
					for (r = 0;
						(o = d[r++]) && !e.isPropagationStopped();) e.type = 1 < r ? a : c.bindType || f, (u = (ge.get(o, "events") || {})[e.type] && ge.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && J.acceptData(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
					return e.type = f, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !J.acceptData(n) || l && J.isFunction(n[f]) && !J.isWindow(n) && ((s = n[l]) && (n[l] = null), n[J.event.triggered = f](), J.event.triggered = void 0, s && (n[l] = s)), e.result
				}
			},
			dispatch: function (e) {
				e = J.event.fix(e);
				var t, n, i, r, o, s = [],
					a = z.call(arguments),
					l = (ge.get(this, "events") || {})[e.type] || [],
					u = J.event.special[e.type] || {};
				if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
					for (s = J.event.handlers.call(this, e, l), t = 0;
						(r = s[t++]) && !e.isPropagationStopped();)
						for (e.currentTarget = r.elem, n = 0;
							(o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, e), e.result
				}
			},
			handlers: function (e, t) {
				var n, i, r, o, s = [],
					a = t.delegateCount,
					l = e.target;
				if (a && l.nodeType && (!e.button || "click" !== e.type))
					for (; l !== this; l = l.parentNode || this)
						if (!0 !== l.disabled || "click" !== e.type) {
							for (i = [], n = 0; n < a; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? 0 <= J(r, this).index(l) : J.find(r, this, null, [l]).length), i[r] && i.push(o);
							i.length && s.push({
								elem: l,
								handlers: i
							})
						}
				return a < t.length && s.push({
					elem: this,
					handlers: t.slice(a)
				}), s
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (e, t) {
					var n, i, r, o = t.button;
					return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || Z).documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
				}
			},
			fix: function (e) {
				if (e[J.expando]) return e;
				var t, n, i, r = e.type,
					o = e,
					s = this.fixHooks[r];
				for (s || (this.fixHooks[r] = s = $e.test(r) ? this.mouseHooks : Te.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new J.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
				return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						return this !== s() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						return this === s() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function (e) {
						return J.nodeName(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			},
			simulate: function (e, t, n, i) {
				var r = J.extend(new J.Event, n, {
					type: e,
					isSimulated: !0,
					originalEvent: {}
				});
				i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
			}
		}, J.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1)
		}, J.Event = function (e, t) {
			return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? o : u) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
		}, J.Event.prototype = {
			isDefaultPrevented: u,
			isPropagationStopped: u,
			isImmediatePropagationStopped: u,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = o, e && e.preventDefault && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = o, e && e.stopPropagation && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = o, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, J.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, o) {
			J.event.special[e] = {
				delegateType: o,
				bindType: o,
				handle: function (e) {
					var t, n = this,
						i = e.relatedTarget,
						r = e.handleObj;
					return (!i || i !== n && !J.contains(n, i)) && (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
				}
			}
		}), K.focusinBubbles || J.each({
			focus: "focusin",
			blur: "focusout"
		}, function (n, i) {
			var r = function (e) {
				J.event.simulate(i, e.target, J.event.fix(e), !0)
			};
			J.event.special[i] = {
				setup: function () {
					var e = this.ownerDocument || this,
						t = ge.access(e, i);
					t || e.addEventListener(n, r, !0), ge.access(e, i, (t || 0) + 1)
				},
				teardown: function () {
					var e = this.ownerDocument || this,
						t = ge.access(e, i) - 1;
					t ? ge.access(e, i, t) : (e.removeEventListener(n, r, !0), ge.remove(e, i))
				}
			}
		}), J.fn.extend({
			on: function (e, t, n, i, r) {
				var o, s;
				if ("object" == typeof e) {
					for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s, t, n, e[s], r);
					return this
				}
				if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = u;
				else if (!i) return this;
				return 1 === r && (o = i, (i = function (e) {
					return J().off(e), o.apply(this, arguments)
				}).guid = o.guid || (o.guid = J.guid++)), this.each(function () {
					J.event.add(this, e, i, n, t)
				})
			},
			one: function (e, t, n, i) {
				return this.on(e, t, n, i, 1)
			},
			off: function (e, t, n) {
				var i, r;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" != typeof e) return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = u), this.each(function () {
					J.event.remove(this, e, n, t)
				});
				for (r in e) this.off(r, t, e[r]);
				return this
			},
			trigger: function (e, t) {
				return this.each(function () {
					J.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				return n ? J.event.trigger(e, t, n, !0) : void 0
			}
		});
		var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			je = /<([\w:]+)/,
			Ne = /<|&#?\w+;/,
			Ae = /<(?:script|style|link)/i,
			Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Fe = /^$|\/(?:java|ecma)script/i,
			Le = /^true\/(.*)/,
			Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Re = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};
		Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, J.extend({
			clone: function (e, t, n) {
				var i, r, o, s, a = e.cloneNode(!0),
					l = J.contains(e.ownerDocument, e);
				if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
					for (s = y(a), i = 0, r = (o = y(e)).length; i < r; i++) h(o[i], s[i]);
				if (t)
					if (n)
						for (o = o || y(e), s = s || y(a), i = 0, r = o.length; i < r; i++) d(o[i], s[i]);
					else d(e, a);
				return 0 < (s = y(a, "script")).length && v(s, !l && y(e, "script")), a
			},
			buildFragment: function (e, t, n, i) {
				for (var r, o, s, a, l, u, c = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
					if ((r = e[f]) || 0 === r)
						if ("object" === J.type(r)) J.merge(d, r.nodeType ? [r] : r);
						else if (Ne.test(r)) {
					for (o = o || c.appendChild(t.createElement("div")), s = (je.exec(r) || ["", ""])[1].toLowerCase(), a = Re[s] || Re._default, o.innerHTML = a[1] + r.replace(Pe, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
					J.merge(d, o.childNodes), (o = c.firstChild).textContent = ""
				} else d.push(t.createTextNode(r));
				for (c.textContent = "", f = 0; r = d[f++];)
					if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r), o = y(c.appendChild(r), "script"), l && v(o), n))
						for (u = 0; r = o[u++];) Fe.test(r.type || "") && n.push(r);
				return c
			},
			cleanData: function (e) {
				for (var t, n, i, r, o = J.event.special, s = 0; void 0 !== (n = e[s]); s++) {
					if (J.acceptData(n) && ((r = n[ge.expando]) && (t = ge.cache[r]))) {
						if (t.events)
							for (i in t.events) o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
						ge.cache[r] && delete ge.cache[r]
					}
					delete ve.cache[n[ve.expando]]
				}
			}
		}), J.fn.extend({
			text: function (e) {
				return me(this, function (e) {
					return void 0 === e ? J.text(this) : this.empty().each(function () {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return this.domManip(arguments, function (e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || c(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return this.domManip(arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = c(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			remove: function (e, t) {
				for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || J.cleanData(y(n)), n.parentNode && (t && J.contains(n.ownerDocument, n) && v(y(n, "script")), n.parentNode.removeChild(n));
				return this
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (J.cleanData(y(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return J.clone(this, e, t)
				})
			},
			html: function (e) {
				return me(this, function (e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ae.test(e) && !Re[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Pe, "<$1></$2>");
						try {
							for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (J.cleanData(y(t, !1)), t.innerHTML = e);
							t = 0
						} catch (W) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function (e) {
				var t = e;
				return this.domManip(arguments, function (e) {
					t = this.parentNode, J.cleanData(y(this)), t && t.replaceChild(e, this)
				}), t && (t.length || t.nodeType) ? this : this.remove()
			},
			detach: function (e) {
				return this.remove(e, !0)
			},
			domManip: function (n, i) {
				n = W.apply([], n);
				var e, t, r, o, s, a, l = 0,
					u = this.length,
					c = this,
					d = u - 1,
					f = n[0],
					h = J.isFunction(f);
				if (h || 1 < u && "string" == typeof f && !K.checkClone && Oe.test(f)) return this.each(function (e) {
					var t = c.eq(e);
					h && (n[0] = f.call(this, e, t.html())), t.domManip(n, i)
				});
				if (u && (t = (e = J.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
					for (o = (r = J.map(y(e, "script"), m)).length; l < u; l++) s = e, l !== d && (s = J.clone(s, !0, !0), o && J.merge(r, y(s, "script"))), i.call(this[l], s, l);
					if (o)
						for (a = r[r.length - 1].ownerDocument, J.map(r, g), l = 0; l < o; l++) s = r[l], Fe.test(s.type || "") && !ge.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Me, "")))
				}
				return this
			}
		}), J.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, s) {
			J.fn[e] = function (e) {
				for (var t, n = [], i = J(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), J(i[o])[s](t), U.apply(n, t.get());
				return this.pushStack(n)
			}
		});
		var qe, He = {},
			Be = /^margin/,
			ze = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
			We = function (e) {
				return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : p.getComputedStyle(e, null)
			};
		! function () {
			function e() {
				o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", i.appendChild(r);
				var e = p.getComputedStyle(o, null);
				t = "1%" !== e.top, n = "4px" === e.width, i.removeChild(r)
			}
			var t, n, i = Z.documentElement,
				r = Z.createElement("div"),
				o = Z.createElement("div");
			o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(o), p.getComputedStyle && J.extend(K, {
				pixelPosition: function () {
					return e(), t
				},
				boxSizingReliable: function () {
					return null == n && e(), n
				},
				reliableMarginRight: function () {
					var e, t = o.appendChild(Z.createElement("div"));
					return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", i.appendChild(r), e = !parseFloat(p.getComputedStyle(t, null).marginRight), i.removeChild(r), o.removeChild(t), e
				}
			}))
		}(), J.swap = function (e, t, n, i) {
			var r, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
			return r
		};
		var Ue = /^(none|table(?!-c[ea]).+)/,
			Xe = new RegExp("^(" + _e + ")(.*)$", "i"),
			Ve = new RegExp("^([+-])=(" + _e + ")", "i"),
			Qe = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Ye = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Ke = ["Webkit", "O", "Moz", "ms"];
		J.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = x(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": "cssFloat"
			},
			style: function (e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var r, o, s, a = J.camelCase(t),
						l = e.style;
					return t = J.cssProps[a] || (J.cssProps[a] = C(l, a)), s = J.cssHooks[t] || J.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = Ve.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)), o = "number"), void(null != n && n == n && ("number" !== o || J.cssNumber[a] || (n += "px"), K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
				}
			},
			css: function (e, t, n, i) {
				var r, o, s, a = J.camelCase(t);
				return t = J.cssProps[a] || (J.cssProps[a] = C(e.style, a)), (s = J.cssHooks[t] || J.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (o = parseFloat(r), !0 === n || J.isNumeric(o) ? o || 0 : r) : r
			}
		}), J.each(["height", "width"], function (e, r) {
			J.cssHooks[r] = {
				get: function (e, t, n) {
					return t ? Ue.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, Qe, function () {
						return E(e, r, n)
					}) : E(e, r, n) : void 0
				},
				set: function (e, t, n) {
					var i = n && We(e);
					return S(e, t, n ? k(e, r, n, "border-box" === J.css(e, "boxSizing", !1, i), i) : 0)
				}
			}
		}), J.cssHooks.marginRight = _(K.reliableMarginRight, function (e, t) {
			return t ? J.swap(e, {
				display: "inline-block"
			}, x, [e, "marginRight"]) : void 0
		}), J.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (r, o) {
			J.cssHooks[r + o] = {
				expand: function (e) {
					for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Ce[t] + o] = i[t] || i[t - 2] || i[0];
					return n
				}
			}, Be.test(r) || (J.cssHooks[r + o].set = S)
		}), J.fn.extend({
			css: function (e, t) {
				return me(this, function (e, t, n) {
					var i, r, o = {},
						s = 0;
					if (J.isArray(t)) {
						for (i = We(e), r = t.length; s < r; s++) o[t[s]] = J.css(e, t[s], !1, i);
						return o
					}
					return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
				}, e, t, 1 < arguments.length)
			},
			show: function () {
				return T(this, !0)
			},
			hide: function () {
				return T(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					Se(this) ? J(this).show() : J(this).hide()
				})
			}
		}), (J.Tween = $).prototype = {
			constructor: $,
			init: function (e, t, n, i, r, o) {
				this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = $.propHooks[this.prop];
				return e && e.get ? e.get(this) : $.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = $.propHooks[this.prop];
				return this.pos = t = this.options.duration ? J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
			}
		}, $.prototype.init.prototype = $.prototype, $.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
				},
				set: function (e) {
					J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
				}
			}
		}, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, J.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			}
		}, J.fx = $.prototype.init, J.fx.step = {};
		var Ze, Ge, Je, et, tt, nt = /^(?:toggle|show|hide)$/,
			it = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
			rt = /queueHooks$/,
			ot = [j],
			st = {
				"*": [function (e, t) {
					var n = this.createTween(e, t),
						i = n.cur(),
						r = it.exec(t),
						o = r && r[3] || (J.cssNumber[e] ? "" : "px"),
						s = (J.cssNumber[e] || "px" !== o && +i) && it.exec(J.css(n.elem, e)),
						a = 1,
						l = 20;
					if (s && s[3] !== o)
						for (o = o || s[3], r = r || [], s = +i || 1; s /= a = a || ".5", J.style(n.elem, e, s + o), a !== (a = n.cur() / i) && 1 !== a && --l;);
					return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
				}]
			};
		J.Animation = J.extend(A, {
			tweener: function (e, t) {
				J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, i = 0, r = e.length; i < r; i++) n = e[i], st[n] = st[n] || [], st[n].unshift(t)
			},
			prefilter: function (e, t) {
				t ? ot.unshift(e) : ot.push(e)
			}
		}), J.speed = function (e, t, n) {
			var i = e && "object" == typeof e ? J.extend({}, e) : {
				complete: n || !n && t || J.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !J.isFunction(t) && t
			};
			return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
			}, i
		}, J.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter(Se).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function (t, e, n, i) {
				var r = J.isEmptyObject(t),
					o = J.speed(e, n, i),
					s = function () {
						var e = A(this, J.extend({}, t), o);
						(r || ge.get(this, "finish")) && e.stop(!0)
					};
				return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
			},
			stop: function (r, e, o) {
				var s = function (e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
					var e = !0,
						t = null != r && r + "queueHooks",
						n = J.timers,
						i = ge.get(this);
					if (t) i[t] && i[t].stop && s(i[t]);
					else
						for (t in i) i[t] && i[t].stop && rt.test(t) && s(i[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
					(e || !o) && J.dequeue(this, r)
				})
			},
			finish: function (s) {
				return !1 !== s && (s = s || "fx"), this.each(function () {
					var e, t = ge.get(this),
						n = t[s + "queue"],
						i = t[s + "queueHooks"],
						r = J.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, J.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), J.each(["toggle", "show", "hide"], function (e, i) {
			var r = J.fn[i];
			J.fn[i] = function (e, t, n) {
				return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(I(i, !0), e, t, n)
			}
		}), J.each({
			slideDown: I("show"),
			slideUp: I("hide"),
			slideToggle: I("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, i) {
			J.fn[e] = function (e, t, n) {
				return this.animate(i, e, t, n)
			}
		}), J.timers = [], J.fx.tick = function () {
			var e, t = 0,
				n = J.timers;
			for (Ze = J.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || J.fx.stop(), Ze = void 0
		}, J.fx.timer = function (e) {
			J.timers.push(e), e() ? J.fx.start() : J.timers.pop()
		}, J.fx.interval = 13, J.fx.start = function () {
			Ge || (Ge = setInterval(J.fx.tick, J.fx.interval))
		}, J.fx.stop = function () {
			clearInterval(Ge), Ge = null
		}, J.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, J.fn.delay = function (i, e) {
			return i = J.fx && J.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
				var n = setTimeout(e, i);
				t.stop = function () {
					clearTimeout(n)
				}
			})
		}, Je = Z.createElement("input"), et = Z.createElement("select"), tt = et.appendChild(Z.createElement("option")), Je.type = "checkbox", K.checkOn = "" !== Je.value, K.optSelected = tt.selected, et.disabled = !0, K.optDisabled = !tt.disabled, (Je = Z.createElement("input")).value = "t", Je.type = "radio", K.radioValue = "t" === Je.value;
		var at, lt, ut = J.expr.attrHandle;
		J.fn.extend({
			attr: function (e, t) {
				return me(this, J.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function (e) {
				return this.each(function () {
					J.removeAttr(this, e)
				})
			}
		}), J.extend({
			attr: function (e, t, n) {
				var i, r, o = e.nodeType;
				if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Ee ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(), i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? lt : at)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = J.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void J.removeAttr(e, t))
			},
			removeAttr: function (e, t) {
				var n, i, r = 0,
					o = t && t.match(he);
				if (o && 1 === e.nodeType)
					for (; n = o[r++];) i = J.propFix[n] || n, J.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!K.radioValue && "radio" === t && J.nodeName(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			}
		}), lt = {
			set: function (e, t, n) {
				return !1 === t ? J.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, J.each(J.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var o = ut[t] || J.find.attr;
			ut[t] = function (e, t, n) {
				var i, r;
				return n || (r = ut[t], ut[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, ut[t] = r), i
			}
		});
		var ct = /^(?:input|select|textarea|button)$/i;
		J.fn.extend({
			prop: function (e, t) {
				return me(this, J.prop, e, t, 1 < arguments.length)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[J.propFix[e] || e]
				})
			}
		}), J.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},
			prop: function (e, t, n) {
				var i, r, o = e.nodeType;
				if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !J.isXMLDoc(e)) && (t = J.propFix[t] || t, r = J.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						return e.hasAttribute("tabindex") || ct.test(e.nodeName) || e.href ? e.tabIndex : -1
					}
				}
			}
		}), K.optSelected || (J.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			}
		}), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			J.propFix[this.toLowerCase()] = this
		});
		var dt = /[\t\r\n\f]/g;
		J.fn.extend({
			addClass: function (t) {
				var e, n, i, r, o, s, a = "string" == typeof t && t,
					l = 0,
					u = this.length;
				if (J.isFunction(t)) return this.each(function (e) {
					J(this).addClass(t.call(this, e, this.className))
				});
				if (a)
					for (e = (t || "").match(he) || []; l < u; l++)
						if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : " ")) {
							for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
							s = J.trim(i), n.className !== s && (n.className = s)
						}
				return this
			},
			removeClass: function (t) {
				var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
					l = 0,
					u = this.length;
				if (J.isFunction(t)) return this.each(function (e) {
					J(this).removeClass(t.call(this, e, this.className))
				});
				if (a)
					for (e = (t || "").match(he) || []; l < u; l++)
						if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(dt, " ") : "")) {
							for (o = 0; r = e[o++];)
								for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
							s = t ? J.trim(i) : "", n.className !== s && (n.className = s)
						}
				return this
			},
			toggleClass: function (r, t) {
				var o = typeof r;
				return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : this.each(J.isFunction(r) ? function (e) {
					J(this).toggleClass(r.call(this, e, this.className, t), t)
				} : function () {
					if ("string" === o)
						for (var e, t = 0, n = J(this), i = r.match(he) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
					else(o === Ee || "boolean" === o) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : ge.get(this, "__className__") || "")
				})
			},
			hasClass: function (e) {
				for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
					if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(dt, " ").indexOf(t)) return !0;
				return !1
			}
		});
		var ft = /\r/g;
		J.fn.extend({
			val: function (n) {
				var i, e, r, t = this[0];
				return arguments.length ? (r = J.isFunction(n), this.each(function (e) {
					var t;
					1 === this.nodeType && (null == (t = r ? n.call(this, e, J(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : J.isArray(t) && (t = J.map(t, function (e) {
						return null == e ? "" : e + ""
					})), (i = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
				})) : t ? (i = J.valHooks[t.type] || J.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ft, "") : null == e ? "" : e : void 0
			}
		}), J.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = J.find.attr(e, "value");
						return null != t ? t : J.trim(J.text(e))
					}
				},
				select: {
					get: function (e) {
						for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
							if (!(!(n = i[l]).selected && l !== r || (K.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && J.nodeName(n.parentNode, "optgroup"))) {
								if (t = J(n).val(), o) return t;
								s.push(t)
							}
						return s
					},
					set: function (e, t) {
						for (var n, i, r = e.options, o = J.makeArray(t), s = r.length; s--;)((i = r[s]).selected = 0 <= J.inArray(i.value, o)) && (n = !0);
						return n || (e.selectedIndex = -1), o
					}
				}
			}
		}), J.each(["radio", "checkbox"], function () {
			J.valHooks[this] = {
				set: function (e, t) {
					return J.isArray(t) ? e.checked = 0 <= J.inArray(J(e).val(), t) : void 0
				}
			}, K.checkOn || (J.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
			J.fn[n] = function (e, t) {
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), J.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			},
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		});
		var ht = J.now(),
			pt = /\?/;
		J.parseJSON = function (e) {
			return JSON.parse(e + "")
		}, J.parseXML = function (e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new DOMParser).parseFromString(e, "text/xml")
			} catch (z) {
				t = void 0
			}
			return (!t || t.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + e), t
		};
		var mt = /#.*$/,
			gt = /([?&])_=[^&]*/,
			vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			bt = /^(?:GET|HEAD)$/,
			wt = /^\/\//,
			xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			_t = {},
			Ct = {},
			St = "*/".concat("*"),
			kt = p.location.href,
			Et = xt.exec(kt.toLowerCase()) || [];
		J.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: kt,
				type: "GET",
				isLocal: yt.test(Et[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": St,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": J.parseJSON,
					"text xml": J.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? L(L(e, J.ajaxSettings), t) : L(J.ajaxSettings, e)
			},
			ajaxPrefilter: O(_t),
			ajaxTransport: O(Ct),
			ajax: function (e, t) {
				function n(e, t, n, i) {
					var r, o, s, a, l, u = t;
					2 !== x && (x = 2, h && clearTimeout(h), c = void 0, f = i || "", _.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = M(m, _, n)), a = R(m, a, _, r), r ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (J.lastModified[d] = l), (l = _.getResponseHeader("etag")) && (J.etag[d] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, (e || !u) && (u = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || u) + "", r ? y.resolveWith(g, [o, u, _]) : y.rejectWith(g, [_, u, s]), _.statusCode(w), w = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [_, m, r ? o : s]), b.fireWith(g, [_, u]), p && (v.trigger("ajaxComplete", [_, m]), --J.active || J.event.trigger("ajaxStop")))
				}
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var c, d, f, i, h, r, p, o, m = J.ajaxSetup({}, t),
					g = m.context || m,
					v = m.context && (g.nodeType || g.jquery) ? J(g) : J.event,
					y = J.Deferred(),
					b = J.Callbacks("once memory"),
					w = m.statusCode || {},
					s = {},
					a = {},
					x = 0,
					l = "canceled",
					_ = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (2 === x) {
								if (!i)
									for (i = {}; t = vt.exec(f);) i[t[1].toLowerCase()] = t[2];
								t = i[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return 2 === x ? f : null
						},
						setRequestHeader: function (e, t) {
							var n = e.toLowerCase();
							return x || (e = a[n] = a[n] || e, s[e] = t), this
						},
						overrideMimeType: function (e) {
							return x || (m.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (x < 2)
									for (t in e) w[t] = [w[t], e[t]];
								else _.always(e[_.status]);
							return this
						},
						abort: function (e) {
							var t = e || l;
							return c && c.abort(t), n(0, t), this
						}
					};
				if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((e || m.url || kt) + "").replace(mt, "").replace(wt, Et[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = J.trim(m.dataType || "*").toLowerCase().match(he) || [""], null == m.crossDomain && (r = xt.exec(m.url.toLowerCase()), m.crossDomain = !(!r || r[1] === Et[1] && r[2] === Et[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = J.param(m.data, m.traditional)), F(_t, m, t, _), 2 === x) return _;
				for (o in (p = J.event && m.global) && 0 == J.active++ && J.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !bt.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (pt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = gt.test(d) ? d.replace(gt, "$1_=" + ht++) : d + (pt.test(d) ? "&" : "?") + "_=" + ht++)), m.ifModified && (J.lastModified[d] && _.setRequestHeader("If-Modified-Since", J.lastModified[d]), J.etag[d] && _.setRequestHeader("If-None-Match", J.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + St + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(o, m.headers[o]);
				if (m.beforeSend && (!1 === m.beforeSend.call(g, _, m) || 2 === x)) return _.abort();
				for (o in l = "abort", {
						success: 1,
						error: 1,
						complete: 1
					}) _[o](m[o]);
				if (c = F(Ct, m, t, _)) {
					_.readyState = 1, p && v.trigger("ajaxSend", [_, m]), m.async && 0 < m.timeout && (h = setTimeout(function () {
						_.abort("timeout")
					}, m.timeout));
					try {
						x = 1, c.send(s, n)
					} catch (ae) {
						if (!(x < 2)) throw ae;
						n(-1, ae)
					}
				} else n(-1, "No Transport");
				return _
			},
			getJSON: function (e, t, n) {
				return J.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return J.get(e, void 0, t, "script")
			}
		}), J.each(["get", "post"], function (e, r) {
			J[r] = function (e, t, n, i) {
				return J.isFunction(t) && (i = i || n, n = t, t = void 0), J.ajax({
					url: e,
					type: r,
					dataType: i,
					data: t,
					success: n
				})
			}
		}), J._evalUrl = function (e) {
			return J.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}, J.fn.extend({
			wrapAll: function (t) {
				var e;
				return J.isFunction(t) ? this.each(function (e) {
					J(this).wrapAll(t.call(this, e))
				}) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this)
			},
			wrapInner: function (n) {
				return this.each(J.isFunction(n) ? function (e) {
					J(this).wrapInner(n.call(this, e))
				} : function () {
					var e = J(this),
						t = e.contents();
					t.length ? t.wrapAll(n) : e.append(n)
				})
			},
			wrap: function (t) {
				var n = J.isFunction(t);
				return this.each(function (e) {
					J(this).wrapAll(n ? t.call(this, e) : t)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
				}).end()
			}
		}), J.expr.filters.hidden = function (e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0
		}, J.expr.filters.visible = function (e) {
			return !J.expr.filters.hidden(e)
		};
		var Tt = /%20/g,
			$t = /\[\]$/,
			Dt = /\r?\n/g,
			It = /^(?:submit|button|image|reset|file)$/i,
			Pt = /^(?:input|select|textarea|keygen)/i;
		J.param = function (e, t) {
			var n, i = [],
				r = function (e, t) {
					t = J.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
				};
			if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function () {
				r(this.name, this.value)
			});
			else
				for (n in e) q(n, e[n], t, r);
			return i.join("&").replace(Tt, "+")
		}, J.fn.extend({
			serialize: function () {
				return J.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = J.prop(this, "elements");
					return e ? J.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !J(this).is(":disabled") && Pt.test(this.nodeName) && !It.test(e) && (this.checked || !ke.test(e))
				}).map(function (e, t) {
					var n = J(this).val();
					return null == n ? null : J.isArray(n) ? J.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Dt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Dt, "\r\n")
					}
				}).get()
			}
		}), J.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest
			} catch (p) {}
		};
		var jt = 0,
			Nt = {},
			At = {
				0: 200,
				1223: 204
			},
			Ot = J.ajaxSettings.xhr();
		p.attachEvent && p.attachEvent("onunload", function () {
			for (var e in Nt) Nt[e]()
		}), K.cors = !!Ot && "withCredentials" in Ot, K.ajax = Ot = !!Ot, J.ajaxTransport(function (o) {
			var s;
			return K.cors || Ot && !o.crossDomain ? {
				send: function (e, t) {
					var n, i = o.xhr(),
						r = ++jt;
					if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
						for (n in o.xhrFields) i[n] = o.xhrFields[n];
					for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
					s = function (e) {
						return function () {
							s && (delete Nt[r], s = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? t(i.status, i.statusText) : t(At[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
								text: i.responseText
							} : void 0, i.getAllResponseHeaders()))
						}
					}, i.onload = s(), i.onerror = s("error"), s = Nt[r] = s("abort");
					try {
						i.send(o.hasContent && o.data || null)
					} catch (V) {
						if (s) throw V
					}
				},
				abort: function () {
					s && s()
				}
			} : void 0
		}), J.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function (e) {
					return J.globalEval(e), e
				}
			}
		}), J.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), J.ajaxTransport("script", function (n) {
			var i, r;
			if (n.crossDomain) return {
				send: function (e, t) {
					i = J("<script>").prop({
						async: !0,
						charset: n.scriptCharset,
						src: n.url
					}).on("load error", r = function (e) {
						i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), Z.head.appendChild(i[0])
				},
				abort: function () {
					r && r()
				}
			}
		});
		var Ft = [],
			Lt = /(=)\?(?=&|$)|\?\?/;
		J.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Ft.pop() || J.expando + "_" + ht++;
				return this[e] = !0, e
			}
		}), J.ajaxPrefilter("json jsonp", function (e, t, n) {
			var i, r, o, s = !1 !== e.jsonp && (Lt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Lt.test(e.data) && "data");
			return s || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Lt, "$1" + i) : !1 !== e.jsonp && (e.url += (pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
				return o || J.error(i + " was not called"), o[0]
			}, e.dataTypes[0] = "json", r = p[i], p[i] = function () {
				o = arguments
			}, n.always(function () {
				p[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Ft.push(i)), o && J.isFunction(r) && r(o[0]), o = r = void 0
			}), "script") : void 0
		}), J.parseHTML = function (e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || Z;
			var i = se.exec(e),
				r = !n && [];
			return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r), r && r.length && J(r).remove(), J.merge([], i.childNodes))
		};
		var Mt = J.fn.load;
		J.fn.load = function (e, t, n) {
			if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
			var i, r, o, s = this,
				a = e.indexOf(" ");
			return 0 <= a && (i = J.trim(e.slice(a)), e = e.slice(0, a)), J.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && J.ajax({
				url: e,
				type: r,
				dataType: "html",
				data: t
			}).done(function (e) {
				o = arguments, s.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
			}).complete(n && function (e, t) {
				s.each(n, o || [e.responseText, t, e])
			}), this
		}, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			J.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), J.expr.filters.animated = function (t) {
			return J.grep(J.timers, function (e) {
				return t === e.elem
			}).length
		};
		var Rt = p.document.documentElement;
		J.offset = {
			setOffset: function (e, t, n) {
				var i, r, o, s, a, l, u = J.css(e, "position"),
					c = J(e),
					d = {};
				"static" === u && (e.style.position = "relative"), a = c.offset(), o = J.css(e, "top"), l = J.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
			}
		}, J.fn.extend({
			offset: function (t) {
				if (arguments.length) return void 0 === t ? this : this.each(function (e) {
					J.offset.setOffset(this, t, e)
				});
				var e, n, i = this[0],
					r = {
						top: 0,
						left: 0
					},
					o = i && i.ownerDocument;
				return o ? (e = o.documentElement, J.contains(e, i) ? (typeof i.getBoundingClientRect !== Ee && (r = i.getBoundingClientRect()), n = H(o), {
					top: r.top + n.pageYOffset - e.clientTop,
					left: r.left + n.pageXOffset - e.clientLeft
				}) : r) : void 0
			},
			position: function () {
				if (this[0]) {
					var e, t, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), J.nodeName(e[0], "html") || (i = e.offset()), i.top += J.css(e[0], "borderTopWidth", !0), i.left += J.css(e[0], "borderLeftWidth", !0)), {
						top: t.top - i.top - J.css(n, "marginTop", !0),
						left: t.left - i.left - J.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent || Rt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position");) e = e.offsetParent;
					return e || Rt
				})
			}
		}), J.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (t, r) {
			var o = "pageYOffset" === r;
			J.fn[t] = function (e) {
				return me(this, function (e, t, n) {
					var i = H(e);
					return void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(o ? p.pageXOffset : n, o ? n : p.pageYOffset) : e[t] = n)
				}, t, e, arguments.length, null)
			}
		}), J.each(["top", "left"], function (e, n) {
			J.cssHooks[n] = _(K.pixelPosition, function (e, t) {
				return t ? (t = x(e, n), ze.test(t) ? J(e).position()[n] + "px" : t) : void 0
			})
		}), J.each({
			Height: "height",
			Width: "width"
		}, function (o, s) {
			J.each({
				padding: "inner" + o,
				content: s,
				"": "outer" + o
			}, function (i, e) {
				J.fn[e] = function (e, t) {
					var n = arguments.length && (i || "boolean" != typeof e),
						r = i || (!0 === e || !0 === t ? "margin" : "border");
					return me(this, function (e, t, n) {
						var i;
						return J.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? J.css(e, t, r) : J.style(e, t, n, r)
					}, s, n ? e : void 0, n, null)
				}
			})
		}), J.fn.size = function () {
			return this.length
		}, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
			return J
		});
		var qt = p.jQuery,
			Ht = p.$;
		return J.noConflict = function (e) {
			return p.$ === J && (p.$ = Ht), e && p.jQuery === J && (p.jQuery = qt), J
		}, typeof e === Ee && (p.jQuery = p.$ = J), J
	}),
	function () {
		function e(a) {
			function l(e, t, n, i, r, o) {
				for (; 0 <= r && r < o; r += a) {
					var s = i ? i[r] : r;
					n = t(n, e[s], s, e)
				}
				return n
			}
			return function (e, t, n, i) {
				t = b(t, i, 4);
				var r = !E(e) && y.keys(e),
					o = (r || e).length,
					s = 0 < a ? 0 : o - 1;
				return arguments.length < 3 && (n = e[r ? r[s] : s], s += a), l(e, t, n, r, s, o)
			}
		}

		function t(o) {
			return function (e, t, n) {
				t = w(t, n);
				for (var i = k(e), r = 0 < o ? 0 : i - 1; 0 <= r && r < i; r += o)
					if (t(e[r], r, e)) return r;
				return -1
			}
		}

		function n(o, s, a) {
			return function (e, t, n) {
				var i = 0,
					r = k(e);
				if ("number" == typeof n) 0 < o ? i = 0 <= n ? n : Math.max(n + r, i) : r = 0 <= n ? Math.min(n + 1, r) : n + r + 1;
				else if (a && n && r) return e[n = a(e, t)] === t ? n : -1;
				if (t != t) return 0 <= (n = s(c.call(e, i, r), y.isNaN)) ? n + i : -1;
				for (n = 0 < o ? i : r - 1; 0 <= n && n < r; n += o)
					if (e[n] === t) return n;
				return -1
			}
		}

		function i(e, t) {
			var n = P.length,
				i = e.constructor,
				r = y.isFunction(i) && i.prototype || a,
				o = "constructor";
			for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;)(o = P[n]) in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o)
		}
		var r = this,
			o = r._,
			s = Array.prototype,
			a = Object.prototype,
			l = Function.prototype,
			u = s.push,
			c = s.slice,
			d = a.toString,
			f = a.hasOwnProperty,
			h = Array.isArray,
			p = Object.keys,
			m = l.bind,
			g = Object.create,
			v = function () {},
			y = function (e) {
				return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
			};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
		var b = function (r, o, e) {
				if (void 0 === o) return r;
				switch (null == e ? 3 : e) {
					case 1:
						return function (e) {
							return r.call(o, e)
						};
					case 2:
						return function (e, t) {
							return r.call(o, e, t)
						};
					case 3:
						return function (e, t, n) {
							return r.call(o, e, t, n)
						};
					case 4:
						return function (e, t, n, i) {
							return r.call(o, e, t, n, i)
						}
				}
				return function () {
					return r.apply(o, arguments)
				}
			},
			w = function (e, t, n) {
				return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
			};
		y.iteratee = function (e, t) {
			return w(e, t, Infinity)
		};
		var x = function (l, u) {
				return function (e) {
					var t = arguments.length;
					if (t < 2 || null == e) return e;
					for (var n = 1; n < t; n++)
						for (var i = arguments[n], r = l(i), o = r.length, s = 0; s < o; s++) {
							var a = r[s];
							u && void 0 !== e[a] || (e[a] = i[a])
						}
					return e
				}
			},
			_ = function (e) {
				if (!y.isObject(e)) return {};
				if (g) return g(e);
				v.prototype = e;
				var t = new v;
				return v.prototype = null, t
			},
			C = function (t) {
				return function (e) {
					return null == e ? void 0 : e[t]
				}
			},
			S = Math.pow(2, 53) - 1,
			k = C("length"),
			E = function (e) {
				var t = k(e);
				return "number" == typeof t && 0 <= t && t <= S
			};
		y.each = y.forEach = function (e, t, n) {
			var i, r;
			if (t = b(t, n), E(e))
				for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
			else {
				var o = y.keys(e);
				for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e)
			}
			return e
		}, y.map = y.collect = function (e, t, n) {
			t = w(t, n);
			for (var i = !E(e) && y.keys(e), r = (i || e).length, o = Array(r), s = 0; s < r; s++) {
				var a = i ? i[s] : s;
				o[s] = t(e[a], a, e)
			}
			return o
		}, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function (e, t, n) {
			var i;
			if (void 0 !== (i = E(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== i) return e[i]
		}, y.filter = y.select = function (e, i, t) {
			var r = [];
			return i = w(i, t), y.each(e, function (e, t, n) {
				i(e, t, n) && r.push(e)
			}), r
		}, y.reject = function (e, t, n) {
			return y.filter(e, y.negate(w(t)), n)
		}, y.every = y.all = function (e, t, n) {
			t = w(t, n);
			for (var i = !E(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
				var s = i ? i[o] : o;
				if (!t(e[s], s, e)) return !1
			}
			return !0
		}, y.some = y.any = function (e, t, n) {
			t = w(t, n);
			for (var i = !E(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
				var s = i ? i[o] : o;
				if (t(e[s], s, e)) return !0
			}
			return !1
		}, y.contains = y.includes = y.include = function (e, t, n, i) {
			return E(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), 0 <= y.indexOf(e, t, n)
		}, y.invoke = function (e, n) {
			var i = c.call(arguments, 2),
				r = y.isFunction(n);
			return y.map(e, function (e) {
				var t = r ? n : e[n];
				return null == t ? t : t.apply(e, i)
			})
		}, y.pluck = function (e, t) {
			return y.map(e, y.property(t))
		}, y.where = function (e, t) {
			return y.filter(e, y.matcher(t))
		}, y.findWhere = function (e, t) {
			return y.find(e, y.matcher(t))
		}, y.max = function (e, i, t) {
			var n, r, o = -Infinity,
				s = -Infinity;
			if (null == i && null != e)
				for (var a = 0, l = (e = E(e) ? e : y.values(e)).length; a < l; a++) n = e[a], o < n && (o = n);
			else i = w(i, t), y.each(e, function (e, t, n) {
				r = i(e, t, n), (s < r || r === -Infinity && o === -Infinity) && (o = e, s = r)
			});
			return o
		}, y.min = function (e, i, t) {
			var n, r, o = Infinity,
				s = Infinity;
			if (null == i && null != e)
				for (var a = 0, l = (e = E(e) ? e : y.values(e)).length; a < l; a++)(n = e[a]) < o && (o = n);
			else i = w(i, t), y.each(e, function (e, t, n) {
				((r = i(e, t, n)) < s || r === Infinity && o === Infinity) && (o = e, s = r)
			});
			return o
		}, y.shuffle = function (e) {
			for (var t, n = E(e) ? e : y.values(e), i = n.length, r = Array(i), o = 0; o < i; o++)(t = y.random(0, o)) !== o && (r[o] = r[t]), r[t] = n[o];
			return r
		}, y.sample = function (e, t, n) {
			return null == t || n ? (E(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
		}, y.sortBy = function (e, i, t) {
			return i = w(i, t), y.pluck(y.map(e, function (e, t, n) {
				return {
					value: e,
					index: t,
					criteria: i(e, t, n)
				}
			}).sort(function (e, t) {
				var n = e.criteria,
					i = t.criteria;
				if (n !== i) {
					if (i < n || void 0 === n) return 1;
					if (n < i || void 0 === i) return -1
				}
				return e.index - t.index
			}), "value")
		};
		var T = function (s) {
			return function (i, r, e) {
				var o = {};
				return r = w(r, e), y.each(i, function (e, t) {
					var n = r(e, t, i);
					s(o, e, n)
				}), o
			}
		};
		y.groupBy = T(function (e, t, n) {
			y.has(e, n) ? e[n].push(t) : e[n] = [t]
		}), y.indexBy = T(function (e, t, n) {
			e[n] = t
		}), y.countBy = T(function (e, t, n) {
			y.has(e, n) ? e[n]++ : e[n] = 1
		}), y.toArray = function (e) {
			return e ? y.isArray(e) ? c.call(e) : E(e) ? y.map(e, y.identity) : y.values(e) : []
		}, y.size = function (e) {
			return null == e ? 0 : E(e) ? e.length : y.keys(e).length
		}, y.partition = function (e, i, t) {
			i = w(i, t);
			var r = [],
				o = [];
			return y.each(e, function (e, t, n) {
				(i(e, t, n) ? r : o).push(e)
			}), [r, o]
		}, y.first = y.head = y.take = function (e, t, n) {
			if (null != e) return null == t || n ? e[0] : y.initial(e, e.length - t)
		}, y.initial = function (e, t, n) {
			return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
		}, y.last = function (e, t, n) {
			if (null != e) return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
		}, y.rest = y.tail = y.drop = function (e, t, n) {
			return c.call(e, null == t || n ? 1 : t)
		}, y.compact = function (e) {
			return y.filter(e, y.identity)
		};
		var $ = function (e, t, n, i) {
			for (var r = [], o = 0, s = i || 0, a = k(e); s < a; s++) {
				var l = e[s];
				if (E(l) && (y.isArray(l) || y.isArguments(l))) {
					t || (l = $(l, t, n));
					var u = 0,
						c = l.length;
					for (r.length += c; u < c;) r[o++] = l[u++]
				} else n || (r[o++] = l)
			}
			return r
		};
		y.flatten = function (e, t) {
			return $(e, t, !1)
		}, y.without = function (e) {
			return y.difference(e, c.call(arguments, 1))
		}, y.uniq = y.unique = function (e, t, n, i) {
			y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = w(n, i));
			for (var r = [], o = [], s = 0, a = k(e); s < a; s++) {
				var l = e[s],
					u = n ? n(l, s, e) : l;
				t ? (s && o === u || r.push(l), o = u) : n ? y.contains(o, u) || (o.push(u), r.push(l)) : y.contains(r, l) || r.push(l)
			}
			return r
		}, y.union = function () {
			return y.uniq($(arguments, !0, !0))
		}, y.intersection = function (e) {
			for (var t = [], n = arguments.length, i = 0, r = k(e); i < r; i++) {
				var o = e[i];
				if (!y.contains(t, o)) {
					for (var s = 1; s < n && y.contains(arguments[s], o); s++);
					s === n && t.push(o)
				}
			}
			return t
		}, y.difference = function (e) {
			var t = $(arguments, !0, !0, 1);
			return y.filter(e, function (e) {
				return !y.contains(t, e)
			})
		}, y.zip = function () {
			return y.unzip(arguments)
		}, y.unzip = function (e) {
			for (var t = e && y.max(e, k).length || 0, n = Array(t), i = 0; i < t; i++) n[i] = y.pluck(e, i);
			return n
		}, y.object = function (e, t) {
			for (var n = {}, i = 0, r = k(e); i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
			return n
		}, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function (e, t, n, i) {
			for (var r = (n = w(n, i, 1))(t), o = 0, s = k(e); o < s;) {
				var a = Math.floor((o + s) / 2);
				n(e[a]) < r ? o = a + 1 : s = a
			}
			return o
		}, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function (e, t, n) {
			null == t && (t = e || 0, e = 0), n = n || 1;
			for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
			return r
		};
		var D = function (e, t, n, i, r) {
			if (!(i instanceof t)) return e.apply(n, r);
			var o = _(e.prototype),
				s = e.apply(o, r);
			return y.isObject(s) ? s : o
		};
		y.bind = function (e, t) {
				if (m && e.bind === m) return m.apply(e, c.call(arguments, 1));
				if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
				var n = c.call(arguments, 2),
					i = function () {
						return D(e, i, t, this, n.concat(c.call(arguments)))
					};
				return i
			}, y.partial = function (r) {
				var o = c.call(arguments, 1),
					s = function () {
						for (var e = 0, t = o.length, n = Array(t), i = 0; i < t; i++) n[i] = o[i] === y ? arguments[e++] : o[i];
						for (; e < arguments.length;) n.push(arguments[e++]);
						return D(r, s, this, this, n)
					};
				return s
			}, y.bindAll = function (e) {
				var t, n, i = arguments.length;
				if (i <= 1) throw new Error("bindAll must be passed function names");
				for (t = 1; t < i; t++) e[n = arguments[t]] = y.bind(e[n], e);
				return e
			}, y.memoize = function (i, r) {
				var o = function (e) {
					var t = o.cache,
						n = "" + (r ? r.apply(this, arguments) : e);
					return y.has(t, n) || (t[n] = i.apply(this, arguments)), t[n]
				};
				return o.cache = {}, o
			}, y.delay = function (e, t) {
				var n = c.call(arguments, 2);
				return setTimeout(function () {
					return e.apply(null, n)
				}, t)
			},
			y.defer = y.partial(y.delay, y, 1), y.throttle = function (n, i, r) {
				var o, s, a, l = null,
					u = 0;
				r || (r = {});
				var c = function () {
					u = !1 === r.leading ? 0 : y.now(), l = null, a = n.apply(o, s), l || (o = s = null)
				};
				return function () {
					var e = y.now();
					u || !1 !== r.leading || (u = e);
					var t = i - (e - u);
					return o = this, s = arguments, t <= 0 || i < t ? (l && (clearTimeout(l), l = null), u = e, a = n.apply(o, s), l || (o = s = null)) : l || !1 === r.trailing || (l = setTimeout(c, t)), a
				}
			}, y.debounce = function (t, n, i) {
				var r, o, s, a, l, u = function () {
					var e = y.now() - a;
					e < n && 0 <= e ? r = setTimeout(u, n - e) : (r = null, i || (l = t.apply(s, o), r || (s = o = null)))
				};
				return function () {
					s = this, o = arguments, a = y.now();
					var e = i && !r;
					return r || (r = setTimeout(u, n)), e && (l = t.apply(s, o), s = o = null), l
				}
			}, y.wrap = function (e, t) {
				return y.partial(t, e)
			}, y.negate = function (e) {
				return function () {
					return !e.apply(this, arguments)
				}
			}, y.compose = function () {
				var n = arguments,
					i = n.length - 1;
				return function () {
					for (var e = i, t = n[i].apply(this, arguments); e--;) t = n[e].call(this, t);
					return t
				}
			}, y.after = function (e, t) {
				return function () {
					if (--e < 1) return t.apply(this, arguments)
				}
			}, y.before = function (e, t) {
				var n;
				return function () {
					return 0 < --e && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
				}
			}, y.once = y.partial(y.before, 2);
		var I = !{
				toString: null
			}.propertyIsEnumerable("toString"),
			P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
		y.keys = function (e) {
			if (!y.isObject(e)) return [];
			if (p) return p(e);
			var t = [];
			for (var n in e) y.has(e, n) && t.push(n);
			return I && i(e, t), t
		}, y.allKeys = function (e) {
			if (!y.isObject(e)) return [];
			var t = [];
			for (var n in e) t.push(n);
			return I && i(e, t), t
		}, y.values = function (e) {
			for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
			return i
		}, y.mapObject = function (e, t, n) {
			t = w(t, n);
			for (var i, r = y.keys(e), o = r.length, s = {}, a = 0; a < o; a++) s[i = r[a]] = t(e[i], i, e);
			return s
		}, y.pairs = function (e) {
			for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
			return i
		}, y.invert = function (e) {
			for (var t = {}, n = y.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
			return t
		}, y.functions = y.methods = function (e) {
			var t = [];
			for (var n in e) y.isFunction(e[n]) && t.push(n);
			return t.sort()
		}, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function (e, t, n) {
			t = w(t, n);
			for (var i, r = y.keys(e), o = 0, s = r.length; o < s; o++)
				if (t(e[i = r[o]], i, e)) return i
		}, y.pick = function (e, t, n) {
			var i, r, o = {},
				s = e;
			if (null == s) return o;
			y.isFunction(t) ? (r = y.allKeys(s), i = b(t, n)) : (r = $(arguments, !1, !1, 1), i = function (e, t, n) {
				return t in n
			}, s = Object(s));
			for (var a = 0, l = r.length; a < l; a++) {
				var u = r[a],
					c = s[u];
				i(c, u, s) && (o[u] = c)
			}
			return o
		}, y.omit = function (e, t, n) {
			if (y.isFunction(t)) t = y.negate(t);
			else {
				var i = y.map($(arguments, !1, !1, 1), String);
				t = function (e, t) {
					return !y.contains(i, t)
				}
			}
			return y.pick(e, t, n)
		}, y.defaults = x(y.allKeys, !0), y.create = function (e, t) {
			var n = _(e);
			return t && y.extendOwn(n, t), n
		}, y.clone = function (e) {
			return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
		}, y.tap = function (e, t) {
			return t(e), e
		}, y.isMatch = function (e, t) {
			var n = y.keys(t),
				i = n.length;
			if (null == e) return !i;
			for (var r = Object(e), o = 0; o < i; o++) {
				var s = n[o];
				if (t[s] !== r[s] || !(s in r)) return !1
			}
			return !0
		};
		var j = function (e, t, n, i) {
			if (e === t) return 0 !== e || 1 / e == 1 / t;
			if (null == e || null == t) return e === t;
			e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
			var r = d.call(e);
			if (r !== d.call(t)) return !1;
			switch (r) {
				case "[object RegExp]":
				case "[object String]":
					return "" + e == "" + t;
				case "[object Number]":
					return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
				case "[object Date]":
				case "[object Boolean]":
					return +e == +t
			}
			var o = "[object Array]" === r;
			if (!o) {
				if ("object" != typeof e || "object" != typeof t) return !1;
				var s = e.constructor,
					a = t.constructor;
				if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
			}
			i = i || [];
			for (var l = (n = n || []).length; l--;)
				if (n[l] === e) return i[l] === t;
			if (n.push(e), i.push(t), o) {
				if ((l = e.length) !== t.length) return !1;
				for (; l--;)
					if (!j(e[l], t[l], n, i)) return !1
			} else {
				var u, c = y.keys(e);
				if (l = c.length, y.keys(t).length !== l) return !1;
				for (; l--;)
					if (u = c[l], !y.has(t, u) || !j(e[u], t[u], n, i)) return !1
			}
			return n.pop(), i.pop(), !0
		};
		y.isEqual = function (e, t) {
			return j(e, t)
		}, y.isEmpty = function (e) {
			return null == e || (E(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
		}, y.isElement = function (e) {
			return !(!e || 1 !== e.nodeType)
		}, y.isArray = h || function (e) {
			return "[object Array]" === d.call(e)
		}, y.isObject = function (e) {
			var t = typeof e;
			return "function" === t || "object" === t && !!e
		}, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (t) {
			y["is" + t] = function (e) {
				return d.call(e) === "[object " + t + "]"
			}
		}), y.isArguments(arguments) || (y.isArguments = function (e) {
			return y.has(e, "callee")
		}), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function (e) {
			return "function" == typeof e || !1
		}), y.isFinite = function (e) {
			return isFinite(e) && !isNaN(parseFloat(e))
		}, y.isNaN = function (e) {
			return y.isNumber(e) && e !== +e
		}, y.isBoolean = function (e) {
			return !0 === e || !1 === e || "[object Boolean]" === d.call(e)
		}, y.isNull = function (e) {
			return null === e
		}, y.isUndefined = function (e) {
			return void 0 === e
		}, y.has = function (e, t) {
			return null != e && f.call(e, t)
		}, y.noConflict = function () {
			return r._ = o, this
		}, y.identity = function (e) {
			return e
		}, y.constant = function (e) {
			return function () {
				return e
			}
		}, y.noop = function () {}, y.property = C, y.propertyOf = function (t) {
			return null == t ? function () {} : function (e) {
				return t[e]
			}
		}, y.matcher = y.matches = function (t) {
			return t = y.extendOwn({}, t),
				function (e) {
					return y.isMatch(e, t)
				}
		}, y.times = function (e, t, n) {
			var i = Array(Math.max(0, e));
			t = b(t, n, 1);
			for (var r = 0; r < e; r++) i[r] = t(r);
			return i
		}, y.random = function (e, t) {
			return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
		}, y.now = Date.now || function () {
			return (new Date).getTime()
		};
		var N = {
				"&": "&",
				"<": "<",
				">": ">",
				'"': '"',
				"'": "'",
				"`": "`"
			},
			A = y.invert(N),
			O = function (t) {
				var n = function (e) {
						return t[e]
					},
					e = "(?:" + y.keys(t).join("|") + ")",
					i = RegExp(e),
					r = RegExp(e, "g");
				return function (e) {
					return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, n) : e
				}
			};
		y.escape = O(N), y.unescape = O(A), y.result = function (e, t, n) {
			var i = null == e ? void 0 : e[t];
			return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i
		};
		var F = 0;
		y.uniqueId = function (e) {
			var t = ++F + "";
			return e ? e + t : t
		}, y.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var L = /(.)^/,
			M = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			R = /\\|'|\r|\n|\u2028|\u2029/g,
			q = function (e) {
				return "\\" + M[e]
			};
		y.template = function (o, e, t) {
			!e && t && (e = t), e = y.defaults({}, e, y.templateSettings);
			var n = RegExp([(e.escape || L).source, (e.interpolate || L).source, (e.evaluate || L).source].join("|") + "|$", "g"),
				s = 0,
				a = "__p+='";
			o.replace(n, function (e, t, n, i, r) {
				return a += o.slice(s, r).replace(R, q), s = r + e.length, t ? a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), e
			}), a += "';\n", e.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
			try {
				var i = new Function(e.variable || "obj", "_", a)
			} catch (u) {
				throw u.source = a, u
			}
			var r = function (e) {
					return i.call(this, e, y)
				},
				l = e.variable || "obj";
			return r.source = "function(" + l + "){\n" + a + "}", r
		}, y.chain = function (e) {
			var t = y(e);
			return t._chain = !0, t
		};
		var H = function (e, t) {
			return e._chain ? y(t).chain() : t
		};
		y.mixin = function (n) {
			y.each(y.functions(n), function (e) {
				var t = y[e] = n[e];
				y.prototype[e] = function () {
					var e = [this._wrapped];
					return u.apply(e, arguments), H(this, t.apply(y, e))
				}
			})
		}, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
			var n = s[t];
			y.prototype[t] = function () {
				var e = this._wrapped;
				return n.apply(e, arguments), "shift" !== t && "splice" !== t || 0 !== e.length || delete e[0], H(this, e)
			}
		}), y.each(["concat", "join", "slice"], function (e) {
			var t = s[e];
			y.prototype[e] = function () {
				return H(this, t.apply(this._wrapped, arguments))
			}
		}), y.prototype.value = function () {
			return this._wrapped
		}, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function () {
			return "" + this._wrapped
		}, "function" == typeof define && define.amd && define("underscore", [], function () {
			return y
		})
	}.call(this),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function (c) {
		var o, n = 0,
			a = Array.prototype.slice;
		return c.cleanData = (o = c.cleanData, function (e) {
			var t, n, i;
			for (i = 0; null != (n = e[i]); i++) try {
				(t = c._data(n, "events")) && t.remove && c(n).triggerHandler("remove")
			} catch (r) {}
			o(e)
		}), c.widget = function (e, n, t) {
			var i, r, o, s, a = {},
				l = e.split(".")[0];
			return e = e.split(".")[1], i = l + "-" + e, t || (t = n, n = c.Widget), c.expr[":"][i.toLowerCase()] = function (e) {
				return !!c.data(e, i)
			}, c[l] = c[l] || {}, r = c[l][e], o = c[l][e] = function (e, t) {
				if (!this._createWidget) return new o(e, t);
				arguments.length && this._createWidget(e, t)
			}, c.extend(o, r, {
				version: t.version,
				_proto: c.extend({}, t),
				_childConstructors: []
			}), (s = new n).options = c.widget.extend({}, s.options), c.each(t, function (t, i) {
				var r, o;
				c.isFunction(i) ? a[t] = (r = function () {
					return n.prototype[t].apply(this, arguments)
				}, o = function (e) {
					return n.prototype[t].apply(this, e)
				}, function () {
					var e, t = this._super,
						n = this._superApply;
					return this._super = r, this._superApply = o, e = i.apply(this, arguments), this._super = t, this._superApply = n, e
				}) : a[t] = i
			}), o.prototype = c.widget.extend(s, {
				widgetEventPrefix: r && s.widgetEventPrefix || e
			}, a, {
				constructor: o,
				namespace: l,
				widgetName: e,
				widgetFullName: i
			}), r ? (c.each(r._childConstructors, function (e, t) {
				var n = t.prototype;
				c.widget(n.namespace + "." + n.widgetName, o, t._proto)
			}), delete r._childConstructors) : n._childConstructors.push(o), c.widget.bridge(e, o), o
		}, c.widget.extend = function (e) {
			for (var t, n, i = a.call(arguments, 1), r = 0, o = i.length; r < o; r++)
				for (t in i[r]) n = i[r][t], i[r].hasOwnProperty(t) && n !== undefined && (c.isPlainObject(n) ? e[t] = c.isPlainObject(e[t]) ? c.widget.extend({}, e[t], n) : c.widget.extend({}, n) : e[t] = n);
			return e
		}, c.widget.bridge = function (o, t) {
			var s = t.prototype.widgetFullName || o;
			c.fn[o] = function (n) {
				var e = "string" == typeof n,
					i = a.call(arguments, 1),
					r = this;
				return e ? this.each(function () {
					var e, t = c.data(this, s);
					return "instance" === n ? (r = t, !1) : t ? c.isFunction(t[n]) && "_" !== n.charAt(0) ? (e = t[n].apply(t, i)) !== t && e !== undefined ? (r = e && e.jquery ? r.pushStack(e.get()) : e, !1) : void 0 : c.error("no such method '" + n + "' for " + o + " widget instance") : c.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + n + "'")
				}) : (i.length && (n = c.widget.extend.apply(null, [n].concat(i))), this.each(function () {
					var e = c.data(this, s);
					e ? (e.option(n || {}), e._init && e._init()) : c.data(this, s, new t(n, this))
				})), r
			}
		}, c.Widget = function () {}, c.Widget._childConstructors = [], c.Widget.prototype = {
			widgetName: "widget",
			widgetEventPrefix: "",
			defaultElement: "<div>",
			options: {
				disabled: !1,
				create: null
			},
			_createWidget: function (e, t) {
				t = c(t || this.defaultElement || this)[0], this.element = c(t), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = c(), this.hoverable = c(), this.focusable = c(), t !== this && (c.data(t, this.widgetFullName, this), this._on(!0, this.element, {
					remove: function (e) {
						e.target === t && this.destroy()
					}
				}), this.document = c(t.style ? t.ownerDocument : t.document || t), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)), this.options = c.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
			},
			_getCreateOptions: c.noop,
			_getCreateEventData: c.noop,
			_create: c.noop,
			_init: c.noop,
			destroy: function () {
				this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
			},
			_destroy: c.noop,
			widget: function () {
				return this.element
			},
			option: function (e, t) {
				var n, i, r, o = e;
				if (0 === arguments.length) return c.widget.extend({}, this.options);
				if ("string" == typeof e)
					if (o = {}, e = (n = e.split(".")).shift(), n.length) {
						for (i = o[e] = c.widget.extend({}, this.options[e]), r = 0; r < n.length - 1; r++) i[n[r]] = i[n[r]] || {}, i = i[n[r]];
						if (e = n.pop(), 1 === arguments.length) return i[e] === undefined ? null : i[e];
						i[e] = t
					} else {
						if (1 === arguments.length) return this.options[e] === undefined ? null : this.options[e];
						o[e] = t
					}
				return this._setOptions(o), this
			},
			_setOptions: function (e) {
				var t;
				for (t in e) this._setOption(t, e[t]);
				return this
			},
			_setOption: function (e, t) {
				return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
			},
			enable: function () {
				return this._setOptions({
					disabled: !1
				})
			},
			disable: function () {
				return this._setOptions({
					disabled: !0
				})
			},
			_on: function (s, a, e) {
				var l, u = this;
				"boolean" != typeof s && (e = a, a = s, s = !1), e ? (a = l = c(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, l = this.widget()), c.each(e, function (e, t) {
					function n() {
						if (s || !0 !== u.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? u[t] : t).apply(u, arguments)
					}
					"string" != typeof t && (n.guid = t.guid = t.guid || n.guid || c.guid++);
					var i = e.match(/^([\w:-]*)\s*(.*)$/),
						r = i[1] + u.eventNamespace,
						o = i[2];
					o ? l.delegate(o, r, n) : a.bind(r, n)
				})
			},
			_off: function (e, t) {
				t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t), this.bindings = c(this.bindings.not(e).get()), this.focusable = c(this.focusable.not(e).get()), this.hoverable = c(this.hoverable.not(e).get())
			},
			_delay: function (e, t) {
				function n() {
					return ("string" == typeof e ? i[e] : e).apply(i, arguments)
				}
				var i = this;
				return setTimeout(n, t || 0)
			},
			_hoverable: function (e) {
				this.hoverable = this.hoverable.add(e), this._on(e, {
					mouseenter: function (e) {
						c(e.currentTarget).addClass("ui-state-hover")
					},
					mouseleave: function (e) {
						c(e.currentTarget).removeClass("ui-state-hover")
					}
				})
			},
			_focusable: function (e) {
				this.focusable = this.focusable.add(e), this._on(e, {
					focusin: function (e) {
						c(e.currentTarget).addClass("ui-state-focus")
					},
					focusout: function (e) {
						c(e.currentTarget).removeClass("ui-state-focus")
					}
				})
			},
			_trigger: function (e, t, n) {
				var i, r, o = this.options[e];
				if (n = n || {}, (t = c.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], r = t.originalEvent)
					for (i in r) i in t || (t[i] = r[i]);
				return this.element.trigger(t, n), !(c.isFunction(o) && !1 === o.apply(this.element[0], [t].concat(n)) || t.isDefaultPrevented())
			}
		}, c.each({
			show: "fadeIn",
			hide: "fadeOut"
		}, function (o, s) {
			c.Widget.prototype["_" + o] = function (t, e, n) {
				"string" == typeof e && (e = {
					effect: e
				});
				var i, r = e ? !0 === e || "number" == typeof e ? s : e.effect || s : o;
				"number" == typeof (e = e || {}) && (e = {
					duration: e
				}), i = !c.isEmptyObject(e), e.complete = n, e.delay && t.delay(e.delay), i && c.effects && c.effects.effect[r] ? t[o](e) : r !== o && t[r] ? t[r](e.duration, e.easing, n) : t.queue(function (e) {
					c(this)[o](), n && n.call(t[0]), e()
				})
			}
		}), c.widget
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(window.jQuery)
	}(function (l) {
		"use strict";
		var i = 0;
		l.ajaxTransport("iframe", function (r) {
			if (r.async) {
				var o, s, t, a = r.initialIframeSrc || "javascript:false;";
				return {
					send: function (e, n) {
						(o = l('<form style="display:none;"></form>')).attr("accept-charset", r.formAcceptCharset), t = /\?/.test(r.url) ? "&" : "?", "DELETE" === r.type ? (r.url = r.url + t + "_method=DELETE", r.type = "POST") : "PUT" === r.type ? (r.url = r.url + t + "_method=PUT", r.type = "POST") : "PATCH" === r.type && (r.url = r.url + t + "_method=PATCH", r.type = "POST"), s = l('<iframe src="' + a + '" name="iframe-transport-' + (i += 1) + '"></iframe>').bind("load", function () {
							var i, t = l.isArray(r.paramName) ? r.paramName : [r.paramName];
							s.unbind("load").bind("load", function () {
								var e;
								try {
									if (!(e = s.contents()).length || !e[0].firstChild) throw new Error
								} catch (t) {
									e = undefined
								}
								n(200, "success", {
									iframe: e
								}), l('<iframe src="' + a + '"></iframe>').appendTo(o), window.setTimeout(function () {
									o.remove()
								}, 0)
							}), o.prop("target", s.prop("name")).prop("action", r.url).prop("method", r.type), r.formData && l.each(r.formData, function (e, t) {
								l('<input type="hidden"/>').prop("name", t.name).val(t.value).appendTo(o)
							}), r.fileInput && r.fileInput.length && "POST" === r.type && (i = r.fileInput.clone(), r.fileInput.after(function (e) {
								return i[e]
							}), r.paramName && r.fileInput.each(function (e) {
								l(this).prop("name", t[e] || r.paramName)
							}), o.append(r.fileInput).prop("enctype", "multipart/form-data").prop("encoding", "multipart/form-data"), r.fileInput.removeAttr("form")), o.submit(), i && i.length && r.fileInput.each(function (e, t) {
								var n = l(i[e]);
								l(t).prop("name", n.prop("name")).attr("form", n.attr("form")), n.replaceWith(t)
							})
						}), o.append(s).appendTo(document.body)
					},
					abort: function () {
						s && s.unbind("load").prop("src", a), o && o.remove()
					}
				}
			}
		}), l.ajaxSetup({
			converters: {
				"iframe text": function (e) {
					return e && l(e[0].body).text()
				},
				"iframe json": function (e) {
					return e && l.parseJSON(l(e[0].body).text())
				},
				"iframe html": function (e) {
					return e && l(e[0].body).html()
				},
				"iframe xml": function (e) {
					var t = e && e[0];
					return t && l.isXMLDoc(t) ? t : l.parseXML(t.XMLDocument && t.XMLDocument.xml || l(t.body).html())
				},
				"iframe script": function (e) {
					return e && l.globalEval(l(e[0].body).text())
				}
			}
		})
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], e) : e(window.jQuery)
	}(function (v) {
		"use strict";

		function e(n) {
			var i = "dragover" === n;
			return function (e) {
				e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
				var t = e.dataTransfer;
				t && -1 !== v.inArray("Files", t.types) && !1 !== this._trigger(n, v.Event(n, {
					delegatedEvent: e
				})) && (e.preventDefault(), i && (t.dropEffect = "copy"))
			}
		}
		v.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || v('<input type="file">').prop("disabled")), v.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), v.support.xhrFormDataFileUpload = !!window.FormData, v.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), v.widget("blueimp.fileupload", {
			options: {
				dropZone: v(document),
				pasteZone: undefined,
				fileInput: undefined,
				replaceFileInput: !0,
				paramName: undefined,
				singleFileUploads: !0,
				limitMultiFileUploads: undefined,
				limitMultiFileUploadSize: undefined,
				limitMultiFileUploadSizeOverhead: 512,
				sequentialUploads: !1,
				limitConcurrentUploads: undefined,
				forceIframeTransport: !1,
				redirect: undefined,
				redirectParamName: undefined,
				postMessage: undefined,
				multipart: !0,
				maxChunkSize: undefined,
				uploadedBytes: undefined,
				recalculateProgress: !0,
				progressInterval: 100,
				bitrateInterval: 500,
				autoUpload: !0,
				messages: {
					uploadedBytes: "Uploaded bytes exceed file size"
				},
				i18n: function (n, e) {
					return n = this.messages[n] || n.toString(), e && v.each(e, function (e, t) {
						n = n.replace("{" + e + "}", t)
					}), n
				},
				formData: function (e) {
					return e.serializeArray()
				},
				add: function (e, t) {
					if (e.isDefaultPrevented()) return !1;
					(t.autoUpload || !1 !== t.autoUpload && v(this).fileupload("option", "autoUpload")) && t.process().done(function () {
						t.submit()
					})
				},
				processData: !1,
				contentType: !1,
				cache: !1
			},
			_specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
			_blobSlice: v.support.blobSlice && function () {
				return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
			},
			_BitrateTimer: function () {
				this.timestamp = Date.now ? Date.now() : (new Date).getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function (e, t, n) {
					var i = e - this.timestamp;
					return (!this.bitrate || !n || n < i) && (this.bitrate = (t - this.loaded) * (1e3 / i) * 8, this.loaded = t, this.timestamp = e), this.bitrate
				}
			},
			_isXHRUpload: function (e) {
				return !e.forceIframeTransport && (!e.multipart && v.support.xhrFileUpload || v.support.xhrFormDataFileUpload)
			},
			_getFormData: function (e) {
				var n;
				return "function" === v.type(e.formData) ? e.formData(e.form) : v.isArray(e.formData) ? e.formData : "object" === v.type(e.formData) ? (n = [], v.each(e.formData, function (e, t) {
					n.push({
						name: e,
						value: t
					})
				}), n) : []
			},
			_getTotal: function (e) {
				var n = 0;
				return v.each(e, function (e, t) {
					n += t.size || 1
				}), n
			},
			_initProgressObject: function (e) {
				var t = {
					loaded: 0,
					total: 0,
					bitrate: 0
				};
				e._progress ? v.extend(e._progress, t) : e._progress = t
			},
			_initResponseObject: function (e) {
				var t;
				if (e._response)
					for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t];
				else e._response = {}
			},
			_onProgress: function (e, t) {
				if (e.lengthComputable) {
					var n, i = Date.now ? Date.now() : (new Date).getTime();
					if (t._time && t.progressInterval && i - t._time < t.progressInterval && e.loaded !== e.total) return;
					t._time = i, n = Math.floor(e.loaded / e.total * (t.chunkSize || t._progress.total)) + (t.uploadedBytes || 0), this._progress.loaded += n - t._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(i, this._progress.loaded, t.bitrateInterval), t._progress.loaded = t.loaded = n, t._progress.bitrate = t.bitrate = t._bitrateTimer.getBitrate(i, n, t.bitrateInterval), this._trigger("progress", v.Event("progress", {
						delegatedEvent: e
					}), t), this._trigger("progressall", v.Event("progressall", {
						delegatedEvent: e
					}), this._progress)
				}
			},
			_initProgressListener: function (n) {
				var i = this,
					e = n.xhr ? n.xhr() : v.ajaxSettings.xhr();
				e.upload && (v(e.upload).bind("progress", function (e) {
					var t = e.originalEvent;
					e.lengthComputable = t.lengthComputable, e.loaded = t.loaded, e.total = t.total, i._onProgress(e, n)
				}), n.xhr = function () {
					return e
				})
			},
			_isInstanceOf: function (e, t) {
				return Object.prototype.toString.call(t) === "[object " + e + "]"
			},
			_initXHRData: function (n) {
				var i, r = this,
					e = n.files[0],
					t = n.multipart || !v.support.xhrFileUpload,
					o = "array" === v.type(n.paramName) ? n.paramName[0] : n.paramName;
				n.headers = v.extend({}, n.headers), n.contentRange && (n.headers["Content-Range"] = n.contentRange), t && !n.blob && this._isInstanceOf("File", e) || (n.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(e.name) + '"'), t ? v.support.xhrFormDataFileUpload && (n.postMessage ? (i = this._getFormData(n), n.blob ? i.push({
					name: o,
					value: n.blob
				}) : v.each(n.files, function (e, t) {
					i.push({
						name: "array" === v.type(n.paramName) && n.paramName[e] || o,
						value: t
					})
				})) : (r._isInstanceOf("FormData", n.formData) ? i = n.formData : (i = new FormData, v.each(this._getFormData(n), function (e, t) {
					i.append(t.name, t.value)
				})), n.blob ? i.append(o, n.blob, e.name) : v.each(n.files, function (e, t) {
					(r._isInstanceOf("File", t) || r._isInstanceOf("Blob", t)) && i.append("array" === v.type(n.paramName) && n.paramName[e] || o, t, t.uploadName || t.name)
				})), n.data = i) : (n.contentType = e.type || "application/octet-stream", n.data = n.blob || e), n.blob = null
			},
			_initIframeSettings: function (e) {
				var t = v("<a></a>").prop("href", e.url).prop("host");
				e.dataType = "iframe " + (e.dataType || ""), e.formData = this._getFormData(e), e.redirect && t && t !== location.host && e.formData.push({
					name: e.redirectParamName || "redirect",
					value: e.redirect
				})
			},
			_initDataSettings: function (e) {
				this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e)
			},
			_getParamName: function (e) {
				var t = v(e.fileInput),
					i = e.paramName;
				return i ? v.isArray(i) || (i = [i]) : (i = [], t.each(function () {
					for (var e = v(this), t = e.prop("name") || "files[]", n = (e.prop("files") || [1]).length; n;) i.push(t), n -= 1
				}), i.length || (i = [t.prop("name") || "files[]"])), i
			},
			_initFormSettings: function (e) {
				e.form && e.form.length || (e.form = v(e.fileInput.prop("form")), e.form.length || (e.form = v(this.options.fileInput.prop("form")))), e.paramName = this._getParamName(e), e.url || (e.url = e.form.prop("action") || location.href), e.type = (e.type || "string" === v.type(e.form.prop("method")) && e.form.prop("method") || "").toUpperCase(), "POST" !== e.type && "PUT" !== e.type && "PATCH" !== e.type && (e.type = "POST"), e.formAcceptCharset || (e.formAcceptCharset = e.form.attr("accept-charset"))
			},
			_getAJAXSettings: function (e) {
				var t = v.extend({}, this.options, e);
				return this._initFormSettings(t), this._initDataSettings(t), t
			},
			_getDeferredState: function (e) {
				return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending"
			},
			_enhancePromise: function (e) {
				return e.success = e.done, e.error = e.fail, e.complete = e.always, e
			},
			_getXHRPromise: function (e, t, n) {
				var i = v.Deferred(),
					r = i.promise();
				return t = t || this.options.context || r, !0 === e ? i.resolveWith(t, n) : !1 === e && i.rejectWith(t, n), r.abort = i.promise, this._enhancePromise(r)
			},
			_addConvenienceMethods: function (e, n) {
				var i = this,
					r = function (e) {
						return v.Deferred().resolveWith(i, e).promise()
					};
				n.process = function (e, t) {
					return (e || t) && (n._processQueue = this._processQueue = (this._processQueue || r([this])).pipe(function () {
						return n.errorThrown ? v.Deferred().rejectWith(i, [n]).promise() : r(arguments)
					}).pipe(e, t)), this._processQueue || r([this])
				}, n.submit = function () {
					return "pending" !== this.state() && (n.jqXHR = this.jqXHR = !1 !== i._trigger("submit", v.Event("submit", {
						delegatedEvent: e
					}), this) && i._onSend(e, this)), this.jqXHR || i._getXHRPromise()
				}, n.abort = function () {
					return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), i._getXHRPromise(!1))
				}, n.state = function () {
					return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0
				}, n.processing = function () {
					return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue)
				}, n.progress = function () {
					return this._progress
				}, n.response = function () {
					return this._response
				}
			},
			_getUploadedBytes: function (e) {
				var t = e.getResponseHeader("Range"),
					n = t && t.split("-"),
					i = n && 1 < n.length && parseInt(n[1], 10);
				return i && i + 1
			},
			_chunkedUpload: function (o, e) {
				o.uploadedBytes = o.uploadedBytes || 0;
				var t, s, a = this,
					n = o.files[0],
					l = n.size,
					u = o.uploadedBytes,
					c = o.maxChunkSize || l,
					d = this._blobSlice,
					f = v.Deferred(),
					i = f.promise();
				return !(!(this._isXHRUpload(o) && d && (u || c < l)) || o.data) && (!!e || (l <= u ? (n.error = o.i18n("uploadedBytes"), this._getXHRPromise(!1, o.context, [null, "error", n.error])) : (s = function () {
					var i = v.extend({}, o),
						r = i._progress.loaded;
					i.blob = d.call(n, u, u + c, n.type), i.chunkSize = i.blob.size, i.contentRange = "bytes " + u + "-" + (u + i.chunkSize - 1) + "/" + l, a._initXHRData(i), a._initProgressListener(i), t = (!1 !== a._trigger("chunksend", null, i) && v.ajax(i) || a._getXHRPromise(!1, i.context)).done(function (e, t, n) {
						u = a._getUploadedBytes(n) || u + i.chunkSize, r + i.chunkSize - i._progress.loaded && a._onProgress(v.Event("progress", {
							lengthComputable: !0,
							loaded: u - i.uploadedBytes,
							total: u - i.uploadedBytes
						}), i), o.uploadedBytes = i.uploadedBytes = u, i.result = e, i.textStatus = t, i.jqXHR = n, a._trigger("chunkdone", null, i), a._trigger("chunkalways", null, i), u < l ? s() : f.resolveWith(i.context, [e, t, n])
					}).fail(function (e, t, n) {
						i.jqXHR = e, i.textStatus = t, i.errorThrown = n, a._trigger("chunkfail", null, i), a._trigger("chunkalways", null, i), f.rejectWith(i.context, [e, t, n])
					})
				}, this._enhancePromise(i), i.abort = function () {
					return t.abort()
				}, s(), i)))
			},
			_beforeSend: function (e, t) {
				0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, this._progress.loaded += t.loaded, this._progress.total += t.total
			},
			_onDone: function (e, t, n, i) {
				var r = i._progress.total,
					o = i._response;
				i._progress.loaded < r && this._onProgress(v.Event("progress", {
					lengthComputable: !0,
					loaded: r,
					total: r
				}), i), o.result = i.result = e, o.textStatus = i.textStatus = t, o.jqXHR = i.jqXHR = n, this._trigger("done", null, i)
			},
			_onFail: function (e, t, n, i) {
				var r = i._response;
				i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), r.jqXHR = i.jqXHR = e, r.textStatus = i.textStatus = t, r.errorThrown = i.errorThrown = n, this._trigger("fail", null, i)
			},
			_onAlways: function (e, t, n, i) {
				this._trigger("always", null, i)
			},
			_onSend: function (e, t) {
				t.submit || this._addConvenienceMethods(e, t);
				var n, i, r, o, s = this,
					a = s._getAJAXSettings(t),
					l = function () {
						return s._sending += 1, a._bitrateTimer = new s._BitrateTimer, n = n || ((i || !1 === s._trigger("send", v.Event("send", {
							delegatedEvent: e
						}), a)) && s._getXHRPromise(!1, a.context, i) || s._chunkedUpload(a) || v.ajax(a)).done(function (e, t, n) {
							s._onDone(e, t, n, a)
						}).fail(function (e, t, n) {
							s._onFail(e, t, n, a)
						}).always(function (e, t, n) {
							if (s._onAlways(e, t, n, a), s._sending -= 1, s._active -= 1, a.limitConcurrentUploads && a.limitConcurrentUploads > s._sending)
								for (var i = s._slots.shift(); i;) {
									if ("pending" === s._getDeferredState(i)) {
										i.resolve();
										break
									}
									i = s._slots.shift()
								}
							0 === s._active && s._trigger("stop")
						})
					};
				return this._beforeSend(e, a), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (r = v.Deferred(), this._slots.push(r), o = r.pipe(l)) : (this._sequence = this._sequence.pipe(l, l), o = this._sequence), o.abort = function () {
					return i = [undefined, "abort", "abort"], n ? n.abort() : (r && r.rejectWith(a.context, i), l())
				}, this._enhancePromise(o)) : l()
			},
			_onAdd: function (i, r) {
				var o, e, s, t, a = this,
					l = !0,
					n = v.extend({}, this.options, r),
					u = r.files,
					c = u.length,
					d = n.limitMultiFileUploads,
					f = n.limitMultiFileUploadSize,
					h = n.limitMultiFileUploadSizeOverhead,
					p = 0,
					m = this._getParamName(n),
					g = 0;
				if (!f || c && u[0].size !== undefined || (f = undefined), (n.singleFileUploads || d || f) && this._isXHRUpload(n))
					if (n.singleFileUploads || f || !d)
						if (!n.singleFileUploads && f)
							for (s = [], o = [], t = 0; t < c; t += 1) p += u[t].size + h, (t + 1 === c || p + u[t + 1].size + h > f || d && d <= t + 1 - g) && (s.push(u.slice(g, t + 1)), (e = m.slice(g, t + 1)).length || (e = m), o.push(e), g = t + 1, p = 0);
						else o = m;
				else
					for (s = [], o = [], t = 0; t < c; t += d) s.push(u.slice(t, t + d)), (e = m.slice(t, t + d)).length || (e = m), o.push(e);
				else s = [u], o = [m];
				return r.originalFiles = u, v.each(s || u, function (e, t) {
					var n = v.extend({}, r);
					return n.files = s ? t : [t], n.paramName = o[e], a._initResponseObject(n), a._initProgressObject(n), a._addConvenienceMethods(i, n), l = a._trigger("add", v.Event("add", {
						delegatedEvent: i
					}), n)
				}), l
			},
			_replaceFileInput: function (e) {
				var n = e.fileInput,
					i = n.clone(!0);
				e.fileInputClone = i, v("<form></form>").append(i)[0].reset(), n.after(i).detach(), v.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function (e, t) {
					return t === n[0] ? i[0] : t
				}), n[0] === this.element[0] && (this.element = i)
			},
			_handleFileTreeEntry: function (t, n) {
				var e, i = this,
					r = v.Deferred(),
					o = function (e) {
						e && !e.entry && (e.entry = t), r.resolve([e])
					},
					s = function (e) {
						i._handleFileTreeEntries(e, n + t.name + "/").done(function (e) {
							r.resolve(e)
						}).fail(o)
					},
					a = function () {
						e.readEntries(function (e) {
							e.length ? (l = l.concat(e), a()) : s(l)
						}, o)
					},
					l = [];
				return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, r.resolve(t._file)) : t.file(function (e) {
					e.relativePath = n, r.resolve(e)
				}, o) : t.isDirectory ? (e = t.createReader(), a()) : r.resolve([]), r.promise()
			},
			_handleFileTreeEntries: function (e, t) {
				var n = this;
				return v.when.apply(v, v.map(e, function (e) {
					return n._handleFileTreeEntry(e, t)
				})).pipe(function () {
					return Array.prototype.concat.apply([], arguments)
				})
			},
			_getDroppedFiles: function (e) {
				var t = (e = e || {}).items;
				return t && t.length && (t[0].webkitGetAsEntry || t[0].getAsEntry) ? this._handleFileTreeEntries(v.map(t, function (e) {
					var t;
					return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry()
				})) : v.Deferred().resolve(v.makeArray(e.files)).promise()
			},
			_getSingleFileInputFiles: function (e) {
				var t, n, i = (e = v(e)).prop("webkitEntries") || e.prop("entries");
				if (i && i.length) return this._handleFileTreeEntries(i);
				if ((t = v.makeArray(e.prop("files"))).length) t[0].name === undefined && t[0].fileName && v.each(t, function (e, t) {
					t.name = t.fileName, t.size = t.fileSize
				});
				else {
					if (!(n = e.prop("value"))) return v.Deferred().resolve([]).promise();
					t = [{
						name: n.replace(/^.*\\/, "")
					}]
				}
				return v.Deferred().resolve(t).promise()
			},
			_getFileInputFiles: function (e) {
				return e instanceof v && 1 !== e.length ? v.when.apply(v, v.map(e, this._getSingleFileInputFiles)).pipe(function () {
					return Array.prototype.concat.apply([], arguments)
				}) : this._getSingleFileInputFiles(e)
			},
			_onChange: function (t) {
				var n = this,
					i = {
						fileInput: v(t.target),
						form: v(t.target.form)
					};
				this._getFileInputFiles(i.fileInput).always(function (e) {
					i.files = e, n.options.replaceFileInput && n._replaceFileInput(i), !1 !== n._trigger("change", v.Event("change", {
						delegatedEvent: t
					}), i) && n._onAdd(t, i)
				})
			},
			_onPaste: function (e) {
				var t = e.originalEvent && e.originalEvent.clipboardData && e.originalEvent.clipboardData.items,
					i = {
						files: []
					};
				t && t.length && (v.each(t, function (e, t) {
					var n = t.getAsFile && t.getAsFile();
					n && i.files.push(n)
				}), !1 !== this._trigger("paste", v.Event("paste", {
					delegatedEvent: e
				}), i) && this._onAdd(e, i))
			},
			_onDrop: function (t) {
				t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
				var n = this,
					e = t.dataTransfer,
					i = {};
				e && e.files && e.files.length && (t.preventDefault(), this._getDroppedFiles(e).always(function (e) {
					i.files = e, !1 !== n._trigger("drop", v.Event("drop", {
						delegatedEvent: t
					}), i) && n._onAdd(t, i)
				}))
			},
			_onDragOver: e("dragover"),
			_onDragEnter: e("dragenter"),
			_onDragLeave: e("dragleave"),
			_initEventHandlers: function () {
				this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
					dragover: this._onDragOver,
					drop: this._onDrop,
					dragenter: this._onDragEnter,
					dragleave: this._onDragLeave
				}), this._on(this.options.pasteZone, {
					paste: this._onPaste
				})), v.support.fileInput && this._on(this.options.fileInput, {
					change: this._onChange
				})
			},
			_destroyEventHandlers: function () {
				this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), this._off(this.options.fileInput, "change")
			},
			_setOption: function (e, t) {
				var n = -1 !== v.inArray(e, this._specialOptions);
				n && this._destroyEventHandlers(), this._super(e, t), n && (this._initSpecialOptions(), this._initEventHandlers())
			},
			_initSpecialOptions: function () {
				var e = this.options;
				e.fileInput === undefined ? e.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : e.fileInput instanceof v || (e.fileInput = v(e.fileInput)), e.dropZone instanceof v || (e.dropZone = v(e.dropZone)), e.pasteZone instanceof v || (e.pasteZone = v(e.pasteZone))
			},
			_getRegExp: function (e) {
				var t = e.split("/"),
					n = t.pop();
				return t.shift(), new RegExp(t.join("/"), n)
			},
			_isRegExpOption: function (e, t) {
				return "url" !== e && "string" === v.type(t) && /^\/.*\/[igm]{0,3}$/.test(t)
			},
			_initDataAttributes: function () {
				var i = this,
					r = this.options,
					o = v(this.element[0].cloneNode(!1));
				v.each(o.data(), function (e, t) {
					var n = "data-" + e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
					o.attr(n) && (i._isRegExpOption(e, t) && (t = i._getRegExp(t)), r[e] = t)
				})
			},
			_create: function () {
				this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers()
			},
			active: function () {
				return this._active
			},
			progress: function () {
				return this._progress
			},
			add: function (t) {
				var n = this;
				t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function (e) {
					t.files = e, n._onAdd(null, t)
				}) : (t.files = v.makeArray(t.files), this._onAdd(null, t)))
			},
			send: function (t) {
				if (t && !this.options.disabled) {
					if (t.fileInput && !t.files) {
						var n, i, r = this,
							o = v.Deferred(),
							e = o.promise();
						return e.abort = function () {
							return i = !0, n ? n.abort() : (o.reject(null, "abort", "abort"), e)
						}, this._getFileInputFiles(t.fileInput).always(function (e) {
							i || (e.length ? (t.files = e, (n = r._onSend(null, t)).then(function (e, t, n) {
								o.resolve(e, t, n)
							}, function (e, t, n) {
								o.reject(e, t, n)
							})) : o.reject())
						}), this._enhancePromise(e)
					}
					if (t.files = v.makeArray(t.files), t.files.length) return this._onSend(null, t)
				}
				return this._getXHRPromise(!1, t && t.context)
			}
		})
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function (a) {
		function i(e, t) {
			var n, i, r, o = e.nodeName.toLowerCase();
			return "area" === o ? (i = (n = e.parentNode).name, !(!e.href || !i || "map" !== n.nodeName.toLowerCase()) && (!!(r = a("img[usemap='#" + i + "']")[0]) && s(r))) : (/^(input|select|textarea|button|object)$/.test(o) ? !e.disabled : "a" === o && e.href || t) && s(e)
		}

		function s(e) {
			return a.expr.filters.visible(e) && !a(e).parents().addBack().filter(function () {
				return "hidden" === a.css(this, "visibility")
			}).length
		}
		var e, t, n, r;
		a.ui = a.ui || {}, a.extend(a.ui, {
			version: "1.11.4",
			keyCode: {
				BACKSPACE: 8,
				COMMA: 188,
				DELETE: 46,
				DOWN: 40,
				END: 35,
				ENTER: 13,
				ESCAPE: 27,
				HOME: 36,
				LEFT: 37,
				PAGE_DOWN: 34,
				PAGE_UP: 33,
				PERIOD: 190,
				RIGHT: 39,
				SPACE: 32,
				TAB: 9,
				UP: 38
			}
		}), a.fn.extend({
			scrollParent: function (e) {
				var t = this.css("position"),
					n = "absolute" === t,
					i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
					r = this.parents().filter(function () {
						var e = a(this);
						return (!n || "static" !== e.css("position")) && i.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
					}).eq(0);
				return "fixed" !== t && r.length ? r : a(this[0].ownerDocument || document)
			},
			uniqueId: (e = 0, function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}),
			removeUniqueId: function () {
				return this.each(function () {
					/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
				})
			}
		}), a.extend(a.expr[":"], {
			data: a.expr.createPseudo ? a.expr.createPseudo(function (t) {
				return function (e) {
					return !!a.data(e, t)
				}
			}) : function (e, t, n) {
				return !!a.data(e, n[3])
			},
			focusable: function (e) {
				return i(e, !isNaN(a.attr(e, "tabindex")))
			},
			tabbable: function (e) {
				var t = a.attr(e, "tabindex"),
					n = isNaN(t);
				return (n || 0 <= t) && i(e, !n)
			}
		}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (e, n) {
			function i(e, t, n, i) {
				return a.each(r, function () {
					t -= parseFloat(a.css(e, "padding" + this)) || 0, n && (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0), i && (t -= parseFloat(a.css(e, "margin" + this)) || 0)
				}), t
			}
			var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
				o = n.toLowerCase(),
				s = {
					innerWidth: a.fn.innerWidth,
					innerHeight: a.fn.innerHeight,
					outerWidth: a.fn.outerWidth,
					outerHeight: a.fn.outerHeight
				};
			a.fn["inner" + n] = function (e) {
				return e === undefined ? s["inner" + n].call(this) : this.each(function () {
					a(this).css(o, i(this, e) + "px")
				})
			}, a.fn["outer" + n] = function (e, t) {
				return "number" != typeof e ? s["outer" + n].call(this, e) : this.each(function () {
					a(this).css(o, i(this, e, !0, t) + "px")
				})
			}
		}), a.fn.addBack || (a.fn.addBack = function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = (t = a.fn.removeData, function (e) {
			return arguments.length ? t.call(this, a.camelCase(e)) : t.call(this)
		})), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
			focus: (r = a.fn.focus, function (t, n) {
				return "number" == typeof t ? this.each(function () {
					var e = this;
					setTimeout(function () {
						a(e).focus(), n && n.call(e)
					}, t)
				}) : r.apply(this, arguments)
			}),
			disableSelection: (n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
				return this.bind(n + ".ui-disableSelection", function (e) {
					e.preventDefault()
				})
			}),
			enableSelection: function () {
				return this.unbind(".ui-disableSelection")
			},
			zIndex: function (e) {
				if (e !== undefined) return this.css("zIndex", e);
				if (this.length)
					for (var t, n, i = a(this[0]); i.length && i[0] !== document;) {
						if (("absolute" === (t = i.css("position")) || "relative" === t || "fixed" === t) && (n = parseInt(i.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
						i = i.parent()
					}
				return 0
			}
		}), a.ui.plugin = {
			add: function (e, t, n) {
				var i, r = a.ui[e].prototype;
				for (i in n) r.plugins[i] = r.plugins[i] || [], r.plugins[i].push([t, n[i]])
			},
			call: function (e, t, n, i) {
				var r, o = e.plugins[t];
				if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
					for (r = 0; r < o.length; r++) e.options[o[r][0]] && o[r][1].apply(e.element, n)
			}
		}
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery", "./widget"], e) : e(jQuery)
	}(function (r) {
		var o = !1;
		return r(document).mouseup(function () {
			o = !1
		}), r.widget("ui.mouse", {
			version: "1.11.4",
			options: {
				cancel: "input,textarea,button,select,option",
				distance: 1,
				delay: 0
			},
			_mouseInit: function () {
				var t = this;
				this.element.bind("mousedown." + this.widgetName, function (e) {
					return t._mouseDown(e)
				}).bind("click." + this.widgetName, function (e) {
					if (!0 === r.data(e.target, t.widgetName + ".preventClickEvent")) return r.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
				}), this.started = !1
			},
			_mouseDestroy: function () {
				this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
			},
			_mouseDown: function (e) {
				if (!o) {
					this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
					var t = this,
						n = 1 === e.which,
						i = !("string" != typeof this.options.cancel || !e.target.nodeName) && r(e.target).closest(this.options.cancel).length;
					return !(n && !i && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
						t.mouseDelayMet = !0
					}, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === r.data(e.target, this.widgetName + ".preventClickEvent") && r.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
						return t._mouseMove(e)
					}, this._mouseUpDelegate = function (e) {
						return t._mouseUp(e)
					}, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), o = !0))
				}
			},
			_mouseMove: function (e) {
				if (this._mouseMoved) {
					if (r.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
					if (!e.which) return this._mouseUp(e)
				}
				return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
			},
			_mouseUp: function (e) {
				return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && r.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), o = !1
			},
			_mouseDistanceMet: function (e) {
				return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
			},
			_mouseDelayMet: function () {
				return this.mouseDelayMet
			},
			_mouseStart: function () {},
			_mouseDrag: function () {},
			_mouseStop: function () {},
			_mouseCapture: function () {
				return !0
			}
		})
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], e) : e(jQuery)
	}(function (h) {
		return h.widget("ui.sortable", h.ui.mouse, {
			version: "1.11.4",
			widgetEventPrefix: "sort",
			ready: !1,
			options: {
				appendTo: "parent",
				axis: !1,
				connectWith: !1,
				containment: !1,
				cursor: "auto",
				cursorAt: !1,
				dropOnEmpty: !0,
				forcePlaceholderSize: !1,
				forceHelperSize: !1,
				grid: !1,
				handle: !1,
				helper: "original",
				items: "> *",
				opacity: !1,
				placeholder: !1,
				revert: !1,
				scroll: !0,
				scrollSensitivity: 20,
				scrollSpeed: 20,
				scope: "default",
				tolerance: "intersect",
				zIndex: 1e3,
				activate: null,
				beforeStop: null,
				change: null,
				deactivate: null,
				out: null,
				over: null,
				receive: null,
				remove: null,
				sort: null,
				start: null,
				stop: null,
				update: null
			},
			_isOverAxis: function (e, t, n) {
				return t <= e && e < t + n
			},
			_isFloating: function (e) {
				return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
			},
			_create: function () {
				this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
			},
			_setOption: function (e, t) {
				this._super(e, t), "handle" === e && this._setHandleClassName()
			},
			_setHandleClassName: function () {
				this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), h.each(this.items, function () {
					(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
				})
			},
			_destroy: function () {
				this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
				for (var e = this.items.length - 1; 0 <= e; e--) this.items[e].item.removeData(this.widgetName + "-item");
				return this
			},
			_mouseCapture: function (e, t) {
				var n = null,
					i = !1,
					r = this;
				return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), h(e.target).parents().each(function () {
					if (h.data(this, r.widgetName + "-item") === r) return n = h(this), !1
				}), h.data(e.target, r.widgetName + "-item") === r && (n = h(e.target)), !!n && (!(this.options.handle && !t && (h(this.options.handle, n).find("*").addBack().each(function () {
					this === e.target && (i = !0)
				}), !i)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
			},
			_mouseStart: function (e, t, n) {
				var i, r, o = this.options;
				if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
						top: this.offset.top - this.margins.top,
						left: this.offset.left - this.margins.left
					}, h.extend(this.offset, {
						click: {
							left: e.pageX - this.offset.left,
							top: e.pageY - this.offset.top
						},
						parent: this._getParentOffset(),
						relative: this._getRelativeOffset()
					}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
						prev: this.currentItem.prev()[0],
						parent: this.currentItem.parent()[0]
					}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (r = this.document.find("body"), this.storedCursor = r.css("cursor"), r.css("cursor", o.cursor), this.storedStylesheet = h("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(r)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
					for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", e, this._uiHash(this));
				return h.ui.ddmanager && (h.ui.ddmanager.current = this), h.ui.ddmanager && !o.dropBehaviour && h.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
			},
			_mouseDrag: function (e) {
				var t, n, i, r, o = this.options,
					s = !1;
				for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? s = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (s = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? s = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (s = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== s && h.ui.ddmanager && !o.dropBehaviour && h.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t = this.items.length - 1; 0 <= t; t--)
					if (i = (n = this.items[t]).item[0], (r = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(i === this.currentItem[0] || this.placeholder[1 === r ? "next" : "prev"]()[0] === i || h.contains(this.placeholder[0], i) || "semi-dynamic" === this.options.type && h.contains(this.element[0], i))) {
						if (this.direction = 1 === r ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
						this._rearrange(e, n), this._trigger("change", e, this._uiHash());
						break
					}
				return this._contactContainers(e), h.ui.ddmanager && h.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
			},
			_mouseStop: function (e, t) {
				if (e) {
					if (h.ui.ddmanager && !this.options.dropBehaviour && h.ui.ddmanager.drop(this, e), this.options.revert) {
						var n = this,
							i = this.placeholder.offset(),
							r = this.options.axis,
							o = {};
						r && "x" !== r || (o.left = i.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), r && "y" !== r || (o.top = i.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, h(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
							n._clear(e)
						})
					} else this._clear(e, t);
					return !1
				}
			},
			cancel: function () {
				if (this.dragging) {
					this._mouseUp({
						target: null
					}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
					for (var e = this.containers.length - 1; 0 <= e; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
				}
				return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), h.extend(this, {
					helper: null,
					dragging: !1,
					reverting: !1,
					_noFinalSort: null
				}), this.domPosition.prev ? h(this.domPosition.prev).after(this.currentItem) : h(this.domPosition.parent).prepend(this.currentItem)), this
			},
			serialize: function (t) {
				var e = this._getItemsAsjQuery(t && t.connected),
					n = [];
				return t = t || {}, h(e).each(function () {
					var e = (h(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
					e && n.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
				}), !n.length && t.key && n.push(t.key + "="), n.join("&")
			},
			toArray: function (e) {
				var t = this._getItemsAsjQuery(e && e.connected),
					n = [];
				return e = e || {}, t.each(function () {
					n.push(h(e.item || this).attr(e.attribute || "id") || "")
				}), n
			},
			_intersectsWith: function (e) {
				var t = this.positionAbs.left,
					n = t + this.helperProportions.width,
					i = this.positionAbs.top,
					r = i + this.helperProportions.height,
					o = e.left,
					s = o + e.width,
					a = e.top,
					l = a + e.height,
					u = this.offset.click.top,
					c = this.offset.click.left,
					d = "x" === this.options.axis || a < i + u && i + u < l,
					f = "y" === this.options.axis || o < t + c && t + c < s,
					h = d && f;
				return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : o < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
			},
			_intersectsWithPointer: function (e) {
				var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
					n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
					i = t && n,
					r = this._getDragVerticalDirection(),
					o = this._getDragHorizontalDirection();
				return !!i && (this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1))
			},
			_intersectsWithSides: function (e) {
				var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
					n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
					i = this._getDragVerticalDirection(),
					r = this._getDragHorizontalDirection();
				return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && t || "up" === i && !t)
			},
			_getDragVerticalDirection: function () {
				var e = this.positionAbs.top - this.lastPositionAbs.top;
				return 0 !== e && (0 < e ? "down" : "up")
			},
			_getDragHorizontalDirection: function () {
				var e = this.positionAbs.left - this.lastPositionAbs.left;
				return 0 !== e && (0 < e ? "right" : "left")
			},
			refresh: function (e) {
				return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
			},
			_connectWith: function () {
				var e = this.options;
				return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
			},
			_getItemsAsjQuery: function (e) {
				function t() {
					s.push(this)
				}
				var n, i, r, o, s = [],
					a = [],
					l = this._connectWith();
				if (l && e)
					for (n = l.length - 1; 0 <= n; n--)
						for (i = (r = h(l[n], this.document[0])).length - 1; 0 <= i; i--)(o = h.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && a.push([h.isFunction(o.options.items) ? o.options.items.call(o.element) : h(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
				for (a.push([h.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
						options: this.options,
						item: this.currentItem
					}) : h(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = a.length - 1; 0 <= n; n--) a[n][0].each(t);
				return h(s)
			},
			_removeCurrentsFromItems: function () {
				var n = this.currentItem.find(":data(" + this.widgetName + "-item)");
				this.items = h.grep(this.items, function (e) {
					for (var t = 0; t < n.length; t++)
						if (n[t] === e.item[0]) return !1;
					return !0
				})
			},
			_refreshItems: function (e) {
				this.items = [], this.containers = [this];
				var t, n, i, r, o, s, a, l, u = this.items,
					c = [
						[h.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
							item: this.currentItem
						}) : h(this.options.items, this.element), this]
					],
					d = this._connectWith();
				if (d && this.ready)
					for (t = d.length - 1; 0 <= t; t--)
						for (n = (i = h(d[t], this.document[0])).length - 1; 0 <= n; n--)(r = h.data(i[n], this.widgetFullName)) && r !== this && !r.options.disabled && (c.push([h.isFunction(r.options.items) ? r.options.items.call(r.element[0], e, {
							item: this.currentItem
						}) : h(r.options.items, r.element), r]), this.containers.push(r));
				for (t = c.length - 1; 0 <= t; t--)
					for (o = c[t][1], n = 0, l = (s = c[t][0]).length; n < l; n++)(a = h(s[n])).data(this.widgetName + "-item", o), u.push({
						item: a,
						instance: o,
						width: 0,
						height: 0,
						left: 0,
						top: 0
					})
			},
			refreshPositions: function (e) {
				var t, n, i, r;
				for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), t = this.items.length - 1; 0 <= t; t--)(n = this.items[t]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (i = this.options.toleranceElement ? h(this.options.toleranceElement, n.item) : n.item, e || (n.width = i.outerWidth(), n.height = i.outerHeight()), r = i.offset(), n.left = r.left, n.top = r.top);
				if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
				else
					for (t = this.containers.length - 1; 0 <= t; t--) r = this.containers[t].element.offset(), this.containers[t].containerCache.left = r.left, this.containers[t].containerCache.top = r.top, this.containers[t].containerCache.width = this.containers[t].element.outerWidth(), this.containers[t].containerCache.height = this.containers[t].element.outerHeight();
				return this
			},
			_createPlaceholder: function (n) {
				var i, r = (n = n || this).options;
				r.placeholder && r.placeholder.constructor !== String || (i = r.placeholder, r.placeholder = {
					element: function () {
						var e = n.currentItem[0].nodeName.toLowerCase(),
							t = h("<" + e + ">", n.document[0]).addClass(i || n.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tbody" === e ? n._createTrPlaceholder(n.currentItem.find("tr").eq(0), h("<tr>", n.document[0]).appendTo(t)) : "tr" === e ? n._createTrPlaceholder(n.currentItem, t) : "img" === e && t.attr("src", n.currentItem.attr("src")), i || t.css("visibility", "hidden"), t
					},
					update: function (e, t) {
						i && !r.forcePlaceholderSize || (t.height() || t.height(n.currentItem.innerHeight() - parseInt(n.currentItem.css("paddingTop") || 0, 10) - parseInt(n.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(n.currentItem.innerWidth() - parseInt(n.currentItem.css("paddingLeft") || 0, 10) - parseInt(n.currentItem.css("paddingRight") || 0, 10)))
					}
				}), n.placeholder = h(r.placeholder.element.call(n.element, n.currentItem)), n.currentItem.after(n.placeholder), r.placeholder.update(n, n.placeholder)
			},
			_createTrPlaceholder: function (e, t) {
				var n = this;
				e.children().each(function () {
					h("<td> </td>", n.document[0]).attr("colspan", h(this).attr("colspan") || 1).appendTo(t)
				})
			},
			_contactContainers: function (e) {
				var t, n, i, r, o, s, a, l, u, c, d = null,
					f = null;
				for (t = this.containers.length - 1; 0 <= t; t--)
					if (!h.contains(this.currentItem[0], this.containers[t].element[0]))
						if (this._intersectsWith(this.containers[t].containerCache)) {
							if (d && h.contains(this.containers[t].element[0], d.element[0])) continue;
							d = this.containers[t], f = t
						} else this.containers[t].containerCache.over && (this.containers[t]._trigger("out", e, this._uiHash(this)), this.containers[t].containerCache.over = 0);
				if (d)
					if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1);
					else {
						for (i = 1e4, r = null, o = (u = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", s = u ? "width" : "height", c = u ? "clientX" : "clientY", n = this.items.length - 1; 0 <= n; n--) h.contains(this.containers[f].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (a = this.items[n].item.offset()[o], l = !1, e[c] - a > this.items[n][s] / 2 && (l = !0), Math.abs(e[c] - a) < i && (i = Math.abs(e[c] - a), r = this.items[n], this.direction = l ? "up" : "down"));
						if (!r && !this.options.dropOnEmpty) return;
						if (this.currentContainer === this.containers[f]) return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
						r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[f].element, !0), this._trigger("change", e, this._uiHash()), this.containers[f]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1
					}
			},
			_createHelper: function (e) {
				var t = this.options,
					n = h.isFunction(t.helper) ? h(t.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === t.helper ? this.currentItem.clone() : this.currentItem;
				return n.parents("body").length || h("parent" !== t.appendTo ? t.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
					width: this.currentItem[0].style.width,
					height: this.currentItem[0].style.height,
					position: this.currentItem.css("position"),
					top: this.currentItem.css("top"),
					left: this.currentItem.css("left")
				}), n[0].style.width && !t.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !t.forceHelperSize || n.height(this.currentItem.height()), n
			},
			_adjustOffsetFromHelper: function (e) {
				"string" == typeof e && (e = e.split(" ")), h.isArray(e) && (e = {
					left: +e[0],
					top: +e[1] || 0
				}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
			},
			_getParentOffset: function () {
				this.offsetParent = this.helper.offsetParent();
				var e = this.offsetParent.offset();
				return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && h.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && h.ui.ie) && (e = {
					top: 0,
					left: 0
				}), {
					top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
					left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
				}
			},
			_getRelativeOffset: function () {
				if ("relative" !== this.cssPosition) return {
					top: 0,
					left: 0
				};
				var e = this.currentItem.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			},
			_cacheMargins: function () {
				this.margins = {
					left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
					top: parseInt(this.currentItem.css("marginTop"), 10) || 0
				}
			},
			_cacheHelperProportions: function () {
				this.helperProportions = {
					width: this.helper.outerWidth(),
					height: this.helper.outerHeight()
				}
			},
			_setContainment: function () {
				var e, t, n, i = this.options;
				"parent" === i.containment && (i.containment = this.helper[0].parentNode), "document" !== i.containment && "window" !== i.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (e = h(i.containment)[0], t = h(i.containment).offset(), n = "hidden" !== h(e).css("overflow"), this.containment = [t.left + (parseInt(h(e).css("borderLeftWidth"), 10) || 0) + (parseInt(h(e).css("paddingLeft"), 10) || 0) - this.margins.left, t.top + (parseInt(h(e).css("borderTopWidth"), 10) || 0) + (parseInt(h(e).css("paddingTop"), 10) || 0) - this.margins.top, t.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(h(e).css("borderLeftWidth"), 10) || 0) - (parseInt(h(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, t.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(h(e).css("borderTopWidth"), 10) || 0) - (parseInt(h(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
			},
			_convertPositionTo: function (e, t) {
				t || (t = this.position);
				var n = "absolute" === e ? 1 : -1,
					i = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && h.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					r = /(html|body)/i.test(i[0].tagName);
				return {
					top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()) * n,
					left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft()) * n
				}
			},
			_generatePosition: function (e) {
				var t, n, i = this.options,
					r = e.pageX,
					o = e.pageY,
					s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && h.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
					a = /(html|body)/i.test(s[0].tagName);
				return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (r = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (r = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), i.grid && (t = this.originalPageY + Math.round((o - this.originalPageY) / i.grid[1]) * i.grid[1], o = this.containment ? t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - i.grid[1] : t + i.grid[1] : t, n = this.originalPageX + Math.round((r - this.originalPageX) / i.grid[0]) * i.grid[0], r = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - i.grid[0] : n + i.grid[0] : n)), {
					top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()),
					left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft())
				}
			},
			_rearrange: function (e, t, n, i) {
				n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
				var r = this.counter;
				this._delay(function () {
					r === this.counter && this.refreshPositions(!i)
				})
			},
			_clear: function (e, t) {
				function n(t, n, i) {
					return function (e) {
						i._trigger(t, e, n._uiHash(n))
					}
				}
				this.reverting = !1;
				var i, r = [];
				if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
					for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
					this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
				} else this.currentItem.show();
				for (this.fromOutside && !t && r.push(function (e) {
						this._trigger("receive", e, this._uiHash(this.fromOutside))
					}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function (e) {
						this._trigger("update", e, this._uiHash())
					}), this !== this.currentContainer && (t || (r.push(function (e) {
						this._trigger("remove", e, this._uiHash())
					}), r.push(function (t) {
						return function (e) {
							t._trigger("receive", e, this._uiHash(this))
						}
					}.call(this, this.currentContainer)), r.push(function (t) {
						return function (e) {
							t._trigger("update", e, this._uiHash(this))
						}
					}.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) t || r.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
				if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
					for (i = 0; i < r.length; i++) r[i].call(this, e);
					this._trigger("stop", e, this._uiHash())
				}
				return this.fromOutside = !1, !this.cancelHelperRemoval
			},
			_trigger: function () {
				!1 === h.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
			},
			_uiHash: function (e) {
				var t = e || this;
				return {
					helper: t.helper,
					placeholder: t.placeholder || h([]),
					position: t.position,
					originalPosition: t.originalPosition,
					offset: t.positionAbs,
					item: t.currentItem,
					sender: e ? e.element : null
				}
			}
		})
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function (d) {
		var n, a = "ui-effects-",
			i = d;
		return d.effects = {
				effect: {}
			},
			function (c, d) {
				function f(e, t, n) {
					var i = g[t.type] || {};
					return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : e < 0 ? 0 : i.max < e ? i.max : e)
				}

				function a(s) {
					var a = p(),
						l = a._rgba = [];
					return s = s.toLowerCase(), y(t, function (e, t) {
						var n, i = t.re.exec(s),
							r = i && t.parse(i),
							o = t.space || "rgba";
						if (r) return n = a[o](r), a[m[o].cache] = n[m[o].cache], l = a._rgba = n._rgba, !1
					}), l.length ? ("0,0,0,0" === l.join() && c.extend(l, u.transparent), a) : u[s]
				}

				function l(e, t, n) {
					return 6 * (n = (n + 1) % 1) < 1 ? e + (t - e) * n * 6 : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
				}
				var u, e = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
					h = /^([\-+])=\s*(\d+\.?\d*)/,
					t = [{
						re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function (e) {
							return [e[1], e[2], e[3], e[4]]
						}
					}, {
						re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						parse: function (e) {
							return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
						}
					}, {
						re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
						parse: function (e) {
							return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
						}
					}, {
						re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
						parse: function (e) {
							return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
						}
					}, {
						re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
						space: "hsla",
						parse: function (e) {
							return [e[1], e[2] / 100, e[3] / 100, e[4]]
						}
					}],
					p = c.Color = function (e, t, n, i) {
						return new c.Color.fn.parse(e, t, n, i)
					},
					m = {
						rgba: {
							props: {
								red: {
									idx: 0,
									type: "byte"
								},
								green: {
									idx: 1,
									type: "byte"
								},
								blue: {
									idx: 2,
									type: "byte"
								}
							}
						},
						hsla: {
							props: {
								hue: {
									idx: 0,
									type: "degrees"
								},
								saturation: {
									idx: 1,
									type: "percent"
								},
								lightness: {
									idx: 2,
									type: "percent"
								}
							}
						}
					},
					g = {
						"byte": {
							floor: !0,
							max: 255
						},
						percent: {
							max: 1
						},
						degrees: {
							mod: 360,
							floor: !0
						}
					},
					v = p.support = {},
					n = c("<p>")[0],
					y = c.each;
				n.style.cssText = "background-color:rgba(1,1,1,.5)", v.rgba = -1 < n.style.backgroundColor.indexOf("rgba"), y(m, function (e, t) {
					t.cache = "_" + e, t.props.alpha = {
						idx: 3,
						type: "percent",
						def: 1
					}
				}), p.fn = c.extend(p.prototype, {
					parse: function (r, e, t, n) {
						if (r === d) return this._rgba = [null, null, null, null], this;
						(r.jquery || r.nodeType) && (r = c(r).css(e), e = d);
						var o = this,
							i = c.type(r),
							s = this._rgba = [];
						return e !== d && (r = [r, e, t, n], i = "array"), "string" === i ? this.parse(a(r) || u._default) : "array" === i ? (y(m.rgba.props, function (e, t) {
							s[t.idx] = f(r[t.idx], t)
						}), this) : "object" === i ? (y(m, r instanceof p ? function (e, t) {
							r[t.cache] && (o[t.cache] = r[t.cache].slice())
						} : function (e, n) {
							var i = n.cache;
							y(n.props, function (e, t) {
								if (!o[i] && n.to) {
									if ("alpha" === e || null == r[e]) return;
									o[i] = n.to(o._rgba)
								}
								o[i][t.idx] = f(r[e], t, !0)
							}), o[i] && c.inArray(null, o[i].slice(0, 3)) < 0 && (o[i][3] = 1, n.from && (o._rgba = n.from(o[i])))
						}), this) : void 0
					},
					is: function (e) {
						var r = p(e),
							o = !0,
							s = this;
						return y(m, function (e, t) {
							var n, i = r[t.cache];
							return i && (n = s[t.cache] || t.to && t.to(s._rgba) || [], y(t.props, function (e, t) {
								if (null != i[t.idx]) return o = i[t.idx] === n[t.idx]
							})), o
						}), o
					},
					_space: function () {
						var n = [],
							i = this;
						return y(m, function (e, t) {
							i[t.cache] && n.push(e)
						}), n.pop()
					},
					transition: function (e, s) {
						var a = p(e),
							t = a._space(),
							n = m[t],
							i = 0 === this.alpha() ? p("transparent") : this,
							l = i[n.cache] || n.to(i._rgba),
							u = l.slice();
						return a = a[n.cache], y(n.props, function (e, t) {
							var n = t.idx,
								i = l[n],
								r = a[n],
								o = g[t.type] || {};
							null !== r && (null === i ? u[n] = r : (o.mod && (r - i > o.mod / 2 ? i += o.mod : i - r > o.mod / 2 && (i -= o.mod)), u[n] = f((r - i) * s + i, t)))
						}), this[t](u)
					},
					blend: function (e) {
						if (1 === this._rgba[3]) return this;
						var t = this._rgba.slice(),
							n = t.pop(),
							i = p(e)._rgba;
						return p(c.map(t, function (e, t) {
							return (1 - n) * i[t] + n * e
						}))
					},
					toRgbaString: function () {
						var e = "rgba(",
							t = c.map(this._rgba, function (e, t) {
								return null == e ? 2 < t ? 1 : 0 : e
							});
						return 1 === t[3] && (t.pop(), e = "rgb("), e + t.join() + ")"
					},
					toHslaString: function () {
						var e = "hsla(",
							t = c.map(this.hsla(), function (e, t) {
								return null == e && (e = 2 < t ? 1 : 0), t && t < 3 && (e = Math.round(100 * e) + "%"), e
							});
						return 1 === t[3] && (t.pop(), e = "hsl("), e + t.join() + ")"
					},
					toHexString: function (e) {
						var t = this._rgba.slice(),
							n = t.pop();
						return e && t.push(~~(255 * n)), "#" + c.map(t, function (e) {
							return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e
						}).join("")
					},
					toString: function () {
						return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
					}
				}), p.fn.parse.prototype = p.fn, m.hsla.to = function (e) {
					if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
					var t, n, i = e[0] / 255,
						r = e[1] / 255,
						o = e[2] / 255,
						s = e[3],
						a = Math.max(i, r, o),
						l = Math.min(i, r, o),
						u = a - l,
						c = a + l,
						d = .5 * c;
					return t = l === a ? 0 : i === a ? 60 * (r - o) / u + 360 : r === a ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === u ? 0 : d <= .5 ? u / c : u / (2 - c), [Math.round(t) % 360, n, d, null == s ? 1 : s]
				}, m.hsla.from = function (e) {
					if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
					var t = e[0] / 360,
						n = e[1],
						i = e[2],
						r = e[3],
						o = i <= .5 ? i * (1 + n) : i + n - i * n,
						s = 2 * i - o;
					return [Math.round(255 * l(s, o, t + 1 / 3)), Math.round(255 * l(s, o, t)), Math.round(255 * l(s, o, t - 1 / 3)), r]
				}, y(m, function (l, e) {
					var n = e.props,
						s = e.cache,
						a = e.to,
						u = e.from;
					p.fn[l] = function (e) {
						if (a && !this[s] && (this[s] = a(this._rgba)), e === d) return this[s].slice();
						var t, i = c.type(e),
							r = "array" === i || "object" === i ? e : arguments,
							o = this[s].slice();
						return y(n, function (e, t) {
							var n = r["object" === i ? e : t.idx];
							null == n && (n = o[t.idx]), o[t.idx] = f(n, t)
						}), u ? ((t = p(u(o)))[s] = o, t) : p(o)
					}, y(n, function (s, a) {
						p.fn[s] || (p.fn[s] = function (e) {
							var t, n = c.type(e),
								i = "alpha" === s ? this._hsla ? "hsla" : "rgba" : l,
								r = this[i](),
								o = r[a.idx];
							return "undefined" === n ? o : ("function" === n && (e = e.call(this, o), n = c.type(e)), null == e && a.empty ? this : ("string" === n && (t = h.exec(e)) && (e = o + parseFloat(t[2]) * ("+" === t[1] ? 1 : -1)), r[a.idx] = e, this[i](r)))
						})
					})
				}), p.hook = function (e) {
					var t = e.split(" ");
					y(t, function (e, s) {
						c.cssHooks[s] = {
							set: function (e, t) {
								var n, i, r = "";
								if ("transparent" !== t && ("string" !== c.type(t) || (n = a(t)))) {
									if (t = p(n || t), !v.rgba && 1 !== t._rgba[3]) {
										for (i = "backgroundColor" === s ? e.parentNode : e;
											("" === r || "transparent" === r) && i && i.style;) try {
											r = c.css(i, "backgroundColor"), i = i.parentNode
										} catch (o) {}
										t = t.blend(r && "transparent" !== r ? r : "_default")
									}
									t = t.toRgbaString()
								}
								try {
									e.style[s] = t
								} catch (o) {}
							}
						}, c.fx.step[s] = function (e) {
							e.colorInit || (e.start = p(e.elem, s), e.end = p(e.end), e.colorInit = !0), c.cssHooks[s].set(e.elem, e.start.transition(e.end, e.pos))
						}
					})
				}, p.hook(e), c.cssHooks.borderColor = {
					expand: function (n) {
						var i = {};
						return y(["Top", "Right", "Bottom", "Left"], function (e, t) {
							i["border" + t + "Color"] = n
						}), i
					}
				}, u = c.Color.names = {
					aqua: "#00ffff",
					black: "#000000",
					blue: "#0000ff",
					fuchsia: "#ff00ff",
					gray: "#808080",
					green: "#008000",
					lime: "#00ff00",
					maroon: "#800000",
					navy: "#000080",
					olive: "#808000",
					purple: "#800080",
					red: "#ff0000",
					silver: "#c0c0c0",
					teal: "#008080",
					white: "#ffffff",
					yellow: "#ffff00",
					transparent: [null, null, null, 0],
					_default: "#ffffff"
				}
			}(i),
			function () {
				function s(e) {
					var t, n, i = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
						r = {};
					if (i && i.length && i[0] && i[i[0]])
						for (n = i.length; n--;) "string" == typeof i[t = i[n]] && (r[d.camelCase(t)] = i[t]);
					else
						for (t in i) "string" == typeof i[t] && (r[t] = i[t]);
					return r
				}

				function a(e, t) {
					var n, i, r = {};
					for (n in t) i = t[n], e[n] !== i && (c[n] || !d.fx.step[n] && isNaN(parseFloat(i)) || (r[n] = i));
					return r
				}
				var o, r, l, u = ["add", "remove", "toggle"],
					c = {
						border: 1,
						borderBottom: 1,
						borderColor: 1,
						borderLeft: 1,
						borderRight: 1,
						borderTop: 1,
						borderWidth: 1,
						margin: 1,
						padding: 1
					};
				d.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, t) {
					d.fx.step[t] = function (e) {
						("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (i.style(e.elem, t, e.end), e.setAttr = !0)
					}
				}), d.fn.addBack || (d.fn.addBack = function (e) {
					return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
				}), d.effects.animateClass = function (r, e, t, n) {
					var o = d.speed(e, t, n);
					return this.queue(function () {
						var e, n = d(this),
							t = n.attr("class") || "",
							i = o.children ? n.find("*").addBack() : n;
						i = i.map(function () {
							return {
								el: d(this),
								start: s(this)
							}
						}), (e = function () {
							d.each(u, function (e, t) {
								r[t] && n[t + "Class"](r[t])
							})
						})(), i = i.map(function () {
							return this.end = s(this.el[0]), this.diff = a(this.start, this.end), this
						}), n.attr("class", t), i = i.map(function () {
							var e = this,
								t = d.Deferred(),
								n = d.extend({}, o, {
									queue: !1,
									complete: function () {
										t.resolve(e)
									}
								});
							return this.el.animate(this.diff, n), t.promise()
						}), d.when.apply(d, i.get()).done(function () {
							e(), d.each(arguments, function () {
								var t = this.el;
								d.each(this.diff, function (e) {
									t.css(e, "")
								})
							}), o.complete.call(n[0])
						})
					})
				}, d.fn.extend({
					addClass: (l = d.fn.addClass, function (e, t, n, i) {
						return t ? d.effects.animateClass.call(this, {
							add: e
						}, t, n, i) : l.apply(this, arguments)
					}),
					removeClass: (r = d.fn.removeClass, function (e, t, n, i) {
						return 1 < arguments.length ? d.effects.animateClass.call(this, {
							remove: e
						}, t, n, i) : r.apply(this, arguments)
					}),
					toggleClass: (o = d.fn.toggleClass, function (e, t, n, i, r) {
						return "boolean" == typeof t || t === undefined ? n ? d.effects.animateClass.call(this, t ? {
							add: e
						} : {
							remove: e
						}, n, i, r) : o.apply(this, arguments) : d.effects.animateClass.call(this, {
							toggle: e
						}, t, n, i)
					}),
					switchClass: function (e, t, n, i, r) {
						return d.effects.animateClass.call(this, {
							add: t,
							remove: e
						}, n, i, r)
					}
				})
			}(),
			function () {
				function i(e, t, n, i) {
					return d.isPlainObject(e) && (e = (t = e).effect), e = {
						effect: e
					}, null == t && (t = {}), d.isFunction(t) && (i = t, n = null, t = {}), ("number" == typeof t || d.fx.speeds[t]) && (i = n, n = t, t = {}), d.isFunction(n) && (i = n, n = null), t && d.extend(e, t), n = n || t.duration, e.duration = d.fx.off ? 0 : "number" == typeof n ? n : n in d.fx.speeds ? d.fx.speeds[n] : d.fx.speeds._default, e.complete = i || t.complete, e
				}

				function n(e) {
					return !(e && "number" != typeof e && !d.fx.speeds[e]) || ("string" == typeof e && !d.effects.effect[e] || (!!d.isFunction(e) || "object" == typeof e && !e.effect))
				}
				var r, o, s;
				d.extend(d.effects, {
					version: "1.11.4",
					save: function (e, t) {
						for (var n = 0; n < t.length; n++) null !== t[n] && e.data(a + t[n], e[0].style[t[n]])
					},
					restore: function (e, t) {
						var n, i;
						for (i = 0; i < t.length; i++) null !== t[i] && ((n = e.data(a + t[i])) === undefined && (n = ""), e.css(t[i], n))
					},
					setMode: function (e, t) {
						return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
					},
					getBaseline: function (e, t) {
						var n, i;
						switch (e[0]) {
							case "top":
								n = 0;
								break;
							case "middle":
								n = .5;
								break;
							case "bottom":
								n = 1;
								break;
							default:
								n = e[0] / t.height
						}
						switch (e[1]) {
							case "left":
								i = 0;
								break;
							case "center":
								i = .5;
								break;
							case "right":
								i = 1;
								break;
							default:
								i = e[1] / t.width
						}
						return {
							x: i,
							y: n
						}
					},
					createWrapper: function (n) {
						if (n.parent().is(".ui-effects-wrapper")) return n.parent();
						var i = {
								width: n.outerWidth(!0),
								height: n.outerHeight(!0),
								"float": n.css("float")
							},
							e = d("<div></div>").addClass("ui-effects-wrapper").css({
								fontSize: "100%",
								background: "transparent",
								border: "none",
								margin: 0,
								padding: 0
							}),
							t = {
								width: n.width(),
								height: n.height()
							},
							r = document.activeElement;
						try {
							r.id
						} catch (o) {
							r = document.body
						}
						return n.wrap(e), (n[0] === r || d.contains(n[0], r)) && d(r).focus(), e = n.parent(), "static" === n.css("position") ? (e.css({
							position: "relative"
						}), n.css({
							position: "relative"
						})) : (d.extend(i, {
							position: n.css("position"),
							zIndex: n.css("z-index")
						}), d.each(["top", "left", "bottom", "right"], function (e, t) {
							i[t] = n.css(t), isNaN(parseInt(i[t], 10)) && (i[t] = "auto")
						}), n.css({
							position: "relative",
							top: 0,
							left: 0,
							right: "auto",
							bottom: "auto"
						})), n.css(t), e.css(i).show()
					},
					removeWrapper: function (e) {
						var t = document.activeElement;
						return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === t || d.contains(e[0], t)) && d(t).focus()), e
					},
					setTransition: function (i, e, r, o) {
						return o = o || {}, d.each(e, function (e, t) {
							var n = i.cssUnit(t);
							0 < n[0] && (o[t] = n[0] * r + n[1])
						}), o
					}
				}), d.fn.extend({
					effect: function () {
						function e(e) {
							function t() {
								d.isFunction(i) && i.call(n[0]), d.isFunction(e) && e()
							}
							var n = d(this),
								i = o.complete,
								r = o.mode;
							(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), t()) : s.call(n[0], o, t)
						}
						var o = i.apply(this, arguments),
							t = o.mode,
							n = o.queue,
							s = d.effects.effect[o.effect];
						return d.fx.off || !s ? t ? this[t](o.duration, o.complete) : this.each(function () {
							o.complete && o.complete.call(this)
						}) : !1 === n ? this.each(e) : this.queue(n || "fx", e)
					},
					show: (s = d.fn.show, function (e) {
						if (n(e)) return s.apply(this, arguments);
						var t = i.apply(this, arguments);
						return t.mode = "show", this.effect.call(this, t)
					}),
					hide: (o = d.fn.hide, function (e) {
						if (n(e)) return o.apply(this, arguments);
						var t = i.apply(this, arguments);
						return t.mode = "hide", this.effect.call(this, t)
					}),
					toggle: (r = d.fn.toggle, function (e) {
						if (n(e) || "boolean" == typeof e) return r.apply(this, arguments);
						var t = i.apply(this, arguments);
						return t.mode = "toggle", this.effect.call(this, t)
					}),
					cssUnit: function (e) {
						var n = this.css(e),
							i = [];
						return d.each(["em", "px", "%", "pt"], function (e, t) {
							0 < n.indexOf(t) && (i = [parseFloat(n), t])
						}), i
					}
				})
			}(), n = {}, d.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, e) {
				n[e] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), d.extend(n, {
				Sine: function (e) {
					return 1 - Math.cos(e * Math.PI / 2)
				},
				Circ: function (e) {
					return 1 - Math.sqrt(1 - e * e)
				},
				Elastic: function (e) {
					return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (e) {
					return e * e * (3 * e - 2)
				},
				Bounce: function (e) {
					for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
					return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
				}
			}), d.each(n, function (e, t) {
				d.easing["easeIn" + e] = t, d.easing["easeOut" + e] = function (e) {
					return 1 - t(1 - e)
				}, d.easing["easeInOut" + e] = function (e) {
					return e < .5 ? t(2 * e) / 2 : 1 - t(-2 * e + 2) / 2
				}
			}), d.effects
	}),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery", "./effect"], e) : e(jQuery)
	}(function (s) {
		return s.effects.effect.highlight = function (e, t) {
			var n = s(this),
				i = ["backgroundImage", "backgroundColor", "opacity"],
				r = s.effects.setMode(n, e.mode || "show"),
				o = {
					backgroundColor: n.css("backgroundColor")
				};
			"hide" === r && (o.opacity = 0), s.effects.save(n, i), n.show().css({
				backgroundImage: "none",
				backgroundColor: e.color || "#ffff99"
			}).animate(o, {
				queue: !1,
				duration: e.duration,
				easing: e.easing,
				complete: function () {
					"hide" === r && n.hide(), s.effects.restore(n, i), t()
				}
			})
		}
	}),
	function (t) {
		function n(e, t) {
			if (!(1 < e.originalEvent.touches.length)) {
				e.preventDefault();
				var n = e.originalEvent.changedTouches[0],
					i = document.createEvent("MouseEvents");
				i.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
			}
		}
		if (t.support.touch = "ontouchend" in document, t.support.touch) {
			var i, e = t.ui.mouse.prototype,
				r = e._mouseInit,
				o = e._mouseDestroy;
			e._touchStart = function (e) {
				var t = this;
				!i && t._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, t._touchMoved = !1, n(e, "mouseover"), n(e, "mousemove"), n(e, "mousedown"))
			}, e._touchMove = function (e) {
				i && (this._touchMoved = !0, n(e, "mousemove"))
			}, e._touchEnd = function (e) {
				i && (n(e, "mouseup"), n(e, "mouseout"), this._touchMoved || n(e, "click"), i = !1)
			}, e._mouseInit = function () {
				var e = this;
				e.element.bind({
					touchstart: t.proxy(e, "_touchStart"),
					touchmove: t.proxy(e, "_touchMove"),
					touchend: t.proxy(e, "_touchEnd")
				}), r.call(e)
			}, e._mouseDestroy = function () {
				var e = this;
				e.element.unbind({
					touchstart: t.proxy(e, "_touchStart"),
					touchmove: t.proxy(e, "_touchMove"),
					touchend: t.proxy(e, "_touchEnd")
				}), o.call(e)
			}
		}
	}(jQuery),
	function () {
		var e, i = function (e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		};
		jQuery.widget("semaperepelitsa.pond", {
			_create: function () {
				return new e(this.element)
			}
		}), jQuery(document).on({
			"ready setup page:load": function () {
				return jQuery(".pond").pond(), jQuery(".pond-new-img").off("click"), jQuery(".pond-new-img").on("click", function () {
					return $(this).closest(".pond").find("input:file").trigger("click")
				})
			}
		}), e = function () {
			function e(e) {
				var t, n;
				this.wrapper = e, this.render_uploading = i(this.render_uploading, this), this.find_photo = i(this.find_photo, this), this.remove = i(this.remove, this), this.find_and_remove = i(this.find_and_remove, this), this.toggle_submit = i(this.toggle_submit, this), this.init_fileupload = i(this.init_fileupload, this), (n = this).uploading = 0, t = this.wrapper.closest("form"), this.submit_button = t.find(":submit"), this.disable_submit_message = this.submit_button.siblings(".disable_message"), this.list = this.wrapper.find(".pond-img-list"), this.init_fileupload(), this.list.on("click", ".pond-img-delete", function (e) {
					return e.preventDefault(), n.find_and_remove(this)
				}), this.list.on("click", ".pond-img-rotate", function (e) {
					return e.preventDefault(), $.ajax({
						url: $(this).attr("href"),
						type: "POST",
						dataType: "html",
						context: $(this).closest(".pond-img"),
						beforeSend: function () {
							return $(this).find(".pond-img-thumb").css({
								opacity: .5
							})
						},
						success: function (e) {
							return $(this).replaceWith(e)
						},
						error: function (e, t) {
							if ("abort" !== t) return $(this).effect("highlight", {
								color: "#FFB3B3"
							}).find(".pond-img-thumb").css({
								opacity: 1
							})
						}
					})
				}), this.list.sortable({
					handle: "img"
				})
			}
			return e.prototype.init_fileupload = function () {
				return this.wrapper.fileupload({
					dataType: "html",
					url: "/pond",
					fileInput: this.wrapper.find(".pond-new-img-field"),
					dropZone: $(".pond"),
					type: "POST",
					formData: {},
					send: (l = this, function (e, t) {
						var n, i, r, o, s, a;
						for (l.uploading++, l.toggle_submit(), s = l.render_uploading(t.files), t.context = $(s).data("upload-data", t), a = [], n = 0, i = (o = t.context).length; n < i; n++) r = o[n], a.push(l.list.append(r));
						return a
					}),
					done: function (e, t) {
						var n, i;
						return i = t.context, n = $(t.result), _(_.zip(i, n)).each(function (e) {
							var t, n, i, r;
							return r = [$(e[0]), $(e[1])], i = r[0], n = r[1], (t = n.data("error")) ? i.effect("highlight", {
								color: "red"
							}, function () {
								return alert(t), i.remove()
							}) : i.replaceWith(n)
						})
					},
					fail: function (e, t) {
						var n, i, r, o;
						for (n = 0, i = (o = t.context).length; n < i; n++) r = o[n], $(r).remove();
						return alert("Could not upload your photo. Please, try again.\n[" + t.textStatus + "] " + t.errorThrown), console.log(_(t).clone())
					},
					always: (e = this, function () {
						return e.uploading--, e.toggle_submit()
					})
				});
				var e, l
			}, e.prototype.toggle_submit = function () {
				var e;
				if (e = 0 < this.uploading, this.submit_button.prop({
						disabled: e
					}), this.disable_submit_message.toggle(e), this.uploading < 0) return console.log("WARNING: Upload count mismatch"), this.uploading = 0
			}, e.prototype.find_and_remove = function (e) {
				return this.remove(this.find_photo(e))
			}, e.prototype.remove = function (e) {
				var t;
				return (t = e.data) && t.jqXHR && t.jqXHR.abort(), e.remove()
			}, e.prototype.find_photo = function (e) {
				return $(e).closest(".pond-img")
			}, e.prototype.render_uploading = function (e) {
				var t, n, i, r;
				for (r = $("#pond_img_template").html(), i = [], t = 0, n = e.length; t < n; t++) e[t], i.push($(r));
				return i
			}, e
		}()
	}.call(this),
	function (e, t) {
		"function" == typeof define && define.amd ? define(["jquery"], function (e) {
			return t(e)
		}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(0, function (e) {
		! function (C) {
			"use strict";

			function b(e) {
				var t = [{
					re: /[\xC0-\xC6]/g,
					ch: "A"
				}, {
					re: /[\xE0-\xE6]/g,
					ch: "a"
				}, {
					re: /[\xC8-\xCB]/g,
					ch: "E"
				}, {
					re: /[\xE8-\xEB]/g,
					ch: "e"
				}, {
					re: /[\xCC-\xCF]/g,
					ch: "I"
				}, {
					re: /[\xEC-\xEF]/g,
					ch: "i"
				}, {
					re: /[\xD2-\xD6]/g,
					ch: "O"
				}, {
					re: /[\xF2-\xF6]/g,
					ch: "o"
				}, {
					re: /[\xD9-\xDC]/g,
					ch: "U"
				}, {
					re: /[\xF9-\xFC]/g,
					ch: "u"
				}, {
					re: /[\xC7-\xE7]/g,
					ch: "c"
				}, {
					re: /[\xD1]/g,
					ch: "N"
				}, {
					re: /[\xF1]/g,
					ch: "n"
				}];
				return C.each(t, function () {
					e = e.replace(this.re, this.ch)
				}), e
			}

			function l(e) {
				var t = {
						"&": "&",
						"<": "<",
						">": ">",
						'"': '"',
						"'": "'",
						"`": "`"
					},
					n = "(?:" + Object.keys(t).join("|") + ")",
					i = new RegExp(n),
					r = new RegExp(n, "g"),
					o = null == e ? "" : "" + e;
				return i.test(o) ? o.replace(r, function (e) {
					return t[e]
				}) : o
			}

			function t(e, t) {
				var o, s = arguments,
					a = e,
					l = t;
				[].shift.apply(s);
				var n = this.each(function () {
					var e = C(this);
					if (e.is("select")) {
						var t = e.data("selectpicker"),
							n = "object" == typeof a && a;
						if (t) {
							if (n)
								for (var i in n) n.hasOwnProperty(i) && (t.options[i] = n[i])
						} else {
							var r = C.extend({}, f.DEFAULTS, C.fn.selectpicker.defaults || {}, e.data(), n);
							r.template = C.extend({}, f.DEFAULTS.template, C.fn.selectpicker.defaults ? C.fn.selectpicker.defaults.template : {}, e.data().template, n.template), e.data("selectpicker", t = new f(this, r, l))
						}
						"string" == typeof a && (o = t[a] instanceof Function ? t[a].apply(t, s) : t.options[a])
					}
				});
				return void 0 !== o ? o : n
			}
			var u, e, c, n, i, d, r;
			String.prototype.includes || (u = {}.toString, e = function () {
				try {
					var e = {},
						t = Object.defineProperty,
						n = t(e, e, e) && t
				} catch (i) {}
				return n
			}(), c = "".indexOf, n = function (e, t) {
				if (null == this) throw new TypeError;
				var n = String(this);
				if (e && "[object RegExp]" == u.call(e)) throw new TypeError;
				var i = n.length,
					r = String(e),
					o = r.length,
					s = 1 < arguments.length ? t : undefined,
					a = s ? Number(s) : 0;
				return a != a && (a = 0), !(i < o + Math.min(Math.max(a, 0), i)) && -1 != c.call(n, r, a)
			}, e ? e(String.prototype, "includes", {
				value: n,
				configurable: !0,
				writable: !0
			}) : String.prototype.includes = n), String.prototype.startsWith || (i = function () {
				try {
					var e = {},
						t = Object.defineProperty,
						n = t(e, e, e) && t
				} catch (i) {}
				return n
			}(), d = {}.toString, r = function (e, t) {
				if (null == this) throw new TypeError;
				var n = String(this);
				if (e && "[object RegExp]" == d.call(e)) throw new TypeError;
				var i = n.length,
					r = String(e),
					o = r.length,
					s = 1 < arguments.length ? t : undefined,
					a = s ? Number(s) : 0;
				a != a && (a = 0);
				var l = Math.min(Math.max(a, 0), i);
				if (i < o + l) return !1;
				for (var u = -1; ++u < o;)
					if (n.charCodeAt(l + u) != r.charCodeAt(u)) return !1;
				return !0
			}, i ? i(String.prototype, "startsWith", {
				value: r,
				configurable: !0,
				writable: !0
			}) : String.prototype.startsWith = r), Object.keys || (Object.keys = function (e, t, n) {
				for (t in n = [], e) n.hasOwnProperty.call(e, t) && n.push(t);
				return n
			}), C.fn.triggerNative = function (e) {
				var t, n = this[0];
				n.dispatchEvent ? ("function" == typeof Event ? t = new Event(e, {
					bubbles: !0
				}) : (t = document.createEvent("Event")).initEvent(e, !0, !1), n.dispatchEvent(t)) : (n.fireEvent && ((t = document.createEventObject()).eventType = e, n.fireEvent("on" + e, t)), this.trigger(e))
			}, C.expr[":"].icontains = function (e, t, n) {
				var i = C(e);
				return (i.data("tokens") || i.text()).toUpperCase().includes(n[3].toUpperCase())
			}, C.expr[":"].ibegins = function (e, t, n) {
				var i = C(e);
				return (i.data("tokens") || i.text()).toUpperCase().startsWith(n[3].toUpperCase())
			}, C.expr[":"].aicontains = function (e, t, n) {
				var i = C(e);
				return (i.data("tokens") || i.data("normalizedText") || i.text()).toUpperCase().includes(n[3].toUpperCase())
			}, C.expr[":"].aibegins = function (e, t, n) {
				var i = C(e);
				return (i.data("tokens") || i.data("normalizedText") || i.text()).toUpperCase().startsWith(n[3].toUpperCase())
			};
			var f = function (e, t, n) {
				n && (n.stopPropagation(), n.preventDefault()), this.$element = C(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = t, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = f.prototype.val, this.render = f.prototype.render, this.refresh = f.prototype.refresh, this.setStyle = f.prototype.setStyle, this.selectAll = f.prototype.selectAll, this.deselectAll = f.prototype.deselectAll, this.destroy = f.prototype.destroy, this.remove = f.prototype.remove, this.show = f.prototype.show, this.hide = f.prototype.hide, this.init()
			};
			f.VERSION = "1.10.0", f.DEFAULTS = {
				noneSelectedText: "Nothing selected",
				noneResultsText: "No results matched {0}",
				countSelectedText: function (e) {
					return 1 == e ? "{0} item selected" : "{0} items selected"
				},
				maxOptionsText: function (e, t) {
					return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
				},
				selectAllText: "Select All",
				deselectAllText: "Deselect All",
				doneButton: !1,
				doneButtonText: "Close",
				multipleSeparator: ", ",
				styleBase: "btn",
				style: "btn-default",
				size: "auto",
				title: null,
				selectedTextFormat: "values",
				width: !1,
				container: !1,
				hideDisabled: !1,
				showSubtext: !1,
				showIcon: !0,
				showContent: !0,
				dropupAuto: !0,
				header: !1,
				liveSearch: !1,
				liveSearchPlaceholder: null,
				liveSearchNormalize: !1,
				liveSearchStyle: "contains",
				actionsBox: !1,
				iconBase: "glyphicon",
				tickIcon: "glyphicon-ok",
				showTick: !1,
				template: {
					caret: '<span class="caret"></span>'
				},
				maxOptions: !1,
				mobile: !1,
				selectOnTab: !1,
				dropdownAlignRight: !1
			}, f.prototype = {
				constructor: f,
				init: function () {
					var t = this,
						e = this.$element.attr("id");
					this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== e && (this.$button.attr("data-id", e), C('label[for="' + e + '"]').click(function (e) {
						e.preventDefault(), t.$button.focus()
					})), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
						"hide.bs.dropdown": function (e) {
							t.$element.trigger("hide.bs.select", e)
						},
						"hidden.bs.dropdown": function (e) {
							t.$element.trigger("hidden.bs.select", e)
						},
						"show.bs.dropdown": function (e) {
							t.$element.trigger("show.bs.select", e)
						},
						"shown.bs.dropdown": function (e) {
							t.$element.trigger("shown.bs.select", e)
						}
					}), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function () {
						t.$button.addClass("bs-invalid").focus(), t.$element.on({
							"focus.bs.select": function () {
								t.$button.focus(), t.$element.off("focus.bs.select")
							},
							"shown.bs.select": function () {
								t.$element.val(t.$element.val()).off("shown.bs.select")
							},
							"rendered.bs.select": function () {
								this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select")
							}
						})
					}), setTimeout(function () {
						t.$element.trigger("loaded.bs.select")
					})
				},
				createDropdown: function () {
					var e = this.multiple || this.options.showTick ? " show-tick" : "",
						t = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
						n = this.autofocus ? " autofocus" : "",
						i = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">×</button>' + this.options.header + "</div>" : "",
						r = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + l(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
						o = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
						s = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
						a = '<div class="btn-group bootstrap-select' + e + t + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + n + '><span class="filter-option pull-left"></span> <span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + i + r + o + '<ul class="dropdown-menu inner" role="menu"></ul>' + s + "</div></div>";
					return C(a)
				},
				createView: function () {
					var e = this.createDropdown(),
						t = this.createLi();
					return e.find("ul")[0].innerHTML = t, e
				},
				reloadLi: function () {
					this.destroyLi();
					var e = this.createLi();
					this.$menuInner[0].innerHTML = e
				},
				destroyLi: function () {
					this.$menu.find("li").remove()
				},
				createLi: function () {
					var h = this,
						p = [],
						m = 0,
						e = document.createElement("option"),
						g = -1,
						v = function (e, t, n, i) {
							return "<li" + (void 0 !== n & "" !== n ? ' class="' + n + '"' : "") + (void 0 !== t & null !== t ? ' data-original-index="' + t + '"' : "") + (void 0 !== i & null !== i ? 'data-optgroup="' + i + '"' : "") + ">" + e + "</li>"
						},
						y = function (e, t, n, i) {
							return '<a tabindex="0"' + (void 0 !== t ? ' class="' + t + '"' : "") + (void 0 !== n ? ' style="' + n + '"' : "") + (h.options.liveSearchNormalize ? ' data-normalized-text="' + b(l(e)) + '"' : "") + (void 0 !== i || null !== i ? ' data-tokens="' + i + '"' : "") + ">" + e + '<span class="' + h.options.iconBase + " " + h.options.tickIcon + ' check-mark"></span></a>'
						};
					if (this.options.title && !this.multiple && (g--, !this.$element.find(".bs-title-option").length)) {
						var t = this.$element[0];
						e.className = "bs-title-option", e.appendChild(document.createTextNode(this.options.title)), e.value = "", t.insertBefore(e, t.firstChild), C(t.options[t.selectedIndex]).attr("selected") === undefined && (e.selected = !0)
					}
					return this.$element.find("option").each(function (e) {
						var t = C(this);
						if (g++, !t.hasClass("bs-title-option")) {
							var n = this.className || "",
								i = this.style.cssText,
								r = t.data("content") ? t.data("content") : t.html(),
								o = t.data("tokens") ? t.data("tokens") : null,
								s = void 0 !== t.data("subtext") ? '<small class="text-muted">' + t.data("subtext") + "</small>" : "",
								a = void 0 !== t.data("icon") ? '<span class="' + h.options.iconBase + " " + t.data("icon") + '"></span> ' : "",
								l = "OPTGROUP" === this.parentNode.tagName,
								u = this.disabled || l && this.parentNode.disabled;
							if ("" !== a && u && (a = "<span>" + a + "</span>"), h.options.hideDisabled && u && !l) g--;
							else {
								if (t.data("content") || (r = a + '<span class="text">' + r + s + "</span>"), l && !0 !== t.data("divider")) {
									var c = " " + this.parentNode.className || "";
									if (0 === t.index()) {
										m += 1;
										var d = this.parentNode.label,
											f = void 0 !== t.parent().data("subtext") ? '<small class="text-muted">' + t.parent().data("subtext") + "</small>" : "";
										d = (t.parent().data("icon") ? '<span class="' + h.options.iconBase + " " + t.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + d + f + "</span>", 0 !== e && 0 < p.length && (g++, p.push(v("", null, "divider", m + "div"))), g++, p.push(v(d, null, "dropdown-header" + c, m))
									}
									if (h.options.hideDisabled && u) return void g--;
									p.push(v(y(r, "opt " + n + c, i, o), e, "", m))
								} else !0 === t.data("divider") ? p.push(v("", e, "divider")) : !0 === t.data("hidden") ? p.push(v(y(r, n, i, o), e, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (g++, p.push(v("", null, "divider", m + "div"))), p.push(v(y(r, n, i, o), e)));
								h.liObj[e] = g
							}
						}
					}), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), p.join("")
				},
				findLis: function () {
					return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
				},
				render: function (e) {
					var t, i = this;
					!1 !== e && this.$element.find("option").each(function (e) {
						var t = i.findLis().eq(i.liObj[e]);
						i.setDisabled(e, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, t), i.setSelected(e, this.selected, t)
					}), this.tabIndex();
					var n = this.$element.find("option").map(function () {
							if (this.selected) {
								if (i.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
								var e, t = C(this),
									n = t.data("icon") && i.options.showIcon ? '<i class="' + i.options.iconBase + " " + t.data("icon") + '"></i> ' : "";
								return e = i.options.showSubtext && t.data("subtext") && !i.multiple ? ' <small class="text-muted">' + t.data("subtext") + "</small>" : "", void 0 !== t.attr("title") ? t.attr("title") : t.data("content") && i.options.showContent ? t.data("content") : n + t.html() + e
							}
						}).toArray(),
						r = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
					if (this.multiple && -1 < this.options.selectedTextFormat.indexOf("count")) {
						var o = this.options.selectedTextFormat.split(">");
						if (1 < o.length && n.length > o[1] || 1 == o.length && 2 <= n.length) {
							t = this.options.hideDisabled ? ", [disabled]" : "";
							var s = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + t).length;
							r = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n.length, s) : this.options.countSelectedText).replace("{0}", n.length.toString()).replace("{1}", s.toString())
						}
					}
					this.options.title == undefined && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (r = this.options.title), r || (r = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", C.trim(r.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(r), this.$element.trigger("rendered.bs.select")
				},
				setStyle: function (e, t) {
					this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
					var n = e || this.options.style;
					"add" == t ? this.$button.addClass(n) : "remove" == t ? this.$button.removeClass(n) : (this.$button.removeClass(this.options.style), this.$button.addClass(n))
				},
				liHeight: function (e) {
					if (e || !1 !== this.options.size && !this.sizeInfo) {
						var t = document.createElement("div"),
							n = document.createElement("div"),
							i = document.createElement("ul"),
							r = document.createElement("li"),
							o = document.createElement("li"),
							s = document.createElement("a"),
							a = document.createElement("span"),
							l = this.options.header && 0 < this.$menu.find(".popover-title").length ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
							u = this.options.liveSearch ? document.createElement("div") : null,
							c = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
							d = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
						if (a.className = "text", t.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu open", i.className = "dropdown-menu inner", r.className = "divider", a.appendChild(document.createTextNode("Inner text")), s.appendChild(a), o.appendChild(s), i.appendChild(o), i.appendChild(r), l && n.appendChild(l), u) {
							var f = document.createElement("span");
							u.className = "bs-searchbox", f.className = "form-control", u.appendChild(f), n.appendChild(u)
						}
						c && n.appendChild(c),
							n.appendChild(i), d && n.appendChild(d), t.appendChild(n), document.body.appendChild(t);
						var h = s.offsetHeight,
							p = l ? l.offsetHeight : 0,
							m = u ? u.offsetHeight : 0,
							g = c ? c.offsetHeight : 0,
							v = d ? d.offsetHeight : 0,
							y = C(r).outerHeight(!0),
							b = "function" == typeof getComputedStyle && getComputedStyle(n),
							w = b ? null : C(n),
							x = parseInt(b ? b.paddingTop : w.css("paddingTop")) + parseInt(b ? b.paddingBottom : w.css("paddingBottom")) + parseInt(b ? b.borderTopWidth : w.css("borderTopWidth")) + parseInt(b ? b.borderBottomWidth : w.css("borderBottomWidth")),
							_ = x + parseInt(b ? b.marginTop : w.css("marginTop")) + parseInt(b ? b.marginBottom : w.css("marginBottom")) + 2;
						document.body.removeChild(t), this.sizeInfo = {
							liHeight: h,
							headerHeight: p,
							searchHeight: m,
							actionsHeight: g,
							doneButtonHeight: v,
							dividerHeight: y,
							menuPadding: x,
							menuExtras: _
						}
					}
				},
				setSize: function () {
					if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
						var o, s, a, l, u = this,
							c = this.$menu,
							d = this.$menuInner,
							e = C(window),
							t = this.$newElement[0].offsetHeight,
							f = this.sizeInfo.liHeight,
							h = this.sizeInfo.headerHeight,
							p = this.sizeInfo.searchHeight,
							m = this.sizeInfo.actionsHeight,
							g = this.sizeInfo.doneButtonHeight,
							n = this.sizeInfo.dividerHeight,
							v = this.sizeInfo.menuPadding,
							y = this.sizeInfo.menuExtras,
							i = this.options.hideDisabled ? ".disabled" : "",
							b = function () {
								a = u.$newElement.offset().top - e.scrollTop(), l = e.height() - a - t
							};
						if (b(), "auto" === this.options.size) {
							var r = function () {
								var e, t = function (t, n) {
										return function (e) {
											return n ? e.classList ? e.classList.contains(t) : C(e).hasClass(t) : !(e.classList ? e.classList.contains(t) : C(e).hasClass(t))
										}
									},
									n = u.$menuInner[0].getElementsByTagName("li"),
									i = Array.prototype.filter ? Array.prototype.filter.call(n, t("hidden", !1)) : u.$lis.not(".hidden"),
									r = Array.prototype.filter ? Array.prototype.filter.call(i, t("dropdown-header", !0)) : i.filter(".dropdown-header");
								b(), o = l - y, u.options.container ? (c.data("height") || c.data("height", c.height()), s = c.data("height")) : s = c.height(), u.options.dropupAuto && u.$newElement.toggleClass("dropup", l < a && o - y < s), u.$newElement.hasClass("dropup") && (o = a - y), e = 3 < i.length + r.length ? 3 * f + y - 2 : 0, c.css({
									"max-height": o + "px",
									overflow: "hidden",
									"min-height": e + h + p + m + g + "px"
								}), d.css({
									"max-height": o - h - p - m - g - v + "px",
									"overflow-y": "auto",
									"min-height": Math.max(e - v, 0) + "px"
								})
							};
							r(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", r), e.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", r)
						} else if (this.options.size && "auto" != this.options.size && this.$lis.not(i).length > this.options.size) {
							var w = this.$lis.not(".divider").not(i).children().slice(0, this.options.size).last().parent().index(),
								x = this.$lis.slice(0, w + 1).filter(".divider").length;
							o = f * this.options.size + x * n + v, u.options.container ? (c.data("height") || c.data("height", c.height()), s = c.data("height")) : s = c.height(), u.options.dropupAuto && this.$newElement.toggleClass("dropup", l < a && o - y < s), c.css({
								"max-height": o + h + p + m + g + "px",
								overflow: "hidden",
								"min-height": ""
							}), d.css({
								"max-height": o - v + "px",
								"overflow-y": "auto",
								"min-height": ""
							})
						}
					}
				},
				setWidth: function () {
					if ("auto" === this.options.width) {
						this.$menu.css("min-width", "0");
						var e = this.$menu.parent().clone().appendTo("body"),
							t = this.options.container ? this.$newElement.clone().appendTo("body") : e,
							n = e.children(".dropdown-menu").outerWidth(),
							i = t.css("width", "auto").children("button").outerWidth();
						e.remove(), t.remove(), this.$newElement.css("width", Math.max(n, i) + "px")
					} else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
					this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
				},
				selectPosition: function () {
					this.$bsContainer = C('<div class="bs-container" />');
					var t, n, i = this,
						r = function (e) {
							i.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", e.hasClass("dropup")), t = e.offset(), n = e.hasClass("dropup") ? 0 : e[0].offsetHeight, i.$bsContainer.css({
								top: t.top + n,
								left: t.left,
								width: e[0].offsetWidth
							})
						};
					this.$button.on("click", function () {
						var e = C(this);
						i.isDisabled() || (r(i.$newElement), i.$bsContainer.appendTo(i.options.container).toggleClass("open", !e.hasClass("open")).append(i.$menu))
					}), C(window).on("resize scroll", function () {
						r(i.$newElement)
					}), this.$element.on("hide.bs.select", function () {
						i.$menu.data("height", i.$menu.height()), i.$bsContainer.detach()
					})
				},
				setSelected: function (e, t, n) {
					n || (n = this.findLis().eq(this.liObj[e])), n.toggleClass("selected", t)
				},
				setDisabled: function (e, t, n) {
					n || (n = this.findLis().eq(this.liObj[e])), t ? n.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
				},
				isDisabled: function () {
					return this.$element[0].disabled
				},
				checkDisabled: function () {
					var e = this;
					this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function () {
						return !e.isDisabled()
					})
				},
				tabIndex: function () {
					this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
				},
				clickListener: function () {
					var y = this,
						t = C(document);
					this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function (e) {
						e.stopPropagation()
					}), t.data("spaceSelect", !1), this.$button.on("keyup", function (e) {
						/(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
					}), this.$button.on("click", function () {
						y.setSize()
					}), this.$element.on("shown.bs.select", function () {
						if (y.options.liveSearch || y.multiple) {
							if (!y.multiple) {
								var e = y.liObj[y.$element[0].selectedIndex];
								if ("number" != typeof e || !1 === y.options.size) return;
								var t = y.$lis.eq(e)[0].offsetTop - y.$menuInner[0].offsetTop;
								t = t - y.$menuInner[0].offsetHeight / 2 + y.sizeInfo.liHeight / 2, y.$menuInner[0].scrollTop = t
							}
						} else y.$menuInner.find(".selected a").focus()
					}), this.$menuInner.on("click", "li a", function (e) {
						var t = C(this),
							n = t.parent().data("originalIndex"),
							i = y.$element.val(),
							r = y.$element.prop("selectedIndex");
						if (y.multiple && e.stopPropagation(), e.preventDefault(), !y.isDisabled() && !t.parent().hasClass("disabled")) {
							var o = y.$element.find("option"),
								s = o.eq(n),
								a = s.prop("selected"),
								l = s.parent("optgroup"),
								u = y.options.maxOptions,
								c = l.data("maxOptions") || !1;
							if (y.multiple) {
								if (s.prop("selected", !a), y.setSelected(n, !a), t.blur(), !1 !== u || !1 !== c) {
									var d = u < o.filter(":selected").length,
										f = c < l.find("option:selected").length;
									if (u && d || c && f)
										if (u && 1 == u) o.prop("selected", !1), s.prop("selected", !0), y.$menuInner.find(".selected").removeClass("selected"), y.setSelected(n, !0);
										else if (c && 1 == c) {
										l.find("option:selected").prop("selected", !1), s.prop("selected", !0);
										var h = t.parent().data("optgroup");
										y.$menuInner.find('[data-optgroup="' + h + '"]').removeClass("selected"), y.setSelected(n, !0)
									} else {
										var p = "function" == typeof y.options.maxOptionsText ? y.options.maxOptionsText(u, c) : y.options.maxOptionsText,
											m = p[0].replace("{n}", u),
											g = p[1].replace("{n}", c),
											v = C('<div class="notify"></div>');
										p[2] && (m = m.replace("{var}", p[2][1 < u ? 0 : 1]), g = g.replace("{var}", p[2][1 < c ? 0 : 1])), s.prop("selected", !1), y.$menu.append(v), u && d && (v.append(C("<div>" + m + "</div>")), y.$element.trigger("maxReached.bs.select")), c && f && (v.append(C("<div>" + g + "</div>")), y.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function () {
											y.setSelected(n, !1)
										}, 10), v.delay(750).fadeOut(300, function () {
											C(this).remove()
										})
									}
								}
							} else o.prop("selected", !1), s.prop("selected", !0), y.$menuInner.find(".selected").removeClass("selected"), y.setSelected(n, !0);
							y.multiple ? y.options.liveSearch && y.$searchbox.focus() : y.$button.focus(), (i != y.$element.val() && y.multiple || r != y.$element.prop("selectedIndex") && !y.multiple) && y.$element.trigger("changed.bs.select", [n, s.prop("selected"), a]).triggerNative("change")
						}
					}), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function (e) {
						e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), y.options.liveSearch && !C(e.target).hasClass("close") ? y.$searchbox.focus() : y.$button.focus())
					}), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) {
						e.preventDefault(), e.stopPropagation(), y.options.liveSearch ? y.$searchbox.focus() : y.$button.focus()
					}), this.$menu.on("click", ".popover-title .close", function () {
						y.$button.click()
					}), this.$searchbox.on("click", function (e) {
						e.stopPropagation()
					}), this.$menu.on("click", ".actions-btn", function (e) {
						y.options.liveSearch ? y.$searchbox.focus() : y.$button.focus(), e.preventDefault(), e.stopPropagation(), C(this).hasClass("bs-select-all") ? y.selectAll() : y.deselectAll()
					}), this.$element.change(function () {
						y.render(!1)
					})
				},
				liveSearchListener: function () {
					var i = this,
						t = C('<li class="no-results"></li>');
					this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function () {
						i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), t.parent().length && t.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function () {
							i.$searchbox.focus()
						}, 10)
					}), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function (e) {
						e.stopPropagation()
					}), this.$searchbox.on("input propertychange", function () {
						if (i.$searchbox.val()) {
							var e = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
							(e = i.options.liveSearchNormalize ? e.not(":a" + i._searchStyle() + '("' + b(i.$searchbox.val()) + '")') : e.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")')).parent().addClass("hidden"), i.$lis.filter(".dropdown-header").each(function () {
								var e = C(this),
									t = e.data("optgroup");
								0 === i.$lis.filter("[data-optgroup=" + t + "]").not(e).not(".hidden").length && (e.addClass("hidden"), i.$lis.filter("[data-optgroup=" + t + "div]").addClass("hidden"))
							});
							var n = i.$lis.not(".hidden");
							n.each(function (e) {
								var t = C(this);
								t.hasClass("divider") && (t.index() === n.first().index() || t.index() === n.last().index() || n.eq(e + 1).hasClass("divider")) && t.addClass("hidden")
							}), i.$lis.not(".hidden, .no-results").length ? t.parent().length && t.remove() : (t.parent().length && t.remove(), t.html(i.options.noneResultsText.replace("{0}", '"' + l(i.$searchbox.val()) + '"')).show(), i.$menuInner.append(t))
						} else i.$lis.not(".is-hidden").removeClass("hidden"), t.parent().length && t.remove();
						i.$lis.filter(".active").removeClass("active"), i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), C(this).focus()
					})
				},
				_searchStyle: function () {
					return {
						begins: "ibegins",
						startsWith: "ibegins"
					}[this.options.liveSearchStyle] || "icontains"
				},
				val: function (e) {
					return void 0 !== e ? (this.$element.val(e), this.render(), this.$element) : this.$element.val()
				},
				changeAll: function (e) {
					void 0 === e && (e = !0), this.findLis();
					for (var t = this.$element.find("option"), n = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", e), i = n.length, r = [], o = 0; o < i; o++) {
						var s = n[o].getAttribute("data-original-index");
						r[r.length] = t.eq(s)[0]
					}
					C(r).prop("selected", e), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
				},
				selectAll: function () {
					return this.changeAll(!0)
				},
				deselectAll: function () {
					return this.changeAll(!1)
				},
				toggle: function (e) {
					(e = e || window.event) && e.stopPropagation(), this.$button.trigger("click")
				},
				keydown: function (e) {
					var t, n, i, r, o, s, a, l, u, c = C(this),
						d = c.is("input") ? c.parent().parent() : c.parent(),
						f = d.data("this"),
						h = ":not(.disabled, .hidden, .dropdown-header, .divider)",
						p = {
							32: " ",
							48: "0",
							49: "1",
							50: "2",
							51: "3",
							52: "4",
							53: "5",
							54: "6",
							55: "7",
							56: "8",
							57: "9",
							59: ";",
							65: "a",
							66: "b",
							67: "c",
							68: "d",
							69: "e",
							70: "f",
							71: "g",
							72: "h",
							73: "i",
							74: "j",
							75: "k",
							76: "l",
							77: "m",
							78: "n",
							79: "o",
							80: "p",
							81: "q",
							82: "r",
							83: "s",
							84: "t",
							85: "u",
							86: "v",
							87: "w",
							88: "x",
							89: "y",
							90: "z",
							96: "0",
							97: "1",
							98: "2",
							99: "3",
							100: "4",
							101: "5",
							102: "6",
							103: "7",
							104: "8",
							105: "9"
						};
					if (f.options.liveSearch && (d = c.parent().parent()), f.options.container && (d = f.$menu), t = C("[role=menu] li", d), !(u = f.$newElement.hasClass("open")) && (48 <= e.keyCode && e.keyCode <= 57 || 96 <= e.keyCode && e.keyCode <= 105 || 65 <= e.keyCode && e.keyCode <= 90) && (f.options.container ? f.$button.trigger("click") : (f.setSize(), f.$menu.parent().addClass("open"), u = !0), f.$searchbox.focus()), f.options.liveSearch && (/(^9$|27)/.test(e.keyCode.toString(10)) && u && 0 === f.$menu.find(".active").length && (e.preventDefault(), f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus()), t = C("[role=menu] li" + h, d), c.val() || /(38|40)/.test(e.keyCode.toString(10)) || 0 === t.filter(".active").length && (t = f.$menuInner.find("li"), t = f.options.liveSearchNormalize ? t.filter(":a" + f._searchStyle() + "(" + b(p[e.keyCode]) + ")") : t.filter(":" + f._searchStyle() + "(" + p[e.keyCode] + ")"))), t.length) {
						if (/(38|40)/.test(e.keyCode.toString(10))) n = t.index(t.find("a").filter(":focus").parent()), r = t.filter(h).first().index(), o = t.filter(h).last().index(), i = t.eq(n).nextAll(h).eq(0).index(), s = t.eq(n).prevAll(h).eq(0).index(), a = t.eq(i).prevAll(h).eq(0).index(), f.options.liveSearch && (t.each(function (e) {
							C(this).hasClass("disabled") || C(this).data("index", e)
						}), n = t.index(t.filter(".active")), r = t.first().data("index"), o = t.last().data("index"), i = t.eq(n).nextAll().eq(0).data("index"), s = t.eq(n).prevAll().eq(0).data("index"), a = t.eq(i).prevAll().eq(0).data("index")), l = c.data("prevIndex"), 38 == e.keyCode ? (f.options.liveSearch && n--, n != a && s < n && (n = s), n < r && (n = r), n == l && (n = o)) : 40 == e.keyCode && (f.options.liveSearch && n++, -1 == n && (n = 0), n != a && n < i && (n = i), o < n && (n = o), n == l && (n = r)), c.data("prevIndex", n), f.options.liveSearch ? (e.preventDefault(), c.hasClass("dropdown-toggle") || (t.removeClass("active").eq(n).addClass("active").children("a").focus(), c.focus())) : t.eq(n).children("a").focus();
						else if (!c.is("input")) {
							var m, g = [];
							t.each(function () {
								C(this).hasClass("disabled") || C.trim(C(this).children("a").text().toLowerCase()).substring(0, 1) == p[e.keyCode] && g.push(C(this).index())
							}), m = C(document).data("keycount"), m++, C(document).data("keycount", m), C.trim(C(":focus").text().toLowerCase()).substring(0, 1) != p[e.keyCode] ? (m = 1, C(document).data("keycount", m)) : m >= g.length && (C(document).data("keycount", 0), m > g.length && (m = 1)), t.eq(g[m - 1]).children("a").focus()
						}
						if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && f.options.selectOnTab) && u) {
							if (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), f.options.liveSearch) /(32)/.test(e.keyCode.toString(10)) || (f.$menuInner.find(".active a").click(), c.focus());
							else {
								var v = C(":focus");
								v.click(), v.focus(), e.preventDefault(), C(document).data("spaceSelect", !0)
							}
							C(document).data("keycount", 0)
						}(/(^9$|27)/.test(e.keyCode.toString(10)) && u && (f.multiple || f.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !u) && (f.$menu.parent().removeClass("open"), f.options.container && f.$newElement.removeClass("open"), f.$button.focus())
					}
				},
				mobile: function () {
					this.$element.addClass("mobile-device")
				},
				refresh: function () {
					this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
				},
				hide: function () {
					this.$newElement.hide()
				},
				show: function () {
					this.$newElement.show()
				},
				remove: function () {
					this.$newElement.remove(), this.$element.remove()
				},
				destroy: function () {
					this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
				}
			};
			var o = C.fn.selectpicker;
			C.fn.selectpicker = t, C.fn.selectpicker.Constructor = f, C.fn.selectpicker.noConflict = function () {
				return C.fn.selectpicker = o, this
			}, C(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', f.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function (e) {
				e.stopPropagation()
			}), C(window).on("load.bs.select.data-api", function () {
				C(".selectpicker").each(function () {
					var e = C(this);
					t.call(e, e.data())
				})
			})
		}(e)
	}),
	function (a) {
		"use strict";

		function o(n) {
			a(e).remove(), a(u).each(function () {
				var e = l(a(this)),
					t = {
						relatedTarget: this
					};
				e.hasClass("open") && (e.trigger(n = a.Event("hide.bs.dropdown", t)), n.isDefaultPrevented() || e.removeClass("open").trigger("hidden.bs.dropdown", t))
			})
		}

		function l(e) {
			var t = e.attr("data-target");
			t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
			var n = t && a(t);
			return n && n.length ? n : e.parent()
		}
		var e = ".dropdown-backdrop",
			u = "[data-toggle=dropdown]",
			i = function (e) {
				a(e).on("click.bs.dropdown", this.toggle)
			};
		i.prototype.toggle = function (e) {
			var t = a(this);
			if (!t.is(".disabled, :disabled")) {
				var n = l(t),
					i = n.hasClass("open");
				if (o(), !i) {
					"ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", o);
					var r = {
						relatedTarget: this
					};
					if (n.trigger(e = a.Event("show.bs.dropdown", r)), e.isDefaultPrevented()) return;
					n.toggleClass("open").trigger("shown.bs.dropdown", r), t.focus()
				}
				return !1
			}
		}, i.prototype.keydown = function (e) {
			if (/(38|40|27)/.test(e.keyCode)) {
				var t = a(this);
				if (e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled")) {
					var n = l(t),
						i = n.hasClass("open");
					if (!i || i && 27 == e.keyCode) return 27 == e.which && n.find(u).focus(), t.click();
					var r = " li:not(.divider):visible a",
						o = n.find("[role=menu]" + r + ", [role=listbox]" + r);
					if (o.length) {
						var s = o.index(o.filter(":focus"));
						38 == e.keyCode && 0 < s && s--, 40 == e.keyCode && s < o.length - 1 && s++, ~s || (s = 0), o.eq(s).focus()
					}
				}
			}
		};
		var t = a.fn.dropdown;
		a.fn.dropdown = function (n) {
			return this.each(function () {
				var e = a(this),
					t = e.data("bs.dropdown");
				t || e.data("bs.dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
			})
		}, a.fn.dropdown.Constructor = i, a.fn.dropdown.noConflict = function () {
			return a.fn.dropdown = t, this
		}, a(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
			e.stopPropagation()
		}).on("click.bs.dropdown.data-api", u, i.prototype.toggle).on("keydown.bs.dropdown.data-api", u + ", [role=menu], [role=listbox]", i.prototype.keydown)
	}(jQuery),
	function (l, u) {
		"use strict";
		var c;
		l.rails !== u && l.error("jquery-ujs has already been loaded!");
		var e = l(document);
		l.rails = c = {
			linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
			buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
			inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
			formSubmitSelector: "form",
			formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
			disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
			enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
			requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
			fileInputSelector: "input[type=file]:not([disabled])",
			linkDisableSelector: "a[data-disable-with], a[data-disable]",
			buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
			csrfToken: function () {
				return l("meta[name=csrf-token]").attr("content")
			},
			csrfParam: function () {
				return l("meta[name=csrf-param]").attr("content")
			},
			CSRFProtection: function (e) {
				var t = c.csrfToken();
				t && e.setRequestHeader("X-CSRF-Token", t)
			},
			refreshCSRFTokens: function () {
				l('form input[name="' + c.csrfParam() + '"]').val(c.csrfToken())
			},
			fire: function (e, t, n) {
				var i = l.Event(t);
				return e.trigger(i, n), !1 !== i.result
			},
			confirm: function (e) {
				return confirm(e)
			},
			ajax: function (e) {
				return l.ajax(e)
			},
			href: function (e) {
				return e[0].href
			},
			isRemote: function (e) {
				return e.data("remote") !== u && !1 !== e.data("remote")
			},
			handleRemote: function (i) {
				var e, t, n, r, o, s;
				if (c.fire(i, "ajax:before")) {
					if (r = i.data("with-credentials") || null, o = i.data("type") || l.ajaxSettings && l.ajaxSettings.dataType, i.is("form")) {
						e = i.data("ujs:submit-button-formmethod") || i.attr("method"), t = i.data("ujs:submit-button-formaction") || i.attr("action"), n = l(i[0].elements).serializeArray();
						var a = i.data("ujs:submit-button");
						a && (n.push(a), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
					} else i.is(c.inputChangeSelector) ? (e = i.data("method"), t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(c.buttonClickSelector) ? (e = i.data("method") || "get", t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"), t = c.href(i), n = i.data("params") || null);
					return s = {
						type: e || "GET",
						data: n,
						dataType: o,
						beforeSend: function (e, t) {
							if (t.dataType === u && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), !c.fire(i, "ajax:beforeSend", [e, t])) return !1;
							i.trigger("ajax:send", e)
						},
						success: function (e, t, n) {
							i.trigger("ajax:success", [e, t, n])
						},
						complete: function (e, t) {
							i.trigger("ajax:complete", [e, t])
						},
						error: function (e, t, n) {
							i.trigger("ajax:error", [e, t, n])
						},
						crossDomain: c.isCrossDomain(t)
					}, r && (s.xhrFields = {
						withCredentials: r
					}), t && (s.url = t), c.ajax(s)
				}
				return !1
			},
			isCrossDomain: function (e) {
				var t = document.createElement("a");
				t.href = location.href;
				var n = document.createElement("a");
				try {
					return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
				} catch (i) {
					return !0
				}
			},
			handleMethod: function (e) {
				var t = c.href(e),
					n = e.data("method"),
					i = e.attr("target"),
					r = c.csrfToken(),
					o = c.csrfParam(),
					s = l('<form method="post" action="' + t + '"></form>'),
					a = '<input name="_method" value="' + n + '" type="hidden" />';
				o === u || r === u || c.isCrossDomain(t) || (a += '<input name="' + o + '" value="' + r + '" type="hidden" />'), i && s.attr("target", i), s.hide().append(a).appendTo("body"), s.submit()
			},
			formElements: function (e, t) {
				return e.is("form") ? l(e[0].elements).filter(t) : e.find(t)
			},
			disableFormElements: function (e) {
				c.formElements(e, c.disableSelector).each(function () {
					c.disableFormElement(l(this))
				})
			},
			disableFormElement: function (e) {
				var t, n;
				t = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== u && (e.data("ujs:enable-with", e[t]()), e[t](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
			},
			enableFormElements: function (e) {
				c.formElements(e, c.enableSelector).each(function () {
					c.enableFormElement(l(this))
				})
			},
			enableFormElement: function (e) {
				var t = e.is("button") ? "html" : "val";
				e.data("ujs:enable-with") !== u && (e[t](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
			},
			allowAction: function (e) {
				var t, n = e.data("confirm"),
					i = !1;
				if (!n) return !0;
				if (c.fire(e, "confirm")) {
					try {
						i = c.confirm(n)
					} catch (r) {
						(console.error || console.log).call(console, r.stack || r)
					}
					t = c.fire(e, "confirm:complete", [i])
				}
				return i && t
			},
			blankInputs: function (e, t, n) {
				var i, r = l(),
					o = t || "input,textarea",
					s = e.find(o);
				return s.each(function () {
					if (i = l(this), (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n) {
						if (i.is("input[type=radio]") && s.filter('input[type=radio]:checked[name="' + i.attr("name") + '"]').length) return !0;
						r = r.add(i)
					}
				}), !!r.length && r
			},
			nonBlankInputs: function (e, t) {
				return c.blankInputs(e, t, !0)
			},
			stopEverything: function (e) {
				return l(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
			},
			disableElement: function (e) {
				var t = e.data("disable-with");
				t !== u && (e.data("ujs:enable-with", e.html()), e.html(t)), e.bind("click.railsDisable", function (e) {
					return c.stopEverything(e)
				}), e.data("ujs:disabled", !0)
			},
			enableElement: function (e) {
				e.data("ujs:enable-with") !== u && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
			}
		}, c.fire(e, "rails:attachBindings") && (l.ajaxPrefilter(function (e, t, n) {
			e.crossDomain || c.CSRFProtection(n)
		}), l(window).on("pageshow.rails", function () {
			l(l.rails.enableSelector).each(function () {
				var e = l(this);
				e.data("ujs:disabled") && l.rails.enableFormElement(e)
			}), l(l.rails.linkDisableSelector).each(function () {
				var e = l(this);
				e.data("ujs:disabled") && l.rails.enableElement(e)
			})
		}), e.delegate(c.linkDisableSelector, "ajax:complete", function () {
			c.enableElement(l(this))
		}), e.delegate(c.buttonDisableSelector, "ajax:complete", function () {
			c.enableFormElement(l(this))
		}), e.delegate(c.linkClickSelector, "click.rails", function (e) {
			var t = l(this),
				n = t.data("method"),
				i = t.data("params"),
				r = e.metaKey || e.ctrlKey;
			if (!c.allowAction(t)) return c.stopEverything(e);
			if (!r && t.is(c.linkDisableSelector) && c.disableElement(t), c.isRemote(t)) {
				if (r && (!n || "GET" === n) && !i) return !0;
				var o = c.handleRemote(t);
				return !1 === o ? c.enableElement(t) : o.fail(function () {
					c.enableElement(t)
				}), !1
			}
			return n ? (c.handleMethod(t), !1) : void 0
		}), e.delegate(c.buttonClickSelector, "click.rails", function (e) {
			var t = l(this);
			if (!c.allowAction(t) || !c.isRemote(t)) return c.stopEverything(e);
			t.is(c.buttonDisableSelector) && c.disableFormElement(t);
			var n = c.handleRemote(t);
			return !1 === n ? c.enableFormElement(t) : n.fail(function () {
				c.enableFormElement(t)
			}), !1
		}), e.delegate(c.inputChangeSelector, "change.rails", function (e) {
			var t = l(this);
			return c.allowAction(t) && c.isRemote(t) ? (c.handleRemote(t), !1) : c.stopEverything(e)
		}), e.delegate(c.formSubmitSelector, "submit.rails", function (e) {
			var t, n, i = l(this),
				r = c.isRemote(i);
			if (!c.allowAction(i)) return c.stopEverything(e);
			if (i.attr("novalidate") === u)
				if (i.data("ujs:formnovalidate-button") === u) {
					if ((t = c.blankInputs(i, c.requiredInputSelector, !1)) && c.fire(i, "ajax:aborted:required", [t])) return c.stopEverything(e)
				} else i.data("ujs:formnovalidate-button", u);
			if (r) {
				if (n = c.nonBlankInputs(i, c.fileInputSelector)) {
					setTimeout(function () {
						c.disableFormElements(i)
					}, 13);
					var o = c.fire(i, "ajax:aborted:file", [n]);
					return o || setTimeout(function () {
						c.enableFormElements(i)
					}, 13), o
				}
				return c.handleRemote(i), !1
			}
			setTimeout(function () {
				c.disableFormElements(i)
			}, 13)
		}), e.delegate(c.formInputClickSelector, "click.rails", function (e) {
			var t = l(this);
			if (!c.allowAction(t)) return c.stopEverything(e);
			var n = t.attr("name"),
				i = n ? {
					name: n,
					value: t.val()
				} : null,
				r = t.closest("form");
			0 === r.length && (r = l("#" + t.attr("form"))), r.data("ujs:submit-button", i), r.data("ujs:formnovalidate-button", t.attr("formnovalidate")), r.data("ujs:submit-button-formaction", t.attr("formaction")), r.data("ujs:submit-button-formmethod", t.attr("formmethod"))
		}), e.delegate(c.formSubmitSelector, "ajax:send.rails", function (e) {
			this === e.target && c.disableFormElements(l(this))
		}), e.delegate(c.formSubmitSelector, "ajax:complete.rails", function (e) {
			this === e.target && c.enableFormElements(l(this))
		}), l(function () {
			c.refreshCSRFTokens()
		}))
	}(jQuery),
	function (c) {
		c(function () {
			c(document).on("click", "[data-reveal-id]", function (e) {
				e.preventDefault();
				var t = c(this).attr("data-reveal-id");
				c("#" + t).reveal(c(this).data())
			})
		}), c.fn.reveal = function (u) {
			var e = {
				animation: "fadeAndPop",
				animationSpeed: 300,
				closeOnBackgroundClick: !0,
				dismissModalClass: "close-reveal-modal"
			};
			return u = c.extend({}, e, u), this.each(function () {
				function e() {
					l.unbind("click.modalEvent"), c("." + u.dismissModalClass).unbind("click.modalEvent"), a || (i(), r = (c(window).height() - s) / 2, "fadeAndPop" != u.animation && "fade" != u.animation || o.addClass("reveal-modal_opening"), "fadeAndPop" == u.animation && (o.css({
						top: 0 - s,
						opacity: 0,
						visibility: "visible"
					}), l.fadeIn(u.animationSpeed / 2), o.delay(u.animationSpeed / 2).animate({
						top: r + "px",
						opacity: 1
					}, u.animationSpeed, function () {
						n(), o.removeClass("reveal-modal_opening").addClass("reveal-modal_opened")
					})), "fade" == u.animation && (o.css({
						opacity: 0,
						visibility: "visible",
						top: r
					}), l.fadeIn(u.animationSpeed / 2), o.delay(u.animationSpeed / 2).animate({
						opacity: 1
					}, u.animationSpeed, function () {
						n(), o.removeClass("reveal-modal_opening").addClass("reveal-modal_opened")
					})), "none" == u.animation && (o.css({
						visibility: "visible",
						top: r
					}), l.css({
						display: "block"
					}), n(), o.addClass("reveal-modal_opened"))), o.unbind("reveal:open", e)
				}

				function t() {
					if (a) return !1;
					i(), r = (c(window).height() - s) / 2, "fadeAndPop" != u.animation && "fade" != u.animation || o.addClass("reveal-modal_closing"), "fadeAndPop" == u.animation && (l.delay(u.animationSpeed).fadeOut(u.animationSpeed), o.animate({
						top: 0 - s + "px",
						opacity: 0
					}, u.animationSpeed / 2, function () {
						o.css({
							top: r,
							opacity: 1,
							visibility: "hidden"
						}), n(), o.removeClass("reveal-modal_opened reveal-modal_closing")
					})), "fade" == u.animation && (l.delay(u.animationSpeed).fadeOut(u.animationSpeed), o.animate({
						opacity: 0
					}, u.animationSpeed, function () {
						o.css({
							opacity: 1,
							visibility: "hidden",
							top: r
						}), n(), o.removeClass("reveal-modal_opened reveal-modal_closing")
					})), "none" == u.animation && (o.css({
						visibility: "hidden",
						top: r
					}), l.css({
						display: "none"
					}), o.removeClass("reveal-modal_opened")), o.unbind("reveal:close", t)
				}

				function n() {
					a = !1
				}

				function i() {
					a = !0
				}
				var r, o = c(this),
					s = o.height(),
					a = !1,
					l = c(".reveal-modal-bg");
				0 == l.length && (l = c('<div class="reveal-modal-bg" />').insertAfter(o)).fadeTo("fast", .8), o.bind("reveal:open", e), o.bind("reveal:close", t), o.trigger("reveal:open");
				c("." + u.dismissModalClass).bind("click.modalEvent", function () {
					o.trigger("reveal:close")
				});
				u.closeOnBackgroundClick && (l.css({
					cursor: "pointer"
				}), l.bind("click.modalEvent", function () {
					o.trigger("reveal:close")
				})), c("body").keyup(function (e) {
					27 === e.which && o.trigger("reveal:close")
				})
			})
		}
	}(jQuery),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
	}(function (E) {
		var T, e = navigator.userAgent,
			$ = /iphone/i.test(e),
			D = /chrome/i.test(e),
			I = /android/i.test(e);
		E.mask = {
			definitions: {
				9: "[0-9]",
				a: "[A-Za-z]",
				"*": "[A-Za-z0-9]"
			},
			autoclear: !0,
			dataName: "rawMaskFn",
			placeholder: "_"
		}, E.fn.extend({
			caret: function (e, t) {
				var n;
				if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
					this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
				})) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
					begin: e,
					end: t
				})
			},
			unmask: function () {
				return this.trigger("unmask")
			},
			mask: function (i, b) {
				var r, w, x, _, C, S, k;
				if (!i && 0 < this.length) {
					var e = E(this[0]).data(E.mask.dataName);
					return e ? e() : void 0
				}
				return b = E.extend({
					autoclear: E.mask.autoclear,
					placeholder: E.mask.placeholder,
					completed: null
				}, b), r = E.mask.definitions, w = [], x = S = i.length, _ = null, E.each(i.split(""), function (e, t) {
					"?" == t ? (S--, x = e) : r[t] ? (w.push(new RegExp(r[t])), null === _ && (_ = w.length - 1), e < x && (C = w.length - 1)) : w.push(null)
				}), this.trigger("unmask").each(function () {
					function s() {
						if (b.completed) {
							for (var e = _; e <= C; e++)
								if (w[e] && g[e] === a(e)) return;
							b.completed.call(m)
						}
					}

					function a(e) {
						return b.placeholder.charAt(e < b.placeholder.length ? e : 0)
					}

					function l(e) {
						for (; ++e < S && !w[e];);
						return e
					}

					function o(e) {
						for (; 0 <= --e && !w[e];);
						return e
					}

					function u(e, t) {
						var n, i;
						if (!(e < 0)) {
							for (n = e, i = l(t); n < S; n++)
								if (w[n]) {
									if (!(i < S && w[n].test(g[i]))) break;
									g[n] = g[i], g[i] = a(i), i = l(i)
								}
							h(), m.caret(Math.max(_, e))
						}
					}

					function c(e) {
						var t, n, i, r;
						for (n = a(t = e); t < S; t++)
							if (w[t]) {
								if (i = l(t), r = g[t], g[t] = n, !(i < S && w[i].test(r))) break;
								n = r
							}
					}

					function e() {
						var e = m.val(),
							t = m.caret();
						if (k && k.length && k.length > e.length) {
							for (p(!0); 0 < t.begin && !w[t.begin - 1];) t.begin--;
							if (0 === t.begin)
								for (; t.begin < _ && !w[t.begin];) t.begin++;
							m.caret(t.begin, t.begin)
						} else {
							for (p(!0); t.begin < S && !w[t.begin];) t.begin++;
							m.caret(t.begin, t.begin)
						}
						s()
					}

					function d() {
						p(), m.val() != y && m.change()
					}

					function t(e) {
						if (!m.prop("readonly")) {
							var t, n, i, r = e.which || e.keyCode;
							k = m.val(), 8 === r || 46 === r || $ && 127 === r ? (n = (t = m.caret()).begin, (i = t.end) - n == 0 && (n = 46 !== r ? o(n) : i = l(n - 1), i = 46 === r ? l(i) : i), f(n, i), u(n, i - 1), e.preventDefault()) : 13 === r ? d.call(this, e) : 27 === r && (m.val(y), m.caret(0, p()), e.preventDefault())
						}
					}

					function n(e) {
						if (!m.prop("readonly")) {
							var t, n, i, r = e.which || e.keyCode,
								o = m.caret();
							if (!(e.ctrlKey || e.altKey || e.metaKey || r < 32) && r && 13 !== r) {
								if (o.end - o.begin != 0 && (f(o.begin, o.end), u(o.begin, o.end - 1)), (t = l(o.begin - 1)) < S && (n = String.fromCharCode(r), w[t].test(n))) {
									if (c(t), g[t] = n, h(), i = l(t), I) setTimeout(function () {
										E.proxy(E.fn.caret, m, i)()
									}, 0);
									else m.caret(i);
									o.begin <= C && s()
								}
								e.preventDefault()
							}
						}
					}

					function f(e, t) {
						var n;
						for (n = e; n < t && n < S; n++) w[n] && (g[n] = a(n))
					}

					function h() {
						m.val(g.join(""))
					}

					function p(e) {
						var t, n, i, r = m.val(),
							o = -1;
						for (i = t = 0; t < S; t++)
							if (w[t]) {
								for (g[t] = a(t); i++ < r.length;)
									if (
										n = r.charAt(i - 1), w[t].test(n)) {
										g[t] = n, o = t;
										break
									}
								if (i > r.length) {
									f(t + 1, S);
									break
								}
							} else g[t] === r.charAt(i) && i++, t < x && (o = t);
						return e ? h() : o + 1 < x ? b.autoclear || g.join("") === v ? (m.val() && m.val(""), f(0, S)) : h() : (h(), m.val(m.val().substring(0, o + 1))), x ? t : _
					}
					var m = E(this),
						g = E.map(i.split(""), function (e, t) {
							return "?" != e ? r[e] ? a(t) : e : void 0
						}),
						v = g.join(""),
						y = m.val();
					m.data(E.mask.dataName, function () {
						return E.map(g, function (e, t) {
							return w[t] && e != a(t) ? e : null
						}).join("")
					}), m.one("unmask", function () {
						m.off(".mask").removeData(E.mask.dataName)
					}).on("focus.mask", function () {
						var e;
						m.prop("readonly") || (clearTimeout(T), y = m.val(), e = p(), T = setTimeout(function () {
							m.get(0) === document.activeElement && (h(), e == i.replace("?", "").length ? m.caret(0, e) : m.caret(e))
						}, 10))
					}).on("blur.mask", d).on("keydown.mask", t).on("keypress.mask", n).on("input.mask paste.mask", function () {
						m.prop("readonly") || setTimeout(function () {
							var e = p(!0);
							m.caret(e), s()
						}, 0)
					}), D && I && m.off("input.mask").on("input.mask", e), p()
				})
			}
		})
	}),
	function (e, t) {
		"function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.VMasker = t()
	}(this, function () {
		var d = "9",
			f = "A",
			h = "S",
			i = [9, 16, 17, 18, 36, 37, 38, 39, 40, 91, 92, 93],
			o = function (e) {
				for (var t = 0, n = i.length; t < n; t++)
					if (e == i[t]) return !1;
				return !0
			},
			y = function (e) {
				return (e = {
					precision: (e = e || {}).hasOwnProperty("precision") ? e.precision : 2,
					separator: e.separator || ",",
					delimiter: e.delimiter || ".",
					unit: e.unit && e.unit.replace(/[\s]/g, "") + " " || "",
					suffixUnit: e.suffixUnit && " " + e.suffixUnit.replace(/[\s]/g, "") || "",
					zeroCents: e.zeroCents,
					lastOutput: e.lastOutput
				}).moneyPrecision = e.zeroCents ? 0 : e.precision, e
			},
			p = function (e, t, n) {
				for (; t < e.length; t++) e[t] !== d && e[t] !== f && e[t] !== h || (e[t] = n);
				return e
			},
			n = function (e) {
				this.elements = e
			};
		n.prototype.unbindElementToMask = function () {
			for (var e = 0, t = this.elements.length; e < t; e++) this.elements[e].lastOutput = "", this.elements[e].onkeyup = !1, this.elements[e].onkeydown = !1, this.elements[e].value.length && (this.elements[e].value = this.elements[e].value.replace(/\D/g, ""))
		}, n.prototype.bindElementToMask = function (n) {
			for (var i = this, e = function (e) {
					var t = (e = e || window.event).target || e.srcElement;
					o(e.keyCode) && setTimeout(function () {
						i.opts.lastOutput = t.lastOutput, t.value = s[n](t.value, i.opts), t.lastOutput = t.value, t.setSelectionRange && i.opts.suffixUnit && t.setSelectionRange(t.value.length, t.value.length - i.opts.suffixUnit.length)
					}, 0)
				}, t = 0, r = this.elements.length; t < r; t++) this.elements[t].lastOutput = "", this.elements[t].onkeyup = e, this.elements[t].value.length && (this.elements[t].value = s[n](this.elements[t].value, this.opts))
		}, n.prototype.maskMoney = function (e) {
			this.opts = y(e), this.bindElementToMask("toMoney")
		}, n.prototype.maskNumber = function () {
			this.opts = {}, this.bindElementToMask("toNumber")
		}, n.prototype.maskAlphaNum = function () {
			this.opts = {}, this.bindElementToMask("toAlphaNumeric")
		}, n.prototype.maskPattern = function (e) {
			this.opts = {
				pattern: e
			}, this.bindElementToMask("toPattern")
		}, n.prototype.unMask = function () {
			this.unbindElementToMask()
		};
		var s = function (e) {
			if (!e) throw new Error("VanillaMasker: There is no element to bind.");
			var t = "length" in e ? e.length ? e : [] : [e];
			return new n(t)
		};
		return s.toMoney = function (e, t) {
			if ((t = y(t)).zeroCents) {
				t.lastOutput = t.lastOutput || "";
				var n = "(" + t.separator + "[0]{0," + t.precision + "})",
					i = new RegExp(n, "g"),
					r = e.toString().replace(/[\D]/g, "").length || 0,
					o = t.lastOutput.toString().replace(/[\D]/g, "").length || 0;
				e = e.toString().replace(i, ""), r < o && (e = e.slice(0, e.length - 1))
			}
			for (var s = e.toString().replace(/[\D]/g, ""), a = new RegExp("^(0|\\" + t.delimiter + ")"), l = new RegExp("(\\" + t.separator + ")$"), u = s.substr(0, s.length - t.moneyPrecision), c = u.substr(0, u.length % 3), d = new Array(t.precision + 1).join("0"), f = 0, h = (u = u.substr(u.length % 3, u.length)).length; f < h; f++) f % 3 == 0 && (c += t.delimiter), c += u[f];
			if (c = (c = c.replace(a, "")).length ? c : "0", !t.zeroCents) {
				var p = s.length - t.precision,
					m = s.substr(p, t.precision),
					g = m.length,
					v = t.precision > g ? t.precision : g;
				d = (d + m).slice(-v)
			}
			return (t.unit + c + t.separator + d + t.suffixUnit).replace(l, "")
		}, s.toPattern = function (e, t) {
			var n, i = "object" == typeof t ? t.pattern : t,
				r = i.replace(/\W/g, ""),
				o = i.split(""),
				s = e.toString().replace(/\W/g, ""),
				a = s.replace(/\W/g, ""),
				l = 0,
				u = o.length,
				c = "object" == typeof t ? t.placeholder : undefined;
			for (n = 0; n < u; n++) {
				if (l >= s.length) {
					if (r.length == a.length) return o.join("");
					if (c !== undefined && r.length > a.length) return p(o, n, c).join("");
					break
				}
				if (o[n] === d && s[l].match(/[0-9]/) || o[n] === f && s[l].match(/[a-zA-Z]/) || o[n] === h && s[l].match(/[0-9a-zA-Z]/)) o[n] = s[l++];
				else if (o[n] === d || o[n] === f || o[n] === h) return c !== undefined ? p(o, n, c).join("") : o.slice(0, n).join("")
			}
			return o.join("").substr(0, n)
		}, s.toNumber = function (e) {
			return e.toString().replace(/(?!^-)[^0-9]/g, "")
		}, s.toAlphaNumeric = function (e) {
			return e.toString().replace(/[^a-z0-9 ]+/i, "")
		}, s
	}),
	function (e) {
		"use strict";
		"function" == typeof define && define.amd ? define(e) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e() : "undefined" != typeof Package ? Sortable = e() : window.Sortable = e()
	}(function () {
		"use strict";

		function o(e, t) {
			if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(e);
			this.el = e, this.options = t = a({}, t), e[R] = this;
			var n = {
				group: Math.random(),
				sort: !0,
				disabled: !1,
				store: null,
				handle: null,
				scroll: !0,
				scrollSensitivity: 30,
				scrollSpeed: 10,
				draggable: /[uo]l/i.test(e.nodeName) ? "li" : ">*",
				ghostClass: "sortable-ghost",
				chosenClass: "sortable-chosen",
				ignore: "a, img",
				filter: null,
				animation: 0,
				setData: function (e, t) {
					e.setData("Text", t.textContent)
				},
				dropBubble: !1,
				dragoverBubble: !1,
				dataIdAttr: "data-id",
				delay: 0,
				forceFallback: !1,
				fallbackClass: "sortable-fallback",
				fallbackOnBody: !1
			};
			for (var i in n) !(i in t) && (t[i] = n[i]);
			for (var r in Q(t), this) "_" === r.charAt(0) && (this[r] = this[r].bind(this));
			this.nativeDraggable = !t.forceFallback && B, l(e, "mousedown", this._onTapStart), l(e, "touchstart", this._onTapStart), this.nativeDraggable && (l(e, "dragover", this), l(e, "dragenter", this)), X.push(this._onDragOver), t.store && this.sort(t.store.get(this))
		}

		function _(e) {
			P && P.state !== e && (S(P, "display", e ? "none" : ""), !e && P.state && j.insertBefore(P, $), P.state = e)
		}

		function C(e, t, n) {
			if (e) {
				n = n || q;
				var i = (t = t.split(".")).shift().toUpperCase(),
					r = new RegExp("\\s(" + t.join("|") + ")(?=\\s)", "g");
				do {
					if (">*" === i && e.parentNode === n || ("" === i || e.nodeName.toUpperCase() == i) && (!t.length || ((" " + e.className + " ").match(r) || []).length == t.length)) return e
				} while (e !== n && (e = e.parentNode))
			}
			return null
		}

		function n(e) {
			e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.preventDefault()
		}

		function l(e, t, n) {
			e.addEventListener(t, n, !1)
		}

		function i(e, t, n) {
			e.removeEventListener(t, n, !1)
		}

		function u(e, t, n) {
			if (e)
				if (e.classList) e.classList[n ? "add" : "remove"](t);
				else {
					var i = (" " + e.className + " ").replace(w, " ").replace(" " + t + " ", " ");
					e.className = (i + (n ? " " + t : "")).replace(w, " ")
				}
		}

		function S(e, t, n) {
			var i = e && e.style;
			if (i) {
				if (void 0 === n) return q.defaultView && q.defaultView.getComputedStyle ? n = q.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
				t in i || (t = "-webkit-" + t), i[t] = n + ("string" == typeof n ? "" : "px")
			}
		}

		function c(e, t, n) {
			if (e) {
				var i = e.getElementsByTagName(t),
					r = 0,
					o = i.length;
				if (n)
					for (; r < o; r++) n(i[r], r);
				return i
			}
			return []
		}

		function d(e, t, n, i, r, o, s) {
			var a = q.createEvent("Event"),
				l = (e || t[R]).options,
				u = "on" + n.charAt(0).toUpperCase() + n.substr(1);
			a.initEvent(n, !0, !0), a.to = t, a.from = r || t, a.item = i || t, a.clone = P, a.oldIndex = o, a.newIndex = s, t.dispatchEvent(a), l[u] && l[u].call(e, a)
		}

		function k(e, t, n, i, r, o) {
			var s, a, l = e[R],
				u = l.options.onMove;
			return (s = q.createEvent("Event")).initEvent("move", !0, !0), s.to = t, s.from = e, s.dragged = n, s.draggedRect = i, s.related = r || t, s.relatedRect = o || t.getBoundingClientRect(), e.dispatchEvent(s), u && (a = u.call(l, s)), a
		}

		function f(e) {
			e.draggable = !1
		}

		function E() {
			W = !1
		}

		function T(e, t) {
			var n = e.lastElementChild,
				i = n.getBoundingClientRect();
			return (5 < t.clientY - (i.top + i.height) || 5 < t.clientX - (i.right + i.width)) && n
		}

		function s(e) {
			for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, i = 0; n--;) i += t.charCodeAt(n);
			return i.toString(36)
		}

		function h(e) {
			var t = 0;
			if (!e || !e.parentNode) return -1;
			for (; e && (e = e.previousElementSibling);) "TEMPLATE" !== e.nodeName.toUpperCase() && t++;
			return t
		}

		function e(e, t) {
			var n, i;
			return function () {
				void 0 === n && (n = arguments, i = this, setTimeout(function () {
					1 === n.length ? e.call(i, n[0]) : e.apply(i, n), n = void 0
				}, t))
			}
		}

		function a(e, t) {
			if (e && t)
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			return e
		}
		var $, D, I, P, j, N, p, m, A, O, F, g, r, L, v, y, M, t, b = {},
			w = /\s+/g,
			R = "Sortable" + (new Date).getTime(),
			x = window,
			q = x.document,
			H = x.parseInt,
			B = !!("draggable" in q.createElement("div")),
			z = ((t = q.createElement("x")).style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents),
			W = !1,
			U = Math.abs,
			X = ([].slice, []),
			V = e(function (e, t, n) {
				if (n && t.scroll) {
					var i, r, o, s, a = t.scrollSensitivity,
						l = t.scrollSpeed,
						u = e.clientX,
						c = e.clientY,
						d = window.innerWidth,
						f = window.innerHeight;
					if (m !== n && (p = t.scroll, m = n, !0 === p)) {
						p = n;
						do {
							if (p.offsetWidth < p.scrollWidth || p.offsetHeight < p.scrollHeight) break
						} while (p = p.parentNode)
					}
					p && (r = (i = p).getBoundingClientRect(), o = (U(r.right - u) <= a) - (U(r.left - u) <= a), s = (U(r.bottom - c) <= a) - (U(r.top - c) <= a)), o || s || (s = (f - c <= a) - (c <= a), ((o = (d - u <= a) - (u <= a)) || s) && (i = x)), b.vx === o && b.vy === s && b.el === i || (b.el = i, b.vx = o, b.vy = s, clearInterval(b.pid), i && (b.pid = setInterval(function () {
						i === x ? x.scrollTo(x.pageXOffset + o * l, x.pageYOffset + s * l) : (s && (i.scrollTop += s * l), o && (i.scrollLeft += o * l))
					}, 24)))
				}
			}, 30),
			Q = function (e) {
				var t = e.group;
				t && "object" == typeof t || (t = e.group = {
					name: t
				}), ["pull", "put"].forEach(function (e) {
					e in t || (t[e] = !0)
				}), e.groups = " " + t.name + (t.put.join ? " " + t.put.join(" ") : "") + " "
			};
		return o.prototype = {
			constructor: o,
			_onTapStart: function (e) {
				var t = this,
					n = this.el,
					i = this.options,
					r = e.type,
					o = e.touches && e.touches[0],
					s = (o || e).target,
					a = s,
					l = i.filter;
				if (!("mousedown" === r && 0 !== e.button || i.disabled) && (s = C(s, i.draggable, n))) {
					if (g = h(s), "function" == typeof l) {
						if (l.call(this, e, s, this)) return d(t, a, "filter", s, n, g), void e.preventDefault()
					} else if (l && (l = l.split(",").some(function (e) {
							if (e = C(a, e.trim(), n)) return d(t, e, "filter", s, n, g), !0
						}))) return void e.preventDefault();
					i.handle && !C(a, i.handle, n) || this._prepareDragStart(e, o, s)
				}
			},
			_prepareDragStart: function (e, t, n) {
				var i, r = this,
					o = r.el,
					s = r.options,
					a = o.ownerDocument;
				n && !$ && n.parentNode === o && (v = e, j = o, D = ($ = n).parentNode, N = $.nextSibling, L = s.group, i = function () {
					r._disableDelayedDrag(), $.draggable = !0, u($, r.options.chosenClass, !0), r._triggerDragStart(t)
				}, s.ignore.split(",").forEach(function (e) {
					c($, e.trim(), f)
				}), l(a, "mouseup", r._onDrop), l(a, "touchend", r._onDrop), l(a, "touchcancel", r._onDrop), s.delay ? (l(a, "mouseup", r._disableDelayedDrag), l(a, "touchend", r._disableDelayedDrag), l(a, "touchcancel", r._disableDelayedDrag), l(a, "mousemove", r._disableDelayedDrag), l(a, "touchmove", r._disableDelayedDrag), r._dragStartTimer = setTimeout(i, s.delay)) : i())
			},
			_disableDelayedDrag: function () {
				var e = this.el.ownerDocument;
				clearTimeout(this._dragStartTimer), i(e, "mouseup", this._disableDelayedDrag), i(e, "touchend", this._disableDelayedDrag), i(e, "touchcancel", this._disableDelayedDrag), i(e, "mousemove", this._disableDelayedDrag), i(e, "touchmove", this._disableDelayedDrag)
			},
			_triggerDragStart: function (e) {
				e ? (v = {
					target: $,
					clientX: e.clientX,
					clientY: e.clientY
				}, this._onDragStart(v, "touch")) : this.nativeDraggable ? (l($, "dragend", this), l(j, "dragstart", this._onDragStart)) : this._onDragStart(v, !0);
				try {
					q.selection ? q.selection.empty() : window.getSelection().removeAllRanges()
				} catch (t) {}
			},
			_dragStarted: function () {
				j && $ && (u($, this.options.ghostClass, !0), d(o.active = this, j, "start", $, j, g))
			},
			_emulateDragOver: function () {
				if (y) {
					if (this._lastX === y.clientX && this._lastY === y.clientY) return;
					this._lastX = y.clientX, this._lastY = y.clientY, z || S(I, "display", "none");
					var e = q.elementFromPoint(y.clientX, y.clientY),
						t = e,
						n = " " + this.options.group.name,
						i = X.length;
					if (t)
						do {
							if (t[R] && -1 < t[R].options.groups.indexOf(n)) {
								for (; i--;) X[i]({
									clientX: y.clientX,
									clientY: y.clientY,
									target: e,
									rootEl: t
								});
								break
							}
							e = t
						} while (t = t.parentNode);
					z || S(I, "display", "")
				}
			},
			_onTouchMove: function (e) {
				if (v) {
					o.active || this._dragStarted(), this._appendGhost();
					var t = e.touches ? e.touches[0] : e,
						n = t.clientX - v.clientX,
						i = t.clientY - v.clientY,
						r = e.touches ? "translate3d(" + n + "px," + i + "px,0)" : "translate(" + n + "px," + i + "px)";
					M = !0, y = t, S(I, "webkitTransform", r), S(I, "mozTransform", r), S(I, "msTransform", r), S(I, "transform", r), e.preventDefault()
				}
			},
			_appendGhost: function () {
				if (!I) {
					var e, t = $.getBoundingClientRect(),
						n = S($),
						i = this.options;
					u(I = $.cloneNode(!0), i.ghostClass, !1), u(I, i.fallbackClass, !0), S(I, "top", t.top - H(n.marginTop, 10)), S(I, "left", t.left - H(n.marginLeft, 10)), S(I, "width", t.width), S(I, "height", t.height), S(I, "opacity", "0.8"), S(I, "position", "fixed"), S(I, "zIndex", "100000"), S(I, "pointerEvents", "none"), i.fallbackOnBody && q.body.appendChild(I) || j.appendChild(I), e = I.getBoundingClientRect(), S(I, "width", 2 * t.width - e.width), S(I, "height", 2 * t.height - e.height)
				}
			},
			_onDragStart: function (e, t) {
				var n = e.dataTransfer,
					i = this.options;
				this._offUpEvents(), "clone" == L.pull && (S(P = $.cloneNode(!0), "display", "none"), j.insertBefore(P, $)), t ? ("touch" === t ? (l(q, "touchmove", this._onTouchMove), l(q, "touchend", this._onDrop), l(q, "touchcancel", this._onDrop)) : (l(q, "mousemove", this._onTouchMove), l(q, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (n && (n.effectAllowed = "move", i.setData && i.setData.call(this, n, $)), l(q, "drop", this), setTimeout(this._dragStarted, 0))
			},
			_onDragOver: function (e) {
				var t, n, i, r = this.el,
					o = this.options,
					s = o.group,
					a = s.put,
					l = L === s,
					u = o.sort;
				if (void 0 !== e.preventDefault && (e.preventDefault(), !o.dragoverBubble && e.stopPropagation()), M = !0, L && !o.disabled && (l ? u || (i = !j.contains($)) : L.pull && a && (L.name === s.name || a.indexOf && ~a.indexOf(L.name))) && (void 0 === e.rootEl || e.rootEl === this.el)) {
					if (V(e, o, this.el), W) return;
					if (t = C(e.target, o.draggable, r), n = $.getBoundingClientRect(), i) return _(!0), void(P || N ? j.insertBefore($, P || N) : u || j.appendChild($));
					if (0 === r.children.length || r.children[0] === I || r === e.target && (t = T(r, e))) {
						if (t) {
							if (t.animated) return;
							d = t.getBoundingClientRect()
						}
						_(l), !1 !== k(j, r, $, n, t, d) && ($.contains(r) || (r.appendChild($), D = r), this._animate(n, $), t && this._animate(d, t))
					} else if (t && !t.animated && t !== $ && void 0 !== t.parentNode[R]) {
						A !== t && (O = S(A = t), F = S(t.parentNode));
						var c, d = t.getBoundingClientRect(),
							f = d.right - d.left,
							h = d.bottom - d.top,
							p = /left|right|inline/.test(O.cssFloat + O.display) || "flex" == F.display && 0 === F["flex-direction"].indexOf("row"),
							m = t.offsetWidth > $.offsetWidth,
							g = t.offsetHeight > $.offsetHeight,
							v = .5 < (p ? (e.clientX - d.left) / f : (e.clientY - d.top) / h),
							y = t.nextElementSibling,
							b = k(j, r, $, n, t, d);
						if (!1 !== b) {
							if (W = !0, setTimeout(E, 30), _(l), 1 === b || -1 === b) c = 1 === b;
							else if (p) {
								var w = $.offsetTop,
									x = t.offsetTop;
								c = w === x ? t.previousElementSibling === $ && !m || v && m : w < x
							} else c = y !== $ && !g || v && g;
							$.contains(r) || (c && !y ? r.appendChild($) : t.parentNode.insertBefore($, c ? y : t)), D = $.parentNode, this._animate(n, $), this._animate(d, t)
						}
					}
				}
			},
			_animate: function (e, t) {
				var n = this.options.animation;
				if (n) {
					var i = t.getBoundingClientRect();
					S(t, "transition", "none"), S(t, "transform", "translate3d(" + (e.left - i.left) + "px," + (e.top - i.top) + "px,0)"), t.offsetWidth, S(t, "transition", "all " + n + "ms"), S(t, "transform", "translate3d(0,0,0)"), clearTimeout(t.animated), t.animated = setTimeout(function () {
						S(t, "transition", ""), S(t, "transform", ""), t.animated = !1
					}, n)
				}
			},
			_offUpEvents: function () {
				var e = this.el.ownerDocument;
				i(q, "touchmove", this._onTouchMove), i(e, "mouseup", this._onDrop), i(e, "touchend", this._onDrop), i(e, "touchcancel", this._onDrop)
			},
			_onDrop: function (e) {
				var t = this.el,
					n = this.options;
				clearInterval(this._loopId), clearInterval(b.pid), clearTimeout(this._dragStartTimer), i(q, "mousemove", this._onTouchMove), this.nativeDraggable && (i(q, "drop", this), i(t, "dragstart", this._onDragStart)), this._offUpEvents(), e && (M && (e.preventDefault(), !n.dropBubble && e.stopPropagation()), I && I.parentNode.removeChild(I), $ && (this.nativeDraggable && i($, "dragend", this), f($), u($, this.options.ghostClass, !1), u($, this.options.chosenClass, !1), j !== D ? 0 <= (r = h($)) && (d(null, D, "sort", $, j, g, r), d(this, j, "sort", $, j, g, r), d(null, D, "add", $, j, g, r), d(this, j, "remove", $, j, g, r)) : (P && P.parentNode.removeChild(P), $.nextSibling !== N && 0 <= (r = h($)) && (d(this, j, "update", $, j, g, r), d(this, j, "sort", $, j, g, r))), o.active && (null !== r && -1 !== r || (r = g), d(this, j, "end", $, j, g, r), this.save())), j = $ = D = I = N = P = p = m = v = y = M = r = A = O = L = o.active = null)
			},
			handleEvent: function (e) {
				var t = e.type;
				"dragover" === t || "dragenter" === t ? $ && (this._onDragOver(e), n(e)) : "drop" !== t && "dragend" !== t || this._onDrop(e)
			},
			toArray: function () {
				for (var e, t = [], n = this.el.children, i = 0, r = n.length, o = this.options; i < r; i++) C(e = n[i], o.draggable, this.el) && t.push(e.getAttribute(o.dataIdAttr) || s(e));
				return t
			},
			sort: function (e) {
				var i = {},
					r = this.el;
				this.toArray().forEach(function (e, t) {
					var n = r.children[t];
					C(n, this.options.draggable, r) && (i[e] = n)
				}, this), e.forEach(function (e) {
					i[e] && (r.removeChild(i[e]), r.appendChild(i[e]))
				})
			},
			save: function () {
				var e = this.options.store;
				e && e.set(this)
			},
			closest: function (e, t) {
				return C(e, t || this.options.draggable, this.el)
			},
			option: function (e, t) {
				var n = this.options;
				if (void 0 === t) return n[e];
				n[e] = t, "group" === e && Q(n)
			},
			destroy: function () {
				var e = this.el;
				e[R] = null, i(e, "mousedown", this._onTapStart), i(e, "touchstart", this._onTapStart), this.nativeDraggable && (i(e, "dragover", this), i(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function (e) {
					e.removeAttribute("draggable")
				}), X.splice(X.indexOf(this._onDragOver), 1), this._onDrop(), this.el = e = null
			}
		}, o.utils = {
			on: l,
			off: i,
			css: S,
			find: c,
			is: function (e, t) {
				return !!C(e, t, e)
			},
			extend: a,
			throttle: e,
			closest: C,
			toggleClass: u,
			index: h
		}, o.create = function (e, t) {
			return new o(e, t)
		}, o.version = "1.3.0", o
	}), window.countersLoader = {
		ga: function () {
			var e, t, n, i, r, o, s;
			e = window, t = document, n = "script", i = "//www.google-analytics.com/analytics.js", r = "ga", e.GoogleAnalyticsObject = r, e[r] = e[r] || function () {
				(e[r].q = e[r].q || []).push(arguments)
			}, e[r].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, s.parentNode.insertBefore(o, s)
		},
		li: function () {
			(new Image).src = "//counter.yadro.ru/hit?r" + escape(document.referrer) + ("undefined" == typeof screen ? "" : ";s" + screen.width + "*" + screen.height + "*" + (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) + ";u" + escape(document.URL) + ";" + Math.random()
		},
		tagManager: function (e) {
			void 0 !== e && e && function (e, t, n, i, r) {
				e[i] = e[i] || [], e[i].push({
					"gtm.start": (new Date).getTime(),
					event: "gtm.js"
				});
				var o = t.getElementsByTagName(n)[0],
					s = t.createElement(n),
					a = "dataLayer" != i ? "&l=" + i : "";
				s.async = !0, s.src = "https://www.googletagmanager.com/gtm.js?id=" + r + a, o.parentNode.insertBefore(s, o)
			}(window, document, "script", "dataLayer", e)
		}
	},
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], e) : e(jQuery)
	}(function (u) {
		return u.widget("ui.tabs", {
			version: "1.11.4",
			delay: 300,
			options: {
				active: null,
				collapsible: !1,
				event: "click",
				heightStyle: "content",
				hide: null,
				show: null,
				activate: null,
				beforeActivate: null,
				beforeLoad: null,
				load: null
			},
			_isLocal: (r = /#.*$/, function (e) {
				var t, n;
				t = (e = e.cloneNode(!1)).href.replace(r, ""), n = location.href.replace(r, "");
				try {
					t = decodeURIComponent(t)
				} catch (i) {}
				try {
					n = decodeURIComponent(n)
				} catch (i) {}
				return 1 < e.hash.length && t === n
			}),
			_create: function () {
				var t = this,
					e = this.options;
				this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible), this._processTabs(), e.active = this._initialActive(), u.isArray(e.disabled) && (e.disabled = u.unique(e.disabled.concat(u.map(this.tabs.filter(".ui-state-disabled"), function (e) {
					return t.tabs.index(e)
				}))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(e.active) : this.active = u(), this._refresh(), this.active.length && this.load(e.active)
			},
			_initialActive: function () {
				var n = this.options.active,
					e = this.options.collapsible,
					i = location.hash.substring(1);
				return null === n && (i && this.tabs.each(function (e, t) {
					if (u(t).attr("aria-controls") === i) return n = e, !1
				}), null === n && (n = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== n && -1 !== n || (n = !!this.tabs.length && 0)), !1 !== n && -1 === (n = this.tabs.index(this.tabs.eq(n))) && (n = !e && 0), !e && !1 === n && this.anchors.length && (n = 0), n
			},
			_getCreateEventData: function () {
				return {
					tab: this.active,
					panel: this.active.length ? this._getPanelForTab(this.active) : u()
				}
			},
			_tabKeydown: function (e) {
				var t = u(this.document[0].activeElement).closest("li"),
					n = this.tabs.index(t),
					i = !0;
				if (!this._handlePageNav(e)) {
					switch (e.keyCode) {
						case u.ui.keyCode.RIGHT:
						case u.ui.keyCode.DOWN:
							n++;
							break;
						case u.ui.keyCode.UP:
						case u.ui.keyCode.LEFT:
							i = !1, n--;
							break;
						case u.ui.keyCode.END:
							n = this.anchors.length - 1;
							break;
						case u.ui.keyCode.HOME:
							n = 0;
							break;
						case u.ui.keyCode.SPACE:
							return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
						case u.ui.keyCode.ENTER:
							return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
						default:
							return
					}
					e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, i), e.ctrlKey || e.metaKey || (t.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
						this.option("active", n)
					}, this.delay))
				}
			},
			_panelKeydown: function (e) {
				this._handlePageNav(e) || e.ctrlKey && e.keyCode === u.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
			},
			_handlePageNav: function (e) {
				return e.altKey && e.keyCode === u.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === u.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
			},
			_findNextTab: function (e, t) {
				function n() {
					return i < e && (e = 0), e < 0 && (e = i), e
				}
				for (var i = this.tabs.length - 1; - 1 !== u.inArray(n(), this.options.disabled);) e = t ? e + 1 : e - 1;
				return e
			},
			_focusNextTab: function (e, t) {
				return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
			},
			_setOption: function (e, t) {
				"active" !== e ? "disabled" !== e ? (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || !1 !== this.options.active || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t)) : this._setupDisabled(t) : this._activate(t)
			},
			_sanitizeSelector: function (e) {
				return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
			},
			refresh: function () {
				var e = this.options,
					t = this.tablist.children(":has(a[href])");
				e.disabled = u.map(t.filter(".ui-state-disabled"), function (e) {
					return t.index(e)
				}), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !u.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = u()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = u()), this._refresh()
			},
			_refresh: function () {
				this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
					"aria-selected": "false",
					"aria-expanded": "false",
					tabIndex: -1
				}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
					"aria-hidden": "true"
				}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				}), this._getPanelForTab(this.active).show().attr({
					"aria-hidden": "false"
				})) : this.tabs.eq(0).attr("tabIndex", 0)
			},
			_processTabs: function () {
				var l = this,
					e = this.tabs,
					t = this.anchors,
					n = this.panels;
				this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (e) {
					u(this).is(".ui-state-disabled") && e.preventDefault()
				}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
					u(this).closest("li").is(".ui-state-disabled") && this.blur()
				}), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
					role: "tab",
					tabIndex: -1
				}), this.anchors = this.tabs.map(function () {
					return u("a", this)[0]
				}).addClass("ui-tabs-anchor").attr({
					role: "presentation",
					tabIndex: -1
				}), this.panels = u(), this.anchors.each(function (e, t) {
					var n, i, r, o = u(t).uniqueId().attr("id"),
						s = u(t).closest("li"),
						a = s.attr("aria-controls");
					l._isLocal(t) ? (r = (n = t.hash).substring(1), i = l.element.find(l._sanitizeSelector(n))) : (n = "#" + (r = s.attr("aria-controls") || u({}).uniqueId()[0].id), (i = l.element.find(n)).length || (i = l._createPanel(r)).insertAfter(l.panels[e - 1] || l.tablist), i.attr("aria-live", "polite")), i.length && (l.panels = l.panels.add(i)), a && s.data("ui-tabs-aria-controls", a), s.attr({
						"aria-controls": r,
						"aria-labelledby": o
					}), i.attr("aria-labelledby", o)
				}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), e && (this._off(e.not(this.tabs)), this._off(t.not(this.anchors)), this._off(n.not(this.panels)))
			},
			_getList: function () {
				return this.tablist || this.element.find("ol,ul").eq(0)
			},
			_createPanel: function (e) {
				return u("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
			},
			_setupDisabled: function (e) {
				u.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
				for (var t, n = 0; t = this.tabs[n]; n++) !0 === e || -1 !== u.inArray(n, e) ? u(t).addClass("ui-state-disabled").attr("aria-disabled", "true") : u(t).removeClass("ui-state-disabled").removeAttr("aria-disabled");
				this.options.disabled = e
			},
			_setupEvents: function (e) {
				var n = {};
				e && u.each(e.split(" "), function (e, t) {
					n[t] = "_eventHandler"
				}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
					click: function (e) {
						e.preventDefault()
					}
				}), this._on(this.anchors, n), this._on(this.tabs, {
					keydown: "_tabKeydown"
				}), this._on(this.panels, {
					keydown: "_panelKeydown"
				}), this._focusable(this.tabs), this._hoverable(this.tabs)
			},
			_setupHeightStyle: function (e) {
				var n, t = this.element.parent();
				"fill" === e ? (n = t.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
					var e = u(this),
						t = e.css("position");
					"absolute" !== t && "fixed" !== t && (n -= e.outerHeight(!0))
				}), this.element.children().not(this.panels).each(function () {
					n -= u(this).outerHeight(!0)
				}), this.panels.each(function () {
					u(this).height(Math.max(0, n - u(this).innerHeight() + u(this).height()))
				}).css("overflow", "auto")) : "auto" === e && (n = 0, this.panels.each(function () {
					n = Math.max(n, u(this).height("").height())
				}).height(n))
			},
			_eventHandler: function (e) {
				var t = this.options,
					n = this.active,
					i = u(e.currentTarget).closest("li"),
					r = i[0] === n[0],
					o = r && t.collapsible,
					s = o ? u() : this._getPanelForTab(i),
					a = n.length ? this._getPanelForTab(n) : u(),
					l = {
						oldTab: n,
						oldPanel: a,
						newTab: o ? u() : i,
						newPanel: s
					};
				e.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || r && !t.collapsible || !1 === this._trigger("beforeActivate", e, l) || (t.active = !o && this.tabs.index(i), this.active = r ? u() : i, this.xhr && this.xhr.abort(), a.length || s.length || u.error("jQuery UI Tabs: Mismatching fragment identifier."), s.length && this.load(this.tabs.index(i), e), this._toggle(e, l))
			},
			_toggle: function (e, t) {
				function n() {
					r.running = !1, r._trigger("activate", e, t)
				}

				function i() {
					t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && r.options.show ? r._show(o, r.options.show, n) : (o.show(), n())
				}
				var r = this,
					o = t.newPanel,
					s = t.oldPanel;
				this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function () {
					t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i()
				}) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), i()), s.attr("aria-hidden", "true"), t.oldTab.attr({
					"aria-selected": "false",
					"aria-expanded": "false"
				}), o.length && s.length ? t.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
					return 0 === u(this).attr("tabIndex")
				}).attr("tabIndex", -1), o.attr("aria-hidden", "false"), t.newTab.attr({
					"aria-selected": "true",
					"aria-expanded": "true",
					tabIndex: 0
				})
			},
			_activate: function (e) {
				var t, n = this._findActive(e);
				n[0] !== this.active[0] && (n.length || (n = this.active), t = n.find(".ui-tabs-anchor")[0], this._eventHandler({
					target: t,
					currentTarget: t,
					preventDefault: u.noop
				}))
			},
			_findActive: function (e) {
				return !1 === e ? u() : this.tabs.eq(e)
			},
			_getIndex: function (e) {
				return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
			},
			_destroy: function () {
				this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
					u.data(this, "ui-tabs-destroy") ? u(this).remove() : u(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
				}), this.tabs.each(function () {
					var e = u(this),
						t = e.data("ui-tabs-aria-controls");
					t ? e.attr("aria-controls", t).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
				}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
			},
			enable: function (n) {
				var e = this.options.disabled;
				!1 !== e && (n === undefined ? e = !1 : (n = this._getIndex(n), e = u.isArray(e) ? u.map(e, function (e) {
					return e !== n ? e : null
				}) : u.map(this.tabs, function (e, t) {
					return t !== n ? t : null
				})), this._setupDisabled(e))
			},
			disable: function (e) {
				var t = this.options.disabled;
				if (!0 !== t) {
					if (e === undefined) t = !0;
					else {
						if (e = this._getIndex(e), -1 !== u.inArray(e, t)) return;
						t = u.isArray(t) ? u.merge([e], t).sort() : [e]
					}
					this._setupDisabled(t)
				}
			},
			load: function (e, i) {
				e = this._getIndex(e);
				var r = this,
					n = this.tabs.eq(e),
					t = n.find(".ui-tabs-anchor"),
					o = this._getPanelForTab(n),
					s = {
						tab: n,
						panel: o
					},
					a = function (e, t) {
						"abort" === t && r.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === r.xhr && delete r.xhr
					};
				this._isLocal(t[0]) || (this.xhr = u.ajax(this._ajaxSettings(t, i, s)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) {
					setTimeout(function () {
						o.html(e), r._trigger("load", i, s), a(n, t)
					}, 1)
				}).fail(function (e, t) {
					setTimeout(function () {
						a(e, t)
					}, 1)
				})))
			},
			_ajaxSettings: function (e, n, i) {
				var r = this;
				return {
					url: e.attr("href"),
					beforeSend: function (e, t) {
						return r._trigger("beforeLoad", n, u.extend({
							jqXHR: e,
							ajaxSettings: t
						}, i))
					}
				}
			},
			_getPanelForTab: function (e) {
				var t = u(e).attr("aria-controls");
				return this.element.find(this._sanitizeSelector("#" + t))
			}
		});
		var r
	}),
	function () {
		window.paymentFinished = function () {
			return location.reload()
		}, window.paymentFailure = function () {}, window.paymentFailed = function (e, t) {
			return console.log("Payment failed :" + t)
		}, window.addEventListener("message", function (e) {
			var t;
			if ((t = function (e) {
					var t;
					return (t = e.match(/^https?:\/\/(?:[a-zA-Z0-9.-]+\.)?([a-zA-Z0-9-]+\.[a-zA-Z0-9-]+).*/)) && t[1]
				})(e.origin) === t(window.location.href)) switch (e.data) {
				case "paymentFinished":
					return window.paymentFinished();
				case "paymentFailure":
					return window.paymentFailure()
			}
		})
	}.call(this),
	function () {
		var e, t = function (e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		};
		null == window.az && (window.az = {}), e = function () {
			function e(e) {
				var n;
				this.panel = e, this.update = t(this.update, this), this.fetch = t(this.fetch, this), this.preform = ".lot-preform, .ad-preform", this.form_selector = ".lot-form, .ad-form", this.form = $(this.form_selector).on("ajax:success", (n = this, function (e) {
					var t;
					return t = e.originalEvent.detail[0], n.update(t)
				})), window.paymentFinished = this.fetch, this.findAndBind(), this.reblockItemForm()
			}
			return e.prototype.findAndBind = function () {
				return this.prompt = $(this.panel).find(".prompt"), this.response = $(this.panel).find(".response"), this.postform = $(".lot-postform, .ad-postform"), $(this.preform).find(":submit").click((t = this, function (e) {
					return t.fetch(e), !1
				}));
				var t
			}, e.prototype.fetch = function (e) {
				var t;
				if (!$(this.panel).data("remote")) return document.location.reload();
				this.setDataRemote(!0);
				try {
					return Rails.handleRemote.call(document.querySelector(this.form_selector), e)
				} catch (n) {
					if ("TypeError" !== (t = n).name) throw t
				} finally {
					this.setDataRemote(!1)
				}
			}, e.prototype.update = function (e) {
				return $(e).find(this.panel).replaceAll(this.panel), $(e).find(this.preform).replaceAll(this.preform), this.findAndBind(), this.reblockItemForm(), $(this.panel).trigger("setup")
			}, e.prototype.reblockItemForm = function () {
				var e, t;
				return e = this.prompt.length || this.response.has(".pay").length, this.postform.animate({
					opacity: e ? .2 : 1
				}), setTimeout((t = this, function () {
					return t.postform.find(":input, button").prop({
						disabled: e
					})
				}), 50)
			}, e.prototype.setDataRemote = function (e) {
				var t, n, i;
				return t = "data-remote", n = "data-remote-temp", i = this.form[0], e && !i.hasAttribute(t) ? (i.setAttribute(t, !0), i.setAttribute(n, !0)) : i.hasAttribute(n) ? (i.removeAttribute(t), i.removeAttribute(n)) : void 0
			}, e
		}(), az.PaymentForm = {
			bind: function () {
				return $(document).on("submit", ".pay form:not([data-remote])", function () {
					return window.open("", "new_payment", "width=580,height=750"), this.target = "new_payment"
				}), $(document).on("click", ".az-payments-type-input", function () {
					var e, t, n;
					return (n = (t = $(this)).parents(".az-payments-form").parent()).find(".az-payments-type-input[value='" + t.val() + "']").prop("checked", !0), n.find(".az-payments-form").hide(), (
						e = n.find(t.data("tab"))).show(), e.trigger("activated")
				}), $(document).on("click", ".az-payments-service-input", function () {
					var e;
					return (e = $(this)).parents(".az-payments-form").parent().find(".az-payments-service-input[value='" + e.val() + "']").prop("checked", !0), az.PaymentForm.blockWalletIfNotEnoughMoney(e)
				})
			},
			chooseFirstProvider: function () {
				return $(".pay").each(function () {
					var e, t, n;
					return 0 < (t = $(this).find(".az-payments-type[data-priority=true]")).length ? (n = (e = t.parents(".az-payments-form")).data("provider"), e.find(".az-payments-type-input[value=" + n + "]").click()) : (az.PaymentForm.bind(), $(this).find(".az-payments-form:visible .az-payments-type-input:first").click())
				})
			},
			blockAllWalletsIfNotEnoughMoney: function () {
				return $(".az-payments-form .az-service:visible input[type=radio]:checked").each(function () {
					return az.PaymentForm.blockWalletIfNotEnoughMoney($(this))
				})
			},
			blockWalletIfNotEnoughMoney: function (e) {
				var t, n;
				if (n = (t = e.parents(".pay")).find(".az-payments-type-input[value=wallet]:first").data("wallet-available"), t.find(".az-payments-type-input[value=wallet]").attr("disabled", !n), 0 < t.find(".az-payments-type-input[value=wallet]:checked:disabled").length) return t.find(".az-payments-type-input:visible:first").click()
			},
			enableSubmitButton: function () {
				return $(".az-payments-form button").prop("disabled", !1)
			}
		}, $(document).on({
			"ready page:change": function () {
				if ($(".ad_limits_info").length) return window.adsLimitInfo = new e(".ad_limits_info")
			},
			"ready page:change setup": function () {
				return $(".pay").tabs(), az.PaymentForm.bind(), az.PaymentForm.chooseFirstProvider(), az.PaymentForm.blockAllWalletsIfNotEnoughMoney(), az.PaymentForm.enableSubmitButton()
			}
		})
	}.call(this), adriver.prototype = {
		isLoading: 0,
		init: function () {},
		load: function () {},
		reload: function () {},
		loadComplete: function () {},
		domReady: function () {},
		onLoadComplete: function (e) {
			var t = this;
			return t.loadCompleteQueue.push(function () {
				e.call(t)
			}), t
		},
		onDomReady: function (e) {
			return this.domReadyQueue.push(e), this
		},
		reset: function () {
			return this.loadCompleteQueue.flush(), this.domReadyQueue.flush(adriver.isDomReady), this
		}
	}, adriver.extend = function (e) {
		for (var t, n, i = e, r = 1, o = arguments.length; r < o; r++)
			for (n in t = arguments[r]) t.hasOwnProperty(n) && (t[n] instanceof Function ? i[n] = t[n] : t[n] instanceof Object ? i[n] ? adriver.extend(i[n], t[n]) : i[n] = adriver.extend(t[n] instanceof Array ? [] : {}, t[n]) : i[n] = t[n]);
		return i
	}, adriver.extend(adriver, {
		version: "2.3.11",
		defaults: {
			tail256: escape(document.referrer || "unknown")
		},
		items: {},
		options: {},
		plugins: {},
		pluginPath: {},
		redirectHost: "//ad.adriver.ru",
		defaultMirror: "//content.adriver.ru",
		loadScript: function (e) {
			try {
				var t = document.getElementsByTagName("head")[0],
					n = document.createElement("script");
				n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "windows-1251"), n.setAttribute("src", e.split("![rnd]").join(Math.round(9999999 * Math.random()))), n.onreadystatechange = function () {
					/loaded|complete/.test(this.readyState) && (t.removeChild(n), n.onload = null)
				}, n.onload = function () {
					t.removeChild(n)
				}, t.insertBefore(n, t.firstChild)
			} catch (i) {}
		},
		isDomReady: !1,
		onDomReady: function (e) {
			adriver.domReadyQueue.push(e)
		},
		onBeforeDomReady: function (e) {
			adriver.domReadyQueue.unshift(e)
		},
		domReady: function () {
			adriver.isDomReady = !0, adriver.domReadyQueue.execute()
		},
		checkDomReady: function (e) {
			var t, n = window,
				i = n.document,
				r = function () {
					adriver.isDomReady || e()
				},
				o = !1;
			if ("complete" === i.readyState) r();
			else if (i.addEventListener) i.addEventListener("DOMContentLoaded", r, !1), n.addEventListener("load", r, !1);
			else {
				t = function () {
					"complete" === i.readyState && (i.detachEvent("onreadystatechange", t), r())
				}, i.attachEvent("onreadystatechange", t), n.attachEvent("onload", r);
				try {
					o = null === n.frameElement && i.documentElement
				} catch (s) {}
				o && o.doScroll && function a() {
					if (!adriver.isDomReady) {
						try {
							o.doScroll("left")
						} catch (s) {
							return setTimeout(a, 50)
						}
						r()
					}
				}()
			}
		},
		onLoadComplete: function (e) {
			return adriver.loadCompleteQueue.push(e), adriver
		},
		checkLoadComplete: function () {
			var e, t;
			for (e in adriver.items)
				if (adriver.items.hasOwnProperty(e) && !(t = adriver.items[e]).prm.onScroll && "undefined" == typeof t.reply) return !1;
			return !0
		},
		loadComplete: function () {
			return adriver.checkLoadComplete() && adriver.loadCompleteQueue.execute(!1), adriver
		},
		setDefaults: function (e) {
			adriver.extend(adriver.defaults, e)
		},
		setOptions: function (e) {
			adriver.extend(adriver.options, e)
		},
		setPluginPath: function (e) {
			adriver.extend(adriver.pluginPath, e)
		},
		queue: function (e) {
			this.q = [], this.flag = !!e
		},
		Plugin: function (e) {
			return this instanceof adriver.Plugin && e && !adriver.plugins[e] && (this.id = e, this.q = new adriver.queue, adriver.plugins[e] = this), adriver.plugins[e]
		}
	}), adriver.sync = function (e, t) {
		if (!adriver.syncFlag) {
			adriver.syncFlag = 1;
			for (var n = []; t--;) n[t] = t + 1;
			n.sort(function () {
				return .5 - Math.random()
			}), adriver.synchArray = n
		}
		return adriver.synchArray[(!e || e <= 0 ? 1 : e) - 1]
	}, adriver.queue.prototype = {
		push: function (e) {
			this.flag ? e() : this.q.push(e)
		},
		unshift: function (e) {
			this.flag ? e() : this.q.unshift(e)
		},
		execute: function (e) {
			for (var t, n; t = this.q.shift();) t();
			e == n && (e = !0), this.flag = !!e
		},
		flush: function (e) {
			this.q.length = 0, this.flag = !!e
		}
	}, adriver.Plugin.prototype = {
		loadingStatus: 0,
		load: function () {
			this.loadingStatus = 1, adriver.loadScript((adriver.pluginPath[this.id.split(".").pop()] || adriver.defaultMirror + "/plugins/") + this.id + ".js")
		},
		loadComplete: function () {
			return this.loadingStatus = 2, this.q.execute(), this
		},
		onLoadComplete: function (e) {
			return this.q.push(e), this
		}
	}, adriver.Plugin.require = function () {
		var e = this,
			t = 0;
		e.q = new adriver.queue;
		for (var n, i = 0, r = arguments.length; i < r; i++) 2 != (n = new adriver.Plugin(arguments[i])).loadingStatus && (t++, n.onLoadComplete(function () {
			1 == t-- && e.q.execute()
		}), n.loadingStatus || n.load());
		t || e.q.execute()
	}, adriver.Plugin.require.prototype.onLoadComplete = function (e) {
		return this.q.push(e), this
	}, adriver.domReadyQueue = new adriver.queue, adriver.loadCompleteQueue = new adriver.queue, adriver.initQueue = new adriver.queue, adriver.checkDomReady(adriver.domReady), new adriver.Plugin.require("autoUpdate.adriver").onLoadComplete(function () {
		adriver.initQueue.execute()
	}),
	function () {
		var e, t, n = function (e, t) {
			return function () {
				return e.apply(t, arguments)
			}
		};
		e = function () {
			function e() {
				this.playVideo = n(this.playVideo, this), this.checkVisibility = n(this.checkVisibility, this), this.body = document.getElementsByTagName("body")[0], this.banners = document.getElementsByClassName("load-bnr"), this.videoBanners = [].slice.call(document.getElementsByClassName("load-bnr-video")), this.banners.length ? (window.addEventListener("resize", this.checkVisibility), this.checkVisibility()) : this.load(document.querySelectorAll("iframe[data-src]")), this.videoBanners.length && window.addEventListener("scroll", this.playVideo)
			}
			return e.prototype.checkVisibility = function () {
				var e, t, n, i, r, o, s;
				for (o = [], t = 0, i = (r = this.banners).length; t < i; t++) e = r[t], s = window.getComputedStyle(e).getPropertyValue("display"), n = e.getElementsByTagName("iframe"), "block" === s || "inline-block" === s ? o.push(this.load(n)) : o.push(void 0);
				return o
			}, e.prototype.playVideo = function () {
				var r, o;
				if (r = this.body.scrollTop, this.videoBanners.forEach((o = this, function (e, t) {
						var n, i;
						if (i = e.offsetTop - e.offsetHeight, (n = e.getElementsByTagName("iframe"))[0].getAttribute("data-src") && i <= r) return o.load(n), o.videoBanners.splice(t, 1)
					})), !this.videoBanners.length) return window.removeEventListener("scroll", this.playVideo)
			}, e.prototype.load = function (e) {
				var t, n, i, r;
				for (r = [], t = 0, i = e.length; t < i; t++)(n = e[t]).getAttribute("data-src") ? (n.setAttribute("src", n.getAttribute("data-src")), r.push(n.removeAttribute("data-src"))) : r.push(void 0);
				return r
			}, e
		}(), t = !1, document.addEventListener("page:change", function () {
			return t = !0, new e
		}), document.addEventListener("turbolinks:load", function () {
			return t = !0, new e
		}), document.addEventListener("DOMContentLoaded", function () {
			if (!t) return new e
		})
	}.call(this),
	function () {
		var e, t, n, i, r, o, s, a;
		t = function () {
			var e;
			return "https://connect.facebook.net/" + ((e = document.documentElement.lang) + "_" + ("en" === e ? "US" : e.toUpperCase())) + "/sdk.js"
		}, i = document, r = "script", o = "facebook-jssdk", s = i.getElementsByTagName(r)[0], i.getElementById(o) || ((a = i.createElement(r)).id = o, a.src = t(), a.async = 1, s.parentNode.insertBefore(a, s)), n = document.querySelector('meta[property="fb:app_id"]'), e = n ? n.getAttribute("content") : null, window.fbAsyncInit = function () {
			return FB.init({
				appId: e,
				version: "v2.2",
				xfbml: !0
			})
		}
	}.call(this),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto)
	}(function (c) {
		var d, i, f, r, h, t, l = "Close",
			u = "BeforeClose",
			n = "AfterClose",
			o = "BeforeAppend",
			p = "MarkupParse",
			m = "Open",
			s = "Change",
			a = "mfp",
			g = "." + a,
			v = "mfp-ready",
			y = "mfp-removing",
			b = "mfp-prevent-close",
			e = function () {},
			w = !!window.jQuery,
			x = c(window),
			_ = function (e, t) {
				d.ev.on(a + e + g, t)
			},
			C = function (e, t, n, i) {
				var r = document.createElement("div");
				return r.className = "mfp-" + e, n && (r.innerHTML = n), i ? t && t.appendChild(r) : (r = c(r), t && r.appendTo(t)), r
			},
			S = function (e, t) {
				d.ev.triggerHandler(a + e, t), d.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), d.st.callbacks[e] && d.st.callbacks[e].apply(d, c.isArray(t) ? t : [t]))
			},
			k = function (e) {
				return e === t && d.currTemplate.closeBtn || (d.currTemplate.closeBtn = c(d.st.closeMarkup.replace("%title%", d.st.tClose)), t = e), d.currTemplate.closeBtn
			},
			E = function () {
				c.magnificPopup.instance || ((d = new e).init(), c.magnificPopup.instance = d)
			},
			T = function () {
				var e = document.createElement("p").style,
					t = ["ms", "O", "Moz", "Webkit"];
				if (e.transition !== undefined) return !0;
				for (; t.length;)
					if (t.pop() + "Transition" in e) return !0;
				return !1
			};
		e.prototype = {
			constructor: e,
			init: function () {
				var e = navigator.appVersion;
				d.isLowIE = d.isIE8 = document.all && !document.addEventListener, d.isAndroid = /android/gi.test(e), d.isIOS = /iphone|ipad|ipod/gi.test(e), d.supportsTransition = T(), d.probablyMobile = d.isAndroid || d.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), f = c(document), d.popupsCache = {}
			},
			open: function (e) {
				var t;
				if (!1 === e.isObj) {
					d.items = e.items.toArray(), d.index = 0;
					var n, i = e.items;
					for (t = 0; t < i.length; t++)
						if ((n = i[t]).parsed && (n = n.el[0]), n === e.el[0]) {
							d.index = t;
							break
						}
				} else d.items = c.isArray(e.items) ? e.items : [e.items], d.index = e.index || 0;
				if (!d.isOpen) {
					d.types = [], h = "", e.mainEl && e.mainEl.length ? d.ev = e.mainEl.eq(0) : d.ev = f, e.key ? (d.popupsCache[e.key] || (d.popupsCache[e.key] = {}), d.currTemplate = d.popupsCache[e.key]) : d.currTemplate = {}, d.st = c.extend(!0, {}, c.magnificPopup.defaults, e), d.fixedContentPos = "auto" === d.st.fixedContentPos ? !d.probablyMobile : d.st.fixedContentPos, d.st.modal && (d.st.closeOnContentClick = !1, d.st.closeOnBgClick = !1, d.st.showCloseBtn = !1, d.st.enableEscapeKey = !1), d.bgOverlay || (d.bgOverlay = C("bg").on("click" + g, function () {
						d.close()
					}), d.wrap = C("wrap").attr("tabindex", -1).on("click" + g, function (e) {
						d._checkIfClose(e.target) && d.close()
					}), d.container = C("container", d.wrap)), d.contentContainer = C("content"), d.st.preloader && (d.preloader = C("preloader", d.container, d.st.tLoading));
					var r = c.magnificPopup.modules;
					for (t = 0; t < r.length; t++) {
						var o = r[t];
						o = o.charAt(0).toUpperCase() + o.slice(1), d["init" + o].call(d)
					}
					S("BeforeOpen"), d.st.showCloseBtn && (d.st.closeBtnInside ? (_(p, function (e, t, n, i) {
						n.close_replaceWith = k(i.type)
					}), h += " mfp-close-btn-in") : d.wrap.append(k())), d.st.alignTop && (h += " mfp-align-top"), d.fixedContentPos ? d.wrap.css({
						overflow: d.st.overflowY,
						overflowX: "hidden",
						overflowY: d.st.overflowY
					}) : d.wrap.css({
						top: x.scrollTop(),
						position: "absolute"
					}), (!1 === d.st.fixedBgPos || "auto" === d.st.fixedBgPos && !d.fixedContentPos) && d.bgOverlay.css({
						height: f.height(),
						position: "absolute"
					}), d.st.enableEscapeKey && f.on("keyup" + g, function (e) {
						27 === e.keyCode && d.close()
					}), x.on("resize" + g, function () {
						d.updateSize()
					}), d.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && d.wrap.addClass(h);
					var s = d.wH = x.height(),
						a = {};
					if (d.fixedContentPos && d._hasScrollBar(s)) {
						var l = d._getScrollbarSize();
						l && (a.marginRight = l)
					}
					d.fixedContentPos && (d.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");
					var u = d.st.mainClass;
					return d.isIE7 && (u += " mfp-ie7"), u && d._addClassToMFP(u), d.updateItemHTML(), S("BuildControls"), c("html").css(a), d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo || c(document.body)), d._lastFocusedEl = document.activeElement, setTimeout(function () {
						d.content ? (d._addClassToMFP(v), d._setFocus()) : d.bgOverlay.addClass(v), f.on("focusin" + g, d._onFocusIn)
					}, 16), d.isOpen = !0, d.updateSize(s), S(m), e
				}
				d.updateItemHTML()
			},
			close: function () {
				d.isOpen && (S(u), d.isOpen = !1, d.st.removalDelay && !d.isLowIE && d.supportsTransition ? (d._addClassToMFP(y), setTimeout(function () {
					d._close()
				}, d.st.removalDelay)) : d._close())
			},
			_close: function () {
				S(l);
				var e = y + " " + v + " ";
				if (d.bgOverlay.detach(), d.wrap.detach(), d.container.empty(), d.st.mainClass && (e += d.st.mainClass + " "), d._removeClassFromMFP(e), d.fixedContentPos) {
					var t = {
						marginRight: ""
					};
					d.isIE7 ? c("body, html").css("overflow", "") : t.overflow = "", c("html").css(t)
				}
				f.off("keyup" + g + " focusin" + g), d.ev.off(g), d.wrap.attr("class", "mfp-wrap").removeAttr("style"), d.bgOverlay.attr("class", "mfp-bg"), d.container.attr("class", "mfp-container"), !d.st.showCloseBtn || d.st.closeBtnInside && !0 !== d.currTemplate[d.currItem.type] || d.currTemplate.closeBtn && d.currTemplate.closeBtn.detach(), d.st.autoFocusLast && d._lastFocusedEl && c(d._lastFocusedEl).focus(), d.currItem = null, d.content = null, d.currTemplate = null, d.prevHeight = 0, S(n)
			},
			updateSize: function (e) {
				if (d.isIOS) {
					var t = document.documentElement.clientWidth / window.innerWidth,
						n = window.innerHeight * t;
					d.wrap.css("height", n), d.wH = n
				} else d.wH = e || x.height();
				d.fixedContentPos || d.wrap.css("height", d.wH), S("Resize")
			},
			updateItemHTML: function () {
				var e = d.items[d.index];
				d.contentContainer.detach(), d.content && d.content.detach(), e.parsed || (e = d.parseEl(d.index));
				var t = e.type;
				if (S("BeforeChange", [d.currItem ? d.currItem.type : "", t]), d.currItem = e, !d.currTemplate[t]) {
					var n = !!d.st[t] && d.st[t].markup;
					S("FirstMarkupParse", n), d.currTemplate[t] = !n || c(n)
				}
				r && r !== e.type && d.container.removeClass("mfp-" + r + "-holder");
				var i = d["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, d.currTemplate[t]);
				d.appendContent(i, t), e.preloaded = !0, S(s, e), r = e.type, d.container.prepend(d.contentContainer), S("AfterChange")
			},
			appendContent: function (e, t) {
				(d.content = e) ? d.st.showCloseBtn && d.st.closeBtnInside && !0 === d.currTemplate[t] ? d.content.find(".mfp-close").length || d.content.append(k()) : d.content = e: d.content = "", S(o), d.container.addClass("mfp-" + t + "-holder"), d.contentContainer.append(d.content)
			},
			parseEl: function (e) {
				var t, n = d.items[e];
				if (n.tagName ? n = {
						el: c(n)
					} : (t = n.type, n = {
						data: n,
						src: n.src
					}), n.el) {
					for (var i = d.types, r = 0; r < i.length; r++)
						if (n.el.hasClass("mfp-" + i[r])) {
							t = i[r];
							break
						}
					n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
				}
				return n.type = t || d.st.type || "inline", n.index = e, n.parsed = !0, d.items[e] = n, S("ElementParse", n), d.items[e]
			},
			addGroup: function (t, n) {
				var e = function (e) {
					e.mfpEl = this, d._openClick(e, t, n)
				};
				n || (n = {});
				var i = "click.magnificPopup";
				n.mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, e)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
			},
			_openClick: function (e, t, n) {
				if ((n.midClick !== undefined ? n.midClick : c.magnificPopup.defaults.midClick) || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
					var i = n.disableOn !== undefined ? n.disableOn : c.magnificPopup.defaults.disableOn;
					if (i)
						if (c.isFunction(i)) {
							if (!i.call(d)) return !0
						} else if (x.width() < i) return !0;
					e.type && (e.preventDefault(), d.isOpen && e.stopPropagation()), n.el = c(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), d.open(n)
				}
			},
			updateStatus: function (e, t) {
				if (d.preloader) {
					i !== e && d.container.removeClass("mfp-s-" + i), t || "loading" !== e || (t = d.st.tLoading);
					var n = {
						status: e,
						text: t
					};
					S("UpdateStatus", n), e = n.status, t = n.text, d.preloader.html(t), d.preloader.find("a").on("click", function (e) {
						e.stopImmediatePropagation()
					}), d.container.addClass("mfp-s-" + e), i = e
				}
			},
			_checkIfClose: function (e) {
				if (!c(e).hasClass(b)) {
					var t = d.st.closeOnContentClick,
						n = d.st.closeOnBgClick;
					if (t && n) return !0;
					if (!d.content || c(e).hasClass("mfp-close") || d.preloader && e === d.preloader[0]) return !0;
					if (e === d.content[0] || c.contains(d.content[0], e)) {
						if (t) return !0
					} else if (n && c.contains(document, e)) return !0;
					return !1
				}
			},
			_addClassToMFP: function (e) {
				d.bgOverlay.addClass(e), d.wrap.addClass(e)
			},
			_removeClassFromMFP: function (e) {
				this.bgOverlay.removeClass(e), d.wrap.removeClass(e)
			},
			_hasScrollBar: function (e) {
				return (d.isIE7 ? f.height() : document.body.scrollHeight) > (e || x.height())
			},
			_setFocus: function () {
				(d.st.focus ? d.content.find(d.st.focus).eq(0) : d.wrap).focus()
			},
			_onFocusIn: function (e) {
				if (e.target !== d.wrap[0] && !c.contains(d.wrap[0], e.target)) return d._setFocus(), !1
			},
			_parseMarkup: function (r, e, t) {
				var o;
				t.data && (e = c.extend(t.data, e)), S(p, [r, e, t]), c.each(e, function (e, t) {
					if (t === undefined || !1 === t) return !0;
					if (1 < (o = e.split("_")).length) {
						var n = r.find(g + "-" + o[0]);
						if (0 < n.length) {
							var i = o[1];
							"replaceWith" === i ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(c("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(o[1], t)
						}
					} else r.find(g + "-" + e).html(t)
				})
			},
			_getScrollbarSize: function () {
				if (d.scrollbarSize === undefined) {
					var e = document.createElement("div");
					e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), d.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
				}
				return d.scrollbarSize
			}
		}, c.magnificPopup = {
			instance: null,
			proto: e.prototype,
			modules: [],
			open: function (e, t) {
				return E(), (e = e ? c.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e)
			},
			close: function () {
				return c.magnificPopup.instance && c.magnificPopup.instance.close()
			},
			registerModule: function (e, t) {
				t.options && (c.magnificPopup.defaults[e] = t.options), c.extend(this.proto, t.proto), this.modules.push(e)
			},
			defaults: {
				disableOn: 0,
				key: null,
				midClick: !1,
				mainClass: "",
				preloader: !0,
				focus: "",
				closeOnContentClick: !1,
				closeOnBgClick: !0,
				closeBtnInside: !0,
				showCloseBtn: !0,
				enableEscapeKey: !0,
				modal: !1,
				alignTop: !1,
				removalDelay: 0,
				prependTo: null,
				fixedContentPos: "auto",
				fixedBgPos: "auto",
				overflowY: "auto",
				closeMarkup: '<button title="%title%" type="button" class="mfp-close">×</button>',
				tClose: "Close (Esc)",
				tLoading: "Loading...",
				autoFocusLast: !0
			}
		}, c.fn.magnificPopup = function (e, t) {
			E();
			var n = c(this);
			if ("string" == typeof e)
				if ("open" === e) {
					var i, r = w ? n.data("magnificPopup") : n[0].magnificPopup,
						o = parseInt(t, 10) || 0;
					r.items ? i = r.items[o] : (i = n, r.delegate && (i = i.find(r.delegate)), i = i.eq(o)), d._openClick({
						mfpEl: i
					}, n, r)
				} else d.isOpen && d[e].apply(d, Array.prototype.slice.call(arguments, 1));
			else e = c.extend(!0, {}, e), w ? n.data("magnificPopup", e) : n[0].magnificPopup = e, d.addGroup(n, e);
			return n
		};
		var $, D, I, P = "inline",
			j = function () {
				I && (D.after(I.addClass($)).detach(), I = null)
			};
		c.magnificPopup.registerModule(P, {
			options: {
				hiddenClass: "hide",
				markup: "",
				tNotFound: "Content not found"
			},
			proto: {
				initInline: function () {
					d.types.push(P), _(l + "." + P, function () {
						j()
					})
				},
				getInline: function (e, t) {
					if (j(), e.src) {
						var n = d.st.inline,
							i = c(e.src);
						if (i.length) {
							var r = i[0].parentNode;
							r && r.tagName && (D || ($ = n.hiddenClass, D = C($), $ = "mfp-" + $), I = i.after(D).detach().removeClass($)), d.updateStatus("ready")
						} else d.updateStatus("error", n.tNotFound), i = c("<div>");
						return e.inlineElement = i
					}
					return d.updateStatus("ready"), d._parseMarkup(t, {}, e), t
				}
			}
		});
		var N, A = "ajax",
			O = function () {
				N && c(document.body).removeClass(N)
			},
			F = function () {
				O(), d.req && d.req.abort()
			};
		c.magnificPopup.registerModule(A, {
			options: {
				settings: null,
				cursor: "mfp-ajax-cur",
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			proto: {
				initAjax: function () {
					d.types.push(A), N = d.st.ajax.cursor, _(l + "." + A, F), _("BeforeChange." + A, F)
				},
				getAjax: function (r) {
					N && c(document.body).addClass(N), d.updateStatus("loading");
					var e = c.extend({
						url: r.src,
						success: function (e, t, n) {
							var i = {
								data: e,
								xhr: n
							};
							S("ParseAjax", i), d.appendContent(c(i.data), A), r.finished = !0, O(), d._setFocus(), setTimeout(function () {
								d.wrap.addClass(v)
							}, 16), d.updateStatus("ready"), S("AjaxContentAdded")
						},
						error: function () {
							O(), r.finished = r.loadError = !0, d.updateStatus("error", d.st.ajax.tError.replace("%url%", r.src))
						}
					}, d.st.ajax.settings);
					return d.req = c.ajax(e), ""
				}
			}
		});
		var L, M = function (e) {
			if (e.data && e.data.title !== undefined) return e.data.title;
			var t = d.st.image.titleSrc;
			if (t) {
				if (c.isFunction(t)) return t.call(d, e);
				if (e.el) return e.el.attr(t) || ""
			}
			return ""
		};
		c.magnificPopup.registerModule("image", {
			options: {
				markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
				cursor: "mfp-zoom-out-cur",
				titleSrc: "title",
				verticalFit: !0,
				tError: '<a href="%url%">The image</a> could not be loaded.'
			},
			proto: {
				initImage: function () {
					var e = d.st.image,
						t = ".image";
					d.types.push("image"), _(m + t, function () {
						"image" === d.currItem.type && e.cursor && c(document.body).addClass(e.cursor)
					}), _(l + t, function () {
						e.cursor && c(document.body).removeClass(e.cursor), x.off("resize" + g)
					}), _("Resize" + t, d.resizeImage), d.isLowIE && _("AfterChange", d.resizeImage)
				},
				resizeImage: function () {
					var e = d.currItem;
					if (e && e.img && d.st.image.verticalFit) {
						var t = 0;
						d.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", d.wH - t)
					}
				},
				_onImageHasSize: function (e) {
					e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, S("ImageHasSize", e), e.imgHidden && (d.content && d.content.removeClass("mfp-loading"), e.imgHidden = !1))
				},
				findImageSize: function (t) {
					var n = 0,
						i = t.img[0],
						r = function (e) {
							L && clearInterval(L), L = setInterval(function () {
								0 < i.naturalWidth ? d._onImageHasSize(t) : (200 < n && clearInterval(L), 3 === ++n ? r(10) : 40 === n ? r(50) : 100 === n && r(500))
							}, e)
						};
					r(1)
				},
				getImage: function (e, t) {
					var n = 0,
						i = function () {
							e && (e.img[0].complete ? (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, S("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : r())
						},
						r = function () {
							e && (e.img.off(".mfploader"), e === d.currItem && (d._onImageHasSize(e), d.updateStatus("error", o.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0)
						},
						o = d.st.image,
						s = t.find(".mfp-img");
					if (s.length) {
						var a = document.createElement("img");
						a.className = "mfp-img", e.el && e.el.find("img").length && (a.alt = e.el.find("img").attr("alt")), e.img = c(a).on("load.mfploader", i).on("error.mfploader", r), a.src = e.src, s.is("img") && (e.img = e.img.clone()), 0 < (a = e.img[0]).naturalWidth ? e.hasSize = !0 : a.width || (e.hasSize = !1)
					}
					return d._parseMarkup(t, {
						title: M(e),
						img_replaceWith: e.img
					}, e), d.resizeImage(), e.hasSize ? (L && clearInterval(L), e.loadError ? (t.addClass("mfp-loading"), d.updateStatus("error", o.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), d.updateStatus("ready"))) : (d.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), d.findImageSize(e))), t
				}
			}
		});
		var R, q = function () {
			return R === undefined && (R = document.createElement("p").style.MozTransform !== undefined), R
		};
		c.magnificPopup.registerModule("zoom", {
			options: {
				enabled: !1,
				easing: "ease-in-out",
				duration: 300,
				opener: function (e) {
					return e.is("img") ? e : e.find("img")
				}
			},
			proto: {
				initZoom: function () {
					var e, o = d.st.zoom,
						t = ".zoom";
					if (o.enabled && d.supportsTransition) {
						var n, i, r = o.duration,
							s = function (e) {
								var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
									n = "all " + o.duration / 1e3 + "s " + o.easing,
									i = {
										position: "fixed",
										zIndex: 9999,
										left: 0,
										top: 0,
										"-webkit-backface-visibility": "hidden"
									},
									r = "transition";
								return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = n, t.css(i), t
							},
							a = function () {
								d.content.css("visibility", "visible")
							};
						_("BuildControls" + t, function () {
							if (d._allowZoom()) {
								if (clearTimeout(n), d.content.css("visibility", "hidden"), !(e = d._getItemToZoom())) return void a();
								(i = s(e)).css(d._getOffset()), d.wrap.append(i), n = setTimeout(function () {
									i.css(d._getOffset(!0)), n = setTimeout(function () {
										a(), setTimeout(function () {
											i.remove(), e = i = null, S("ZoomAnimationEnded")
										}, 16)
									}, r)
								}, 16)
							}
						}), _(u + t, function () {
							if (d._allowZoom()) {
								if (clearTimeout(n), d.st.removalDelay = r, !e) {
									if (!(e = d._getItemToZoom())) return;
									i = s(e)
								}
								i.css(d._getOffset(!0)), d.wrap.append(i), d.content.css("visibility", "hidden"), setTimeout(function () {
									i.css(d._getOffset())
								}, 16)
							}
						}), _(l + t, function () {
							d._allowZoom() && (a(), i && i.remove(), e = null)
						})
					}
				},
				_allowZoom: function () {
					return "image" === d.currItem.type
				},
				_getItemToZoom: function () {
					return !!d.currItem.hasSize && d.currItem.img
				},
				_getOffset: function (e) {
					var t, n = (t = e ? d.currItem.img : d.st.zoom.opener(d.currItem.el || d.currItem)).offset(),
						i = parseInt(t.css("padding-top"), 10),
						r = parseInt(t.css("padding-bottom"), 10);
					n.top -= c(window).scrollTop() - i;
					var o = {
						width: t.width(),
						height: (w ? t.innerHeight() : t[0].offsetHeight) - r - i
					};
					return q() ? o["-moz-transform"] = o.transform = "translate(" + n.left + "px," + n.top + "px)" : (o.left = n.left, o.top = n.top), o
				}
			}
		});
		var H = "iframe",
			B = "//about:blank",
			z = function (e) {
				if (d.currTemplate[H]) {
					var t = d.currTemplate[H].find("iframe");
					t.length && (e || (t[0].src = B), d.isIE8 && t.css("display", e ? "block" : "none"))
				}
			};
		c.magnificPopup.registerModule(H, {
			options: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
				srcAction: "iframe_src",
				patterns: {
					youtube: {
						index: "youtube.com",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				}
			},
			proto: {
				initIframe: function () {
					d.types.push(H), _("BeforeChange", function (e, t, n) {
						t !== n && (t === H ? z() : n === H && z(!0))
					}), _(l + "." + H, function () {
						z()
					})
				},
				getIframe: function (e, t) {
					var n = e.src,
						i = d.st.iframe;
					c.each(i.patterns, function () {
						if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1
					});
					var r = {};
					return i.srcAction && (r[i.srcAction] = n), d._parseMarkup(t, r, e), d.updateStatus("ready"), t
				}
			}
		});
		var W = function (e) {
				var t = d.items.length;
				return t - 1 < e ? e - t : e < 0 ? t + e : e
			},
			U = function (e, t, n) {
				return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
			};
		c.magnificPopup.registerModule("gallery", {
			options: {
				enabled: !1,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				preload: [0, 2],
				navigateByImgClick: !0,
				arrows: !0,
				tPrev: "Previous (Left arrow key)",
				tNext: "Next (Right arrow key)",
				tCounter: "%curr% of %total%"
			},
			proto: {
				initGallery: function () {
					var o = d.st.gallery,
						e = ".mfp-gallery";
					if (d.direction = !0, !o || !o.enabled) return !1;
					h += " mfp-gallery", _(m + e, function () {
						o.navigateByImgClick && d.wrap.on("click" + e, ".mfp-img", function () {
							if (1 < d.items.length) return d.next(), !1
						}), f.on("keydown" + e, function (e) {
							37 === e.keyCode ? d.prev() : 39 === e.keyCode && d.next()
						})
					}), _("UpdateStatus" + e, function (e, t) {
						t.text && (t.text = U(t.text, d.currItem.index, d.items.length))
					}), _(p + e, function (e, t, n, i) {
						var r = d.items.length;
						n.counter = 1 < r ? U(o.tCounter, i.index, r) : ""
					}), _("BuildControls" + e, function () {
						if (1 < d.items.length && o.arrows && !d.arrowLeft) {
							var e = o.arrowMarkup,
								t = d.arrowLeft = c(e.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(b),
								n = d.arrowRight = c(e.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(b);
							t.click(function () {
								d.prev()
							}), n.click(function () {
								d.next()
							}), d.container.append(t.add(n))
						}
					}), _(s + e, function () {
						d._preloadTimeout && clearTimeout(d._preloadTimeout), d._preloadTimeout = setTimeout(function () {
							d.preloadNearbyImages(), d._preloadTimeout = null
						}, 16)
					}), _(l + e, function () {
						f.off(e), d.wrap.off("click" + e), d.arrowRight = d.arrowLeft = null
					})
				},
				next: function () {
					d.direction = !0, d.index = W(d.index + 1), d.updateItemHTML()
				},
				prev: function () {
					d.direction = !1, d.index = W(d.index - 1), d.updateItemHTML()
				},
				goTo: function (e) {
					d.direction = e >= d.index, d.index = e, d.updateItemHTML()
				},
				preloadNearbyImages: function () {
					var e, t = d.st.gallery.preload,
						n = Math.min(t[0], d.items.length),
						i = Math.min(t[1], d.items.length);
					for (e = 1; e <= (d.direction ? i : n); e++) d._preloadItem(d.index + e);
					for (e = 1; e <= (d.direction ? n : i); e++) d._preloadItem(d.index - e)
				},
				_preloadItem: function (e) {
					if (e = W(e), !d.items[e].preloaded) {
						var t = d.items[e];
						t.parsed || (t = d.parseEl(e)), S("LazyLoad", t), "image" === t.type && (t.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
							t.hasSize = !0
						}).on("error.mfploader", function () {
							t.hasSize = !0, t.loadError = !0, S("LazyLoadError", t)
						}).attr("src", t.src)), t.preloaded = !0
					}
				}
			}
		});
		var X = "retina";
		c.magnificPopup.registerModule(X, {
			options: {
				replaceSrc: function (e) {
					return e.src.replace(/\.\w+$/, function (e) {
						return "@2x" + e
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function () {
					if (1 < window.devicePixelRatio) {
						var n = d.st.retina,
							i = n.ratio;
						1 < (i = isNaN(i) ? i() : i) && (_("ImageHasSize." + X, function (e, t) {
							t.img.css({
								"max-width": t.img[0].naturalWidth / i,
								width: "100%"
							})
						}), _("ElementParse." + X, function (e, t) {
							t.src = n.replaceSrc(t, i)
						}))
					}
				}
			}
		}), E()
	}),
	function () {
		var e, n, i, r, t, o, d, s, a, l, u, c, f, h;
		u = function (e) {
			var t;
			return t = $(".limits--phone-button-next").data("limits-url"), $.ajax(t, {
				type: "get",
				data: {
					phone: e
				}
			}).done(function (e) {
				return e.valid ? (i(e.phone), h(e.counts_html), r(e.form_html), f(e.desc_html), s(e.user_id), 0 < e.left.total ? c(3) : c(2)) : n()
			})
		}, n = function () {
			return $(".limits--phone-error").show()
		}, o = function () {
			var e;
			if (e = $("#auto_phones").val()) return u(e)
		}, d = function () {
			if (window.az && az.PaymentForm && az.PaymentForm.chooseFirstProvider(), window.chooseFirstProvider) return chooseFirstProvider()
		}, l = function (e, t, n, i) {
			var r, o, s, a, l, u, c;
			return o = $(e), r = $(t), l = $(".limits-container").width(), s = 200, a = "easeOutQuart", c = ["+", "-"], c = n ? c : c.reverse(), u = "animation-running", o.addClass(u), o.animate({
				"margin-left": c[1] + "=" + l
			}, s, a, function () {
				return o.removeClass(u), o.hide(), r.css("margin-left", c[0] + l + "px").show(), 2 === i && d(), r.addClass(u), r.animate({
					"margin-left": "0"
				}, s, a, function () {
					return r.removeClass(u)
				}), $("html, body").animate({
					scrollTop: $(".limits:visible").position().top - 56
				}, 200)
			})
		}, c = function (e) {
			switch (e) {
				case 1:
					return $(".limits--info").is(":hidden") && l(".limits--exceed", ".limits--info", !1, 1), $("#new_auto, .form-header").animate({
						opacity: .2
					}), $("#new_auto").addClass("disabled").find(":input, button").prop({
						disabled: !0
					});
				case 2:
					return l(".limits--info", ".limits--exceed", !0, 2);
				case 3:
					if ($("#new_auto, .form-header").animate({
							opacity: 1
						}), $("#new_auto").removeClass("disabled").find(":input, button").prop({
							disabled: !1
						}), l(".limits--info, .limits--exceed", ".limits--limit", !0, 3), "mobile" !== $("body").data("format")) return $(".pond-img-card, .pond-new-img-button").addClass("hoverable")
			}
		}, i = function (e) {
			return $("#auto_phones").val(e)
		}, h = function (e) {
			return $(".limits--limit .limits--description").html(e)
		}, r = function (e) {
			return $(".limits--pay-form-container").html(e)
		}, f = function (e) {
			return $(".limits--exceed .limits--description").html(e)
		}, s = function (e) {
			return $('[name="payment[target_type]"]').val("User"), $('[name="payment[target_id]"]').val(e)
		}, t = function () {
			return 0 < $(".limits--info").length
		}, a = function () {
			return window.paymentFinished = function () {
				return u($("#ajs-pond-img-carduto_phones").val()), c(3)
			}
		}, e = function (e) {
			var t, n, i;
			return n = (i = $(e)).closest(".limits"), t = n.find(".limits--button"), i.find(".progress-loader").fadeIn(200).css("display", "inline-block").delay(1600).fadeOut(200), t.addClass("btn-loading"), setTimeout(function () {
				return t.removeClass("btn-loading")
			}, 2e3)
		}, $(function () {
			if (null, o(), $(".limits--phone-button-next").click(function () {
					return e(this), u($(".limits--phone-number").val())
				}), t() && (a(), c(1)), 0 < $(".limits--pay-form-container .new_payment").length && window.chooseFirstProvider && chooseFirstProvider(), $(document).on("click", ".limits--exceed .limits--button-next", function () {
					return e(this), $(".limits--pay-form-container").find(".new_payment:visible").submit()
				}), VMasker($(".limits--phone-number")).maskPattern("(999) 999-99-99"), $(".limits--phone-number").on("change keyup input", function () {
					var e;
					return e = $(".limits--phone-button-next"), $(this).val().replace(/\D/g, "").length < 10 ? e.addClass("disabled") : e.removeClass("disabled")
				}).on("change keyup", function () {
					var e, t, n;
					if (t = $(this).val().length, n = $(this).val().replace(/\D/g, "").length, e = $(this), 3 === n && 4 === t) return setTimeout(function () {
						return e.val(e.val().concat(") "))
					}, 100)
				}).on("keypress", function (e) {
					if (13 === e.which && 0 === $(".limits--phone-button-next.disabled").length) return $(".limits--phone-button-next").trigger("click")
				}), $(document).on("click", ".limits--exceed .limits--button-back", function () {
					return e(this), c(1)
				}), $(".payment-form-container").length) return new PaymentModal($(".limits--exceed"))
		})
	}.call(this), window.adriverExtentionLoad = function (e, t, n) {
		0 == e && (["js-lotriver-text-banner", "js-lotriver-load-banner"].indexOf(n) < 0 && (document.getElementById(n).style.height = "0"), /js-lotriver-right-banner[1-3]/.test(n) && (document.getElementById(n).style.border = "0"))
	},
	function () {
		$("button.choose-type-i--button").click(function () {
			return $(this).closest("form").submit()
		})
	}.call(this),
	function () {
		countersLoader.ga(), ga("create", "UA-30020417-2", "turbo.az"), ga("require", "displayfeatures"), ga("send", "pageview"), countersLoader.li(), countersLoader.tagManager("GTM-WZC4WQ")
	}.call(this),
	function () {
		window.Detector = {
			ios: /iPhone|iPad|iPod/i.test(navigator.userAgent),
			iphone: /iPhone/i.test(navigator.userAgent)
		}
	}.call(this),
	function () {
		"use strict";

		function e(e) {
			d.push(e), 1 == d.length && c()
		}

		function t() {
			for (; d.length;) d[0](), d.shift()
		}

		function o(e) {
			this.a = f, this.b = void 0, this.f = [];
			var t = this;
			try {
				e(function (e) {
						s(t, e)
					},
					function (e) {
						l(t, e)
					})
			} catch (n) {
				l(t, n)
			}
		}

		function n(n) {
			return new o(function (e, t) {
				t(n)
			})
		}

		function a(t) {
			return new o(function (e) {
				e(t)
			})
		}

		function s(t, e) {
			if (t.a == f) {
				if (e == t) throw new TypeError;
				var n = !1;
				try {
					var i = e && e.then;
					if (null != e && "object" == typeof e && "function" == typeof i) return void i.call(e, function (e) {
						n || s(t, e), n = !0
					}, function (e) {
						n || l(t, e), n = !0
					})
				} catch (r) {
					return void(n || l(t, r))
				}
				t.a = 0, t.b = e, u(t)
			}
		}

		function l(e, t) {
			if (e.a == f) {
				if (t == e) throw new TypeError;
				e.a = 1, e.b = t, u(e)
			}
		}

		function u(o) {
			e(function () {
				if (o.a != f)
					for (; o.f.length;) {
						var e = (i = o.f.shift())[0],
							t = i[1],
							n = i[2],
							i = i[3];
						try {
							0 == o.a ? n("function" == typeof e ? e.call(void 0, o.b) : o.b) : 1 == o.a && ("function" == typeof t ? n(t.call(void 0, o.b)) : i(o.b))
						} catch (r) {
							i(r)
						}
					}
			})
		}

		function i(s) {
			return new o(function (n, e) {
				function t(t) {
					return function (e) {
						r[t] = e, (i += 1) == s.length && n(r)
					}
				}
				var i = 0,
					r = [];
				0 == s.length && n(r);
				for (var o = 0; o < s.length; o += 1) a(s[o]).c(t(o), e)
			})
		}

		function r(i) {
			return new o(function (e, t) {
				for (var n = 0; n < i.length; n += 1) a(i[n]).c(e, t)
			})
		}
		var c, d = [];
		c = function () {
			setTimeout(t)
		};
		var f = 2;
		o.prototype.g = function (e) {
			return this.c(void 0, e)
		}, o.prototype.c = function (n, i) {
			var r = this;
			return new o(function (e, t) {
				r.f.push([n, i, e, t]), u(r)
			})
		}, window.Promise || (window.Promise = o, window.Promise.resolve = a, window.Promise.reject = n, window.Promise.race = r, window.Promise.all = i, window.Promise.prototype.then = o.prototype.c, window.Promise.prototype["catch"] = o.prototype.g)
	}(),
	function () {
		function r(e, t) {
			s ? e.addEventListener("scroll", t, !1) : e.attachEvent("scroll", t)
		}

		function n(e) {
			document.body ? e() : s ? document.addEventListener("DOMContentLoaded", e) : document.onreadystatechange = function () {
				"interactive" == document.readyState && e()
			}
		}

		function w(e) {
			this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(e)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c)
		}

		function x(e, t) {
			e.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + t + ";"
		}

		function o(e) {
			var t = e.a.offsetWidth,
				n = t + 100;
			return e.f.style.width = n + "px", e.c.scrollLeft = n, e.b.scrollLeft = e.b.scrollWidth + 100, e.g !== t && (e.g = t, !0)
		}

		function _(e, t) {
			function n() {
				var e = i;
				o(e) && null !== e.a.parentNode && t(e.g)
			}
			var i = e;
			r(e.b, n), r(e.c, n), o(e)
		}

		function e(e, t) {
			var n = t || {};
			this.family = e, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal"
		}

		function i() {
			if (null === a) {
				var e = document.createElement("div");
				try {
					e.style.font = "condensed 100px sans-serif"
				} catch (t) {}
				a = "" !== e.style.font
			}
			return a
		}

		function C(e, t) {
			return [e.style, e.weight, i() ? e.stretch : "", "100px", t].join(" ")
		}
		var s = !!document.addEventListener,
			S = null,
			a = null,
			l = !!window.FontFace;
		e.prototype.a = function (e, t) {
			var g = this,
				v = e || "BESbswy",
				y = t || 3e3,
				b = (new Date).getTime();
			return new Promise(function (p, m) {
				if (l) {
					var e = new Promise(function (t, e) {
							function n() {
								(new Date).getTime() - b >= y ? e() : document.fonts.load(C(g, g.family), v).then(function (e) {
									1 <= e.length ? t() : setTimeout(n, 25)
								}, function () {
									e()
								})
							}
							n()
						}),
						t = new Promise(function (e, t) {
							setTimeout(t, y)
						});
					Promise.race([t, e]).then(function () {
						p(g)
					}, function () {
						m(g)
					})
				} else n(function () {
					function t() {
						var e;
						(e = -1 != s && -1 != a || -1 != s && -1 != l || -1 != a && -1 != l) && ((e = s != a && s != l && a != l) || (null === S && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), S = !!e && (parseInt(e[1], 10) < 536 || 536 === parseInt(e[1], 10) && parseInt(e[2], 10) <= 11)), e = S && (s == u && a == u && l == u || s == c && a == c && l == c || s == d && a == d && l == d)), e = !e), e && (null !== f.parentNode && f.parentNode.removeChild(f), clearTimeout(h), p(g))
					}

					function n() {
						if ((new Date).getTime() - b >= y) null !== f.parentNode && f.parentNode.removeChild(f), m(g);
						else {
							var e = document.hidden;
							!0 !== e && void 0 !== e || (s = i.a.offsetWidth, a = r.a.offsetWidth, l = o.a.offsetWidth, t()), h = setTimeout(n, 50)
						}
					}
					var i = new w(v),
						r = new w(v),
						o = new w(v),
						s = -1,
						a = -1,
						l = -1,
						u = -1,
						c = -1,
						d = -1,
						f = document.createElement("div"),
						h = 0;
					f.dir = "ltr", x(i, C(g, "sans-serif")), x(r, C(g, "serif")), x(o, C(g, "monospace")), f.appendChild(i.a), f.appendChild(r.a), f.appendChild(o.a), document.body.appendChild(f), u = i.a.offsetWidth, c = r.a.offsetWidth, d = o.a.offsetWidth, n(), _(i, function (e) {
						s = e, t()
					}), x(i, C(g, '"' + g.family + '",sans-serif')), _(r, function (e) {
						a = e, t()
					}), x(r, C(g, '"' + g.family + '",serif')), _(o, function (e) {
						l = e, t()
					}), x(o, C(g, '"' + g.family + '",monospace'))
				})
			})
		}, window.FontFaceObserver = e, window.FontFaceObserver.prototype.check = e.prototype.a, "undefined" != typeof module && (module.exports = window.FontFaceObserver)
	}(),
	function () {
		var e, t, n;
		new FontFaceObserver("Source Sans Pro", {
			weight: "bold"
		}).check().then(function () {
			return document.documentElement.className += " font-source-sans"
		}), e = new FontFaceObserver("Helvetica Neue", {
			weight: 400
		}), t = new FontFaceObserver("Helvetica Neue", {
			weight: 500
		}), n = new FontFaceObserver("Helvetica Neue", {
			weight: 700
		}), Promise.all([e.check(), t.check(), n.check()]).then(function () {
			return document.documentElement.className += " fonts-loaded"
		})
	}.call(this),
	function () {
		$.fn.clear_form_errors = function () {
			return this.find(".has-error").removeClass("has-error"), this.find("span.error").text("")
		}, $.fn.clear_form_fields = function () {
			return this.find("[type='text'], [type='tel'], [type='email'], [type='range']").prop({
				value: ""
			}), this.find("[type='radio'], [type='checkbox']").prop({
				checked: !1
			})
		}, $.fn.render_form_errors = function (e, t) {
			var n;
			return (n = this).clear_form_errors(), $.each(t, function (t, e) {
				return n.find("input, select, textarea").filter(function () {
					var e;
					if (e = $(this).data("name")) return e === t
				}).addClass("has-error").siblings("span.error").text($.map(e, function (e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				}).join("<br />"))
			})
		}
	}.call(this),
	function () {
		var e;
		e = function () {
			function e(e) {
				this.sectionsContentIsLoading = !1, this.sectionsContentIsLoaded = !1, this.repeatRequest = 0, this.sectionsContent = {}, this.section = e, this.bindScroll(), this.getSectionsContent()
			}
			return e.prototype.isOnScreen = function (e) {
				var t, n, i, r, o, s, a;
				if (e.length) return o = (a = (t = $(window)).scrollTop()) + (s = t.height()), n = (r = e.offset().top) + (i = e.height()), a <= r && r < o || a < n && n <= o || s < i && r <= a && o <= n
			}, e.prototype.getSectionsContent = function () {
				return $.ajax({
					type: "GET",
					url: "/home/lazy_sections.json",
					beforeSend: (i = this, function () {
						return i.sectionsContentIsLoading = !0
					}),
					success: (n = this, function (e) {
						if ("" !== e) return n.sectionsContent = e.sections, n.repeatRequest = 0, n.sectionsContentIsLoaded = !0, n.onPageLoadCheck()
					}),
					error: (t = this, function () {
						if (!(9 < t.repeatRequest)) return t.repeatRequest++;
						t.repeatRequest = 0
					}),
					complete: (e = this, function () {
						return e.sectionsContentIsLoading = !1
					})
				});
				var e, t, n, i
			}, e.prototype.loadSection = function (e) {
				var t;
				if (t = e.attr("data-section"), e.addClass("loading"), !this.sectionsContentIsLoading || this.sectionsContentIsLoaded) return e.html(this.sectionsContent[t]).removeAttr("data-section").removeClass("loading"), this.renderScripts(e)
			}, e.prototype.loadIfOnScreen = function (e) {
				if (this.isOnScreen(e)) return this.loadSection(e)
			}, e.prototype.onPageLoadCheck = function () {
				var e, t;
				return e = Object.keys(this.sectionsContent).length, this.setIntervalX((t = this, function () {
					return t.loadIfOnScreen($(t.section).first())
				}), 100, e)
			}, e.prototype.setIntervalX = function (e, t, n) {
				var i, r;
				return r = 0, i = window.setInterval(function () {
					e(), ++r === n && window.clearInterval(i)
				}, t)
			}, e.prototype.renderScripts = function (e) {
				if (!$("body[data-format='mobile']").length) return "section-featured" === e.attr("id") && window.modalPromotion(), window.bindLogs()
			}, e.prototype.bindScroll = function () {
				return $(window).on("scroll", (e = this, function () {
					return 0 < e.repeatRequest && !e.sectionsContentIsLoading && !e.sectionsContentIsLoaded ? e.getSectionsContent() : e.loadIfOnScreen($(e.section).first())
				}));
				var e
			}, e
		}(), $(function () {
			if ($("section[data-section]").length) return new e("section[data-section]")
		})
	}.call(this),
	function () {
		var e;
		e = function () {
			var e, t, n;
			return window.mapReady = !0, e = window.google.maps, t = $("#map").data(), n = new e.Map($("#map")[0], {
				zoom: 17,
				center: t
			}), new e.Marker({
				position: t,
				map: n,
				animation: e.Animation.DROP
			})
		}, $(function () {
			return $(".shop--open-location-modal, .js-supplies-shop-open-map").click(function () {
				if (!window.mapReady) return e()
			})
		})
	}.call(this),
	function () {
		$(function () {
			return $(".phones input").mask("(999) 999-99-99")
		})
	}.call(this),
	function () {
		-1 !== navigator.appVersion.indexOf("Win") && (document.documentElement.className += " windows-os")
	}.call(this),
	function () {
		var t;
		t = function (e) {
			var t, n, i;
			return n = $(document).find(e), t = $(document).find(".header-tabs"), i = "true" === n.parent().attr("data-mobile") ? t.height() + 20 : 10, $("html, body").animate({
				scrollTop: n.offset().top - i
			})
		}, $(function () {
			var e;
			if (0 < (e = $(document).find(".paid-services .section-link")).length) return 0 < location.hash.length && t(location.hash), e.on("click", function (e) {
				return e.preventDefault(), t("#" + $(this).attr("data-id"))
			})
		})
	}.call(this),
	function () {
		$(function () {
			if ($(".js-wallet-modal-target").click(function () {
					if ($("#js-profile-wallet-replenishment").reveal({
							animation: "fade"
						}), window.chooseFirstProvider) return chooseFirstProvider()
				}), 0 < $("#js-profile-wallet-replenishment").length) return window.paymentFinished = function () {
				return $("#js-profile-wallet-replenishment").trigger("reveal:close")
			}
		})
	}.call(this),
	function () {
		var a, l, u, e, c, d;
		d = $.Callbacks(), c = $.Callbacks(), e = $.Callbacks(), l = 7, a = 16, $(function () {
			return $("#enable_map").change(function () {
				return $("#enable_map").prop("checked") ? ($("#js-profile-shop-location").removeClass("hidden"), c.fire()) : ($("#js-profile-shop-location").addClass("hidden"), e.fire())
			})
		}), d.add(function (e) {
			return $("#shop_latitude").val(e.getPosition().lat()), $("#shop_longitude").val(e.getPosition().lng())
		}), e.add(function () {
			return $("#shop_latitude").val(""), $("#shop_longitude").val("")
		}), c.add(function () {
			return window.profile_shop_location_maps_init()
		}), u = function (e, t, n) {
			var i, r, o;
			return (r = new google.maps.Map($("#shop-location-minimap").get(0), {
				center: t,
				zoom: n,
				gestureHandling: "none",
				keyboardShortcuts: !1,
				panControl: !1,
				fullscreenControl: !1,
				clickableIcons: !1
			})).addListener("click", function () {
				return $("#profile-shop-map-popup").reveal()
			}), i = function (e) {
				return new google.maps.Marker({
					position: e,
					map: r,
					draggable: !1
				})
			}, o = e && i(e), d.add(function (e) {
				var t;
				return t = {
					lat: e.getPosition().lat(),
					lng: e.getPosition().lng()
				}, o ? o.setPosition(t) : o = i(t), r.setCenter(t), r.setZoom(a)
			})
		}, window.profile_shop_location_maps_init = function () {
			var n, e, i, t, r, o, s;
			if ($("#shop-location-map").is(":visible") && null == window.profile_shop_location_map) return t = $("#shop_latitude").val(), r = $("#shop_longitude").val(), null != t && "" !== t && null != r && "" !== r ? (e = {
				lat: parseFloat(t),
				lng: parseFloat(r)
			}, s = a, i = !0) : (s = l, i = !(e = {
				lat: 40.378,
				lng: 49.892
			})), o = new google.maps.Map(document.getElementById("shop-location-map"), {
				center: e,
				zoom: s
			}), window.profile_shop_location_map = o, n = function (e) {
				var t;
				return (t = new google.maps.Marker({
					position: e,
					map: o,
					draggable: !0
				})).addListener("dragend", function () {
					return d.fire(t)
				}), c.add(function () {
					return d.fire(t)
				}), t
			}, i && (n(e), i = !0), o.addListener("click", function (e) {
				var t;
				if (!i) return t = n(e.latLng), d.fire(t), i = !0
			}), 0 < $("#shop-location-minimap").length ? u(i && e, e, s) : void 0
		}
	}.call(this),
	function () {
		var i, r, e, o, s;
		i = function (e) {
			return $(".reveal-modal_prolong").find(".limits--pay-form-container").html(e.form_html)
		}, o = function (e) {
			switch (e) {
				case 1:
					return $(".limits.limits--exceed").show(), $(".confirm-prolong").hide();
				case 2:
					return $(".limits.limits--exceed").hide(), $(".confirm-prolong").show()
			}
		}, r = function () {
			return window.az && az.PaymentForm && az.PaymentForm.chooseFirstProvider(), window.chooseFirstProvider && (window.activeModal = new PaymentModal($(".reveal-modal_prolong")), chooseFirstProvider()), e()
		}, e = function () {
			return window.paymentFinished = function () {
				return o(2), $(".reveal-modal_prolong").reveal({
					animation: "fade"
				})
			}
		}, s = function (e) {
			return $(".limits--exceed .limits--description").html(e)
		}, $(function () {
			if ($(".js-click-prolong").click(function (e) {
					var t, n;
					return e.preventDefault(), n = $(this).data("phone"), (t = $(this)).addClass("disabled").find(".progress-loader").fadeIn(200).css("display", "inline-block"), $.ajax($(this).data("url"), {
						type: "get",
						data: {
							phone: n,
							no_phone: !0
						}
					}).done(function (e) {
						if (e.valid) return 0 < e.left.paid ? o(2) : 0 < $(".limits--pay-form-container .pay, .limits--pay-form-container .payment-form-container").length || (o(1), i(e), s(e.desc_html), r()), $(".reveal-modal_prolong").reveal({
							animation: "fade"
						}), t.removeClass("disabled").find(".progress-loader").fadeOut(200)
					}), $(".reveal-modal_prolong .payment-form-container .providers-radio:first input").click()
				}), window.location.hash.match(/#prolong/)) return $(".js-click-prolong").click()
		})
	}.call(this),
	function () {
		$(function () {
			var e, t, i, n;
			return e = $("#new_report"), n = $(".js-product-report"), t = $(".report-container"), i = $("#report_response"), n.click(function (e) {
				return e.preventDefault(), $(this).toggleClass("active"), i.html(""), t.stop().slideToggle(300)
			}), $("#new_report input").change(function () {
				return e.submit(function () {
					return $(this).on({
						"ajax:success": function () {
							return t.stop().slideToggle(300), i.html(""), n.addClass("report-sent"), setTimeout(function () {
								return t.remove()
							}, 500)
						},
						"ajax:error": function (e, t, n) {
							if ("timeout" !== n) return i.html(t.responseText)
						}
					})
				}), e.submit()
			})
		})
	}.call(this),
	function (o) {
		o(function () {
			o(document).on("click", "a[data-reveal-id]", function (e) {
				e.preventDefault();
				var t = o(this).attr("data-reveal-id");
				o("#" + t).reveal()
			})
		}), o.fn.reveal = function (r) {
			return this.each(function () {
				function e() {
					n.fadeOut(300), t.unbind("reveal:close", e).removeClass("reveal-modal_opened").fadeOut(300)
				}
				var t = o(this),
					n = o(".reveal-modal-bg");
				0 == n.length && (n = o('<div class="reveal-modal-bg" />').insertAfter(t)).fadeTo("fast", .8);
				var i = (n.fadeIn(300).css({
					cursor: "pointer"
				}), t.unbind("reveal:open", i).css({
					visibility: "visible"
				}).addClass("reveal-modal_opened").fadeIn(300, function () {
					"function" == typeof r && setTimeout(r, 150)
				}), void n.bind("click.modalEvent", function () {
					t.trigger("reveal:close")
				}));
				t.bind("reveal:open", i), t.bind("reveal:close", e);
				o(".close-reveal-modal, .close-modal").bind("click.modalEvent", function () {
					t.trigger("reveal:close")
				});
				o("body").keyup(function (e) {
					27 === e.which && t.trigger("reveal:close")
				})
			})
		}
	}(jQuery),
	function () {
		var t, e, n;
		n = function (e) {
			return !0 === e ? document.body.addEventListener("touchmove", t, {
				passive: !1
			}) : document.body.removeEventListener("touchmove", t, {
				passive: !1
			})
		}, t = function (e) {
			return e.preventDefault()
		}, e = function (e) {
			return setTimeout(function () {
				if ($("html").toggleClass("no-scroll", e), Detector.iphone) return n(e)
			}, 0)
		}, window.bindRevealModalActions = function () {
			return $(".reveal-modal").on("reveal:open", function () {
				return e(!0)
			}).on("reveal:close", function () {
				return e(!1)
			})
		}, $(function () {
			return window.bindRevealModalActions()
		})
	}.call(this),
	function () {
		var e;
		e = function () {
			function e(e) {
				this.revealLink = $(".products-follow"), this.emailModal = e, this.paymentModal = $("#search_alerts_modal"), this.activeModal = this.emailModal, this.emailForm = $("form#new_search_alert"), this.paymentForm = $(".new_payment"), this.bindActions()
			}
			return e.prototype.bindActions = function () {
				var t, r, n;
				return this.revealLink.on("click", (t = this, function (e) {
					return e.preventDefault(), t.activeModal.reveal({
						animation: "fade"
					})
				})), this.emailForm.on({
					"ajax:success": (n = this, function (e, t) {
						return n.emailModal.trigger("reveal:close"), n.activeModal = n.paymentModal, n.paymentModal.reveal({
							animation: "fade"
						}), window.activeModal = new PaymentModal($("#search_alerts_modal")), n.paymentForm.find("[name='payment[target_id]']").val(t.id)
					}),
					"ajax:error": (r = this, function (e, t, n) {
						var i;
						if ("timeout" !== n) return i = JSON.parse(t.responseText), r.emailForm.find(".error").html(i.errors.email)
					})
				})
			}, e
		}(), $(function () {
			return new e($(".reveal-modal#search_alerts_form"))
		})
	}.call(this),
	function () {
		$(function () {
			return $(".super-vip--button").click(function () {
				return $("#js-new-shop-request").reveal({
					animation: "fade"
				})
			})
		})
	}.call(this),
	function () {
		$(function () {
			var e;
			return $("#sort-variants").change(function () {
				var e, t;
				return e = location.origin, t = $(this).find(":selected").data("path"), location.href = e + t
			}), e = getParamFromUrl("sort") || "created_at", $("#sort-variants").val(e)
		})
	}.call(this),
	function () {
		$(function () {
			return $(".js-payment-in-terminals-btn").click(function () {
				return $("#terminal-promotion-modal").reveal({
					animation: "fade"
				})
			}), $(".js-terminal-promotion-back-btn").click(function () {
				return $("#terminal-promotion-modal").hide()
			})
		})
	}.call(this),
	function () {
		window.UserActions = function () {
			function e() {
				this.actionFormContainer = $(".action-form-container"), this.confirm = $(".confirm"), this.bindConfirm()
			}
			return e.prototype.bindConfirm = function () {
				return this.confirm.on({
					"ajax:success": function () {
						return location.reload(!0)
					},
					"ajax:error": (i = this, function (e, t, n) {
						if ("timeout" !== n) return i.showErrorMessage(i.confirm, t)
					})
				});
				var i
			}, e.prototype.showErrorMessage = function (e, t) {
				var n;
				return n = JSON.parse(t.responseText), e.find(".error").html(n.message)
			}, e.prototype.revealActionModal = function (e) {
				return e.reveal({
					animation: "fade"
				}), e.find("input").focus()
			}, e
		}()
	}.call(this),
	function () {
		var t, e;
		e = function () {
			var e;
			return e = "/show_modal", $.get(e, function (e) {
				return $("body").append(e), $(".vip-promote").reveal({
					animation: "fade"
				}), $(".vip-car--button").on("click", function () {
					return t("checkout"), $(".vip-promote").trigger("reveal:close")
				}), $(".vip-promote").find(".close-reveal-modal, .close-modal").on("click", function () {
					return t("close")
				})
			})
		}, t = function (e) {
			var t, n;
			return n = "/modal_action", t = $(".vip-car--info").data("ad"), $.post(n, {
				ad_id: t,
				name: e
			})
		}, $(function () {
			if (0 < $(".layout_ads_index, .layout_ads_show").length) return setTimeout(e, 12e3)
		})
	}.call(this),
	function () {
		var e;
		e = function () {
			function e(e) {
				var t;
				this.el = e, this.index = -1, this.animate(), setInterval((t = this, function () {
					return t.animate()
				}), 5e3)
			}
			return e.prototype.animate = function () {
				return this.checkIndex(), this.el.filter(".fadeInDown").removeClass("fadeInDown").addClass("fadeOutDown"), this.el.eq(this.index).addClass("fadeInDown")
			}, e.prototype.checkIndex = function () {
				if (this.index++, this.el.removeClass("fadeOutDown"), 2 === this.index) return this.index = 0
			}, e
		}(), $(function () {
			return new e($(".ad-count--animation"))
		})
	}.call(this),
	function () {
		$(function () {
			var e, t, n;
			return n = $(".multiple-select").selectpicker(), e = n.filter("#q_make"), t = n.filter("#q_model"), e.on("change", function () {
				return e.val() && 1 < e.val().length ? t.val("").attr("disabled", "disabled") : t.removeAttr("disabled"), t.selectpicker("refresh")
			})
		})
	}.call(this),
	function () {
		$(function () {
			if (!$("#catfish").data("hidden")) return new adriver("catfish", {
				sid: "220552",
				bn: "3",
				bt: "52",
				w: "700",
				h: "120"
			})
		})
	}.call(this),
	function () {
		var n, i, o, s, a, l, t, r, u, c;
		n = 3, i = 21, a = function (e, t) {
			return n < t ? e.addClass("pond--compact") : e.removeClass("pond--compact"), c(t), r(t)
		}, o = function (e) {
			return e.find(".pond-img").length
		}, s = function (e, t) {
			return e.slice(0, t).hide()
		}, u = function (e, t) {
			if (t < n) return e.eq(t).show()
		}, c = function (e) {
			return $(".js-pond-img-count").text(i - e), i <= e ? ($(".pond-message").hide(), $(".pond-new-img-button").addClass("hidden")) : ($(".pond-message").removeAttr("style"), $(".pond-new-img-button").removeClass("hidden"))
		}, l = function (e) {
			var t;
			for (t = []; i <= e;) $(".pond-img").eq(e).remove(), t.push(e--);
			return t
		}, r = function (e) {
			return 0 < e ? ($("#js-pond-img-labels").show(), t(e)) : $("#js-pond-img-labels").hide()
		}, t = function (e) {
			if (0 < e) return $(".js-pond-img-label").hide().slice(0, e).css("display", "inline-block")
		}, $(function () {
			var t, e, n, i, r;
			if ($(".pond").length) return n = $(".pond"), i = o(n), e = $("#js-hidden-block"), $(".pond-img-list").prepend($(".pond-new-img-button")).prepend(e.html()), e.remove(), t = n.find(".js-pond-img-card"), $(".pond-message").html($(".js-pond-msg").html()), $(".js-pond-msg").remove(), s(t, i), a(n, i), 0 < $(".edit-request").length && $(".pond-img-card, .pond-new-img-button").addClass("hoverable"), $(".pond-img-list").sortable().sortable("disable"), r = $(".pond-img-list")[0], Sortable.create(r, {
				handle: "img"
			}), t.on("click", function () {
				return $(this).closest(".pond").find("input:file").click()
			}), $(document).on("click", ".pond-img-delete", function () {
				return i = o(n), u(t, i), a(n, i)
			}), new MutationObserver(function (e) {
				return e.map(function () {
					return i = o(n), s(t, i), l(i), a(n, i)
				})
			}).observe($(".pond-img-list")[0], {
				childList: !0
			})
		})
	}.call(this),
	function () {
		var e, n = function (e, t) {
				function n() {
					this.constructor = e
				}
				for (var i in t) r.call(t, i) && (e[i] = t[i]);
				return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
			},
			r = {}.hasOwnProperty;
		e = function (e) {
			function t() {
				t.__super__.constructor.apply(this, arguments), this.modalEdit = $(".reveal-modal.confirm-edit"), this.bindActions(), this.checkActionParam()
			}
			return n(t, e), t.prototype.bindActions = function () {
				return $(".js-click-edit-request").on("click", (t = this, function (e) {
					return e.preventDefault(), t.revealActionModal(t.modalEdit)
				}));
				var t
			}, t.prototype.bindConfirm = function () {}, t.prototype.checkActionParam = function () {
				if (window.location.hash.match(/#edit/)) return this.revealActionModal(this.modalEdit), window.location.hash = ""
			}, t
		}(UserActions), $(function () {
			return new e
		})
	}.call(this),
	function () {
		$(function () {
			var t, n, i, e;
			return t = $("#q_mileage_from"), n = $("#q_mileage_to"), i = $("#q_used"), e = function () {
				var e;
				return e = "" === t.val() && "" === n.val(), i.attr("disabled", !e), i.parent().toggle(e)
			}, t.change(e), n.change(e), e()
		})
	}.call(this),
	function () {
		$(function () {
			return $(".products-follow--close").click(function () {
				return $.post("/hide_follow"), $(".products-follow-container").fadeOut(300)
			})
		})
	}.call(this),
	function () {
		window.bindLogs = function () {
			return $("#bump_modal, #vip_modal, #featured_modal, #pin_recovery_modal, #relist_modal").find(".new_payment .action").on("click", function () {
				var e, t, n;
				return t = (e = $(this).closest("form")).find('input[name="payment[target_id]"]').val(), n = e.find('input[name="payment[service_id]"]:checked').val(), $.post("/payments/init", {
					item_id: t,
					service_id: n
				})
			})
		}, $(function () {
			return window.bindLogs()
		})
	}.call(this),
	function () {
		var n;
		n = function (e) {
			var t, n, i, r, o;
			for (r = {
					"\u018f": "E",
					"\xdc": "U",
					"\xd6": "O",
					"\u011e": "Gh",
					"\u015e": "Sh",
					"\xc7": "Ch",
					"\u0130": "I",
					"\u0259": "e",
					"\xfc": "u",
					"\xf6": "o",
					"\u011f": "gh",
					"\u015f": "sh",
					"\xe7": "ch",
					"\u0131": "i"
				}, t = e.split(""), o = [], n = 0; n < t.length;) i = t[n], -1 !== Object.keys(r).indexOf(i) ? o.push(r[i]) : o.push(i), n += 1;
			return 0 <= (o = o.join("").split(" ").join("-")).indexOf("-/-") ? o.split("-/-").join("-") : o
		}, $(function () {
			var e, t;
			if (0 < (e = $("#js-lotriver-bg-banner")).length && !e.data("hidden")) return (t = [])[1] = n(e.data("categoryName")), t[2] = e.data("price"), t[3] = e.data("year"), new adriver("js-lotriver-bg-banner", {
				sid: 220552,
				bt: 52,
				bn: 9,
				custom: t
			})
		})
	}.call(this),
	function () {
		$(function () {
			return $(".product-photos a").magnificPopup({
				type: "image",
				mainClass: "mfp-fade",
				gallery: {
					enabled: !0
				}
			}), $(".supplies-shop-gallery_item").magnificPopup({
				callbacks: {
					elementParse: function (e) {
						return "supplies-shop-gallery_item supplies-shop-gallery_item--video" === e.el.context.className ? e.type = "iframe" : e.type = "image"
					}
				},
				gallery: {
					enabled: !0
				},
				type: "image",
				iframe: {
					patterns: {
						youtube: {
							src: "//www.youtube.com/embed/%id%?autoplay=0"
						}
					}
				}
			})
		})
	}.call(this),
	function () {
		var r, o, s;
		window.PaymentModal = function () {
			function e(e) {
				var t, i, n;
				this.modal = e, t = this.modal, this.adIdForm = new r(t.find(".prompt")), this.verificationResult = new s(t.find(".verification")), this.paymentForm = new o(t.find(".payment-form")), this.description = t.find(".description"), this.price = t.find("p.price"), this.thankYou = t.find(".thank-you"), this.serviceId = t.find("#payment_service_id").val(), this.spinner = t.find(".spinner"), this.paymentForm.adIdIsSet() && (this.state = "paymentForm"), this.adIdForm.submit.click((i = this, function (e) {
					var t, n;
					if (e.preventDefault(), e.stopPropagation(), t = i.adIdForm.getAdId()) return i.toggleSpinner(), i.adIdForm.toggleSubmit(!1), (n = $.getJSON(i.adIdForm.action, {
						item_id: t,
						service_id: i.serviceId
					})).success(function (e) {
						if (i.verificationResult.setText(e.description, e.valid), e.valid) return i.toggleState("paymentForm"), i.paymentForm.setAdId(t)
					}), n.complete(function () {
						return i.toggleSpinner(!1), i.adIdForm.toggleSubmit()
					})
				})), this.verificationResult.changeAdLink.click((n = this, function (e) {
					return e.preventDefault(), n.toggleState("adPrompt")
				})), this.paymentForm.form.on("submit", function () {
					return t.trigger("reveal:close")
				})
			}
			return e.prototype.toggleSpinner = function (e) {
				return null == e && (e = !0), this.spinner.toggle(e)
			}, e.prototype.toggleState = function (e) {
				switch (this.state = e) {
					case "adPrompt":
						return this.adIdForm.setAdId(""), this.paymentForm.setAdId(""), this.verificationResult.setText("", !1), this.description.toggle(!0), this.adIdForm.toggle(!0), this.paymentForm.toggle(!1), this.thankYou.toggle(!1);
					case "paymentForm":
						return this.price.remove(), this.adIdForm.toggle(!1), this.paymentForm.toggle(!0);
					case "thankYou":
						return this.verificationResult.setText("", !1), this.description.toggle(!1), this.paymentForm.toggle(!1), this.thankYou.toggle(!0)
				}
			}, e.prototype.init = function () {
				return void 0 === this.state || "thankYou" === this.state ? this.toggleState("adPrompt") : "paymentForm" === this.state ? this.toggleState("paymentForm") : void 0
			}, e
		}(), r = function () {
			function e(e) {
				var t;
				this.form = e, this.spinner = this.form.find(".spinner"), this.submit = t = this.form.find(".next"), this.input = this.form.find("#item_id"), this.action = this.form.data("action"), this.input.on("keypress", function (e) {
					if (e.stopPropagation(), 13 === e.which) return t.click()
				})
			}
			return e.prototype.toggleSubmit = function (e) {
				return null == e && (e = !0), this.submit.toggle(e)
			}, e.prototype.toggle = function (e) {
				if (null == e && (e = !0), this.form.toggle(e), e) return _.defer((t = this, function () {
					return t.input.focus()
				}));
				var t
			}, e.prototype.setAdId = function (e) {
				return this.input.val(e)
			}, e.prototype.getAdId = function () {
				var e;
				if (e = this.input.val().match(/(\d+)(\D|$)/)) return e[1]
			}, e
		}(), s = function () {
			function e(e) {
				this.form = e, this.text = this.form.find(".result"), this.changeAdLink = this.form.find(".change-id")
			}
			return e.prototype.setText = function (e, t) {
				return null == t && (t = !0), this.text.html(e).toggleClass("invalid", !t), this.changeAdLink.toggle(t)
			}, e
		}(), o = function () {
			function e(e) {
				this.form = e, this.targetIdInput = this.form.find('input[name="payment[target_id]"]')
			}
			return e.prototype.setAdId = function (e) {
				return this.targetIdInput.val(e)
			}, e.prototype.adIdIsSet = function () {
				return "" !== this.targetIdInput.val()
			}, e.prototype.toggle = function (e) {
				if (null == e && (e = !0), this.form.toggle(e), e) return az.PaymentForm.chooseFirstProvider()
			}, e
		}(), window.modalPromotion = function () {
			var e;
			if (0 !== $(".services-i, .js-acts-like-services-i").length) return window.activeModal = null, $(".reveal-modal").each(function () {
				var e;
				return (e = $(this)).data("payment-modal", new PaymentModal(e))
			}), $(".services-i").on("click", function () {
				return window.activeModal = $("#" + $(this).data("reveal-id")).data("payment-modal"), window.activeModal.init()
			}), (e = window.location.hash.match(/#\w+_open/)) && (window.location.hash = "", $(e[0]).click()), window.paymentFinished = function () {
				return window.activeModal.modal.reveal({
					animation: "fade"
				}), window.activeModal.toggleState("thankYou")
			}, window.defaultPaymentFailed = window.paymentFailed, window.paymentFailed = function (e, t, n) {
				return window.defaultPaymentFailed(e, t, n), activeModal.modal.reveal({
					animation: "fade"
				})
			}
		}, $(function () {
			return window.modalPromotion()
		})
	}.call(this),
	function () {
		var e;
		e = function () {
			function e() {
				this.pinRecoveryLink = $("a#pin-recovery"), this.pinRecoveryModal = $(".pin-recovery"), this.returnButton = $(".return-to-options"), this.optionsForm = $(".pin-recovery-options"), this.emailFormContainer = $(".email-form-container"), this.emailForm = $(".email-form"), this.emailSent = $(".email-sent"), this.options = $("#pin_recovery_via_sms, #pin_recovery_via_email"), this.paymentModal = $("#pin_recovery_modal"), this.bindActions(), this.bindFormSubmit()
			}
			return e.prototype.bindActions = function () {
				var t, n, i;
				return this.pinRecoveryLink.click((t = this, function (e) {
					return e.preventDefault(), $(e.target).closest(".reveal-modal-popup").trigger("reveal:close"), t.switchState("options"), t.pinRecoveryModal.reveal({
						animation: "fade"
					})
				})), this.options.change((n = this, function (e) {
					var t;
					return t = $(e.target).val(), n.switchState(t)
				})), this.returnButton.click((i = this, function (e) {
					return e.preventDefault(), i.switchState("options")
				}))
			}, e.prototype.bindFormSubmit = function () {
				return this.emailForm.on({
					"ajax:success": (e = this, function () {
						return e.switchState("email-sent")
					}),
					"ajax:error": (r = this, function (e, t, n) {
						var i;
						if ("timeout" !== n) return i = JSON.parse(t.responseText), r.emailForm.find(".error").html(i.message)
					})
				});
				var r, e
			}, e.prototype.switchState = function (e) {
				var t, n, i, r;
				switch (e) {
					case "via_email":
						return t = this, setTimeout(function () {
							return t.optionsForm.hide(), t.emailFormContainer.show()
						}, 500);
					case "email-sent":
						return this.emailFormContainer.hide(), this.emailSent.show();
					case "via_sms":
						return t = this, setTimeout(function () {
							return t.pinRecoveryModal.trigger("reveal:close"), t.paymentModal.reveal({
								animation: "fade"
							})
						}, 500);
					case "options":
						for (n = 0, i = (r = [this.emailFormContainer, this.emailSent]).length; n < i; n++)(e = r[n]).hide();
						return this.pinRecoveryModal.find("input:radio").removeAttr("checked"), $.each(this.pinRecoveryModal.find("form"), function () {
							return this.reset()
						}), this.emailForm.find(".error").html(""), this.optionsForm.show()
				}
			}, e
		}(), $(function () {
			return new e, $("#pin_recovery_via_sms").on("change", function () {
				return window.activeModal = new PaymentModal($("#pin_recovery_modal"))
			})
		})
	}.call(this),
	function () {
		window.modalReplenishment = function () {
			var e;
			if (e = $("#js-profile-wallet-replenishment-success"), $("#js-profile-wallet-replenishment-failure"), 0 !== e.length) return window.paymentFailure = function () {
				return $(".reveal-modal_opened").trigger("reveal:close"), $("#js-profile-wallet-replenishment-failure").reveal({
					animation: "fade"
				})
			}, window.paymentFinished = function () {
				return $(".reveal-modal_opened").trigger("reveal:close"), $("#js-profile-wallet-replenishment-success").reveal({
					animation: "fade"
				})
			}
		}, $(function () {
			var e;
			return -1 < window.location.href.indexOf("transactions?page") && (e = $("#js-profile-transactions").offset().top - 77, $("html, body").animate({
				scrollTop: e
			}, 200)), window.modalReplenishment()
		})
	}.call(this),
	function () {
		var e;
		e = function () {
			var e;
			return e = $.map($(".before-label").closest(".az-service").find("label"), function (e) {
				if (0 < $(e).width()) return $(e).outerWidth(!0)
			}), setTimeout(function () {
				var n, i;
				return i = Math.max.apply(this, e), n = 8, $(".before-label").closest(".az-service-i").each(function () {
					var e, t;
					return t = (e = $(this)).find("input").width() + i + n, e.find(".before-label").css("left", t)
				})
			}, 0)
		}, $(function () {
			return $(document).on("click", "a[data-reveal-id]", e)
		})
	}.call(this),
	function () {
		$(function () {
			return $(".duplicate-promotion-button_relist").click(function (e) {
				return e.preventDefault(), $("#relist_modal").reveal({
					animation: "fade"
				}), window.activeModal = new PaymentModal($("#relist_modal"))
			})
		})
	}.call(this),
	function () {
		var e;
		null == this.app && (this.app = {}), null == (e = this.app).shortForm && (e.shortForm = {}), app.shortForm.checkSelected = function () {
			return $(this).toggleClass("selected", "" !== $(this).val())
		}, $(function () {
			var e;
			return $(".btn-full-search").click(function (e) {
				return e.preventDefault(), document.q_form.action = $(this).attr("href"), document.q_form.submit()
			}), (e = $("#q_make, #q_model, #q_region")).on("change", app.shortForm.checkSelected), e.trigger("change")
		})
	}.call(this),
	function () {
		var e, n = function (e, t) {
				function n() {
					this.constructor = e
				}
				for (var i in t) r.call(t, i) && (e[i] = t[i]);
				return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
			},
			r = {}.hasOwnProperty;
		e = function (e) {
			function t() {
				t.__super__.constructor.apply(this, arguments), this.modalExpire = $(".reveal-modal.confirm-expire"), this.bindActions(), this.checkActionParam()
			}
			return n(t, e), t.prototype.bindActions = function () {
				return $(".js-click-expire").on("click", (e = this, function () {
					return e.revealActionModal(e.modalExpire)
				}));
				var e
			}, t.prototype.checkActionParam = function () {
				if (window.location.hash.match(/#expire/)) return this.revealActionModal(this.modalExpire)
			}, t
		}(UserActions), $(function () {
			return new e
		})
	}.call(this),
	function () {
		var i, r;
		az.PaymentForm.blockAllWalletsIfNotEnoughMoney = function () {
			return $(".az-payments-form .az-service input[type=radio]:checked").each(function () {
				return az.PaymentForm.blockWalletIfNotEnoughMoney($(this))
			})
		}, i = function () {
			return $("[data-price]").filter(":checked").each(function () {
				return this.checked = !1, this.setAttribute("checked", !1)
			})
		}, r = function (e) {
			var t, n, i, r, o, s;
			if (t = e.find(".custom-price_input"), 0 < e.find(".az-service input[type=radio]").filter(":checked").length) return e.submit();
			switch (o = null, s = t.val(), i = t.data(
				"errors"), r = e.parent().is("[data-provider=portmanat]"), !1) {
				case 0 !== s.length:
					o = i.empty;
					break;
				case !(s < 1):
					o = i.minimum;
					break;
				case !(1e3 < s && r):
					o = i.portmanat;
					break;
				case !(5e3 < s):
					o = i.maximum;
					break;
				default:
					o = null
			}
			return null !== o ? (n = "<span class='custom-price_error'>" + o + "</span>", t.addClass("error"), t.parent().find(".custom-price_error").remove(), t.parent().append(n)) : (t.removeClass("error"), t.parent().find(".custom-price_error").remove(), s = s.replace(/\b0+/g, ""), t.val(s), e.submit())
		}, $(function () {
			var e, t, n;
			return t = $(".custom-price_input"), (n = $(".custom-price_placeholder")).on("click", function () {
				return t.focus()
			}), e = $(".js-custom-price-placeholder"), t.on("change input", function () {
				return e.empty(), $("<input>").attr("type", "hidden").attr("name", "payment[amount]").attr("value", $(this).val()).appendTo(e), $("<input>").attr("type", "hidden").attr("name", "payment[service_id]").attr("value", "add_balance_custom").appendTo(e)
			}).on("focus", function () {
				return n.addClass("input-focus"), i()
			}).on("focusout", function () {
				return 0 === $(this).val().length ? (t.attr("data-checked", !1), n.removeClass("input-focus"), e.empty()) : t.attr("data-checked", !0)
			}).on("paste", function (e) {
				return e.preventDefault()
			}).on("keypress", function (e) {
				if (13 === e.which) return r($(this).closest("[data-provider]"))
			}), $("[data-price]").on("click", function () {
				return e.empty(), t.val(""), t.trigger("focusout"), t.removeClass("error"), t.parent().find(".custom-price_error").remove()
			}), $(".profile input[value=goldenpay]").on("click", function () {
				var e;
				if (e = $("[data-provider=portmanat]").find(".custom-price_input"), $(this).prop("checked") && 0 < e.val().length) return t.val(e.val())
			}), $("input[value=portmanat]").on("click", function () {
				var e;
				if (e = $("[data-provider=goldenpay]").find(".custom-price_input"), $(this).prop("checked") && (t.val(e.val()), t.val() && 0 < t.val().length)) return i(), t.attr("data-checked", !0)
			}), $(".profile-wallet_pay_form-container").find("button").on("click", function (e) {
				return e.preventDefault(), r($(this).closest("[data-provider]").find("form"))
			}), VMasker(t).maskPattern("9999")
		})
	}.call(this);