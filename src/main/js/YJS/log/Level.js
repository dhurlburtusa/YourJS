
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.Level
 * Enumeration of various log levels.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath);

NS.Level = {
    /**
     * The `debug` log-level.
     */
    DEBUG: 0,
    /**
     * The `info` log-level.
     */
    INFO: 2000,
    /**
     * The `log` log-level.
     */
    LOG: 4000,
    /**
     * The `warn` log-level.
     */
    WARN: 6000,
    /**
     * The `error` log-level.
     */
    ERROR: 8000,
    /**
     * The `fatal` log-level.
     */
    FATAL: 10000
};

})(YJS, 'YJS.log');

// ##################################################################################################################
