
(function (GBL, topNs) {

// @if STRICT
"use strict";
// @endif

var YJS = GBL[topNs], buildMode;

/*
 * Prevents any code from modifying `Object.prototype` from this point on.
 * 
 * Any polyfills used to modify missing functionality of `Object` should be included before the YJS library.
 */
//(Object.freeze || Object)(Object.prototype);

// @if DEBUG
    if (YJS) {
        GBL.console.warn('The `' + topNs + '` namespace already exists. Was another third-party library included that uses the same namespace or has this library been included more than once?');
    }
// @endif

/**
 * @singleton
 * @class YJS
 */
if (!YJS) { GBL[topNs] = YJS = {}; }

// @if !DEBUG
buildMode = 'prod';
// @endif
// @if DEBUG
buildMode = 'debug';
// @endif

YJS.__ = {
    build: {
        mode: buildMode,
        version: '/* @echo VERSION */'
    },
    tmp: {}
};


})(this, 'YJS');

// ##################################################################################################################

(function (GBL, YJS) {

// @if STRICT
"use strict";
// @endif

var __setMember, __setFn, _setConst, _setPrivFn, _setPrivProp, _setProtFn, _setPubFn;

// @if DEBUG
    if (typeof Object.defineProperty != 'function') {
        GBL.console.error('YJS depends on `Object.defineProperty`. Some older browsers do NOT support this function. Consider adding a polyfill like `es5-shim` to fulfill this missing dependency.');
    }
// @endif

// ==========================================================================
/**
 * @private
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
__setMember = function (obj, memberName, dataOrAccessorDesc) {
    var desc = {};
    desc.configurable = !!dataOrAccessorDesc.c;
    desc.enumerable = !!dataOrAccessorDesc.e;
    if ('g' in dataOrAccessorDesc) { desc.get = dataOrAccessorDesc.g; }
    if ('s' in dataOrAccessorDesc) { desc.set = dataOrAccessorDesc.s; }
    if ('v' in dataOrAccessorDesc) { desc.value = dataOrAccessorDesc.v; }
    if ('w' in dataOrAccessorDesc) { desc.writable = !!dataOrAccessorDesc.w; }
// @if DEBUG
    if (('value' in desc || 'writable' in desc) && ('get' in desc || 'set' in desc)) {
        GBL.console.warn('The getter/setter will be ignored since a value or a writable property was set on the descriptor.');
    }
// @endif
    Object.defineProperty(obj, memberName, desc);
};

// ==========================================================================
/**
 * @private
 * @param {Object} obj The object to add the member (property/function) to.
 * @param {String} memberName The name of the member to set.
 * @param {Object} dataDesc The member descriptor. May be a data-descriptor or an accessor-descriptor. See
 *   [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
 *   for details.
 * @param {Boolean} [dataDesc.c=false] The `configurable` flag of the descriptor.
 * @param {Boolean} [dataDesc.e=false] The `enumerable` flag of the descriptor.
 * @param {Function} [dataDesc.g=undefined] The `get` property of the descriptor.
 * @param {Function} [dataDesc.s=undefined] The `set` property of the descriptor.
 * @param {Mixed} [dataDesc.v=undefined] The value of the member. It may be any value -- be it a function, a primitive, etc.
 * @param {Boolean} [dataDesc.w=false] The `writable` flag of the descriptor.
 */
__setFn = function (obj, fnName, fn, dataDesc) {
    dataDesc = dataDesc || {};
// @if DEBUG
    if (typeof fn != 'function') { throw new TypeError('`fn` must be a function.'); } // TODO: Determine the correct error to throw.
    if ('get' in dataDesc) { throw new TypeError('Descriptor must not contain a `get` property.'); } // TODO: Determine the correct error to throw.
    if ('set' in dataDesc) { throw new TypeError('Descriptor must not contain a `set` property.'); } // TODO: Determine the correct error to throw.
// @endif
    dataDesc.v = fn;
    __setMember(obj, fnName, dataDesc);
};

// ==========================================================================
_setConst = function (obj, constName, value) {
    __setMember(obj, constName, {
        e: true,
        v: value
    });
};

// ==========================================================================
_setPrivProp = function (obj, propName, value) {
    __setMember(obj, propName, {
        v: value
    });
};

// ==========================================================================
_setPrivFn = function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.search(/^__[^_]+/) === -1) {
        throw new TypeError('Private function names must begin with double underscores.');
    }
// @endif
    __setFn(obj, fnName, fn);
};

// ==========================================================================
_setProtFn = function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.search(/^_[^_]+/) === -1) {
        throw new TypeError('Protected function names must begin with a single underscore.');
    }
// @endif
    __setFn(obj, fnName, fn, { e: true });
};

// ==========================================================================
_setPubFn = function (obj, fnName, fn) {
    fnName = fnName.trim();
// @if DEBUG
    if (fnName.length === 0) {
        throw new TypeError('Public function names must not be empty.');
    }
    if (fnName.search(/^[^_]+/) === -1) {
        throw new TypeError('Public function names must not begin with any underscores.');
    }
// @endif
    __setFn(obj, fnName, fn, { e: true });
};

// ==========================================================================
YJS.__.tmp._setPrivFn = _setPrivFn;
YJS.__.tmp._setPubFn = _setPubFn;

// ==========================================================================
/**
 * @member YJS
 * @readonly
 * @property GBL
 * A reference to the global namespace. In a web-browser environment, this is a reference to the global `window`
 * object.
 */
_setConst(YJS, 'GBL', GBL);

// ==========================================================================
/**
 * @member YJS
 * @method noopFn
 * A function that does nothing.
 * 
 * What use is a function that does nothing? Well, many times a particular member of an object is expected to be a
 * function. In order to avoid errors, this member can be assigned the no-op function. This will allow code treating
 * the member as a function to continue to function without error.
 * 
 *     // `requiredFn` is the object member expected to be a function.
 *     MyObj.prototype.requiredFn = YJS.noopFn;
 *     ...
 *     myObjInstance.requiredFn(); // Won't throw an error.
 * 
 * Some other uses:
 * 
 *     MyObj.prototype.justDoOnceButOkayIfCalledMultipleTimes = function () {
 *         ...
 *         // Adds an instance declaration of this function. It doesn't affect the prototype declaration.
 *         // Therefore, new instances of MyObj will continue to behave as expected.
 *         this.justDoOnceButOkayIfCalledMultipleTimes = YJS.noopFn;
 *     };
 *     ...
 *     // The following call will do whatever the prototype function was designed to do.
 *     myObjInstance.justDoOnceButOkayIfCalledMultipleTimes();
 *     // The second call will effectively do nothing because this is now a call to the no-op function.
 *     myObjInstance.justDoOnceButOkayIfCalledMultipleTimes();
 */
_setPubFn(YJS, 'noopFn', function noopFn() {});

// ==========================================================================
/**
 * @member YJS
 * @method nullFn
 * The null function is simply a function that returns `null`. It can be used in a similar fashion to the
 * {@link #noopFn no-op function} but might be more suited if a legitament value (as opposed to `undefined`) is
 * expected to be returned.
 */
_setPubFn(YJS, 'nullFn', function nullFn() { return null; });

// ==========================================================================
/**
 * @member YJS
 * @method notAgainFn
 * A function that throws an error with a message stating that this method should have not been called again. This
 * could be useful in situations where a function on an object should only be called a limited number of times.
 * When that limit is reached, the function can assign itself this function. Then the next call to the function will
 * throw an error. This can prove useful to find extraneous calls to functions.
 * 
 *     MyObj.prototype.onlyCallMeALimitedNumberOfTimes = function () {
 *         ...
 *         // Adds an instance declaration of this function. It doesn't affect the prototype declaration.
 *         // Therefore, new instances of MyObj will continue to behave as expected.
 *         if (limitReached) {
 *             this.onlyCallMeALimitedNumberOfTimes = YJS.notAgainFn;
 *         }
 *     };
 *     ...
 *     // The following call will do whatever the prototype function was designed to do.
 *     myObjInstance.onlyCallMeALimitedNumberOfTimes();
 *     ...
 *     // The following will throw an Error when the limit has been reached. Now the
 *     // developer can remove the extraneous call.
 *     myObjInstance.onlyCallMeALimitedNumberOfTimes();
 */
_setPubFn(YJS, 'notAgainFn', function notAgainFn() { throw new Error('This method should have not been called again.'); });

// ==========================================================================
/**
 * @member YJS
 * @method ns
 * Creates new namespaces when necessary.
 * 
 *     var Foo = YJS.ns('Foo');
 *     YJS.ns('Bar');
 *     Bar.someMethod = function (...) { ... };
 *     var App_example = YJS.ns('App.example');
 *     App_example.Bar = ...;
 * 
 * @param {String} namespaces A dot (`'.'`) delimited set of namespaces to be created if necessary.
 * 
 * @return {Object} A reference to the last namespace in the dot delimited set of namespaces.
 */
_setPubFn(YJS, 'ns', function (namespaces) {
    var cntx, i, iLen, namespace;

    namespaces = namespaces.split('.');
    cntx = GBL;
    for (i = 0, iLen = namespaces.length; i < iLen; ++i) {
        namespace = namespaces[i];
        if (namespace) {
            if (!(namespace in cntx)) {
                cntx[namespace] = {};
            }
            cntx = cntx[namespace];
        }
    }
    return cntx;
});

})(this, YJS);

// ##################################################################################################################

/*
 * @dependency A console polyfill in development.
 */

/**
 * @class YJS.core.Core
 * Enumeration of core methods.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath), _setPrivFn, _setPubFn, YJS_core_Core;

_setPrivFn = YJS.__.tmp._setPrivFn;
_setPubFn = YJS.__.tmp._setPubFn;

delete YJS.__.tmp;

NS.Core = YJS_core_Core = {};

// ==========================================================================
/**
 * @method aliasNs
 * Allows this library to be referenced via a different top-level namespace.
 * 
 *     var YJSNs = YJS;
 *     YJS.core.Core.aliasNs('MyLibrary');
 *     (YJS === MyLibrary); // true
 *     (YJSNs === MyLibrary); // true
 *     (typeof YJS === 'undefined'); // false
 * 
 * @param {String} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
_setPubFn(YJS_core_Core, 'aliasNs', function (newTopNs) {
    return this.__changeNs__(newTopNs);
});

// ==========================================================================
/**
 * @method changeNs
 * Allows this library to be referenced via a different top-level namespace. Referencing the library through `YJS` will
 * no longer work after a call to this method. However, any {@link YJS.core.Core#aliasNs aliases} created will still work.
 * 
 *     var YJSNs = YJS;
 *     YJS.core.Core.changeNs('MyLibrary');
 *     (YJSNs === MyLibrary); // true
 *     (typeof YJS === 'undefined'); // true
 * 
 * @param {String} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
_setPubFn(YJS_core_Core, 'changeNs', function (newTopNs) {
    return this.__changeNs__(newTopNs, true);
});

// ==========================================================================
/**
 * @method restoreOriginalNs
 * Allows the original `YJS` namespace to be restored after a call to #changeNs.
 * 
 *     var YJSNs = YJS;
 *     YJS.core.Core.changeNs('MyLibrary');
 *     (YJSNs === MyLibrary); // true
 *     (typeof YJS === 'undefined'); // true
 *     // The restoreOrginalNs function will need to be called through the new
 *     // namespace or any existing aliases like
 *     // YJS.core.Core.restoreOriginalNs();
 *     MyLibrary.core.Core.restoreOriginalNs();
 *     (typeof YJS === 'undefined'); // false
 *     (YJS === MyLibrary); // true
 * 
 * @param {String} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
_setPubFn(YJS_core_Core, 'restoreOriginalNs', function () {
    GBL.YJS = YJS;
});

// ==========================================================================
_setPrivFn(YJS_core_Core, '__changeNs__', function (newTopNs, removeOriginal) {
// @if DEBUG
    var existingTopNs;
    if (!newTopNs) {
        GBL.console.error("`newTopNs` must not be empty.");
    } else {
        if (newTopNs.indexOf('.') > -1) {
            GBL.console.error("`newTopNs` must not contain any dots ('.').");
        }
    }
    existingTopNs = GBL[newTopNs];
    if (existingTopNs && existingTopNs !== YJS) {
        GBL.console.warn(newTopNs + ' already exists.');
    }
// @endif
    GBL[newTopNs] = YJS;
    if (removeOriginal && 'YJS' != newTopNs) {
        delete GBL.YJS;
    }
    return YJS;
});

})(this, YJS, 'YJS.core');

// ##################################################################################################################