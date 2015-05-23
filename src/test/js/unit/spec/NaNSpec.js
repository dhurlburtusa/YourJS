/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("NaN", function () {

    /*
     * According to the ECMAScript spec, NaN should not be equal to itself.
     */
    it("should not be equal to itself", function () {
        expect(NaN).not.toBe(NaN);
        expect(NaN == NaN).toBe(false);
        expect(NaN === NaN).toBe(false);
    });

    it("should not be equal to Number.NaN", function () {
        expect(NaN).not.toBe(Number.NaN);
        expect(NaN == Number.NaN).toBe(false);
        expect(NaN === Number.NaN).toBe(false);
    });

    it("should be NaN as determined by isNaN", function () {
        expect(isNaN(NaN)).toBe(true);
        expect(isNaN(Number.NaN)).toBe(true);
    });

});

})(this);
