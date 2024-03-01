const fibonacci = function(posVal) {
    const pos = +posVal;

    if (pos < 0) {
        return "OOPS";
    }

    if (pos === 0) return 0;

    let fibArr = [1, 1];

    if (pos === 1 || pos === 2) {
        return 1;
    } else {
        for (let i = 2; i != pos; i++) {
            fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
        }
    }

    return fibArr[pos - 1];
};

// Do not edit below this line
module.exports = fibonacci;
