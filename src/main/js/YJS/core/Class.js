
/**
 * @singleton
 * @class YJS.core.Class
 * A helper class for defining object oriented like classes in JavaScript.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    __create$superPreparer, _setConst, _setFinalPubFn, _setFn, _setPrivFn, _setProtFn, _setPubFn,
    $superRegEx, YJS_core_Class;

_setConst = YJS.__.tmp._setConst;
_setFinalPubFn = YJS.__.tmp._setFinalPubFn;
_setPrivFn = YJS.__.tmp._setPrivFn;
_setProtFn = YJS.__.tmp._setProtFn;
_setPubFn = YJS.__.tmp._setPubFn;

// Delete the temporary references. Code following the definition of YJS.core.Class must start using
// YJS.core.Class.setConst, YJS.core.Class.setPrivFn, YJS.core.Class.setProtFn, and YJS.core.Class.setPubFn.
delete YJS.__.tmp._setConst;
delete YJS.__.tmp._setFinalPubFn;
delete YJS.__.tmp._setPrivFn;
delete YJS.__.tmp._setProtFn;
delete YJS.__.tmp._setPubFn;

NS.Class = YJS_core_Class = {
    // Until the logging system is defined, temporarily set to a stand-in log.
    $LOG: YJS.__.tmp.LOG
};

$superRegEx = YJS.__.supports.fnToString ? /(\.\$super\s*\()|(\.\$super\.(apply|call)\()/ : /.+/;

// ==========================================================================
/*
 * The idea behind the following came from http://ejohn.org/blog/simple-javascript-inheritance/ which easily allows
 * methods to contain code like `this.$super(...)` to be able to call the superclass's super method. Alternative
 * techniques included adding a '$name' property to all the methods in the class and when `this.$super` was called,
 * a name lookup was done via `arguments.callee.caller.$name`. However, `arguments.callee` is not allowed in strict mode
 * and Function.caller is non-standard.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee and
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller for details.
 */
__create$superPreparer = function (fnName, fn) {
    var contains$super = $superRegEx.test(fn),
        superPreparerFn;

    superPreparerFn = !contains$super ? fn : function $superPreparer() {
        var SELF = this, restore$super = false,
            $super, retVal;

        if (SELF.hasOwnProperty('$super')) {
            restore$super = true;
            $super = SELF.$super;
        }
        try {
            // 
            SELF.$super = SELF.$superclazz.prototype[fnName];

            SELF.$super = typeof SELF.$super == 'function' && SELF !== fn ? SELF.$super : YJS.noopFn;

            retVal = fn.apply(SELF, arguments);
        } finally {
            if (restore$super) {
                SELF.$super = $super;
            }
            return retVal;
        }
    };
    return superPreparerFn;
};

// ==========================================================================
_setFn = function (obj, fnName, fn) {
    fn = __create$superPreparer(fnName, fn);
    if (fnName.search(/^__[^_]+/) !== -1) {
        _setPrivFn(obj, fnName, fn);
    } else if (fnName.search(/^_[^_]+/) !== -1) {
        _setProtFn(obj, fnName, fn);
    } else {
        _setPubFn(obj, fnName, fn);
    }
};

// ==========================================================================
/*
 * @private
 * @method createCtor
 * Creates a new constructor function with the specified name. The constructor will call a function named
 * `_initialize` if it exists.
 * 
 * @param {String} simpleName The name of the constructor. Must not be `null`.
 * 
 * @return {Function} the new constructor function.
 * @return {true} return.$isClazz A flag indicating that this function represents a constructor for a class.
 * @return {String} return.$simpleName The name of the constructor. May prove useful for debugging.
 */
_setFinalPubFn(YJS_core_Class, 'createCtor', function (simpleName) {
    var code, ctor, evil;
    
    simpleName = simpleName || "";

    if (simpleName.length > 0 && !simpleName.match(/[$a-z_][$\w]*/i)) {
        throw new TypeError('`simpleName` contains illegal characters. Must be a valid JavaScript identifier.');
    }

    // A way to use eval without JSLint or JSHint from whining.
    evil = GBL['eval'];
    code = [];
    code.push("(function () {");
    code.push("\treturn function " + simpleName + "() {");
    code.push(    "\t\tif (typeof this._initialize == 'function') {");
    code.push(        "\t\t\tthis._initialize.apply(this, arguments);");
    code.push(    "\t\t}");
    code.push("\t};");
    code.push("})();");
    code = code.join("\r\n");
    ctor = evil(code);
    _setConst(ctor, '$isClazz', true);
    _setConst(ctor, '$simpleName', simpleName);
    
    return ctor;
});

// ==========================================================================
/**
 * @method setConst
 * Adds a constant to the specified object.
 * 
 *     Foo = {};
 *     ...
 *     YJS.core.Class.setConst(Foo, 'BAR', 'bar');
 *     console.log(Foo.BAR); // 'bar'
 *     Foo.BAR = 'qux'; // Throws error in strict mode.
 *     console.log(Foo.BAR); // 'bar'
 *     delete Foo.BAR; // Throws error in strict mode.
 * 
 * @param {Object} obj The object to add the constant to.
 * @param {String} constName The name of the constant to set. Must not contain lowercase letters.
 * @param {Mixed} [value=undefined] The value of the constant. It may be any value except a function -- be it a
 *   primitive, an object, etc. Because objects are mutable, unless frozen or sealed, the properties of the could
 *   be changed. For function 'properties', use #setPubFn, #setProtFn, or #setPrivFn instead.
 */
_setFinalPubFn(YJS_core_Class, 'setConst', _setConst);

// ==========================================================================
/**
 * @method setPrivFn
 * Adds a 'private' function to the specified object. It is private in the sense that it will not be enumerable, it
 * can't be redefined, and it is required to be named with double underscores.
 * 
 *     Foo = function ();
 *     ...
 *     YJS.core.Class.setPrivFn(Foo.prototype, '__doSomethingPrivate', function () {
 *         // Logic to do something private goes here.
 *     });
 *     
 *     for (var key in Foo.prototype) {
 *         // Won't log '__doSomethingPrivate' because it is not enumerable.
 *         console.log(key);
 *     }
 *     ...
 *     var foo = new Foo();
 *     // The following is still possible because JavaScript doesn't have true private
 *     // functions. And the closure trick to effectively create private functions is
 *     // not employed.
 *     foo.__doSomethingPrivate();
 * 
 * @param {Object} obj The object to add the private function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must begin with double underscores.
 * @param {Function} fn The private function.
 */
_setFinalPubFn(YJS_core_Class, 'setPrivFn', _setPrivFn);

// ==========================================================================
/**
 * @method setProtFn
 * Adds a 'protected' function to the specified object. It is protected in the sense that its name is required to begin
 * with a single underscore. Protected functions are enumerable since they are apart of the public API.
 * 
 *     Foo = function ();
 *     ...
 *     YJS.core.Class.setProtFn(Foo.prototype, 'initialize', function () {
 *         // Logic to initialize Foo goes here.
 *         this.initialize = YJS.notAgainFn; // Still can be hidden in object instance.
 *     });
 *     ...
 *     YJS.core.Class.setProtFn(Foo.prototype, '_findBar', function () {
 *         // Logic to find bar goes here.
 *     });
 * 
 * @param {Object} obj The object to add the protected function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must begin with a single underscore.
 * @param {Function} fn The protected function.
 */
_setFinalPubFn(YJS_core_Class, 'setProtFn', _setProtFn);

// ==========================================================================
/**
 * @method setPubFn
 * Adds a public function to the specified object. Public functions are enumerable since they are apart of the
 * public API.
 * 
 *     Foo = function ();
 *     ...
 *     YJS.core.Class.setPubFn(Foo.prototype, 'initialize', function () {
 *         // Logic to initialize Foo goes here.
 *         this.initialize = YJS.notAgainFn; // Still can be hidden in object instance.
 *     });
 *     ...
 *     YJS.core.Class.setPubFn(Foo.prototype, 'findBar', function () {
 *         // Logic to find bar goes here.
 *     });
 * 
 * @param {Object} obj The object to add the public function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must not begin with any underscores.
 * @param {Function} fn The public function.
 */
_setFinalPubFn(YJS_core_Class, 'setPubFn', _setPubFn);

// ==========================================================================
/**
 * @private
 * @method __addMembers
 * Adds members to the specified object.
 * 
 * @param {Object} obj
 * @param {Object} members
 */
_setPrivFn(YJS_core_Class, '__addMembers', function (obj, members) {
    var name, member;

    for (name in members) {
        if (members.hasOwnProperty(name)) {
            member = members[name];

            if (name.search(/^[$_A-Z]+$/) !== -1) {
                _setConst(obj, name, member);
            } else {
                if (typeof member == 'function') {
                    _setFn(obj, name, member);
                } else {
                    obj[name] = member;
                }
            }
        }
    }
});

// ==========================================================================
/**
 * @method addMembers
 * Adds members to the specified class's prototype.
 * 
 *     Foo = function (...) { ... };
 *     YJS.core.Class.addMembers(Foo, {
 *         bar: function () { return 'bar'; },
 *         baz: 'qux',
 *         CORGE: 'constant',
 *         public: function (...) { ... },
 *         _protected: function (...) { ... },
 *         __private: function (...) { ... },
 *         ...
 *     });
 *     var foo = new Foo();
 *     console.log(foo.bar()); // 'bar'
 *     console.log(foo.baz); // 'qux'
 *     console.log(foo.CORGE); // 'constant'
 *     foo.CORGE = 'qux'; // Throws error.
 * 
 * @param {Function} Clazz The class to have members added to the prototype.
 * @param {Object} members The members to add. The key/value pairs represent the member-name/member-value.
 */
_setFinalPubFn(YJS_core_Class, 'addMembers', function (Clazz, members) {
// @if DEBUG
    if (typeof Clazz != 'function') {
        throw new TypeError('`Clazz` must be a constructor function.');
    }
// @endif
    YJS.core.Class.__addMembers(Clazz.prototype, members);
});

// ==========================================================================
/**
 * @method addStatics
 * Adds static members to the specified class.
 * 
 *     Foo = function (...) { ... };
 *     YJS.core.Class.addStatics(Foo, {
 *         bar: function () { return 'bar'; },
 *         BAZ: 'qux',
 *         ...
 *     });
 *     console.log(Foo.bar()); // 'bar'
 *     console.log(Foo.BAZ); // 'qux'
 * 
 * @param {Function} Clazz The class to have static members added.
 * @param {Object} members The members to add. The key/value pairs represent the member-name/member-value.
 */
_setFinalPubFn(YJS_core_Class, 'addStatics', function (Clazz, members) {
// @if DEBUG
    if (typeof Clazz != 'function') {
        throw new TypeError('`Clazz` must be a constructor function.');
    }
// @endif
    YJS.core.Class.__addMembers(Clazz, members);
});

// ==========================================================================
/**
 * @method extend
 * Makes a class extend a superclass.
 * 
 *     var BaseClass = function () { ... };
 *     BaseClass.prototype.foo = function () { return 'foo'; };
 *     BaseClass.prototype.bar = "Bar";
 *     var DerivedClass = function () { ... };
 *     YJS.core.Class.extend(BaseClass, DerivedClass);
 *     var obj = new DerivedClass();
 *     console.log(obj.foo()); // "foo";
 *     console.log(obj.bar); // "Bar";
 *     obj.constructor; // Reference to the class that defined obj.
 *     obj.$clazz; // Reference to the class that defined obj, DerivedClass.
 *     obj.$superclazz; // Shortcut reference to the superclass, BaseClass.
 *     obj.constructor.$superclazz; // Reference to the superclass, BaseClass.
 *     obj.$clazz.$superclazz; // Reference to the superclass, BaseClass.
 *     DerivedClass.$isClazz; // true
 *     DerivedClass.$superclazz; // Reference to the superclass, BaseClass.
 * 
 * NOTE: The Class's prototype property will be an instance of the specified superclass after calling this method.
 * 
 * @param {Function} SuperClazz The constructor function of the superclass.
 * @param {Function} Clazz The constructor function of class extending the superclass.
 */
_setFinalPubFn(YJS_core_Class, 'extend', function (SuperClazz, Clazz) {
    var setConst = YJS.core.Class.setConst,
        _initialize, Clazz_prototype, restoreInitializer;

    if (Clazz.$isClazz === true && Clazz.$superclazz === SuperClazz) {
// @if DEBUG
        YJS.core.Class.$LOG.warn('' + Clazz + ' already extends ' + SuperClazz + '.');
// @endif
        return;
    }
    setConst(Clazz, '$isClazz', true);
    setConst(Clazz, '$superclazz', SuperClazz);

    // The following idea to skip initialization when instantiating the superclass came from
    // http://ejohn.org/blog/simple-javascript-inheritance/. Since we don't care about the superclass being
    // initialized for the purpose of using the instance as the prototype of the subclass, we can skip a lot of
    // unnecessary CPU cycles. We have no idea what is in the superclass constructor. It could be making some AJAX
    // call to the server.
    restoreInitializer = false;
    if (typeof SuperClazz.prototype._initialize == 'function') {
        restoreInitializer = true;
        _initialize = SuperClazz.prototype._initialize;
        SuperClazz.prototype._initialize = YJS.noopFn;
    }
    try {
        Clazz.prototype = new SuperClazz();
    } finally {
        if (restoreInitializer) {
            SuperClazz.prototype._initialize = _initialize;
        }
    }
    Clazz_prototype = Clazz.prototype;

    setConst(Clazz_prototype, 'constructor', Clazz);
    setConst(Clazz_prototype, '$clazz', Clazz);
    setConst(Clazz_prototype, '$superclazz', SuperClazz);

});

})(this, YJS, 'YJS.core');

// ##################################################################################################################
