const getTheTitles = function(array) {
    /* index into subarrays to get title 
    add it to our newArray */
    const booksArray = [];
    for (let i = 0; i < array.length; i++) {
        booksArray.push(array[i].title);
    }
    return booksArray;
};

// Do not edit below this line
module.exports = getTheTitles;
