//Singleton - (through constructor)
//Object.create


//Literals

const mySym = Symbol("key1")

const JSUser = {
    Fname: "Shreya",
    LName: "Kanojia",
    "Full Name": "Shreya Kanoujia",
    age: 23,
    [mySym]:"mykey",
    location: "kanpur",
    email: "shreya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JSUser.email); //shreya@google.com - This is a bad practice
//console.log(JSUser[email]); //error - by default key(email) take it as string
console.log(JSUser["email"]); //shreya@google.com
console.log(JSUser["Full Name"]); //Shreya Kanoujia

//Accessing property of the object using dot(.) is a bad practice because
// sometimes it is difficult to access properties that are in string type(e.g "Full Name")
//hence it is better to use [](square notation )

console.log(JSUser.mySym); //mykey
console.log(JSUser[mySym]);//mykey

//to change any property in the object
JSUser.email = "sk@shreyatech.com"
console.log(JSUser); // email will be changed now

//+++++++ to freeze any object so that no one can change any property.++++++++++++
//Object.freeze(JSUser)
//JSUser["Full Name"] = "Mansi"
//console.log(JSUser); // nothing will change in JSUser Object

//Function in object
JSUser.greeting = function(){
console.log("Hello JS User");
}
console.log(JSUser.greeting); //[Function (anonymous)] - Function execute nahi hua hai, sirf refernce aaya hai
console.log(JSUser.greeting()); //Hello JS User


JSUser.greetingTwo = function(){
    console.log(`Hello JS User : ${this.Fname} ${this.LName}`); //string interpolation
    }

    console.log(JSUser.greetingTwo());