var fs = require('fs');
var arr = fs.readFileSync('dec4-input.txt').toString().split("\n\n");

var fields = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"]

var validCount = 0

arr.forEach(row => {
    var valid = true
    // console.log("row: " , row )
    fields.forEach(field => {
        // console.log(row, field,row.indexOf(field) )
        if (row.indexOf(field) == -1) {
            valid = false
        }
        else if (field == "byr:") {
            var byr = row.substr(row.indexOf(field) + 4, 5).trim()
            if (parseInt(byr) > 2002 || parseInt(byr) < 1920) {
                // console.log("invalid byr: ", byr)
                valid = false
            }
        }
        else if (field == "iyr:") {
            var iyr = row.substr(row.indexOf(field) + 4, 5).trim()
            if (parseInt(iyr) > 2020 || parseInt(iyr) < 2010) {
                // console.log("invalid iyr: ", iyr)
                valid = false
            }
        }
        else if (field == "eyr:") {
            var eyr = row.substr(row.indexOf(field) + 4, 5).trim()
            if (parseInt(eyr) > 2030 || parseInt(eyr) < 2020) {
                // console.log("invalid eyr: ", eyr)
                valid = false
            }
        }
        else if (field == "hgt:") {
            var hgt = row.substr(row.indexOf(field) + 4, 5).trim()

            if (hgt.slice(-2) == "cm") {
                if (hgt.length == 4 || parseInt(hgt.slice(0, 3)) < 150 || parseInt(hgt.slice(0, 3)) > 193) {
                    // console.log("invalid hgt: ", hgt)
                    valid = false
                }
            }
            else if (hgt.slice(-2) == "in") {
                if (hgt.length == 5 || parseInt(hgt.slice(0, 2)) < 59 || parseInt(hgt.slice(0, 2)) > 76) {
                    // console.log("invalid hgt: ", hgt)
                    valid = false
                }
            }
            else {
                // console.log("invalid hgt: ", hgt)
                valid = false
            }
        }
        else if (field == "hcl:") {
            var hcl = row.substr(row.indexOf(field) + 4, 8).trim()

            if (!RegExp(/#{1}[0-9a-f]{6}/).test(hcl)) {
                // console.log("invalid hcl: ", hcl)
                valid = false
            }
        }
        else if (field == "ecl:") {
            var ecl = row.substr(row.indexOf(field) + 4, 3).trim()
            var eclList = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]

            if (eclList.indexOf(ecl) == -1) {
                // console.log("invalid ecl: ", ecl)
                valid = false
            }
        }

        else if (field == "pid:") {
            var pid = row.substr(row.indexOf(field) + 4, 10).trim()

            if (!RegExp(/[0-9]{9}/).test(pid) || pid.toString().length != 9) {
                // console.log("invalid pid: ", pid)
                valid = false
            }
        }
    })

    if (valid) {
        validCount++
    }
})
console.log(validCount)