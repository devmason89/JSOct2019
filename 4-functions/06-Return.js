//* Return

let hi = () => {
    return 'hello';
// 1. 
}

let newName = hi();
//     2.      3.

console.log(newName);

//*Making that value available outside of the scope. Return is there so it can communicate with the rest of the code outside of it's parent scope. If you don't return it, it will be undefined. You want to call on logic in functions, so use return and give it a new name outside of the ufunctions 

//*RETURN MAKES THE SCOPE GLOBAL, even if it's in the playpen!

//*1. Return keyword brings our data outside of the function
//*2. We need a new varaible to hold the value of the return.
//*3. When called, the function becomes the value of the return.

//can pass along data, maniuplate it, and pass it on again(goes thru 2 passthrus)



function capitalizeName (name) {
    let capName = " ";
    for (let l in name) {
        if (l==0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName) //Autumn
    return capName 
}




