/* $Id$ */

(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

var calcOffsets, date, getTimezone, timezones;

/*
Timezone: MST

console.log('toDateString: ' + (new Date(0)).toDateString());
console.log('toDateString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toDateString());
toDateString: Wed Dec 31 1969
toDateString: Sat Jul 11 2015

console.log('toISOString: ' + (new Date(0)).toISOString());
console.log('toISOString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toISOString());
toISOString: 1970-01-01T00:00:00.000Z
toISOString: 2015-07-11T21:19:26.138Z

console.log('toLocaleDateString: ' + (new Date(0)).toLocaleDateString());
console.log('toLocaleDateString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toLocaleDateString());
toLocaleDateString: 12/31/1969
toLocaleDateString: 7/11/2015

console.log('toLocaleString: ' + (new Date(0)).toLocaleString());
console.log('toLocaleString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toLocaleString());
toLocaleString: 12/31/1969, 5:00:00 PM
toLocaleString: 7/11/2015, 3:19:26 PM

console.log('toLocaleTimeString: ' + (new Date(0)).toLocaleTimeString());
console.log('toLocaleTimeString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toLocaleTimeString());
toLocaleTimeString: 5:00:00 PM
toLocaleTimeString: 3:19:26 PM

console.log('toString: ' + (new Date(0)).toString());
console.log('toString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toString());
toString: Wed Dec 31 1969 17:00:00 GMT-0700 (Mountain Standard Time)
toString: Sat Jul 11 2015 15:19:26 GMT-0600 (Mountain Daylight Time)

console.log('toTimeString: ' + (new Date(0)).toTimeString());
console.log('toTimeString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toTimeString());
toTimeString: 17:00:00 GMT-0700 (Mountain Standard Time)
toTimeString: 15:19:26 GMT-0600 (Mountain Daylight Time)

console.log('toUTCString: ' + (new Date(0)).toUTCString());
console.log('toUTCString: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).toUTCString());
toUTCString: Thu, 01 Jan 1970 00:00:00 GMT
toUTCString: Sat, 11 Jul 2015 21:19:26 GMT

console.log('valueOf: ' + (new Date(0)).valueOf());
console.log('valueOf: ' + (new Date(2015, 6, 11, 15, 19, 26, 138)).valueOf());
valueOf: 0
valueOf: 1436649566149
*/
/*
timezones = [
    { code: "", name: "Alaska Daylight Time", offset: 480 },
    { code: "", name: "Alaska Standard Time", offset: 540 },
    { code: "", name: "Atlantic Daylight Time", offset: 180 },
    { code: "", name: "Atlantic Standard Time", offset: 240 },
    { code: "", name: "Central Daylight Time", offset: 300 },
    { code: "", name: "Central Standard Time", offset: 360 },
    { code: "", name: "Central Europe Daylight Time", offset: -120 },
    { code: "", name: "Central Europe Standard Time", offset: -60 },
    { code: "", name: "China Daylight Time", offset: -540 },
    { code: "", name: "China Standard Time", offset: -480 },
    { code: "", name: "Eastern Daylight Time", offset: 240 },
    { code: "", name: "Eastern Standard Time", offset: 300 },
    { code: "", name: "Eastern Europe Daylight Time", offset: -180 },
    { code: "", name: "Eastern Europe Standard Time", offset: -120 },
    { code: "", name: "GMT Daylight Time", offset: -60 },
    { code: "", name: "GMT Standard Time", offset: 0 },
    { code: "", name: "India Standard Time", offset: -330 },
    { code: "", name: "Local Daylight Time", offset: -840 },
    { code: "", name: "Local Daylight Time", offset: -660 },
    { code: "", name: "Local Daylight Time", offset: -630 },
    { code: "", name: "Local Daylight Time", offset: -300 },
    { code: "", name: "Local Daylight Time", offset: -270 },
    { code: "", name: "Local Daylight Time", offset: 0 },
    { code: "", name: "Local Daylight Time", offset: 120 },
    { code: "", name: "Local Daylight Time", offset: 150 },
    { code: "", name: "Local Standard Time", offset: -840 },
    { code: "", name: "Local Standard Time", offset: -780 },
    { code: "", name: "Local Standard Time", offset: -660 },
    { code: "", name: "Local Standard Time", offset: -600 },
    { code: "", name: "Local Standard Time", offset: -570 },
    { code: "", name: "Local Standard Time", offset: -420 },
    { code: "", name: "Local Standard Time", offset: -390 },
    { code: "", name: "Local Standard Time", offset: -360 },
    { code: "", name: "Local Standard Time", offset: -345 },
    { code: "", name: "Local Standard Time", offset: -300 },
    { code: "", name: "Local Standard Time", offset: -270 },
    { code: "", name: "Local Standard Time", offset: -240 },
    { code: "", name: "Local Standard Time", offset: -210 },
    { code: "", name: "Local Standard Time", offset: 60 },
    { code: "", name: "Local Standard Time", offset: 120 },
    { code: "", name: "Local Standard Time", offset: 180 },
    { code: "", name: "Local Standard Time", offset: 210 },
    { code: "", name: "Local Standard Time", offset: 270 },    
    { code: "", name: "Local Standard Time", offset: 600 },
    { code: "", name: "Local Standard Time", offset: 660 },
    { code: "", name: "Local Standard Time", offset: 720 },
    { code: "MDT", name: "Mountain Daylight Time", offset: 360 },
    { code: "MST", name: "Mountain Standard Time", offset: 420 },
    { code: "", name: "New Zealand Daylight Time", offset: -780 },
    { code: "", name: "New Zealand Standard Time", offset: -720 },
    { code: "", name: "Japan Standard Time", offset: -540 },
    { code: "", name: "Pacific Daylight Time", offset: 420 },
    { code: "", name: "Pacific Standard Time", offset: 480 },
    { code: "", name: "Russia Standard Time", offset: -180 },
];
*/
/*
getTimezone = function (date) {
    var timezone = null,
        matches, time;
    
    if (date instanceof Date) {
        time = date.toTimeString();
        matches = time.match(/\d{1,2}:\d{1,2}:\d{1,2}\s+GMT[+-]\d{3,4}\s+\((.+)\)/);
        if (matches && matches.length === 2) {
            timezone = matches[1];
        }
    }
    return timezone;
};

date = new Date(0);
console.log(date.toTimeString());
console.log(getTimezone(date));
console.log(date.getTimezoneOffset());

date = new Date(2015, 6, 11, 15, 19, 26, 138);
console.log(date.toTimeString());
console.log(getTimezone(date));
console.log(date.getTimezoneOffset());
*/

calcOffsets = function (date) {
    var days = 0, months = 0, years = 0,
        hours, minutes, timezoneOffset;
    
    timezoneOffset = date.getTimezoneOffset();

    minutes = timezoneOffset % 60;
    hours = Math.floor(timezoneOffset / 60);
    
    
    return { years: years, months: months, days: days, hours: hours, minutes: minutes };
};
    
describe("Date", function () {

    it("should have a `now` function", function () {
        expect(typeof Date.now).toBe('function');
    });

    it("should have a `parse` function", function () {
        expect(typeof Date.parse).toBe('function');
    });

    it("should have a `UTC` function", function () {
        expect(typeof Date.UTC).toBe('function');
    });

    describe("UTC", function () {

        it("called with no arguments should return `NaN`", function () {
            expect(Date.UTC()).toBeNaN()
        });

        it("called with a single `Number` argument should return `NaN`", function () {
            expect(Date.UTC(1000)).toBeNaN()
        });

        it("called with the epoch should return `0`", function () {
            expect(Date.UTC(1970, 0)).toBe(0)
        });

    });

    describe("instance", function () {

        it("should be of type `'object'`", function () {
            var date = new Date();
            expect(typeof date).toBe('object');
        });

        it("should be an instance of `Date`", function () {
            var date = new Date();
            expect(date instanceof Date).toBe(true);
        });

        it("should be an instance of `Object`", function () {
            var date = new Date();
            expect(date instanceof Object).toBe(true);
        });

        it("should not be an instance of `Number`", function () {
            var date = new Date();
            expect(date instanceof Number).toBe(false);
        });

        it("should not be an instance of `String`", function () {
            var date = new Date();
            expect(date instanceof String).toBe(false);
        });

    });

    /*
     * The `Date` constructor assumes local time.
     */
    describe("constructor", function () {

        it("called with year, month, but no day, hours, minutes, seconds, or millseconds should create date configured with first day of month, zero hours, zero minutes, zero seconds, and zero milliseconds in local time", function () {
            var offsets,
                date = new Date(2004, 4);

            expect(date.getFullYear()).toBe(2004);
            expect(date.getMonth()).toBe(4);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(0);
            expect(date.getMinutes()).toBe(0);
            expect(date.getSeconds()).toBe(0);
            expect(date.getMilliseconds()).toBe(0);

            // FIXME: The following is only correct for timezones with positive offsets.
            // Need to find a better way to determine the expected values.
            offsets = calcOffsets(date);
            expect(date.getUTCFullYear()).toBe(2004 + offsets.years);
            expect(date.getUTCMonth()).toBe(4 + offsets.months);
            expect(date.getUTCDate()).toBe(1 + offsets.days);
            expect(date.getUTCHours()).toBe(0 + offsets.hours);
            expect(date.getUTCMinutes()).toBe(0 + offsets.minutes);
            expect(date.getUTCSeconds()).toBe(0);
            expect(date.getUTCMilliseconds()).toBe(0);
            
        });

        it("interprets values in local time when year, month, etc is specified.", function () {
            var date = new Date(2015, 0, 1, 2, 3, 4, 5);
            // NOTE: The following getters are specified to return local time.
            expect(date.getFullYear()).toBe(2015);
            expect(date.getMonth()).toBe(0);
            expect(date.getDate()).toBe(1);
            expect(date.getHours()).toBe(2);
            expect(date.getMinutes()).toBe(3);
            expect(date.getSeconds()).toBe(4);
            expect(date.getMilliseconds()).toBe(5);
            
            date = new Date(2015, 2, 8, 4, 5, 6, 7);
            // NOTE: The following getters are specified to return local time.
            expect(date.getFullYear()).toBe(2015);
            expect(date.getMonth()).toBe(2);
            expect(date.getDate()).toBe(8);
            expect(date.getHours()).toBe(4);
            expect(date.getMinutes()).toBe(5);
            expect(date.getSeconds()).toBe(6);
            expect(date.getMilliseconds()).toBe(7);

            date = new Date(1970, 0);
            expect(date.getTime()).toBe(date.getTimezoneOffset() * 1000 * 60);
        });

        it("called with the epoch should have the same number of milliseconds from the epoch as its timezone offset times 60,000.", function () {
            var date;
            
            date = new Date(1970, 0);
            expect(date.getTime()).toBe(date.getTimezoneOffset() * 1000 * 60);
        });

        it("called with `0` should have an internal representation of `0` milliseconds from the epoch.", function () {
            var date;
            
            date = new Date(0);
            expect(date.getTime()).toBe(0);
            expect(date.getUTCFullYear()).toBe(1970);
            expect(date.getUTCMonth()).toBe(0);
            expect(date.getUTCDate()).toBe(1);
            expect(date.getUTCHours()).toBe(0);
            expect(date.getUTCMinutes()).toBe(0);
            expect(date.getUTCSeconds()).toBe(0);
            expect(date.getUTCMilliseconds()).toBe(0);
        });

    });

/*
            Method List:
            date.getDate();
            date.getDay();
            date.getFullYear();
            date.getHours();
            date.getMilliseconds();
            date.getMinutes();
            date.getMonth();
            date.getSeconds();
            date.getTime();
            date.getTimezoneOffset();
            date.getUTCDate();
            date.getUTCDay();
            date.getUTCFullYear(); // ?
            date.getUTCHours();
            date.getUTCMilliseconds();
            date.getUTCMinutes();
            date.getUTCMonth();
            date.getUTCSeconds();
            date.getYear(); // Deprecated. Use `getFullYear` instead.
            
            date.setDate();
            date.setFullYear();
            date.setHours();
            date.setMilliseconds();
            date.setMinutes();
            date.setMonth();
            date.setSeconds();
            date.setTime();
            date.setUTCDate();
            date.setUTCFullYear();
            date.setUTCHours();
            date.setUTCMilliseconds();
            date.setUTCMinutes();
            date.setUTCMonth();
            date.setUTCSeconds();
            date.setYear(); // Deprecated. Use `setFullYear` instead.
            
            date.toDateString();
            date.toGMTString(); // Deprecated. Use `toUTCString` instead.
            date.toISOString();
            date.toLocaleDateString();
            date.toLocaleString();
            date.toLocaleTimeString();
            date.toString();
            date.toTimeString();
            date.toUTCString();
            date.valueOf();
            
            Date.UTC();
            Date.now();
            Date.parse();
*/
    // TODO: Add more specs.

});

})(this);
