
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS
 */
describe("YJS", function () {

    describe(".$isNamespace", function () {

        it("should be a constant set to `true`", function () {
            YJSHelper.expectToHaveConst$isNamespace(YJS);
        });

    });

    describe(".ns", function () {

        it("should add the constant `$isNamespace`", function () {
            var NS;

            try {
                NS = YJS.ns('NS');
                YJSHelper.expectToHaveConst$isNamespace(NS);
            } finally {
                delete GBL.NS;
            }

            try {
                YJS.ns('Foo.bar');
                YJSHelper.expectToHaveConst$isNamespace(Foo);
                YJSHelper.expectToHaveConst$isNamespace(Foo.bar);
            } finally {
                delete GBL.Foo;
            }
        });

        it("should log a warning when namespace already exists with an unconfigurable `$isNamespace` property set to `false`", function () {
            var arrayAppender, logEntries;
            
            try {
                GBL.NS = {};
                YJS.core.Class.setConst(GBL.NS, '$isNamespace', false);
                arrayAppender = YJSHelper.setupLoggingArrayAppender(YJS);
                YJS.ns('NS');
                logEntries = arrayAppender.getLogEntries();
                expect(logEntries.length).toBe(1);
                expect(logEntries[0].getMessage()).toBe('Unable to set the `$isNamespace` constant to `true` for the `NS` namespace.');
            } finally {
                delete GBL.NS;
            }
        });

    });

});

})(this);
