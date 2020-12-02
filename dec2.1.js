var fs = require('fs');
var arr = fs.readFileSync('dec2.1-input.txt').toString().split("\n")
console.log(arr[0].split(' '))

var valid = 0

arr.forEach(row => {
    var eles = row.split(' ')

    var reg = "^[^" + eles[1].substr(0, 1) + "]*(" + eles[1].substr(0, 1) + "[^" + eles[1].substr(0, 1) + "]*){" + eles[0].split('-')[0] + "," + eles[0].split('-')[1] + "}$"
    console.log(reg + ' ' + eles[2] + ' ' + RegExp(reg).test(eles[2]))
    if (RegExp(reg).test(eles[2])) {
        valid++
    }
})
console.log("Valid: " + valid)
