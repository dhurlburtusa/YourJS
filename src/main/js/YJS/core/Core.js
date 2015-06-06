
/*
 * @uses YJS.__.tmp.LOG
 * @uses YJS.ns
 * @uses YJS.core.Class
 */

/**
 * @class YJS.core.Core
 * Enumeration of core methods.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_core_Class, YJS_core_Core;

NS.Core = YJS_core_Core = {
    $LOG: YJS.__.tmp.LOG
};

YJS_core_Class = YJS.core.Class;

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
 * @param {string} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
YJS_core_Class.setFinalPubFn(YJS_core_Core, 'aliasNs', function (newTopNs) {
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
 * @param {string} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
YJS_core_Class.setFinalPubFn(YJS_core_Core, 'changeNs', function (newTopNs) {
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
 * @param {string} newTopNs The new namespace to use. Must not be the empty string. Must not contain dots.
 */
YJS_core_Class.setFinalPubFn(YJS_core_Core, 'restoreOriginalNs', function () {
    GBL.YJS = YJS;
});

// ==========================================================================
YJS_core_Class.setPrivFn(YJS_core_Core, '__changeNs__', function (newTopNs, removeOriginal) {
// @if DEBUG
    var existingTopNs;
    if (!newTopNs) {
        YJS_core_Core.$LOG.error("`newTopNs` must not be empty.");
    } else {
        if (newTopNs.indexOf('.') > -1) {
            YJS_core_Core.$LOG.error("`newTopNs` must not contain any dots ('.').");
        }
    }
    existingTopNs = GBL[newTopNs];
    if (existingTopNs && existingTopNs !== YJS) {
        YJS_core_Core.$LOG.warn(newTopNs + ' already exists.');
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
