
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.RegExp
 */
describe("YJS.RegExp", function () {

    describe(".escape", function () {

        it("called with `undefined` should return `undefined`", function () {
            var value = YJS.RegExp.escape(undefined);
            expect(value).not.toBeDefined();
        });

        it("called with `null` should return `null`", function () {
            var value = YJS.RegExp.escape(null);
            expect(value).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var value = YJS.RegExp.escape('');
            expect(value).toEqual('');
        });

        it("called with `false` should return `false`", function () {
            var value = YJS.RegExp.escape(false);
            expect(value).toBe(false);
        });

        it("called with `true` should return `true`", function () {
            var value = YJS.RegExp.escape(true);
            expect(value).toBe(true);
        });

        it("called with `0` should return `0`", function () {
            var value = YJS.RegExp.escape(0);
            expect(value).toBe(0);
        });

        it("called with `1` should return `1`", function () {
            var value = YJS.RegExp.escape(1);
            expect(value).toBe(1);
        });

        it("called with string containing special characters should return string with special characters escaped", function () {
            var value;

            value = YJS.RegExp.escape('[foo]');
            expect(value).toEqual('\\[foo\\]');

            value = YJS.RegExp.escape('([1-2 * foo.bar + ${0} ? 4 || 5 : 4 ^ 5])');
            expect(value).toEqual('\\(\\[1\\-2 \\* foo\\.bar \\+ \\$\\{0\\} \\? 4 \\|\\| 5 : 4 \\^ 5\\]\\)');
        });

    });

});

})(this);
