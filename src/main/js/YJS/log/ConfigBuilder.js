
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.ConfigBuilder
 * A builder of YJS.log.Config objects.
 * 
 * @uses YJS.log.Config
 * @uses YJS.log.Logger
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_ConfigBuilder, YJS_log_ConfigBuilder_prototype;

// ==========================================================================
/**
 * @method constructor
 * Constructs a fresh ConfigBuilder.
 * 
 *     var ajaxAppender, consoleAppender, builder, config, htmlElementAppender, logger;
 *     
 *     consoleAppender = YJS.log.ConsoleAppender.INSTANCE;
 *     htmlElementAppender = new YJS.log.HtmlElementAppender({
 *         ...
 *     });
 *     ajaxAppender = new YJS.log.AjaxAppender({
 *         minLevel: YJS.log.Level.FATAL,
 *         throttle: 5000,
 *         ...
 *     });
 *     builder = new YJS.log.ConfigBuilder();
 *     logger = new YJS.log.Logger({
 *         appenders: [ajaxAppender],
 *         minLevel: YJS.log.Level.FATAL,
 *         pattern: 'PageError'
 *     });
 *     builder.addLoggers(logger);
 *     logger = new YJS.log.Logger({
 *         appenders: [consoleAppender, htmlElementAppender, ajaxAppender],
 *         minLevel: YJS.log.Level.LOG,
 *         pattern: 'MyApp.app'
 *     });
 *     builder.addLoggers(logger);
 *     ...
 *     logger = new YJS.log.Logger({
 *         appenders: [consoleAppender, htmlElementAppender, ajaxAppender],
 *         minLevel: YJS.log.Level.LOG,
 *         pattern: '.'
 *     });
 *     builder.addLoggers(logger);
 *     config = builder.build();
 *     YJS.log.Log.setConfig(config);
 *     ...
 *     var LOG = YJS.log.LogFactory.get('MyApp.app.Foo');
 *     ...
 *     LOG.log('...'); // Logs via the 'MyApp.app' logger. Will log to web-console and to HTML element.
 *     ...
 *     LOG.logAt(YJS.log.Level.FATAL, '...'); // Logs via the 'MyApp.app' logger. Will log to web-console and to HTML element.
 *     
 */
NS.ConfigBuilder = YJS_log_ConfigBuilder = function () {
    this._ = {
        loggers: []
    };
};

YJS_log_ConfigBuilder_prototype = YJS_log_ConfigBuilder.prototype;

// ==========================================================================
/**
 * Adds more loggers to the config.
 * 
 * @param {YJS.log.Logger|YJS.log.Logger[]} loggers
 */
YJS_log_ConfigBuilder_prototype.addLoggers = function (loggers) {
    var i, iLen;
    loggers = YJS.Array.wrap(loggers);
    for (i = 0, iLen = loggers.length; i < iLen; ++i) {
        this._.loggers.push(loggers[i]);
    }
};

// ==========================================================================
/**
 * Builds a new YJS.log.Config instance based on the current state of this builder.
 * 
 * @return {YJS.log.Config} The new logging configuration.
 */
YJS_log_ConfigBuilder_prototype.build = function () {
    var config = new YJS.log.Config({ loggers: this._.loggers });
    return config;
};

})(YJS, 'YJS.log');

// ##################################################################################################################
