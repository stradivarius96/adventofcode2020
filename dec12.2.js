const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec12-input.txt').toString().split("\n");

let instructions = []
arr.forEach(row => {
    instructions.push([row[0], +row.slice(1)])
})

let x = 10
let y = 1
let sx = 0
let sy = 0


instructions.forEach(move => {
    if (move[0] == "N") {
        console.log("N Move: " + move)
        y += move[1]
    }
    else if (move[0] == "E") {
        console.log("E Move: " + move)
        x += move[1]
    }
    else if (move[0] == "S") {
        console.log("S Move: " + move)
        y -= move[1]
    }
    else if (move[0] == "W") {
        console.log("W Move: " + move)
        x -= move[1]
    }

    else if (move[0] == "L") {
        console.log("L: " + move)
        if (move[1] == 90) {
            [x, y] = [-y, x]
        }
        if (move[1] == 180) {
            [x, y] = [-x, -y]
        }
        if (move[1] == 270) {
            [x, y] = [y, -x]
        }
    }
    else if (move[0] == "R") {
        console.log("R Move: " + move)
        if (move[1] == 270) {
            [x, y] = [-y, x]
        }
        if (move[1] == 180) {
            [x, y] = [-x, -y]
        }
        if (move[1] == 90) {
            [x, y] = [y, -x]
        }
    }
    else if (move[0] == "F") {
        console.log("F Move: " + move)
        sx = sx + (x * move[1])
        sy = sy + (y * move[1])
    }
    console.log("x:" + x + " y: " + y + " sx: " + sx + " sy: " + sy)
})
console.log(Math.abs(sx) + Math.abs(sy))
