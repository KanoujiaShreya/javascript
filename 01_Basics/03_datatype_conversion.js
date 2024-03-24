let score = "33abc"

console.log(typeof(score)); //string

//converting it to number

let valueInNumber = Number(score)
console.log(valueInNumber) //Nan
console.log(typeof valueInNumber) //number
/*
"33" = 33
"33abc" = NaN(Not a Number)
true = 1; false = 0
*/

//converting it to boolean
let score1 = "shreya"
let valueInBoolean = Boolean(score1)
console.log(valueInBoolean); //true
console.log(typeof valueInBoolean); //boolean

/*
1 = True
0 = False
null = False
undefined = False
"" = False
"shreya" = True
*/

//converting it to string

let valueToString = 33
let convertToString = String(valueToString)
console.log(convertToString); //33
console.log(typeof convertToString);//string

/*
33 = 33
*/