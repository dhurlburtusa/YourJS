
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Number
 */
describe("YJS.Number", function () {

    describe(".convert", function () {

        it("called with `undefined` should return default value", function () {
            expect(YJS.Number.convert(undefined)).toBeNull();
        });

        it("called with `undefined` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert(undefined, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert(undefined, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert(undefined, { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert(undefined, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert(undefined, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Number.convert(undefined, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Number.convert(undefined, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `null` should return default value", function () {
            expect(YJS.Number.convert(null)).toBeNull();
        });

        it("called with `null` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert(null, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert(null, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert(null, { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert(null, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert(null, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Number.convert(null, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Number.convert(null, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `NaN` should return default value", function () {
            expect(YJS.Number.convert(NaN)).toBeNull();
        });

        it("called with `NaN` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert(NaN, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert(NaN, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert(NaN, { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert(NaN, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert(NaN, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Number.convert(NaN, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Number.convert(NaN, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `false` should return default value", function () {
            expect(YJS.Number.convert(false)).toBeNull();
        });

        it("called with `true` should return default value", function () {
            expect(YJS.Number.convert(true)).toBeNull();
        });

        it("called with `Number.MAX_VALUE` should return `Number.MAX_VALUE`", function () {
            var toValue = YJS.Number.convert(Number.MAX_VALUE);

            expect(toValue).toBe(Number.MAX_VALUE);
        });

        it("called with `Number.MIN_VALUE` should return `Number.MIN_VALUE`", function () {
            var toValue = YJS.Number.convert(Number.MIN_VALUE);

            expect(toValue).toBe(Number.MIN_VALUE);
        });

        it("called with `-Number.MAX_VALUE` should return `-Number.MAX_VALUE`", function () {
            var toValue = YJS.Number.convert(-Number.MAX_VALUE);

            expect(toValue).toBe(-Number.MAX_VALUE);
        });

        it("called with `-Number.MIN_VALUE` should return `-Number.MIN_VALUE`", function () {
            var toValue = YJS.Number.convert(-Number.MIN_VALUE);

            expect(toValue).toBe(-Number.MIN_VALUE);
        });

        it("called with `Number.NEGATIVE_INFINITY` should return default value", function () {
            expect(YJS.Number.convert(Number.NEGATIVE_INFINITY)).toBeNull();
        });

        it("called with `Number.NEGATIVE_INFINITY` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Number.convert(Number.NEGATIVE_INFINITY, { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with `Number.POSITIVE_INFINITY` should return default value", function () {
            expect(YJS.Number.convert(Number.POSITIVE_INFINITY)).toBeNull();
        });

        it("called with `Number.POSITIVE_INFINITY` and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert(Number.POSITIVE_INFINITY, { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert(Number.POSITIVE_INFINITY, { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert(Number.POSITIVE_INFINITY, { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert(Number.POSITIVE_INFINITY, { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert(Number.POSITIVE_INFINITY, { def: false });
            expect(toValue).toBe(false);
        });

        it("called with `0` should return `0`", function () {
            var toValue = YJS.Number.convert(0);

            expect(toValue).toBe(0);
        });

        it("called with `-0` should return `0`", function () {
            var toValue = YJS.Number.convert(-0);

            expect(toValue).toBe(0);
        });

        it("called with number value should return number", function () {
            var toValue;

            toValue = YJS.Number.convert(-2.6);
            expect(toValue).toBe(-2.6);
            toValue = YJS.Number.convert(-1);
            expect(toValue).toBe(-1);

            toValue = YJS.Number.convert(1);
            expect(toValue).toBe(1);
            expect(toValue).toBe(1.0);

            toValue = YJS.Number.convert(1.2);
            expect(toValue).toBe(1.2);

            toValue = YJS.Number.convert(2.6);
            expect(toValue).toBe(2.6);
        });

        it("called with `Number` instance should return number primitive", function () {
            var toValue;

            toValue = YJS.Number.convert(new Number(-2.6));
            expect(toValue).toBe(-2.6);

            toValue = YJS.Number.convert(new Number(-1));
            expect(toValue).toBe(-1);

            toValue = YJS.Number.convert(new Number(1));
            expect(toValue).toBe(1);
            expect(toValue).toBe(1.0);

            toValue = YJS.Number.convert(new Number(1.2));
            expect(toValue).toBe(1.2);

            toValue = YJS.Number.convert(new Number(2.6));
            expect(toValue).toBe(2.6);
        });

        it("called with parsible string value should return number", function () {
            var toValue;

            toValue = YJS.Number.convert("-2");
            expect(toValue).toBe(-2);
            expect(toValue).toBe(-2.0);

            toValue = YJS.Number.convert("2");
            expect(toValue).toBe(2);
            expect(toValue).toBe(2.0);

            toValue = YJS.Number.convert("-2.6");
            expect(toValue).toBe(-2.6);

            toValue = YJS.Number.convert("2.6");
            expect(toValue).toBe(2.6);
        });

        it("called with unparsible string value should return default value", function () {
            expect(YJS.Number.convert("foo")).toBeNull();
        });

        it("called with unparsible string value and default value should return default value", function () {
            var toValue;

            toValue = YJS.Number.convert("foo", { def: NaN });
            expect(toValue).toBeNaN();

            toValue = YJS.Number.convert("foo", { def: 0 });
            expect(toValue).toBe(0);

            toValue = YJS.Number.convert("foo", { def: 123456 });
            expect(toValue).toBe(123456);

            toValue = YJS.Number.convert("foo", { def: "" });
            expect(toValue).toBe("");

            toValue = YJS.Number.convert("foo", { def: false });
            expect(toValue).toBe(false);

            toValue = YJS.Number.convert("foo", { def: null });
            expect(toValue).toBeNull();

            toValue = YJS.Number.convert("foo", { def: undefined });
            expect(toValue).not.toBeDefined();
        });

        it("called with an object implementing the `valueOf` method that returns a number value should return the number", function () {
            var input, toValue;

            input = { valueOf: function () { return -2.6; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(-2.6);

            input = { valueOf: function () { return -1; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return 1; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(1);
            expect(toValue).toBe(1.0);

            input = { valueOf: function () { return 1.2; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(1.2);

            input = { valueOf: function () { return 2.6; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(2.6);
        });

        it("called with an object implementing the `valueOf` method that returns a parsible value should return the number", function () {
            var input, toValue;

            input = { valueOf: function () { return "-2.6"; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(-2.6);

            input = { valueOf: function () { return "-1"; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(-1);

            input = { valueOf: function () { return "1"; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(1);
            expect(toValue).toBe(1.0);

            input = { valueOf: function () { return "1.2"; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(1.2);

            input = { valueOf: function () { return "2.6"; } };
            toValue = YJS.Number.convert(input);
            expect(toValue).toBe(2.6);
        });

    });

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
