function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


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

    return array;
};

function genArr(){
    arr = [];
    for (let n=0; n<10000; n++){
        let num = Math.floor(Math.random()*10000);
        arr.push(num);
    }
    return arr;
}

module.exports = {bubbleSort,swap,genArr};
