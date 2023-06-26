function toJadenCase(string) {
    let cased = [];
    cased = string.split(' ');
    let newCased = [];
    for (i = 0; i < cased.length; i++){
        newCased.push(cased.map(word => word[0].toUpperCase()));
        newCased.push(cased.map(word => word[i]));
    }
    return newCased;
  };

  String.prototype.toJadenCase = function () {
    return this.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };


console.log(toJadenCase(`How can mirrors be real if our eyes aren't real`));