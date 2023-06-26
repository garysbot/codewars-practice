// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

function removeExclamationMarks(s) {
    let arr = s.split('!');
    let output = arr.join('');
    return output;
  }

console.log(removeExclamationMarks('Hello! World!'));