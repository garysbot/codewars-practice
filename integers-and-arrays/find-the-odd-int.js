// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    const count = {};
    
    A.forEach(element => {
        count[element] = (count[element] || 0) + 1;
    });

    for(prop in count){
        if(count[prop] % 2 !== 0) return Number(prop);
    }

}



console.log(findOdd([7])); // 7
console.log(findOdd([0])); // 0
console.log(findOdd([1,1,2])); // 2
console.log(findOdd([0,1,0,1,0])); // 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); // 4