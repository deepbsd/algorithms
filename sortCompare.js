/*
    This app simply tests the time performance of three sorting algorithms in 
    separate files: bubleSort.js, mergeSort.js, and quickSort.js. 
*/

let BS = require('./bubbleSort');
let MS = require('./mergeSort');
let QS = require('./quickSort');
let arr = [];


function resetArr(arr){
    arr = [];
    for (var i=0; i<5000; i++){
        var n = Math.round(Math.random()*1000000+1);
        arr.push(n);
    }
    return arr;
}


function testSearch(arr, type, name){
    console.log("type: ",typeof type)
    let start = Date.now();
    let newArr = resetArr(arr);
    let newTest = new type(newArr);
    let end = Date.now();
    console.log(`${name} Sort completed in ${end-start} milliseconds!`);
}


testSearch(arr, BS, 'Bubble');
testSearch(arr, MS, 'Merge');
testSearch(arr, QS, 'Quick');
