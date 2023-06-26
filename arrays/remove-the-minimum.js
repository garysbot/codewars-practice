// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {
    let smallestIndex = numbers.indexOf(Math.min(...numbers));
    numbers.splice(smallestIndex, 1);
    return numbers;
}

let numbers = [1,2,3,4,5];

console.log(removeSmallest(numbers));
