function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

let start = Date.now();

function bubbleSort(array) {
    let swaps = 0;
    for (let i=0; i<array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    let end = Date.now();
    //console.log('Bubble sorted array in '+(end-start)+' milliseconds!');
    return array;
};

module.exports = bubbleSort;