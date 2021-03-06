
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.Log
 * A log is the primary object used for logging. Logs are created using the {@link YJS.log.Factory log factory}.
 * 
 *     var LOG = YJS.log.Factory.get('mylog');
 * 
 * The above call will create and return a reference to the `mylog` log. Because logs are associated with a name, one
 * could create a named log to log all the AJAX calls in their code.
 * 
 *     App.AJAX_LOG = YJS.log.Factory.get('ajax');
 *     ...
 *     App.AJAX_LOG.info('Request sent.');
 *     App.AJAX_LOG.info('Response received.');
 *     ...
 *     App.AJAX_LOG.error('Response timed out');
 * 
 * Named logs give you more control over which messages will ultimately be logged. One could, for example, setup the
 * log configuration so only error-level or higher messages are logged for the `ajax` log but have info-level or higher
 * messages logged for the `mylog` log.
 * 
 * Log messages may contain placeholder strings and they may be used as a template. The placeholders will be filled in
 * using the arguments following the first argument. Any extra arguments will be appended to the end of the message.
 * 
 *     LOG.error('%s must be between %i and %i', 'Foo', 1, 10, ' and must be integral.');
 * 
 * See YJS.String#printf for details. It works very similar to how some browsers support string substitutions with
 * console#log and console's other similar methods.
 * 
 * @requires YJS.log.Config
 * @uses YJS.log.Level
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_Log, YJS_log_Log_prototype;

// ==========================================================================
/**
 * @method constructor
 * Creates a immutable log with the specified name. Typically, this constructor is _not_ used directly. Instead,
 * YJS.log.Factory#get is used.
 * 
 * @param {Object} [cfgs]
 * @param {string} [cfgs.name=""] The name of the log. A dot (.) may be used to separate the name parts. Name parts
 *   must not contain whitespace and must have a length greater than zero with one exception. The name itself may be
 *   the empty string.
 * @throws TypeError
 */
NS.Log = YJS_log_Log = function (cfgs) {
    var name;
    
    cfgs = cfgs || {};
    name = cfgs.name || "";
    
// @if DEBUG
    var n, nLen, nameParts;
    if (typeof name != 'string') {
        throw new TypeError('cfgs.name must be a string');
    }
    if (name.match(/\s/)) {
        throw new TypeError('cfgs.name must not contain whitespace.');
    }
    if (name.length > 0) {
        nameParts = name.split('.');
        for (n = 0, nLen = nameParts.length; n < nLen; ++n) {
            if (nameParts[n].length === 0) {
                throw new TypeError('cfgs.name must not have empty name parts.');
            }
        }
    }
// @endif
    
    /**
     * @readonly
     * @property {string}
     * The name of this log.
     */
    this.name = name;
    Object.freeze(this);
};

YJS_log_Log._ = {
    cfg: YJS.log.Config.DEFAULT
};

// ==========================================================================
/**
 * @static
 * Returns a reference to the currently active configuration. If a configuration has not been set, then a reference
 * to the {@link YJS.log.Config#DEFAULT default} configuration will be returned.
 * 
 * See YJS.log.Log#setConfig to change the currently active configuration.
 * 
 * @return {YJS.log.Config} The currently active configuration.
 */
YJS_log_Log.getConfig = function () {
    var SELF = YJS.log.Log;
    return SELF._.cfg;
};

// ==========================================================================
/**
 * @static
 * Sets the current runtime configuration. This is the configuration used by all logs. Setting this will affect all
 * existing logs and any new logs. Individual logs don't have their own configuration. However, individual logs can be
 * affected by the configuration.
 * 
 * In other words, only one configuration is active at a time. 
 * 
 * @param {YJS.log.Config} config
 */
YJS_log_Log.setConfig = function (config) {
    var SELF = YJS.log.Log;
    SELF._.cfg = config || YJS.log.Config.DEFAULT;
};

YJS_log_Log_prototype = YJS_log_Log.prototype;

// ==========================================================================
/**
 * Logs messages at the 'debug' level.
 * 
 *     YJS.LOG.debug('Foo was 10. Expected 12.');
 *     YJS.LOG.debug('%s was %i. Expected %i.', 'Foo', 10, 12);
 *     YJS.LOG.debug('%s was %i.', 'Foo', 10, ' Expected 12.');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.debug = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.DEBUG].concat(args));
};

// ==========================================================================
/**
 * Logs messages at the 'fatal' level.
 * 
 *     YJS.LOG.fatal('Foo was 10. Expected 12. Aborting!!');
 *     YJS.LOG.fatal('%s was %i. Expected %i. %s!!', 'Foo', 10, 12, 'Aborting');
 *     YJS.LOG.fatal('%s was %i.', 'Foo', 10, ' Expected 12.', ' Aborting!!');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.fatal = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.FATAL].concat(args));
};

// ==========================================================================
/**
 * Logs messages at the 'error' level.
 * 
 *     YJS.LOG.error('Foo was 10. Expected 12. Shutting down Foo.');
 *     YJS.LOG.error('%s was %i. Expected %i. Shutting down %s.', 'Foo', 10, 12, 'Foo');
 *     YJS.LOG.error('%s was %i.', 'Foo', 10, ' Expected 12.', ' Shutting down Foo.');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.error = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.ERROR].concat(args));
};

// ==========================================================================
/**
 * Logs messages at the 'info' level.
 * 
 *     YJS.LOG.info('BTW, Foo was 10. Expected 12.');
 *     YJS.LOG.info('BTW, %s was %i. Expected %i.', 'Foo', 10, 12);
 *     YJS.LOG.info('BTW, %s was %i.', 'Foo', 10, ' Expected 12.');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.info = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.INFO].concat(args));
};

// ==========================================================================
/**
 * Logs messages at the 'log' level.
 * 
 *     YJS.LOG.log('Not again. Foo was 10. Expected 12.');
 *     YJS.LOG.log('Not again. %s was %i. Expected %i.', 'Foo', 10, 12);
 *     YJS.LOG.log('Not again. %s was %i.', 'Foo', 10, ' Expected 12.');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.log = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.LOG].concat(args));
};

// ==========================================================================
/**
 * Logs messages at the specified level which allows the ability to chose different log-levels at compile-time and/or
 * at runtime.
 * 
 *     var logLevel = getRuntimeLogLevel();
 *     var LOG = YJS.log.Factory.get('mylog');
 *     ...
 *     LOG.logAt(logLevel, "You may or may not see this.");
 * 
 * @param {number} logLevel The level at which to log the message. See YJS.log.Level for pre-defined log-level values.
 *   Other levels beside the pre-defined are allowed too.
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.logAt = function (args) {
    var config = YJS.log.Log.getConfig(),
        logger;

    logger = config.findLoggerFor(this);
    logger.logAt.apply(logger, arguments);
};

// ==========================================================================
/**
 * Logs messages at the 'warn' level.
 * 
 *     YJS.LOG.warn('Warning! Foo was 10. Expected 12.');
 *     YJS.LOG.warn('Warning! %s was %i. Expected %i.', 'Foo', 10, 12);
 *     YJS.LOG.warn('Warning! %s was %i.', 'Foo', 10, ' Expected 12.');
 * 
 * @param {string} template The message template with optional placeholders (aka substitution strings) that is used to
 *   help form the log message.
 * @param {Mixed...} data The data to merge with the template and/or to append to the end of the message.
 */
YJS_log_Log_prototype.warn = function (args) {
    args = Array.prototype.slice.call(arguments, 0);
    this.logAt.apply(this, [YJS.log.Level.WARN].concat(args));
};

})(YJS, 'YJS.log');

// ##################################################################################################################
