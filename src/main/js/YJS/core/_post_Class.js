
(function (GBL, YJS) {

// @if STRICT
"use strict";
// @endif

var YJS_core_Class = YJS.core.Class;

// ==========================================================================
YJS_core_Class.setConst(YJS, '$isNamespace', true);

// ==========================================================================
YJS_core_Class.setConst(YJS.core, '$isNamespace', true);

// ==========================================================================
/**
 * @member YJS
 * @readonly
 * @property GBL
 * A reference to the global namespace. In a web-browser environment, this is a reference to the global `window`
 * object.
 */
YJS_core_Class.setConst(YJS, 'GBL', GBL);

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
YJS_core_Class.setFinalPubFn(YJS, 'noopFn', function noopFn() {});

// ==========================================================================
/**
 * @member YJS
 * @method nullFn
 * The null function is simply a function that returns `null`. It can be used in a similar fashion to the
 * {@link #noopFn no-op function} but might be more suited if a legitament value (as opposed to `undefined`) is
 * expected to be returned.
 */
YJS_core_Class.setFinalPubFn(YJS, 'nullFn', function nullFn() { return null; });

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
YJS_core_Class.setFinalPubFn(YJS, 'notAgainFn', function notAgainFn() { throw new Error('This method should have not been called again.'); });

// ==========================================================================
/**
 * @member YJS
 * @method ns
 * Creates new namespaces when necessary.
 * 
 *     var Foo = YJS.ns('Foo');
 *     console.log(Foo.$isNamespace); // true
 *     YJS.ns('Bar');
 *     console.log(Bar.$isNamespace); // true
 *     Bar.someMethod = function (...) { ... };
 *     var App_example = YJS.ns('App.example');
 *     console.log(App_example.$isNamespace); // true
 *     console.log(App.example.$isNamespace); // true
 *     App_example.Bar = ...;
 * 
 * @param {string} namespaces A dot (`'.'`) delimited set of namespaces to be created when necessary. The individual
 * namespaces themselves must not contain any dots.
 * 
 * @return {Object} A reference to the last namespace in the dot delimited set of namespaces.
 */
YJS_core_Class.setFinalPubFn(YJS, 'ns', function (namespaces) {
    var cntx, i, iLen, namespace, nss;

    nss = [];
    namespaces = namespaces.split('.');
    cntx = GBL;
    for (i = 0, iLen = namespaces.length; i < iLen; ++i) {
        namespace = namespaces[i];
        if (namespace) {
            nss.push(namespace);
            if (!cntx[namespace] || typeof cntx[namespace] != 'object') {
                cntx[namespace] = {};
            }
            cntx = cntx[namespace];
            try {
                YJS.core.Class.setConst(cntx, '$isNamespace', true);
            } catch (e) {
                YJS.$LOG.warn("Unable to set the `$isNamespace` constant to `true` for the `%s` namespace.", nss.join('.'));
            }
        }
    }
    return cntx;
});

})(this, YJS);

// ##################################################################################################################
