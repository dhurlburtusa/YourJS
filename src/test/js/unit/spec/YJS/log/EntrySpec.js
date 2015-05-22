
(function (GBL, undefined) {

// @if STRICT
'use strict';
// @endif

/**
 * @uses YJS.log.Entry
 */
describe("YJS.log.Entry", function () {

    describe(".constructor", function () {

        describe("called with no configuration", function () {

            it("should create an entry at the DEBUG level with an empty message", function () {
                var entry = new YJS.log.Entry();
                expect(entry).toBeDefined();
                expect(entry.level).toBe(YJS.log.Level.DEBUG);
                expect(entry.template).toBe("");
                expect(entry.data).toEqual([]);
                expect(entry.getMessage()).toBe("");
            });

        });

        describe("called with valid configuration", function () {

            it("should create an entry at the expected level and with the expected message", function () {
                var entry = new YJS.log.Entry({ level: 10, template: "Really?! Level 10?" });
                expect(entry).toBeDefined();
                expect(entry.level).toBe(10);
                expect(entry.template).toBe("Really?! Level 10?");
                expect(entry.data).toEqual([]);
                expect(entry.getMessage()).toBe("Really?! Level 10?");
            });

        });

    });

    describe(".data", function () {

        it("should be readonly", function () {
            var entry = new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello" });
            expect(entry).toBeDefined();
            expect(entry.level).toBe(YJS.log.Level.LOG);
            expect(entry.template).toBe("Hello");
            expect(entry.data).toEqual([]);
            
            expect(function () {
                entry.data = [];
            }).toThrow();
        });

    });

    describe(".level", function () {

        it("should be readonly", function () {
            var entry = new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello" });
            expect(entry).toBeDefined();
            expect(entry.level).toBe(YJS.log.Level.LOG);
            expect(entry.template).toBe("Hello");
            expect(entry.data).toEqual([]);
            
            expect(function () {
                entry.level = YJS.log.Level.LOG + 17;
            }).toThrow();
        });

    });

    describe(".template", function () {

        it("should be readonly", function () {
            var entry = new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello" });
            expect(entry).toBeDefined();
            expect(entry.level).toBe(YJS.log.Level.LOG);
            expect(entry.template).toBe("Hello");
            expect(entry.data).toEqual([]);
            
            expect(function () {
                entry.template = "Goodbye";
            }).toThrow();
        });

    });

    describe(".getMessage", function () {

        it("should form message by merging the template with the data and append any remaining data", function () {
            var entry = new YJS.log.Entry({ level: YJS.log.Level.LOG, template: "Hello" });
            expect(entry).toBeDefined();
            expect(entry.level).toBe(YJS.log.Level.LOG);
            expect(entry.template).toBe("Hello");
            expect(entry.data).toEqual([]);
            expect(entry.getMessage()).toBe("Hello");
            
            entry = new YJS.log.Entry({
                level: YJS.log.Level.LOG,
                template: "%s must be between %i and %i. It may also be %f.",
                data: ["Foo", 1, 4, 3.14]
            });
            expect(entry).toBeDefined();
            expect(entry.level).toBe(YJS.log.Level.LOG);
            expect(entry.template).toBe("%s must be between %i and %i. It may also be %f.");
            expect(entry.data).toEqual(["Foo", 1, 4, 3.14]);
            expect(entry.getMessage()).toBe("Foo must be between 1 and 4. It may also be 3.14.");
            
        });

    });

});

})(this);
