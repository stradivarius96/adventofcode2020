var fs = require('fs');
var arr = fs.readFileSync('dec2.1-input.txt').toString().split("\n")
console.log(arr[0].split(' '))

var valid = 0

arr.forEach(row => {
    var eles = row.split(' ')

    if (!!(eles[2][eles[0].split('-')[0] - 1] == eles[1].substr(0, 1)) ^ (eles[2][eles[0].split('-')[1] - 1] == eles[1].substr(0, 1))) {
        valid++
    }

})
console.log("Valid: " + valid)
