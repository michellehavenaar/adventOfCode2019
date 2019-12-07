//intcode program
//opcode 1: adds values of 2 positions and stores result in place indicated by 3rd position
//opcode 2: multiplies values of 2 positions and stores result in place indicated by 3rd position
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


//we have an array
let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

//before the program runs we replace pos1 with value 12 and pos2 with value 2
input[1] = 12;
input[2] = 2;
console.log("input pos 1 is: " + input[1]);
console.log("input pos 2 is: " + input[2]);

//we make a for loop
for(let i=0; i < input.length; i+=4){
    //slice array so we have a new array of only 4 items
    let startPos = i;
    let endPos = startPos +4;
    let slicedArray = input.slice(startPos,endPos);
    console.log(" sliced array looks like this: " + slicedArray);
    //we start to look at the 0 position to determine which opcode to run
    let opcodeVal = slicedArray[0];
    // if the value equals 99 we stop
    if (opcodeVal == 99){
        console.log("We found opcode 99, End Program");
        console.log(input);
        console.log("Value at position 0 is: " +input[0]);
        break
    }
    //else if the value equals 1 we run opcode 1
    else if(opcodeVal == 1){
        console.log("We are running opcode 1");
        //first we retrieve the input we need
        val1 = input[slicedArray[1]];
        val2 = input[slicedArray[2]];
        outputPos = slicedArray[3];
        //console.log(val1);
        //console.log(val2);
        //then we call opcode1 with the values
        opcode1(val1, val2, outputPos);
        //console.log(input);
        console.log("Value at position 0 is: " +input[0]);
    }
    // else if the value equals 2 we run opcode 2
    else if(opcodeVal == 2){
        console.log("We are running opcode 2");
        //first we retrieve the input we need
        val1 = input[slicedArray[1]];
        val2 = input[slicedArray[2]];
        outputPos = slicedArray[3];
        //console.log(val1);
        //console.log(val2);
        //then we call opcode2 with the values
        opcode2(val1, val2, outputPos);
        //console.log(input);
        console.log("Value at position 0 is: " +input[0]);
    }
    else{
        console.log("A wild unexpected issue appeared!");
    }
}
