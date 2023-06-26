// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript

function reverseWords(str) {
    // Go for it
    let stepOne = str.split('').reverse().join('');
    return stepOne.split(' ').reverse().join(' ');
  }

console.log(reverseWords('Hello World!'));