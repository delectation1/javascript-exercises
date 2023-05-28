const sumAll = function(num1, num2) {

    // validate user response
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    // initialize variable to hold final sum, start and end number of loop
    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
