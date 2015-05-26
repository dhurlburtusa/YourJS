
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("YJS.core.Class", function () {

    describe(".createConstructor", function () {
        
        it("should create a new constructor function each time", function () {
            var name = 'Foo', Foo1, Foo2;
            
            Foo1 = YJS.core.Class.createConstructor(name);
            
            expect(typeof Foo1).toBe('function');
            expect(Foo1.$simpleName).toBe('Foo');
            expect(Foo1.$isClazz).toBe(true);
            expect(function () {
                // Immutable
                Foo1.$isClazz = false;
            }).toThrow();
            
            Foo2 = YJS.core.Class.createConstructor(name);
            
            expect(typeof Foo2).toBe('function');
            expect(Foo2.$simpleName).toBe('Foo');
            expect(Foo2.$isClazz).toBe(true);
            
            expect(Foo1).not.toBe(Foo2);
            expect(Foo2).not.toBe(Foo1);
        });

        describe("called with unusual but valid names", function () {
        
            it("should not throw an error", function () {
                expect(function () { YJS.core.Class.createConstructor(''); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor('$foo'); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor('$foo$'); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor('_foo_bar_'); }).not.toThrow();
            });
            
        });

        describe("called with invalid names", function () {
        
            it("should throw an error", function () {
                expect(function () { YJS.core.Class.createConstructor(' '); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor(' $foo'); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor(' $foo$'); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor(' _foo_bar_'); }).not.toThrow();
                expect(function () { YJS.core.Class.createConstructor('~foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('!foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('1foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('@foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('#foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('%foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('^foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('&foo'); }).toThrow();
//                expect(function () { YJS.core.Class.createConstructor('*foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('-foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('+foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('=foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor(':foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor(';foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('.foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor(',foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('<foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('>foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('/foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('?foo'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('foo-bar'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('Foo-Bar'); }).toThrow();
                expect(function () { YJS.core.Class.createConstructor('Foo Bar'); }).toThrow();
            });
            
        });
        
    });

/*
// TODO: Add a test/spec to make sure the regular expression we use to detect if
// a function is calling $super is detecting correctly.

      var regex;
      regex = /[\b]*[$]super\b/;
      regex = /[\$]super\b/;
      regex = /[$]super\b/;
      regex = /\b[$]super\b/;
      regex = /\b[$]\bsuper\b/;
      regex = /\b\$\bsuper\b/;
      regex = /\b\$super\b/;
      regex = /((["'])\$super\1|\.\$super)\s*\(/;
      regex = /(\.\$super\s*\()|("\$super")|('\$super')/;
          expect(regex.test('this.$super(')).toBe(true);
          expect(regex.test('this.$super (')).toBe(true);
          expect(regex.test('this["$super"](')).toBe(true);
          expect(regex.test('this["$super"] (')).toBe(true);
          expect(regex.test("this['$super'](")).toBe(true);
          expect(regex.test("this['$super'] (")).toBe(true);

          expect(regex.test('$super')).toBe(false);
          expect(regex.test('$super(')).toBe(false);
          expect(regex.test('$super (')).toBe(false);
          expect(regex.test('["$super"](')).toBe(true);
          expect(regex.test('["$super"] (')).toBe(true);
          expect(regex.test("['$super'](")).toBe(true);
          expect(regex.test("['$super'] (")).toBe(true);

          expect(regex.test('$superclazz ')).toBe(false);
          expect(regex.test('foo$super')).toBe(false);



*/

    describe(".setConst", function () {

        describe("should define a property", function () {

            var obj;
            beforeEach(function () {
                obj = {};
                YJS.core.Class.setConst(obj, 'foo', 'bar');
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(obj.foo).toBe('bar');
            });

            it("that can't be changed", function () {
                try {
                    obj.foo = 'baz';
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.foo).toBe('bar');

                expect(function () {
                    // It is okay to redefine if nothing is effectively changed.
                    YJS.core.Class.setConst(obj, 'foo', 'bar');
                }).not.toThrow();

                try {
                    YJS.core.Class.setConst(obj, 'foo', 'baz');
                    expect(0).toBe(20);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.foo).toBe('bar');
            });

            it("that can't be deleted", function () {
                try {
                    delete obj.foo;
                    expect(0).toBe(30);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.foo).toBe('bar');
            });

            it("that is enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

        });

    });

    describe(".setPrivFn", function () {

        var Clazz, Clazz__corge, Clazz__foo, obj, obj__bar, obj__foo;
        beforeEach(function () {
            Clazz = function () {};
            
            Clazz__corge = function () { return 'Clazz'; };
            YJS.core.Class.setPrivFn(Clazz.prototype, '__corge', Clazz__corge);
            expect(Clazz.prototype.hasOwnProperty('__corge')).toBe(true);
            expect(typeof Clazz.prototype.__corge).toBe('function');
            expect(Clazz.prototype.__corge).toBe(Clazz__corge);
            
            Clazz__foo = function () { return 'Clazz'; };
            YJS.core.Class.setPrivFn(Clazz.prototype, '__foo', Clazz__foo);
            expect(Clazz.prototype.hasOwnProperty('__foo')).toBe(true);
            expect(typeof Clazz.prototype.__foo).toBe('function');
            expect(Clazz.prototype.__foo).toBe(Clazz__foo);
        });

        describe("should define a function", function () {

            beforeEach(function () {
                obj = new Clazz();
                obj__bar = function () { return 'instance'; };
                obj__foo = function () { return 'instance'; };
                
                YJS.core.Class.setPrivFn(obj, '__bar', obj__bar);
                expect(obj.hasOwnProperty('__bar')).toBe(true);
                expect(typeof obj.__bar).toBe('function');
                expect(obj.__bar).toBe(obj__bar);
                
                YJS.core.Class.setPrivFn(obj, '__foo', obj__foo);
                expect(obj.hasOwnProperty('__foo')).toBe(true);
                expect(typeof obj.__foo).toBe('function');
                expect(obj.__foo).toBe(obj__foo);
            });

            it("that can't be changed", function () {
                try {
                    Clazz.prototype.__corge = function () {};
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__corge).toBe(Clazz__corge);
                expect(obj.__corge).toBe(Clazz__corge);
                
                try {
                    Clazz.prototype.__foo = function () {};
                    expect(0).toBe(20);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(Clazz__foo);
                expect(obj.__foo).toBe(obj__foo);
                
                try {
                    YJS.core.Class.setPrivFn(Clazz.prototype, '__foo', function () {});
                    expect(0).toBe(30);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(Clazz__foo);
                expect(obj.__foo).toBe(obj__foo);
                
                try {
                    obj.__foo = function () {};
                    expect(0).toBe(40);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.__foo).toBe(obj__foo);
                
                try {
                    YJS.core.Class.setPrivFn(obj, '__foo', function () {});
                    expect(0).toBe(50);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.__foo).toBe(obj__foo);
                
                try {
                    obj.__foo = obj__foo;
                    expect(0).toBe(60);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.__foo).toBe(obj__foo);
                
                expect(function () {
                    // It is okay to redefine if nothing is effectively changed.
                    YJS.core.Class.setPrivFn(obj, '__foo', obj__foo);
                }).not.toThrow();
            });

            it("that can't be deleted", function () {
                try {
                    delete Clazz.prototype.__corge;
                    expect(0).toBe(70);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__corge).toBe(Clazz__corge);
                expect(obj.__corge).toBe(Clazz__corge);
                
                try {
                    delete Clazz.prototype.__foo;
                    expect(0).toBe(80);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(Clazz__foo);
                expect(obj.__foo).toBe(obj__foo);
                
                try {
                    delete obj.__bar;
                    expect(0).toBe(90);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.__bar).toBe(obj__bar);
                
                try {
                    delete obj.__foo;
                    expect(0).toBe(100);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.__foo).toBe(obj__foo);
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in Clazz.prototype) {
                    if (key == '__corge' || key == '__foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == '__bar' || key == '__foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });

        });

    });

    describe(".setProtFn", function () {
        
        var Clazz, Clazz_corge, Clazz_foo, obj, obj_bar, obj_foo;
        beforeEach(function () {
            Clazz = function () {};
            
            Clazz_corge = function () { return 'Clazz'; };
            YJS.core.Class.setProtFn(Clazz.prototype, '_corge', Clazz_corge);
            expect(Clazz.prototype.hasOwnProperty('_corge')).toBe(true);
            expect(typeof Clazz.prototype._corge).toBe('function');
            expect(Clazz.prototype._corge).toBe(Clazz_corge);
            
            Clazz_foo = function () { return 'Clazz'; };
            YJS.core.Class.setProtFn(Clazz.prototype, '_foo', Clazz_foo);
            expect(Clazz.prototype.hasOwnProperty('_foo')).toBe(true);
            expect(typeof Clazz.prototype._foo).toBe('function');
            expect(Clazz.prototype._foo).toBe(Clazz_foo);
        });
        
        describe("should define a function", function () {

            beforeEach(function () {
                obj = new Clazz();
                obj_bar = function () { return 'instance'; };
                obj_foo = function () { return 'instance'; };
                
                YJS.core.Class.setProtFn(obj, '_bar', obj_bar);
                expect(obj.hasOwnProperty('_bar')).toBe(true);
                expect(typeof obj._bar).toBe('function');
                expect(obj._bar).toBe(obj_bar);
                
                YJS.core.Class.setProtFn(obj, '_foo', obj_foo);
                expect(obj.hasOwnProperty('_foo')).toBe(true);
                expect(typeof obj._foo).toBe('function');
                expect(obj._foo).toBe(obj_foo);
            });

            it("that can be changed", function () {
                var new_Clazz_corge = function () {},
                    new_Clazz_foo = function () {},
                    new_obj_bar = function () {},
                    new_obj_foo = function () {};
                
                Clazz.prototype._corge = new_Clazz_corge;
                Clazz.prototype._foo = new_Clazz_foo;
                expect(obj._corge).toBe(new_Clazz_corge);
                
                obj._bar = new_obj_bar;
                obj._foo = new_obj_foo;
                expect(obj._bar).toBe(new_obj_bar);
                expect(obj._foo).toBe(new_obj_foo);
                
                YJS.core.Class.setProtFn(obj, '_bar', obj_bar);
                YJS.core.Class.setProtFn(obj, '_foo', obj_foo);
                expect(obj._bar).toBe(obj_bar);
                expect(obj._foo).toBe(obj_foo);
            });

            it("that can't be deleted", function () {
                try {
                    delete Clazz.prototype._corge;
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype._corge).toBe(Clazz_corge);
                expect(obj._corge).toBe(Clazz_corge);
                
                try {
                    delete Clazz.prototype._foo;
                    expect(0).toBe(20);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype._foo).toBe(Clazz_foo);
                expect(obj._foo).toBe(obj_foo);
                
                try {
                    delete obj._bar;
                    expect(0).toBe(30);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj._bar).toBe(obj_bar);
                
                try {
                    delete obj._foo;
                    expect(0).toBe(40);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj._foo).toBe(obj_foo);
            });

            it("that is enumerable", function () {
                var isEnumerable, key;
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == '_corge') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == '_foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == '_bar') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == '_foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

        });

    });

    describe(".setPubFn", function () {
        
        var Clazz, Clazz_corge, Clazz_foo, obj, obj_bar, obj_foo;
        beforeEach(function () {
            Clazz = function () {};
            
            Clazz_corge = function () { return 'Clazz'; };
            YJS.core.Class.setPubFn(Clazz.prototype, 'corge', Clazz_corge);
            expect(Clazz.prototype.hasOwnProperty('corge')).toBe(true);
            expect(typeof Clazz.prototype.corge).toBe('function');
            expect(Clazz.prototype.corge).toBe(Clazz_corge);
            
            Clazz_foo = function () { return 'Clazz'; };
            YJS.core.Class.setPubFn(Clazz.prototype, 'foo', Clazz_foo);
            expect(Clazz.prototype.hasOwnProperty('foo')).toBe(true);
            expect(typeof Clazz.prototype.foo).toBe('function');
            expect(Clazz.prototype.foo).toBe(Clazz_foo);
        });
        
        describe("should define a function", function () {
            
            beforeEach(function () {
                obj = new Clazz();
                obj_bar = function () { return 'instance'; };
                obj_foo = function () { return 'instance'; };
                
                YJS.core.Class.setPubFn(obj, 'bar', obj_bar);
                expect(obj.hasOwnProperty('bar')).toBe(true);
                expect(typeof obj.bar).toBe('function');
                expect(obj.bar).toBe(obj_bar);
                
                YJS.core.Class.setPubFn(obj, 'foo', obj_foo);
                expect(obj.hasOwnProperty('foo')).toBe(true);
                expect(typeof obj.foo).toBe('function');
                expect(obj.foo).toBe(obj_foo);
            });
            
            it("that can be changed", function () {
                var new_Clazz_corge = function () {},
                    new_Clazz_foo = function () {},
                    new_obj_bar = function () {},
                    new_obj_foo = function () {};
                
                Clazz.prototype.corge = new_Clazz_corge;
                Clazz.prototype.foo = new_Clazz_foo;
                expect(obj.corge).toBe(new_Clazz_corge);
                
                obj.bar = new_obj_bar;
                obj.foo = new_obj_foo;
                expect(obj.bar).toBe(new_obj_bar);
                expect(obj.foo).toBe(new_obj_foo);
                
                YJS.core.Class.setPubFn(obj, 'bar', obj_bar);
                YJS.core.Class.setPubFn(obj, 'foo', obj_foo);
                expect(obj.bar).toBe(obj_bar);
                expect(obj.foo).toBe(obj_foo);
            });

            it("that can't be deleted", function () {
                try {
                    delete Clazz.prototype.corge;
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.corge).toBe(Clazz_corge);
                expect(obj.corge).toBe(Clazz_corge);
                
                try {
                    delete Clazz.prototype.foo;
                    expect(0).toBe(20);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.foo).toBe(Clazz_foo);
                expect(obj.foo).toBe(obj_foo);
                
                try {
                    delete obj.bar;
                    expect(0).toBe(30);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.bar).toBe(obj_bar);
                
                try {
                    delete obj.foo;
                    expect(0).toBe(40);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(obj.foo).toBe(obj_foo);
            });

            it("that is enumerable", function () {
                var isEnumerable, key;
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == 'corge') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == 'bar') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

        });

    });

    describe(".addMembers", function () {

        var Clazz, obj;
        beforeEach(function () {
            Clazz = function () {};
        });

        describe("should add properties", function () {

            beforeEach(function () {
                YJS.core.Class.addMembers(Clazz, {
                    bar: 'bar'
                });
                obj = new Clazz();
                expect(obj.hasOwnProperty('bar')).toBe(false);
                expect(Clazz.prototype.hasOwnProperty('bar')).toBe(true);
                expect(typeof obj.bar).toBe('string');
                expect(obj.bar).toBe('bar');
            });

            it("that can have the default value hidden and then revealed by deleting own property", function () {
                obj.bar = 'baz';
                expect(obj.hasOwnProperty('bar')).toBe(true);
                expect(obj.bar).toBe('baz');
                delete obj.bar;
                expect(obj.hasOwnProperty('bar')).toBe(false);
                expect(obj.bar).toBe('bar');
            });

        });

        describe("should add private functions", function () {

            beforeEach(function () {
                YJS.core.Class.addMembers(Clazz, {
                    __foo: function () {}
                });
                obj = new Clazz();
                expect(obj.hasOwnProperty('__foo')).toBe(false);
                expect(Clazz.prototype.hasOwnProperty('__foo')).toBe(true);
                expect(typeof obj.__foo).toBe('function');
                expect(obj.__foo).toBe(Clazz.prototype.__foo);
            });

            it("that can't be changed", function () {
                var __foo = Clazz.prototype.__foo;
                try {
                    Clazz.prototype.__foo = __foo;
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(__foo);
                expect(obj.__foo).toBe(__foo);

                try {
                    Clazz.prototype.__foo = function () {};
                    expect(0).toBe(20);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(__foo);
                expect(obj.__foo).toBe(__foo);

                expect(function () {
                    // It is okay to redefine if nothing is effectively changed.
                    YJS.core.Class.setPrivFn(Clazz.prototype, '__foo', __foo);
                    YJS.core.Class.addMembers(Clazz, {
                        __foo: __foo
                    });
                }).not.toThrow();

                try {
                    YJS.core.Class.setPrivFn(Clazz.prototype, '__foo', function () {});
                    expect(0).toBe(30);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(__foo);
                expect(obj.__foo).toBe(__foo);

                try {
                    YJS.core.Class.addMembers(Clazz, {
                        __foo: function () {}
                    });
                    expect(0).toBe(40);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(__foo);
                expect(obj.__foo).toBe(__foo);
            });

            it("that can't be deleted", function () {
                var __foo = Clazz.prototype.__foo;
                try {
                    delete Clazz.prototype.__foo;
                    expect(0).toBe(50);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.__foo).toBe(__foo);
                
                expect(obj.__foo).toBe(__foo);
                delete obj.__foo;
                expect(obj.__foo).toBe(__foo);
                expect(obj.hasOwnProperty('__foo')).toBe(false);
                expect(Clazz.prototype.hasOwnProperty('__foo')).toBe(true);
            });

            it("that is not enumerable", function () {
                var isEnumerable = false, key;
                for (key in obj) {
                    if (key == '__foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == '__foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(false);
            });
/* Some browsers throw an error when hiding the private function and some don't.
            it("that can't be hidden", function () {
                var __foo = function () {};
                
                expect(function () {
                    obj.__foo = __foo;
                }).toThrow();
                expect(obj.hasOwnProperty('__foo')).toBe(false);
                expect(Clazz.prototype.hasOwnProperty('__foo')).toBe(true);
                expect(typeof obj.__foo).toBe('function');
                expect(obj.__foo).toBe(Clazz.prototype.__foo);
            });
*/
        });

        describe("should add protected functions", function () {

            var Clazz_foo;
            beforeEach(function () {
                Clazz_foo = function () { return 'Clazz'; };
                YJS.core.Class.addMembers(Clazz, {
                    _foo: Clazz_foo
                });
                obj = new Clazz();
                expect(obj.hasOwnProperty('_foo')).toBe(false);
                expect(Clazz.prototype.hasOwnProperty('_foo')).toBe(true);
                expect(typeof obj._foo).toBe('function');
                expect(obj._foo).toBe(Clazz_foo);
            });

            it("that can be changed", function () {
                var new_Clazz_foo = function () {},
                    new_obj_foo = function () {};
                
                Clazz.prototype._foo = new_Clazz_foo;
                expect(obj._foo).toBe(new_Clazz_foo);
                
                obj._foo = new_obj_foo;
                expect(obj._foo).toBe(new_obj_foo);
            });

            it("that can't be deleted", function () {
                try {
                    delete Clazz.prototype._foo;
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype._foo).toBe(Clazz_foo);
                expect(obj._foo).toBe(Clazz_foo);
                
                expect(function () {
                    delete obj._foo;
                }).not.toThrow();
                expect(obj._foo).toBe(Clazz_foo);
            });

            it("that is enumerable", function () {
                var isEnumerable, key;
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == '_foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == '_foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that can be hidden", function () {
                var _foo = function () {};
                
                obj._foo = _foo;
                expect(obj.hasOwnProperty('_foo')).toBe(true);
                expect(Clazz.prototype.hasOwnProperty('_foo')).toBe(true);
                expect(typeof obj._foo).toBe('function');
                expect(obj._foo).not.toBe(Clazz.prototype._foo);
            });

        });

        describe("should add public functions", function () {

            var Clazz_foo;
            beforeEach(function () {
                Clazz_foo = function () { return 'Clazz'; };
                YJS.core.Class.addMembers(Clazz, {
                    foo: Clazz_foo
                });
                expect(Clazz.prototype.hasOwnProperty('foo')).toBe(true);
                expect(typeof Clazz.prototype.foo).toBe('function');
                expect(Clazz.prototype.foo).toBe(Clazz_foo);
                
                obj = new Clazz();
                expect(obj.hasOwnProperty('foo')).toBe(false);
                expect(typeof obj.foo).toBe('function');
                expect(obj.foo).toBe(Clazz_foo);
            });

            it("that can be changed", function () {
                var new_Clazz_foo = function () {},
                    new_obj_foo = function () {};
                
                Clazz.prototype.foo = new_Clazz_foo;
                expect(obj.foo).toBe(new_Clazz_foo);
                
                obj.foo = new_obj_foo;
                expect(obj.foo).toBe(new_obj_foo);
            });

            it("that can't be deleted", function () {
                try {
                    delete Clazz.prototype.foo;
                    expect(0).toBe(10);
                } catch (e) {
                    expect(e instanceof TypeError).toBe(true);
                }
                expect(Clazz.prototype.foo).toBe(Clazz_foo);
            });

            it("that is enumerable", function () {
                var isEnumerable, key;
                
                isEnumerable = false;
                for (key in Clazz.prototype) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
                
                isEnumerable = false;
                for (key in obj) {
                    if (key == 'foo') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that can be hidden", function () {
                // TODO: Finish implementation.
            });

        });

    });

    describe(".addStatics", function () {

        var Clazz, obj;
        beforeEach(function () {
            Clazz = function () {};
        });

        describe("should add static properties", function () {

            beforeEach(function () {
                YJS.core.Class.addStatics(Clazz, {
                    bar: 'bar',
                    FOO: 'foo'
                });
                obj = new Clazz();
                expect(Clazz.hasOwnProperty('bar')).toBe(true);
                expect(Clazz.prototype.hasOwnProperty('bar')).toBe(false);
                expect(typeof obj.bar).toBe('undefined');
                expect(Clazz.bar).toBe('bar');
                expect(obj.bar).toBeUndefined();
            });

            it("that may be changed", function () {
                Clazz.bar = 'foo';
                expect(Clazz.bar).toBe('foo');

                YJS.core.Class.addStatics(Clazz, {
                    bar: 'qux'
                });
                expect(Clazz.bar).toBe('qux');
            });

            it("that may be redefined", function () {
                var fooFn = function foo() {},
                    quxFn = function qux() {};
                
                Clazz.bar = fooFn;
                expect(Clazz.bar).toBe(fooFn);
                
                YJS.core.Class.addStatics(Clazz, {
                    bar: quxFn
                });
                expect(Clazz.bar).toBe(quxFn);
            });

            it("that may be deleted", function () {
                delete Clazz.bar;
                expect(Clazz.bar).toBeUndefined();
            });

            it("that are enumerable", function () {
                var isEnumerable = false, key;
                for (key in Clazz) {
                    if (key == 'bar') { isEnumerable = true; break; }
                }
                expect(isEnumerable).toBe(true);
            });

            it("that may not be changed", function () {
                expect(function () {
                    Clazz.FOO = 'qux';
                }).toThrow();
                expect(Clazz.FOO).toBe('foo');

                expect(function () {
                    YJS.core.Class.addStatics(Clazz, {
                        FOO: 'qux'
                    });
                }).toThrow();
                expect(Clazz.FOO).toBe('foo');
            });

        });

    });

    describe(".extend", function () {
    
        it("should extend classes", function () {
            var baseClazz = YJS.core.Base,
                subClazz, subObj;
            
            subClazz = function () {};
            YJS.core.Class.extend(baseClazz, subClazz);
            
            expect(subClazz.$isClazz).toBe(true);
            expect(subClazz.$superclazz).toBe(baseClazz);
            
            subObj = new subClazz();
            
            expect(subObj.constructor).toBe(subClazz);
            expect(subObj.constructor.$isClazz).toBe(true);
            expect(subObj.constructor.$superclazz).toBe(baseClazz);
            expect(subObj.$clazz).toBe(subClazz);
            expect(subObj.$clazz.$isClazz).toBe(true);
            expect(subObj.$clazz.$superclazz).toBe(baseClazz);
            expect(subObj.$superclazz).toBe(baseClazz);
        });

    });

/*

Object
Vehicle.$isClazz === true
Vehicle.$superclazz === Object
Vehicle.prototype.$clazz === Vehicle
Vehicle.prototype.constructor === Vehicle
Vehicle.prototype._initialize === function () {
    this.type = 'vehicle';
}; 

Car.$isClazz === true
Car.$superclazz === Vehicle
Car.prototype.$clazz === Car
Car.prototype.constructor === Car
Car.prototype._initialize === function (cfgs) {
    //this.$clazz.$superclazz.prototype._initialize.apply(this);
    this.$super();
    this.type = 'car';
    this.model = cfgs.model;
    ...
}

HotRod.$isClazz === true
HotRod.$superclazz === Car
HotRod.prototype.$clazz === HotRod
HotRod.prototype.constructor === HotRod
HotRod.prototype._initialize === function (cfgs) {
    //this.$clazz.$superclazz.prototype._initialize.apply(this, arguments);
    this.$super.apply(this, arguments);
    this.engine = 'V8';
    ...
};


*/

});

})(this);
