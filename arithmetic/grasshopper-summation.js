// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
    let sum = 0;
    for (i = 0; i < num + 1; i++){
        sum += i;
    }
    return sum;
}

console.log(summation(2));