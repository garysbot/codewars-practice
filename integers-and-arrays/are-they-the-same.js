// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(array1, array2){
    //your code here
    if (array1 === [] || array2 === []){
        return false;
    }

    if (array1 === null || array2 === null){
        return false;
    }

    let sortedArr1 = array1.sort(function(a,b) { return a - b;});
    let sortedArr2 = array2.sort(function(a,b) { return a - b;});
    let squaredArr1 = sortedArr1.map((element) => element * element);

    var is_same = (squaredArr1.length == sortedArr2.length) && squaredArr1.every(function(element, index) {
        return element === sortedArr2[index]; 
    });
    return is_same;
}

/*
for (let i = 0; i < squaredArr1.length; i++){
        for (let j = 0; j < sortedArr2.length; j++){
            if(squaredArr1[i] === sortedArr2[j]){
                return true;
            } else {
                return false;
            }
        }
    }
*/

/* working test cases
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]; //true
let a1 = [121, 144, 19, 161, 19, 144, 19, 11]
let a2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361] // false

console.log(comp(a1, a2)); // true
*/



console.log(comp(a1, a2)); //false