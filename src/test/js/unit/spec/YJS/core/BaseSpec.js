
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("YJS.core.Base", function () {

    describe(".$isClazz", function () {

        it("should be equal to `true`", function () {
            expect(YJS.core.Base.$isClazz).toBe(true);
        });

    });

    describe(".$simpleName", function () {

        it("should be equal to `'Base'`", function () {
            expect(YJS.core.Base.$simpleName).toBe('Base');
        });

    });

    describe(".$superclazz", function () {

        it("should equal `Object`", function () {
            expect(YJS.core.Base.$superclazz).toBe(Object);
        });

    });

    describe(".prototype", function () {

        describe(".$clazz", function () {

            it("should equal `YJS.core.Base`", function () {
                expect(YJS.core.Base.prototype.$clazz).toBe(YJS.core.Base);
            });

        });

        describe(".constructor", function () {

            it("should equal `YJS.core.Base`", function () {
                expect(YJS.core.Base.prototype.constructor).toBe(YJS.core.Base);
            });

        });

    });

    describe("instance", function () {

        describe(".$clazz", function () {

            it("should equal `YJS.core.Base`", function () {
                var obj = new YJS.core.Base();
                expect(obj.$clazz).toBe(YJS.core.Base);
            });

        });

        describe(".$superclazz", function () {

            it("should equal `Object`", function () {
                var obj = new YJS.core.Base();
                expect(obj.$superclazz).toBe(Object);
            });

        });

        describe(".constructor", function () {

            it("should equal `YJS.core.Base`", function () {
                var obj = new YJS.core.Base();
                expect(obj.constructor).toBe(YJS.core.Base);
            });

        });

        describe("._initialize", function () {

            it("should equal `YJS.notAgainFn`", function () {
                var obj = new YJS.core.Base();
                expect(obj.hasOwnProperty('_initialize')).toBe(true);
                expect(obj._initialize).toBe(YJS.notAgainFn);
            });

        });

    });

});

})(this);
