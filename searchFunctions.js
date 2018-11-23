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

module.exports = {findMax, timeIt, findBuySellDates, eggDrop}
