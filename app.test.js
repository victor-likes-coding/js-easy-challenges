const {
    sum,
    hoursIntoSeconds,
    calcPerimeter,
    calcTriangleArea,
    appendFrontEnd,
    sumGreaterThan100,
    lessThanOrEqualToZero,
    oppositeBoolean,
    isNotZero,
    calcRemainder,
    isOdd,
    booleanInteger,
    isLoggedInAndSubscribed,
} = require("./app.js");

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

describe("add 'Frontend' to string function", () => {
    test("string: Apple => AppleFrontend", () => {
        expect(appendFrontEnd("Apple")).toBe("AppleFrontend");
    });
    test("string: Banana => BananaFrontend", () => {
        expect(appendFrontEnd("Banana")).toBe("BananaFrontend");
    });
    test("string: Orange => OrangeFrontend", () => {
        expect(appendFrontEnd("Orange")).toBe("OrangeFrontend");
    });
});

describe("function that determines if sum is greater than 100", () => {
    test("sums of 20, 10 = 30 => false", () => {
        expect(sumGreaterThan100(20, 10)).toBe(false);
    });
    test("sums of 50, 60 = 110 => true", () => {
        expect(sumGreaterThan100(50, 60)).toBe(true);
    });
    test("sums of 100, -50 =50 => false", () => {
        expect(sumGreaterThan100(100, -50)).toBe(false);
    });
});

describe("function tells if arg <= 0", () => {
    test("3 => false", () => {
        expect(lessThanOrEqualToZero(3)).toBe(false);
    });

    test("0 => true", () => {
        expect(lessThanOrEqualToZero(0)).toBe(true);
    });
    test("-2 => true", () => {
        expect(lessThanOrEqualToZero(-2)).toBe(true);
    });
});

describe("fn returns opposite boolean value", () => {
    test("in: true => false", () => {
        expect(oppositeBoolean(true)).toBe(false);
    });
    test("in: false => true", () => {
        expect(oppositeBoolean(false)).toBe(true);
    });
});

describe("fn returns if input is not 0", () => {
    test("in: 5 => true", () => {
        expect(isNotZero(5)).toBe(true);
    });
    test("in: 5 => fase", () => {
        expect(isNotZero(0)).toBe(false);
    });
    test("in: null => true", () => {
        expect(isNotZero(null)).toBe(true);
    });
});

describe("fn to calculate remainder", () => {
    test("in: 4, 2 out: 0", () => {
        expect(calcRemainder(4, 2)).toBe(0);
    });
    test("in: 7, 8 out: 7", () => {
        expect(calcRemainder(7, 8)).toBe(7);
    });
    test("in: 9, 8 out: 1", () => {
        expect(calcRemainder(9, 8)).toBe(1);
    });
});

describe("fn to tell if input is odd", () => {
    test("in: 1 => true", () => {
        expect(isOdd(1)).toBe(true);
    });
    test("in: 2 => false", () => {
        expect(isOdd(2)).toBe(false);
    });
    test("in: 3 => true", () => {
        expect(isOdd(3)).toBe(true);
    });
});

describe("fn to return 1 on even or -1 on odd", () => {
    test("in: 1 -> -1", () => {
        expect(booleanInteger(1)).toBe(-1);
    });
    test("in: 2 -> 1", () => {
        expect(booleanInteger(2)).toBe(1);
    });
    test("in: 5 -> -1", () => {
        expect(booleanInteger(5)).toBe(-1);
    });
});

describe("fn to check if user logged in and subscribed", () => {
    test(`in: "LOGGED_IN", "SUBSCRIBED out: true`, () => {
        expect(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED")).toBe(true);
    });
    test(`in: "LOGGED_IN", "UNSUBSCRIBED out: false`, () => {
        expect(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED")).toBe(false);
    });
    test(`in: "LOGGED_OUT", "SUBSCRIBED: out: false`, () => {
        expect(isLoggedInAndSubscribed("LOGGED_OUT", "SUBSCRIBED")).toBe(false);
    });
});
