const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    
    let output = "";
    let i = 0;
    while (i < num) {
        output += string;
        i++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
