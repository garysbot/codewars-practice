function abbrevName(name){
    var space = ' ';
    var abbrev = '';
    abbrev += name.slice(0,1) + '.';
    abbrev += name.slice(name.indexOf(space)+1, name.indexOf(space)+2);
    return abbrev.toUpperCase();
  }


  var name = 'gary jiang';
  console.log(abbrevName('gary jiang'));


  /*
  console.log(name.slice(0,1));
  var space = ' ';
  console.log(name.indexOf(space));
  console.log(name.slice(name.indexOf(space)+1, name.indexOf(space)+2));
  */
