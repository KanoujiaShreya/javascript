const cricketers = ["virat","rohit","maxwell","abdevilliers"]
const actors = ["ranveer","shahrukh","salman","sanjay"]

//cricketers.push(actors) //inserts whole array as a single element
//console.log(cricketers); // ['virat','rohit','maxwell','abdevilliers',['ranveer', 'shahrukh', 'salman', 'sanjay']]
//console.log(cricketers[4][1])

//push updates on existing array
//concat returns new array
const all = cricketers.concat(actors)
//console.log(all); //['virat','rohit','maxwell','abdevilliers','ranveer','shahrukh','salman','sanjay']


//+++++++ Spread Operator - ... ++++++++++++
//very easy to copy all the elements of an array or object to new array
const allFamousPers = [...cricketers,...actors]
//console.log(allFamousPers); 


//+++++++++++++++++ Convert string to Array element ++++++++++++++++++++

console.log(Array.from("Shreya123"));
// [
//     'S', 'h', 'r',
//     'e', 'y', 'a',
//     '1', '2', '3'
//   ]

let a = 10
let b = 20
let c = 30

console.log(Array.of(a,b,c)); //[ 10, 20, 30 ]