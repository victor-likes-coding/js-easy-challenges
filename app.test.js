const { sum, hoursIntoSeconds } = require("./app.js");

describe("Sum function", () => {
    test("1 + 1 = 2", () => {
        expect(sum(1, 1)).toBe(2);
    });
    test("-1 - 1 = -2", () => {
        expect(sum(-1, -1)).toBe(-2);
    });
});

describe("Hour to second conversion function", () => {
    test("2 hours => 7200 seconds", () => {
        expect(hoursIntoSeconds(2)).toBe(7200);
    });
    test("10 hours => 36000 seconds", () => {
        expect(hoursIntoSeconds(10)).toBe(36000);
    });
    test("24 hours => 86400 seconds", () => {
        expect(hoursIntoSeconds(24)).toBe(86400);
    });
});
