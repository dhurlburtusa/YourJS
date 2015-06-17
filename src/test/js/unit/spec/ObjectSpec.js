/* $Id$ */

(function (GBL, undefined) {

describe("In strict mode", function () {

    'use strict';

    describe("Object", function () {

        describe(".defineProperty", function () {

            describe("called with default descriptor defines a property", function () {
                var obj;

                beforeEach(function () {
                    obj = {};

                    expect('foo' in obj).toBe(false);
                    Object.defineProperty(obj, 'foo', {}); // Default descriptor

                    // Expect foo to now exist
                    expect(obj.hasOwnProperty('foo')).toBe(true);
                });

                it("that is not deletable and will throw a TypeError when deletion is attempted", function () {
                    try {
                        delete obj.foo;
                        if (!GBL.phantom) {
                            expect(0).toBe(10);
                        }
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                    expect(obj.hasOwnProperty('foo')).toBe(true);
                    expect(obj.foo).toBeUndefined();
                });

                it("that is not writable and will throw a TypeError when assignment is attempted", function () {
                    try {
                        obj.foo = 'bar';
                        if (!GBL.phantom) {
                            expect(0).toBe(10);
                        }
                    } catch (e) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                    expect(obj.foo).toBeUndefined();
                });

            });

        });

    });

});

describe("Object", function () {

    describe("instance", function () {

        it("should be an instance of `Object`", function () {
            var obj;

            obj = {};
            expect(obj instanceof Object).toBe(true);

            obj = new Object();
            expect(obj instanceof Object).toBe(true);
        });

        it("should not have a prototype property", function () {
            var obj;

            obj = {};
            expect(obj.hasOwnProperty('prototype')).toBe(false);
            expect(obj.prototype).not.toBeDefined();

            obj = new Object();
            expect(obj.hasOwnProperty('prototype')).toBe(false);
            expect(obj.prototype).not.toBeDefined();
        });

        it("should have an inherited constructor property that is `Object`", function () {
            var obj;

            obj = {};
            expect(obj.hasOwnProperty('constructor')).toBe(false); // Inherited
            expect(obj.constructor).toBeDefined();
            expect(obj.constructor).toBe(Object);
            expect(typeof obj.constructor).toBe('function');

            obj = new Object();
            expect(obj.hasOwnProperty('constructor')).toBe(false); // Inherited
            expect(obj.constructor).toBeDefined();
            expect(obj.constructor).toBe(Object);
            expect(typeof obj.constructor).toBe('function');
        });

    });

if (typeof Object.assign == 'function') {
    describe(".assign", function () {

        it("should assign enumerable, own properties from sources to target", function () {
            var out, source1, source2, target;
            
            target = {};
            source1 = {};
            source2 = {};
            out = Object.assign(target, source1, source2);
            expect(out).toBe(target);
            expect(out).not.toBe(source1);
            expect(out).not.toBe(source2);
            expect(out).not.toBe({});
            expect(out).toEqual({});

            target = { fe: 'fe', fum: 'fum' };
            source1 = { fi: 'fi' };
            source2 = { fo: 'fo' };
            out = Object.assign(target, source1, source2);
            expect(out).toBe(target);
            expect(out).not.toBe(source1);
            expect(out).not.toBe(source2);
            expect(out).not.toBe({ fe: 'fe', fi: 'fi', fo: 'fo', fum: 'fum' });
            expect(out).toEqual({ fe: 'fe', fi: 'fi', fo: 'fo', fum: 'fum' });

            // Last source property wins.
            target = { fe: 'fe_t', fum: 'fum_t' };
            source1 = { fe: 'fe_s1', fi: 'fi_s1' };
            source2 = { fe: 'fe_s2', fo: 'fo_s2' };
            out = Object.assign(target, source1, source2);
            expect(out).toBe(target);
            expect(out).not.toBe(source1);
            expect(out).not.toBe(source2);
            expect(out).not.toBe({ fe: 'fe_s2', fi: 'fi_s1', fo: 'fo_s2', fum: 'fum_t' });
            expect(out).toEqual({ fe: 'fe_s2', fi: 'fi_s1', fo: 'fo_s2', fum: 'fum_t' });

            target = {};
            Object.defineProperty(target, 'fe', { enumerable: true, value: 'fe_t', writable: true });
            Object.defineProperty(target, 'fi', { value: 'fi_t', writable: true });
            Object.defineProperty(target, 'fo', { enumerable: true, value: 'fo_t', writable: true });
            Object.defineProperty(target, 'fum', { value: 'fum_t', writable: true });
            source1 = { fe: 'fe_s1', fo: 'fo_s1', fi: 'fi_s1' };
            source2 = { fe: 'fe_s2', fum: 'fum_s2' };
            expect(target).toEqual({ fe: 'fe_t', fo: 'fo_t' });
            expect(target.fi).toBe('fi_t');
            expect(target.fum).toBe('fum_t');
            out = Object.assign(target, source1, source2);
            expect(out).toBe(target);
            expect(out).not.toBe(source1);
            expect(out).not.toBe(source2);
            expect(out).not.toBe({ fe: 'fe_s2', fo: 'fo_s1' });
            expect(out).toEqual({ fe: 'fe_s2', fo: 'fo_s1' });
            expect(out.fi).toBe('fi_s1');
            expect(out.fum).toBe('fum_s2');

            target = { fe: 'fe_t', fi: 'fi_t', fo: 'fo_t', fum: 'fum_t' };
            source1 = { fe: 'fe_s1', fi: 'fi_s1' };
            Object.defineProperty(source1, 'fo', { value: 'fo_s1' });
            source2 = { fe: 'fe_s2', fum: 'fum_s2' };
            expect(target).toEqual({ fe: 'fe_t', fi: 'fi_t', fo: 'fo_t', fum: 'fum_t' });
            expect(source1).toEqual({ fe: 'fe_s1', fi: 'fi_s1' });
            expect(source1.fo).toBe('fo_s1');
            out = Object.assign(target, source1, source2);
            expect(out).toBe(target);
            expect(out).not.toBe(source1);
            expect(out).not.toBe(source2);
            expect(out).not.toBe({ fe: 'fe_s2', fo: 'fo_s1' });
            expect(out).toEqual({ fe: 'fe_s2', fi: 'fi_s1', fo: 'fo_t', fum: 'fum_s2' });
        });

    });
}

    describe(".isPrototyeOf", function () {

        it("should correctly test for an object in another object's prototype chain", function () {
            function Fee() {}

            function Fi() {}
            Fi.prototype = new Fee();

            function Fo() {}
            Fo.prototype = new Fi();

            function Fum() {}
            Fum.prototype = new Fo();

            var fum = new Fum();
            expect(fum instanceof Fum).toBe(true);
            expect(fum instanceof Fo).toBe(true);
            expect(fum instanceof Fi).toBe(true);
            expect(fum instanceof Fee).toBe(true);
            expect(fum instanceof Object).toBe(true);

            expect(Fum.prototype.isPrototypeOf(fum)).toBe(true);
            expect(Fo.prototype.isPrototypeOf(fum)).toBe(true);
            expect(Fi.prototype.isPrototypeOf(fum)).toBe(true);
            expect(Fee.prototype.isPrototypeOf(fum)).toBe(true);
            expect(Object.prototype.isPrototypeOf(fum)).toBe(true);
        });

    });

    describe(".defineProperty", function () {

        describe("called with default descriptor defines a property", function () {
            /*
            # data descriptor

            {
              configurable: false,
              enumerable: false,
              value: undefined,
              writable: false
            }

            # accessor descriptor

            {
              configurable: false,
              enumerable: false,
              get: undefined,
              set: undefined
            }
            */
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', {}); // Default descriptor

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is not configurable", function () {
                /* but Object.defineProperty can be called again with the same configuration without throwing an error. */
                expect(function () {
                    'use strict';
                    Object.defineProperty(obj, 'foo', {});

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { configurable: false });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { enumerable: false });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { value: undefined });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    try {
                        // Throws error in PhantomJS but not in IE10 and Chrome40.
                        Object.defineProperty(obj, 'foo', { writable: false });
                    } catch (e) {
                        if (GBL.phantom) {
                            expect(e instanceof TypeError).toBe(true);
                        }
                    }

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { configurable: false, enumerable: false });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { configurable: false, value: undefined });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    try {
                        Object.defineProperty(obj, 'foo', { configurable: false, writable: false }); // Throws error in PhantomJS but not in IE10 and Chrome40.
                    } catch (e) {
                        if (GBL.phantom) {
                            expect(e instanceof TypeError).toBe(true);
                        }
                    }

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { enumerable: false, value: undefined });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    try {
                        Object.defineProperty(obj, 'foo', { enumerable: false, writable: false }); // Throws error in PhantomJS but not in IE10 and Chrome40.
                    } catch (e) {
                        if (GBL.phantom) {
                            expect(e instanceof TypeError).toBe(true);
                        }
                    }

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { value: undefined, writable: false });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { configurable: false, enumerable: false, value: undefined });

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    try {
                        Object.defineProperty(obj, 'foo', { configurable: false, enumerable: false, writable: false }); // Throws error in PhantomJS but not in IE10 and Chrome40.
                    } catch (e) {
                        if (GBL.phantom) {
                            expect(e instanceof TypeError).toBe(true);
                        }
                    }

                    obj = {};
                    Object.defineProperty(obj, 'foo', {});
                    Object.defineProperty(obj, 'foo', { configurable: false, enumerable: false, value: undefined, writable: false });
                }).not.toThrow();
                try {
                    Object.defineProperty(obj, 'foo', { configurable: true });
                    expect(0).toBe(10);
                } catch (e) { expect(e instanceof TypeError).toBe(true); }
                try {
                    Object.defineProperty(obj, 'foo', { enumerable: true });
                    expect(0).toBe(20);
                } catch (e) { expect(e instanceof TypeError).toBe(true); }
                try {
                    Object.defineProperty(obj, 'foo', { value: 'bar' });
                    expect(0).toBe(30);
                } catch (e) { expect(e instanceof TypeError).toBe(true); }
                try {
                    Object.defineProperty(obj, 'foo', { writable: true });
                    expect(0).toBe(40);
                } catch (e) { expect(e instanceof TypeError).toBe(true); }
                try {
                    Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true });
                    expect(0).toBe(50);
                } catch (e) { expect(e instanceof TypeError).toBe(true); }
                // The following don't pass with PhantomJS but they pass with IE10 and Chrome 40. They may pass with other browsers too.
                // They may fail in other environments.
                if (!GBL.phantom) {
                    try {
                        Object.defineProperty(obj, 'foo', { get: undefined });
                        expect(0).toBe(60);
                    } catch (e) { expect(e instanceof TypeError).toBe(true); }
                    try {
                        Object.defineProperty(obj, 'foo', { set: undefined });
                        expect(0).toBe(70);
                    } catch (e) { expect(e instanceof TypeError).toBe(true); }
                    try {
                        Object.defineProperty(obj, 'foo', { get: undefined, set: undefined });
                        expect(0).toBe(80);
                    } catch (e) { expect(e instanceof TypeError).toBe(true); }
                }
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
              expect(isEnumerable).toBe(false);
            });

            it("that is not writable", function () {
                obj.foo = 'bar';
                expect(obj.foo).toBeUndefined();
            });

        });

        describe("called with { configurable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true });

                // Expect foo to now exist
                expect('foo' in obj).toBe(true);
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is not writable", function () {
                obj.foo = 'bar';
                expect(obj.foo).toBeUndefined();
            });

            describe("that can be redefined", function () {

                describe("with { value: 'bar' }", function () {

                    beforeEach(function () {
                        expect(obj.foo).toBeUndefined();
                        Object.defineProperty(obj, 'foo', { value: 'bar' });
                    });
                    
                    it("now has the new value", function () {
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }
                    });
                    
                    it("but still maintains all other configuration (i.e., configurable: true, enumerable: false, and writable: false)", function () {
                        // Is still not enumerable
                        var isEnumerable = false, key;
                        for (key in obj) {
                            if (key == 'foo') { isEnumerable = true; break; }
                        }
                        expect(isEnumerable).toBe(false);
                        
                        // Is still not writable
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }
                        obj.foo = 'qux';
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }

                        // Is still configurable if property can be deleted.
                        expect(obj.hasOwnProperty('foo')).toBe(true);
                        delete obj.foo;
                        expect(obj.hasOwnProperty('foo')).toBe(false);
                    });
                    
                });

                describe("with { configurable: false, value: 'bar' }", function () {

                    beforeEach(function () {
                        expect(obj.foo).toBeUndefined();
                        Object.defineProperty(obj, 'foo', { configurable: false, value: 'bar' });
                    });
                    
                    it("now has the new value", function () {
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }
                    });
                    
                    it("is no longer configurable", function () {
                        expect(obj.hasOwnProperty('foo')).toBe(true);
                        delete obj.foo;
                        expect(obj.hasOwnProperty('foo')).toBe(true);
                    });
                    
                    it("but still maintains all other configuration (i.e., enumerable: false, and writable: false)", function () {
                        // Is still not enumerable
                        var isEnumerable = false, key;
                        for (key in obj) {
                            if (key == 'foo') { isEnumerable = true; break; }
                        }
                        expect(isEnumerable).toBe(false);
                        
                        // Is still not writable
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }
                        obj.foo = 'qux';
                        if (!GBL.phantom) {
                            expect(obj.foo).toBe('bar');
                        }
                    });
                    
                });

                it("be enumerable", function () {
                    var isEnumerable, key;
                    
                    isEnumerable = false;
                    Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true });
                    expect(obj.foo).toBeUndefined();
                    for (key in obj) {
                        if (key == 'foo') { isEnumerable = true; break; }
                    }
                    expect(isEnumerable).toBe(true);
                    
                    isEnumerable = false;
                    Object.defineProperty(obj, 'foo', { enumerable: true });
                    expect(obj.foo).toBeUndefined();
                    for (key in obj) {
                        if (key == 'foo') { isEnumerable = true; break; }
                    }
                    expect(isEnumerable).toBe(true);
                });

                it("be configurable and writable", function () {
                    Object.defineProperty(obj, 'foo', { configurable: true, writable: true });
                    expect(obj.foo).toBeUndefined();
                    obj.foo = 'bar';
                    expect(obj.foo).toBe('bar');
                });

                it("be writable but no longer configurable", function () {
                    Object.defineProperty(obj, 'foo', { writable: true });
                    expect(obj.foo).toBeUndefined();
                    obj.foo = 'bar';
                    expect(obj.foo).toBe('bar');
                    
                    Object.defineProperty(obj, 'foo', { configurable: false, enumerable: true });
                });

            });

        });

        describe("called with { enumerable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { enumerable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is not writable", function () {
                obj.foo = 'bar';
                expect(obj.foo).toBeUndefined();
            });

        });

        describe("called with { value: 'bar' } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { value: 'bar' });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is not writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('bar');
            });

        });

        describe("called with { writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable", function () {
                obj.foo = 'bar';
                expect(obj.foo).toBe('bar');
            });

        });

        describe("called with { configurable: true, enumerable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is not writable", function () {
                obj.foo = 'bar';
                expect(obj.foo).toBeUndefined();
            });

        });

        describe("called with { configurable: true, value: 'bar' } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, value: 'bar' });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is not writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('bar');
            });

        });

        describe("called with { configurable: true, writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { enumerable: true, value: 'bar' } defines a property", function () {
            var obj;
            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { enumerable: true, value: 'bar' });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is not writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('bar');
            });

        });

        describe("called with { enumerable: true, writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { enumerable: true, writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { value: 'bar', writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { value: 'bar', writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { configurable: true, enumerable: true, value: 'bar' } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true, value: 'bar' });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is not writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('bar');
            });

        });

        describe("called with { configurable: true, enumerable: true, writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true, writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                // Expect foo to have the default value of `undefined`.
                expect(obj.foo).toBeUndefined();
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { configurable: true, value: 'bar', writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, value: 'bar', writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { enumerable: true, value: 'bar', writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { enumerable: true, value: 'bar', writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { configurable: true, enumerable: true, value: 'bar', writable: true } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', { configurable: true, enumerable: true, value: 'bar', writable: true });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is deletable", function () {
                delete obj.foo;
                expect('foo' in obj).toBe(false);
                expect(obj.foo).toBeUndefined();
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

        describe("called with { get: ... } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', {
                    get: function () {
                        return 'bar';
                    }
                });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect('foo' in obj).toBe(true);
            });

            it("with the value set to `'bar'`", function () {
                expect(obj.foo).toBe('bar');
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is not writable", function () {
                try {
                    obj.foo = 'baz';
                } catch (e) {
                    if (GBL.phantom) {
                        expect(e instanceof TypeError).toBe(true);
                    }
                }
                expect(obj.foo).toBe('bar');
            });

        });
        
/* TODO: Complete the following.
        describe("called with { get: ..., configurable: true } defines a property", function () {
        });
        
        describe("called with { get: ..., enumerable: true } defines a property", function () {
        });
        
        describe("called with { get: ..., configurable: true, enumerable: true } defines a property", function () {
        });
*/
        
        describe("called with { set: ... } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', {
                    set: function (val) {
                        this.__foo = val; // Can't set value to this.foo otherwise this setter will be called over and over until a stack overflow occurs.
                    }
                });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("but without a getter the perceived value is `undefined`", function () {
                expect(obj.foo).toBeUndefined();
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable but is still perceived as `undefined`", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBeUndefined();
            });

        });
        
/* TODO: Complete the following.
        describe("called with { set: ..., configurable: true } defines a property", function () {
        });
        
        describe("called with { set: ..., enumerable: true } defines a property", function () {
        });
        
        describe("called with { set: ..., configurable: true, enumerable: true } defines a property", function () {
        });
*/

        describe("called with { get: ..., set: ... } defines a property", function () {
            var obj;

            beforeEach(function () {
                obj = {};

                expect('foo' in obj).toBe(false);
                Object.defineProperty(obj, 'foo', {
                    get: function () {
                        return this.__foo;
                    },
                    set: function (val) {
                        this.__foo = val;
                    }
                });

                // Expect foo to now exist
                expect(obj.hasOwnProperty('foo')).toBe(true);
            });

            it("with the value set to `undefined`", function () {
                expect(obj.foo).toBeUndefined();
            });

            it("that is not deletable", function () {
                delete obj.foo;
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBeUndefined();
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

            it("that is writable", function () {
                obj.foo = 'baz';
                expect(obj.foo).toBe('baz');
            });

        });

    });
        
/* TODO: Complete the following.
        describe("called with { get: ..., set: ..., configurable: true } defines a property", function () {
        });
        
        describe("called with { get: ..., set: ..., enumerable: true } defines a property", function () {
        });
        
        describe("called with { get: ..., set: ..., configurable: true, enumerable: true } defines a property", function () {
        });
*/

    describe("defined with ECMA5 object initializer", function () {
        
        it("should understand the get and set keywords", function () {
            var isEnumerable, key, obj;
            
            obj = {
                _: {
                    foo: 'bar'
                },
                get foo() {
                    return this._['foo'];
                },
                set foo(foo) {
                    this._['foo'] = foo;
                }
            };
            expect(obj.hasOwnProperty('foo')).toBe(true);
            expect('foo' in obj).toBe(true);
            isEnumerable = false;
            for (key in obj) {
                if (key == 'foo') { isEnumerable = true; break; }
            }
            expect(isEnumerable).toBe(true);
            expect(obj.foo).toBe('bar');
            expect(typeof obj.foo).toBe('string');
            obj.foo = 'qux';
            expect(typeof obj.foo).toBe('string');
            expect(obj.foo).toBe('qux');
            obj.foo = true;
            expect(typeof obj.foo).toBe('boolean');
            
        });

    });

});

})(this);
