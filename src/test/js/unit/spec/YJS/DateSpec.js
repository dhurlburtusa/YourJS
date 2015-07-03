
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Date
 */
describe("YJS.Date", function () {
    var expectToBeNow, expectToBeToday;

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
        expectToBeToday = function (date) {
            var today = new Date();
            expect(date.getFullYear()).toBeCloseTo(today.getFullYear(), 1);
            expect(date.getMonth()).toBeCloseTo(today.getMonth(), 1);
            expect(date.getDate()).toBeCloseTo(today.getDate(), 1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
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

    describe(".getDaysInMonth", function () {

        it("called with anything but a Date instance should return undefined", function () {
            var daysInMonth;

            daysInMonth = YJS.Date.getDaysInMonth(undefined);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(null);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(true);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(false);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(0);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(1);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth("");
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth("foo");
            expect(daysInMonth).not.toBeDefined();
        });

        it("called with January should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 0));
            expect(daysInMonth).toBe(31);
        });

        it("called with February on a leap year should return 29", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 1));
            expect(daysInMonth).toBe(29);
        });

        it("called with February on a non-leap year should return 29", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2001, 1));
            expect(daysInMonth).toBe(28);
        });

        it("called with March should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 2));
            expect(daysInMonth).toBe(31);
        });

        it("called with April should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 3));
            expect(daysInMonth).toBe(30);
        });

        it("called with May should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 4));
            expect(daysInMonth).toBe(31);
        });

        it("called with June should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 5));
            expect(daysInMonth).toBe(30);
        });

        it("called with July should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 6));
            expect(daysInMonth).toBe(31);
        });

        it("called with August should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 7));
            expect(daysInMonth).toBe(31);
        });

        it("called with September should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 8));
            expect(daysInMonth).toBe(30);
        });

        it("called with October should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 9));
            expect(daysInMonth).toBe(31);
        });

        it("called with November should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 10));
            expect(daysInMonth).toBe(30);
        });

        it("called with December should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 11));
            expect(daysInMonth).toBe(31);
        });

    });

    describe(".isLeapYear", function () {

        it("called with anything but a Date instance should return `undefined`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(undefined);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(null);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(true);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(false);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(0);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(1);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear("");
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear("foo");
            expect(answer).not.toBeDefined();
        });

        it("called with leap year date should return `true`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(new Date(2400, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2008, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2004, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2000, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(1996, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(800, 0));
            expect(answer).toBe(true);
        });

        it("called with non-leap year date should return `false`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(new Date(2300, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2200, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2100, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2001, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2002, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2003, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2005, 0));
            expect(answer).toBe(false);
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

    describe(".today", function () {

        it("should return a new date representing the current date and time", function () {
            var today = YJS.Date.today();
            expect(today instanceof Object).toBe(true);
            expect(today instanceof Date).toBe(true);
            expectToBeToday(today);
        });

    });

});

})(this);
