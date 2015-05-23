/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Array", function () {

    describe("instance", function () {

        it("should be an instance of Object", function () {
            var array = [];
            expect(array instanceof Object).toBe(true);
        });

        it("should be an instance of Array", function () {
            var array = [];
            expect(array instanceof Array).toBe(true);
        });

        it("should not be an instance of String", function () {
            var array = [];
            expect(array instanceof String).toBe(false);
        });

        describe(".constructor", function () {

            it("is of type function", function () {
                var array;

                array = [];
                expect(typeof array.constructor == 'function').toBe(true);

                array = new Array();
                expect(typeof array.constructor == 'function').toBe(true);
            });

            it("is `Array`", function () {
                var array;

                array = [];
                expect(array.constructor === Array).toBe(true);

                array = new Array();
                expect(array.constructor === Array).toBe(true);
            });

        });

    });

    describe(".prototype", function () {

        describe(".concat", function () {

            it("called on a empty array should return new array with new values", function () {
                var array, result;

                array = [];
                result = array.concat();
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(0);

                array = [];
                result = array.concat("zero");
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(1);
                expect(result[0]).toBe("zero");

                // Multiple arguments should concat all argument values.
                array = [];
                result = array.concat("zero", "one");
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(2);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");

                // Array as argument should concat the array's items.
                array = [];
                result = array.concat(["zero"]);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(1);
                expect(result[0]).toBe("zero");

                // Array with multiple items should concat all items.
                array = [];
                result = array.concat(["zero", "one"]);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(2);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");

                // Multiple array arguments should be okay.
                array = [];
                result = array.concat(["zero"], ["one"]);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(2);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");

                // Mix of non-array and array arguments should be okay.
                array = [];
                result = array.concat("zero", ["one", "two"]);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(3);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");
                expect(result[2]).toBe("two");

                // Nested arrays should stay arrays.
                array = [];
                result = array.concat("zero", ["one", ["two"]]);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(3);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");
                expect(result[2]).toEqual(["two"]);
            });

            it("called on a pre-populated array should return new array with new values", function () {
                var arg1, array, result;

                // Nested arrays should stay arrays.
                array = ["zero", "one", ["two", "three"], "four"];
                arg1 = ["six", ["seven"]];
                result = array.concat("five", arg1);
                expect(result).toBeDefined();
                expect(result).not.toBe(array);
                expect(result.length).toBe(7);
                expect(result[0]).toBe("zero");
                expect(result[1]).toBe("one");
                expect(result[2]).toEqual(["two", "three"]);
                expect(result[3]).toBe("four");
                expect(result[4]).toBe("five");
                expect(result[5]).toBe("six");
                expect(result[6]).toEqual(["seven"]);
                expect(result[2]).toBe(array[2]);
                expect(result[6]).toBe(arg1[1]);
            });

        });

        /*
         * Not supported in IE8 or older. Errors with "TypeError: Object doesn't support property or method 'every'".
         * Array.prototype.every was introduced in ECMA-262 standard in the 5th edition but implemented in
         * JavaScript 1.6. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
         * for details.
         */
        describe(".every", function () {

            it("called on an empty array should return true regardless of callback", function () {
                var allTrue, array, count;

                array = [];
                count = 0;
                allTrue = array.every(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return false;
                });
                expect(allTrue).toBe(true);
                expect(count).toBe(0);

                array = [];
                count = 0;
                allTrue = array.every(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return true;
                });
                expect(allTrue).toBe(true);
                expect(count).toBe(0);
            });

            it("called on an array should return as expected", function () {
                var allTrue, array, count;

                array = [100, 23, 150, -20, 0];
                count = 0;
                allTrue = array.every(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return item >= 0;
                });
                expect(allTrue).toBe(false);
                expect(count).toBe(4); // Stopped on item -20.

                array = [100, 23, 150, -20, 0];
                count = 0;
                allTrue = array.every(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return item >= -20;
                });
                expect(allTrue).toBe(true);
                expect(count).toBe(5);

                // Callback just needs to return a falsy value. It doesn't have to return `false`.
                array = [100, 23, 0, -20, 150];
                count = 0;
                allTrue = array.every(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return item; // 
                });
                expect(allTrue).toBe(false);
                expect(count).toBe(3);
            });

            it("called with no scope argument", function () {
                var allTrue, array;

                array = [];
                allTrue = array.every(function (item, idx, arr) {
                    /* FIXME: This depends on if we are in strict mode (I believe).
                     * `this` is suppose to be undefined according to
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
                     * but is actually the global object.
                     */
                    expect(this).toBeUndefined();
                    return true;
                });

                array = [1, 2, 3, 4, 5];
                allTrue = array.every(function (item, idx, arr) {
                    /* FIXME: This depends on if we are in strict mode (I believe).
                     * `this` is suppose to be undefined according to
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
                     * but is actually the global object.
                     */
                    expect(this).toBeUndefined();
                    return true;
                });
            });

            it("called with a scope argument", function () {
                var allTrue, array, scope;

                array = [];
                scope = { foo: 10 };
                allTrue = array.every(function (item, idx, arr) {
                    expect(this).toBe(scope);
                    expect(this.foo).toBe(10);
                    return true;
                }, scope);

                array = [1, 2, 3, 4, 5];
                scope = { foo: 10 };
                allTrue = array.every(function (item, idx, arr) {
                    expect(this).toBe(scope);
                    expect(this.foo).toBe(10);
                    return (item + this.foo) < 13;
                }, scope);
            });

        });

        /*
         * Not supported in IE8 or older. Errors with "TypeError: Object doesn't support property or method 'filter'".
         * Array.prototype.filter was introduced in ECMA-262 standard in the 5th edition but implemented in
         * JavaScript 1.6. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
         * for details.
         */
        describe(".filter", function () {

            it("called on an empty array should return true regardless of callback", function () {
                var array, count, result;

                array = [];
                count = 0;
                result = array.filter(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return false;
                });
                expect(result).toEqual([]);
                expect(count).toBe(0);

                array = [];
                count = 0;
                result = array.filter(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return true;
                });
                expect(result).toEqual([]);
                expect(count).toBe(0);
            });

            it("called on an array should return as expected", function () {
                var array, count, result;

                array = [100, 23, 150, -20, 0];
                count = 0;
                result = array.filter(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return item >= 0;
                });
                expect(result).toEqual([100, 23, 150, 0]);
                expect(count).toBe(5);

                array = [100, 23, 150, -20, 0];
                count = 0;
                result = array.filter(function (item, idx, arr) {
                    ++count;
                    expect(arr).toBe(array);
                    return item >= -20;
                });
                expect(result).toEqual([100, 23, 150, -20, 0]);
                expect(count).toBe(5);
            });

            it("called with no scope argument", function () {
                var array, result;

                array = [];
                result = array.filter(function (item, idx, arr) {
                    /* FIXME: This depends on if we are in strict mode (I believe).
                     * `this` is suppose to be undefined according to
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                     * but is actually the global object.
                     */
                    expect(this).toBeUndefined();
                    return true;
                });

                array = [1, 2, 3, 4, 5];
                result = array.filter(function (item, idx, arr) {
                    /* FIXME: This depends on if we are in strict mode (I believe).
                     * `this` is suppose to be undefined according to
                     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                     * but is actually the global object.
                     */
                    expect(this).toBeUndefined();
                    return true;
                });
            });

            it("called with a scope argument", function () {
                var array, scope, result;

                array = [];
                scope = { foo: 10 };
                result = array.filter(function (item, idx, arr) {
                    expect(this).toBe(scope);
                    expect(this.foo).toBe(10);
                    return false;
                }, scope);

                array = [1, 2, 3, 4, 5];
                scope = { foo: 10 };
                result = array.filter(function (item, idx, arr) {
                    expect(this).toBe(scope);
                    expect(this.foo).toBe(10);
                    return false;
                }, scope);
            });

        });

        /*
         * Not supported in IE8 or older. Errors with "TypeError: Object doesn't support property or method 'forEach'".
         * Array.prototype.forEach was introduced in ECMA-262 standard in the 5th edition but implemented in
         * JavaScript 1.6. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
         * for details.
         */
        describe(".forEach", function () {

            it("should call callback once for each item", function () {
                var array, count;

                array = [0, "one", "two", 3, "four"];
                count = 0;
                array.forEach(function (item, idx, arr) {
                    ++count;
                });
                expect(count).toBe(5);
            });

            it("called on an empty array should not end up calling callback", function () {
                var array, count;

                array = [];
                count = 0;
                array.forEach(function (item, idx, arr) {
                    ++count;
                });
                expect(count).toBe(0);
            });

            // TODO: Add more tests for Array.prototype.forEach.
        });

        /*
         * Not supported in IE8 or older. Errors with "TypeError: Object doesn't support property or method 'indexOf'".
         * Array.prototype.indexOf was introduced in ECMA-262 standard in the 5th edition but implemented in
         * JavaScript 1.6. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
         * for details.
         */
        describe(".indexOf", function () {

            it("should return correct index", function () {
                var array, date, emptyArr, emptyObj, i;

                array = [false, 0, "", null, undefined, NaN, false, 0, "", null, undefined, NaN];
                expect(array.indexOf(false)).toBe(0);
                expect(array.indexOf(0)).toBe(1);
                expect(array.indexOf("")).toBe(2);
                expect(array.indexOf(null)).toBe(3);
                expect(array.indexOf(undefined)).toBe(4);

                // For some reason the browsers won't find NaN.
                expect(array.indexOf(NaN)).toBe(-1);

                date = new Date();
                emptyArr = [];
                emptyObj = {};
                array = [true, -1, "foo", date, emptyArr, emptyObj, true, 1, "foo", date, emptyArr, emptyObj];
                expect(array.indexOf(true)).toBe(0);
                expect(array.indexOf(-1)).toBe(1);
                expect(array.indexOf("foo")).toBe(2);
                expect(array.indexOf(date)).toBe(3);
                expect(array.indexOf([])).toBe(-1);
                expect(array.indexOf(emptyArr)).toBe(4);
                expect(array.indexOf({})).toBe(-1);
                expect(array.indexOf(emptyObj)).toBe(5);
            });

            it("called with fromIndex should return correct index", function () {
                var array, date, emptyArr, emptyObj, i;

                array = [false, 0, "", null, undefined, NaN, false, 0, "", null, undefined, NaN];
                expect(array.indexOf(false, 6)).toBe(6);
                expect(array.indexOf(0, 6)).toBe(7);
                expect(array.indexOf("", 6)).toBe(8);
                expect(array.indexOf(null, 6)).toBe(9);
                expect(array.indexOf(undefined, 6)).toBe(10);

                // For some reason the browsers won't find NaN.
                expect(array.indexOf(NaN, 6)).toBe(-1);

                date = new Date();
                emptyArr = [];
                emptyObj = {};
                array = [true, -1, "foo", date, emptyArr, emptyObj, true, -1, "foo", date, emptyArr, emptyObj];
                expect(array.indexOf(true, 6)).toBe(6);
                expect(array.indexOf(-1, 6)).toBe(7);
                expect(array.indexOf("foo", 6)).toBe(8);
                expect(array.indexOf(date, 6)).toBe(9);
                expect(array.indexOf([], 6)).toBe(-1);
                expect(array.indexOf(emptyArr, 6)).toBe(10);
                expect(array.indexOf({}, 6)).toBe(-1);
                expect(array.indexOf(emptyObj, 6)).toBe(11);
            });

            // TODO: Add more tests for Array.prototype.indexOf.
        });

        // TODO: Add tests for Array.prototype.lastIndexOf.

        describe(".length", function () {

            it("should return expected value when new item set outside of bounds", function () {
                var array, result;

                array = ["zero", "one"];
                array[100] = "three";
                expect(array.length).toBe(101);

                array = ["zero", "one"];
                array[100] = "three";
                array[200] = undefined;
                expect(array.length).toBe(201);

                array = ["zero", "one"];
                array[100] = "three";
                array[200] = "four";
                array[200] = undefined;
                expect(array.length).toBe(201);
            });

            // TODO: Add more tests for Array.prototype.length.
        });

        // TODO: Add tests for Array.prototype.map.
        // TODO: Add tests for Array.prototype.reduce.
        // TODO: Add tests for Array.prototype.reduceRight.
        // TODO: Add tests for Array.prototype.some.

        describe(".pop", function () {

            it("called on a empty array should return undefined and not throw an error", function () {
                var array = [],
                    result = "something";

                result = array.pop();
                expect(result).not.toBeDefined();
            });

        });

        describe(".join", function () {

            it("called on an array with null values should return joined array with nulls treated like empty string", function () {
                var array, result;

                array = ['foo', null, 'bar'],
                result = array.join('');
                expect(result).toEqual("foobar");

                array = ['foo', null, 'bar'],
                result = array.join(',');
                expect(result).toEqual("foo,,bar");

                array = ['foo', null, 'bar'],
                result = array.join(', ');
                expect(result).toEqual("foo, , bar");
            });

        });

    });

});

})(this);
