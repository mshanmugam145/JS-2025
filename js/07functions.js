// Functions
// functions statement / declaration
// function functionName(){
//     // code to be executed
// }

// function abc(){
//     console.log("abc");
// };

// abc(); //invoke OR call a function 
// console.log(abc);

// function expression
// var abc = function(){
//     console.log("abc");
// }
// abc();


// anonymous function(a function without a name)
// function expression, IIFE
// function(){
// }

// named function expression

// var abc = function xyz(){
//     console.log("abc");
// }
// abc();

// arguments and parameter
// function sum(a, b){ //parameter
//     console.log(a + b);
// }
// sum(3,4); // arguments

// function is a first class citizen/first class function
// 1. variable - functions as value
// 2. We can pass function as arg in another function


// function sum(a, b, func){ //parameter
//     func();
//     console.log(a + b);
// }

// function abc(){
//     console.log("abc");
// }
// sum(3, 4, abc); // arguments



// we can return a function from another function
// function abc(){
//     let innerFunction = function(){
//         console.log("innerFunction");
//     }
//     return innerFunction;
// }

// console.log(abc);
// let result = abc();
// result();


// switch case in function;
let getRoleAccess = function(name, role){
    switch(role){
        case "admin":
            return `${name} - your admin`;
        case "subadmin":
            return `${name} - your sub admin`;
        case "user":
            return `${name} - your user`;
        default:
            return `${name} - your not a user`;
    }
}
let result = getRoleAccess("Jayapriya", "subadmin");
console.log(result);