// Find max number of an array of numbers

function max(array) {
    if (array.length === 0) {
        return null;
    }

    let currentMax = array[0];
    for (let i=1; i<array.length; i++) {
        const item = array[i];
        if (item > currentMax) {
            currentMax = item;
        }
    }
    console.log(currentMax);
    return currentMax;
};

module.exports = max;