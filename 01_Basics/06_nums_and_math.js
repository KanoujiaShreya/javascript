const score = 100
console.log(score); // 100

const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(3)); // gives precision also 100.000

const otherNumber = 123.9678
console.log(otherNumber.toPrecision(4)); // 124.0

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.3)); //5
console.log(Math.floor(4.8)); //4

console.log(Math.random()); //0.2637750537748733
console.log(Math.random()*10) + 1; // 1.6884788871139067
console.log(Math.floor(Math.random()*10) + 1); //10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //10