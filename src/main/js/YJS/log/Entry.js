
/*
 * @dependency YJS
 */

/**
 * @class YJS.log.Entry
 * A log-entry represents a message and the level at which it is to be logged.
 * 
 * @requires YJS.log.Level
 * 
 * @uses YJS.String
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath);

// ==========================================================================
/**
 * @method constructor
 * Creates an immutable log-entry with the specified level, message template, and data.
 * 
 * @param {Object} [cfgs]
 * @param {Mixed[]} [cfgs.data=[]] The data to merge with the template and/or to append to the end of the message.
 * @param {Number} [cfgs.level=YJS.log.Level.DEBUG] The level at which to log the message. See YJS.log.Level for
 *   pre-defined log-level values. Other levels beside the pre-defined are allowed too.
 * @param {String} [cfgs.template=""] The message template with optional placeholders (aka substitution strings) that
 *   is used to help form the log message.
 */
NS.Entry = function (cfgs) {
    var SELF = this, data, level, template;
    
    cfgs = cfgs || {};
    data = cfgs.data || [];
    level = cfgs.level || YJS.log.Level.DEBUG;
    template = "" + (cfgs.template || "");
    
// @if DEBUG
    if (typeof level !== 'number') {
        throw new TypeError('cfgs.level must be a number.');
    }
// @endif
    
    SELF._ = {};
    
    /**
     * @readonly
     * @property {Number}
     * The level the message is to be logged at.
     */
    SELF.level = level;
    /**
     * @readonly
     * @property {String}
     * The message template with optional placeholders that is to be logged.
     */
    SELF.template = template;
    /**
     * @readonly
     * @property {Mixed[]}
     * The data to merge with the template and/or to append to the end of the message.
     */
    SELF.data = data;
    
    Object.freeze(SELF);
};

/**
 * Returns the message formed from merging the message template with the data. It uses YJS.String#printf to do the
 * resolution.
 */
NS.Entry.prototype.getMessage = function () {
    var SELF = this, args;
    
    if (!SELF._.resolvedMsg) {
        args = [SELF.template].concat(SELF.data);
        SELF._.resolvedMsg = YJS.String.printf.apply(YJS.String, args);
    }
    return SELF._.resolvedMsg;
};

})(YJS, 'YJS.log');

// ##################################################################################################################
