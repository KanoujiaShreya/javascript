const name = "shreya"
const RepoCount = 40

//console.log(name + RepoCount); //bad practice

//console.log(`Hey my name is ${name} and my repo count is ${RepoCount}`); //good practice

const gameName = new String('Shreya-dot-com')
// console.log(gameName[0]); //S(1st character of the string)
// console.log(gameName.__proto__); //object
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('r'));
// console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
//console.log(anotherString);

const newStringOne = "   shreya    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // spaces will be removed

const url = "https://shreyya.com/shreya%20kanojia"
console.log(url.replace('kanojia','soni'));
console.log(url.includes('shreya'));

console.log(gameName.split('-'));
