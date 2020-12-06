var fs = require('fs');
var arr = fs.readFileSync('dec6-input.txt').toString().split("\n\n");

var questionCount = 0

arr.forEach(row => {
    var uniqueRow = String.prototype.concat(...new Set(row))
    uniqueRow = uniqueRow.trim().replace(/(\r\n|\n|\r)/gm, "")

    console.log("unique " + uniqueRow)

    questionCount += uniqueRow.length
})
console.log(questionCount)