//intcode program
//opcode 1: adds values of 2 positions and stores result in place indicated by 3rd position
//opcode 2: multiplies values of 2 positions and stores result in place indicated by 3rd position
//opcode 99: stop

let fs = require('fs');
let data = fs.readFileSync('puzzleInput2.txt','utf8');
let address0;

function program(noun,verb,input){
    //before the program runs we initialize the memory with
    input[1] = noun;
    input[2] = verb;
    //program loop
    for(let i=0; i < input.length-3; i+=4){

        //first we retrieve the input we need
        let opcode = input[i];
        let parameter1 = input[i+1];
        let parameter2 = input[i+2];
        let parameter3 = input[i+3];

        let val1 = input[parameter1];
        let val2 = input[parameter2];
        let outputPos = parameter3;

        // if we find opcode 99 we stop and read the value in address 0
        if (opcode == 99){
            console.log("We found opcode 99, End Program");
            address0 = input[0];
            break;
        }
        //else if we find opcode 1 we run function opcode 1
        else if(opcode == 1){
            console.log("We are running opcode 1");
            let result = val1 + val2;
            input[outputPos] = result;
        }
        // else if we find opcode 2 we run function opcode 2
        else if(opcode == 2){
            console.log("We are running opcode 2");
            let result = val1 * val2;
            input[outputPos] = result;
        }
        else{
            console.log("A wild unexpected issue appeared!");
        }
    }
    return address0;
}


//determine noun and verb
let noun;
let verb;
let proceed = true;

for(let g=0; g <100; g++){
    if(proceed == true){
        noun = g;
        for(h=0; h<100; h++){
            verb = h;
            let input = data.split(',').map(Number);
            let output = program(noun, verb, input);
            if(output == 19690720){
                console.log(" We found 19690720");
                console.log("Noun is: " +noun);
                console.log("Verb is: " +verb);
                proceed = false;
                break;
            };
        };
    }
    else if(proceed == false){
        console.log("We have stopped")
        break;   
    } 
}

let solution = 100 * noun + verb;
console.log("Solution = " +solution);