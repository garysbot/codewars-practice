// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let foundArr = arrayOfSheep.filter(word => word === true)
    return foundArr.length;
  }

  let find = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

console.log(countSheeps(find));