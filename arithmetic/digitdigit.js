/*
function squareDigits(num) {
    let newNum = num.toString();
    let strResult = '';
    for (i = 0; i < newNum.length; i++) {
        strResult += newNum[i] * newNum[i];
    }
    return Number(strResult);
}
*/

function squareDigits(num){
    console.log(('' + num).split(''))
    return Number(('' + num).split('').map(function (val) { 
        return val * val;
    }).join(''));
    
  }


console.log(squareDigits(55));
