function descendingOrder(n){
    let arr = n.toString().split('');
    let newArr = [];
    
    for (i = 0; i < arr.length; i++){
        if (arr[i] > arr[i+1]){
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i+1]);
        }
    }
    return newArr;
    return newArr.join('');
}

console.log(descendingOrder(12345));