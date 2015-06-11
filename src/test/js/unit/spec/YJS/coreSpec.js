
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.core
 */
describe("YJS.core", function () {

    it("should not be configurable", function () {
        var YJS_core = YJS.core;
        expect(YJS.core).toBeDefined();
        expect(function () {
            delete YJS.core;
        }).toThrow();
        expect(YJS.core).toBeDefined();
        expect(YJS.core).toBe(YJS_core);
        
        expect(YJS.core).toBeDefined();
        expect(YJS.core).toBe(YJS_core);
        expect(YJS.core.foo).toBeUndefined();    
        Object.defineProperty(YJS, 'core', { foo: 'bar' });
        expect(YJS.core).toBeDefined();
        expect(YJS.core).toBe(YJS_core);
        expect(YJS.core.foo).toBeUndefined();    
    });

    it("should not be writable", function () {
        var YJS_core = YJS.core;
        expect(YJS.core.foo).toBeUndefined();
        expect(function () {
            YJS.core = { foo: 'bar' };
        }).toThrow();
        expect(YJS.core).toBeDefined();
        expect(YJS.core).toBe(YJS_core);
        expect(YJS.core.foo).toBeUndefined();
    });

    describe(".$isNamespace", function () {

        it("should be a constant set to `true`", function () {
            YJSHelper.expectToHaveConst$isNamespace(YJS.core);
        });

    });

});

})(this);
