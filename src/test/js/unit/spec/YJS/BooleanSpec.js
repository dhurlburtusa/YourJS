
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Boolean
 */
describe("YJS.Boolean", function () {

    describe(".convert", function () {

        it("called with `true` should return `true`", function () {
            expect(YJS.Boolean.convert(true)).toBe(true);
        });

        it("called with `false` should return `false`", function () {
            expect(YJS.Boolean.convert(false)).toBe(false);
        });

        it("called with `NaN` should return default value", function () {
            expect(YJS.Boolean.convert(NaN)).toBeNull();
            expect(YJS.Boolean.convert(NaN, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(NaN, { def: undefined })).not.toBeDefined();
        });

        it("called with `Number.NaN` should return default value", function () {
            expect(YJS.Boolean.convert(Number.NaN)).toBeNull();
            expect(YJS.Boolean.convert(Number.NaN, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(Number.NaN, { def: undefined })).not.toBeDefined();
        });

        it("called with `Number.MAX_VALUE` should return default value", function () {
            expect(YJS.Boolean.convert(Number.MAX_VALUE)).toBeNull();
            expect(YJS.Boolean.convert(Number.MAX_VALUE, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(Number.MAX_VALUE, { def: undefined })).not.toBeDefined();
        });

        it("called with `Number.MIN_VALUE` should return default value", function () {
            expect(YJS.Boolean.convert(Number.MIN_VALUE)).toBeNull();
            expect(YJS.Boolean.convert(Number.MIN_VALUE, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(Number.MIN_VALUE, { def: undefined })).not.toBeDefined();
        });

        it("called with `Number.NEGATIVE_INFINITY` should return default value", function () {
            expect(YJS.Boolean.convert(Number.NEGATIVE_INFINITY)).toBeNull();
            expect(YJS.Boolean.convert(Number.NEGATIVE_INFINITY, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(Number.NEGATIVE_INFINITY, { def: undefined })).not.toBeDefined();
        });

        it("called with `Number.POSITIVE_INFINITY` should return default value", function () {
            expect(YJS.Boolean.convert(Number.POSITIVE_INFINITY)).toBeNull();
            expect(YJS.Boolean.convert(Number.POSITIVE_INFINITY, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(Number.POSITIVE_INFINITY, { def: undefined })).not.toBeDefined();
        });

        it("called with `undefined` should return default value", function () {
            expect(YJS.Boolean.convert(undefined)).toBeNull();
            expect(YJS.Boolean.convert(undefined, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(undefined, { def: undefined })).not.toBeDefined();
        });

        it("called with `null` should return default value", function () {
            expect(YJS.Boolean.convert(null)).toBeNull();
            expect(YJS.Boolean.convert(null, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(null, { def: undefined })).not.toBeDefined();
        });

        it("called with empty string should return default value", function () {
            expect(YJS.Boolean.convert('')).toBeNull();
            expect(YJS.Boolean.convert('', { def: false })).toBe(false);
            expect(YJS.Boolean.convert('', { def: undefined })).not.toBeDefined();
        });

        it("called with `'null'` should return default value", function () {
            expect(YJS.Boolean.convert('null')).toBeNull();
            expect(YJS.Boolean.convert('null', { def: false })).toBe(false);
            expect(YJS.Boolean.convert('null', { def: undefined })).not.toBeDefined();
        });

        it("called with `'undefined'` should return default value", function () {
            expect(YJS.Boolean.convert('undefined')).toBeNull();
            expect(YJS.Boolean.convert('undefined', { def: false })).toBe(false);
            expect(YJS.Boolean.convert('undefined', { def: undefined })).not.toBeDefined();
        });

        it("called with `'0'` should return `false`", function () {
            expect(YJS.Boolean.convert('0')).toBe(false);
        });

        it("called with `'1'` should return `true`", function () {
            expect(YJS.Boolean.convert('1')).toBe(true);
        });

        it("called with `'f'` should return `false`", function () {
            expect(YJS.Boolean.convert('f')).toBe(false);
            expect(YJS.Boolean.convert('F')).toBe(false);
        });

        it("called with `'false'` should return `false`", function () {
            expect(YJS.Boolean.convert('false')).toBe(false);
            expect(YJS.Boolean.convert('falsE')).toBe(false);
            expect(YJS.Boolean.convert('falSe')).toBe(false);
            expect(YJS.Boolean.convert('falSE')).toBe(false);
            expect(YJS.Boolean.convert('faLse')).toBe(false);
            expect(YJS.Boolean.convert('faLsE')).toBe(false);
            expect(YJS.Boolean.convert('faLSe')).toBe(false);
            expect(YJS.Boolean.convert('faLSE')).toBe(false);
            expect(YJS.Boolean.convert('fAlse')).toBe(false);
            expect(YJS.Boolean.convert('fAlsE')).toBe(false);
            expect(YJS.Boolean.convert('fAlSe')).toBe(false);
            expect(YJS.Boolean.convert('fAlSE')).toBe(false);
            expect(YJS.Boolean.convert('fALse')).toBe(false);
            expect(YJS.Boolean.convert('fALsE')).toBe(false);
            expect(YJS.Boolean.convert('fALSe')).toBe(false);
            expect(YJS.Boolean.convert('fALSE')).toBe(false);
            expect(YJS.Boolean.convert('False')).toBe(false);
            expect(YJS.Boolean.convert('FalsE')).toBe(false);
            expect(YJS.Boolean.convert('FalSe')).toBe(false);
            expect(YJS.Boolean.convert('FalSE')).toBe(false);
            expect(YJS.Boolean.convert('FaLse')).toBe(false);
            expect(YJS.Boolean.convert('FaLsE')).toBe(false);
            expect(YJS.Boolean.convert('FaLSe')).toBe(false);
            expect(YJS.Boolean.convert('FaLSE')).toBe(false);
            expect(YJS.Boolean.convert('FAlse')).toBe(false);
            expect(YJS.Boolean.convert('FAlsE')).toBe(false);
            expect(YJS.Boolean.convert('FAlSe')).toBe(false);
            expect(YJS.Boolean.convert('FAlSE')).toBe(false);
            expect(YJS.Boolean.convert('FALse')).toBe(false);
            expect(YJS.Boolean.convert('FALsE')).toBe(false);
            expect(YJS.Boolean.convert('FALSe')).toBe(false);
            expect(YJS.Boolean.convert('FALSE')).toBe(false);
        });

        it("called with `'no'` should return `false`", function () {
            expect(YJS.Boolean.convert('no')).toBe(false);
            expect(YJS.Boolean.convert('nO')).toBe(false);
            expect(YJS.Boolean.convert('No')).toBe(false);
            expect(YJS.Boolean.convert('NO')).toBe(false);
        });

        it("called with `'nope'` should return default value", function () {
            expect(YJS.Boolean.convert('nope')).toBeNull();
            expect(YJS.Boolean.convert('nope', { def: false })).toBe(false);
            expect(YJS.Boolean.convert('nope', { def: undefined })).not.toBeDefined();
        });

        it("called with `'off'` should return `false`", function () {
            expect(YJS.Boolean.convert('off')).toBe(false);
            expect(YJS.Boolean.convert('ofF')).toBe(false);
            expect(YJS.Boolean.convert('oFf')).toBe(false);
            expect(YJS.Boolean.convert('oFF')).toBe(false);
            expect(YJS.Boolean.convert('Off')).toBe(false);
            expect(YJS.Boolean.convert('OfF')).toBe(false);
            expect(YJS.Boolean.convert('OFf')).toBe(false);
            expect(YJS.Boolean.convert('OFF')).toBe(false);
        });

        it("called with `'on'` should return `true`", function () {
            expect(YJS.Boolean.convert('on')).toBe(true);
            expect(YJS.Boolean.convert('oN')).toBe(true);
            expect(YJS.Boolean.convert('On')).toBe(true);
            expect(YJS.Boolean.convert('ON')).toBe(true);
        });

        it("called with `'t'` should return `true`", function () {
            expect(YJS.Boolean.convert('t')).toBe(true);
            expect(YJS.Boolean.convert('T')).toBe(true);
        });

        it("called with `'true'` should return `true`", function () {
            expect(YJS.Boolean.convert('true')).toBe(true);
            expect(YJS.Boolean.convert('truE')).toBe(true);
            expect(YJS.Boolean.convert('trUe')).toBe(true);
            expect(YJS.Boolean.convert('trUE')).toBe(true);
            expect(YJS.Boolean.convert('tRue')).toBe(true);
            expect(YJS.Boolean.convert('tRuE')).toBe(true);
            expect(YJS.Boolean.convert('tRUe')).toBe(true);
            expect(YJS.Boolean.convert('tRUE')).toBe(true);
            expect(YJS.Boolean.convert('True')).toBe(true);
            expect(YJS.Boolean.convert('TruE')).toBe(true);
            expect(YJS.Boolean.convert('TrUe')).toBe(true);
            expect(YJS.Boolean.convert('TrUE')).toBe(true);
            expect(YJS.Boolean.convert('TRue')).toBe(true);
            expect(YJS.Boolean.convert('TRuE')).toBe(true);
            expect(YJS.Boolean.convert('TRUe')).toBe(true);
            expect(YJS.Boolean.convert('TRUE')).toBe(true);
        });

        it("called with `'y'` should return `true`", function () {
            expect(YJS.Boolean.convert('y')).toBe(true);
            expect(YJS.Boolean.convert('Y')).toBe(true);
        });

        it("called with `'yes'` should return `true`", function () {
            expect(YJS.Boolean.convert('yes')).toBe(true);
            expect(YJS.Boolean.convert('yeS')).toBe(true);
            expect(YJS.Boolean.convert('yEs')).toBe(true);
            expect(YJS.Boolean.convert('yES')).toBe(true);
            expect(YJS.Boolean.convert('Yes')).toBe(true);
            expect(YJS.Boolean.convert('YeS')).toBe(true);
            expect(YJS.Boolean.convert('YEs')).toBe(true);
            expect(YJS.Boolean.convert('YES')).toBe(true);
        });

        it("called with `-0` should return `false`", function () {
            expect(YJS.Boolean.convert(-0)).toBe(false);
        });

        it("called with `0` should return `false`", function () {
            expect(YJS.Boolean.convert(0)).toBe(false);
        });

        it("called with `1` should return `true`", function () {
            expect(YJS.Boolean.convert(1)).toBe(true);
        });

        it("called with `2` should return default value", function () {
            expect(YJS.Boolean.convert(2)).toBeNull();
            expect(YJS.Boolean.convert(2, { def: false })).toBe(false);
            expect(YJS.Boolean.convert(2, { def: undefined })).not.toBeDefined();
        });

        it("called with an input that has a `toString` method that returns a falsey value should return `false`", function () {
            var input;
            
            input = { toString: function () { return '0'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
            
            input = { toString: function () { return 'off'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
            
            input = { toString: function () { return 'f'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
            
            input = { toString: function () { return 'false'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
            
            input = { toString: function () { return 'n'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
            
            input = { toString: function () { return 'no'; } };
            expect(YJS.Boolean.convert(input)).toBe(false);
        });

        it("called with an input that has a `toString` method that returns a truthy value should return `true`", function () {
            var input;
            
            input = { toString: function () { return '1'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
            
            input = { toString: function () { return 'on'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
            
            input = { toString: function () { return 't'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
            
            input = { toString: function () { return 'true'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
            
            input = { toString: function () { return 'y'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
            
            input = { toString: function () { return 'yes'; } };
            expect(YJS.Boolean.convert(input)).toBe(true);
        });

    });

    describe(".not", function () {

        it("called with a falsey value and a falsey condition should return `false`", function () {
            var value;

            value = false;
            expect(YJS.Boolean.not(value, false)).toBe(false);
            expect(YJS.Boolean.not(value, "")).toBe(false);
            expect(YJS.Boolean.not(value, 0)).toBe(false);
            expect(YJS.Boolean.not(value, null)).toBe(false);
            expect(YJS.Boolean.not(value, undefined)).toBe(false);

            value = "";
            expect(YJS.Boolean.not(value, false)).toBe(false);
            expect(YJS.Boolean.not(value, "")).toBe(false);
            expect(YJS.Boolean.not(value, 0)).toBe(false);
            expect(YJS.Boolean.not(value, null)).toBe(false);
            expect(YJS.Boolean.not(value, undefined)).toBe(false);

            value = 0;
            expect(YJS.Boolean.not(value, false)).toBe(false);
            expect(YJS.Boolean.not(value, "")).toBe(false);
            expect(YJS.Boolean.not(value, 0)).toBe(false);
            expect(YJS.Boolean.not(value, null)).toBe(false);
            expect(YJS.Boolean.not(value, undefined)).toBe(false);

            value = null;
            expect(YJS.Boolean.not(value, false)).toBe(false);
            expect(YJS.Boolean.not(value, "")).toBe(false);
            expect(YJS.Boolean.not(value, 0)).toBe(false);
            expect(YJS.Boolean.not(value, null)).toBe(false);
            expect(YJS.Boolean.not(value, undefined)).toBe(false);

            value = undefined;
            expect(YJS.Boolean.not(value, false)).toBe(false);
            expect(YJS.Boolean.not(value, "")).toBe(false);
            expect(YJS.Boolean.not(value, 0)).toBe(false);
            expect(YJS.Boolean.not(value, null)).toBe(false);
            expect(YJS.Boolean.not(value, undefined)).toBe(false);
        });

        it("called with a truthy value and a falsey condition should return `true`", function () {
            var value;

            value = [];
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = true;
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = new Date();
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = 1;
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = {};
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = /foo/;
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);

            value = "foo";
            expect(YJS.Boolean.not(value, false)).toBe(true);
            expect(YJS.Boolean.not(value, "")).toBe(true);
            expect(YJS.Boolean.not(value, 0)).toBe(true);
            expect(YJS.Boolean.not(value, null)).toBe(true);
            expect(YJS.Boolean.not(value, undefined)).toBe(true);
        });

        it("called with a falsey value and a truthy condition should return `true`", function () {
            var value;

            expect(YJS.Boolean.not()).toBe(true);

            value = false;
            expect(YJS.Boolean.not(value)).toBe(true);
            expect(YJS.Boolean.not(value, [])).toBe(true);
            expect(YJS.Boolean.not(value, new Date())).toBe(true);
            expect(YJS.Boolean.not(value, 1)).toBe(true);
            expect(YJS.Boolean.not(value, {})).toBe(true);
            expect(YJS.Boolean.not(value, /foo/)).toBe(true);
            expect(YJS.Boolean.not(value, "foo")).toBe(true);

            value = "";
            expect(YJS.Boolean.not(value)).toBe(true);
            expect(YJS.Boolean.not(value, [])).toBe(true);
            expect(YJS.Boolean.not(value, new Date())).toBe(true);
            expect(YJS.Boolean.not(value, 1)).toBe(true);
            expect(YJS.Boolean.not(value, {})).toBe(true);
            expect(YJS.Boolean.not(value, /foo/)).toBe(true);
            expect(YJS.Boolean.not(value, "foo")).toBe(true);

            value = 0;
            expect(YJS.Boolean.not(value)).toBe(true);
            expect(YJS.Boolean.not(value, [])).toBe(true);
            expect(YJS.Boolean.not(value, new Date())).toBe(true);
            expect(YJS.Boolean.not(value, 1)).toBe(true);
            expect(YJS.Boolean.not(value, {})).toBe(true);
            expect(YJS.Boolean.not(value, /foo/)).toBe(true);
            expect(YJS.Boolean.not(value, "foo")).toBe(true);

            value = null;
            expect(YJS.Boolean.not(value)).toBe(true);
            expect(YJS.Boolean.not(value, [])).toBe(true);
            expect(YJS.Boolean.not(value, new Date())).toBe(true);
            expect(YJS.Boolean.not(value, 1)).toBe(true);
            expect(YJS.Boolean.not(value, {})).toBe(true);
            expect(YJS.Boolean.not(value, /foo/)).toBe(true);
            expect(YJS.Boolean.not(value, "foo")).toBe(true);

            value = undefined;
            expect(YJS.Boolean.not(value)).toBe(true);
            expect(YJS.Boolean.not(value, [])).toBe(true);
            expect(YJS.Boolean.not(value, new Date())).toBe(true);
            expect(YJS.Boolean.not(value, 1)).toBe(true);
            expect(YJS.Boolean.not(value, {})).toBe(true);
            expect(YJS.Boolean.not(value, /foo/)).toBe(true);
            expect(YJS.Boolean.not(value, "foo")).toBe(true);
        });

        it("called with a truthy value and a truthy condition should return `false`", function () {
            var value;

            value = [];
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = true;
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = new Date();
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = 1;
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = {};
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = /foo/;
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);

            value = "foo";
            expect(YJS.Boolean.not(value)).toBe(false);
            expect(YJS.Boolean.not(value, [])).toBe(false);
            expect(YJS.Boolean.not(value, new Date())).toBe(false);
            expect(YJS.Boolean.not(value, 1)).toBe(false);
            expect(YJS.Boolean.not(value, {})).toBe(false);
            expect(YJS.Boolean.not(value, /foo/)).toBe(false);
            expect(YJS.Boolean.not(value, "foo")).toBe(false);
        });

    });

});

})(this);
