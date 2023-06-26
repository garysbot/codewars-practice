// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex(needle => needle === 'needle')}`
}

console.log(findNeedle(['0', '1', '2', 'needle']));