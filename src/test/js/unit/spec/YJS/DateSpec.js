
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/*

     2a ST                                   1a ST
       |                                       |
       v                                       v
 +-----------------------------------------------------+
       |                                       |
       +---------------------------------------+
       ^                                       ^
       |                                       |
     3a DT                                   2a DT



2016-03-13T02:00:00 to 2016-11-06T02:00:00  (UTC-09:00) Alaska                                
                                            (UTC-08:00) Pacific Time (US & Canada)
                                            (UTC-07:00) Mountain Time (US & Canada)
                                            (UTC-06:00) Central Time (US & Canada)
                                            (UTC-05:00) Eastern Time (US & Canada)
                                            (UTC-05:00) Indiana (East)
                                            (UTC-04:00) Atlantic Time (Canada)
                                            (UTC-03:30) Newfoundland

2016-03-21T00:00:00 to 2016-09-21T00:00:00  (UTC+03:30) Tehran

2016-03-25T02:00:00 to 2016-10-30T02:00:00  (UTC+02:00) Jerusalem

2016-03-26T02:00:00 to 2016-10-01T00:00:00  (UTC+08:00) Ulaanbaatar

2016-03-26T22:00:00 to 2016-10-29T23:00:00  (UTC-03:00) Greenland

2016-03-27T00:00:00 to 2016-10-30T00:00:00  (UTC+02:00) Beirut

2016-03-27T00:00:00 to 2016-10-30T01:00:00  (UTC-01:00) Azores

2016-03-27T01:00:00 to 2016-10-30T02:00:00  (UTC) Dublin, Edinburgh, Lisbon, London

2016-03-27T02:00:00 to 2016-10-30T03:00:00  (UTC+02:00) E. Europe

2016-03-27T03:00:00 to 2016-10-30T04:00:00  (UTC+02:00) Athens, Bucharest
                                            (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
                                            (UTC+02:00) Istanbul

2016-03-27T04:00:00 to 2016-10-30T05:00:00  (UTC+04:00) Baku

2016-03-27T02:00:00 to 2016-10-30T03:00:00  (UTC) Casablanca
                                            (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
                                            (UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
                                            (UTC+01:00) Brussels, Copenhagen, Madrid, Paris
                                            (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb

2016-04-01T00:00:00 to 2016-10-28T00:00:00  (UTC+02:00) Damascus

2016-04-01T00:00:00 to 2016-10-28T01:00:00  (UTC+02:00) Amman

2016-04-03T02:00:00 to 2016-10-30T02:00:00  (UTC-08:00) Baja California
                                            (UTC-07:00) Chihuahua, La Paz, Mazatlan
                                            (UTC-06:00) Guadalajara, Mexico City, Monterrey

2016-09-04T02:00:00 to 2017-04-02T02:00:00  (UTC+01:00) Windhoek

2016-09-25T00:00:00 to 2017-04-02T01:00:00  (UTC+13:00) Samoa

2016-09-25T02:00:00 to 2017-04-02T03:00:00  (UTC+12:00) Auckland, Wellington

2016-10-02T00:00:00 to 2017-03-26T00:00:00  (UTC-04:00) Asuncion

2016-10-02T02:00:00 to 2017-04-02T03:00:00  (UTC+09:30) Adelaide
                                            (UTC+10:00) Canberra, Melbourne, Sydney
                                            (UTC+10:00) Hobart

2016-10-16T00:00:00 to 2017-02-19T00:00:00  (UTC-04:00) Cuiaba
                                            (UTC-03:00) Brasilia

2016-10-23T00:00:00 to 2017-01-15T03:00:00  (UTC+12:00) Fiji

================================================================================
================================================================================
================================================================================
================================================================================
================================================================================
================================================================================


DST Begins:

2016-03-13T02:00:00 for (UTC-09:00) Alaska
2016-03-13T02:00:00 for (UTC-08:00) Pacific Time (US & Canada)
2016-03-13T02:00:00 for (UTC-07:00) Mountain Time (US & Canada)
2016-03-13T02:00:00 for (UTC-06:00) Central Time (US & Canada)
2016-03-13T02:00:00 for (UTC-05:00) Eastern Time (US & Canada)
2016-03-13T02:00:00 for (UTC-05:00) Indiana (East)
2016-03-13T02:00:00 for (UTC-04:00) Atlantic Time (Canada)
2016-03-13T02:00:00 for (UTC-03:30) Newfoundland

2016-03-21T00:00:00 for (UTC+03:30) Tehran

2016-03-25T02:00:00 for (UTC+02:00) Jerusalem

2016-03-26T02:00:00 for (UTC+08:00) Ulaanbaatar

2016-03-26T22:00:00 for (UTC-03:00) Greenland

2016-03-27T00:00:00 for (UTC-01:00) Azores
2016-03-27T00:00:00 for (UTC+02:00) Beirut

2016-03-27T01:00:00 for (UTC) Dublin, Edinburgh, Lisbon, London

2016-03-27T02:00:00 for (UTC+02:00) E. Europe

2016-03-27T03:00:00 for (UTC+02:00) Athens, Bucharest
2016-03-27T03:00:00 for (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
2016-03-27T03:00:00 for (UTC+02:00) Istanbul

2016-03-27T04:00:00 for (UTC+04:00) Baku

2016-03-27T02:00:00 for (UTC) Casablanca
2016-03-27T02:00:00 for (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockhome, Vienna
2016-03-27T02:00:00 for (UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
2016-03-27T02:00:00 for (UTC+01:00) Brussels, Copenhagen, Madrid, Paris
2016-03-27T02:00:00 for (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb

2016-04-01T00:00:00 for (UTC+02:00) Amman
2016-04-01T00:00:00 for (UTC+02:00) Damascus

2016-04-03T02:00:00 for (UTC-08:00) Baja California
2016-04-03T02:00:00 for (UTC-07:00) Chihuahua, La Paz, Mazatlan
2016-04-03T02:00:00 for (UTC-06:00) Guadalajara, Mexico City, Monterrey



2016-09-04T02:00:00 for (UTC+01:00) Windhoek

2016-09-25T00:00:00 for (UTC+13:00) Samoa

2016-09-25T02:00:00 for (UTC+12:00) Auckland, Wellington

2016-10-02T00:00:00 for (UTC-04:00) Asuncion

2016-10-02T02:00:00 for (UTC+09:30) Adelaide
2016-10-02T02:00:00 for (UTC+10:00) Canberra, Melbourne, Sydney
2016-10-02T02:00:00 for (UTC+10:00) Hobart

2016-10-16T00:00:00 for (UTC-04:00) Cuiaba
2016-10-16T00:00:00 for (UTC-03:00) Brasilia

2016-10-23T00:00:00 for (UTC+12:00) Fiji

DST Ends:

2016-01-17T03:00:00 for (UTC+12:00) Fiji

2016-02-21T00:00:00 for (UTC-04:00) Cuiaba
2016-02-21T00:00:00 for (UTC-03:00) Brasilia

2016-03-27T00:00:00 for (UTC-04:00) Asuncion

2016-04-03T01:00:00 for (UTC+13:00) Samoa

2016-04-03T02:00:00 for (UTC+01:00) Windhoek

2016-04-03T03:00:00 for (UTC+09:30) Adelaide
2016-04-03T03:00:00 for (UTC+10:00) Canberra, Melbourne, Sydney
2016-04-03T03:00:00 for (UTC+10:00) Hobart
2016-04-03T03:00:00 for (UTC+12:00) Auckland, Wellington



2016-09-21T00:00:00 for (UTC+03:30) Tehran

2016-10-01T00:00:00 for (UTC+08:00) Ulaanbaatar

2016-10-28T00:00:00 for (UTC+02:00) Damascus

2016-10-28T01:00:00 for (UTC+02:00) Amman

2016-10-29T23:00:00 for (UTC-03:00) Greenland

2016-10-30T00:00:00 for (UTC+02:00) Beirut

2016-10-30T01:00:00 for (UTC-01:00) Azores

2016-10-30T02:00:00 for (UTC-08:00) Baja California
2016-10-30T02:00:00 for (UTC-07:00) Chihuahua, La Paz, Mazatlan
2016-10-30T02:00:00 for (UTC-06:00) Guadalajara, Mexico City, Monterrey
2016-10-30T02:00:00 for (UTC) Dublin, Edinburgh, Lisbon, London
2016-10-30T02:00:00 for (UTC+02:00) Jerusalem

2016-10-30T03:00:00 for (UTC) Casablanca
2016-10-30T03:00:00 for (UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
2016-10-30T03:00:00 for (UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
2016-10-30T03:00:00 for (UTC+01:00) Brussels, Copenhagen, Madrid, Paris
2016-10-30T03:00:00 for (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb
2016-10-30T03:00:00 for (UTC+02:00) E. Europe

2016-10-30T04:00:00 for (UTC+02:00) Athens, Bucharest
2016-10-30T04:00:00 for (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
2016-10-30T04:00:00 for (UTC+02:00) Istanbul

2016-10-30T05:00:00 for (UTC+04:00) Baku

2016-11-06T02:00:00 for (UTC-09:00) Alaska
2016-11-06T02:00:00 for (UTC-08:00) Pacific Time (US & Canada)
2016-11-06T02:00:00 for (UTC-07:00) Mountain Time (US & Canada)
2016-11-06T02:00:00 for (UTC-06:00) Central Time (US & Canada)
2016-11-06T02:00:00 for (UTC-05:00) Eastern Time (US & Canada)
2016-11-06T02:00:00 for (UTC-05:00) Indiana (East)
2016-11-06T02:00:00 for (UTC-04:00) Atlantic Time (Canada)
2016-11-06T02:00:00 for (UTC-03:30) Newfoundland

Invariants:

- When DST begins, the clock is ALWAYS adjusted by one full hour ahead.
- When DST ends, the clock is ALWAYS adjusted by one full hour back.

*/

var adjustsForDstInYear, extractTimezone, guessTimezoneCode,
    TIMEZONE_TO_TIMEZONE_CODE_LUT,
    TIMEZONE_CODE_TO_TIMEZONE_LUT;

TIMEZONE_TO_TIMEZONE_CODE_LUT = {
    "mountain daylight time": "MDT",
    "mountain standard time": "MST"
};

TIMEZONE_CODE_TO_TIMEZONE_LUT = {
    "MDT": "mountain daylight time",
    "MST": "Mountain Standard Time"
};

extractTimezone = function (date) {
    var timezone = null,
        i, iLen, matches, pattern, patterns, time;
    
    if (date instanceof Date) {
        patterns = [
            /\d{1,2}:\d{1,2}:\d{1,2}\s+GMT[+-]\d{3,4}\s+\((.+)\)/, // Chrome, FireFox
            /\d{1,2}:\d{1,2}:\d{1,2}\s+(.+)/ // IE
        ];
        time = date.toTimeString();
        for (i = 0, iLen = patterns.length; i < iLen; ++i) {
            pattern = patterns[i];
            matches = time.match(pattern);
            if (matches && matches.length === 2) {
                timezone = matches[1];
                break;
            }
        }
        if (TIMEZONE_CODE_TO_TIMEZONE_LUT.hasOwnProperty(timezone)) {
            timezone = TIMEZONE_CODE_TO_TIMEZONE_LUT[timezone];
        }
    }
    return timezone;
};

guessTimezoneCode = function (date) {
    var timezone, tzCode;
    
    timezone = extractTimezone(date);
    if (timezone) {
        timezone = timezone.toLowerCase();
    }
    tzCode = TIMEZONE_TO_TIMEZONE_CODE_LUT[timezone] || null;
    return tzCode;
};

adjustsForDstInYear = function(year) {
    var ONE_HR_MS = 60 * 60 * 1000,
        ONE_DAY_MS = 24 * ONE_HR_MS,
        hour = 8,
        prevDt = new Date(year, 0, 1, hour, 0, 1),
        hr, i, nextDt, yr;

    i = 1;
    nextDt = new Date(prevDt.getTime() + ONE_DAY_MS * i);
    yr = nextDt.getFullYear();
    while (yr === year) {
        hr = nextDt.getHours();
        if (hr !== hour) {
            return true;
        }
        i += 1;
        nextDt = new Date(prevDt.getTime() + ONE_DAY_MS * i);
        yr = nextDt.getFullYear();
    }

    return false;
};

/**
 * @uses YJS.Date
 */
describe("YJS.Date", function () {
    var expectToBeNow, expectToBeToday;

    beforeEach(function () {
        expectToBeNow = function (date) {
            var now = new Date();
            expect(date.getFullYear()).toBeCloseTo(now.getFullYear(), 1);
            expect(date.getMonth()).toBeCloseTo(now.getMonth(), 1);
            expect(date.getDate()).toBeCloseTo(now.getDate(), 1);
            expect(date.getHours()).toBeCloseTo(now.getHours(), 1);
            expect(date.getMinutes()).toBeCloseTo(now.getMinutes(), 1);
            expect(date.getSeconds()).toBeCloseTo(now.getSeconds(), 1);
        };
        expectToBeToday = function (date) {
            var today = new Date();
            expect(date.getFullYear()).toBeCloseTo(today.getFullYear(), 1);
            expect(date.getMonth()).toBeCloseTo(today.getMonth(), 1);
            expect(date.getDate()).toBeCloseTo(today.getDate(), 1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        };
    });

    describe(".add", function () {

        it("called with anything but a Date instance should return passed value", function () {
            var date;

            date = YJS.Date.add(undefined);
            expect(date).not.toBeDefined();

            date = YJS.Date.add(null);
            expect(date).toBeNull();

            date = YJS.Date.add(true);
            expect(date).toBe(true);

            date = YJS.Date.add(false);
            expect(date).toBe(false);

            date = YJS.Date.add(0);
            expect(date).toBe(0);

            date = YJS.Date.add(1);
            expect(date).toBe(1);

            date = YJS.Date.add("");
            expect(date).toBe("");

            date = YJS.Date.add("foo");
            expect(date).toBe("foo");
        });

        it("should add/subtract years", function () {
            var date;

            date = YJS.Date.add(new Date(1976, 2, 12, 3), YJS.Date.YEAR, 0);
            expect(date.getFullYear()).toBe(1976);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(12);
            expect(date.getHours()).toBe(3);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 2, 12, 3), YJS.Date.YEAR, 1);
            expect(date.getFullYear()).toBe(1977);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(12);
            expect(date.getHours()).toBe(3);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 2, 12, 3), YJS.Date.YEAR, 30);
            expect(date.getFullYear()).toBe(2006);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(12);
            expect(date.getHours()).toBe(3);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 2, 12, 3), YJS.Date.YEAR, -30);
            expect(date.getFullYear()).toBe(1946);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(12);
            expect(date.getHours()).toBe(3);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 1, 2), YJS.Date.YEAR, 1);
            expect(date.getFullYear()).toBe(1977);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(2);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 1, 2), YJS.Date.YEAR, 2);
            expect(date.getFullYear()).toBe(1978);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(2);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 1, 2), YJS.Date.YEAR, 3);
            expect(date.getFullYear()).toBe(1979);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(2);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 1, 2), YJS.Date.YEAR, 4);
            expect(date.getFullYear()).toBe(1980);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(2);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract months", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MONTH, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MONTH, 15);
            expect(date.getFullYear()).toBe(2001); // Year rolls over.
            expect(date.getMonth()).toBe(3);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MONTH, -15);
            expect(date.getFullYear()).toBe(1998); // Year rolls under.
            expect(date.getMonth()).toBe(9);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/substract months and adjust days as necessary", function () {
            var date;

            date = YJS.Date.add(new Date(1976, 0, 31), YJS.Date.MONTH, 1);
            expect(date.getFullYear()).toBe(1976);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(29); // February in 1976 only has 29 days -- not 31.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 2, 29), YJS.Date.MONTH, -13);
            expect(date.getFullYear()).toBe(1975);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(28); // February in 1975 only has 28 days -- not 29.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 0, 28), YJS.Date.MONTH, 25);
            expect(date.getFullYear()).toBe(1978);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(28); // February in 1978 only has 28 days -- not 31.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 0, 29), YJS.Date.MONTH, 25);
            expect(date.getFullYear()).toBe(1978);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(28); // February in 1978 only has 28 days -- not 31.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 0, 30), YJS.Date.MONTH, 25);
            expect(date.getFullYear()).toBe(1978);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(28); // February in 1978 only has 28 days -- not 31.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(1976, 0, 31), YJS.Date.MONTH, 25);
            expect(date.getFullYear()).toBe(1978);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(28); // February in 1978 only has 28 days -- not 31.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract days", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, 15);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(16);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, -15);
            expect(date.getFullYear()).toBe(1999); // Year rolls under.
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(17);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 365 days on leap year before leap day should be 1 day shy of 1 year out.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, 365);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 366 days on leap year before leap day should be 1 year out.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, 366);
            expect(date.getFullYear()).toBe(2001);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 365 days on leap year after leap day should be 1 year out.
            date = YJS.Date.add(new Date(2000, 2, 12), YJS.Date.DAY, 365);
            expect(date.getFullYear()).toBe(2001);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(12);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 365 days on year before leap year before 'leap day' should be 1 year out.
            date = YJS.Date.add(new Date(1999, 0, 1), YJS.Date.DAY, 365);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 365 days on year before leap year after 'leap day' should be 1 day shy of 1 year out.
            date = YJS.Date.add(new Date(1999, 2, 12), YJS.Date.DAY, 365);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(11); // 1 day shy.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Subtract 365 days on leap year before leap day should be 1 year back.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.DAY, -365);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Subtract 365 days on leap year after leap day should be 1 day shy of 1 year back.
            date = YJS.Date.add(new Date(2000, 3, 12), YJS.Date.DAY, -365);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(3);
            expect(date.getDate()).toBe(13); // 1 day shy.
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract hours", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, 15);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(15);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 hours should be 1 day out.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, 24);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(2);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 hours to Feb 28th during leap year should be Feb 29th.
            date = YJS.Date.add(new Date(2000, 1, 28, 13), YJS.Date.HOURS, 24);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(29);
            expect(date.getHours()).toBe(13);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 hours to Feb 28th during non-leap year should be March 1st.
            date = YJS.Date.add(new Date(2001, 1, 28, 13), YJS.Date.HOURS, 24);
            expect(date.getFullYear()).toBe(2001);
            expect(date.getMonth()).toBe(2); // Month rolls over.
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(13);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 hours to Feb 29th during leap year should be March 1st.
            date = YJS.Date.add(new Date(2000, 1, 29, 13), YJS.Date.HOURS, 24);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(2); // Month rolls over.
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(13);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 * 365 hours on leap year before leap day should be 1 day shy of 1 year out.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, 24 * 365);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // Add 24 * 366 hours on leap year before leap day should be 1 year out.
            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, 24 * 366);
            expect(date.getFullYear()).toBe(2001);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.HOURS, -15);
            expect(date.getFullYear()).toBe(1999); // Year rolls under.
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(9);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract minutes", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, 59);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, 60);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(1);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, 61);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(1);
            expect(date.getMinutes()).toBe(1);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, -59);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(1);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, -60);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MINUTES, -61);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(22);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract seconds", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, 59);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(59);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, 60);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(1);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, 61);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(1);
            expect(date.getSeconds()).toBe(1);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, -59);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(1);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, -60);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.SECONDS, -61);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(58);
            expect(date.getSeconds()).toBe(59);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("should add/subtract milliseconds", function () {
            var date;

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, 0);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, 100);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(100);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, 1000);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(1);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, 1100);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(1);
            expect(date.getMilliseconds()).toBe(100);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, -100);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(59);
            expect(date.getMilliseconds()).toBe(900);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, -1000);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(59);
            expect(date.getMilliseconds()).toBe(0);

            date = YJS.Date.add(new Date(2000, 0, 1), YJS.Date.MILLISECONDS, -1100);
            expect(date.getFullYear()).toBe(1999);
            expect(date.getMonth()).toBe(11);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(23);
            expect(date.getMinutes()).toBe(59);
            expect(date.getSeconds()).toBe(58);
            expect(date.getMilliseconds()).toBe(900);
        });

        it("should handle crossing day light savings correctly", function () {
            var ONE_HR_MS = 60 * 60 * 1000,
                HALF_HR_MS = 30 * 60 * 1000,
                TWO_HR_MS = 2 * 60 * 60 * 1000,
                adjustsForDstIn2015, dst, std, tzCode;

            adjustsForDstIn2015 = adjustsForDstInYear(2015);
            std = new Date(2015, 2, 8, 1, 30, 0);
            tzCode = guessTimezoneCode(std);
            if (tzCode == 'MST' && adjustsForDstIn2015) {
                // "Native addition"
                dst = new Date(std.getTime() + ONE_HR_MS);

                expect(dst.getFullYear()).toBe(2015);
                expect(dst.getMonth()).toBe(2);
                expect(dst.getDate()).toBe(8);
                expect(dst.getHours()).toBe(3);
                expect(dst.getMinutes()).toBe(30);
                expect(dst.getSeconds()).toBe(0);
                expect(dst.getMilliseconds()).toBe(0);

                // Should give same result as "native addition".
                dst = YJS.Date.add(std, YJS.Date.MILLISECONDS, ONE_HR_MS);

                expect(dst.getFullYear()).toBe(2015);
                expect(dst.getMonth()).toBe(2);
                expect(dst.getDate()).toBe(8);
                expect(dst.getHours()).toBe(3);
                expect(dst.getMinutes()).toBe(30);
                expect(dst.getSeconds()).toBe(0);
                expect(dst.getMilliseconds()).toBe(0);
            }

            dst = new Date(2015, 10, 1, 1, 30, 0);
            tzCode = guessTimezoneCode(dst);
            if (tzCode == 'MDT') {
                // "Native addition"
                std = new Date(dst.getTime() + ONE_HR_MS);

                expect(std.getFullYear()).toBe(2015);
                expect(std.getMonth()).toBe(10);
                expect(std.getDate()).toBe(1);
                expect(std.getHours()).toBe(1);
                expect(std.getMinutes()).toBe(30);
                expect(std.getSeconds()).toBe(0);
                expect(std.getMilliseconds()).toBe(0);

                // Should give same result as "native addition".
                std = YJS.Date.add(dst, YJS.Date.MILLISECONDS, ONE_HR_MS);

                expect(std.getFullYear()).toBe(2015);
                expect(std.getMonth()).toBe(10);
                expect(std.getDate()).toBe(1);
                expect(std.getHours()).toBe(1);
                expect(std.getMinutes()).toBe(30);
                expect(std.getSeconds()).toBe(0);
                expect(std.getMilliseconds()).toBe(0);
            }

            dst = new Date(2015, 10, 1, 1, 30, 0);
            tzCode = guessTimezoneCode(dst);
            if (tzCode == 'MDT') {
                // "Native addition"
                std = new Date(dst.getTime() + HALF_HR_MS);

                expect(std.getFullYear()).toBe(2015);
                expect(std.getMonth()).toBe(10);
                expect(std.getDate()).toBe(1);
                expect(std.getHours()).toBe(1);
                expect(std.getMinutes()).toBe(0);
                expect(std.getSeconds()).toBe(0);
                expect(std.getMilliseconds()).toBe(0);

                std = new Date(dst.getTime() + HALF_HR_MS + 1);

                expect(std.getFullYear()).toBe(2015);
                expect(std.getMonth()).toBe(10);
                expect(std.getDate()).toBe(1);
                expect(std.getHours()).toBe(1);
                expect(std.getMinutes()).toBe(0);
                expect(std.getSeconds()).toBe(0);
                expect(std.getMilliseconds()).toBe(1);

                // Should give same result as "native addition".
                std = YJS.Date.add(dst, YJS.Date.MILLISECONDS, HALF_HR_MS);

                expect(std.getFullYear()).toBe(2015);
                expect(std.getMonth()).toBe(10);
                expect(std.getDate()).toBe(1);
                expect(std.getHours()).toBe(1);
                expect(std.getMinutes()).toBe(0);
                expect(std.getSeconds()).toBe(0);
                expect(std.getMilliseconds()).toBe(0);
            }
            
        });

    });

    describe(".clearTime", function () {

        it("should clear the time", function () {
            var date, dt, y, m, d, h, i;

            date = new Date(2000, 4, 1, 13, 14, 7);
            YJS.Date.clearTime(date);
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(4);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

//        it("SHOULD", function () {
//            var date, dt, y, m, d, h, i;
//            // The following creates a date for every hour from the beginning of 2007 to the end of 2009. In between this date range
//            // exists a leap-year and several day-light savings changes. It takes about 10 seconds to run (hence why it is commented
//            // out) and none of these dates seems to necessitate DST corrections in clearTime. Therefore, no DST correction is in the
//            // code.
//            for (y = 2007; y < 2010; ++y) {
//                for (m = 0; m < 12; ++m) {
//                    for (d = 1; d < 32; ++d) {
//                        if (YJS.Date.isValid(y, m, d)) {
//                            for (h = 0; h < 24; ++h) {
//                                date = YJS.Date.clearTime(new Date(y, m, d, h, 2, 3));
//                                expect(date.getFullYear()).toBe(y);
//                                expect(date.getMonth()).toBe(m);
//                                expect(date.getDate()).toBe(d);
//                                expect(date.getHours()).toBe(0);
//                                expect(date.getMinutes()).toBe(0);
//                                expect(date.getSeconds()).toBe(0);
//                                expect(date.getMilliseconds()).toBe(0);
//                            }
//                        }
//                    }
//                }
//            }
//        });

    });

    describe(".clone", function () {

        it("called with `undefined` should return `undefined`", function () {
            var clone = YJS.Date.clone(undefined);
            expect(clone).not.toBeDefined();
        });

        it("called with `null` should return `null`", function () {
            var clone = YJS.Date.clone(null);
            expect(clone).toBeNull();
        });

        it("called with empty string should return empty string", function () {
            var clone = YJS.Date.clone('');
            expect(clone).toBe('');
        });

        it("called with `0` should return `0`", function () {
            var clone = YJS.Date.clone(0);
            expect(clone).toBe(0);
        });

        it("called with `true` should return `true`", function () {
            var clone = YJS.Date.clone(true);
            expect(clone).toBe(true);
        });

        it("called with `false` should return `false`", function () {
            var clone = YJS.Date.clone(false);
            expect(clone).toBe(false);
        });

        it("should return a new date representing the same date and time", function () {
            var clone, date;

            date = new Date(2001, 8, 11, 7, 45, 23, 729);

            clone = YJS.Date.clone(date);

            expect(clone instanceof Object).toBe(true);
            expect(clone instanceof Date).toBe(true);
            expect(date === clone).not.toBe(true); // Should not be same reference.
            expect(date).toEqual(clone);
            expect(clone).toEqual(date);
            expect(clone.getFullYear()).toEqual(2001);
            expect(clone.getMonth()).toEqual(8);
            expect(clone.getDate()).toEqual(11);
            expect(clone.getHours()).toEqual(7);
            expect(clone.getMinutes()).toEqual(45);
            expect(clone.getSeconds()).toEqual(23);
            expect(clone.getMilliseconds()).toEqual(729);
        });

    });

    describe(".diff", function () {

        it("should calculate the difference of minutes between 2 dates", function () {
            // NOTE: The following comments in this function assume a timezone where DST begins near the beginning of the year and
            // ends near the end of the year.
            var adjustsForDstIn2000, date1, date2, offset;
            
            adjustsForDstIn2000 = adjustsForDstInYear(2000);

            offset = 0;
            if (adjustsForDstIn2000) {
                offset = 60;
            }

            date1 = new Date(2000, 0, 1, 12, 0, 1);
            date2 = new Date(2001, 0, 1, 12, 0, 1);
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe(60 * 24 * 366);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-(60 * 24 * 366));

            date1 = new Date(2000, 5, 1, 12, 0, 1); // During daylight savings.
            date2 = new Date(2000, 12, 1, 12, 0, 1); // After daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe((60 * 24 * 214) + offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-((60 * 24 * 214) + offset));

            date1 = new Date(2000, 5, 1, 12, 0, 1); // During daylight savings.
            date2 = new Date(2000, 6, 1, 12, 0, 1); // During daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe(60 * 24 * 30);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-(60 * 24 * 30));

            date1 = new Date(2000, 1, 1, 12, 0, 1); // Before daylight savings.
            date2 = new Date(2000, 6, 1, 12, 0, 1); // During daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe((60 * 24 * 151) - offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-((60 * 24 * 151) - offset));

            // Due to daylight savings, one hour should be missing.
            // Daylight savings starts on March 14th, 2010.
            date1 = new Date(2010, 2, 14, 0, 0, 0);
            date2 = new Date(2010, 2, 14, 3, 0, 0);
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe(180 - offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-180 + offset);

            // Due to daylight savings, one more hour should have transpired.
            // Daylight savings ends on Nov 7th, 2010.
            date1 = new Date(2010, 10, 7, 0, 0, 0);
            date2 = new Date(2010, 10, 7, 3, 0, 0);
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe(180 + offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-180 - offset);

            date1 = new Date(2000, 0, 1, 12, 0, 0);
            date2 = new Date(2000, 0, 1, 12, 1, 59);
            expect(YJS.Date.diff(date1, date1, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MINUTES)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MINUTES)).toBe(1);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MINUTES)).toBe(-1);
        });

        it("should calculate the difference of hours between 2 dates", function () {
            // NOTE: The following comments in this function assume a timezone where DST begins near the beginning of the year and
            // ends near the end of the year.
            var adjustsForDstIn2000, date1, date2, offset;
            
            adjustsForDstIn2000 = adjustsForDstInYear(2000);

            offset = 0;
            if (adjustsForDstIn2000) {
                offset = 1;
            }

            date1 = new Date(2000, 0, 1, 12, 0, 1);
            date2 = new Date(2001, 0, 1, 12, 0, 1);
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe(24 * 366);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-24 * 366);

            date1 = new Date(2000, 5, 1, 12, 0, 1); // During daylight savings.
            date2 = new Date(2000, 12, 1, 12, 0, 1); // After daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe((24 * 214) + offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-((24 * 214) + offset));

            date1 = new Date(2000, 5, 1, 12, 0, 1); // During daylight savings.
            date2 = new Date(2000, 6, 1, 12, 0, 1); // During daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe(24 * 30);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-24 * 30);

            date1 = new Date(2000, 1, 1, 12, 0, 1); // Before daylight savings.
            date2 = new Date(2000, 6, 1, 12, 0, 1); // During daylight savings.
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe((24 * 151) - offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-((24 * 151) - offset));

            // Due to daylight savings, one hour should be missing.
            // Daylight savings starts on March 14th, 2010.
            date1 = new Date(2010, 2, 14, 0, 0, 0);
            date2 = new Date(2010, 2, 14, 3, 0, 0);
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe(3 - offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-3 + offset);

            // Due to daylight savings, one more hour should have transpired.
            // Daylight savings ends on Nov 7th, 2010.
            date1 = new Date(2010, 10, 7, 0, 0, 0);
            date2 = new Date(2010, 10, 7, 3, 0, 0);
            expect(YJS.Date.diff(date1, date1, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.HOURS)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.HOURS)).toBe(3 + offset);
            expect(YJS.Date.diff(date2, date1, YJS.Date.HOURS)).toBe(-3 - offset);
        });

        it("should calculate the difference of days between 2 dates", function () {
            var date1, date2;

            date1 = new Date(2000, 0, 1, 12, 0, 1);
            date2 = new Date(2001, 0, 1, 12, 0, 1);
            expect(YJS.Date.diff(date1, date1, YJS.Date.DAY)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.DAY)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.DAY)).toBe(366);
            expect(YJS.Date.diff(date2, date1, YJS.Date.DAY)).toBe(-366);
        });

        it("should calculate the difference of months between 2 dates", function () {
            var date1, date2;

            date1 = new Date(2000, 0, 1, 12, 0, 1);
            date2 = new Date(2001, 0, 1, 12, 0, 1);
            expect(YJS.Date.diff(date1, date1, YJS.Date.MONTH)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.MONTH)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.MONTH)).toBe(12);
            expect(YJS.Date.diff(date2, date1, YJS.Date.MONTH)).toBe(-12);
        });

        it("should calculate the difference of years between 2 dates", function () {
            var date1, date2;

            date1 = new Date(2000, 0, 1, 12, 0, 1);
            date2 = new Date(2020, 0, 1, 12, 0, 1);
            expect(YJS.Date.diff(date1, date1, YJS.Date.YEAR)).toBe(0);
            expect(YJS.Date.diff(date2, date2, YJS.Date.YEAR)).toBe(0);
            expect(YJS.Date.diff(date1, date2, YJS.Date.YEAR)).toBe(20);
            expect(YJS.Date.diff(date2, date1, YJS.Date.YEAR)).toBe(-20);
        });

    });

    describe(".getDaysInMonth", function () {

        it("called with anything but a Date instance should return undefined", function () {
            var daysInMonth;

            daysInMonth = YJS.Date.getDaysInMonth(undefined);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(null);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(true);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(false);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(0);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth(1);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth("");
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getDaysInMonth("foo");
            expect(daysInMonth).not.toBeDefined();
        });

        it("called with January should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 0));
            expect(daysInMonth).toBe(31);
        });

        it("called with February on a leap year should return 29", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 1));
            expect(daysInMonth).toBe(29);
        });

        it("called with February on a non-leap year should return 29", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2001, 1));
            expect(daysInMonth).toBe(28);
        });

        it("called with March should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 2));
            expect(daysInMonth).toBe(31);
        });

        it("called with April should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 3));
            expect(daysInMonth).toBe(30);
        });

        it("called with May should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 4));
            expect(daysInMonth).toBe(31);
        });

        it("called with June should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 5));
            expect(daysInMonth).toBe(30);
        });

        it("called with July should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 6));
            expect(daysInMonth).toBe(31);
        });

        it("called with August should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 7));
            expect(daysInMonth).toBe(31);
        });

        it("called with September should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 8));
            expect(daysInMonth).toBe(30);
        });

        it("called with October should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 9));
            expect(daysInMonth).toBe(31);
        });

        it("called with November should return 30", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 10));
            expect(daysInMonth).toBe(30);
        });

        it("called with December should return 31", function () {
            var daysInMonth = YJS.Date.getDaysInMonth(new Date(2000, 11));
            expect(daysInMonth).toBe(31);
        });

    });

    describe(".getFirstDateOfMonth", function () {

        it("called with anything but a Date instance should return `undefined`", function () {
            var daysInMonth;

            daysInMonth = YJS.Date.getFirstDateOfMonth(undefined);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth(null);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth(true);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth(false);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth(0);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth(1);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth("");
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getFirstDateOfMonth("foo");
            expect(daysInMonth).not.toBeDefined();
        });

        it("called with January 31st, 2000 should return January 1st, 2000 with no time info", function () {
            var date = YJS.Date.getFirstDateOfMonth(new Date(2000, 0, 31, 15, 45));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("called with February 29th, 2000 should return February 1st, 2000 with no time info", function () {
            var date = YJS.Date.getFirstDateOfMonth(new Date(2000, 1, 29));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("called with February 31st, 2000 should return March 1st, 2000 with no time info", function () {
            // JavaScript rolls over 2000-02-31 to 2000-03-02.
            var date = YJS.Date.getFirstDateOfMonth(new Date(2000, 1, 31));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

    });

    describe(".getLastDateOfMonth", function () {

        it("called with anything but a Date instance should return `undefined`", function () {
            var daysInMonth;

            daysInMonth = YJS.Date.getLastDateOfMonth(undefined);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth(null);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth(true);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth(false);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth(0);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth(1);
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth("");
            expect(daysInMonth).not.toBeDefined();

            daysInMonth = YJS.Date.getLastDateOfMonth("foo");
            expect(daysInMonth).not.toBeDefined();
        });

        it("called with January 1st, 2000 should return January 31st, 2000 with no time info", function () {
            var date = YJS.Date.getLastDateOfMonth(new Date(2000, 0, 1, 15, 45));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("called with February 29th, 2000 should return February 29st, 2000 with no time info", function () {
            var date = YJS.Date.getLastDateOfMonth(new Date(2000, 1, 29));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(1);
            expect(date.getDate()).toBe(29);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

        it("called with February 31st, 2000 should return March 31st, 2000 with no time info", function () {
            // JavaScript rolls over 2000-02-31 to 2000-03-02.
            var date = YJS.Date.getLastDateOfMonth(new Date(2000, 1, 31));
            expect(date.getFullYear()).toBe(2000);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(31);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);
        });

    });

    describe(".isLeapYear", function () {

        it("called with anything but a Date instance should return `undefined`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(undefined);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(null);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(true);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(false);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(0);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear(1);
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear("");
            expect(answer).not.toBeDefined();

            answer = YJS.Date.isLeapYear("foo");
            expect(answer).not.toBeDefined();
        });

        it("called with leap year date should return `true`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(new Date(2400, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2008, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2004, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(2000, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(1996, 0));
            expect(answer).toBe(true);

            answer = YJS.Date.isLeapYear(new Date(800, 0));
            expect(answer).toBe(true);
        });

        it("called with non-leap year date should return `false`", function () {
            var answer;

            answer = YJS.Date.isLeapYear(new Date(2300, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2200, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2100, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2001, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2002, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2003, 0));
            expect(answer).toBe(false);

            answer = YJS.Date.isLeapYear(new Date(2005, 0));
            expect(answer).toBe(false);
        });

    });

    describe(".isValid", function () {

        it("called with valid date info should return true", function () {
            var isValid;

            isValid = YJS.Date.isValid(2000, 0);
            expect(isValid).toBe(true);

            isValid = YJS.Date.isValid(2000, 1, 29);
            expect(isValid).toBe(true);

            isValid = YJS.Date.isValid(2001, 1, 28);
            expect(isValid).toBe(true);
        });

        it("called with invalid date info should return false", function () {
            var isValid;

            isValid = YJS.Date.isValid(undefined);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(undefined, undefined);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(undefined, undefined, undefined);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2000, 1, 30);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2001, 1, 29);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2001, 3, 31);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2001, 5, 31);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2001, 8, 31);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2001, 10, 31);
            expect(isValid).toBe(false);

            isValid = YJS.Date.isValid(2000, 2, 12, 2, 75, 0);
            expect(isValid).toBe(false);
        });

    });

    describe(".now", function () {

        it("should return a number representing the current time", function () {
            var now = YJS.Date.now();
            expect(now instanceof Object).toBe(true);
            expect(now instanceof Date).toBe(true);
            expectToBeNow(now);
        });

    });

    describe(".today", function () {

        it("should return a new date representing the current date and time", function () {
            var today = YJS.Date.today();
            expect(today instanceof Object).toBe(true);
            expect(today instanceof Date).toBe(true);
            expectToBeToday(today);
        });

    });

});

})(this);
