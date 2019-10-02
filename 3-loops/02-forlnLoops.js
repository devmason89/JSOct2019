/**FOR IN LOOPS */
//*Great for iterating over values in an object. can access items directly through ordering schemea. can't access an object with a regular for loop, need a for in loop. 

let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for (category in student) {
    console.log(category);
    console.log('student[item] ==>', student [category]);
}

//item is a placeholder. it could say anything. just make sure it makes sense to another coder. say variable [item] to get the value. 

let dogArray = ['collie', 'pitbull', 'newfie', 'dachshund', 'shiba inu;'];
for (dog in dogArray) {
    console.log( dogArray[dog]);
}

//Array has invisible 0, 1, 2,3 indices. for in loops are great for objects, not great for arrays. would need to type array name [item].
//for in loops: GREAT FOR ITERATING OBJECTS. can give you the value name

//Write a for in loop that capitalizes the first letter of a student's name

let studentName = "pAuL";
let newName = " ";

for (let i = 0; i <studentName.length; i++) {
    if (i == 0) {                              //not strict bc a string
    newName += studentName[[i]].toUpperCase();
    console.log(studentName[i], newName);
    } else {
        newName += studentName[i].toLowerCase();
        console.log(studentName[i], newName)   
}
}

// above is the challenge for a for loop

console.log(studentName[0]) + console.log()


// this is the correct solution for a "for in" loop
let studentName = "pAuL";
let newName = '';

for (letter in studentName) {
    if (letter == 0) {
    newName += studentName[letter].toUpperCase();
    console.log(newName);
} else {
    newName += studentName[letter].toLowerCase();
    console.log(newName)
}}

console.log(newName);
//console.log(letter --that loops thru my numbers, studentName[letter]) that loops thru my values

let dogBreed = 'cOlLiE';
let newBreed = '';
for (letter in dogBreed){
   if (letter == 0){
       newBreed += dogBreed[letter].toUpperCase();
   } else {
       newBreed += dogBreed[letter].toLowerCase();
   }
}
console.log(newBreed);

let cheese = 'pEppErjacK';
let newCheese= '';

for (letter in cheese) {
    if (letter == 0) {
        newCheese += cheese[letter].toUpperCase();
    } else {
        newCheese += cheese[letter].toLowerCase();
    }
}

console.log(newCheese);



