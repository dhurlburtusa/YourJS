
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Utils
 */
describe("YJS.Utils", function () {

    describe(".typeOf", function () {

        it("called with `NaN` should return `'nan'`", function () {
            var result = YJS.Utils.typeOf(NaN);
            expect(result).toBe('nan');
            
            result = YJS.Utils.typeOf(GBL.NaN);
            expect(result).toBe('nan');
        });

        it("called with `Number.NaN` should return `'nan'`", function () {
            var result = YJS.Utils.typeOf(Number.NaN);
            expect(result).toBe('nan');
        });

        it("called with `Number.NEGATIVE_INFINITY` should return `'negative_infinity'`", function () {
            var result = YJS.Utils.typeOf(Number.NEGATIVE_INFINITY);
            expect(result).toBe('negative_infinity');
        });

        it("called with `Number.POSITIVE_INFINITY` should return `'positive_infinity'`", function () {
            var result = YJS.Utils.typeOf(Number.POSITIVE_INFINITY);
            expect(result).toBe('positive_infinity');
        });

        it("called with `undefined` should return `'undefined'`", function () {
            var result = YJS.Utils.typeOf(undefined);
            expect(result).toBe('undefined');
        });

        it("called with `null` should return `'null'`", function () {
            var result = YJS.Utils.typeOf(null);
            expect(result).toBe('null');
        });

        it("called with `false` should return `'boolean'`", function () {
            var result = YJS.Utils.typeOf(false);
            expect(result).toBe('boolean');
        });

        it("called with `true` should return `'boolean'`", function () {
            var result = YJS.Utils.typeOf(true);
            expect(result).toBe('boolean');
        });

        it("called with `Boolean` object should return `'boolean'`", function () {
            // Although it is bad practice to use the Boolean constructor, this confirms that 'object' is not returned.
            var result = YJS.Utils.typeOf(new Boolean(true));
            expect(result).toBe('boolean');
        });

        it("called with an empty array should return `'array'`", function () {
            var result = YJS.Utils.typeOf([]);
            expect(result).toBe('array');
        });

        it("called with `Array` object should return `'array'`", function () {
            var result = YJS.Utils.typeOf(new Array('one', 'two', 'etc'));
            expect(result).toBe('array');
        });

        it("called with a date should return `'date'`", function () {
            var result = YJS.Utils.typeOf(new Date());
            expect(result).toBe('date');
        });

        it("called with a function should return `'function'`", function () {
            var result = YJS.Utils.typeOf(function () {});
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Array);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Boolean);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Date);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Function);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Number);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(Object);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(RegExp);
            expect(result).toBe('function');

            result = YJS.Utils.typeOf(String);
            expect(result).toBe('function');
        });

        it("called with `Function` object should return `'function'`", function () {
            var result = YJS.Utils.typeOf(new Function('return;'));
            expect(result).toBe('function');
        });

        it("called with `0` should return `'number'`", function () {
            var result = YJS.Utils.typeOf(0);
            expect(result).toBe('number');
        });

        it("called with `1` should return `'number'`", function () {
            var result = YJS.Utils.typeOf(1);
            expect(result).toBe('number');
        });

        it("called with `Number` object should return `'number'`", function () {
            var result = YJS.Utils.typeOf(new Number(3.14));
            expect(result).toBe('number');
        });

        it("called with a regular expression should return `'regexp'`", function () {
            var result = YJS.Utils.typeOf(/typeof/);
            expect(result).toBe('regexp');
        });

        it("called with `RegExp` object should return `'regexp'`", function () {
            var result = YJS.Utils.typeOf(new RegExp('.*\\..*'));
            expect(result).toBe('regexp');
        });

        it("called with an empty string should return `'string'`", function () {
            var result = YJS.Utils.typeOf('');
            expect(result).toBe('string');
        });

        it("called with `String` object should return `'string'`", function () {
            // Although it is bad practice to use the String constructor, this confirms that 'object' is not returned.
            var result = YJS.Utils.typeOf(new String('WTF'));
            expect(result).toBe('string');
        });

        it("called with an empty object literal should return `'object'`", function () {
            var result = YJS.Utils.typeOf({});
            expect(result).toBe('object');
        });

    });

});

})(this);
