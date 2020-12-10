const fs = require('fs');
let arr = fs.readFileSync('dec9-input.txt').toString().split("\n");



let weak = false
let i = 0

while (!weak){
    let arrSet = new Set([...arr.slice(i, i+25)])
    let arrCross = cross(arrSet, arrSet)
    // console.log(arrCross)
    if (!arrCross.has(parseInt(arr[i+25]))){
        console.log(arrCross)
        console.log("weak! " + arr[i+25])
        weak = true
    }
    i++
}

// console.log(cross(arrSet, arrSet))


// cross product set for sums
function cross(A, B) {
    var result = [];
    A.forEach(function (a) {
        B.forEach(function (b) {
            if (parseInt(a) != parseInt(b)) {
                result.push(parseInt(a) + parseInt(b));
            }
        });
    });
    return new Set(result);
};