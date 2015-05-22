
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.String
 */
describe("YJS.String", function () {

    describe(".printf", function () {

        describe("called with no arguments or undefined arguments", function () {

            it("should return `undefined`", function () {
                expect(YJS.String.printf()).toBeUndefined();
                expect(YJS.String.printf(undefined)).toBeUndefined();
            });

        });

        describe("called with no replacement arguments", function () {

            it("should return the input pattern string", function () {
                expect(YJS.String.printf('Hello World!')).toBe("Hello World!");
            });

        });

        describe("called with replacement arguments", function () {

            it("should return a string with placeholders replaced with associated replacement values", function () {
                // TODO: Add more test cases. Especially using various data types.
                expect(YJS.String.printf('%s %s', 'Hello', 'World!')).toBe("Hello World!");
                expect(YJS.String.printf('%s must be between %i and %f.', 'It', 1.2, 3.14)).toBe("It must be between 1 and 3.14.");
            });

        });

        describe("called with missing replacement arguments", function () {

            it("should return a string with as many placeholders replaced as there are replacement values", function () {
                // TODO: Add more test cases. Especially using various data types.
                expect(YJS.String.printf('%s %i %f')).toBe("%s %i %f");
                expect(YJS.String.printf('%s %s', 'Hello')).toBe("Hello %s");
            });

        });

        describe("called with extraneous replacement arguments", function () {

            it("should return a string with all placeholders replaced plus the remaining arguments appended to the end", function () {
                // TODO: Add more test cases. Especially using various data types.
                expect(YJS.String.printf('%s %s', 'Hello', 'World!', ' Today is beautiful!')).toBe("Hello World! Today is beautiful!");
            });

        });

    });

});

})(this);
