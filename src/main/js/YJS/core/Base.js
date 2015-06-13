
/**
 * @class YJS.core.Base
 * The base class of all objects created with the YJS class system.
 * 
 * @requires YJS.core.Class
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
  YJS_core_Class = YJS.core.Class,
  YJS_core_Base;

NS.Base = YJS_core_Base = YJS_core_Class.createCtor('Base');
YJS_core_Class.setConst(YJS_core_Base, '$name', 'YJS.core.Base');
YJS_core_Class.extend(Object, YJS_core_Base);

/**
 * @static
 * @property {boolean} $isClazz (readonly)
 * A flag indicating that YJS.core.Base is a class. That is, it is a function that can be used to instantiate different
 * instances of this class.
 * 
 * This flag is available on all classes defined with the {@link YJS#define YJS class-system}.
 */

/**
 * @static
 * @property {string} $name (readonly)
 * The fully-qualified name for this class, which is `'YJS.core.Base'` for YJS.core.Base.
 * 
 * This property is available on all classes defined with the {@link YJS#define YJS class-system}.
 * 
 * The value will not change, even after a call to YJS.core.Core#aliasNs or to YJS.core.Core#changeNs.
 */

/**
 * @static
 * @property {string} $simpleName (readonly)
 * The simple name for this class, which is `'Base'` for YJS.core.Base.
 * 
 * This property is available on all classes defined with the {@link YJS#define YJS class-system}.
 */

/**
 * @static
 * @property {Function} $superclazz (readonly)
 * A reference to this class's superclass, which is Object for YJS.core.Base.
 * 
 * This property is available on all classes defined with the {@link YJS#define YJS class-system}.
 */

/**
 * @property {Function} constructor (readonly)
 * A reference to the class (aka constructor function) of this instance.
 */

/**
 * @property {Function} $clazz (readonly)
 * A reference to the class (aka constructor function) of this instance.
 */

/**
 * @property {Function} $superclazz (readonly)
 * A reference to the superclass (aka constructor function) of this instance. Equivalent to `obj.$clazz.$superclazz`.
 */

/**
 * @property {Function} $super
 * During a call to a method (function on an instance of YJS.core.Base), `this.$super` is a reference to a superclass's
 * method with the same name as the calling method.
 * 
 * NOTE: This only works with methods defined using the {@link YJS#define YJS class-system} or methods added to a class
 * using YJS.core.Class#addMembers, YJS.core.Class#setPubFn, YJS.core.Class#setProtFn, or YJS.core.Class#setPrivFn.
 * 
 * The example below demostrates this.
 * 
 *     YJS.define('Foo', {
 *         // Accepts a variable number of arguments.
 *         concat: function (varargs) {
 *             var result = [], i, iLen;
 *             for (i = 0, iLen = arguments.length; i < iLen; ++i) {
 *                 result.push(arguments[i]);
 *             }
 *             return result.join('');
 *         }
 *     });
 *     YJS.define('Waldo', {
 *         $extend: 'Foo',
 *         // Redefined bar to not expect any arguments.
 *         bar: function () {
 *             var qux = 'fi ';
 *             var corge = 'fo ';
 *             return 'fe ' + this.$super(qux, corge) + 'fum';
 *         }
 *     });
 *     var waldo = new Waldo();
 *     waldo.bar(); // 'fe fi fo fum'
 * 
 * Using `$super` is no different than using any other function in JavaScript. When `$super` is called, you just need
 * to make sure the expected arguments are passed to it. These arguments may come from the parameters of the calling
 * function as in the above example. They may partly come from literal expressions, local variables, arguments, etc.
 * This is demonstrated in the following example.
 * 
 *     YJS.define('Waldo', {
 *         $extend: 'Foo',
 *         bar: function (grault) {
 *             var corge = 'fo ';
 *             return this.$super('fe ', grault, corge) + 'fum';
 *         }
 *     });
 *     var waldo = new Waldo();
 *     waldo.bar('fi '); // 'fe fi fo fum'
 * 
 * However, if the overridden `bar` method will accept multiple arguments, then using Function#apply can be used.
 * 
 *     YJS.define('Waldo', {
 *         $extend: 'Foo',
 *         bar: function (varargs) {
 *             return this.$super.apply(this, arguments) + 'fum';
 *         }
 *     });
 *     var waldo = new Waldo();
 *     waldo.bar('fe ', 'fi ', 'fo '); // 'fe fi fo fum'
 * 
 * Here is another example demostrating how a manipulated array of arguments can be used.
 * 
 *     YJS.define('Waldo', {
 *         $extend: 'Foo',
 *         bar: function (varargs) {
 *             var args = YJS.Array.copy(arguments);
 *             args.unshift('fe ');
 *             args.push('fum');
 *             return this.$super.apply(this, args);
 *         }
 *     });
 *     var waldo = new Waldo();
 *     waldo.bar('fi ', 'fo '); // 'fe fi fo fum'
 * 
 * Function#call also works with`$super`. (I can't think of a reason to use it unless you want to run `$super`
 * under a different scope which won't work for all methods.)
 */

YJS_core_Class.addMembers(YJS_core_Base, {
    /**
     * @template
     * @method _initialize
     * A template method called by the constructor that initializes the object.
     */
    _initialize: function () {
        this._initialize = YJS.notAgainFn;
    }
});

})(this, YJS, 'YJS.core');

// ##################################################################################################################
