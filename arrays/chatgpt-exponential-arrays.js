function powerArray(array) {
    let processing = [];
    let result = [];
    for (i = 0; i < array.length; i++){
        processing.push(array[i]);
        for (j = 0; j < array.length; j++) {
            result.push(Math.pow(processing[j], processing[j+1]));
        }
        
    }
    return result;
}

let arrTest = [[2,3], [3,3], [4,2]];

console.log(arrTest[0]);

console.log(powerArray([[2,3], [3,3], [4,2]]));