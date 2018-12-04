function swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function bubbleSort(arr){
    let swaps = 0;

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]){
            swap(arr, i, i+1);
            swaps++;
        }
    }

    if (swaps > 0){
        return bubbleSort(arr);
    }

    return arr;
}


module.exports = {swap, bubbleSort}
