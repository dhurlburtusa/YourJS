
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.String
 */
describe("YJS.String", function () {

    describe(".convert", function () {

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

        it("is `this`less", function () {
            var convert = YJS.String.convert;
            expect(convert(true)).toBe('true');
        });

    });

    describe(".escape", function () {

        it("called with `undefined` should return `undefined`", function () {
            var value = YJS.String.escape(undefined);
            expect(value).not.toBeDefined();
        });

        it("called with `null` should return `null`", function () {
            var value = YJS.String.escape(null);
            expect(value).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var value = YJS.String.escape('');
            expect(value).toEqual('');
        });

        it("called with `false` should return `false`", function () {
            var value = YJS.String.escape(false);
            expect(value).toBe(false);
        });

        it("called with `true` should return `true`", function () {
            var value = YJS.String.escape(true);
            expect(value).toBe(true);
        });

        it("called with string containing backslashes should return string with backslashes escaped", function () {
            var value;

            value = YJS.String.escape("\\");
            expect(value).toEqual("\\\\");

            value = YJS.String.escape('\\');
            expect(value).toEqual("\\\\");

            value = YJS.String.escape("format C:\\Windows\\");
            expect(value).toEqual("format C:\\\\Windows\\\\");

            value = YJS.String.escape('format C:\\Windows\\');
            expect(value).toEqual("format C:\\\\Windows\\\\");
        });

        it("called with string containing single-quotes should return string with single-quotes escaped", function () {
            var value;

            value = YJS.String.escape("'");
            expect(value).toEqual("\\'");

            value = YJS.String.escape("\'");
            expect(value).toEqual("\\'");

            value = YJS.String.escape('\'');
            expect(value).toEqual("\\'");

            value = YJS.String.escape("'help'!");
            expect(value).toEqual("\\'help\\'!");

            value = YJS.String.escape("\'help\'!");
            expect(value).toEqual("\\'help\\'!");

            value = YJS.String.escape('\'help\'!');
            expect(value).toEqual("\\'help\\'!");
        });
    });

    describe(".leftPad", function () {

        it("called with `undefined` input should return `undefined`", function () {
            var output = YJS.String.leftPad(undefined);
            expect(output).not.toBeDefined();
        });

        it("called with `null` input should return `null`", function () {
            var output = YJS.String.leftPad(null);
            expect(output).toBeNull();
        });

        it("called with `false` input should return `false`", function () {
            var output = YJS.String.leftPad(false);
            expect(output).toBe(false);
        });

        it("called with `true` input should return `true`", function () {
            var output = YJS.String.leftPad(true);
            expect(output).toBe(true);
        });

        it("called with `0` input should return `0`", function () {
            var output = YJS.String.leftPad(0);
            expect(output).toBe(0);
        });

        it("called with `1` input should return `1`", function () {
            var output = YJS.String.leftPad(1);
            expect(output).toBe(1);
        });

        it("called with short input should return padded input", function () {
            var output = YJS.String.leftPad("foo", 10, "b");
            expect(output).toBe("bbbbbbbfoo");

            output = YJS.String.leftPad("foo", 10, " ");
            expect(output).toBe("       foo");
        });

        it("called with extremely short input should return padded input", function () {
            var output = YJS.String.leftPad("foo", 100, "b");
            expect(output).toBe("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfoo");
        });

        it("called with blank padder should return input", function () {
            var output = YJS.String.leftPad("foo", 10, "");
            expect(output).toBe("foo");
        });

        it("called with multi-character padder should return input", function () {
            var output = YJS.String.leftPad("foo", 10, "bar");
            expect(output).toBe("foo");
        });

        it("called with short length should return input unchanged", function () {
            var output = YJS.String.leftPad("foobar", 5, " ");
            expect(output).toBe("foobar");
        });
    });

    describe(".merge", function () {

        it("called with `undefined` should return `undefined`", function () {
            var value = YJS.String.merge(undefined);
            expect(value).not.toBeDefined();
        });

        it("called with `null` should return `null`", function () {
            var value = YJS.String.merge(null);
            expect(value).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var value = YJS.String.merge('');
            expect(value).toEqual('');
        });

        it("called with `false` should return `false`", function () {
            var value = YJS.String.merge(false);
            expect(value).toBe(false);
        });

        it("called with `true` should return `true`", function () {
            var value = YJS.String.merge(true);
            expect(value).toBe(true);
        });

        it("called with `0` should return `0`", function () {
            var value = YJS.String.merge(0);
            expect(value).toBe(0);
        });

        it("called with `1` should return `1`", function () {
            var value = YJS.String.merge(1);
            expect(value).toBe(1);
        });

        it("called with `new Date` should return `new Date`", function () {
            var value = YJS.String.merge(new Date(), ["does", "not", "matter"]);
            expect(typeof value).toBe("object");
            expect(value.constructor).toBe(Date);
        });

        it("called with template should return merged string", function () {
            var value = YJS.String.merge("{0}, {1}!", ["Hello", "World"]);
            expect(value).toEqual("Hello, World!");
        });

        it("called with template containing negative placeholders should return merged string without negative placeholders being replaced", function () {
            var value;

            value = YJS.String.merge("{0}, {-1}!", ["Hello", "World"]);
            expect(value).toEqual("Hello, {-1}!");
        });

        it("called with template containing sparse placeholders should return merged string", function () {
            // That is, extraneous data is okay.
            var value = YJS.String.merge("{0}, {3}!", ["Hello", "Goodbye", "My", "World"]);
            expect(value).toEqual("Hello, World!");
        });

        it("called with template containing extraneous placeholders should return merged string with extraneous placeholders replaced by `undefined`", function () {
            var value = YJS.String.merge("{0}, {1}! {2} {3} {4}", ["Hello", "World", "Good", "Morning"]);
            expect(value).toEqual("Hello, World! Good Morning undefined");
        });

        it("called with template containing extraneous placeholders and undef option should return merged string with extraneous placeholders replaced by undef value", function () {
            var value = YJS.String.merge("{0}, {1}! {2} {3} {5}! {4}", ["Hello", "World", "Good", "Morning", undefined], { undef: "Vietnam" });
            expect(value).toEqual("Hello, World! Good Morning Vietnam! undefined");
        });

        it("called with template containing unordered placeholders should return merged string", function () {
            // That is, order of placeholders does not matter.
            var value = YJS.String.merge("{1}, {0}!", ["World", "Hello"]);
            expect(value).toEqual("Hello, World!");
        });

        it("called with template and various data types should return merged string", function () {
            var value;

            value = YJS.String.merge("{1} for the {0}, {2} for the {3}...", ["money", 1, 2, "show"]);
            expect(value).toEqual("1 for the money, 2 for the show...");

            value = YJS.String.merge("Is it {0} that {0} == {1} is {2}?", [true, false, undefined]);
            expect(value).toEqual("Is it true that true == false is undefined?");

            value = YJS.String.merge("Is {1} the same as {0}?", [undefined, null]);
            expect(value).toEqual("Is null the same as undefined?");
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

        it("is `this`less", function () {
            var trim = YJS.String.trim;
            expect(trim(' foo ')).toBe('foo');
        });

    });

});

})(this);
