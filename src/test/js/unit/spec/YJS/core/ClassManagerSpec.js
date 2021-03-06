
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("YJS.core.ClassManager", function () {

    describe(".define", function () {

        beforeEach(function () {
            GBL.Test = undefined;
        });

        it("should allow new classes to be defined", function () {
            var car;

            YJS.core.ClassManager.define('Test.test.Car', {
                _initialize: function (config) {
                    config = config || {};
                    this.model = config.model || "unknown";
                    this._initialize = YJS.notAgainFn;
                },
                drive: function () {
                    return 'driving';
                }
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Car, 'Car', 'Test.test.Car', YJS.core.Base);

            car = new Test.test.Car({
                model: 'Ford'
            });

            expect(car).toBeDefined();
            expect(car.hasOwnProperty('$clazz')).toBe(false); // $clazz should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('$clazz')).toBe(true);
            expect(car.$clazz).toBe(Test.test.Car);
            expect(car.hasOwnProperty('constructor')).toBe(false); // constructor should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('constructor')).toBe(true);
            expect(car.constructor).toBe(Test.test.Car);
            expect(car.hasOwnProperty('$superclazz')).toBe(false); // $superclazz should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('$superclazz')).toBe(true);
            expect(car.$superclazz).toBe(YJS.core.Base);
            expect(Test.test.Car.prototype.hasOwnProperty('drive')).toBe(true);
            expect(typeof car.drive).toBe('function');
            expect(car.drive()).toEqual('driving');
            expect(car.model).toEqual('Ford');
        });

        it("should allow new classes to be defined with a function that returns a class definition", function () {
            var car;

            YJS.core.ClassManager.define('Test.test.Car', function () {
                var status = 'stopped';
                return {
                    _initialize: function (config) {
                        config = config || {};
                        this.model = config.model || "unknown";
                    },
                    crash: function () {
                        status = 'crashed';
                    },
                    drive: function () {
                        status = 'driving';
                    },
                    status: function () {
                        return status;
                    }
                }
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Car, 'Car', 'Test.test.Car', YJS.core.Base);

            car = new Test.test.Car({
                model: 'Ford'
            });

            expect(car).toBeDefined();
            expect(car.hasOwnProperty('$clazz')).toBe(false); // $clazz should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('$clazz')).toBe(true);
            expect(car.$clazz).toBe(Test.test.Car);
            expect(car.hasOwnProperty('constructor')).toBe(false); // constructor should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('constructor')).toBe(true);
            expect(car.constructor).toBe(Test.test.Car);
            expect(car.hasOwnProperty('$superclazz')).toBe(false); // $superclazz should be on the prototype
            expect(Test.test.Car.prototype.hasOwnProperty('$superclazz')).toBe(true);
            expect(car.$superclazz).toBe(YJS.core.Base);
            expect(Test.test.Car.prototype.hasOwnProperty('drive')).toBe(true);
            expect(car.model).toEqual('Ford');
            expect(car.status()).toEqual('stopped');
            car.drive();
            expect(car.status()).toEqual('driving');
            car.crash();
            expect(car.status()).toEqual('crashed');
        });

        it("should allow new classes to be defined with a callback function when the class definition process is finished", function () {
            var car;

            YJS.core.ClassManager.define('Test.test.Car', {
                _initialize: function (config) {
                    config = config || {};
                    this.model = config.model || "unknown";
                },
                drive: function () {
                    return 'driving';
                }
            }, function (Clazz) {
                expect(Test.test.Car).toBeDefined();
                expect(Clazz).toBe(Test.test.Car);
                Clazz.destroy = function (car) {
                    // ...
                };
                Clazz.prototype.extra = 'xtra';
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Car, 'Car', 'Test.test.Car', YJS.core.Base);
            expect(Test.test.Car.hasOwnProperty('destroy')).toBe(true);
            expect(typeof Test.test.Car.destroy).toBe('function');

            car = new Test.test.Car({
                model: 'Ford'
            });

            expect(car).toBeDefined();
            expect(car.constructor).toBe(Test.test.Car);
            expect(car.drive).toBeDefined();
            expect(typeof car.drive).toBe('function');
            expect(car.drive()).toEqual('driving');
            expect(car.model).toEqual('Ford');
            expect(car.extra).toEqual('xtra');
        });

        it("should allow new classes to be defined with static members.", function () {
            var car;

            YJS.core.ClassManager.define('Test.test.Math', {
                $statics: {
                    add: function (a, b) {
                        return a + b;
                    },
                    PI: 3.14159
                }
            }, function (Clazz) {
                YJS.core.Class.addStatics(Clazz, {
                    E: 2.71828
                });
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Math, 'Math', 'Test.test.Math', YJS.core.Base);
            expect(Test.test.Math.add).toBeDefined();
            expect(typeof Test.test.Math.add).toBe('function');
            expect(Test.test.Math.add(1, 2)).toBe(3);          
            expect(Test.test.Math.hasOwnProperty('E')).toBe(true);
            expect(Test.test.Math.E).toBe(2.71828);
            expect(Test.test.Math.hasOwnProperty('PI')).toBe(true);
            expect(Test.test.Math.PI).toBe(3.14159);
            expect(function () {
                Test.test.Math.PI = 3.14;
            }).toThrow();
            expect(Test.test.Math.PI).toBe(3.14159);
            expect(function () {
                Test.test.Math.E = 2.71828;
            }).toThrow();
            expect(Test.test.Math.E).toBe(2.71828);
        });

        it("should allow classes to be extended.", function () {
            var car, clazzDef, hotRod, vehicle;

            YJS.core.ClassManager.define('Test.test.Vehicle', {
                _initialize: function Vehicle(config) {
                    config = config || {};
                    this.make = config.make || "unknown";
                },
                getMake: function () {
                    return this.make;
                }
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Vehicle, 'Vehicle', 'Test.test.Vehicle', YJS.core.Base);

            vehicle = new Test.test.Vehicle({
                make: 'Acme'
            });
          
            expect(vehicle).toBeDefined();
            expect(vehicle.constructor).toBe(Test.test.Vehicle);
            expect(vehicle.$clazz).toBe(Test.test.Vehicle);
            expect(vehicle.$superclazz).toBe(YJS.core.Base);
            expect(typeof vehicle.getMake).toBe('function');
            expect(vehicle.getMake()).toEqual('Acme');

            // Test.test.Car deliberately does not have an _initialize method.
            YJS.core.ClassManager.define('Test.test.Car', {
                $extend: 'Test.test.Vehicle',

                // Intentionally doesn't define an _initialize method so we can test Test.test.HotRod#_initialize and the $super method.
                drive: function () {
                    return 'driving';
                }
            });

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Car, 'Car', 'Test.test.Car', Test.test.Vehicle);

            car = new Test.test.Car({
                make: 'Ford'
            });

            expect(car).toBeDefined();
            expect(car.$clazz).toBe(Test.test.Car);
            expect(car.constructor).toBe(Test.test.Car);
            expect(car.getMake).toBeDefined();
            expect(typeof car.getMake).toBe('function');
            expect(car.getMake()).toEqual('Ford');
            expect(car.drive).toBeDefined();
            expect(typeof car.drive).toBe('function');
            expect(car.drive()).toEqual('driving');

            clazzDef = {
                $extend: 'Test.test.Car',

                _initialize: function HotRod(config) {
                    this.$super.apply(this, arguments);
                    config = config || {};
                    this.model = config.model || "unknown";
                },
                getMake: function () {
                    var make = this.$super();
                    return make + ' Racing';
                },
                getModel: function () {
                    return this.model;
                },
                goFast: function () {
                    return 'vrmmmmm!';
                }
            };
            YJS.core.ClassManager.define('Test.test.HotRod', clazzDef);

            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.HotRod, 'HotRod', 'Test.test.HotRod', Test.test.Car);

            hotRod = new Test.test.HotRod({
                make: 'Ford',
                model: 'Mustang'
            });

            expect(hotRod).toBeDefined();
            expect(hotRod.constructor).toBe(Test.test.HotRod);
            expect(hotRod.$clazz).toBe(Test.test.HotRod);
            expect(hotRod.$superclazz).toBe(Test.test.Car);

            expect(typeof hotRod.getMake).toBe('function');
            expect(hotRod.getMake()).toEqual('Ford Racing');

            expect(typeof hotRod.drive).toBe('function');
            expect(hotRod.drive()).toEqual('driving');

            expect(typeof hotRod.getModel).toBe('function');
            expect(hotRod.getModel()).toEqual('Mustang');

            expect(typeof hotRod.goFast).toBe('function');
            expect(hotRod.goFast()).toEqual('vrmmmmm!');

            expect(hotRod.getMake).not.toBe(Test.test.Vehicle.prototype.getMake);
            expect(hotRod.getMake).not.toBe(Test.test.Car.prototype.getMake);
            expect(hotRod.drive).toBe(Test.test.Car.prototype.drive);
            expect(hotRod.getModel).toBe(Test.test.HotRod.prototype.getModel);
            expect(hotRod.goFast).toBe(Test.test.HotRod.prototype.goFast);

            // The following tests are probably too implementation specific.
            expect(hotRod.getMake).not.toBe(clazzDef.getMake);
        });

        it("should allow new classes to be defined with members having names that match with special declaration names via the `$members` declaration", function () {
            var car;

            YJS.core.ClassManager.define('Test.test.Car', {
                $extend: 'Object',
                $statics: {
                    TYPE: 'car'
                },
                $members: {
                    $extend: 'extend',
                    $members: 'members',
                    $mixins: 'mixins',
                    $requires: 'requires',
                    $singleton: 'singleton',
                    $statics: 'statics',
                    $uses: 'uses'
                },
                drive: function () {
                    return 'driving';
                }
            });
            YJSHelper.expectToHaveConst$isNamespace(Test);
            YJSHelper.expectToHaveConst$isNamespace(Test.test);
            YJSHelper.expectToHavePropertiesOfAClass(Test.test.Car, 'Car', 'Test.test.Car', Object);
            expect(Test.test.Car.TYPE).toBe('car');

            car = new Test.test.Car();

            expect(car).toBeDefined();
            expect(typeof car.drive).toBe('function');
            expect(car.drive()).toEqual('driving');
            expect(car.$extend).toEqual('extend');
            expect(car.$members).toEqual('members');
            expect(car.$mixins).toEqual('mixins');
            expect(car.$requires).toEqual('requires');
            expect(car.$singleton).toEqual('singleton');
            expect(car.$statics).toEqual('statics');
            expect(car.$uses).toEqual('uses');
        });

    });

});

})(this);
