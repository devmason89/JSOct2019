/******FOR LOOPS ******/
//For loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition, is reached. Basically lists out every item!


const vacationSpots =[ 'Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots [1]);
console.log(vacationSpots[2]);

//instead you can write a loop which will loop (iterated) each item in the list.
/* There are many different types of loops, but they all do roughly the same thing.
*For statement
*Do while statement
While
Labeled
Break
Continue
For in 
For of 
*/

// for (initialization ; stopping condition; iteration sstatement)
for ( let i = 0; i < 10; i++ ) {
    console.log(i)
}
//1.     2.          3.      4.
/*
1) The 'for' keyword
2) A variable initialization and declartion
3) The condition that needs to be met in order to end the loop.
4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 

start with for, then starting case, then stopping case, then how you want it to count. Then create block in a console.log for each one of those conditions */


//Challenge: using a for loop, count to 20 by 2's  //could also do ++2

for (let i = 0; i < 21; i+=2) {
    console.log(i)
}

//Challenge: using a for loop, count from 10 to 0, going down by 1's //shortcut is i--

for (let i = 10; i >= 0; i-=1) {
    console.log(i)
}

//Challenge: using a for loop, count down from 0, going down by 2's to -24. Don't get stuck in an infinite loop (control c or close VS code)
for (let t=0; t>-25; t-=2){
    console.log(t)
}

let name = "Devon";

for (let i =0; i <= name.length; i++ ) {
    console.log(name.charAt(i));
    }

let names = "Sarah";
for (let t =  0; t <names.length; t+=1) {
    console.log(names[t]);
}

//* .charAt    .parenthesis are for methods. [] are for the other way (forgot the name)

//Make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

let total=0;
let sum =0;

for (let i=1; i <51; i++) {
    total += i;
    console.log('sum:',sum, 'i:', i, 'sum += i:', sum = sum + i); 
}
console.log(total);


//so when JS reads code, it DOES NOT lay out all of those numbers, it totals the buckets (0+1) then (1+2) so it's doing 1 +3

