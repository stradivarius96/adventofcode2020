const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec13-input.txt').toString().split("\n");

let time = +arr[0]
let routes = arr[1].split(",")

routes = routes.filter(route =>{return route != "x"})

let shortest = 0
let wait = 1000
routes.forEach(route =>{
    let routeWait = Math.abs(time % parseInt(route) - parseInt(route))
    if (routeWait < wait){
        shortest = parseInt(route)
        wait = routeWait
    }
})
console.log(shortest * wait) 