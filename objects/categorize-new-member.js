// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    // ...
    let outputArr = [];
    for (i = 0; i < data.length; i++){
        let [age, handicap] = data[i];

        if (age >= 55 && handicap > 7){
            outputArr.push('Senior');
        } else {
            outputArr.push('Open');
        }
    }
    return outputArr;
  }

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])) // ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])) // ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])) // ['Senior', 'Open', 'Open', 'Open'])