
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
 * Copies all the enumerable, own properties of each source object to the specified target object if the target does
 * not already has its own property. When different sources have a property with the same name, then the latter
 * source's property wins.
 * 
 *     var car, source1, source2, target;
 *     target = { id: 1, model: 'Mustang' };
 *     source1 = { fast: false, model: '' };
 *     source2 = { fast: true, make: 'Ford' };
 *     car = YJS.Object.applyIf(target, source1, source2);
 *     console.log(car); // { id: 1, fast: true, make: 'Ford', model: 'mustang' }
 * 
 * Sources may be arrays.
 * 
 *     var out, target;
 *     target = { id: 1, model: 'Mustang' };
 *     out = YJS.Object.applyIf(target, ['first', 'second']);
 *     console.log(out); // { 0: 'first', 1: 'second', id: 1, model: 'Mustang' }
 * 
 * See Jasmine specs for more examples.
 * 
 * Modeled after `Object#assign`.
 * 
 * @param {Object} target The target of the properties.
 * @param {Object...|Array...} source The source(s) of the properties. When the source(s) is an array, then the array
 *   indexes act like keys while the corresponding array item acts like the value.
 * 
 * @return {Object} `target` modified with the source(s) properties.
 */
YJS_Object.assignIf = function (target, source, varargs) {
    var key, s, sources;

    sources = Array.prototype.slice.call(arguments, 1); // Copy arguments ignoring the target arg.

    // Deliberately not using YJS.Utils#typeOf. If we did, then the following condition would look something like
    // YJS.Utils.typeOf(target) == 'object' || YJS.Utils.typeOf(target) == 'array'. Since the following has the same
    // or less complexity but also doesn't couple YJS.Utils#typeOf to this function, it was decided not to use
    // YJS.Utils#typeOf.
    if (typeof target == 'object' && target !== null) {
        for (s = sources.length; s >= 0; s--) {
            source = sources[s];
            if (typeof source == 'object' && source !== null) {
                for (key in source) {
                    if (source.hasOwnProperty(key)) {
                        if (!target.hasOwnProperty(key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
        }
    }

    return target;
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
 * @param {string} path The path to the value. A path is a special selector that should lead to a unique point in the
 *   object. Currently, only dot notation is understood. E.g., `'top.next.last'`.
 * @param {Mixed} value The value to set.
 * @param {Object} [options] The options to use.
 * @param {boolean} [options.force=false] Flag indicating whether to force the creation of missing objects along the
 *   path.
 */
YJS_Object.put = function (object, path, value, options) {
    var context, i, iLen, key, keys;

    options = options || {};
    options.force = options.force === false ? false : true;

    keys = path.split('.');
    context = object;

    for (i = 0, iLen = keys.length; i < iLen; ++i) {
        key = keys[i];
        // If key is blank, no context, context is not an Object, then...
        if (key.length === 0 || !context || !(context instanceof Array || context instanceof Object)) {
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
