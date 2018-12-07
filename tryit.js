
// *** Bubble Sort
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

//*** Merge Sort
function mergeSort(arr){
    if (arr.length <= 1){
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right, arr);
}

function merge(left, right, arr){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length){

        if (left[leftIndex] < right[rightIndex]){
            arr[outputIndex++] = left[leftIndex++];
        } else {
            arr[outputIndex++] = right[rightIndex++];
        }
    }

    // These two for loops essentially 
    // are a "join" of left and right arrays
    for (let i=leftIndex; i<left.length; i++){
        arr[outputIndex++] = left[i];
    }

    for (let i=rightIndex; i<right.length; i++){
        arr[outputIndex++] = right[i];
    }

    return arr;
}


// *** Quick Sort
function quickSort(arr, start=0, end=arr.length){
    start = start;
    end = end;
    if (start>=end){ return arr; }

    const middle = partition(arr, start, end)
    arr = quickSort(arr, start, middle);
    arr = quickSort(arr, middle+1, end);

    return arr;
}


function partition(arr, start, end){
    const pivot = arr[end-1];
    let j = start;

    for (let i=start; i<end-1; i++){
        if (arr[i]<=pivot){
            swap(arr, i, j);
            j++;
        }
    }
    swap(arr, end-1, j);
    return j;
}






module.exports = {swap,bubbleSort,merge,mergeSort,quickSort,partition}

