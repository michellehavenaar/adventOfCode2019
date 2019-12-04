//import the puzzle input
var fs = require('fs');

var data = fs.readFileSync('puzzleInput1.txt');
var dataString = data.toString();

//comma separate the list and convert to array
var dataCommaSep = dataString.replace(/\n/g, ",");
//console.log(dataCommaSep);
var modules = dataCommaSep.split(',');

console.log(modules[0]);

function fuelCalculator(mass){
    return Math.floor(mass / 3) - 2;
}

var sum = 0;
for (var i=0; i < modules.length; i++) {
    var result = fuelCalculator(modules[i]);
    console.log("result: " +result)
    sum += result;
    console.log("Sum: " +sum);
    //break;
}