let myDate = new Date()
// console.log(myDate.getDate());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString);
// console.log(myDate.toString());

let myCreatedDate = new Date(2023,0,23)
//console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2023,0,23,5,3)
//console.log(myCreatedDate.toLocaleString());


let myCreatedDate3 = new Date("01-14-2024")
//console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());