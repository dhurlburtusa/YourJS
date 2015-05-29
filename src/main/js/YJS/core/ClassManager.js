
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
/**
 * @private
 * @method __makeNamespaces
 * Makes the necessary namespaces.
 * 
 *     __makeNamespaces(['Foo', 'bar']); // Makes the `Foo` namespaces if necessary. Then makes the `bar` namespace within the `Foo` namespace. Returns a reference to the `bar` namespace.
 * 
 * @param {String[]} namespaces The namespaces to make in hierarchical order.
 * 
 * @return {Object} A reference to the parent/last namespace.
 */
YJS_core_Class.setPrivFn(YJS_core_ClassManager, '__makeNamespaces', function (namespaces) {
    var i, len, namespace, parentNamespace;

    parentNamespace = YJS.GBL;

    len = namespaces.length;

    if (len > 0) {
        for (i = 0; i < len; ++i) {
            namespace = namespaces[i];
            if (!parentNamespace[namespace]) {
                parentNamespace[namespace] = {};
            }
            parentNamespace = parentNamespace[namespace];
        }
    }
    return parentNamespace;
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
 * @param {String} fqClassName The fully-qualified classname include namespace and package(s).
 * @param {Object} clazzDef The class definition.
 * @param {Function} [onClassDefined] An optional callback to be called after defining the class. Useful for making
 *   additional modifications to the class.
 */
YJS_core_Class.setPubFn(YJS_core_ClassManager, 'define', function (fqClassName, clazzDef, onClassDefined) {
    var SELF = this,
        Clazz, clazzSimpleName, members, namespaces, parentNamespace, superClazzName;

    namespaces = fqClassName.split('.');
    clazzSimpleName = namespaces.pop();
    // NOTE: YJS.ns doesn't work here.
    parentNamespace = SELF.__makeNamespaces(namespaces);

    if (typeof clazzDef == 'function') {
        clazzDef = clazzDef();
    }
    if (clazzDef) {
        clazzDef = SELF.__copy(clazzDef, true);
    } else {
        clazzDef = {};
    }

    Clazz = YJS_core_Class.createConstructor(clazzSimpleName);
    YJS_core_Class.setConst(Clazz, '$name', fqClassName);

    if (clazzDef.hasOwnProperty('$extend')) {
        superClazzName = '' + clazzDef.$extend;
    } else {
        superClazzName = 'YJS.core.Base';
    }
    SELF.__extend(superClazzName, Clazz);

    if (clazzDef.hasOwnProperty('$statics')) {
        YJS_core_Class.addStatics(Clazz, clazzDef.$statics);
    }

    // TODO: Do something with the $mixins, $members, and $singleton clazzDef properties.

    members = clazzDef.$members;

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