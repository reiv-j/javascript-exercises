const removeFromArray = function(arr, ...elements) {
    const elementsToRemove = [...elements]

    for (el of elementsToRemove) {
        if (arr.indexOf(el) !== -1) {
            const index = arr.indexOf(el);
            arr.splice(index, 1);
        }
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
