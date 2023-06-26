// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
    let combined = s1.split('').concat(s2.split('')).sort();
    combined = combined.filter(function(str) {
        return /\S/.test(str);
    });
    combined = [...new Set(combined)];
    combined = combined.sort() 
    return combined.join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));