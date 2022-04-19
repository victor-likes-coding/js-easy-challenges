const { sum, hoursIntoSeconds, calcPerimeter, calcTriangleArea } = require("./app.js");

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

describe("Perimeter function", () => {
    test("l: 6, w: 7 => 26", () => {
        expect(calcPerimeter(6, 7)).toBe(26);
    });
    test("l: 20, w: 10 => 60", () => {
        expect(calcPerimeter(20, 10)).toBe(60);
    });
    test("l: 2, w: 9 => 22", () => {
        expect(calcPerimeter(2, 9)).toBe(22);
    });
});

describe("Triangle area function", () => {
    test("base: 3, height: 2 => 3", () => {
        expect(calcTriangleArea(3, 2)).toBe(3);
    });
    test("base: 10, height: 10 => 50", () => {
        expect(calcTriangleArea(10, 10)).toBe(50);
    });
    test("base: 20, height: 20 => 200", () => {
        expect(calcTriangleArea(20, 20)).toBe(200);
    });
});
