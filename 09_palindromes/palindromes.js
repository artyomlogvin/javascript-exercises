const palindromes = function (str) {
    let puncArr = [',', '.', '!', '?', ':', ';', ' '];

    let arr = str.toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        if (puncArr.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }

    console.log(arr.join(''));

    let revArr = str.toLowerCase().split('');
    for (let i = 0; i < revArr.length; i++) {
        if (puncArr.includes(revArr[i])) 
        {
            revArr.splice(i, 1);
            i--;
        }
    }
    revArr.reverse();

    console.log(revArr.join(''));

    if (arr.join('') == revArr.join('')) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
