const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec11-input.txt').toString().split("\n");

let seatMap = []
arr.forEach(row => {
    seatMap.push(row.split(""))
})

let counter = 0;
let done = false;
let currentMap = _.cloneDeep(seatMap)

while (!done) {
    let nextMap = _.cloneDeep(seatAlgo(currentMap))
    if (_.isEqual(currentMap, nextMap)) {
        done = true
    } else {
        currentMap = _.cloneDeep(nextMap)
    }
}

for (let i = 0; i < currentMap.length; i++) {
    for (let j = 0; j < currentMap[0].length; j++) {
        if (currentMap[i][j] == "#") {
            counter++
        }
    }
}
console.log(counter)

function seatAlgo(seatMap) {
    let resultMap = _.cloneDeep(seatMap)

    for (let i = 0; i < seatMap.length; i++) {
        for (let j = 0; j < seatMap[0].length; j++) {

            let adjacentSeats = ""

            // LEFT
            let ii = i
            let jj = j
            let seat = ""
            while (seat == "") {
                ii--
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // LEFT TOP

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                ii--
                jj--
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // TOP

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                jj--
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // RIGHT TOP

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                ii++
                jj--
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // RIGHT

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                ii++
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // RIGHT BOTTOM

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                ii++
                jj++
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // BOTTOM

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                jj++
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            // LEFT BOTTOM

            ii = i
            jj = j
            seat = ""

            while (seat == "") {
                ii--
                jj++
                if (ii < 0 || ii == seatMap.length || jj < 0 || jj == seatMap[0].length) {
                    seat = "L"
                }
                else if (seatMap[ii][jj] != ".") {
                    seat = seatMap[ii][jj]
                }
            }
            adjacentSeats += seat

            if (seatMap[i][j] == "L") {
                if (adjacentSeats.match(/[L\.]{8}/)) {
                    resultMap[i][j] = "#"
                }
                else {
                    resultMap[i][j] = seatMap[i][j]
                }
            } else if (seatMap[i][j] == "#") {
                if (adjacentSeats.split("#").length - 1 >= 5) {
                    resultMap[i][j] = "L"
                }
                else {
                    resultMap[i][j] = seatMap[i][j]
                }
            }
            else {
                resultMap[i][j] = seatMap[i][j]
            }
        }
    }
    resultMap.forEach(row => {
        console.log(row.join(""))
    })
    return resultMap
}