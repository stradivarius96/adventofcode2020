const fs = require('fs');
let arr = fs.readFileSync('dec9-input.txt').toString().split("\n");


console.log(arr.length)
let weak = false
let i = 0
let j = 1
let weakness = 776203571

while (!weak && i<arr.length){
    let arrSet = [...arr.slice(i, j)]
    let arrSum = arrSet.reduce(function(a,b){return parseInt(a)+parseInt(b)},0)
    // console.log(arrSum)

    if (arrSum==weakness){
        let arrSort = arrSet.sort((a,b)=> parseInt(a)- parseInt(b))

        let weakSum = parseInt(arrSort[0]) + parseInt(arrSort[arrSort.length-1])
        console.log("weak! "+ parseInt(arrSort[0]) + " " + parseInt(arrSort[arrSort.length-1])  + " " + weakSum)
        weak = true
    }
    else if (j< arr.length){
        j++
    }
    else{
        i++
        j = i+1
    }
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