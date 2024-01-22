const reverseString = function(str) {
    const strArray = str.split("");
    const newArray = [];
    for (char of strArray) {
        newArray.unshift(char);
    }
    return newArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
