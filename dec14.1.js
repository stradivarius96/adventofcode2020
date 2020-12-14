const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec14-input.txt').toString().split("\n");

let mask = ""
let address = ""
let value = ""
let memory = {}
let padding = "000000000000000000000000000000000000"
let masked = ""

arr.forEach(row => {
    if (row.slice(0, 4) == "mask") {
        mask = row.split("=")[1].trim()
    } else {
        address = row.split("[")[1].split("]")[0].trim()
        value = (row.split("=")[1].trim() >>> 0).toString(2)
        value = padding.substr(value.length) + value

        masked = ""
        for (let i = 0; i < value.length; i++) {
            if (mask[i] == "X") {
                masked = masked + value.substr(i, 1)
            } else (
                masked = masked + mask.substr(i, 1)
            )
        }
        memory[address] = masked
    }
})

let total = 0

for (let [key, value] of Object.entries(memory)) {
    total += parseInt(value, 2);
}
console.log(total)