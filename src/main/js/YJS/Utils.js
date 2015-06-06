
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Utils
 * A set of utility methods.
 * 
 * @requires YJS.core.Class
 * 
 * @uses YJS.Number
 * @uses YJS.log.Factory
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Utils;

NS.Utils = YJS_Utils = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Returns the type of the specified value as a string. The list of possible types are:
 *
 * - `array`: If the specified value is an array.
 * - `boolean`: If the specified value is a boolean value.
 * - `date`: If the specified value is a `Date` object.
 * - `function`: If the specified value is a function reference.
 * - `nan`: If the specified value is `NaN`.
 * - `negative_infinity`: If the specified value is `Number.NEGATIVE_INFINITY`.
 * - `null`: If the specified value is `null`.
 * - `number`: If the specified value is a number.
 * - `object`: If the specified value is an object.
 * - `positive_infinity`: If the specified value is `Number.POSITIVE_INFINITY`.
 * - `regexp`: If the specified value is a regular expression.
 * - `string`: If the specified value is a string.
 * - `undefined`: If the specified value is `undefined`.
 * - `undetermined`: If the specified value has an undetermined type. If this ever happens, then update this function
 *   to appropriately handle the value.
 * 
 * @param {?Mixed} value The value to determine the type of.
 * 
 * @return {string} The type of the specified value.
 */
YJS_Utils.typeOf = function (value) {
    var typeOf, typeToString;
    if (value === null) {
        return 'null';
    }

    typeOf = typeof value;

    if (typeOf === 'undefined' || typeOf === 'string' || typeOf === 'boolean' || typeOf === 'function') {
        return typeOf;
    }

    typeToString = Object.prototype.toString.call(value);

    switch (typeToString) {
        case '[object Array]':
            return 'array';
        case '[object Date]':
            return 'date';
        case '[object Boolean]':
            return 'boolean';
        case '[object Number]':
            if (value === Number.NEGATIVE_INFINITY) {
                return 'negative_infinity';
            } else if (value === Number.POSITIVE_INFINITY) {
                return 'positive_infinity';
            } else if (YJS.Number.itBeNaN(value)) {
                return 'nan';
            }
            return 'number';
        case '[object RegExp]':
            return 'regexp';
        case '[object String]':
            return 'string';
    }

    if (typeOf === 'object') {
        return 'object';
    }

// @if DEBUG
    YJS.Utils.$LOG.warn('Unable to determine type of "' + value + '". Please update YJS.Utils.typeOf function to handle it.');
// @endif

    return 'undetermined';
};

})(YJS, 'YJS');

// ##################################################################################################################
