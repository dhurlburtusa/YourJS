
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Math
 */
describe("YJS.Math", function () {

    describe(".round", function () {

        it("called with `undefined` should return `null`", function () {
            expect(YJS.Math.round(undefined)).toBeNaN();
        });

        it("called with various values should return expected value", function () {
            expect(YJS.Math.round(-2.6)).toBe(-3);
            expect(YJS.Math.round(-2.5)).toBe(-2);
            expect(YJS.Math.round(-1.2)).toBe(-1);
            expect(YJS.Math.round(1.2)).toBe(1);
            expect(YJS.Math.round(2.5)).toBe(3);
            expect(YJS.Math.round(2.6)).toBe(3);

            expect(YJS.Math.round(0, 1)).toBe(0);
            expect(YJS.Math.round(0, 0)).toBe(0);
            expect(YJS.Math.round(0, -1)).toBe(0);

            expect(YJS.Math.round(1.005, 2)).toBe(0);
            expect(YJS.Math.round(1.005, 1)).toBe(0);
            expect(YJS.Math.round(1.005, 0)).toBe(1);
            expect(YJS.Math.round(1.005)).toBe(1);
            expect(YJS.Math.round(1.005, -1)).toBe(1);
            expect(YJS.Math.round(1.005, -2)).toBe(1.01);
            expect(YJS.Math.round(1.005, -3)).toBe(1.005);

            expect(YJS.Math.round(1234.5678, -5)).toBe(1234.5678);
            expect(YJS.Math.round(1234.5678, -4)).toBe(1234.5678);
            expect(YJS.Math.round(1234.5678, -3)).toBe(1234.568);
            expect(YJS.Math.round(1234.5678, -2)).toBe(1234.57);
            expect(YJS.Math.round(1234.5678, -1)).toBe(1234.6);
            expect(YJS.Math.round(1234.5678, 0)).toBe(1235);
            expect(YJS.Math.round(1234.5678)).toBe(1235);
            expect(YJS.Math.round(1234.5678, 1)).toBe(1230);
            expect(YJS.Math.round(1234.5678, 2)).toBe(1200);
            expect(YJS.Math.round(1234.5678, 3)).toBe(1000);
            expect(YJS.Math.round(1234.5678, 4)).toBe(0);
            expect(YJS.Math.round(1234.5678, 5)).toBe(0);
        });

    });

});

})(this);
