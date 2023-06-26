// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
    // ...
    let arr = numbers.split(' ');
    let result = [];
    let highNum = result.push(Math.max(...arr));
    let lowNum = result.push(Math.min(...arr));
    return result.join(' ');
    
  }

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); // "42 -9"
console.log(highAndLow("1 2 3")); // "3 1"

