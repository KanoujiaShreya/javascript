// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 0);
// console.log("02" > 0);

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*Comparisons and equality check works differently, Comparison check converts null to a number 
and treat it as 0*/



// console.log(undefined > 0); //false
// console.log(undefined == 0); //false
// console.log(undefined < 0); //false

/*
Strict check -> === (it checks the data type of the two operands)

Eg: 

const a = "2"
const b = 2
console.log(a===b); //false(because a is of STRING dt and b is of NUMBER dt)
*/