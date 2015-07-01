
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Date
 */
describe("YJS.Date", function () {

    describe(".clone", function () {

        it("called with `undefined` should return `undefined`", function () {
            var clone = YJS.Date.clone(undefined);
            expect(clone).not.toBeDefined();
        });

        it("called with `null` should return `null`", function () {
            var clone = YJS.Date.clone(null);
            expect(clone).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var clone = YJS.Date.clone('');
            expect(clone).toBe('');
        });

        it("called with `0` should return `0`", function () {
            var clone = YJS.Date.clone(0);
            expect(clone).toBe(0);
        });

        it("called with `true` should return `true`", function () {
            var clone = YJS.Date.clone(true);
            expect(clone).toBe(true);
        });

        it("called with `false` should return `false`", function () {
            var clone = YJS.Date.clone(false);
            expect(clone).toBe(false);
        });

        it("should return a new date representing the same date and time", function () {
            var clone, date;

            date = new Date(2001, 8, 11, 7, 45, 23, 729);

            clone = YJS.Date.clone(date);

            expect(clone instanceof Object).toBe(true);
            expect(clone instanceof Date).toBe(true);
            expect(date === clone).not.toBe(true); // Should not be same reference.
            expect(date).toEqual(clone);
            expect(clone).toEqual(date);
            expect(clone.getFullYear()).toEqual(2001);
            expect(clone.getMonth()).toEqual(8);
            expect(clone.getDate()).toEqual(11);
            expect(clone.getHours()).toEqual(7);
            expect(clone.getMinutes()).toEqual(45);
            expect(clone.getSeconds()).toEqual(23);
            expect(clone.getMilliseconds()).toEqual(729);
        });

    });

});

})(this);
