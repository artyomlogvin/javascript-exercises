const removeFromArray = function(array, ...args) {
    for (let i = 0; i < array.length; i++){
        for (const arg of args) {
            if (array[i] === arg) {
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;
