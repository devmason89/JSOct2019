/* IF ELSE CONDITIONAL */


let weather = 75;
if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log ('No jacket necessary');
}

let feather = 65;
if (feather < 70) {
    console.log('Wear a jacket');
} else {
    console.log ('No jacket necessary');
}


let names = "Cher";
if (names == "Devon") {
    console.log("Hello, my name is " + names);
} else {
    console.log("Hello, is your name " + names + "?");
}

let lastName = "Mason";
if (lastName == "Devon") {
    console.log("Hello, my name is" , lastName);
} else {
    console.log("Hello, is your name",lastName,"?");
}

let name = "aUTuMN";
let firstLetter = name [0] + name.slice(1).toLowerCase();
let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

if (name.charAt(0) == name.charAt(0).toUpperCase() ) {
    console.log(firstLetter);
} else {
    console.log(otherLetters);
}


/* ELSE IF CONDITIONAL */

let age = 31;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
}
else if (age <= 18) {
    console.log("Yay! You can vote!");
} 
else if (age <= 21) {
    console.log("Yay! You can rent a drink!");
} 
else {
    console.log("Yay! You can rent a car!");
}

    
    
    let ages = 11;

if (ages >= 25) {
    console.log("Yay! You can rent a car!");
}
else if (ages >= 21) {
    console.log("Yay! You can drink!");
} 
else if (ages >= 18) {
    console.log("Yay! You can vote!");
} 
else {
    console.log("Sorry, you're too young to do anything.");
} 

/*  Else if Nesting */

if (conditionOne) {
	//Do this
} else {
	if(conditionTwo) {
		//Do this instead
	} else {
		if (conditionThree) {
			//No do this
		} else {
			//Finally do this
		}
	}
}