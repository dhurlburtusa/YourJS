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
    Object.defineProperty(YJS, 'core', { enumerable: true, value: {} });
}

})(this, YJS);

// ##################################################################################################################
