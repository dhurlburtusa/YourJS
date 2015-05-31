/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Boolean", function () {

    describe("literal", function () {

        it("should not be an instance of `Object` or `Boolean`", function () {
            expect(true instanceof Object).toBe(false);
            expect(true instanceof Boolean).toBe(false);

            expect(false instanceof Object).toBe(false);
            expect(false instanceof Boolean).toBe(false);
        });

        it("should be of type `'boolean'`", function () {
            expect(typeof true).toBe('boolean');
            expect(typeof false).toBe('boolean');
        });

    });

    describe("without new operator", function () {

        it("called with true should return true", function () {
            expect(Boolean(true)).toBe(true);
        });

        it("called with false should return false", function () {
            expect(Boolean(false)).toBe(false);
        });

        it("called with NaN should return false", function () {
            expect(Boolean(NaN)).toBe(false);
        });

        it("called with Number.NaN should return false", function () {
            expect(Boolean(Number.NaN)).toBe(false);
        });

        it("called with Number.MAX_VALUE should return true", function () {
            expect(Boolean(Number.MAX_VALUE)).toBe(true);
        });

        it("called with Number.MIN_VALUE should return true", function () {
            expect(Boolean(Number.MIN_VALUE)).toBe(true);
        });

        it("called with Number.NEGATIVE_INFINITY should return true", function () {
            expect(Boolean(Number.NEGATIVE_INFINITY)).toBe(true);
        });

        it("called with Number.POSITIVE_INFINITY should return true", function () {
            expect(Boolean(Number.POSITIVE_INFINITY)).toBe(true);
        });

        it("called with undefined should return false", function () {
            expect(Boolean(undefined)).toBe(false);
        });

        it("called with null should return false", function () {
            expect(Boolean(null)).toBe(false);
        });

        it("called with empty string should return false", function () {
            expect(Boolean('')).toBe(false);
        });

        it("called with 'null' should return true", function () {
            expect(Boolean('null')).toBe(true);
        });

        it("called with 'undefined' should return true", function () {
            expect(Boolean('undefined')).toBe(true);
        });

        it("called with '0' should return true", function () {
            expect(Boolean('0')).toBe(true);
        });

        it("called with '1' should return true", function () {
            expect(Boolean('1')).toBe(true);
        });

        it("called with 'f' should return true", function () {
            expect(Boolean('f')).toBe(true);
            expect(Boolean('F')).toBe(true);
        });

        it("called with 'false' should return true", function () {
            expect(Boolean('false')).toBe(true);
        });

        it("called with 'no' should return true", function () {
            expect(Boolean('no')).toBe(true);
        });

        it("called with 't' should return true", function () {
            expect(Boolean('t')).toBe(true);
            expect(Boolean('T')).toBe(true);
        });

        it("called with 'true' should return true", function () {
            expect(Boolean('true')).toBe(true);
            expect(Boolean('truE')).toBe(true);
            expect(Boolean('trUe')).toBe(true);
            expect(Boolean('trUE')).toBe(true);
            expect(Boolean('tRue')).toBe(true);
            expect(Boolean('tRuE')).toBe(true);
            expect(Boolean('tRUe')).toBe(true);
            expect(Boolean('tRUE')).toBe(true);
            expect(Boolean('True')).toBe(true);
            expect(Boolean('TruE')).toBe(true);
            expect(Boolean('TrUe')).toBe(true);
            expect(Boolean('TrUE')).toBe(true);
            expect(Boolean('TRue')).toBe(true);
            expect(Boolean('TRuE')).toBe(true);
            expect(Boolean('TRUe')).toBe(true);
            expect(Boolean('TRUE')).toBe(true);
        });

        it("called with 'y' should return true", function () {
            expect(Boolean('y')).toBe(true);
            expect(Boolean('Y')).toBe(true);
        });

        it("called with 'yes' should return true", function () {
            expect(Boolean('yes')).toBe(true);
            expect(Boolean('yeS')).toBe(true);
            expect(Boolean('yEs')).toBe(true);
            expect(Boolean('yES')).toBe(true);
            expect(Boolean('Yes')).toBe(true);
            expect(Boolean('YeS')).toBe(true);
            expect(Boolean('YEs')).toBe(true);
            expect(Boolean('YES')).toBe(true);
        });

        it("called with -0 should return false", function () {
            expect(Boolean(-0)).toBe(false);
        });

        it("called with 0 should return false", function () {
            expect(Boolean(0)).toBe(false);
        });

        it("called with 1 should return true", function () {
            expect(Boolean(1)).toBe(true);
        });

        it("called with 2 should return true", function () {
            expect(Boolean(2)).toBe(true);
        });

    });

});

})(this);
