// * Parameters           

function hi (name) {
//            1.
    console.log(`Hi ${name}!`);              //* back ticks and $ called string                        2.                         interpolation
}

hi(`John`);              //these parenthese mean I can pass information into it 
hi (`Daniel`);
//    3. 
hi (`Kiana`);
hi (`Eli`);

//* 1. - The parameter (s) we need to take into the function.
//* 2. - Using string interpolation, we can refer to the parameter we passed
//* 3. - We define what the parameters value will be. Parameters are only specified once we invoke the function.

function pet (animal) {
    console.log(`My pet's name is ${animal}!`);
}

pet('Georgie');
pet('Luna');
pet('Finn');

//* Write a function that takes 2 parameters.
//*one parameter is for a first name.


function introduction(firstName,lastName) {
    let fullName = firstName + ' ' +lastName;
    console.log(`Hello, my name is ${fullName}`);
}

introduction('Devon', 'Mason');

