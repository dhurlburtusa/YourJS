
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Number
 * A set of number related methods.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Number;

NS.Number = YJS_Number = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Attempts to convert a number like value to a JavaScript number. `undefined`, `null`, `Number.NEGATIVE_INFINITY`,
 * `Number.POSITIVE_INFINITY`, and `NaN` return the default value (`null`).
 * 
 *     YJS.Number.convert("2"); // 2
 *     YJS.Number.convert(2.6); // 2.6
 *     YJS.Number.convert(1.2); // 1.2
 *     YJS.Number.convert(1); // 1
 *     YJS.Number.convert(-1); // -1
 *     YJS.Number.convert(-2.6); // -2.6
 * 
 * See the Jasmine Specs for example uses.
 * 
 * @param {Mixed} input The number like value to be converted to a JavaScript number. This may also be an object with
 *   a custom `valueOf` method that returns a number or parsible string.
 * @param {Object} [options] The options to use when doing the conversion.
 * @param {Mixed} [options.def=null] The default value to return if unable to convert. This is allowed to be of any
 *   data type.
 * 
 * @return {number|Mixed} The input converted to a number (float or integer) or the default value if unable to
 *   convert. Note: a value of type number is not always returned when the default value is returned.
 */
YJS_Number.convert = function (input, options) {
    var defValue, output;

    options = options || {};
    defValue = options.hasOwnProperty('def') ? options.def : null;
    output = defValue;
    if (input) {
        if (typeof input === 'number') {
            if (!(input === GBL.Number.NEGATIVE_INFINITY || input === GBL.Number.POSITIVE_INFINITY)) {
                output = input;
            }
        } else {
            input = '' + input; // causes input.valueOf to be called.
            output = GBL.parseFloat(input);
            if (GBL.isNaN(output)) {
                output = defValue;
            }
        }
    } else if (input === 0) {
        output = 0;
    }

    return output;
};

// ==========================================================================
/**
 * Determines whether the value be the global `NaN` constant. This function behaves differently than the native
 * `isNaN` function. The native `isNaN` does a check on the input and determines whether it is not a number. It will
 * return `true` for anything that is not a number. However, this function will only return `true` if the input is
 * `NaN`.
 * 
 *     isNaN(NaN); // true
 *     YJS.Number.itBeNaN(NaN); // true
 *     isNaN({}); // true
 *     YJS.Number.itBeNaN({}); // false
 *     isNaN(undefined); // true
 *     YJS.Number.itBeNaN(undefined); // false
 * 
 * @param {Mixed} value The value to determine if it be `NaN`.
 * 
 * @return {boolean} `true` if value be `NaN`, `false` otherwise.
 */
YJS_Number.itBeNaN = function (value) {
    /* NOTE: This method was not named isNaN so it is not confused with the global isNaN function which returns true
     * in some cases for values that are not NaN.
     * NOTE: NaN === NaN is false and so can't be used to determine if the value be NaN.
     */
    var itBeNaN = false;

    if (typeof value === 'number' && GBL.isNaN(value)) {
        itBeNaN = true;
    }
    return itBeNaN;
};

})(this, YJS, 'YJS');

// ##################################################################################################################
