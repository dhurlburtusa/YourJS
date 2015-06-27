
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Boolean
 * A set of boolean related methods.
 * 
 * @uses YJS.Utils
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Boolean;

NS.Boolean = YJS_Boolean = {
    $LOG: YJS.__.tmp.LOG,
    __ : {
        lut: {
            '0': false,
            '1': true,
            'f': false,
            't': true,
            'n': false,
            'y': true,
            'on': true,
            'off': false,
            'no': false,
            'yes': true,
            'false': false,
            'true': true
        }
    }
};

// ==========================================================================
/**
 * Attempts to convert given input to a boolean (primitive).
 * 
 * The following values return `false`:
 * 
 * - `0`
 * - `false`
 * - `'0'`
 * - `'f'`
 * - `'F'`
 * - `'false'` and any case variation like `'False'`.
 * - `'n'`
 * - `'N'`
 * - `'no'` and any case variation like `'No'`.
 * - `'off'` and any case variation like `'Off'`.
 * 
 * The following values return `true`:
 * 
 * - `1`
 * - `true`
 * - `'1'`
 * - `'on'` and any case variation like `'On'`.
 * - `'t'`
 * - `'T'`
 * - `'true'` and any case variation like `'True'`.
 * - `'y'`
 * - `'Y'`
 * - `'yes'` and any case variation like `'Yes'`.
 * 
 * All other values return the default value (`null` by default).
 * 
 * NOTE: This function behaves differently than the native `Boolean` constructor function.
 * 
 *     YJS.Boolean.convert(true); // true
 *     YJS.Boolean.convert('Yes'); // true
 *     YJS.Boolean.convert('true'); // true
 *     YJS.Boolean.convert(false); // false
 *     YJS.Boolean.convert('No'); // false
 *     YJS.Boolean.convert('false'); // false
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * @param {?Mixed} input The value to be converted to a boolean.
 * @param {Object} [options] The options to use when doing the conversion.
 * @param {Mixed} [options.def=null] The default value to return if unable to convert.
 * 
 * @return {boolean|null} The input converted to a boolean or the default value if unable to convert.
 */
YJS_Boolean.convert = function (input, options) {
    var defValue, output, typeOfInput;

    options = options || {};
    defValue = options.hasOwnProperty('def') ? options.def : null;
    output = defValue;
    typeOfInput = YJS.Utils.typeOf(input);
    if (typeOfInput == 'boolean') {
        output = input;
    } else if (typeOfInput != 'undefined' && typeOfInput != 'null' && typeof input.toString == 'function') {
        input = input.toString().toLowerCase();
        // The following check ensures only a boolean is returned.
        if (YJS.Boolean.__.lut.hasOwnProperty(input)) {
            output = YJS.Boolean.__.lut[input];
        }
    }

    return output;
};

// ==========================================================================
/**
 * Conditionally applies the NOT operator to the specified boolean-like value. Useful when the condition flag is not
 * known ahead of time.
 * 
 *     var condition = ...;
 *     var param = ...;
 *     param = YJS.Boolean.not(param, condition);
 * 
 * It can also be used to convert a boolean-like value to an actual boolean value.
 * 
 *     var boolLike = ...;
 *     var bool = YJS.Boolean.not(boolLike);
 *     typeof bool == 'boolean'; // true
 * 
 * If the condition flag is known ahead of time, then it is shorter to use the following.
 * 
 *     var boolLike = ...;
 *     // Instead of
 *     var bool = YJS.Boolean.not(boolLike, false);
 *     // use. (Notice the double `!`.)
 *     var bool = !!boolLike;
 *     // Instead of
 *     var bool = YJS.Boolean.not(boolLike, true);
 *     // use. (Notice the single `!`.)
 *     var bool = !boolLike;
 * 
 * @param {Mixed} value The boolean-like value to possibly have the NOT operator applied to it.
 * @param {boolean} [condition=true] Flag indicating whether to apply the NOT operator to the value.
 * 
 * @return {boolean} the specified value with the NOT operator conditionally applied.
 */
YJS_Boolean.not = function (value, condition) {
    if (arguments.length <= 1) { condition = true; }
    if (condition) {
        value = !value;
    }
    return !!value;
};

})(YJS, 'YJS');

// ##################################################################################################################
