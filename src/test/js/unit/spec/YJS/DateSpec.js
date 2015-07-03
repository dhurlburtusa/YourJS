
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Date
 */
describe("YJS.Date", function () {
    var expectToBeNow;

    beforeEach(function () {
        expectToBeNow = function (date) {
            var now = new Date();
            expect(date.getFullYear()).toBeCloseTo(now.getFullYear(), 1);
            expect(date.getMonth()).toBeCloseTo(now.getMonth(), 1);
            expect(date.getDate()).toBeCloseTo(now.getDate(), 1);
            expect(date.getHours()).toBeCloseTo(now.getHours(), 1);
            expect(date.getMinutes()).toBeCloseTo(now.getMinutes(), 1);
            expect(date.getSeconds()).toBeCloseTo(now.getSeconds(), 1);
        };
    });

    describe(".clearTime", function () {

        it("should clear the time", function () {
            var date, dt, y, m, d, h, i;

            date = new Date(2000, 4, 1, 13, 14, 7);
            YJS.Date.clearTime(date);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(4);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

//        it("SHOULD", function () {
//            var date, dt, y, m, d, h, i;
//            // The following creates a date for every hour from the beginning of 2007 to the end of 2009. In between this date range
//            // exists a leap-year and several day-light savings changes. It takes about 10 seconds to run (hence why it is commented
//            // out) and none of these dates seems to necessitate DST corrections in clearTime. Therefore, no DST correction is in the
//            // code.
//            for (y = 2007; y < 2010; ++y) {
//                for (m = 0; m < 12; ++m) {
//                    for (d = 1; d < 32; ++d) {
//                        if (YJS.Date.isValid(y, m, d)) {
//                            for (h = 0; h < 24; ++h) {
//                                date = YJS.Date.clearTime(new Date(y, m, d, h, 2, 3));
//                                expect(date.getFullYear()).toBe(y);
//                                expect(date.getMonth()).toBe(m);
//                                expect(date.getDate()).toBe(d);
//                                expect(date.getHours()).toBe(0);
//                                expect(date.getMinutes()).toBe(0);
//                                expect(date.getSeconds()).toBe(0);
//                                expect(date.getMilliseconds()).toBe(0);
//                            }
//                        }
//                    }
//                }
//            }
//        });

    });

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

    describe(".now", function () {

        it("should return a number representing the current time", function () {
            var now = YJS.Date.now();
            expect(now instanceof Object).toBe(true);
            expect(now instanceof Date).toBe(true);
            expectToBeNow(now);
        });

    });

});

})(this);
