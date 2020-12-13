const fs = require('fs');
let arr = fs.readFileSync('dec13-input.txt').toString().split("\n");

// let time = +arr[0]
let routes = arr[1].split(",")

// I cheated and used reddit for help. SHAME. Paste the output into wolfram alpha and use function solution lol
    routes.forEach((route, i) => {
        if (route != "x") {
           console.log ("( t + " + i + ") mod " + route + " = 0,")
        }
    })
    
