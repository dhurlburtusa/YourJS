
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Number
 * A set of number related methods.
 */
(function (YJS, nsPath) {

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
 * @return {Boolean} `true` if value be `NaN`, `false` otherwise.
 */
YJS_Number.itBeNaN = function (value) {
    /* NOTE: This method was not named isNaN so it is not confused with the global isNaN function which returns true
     * in some cases for values that are not NaN.
     * NOTE: NaN === NaN is false and so can't be used to determine if the value be NaN.
     */
    var itBeNaN = false;

    if (typeof value === 'number' && isNaN(value)) {
        itBeNaN = true;
    }
    return itBeNaN;
};

})(YJS, 'YJS');

// ##################################################################################################################
