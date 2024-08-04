const removeFromArray = function(array, ...num) {
    //let newArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j] === array[i]) {
                array.splice(i, 1);
                if (i > 0) i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
