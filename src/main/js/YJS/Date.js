
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
    DAYS_IN_MONTH, YJS_Date;

NS.Date = YJS_Date = {
    $LOG: YJS.__.tmp.LOG
};

DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ==========================================================================
/**
 * The milliseconds unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.MILLISECONDS = "ms";

/**
 * The seconds unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.SECONDS = "s";

/**
 * The minutes unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.MINUTES = "i";

/**
 * The hours unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.HOURS = "h";

/**
 * The day unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.DAY = "d";

/**
 * The month unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.MONTH = "m";

/**
 * The year unit constant used by the #add method.
 * 
 * @type string
 */
YJS_Date.YEAR = "y";

// ==========================================================================
/**
 * Adds/subtracts an interval from specified date. The specified date is not modified. A new date is created with the
 * results of the calculation.
 * 
 * NOTE: Non-date input just falls through. It is not converted to a date before adding.
 * 
 *     // Basic usage:
 *     var stPattysDay = YJS.Date.add(new Date(1976, 2, 12), YJS.Date.DAY, 5);
 *     var feb29th = YJS.Date.add(new Date(2000, 0, 31), YJS.Date.MONTH, 1);
 * 
 *     // Negative increment will be subtracted:
 *     var christmas = YJS.Date.add(new Date(2000, 11, 30), YJS.Date.DAY, -5);
 * 
 * NOTE: This function currently does not handle decimal increments.
 * 
 * @param {?Date} date The date to add the increment to.
 * @param {string} unit A valid date unit enum value. Must be one of #YEAR, #MONTH, #DAY, #HOURS, #MINUTES,
 *   #SECONDS, or #MILLISECONDS.
 * @param {number} increment The amount to add to the specified date. Negative values will substract from the date.
 *   Must be an integral number.
 * 
 * @return {Date} A new Date instance with the interval added/subtracted.
 */
YJS_Date.add = function (date, unit, increment) {
    var YJS_Date = YJS.Date,
        YJS_Utils = YJS.Utils,
        dt = YJS_Date.clone(date),
        day, firstDateOfMonth, firstDateOfNewMonth, lastDateOfNewMonth, month;

    if (YJS_Utils.typeOf(dt) === 'date' && YJS_Utils.typeOf(unit) === 'string' && increment !== 0) {
        switch (unit.toLowerCase()) {
        case YJS_Date.MILLISECONDS:
            dt = new Date(dt.getTime() + increment);
            break;
        case YJS_Date.SECONDS:
            dt.setSeconds(dt.getSeconds() + increment);
            break;
        case YJS_Date.MINUTES:
            dt.setMinutes(dt.getMinutes() + increment);
            break;
        case YJS_Date.HOURS:
            dt.setHours(dt.getHours() + increment);
            break;
        case YJS_Date.DAY:
            dt.setDate(dt.getDate() + increment);
            break;
        case YJS_Date.MONTH:
            day = dt.getDate();
            month = dt.getMonth();
            if (day > 28) {
                firstDateOfMonth = YJS_Date.getFirstDateOfMonth(dt);
                firstDateOfNewMonth = YJS_Date.add(firstDateOfMonth, YJS_Date.MONTH, increment);
                lastDateOfNewMonth = YJS_Date.getLastDateOfMonth(firstDateOfNewMonth);
                day = Math.min(day, lastDateOfNewMonth.getDate());
            }
            dt.setDate(day);
            dt.setMonth(month + increment);
            break;
        case YJS_Date.YEAR:
            dt.setFullYear(dt.getFullYear() + increment);
            break;
        }
    }

    return dt;
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
 * Determines the difference between two dates.
 * 
 * Example Usage:
 * 
 *     var date1 = new Date(2010, 6, 4, 12, 0, 0);
 *     var date2 = new Date(2010, 6, 4, 12, 31, 59);
 *     YJS.Date.diff(date1, date1, YJS.Date.MINUTES); // 31 full minutes
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * @param {Date} date1
 * @param {Date} date2
 * @param {String} unit A valid date unit enum value. Must be one of #YEAR, #MONTH, #DAY, #HOURS, #MINUTES,
 *   #SECONDS, or #MILLISECONDS.
 * 
 * @return {number} The difference between the two dates as an integer. This value is not rounded.
 */
YJS_Date.diff = function (date1, date2, unit) {
    var YJS_Date = YJS.Date,
        YJS_Utils = YJS.Utils,
        difference, msec1, msec2;

    msec1 = date1.getTime();
    msec2 = date2.getTime();

    if (YJS_Utils.typeOf(date1) === 'date' && YJS_Utils.typeOf(date2) === 'date' && YJS_Utils.typeOf(unit) === 'string') {
        switch (unit.toLowerCase()) {
        case YJS_Date.MILLISECONDS:
            difference = msec2 - msec1;
            break;
        case YJS_Date.SECONDS:
            difference = (msec2 - msec1) / 1000;
            break;
        case YJS_Date.MINUTES:
            difference = (msec2 - msec1) / 60000;
            break;
        case YJS_Date.HOURS:
            difference = (msec2 - msec1) / 3600000;
            break;
        case YJS_Date.DAY:
            difference = (msec2 - msec1) / 86400000;
            break;
        case YJS_Date.MONTH:
            difference = (date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth());
            if (YJS_Date.add(date1, unit, difference) > date2) {
                difference -= 1;
            }
            break;
        case YJS_Date.YEAR:
            difference = date2.getFullYear() - date1.getFullYear();
            if (YJS_Date.add(date1, unit, difference) > date2) {
                difference -= 1;
            }
            break;
        default:
            throw new TypeError("`unit` must be a valid date/time unit.");
        }
    } else {
        throw new TypeError("`date1` and `date2` must be Date instances and `unit` must be a string of a valid date/time unit.");
    }

    if (difference < 0) {
        difference = Math.ceil(difference);
    } else if (difference > 0) {
        difference = Math.floor(difference);
    }
    return difference;
};

// ==========================================================================
/**
 * Get the number of days in the specified month, adjusted for leap year.
 * 
 * @param {?Date} date The date to examine.
 * 
 * @return {number|undefined} The number of days in the month.
 */
YJS_Date.getDaysInMonth = function (date) {
    var days, month;

    if (date instanceof Date) {
        month = date.getMonth();

        days = month === 1 && YJS.Date.isLeapYear(date) ? 29 : DAYS_IN_MONTH[month];
    }
    return days;
};

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
        answer = !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
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

