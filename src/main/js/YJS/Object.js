
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Object
 * A set of object related methods.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Object;

NS.Object = YJS_Object = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Sets the value on an object at the specified path.
 * 
 *     var object = { other: 'not affected', top: 'will be changed' };
 *     YJS.Object.put(object, 'top', 'was changed');
 * 
 *     object = { other: 'not affected', top: 'will be changed' };
 *     YJS.Object.put(object, 'top.next', 'was changed', { force: true });
 *     // object now is: { other: 'not affected', top: { next: 'was changed' } }
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * @param {Object} object The object to set the value on.
 * @param {String} path The path to the value. A path is a special selector that should lead to a unique point in the
 *   object. Currently, only dot notation is understood. E.g., `'top.next.last'`.
 * @param {Mixed} value The value to set.
 * @param {Object} [options] The options to use.
 * @param {Boolean} [options.force=false] Flag indicating whether to force the creation of missing objects along the
 *   path.
 */
YJS_Object.put = function (object, path, value, options) {
    var i, iLen, key, keys, context;

    options = options || {};
    options.force = options.force === true ? true : false;

    keys = path.split('.');
    context = object;

    for (i = 0, iLen = keys.length; i < iLen; ++i) {
        key = keys[i];
        // If key is blank, no context, context is not an Object, then...
        if (key.length === 0 || !context || typeof context !== 'object' || context.constructor !== Object) {
            break;
        }
        if (!context.hasOwnProperty(key)) {
            if (options.force === true) {
                context[key] = {};
            } else {
                break;
            }
        }
        if (i === iLen - 1) {
            context[key] = value;
        } else {
            context = context[key];
        }
    }
};

})(YJS, 'YJS');

// ##################################################################################################################
