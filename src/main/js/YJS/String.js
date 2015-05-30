
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.String
 * A set of String related methods.
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
    YJS_String;

NS.String = YJS_String = {
    $LOG: YJS.__.tmp.LOG
};

// ==========================================================================
/**
 * A utility function that behaves similar to the C programming language's printf function.
 * 
 *     YJS.String.printf('Hello World!'); // "Hello World!"
 *     YJS.String.printf('Hello', ' World!', ' What a beautiful day!'); // "Hello World! What a beautiful day!"
 *     YJS.String.printf('%s %s', 'Hello', 'World!'); // "Hello World!"
 *     YJS.String.printf('%s %s', 'Hello'); // "Hello %s"
 *     YJS.String.printf('%s must be between %i and %f.', 'It', 1.2, 3.14); // "It must be between 1 and 3.14."
 *     YJS.String.printf('%s %s', 'Hello', 'World!', ' What a beautiful day!'); // "Hello World! What a beautiful day!"
 * 
 * Three different placeholders are understood.
 * 
 * * %f converts the replacement value to a float before replacing.
 * * %i converts the replacement value to an integer before replacing.
 * * %s converts the replacement value to a string before replacing.
 * 
 * @param {String} pattern The string pattern/template with the printf style placeholders.
 * @param {Mixed} [varargs] The replacement values.
 * 
 * @return {String} a string with the placeholders replaced with the specified replacement values.
 */
YJS_String.printf = function (pattern, varargs) {
    var args, i, iLen, out;

    out = pattern;
    args = arguments;
    i = 1;

    if (pattern && args.length > 1) {
        out = out.replace(/%[ifs]/g, function (placeholder) {
            var replacement;

            replacement = placeholder;
            if (i < args.length) {
                replacement = args[i];
            }
            i += 1;
            switch (placeholder) {
            case "%i":
                replacement = GBL.parseInt(replacement);
                break;
            case "%f":
                replacement = GBL.parseFloat(replacement);
                break;
            }
            return replacement;
        });
        
        out = [out];
        for (iLen = args.length; i < iLen; ++i) {
            out.push(args[i]);
        }
        out = out.join('');
    }
    
    return out;
};

})(this, YJS, 'YJS');

// ##################################################################################################################
