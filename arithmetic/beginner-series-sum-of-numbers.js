// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum(a, b) {
   if (a === b) {
      return a;
   }

   if (a > b) {
      let temp = a;
      a = b;
      b = temp;
   }

   let sum = 0;
   for (let i = a; i <= b; i++){
      sum += i;
   }
   return sum;
}

console.log(getSum(5,0));