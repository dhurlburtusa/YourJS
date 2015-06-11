/*
 * @dependency YJS/_bootstrap.js
 */

/*
 * Creates the YJS.core namespace.
 */
(function (GBL, YJS) {

// @if STRICT
"use strict";
// @endif

if (!YJS.hasOwnProperty('core')) {
    // NOTE: YJS.ns doesn't exist at this point.
    // NOTE: YJS.core is essential to the framework. Here it is designed not to be configurable or writable.
    Object.defineProperty(YJS, 'core', { configurable: false, enumerable: true, value: {}, writable: false });
    // NOTE: YJS.core.$isNamespace is set later in _post_Class.js.
}

})(this, YJS);

// ##################################################################################################################
