/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Global", function () {

    describe(".isNaN", function () {

        xit("should not be used except to determine whether parseFloat or parseInt returned NaN since it does not work as expected", function () {
            // After writing the following expectations, it was determined that isNaN does not do what is intuitive.
        });

        it("should determine undefined, NaN, Number.NaN, and an object to be not-a-number", function () {
            expect(isNaN(undefined)).toBe(true);
            expect(isNaN(NaN)).toBe(true);
            expect(isNaN(Number.NaN)).toBe(true);
            expect(isNaN({})).toBe(true);
            expect(isNaN({ 1:1 })).toBe(true);
        });

        it("should determine strings without number information only to be not-a-number", function () {
            expect(isNaN("string")).toBe(true);
            expect(isNaN("1foo")).toBe(true);
        });

        it("should determine an array with NaN, Number.NaN, an object, and a boolean to be not-a-number", function () {
            expect(isNaN([NaN])).toBe(true);
            expect(isNaN([Number.NaN])).toBe(true);
            expect(isNaN([{}])).toBe(true);
            expect(isNaN([{ foo: 'bar' }])).toBe(true);
            expect(isNaN([true])).toBe(true);
            expect(isNaN([false])).toBe(true);
        });

        it("but should determine an empty array or an array with undefined, null, or a number to not be not-a-number", function () {
            expect(isNaN([])).toBe(false);
            expect(isNaN([undefined])).toBe(false);
            expect(isNaN([null])).toBe(false);
            expect(isNaN([-1])).toBe(false);
            expect(isNaN([0])).toBe(false);
            expect(isNaN([1])).toBe(false);
        });

        it("should determine null to not be not-a-number", function () {
            expect(isNaN(null)).toBe(false);
        });

        it("should determine booleans to not be not-a-number", function () {
            expect(isNaN(false)).toBe(false);
            expect(isNaN(true)).toBe(false);
        });

        // Not sure why the following holds.
        it("should determine empty string to not be not-a-number", function () {
            expect(isNaN("")).toBe(false);
        });

        it("should determine strings with only number information with optional whitespace to not be not-a-number", function () {
            expect(isNaN("1e2")).toBe(false);
            expect(isNaN("1e10")).toBe(false);
            expect(isNaN("-1")).toBe(false);
            expect(isNaN("0")).toBe(false);
            expect(isNaN("1")).toBe(false);
            expect(isNaN(" -1")).toBe(false);
            expect(isNaN(" 0")).toBe(false);
            expect(isNaN(" 1")).toBe(false);
            expect(isNaN("-1 ")).toBe(false);
            expect(isNaN("0 ")).toBe(false);
            expect(isNaN("1 ")).toBe(false);
            expect(isNaN(" -1 ")).toBe(false);
            expect(isNaN(" 0 ")).toBe(false);
            expect(isNaN(" 1 ")).toBe(false);
            expect(isNaN("\t-1")).toBe(false);
            expect(isNaN("\t0")).toBe(false);
            expect(isNaN("\t1")).toBe(false);
            expect(isNaN("\n-1")).toBe(false);
            expect(isNaN("\n0")).toBe(false);
            expect(isNaN("\n1")).toBe(false);
            expect(isNaN("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999")).toBe(false);
        });

    });

});

})(this);
