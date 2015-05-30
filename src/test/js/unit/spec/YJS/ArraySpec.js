
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Array
 */
describe("YJS.Array", function () {

    describe(".indexOf", function () {

        it("called with undefined should return -1", function () {
            var result = YJS.Array.indexOf(undefined);
            expect(result).toBe(-1);
        });

        it("called with null should return -1", function () {
            var result = YJS.Array.indexOf(null);
            expect(result).toBe(-1);
        });

        it("called with non-array should return -1", function () {
            var result = YJS.Array.indexOf(new Date());
            expect(result).toBe(-1);

            result = YJS.Array.indexOf("");
            expect(result).toBe(-1);

            result = YJS.Array.indexOf(1);
            expect(result).toBe(-1);
        });

        it("called with array containing value should return expected index", function () {
            var array, index;

            array = [0, 1, null, 2, '', false, true, NaN, undefined, 0, 1, null, 2, '', false, true, NaN, undefined];

            index = YJS.Array.indexOf(array, 0);
            expect(index).toBe(0);

            index = YJS.Array.indexOf(array, 1);
            expect(index).toBe(1);

            index = YJS.Array.indexOf(array, null);
            expect(index).toBe(2);

            index = YJS.Array.indexOf(array, 2);
            expect(index).toBe(3);

            index = YJS.Array.indexOf(array, '');
            expect(index).toBe(4);

            index = YJS.Array.indexOf(array, false);
            expect(index).toBe(5);

            index = YJS.Array.indexOf(array, true);
            expect(index).toBe(6);

            index = YJS.Array.indexOf(array, NaN);
            expect(index).toBe(7);

            index = YJS.Array.indexOf(array, undefined);
            expect(index).toBe(8);

            index = YJS.Array.indexOf(array, 0, 9);
            expect(index).toBe(9);

            index = YJS.Array.indexOf(array, 1, 9);
            expect(index).toBe(10);

            index = YJS.Array.indexOf(array, null, 9);
            expect(index).toBe(11);

            index = YJS.Array.indexOf(array, 2, 9);
            expect(index).toBe(12);

            index = YJS.Array.indexOf(array, '', 9);
            expect(index).toBe(13);

            index = YJS.Array.indexOf(array, false, 9);
            expect(index).toBe(14);

            index = YJS.Array.indexOf(array, true, 9);
            expect(index).toBe(15);

            index = YJS.Array.indexOf(array, NaN, 9);
            expect(index).toBe(16);

            index = YJS.Array.indexOf(array, undefined, 9);
            expect(index).toBe(17);
        });

        it("called with array not containing value should return -1", function () {
            var array, index;

            array = [0, 1, null, 2, '', false, true];

            index = YJS.Array.indexOf(array, -1);
            expect(index).toBe(-1);

            index = YJS.Array.indexOf(array, undefined);
            expect(index).toBe(-1);
        });

        it("called with array containing non-number values but not `NaN` and `NaN` should return -1", function () {
            var array, index;

            array = [undefined, -1, 0, 1, null, 2, '', false, true]; // Does not have NaN.

            index = YJS.Array.indexOf(array, NaN);
            expect(index).toBe(-1);
        });

    });

    describe(".wrap", function () {

        it("should return empty array if value is undefined", function () {
            expect(YJS.Array.wrap(undefined)).toEqual([]);
        });

        it("should return the array if value is an array", function () {
            var arr;

            arr = [];
            expect(YJS.Array.wrap(arr)).toBe(arr);

            arr = [null, 'some other values'];
            expect(YJS.Array.wrap(arr)).toBe(arr);

            arr = [{}];
            expect(YJS.Array.wrap(arr)).toBe(arr);
        });

        it("should return an array with single null item if value is null", function () {
            expect(YJS.Array.wrap(null)).toEqual([null]);
        });

        it("should return the value wrapped in an array", function () {
            var value;

            expect(YJS.Array.wrap(false)).toEqual([false]);
            expect(YJS.Array.wrap(true)).toEqual([true]);
            expect(YJS.Array.wrap(-1)).toEqual([-1]);
            expect(YJS.Array.wrap(0)).toEqual([0]);
            expect(YJS.Array.wrap(1)).toEqual([1]);

            value = {};
            expect(YJS.Array.wrap(value)).toEqual([value]);

            value = new Date();
            expect(YJS.Array.wrap(value)).toEqual([value]);
        });

    });

});

})(this);
