/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("Class", function () {

    var Class;

    beforeEach(function () {
        Class = function () {};
    });

    describe("with properties added to prototype", function () {

        beforeEach(function () {
            Class.prototype.foo = 'foo';
        });

        it("and instance property set should be hidden by instance properties", function () {
            var obj;

            obj = new Class();

            expect(obj.foo).toBe('foo');
            expect(obj.hasOwnProperty('foo')).toBe(false);
            obj.foo = 'bar'; // Set instance property.
            expect(obj.foo).toBe('bar');
            expect(obj.hasOwnProperty('foo')).toBe(true);
        });

        it("and instance property set and deleted should expose prototype property", function () {
            var obj;

            obj = new Class();

            expect(obj.foo).toBe('foo');
            expect(obj.hasOwnProperty('foo')).toBe(false);
            obj.foo = 'bar'; // Set instance property.
            expect(obj.foo).toBe('bar');
            expect(obj.hasOwnProperty('foo')).toBe(true);
            delete obj.foo;
            expect(obj.foo).toBe('foo');
            expect(obj.hasOwnProperty('foo')).toBe(false);
        });

        it("and instance property set and then set to undefined should continue to hide prototype property", function () {
            var obj;

            obj = new Class();

            expect(obj.foo).toBe('foo');
            expect(obj.hasOwnProperty('foo')).toBe(false);
            obj.foo = 'bar'; // Set instance property.
            expect(obj.foo).toBe('bar');
            expect(obj.hasOwnProperty('foo')).toBe(true);
            obj.foo = undefined;
            expect(obj.foo).not.toBeDefined();
            expect(obj.hasOwnProperty('foo')).toBe(true);
        });

    });

});

})(this);
