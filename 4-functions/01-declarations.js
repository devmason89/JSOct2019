//* Declarations

//*Functions are a chunk of code that preforms a set action when called, or invoked.

function hi () {
// 1.     2.    3.
    console.log('Hi');
}

//1- Keyword
//2- Name of the function and parentheses for parameter
//3- Curly Braces, where the operations of our function happens

//*Simply a box where we can run code and execute logic. Can put any data type in a function

blah = function () {
    return lala;
    lala = "hi";
  };
  console.log(blah());  // will return an error (variable after the return)

  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, 2, 3, 4)); //will return 3 bc only has 2 parameters listed

  function foo () {
    return bar();
    function bar() {
      return "Poppin' bottles";
    }
  }
  console.log(foo());   //will return popping bottles bc has a function within the return

  function whatDoesItDo(val) {
    return val ? 1 : 2;
  };                    //will return 1 if true and 2 if val is false. 

  for (let x = 0; x <=10; x++) {
    function count (x);
    console.log(x)
  };


  for (let x = 0; x <=10; x++) {
    function num (x) {
    return x;
    }
  }
  console.log(x);

  function cool () {
    for (let x= 0; x <=10; x++)
    console.log(x);
  }

  



//*FIRST REPEL ASSIGNMENT

for (let i=0; i<=10; i++) {
    console.log(i);
    numbers(i);
}

function numbers(i) {
    if (i===0) {
        console.log("the number is even");
    } else if (i%2===0) {
        console.log("the number is even");
    } else {
        console.log("the number is odd");
        }
    }

    


  