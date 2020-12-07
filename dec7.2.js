var fs = require('fs');
var arr = fs.readFileSync('dec7-input.txt').toString().split("\n");

var rules = []
arr.forEach(row => {
    ruleArr = row.replace(/contain/g, ",").replace(/\./g, "").replace(/bags/g, "bag").replace(/bag/g, "").split(",")
    rules.push(ruleArr)
})

// console.log(rules)
var matches = []
var bagCount = findChildren("shiny gold")
console.log(bagCount)

function findChildren(rule) {
    console.log("find parents " + rule)
    var filteredRules = rules.filter(r => {
        return r[0].includes(rule)
    })

    var bagResult = 0
    filteredRules.forEach(match => {
        for (var i = 1; i < match.length; i++) {
            // console.log("match " + match[i])
            // matches.push(match.trim())

            if (match[i].trim() != "no other") {
                var numberOfBags = parseInt(match[i].trim().substr(0, 1))
                var bagName = match[i].trim().slice(2)

                // console.log("bagname " + bagName + " bag count " + numberOfBags)
                bagResult += numberOfBags + numberOfBags * findChildren(bagName)
            }
        }

    })
    console.log("matched rule and result " + filteredRules + " " + bagResult)

    return bagResult
}