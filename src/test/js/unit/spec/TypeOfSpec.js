/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("typeof unary operator", function () {

    it("used with empty array created with Array constructor should be 'object'", function () {
        var v = new Array();
        expect(typeof v).toBe('object');
    });

    it("used with some array created with Array constructor should be 'object'", function () {
        var v = new Array('foo');
        expect(typeof v).toBe('object');
    });

    it("used with empty array literal should be 'object'", function () {
        var v = [];
        expect(typeof v).toBe('object');
    });

    it("used with some array literal should be 'object'", function () {
        var v = ['foo'];
        expect(typeof v).toBe('object');
    });

    it("used with `false` created with Boolean constructor should be 'object' (therefore new Boolean should never be used)", function () {
        var v = new Boolean(false);
        expect(typeof v).toBe('object');
    });

    it("used with `false` created with Boolean conversion function should be 'boolean'", function () {
        var v = Boolean(false);
        expect(typeof v).toBe('boolean');
    });

    it("used with `false` literal should be 'boolean'", function () {
        var v = false;
        expect(typeof v).toBe('boolean');
    });

    it("used with `true` created with Boolean constructor should be 'object' (therefore new Boolean should never be used)", function () {
        var v = new Boolean(true);
        expect(typeof v).toBe('object');
    });

    it("used with `true` created with Boolean conversion function should be 'boolean'", function () {
        var v = Boolean(true);
        expect(typeof v).toBe('boolean');
    });

    it("used with `true` literal should be 'boolean'", function () {
        var v = true;
        expect(typeof v).toBe('boolean');
    });

    it("used with arbitrary expressions with Boolean conversion function should be 'boolean'", function () {
        var v = Boolean(null);
        expect(typeof v).toBe('boolean');

        v = Boolean(undefined);
        expect(typeof v).toBe('boolean');

        v = Boolean("");
        expect(typeof v).toBe('boolean');

        v = Boolean("something");
        expect(typeof v).toBe('boolean');

        v = Boolean(true == true);
        expect(typeof v).toBe('boolean');

        v = Boolean(true == false);
        expect(typeof v).toBe('boolean');

        v = Boolean(0);
        expect(typeof v).toBe('boolean');
    });

    it("used with a Date should be 'object'", function () {
        var v = new Date();
        expect(typeof v).toBe('object');
    });

    // TODO: Test Date, Function, null, object, regular expression, undefined.

    it("used with null should be 'object'", function () {
        var v = null;
        expect(typeof v).toBe('object');
    });

    it("used with zero created with Number constructor should be 'object'", function () {
        var v = new Number(0);
        expect(typeof v).toBe('object');
    });

    it("used with some number created with Number constructor should be 'object'", function () {
        var v = new Number(2);
        expect(typeof v).toBe('object');
    });

    it("used with NaN or Number.NaN should be 'number'", function () {
        var v = NaN;
        expect(typeof v).toBe('number');
        expect(typeof NaN).toBe('number');
        expect(typeof Number.NaN).toBe('number');
    });

    it("used with Number.MAX_VALUE should be 'number'", function () {
        var v = Number.MAX_VALUE;
        expect(typeof v).toBe('number');
        expect(typeof Number.MAX_VALUE).toBe('number');
    });

    it("used with Number.MIN_VALUE should be 'number'", function () {
        var v = Number.MIN_VALUE;
        expect(typeof v).toBe('number');
        expect(typeof Number.MIN_VALUE).toBe('number');
    });

    it("used with Number.NEGATIVE_INFINITY should be 'number'", function () {
        var v = Number.NEGATIVE_INFINITY;
        expect(typeof v).toBe('number');
        expect(typeof Number.NEGATIVE_INFINITY).toBe('number');
    });

    it("used with Number.POSITIVE_INFINITY should be 'number'", function () {
        var v = Number.POSITIVE_INFINITY;
        expect(typeof v).toBe('number');
        expect(typeof Number.POSITIVE_INFINITY).toBe('number');
    });

    it("used with zero literal should be 'number'", function () {
        var v = 0;
        expect(typeof v).toBe('number');
    });

    it("used with some number literal should be 'number'", function () {
        var v = 2;
        expect(typeof v).toBe('number');
    });

    it("used with empty string created with String constructor should be 'object' (therefore new String should never be used)", function () {
        var v = new String("");
        expect(typeof v).toBe('object');
    });

    it("used with some string created with String constructor should be 'object' (therefore new String should never be used)", function () {
        var v = new String("some");
        expect(typeof v).toBe('object');
    });

    it("used with empty string literal should be 'string'", function () {
        var v = "";
        expect(typeof v).toBe('string');
    });

    it("used with some string literal should be 'string'", function () {
        var v = "some";
        expect(typeof v).toBe('string');
    });

    it("used with undefined should be 'undefined'", function () {
        var v;
        expect(typeof v).toBe('undefined');

        v = undefined;
        expect(typeof v).toBe('undefined');
    });

});

})(this);
