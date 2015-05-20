
// @if SUPPORT_LTE_IE8
/**
 * Console polyfill.
 * 
 * Makes calls to window.console and its methods not break if the browser does not support console or is not
 * currently enable. For instance, window.console may not be enabled when the IE developer tools are not open.
 * 
 * Modified from post on http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer/16916941.
 */
(function (GBL) {
    // This function must only be run in the global scope so that `this` is a reference to the global scope which
    // will be `window` in browsers.
    var console = GBL.console = GBL.console || {},
        noop = function () { /* RealGo noop function. */ },
        log = console.log || noop, // Instead of nooping, consider trying to update the browser's status bar or populating an HTMLElement with the messages.
        assert = function (expression, message) {
            if (!expression) {
                log(message);
            }
        },
        start = function (name) { return function (param) { log("Start " + name + ": " + param); }; },
        end = function (name) { return function (param) { log("End " + name + ": " + param); }; },
        method, methods;

    /*
     * Internet Explorer (IE 10): http://msdn.microsoft.com/en-us/library/ie/hh772169(v=vs.85).aspx#methods
     * 
     * assert(test, message, optionalParams)
     * clear()
     * count(countTitle)
     * debug(message, optionalParams)
     * dir(value, optionalParams)
     * dirxml(value)
     * error(message, optionalParams)
     * group(groupTitle)
     * groupCollapsed(groupTitle)
     * groupEnd([groupTitle])
     * info(message, optionalParams)
     * log(message, optionalParams)
     * msIsIndependentlyComposed(oElementNode),
     * profile(reportName),
     * profileEnd(),
     * time(timerName),
     * timeEnd(timerName),
     * trace(),
     * warn(message, optionalParams)
     * 
     * "assert", "clear", "count", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd",
     * "info", "log", "msIsIndependentlyComposed", "profile", "profileEnd", "time", "timeEnd", "trace", "warn"
     * 
     * 
     * Safari (2012. 07. 23.): https://developer.apple.com/library/safari/#documentation/AppleApplications/Conceptual/Safari_Developer_Guide/DebuggingYourWebsite/DebuggingYourWebsite.html#//apple_ref/doc/uid/TP40007874-CH8-SW20
     * 
     * assert(expression, message-object)
     * count([title])
     * debug([message-object])
     * dir(object)
     * dirxml(node)
     * error(message-object)
     * group(message-object)
     * groupEnd()
     * info(message-object)
     * log(message-object)
     * profile([title])
     * profileEnd([title])
     * time(name)
     * markTimeline("string")
     * trace()
     * warn(message-object)
     * 
     * "assert", "count", "debug", "dir", "dirxml", "error", "group", "groupEnd", "info", "log", "profile",
     * "profileEnd", "time", "markTimeline", "trace", "warn"
     * 
     * 
     * Firefox (2013. 05. 20.): https://developer.mozilla.org/en-US/docs/Web/API/console
     * 
     * debug(obj1 [, obj2, ..., objN])
     * debug(msg [, subst1, ..., substN])
     * dir(object)
     * error(obj1 [, obj2, ..., objN])
     * error(msg [, subst1, ..., substN])
     * exception
     * group()
     * groupCollapsed()
     * groupEnd()
     * info(obj1 [, obj2, ..., objN])
     * info(msg [, subst1, ..., substN])
     * log(obj1 [, obj2, ..., objN])
     * log(msg [, subst1, ..., substN])
     * time(timerName)
     * timeEnd(timerName)
     * trace()
     * warn(obj1 [, obj2, ..., objN])
     * warn(msg [, subst1, ..., substN])
     * 
     * "debug", "dir", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "time", "timeEnd",
     * "trace", "warn"
     * 
     * 
     * Chrome (2013. 01. 25.): https://developers.google.com/chrome-developer-tools/docs/console-api
     * 
     * assert(expression, object)
     * clear()
     * count(label)
     * debug(object [, object, ...])
     * dir(object)
     * dirxml(object)
     * error(object [, object, ...])
     * group(object[, object, ...])
     * groupCollapsed(object[, object, ...])
     * groupEnd()
     * info(object [, object, ...])
     * log(object [, object, ...])
     * profile([label])
     * profileEnd()
     * time(label)
     * timeEnd(label)
     * timeStamp([label])
     * trace()
     * warn(object [, object, ...])
     * 
     * "assert", "clear", "count", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd",
     * "info", "log", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "trace", "warn"
     * 
     * 
     * Chrome (2012. 10. 04.): https://developers.google.com/web-toolkit/speedtracer/logging-api
     * 
     * markTimeline(String)
     * 
     * "markTimeline"
     */
    methods = {
        assert: assert,
        clear: noop, // TODO: Consider logging a "divider" like message in place of clearing the console. Something like "================================================================================" would probably work.
        count: noop, // TODO: Consider making a function that will closely replicate what is done natively. May only be capable of keeping a count of any one label but would be better than nothing.
        debug: log,
        dir: log, // TODO: Consider making a function that will closely replicate what is done natively instead of just falling back to `log`.
        dirxml: log,
        error: log,
        exception: log,
        group: start('Group'),
        groupCollapsed: start('GroupCollapsed'),
        groupEnd: end('Group'),
        info: log,
        log: log,
//        markTimeline: log,
        profile: start('Profile'),
        profileEnd: end('Profile'),
        table: noop,
        time: start('Time'),
        timeEnd: end('Time'), // TODO: Consider displaying the duration between `time` being called and `timeEnd` being called.
        timeStamp: noop, // TODO: Consider displaying the label and the duration between `time` being called and `timeStamp` being called.
        trace: noop, // TODO: If possible, consider making a function that can print out some sort of contextual information. Is at least the current function name where trace is called available?
        warn: log
    };

    for (method in methods) {
        if (methods.hasOwnProperty(method) && !(method in console) ) { // define undefined methods as best-effort methods
            console[method] = methods[method];
        }
    }
})(this);
// @endif
