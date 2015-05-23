/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Date", function () {

    it("should be an instance of Date", function () {
        var date = new Date();
        expect(typeof date).toBe('object');
    });

    it("should be an instance of Date", function () {
        var date = new Date();
        expect(date instanceof Date).toBe(true);
    });

    it("should be an instance of Object", function () {
        var date = new Date();
        expect(date instanceof Object).toBe(true);
    });

    it("should not be an instance of Number", function () {
        var date = new Date();
        expect(date instanceof Number).toBe(false);
    });

    describe("constructor", function () {

        it("called with year, month, but no day, hours, minutes, seconds, or millseconds should create date configured with first day of month, zero hours, zero minutes, zero seconds, and zero milliseconds", function () {
            var date = new Date(2004, 4);

            expect(date.getFullYear()).toBe(2004);
            expect(date.getMonth()).toBe(4);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

    });

    // TODO: Add more specs.

});

})(this);
