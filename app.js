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

module.exports = {
    sum,
    hoursIntoSeconds,
    calcPerimeter,
};
