// ----------------------------
// assign:
// ----------------------------
// const objA = {
//   a: 10,
//   b: 20,
// };

// const objB = {
//   a: 10,
//   b: [1,2,3,5]
// };

// partial deep copy
// const result = Object.assign({}, objB);
// const response = { ...objB }; // object destructuring
// objB.b.c = 40;
// console.log(response);
// console.log(objB);

// shallow copy
// const newObj = objB;
// objB.b.c = 40;
// console.log(newObj);
// console.log(objB);


// ----------------------------
// Object.create()
// ----------------------------
// const obj = {
//     a: 10,
//     printData: function(){
//         console.log(`${this.a} - ${this.name}`);
//     }
// }
// const result = Object.create(obj);
// result.name = "shan"
// result.printData();

// ----------------------------
// Object.defineProperty()
// ----------------------------
// const user = {};

// Object.defineProperty(user, 'firstName', {
//     value: 'John',
// })
// user.firstName = "Doe"
// console.log(delete user.firstName);
// console.log(user.firstName);


// data descriptor / accessor descriptor
// data descriptor
// - value ==> initialize the value ==> get()
// - configurable ==> decide whethere we can delete the property or not
// - enumerable ==> decide whether this property will be iterated or not(looping or not)
// - writable ==> decide whether we can change the value or not. ==> set()


// const profile = {
//     fname: "John",
//     lname: "Doe",
//     age: 30,
// }

// Object.defineProperty(profile, "fullName", {
//     value: "John Doe",
//     enumerable: false
// })

// for(let property in profile){
//     console.log(`${property} - ${profile[property]}`);
// }

// const arrayName = [6, 3, 7]
// for(let user of arrayName){
//     console.log(user);
// }

// -----------------------------------
// defineProperties
// -----------------------------------
// const user = {};
// Object.defineProperties(user, {
//     firstName:{
//         value: "John",
//         configurable: true,
//         enumerable: true,
//         writable: true,
//     },
//     lastName: {
//         value: "Doe"
//     },
//     age: {
//         value: 30,
//     }
// });
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);

// -----------------------------------
// Object.entries()
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe"
// }

// const result = Object.entries(user); // [['fname', 'john'], ['lname', 'Doe']]
// // console.log(result);

// for(let [property, value] of result){
//     // const propertyName = item[0];
//     // const value = item[1];
//     console.log(`${property} - ${value}`);
// }

// -----------------------------------
// Object.keys()
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe",
//     age: 30,
//     fullName: 'John Doe'
// }

// const result = Object.keys(user);
// console.log(result);

// -----------------------------------
// Object.values()
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe",
//     age: 30,
//     fullName: 'John Doe'
// }

// const result = Object.values(user);
// console.log(result);


// -----------------------------------
// Object.freeze() ==> it will go and update the data accessors (configurable and writable set to false)
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe",
//     age: 30,
//     fullName: 'John Doe'
// }

// const result = Object.freeze(user)
// delete user.fullName
// user.age = 40
// console.log(user.fullName);
// console.log(user.age);


// -----------------------------------
// Object.hasOwn()
// -----------------------------------

// const user = {
//     fname: "John",
//     lname: "Doe",
//     age: 30
// };

// console.log(user.toString())
// console.log('toString' in user); //true
// console.log(Object.hasOwn(user, 'toString')); // false (it will not check in-built properties or methods)

// const profile = 20;
// profile.toString()


// -----------------------------------
// Object.getOwnPropertyDescriptor()
// -----------------------------------
// const user = {
//     fname: "John",
// }

// const descriptor = Object.getOwnPropertyDescriptor(user, "fname");
// console.log(descriptor);


// -----------------------------------
// Object.getOwnPropertyDescriptors()
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe"
// }
// const result = Object.freeze(user)
// const descriptor = Object.getOwnPropertyDescriptors(user);
// console.log(descriptor);

// -----------------------------------
// Object.seal() ==> it will be used to edit the value(writable = true) but delete will not work(configurable = false)
// -----------------------------------
// const user = {
//     fname: "John",
//     lname: "Doe"
// }
// const result = Object.seal(user)
// const descriptor = Object.getOwnPropertyDescriptors(user);
// console.log(descriptor);