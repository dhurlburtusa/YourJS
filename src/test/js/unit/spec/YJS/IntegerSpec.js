
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Integer
 */
describe("YJS.Integer", function () {

    describe(".convert", function () {

        it("called with `undefined` should return default value", function () {
            expect(YJS.Integer.convert(undefined)).toBeNull();
        });

        it("called with `undefined` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert(undefined, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert(undefined, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(undefined, { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert(undefined, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert(undefined, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Integer.convert(undefined, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Integer.convert(undefined, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `null` should return default value", function () {
            expect(YJS.Integer.convert(null)).toBeNull();
        });

        it("called with `null` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert(null, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert(null, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(null, { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert(null, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert(null, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Integer.convert(null, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Integer.convert(null, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `NaN` should return default value", function () {
            expect(YJS.Integer.convert(NaN)).toBeNull();
        });

        it("called with `NaN` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert(NaN, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert(NaN, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(NaN, { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert(NaN, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert(NaN, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Integer.convert(NaN, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Integer.convert(NaN, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `false` should return default value", function () {
            expect(YJS.Integer.convert(false)).toBeNull();
        });

        it("called with `true` should return default value", function () {
            expect(YJS.Integer.convert(true)).toBeNull();
        });

        it("called with `Number.MAX_VALUE` should return `Number.MAX_VALUE`", function () {
            var toValue = YJS.Integer.convert(Number.MAX_VALUE);

            expect(toValue).toBe(Number.MAX_VALUE);
        });

        it("called with `Number.MIN_VALUE` should return `Number.MIN_VALUE`", function () {
            var toValue = YJS.Integer.convert(Number.MIN_VALUE);

            expect(toValue).toBe(0);
        });

        it("called with `-Number.MAX_VALUE` should return `-Number.MAX_VALUE`", function () {
            var toValue = YJS.Integer.convert(-Number.MAX_VALUE);

            expect(toValue).toBe(-Number.MAX_VALUE);
        });

        it("called with `-Number.MIN_VALUE` should return `-Number.MIN_VALUE`", function () {
            var toValue = YJS.Integer.convert(-Number.MIN_VALUE);

            expect(toValue).toBe(0);
        });

        it("called with `Number.NEGATIVE_INFINITY` should return default value", function () {
            expect(YJS.Integer.convert(Number.NEGATIVE_INFINITY)).toBeNull();
        });

        it("called with `Number.NEGATIVE_INFINITY` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Integer.convert(Number.NEGATIVE_INFINITY, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `Number.POSITIVE_INFINITY` should return default value", function () {
            expect(YJS.Integer.convert(Number.POSITIVE_INFINITY)).toBeNull();
        });

        it("called with `Number.POSITIVE_INFINITY` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert(Number.POSITIVE_INFINITY, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert(Number.POSITIVE_INFINITY, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(Number.POSITIVE_INFINITY, { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert(Number.POSITIVE_INFINITY, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert(Number.POSITIVE_INFINITY, { def: false });
            expect(toValue).toBe(false);
        });

        it("called with `0` should return `0`", function () {
            var toValue = YJS.Integer.convert(0);

            expect(toValue).toBe(0);
        });

        it("called with `-0` should return `0`", function () {
            var toValue = YJS.Integer.convert(-0);

            expect(toValue).toBe(0);
        });

        it("called with number value should return number", function () {
            var toValue;

            toValue = YJS.Integer.convert(-2.6);
            expect(toValue).toBe(-3);

            toValue = YJS.Integer.convert(-2.5);
            expect(toValue).toBe(-2);

            toValue = YJS.Integer.convert(-1.2);
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert(-1);
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert(-0);
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(0);
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(1);
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert(1.2);
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert(2.5);
            expect(toValue).toBe(3);

            toValue = YJS.Integer.convert(2.6);
            expect(toValue).toBe(3);
        });

        it("called with `Number` instance should return number primitive", function () {
            var toValue;

            toValue = YJS.Integer.convert(new Number(-2.6));
            expect(toValue).toBe(-3);

            toValue = YJS.Integer.convert(new Number(-2.5));
            expect(toValue).toBe(-2);

            toValue = YJS.Integer.convert(new Number(-1.2));
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert(new Number(-1));
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert(new Number(-0));
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(new Number(0));
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert(new Number(1));
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert(new Number(1.2));
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert(new Number(2.5));
            expect(toValue).toBe(3);

            toValue = YJS.Integer.convert(new Number(2.6));
            expect(toValue).toBe(3);
        });

        it("called with parsible string value should return number", function () {
            var toValue;

            toValue = YJS.Integer.convert("-2.6");
            expect(toValue).toBe(-3);

            toValue = YJS.Integer.convert("-2.5");
            expect(toValue).toBe(-2);

            toValue = YJS.Integer.convert("-1.2");
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert("-1");
            expect(toValue).toBe(-1);

            toValue = YJS.Integer.convert("-0");
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert("0");
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert("1");
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert("1.2");
            expect(toValue).toBe(1);

            toValue = YJS.Integer.convert("2.5");
            expect(toValue).toBe(3);

            toValue = YJS.Integer.convert("2.6");
            expect(toValue).toBe(3);
        });

        it("called with unparsible string value should return default value", function () {
            expect(YJS.Integer.convert("foo")).toBeNull();
        });

        it("called with unparsible string value and default value should return default value", function () {
            var toValue;

            toValue = YJS.Integer.convert("foo", { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Integer.convert("foo", { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Integer.convert("foo", { def: 123456.7 });
            expect(toValue).toBe(123456.7);

            toValue = YJS.Integer.convert("foo", { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Integer.convert("foo", { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Integer.convert("foo", { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Integer.convert("foo", { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with an object implementing the `valueOf` method that returns a number value should return the number", function () {
            var input, toValue;

            input = { valueOf: function () { return -2.6; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-3);

            input = { valueOf: function () { return -2.5; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-2);

            input = { valueOf: function () { return -1.2; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return -1; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return -0; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(0);

            input = { valueOf: function () { return 0; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(0);

            input = { valueOf: function () { return 1; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(1);
            expect(toValue).toBe(1.0);

            input = { valueOf: function () { return 1.2; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(1);

            input = { valueOf: function () { return 2.5; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(3);

            input = { valueOf: function () { return 2.6; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(3);
        });

        it("called with an object implementing the `valueOf` method that returns a parsible value should return the number", function () {
            var input, toValue;

            input = { valueOf: function () { return "-2.6"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-3);

            input = { valueOf: function () { return "-2.5"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-2);

            input = { valueOf: function () { return "-1.2"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return "-1"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return "-0"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(0);

            input = { valueOf: function () { return "0"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(0);

            input = { valueOf: function () { return "1"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(1);

            input = { valueOf: function () { return "1.2"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(1);

            input = { valueOf: function () { return "2.5"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(3);

            input = { valueOf: function () { return "2.6"; } };
            toValue = YJS.Integer.convert(input);
            expect(toValue).toBe(3);
        });

    });

});

})(this);
