// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/javascript

function validatePIN (pin) {
    let str = "{4, 6}"
    let regex = new RegExp(str);
    if (pin === regex){
        return false;
    } else {
        return true;
    }
}

console.log(validatePIN(1234));