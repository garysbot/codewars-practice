function disemvowel(str) {
    let newStr = '';
    for (i = 0; i < str.length; i++){
        switch (str[i]) {
            case 'a':
                newStr += ``;
                break;
            case 'A':
                newStr += ``;
                break;
            case 'e':
                newStr += ``;
                break;
            case 'E':
                newStr += ``;
                break;
            case 'i':
                newStr += ``;
                break;
            case 'I':
                newStr += ``;
                break;
            case 'o':
                newStr += ``;
                break;
            case 'O':
                newStr += ``;
                break;
            case 'u':
                newStr += ``;
                break;
            case 'U':
                newStr += ``;
                break;
            default:
                newStr += str[i];
                break;
        }
    }
    return newStr;
  }

console.log(disemvowel(`Elephant`));
