
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.RegExp
 * A set of regular expression related methods.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_RegExp;

NS.RegExp = YJS_RegExp = {
    $LOG: YJS.__.tmp.LOG,
    __: {
        escapeRe: /([\-.*+?\^${}()|\[\]\/\\])/g
    }
};

// ==========================================================================
/**
 * Escapes the characters in the pattern that have special meaning in regular expressions. That way, the special
 * characters will just be treated as literals when used where regular expression patterns are expected.
 * 
 * @param {?string} pattern The string that may contain characters that have special meaning in regular expressions.
 * 
 * @return {string} The escaped pattern.
 */
YJS_RegExp.escape = function (pattern) {
    if (typeof pattern === 'string') {
        pattern = pattern.replace(YJS.RegExp.__.escapeRe, "\\$1");
        return pattern;
    }
    return pattern;
};

})(YJS, 'YJS');

// ##################################################################################################################
