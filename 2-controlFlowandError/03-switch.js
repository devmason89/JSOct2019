/* SWITCH */

switch (key) {
    case value:

    break;

    default:
    
}


/* try to rewrite the age challenge from earlier with a switch. This is wrong, why? */
let age = 31;

switch (true) {
    case (age >= 25):
    console.log("You can rent a car!");
    break;
    case (age >= 21):
    console.log("You can drink!");
    break;
    case (age >= 18):
    console.log("You can vote!");
    break;
    default:
    console.log("You're too young to have fun.");
}

let friend= "Autumn";

switch (friend) {
    case "Autumn":
    console.log("Hey Autumn, when are we going rock wall climbing?"); 
    break;
    case "Danielle":
    console.log("Hey Danielle, how is Finn?");
    break;
    case "Josh":
    console.log("Hey Josh, let's go to Target!");
    break;
    default:
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let dessert = "cheeto";

switch (dessert) {
    case "pie":
    console.log('Pie, pie, me oh my!');
    break;
    case "cake":
    console.log("Cake is great!");
    break;
    case "ice cream":
    console.log("I scream for ice-cream!");
    break;
    default:
    console.log(` ${dessert} not on the Menu`);
}

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):   
    console.log('worked');
    break;
}

/*not looking for the word true, looking to see if this expressino is true  */

let pet = "dog";

switch (pet) {
    case 'string':
    console.log("This is a string");
    break;
    case 'boolean';
    console.log('This is a boolean');
    break;
    case 'number':
    console.log('This is a number');
    break;
}