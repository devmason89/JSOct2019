//* Square Bracket Notation *//

let garden= {
    vegetable: 'zucchini',
    flower:'sun flower',
    fruit:'grape',
    water: true,
    sun: true,
    size:10
}
//* can help us find a value

// console.log(garden.vegetable);

let x = 'vegetable';

// console.log(garden.x);  
//gives me undefined. looking for a property called x. can't read my variable. Instead, can use my square bracket notation to give me the value I want. 

console.log(garden.x, garden[x]);               //checking to see if there is a property. need to use square brackets to get zucchini


//*HOW to add a key value pair to an object
let baking = {};                               //we have an empty object. use dot notation if we know for sure there is a key in our object called zucchini
// baking.zucchini = 'better make some bread';
// console.log(baking);

baking['zucchini'] = 'better make some bread'
console.log(baking);                              /*Can choose whether you use square bracket or dot notation to add values to objects. Can use square bracket notation to check if it is there. */


console.log(baking.garden.vegetable);           //will not work

//*Banking and garden are two different objects. There isn't a key called garden in baking

// console.log(baking[garden['vegetable']]);

console.log(baking)              //{zucchini: 'better make some bread'}
console.log(garden['vegetable']);   //'zuccchini'
console.log(baking[garden['vegetable']]);  //'better make some bread'
console.log(baking['zucchini']);           //'better make some bread'

//*This is a way for two objects to talk to each other. the two objects have to have simliar data

let garden= {
    vegetable: 'zucchini',
    flower:'sun flower',
    fruit:'grape',
    water: true,
    sun: true,
    size:10
}

let random ='fruit';

console.log(Object.keys(garden));          //Gives me an array.
Object.keys(garden).forEach(g => {         //Each new loop, is grabbing each key
    // console.log(g);
    if (g === random) {
        console.log(garden[random]);  //will print true. is logging the value of water aka garden[random]
    }
})

