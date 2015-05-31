
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("String", function () {

    describe("literal", function () {

        it("should not be an instance of `Object` or `String`", function () {
            expect("" instanceof Object).toBe(false);
            expect("" instanceof String).toBe(false);

            expect("test" instanceof Object).toBe(false);
            expect("test" instanceof String).toBe(false);
        });

        it("should be of type `'string'`", function () {
            expect(typeof "").toBe('string');
            expect(typeof "test").toBe('string');
        });

    });

});

})(this);
