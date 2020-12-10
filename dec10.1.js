const fs = require('fs');
let arr = fs.readFileSync('dec10-input.txt').toString().split("\n");
arrSort = [...arr].map(x=>+x).sort((a,b)=>a-b)
 console.log(arr.length)

let diff1 = 0
// set to 1 for device jolt difference
let diff3 = 1

// Outlet to first element difference
arrSort[0] == 1 ? diff1++ : diff3++

for (let i = 1; i < arrSort.length; i++){
    
    let diff = arrSort[i] - arrSort[i-1] 
    
    console.log(arrSort[i] + " - " + arrSort[i-1] + " = " + diff )
    if( diff == 1){
        diff1++
    }else if(diff ==3){
        diff3++
    }

}
console.log(diff1 + " * " + diff3 + " = " + diff1 * diff3)