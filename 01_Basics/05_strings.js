const name = "shreya"
const RepoCount = 40

//console.log(name + RepoCount); //bad practice

//console.log(`Hey my name is ${name} and my repo count is ${RepoCount}`); //good practice

const gameName = new String('Shreya-dot-com')
console.log(gameName[0]); //S(1st character of the string)
console.log(gameName.__proto__); //{} (object)
console.log(gameName.length); // 14
console.log(gameName.charAt(5)); // a
console.log(gameName.indexOf('r')); // 2
console.log(gameName.toUpperCase()); // SHREYA-DOT-COM

const newString = gameName.substring(0,4)
console.log(newString); // Shre

const anotherString = gameName.slice(2,4)
console.log(anotherString); // re

const newStringOne = "   shreya    "
// console.log(newStringOne); //    shreya    
// console.log(newStringOne.trim()); // spaces will be removed

const url = "https://shreyya.com/shreya%20kanojia"
console.log(url.replace('kanojia','soni')); //https://shreyya.com/shreya%20soni
console.log(url.includes('shreya')); //true

console.log(gameName.split('-')); // [ 'Shreya', 'dot', 'com' ]
