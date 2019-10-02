// * Calling Functions

function hi() {
    console.log('Hello');
    return "BYE";
}

console.log(hi());  //returns BYE (the output of the fx)
console.log(hi);    //just telling you that you have a function named hi

hi(); //Need to invoke or call my function to get it to run
//*Logic inside a fx won't run unless the fx is called (invoked). console.log within a fx won't work!

console.log ('second console.log', hi ());

//*can turn functions on and off. Return is like a secondary consol log. 

//* Create a function that, when invoked, lists out the numbers 1-10 */


function numbers() {
    for (let i=1; i<=10; i++) {
    console.log(i);
}
}
numbers();

//*Given an array, create a function that lists out the values individually. */

let arr = ['This', 'is', 'really', 'cool'];

function separate () {
    for (words of arr) {
        console.log(words);
    }
}

separate();

//* Want a for of loop. THAT IS FOR ARRAYS! */