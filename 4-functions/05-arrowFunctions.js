//* Arrow Functions   ...are expressions (they don't get hoisted)

function coffee() {
    console.log('Coffee is good');
}

let coffeee = () => {
    console.log ('I love coffee');
}

coffee();



let cats =(kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 12);       //*if this function was invoked before declared, it wouldn't work. expressions(fat arrow) don't get hoisted

//* concise and block body 

//* concise body does not need parentheses, unless you have more than one parameter. Has to be on one line

//* concise body
let apples = x => console.log(`There are ${x} apples`);
apples(10);

//*More than one parameter will require a parentheses. 
//*Return (if one-line fat arrow function is implied.
//*Concise bodies don't have curly braces.

//*block body 
let apples = (x) => {console.log(`There are ${x} apples.`)};
apples(20);

//* 9/10x end up with a block body
//*Side note: LINEBREAKS ARE BAD IN CONCISE FAT ARROW FUNCTIONS. FAT ARROW FUNCTIONS HAVE TO STAY ON ONE LINE.

let func = () => console.log('hi'); //*WILL WORK

let func = ()
    =>console.log('hi');  //*THIS IS NOT OKAY AND WILL NOT WORK

    let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

