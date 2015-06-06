
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
     * @property {number}
     * The `debug` log-level.
     */
    DEBUG: 0,
    /**
     * @property {number}
     * The `info` log-level.
     */
    INFO: 2000,
    /**
     * @property {number}
     * The `log` log-level.
     */
    LOG: 4000,
    /**
     * @property {number}
     * The `warn` log-level.
     */
    WARN: 6000,
    /**
     * @property {number}
     * The `error` log-level.
     */
    ERROR: 8000,
    /**
     * @property {number}
     * The `fatal` log-level.
     */
    FATAL: 10000
};

})(YJS, 'YJS.log');

// ##################################################################################################################
