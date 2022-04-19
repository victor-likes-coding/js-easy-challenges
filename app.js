// sum challenge
/*
 * take 2 numbers and add them together
 */

const sum = (a, b) => {
    return a + b;
};

const hoursIntoSeconds = (hours) => {
    const minutes = 60;
    const seconds = 60;
    return hours * minutes * seconds;
};

module.exports = {
    sum,
    hoursIntoSeconds,
};
