const fs = require('fs');
let arr = fs.readFileSync('dec8-input.txt').toString().split("\n");
const _ = require("lodash");

let pointer = 0

let instructions = []
let instructionsComp = []
let instructionsMod = []
let error = false
let fixed = false
let acc = 0

arr.forEach(row => {
    let cmdArr = row.split(" ")
    cmdArr[1] = parseInt(cmdArr[1])
    instructions.push(cmdArr)
})

acc = 0
error = false
fixed = false
pointer = 0
instructionsComp = []
instructionsMod = _.cloneDeep(instructions)

while (!error) {
    if (instructionsComp.includes(pointer)) {
        error = true
    }
    else {
        instructionsComp.push(pointer)
        if (instructionsMod[pointer][0] == 'acc') {
            acc += instructionsMod[pointer][1]
            pointer++
        }
        else if (instructionsMod[pointer][0] == 'jmp') {
            pointer += instructionsMod[pointer][1]
        }
        else {
            pointer++
        }
    }
}

console.log(acc)