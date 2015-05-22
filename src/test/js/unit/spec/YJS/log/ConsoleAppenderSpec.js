
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * Tests the console appender. Unfortunately, there is no programmatic way to verify the correctness of these tests
 * involving the use of the web-console. These should be run manually through a browser where one can look at the
 * output of the web-console to verify correctness. Also, because different browser's implementation of the
 * web-console varies slightly, the output may vary between browsers. Ultimately, something meaningful and useful
 * should be displayed.
 * 
 * Remove the `x` in `xdescribe` below before running manually. Add it back in before committing any changes.
 
 * @uses YJS.log.ConsoleAppender
 */
describe("YJS.log.ConsoleAppender", function () {
    var appender = YJS.log.ConsoleAppender.INSTANCE;
    
    xdescribe(".append", function () {

        describe("called with no placeholders and no substitutes", function () {

            it("should log a simple message", function () {
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.DEBUG, template: "Hello World! (debug)" }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.INFO, template: "Hello World! (info)" }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello World! (log)" }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.WARN, template: "Hello World! (warn)" }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.ERROR, template: "Hello World! (error)" }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.FATAL, template: "Hello World! (fatal)" }));
            });

        });

        describe("called with no placeholders and some substitutes", function () {

            it("should log the simple message with the substitutes appended", function () {
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.DEBUG, template: "Hello World! (debug)", data: ["this is extra.", { foo: 'bar' }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.INFO, template: "Hello World! (info)", data: ["this is extra.", { foo: 'bar' }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello World! (log)", data: ["this is extra.", { foo: 'bar' }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.WARN, template: "Hello World! (warn)", data: ["this is extra.", { foo: 'bar' }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.ERROR, template: "Hello World! (error)", data: ["this is extra.", { foo: 'bar' }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.FATAL, template: "Hello World! (fatal)", data: ["this is extra.", { foo: 'bar' }] }));
            });

        });

        describe("called with some placeholders and some substitutes", function () {

            it("should log the data-merged message with the substitutes appended", function () {
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.DEBUG, template: "Hello %s! (debug)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.INFO, template: "Hello %s (info)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello %s! (log)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.WARN, template: "Hello %s! (warn)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.ERROR, template: "Hello %s! (error)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.FATAL, template: "Hello %s! (fatal)", data: ["World", "this is extra.", { foo: 'bar', qux: false }] }));
            });

        });

    });

});

})(this);
