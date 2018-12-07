
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

    // Joining the two partitions here...
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


// *** Answers to Sorting Interview Questions
function sortWithMinMax(arr, min, max){
//     ???
}

//Write an algorithm to shuffle an array into a random order
//in-place (i.e. without creating a new array).
function shuffleArr(arr){
    let newArr = [];
    let randNum;
    while(arr.length){
        randNum = Math.floor(Math.random()*arr.length);
        newArr.push(arr.splice(randNum-1,1).pop());
    }
    return newArr;
}

function shuffleInPlace(arr){
    for (let i=0; i<arr.length; i++){
        let tmp = arr[Math.floor(Math.random()*arr.length)];
        swap(arr, arr.indexOf(tmp), i)
    }
    return arr;
}


//Imagine that I gave you twenty books to sort in alphabetical order. How
//would you go about it? Can you express this as an algorithm?

let bookArr = [
    "Grapes of Wrath",
    "For Whom the Bell Tolls",
    "Learning the Bash Shell",
    "The Complete Wonder Woman Collection Staring Lynda Carter",
    "Banacek, The Hidden Solutions",
    "Mother Goose"
]

function bookSort(bookArr){
    let sortedBooks = [];
    let numVal;
    let bookObj;
    for (let i=0; i<bookArr.length; i++){
        let title = bookArr[i];
        numVal = 0;
        bookObj = {};
        for (let j=0; j<4; j++){
            numVal = numVal+title.charCodeAt(j);
            bookObj = {numVal: title};
        }
        while (sortedBooks.length<bookArr.length){
            if (Object.keys(bookOjb) < bookArr[i]){
                sortedBooks.splice(i,1,title)
            }else {
                sortedBooks.splice(i+1,1,title)
            }
        }
    }
    return sortedBooks;

}


module.exports = {bookArr,bookSort,shuffleArr,shuffleInPlace,swap,bubbleSort,merge,mergeSort,quickSort,partition}



