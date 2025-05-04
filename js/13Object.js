// 1. keys and values ==> will be object iteratable

const user = require("./15.iife");
(
    function(){
        const user = "John Doe"
    }
)()

console.log(user);

// Method - 1: "Object Literal"
// const user = {
//     fname: 'Jonh',
//     lname: 'Doe',
//     age: 30,
//     isLoggedIn: true,
// };

// accessing a object
// console.log(user.fname);
// console.log(user['lname']);

// console.log(user.fullName); //undefined

// add new property/key-value to the object
// user.fullName = 'John Doe';
// console.log(user);

// changing/updating a value for a property/key
// user.age = 35;
// console.log(user);

// deleting the property/key-value from object
// delete user.isLoggedIn; OR delete user["isLogedIn"];
// console.log(user);

// how to check whether a property available in object or not
// console.log('fname' in user);

// const user = {
//     fullName: "John Doe", // property
//     course: ["js", "React", "java", "python"], // property
//     addCourse: function(package){ // method
//         this.course.push(package)
//     },
//     getCourseCount: function(){
//         return this.course.length; //method
//     },
//     removeCourse: function(value){
//         if(value === "first"){
//             this.course.shift(); // TC: O(n) 1 sec
//         } else if(value === "last"){
//             this.course.pop() // TC: O(1) 0.001 msec
//         } else { // TC: O(n) ==> 1 sec ==> 1 sec
//             // if(this.course.includes(value)){ // TC: O(n)
//                 const result = this.course.filter((item) => { // TC: O(n)
//                     return item !== value
//                 })
//                 this.course = result;
//             // }
//         }
//     },
// }

// console.log(user.fullName);
// console.log(user.course);
// user.addCourse("JS");
// console.log(user.course);
// console.log(user.getCourseCount());
// user.removeCourse("java");
// console.log(user.course);

// Method-2 : (new contructor)
// new keyword
// const user = new Object(); // {}
// user.fname = "John"
// user.lname = "Doe";
// user.getFullName = function (){
//     console.log(`${this.fname} ${this.lname}`)
// }
// console.log(user.getFullName());


// Method-3: using function
// factory fuction / method
// const user = function(fname, lname){
//     return {
//         fname: fname,
//         lname: lname
//     }
// }

// const profile = user("JOhn", "Doe");
// console.log(profile);




