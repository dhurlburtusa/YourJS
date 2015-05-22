
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

describe("YJS.log.Level", function () {

    it("enums have correct relative values", function () {
        expect(YJS.log.Level.INFO > YJS.log.Level.DEBUG).toBe(true);
        expect(YJS.log.Level.LOG > YJS.log.Level.DEBUG).toBe(true);
        expect(YJS.log.Level.WARN > YJS.log.Level.DEBUG).toBe(true);
        expect(YJS.log.Level.ERROR > YJS.log.Level.DEBUG).toBe(true);
        expect(YJS.log.Level.FATAL > YJS.log.Level.DEBUG).toBe(true);

        expect(YJS.log.Level.DEBUG < YJS.log.Level.INFO).toBe(true);
        expect(YJS.log.Level.LOG > YJS.log.Level.INFO).toBe(true);
        expect(YJS.log.Level.WARN > YJS.log.Level.INFO).toBe(true);
        expect(YJS.log.Level.ERROR > YJS.log.Level.INFO).toBe(true);
        expect(YJS.log.Level.FATAL > YJS.log.Level.INFO).toBe(true);

        expect(YJS.log.Level.DEBUG < YJS.log.Level.LOG).toBe(true);
        expect(YJS.log.Level.INFO < YJS.log.Level.LOG).toBe(true);
        expect(YJS.log.Level.WARN > YJS.log.Level.LOG).toBe(true);
        expect(YJS.log.Level.ERROR > YJS.log.Level.LOG).toBe(true);
        expect(YJS.log.Level.FATAL > YJS.log.Level.LOG).toBe(true);

        expect(YJS.log.Level.DEBUG < YJS.log.Level.WARN).toBe(true);
        expect(YJS.log.Level.INFO < YJS.log.Level.WARN).toBe(true);
        expect(YJS.log.Level.LOG < YJS.log.Level.WARN).toBe(true);
        expect(YJS.log.Level.ERROR > YJS.log.Level.WARN).toBe(true);
        expect(YJS.log.Level.FATAL > YJS.log.Level.WARN).toBe(true);

        expect(YJS.log.Level.DEBUG < YJS.log.Level.ERROR).toBe(true);
        expect(YJS.log.Level.INFO < YJS.log.Level.ERROR).toBe(true);
        expect(YJS.log.Level.LOG < YJS.log.Level.ERROR).toBe(true);
        expect(YJS.log.Level.WARN < YJS.log.Level.ERROR).toBe(true);
        expect(YJS.log.Level.FATAL > YJS.log.Level.ERROR).toBe(true);

        expect(YJS.log.Level.DEBUG < YJS.log.Level.FATAL).toBe(true);
        expect(YJS.log.Level.INFO < YJS.log.Level.FATAL).toBe(true);
        expect(YJS.log.Level.LOG < YJS.log.Level.FATAL).toBe(true);
        expect(YJS.log.Level.WARN < YJS.log.Level.FATAL).toBe(true);
        expect(YJS.log.Level.ERROR < YJS.log.Level.FATAL).toBe(true);
    });

});

})(this);
