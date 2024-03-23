// Arrays  - collection of multiple items under a single variable 
// javascript arrays are resizable

//js array copy operation creates shallow copies

/*
shallow copy :- A shallow copy of an object is a copy whose properties SHARE THE SAME REFERENCE (point to the same underlying values) as those
 of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
 
 deep copy :- A deep copy of an object is a copy whose properties DO NOT SHARE THE SAME REFERENCE (point to the same underlying values) as those
  of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too
 */

const myArr = [0,1,2,3,4,5,6]
const myNames = ["chinki","minki","pinki","kinky"]

const myArry = new Array(1,2,3,4,5)
//console.log(myArr[0]); //0

//Array Methods
// myArr.push(8)
// myArr.push(10) //inserts value in the array at last
// myArr.pop() //deletes value from the last


//myArr.unshift(9) // inserts 9 in the start
//myArr.shift() //deletes 0 from the start of the array
//console.log(myArr);

//console.log(myArr.includes(9)); //false (checks if 9 is there in the array ot not)
//console.log(myArr.indexOf(5)); //5 (prints the address of the 5)


// const newArr = myArr.join() // join converts the array[1,2,3,4] into string- 1,2,3,4
// console.log(myArr); //[0,1,2,3,4,,5,6]
// console.log(newArr); //0,1,2,3,4,5,6
// console.log(typeof newArr); //string

//+++++++++++++++++++ Slice, Splice ++++++++++++++++++++

console.log("A "+ myArr);

const mySlice = myArr.slice(1,3)
console.log(mySlice); //[1,2]- slice excludes end range

console.log("B "+ myArr);

const mySplice = myArr.splice(1,3)
console.log(mySplice); //[1,2,3] - splice manipulates the original array

console.log("C "+ myArr); // 0,4,5,6 - this is a original array after splice