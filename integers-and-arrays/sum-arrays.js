// Sum Numbers https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum(numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++){
        total += numbers[i]; 
    }
    return total; 
}

let test = [1, 5.2, 4, 0, -1];

console.log(sum(test));