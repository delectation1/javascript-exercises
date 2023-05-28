const fibonacci = function(num) {

    // store fibonacci numbers into array to index to get member
    const sequence = [1,1];
    if (num < 0) {
        return "OOPS"
    }
    let number = parseInt(num);

    for (let i = 0; i < number - 1; i++) {
        let nextFib = sequence[i] + sequence[i+1];
        sequence.push(nextFib);
    }

    return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
