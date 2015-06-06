
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Boolean
 */
describe("YJS.Boolean", function () {

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
