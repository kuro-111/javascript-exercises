const removeFromArray = function(arr, numToRemove) {

    let newArr = arr.filter((OriginalArray) => {

        if (numToRemove.includes(OriginalArray)) {
            return false;
      }
        else {
            return true;
        }
    });

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
