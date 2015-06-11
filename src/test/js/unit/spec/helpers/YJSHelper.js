
/* NOTE: YJS is not available at this point when running with grunt-contrib-jasmine. */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

var YJSHelper;

GBL.YJSHelper = YJSHelper = {};

YJSHelper.expectToHaveConst$isNamespace = function (ns) {
    expect(ns).toBeDefined();
    expect(ns.hasOwnProperty('$isNamespace')).toBe(true);
    expect(ns.$isNamespace).toBe(true);
    expect(function () {
        ns.$isNamespace = false;
    }).toThrow();
    expect(ns.$isNamespace).toBe(true);
    expect(function () {
        delete ns.$isNamespace;
    }).toThrow();
    expect(ns.$isNamespace).toBe(true);
};

YJSHelper.setupLoggingArrayAppender = function (YJS) {
    var arrayAppender, cb, config, rootLogger, YJSHelper;

    arrayAppender = new YJS.log.ArrayAppender();

    rootLogger = new YJS.log.Logger({
        appenders: [arrayAppender],
        pattern: '.'
    });

    cb = new YJS.log.ConfigBuilder();
    cb.addLoggers(rootLogger);

    config = cb.build();

    YJS.log.Log.setConfig(config);

    return arrayAppender;
};

YJSHelper.matchers = {

    /* The following is an example until a real custom matcher is added.
    toBeGoofy: function (util, customEqualityTesters) {
        return { 
            compare: function (actual, expected) {
                var result = {};

                result.pass = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);

                if (result.pass) {
                    result.message = "Expected " + actual + " not to be quite so goofy";
                } else {
                    result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
                }
                return result;
            }
        };
    }
    */

};

})(this);

// ##################################################################################################################
