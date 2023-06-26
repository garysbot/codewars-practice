// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
    let grown = 1;
    for (let i = 0; i < x.length; i++) {
        grown *= x[i];
    }
    return grown;
    
}

let x = [1,2,3,4]

console.log(grow(x));