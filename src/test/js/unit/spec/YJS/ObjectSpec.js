
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

        it("called with an array should update or create missing values", function () {
            var array = [];

            YJS.Object.put(array, 'length', 4);
            YJS.Object.put(array, '0', 'zero');
            YJS.Object.put(array, '3', 'three');
            YJS.Object.put(array, '2', 'two');
            YJS.Object.put(array, '4', { name: 'foo' });
            YJS.Object.put(array, '4.name', 'bar');

            expect(array.length).toBe(5);
            expect(array[0]).toBe('zero');
            expect(array[1]).toBeUndefined();
            expect(array[2]).toBe('two');
            expect(array[3]).toBe('three');
            expect(array[4]).toEqual({ name: 'bar' });
        });

        it("called with empty object and nested paths should create missing objects", function () {
            var obj = {};

            YJS.Object.put(obj, 'top.next.last', 'I am the last man alive!');

            expect(obj).toEqual({ top: { next: { last: 'I am the last man alive!' } } });
        });

        it("called with empty object and single path should create missing objects", function () {
            var obj = {};

            YJS.Object.put(obj, 'top', 'I am on top!');

            expect(obj).toEqual({ top: 'I am on top!' });
        });

        it("called with empty path, and force set to false should not update the object", function () {
            var obj = { immutable: true };

            YJS.Object.put(obj, '', 'I am nothing', { force: false });

            expect(obj).toEqual({ immutable: true });
        });

        it("called with empty path should not update the object", function () {
            var obj = { immutable: true };

            YJS.Object.put(obj, '', 'I am nothing');

            expect(obj).toEqual({ immutable: true });
        });

        it("called with complete object and indexed based path should update indexed parts of object", function () {
            var obj = { name: 'ACME', employees: [{ name: 'Alice' }, { name: 'Bob' }] };

            YJS.Object.put(obj, 'employees.0.name', 'Anthony');

            expect(obj).toEqual({ name: 'ACME', employees: [{ name: 'Anthony' }, { name: 'Bob' }] });
        });

        it("called with partial object and nested paths should create missing objects but not affect other parts of the object", function () {
            var obj = {
                tooth: { less: 'people' },
                are: { happy: false }
            };

            YJS.Object.put(obj, 'tooth.filled.mouths', 'are better');

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
