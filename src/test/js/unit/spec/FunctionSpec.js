/* $Id$ */

(function (GBL, undefined) {

describe("In strict mode", function () {

    "use strict";

    describe("Function", function () {

        describe("created by anonymous function literal with no arguments", function () {

            it("should throw a TypeError when attempting to access the `caller` property", function () {
                var func = function () {};
                try {
                    func.caller;
                    // For some reason, accessing `caller` while running under Phantom won't throw an error. Maybe it is not configured correct
                    // to go into strict mode.
                    if (!GBL.phantom) {
                        expect(0).toBe(10);
                    }
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
            });

        });

    });

});

describe("Function", function () {

    describe("created by anonymous function literal with no arguments", function () {
        var func = function () {};

        it("should be an instance of Function", function () {
            expect(func instanceof Function).toBe(true);
        });

        it("should not be an instance of its constructor", function () {
            expect(func instanceof func).toBe(false);
        });

        it("should have a caller property that is null", function () {
//            expect(func.hasOwnProperty('caller')).toBe(true); FireFox 35.0.1 does not have its own `caller` property but it still has a caller property.
            expect('caller' in func).toBe(true);
            expect(func.caller).toBeDefined();
            expect(func.caller).toBeNull();
            expect(func.caller === null).toBe(true);
        });

        it("should have a length property that is 0", function () {
            expect(func.length).toBe(0);
        });

        // `name` is not a standard property. Chrome provides it. IE9 doesn't.
//        it("should have a name property that is the empty string", function () {
//            expect(func.name).toBe("");
//        });

        it("should have a prototype property", function () {
            expect(func.prototype).toBeDefined();
        });

        it("should have an apply method", function () {
            expect(func.apply).toBeDefined();
            expect(func.hasOwnProperty('apply')).not.toBe(true);
            expect(func.prototype.apply).not.toBeDefined();
            expect(func.apply).toBe(Function.prototype.apply);
            expect(typeof func.apply === 'function').toBe(true);
        });

        it("should have a call method", function () {
            expect(func.call).toBeDefined();
            expect(func.hasOwnProperty('call')).not.toBe(true);
            expect(func.prototype.call).not.toBeDefined();
            expect(func.call).toBe(Function.prototype.call);
            expect(typeof func.call === 'function').toBe(true);
        });

        it("should have a toString method", function () {
            expect(func.toString).toBeDefined();
            expect(typeof func.toString === 'function').toBe(true);
            // The following is not consistent between browsers. FireFox expects "function () { }".
//            expect(func.toString()).toEqual("function () {}");
        });

        it("should have an inherited constructor property", function () {
            expect(func.prototype.constructor).toBeDefined();
            expect(typeof func.prototype.constructor === 'function').toBe(true);
        });

        it("should have an inherited hasOwnProperty method", function () {
            expect(func.prototype.hasOwnProperty).toBeDefined();
            expect(typeof func.prototype.hasOwnProperty === 'function').toBe(true);
        });

        it("should have an inherited isPrototypeOf method", function () {
            expect(func.prototype.isPrototypeOf).toBeDefined();
            expect(typeof func.prototype.isPrototypeOf === 'function').toBe(true);
        });

        it("should have an inherited toLocaleString method", function () {
            expect(func.prototype.toLocaleString).toBeDefined();
            expect(typeof func.prototype.toLocaleString === 'function').toBe(true);
        });

        it("should have an inherited toString method", function () {
            expect(func.prototype.toString).toBeDefined();
            expect(typeof func.prototype.toString === 'function').toBe(true);
            expect(func.prototype.toString()).toEqual("[object Object]");
        });

        it("should have an inherited valueOf method", function () {
            expect(func.prototype.valueOf).toBeDefined();
            expect(typeof func.prototype.valueOf === 'function').toBe(true);
        });

        describe("used to create new instance", function () {
            var inst = new func();

            it("should be an instance of its constructor", function () {
                expect(inst instanceof func).toBe(true);
            });
        });

    });

});

})(this);
