
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.ArrayAppender
 */
describe("YJS.log.ArrayAppender", function () {

    describe(".constructor", function () {

        describe("called with out any arguments", function () {

            it("should use the default configuration", function () {
                var appender, i, iLen;
                
                appender = new YJS.log.ArrayAppender();
                expect(appender).toBeDefined();
                expect(appender.getLogEntries().length).toBe(0);
                
                // The following is the only way I believe I can test the default configuration by using the public API.
                for (i = 0, iLen = 5000; i < iLen; ++i) {
                    appender.append(new YJS.log.Entry({ level: YJS.log.Level.INFO, message: 'msg: ' + (i + 0) }));
                }
                expect(appender.getLogEntries().length).toBe(5000);
                appender.append(new YJS.log.Entry({ level: YJS.log.Level.INFO, message: 'msg: ' + (i++ + 0) }));
                expect(appender.getLogEntries().length).toBe(5000);                
            });

        });

    });

});

})(this);
