
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
 * Determines the index of the specified `value` in the specified `array`.
 * 
 *     var array = [0, 1, null, 2, '', false, true, NaN, undefined, 0, 1, null, 2];
 *     YJS.Array.indexOf(array, 0); // 0
 *     YJS.Array.indexOf(array, 1); // 1
 *     YJS.Array.indexOf(array, null); // 2
 *     YJS.Array.indexOf(array, 2); // 3
 *     YJS.Array.indexOf(array, ''); // 4
 *     YJS.Array.indexOf(array, false); // 5
 *     YJS.Array.indexOf(array, true); // 6
 *     YJS.Array.indexOf(array, NaN); // 7
 *     [NaN].indexOf(NaN); // -1
 *     YJS.Array.indexOf(array, undefined); // 8
 *     YJS.Array.indexOf(array, 0, 9); // 9
 *     YJS.Array.indexOf(array, null, 9); // 11
 *     // First argument is non-array:
 *     YJS.Array.indexOf(undefined); // -1
 *     YJS.Array.indexOf(null); // -1
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * NOTE: This function behaves the same as the native `Array.prototype.indexOf` except that it can also find `NaN`.
 * 
 * @param {?Array} array The array to check.
 * @param {Object} value The value to find the index of.
 * @param {Number} [from] The index at which to begin the search.
 * 
 * @return {Number} The index of value in the array if found, otherwise `-1`.
 */
YJS_Array.indexOf = function (array, value, from) {
   var YJS_Number = YJS.Number,
       i, item, iLen, valueBeNaN;

   if (Array.isArray(array)) {
       valueBeNaN = YJS_Number.itBeNaN(value);
       iLen = array.length;
       for (i = from < 0 ? Math.max(0, iLen + from) : from || 0; i < iLen; ++i) {
           item = array[i];
           if (item === value || valueBeNaN && YJS_Number.itBeNaN(item)) {
               return i;
           }
       }
   }

   return -1;
};

// ==========================================================================
/**
 * Creates a new array only containing the unique items of the specified array. That is, it effectively turns an array
 * into a set of items.
 * 
 * NOTE: Two equivalent objects like 2 empty object literals are not duplicates because they are separate objects in
 * memory that happen to have the exact same properties. However, 2 duplicate references are considered duplicates.
 * 
 *     var obj = { foo: 'bar' };
 *     var noDups =YJS.Array.unique([1, 2, {}, 1, obj, 4, 3, obj, {}, 6, 3]);
 *     console.log(noDups); // [1, 2, {}, obj, 4, 3, {}, 6].
 * 
 * @param {?Array} array The array to remove duplicates from and thereby make unique.
 * @param {Object} [options] The options to use when making the array unique. (Currently none.)
 * 
 * @return {Array} A new array with the duplicate items removed. The original array is not modified.
 */
YJS_Array.unique = function (array, options) {
    var YJS_Array =YJS.Array,
        clone, i, item, iLen;

    if (Array.isArray(array)) {
        clone = [];
        for (i = 0, iLen = array.length; i < iLen; ++i) {
            item = array[i];

            if (YJS_Array.indexOf(clone, item) === -1) {
                clone.push(item);
            }
        }
        array = clone;
    }
    return array;
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
