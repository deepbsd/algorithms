/* 
* This type of search comes up a lot.  indexOf() is 
* a common application of it.
*/

function indexOf(array, value) {
    for (let i=0; i<array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

