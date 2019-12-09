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

//we need to turn a direction into coordinates from startpoint to endpoint
//the directions are in an array
var string = "R8,U5,L5,D3";
var directions = string.split(",");
console.log(directions);
//we start at (0,0)
var x = 0;
var y = 0;
//we loop through the directions
for (var i = 0; i < directions.length; i++){
    //split the direction into 2 parts, the letter and the number
    var dir = directions[i].substring(0,1);
    var val = directions[i].substring(1);
    console.log(dir);
    console.log(val);
    //make a switch
    switch(dir){
        case "R":
            console.log("YO");
            //if direction starts with "R" ....
            break;
        default:
            console.log("OOPS");
    }
}







var coordsA = [[1,1],[2,1],[3,1],[4,1]];
var coordsB = [[2,3],[2,2],[2,1],[2,0]];
var coordsMatch = [];
var obj = {
    x: 0,
    y: 0
};

//coordinates set and get

Object.defineProperty(obj, 'coord',{
    get: function(){
        return this.x + "," + this.y;
    },
    set: function(coords) {
        this.x = coords[0];
        this.y = coords[1];
    }
});

obj.coord = coordsA[0];
console.log(obj.x);
console.log(obj.y);
console.log(obj.coord);

//loop through coordsA array
//for every element check if you can find it in coordsB array
//if you find it in coordsB store it "as an array" in coordsMatch array
