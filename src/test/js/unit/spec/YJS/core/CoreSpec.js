
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("YJS", function () {

    describe(".ns", function () {

        it("called with a single namespace will ensure the namespace exists after returning from the call", function () {
            var ns;

            expect(typeof Foo).toBe('undefined');
            ns = YJS.ns('Foo');
            expect(Foo).toBeDefined();
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

        it("called with a single namespace will return a reference to the specified namespace", function () {
            var ns;

            expect(typeof Foo).toBe('undefined');
            ns = YJS.ns('Foo');
            expect(ns).toBe(Foo);
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

        it("called with multiple namespaces will ensure the namespaces exists after returning from the call", function () {
            expect(typeof Foo).toBe('undefined');
            YJS.ns('Foo.app.BarApp');
            expect(Foo).toBeDefined();
            expect(Foo.app).toBeDefined();
            expect(Foo.app.BarApp).toBeDefined();
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

        it("called multiple times with the same namespace will continue to return the same reference", function () {
            var ns1, ns2;

            expect(typeof Foo).toBe('undefined');
            ns1 = YJS.ns('Foo');
            ns2 = YJS.ns('Foo');
            expect(ns1).toBe(ns2);

            expect(typeof Foo.bar).toBe('undefined');
            ns1 = YJS.ns('Foo.bar');
            ns2 = YJS.ns('Foo.bar');
            expect(ns1).toBe(ns2);
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

    });

});

describe("YJS.core.Core", function () {

    describe(".aliasNs", function () {

        it("called with a valid argument creates a new reference to the YJS namespace", function () {
            expect(typeof Foo).toBe('undefined');
            YJS.core.Core.aliasNs('Foo');
            expect(Foo).toBeDefined();
            expect(Foo).toBe(YJS);
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

    });

    describe(".changeNs", function () {
        var YJSNs;

        beforeEach(function () {
            YJSNs = GBL.YJS;
        });

        afterEach(function () {
            GBL.YJS = YJSNs;
        });

        it("called with a valid argument creates a new reference to the YJS namespace while removing YJS as the original reference", function () {
            expect(typeof Foo).toBe('undefined');
            YJS.core.Core.changeNs('Foo');
            expect(Foo).toBeDefined();
            expect(typeof YJS).toBe('undefined');
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

    });

    describe(".restoreOriginalNs", function () {

        it("will bring back the original YJS namespace reference into the global namespace", function () {
            expect(typeof Foo).toBe('undefined');
            YJS.core.Core.changeNs('Foo');
            expect(Foo).toBeDefined();
            expect(typeof YJS).toBe('undefined');
            Foo.core.Core.restoreOriginalNs();
            expect(Foo).toBeDefined();
            expect(YJS).toBeDefined();
            expect(Foo).toBe(YJS);
            delete GBL.Foo;
            expect(GBL.Foo).toBeUndefined();
        });

    });

});

})(this);
