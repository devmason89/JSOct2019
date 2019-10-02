/**** FOR OF LOOPS */

let student = {
    name: "Peter",
    awesome: true,
    degree: "javaScript",
    week:1
}

for (item of student) {
    console.log(item);
}
//DOES NOT WORK BC FOR OF LOOPS NOT ITERABLE// 
/* for of loops do not like working with objects, but they do like array */

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray) {
    console.log(cat, 'says meow');
}

/* for of get the values for each index. for in are for objects.
//MAIN TAKE AWAY: FOR IN ARE FOR OBJECTS. FOR OF ARE FOR ARRAYS.