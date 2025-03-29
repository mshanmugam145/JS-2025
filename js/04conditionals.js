 // Basic Syntax
// if(conditions){
    // code to be executed
// }

// let age = 17;
// if(age < 18 ){
//     console.log("No voter ID");
// } else {
//     console.log("Your eligible for voting....");
// }

// if(age >= 18){
//     console.log("Your eligible for voting....");
// }


// if(!false){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }

// true ==> 1, 2, 3..., " ", "any char"
// false ==> 0, undefined, null, ""

// if(1000000){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }

// let a;
// if(a){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }

// if(null){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }

// if("undefined"){
//     console.log("this is true");
// } else {
//     console.log("this is false");
// }

// user authenticated or not
let authenticated = false;
if(authenticated){
    console.log("User Loggedin");
} else {
    console.log("User Not LoggedIn");
}


// ternary Operator
// basic syntax
// (conditions) ? true code : false code;
(authenticated) ? console.log("User LoggedIN in Ternary") : console.log("User Not Logged in ternary");