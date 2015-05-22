
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.Config
 * The logging configuration. This determines which {@link YJS.log.Logger Loggers} the {@link YJS.log.Log Logs} use.
 * This is based on pattern matching of the log's name. In turn, each YJS.log.Logger determines which
 * {@link YJS.log.Appender Appenders} to delegate to.
 * 
 * @uses YJS.log.Log
 * @uses YJS.log.Logger
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_Config;

// ==========================================================================
/**
 * @method constructor
 * 
 * @param {Object} cfgs
 * @param {YJS.log.Logger[]} cfgs.loggers The loggers to be used in the configuration. If a root logger (one with a `'.'`
 *   pattern) is not included, then the {@link YJS.log.Logger#ROOT_DEFAULT default root logger} will be added.
 */
NS.Config = YJS_log_Config = function (cfgs) {
    var _, i, iLen, key, logger, loggers;

    this._ = _ = {
        loggerLut: {}
    };
    loggers = cfgs.loggers;
    for (i = 0, iLen = loggers.length; i < iLen; ++i) {
        logger = loggers[i];
        key = logger.pattern;
        _.loggerLut[key] = logger;
    }
    // Ensure a root logger exists.
    _.loggerLut['.'] = _.loggerLut['.'] || YJS.log.Logger.ROOT_DEFAULT;

    _.resolvedLoggerLut = {};
};

// ==========================================================================
/**
 * Searches for a {@link YJS.log.Logger Logger} with the longest pattern that matches the name of the specified
 * {@link YJS.log.Log Log}. If a more specific {@link YJS.log.Logger Logger} is not found, then the root logger
 * will be returned.
 * 
 * @param {YJS.log.Log} log
 * 
 * @return {YJS.log.Logger} the logger that will handle the specified log. It will always return a logger instance.
 *   `null` or `undefined` will never be returned.
 */
YJS_log_Config.prototype.findLoggerFor = function (log) {
    var _ = this._,
        key, logger, loggerLut, name, nameParts;

    name = log.name;
    loggerLut = _.loggerLut;

    logger = _.resolvedLoggerLut[name];
    if (!logger) {
        nameParts = name.split('.');
        while (nameParts.length) {
            key = nameParts.join('.');
            logger = loggerLut[key];
            if (logger) {
                _.resolvedLoggerLut[name] = logger;
                break;
            }
            nameParts.pop();
        }
    }
    // Fallback to root logger if necessary.
    logger = logger || loggerLut['.'];
    return logger;
};

// ==========================================================================
/**
 * @static
 * @property DEFAULT
 * The default log configuration. It simply has the default root logger which allows logging to the web-console at any
 * log level.
 */
// jshint singleGroups: false
YJS_log_Config.DEFAULT = (function () {
    var config, configBuilder;

    configBuilder = new YJS.log.ConfigBuilder();
    config = configBuilder.build();
    return config;
})();

})(YJS, 'YJS.log');

// ##################################################################################################################
