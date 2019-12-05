//import the puzzle input
var fs = require('fs');

var data = fs.readFileSync('puzzleInput1.txt');
var dataString = data.toString();

//comma separate the list and convert to array
var dataCommaSep = dataString.replace(/\n/g, ",");
//console.log(dataCommaSep);
var modules = dataCommaSep.split(',');

//console.log(modules[0]);

var fuelCount = 0;
var fuelForModule;
function fuelCalculator(mass){
    //reset sum
    //sum = 0;
    if(mass <= 0){
        console.log("Done!");
        return;
    }
    var fuel = Math.floor(mass / 3) - 2;
    if(fuel <=0){
        fuelCount += 0;
    }
    else{
        fuelCount += fuel;
    }
    console.log("fuel: " +fuel);
    console.log("sum: " +fuelCount);
    fuelForModule = fuelCount;
    //reset sum
    //sum = 0;
    fuelCalculator(fuel);
    //console.log("Fuel for module:" +fuelForModule);
    return fuelForModule;
    

}

//var foo = fuelCalculator(1969);
//console.log(foo);

var fuelCount = 0;
var totalSum = 0;
for (var i=0; i < modules.length; i++) {
    var result = fuelCalculator(modules[i]);
    fuelCount = 0;
    console.log("Fuel for module:" +fuelForModule);
    console.log("result: " +result)
    totalSum += result;
    console.log("Total Sum: " +totalSum);
    //break;
}