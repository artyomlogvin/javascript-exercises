const findTheOldest = function(array) {
    let result = array.reduce(function(resInd, person, index) {
        if (isNaN(person.yearOfDeath)) {
            let age = new Date().getFullYear() - person.yearOfBirth;
            if (age > resInd[1]) {
                return [index, age];
            }
        } else if (person.yearOfDeath - person.yearOfBirth > resInd[1]) {
            return [index, person.yearOfDeath - person.yearOfBirth];
        } else {
            return resInd;
        }
    }, [0, 0]);

    return array[result[0]];
};

// Do not edit below this line
module.exports = findTheOldest;
