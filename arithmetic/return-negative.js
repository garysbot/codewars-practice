// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
    // Code?
    if(num > 0){
        let negNum = '-' + num;
        return parseFloat(negNum);
    } else {
        return num;
    }
  }

console.log(makeNegative(5));