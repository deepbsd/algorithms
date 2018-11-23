// Search Algorithm function questions

// This is the Buy Sell Date problem...
// Assumes {key: price value: date}
function findBuySellDates(bst){

    function findLeftLeaf(tree){
        if (!tree.left){
            return tree;
        } else {
            return findLeftLeaf(tree.left)
        }
    }

    function findRightLeaf(tree){
        if (!tree.right){
            return tree;
        } else {
            return findRightLeaf(tree.right)
        }
    }

    let lowest = findLeftLeaf(bst);
    let highest = findRightLeaf(bst);

    return `BUY: ${lowest.value} at ${lowest.key}  SELL: ${highest.value} at ${highest.key} for profit of ${highest.key - lowest.key}`
}

// This is the Egg Drop Problem...
// x = number of drops
function eggDrop(numOfEggs, numOfFloors){
    // let x = (x + (x - 1) -1) - (x + 1) + 1 + 2  // same as x(x+1)/2  floors.  find min val for k floors such that x(x+1)/2 >= k.
    // this is the same as x = (-1 + (1+8k)**0.5)/2

    let e = numOfEggs, k = numOfFloors;
    let x = (-1 + (1+8*k)**0.5)/e;  // is the divisor always 2 or the number of eggs???  Not sure here.

    return parseInt(x, 10);
}


function binarySearch(arg, arr, start, end){
    let start = start === undefined ? 0 : start;
    let end = end === undefined ?  arr.length : end;
    let item = arg;

    if (JSON.stringify(arr) !== JSON.stringify(arr.sort())){
        throw new Error("Input Array must be sorted!")
    }

    if (start > end){
        return -1;
    }


    for (let n=start; n<end; n++){
        if (arr[n]===item){
            return `Index is ${index}`;
        }
        if (item<arr[n]){
            end = parseInt(arr[n]);
            start = 0;
            return binarySearch(item, arr, start, end);
        }
        if (item>arr[n]){
            start = arr[n]+1;
            end = arr.length;
            return binarySearch(item, arr, start, end);
        }
        else return "Dammit!";
    }




}


let arr = []
for (let n=0; n<5000; n++){
    let num = Math.round(Math.random()*1000);
    arr.push(num);
}

function findMax(arr){
    let max = 0;
    arr.forEach(function(val){
        if (val>max) max = val;
    })
    return max;
}

function timeIt(){
    let start = Date.now();
    let answer = findMax(arr);
    let end = Date.now();
    return `findMax found ${answer} finished in ${end-start} milliseconds`;

}

module.exports = {findMax, timeIt, findBuySellDates, eggDrop, binarySearch}
