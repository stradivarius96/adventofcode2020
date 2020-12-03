var fs = require('fs');
var arr = fs.readFileSync('dec3-input.txt').toString().split("\n");

var i = 0
var forest = []

arr.forEach(row => {
    forest[i] = [...row]
    i++
})

function treeCount(vx, vy, forest) {
    var x = 0
    var trees = 0
    var height = forest.length
    var width = forest[0].length

    for (var y = 0; y < height; y = y + vy) {
        if (x >= width) {
            x = x - width
        }
        console.log(x + " " + y + " " + forest[y][x])
        if (forest[y][x] == '#') {
            trees++
        }
        x = x + vx
    }
    return trees
}
console.log(treeCount(1, 1, forest) * treeCount(3, 1, forest) * treeCount(5, 1, forest) * treeCount(7, 1, forest) * treeCount(1, 2, forest))