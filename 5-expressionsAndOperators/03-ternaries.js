//* Ternary
//* Ternary is a shorthand version of an else if statement.

let w = 6;

if (w > 0) {
    console.log('yes');
    
} else {
    console.log('no');
}

(w > 0) ? console.log('yes') : console.log ('no');

if (w == 0) {
    console.log("Hello");
} else if (w< 0) {
    console.log("hi");
} else {
    console.log("Goodbye");

}

(w == 0) ? console.log("hello") : (w < 0) ? console.log('hi') : console.log('goodbye'); 

let age = 11;

(age >= 25) ? 
    console.log("Yay! You can rent a car!") : 
        (age >= 21) ? 
            console.log("Yay! You can drink!") : 
                (age >= 18) ? 
                    console.log("Yay! You can vote!") : 
                        console.log("Sorry, you're too young to do anything fun.");


