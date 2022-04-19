const { sum } = require("./app.js");

describe("Sum function", () => {
    test("1 + 1 = 2", () => {
        expect(sum(1, 1)).toBe(2);
    });
    test("-1 - 1 = -2", () => {
        expect(sum(-1, -1)).toBe(-2);
    });
});
