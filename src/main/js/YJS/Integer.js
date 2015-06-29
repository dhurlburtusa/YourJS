
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Integer
 * A set of integer related methods.
 * 
 * @uses YJS.Math
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Integer;

NS.Integer = YJS_Integer = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Attempts to convert an integer like value to an integer. `undefined`, `null`, `Number.NEGATIVE_INFINITY`,
 * `Number.POSITIVE_INFINITY`, and `NaN` return the default value (`null`).
 * 
 *     RG.shared.Integer.convert("2"); // 2
 *     RG.shared.Integer.convert(2.6); // 3
 *     RG.shared.Integer.convert(1.2); // 1
 *     RG.shared.Integer.convert(1); // 1
 *     RG.shared.Integer.convert(-1); // -1
 *     RG.shared.Integer.convert(-2.6); // -3
 * 
 * See the Jasmine Specs for example uses.
 * 
 * @param {Mixed} input The integer like value to be converted to an integer (a JavaScript number with no fractional
 *   part). This may also be an object with a custom `valueOf` method that returns a number or parsible string.
 * @param {Object} [options] The options to use when doing the conversion.
 * @param {Mixed} [options.def=null] The default value to return if unable to convert. This is allowed to be of any
 *   data type.
 * 
 * @return {number|Mixed} The input converted to an integer or the default value if unable to convert. Note: a value of
 *   type number is not always returned when the default value is returned.
 */
YJS_Integer.convert = function (input, options) {
    var defValue, output;

    options = options || {};
    defValue = options.hasOwnProperty('def') ? options.def : null;
    output = defValue;
    if (input) {
        if (typeof input === 'number') {
            if (input === GBL.Number.NEGATIVE_INFINITY || input === GBL.Number.POSITIVE_INFINITY) {
                // Keep output set to default value.
            } else {
                output = YJS.Math.round(input);
            }
        } else {
            input = '' + input; // causes input.valueOf to be called.
            output = GBL.parseFloat(input);
            if (GBL.isNaN(output)) {
                output = defValue;
            } else {
                output = YJS.Math.round(output);
            }
        }
    } else if (input === 0) {
        output = 0;
    }

    return output;
};

})(this, YJS, 'YJS');

// ##################################################################################################################
