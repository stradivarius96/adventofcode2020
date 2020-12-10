const fs = require('fs');
let arr = fs.readFileSync('dec10-input.txt').toString().split("\n");
arrSort = [...arr].map(x => +x).sort((a, b) => a - b)
console.log(arrSort)

let counter = 0

arrSort.unshift(0)

let combos = new Array(arrSort.length).fill(0)
combos[0] = 1
console.log(combos)

for (let i = 0; i < combos.length; i++) {
    for (let j = i - 3; j < i; j++){
        if (arrSort[i] - arrSort[j] <= 3 ){
            combos[i] = combos[i] + combos[j]
        }
    }
}

console.log(combos)
console.log(combos[combos.length-1])