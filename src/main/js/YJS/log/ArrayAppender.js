
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.ArrayAppender
 * An ArrayAppender is a YJS.log.Appender that appends (aka logs) messages to an array.
 *
 * @extends YJS.log.Appender
 * 
 * @uses YJS.log.Entry
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_ArrayAppender,
    YJS_log_ArrayAppender_prototype;

// ==========================================================================
/**
 * @method constructor
 * Creates a new array appender.
 * 
 * @param {Object} cfg
 * @param {number} [cfg.maxEntries=5000]
 */
NS.ArrayAppender = YJS_log_ArrayAppender = function (cfg) {
    cfg = cfg || {};
    this._ = {
        cfg: {
            maxEntries: typeof cfg.maxEntries == 'number' ? Math.max(cfg.maxEntries, 0) : 5000
        },
        logEntries: []
    };
};

YJS_log_ArrayAppender.prototype = YJS_log_ArrayAppender_prototype = new YJS.log.Appender(); // Subclasses the abstract YJS.log.Appender class.

// ==========================================================================
/**
 * Appends the log entry to the array.
 * 
 * @param {YJS.log.Entry} logEntry The log entry to append.
 */
YJS_log_ArrayAppender_prototype.append = function (logEntry) {
    this._.logEntries.push(logEntry);
    this._removeExtraneousEntries();
};

// ==========================================================================
/**
 * @return {YJS.log.Entry[]} A reference to the current log entries.
 */
YJS_log_ArrayAppender_prototype.getLogEntries = function () {
    return this._.logEntries;
};

// ==========================================================================
/**
 * @protected
 * Remove any extraneous log entries. The oldest entries are removed first.
 */
YJS_log_ArrayAppender_prototype._removeExtraneousEntries = function () {
    var logEntries = this._.logEntries,
        maxEntries = this._.cfg.maxEntries;

    while (logEntries.length > maxEntries) {
        logEntries.shift(); // Remove oldest log entries.
    }
};

// ==========================================================================
/**
 * @static
 * @property INSTANCE
 * The pre-instantiated singleton instance of an ArrayAppender with the default configuration. (No reason to keep
 * multiple instances around.)
 */
YJS_log_ArrayAppender.INSTANCE = new YJS.log.ArrayAppender();

})(YJS, 'YJS.log');

// ##################################################################################################################
