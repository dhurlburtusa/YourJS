
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Date
 * A set of date related methods.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Date;

NS.Date = YJS_Date = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Clears all time information from the specified date. That is, the passed date is mutated. A clone is not first
 * created.
 * 
 *     var date = new Date(2000, 4, 1, 13, 14, 7);
 *     console.log(date); // Mon May 01 2000 13:14:07
 *     YJS.Date.clearTime(date);
 *     console.log(date); // Mon May 01 2000 00:00:00
 * 
 * NOTE: Non-date input just falls through. It is not converted to a date before clearing.
 * 
 * @param {?Date} date The date to clear item information from.
 * 
 * @return {Date} The date with its time information set to midnight.
 */
YJS_Date.clearTime = function (date) {
    if (date instanceof Date) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    }
    return date;
};

// ==========================================================================
/**
 * Returns a new `Date` instance with the exact same date and time as the specified date. Since JavaScript `Date`s are
 * mutable, this is useful to use when passing dates around that may change its value unexpectedly.
 * 
 * NOTE: Non-date input just falls through. It is not converted to a date before cloning.
 * 
 * @param {?Date} date The date to clone.
 * 
 * @return {Date} The new `Date` instance.
 */
YJS_Date.clone = function (date) {
    if (date instanceof Date) {
        date = new Date(date.getTime());
    }
    return date;
};

// ==========================================================================
/**
 * Returns a date representing the current date and time at the time of the method call.
 * 
 *     YJS.Date.now(); // e.g., 2010-09-08 07:06:54
 * 
 * NOTE: This method returns a date object unlike the native `Date.now` method which returns a number.
 * 
 * @return {Date} The current date and time.
 */
YJS_Date.now = function () {
    return new Date();
};

// ==========================================================================
/**
 * Returns a date representing the current date at the time of the method call.
 * 
 *     YJS.Date.now(); // e.g., 2010-09-08 00:00:00
 * 
 * @return {Date} The current date with no time information.
 */
YJS_Date.today = function () {
    var today = YJS.Date.clearTime(new Date());
    return today;
};

})(YJS, 'YJS');

// ##################################################################################################################

