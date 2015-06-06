
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Boolean
 * A set of boolean related methods.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Boolean;

NS.Boolean = YJS_Boolean = {
    $LOG: YJS.__.tmp.LOG
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
