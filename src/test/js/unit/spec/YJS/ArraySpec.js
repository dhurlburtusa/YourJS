
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Array
 */
describe("YJS.Array", function () {

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
