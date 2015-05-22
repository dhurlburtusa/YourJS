
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.Factory
 * @uses YJS.log.Log
 */
describe("YJS.log.Factory", function () {

    describe(".get", function () {

        it("should return a YJS.log.Log instance with the specified name", function () {
            var testLog;

            YJS.log.Factory.__.reset();
            
            testLog = YJS.log.Factory.get('test');

            expect(testLog instanceof YJS.log.Log).toBe(true);
            expect(testLog.name).toBe('test');
        });

        describe("called multiple times with same name parameter", function () {

            it("should return same YJS.log.Log instance each time", function () {
                var testLog1, testLog2;
                
                YJS.log.Factory.__.reset();
                testLog1 = YJS.log.Factory.get('test');
                testLog2 = YJS.log.Factory.get('test');
                
                expect(testLog1).not.toBeNull();
                expect(testLog2).not.toBeNull();
                expect(testLog1 === testLog2).toBe(true);
            });

        });

    });

    describe(".getLogNames", function () {

        it("should return all the names of the logs created", function () {
            var logNames;
            
            YJS.log.Factory.__.reset();
            
            YJS.log.Factory.get('foo');
            YJS.log.Factory.get('foo.bar');
            YJS.log.Factory.get('foo.bar.qux');
            YJS.log.Factory.get('foo.bar.qux.corge');
            
            logNames = YJS.log.Factory.getLogNames();
            
            expect(logNames).toContain('foo.bar.qux.corge');
            expect(logNames).toContain('foo.bar.qux');
            expect(logNames).toContain('foo.bar');
            expect(logNames).toContain('foo');
        });

    });

    describe(".getLogList", function () {

        it("should return references to all the logs created", function () {
            var expectedLogNames, i, iLen, log, logs;
            
            YJS.log.Factory.__.reset();
            
            YJS.log.Factory.get('foo');
            YJS.log.Factory.get('foo.bar');
            YJS.log.Factory.get('foo.bar.qux');
            YJS.log.Factory.get('foo.bar.qux.corge');
            
            logs = YJS.log.Factory.getLogList();
            
            expectedLogNames = ['foo', 'foo.bar', 'foo.bar.qux', 'foo.bar.qux.corge'];
            
            expect(logs.length).toBe(4);
            for (i = 0, iLen = logs.length; i < iLen ; ++i) {
                log = logs[i];
                expect(expectedLogNames).toContain(log.name);
            }
        });

    });

});

})(this);
