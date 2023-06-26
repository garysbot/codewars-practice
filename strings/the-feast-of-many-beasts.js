function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
        return true;
    } else {
        return false;
    }
}

var beast = 'fish';
console.log(beast.length-1);

console.log(feast('great blue heron', 'garlic naan'));