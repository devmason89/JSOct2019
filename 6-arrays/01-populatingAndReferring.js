let list = ['orange','banana','oreos',]
console.log(list[1])

let students = ['Tony', 'Marshall', 'Rhys', 'Ray',23, true, ['John', 'Eric', 'Sam']]

console.log(typeof students);    //Gives you object an array is a type of object
console.log(students instanceof Array);   //how you can check specifically for an Array. Make sure capitalize Array- referring to an original datatype

console.log(students[1]);    //Gives you Marshall

console.log(students[3]);    //Gives you Ray

//*Go into nested array and get "SAM". print out "Hello Sam, how are you today?". Use string interpolation: $ and curly braces!

let name = students[6][2]
console.log(`Hello ${name}, how are you today?`);             //do not nest your square brackets


//*Array Methods() ie how to add, replace, find, etc
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

 food.push('Beans');    //Adds an item to your array
 food.splice(1,1,'Cookies')  //position you want to trim, where you want to cut it, what you want to replace it with (shrimp got replaced bc zero-based)
 food.pop();            //removes the last item in the array
 food.shift();          //removes the first item of an array
 food.unshift('Pasta', 'Hamburger');         //adds items to the start of the array 

for (f of food) {             //gives you the value right away
    console.log(f)
}

for (f in food) {              
    console.log(f)            //will give you the index number
    console.log(food[f])      // will give you the value 
}

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach(f => {console.log(f)})  //so does the same thing as for of (lists out the values)
food.forEach((f, number) => {console.log(f); console.log(number)})    //can see both the value and the index
food.forEach((f, number, array)=> {console.log(f); console.log(number);console.log(array)})         //it's set is it's own iteration. (that's why coming out on separate console lines)

let foodFunction = () => {
    for(f in food){
        console.log(f),           //give me index
        console.log(food[f]),     //give me value
        console.log(food)         //gives me entire array
    }
}

foodFunction()

//*Create a list of movies. Use .forEach() to list your movies. Add another movie at the end. And repalce one of your exisiting movies with another.

let movies = ['Shrek','Clueless','Sixteen Candles','IT'];

movies.push('Halloween');
movies.forEach(m => {console.log(m)})
movies.splice(1,1,"Bring it On!");
console.log(movies);


movies.forEach (m => {console.log(m)})


let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length);           //checks for number of items in the array

let colors = ['blue','green', 'yellow', 'red', 'orange', 'purple'];
//console.log(colors.length);
// console.log(colors.toString())

// console.log(typeof colors);
// console.log(colors instanceof Array);       //it will return True (yes, it is an Array)
// console.log(typeof colors.toString());

colors.forEach(hue => console.log(hue))  //this is an example of a concise body. will show you full array by using placeholder

//*Challenge: Check if you're working with an array. flip values within the array. using a method, print values of newly arranged array. Below is what result should end up being:

let arr = [1,2,3,4,5]

// console.log(arr instanceof Array);
// let newArr= arr.reverse();
// console.log(newArr);

if (arr instanceof Array=== true) {
    let revArr= arr.reverse()
    revArr.forEach (a => console.log(a))
}

// arr = [5,4,3,2,1]

