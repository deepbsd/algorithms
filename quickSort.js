function partition(array, start, end) {
    const pivot = array[end - 1];   // this -1 is part of algorithm
    let j = start;
    for (let i=start; i<end - 1; i++) {      // this -1 is part of 0 count from array
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


function quickSort(array, start=0, end=array.length) {
    start = start;
    end = end;
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);

    return array;
};

module.exports = quickSort;
