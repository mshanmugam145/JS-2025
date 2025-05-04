
// Difference ==> var and let and const
// 1:
// var ==> functional scope
// let and const ==> blocked scope

// simple block
// var a = 10;
// {
//     let a = 20;
//     console.log(a); //20
// }

// console.log(a); // 10

// 2:
// we can update the value for the variable
// let a = 10;
// a = 20;
// console.log(a); // 20

// var b = 10;
// b = 20
// console.log(b); // 20

// const c = 10; // only for primitive datatypes
// c = 20; // TypeError: Assignment to constant variable.
// console.log(c);


// 3:
// declaration and intialization
// let a;
// a = 10;
// console.log(a); //10

// var b;
// b = 20;
// console.log(b); //20

// // const c; // SyntaxError: Missing initializer in const declaration
// const c = 30;
// console.log(30);

// 4: hoisting
// console.log(a); //undefined ==> this is hoisted
// var a = 10;

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 20;

// temporal dead zone ==> space or code OR time period between accessing variable of let and const and actually intizlized the value;

// 5: re-declaration
// var a = 10;
// var a = 20;
// console.log(a); //20

// let b = 10;
// let b = 20;
// console.log(b); // SyntaxError: Identifier 'b' has already been declared

// const c = 20;
// const c = 30
// console.log(c); // SyntaxError: Identifier 'c' has already been declared

// Important Note: Use let and const for variable declation

