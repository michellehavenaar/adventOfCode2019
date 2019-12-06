//intcode program
//opcode 1: adds numbers of 2 positions and stores result in  a 3rd position
//opcode 2: multiplies
//opcode 99: stop

let val1 = 0
let val2 = 0

function opcode1(val1, val2, outputPos){
    let result = val1 + val2;
    input[outputPos] = result;
}

function opcode2(val1, val2, outputPos){
    let result = val1 * val2;
    input[outputPos] = result;
}

/*function retrieveValues(pos1, pos2){
val1 = input[pos1];
val2 = input[pos2];
}
*/



//we have an array
let input = [1,9,10,3,2,3,11,0,99,30,40,50];
//slice array so we have a new array of only 4 items
let startPos = 0;
let endPos = startPos +4;
let slicedArray = input.slice(startPos,endPos);
console.log(slicedArray);
let pos1 = slicedArray[1]
//we start to look at the 0 position to determine which opcode to run
let opcodeVal = slicedArray[0];
//if the value equals 1 we run opcode 1
if(opcodeVal == 1){
    //first we retrieve the input we need
    val1 = input[slicedArray[1]];
    val2 = input[slicedArray[2]];
    outputPos = slicedArray[3];
    console.log(val1);
    console.log(val2);
    //then we call opcode1 with the values
    opcode1(val1, val2, outputPos);
    console.log(input);
    
}
// else if the value equals 2 we run opcode 2
else if(opcodeVal == 2){
    //first we retrieve the input we need
    val1 = input[slicedArray[1]];
    val2 = input[slicedArray[2]];
    outputPos = slicedArray[3];
    console.log(val1);
    console.log(val2);
    //then we call opcode2 with the values
    opcode2(val1, val2, outputPos);
    console.log(input);
}

// else if the value equals 99 we stop
else if (opcodeVal == 99){
    console.log("End Program");
}

else{
    console.log("A wild unexpected issue appeared!");
}

//now we put all this stuff in a recursive function that

//as a basecase checks if the opcode value equals 99 and then stops returns the array

//as long as the base case is not true it calls itself and after every call it increments the starting position with 4