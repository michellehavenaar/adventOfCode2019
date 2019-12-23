/*
let arr = [[0,[1,2,3]],[1,[1,2,3]]];
let y = arr[0][1][2]//3
console.log (y);

arr[0][1].push(5);
console.log(arr);

let arr2 = [[0,1],]
*/


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

//create an object to store combined coordinates
let combinedCoordinates = {
    x: 0,
    y: 0,
    get coords() {
        return [combinedCoordinates.x,[combinedCoordinates.y]];
    },
    set coords(xyvalues) {
        this.x = xyvalues[0];
        this.y = xyvalues[1];
    }
}

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

function createSmallerArray(arr, outputArr){
    for(var i = 0; i < arr.length; i++){
        let index = outputArr.findIndex(el => el[0] === arr[i][0])
        //console.log(index);
        var x = arr[i][0];
        var y = arr[i][1];
        if (index === -1) {
            outputArr.push(combinedCoordinates.coords = [x,[y]]);
            //outputArr.push(combinedCoordinates.coords = [1,0]);
            //console.log(outputArr);
        }
        else{
            //console.log("had ik al, dus vul ik aan");
            outputArr[index][1].push(y)
        }
    }
}

function compareCoords(arr,ArrToCompWith){
    //for every element in this array, check if the value at index [0] is found in the other array at index [0]
    for(let i = 0; i < arr.length; i++){
        let index = ArrToCompWith.findIndex(el => el[0] === arr[i][0])
        //console.log(index);
        //if it is not found then do nothing and move on to the next element
        if (index === -1){
            //console.log("No matching x coord found for: " + arr[i][0]);
        }
        //if it is found then check y coords
        else if (index !== -1){
            //console.log("Found match on X: " + arr[i][0]);
            let yCoords = ArrToCompWith[index][1];
            let sortedYcoords = yCoords.sort(function(a,b){
                return a-b;
            });
            //console.log(yCoords);
            compareYcoords(arr[i][1],sortedYcoords,arr[i][0],intersections);

        }
        else{
            console.log("Something went wrong!");
        }
    } 
}

function compareYcoords(arrA,arrB,xCoord,outputArr){
    let filteredCoords = arrA.filter(el => el >= arrB[0])
    //console.log(filteredCoords);
    if (filteredCoords.length == 0){
        //console.log("Array is empty");
        return;
    }
    else{
        for(let i = 0; i < filteredCoords.length; i++){
            let matchFound = arrB.includes(filteredCoords[i]);
            if (matchFound === true){
                outputArr.push(coordinate.coords = [xCoord,filteredCoords[i]]);
                //console.log(outputArr)
            }
        } 
    }
}


//function to calculate Manhattan distance
function calcDist(arr, outputArr){
    for(var i = 0; i < arr.length; i++){
        let res = (Math.abs(arr[i][0]) - centPortX) + (Math.abs(arr[i][1]) - centPortY);
    outputArr.push(res);
    }
}

function calcSteps(arr,intersectionsArr,outputArr){
    for (let i =0; i < intersectionsArr.length; i++){
        let intersect = intersectionsArr[i];
        console.log(intersect);
        for (let j = 0; j < arr.length; j++){
            if (arr[j][0] === intersect[0] && arr[j][1] === intersect[1]){
                let index = arr.indexOf(arr[j]);
                var steps = index + 1;
                console.log("Line: "+steps);
                outputArr.push(steps);
                console.log(outputArr);
            }
        }
    }
}

function addSteps(arrA,arrB,outputArr){
    if(arrA.length === arrB.length){
        var len = arrA.length;
    }
    for(let i = 0; i < len; i++){
        var result = arrA[i] + arrB[i];
        console.log(result);
        outputArr.push(result);
    }
}

//=====Functions above ======================= Calling stuff below =============================


//we need to turn a direction into coordinates from startpoint to endpoint
//the directions are in an array
//ACTUAL data
let stringLine = data.split("\n");
let directionsA = stringLine[0].split(",");
let directionsB = stringLine[1].split(",");

//TEST data

let testData1 = ["R8","U5","L5","D3"];
let testData2 = ["U7","R6","D4","L4"];
let testData3 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"];
let testData4 = ["U62","R66","U55","R34","D71","R55","D58","R83"];
let testData5 = ["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51"];
let testData6 = ["U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"];
let testData7 = ["R8","U5","L5","D3"];
let testData8 = ["L4","U7","R10","D4","L4"];


//central port
const centPortX = 0;
const centPortY = 0;

//we have an array were we want to store the coordinates of each part of the line
let lineA = [];
let lineB = [];
//we have arrays were we want to store the grouped coordinates
let groupedArrA = [];
let groupedArrB = [];
//we have an array were we want to store intersections
let intersections = [];
//we have an array were we want to store the distance from the central port to the intersections
let distance = [];


//we call the function to create the lines

createLine(directionsA, lineA);
createLine(directionsB, lineB);
console.log(lineA);
console.log(lineB);
console.log(" LineA array length: " +lineA.length);
console.log(" LineB array length: " +lineB.length);

//we call the function to create the arrays with the grouped coordinates
createSmallerArray(lineA,groupedArrA);
createSmallerArray(lineB,groupedArrB);
console.log("groupedArrA A length: " +groupedArrA.length);
console.log("groupedArrB B length: " +groupedArrB.length);

//we call the function to compare the coords to find intersections
compareCoords(groupedArrA,groupedArrB);
console.log(intersections)

//we call the function to calculate the Manhattan distance
calcDist(intersections, distance);
//console.log(distance);

Array.min = function( arr) {
    return Math.min.apply(Math, arr);
};

let smallestDist = Array.min(distance);
console.log(smallestDist);

        

let resultArrA = [];
let resultArrB = [];
calcSteps(lineA,intersections,resultArrA)
calcSteps(lineB,intersections,resultArrB)
console.log(resultArrA);
console.log(resultArrB);

let result = [];
addSteps(resultArrA,resultArrB,result)
console.log(result);

let leastSteps = Array.min(result);
console.log("Fewest combined steps: " +leastSteps);










