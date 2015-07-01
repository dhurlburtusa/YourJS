
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

})(YJS, 'YJS');

// ##################################################################################################################

