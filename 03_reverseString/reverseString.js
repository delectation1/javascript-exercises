const reverseString = function(string) {
    let newString = "";
    let oldString = string;

    for (let i = oldString.length - 1; i > -1; i--) {
        newString += oldString[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
