
/*
 * @dependency YJS
 */

/**
 * @singleton
 * @class YJS.String
 * A set of string related methods.
 * 
 * @uses YJS.Utils
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
 * Converts a value to a string. If `null` or `undefined` is passed in, then `null` or `undefined` is returned as
 * opposed to returning the strings `'null'` or `'undefined'`. This was done so that `null` doesn't get changed to
 * `'null'` and `undefined` doesn't get changed to `'undefined'` which may not be what you want when merging nullable
 * data with a template.
 * 
 * If you want to guarantee that a string is always returned, then call this function like so:
 * 
 *     // NOTE: false, '', and 0 as input will return default string.
 *     YJS.String.convert(input || "Some default value. May be empty.");
 *     // OR
 *     // NOTE: false, '', and 0 as input will return 'false', default string, or '0' respectively.
 *     YJS.String.convert(input) || "Some default value. May be empty.";
 * 
 * If you want `null` to become `'null'` and `'undefined'` to become `'undefined'`, then call this function like so:
 * 
 *     YJS.String.convert('' + input); // NOTE: Different than '' + input alone since input will get trimmed.
 * 
 * See the Jasmine Specs for example uses.
 * 
 * @param {?Mixed} input The value to convert to a string.
 * @param {Object} [options] The options to use when doing the conversion.
 * @param {boolean} [options.trim=true] `true` to trim the string after conversion.
 * 
 * @return {String|null|undefined} The input converted to a string.
 */
// @scopeless
YJS_String.convert = function (input, options) {
    var output, trim;

    options = options || {};
    trim = options.trim === true ? true : false;

    if (typeof input == 'undefined' || input === null) {
        output = input;
    } else {
        output = '' + input;
    }

    if (trim) {
        output = YJS.String.trim(output);
    }

    return output;
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
 * @param {string} pattern The string pattern/template with the printf style placeholders.
 * @param {Mixed} [varargs] The replacement values.
 * 
 * @return {string} a string with the placeholders replaced with the specified replacement values.
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

// ==========================================================================
/**
 * Trims leading and trailing whitespace from specified string.
 * 
 * NOTE: Non-string input just falls through. It is not converted to a string before trimming.
 * 
 *     var str = YJS.String.trim("  \t$654,321\t\r\n  ");
 *     console.log(str); // '$654,321'
 * 
 * See the Jasmine Specs for more example uses.
 * 
 * NOTE: This function behaves like `Ext.String.trim` but does not barf if `input` is not a string.
 * 
 * @param {?String} input The string to trim.
 * 
 * @return {String|Mixed} The trimmed string or the non-string input.
 */
// @scopeless
YJS_String.trim = function (input) {
    if (YJS.Utils.typeOf(input) == 'string') {
        input = input.replace(/(^\s*)|(\s*$)/g, "");
    }
    return input;
};

/**
 * @member YJS
 * @method trim
 * Shorthand for {@link YJS.String#trim}.
 */
if (!YJS.trim) {
    YJS.trim = YJS.String.trim;
}

})(this, YJS, 'YJS');

// ##################################################################################################################
