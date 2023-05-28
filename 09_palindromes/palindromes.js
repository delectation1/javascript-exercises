const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/\s]/g,"");
    let reversedString = newString.split("").reverse().join("");
    if (reversedString == newString) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
