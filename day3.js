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

//function to loop through directions and create line
function createLine(arr,lineOutput){
    //we start at (0,0)
    var x = 0;
    var y = 0;
    //we loop through the directions
    for (var i = 0; i < arr.length; i++){
        //split the direction into 2 parts, the letter and the number
        var dir = arr[i].substring(0,1);
        var val = arr[i].substring(1);
        //make a switch
        switch(dir){
            case "R":
                //if direction starts with "R" ....we move RIGHT along the x axis
                //value determines the amount of times we move
                //because we move to the right we add 1 to the x point for every move we make
                for (var j = 0; j < val; j++){
                    x +=1;
                    lineOutput.push(coordinate.coords = [x,y]);
                };
                //change the starting point to the last element in the array
                storeStart(lineOutput[lineOutput.length-1]);
                break;
            case "U":
                //if direction starts with "U" ... we move UP along the y axis
                //value determines the amount of times we move
                //because we move up we add 1 to the y point for every move we make
                for (var j = 0; j < val; j++){
                    y +=1;
                    lineOutput.push(coordinate.coords = [x,y]);
                };
                //change the start point to the last element in the array
                storeStart(lineOutput[lineOutput.length-1]);
                break;
            case "L":
                //if direction starts with "L" ... we move LEFT along the x axis
                //value determines the amount of times we move
                //because we move up we subtract 1 from the x point for every move we make
                for (var j = 0; j < val; j++){
                    x -=1;
                    lineOutput.push(coordinate.coords = [x,y]);
                };
                //change the start point to the last element in the array
                storeStart(lineOutput[lineOutput.length-1]);
                break;
            case "D":
                //if direction starts with "L" ... we move DOWN along the y axis
                //value determines the amount of times we move
                //because we move up we subtract 1 from the y point for every move we make
                for (var j = 0; j < val; j++){
                    y -=1;
                    lineOutput.push(coordinate.coords = [x,y]);
                };
                //change the start point to the last element in the array
                storeStart(lineOutput[lineOutput.length-1]);
                break;
            default:
                console.log("OOPS");
        };
    };

}

//function to find intersections
function findIntersect(arr1,arr2,outputArr){
    //loop through the first array, for each element...
    for (var i = 0; i < arr1.length; i++){
        //loop through the second array to see if you find the element there
        for (var j = 0; j < arr2.length; j++){
            if(arr1[i][0] === arr2[j][0] && arr1[i][1]===arr2[j][1]){
                console.log("Found an intersection: array1: " + arr1[i] + " array2: " + arr2[j]);
                outputArr.push(arr1[i]);
                break; //because we can stop after we find this intersection one time
            };
        };
    };
}

//function to calculate Manhattan distance
function calcDist(arr, outputArr){
    for(var i = 0; i < arr.length; i++){
        let res = (Math.abs(arr[i][0]) - centPortX) + (Math.abs(arr[i][1]) - centPortY);
    outputArr.push(res);
    }
}

//we need to turn a direction into coordinates from startpoint to endpoint
//the directions are in an array
//ACTUAL data

let stringLine = data.split("\n");
let directionsA = stringLine[0].split(",");
let directionsB = stringLine[1].split(",");


//central port
const centPortX = 0;
const centPortY = 0;

//TEST data
/*
let testData1 = ["R8","U5","L5","D3"];
let testData2 = ["U7","R6","D4","L4"];
let testData3 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"];
let testData4 = ["U62","R66","U55","R34","D71","R55","D58","R83"];
let testData5 = ["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"];
let testData6 = ["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"];
*/

//we should find an intersection at (3,3) and (6,5)
//TEST data duplicate intersections

/*let testArr =[ 
[ 1, 0 ],
  [ 2, 0 ],
  [ 3, 0 ],
  [ 4, 0 ],
  [ 5, 0 ],
  [ 6, 0 ],
  [ 7, 0 ],
  [ 8, 0 ],
  [ 8, 1 ],
  [ 8, 2 ],
  [ 8, 3 ],
  [ 8, 4 ],
  [ 8, 5 ],
  [ 7, 5 ],
  [ 6, 5 ],
  [ 5, 5 ],
  [ 4, 5 ],
  [ 3, 5 ],
  [ 3, 4 ],
  [ 3, 3 ],
  [ 3, 2 ],
[6,5] ];



let testIntersect = [ [ -435, 296 ],
[ -450, 296 ],
[ -481, 329 ],
[ -481, 526 ],
[ -481, 592 ],
[ -481, 742 ],
[ -381, 1270 ],
[ -381, 1362 ],
[ -199, 1373 ],
[ -184, 1270 ],
[ -404, 1270 ],
[ -404, 1362 ],
[ -412, 1763 ],
[ -412, 1819 ],
[ -199, 1819 ],
[ 99, 2038 ],
[ -364, 2619 ],
[ -1739, 2069 ],
[ -1739, 1911 ],
[ -943, 0 ],
[ -943, 122 ] ]
*/

//we have an array were we want to store the coordinates of each part of the line
let lineA = [];
let lineB = [];
//we have an array were we want to store intersections
let intersections = [];
//we have an array were we want to store the distance from the central port to the intersections
let distance = [];


//we call the function to create the lines

createLine(directionsA, lineA);
createLine(directionsB, lineB);
console.log(lineA.length);
console.log(lineB.length);

//remove duplicates so we don't check any unnecessary elements when finding intersections later
//to do this we create (map) an array with strings in stead of arrays, we promise to parse it back
//we make a new set because this removes duplicates
//we fulfill the promise
//we make this all into a new array
//and look at the fancy pantsy arrows
let uniqueLineA = Array.from( new Set(lineA.map(el =>JSON.stringify(el))), el => JSON.parse(el));
console.log(uniqueLineA.length);
let uniqueLineB = Array.from( new Set(lineB.map(el =>JSON.stringify(el))), el => JSON.parse(el));
console.log(uniqueLineB.length);


//console.log("LineA: " +lineA);
//console.log("LineB: " +lineB);

//we call the function to find intersections
findIntersect(lineA, lineB, intersections);
console.log(intersections);
console.log(intersections.length);


let uniqueIntersectArr = Array.from( new Set(intersections.map(el =>JSON.stringify(el))), el => JSON.parse(el));
console.log(uniqueIntersectArr);
console.log(uniqueIntersectArr.length);


//we call the function to find the distances
calcDist(uniqueIntersectArr, distance);
console.log(distance);



Array.min = function( arr) {
    return Math.min.apply(Math, arr);
};

let smallestDist = Array.min(distance);
console.log(smallestDist);





