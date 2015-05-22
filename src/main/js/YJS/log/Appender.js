
/*
 * @dependency YJS
 */

/**
 * @abstract
 * @class YJS.log.Appender
 * The base class all appender subclasses should inherit from.
 * 
 * Different implementations may handle the appending (aka logging) of the messages differently. Some implementations
 * may only handle messages at certain levels, ignoring the rest. Some may format the message even further. Some may
 * aggregate the messages. Some may buffer up the messages until a certain threshold is meet. While others may simply
 * ignore all messages.
 * 
 * Each implementation SHOULD document how it handles the messages it appends.
 * 
 * @uses YJS.log.Entry
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_log_Appender;

NS.Appender = YJS_log_Appender = function () {};

// ==========================================================================
/**
 * @abstract
 * Appends/handles the log entry.
 * 
 * @param {YJS.log.Entry} logEntry The log entry to append.
 */
YJS_log_Appender.prototype.append = function () {
// @if DEBUG
    throw new Error("Subclasses must override the `append` method.");
// @endif
};

})(YJS, 'YJS.log');

// ##################################################################################################################
