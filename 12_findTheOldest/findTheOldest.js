const findTheOldest = function(arr) {
    const oldest = arr.reduce((prevPerson, nextPerson) => {
        if (prevPerson.yearOfDeath - prevPerson.yearOfBirth > nextPerson.yearOfDeath - nextPerson.yearOfBirth) {
            return prevPerson;
        } else {
            return nextPerson;
        }
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
