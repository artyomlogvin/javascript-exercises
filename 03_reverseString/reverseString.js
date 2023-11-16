const reverseString = function(string) {
    let array = [];

    let i = 0;
    while (i < string.length) {
        array.push(string[i]);
        i++;
    }

    array.reverse();

    let result = "";
    i = 0
    while (i < array.length) {
        result += array[i];
        i++;
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
