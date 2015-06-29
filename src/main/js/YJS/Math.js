
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Math
 * A set of math related methods.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Math;

NS.Math = YJS_Math = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
// The following is modified from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
/**
 * @protected
 * Decimal adjustment of a number.
 *
 * @param {'ceil'|'floor'|'round'} type The type of adjustment.
 * @param {number} value The number.
 * @param {number} exp The exponent (the 10 logarithm of the adjustment base).
 * 
 * @return {number} The adjusted value.
 */
YJS_Math._decimalAdjust = function (type, value, exp) {
    var Math = GBL.Math;

    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (GBL.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
};

// ==========================================================================
/**
 * Similar to `Math.round` but is capable of rounding to different decimal places. `Math.round` will only round a
 * number to the nearest integer which is effectively rounding to zero decimal places.
 * 
 *     YJS.Math.round(20.49); // 20
 *     YJS.Math.round(20.5); // 21
 *     YJS.Math.round(-20.5); // -20
 *     YJS.Math.round(-20.51); // -21
 *     Math.round(1.005 * 100)/100; // 1. Due to inaccurate floating point arithmetic, this rounds incorrectly.
 *     YJS.Math.round(1.005, -2) // 1.01. But this doesn't.
 *     YJS.Math.round(1234.5678, -5) // 1234.5678
 *     YJS.Math.round(1234.5678, -4) // 1234.5678
 *     YJS.Math.round(1234.5678, -3) // 1234.568
 *     YJS.Math.round(1234.5678, -2) // 1234.57
 *     YJS.Math.round(1234.5678, -1) // 1234.6
 *     YJS.Math.round(1234.5678, 0) // 1235
 *     YJS.Math.round(1234.5678) // 1235
 *     YJS.Math.round(1234.5678, 1) // 1230
 *     YJS.Math.round(1234.5678, 2) // 1200
 *     YJS.Math.round(1234.5678, 3) // 1000
 *     YJS.Math.round(1234.5678, 4) // 0
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * @param {number} value The number.
 * @param {number} [exp=0] The exponent (the 10 logarithm of the adjustment base). May be positive or negative.
 * 
 * @return {number} The rounded value.
 */
YJS_Math.round = function (value, exp) {
    return YJS.Math._decimalAdjust('round', value, exp);
};

})(this, YJS, 'YJS');

// ##################################################################################################################
