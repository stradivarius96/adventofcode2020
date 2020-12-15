let input = [1, 0, 15, 2, 10, 13]

console.log(input.slice(0, input.length - 1))
console.log(input)
let last = 13
for (let i = 6; i < 2020; i++) {
    if (input.slice(0, input.length - 1).indexOf(last) == -1) {
        last = 0
        input.push(last)
    } else {
        last = i - 1 - input.slice(0, input.length - 1).lastIndexOf(last)
        input.push(last)
    }
}
console.log(input.pop())