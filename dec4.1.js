var fs = require('fs');
var arr = fs.readFileSync('dec4-input.txt').toString().split("\n\n");

var fields = ["byr:","iyr:","eyr:","hgt:","hcl:", "ecl:","pid:"]
var validCount = 0

arr.forEach(row => {
    var valid = true
    fields.forEach(field => {
        console.log(row, field,row.indexOf(field) )
        if (row.indexOf(field) == -1){
            valid = false
        }
    })
    console.log("valid", valid)
    if (valid){
    validCount++
    }
})
console.log(validCount)