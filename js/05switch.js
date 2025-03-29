// basic Syntax
// switch(variableName){
//     case value1:
//         // code to be executed
//         break;
//     case value2:
//         // code to be executed
//         break;
//     default:
//         // code to be executed
//         break;
// }

// Use Case:
// let role = "subadmin";
// admin => this user have access to read, delete, edit and create something.
// subadmin => this user have access to read, delete, edit something.
// poc => this user have access to read, edit something.
// user => this user have access to read something.


// Don't initialize switch case in separate variable
// const getAccess = switch(role){
//     case "admin":
//         console.log("Your eligible for read, delete, edit and create access");
//         break;
//     case "subadmin":
//         console.log("Your eligible for read, delete and edit access");
//         break;
//     case "poc":
//         console.log("Your eligible for read and edit accees");
//         break;
//     default:
//         console.log("Your eligible for read access only");
//         break;
// }