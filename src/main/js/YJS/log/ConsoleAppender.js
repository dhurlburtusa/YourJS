
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.ConsoleAppender
 * A ConsoleAppender is a YJS.log.Appender that appends (aka logs) messages to the web-console provided by modern web
 * browsers. For older web browsers, any logged messages are effectively ignored and will not cause errors when the
 * web-console "API" is not available.
 *
 * @extends YJS.log.Appender 
 * 
 * @uses YJS.log.Level
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_ConsoleAppender,
    YJS_log_ConsoleAppender_prototype,
    console = GBL.console,
    noopFn = YJS.noopFn;

    if (console) {
        console.debug = console.debug || console.info || console.log || noopFn;
        console.info = console.info || console.debug || console.log || noopFn;
        console.log = console.log || console.info || console.debug || noopFn;
        console.warn = console.warn || console.log || console.error || console.info || console.debug || noopFn;
        console.error = console.error || console.warn || console.log || console.info || console.debug || noopFn;
    }

// ==========================================================================
/**
 * @method constructor
 * Creates a new web-console appender.
 */
NS.ConsoleAppender = YJS_log_ConsoleAppender = function () {};

YJS_log_ConsoleAppender.prototype = YJS_log_ConsoleAppender_prototype = new YJS.log.Appender(); // Subclasses the abstract YJS.log.Appender class.

// ==========================================================================
/**
 * Appends/logs the message to the web-console at the most appropriate level.
 * 
 * - YJS.log.Level.DEBUG logs to `console.debug`.
 * - YJS.log.Level.INFO logs to `console.info`.
 * - YJS.log.Level.LOG logs to `console.log`.
 * - YJS.log.Level.WARN logs to `console.warn`.
 * - YJS.log.Level.ERROR logs to `console.error`.
 * - YJS.log.Level.FATAL logs to `console.error`.
 * 
 * Note: YJS.log.LogEntry#getMessage is not used to get the merged message before logging to the web-console. Many
 * implementations of the web-console allow logging with a template and substitution data. So, this native functionality
 * has been maintained.
 * 
 * @param {YJS.log.Entry} logEntry The log entry to append.
 */
YJS_log_ConsoleAppender_prototype.append = function (logEntry) {
    var YJS_log_Level = YJS.log.Level,
        console = GBL.console,
        args, logLevel;

    logLevel = logEntry.level;
    args = [logEntry.template].concat(logEntry.data);
    if (logLevel < YJS_log_Level.INFO) {
        console.debug.apply(console, args);
    } else if (logLevel < YJS_log_Level.LOG) {
        console.info.apply(console, args);
    } else if (logLevel < YJS_log_Level.WARN) {
        console.log.apply(console, args);
    } else if (logLevel < YJS_log_Level.ERROR) {
        console.warn.apply(console, args);
    } else {
        console.error.apply(console, args); // Error and fatal.
    }
};

// ==========================================================================
/**
 * @static
 * @property INSTANCE
 * The pre-instantiated singleton instance of a ConsoleAppender. (No reason to keep multiple instances around.)
 */
YJS_log_ConsoleAppender.INSTANCE = new YJS.log.ConsoleAppender();

})(this, YJS, 'YJS.log');

// ##################################################################################################################
