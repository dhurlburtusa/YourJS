
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.ConfigBuilder
 */
describe("YJS.log.ConfigBuilder", function () {

    describe(".build", function () {

        it("should build a `YJS.log.Config` as configured", function () {
            var ajaxAppender, ajaxLogger, cb, config, log, logger;
            
            ajaxAppender = new YJS.log.ArrayAppender();
            ajaxLogger = new YJS.log.Logger({
                appenders: ajaxAppender,
                pattern: 'ajax'
            });
            
            cb = new YJS.log.ConfigBuilder();
            cb.addLoggers(ajaxLogger);
            
            config = cb.build();
            
            log = YJS.log.Factory.get('ajax');
            logger = config.findLoggerFor(log);
            expect(ajaxLogger === logger).toBe(true);
            
            log = YJS.log.Factory.get('other');
            logger = config.findLoggerFor(log);
            expect(logger.pattern).toBe('.'); // Is the root logger.
        });

    });

});

})(this);
