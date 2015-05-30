
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.Array
 * A set of array related methods.
 */
(function (YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_Array;

NS.Array = YJS_Array = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * Creates a copy of the array-like object and returns an array with all the same items.
 * 
 *     function () {
 *         var args = YJS.Array.copy(arguments);
 *         ...
 *     };
 * 
 *     YJS.Array.copy(); // null
 * 
 * NOTE: This will only do a shallow copy. Items that are references to objects will be copied as a new reference to
 * the same object. This new reference will be able to mutate the object just like the original reference.
 * 
 * TODO: Handle various array-like objects like a NodeList, CSSRuleList, etc.
 * 
 * @param {Array|Arguments} arrayLikeObj An array like object.
 * 
 * @return {Array} A copy of the array-like object or `null` if the argument is not array-like.
 */
YJS_Array.copy = function (arrayLikeObj) {
    var copy = null;
    if (arrayLikeObj && typeof arrayLikeObj.length == 'number') {
        copy = [].slice.call(arrayLikeObj, 0);
    }
    return copy;
};

// ==========================================================================
/**
 * Wraps a value in an array if it's not already an array. Returns:
 *
 * * An empty array if given value is `undefined`.
 * * Itself if given value is already an array.
 * * An array with `null` as the single item if given value is `null`.
 * * An array with one item which is the given value, otherwise.
 * 
 * Here are some example uses.
 * 
 *     YJS.Array.wrap(); // [] (new empty array)
 *     YJS.Array.wrap([]); // A reference to the passed-in empty array ([]).
 *     YJS.Array.wrap([1,2,3]); // A reference to passed-in array ([1,2,3]).
 *     YJS.Array.wrap(null); // [null]
 *     YJS.Array.wrap(0); // [0]
 *     YJS.Array.wrap(false); // [false]
 *     YJS.Array.wrap(""); // [""]
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * NOTE: This function behaves like `Ext.Array.from` but does not return an empty array when `null` is passed in. In
 * that case, an array with `null` as the single item is returned. It also doesn't handle some "iterables" like
 * NodeList that `Ext.Array.from` does.
 * 
 * TODO: Handle various array-like objects. 
 * 
 * @param {?Mixed} value The value to wrap in an array if it's not already an array.
 * 
 * @return {Array.<Mixed>} The value as an array.
 */
YJS_Array.wrap = function (value) {
    if (value === undefined) {
        return [];
    }

    if (Array.isArray(value)) {
        return value;
    }

    return [value];
};

})(YJS, 'YJS');

// ##################################################################################################################
