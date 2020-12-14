const fs = require('fs');
const _ = require('lodash')
let arr = fs.readFileSync('dec14-input.txt').toString().split("\n");

let mask = ""
let address = ""
let value = ""
let memory = new Map()
let padding = "000000000000000000000000000000000000"
let masked = ""
let floats = []
let addresses = []

arr.forEach(row => {
    if (row.slice(0, 4) == "mask") {
        mask = row.split("=")[1].trim()
    } else {
        address = (row.split("[")[1].split("]")[0].trim() >>> 0).toString(2)
        address = padding.substr(address.length) + address
        value = parseInt(row.split("=")[1].trim())

        masked = ""
        floats = []
        addresses = []
        for (let i = 0; i < address.length; i++) {
            if (mask[i] == "X") {
                masked = masked + "0"

                floats.push(35 - i)
            } else if (mask[i] == "0") (
                masked = masked + address.substr(i, 1)
            )
            else {
                masked = masked + "1"
            }
        }

        addresses.push(parseInt(masked, 2))
        for (let i = 0; i < floats.length; i++) {
            // console.log(addresses)
            let addLength = addresses.length
            // let addCopy = addresses
            for (let j = 0; j < addLength; j++) {


                addresses.push(addresses[j] + Math.pow(2, floats[i]))
            }

        }

        for (let i = 0; i < addresses.length; i++) {
            memory[addresses[i]] = value
        }
    }
})

let total = 0
for (var i in memory) {
    total += memory[i]
}

console.log(total)