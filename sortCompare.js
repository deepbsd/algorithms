var BS = require('./bubbleSort');
var MS = require('./mergeSort');
var QS = require('./quickSort');
var arr = [];


function resetArr(arr){
    arr = [];
    for (var i=0; i<5000; i++){
        var n = Math.round(Math.random()*1000000+1);
        arr.push(n);
    }
    return arr;
}


function testSearch(arr, type, name){
    let start = Date.now();
    let newArr = resetArr(arr);
    let newTest = new type(newArr);
    let end = Date.now();
    console.log(`${name} Sort completed in ${end-start} milliseconds!`);
}


testSearch(arr, BS, 'Bubble');
testSearch(arr, MS, 'Merge');
testSearch(arr, QS, 'Quick');