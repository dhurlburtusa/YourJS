
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.String
 */
describe("YJS.String", function () {

    describe("#convert", function () {

        it("called with `NaN` should return 'NaN'", function () {
            var value = YJS.String.convert(NaN);
            expect(value).toBe('NaN');
        });

        it("called with `Number.NaN` should return 'NaN'", function () {
            var value = YJS.String.convert(Number.NaN);
            expect(value).toBe('NaN');
        });

        it("called with `Number.NEGATIVE_INFINITY` should return '-Infinity'", function () {
            var value = YJS.String.convert(Number.NEGATIVE_INFINITY);
            expect(value).toBe('-Infinity');
        });

        it("called with `Number.POSITIVE_INFINITY` should return 'Infinity'", function () {
            var value = YJS.String.convert(Number.POSITIVE_INFINITY);
            expect(value).toBe('Infinity');
        });

        it("called with `undefined` should return `undefined`", function () {
            var value = YJS.String.convert(undefined);
            expect(value).toBe(undefined);
        });

        it("called with `null` should return `null`", function () {
            var value = YJS.String.convert(null);
            expect(value).toBeNull();
        });

        it("called with `false` should return 'false'", function () {
            var value = YJS.String.convert(false);
            expect(value).toBe('false');
        });

        it("called with `true` should return 'true'", function () {
            var value = YJS.String.convert(true);
            expect(value).toBe('true');
        });

        it("called with `0` should return '0'", function () {
            var value = YJS.String.convert(0);
            expect(value).toBe('0');
        });

        it("called with `1` should return '1'", function () {
            var value = YJS.String.convert(1);
            expect(value).toBe('1');
        });

        it("called with empty string should return empty string", function () {
            var value = YJS.String.convert('');
            expect(value).toEqual('');
        });

        it("called with untrimmed string and trim option should return trimmed string", function () {
            var value = YJS.String.convert('  foo  \n', { trim: true });
            expect(value).toEqual('foo');
        });

        it("called with `null || ''` should return empty string", function () {
            var value = YJS.String.convert(null || '');
            expect(value).toBe('');

            value = YJS.String.convert(null || 'default');
            expect(value).toBe('default');
        });

        it("called with `undefined || ''` should return empty string", function () {
            var value = YJS.String.convert(undefined || '');
            expect(value).toBe('');

            value = YJS.String.convert(undefined || 'default');
            expect(value).toBe('default');
        });

        it("called with `'' + null` should return 'null'", function () {
            var value = YJS.String.convert('' + null);
            expect(value).toBe('null');
        });

        it("called with `'' + undefined` should return 'undefined'", function () {
            var value = YJS.String.convert('' + undefined);
            expect(value).toBe('undefined');
        });

    });

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

    describe("#trim", function () {

        it("called with undefined should return undefined", function () {
            var value = YJS.String.trim(undefined);
            expect(value).not.toBeDefined();
        });

        it("called with null should return null", function () {
            var value = YJS.String.trim(null);
            expect(value).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var value = YJS.String.trim('');
            expect(value).toEqual('');
        });

        it("called with false should return false", function () {
            var value = YJS.String.trim(false);
            expect(value).toBe(false);
        });

        it("called with true should return true", function () {
            var value = YJS.String.trim(true);
            expect(value).toBe(true);
        });

        it("called with all whitespace string should return empty string", function () {
            var value;

            value = YJS.String.trim(' ');
            expect(value).toEqual('');

            value = YJS.String.trim('  ');
            expect(value).toEqual('');

            value = YJS.String.trim('\n');
            expect(value).toEqual('');

            value = YJS.String.trim('\t');
            expect(value).toEqual('');

            value = YJS.String.trim('\t\n');
            expect(value).toEqual('');
        });

        it("called with some whitespace string should return trimmed string", function () {
            var value;

            value = YJS.String.trim(' foo bar');
            expect(value).toEqual('foo bar');

            value = YJS.String.trim(' foo bar ');
            expect(value).toEqual('foo bar');

            value = YJS.String.trim('foo bar\n');
            expect(value).toEqual('foo bar');

            value = YJS.String.trim('foo bar\t');
            expect(value).toEqual('foo bar');

            value = YJS.String.trim('\tfoo bar\n');
            expect(value).toEqual('foo bar');
        });

    });

});

})(this);
