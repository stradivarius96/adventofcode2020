const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec12-input.txt').toString().split("\n");

let instructions = []
arr.forEach(row => {
    instructions.push([row[0], +row.slice(1)])
})


let x = 0
let y = 0
let dir = 90

instructions.forEach(move => {
    if (move[0] == "N" || (move[0] == "F" && dir == 0)) {
        console.log("N Move: " + move + " dir: " + dir)
        y += move[1]
    }
    else if (move[0] == "E" || (move[0] == "F" && dir == 90)) {
        console.log("E Move: " + move + " dir: " + dir)
        x += move[1]
    }
    else if (move[0] == "S" || (move[0] == "F" && dir == 180)) {
        console.log("S Move: " + move + " dir: " + dir)
        y -= move[1]
    }
    else if (move[0] == "W" || (move[0] == "F" && dir == 270)) {
        console.log("W Move: " + move + " dir: " + dir)
        x -= move[1]
    }

    else if (move[0] == "L") {
        console.log("L Move: " + move + " dir: " + dir)
        dir = (((dir - move[1]) % 360) + 360) % 360
    }
    else if (move[0] == "R") {
        console.log("R Move: " + move + " dir: " + dir)
        dir = (((dir + move[1]) % 360) + 360) % 360
    }
})
console.log(Math.abs(x) + Math.abs(y))
