// Search Algorithm function questions

// Assumes {key: price value: date}
function findBuySellDates(tree){

    function findLeftLeaf(tree){
        if (!tree.left){
            return tree
        } else {
            return findLeftLeaf(tree)
        }
    }

    function findRightLeaf(tree){
        if (!tree.right){
            return tree
        } else {
            return findRightLeaf(tree)
        }
    }

    let lowest = findLeftLeaf(tree);
    let highest = findRightLeaf(tree);

    //return `BUY: ${lowest.value} at ${lowest.key}  SELL: ${highest.value} at ${highest.key} for profit of ${highest.key - lowest.key}`
    return `BUY: ${lowest} SELL: ${highest}`
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

module.exports = {findMax, timeIt, findBuySellDates}
