/*
    This app simply tests the time performance of three sorting algorithms in 
    separate files: bubleSort.js, mergeSort.js, and quickSort.js. 
*/

let BS = require('./bubbleSort');
let MS = require('./mergeSort');
let QS = require('./quickSort');


function genArr(){
    arr = [];
    for (var i=0; i<10000; i++){
        var n = Math.round(Math.random()*1000000+1);
        arr.push(n);
    }
    return arr;
}


function testSearch(arr, type, name){
    let start = Date.now();

    if (type === 'bs'){ let newTest = new BS.bubbleSort(arr) }
    if (type === 'ms'){ let newTest = new MS.mergeSort(arr) }
    if (type === 'qs'){ let newTest = new QS.quickSort(arr) }

    let end = Date.now();
    let duration = end-start;

    console.log(`${name} Sort completed in ${duration} milliseconds!`);
}


testSearch(genArr(), 'bs', 'Bubble');
testSearch(genArr(), 'ms', 'Merge');
testSearch(genArr(), 'qs', 'Quick');
