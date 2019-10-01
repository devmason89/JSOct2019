//Boolean
//boolean can represent: true/false, yes/no, on/off

let i = true;
let j = false;

console.log(i);

//Null

// null = empty value. It is not 0, not undefined.
// It is like an empty cotainer; nothing is in it, but it still exists as a space to fill.

let empty= null;
console.log(empty);


//Undefined
// undefined = no value assigned. Not even an empty container. 
// undefined is NOT an error. 

let undef= undefined; //never do this
console.log(undef);

let grass;
console.log(grass);

//Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite= 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10)/10;
console.log(numbersAreHard);

//Strings
// Strings are datatypes used to represent text and are wrapped in either single or double quotes.

let stringOne= "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first= 1050 + 100;
let second= '1050' + '100';
let third= 1050 + "100";

console.log(first);
console.log(second);
console.log(third);

console.log(typeof first);
console.log(typeof second);
console.log(typeof third);

//Objects

let car ={
    color: "red",
    tires: 4,
    extras: "A/C and Radio",
    cool: true
}

console.log(car);
console.log(typeof car);

//Arrays
//Arrays are containers that hold lists of items.

let list = ["item1", "item2", "item3"];

//   (1) (2) (3)

//1- name of the array;
//2- square brackets= array;
//3- each item, regardless of the datatype is separated by commas.

let shoppingList = ["eggs", "cereal", "orangeJuice"]
console.log(shoppingList);
console.log(typeof shoppingList); //object

// addition vs concatenation
// check out JS coersion


/*
Challenge
*/

let firstName = "Devon";
let lastName="Mason";
let houseNumber= 12238;
let aptNumber=null;
let street="Bayhill Drive";
let city="Carmel";
let state="IN";
let zipcode= 46033;

console.log(houseNumber + " " + street + " " + city + ", " + state + " " +zipcode);

// Strings - Properties
/*
Properties are qualities associated with a datatype.
Strings have properties associated with that string.
Ex: The length of a string is a property.
*/

let myName='Devon Mason';
console.log(myName.length);


//Methods
//Methods are tools that can help us manipulate our data.
//* .property = no parentheses;
//* .methods = parentheses;

let myNameIs= "Devon Mason";
console.log(myNameIs.toUpperCase());

let home = 'My home is Carmel';
console.log(home.includes('Carmel'));

let sent = "This sentence will be split into individual parts"; 
console.log(sent.split(' '));
console.log(sent[3]);


