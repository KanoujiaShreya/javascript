//function definition
function myName() {
console.log("S");
console.log("H");
console.log("R");
console.log("E");
console.log("Y");
console.log("A");
}

myName // function reference //outputs nothing
myName() // function execution //outputs whatever is there inside the function


function addNum(num1,num2) { //here num1 and num2 are parameters
    console.log(num1 + num2);
}
addNum(3,4) //here 3 and 4 are arguments


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function addNum(num1,num2) { 
//    let result = num1 + num2
//    return result
//    console.log("Shreya"); //it won't print because nothing is executed after return statement.
      
     return num1 + num2
}
const result = addNum(6,7)
console.log("Result: ", result); //Result: 13


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function loginUserMessage(userName) {
    if(!userName){
        console.log("Please enter a userName");//it will execute when no argument is passed
        return // nothing will be print after the return statement
    }
    return `${userName}- has logged in`
}

loginUserMessage("shreya") // this will return but not print
console.log(loginUserMessage("shreya")); //shreya- has logged in
console.log(loginUserMessage()); //undefined- has logged in



function loginUserMessage(userName = "mansi") { // given by default value
    if(!userName){
        console.log("Please enter a userName"); //As by default value is given so if block will never execute
        return 
    }
    return `${userName}- has logged in` 
}

console.log(loginUserMessage()); // mansi- has logged in (if no argument is passed so it will take default value(mansi))
console.log(loginUserMessage("Shreya")); //Shreya- has logged in (if argument is passed then it will override the default value)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calculateCartPrice(...price) { // rest operator
    return price
}
console.log(calculateCartPrice(20)); //20
console.log(calculateCartPrice(20,30,40,50)); //[ 20, 30, 40, 50]

function calculateCartPrice1(val1, val2, ...price) { // rest operator
    return price
}

console.log(calculateCartPrice1(20,30,40,50)); // [ 40, 50 ]

/*
here 
val1 = 20
val2 = 30
price = [40,50]
As function returns price so it prints the value of price only.
*/