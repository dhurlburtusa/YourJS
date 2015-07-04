
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
 * Get the number of days in the specified month, adjusted for leap year.
 * 
 * @param {?Date} date The date to examine.
 * 
 * @return {number|undefined} The number of days in the month.
 */
YJS_Date.getDaysInMonth = (function () {
    // Make a closure for efficiency. That is, don't redefine following array each time function is called.
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return function (date) {
        var days, month;

        if (date instanceof Date) {
            month = date.getMonth();

            days = (month === 1 && YJS.Date.isLeapYear(date) ? 29 : daysInMonth[month]);
        }
        return days;
    };
})();

// ==========================================================================
/**
 * Get the date of the first day of the month in which the specified date resides.
 * 
 * NOTE: Any time information the specified date may have had will be cleared out.
 * 
 * @param {?Date} date The date to examine.
 * 
 * @return {Date|undefined} A new date reset to the beginning of the month.
 */
YJS_Date.getFirstDateOfMonth = function (date) {
    var firstDateOfMonth;

    if (date instanceof Date) {
        firstDateOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    }
    return firstDateOfMonth;
};

// ==========================================================================
/**
 * Get the date of the last day of the month in which the specified date resides.
 * 
 * NOTE: Any time information the specified date may have had will be cleared out.
 * 
 * @param {?Date} date The date to examine.
 * 
 * @return {Date|undefined} A new date reset to the end of the month.
 */
YJS_Date.getLastDateOfMonth = function (date) {
    var lastDateOfMonth;

    if (date instanceof Date) {
        lastDateOfMonth = new Date(date.getFullYear(), date.getMonth(), YJS.Date.getDaysInMonth(date));
    }
    return lastDateOfMonth;
};

// ==========================================================================
/**
 * Determines if the specified date falls within a leap year. If `date` is a `Date` instance, then `true` or `false`
 * is returned. Otherwise `undefined` is returned. Either way, a falsy value is returned if date is not determined to
 * be a leap year.
 * 
 *     YJS.Date.isLeapYear(true); // undefined
 *     YJS.Date.isLeapYear(new Date(2000, 0)); // true
 *     YJS.Date.isLeapYear(new Date(2200, 0)); // false
 * 
 * @param {?Date} date The date to check.
 * 
 * @return {boolean|undefined} `true`, `false`, or `undefined` depending on whether date falls within leap year.
 */
YJS_Date.isLeapYear = function (date) {
    var answer, year;

    if (date instanceof Date) {
        year = date.getFullYear();
        answer = !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
    }

    return answer;
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

