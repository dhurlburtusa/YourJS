
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Number", function () {

    describe("literal", function () {

        it("should not be an instance of `Object` or `Number`", function () {
            expect(-1 instanceof Object).toBe(false);
            expect(-1 instanceof Number).toBe(false);

            expect(0 instanceof Object).toBe(false);
            expect(0 instanceof Number).toBe(false);

            expect(1 instanceof Object).toBe(false);
            expect(1 instanceof Number).toBe(false);
        });

        it("should be of type `'number'`", function () {
            expect(typeof -1).toBe('number');
            expect(typeof 0).toBe('number');
            expect(typeof 1).toBe('number');
        });

    });

});

})(this);
