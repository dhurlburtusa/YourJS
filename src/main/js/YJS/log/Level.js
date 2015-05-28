
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
     * @property {Number}
     * The `debug` log-level.
     */
    DEBUG: 0,
    /**
     * @property {Number}
     * The `info` log-level.
     */
    INFO: 2000,
    /**
     * @property {Number}
     * The `log` log-level.
     */
    LOG: 4000,
    /**
     * @property {Number}
     * The `warn` log-level.
     */
    WARN: 6000,
    /**
     * @property {Number}
     * The `error` log-level.
     */
    ERROR: 8000,
    /**
     * @property {Number}
     * The `fatal` log-level.
     */
    FATAL: 10000
};

})(YJS, 'YJS.log');

// ##################################################################################################################
