var countSheep = function (num){
    //your code here
    var counted = '';
    for (i = 0; i <= num; i++){
      counted += `${i} sheep...`;
    }
    return counted;
  }

  
console.log(countSheep(10));