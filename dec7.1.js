var fs = require('fs');
var arr = fs.readFileSync('dec7-input.txt').toString().split("\n");

var rules = []
arr.forEach(row => {
    ruleArr = row.replace(/contain/g,",").replace(/\./g,"").replace(/bags/g,"bag").replace(/bag/g,"").split(",")
    rules.push(ruleArr)
})

// console.log(rules)
var matches = []
findParents("shiny gold")
console.log(new Set(matches).size)

function findParents(rule){
    // console.log("find parents " + rule)
    var filteredRules = rules.filter(r =>{
        return r.slice(1).find(a =>a.includes(rule))
    })
    
    filteredRules.forEach(match =>{
        matches.push(match[0].trim())
        
        findParents(match[0].trim())
    })
}