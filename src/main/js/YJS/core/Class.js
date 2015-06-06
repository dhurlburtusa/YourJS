/*
 * @dependency YJS/core/_bootstrap.js
 *
 * @uses YJS.__.supports.fnToString
 * @uses YJS.__.tmp.LOG
 */

/**
 * @singleton
 * @class YJS.core.Class
 * A helper class for defining object oriented like classes in JavaScript.
 */
(function (GBL, YJS) {

// @if STRICT
"use strict";
// @endif

var __create$superPreparer, $superRegEx, YJS_core_Class;

// @if DEBUG
    if (typeof Object.defineProperty != 'function') {
        GBL.console.error('YJS.core.Class depends on `Object.defineProperty`. Some older browsers do NOT support this function. Consider adding a polyfill like `es5-shim` to fulfill this missing dependency.');
    }
// @endif

YJS.core.Class = YJS_core_Class = {
    // Until the logging system is defined, temporarily set to a stand-in log.
    $LOG: YJS.__.tmp.LOG
};

$superRegEx = YJS.__.supports.fnToString ? /(\.\$super\s*\()|(\.\$super\.(apply|call)\()/ : /.+/;

// ==========================================================================
/*
 * @member YJS.core.Class
 * @private
 * @method __setMember
 * Sets a member with the specified name on the specified object using the specified data descriptor or accessor
 * descriptor.
 * 
 * @param {Object} obj The object to add the member (property/function) to.
 * @param {String} memberName The name of the member to set.
 * @param {Object} dataOrAccessorDesc The member descriptor. May be a data-descriptor or an accessor-descriptor. See
 *   [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
 *   for details.
 * @param {Boolean} [dataOrAccessorDesc.c=false] The `configurable` flag of the descriptor.
 * @param {Boolean} [dataOrAccessorDesc.e=false] The `enumerable` flag of the descriptor.
 * @param {Function} [dataOrAccessorDesc.g=undefined] The `get` property of the descriptor.
 * @param {Function} [dataOrAccessorDesc.s=undefined] The `set` property of the descriptor.
 * @param {Mixed} [dataOrAccessorDesc.v=undefined] The value of the member. It may be any value -- be it a function,
 *   a primitive, etc.
 * @param {Boolean} [dataOrAccessorDesc.w=false] The `writable` flag of the descriptor.
 */
/* @scopeless */
Object.defineProperty(YJS_core_Class, '__setMember', {
    value: function (obj, memberName, dataOrAccessorDesc) {
        var desc = {};
        desc.configurable = !!dataOrAccessorDesc.c;
        desc.enumerable = !!dataOrAccessorDesc.e;
        if ('g' in dataOrAccessorDesc) { desc.get = dataOrAccessorDesc.g; }
        if ('s' in dataOrAccessorDesc) { desc.set = dataOrAccessorDesc.s; }
        if ('v' in dataOrAccessorDesc) { desc.value = dataOrAccessorDesc.v; }
        if ('w' in dataOrAccessorDesc) { desc.writable = !!dataOrAccessorDesc.w; }
// @if DEBUG
        if (('value' in desc || 'writable' in desc) && ('get' in desc || 'set' in desc)) {
            YJS.core.Class.$LOG.warn('The getter/setter will be ignored since a value or a writable property was set on the descriptor.');
        }
// @endif
        Object.defineProperty(obj, memberName, desc);
    }
});

// ==========================================================================
/*
 * @member YJS.core.Class
 * @private
 * @method __setFn
 * Sets a function with the specified name on the specified object.
 * 
 * @param {Object} obj The object to add the member (property/function) to.
 * @param {String} fnName The name of the member to set.
 * @param {Function} fn The function to set.
 * @param {Object} fnDesc The function descriptor.
 * @param {Boolean} [fnDesc.c=false] The `configurable` flag of the descriptor.
 * @param {Boolean} [fnDesc.e=false] The `enumerable` flag of the descriptor.
 * @param {Boolean} [fnDesc.w=false] The `writable` flag of the descriptor.
 */
/* @scopeless */
YJS_core_Class.__setMember(YJS_core_Class, '__setFn', {
    v: function (obj, fnName, fn, fnDesc) {
        fnDesc = fnDesc || {};
// @if DEBUG
        if (typeof fn != 'function') { throw new TypeError('`fn` must be a function.'); }
        if ('g' in fnDesc) { throw new TypeError('Descriptor must not contain a `g` property.'); }
        if ('s' in fnDesc) { throw new TypeError('Descriptor must not contain a `s` property.'); }
// @endif
        fnDesc.v = fn;
        YJS.core.Class.__setMember(obj, fnName, fnDesc);
    }
});

// ==========================================================================
(function () {
var setFinalPubFn = function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.length === 0) {
        throw new TypeError('Public function names must not be empty.');
    }
    if (fnName.search(/^[^_]+/) === -1) {
        throw new TypeError('Public function names must not begin with any underscores.');
    }
// @endif
    YJS.core.Class.__setFn(obj, fnName, fn, { e: true });
};
/* @scopeless */
YJS_core_Class.__setMember(YJS_core_Class, 'setFinalPubFn', { e: true, v: setFinalPubFn });
})();

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
 * ## Implementation Note
 * `YJS.core.Class.setConst(obj, 'FOO', value)` is short for
 * `Object.defineProperty(obj, 'FOO', { enumerable: true, value: value })`;
 * 
 * @param {Object} obj The object to add the constant to.
 * @param {String} constName The name of the constant to set. Must not contain lowercase letters.
 * @param {Mixed} [value=undefined] The value of the constant. It may be any value except a function -- be it a
 *   primitive, an object, etc. Keep in mind, however, that objects are by default mutable until they are
 *   {@link Object#freeze frozen} or {@link Object#seal sealed} (assuming browser support). Its properties could be
 *   changed. That is, this method does _not_ make an object's properties constant. For function 'properties',
 *   use #setPubFn, #setProtFn, or #setPrivFn instead.
 */
/* @scopeless */
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'setConst', function (obj, constName, value) {
    YJS.core.Class.__setMember(obj, constName, {
        e: true,
        v: value
    });
});

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
 *     // functions unless the closure trick to effectively create private functions is
 *     // used.
 *     foo.__doSomethingPrivate();
 * 
 * ## Implementation Note
 * `YJS.core.Class.setPrivFn(Foo.prototype, '__bar', function () {...})` is short for
 * `Object.defineProperty(Foo.prototype, '__bar', { value: function () {...} })`.
 * However, `setPrivFn` also ensures the function name is valid.
 * 
 * @param {Object} obj The object to add the private function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must begin with double underscores.
 * @param {Function} fn The private function.
 */
/* @scopeless */
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'setPrivFn', function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.search(/^__[^_]+/) === -1) {
        throw new TypeError('Private function names must begin with double underscores.');
    }
// @endif
    YJS.core.Class.__setFn(obj, fnName, fn);
});

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
 * ## Implementation Note
 * `YJS.core.Class.setProtFn(Foo.prototype, '_bar', function () {...})` is short for
 * `Object.defineProperty(Foo.prototype, '_bar', { enumerable: true, value: function () {...}, writable: true })`.
 * However, `setProtFn` also ensures the function name is valid.
 * 
 * @param {Object} obj The object to add the protected function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must begin with a single underscore.
 * @param {Function} fn The protected function.
 */
/* @scopeless */
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'setProtFn', function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.search(/^_[^_]+/) === -1) {
        throw new TypeError('Protected function names must begin with a single underscore.');
    }
// @endif
    YJS.core.Class.__setFn(obj, fnName, fn, { e: true, w: true });
});

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
 * ## Implementation Note
 * `YJS.core.Class.setPubFn(Foo.prototype, 'bar', function () {...})` is short for
 * `Object.defineProperty(Foo.prototype, 'bar', { enumerable: true, value: function () {...}, writable: true })`.
 * However, `setPubFn` also ensures the function name is valid.
 * 
 * @param {Object} obj The object to add the public function to. This may be and usually should be a prototype object
 *   so all instances of the object have this function.
 * @param {String} fnName The name of the function to set. Must not begin with any underscores.
 * @param {Function} fn The public function.
 */
/* @scopeless */
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'setPubFn', function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.length === 0) {
        throw new TypeError('Public function names must not be empty.');
    }
    if (fnName.search(/^[^_]+/) === -1) {
        throw new TypeError('Public function names must not begin with any underscores.');
    }
// @endif
    YJS.core.Class.__setFn(obj, fnName, fn, { e: true, w: true });
});

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
/* @scopeless */
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'createCtor', function (simpleName) {
    var SELF = YJS.core.Class,
        code, ctor, evil;
    
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
    SELF.setConst(ctor, '$isClazz', true);
    SELF.setConst(ctor, '$simpleName', simpleName);
    
    return ctor;
});

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
__create$superPreparer = function (obj, fnName, fn) {
    var contains$super, superPreparerFn, wrap;

    /*
     * Only care about preparing the call to a function's super function when it is apart of a class. That is, static
     * functions don't have calls to a super function.
     * 
     * This optimization helps mimimize memory footprint and improves runtime performance.
     */
    // If `obj` is the prototype of a function acting as a class, then ...
    if (obj.hasOwnProperty('$clazz') && obj.$clazz.hasOwnProperty('$isClazz')) {
        contains$super = $superRegEx.test(fn);
        wrap = contains$super;
    }
    superPreparerFn = !wrap ? fn : function $superPreparer() {
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
/**
 * @private
 * @method __addMembers
 * Adds members to the specified object.
 * 
 * @param {Object} obj
 * @param {Object} members
 */
YJS_core_Class.setPrivFn(YJS_core_Class, '__addMembers', function (obj, members) {
    var SELF = YJS.core.Class,
        name, member;

    for (name in members) {
        if (members.hasOwnProperty(name)) {
            member = members[name];

            if (name.search(/^[$_A-Z]+$/) !== -1) {
                SELF.setConst(obj, name, member);
            } else {
                if (typeof member == 'function' && !member.$isClazz) {
                    member = __create$superPreparer(obj, name, member);
                    if (name.search(/^__[^_]+/) !== -1) {
                        SELF.setPrivFn(obj, name, member);
                    } else if (name.search(/^_[^_]+/) !== -1) {
                        SELF.setProtFn(obj, name, member);
                    } else {
                        SELF.setPubFn(obj, name, member);
                    }
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
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'addMembers', function (Clazz, members) {
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
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'addStatics', function (Clazz, members) {
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
YJS_core_Class.setFinalPubFn(YJS_core_Class, 'extend', function (SuperClazz, Clazz) {
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

})(this, YJS);

// ##################################################################################################################
