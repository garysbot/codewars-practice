const abaGame = (sentence) => {
    let abaSentence = '';
    for(i = 0; i < sentence.length; i++){
        switch(sentence[i]) {
            case 'a':
                abaSentence += sentence[i] + 'b' + 'a';
                break;
            case 'A':
                abaSentence += sentence[i] + 'b' + 'a';
                break;
            case 'e':
                abaSentence += sentence[i] + 'b' + 'e';
                break;
            case 'E':
                abaSentence += sentence[i] + 'b' + 'e';
                break;
            case 'i':
                abaSentence += sentence[i] + 'b' + 'i';
                break;
            case 'I':
                abaSentence += sentence[i] + 'b' + 'i';
                break;
            case 'o':
                abaSentence += sentence[i] + 'b' + 'o';
                break;
            case 'O':
                abaSentence += sentence[i] + 'b' + 'o';
                break;
            case 'u':
                abaSentence += sentence[i] + 'b' + 'u';
                break;
            case 'U':
                abaSentence += sentence[i] + 'b' + 'u';
                break;
            case 'y':
                abaSentence += sentence[i] + 'b' + 'y';
                break;
            case 'Y':
                abaSentence += sentence[i] + 'b' + 'y';
                break;
            default:
                abaSentence += sentence[i];
                break;
        }
    }
    return abaSentence;
}

console.log(abaGame('Cats and dogs'));
