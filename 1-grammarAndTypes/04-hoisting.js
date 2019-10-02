//*Hoisting*//

console.log(scissors);

scissors = "blue";

console.log(scissors);
var scissors;

//* JS reads through our code twice. The first time, it looks for the left hand side of variables and functions (the declarations). The second pass, it reads through the right hand side, and assigns values and expressions. 

//* We call it 'hoisiting' because JS keeps those variables stored in memory for quicker reference later. 

b();
console.log(a);

function b () {
    console.log('What??');

}

var a= 'is this?'
console.log(a)