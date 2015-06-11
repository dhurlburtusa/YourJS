
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log
 */
describe("YJS.log", function () {

    describe(".$isNamespace", function () {

        it("should be a constant set to `true`", function () {
            YJSHelper.expectToHaveConst$isNamespace(YJS.log);
        });

    });

});

})(this);
