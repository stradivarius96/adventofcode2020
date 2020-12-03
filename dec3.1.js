var fs = require('fs');
var arr = fs.readFileSync('dec3-input.txt').toString().split("\n");

var i = 0
var forest = []

arr.forEach(row => {
    forest[i] = [...row]
    i++
})

var x = 0
var trees = 0
var height = forest.length
var width = forest[0].length

// console.log(forest[0][1])
// console.log(height + " " + width)

for (var y = 0; y < height; y++) {
    if (x >= width) {
        x = x - width
    }
    console.log(x + " " + y + " " + forest[y][x])
    if (forest[y][x] == '#') {
        trees++
    }
    x = x + 3
}
console.log(trees)