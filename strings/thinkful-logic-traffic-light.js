// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

function updateLight(current) {
    switch (current) {
        case 'green':
            return 'yellow';
            break;
        case 'yellow':
            return 'red';
            break;
        case 'red':
            return 'green';
            break;
        default:
            return `Not a traffic color!`;
            break;
    }
  }

console.log(updateLight('green')); // yellow
console.log(updateLight('yellow')); // red
console.log(updateLight('red')); // green