//The fuel counter-upper
//define a function to calculate amount of fuel required
//function takes mass
//mass is divided by three, rounded down  and then subtract 2

//var mass = 12;

function fuelCalculator(mass){
    var x = mass / 3;
    var y = Math.floor(x);
    return y - 2;
    
}

//var result = fuelCounterUpper(mass);
//console.log(result)

var modules = [12, 14, 1969];
var sum = 0;
for (var i=0; i < modules.length; i++) {
    var result = fuelCalculator(modules[i]);
    //console.log(result)
    sum += result;
    //console.log(sum)
    //break;
}

console.log(sum)