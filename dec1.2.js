var fs = require('fs');
var array = fs.readFileSync('dec1.1-input.txt').toString().split("\n").map(Number).sort((a, b) => a - b);

// Find 3 elements that sum to 2020 and multiply
// Sort array and set pointer at start and end
// If sum is below target, walk start pointer up
// If sum is above target, walk top pointer down
// If no success, increment mid

var start = 0
var end = array.length - 1
var mid = 1
var done = false;
var counter = 0;



while (!done) {
    counter++
    if (start == end) {
        start = 0
        end = array.length - 1
        mid++
    }
    if (array[start] + array[end] + array[mid] == 2020) {
        console.log("Success: " + array[start] + " * " + array[end] + " * " + array[mid]
            + " = " + array[start] * array[end] * array[mid])
        done = true
    } else if (array[start] + array[end] + array[mid] > 2020) {
        end--
    } else {
        start++
    }

}
console.log("Counter: " + counter)