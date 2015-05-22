
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.Logger
 */
describe("YJS.log.Logger", function () {

    describe(".lotAt", function () {

        it("should only delegate to the appends when level is with configured level range", function () {
            var appender, logger;
            
            appender = new YJS.log.ArrayAppender();
            logger = new YJS.log.Logger({
                appenders: appender,
                minLevel: YJS.log.Level.LOG,
                pattern: '.'
            });
            
            expect(appender.getLogEntries().length).toBe(0);
            logger.logAt(YJS.log.Level.DEBUG, "Hello World!");
            expect(appender.getLogEntries().length).toBe(0);
            logger.logAt(YJS.log.Level.INFO, "Hello World!");
            expect(appender.getLogEntries().length).toBe(0);
            logger.logAt(YJS.log.Level.LOG, "Hello World!");
            expect(appender.getLogEntries().length).toBe(1);
        });

    });

    describe(".willHandle", function () {

        it("should always return `true` when using the default `minLevel` and 'maxLevel` configurations", function () {
            var logger = new YJS.log.Logger({
                pattern: '.'
            });
            
            expect(logger.willHandle(-100000)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.DEBUG)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.INFO)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.LOG)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.WARN)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.ERROR)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.FATAL)).toBe(true);
            expect(logger.willHandle(100000)).toBe(true);
        });

        it("should return expected values based on logger's configuration", function () {
            var logger = new YJS.log.Logger({
                maxLevel: YJS.log.Level.FATAL,
                minLevel: YJS.log.Level.WARN,
                pattern: '.'
            });
            
            expect(logger.willHandle(-100000)).toBe(false);
            expect(logger.willHandle(YJS.log.Level.DEBUG)).toBe(false);
            expect(logger.willHandle(YJS.log.Level.INFO)).toBe(false);
            expect(logger.willHandle(YJS.log.Level.LOG)).toBe(false);
            expect(logger.willHandle(YJS.log.Level.WARN)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.ERROR)).toBe(true);
            expect(logger.willHandle(YJS.log.Level.FATAL)).toBe(true);
            expect(logger.willHandle(100000)).toBe(false);
        });

    });

});

})(this);
