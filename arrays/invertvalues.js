function invert(array) {
    var inverted = [];
    inverted = array.map(x => x * -1);
    return inverted;
}

array = [1,2,3,4,5];

invert(array);
