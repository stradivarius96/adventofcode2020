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
            if (i - 1 < 0) {
                adjacentSeats = adjacentSeats.concat("LLL")
            }
            else {
                adjacentSeats = adjacentSeats.concat(seatMap[i - 1][j], seatMap[i - 1][j + 1], seatMap[i - 1][j - 1])
            }

            if (i + 1 == seatMap.length) {
                adjacentSeats = adjacentSeats.concat("LLL")
            }
            else {
                adjacentSeats = adjacentSeats.concat(seatMap[i + 1][j], seatMap[i + 1][j + 1], seatMap[i + 1][j - 1])
            }

            adjacentSeats = adjacentSeats.concat(seatMap[i][j - 1], seatMap[i][j + 1])

            adjacentSeats = adjacentSeats.replace(/undefined/g, "L")
            adjacentSeats = adjacentSeats.replace(/\./g, "L")
      
            if (seatMap[i][j] == "L") {
                if (adjacentSeats.match(/[L\.]{8}/)) {
                    resultMap[i][j] = "#"
                }
                else {
                    resultMap[i][j] = seatMap[i][j]
                }
            } else if (seatMap[i][j] == "#") {
                if (adjacentSeats.split("#").length - 1 >= 4) {
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