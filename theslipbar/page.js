(()=>{
    "use strict";
    var e = {
        Default: ["plaintext", "markdown", "ipythongfm", "gfm", "text/plain", "text/x-ipythongfm", "text/x-markdown"],
        Bash: ["text/x-sh", "bash"],
        "C/C++": ["c", "c++", "cpp", "csrc", "c++src", "cppsrc", "text/x-c", "text/x-c++", "text/x-cppsrc", "text/x-csrc", "text/x-c++src", "text/x-cppsrc"],
        "CSS/SCSS": ["css", "less", "sass", "scss", "text/x-sass", "text/x-css", "text/x-less", "text/x-scss"],
        Dart: ["dart", "application/dart"],
        HTML: ["html", "text/html"],
        Java: ["java", "text/x-java"],
        JavaScript: ["javascript", "typescript", "vue", "jsx", "tsx", "tsx", "application/javascript", "application/x-javascript", "application/typescript", "text/javascript", "text/x-javascript", "text/x-typescript", "text/x-vue", "text/jsx", "text/typescript-jsx", "replit-js-v1"],
        Kotlin: ["kotlin", "text/x-kotlin"],
        Python: ["python", "text/x-python", "text/x-ipython", "ipython", "replit-python-v3", "notebook-python"]
    }
      , t = {
        Default: ["txt"],
        Bash: ["sh", "bash"],
        "C/C++": ["cpp", "cc", "cxx", "c++", "hpp", "hh", "hxx", "h++", "c", "h"],
        "CSS/SCSS": ["scss", "less", "css"],
        Dart: ["dart"],
        HTML: ["html"],
        Java: ["java"],
        JavaScript: ["tsx", "js", "jsx", "ts", "vue"],
        Kotlin: ["kt"],
        Python: ["py"]
    }
      , n = [];
    function o() {
        var e, t;
        null === (t = null === (e = window.monaco) || void 0 === e ? void 0 : e.editor) || void 0 === t || t.onDidCreateEditor((function(e) {
            n.push(e)
        }
        ))
    }
    o(),
    document.addEventListener("DOMContentLoaded", (function(e) {
        o()
    }
    )),
    window.addEventListener("load", (function(e) {
        o()
    }
    ));
    var r = function() {
        var e = null;
        return n.forEach((function(t) {
            t.hasTextFocus() && (e = t)
        }
        )),
        e
    }
      , s = function() {
        var e, t = document.querySelectorAll(".CodeMirror"), n = null;
        return t.forEach((function(e) {
            e.contains(document.activeElement) && (n = e)
        }
        )),
        null === (e = n) || void 0 === e ? void 0 : e.CodeMirror
    }
      , c = function(n) {
        var o = n.options.mode;
        o && "string" != typeof o && o.name && (o = o.name);
        for (var r = 0, s = Object.entries(e); r < s.length; r++) {
            var c = s[r]
              , u = c[0];
            if (c[1].includes(o))
                return "chrome." + t[u][0]
        }
        return "chrome." + o
    }
      , u = function(e, t, n) {
        if (t && e) {
            var o = 0
              , r = 0;
            if ("codemirror" === n)
                o = e.line,
                r = e.ch;
            else {
                if ("monaco" !== n)
                    return null;
                o = e.lineNumber - 1,
                r = e.column - 1
            }
            for (var s = 0, c = t.split("\n"), u = 0; u < o; u++)
                s += c[u].length + 1;
            return s + r
        }
        return null
    }
      , l = function(e, t, n) {
        if (t) {
            for (var o = 0, r = 0, s = 0; s < e; s++)
                "\n" == t[s] ? (o++,
                r = 0) : r++;
            if ("codemirror" === n)
                return {
                    line: o,
                    ch: r,
                    sticky: null
                };
            if ("monaco" === n)
                return {
                    lineNumber: o + 1,
                    column: r + 1
                }
        }
        return null
    };
    document.addEventListener("serenade-chrome-set-codemirror-selection", (function(e) {
        var t = s();
        if (t || document.dispatchEvent(new CustomEvent("set-selection-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.cursorStart && null !== e.detail.cursorEnd) {
            var n = l(e.detail.cursorStart, null == t ? void 0 : t.getValue(), "codemirror")
              , o = l(e.detail.cursorEnd, null == t ? void 0 : t.getValue(), "codemirror");
            null == t || t.setSelection(n, o),
            document.dispatchEvent(new CustomEvent("set-selection-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-set-monaco-selection", (function(e) {
        var t = r()
          , n = null == t ? void 0 : t.getModel();
        if (t && n || document.dispatchEvent(new CustomEvent("set-selection-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.cursorStart && null !== e.detail.cursorEnd) {
            var o = l(e.detail.cursorStart, null == n ? void 0 : n.getValue(), "monaco")
              , s = l(e.detail.cursorEnd, null == n ? void 0 : n.getValue(), "monaco");
            null == t || t.setSelection({
                startLineNumber: null == o ? void 0 : o.lineNumber,
                startColumn: null == o ? void 0 : o.column,
                endLineNumber: null == s ? void 0 : s.lineNumber,
                endColumn: null == s ? void 0 : s.column
            }),
            document.dispatchEvent(new CustomEvent("set-selection-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-set-codemirror-cursor", (function(e) {
        var t = s();
        if (t || document.dispatchEvent(new CustomEvent("set-cursor-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.cursor) {
            var n = l(e.detail.cursor, null == t ? void 0 : t.getValue(), "codemirror");
            null == t || t.setCursor(n),
            document.dispatchEvent(new CustomEvent("set-cursor-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-set-monaco-cursor", (function(e) {
        var t = r()
          , n = null == t ? void 0 : t.getModel();
        if (t && n || document.dispatchEvent(new CustomEvent("set-cursor-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.cursor) {
            var o = l(e.detail.cursor, null == n ? void 0 : n.getValue(), "monaco");
            null == t || t.setPosition(o),
            document.dispatchEvent(new CustomEvent("set-cursor-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-set-codemirror-source-and-cursor", (function(e) {
        var t = s();
        if (t || document.dispatchEvent(new CustomEvent("set-source-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.source && null !== e.detail.cursor) {
            null == t || t.setValue(e.detail.source);
            var n = l(e.detail.cursor, null == t ? void 0 : t.getValue(), "codemirror");
            null == t || t.setCursor(n),
            document.dispatchEvent(new CustomEvent("set-source-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-set-monaco-source-and-cursor", (function(e) {
        var t = r()
          , n = null == t ? void 0 : t.getModel();
        if (t && n || document.dispatchEvent(new CustomEvent("set-source-status",{
            detail: {
                success: !1
            }
        })),
        null !== e.detail.source && null !== e.detail.cursor) {
            null == t || t.executeEdits("update-value", [{
                range: null == n ? void 0 : n.getFullModelRange(),
                text: e.detail.source,
                forceMoveMarkers: !0
            }]);
            var o = l(e.detail.cursor, e.detail.source, "monaco");
            null == t || t.setPosition(o),
            null == n || n.pushStackElement(),
            document.dispatchEvent(new CustomEvent("set-source-status",{
                detail: {
                    success: !0
                }
            }))
        }
    }
    )),
    document.addEventListener("serenade-chrome-request-codemirror", (function() {
        var e = s();
        document.dispatchEvent(new CustomEvent("serenade-chrome-send-codemirror",{
            detail: {
                codeMirrorValue: null == e ? void 0 : e.getValue(),
                codeMirrorCursor: u(null == e ? void 0 : e.getCursor(), null == e ? void 0 : e.getValue(), "codemirror"),
                codeMirrorFilename: e ? c(e) : null
            }
        }))
    }
    )),
    document.addEventListener("serenade-chrome-request-monaco", (function() {
        var n = r()
          , o = null == n ? void 0 : n.getModel()
          , s = (null == o ? void 0 : o.getValue()) || null
          , c = u(null == n ? void 0 : n.getPosition(), s, "monaco") || null
          , l = function(n) {
            for (var o = null == n ? void 0 : n.getModeId(), r = 0, s = Object.entries(e); r < s.length; r++) {
                var c = s[r]
                  , u = c[0];
                if (c[1].includes(o))
                    return "chrome." + t[u][0]
            }
            return "chrome." + o
        }(o) || "";
        document.dispatchEvent(new CustomEvent("serenade-chrome-send-monaco",{
            detail: {
                monacoValue: s,
                monacoCursor: c,
                monacoFilename: l
            }
        }))
    }
    ))
}
)();

