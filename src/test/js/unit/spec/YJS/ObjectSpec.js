
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.Object
 */
describe("YJS.Object", function () {

    describe(".put", function () {

        it("called with undefined object should do nothing and not error", function () {
            expect(function () {
                YJS.Object.put(undefined, 'should.not.matter', true);
            }).not.toThrow();
        });

        it("called with null object should do nothing and not error", function () {
            expect(function () {
                YJS.Object.put(null, 'should.not.matter', true);
            }).not.toThrow();
        });

        it("called with array should do nothing and not error", function () {
            var array = [];

            YJS.Object.put(array, 'length', 4);

            expect(array.length).toBe(0);
        });

        it("called with empty object, nested paths, and force set to true should create missing objects", function () {
            var obj = {};

            YJS.Object.put(obj, 'top.next.last', 'I am the last man alive!', { force: true });

            expect(obj).toEqual({ top: { next: { last: 'I am the last man alive!' } } });
        });

        it("called with empty object, single path, and force set to true should create missing objects", function () {
            var obj = {};

            YJS.Object.put(obj, 'top', 'I am on top!', { force: true });

            expect(obj).toEqual({ top: 'I am on top!' });
        });

        it("called with empty path, and force set to false should not update the object", function () {
            var obj = { immutable: true };

            YJS.Object.put(obj, '', 'I am nothing', { force: false });

            expect(obj).toEqual({ immutable: true });
        });

        it("called with empty path, and force set to true should not update the object", function () {
            var obj = { immutable: true };

            YJS.Object.put(obj, '', 'I am nothing', { force: true });

            expect(obj).toEqual({ immutable: true });
        });

        it("called with partial object, nested paths, and force set to true should create missing objects but not affect other parts of the object", function () {
            var obj = {
                tooth: { less: 'people' },
                are: { happy: false }
            };

            YJS.Object.put(obj, 'tooth.filled.mouths', 'are better', { force: true });

            expect(obj).toEqual({ tooth: { filled: { mouths: 'are better' }, less: 'people' }, are: { happy: false } });
        });

        it("called with deep object, nested paths should replace sub-objects", function () {
            var obj = { top: { next: { last: { more: true, samuri: { name: 'kikomon' } } } } };

            YJS.Object.put(obj, 'top.next.last', 'new value');

            expect(obj).toEqual({ top: { next: { last: 'new value' } } });
        });

    });

});

})(this);
