// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

/* logic
- input: array of numbers (2 or more numbers); target integer
- output: indices of the array elements that sum and equal the target integer

- 1. for loop to sum the array elements
- 2. if then statement to check value of the summations

*/

function twoSum(numbers, target) {
    let indexTracker = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] + numbers[i+1] !== target) {
            i++;
        } else {
            indexTracker.push(numbers.indexOf(numbers[i], numbers[i+1]));
        }
    }
    return indexTracker;
}

console.log(twoSum([1,2,3], 4));