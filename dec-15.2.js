let lastMap = { "1": [0], "0": [1], "15": [2], "2": [3], "10": [4], "13": [5] }
let last = 13
for (let i = 6; i < 30000000; i++) {
    if (i % 1000000 == 0) {
        console.log(i)
    }
    if (lastMap[last.toString()].length == 1) {
        last = 0
        lastMap["0"].unshift(i)
        lastMap["0"] = lastMap["0"].slice(0, 2)
    }
    else {
        last = lastMap[last.toString()][0] - lastMap[last.toString()][1]


        if (lastMap[last.toString()]) {
            lastMap[last.toString()].unshift(i)
            lastMap[last.toString()] = lastMap[last.toString()].slice(0, 2)
        }
        else {
            lastMap[last.toString()] = [i]
        }
    }
}
console.log(last)