// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s){
    let sConv = 1000;
    let mConv = 60000;
    let hConv = 3600000;
    return h*hConv + m*mConv + s*sConv;
}

console.log(past(0,1,1));