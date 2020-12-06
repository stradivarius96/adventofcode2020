var fs = require('fs');
const _ = require("lodash");
var arr = fs.readFileSync('dec5-input.txt').toString().split("\n");

var tickets = []
var i = 0
arr.forEach(row => {
    seatRow = parseInt(row.toString().slice(0, 7).replace(/B/g, "1").replace(/F/g, "0"), 2)
    seatColumn = parseInt(row.toString().slice(7, 10).replace(/R/g, "1").replace(/L/g, "0"), 2)
    seatId = seatRow * 8 + seatColumn

    tickets[i] = { seatId, seatRow, seatColumn }
    i++
})

console.log(_.maxBy(tickets, function (o) {
    return o.seatId
}))
// console.log (tickets)