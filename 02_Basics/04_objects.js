const tinderUser = new Object() //singleton object
//console.log(tinderUser); //{}

// const tinderUser2 = {} //Non - singleton object
// console.log(tinderUser2); //{}

tinderUser.id = 13244
tinderUser.Name = "Shreya"
tinderUser.isLoggedIn = false
//console.log(tinderUser); //{ id: 13244, Name: 'Shreya', isLoggedIn: false }

//console.log(typeof tinderUser.id);

// ++++++++++++++++++  NESTED OBJECT  +++++++++++++++++++++++
const anotherUser = {
    email: "shreya@google.com",
    fullName: {
        userName: {
            firstName: "Shreya",
            lastName: "Kanoujia"
        }
    }
}
//console.log(anotherUser);
//console.log(anotherUser.fullName.userName.lastName); // Kanoujia

// ++++++++++++++++++++++++  combining multiple objects  +++++++++++++++++++++
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {5: "e",6: "f"}

const obj4 = {obj1, obj2, obj3}
//console.log(obj4);  // it adds each object as a element not elements of the object
/*{
    obj1: { '1': 'a', '2': 'b' },
    obj2: { '3': 'c', '4': 'd' },
    obj3: { '5': 'e', '6': 'f' }
  }
*/

const objTarget = Object.assign(obj1,obj2,obj3) // Here objTarget and obj1 will be equal because 1st parameter acts as a target, So, it is better to use {} at first parameter
const objTarget2 = Object.assign({},obj1,obj2,obj3) //Good practice
//console.log(objTarget); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//console.log(objTarget2); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Spread operator to add objects

const obj5 = {...obj1, ...obj2, ...obj3}
//console.log(obj5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// +++++++++++++++++++  When values are coming from database  ++++++++++++++++++++++++++++++++++++
 // objects are inside array

 const users = [
    {
        id: 1,
        email: "shri@gmail.com"
    },
    {
        id: 2,
        email: "shr@gmail.com"
    },
    {
        id: 3,
        email: "sh@gmail.com"
    },
    {
        id: 4,
        email: "s@gmail.com"
    }
 ]
//console.log(users[1]); //{ id: 2, email: 'shr@gmail.com' }

// console.log(tinderUser); // { id: 13244, Name: 'Shreya', isLoggedIn: false }

// console.log(Object.keys(tinderUser)); //[ 'id', 'Name', 'isLoggedIn' ] - Keys method will fetch all the keys from the object tinderUser
// console.log(Object.values(tinderUser)); // [ 13244, 'Shreya', false ] - Values method will fetch all the Values from the object tinderUser
// console.log(Object.entries(tinderUser)); // [ [ 'id', 13244 ], [ 'Name', 'Shreya' ], [ 'isLoggedIn', false ] ]

// TO CHECK IF PROPERTY EXISTS IN THE OBJECT OR NOT
//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true



// ++++++++++++++++++++++++++++++++  OBJECT DESTRUCTURING & JSON API  +++++++++++++++++++++++++++++++++++++++++

const course = {
    courseId: 2,
    courseName: "JS",
    courseInstructor: "shreya"
}

const {courseInstructor: instructor} = course //destructuring : from object course courseInstructor can be access by instructor
console.log(instructor);//shreya

// JSON FORMAT(properties inside curly braces)
// {
//     "courseId": "2",
//     "courseName": "JS",
//     "courseInstructor": "shreya"
// }