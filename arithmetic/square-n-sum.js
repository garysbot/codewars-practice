// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers) {
    let bigNumber = 0;
    for (i = 0; i < numbers.length; i++) {
        bigNumber += numbers[i] * numbers[i]
    }
    return bigNumber;
}

console.log(squareSum([1,2,2]));