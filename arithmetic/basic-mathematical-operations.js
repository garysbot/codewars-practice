function basicOp(operation, value1, value2) {
    switch(operation) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}

console.log(basicOp('+', 5, 5)); // 10
console.log(basicOp('-', 5, 5)); // 0
console.log(basicOp('*', 5, 5)); // 25
console.log(basicOp('/', 5, 5)); // 1