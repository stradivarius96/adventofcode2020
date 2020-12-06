var fs = require('fs');
var arr = fs.readFileSync('dec6-input.txt').toString().split("\n\n");

var questionCount = 0

arr.forEach(row => {
    passArr = row.split("\n")

    var passAll = passArr[0]
    passArr.forEach(pass => {
        passAll = new Set([...passAll].filter(x => new Set(pass).has(x)));
    })
    questionCount += passAll.size
})
console.log(questionCount)