
/**
 * @singleton
 * @class YJS.core.ClassManager
 * 
 * @requires YJS.core.Base
 * @requires YJS.core.Class
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_core_Class = YJS.core.Class,
    YJS_core_ClassManager;

NS.ClassManager = YJS_core_ClassManager = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
(function () {
    /*
     * These are forbidden because they are expected by the native-API (constructor) or are expected to be correct
     * by the internal API.
     */
    var FORBIDDEN_DECLARATION_PARAMS = ['$clazz', '$superclazz', 'constructor'];
    Object.freeze(FORBIDDEN_DECLARATION_PARAMS);
    YJS_core_Class.setConst(YJS_core_ClassManager, 'FORBIDDEN_DECLARATION_PARAMS', FORBIDDEN_DECLARATION_PARAMS);
})();

// ==========================================================================
(function () {
    /*
     * These are forbidden because they are expected by the internal API.
     */
    var FORBIDDEN_STATIC_DECLARATION_PARAMS = ['$isClazz', '$name', '$simpleName', '$superclazz'];
    Object.freeze(FORBIDDEN_STATIC_DECLARATION_PARAMS);
    YJS_core_Class.setConst(YJS_core_ClassManager, 'FORBIDDEN_STATIC_DECLARATION_PARAMS', FORBIDDEN_STATIC_DECLARATION_PARAMS);
})();

// ==========================================================================
(function () {
    var RESERVED_DECLARATION_PARAMS = ['$extend', '$members', '$mixins', '$requires', '$singleton', '$statics', '$uses'];
    Object.freeze(RESERVED_DECLARATION_PARAMS);
    YJS_core_Class.setConst(YJS_core_ClassManager, 'RESERVED_DECLARATION_PARAMS', RESERVED_DECLARATION_PARAMS);
})();

// ==========================================================================
YJS_core_Class.setConst(YJS_core_ClassManager, '__', {
    clazzCache: {
        'YJS.core.Base': YJS.core.Base
    }
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__extend', function (superclazzName, Clazz) {
    var SuperClazz = this.__.clazzCache[superclazzName];
    if (typeof SuperClazz != 'function') {
        SuperClazz = GBL[superclazzName];
        if (typeof SuperClazz != 'function') {
            throw new TypeError("`" + superclazzName + "` must be declared via `YJS.define` before `" + Clazz + "` can extend it.");
        }
    }
    YJS.core.Class.extend(SuperClazz, Clazz);
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__copy', function (input, recurse) {
    var SELF = YJS.core.ClassManager,
        out = {},
        key;
    
    recurse = typeof recurse == 'boolean' ? recurse : true;
    for (key in input) {
        if (input.hasOwnProperty(key)) {
            out[key] = input[key];
        }
    }
    
    if (recurse) {
        if (out.$members) {
            out.$members = SELF.__copy(out.$members, false);
        }

        if (out.$mixins) {
            out.$mixins = SELF.__copy(out.$mixins, false);
        }

        if (out.$statics) {
            out.$statics = SELF.__copy(out.$statics, false);
        }
    }
    
    return out;
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__removeForbidden', function (clazzDef) {
    var SELF = YJS.core.ClassManager,
        FORBIDDEN_DECLARATION_PARAMS = SELF.FORBIDDEN_DECLARATION_PARAMS,
        declParam, i, iLen;
    
    for (i = 0, iLen = FORBIDDEN_DECLARATION_PARAMS.length; i < iLen; ++i) {
        declParam = FORBIDDEN_DECLARATION_PARAMS[i];
// @if DEBUG
        if (clazzDef.hasOwnProperty(declParam)) {
            SELF.$LOG.warn(declParam + ' is forbidden in a class-definition and will be ignored.');
        }
// @endif
        delete clazzDef[declParam];
    }
    
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__removeForbiddenStatic', function (clazzDef) {
    var SELF = YJS.core.ClassManager,
        FORBIDDEN_STATIC_DECLARATION_PARAMS = SELF.FORBIDDEN_STATIC_DECLARATION_PARAMS,
        declParam, i, iLen;
    
    for (i = 0, iLen = FORBIDDEN_STATIC_DECLARATION_PARAMS.length; i < iLen; ++i) {
        declParam = FORBIDDEN_STATIC_DECLARATION_PARAMS[i];
// @if DEBUG
        if (clazzDef.hasOwnProperty(declParam)) {
            SELF.$LOG.warn(declParam + ' is forbidden in $statics of the class-definition and will be ignored.');
        }
// @endif
        delete clazzDef[declParam];
    }
    
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__removeReserved', function (clazzDef) {
    var SELF = YJS.core.ClassManager,
        RESERVED_DECLARATION_PARAMS = SELF.RESERVED_DECLARATION_PARAMS,
        declParam, i, iLen;
    
    for (i = 0, iLen = RESERVED_DECLARATION_PARAMS.length; i < iLen; ++i) {
        declParam = RESERVED_DECLARATION_PARAMS[i];
        delete clazzDef[declParam];
    }
    
});

// ==========================================================================
/**
 * @method define
 * Allows a class to be defined.
 * 
 *     YJS.core.ClassManager.define('Foo.bar.Baz', {
 *             $requires: ['Bla.blubb.Blabla', ... ],
 *             $uses: ['Toto.titi.Tata', ... ],
 *             
 *             $statics: {
 *                 corge: function (...) { ... },
 *                 GRAULT: 'grault'
 *             },
 *             _initialize: function (arg1) {
 *                 var SELF = this;
 *                 
 *                 SELF.$super.apply(SELF, arguments);
 *             },
 *             publicMethod1: function (...) { ... },
 *             ...
 *             publicMethodN: function (...) { ... },
 *             _protectedMethod1: function (...) { ... },
 *             ...
 *             _protectedMethodN: function (...) { ... },
 *             __privateMethod1: function (...) { ... },
 *             ...
 *             __privateMethodN: function (...) { ... }
 *         },
 *         function (Clazz) {
 *             console.log('Foo.bar.Baz is now defined.');
 *         }
 *     );
 *     ...
 *     YJS.core.ClassManager.define('Foo.bar.Qux', {
 *             $extend: 'Foo.bar.Baz',
 *             
 *             $statics: {
 *                 garply: function (...) { ... },
 *                 WALDO: 'waldo'
 *             },
 *             _initialize: function (arg1, arg2) {
 *                 var SELF = this;
 *                 
 *                 SELF.$super(arg1);
 *             },
 *             publicMethod1: function (...) { ... },
 *             ...
 *             publicMethodN: function (...) { ... },
 *             _protectedMethod1: function (...) { ... },
 *             ...
 *             _protectedMethodN: function (...) { ... },
 *             __privateMethod1: function (...) { ... },
 *             ...
 *             __privateMethodN: function (...) { ... }
 *         },
 *         function (Clazz) {
 *             console.log('Foo.bar.Qux is now defined.');
 *         }
 *     );
 *     ...
 *     // YJS.define is an alias for YJS.core.ClassManager.define.
 *     YJS.define('Foo.bar.Quux', {
 *             $extend: 'Foo.bar.Qux',
 *             $singleton: true,
 *             ...
 *         },
 *         function (Clazz) {
 *             console.log('Foo.bar.Quux is now defined.');
 *         }
 *     );
 * 
 * @param {string} fqClassName The fully-qualified classname including any namespace(s). The classname or any
 *   namespaces must not contain any dots) (`'.'`).
 * @param {Object} clazzDef The class definition. Only non-inheritable properties are considered. All of which, except
 *   the special properties documented below, will become members of the class's prototype. These are usually functions
 *   that will become instance methods. If they are not functions, then they will act like default values for instance
 *   properties. Actual instance properties added during construction or the lifetime of the instance will hide the
 *   default value. 
 *   
 *   NOTE: How properties are treated depends on their name and whether they match a particular convention. All
 *   non-function properties named only containing capital letters, `$`, and `_` will be declared as constants. The
 *   visibility (public, protected, or private) of function properties is determined by the number of `_` at the
 *   beginning of the name. If it starts with zero, then it will be declared as a public function. If it starts with
 *   a single `_`, then it will be declared as a protected function. If it starts with double `_`s, then it will be
 *   declared as a private function. Public and protected functions are enumerable. Private functions are not
 *   enumerable.
 *   NOTE: '$clazz', '$superclazz', and 'constructor' are forbidden (even inside `$clazzDef.$members)
 *   and will be ignored if declared on the class definition. They will exist on the class's prototype after the class
 *   is defined.
 * @param {string} [clazzDef.$extend='YJS.core.Base'] The fully-qualified name of the class to extend.
 * @param {Object} [clazzDef.$statics] A object of which its non-inheritable properties will become the static members
 *   (constants, properties, functions) of the class. That is, these members will be added to the class itself. NOTE:
 *   '$isClazz', '$name', '$simpleName', and '$superclazz' are forbidden static members and will be ignored if
 *   declared.
 * @param {Object} [clazzDef.$members] An alternative way to declaring members for the class's prototype. This way also
 *   allows members to be declared that have names matching the special properties (`$extend`, `$members`, `$requires`,
 *   `$statics`, `$uses`) of the class definition.
 * @param {string[]} [clazzDef.$requires] An array of fully-qualified classnames that are needed to define the class.
 * @param {string[]} [clazzDef.$uses] An array of fully-qualified classnames that are needed when an instance of the class
 *   is created or may be needed during the life of an instance.
 * @param {Function} [onClassDefined] An optional callback to be called after defining the class. Useful for making
 *   additional modifications to the class.
 */
YJS_core_Class.setPubFn(YJS_core_ClassManager, 'define', function (fqClassName, clazzDef, onClassDefined) {
    var SELF = this,
        Clazz, clazzSimpleName, members, namespaces, parentNamespace, superClazzName;

    namespaces = fqClassName.split('.');
    clazzSimpleName = namespaces.pop();
    namespaces = namespaces.join('.');
    parentNamespace = YJS.ns(namespaces);

    if (typeof clazzDef == 'function') {
        clazzDef = clazzDef();
    }
    if (clazzDef) {
        clazzDef = SELF.__copy(clazzDef, true);
    } else {
        clazzDef = {};
    }

    Clazz = YJS_core_Class.createCtor(clazzSimpleName);
    YJS_core_Class.setConst(Clazz, '$name', fqClassName);

    if (clazzDef.hasOwnProperty('$extend')) {
        superClazzName = '' + clazzDef.$extend;
    } else {
        superClazzName = 'YJS.core.Base';
    }
    SELF.__extend(superClazzName, Clazz);

    if (clazzDef.hasOwnProperty('$statics')) {
        SELF.__removeForbiddenStatic(clazzDef.$statics);
        YJS_core_Class.addStatics(Clazz, clazzDef.$statics);
    }

    // TODO: Do something with the $mixins and $singleton clazzDef properties. Be sure to add documentation for them too.

    members = clazzDef.hasOwnProperty('$members') ? clazzDef.$members : null;

    SELF.__removeReserved(clazzDef);
    SELF.__removeForbidden(clazzDef);
    YJS_core_Class.addMembers(Clazz, clazzDef);
    if (members) {
        SELF.__removeForbidden(members);
        YJS_core_Class.addMembers(Clazz, members);
    }

    YJS_core_Class.setConst(parentNamespace, clazzSimpleName, Clazz);

    
    if (onClassDefined) {
        onClassDefined.call(Clazz, Clazz);
    }

    SELF.__.clazzCache[fqClassName] = Clazz;
});  

/**
 * @member YJS
 * @method define
 * An alias for YJS.core.ClassManager#define.
 */
YJS_core_Class.setPubFn(YJS, 'define', YJS_core_ClassManager.define);

})(this, YJS, 'YJS.core');

// ##################################################################################################################
