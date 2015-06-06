/*
 * @dependency A console polyfill in development.
 */

(function (GBL, topNs) {

// @if STRICT
"use strict";
// @endif

var YJS = GBL[topNs], buildMode;

/*
 * Prevents any code from modifying `Object.prototype` from this point on.
 * 
 * Any polyfills used to modify missing functionality of `Object` should be included before the YJS library.
 */
(Object.freeze || Object)(Object.prototype);

// @if DEBUG
    if (YJS) {
        GBL.console.warn('The `' + topNs + '` namespace already exists. Was another third-party library included that uses the same namespace or has this library been included more than once?');
    }
// @endif

/**
 * @singleton
 * @class YJS
 */
if (!YJS) { GBL[topNs] = YJS = {}; }

// @if !DEBUG
buildMode = 'prod';
// @endif
// @if DEBUG
buildMode = 'debug';
// @endif

YJS.__ = {
    build: {
        mode: buildMode,
        version: '/* @echo VERSION */'
    },
    supports: {
        /*
         * @member YJS.__.supports
         * @private
         * @property fnToString
         * Tests if a `toString` method specific to functions exists and returns the source of the function.
         *
         * This is useful if you need to know if a function definition contains a particular string sequence. This is used by
         * the class system to determine if `$super` is called in any methods. If the function is declared to call $super,
         * then the function is wrapped in another function that knows how to prepare the wrapped function so that it calls
         * the correct super class method.
         *
         * ## How The Following Works
         * 
         * `RegEx.prototype#test` expects a string for the first argument so it calls `toString` on the function we pass it.
         * The function contains the sequence of characters `asdf`. If `Function.prototype#toString` returns the source of the
         * the function, then the string will contain `'asdf'` and the `test` function will return `true`. Otherwise `false`
         * will be returned.
         * 
         * ## Function Design
         * 
         * The design of the function to test had to be valid in the eyes of JSHint and had to be designed in such a way that
         * the critical part of the function would not be removed by JavaScript compressors.
         */
        fnToString: /asdf/.test(function () { return GBL.asdf; })
    },
    tmp: {
        // LOG: set below.
/* Uncomment when needed. Be sure to update YJS.log.Level to reference these values. Delete them when we are done with
   them.
        log: {
            Level: {
                DEBUG: 0,
                INFO: 2000,
                LOG: 4000,
                WARN: 6000,
                ERROR: 8000,
                FATAL: 10000
            }
        }
*/
    }
};

/*
 * Don't allow the build properties from being modified.
 */
Object.freeze(YJS.__.build);

/*
 * Until the YourJS logging system has been loaded, this will act as a placeholder for core code to use.
 */
YJS.__.tmp.LOG = {
/* Uncomment when needed.
    debug: function () {
        return GBL.console.debug.apply(GBL.console, arguments);
    },
*/
    error: function () {
        return GBL.console.error.apply(GBL.console, arguments);
    },
/* Uncomment when needed.
    fatal: function () {
        return GBL.console.error.apply(GBL.console, arguments);
    },
    info: function () {
        return GBL.console.info.apply(GBL.console, arguments);
    },
    log: function () {
        return GBL.console.log.apply(GBL.console, arguments);
    },
    logAt: function (logLevel, template, varargs) {
        var YJS_log_Level = YJS.__.tmp.log.Level,
            console = GBL.console,
            args;

        args = Array.prototype.slice.call(arguments, 1); // Copy arguments ignoring the logLevel arg.
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
    },
*/
    warn: function () {
        return GBL.console.warn.apply(GBL.console, arguments);
    }
};

})(this, 'YJS');
