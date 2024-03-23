// Primitive datatype
/*
7 types - string, bigInt, boolean, number, symbol, null, undefined.
*/

let string = "shreya"
let num = 45
let boolean = true
let weather = null
let temperature;
let bigNumber = 58959575665n

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId); //false 

//Reference datatype
/*
3 types - Function, Array, Objects
*/

const myFunc = function(){
    //console.log("hello functions");
}

const Arr = ['shreya','is','a','mad','girl'];

const myObj = {
    name: "shreya",
    age: 24,
}

// to know datatype use - typeof
//console.log(typeof myObj);

/*
Memory allocation
Stack(Primitive)    Heap(NonPrimitve/Refernce)
*/
//Stack example
let myYoutube = "shreyyaaaaa"
let anotherYoutube = myYoutube;
anotherYoutube = "alsoShreyyaaaaa";
console.log(myYoutube);
console.log(anotherYoutube);

//Heap example

let myObj1 = {
    name: "shreyaaaa",
    email: "shreya@gmail.com"
}

let myObj2 = myObj1;

myObj2.email = "sk@gmail.com"
console.log(myObj1);
console.log(myObj2);