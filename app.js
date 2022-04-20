// sum challenge
/*
 * take 2 numbers and add them together
 */

const sum = (a, b) => {
    return a + b;
};

const hoursIntoSeconds = (hours) => {
    // vars are mostly for readibility purposes
    const minutes = 60;
    const seconds = 60;
    return hours * minutes * seconds;
};

const calcPerimeter = (length, width) => {
    return (length + width) * 2;
};

const calcTriangleArea = (base, height) => {
    return base * height * 0.5;
};

const appendFrontEnd = (text) => {
    return `${text}Frontend`;
};

const sumGreaterThan100 = (num1, num2) => {
    return sum(num1, num2) > 100;
};

const lessThanOrEqualToZero = (num) => {
    return num <= 0;
};

const oppositeBoolean = (bool) => !bool;

const isNotZero = (num) => num !== 0;

const calcRemainder = (num1, num2) => num1 % num2;

module.exports = {
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
};
