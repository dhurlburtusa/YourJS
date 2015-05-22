
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.Log
 */
describe("YJS.log.Log", function () {

    describe(".constructor", function () {

        describe("called with no arguments", function () {

            it("should construct a log with the default name", function () {
                var log = new YJS.log.Log();
                expect(log).toBeDefined();
                expect(log.name).toBe("");
                
                log = new YJS.log.Log({});
                expect(log).toBeDefined();
                expect(log.name).toBe("");
            });

        });

        describe("called with whitespace in the name", function () {

            it("should throw a TypeError", function () {
                expect(function () {
                    new YJS.log.Log({ name: " " });
                }).toThrow();
                
                expect(function () {
                    new YJS.log.Log({ name: "foo. .bar" });
                }).toThrow();
                
                expect(function () {
                    new YJS.log.Log({ name: " foo.bar" });
                }).toThrow();
            });

        });

        describe("called with empty name parts", function () {

            it("should throw a TypeError", function () {
                expect(function () {
                    new YJS.log.Log({ name: ".." });
                }).toThrow();
                
                expect(function () {
                    new YJS.log.Log({ name: "foo..bar" });
                }).toThrow();
                
                expect(function () {
                    new YJS.log.Log({ name: "foo.bar.." });
                }).toThrow();
            });

        });

    });

    describe(".log", function () {

        describe("used with a custom configuration", function () {
            var config, fooAppender, fooLogger, fooBarAppender, fooBarLogger, rootAppender, rootLogger;
            
            beforeEach(function () {
                rootAppender = new YJS.log.ArrayAppender();
                fooAppender = new YJS.log.ArrayAppender();
                fooBarAppender = new YJS.log.ArrayAppender();
                
                fooBarLogger = new YJS.log.Logger({
                    appenders: fooBarAppender,
                    minLevel: YJS.log.Level.ERROR,
                    pattern: 'foo.bar'
                });
                
                fooLogger = new YJS.log.Logger({
                    appenders: fooAppender,
                    minLevel: YJS.log.Level.WARN,
                    pattern: 'foo'
                });
                
                rootLogger = new YJS.log.Logger({
                    appenders: rootAppender,
                    minLevel: YJS.log.Level.LOG,
                    pattern: '.'
                });
                
                config = new YJS.log.Config({
                    loggers: [fooBarLogger, fooLogger, rootLogger]
                });
            });
            
            it("should log to expected loggers", function () {
                var fooLog, fooBarLog, fooBarQuxLog, log, logEntries;
                
                log = YJS.log.Factory.get('');
                fooLog = YJS.log.Factory.get('foo');
                fooBarLog = YJS.log.Factory.get('foo.bar');
                fooBarQuxLog = YJS.log.Factory.get('foo.bar.qux');
                
                YJS.log.Log.setConfig(config);
                
                expect(rootAppender.getLogEntries().length).toBe(0);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.debug("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(0);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.info("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(0);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.log("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(1);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.warn("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(2);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.error("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(3);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                log.fatal("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.debug("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.info("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.log("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(0);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.warn("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(1);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.error("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(2);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooLog.fatal("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooBarLog.debug("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooBarLog.info("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooBarLog.log("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooBarLog.warn("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(0);
                
                fooBarLog.error("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(1);
                
                fooBarLog.fatal("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(2);
                
                fooBarQuxLog.debug("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(2);
                
                fooBarQuxLog.info("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(2);
                
                fooBarQuxLog.log("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(2);
                
                fooBarQuxLog.warn("I shouldn't be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(2);
                
                fooBarQuxLog.error("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(3);
                
                fooBarQuxLog.fatal("I should be logged!");
                expect(rootAppender.getLogEntries().length).toBe(4);
                expect(fooAppender.getLogEntries().length).toBe(3);
                expect(fooBarAppender.getLogEntries().length).toBe(4);
            });

        });

    });

});

})(this);
