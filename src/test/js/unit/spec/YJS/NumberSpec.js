
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Number
 */
describe("YJS.Number", function () {

    describe(".itBeNaN", function () {

        it("called with `NaN` should return true", function () {
            expect(YJS.Number.itBeNaN(NaN)).toBe(true);
            expect(YJS.Number.itBeNaN(GBL.NaN)).toBe(true);
            expect(YJS.Number.itBeNaN(Number.NaN)).toBe(true);
        });

        it("called with result of `parseInt` that should return `NaN` should return true", function () {
            expect(YJS.Number.itBeNaN(parseInt("crap", 10))).toBe(true);
            expect(YJS.Number.itBeNaN(GBL.parseInt("crap", 10))).toBe(true);
        });

        it("called with anything other than `NaN` should return false", function () {
            expect(YJS.Number.itBeNaN()).toBe(false);
            expect(YJS.Number.itBeNaN(undefined)).toBe(false);
            expect(YJS.Number.itBeNaN(null)).toBe(false);
            expect(YJS.Number.itBeNaN(false)).toBe(false);
            expect(YJS.Number.itBeNaN(true)).toBe(false);
            expect(YJS.Number.itBeNaN(Number.MAX_VALUE)).toBe(false);
            expect(YJS.Number.itBeNaN(Number.MIN_VALUE)).toBe(false);
            expect(YJS.Number.itBeNaN(Number.NEGATIVE_INFINITY)).toBe(false);
            expect(YJS.Number.itBeNaN(Number.POSITIVE_INFINITY)).toBe(false);
            expect(YJS.Number.itBeNaN(-1)).toBe(false);
            expect(YJS.Number.itBeNaN(0)).toBe(false);
            expect(YJS.Number.itBeNaN(1)).toBe(false);
            expect(YJS.Number.itBeNaN("")).toBe(false);
            expect(YJS.Number.itBeNaN("1")).toBe(false);
            expect(YJS.Number.itBeNaN("1foo")).toBe(false);
            expect(YJS.Number.itBeNaN("One")).toBe(false);
            expect(YJS.Number.itBeNaN(arguments)).toBe(false);
            expect(YJS.Number.itBeNaN([])).toBe(false);
            expect(YJS.Number.itBeNaN(['foo'])).toBe(false);
            expect(YJS.Number.itBeNaN([NaN])).toBe(false);
            expect(YJS.Number.itBeNaN([1])).toBe(false);
            expect(YJS.Number.itBeNaN(Date())).toBe(false);
            expect(YJS.Number.itBeNaN(new Date())).toBe(false);
        });

    });

});

})(this);
