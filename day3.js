//manhattan distance 
//(x2-x1) + (y2-y1)
/*

y
3..|...
2..|...
1.-X--.
0..|...
 012345x


*/

let fs = require('fs');
let data = fs.readFileSync('puzzleInput3.txt','utf8');

//create an object to store coordinates
var coordinate = {
    x: 0,
    y: 0,
    get coords() {
        return [coordinate.x,coordinate.y];
    },
    set coords(xyvalues) {
        this.x = xyvalues[0];
        this.y = xyvalues[1];
    }
};

//function to store a starting point
function storeStart(lstEl){
    x = lstEl[0];
    y = lstEl[1];
};

//we need to turn a direction into coordinates from startpoint to endpoint
//the directions are in an array
//var string = "R8,U5,L5,D3";
var stringLine = data.split("\n");
var directionsA = stringLine[0].split(",");
var directionsB = stringLine[1].split(",");



//we have an array were we want to store the coordinates of each part of the line
var lineA = [];
var lineB = [];

//we start at (0,0)
var x = 0;
var y = 0;

//we loop through the directions (yes we need to make this a function)
for (var i = 0; i < directionsA.length; i++){
    //split the direction into 2 parts, the letter and the number
    var dir = directionsA[i].substring(0,1);
    var val = directionsA[i].substring(1);
    //make a switch
    switch(dir){
        case "R":
            //if direction starts with "R" ....we move RIGHT along the x axis
            //value determines the amount of times we move
            //because we move to the right we add 1 to the x point for every move we make
            for (var j = 0; j < val; j++){
                x +=1;
                lineA.push(coordinate.coords = [x,y]);
            };
            //change the starting point to the last element in the array
            storeStart(lineA[lineA.length-1]);
            break;
        case "U":
            //if direction starts with "U" ... we move UP along the y axis
            //value determines the amount of times we move
            //because we move up we add 1 to the y point for every move we make
            for (var j = 0; j < val; j++){
                y +=1;
                lineA.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineA[lineA.length-1]);
            break;
        case "L":
            //if direction starts with "L" ... we move LEFT along the x axis
            //value determines the amount of times we move
            //because we move up we subtract 1 from the x point for every move we make
            for (var j = 0; j < val; j++){
                x -=1;
                lineA.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineA[lineA.length-1]);
            break;
        case "D":
            //if direction starts with "L" ... we move DOWN along the y axis
            //value determines the amount of times we move
            //because we move up we subtract 1 from the y point for every move we make
            for (var j = 0; j < val; j++){
                y -=1;
                lineA.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineA[lineA.length-1]);
            break;
        default:
            console.log("OOPS");
    }
}
console.log("A " +lineA.length);
console.log("A " +lineA[0]);
console.log("A " +lineA[997]);
console.log("A " +lineA[998]);
console.log(x);
console.log(y);


//we start at (0,0) (again)
var x = 0;
var y = 0;

//we loop through the directions (again)
for (var i = 0; i < directionsB.length; i++){
    //split the direction into 2 parts, the letter and the number
    var dir = directionsB[i].substring(0,1);
    var val = directionsB[i].substring(1);
    //make a switch
    switch(dir){
        case "R":
            //if direction starts with "R" ....we move RIGHT along the x axis
            //value determines the amount of times we move
            //because we move to the right we add 1 to the x point for every move we make
            for (var j = 0; j < val; j++){
                x +=1;
                lineB.push(coordinate.coords = [x,y]);
            };
            //change the starting point to the last element in the array
            storeStart(lineB[lineB.length-1]);
            break;
        case "U":
            //if direction starts with "U" ... we move UP along the y axis
            //value determines the amount of times we move
            //because we move up we add 1 to the y point for every move we make
            for (var j = 0; j < val; j++){
                y +=1;
                lineB.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineB[lineB.length-1]);
            break;
        case "L":
            //if direction starts with "L" ... we move LEFT along the x axis
            //value determines the amount of times we move
            //because we move up we subtract 1 from the x point for every move we make
            for (var j = 0; j < val; j++){
                x -=1;
                lineB.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineB[lineB.length-1]);
            break;
        case "D":
            //if direction starts with "L" ... we move DOWN along the y axis
            //value determines the amount of times we move
            //because we move up we subtract 1 from the y point for every move we make
            for (var j = 0; j < val; j++){
                y -=1;
                lineB.push(coordinate.coords = [x,y]);
            };
            //change the start point to the last element in the array
            storeStart(lineB[lineB.length-1]);
            break;
        default:
            console.log("OOPS");
    }
}




console.log("B " +lineB.length);
console.log("B " +lineB[0]);
console.log("B " +lineB[994]);
console.log("B " +lineB[995]);
console.log(x);
console.log(y);
