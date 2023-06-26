function fakeBin(x){
    let updated = '';
    for (i = 0; i < x.length; i++){
      if(x[i] < 5){
        return x.replaceAll(x[i], 0);
      } 
      else {
        return x.replaceAll(x[i], 1);
      }
    }
  }
  
  console.log(fakeBin('45385593107843568'));
  