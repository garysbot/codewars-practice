function maps(x){
    let newArr = [];
    newArr = x.map(i => i * 2);
    return newArr;
}

let x = [1,2,3];

console.log(maps(x));