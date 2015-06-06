
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.log.Factory
 * A log factory is used to create instances of {@link YJS.log.Log named log} objects. Because the named logs are
 * stateless beyond their name, the log factory ensures only one instance of a log is ever created with any given
 * name.
 * 
 * @uses YJS.log.Log
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_Factory;

NS.Factory = YJS_log_Factory = {
    _: {
        lut: {}
    },
    __: {
        // The following is used by the unit tests.
        reset: function () {
            YJS_log_Factory._.lut = {};
        }
    }
};

// ==========================================================================
/**
 * Returns the log instance with the specified name. Multiple calls with the same name will return the exact same
 * instance.
 * 
 *     var PAGE_LOG = YJS.log.Factory.get(window.document.location.path);
 *     var NONAME_LOG = YJS.log.Factory.get("");
 *     var LOG = YJS.log.Factory.get("YJS.core"); // YJS.core log
 *     LOG.log('A log message');
 *     var BILOG = YJS.log.Factory.get("BrowserInfo");
 *     BILOG.info('The browser is ...');
 *     BILOG.info('This browser supports ...');
 * 
 * @param {string} name The name of the log. A dot (.) may be used to separate the name parts. Name parts
 *   must not contain whitespace and must have a length greater than zero with one exception. The name itself may be
 *   the empty string.
 * 
 * @return {YJS.log.Log} The log instance with the specified name.
 * @throws TypeError
 */
YJS_log_Factory.get = function (name) {
    var SELF = YJS.log.Factory,
        key, log;
    
    key = name;
    log = SELF._.lut[key];
    if (!log) {
        log = new YJS.log.Log({
            name: key
        });
        SELF._.lut[key] = log;
    }
    return log;
};

// ==========================================================================
/**
 * @return {string[]} The names of all the logs created by this factory. The list of names will be in no particular
 *   order.
 */
YJS_log_Factory.getLogNames = function () {
    var SELF = YJS.log.Factory,
        name, names = [];

    // TODO: See if Object already provides a simple way to get all the keys.
    for (name in SELF._.lut) {
        names.push(name);
    }
    return names;
};

// ==========================================================================
/**
 * Returns the list of all logs created by this factory up to this point.
 * 
 * @return {YJS.log.Log[]} The list of all logs created by this factory.
 */
YJS_log_Factory.getLogList = function () {
    var SELF = YJS.log.Factory,
        names = SELF.getLogNames(),
        i, iLen, log, logs, name;

    names.sort();
    logs = [];
    for (i = 0, iLen = names.length; i < iLen; ++i) {
        name = names[i];
        log = SELF.get(name);
        logs.push(log);
    }
    return logs;
};

// ==========================================================================
/**
 * @member YJS
 * @property LOG
 * A predefined YJS.log.Log so that one can start logging without using the YJS.log.Factory or building a custom
 * YJS.log.Config. Without a call to YJS.log.Log#setConfig, the {@link YJS.log.Config#DEFAULT default configuration}
 * is used. This means all messages are logged to the web-console. How these messages are logged can be changed
 * by creating a custom {@link YJS.log.Config configuration} and calling YJS.log.Log#setConfig.
 * 
 *     // No call to YJS.log.Log#setConfig has been made yet.
 *     // The following will log to the web-console.
 *     YJS.LOG.debug('A %s message demonstating string substitution.', 'debug');
 *     YJS.LOG.info('An %s message.', 'info');
 *     YJS.LOG.log('A %s message.', 'log');
 *     YJS.LOG.warn('A %s message.', 'warn');
 *     YJS.LOG.error('An %s message.', 'error');
 *     YJS.LOG.fatal('A %s message.', 'fatal');
 *     YJS.LOG.logAt(YJS.log.Level.DEBUG, 'A debug message.');
 *     YJS.LOG.logAt(YJS.log.Level.INFO, 'A info message.');
 *     YJS.LOG.logAt(YJS.log.Level.LOG, 'A log message.');
 *     YJS.LOG.logAt(YJS.log.Level.WARN, 'A warn message.');
 *     YJS.LOG.logAt(YJS.log.Level.ERROR, 'A error message.');
 *     YJS.LOG.logAt(YJS.log.Level.FATAL, 'A fatal message.');
 *     YJS.LOG.logAt(0, 'A custom level message.');
 *     YJS.LOG.logAt(10000, 'Another %s level', 'custom', ' message.');
 *     
 *     // Now a custom configuration is built:
 *     var consoleAppender = YJS.log.ConsoleAppender.INSTANCE;
 *     var rootLogger = new YJS.log.Logger({
 *         appenders: consoleAppender,
 *         minLevel: YJS.log.Level.WARN,
 *         pattern: '.' // The pattern used for root loggers.
 *     });
 *     var configBuilder = new YJS.log.ConfigBuilder();
 *     configBuilder.addLoggers(rootLogger);
 *     var config = configBuilder.build();
 *     YJS.log.Log.setConfig(config);
 *     ...
 *     // Now that the logging configuration has changed due to the call to
 *     // YJS.log.Log#setConfig, the behavior of the logging methods has
 *     // changed too.
 *     
 *     // Won't be logged to the web-console because it's level is too low.
 *     YJS.LOG.log('Some log message.');
 *     // Will be logged to the web-console because it's level is high enough.
 *     YJS.LOG.warn('Some warning message.');
 */
YJS.LOG = YJS_log_Factory.get('');

})(this, YJS, 'YJS.log');

// ##################################################################################################################
