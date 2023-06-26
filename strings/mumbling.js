// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

/*
logic:
- input is a string
- output is a string
- the letter repeats 1 more than the index of the letter
- i.e. string "abc" -> "A-Bb-Ccc"

1. split string into array
2. create new storage array that string interpolates
3. for loop that pushes the interpolated and duplicated letters into new string

*/

function accum(s) {
    let strArr = s.split('');
    let output = `${strArr[0].toUpperCase}-`;
    for (let i = 1; i < strArr.length; i++) {
        output += strArr[i] * [i];
    }
    return output;
}

console.log(accum('abc'));