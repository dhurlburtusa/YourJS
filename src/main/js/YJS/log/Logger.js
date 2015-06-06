
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.Logger
 * A logger determines what {@link YJS.log.Log}s it handles based on its configured minimum and maximum log
 * levels. However, prior to this, the current log configuration uses each logger's name pattern to determine which
 * loggers should handle which logs based on the log's name. The logger with the longest matching pattern will be
 * given authority to handle the log. If the logger also determines it handles a log at the log's specified level,
 * then it delegates the logging work to the list of configured {@link YJS.log.Appender}s.
 * 
 * @requires YJS.log.ArrayAppender
 * @requires YJS.log.ConsoleAppender
 * @uses YJS.String
 * @uses YJS.log.Entry
 * @uses YJS.log.Appender
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_Logger, YJS_log_Logger_prototype;

// ==========================================================================
/**
 * @method constructor
 * Constructs a Logger which will usually be given to a ConfigBuilder.
 * 
 * @param {Object} cfgs
 * @param {string} cfgs.pattern A pattern of the log names that this logger will handle. Used by the current
 *   {@link YJS.log.Config log configuration} to determine whether this logger or another logger should handle a log.
 * @param {YJS.log.Appender|YJS.log.Appender[]} [cfgs.appenders=[]] The log appenders each handled log will be passed to.
 * @param {number} [cfgs.maxLevel=Number.MAX_VALUE] The maximum log-level to handle. See YJS.log.Level for pre-defined
 *   log-level values. Other levels beside the pre-defined are allowed too.
 * @param {number} [cfgs.minLevel=-Number.MAX_VALUE] The minimum log-level to handle. See YJS.log.Level for pre-defined
 *   log-level values. Other levels beside the pre-defined are allowed too.
 */
NS.Logger = YJS_log_Logger = function (cfgs) {
    // TODO: Assert everything is valid.
    this._ = {
        appenders: YJS.Array.wrap(cfgs.appenders || []),
        maxLevel: typeof cfgs.maxLevel == 'number' ? cfgs.maxLevel : Number.MAX_VALUE,
        minLevel: typeof cfgs.minLevel == 'number' ? cfgs.minLevel : -Number.MAX_VALUE
    };
    // TODO: Assert pattern is valid.
    /**
     * @readonly
     * @property {string}
     * A pattern of the log names that this logger will handle.
     */
    this.pattern = cfgs.pattern;
    
    Object.freeze(this);
};

YJS_log_Logger_prototype = YJS_log_Logger.prototype;

// ==========================================================================
/**
 * Checks if this logger will handle a log at the specified log-level.
 * 
 * @param {number} logLevel The log-level to check against. See YJS.log.Level for pre-defined log-level values.
 *   Other levels beside the pre-defined are allowed too.
 * 
 * @return {boolean} `true` if this logger will handle a log at the specified log-level, `false` otherwise.
 */
YJS_log_Logger_prototype.willHandle = function (logLevel) {
    var willHandle = false;
    
    if (logLevel >= this._.minLevel && logLevel <= this._.maxLevel) {
        willHandle = true;
    }
    return willHandle;
};

// ==========================================================================
/**
 * Logs the given message/template at the specified level.
 * 
 * @param {number} logLevel The level at which to log the message. See YJS.log.Level for pre-defined log-level values.
 *   Other levels beside the pre-defined are allowed too.
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Logger_prototype.logAt = function (logLevel, template, varargs) {
    /*
     * IMPLEMENTATION NOTE: The above signature was choosen over passing a single YJS.log.Entry argument to help minimize
     * the need to unnecessarily instantiate objects that won't be used. That is, the _createLogEntry method is not called
     * until after checking if this logger will even handle a log at this level and if it has any appenders to delegate
     * the handling to.
     */
    var SELF = this,
        appender, appenders, i, iLen, logEntry;

    if (SELF.willHandle(logLevel)) {
        appenders = SELF._.appenders;
        if (appenders.length > 0) {
            logEntry = SELF._createLogEntry.apply(SELF, arguments);
            for (i = 0, iLen = appenders.length; i < iLen; ++i) {
                appender = appenders[i];
                try {
                    appender.append(logEntry);
                } catch (e) {
                    if (GBL.console && typeof GBL.console.error == 'function') {
                        GBL.console.error(e);
                    }
                }
            }
        }
    }
};

// ==========================================================================
/**
 * @template
 * @protected
 * Creates a new log entry based on the given arguments.
 * 
 * @param {number} logLevel The level at which to log the message. See YJS.log.Level for pre-defined log-level values.
 *   Other levels beside the pre-defined are allowed too.
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Logger_prototype._createLogEntry = function (logLevel, template, varargs) {
    var logEntry = new YJS.log.Entry({
        level: logLevel,
        template: template,
        data: Array.prototype.slice.call(arguments, 2) // Copy arguments ignoring the logLevel and template args.
    });
    return logEntry;
};

// ==========================================================================
/**
 * @static
 * @property ROOT_DEFAULT
 * A reference to the default root logger. This logger is configured with a single appender -- the
 * YJS.log.ConsoleAppender.
 */
YJS_log_Logger.ROOT_DEFAULT = new YJS.log.Logger({
    appenders: [YJS.log.ConsoleAppender.INSTANCE],
    pattern: '.'
});

// ==========================================================================
/**
 * @static
 * @property ROOT_ARRAY
 * A reference to a root logger configured with a single {@link YJS.log.ArrayAppender} array appender.
 */
YJS_log_Logger.ROOT_ARRAY = new YJS.log.Logger({
    appenders: [YJS.log.ArrayAppender.INSTANCE],
    pattern: '.'
});

})(this, YJS, 'YJS.log');

// ##################################################################################################################
