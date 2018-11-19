// Search Algorithm function questions

// Assumes {key: price val: date}
function findBuySellDates(tree){
    let lowest = findLeftLeaf(){

    }
    let highest = findRightLeaf(){

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

module.exports = {findMax, timeIt}
