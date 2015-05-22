
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.Config
 */
describe("YJS.log.Config", function () {

    describe(".constructor", function () {

        describe("called without a root logger", function () {

            it("should use the default root logger as a fallback", function () {
                var NONAME_LOG, logConfig, logger, testLogger;
                
                testLogger = new YJS.log.Logger({
                    appenders: [YJS.log.ArrayAppender.INSTANCE],
                    pattern: 'test'
                });
                
                logConfig = new YJS.log.Config({
                    loggers: [testLogger]
                });
                
                NONAME_LOG = YJS.log.Factory.get("");
                logger = logConfig.findLoggerFor(NONAME_LOG);
                expect(logger).toBeDefined();
                expect(logger === YJS.log.Logger.ROOT_DEFAULT).toBe(true);
            });

        });

    });

    describe(".findLoggerFor", function () {

        it("should use the default root logger as a fallback", function () {
            var arrayAppender, fooLogger, fooBarLogger, log, logConfig, logger;
            
            arrayAppender = YJS.log.ArrayAppender({ maxEntries: 100 }); 
            fooLogger = new YJS.log.Logger({
                appenders: [arrayAppender],
                pattern: 'foo'
            });
            
            fooBarLogger = new YJS.log.Logger({
                appenders: [arrayAppender],
                pattern: 'foo.bar'
            });

            logConfig = new YJS.log.Config({
                loggers: [fooLogger, fooBarLogger]
            });
            
            log = YJS.log.Factory.get("");
            logger = logConfig.findLoggerFor(log);
            expect(logger).toBeDefined();
            expect(logger === YJS.log.Logger.ROOT_DEFAULT).toBe(true);
            
            log = YJS.log.Factory.get("test");
            logger = logConfig.findLoggerFor(log);
            expect(logger).toBeDefined();
            expect(logger === YJS.log.Logger.ROOT_DEFAULT).toBe(true);
            
            log = YJS.log.Factory.get("foo");
            logger = logConfig.findLoggerFor(log);
            expect(logger).toBeDefined();
            expect(logger === fooLogger).toBe(true);
            
            log = YJS.log.Factory.get("foo.bar");
            logger = logConfig.findLoggerFor(log);
            expect(logger).toBeDefined();
            expect(logger === fooBarLogger).toBe(true);
            
            log = YJS.log.Factory.get("foo.bar.quux");
            logger = logConfig.findLoggerFor(log);
            expect(logger).toBeDefined();
            expect(logger === fooBarLogger).toBe(true);
        });

    });

});

})(this);
