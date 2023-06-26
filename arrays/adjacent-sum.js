const adjacentSum = arr => {
    let newArr = [];

    for (i = 0; i < arr.length - 1; i++ ){
        newArr.push(arr[i] + arr[i + 1]);
    }
    return newArr;
}

example = [3, 7, 2, 11];

console.log(adjacentSum(example));