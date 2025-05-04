// let arr = ['firstName', 'lastName', 30, true ]; // ==> array
// 1 ==> first Element
// 2 ==> second element

// 0 1 2 3 4
// let arr = [1,2,3,4,5];
// arr[0] ==> accessing first element
// arr[1] ==> accessing sec element
// console.log(arr[2]);

// let arr = new Array(1,2,3,4,5); // equal to ==> let arr = [1,2,3,4,5];
// console.log(arr);

// replace elements in array
// arr[0] = "first";
// console.log(arr);

// Array
// properties
// let arr = [1,2,3,4,5]; // original array
// console.log(arr.length);

// methods / functions
// push the element at the end of array
// const count = arr.push(6); // TC: O(1), SC: O(1)
// console.log(arr); // original array being updated
// console.log(count); // number of elements/count

// last Element removal
// let arr = [1,2,3,4, "John"]; // original array
// const result = arr.pop();
// console.log(arr);
// console.log(result);

// first element remove
// let arr = [1,2,3,4, "John"]; // original array
// const result = arr.shift();
// console.log(arr);
// console.log(result);

// to add new element at 0th index
// let arr = [1,2,3,4, "John"]; // original array
// const result = arr.unshift("first");
// console.log(arr); // origial array updated to new array
// console.log(result); // count ==> .length

// indexOf ==> search element
// let arr = ['Karthika', 'Janani', 'Haniya', 'Saranya']; // original array
// Janani => 1
// Haniya => 2
// Saranya => 3
// Karthika => 0
// Shalini => -1
// console.log(arr.indexOf('Shalini'));

// Array.from
// let str = "Arulvindhiya"; // ==> ['A', 'r', 'u', 'l']
// console.log(Array.from(str));

// at(index) ==> it will give element at that position. undefined will be the output if your giving index greater than or equal to length
// let arr = ['Karthika', 'Janani', 'Haniya', 'Saranya']; // original array

// console.log(['Karthika', 'Janani', 'Haniya', 'Saranya'].at(5));

// concat() ==> used to combine 2 or more arrays.
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = ['g', 'h', 'i'];

// const result = arr2.concat(arr1, arr3);
// console.log(result);

// every ==> output is boolean (true/false) ==> AND Operation
// let arr = [1,2,3,4,5]; // original array
// way-1:
// const result = arr.every((element, index, originalArray) => {
//         console.log(`${element} - ${index}`);
//         return element < 10
// });
// way-2: // most preferrable
// const result = arr.every((item) => item < 10);
// way-3:
// const result = arr.every(function(item){
//         console.log(item);
//         return item < 10;
// })
//way-4:
// const everyFunction = (item) => item < 10;
// const result = arr.every(everyFunction);
// console.log(result);

// includes ==> true/false
// let arr = ['Karthika', 'Janani', 'Haniya', 'Saranya']; // original array
// const result = arr.includes("Karthik");
// console.log(result);

// fill => this will update original array
// let arr = ['Karthika', 'Janani', 'Haniya', 'Saranya']; // original array
// const result = arr.fill("value", 1, 4);
// console.log(arr);
// console.log(result);

// find ==> arg should be function ==> output should be first element which passes that condition
// let arr = [1,2,3,7,8,11,15,20]; // original array
// const result = arr.find((item) => {
//         return item > 200;
// });
// console.log(result);

// findIndex ==> find + indexOf ==> will provide index as an output which element passes a condition as a first
// let arr = [1,2,3,7,8,11,15,20]; // original array
// const result = arr.findIndex((item) => {
//         return item > 200
// })
// console.log(result);

// findLast ==> it is same like find method but difference - iteration will start from right to left
// let arr = [1,2,3,7,8,11,15,20]; // original array
// const result = arr.findLast((item) => {
//         return item > 10
// })
// console.log(result);

// findLastIndex
// let arr = [1, 2, 3, 7, 11, 15, 20]; // original array
// arr[arr.length-1];
// console.log(arr.at(-4));

// const result = arr.findLastIndex((item) => {
//         return item > 16
// })
// console.log(result);

// flat ==> will provide result as single array if we have more nested arrays inside input array.
// let arr = [1, 2, [3, [4, [5, [6, 7]]]]];
// console.log(arr.flat(10));

// forEach
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array
// for(let i = 0; i < arr.length; i++){
//        console.log(arr[i]);
// }

// const result = arr.forEach((item) => {
//   console.log(item)
// });

// join ==> output will be a string
// let arr = [
//         "Karthika",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array

//       console.log(arr.join(""));

// lastIndexOf
// let arr = [
//         "Kaviya",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array

//       console.log(arr.indexOf('Kaviya'));
//       console.log(arr.lastIndexOf('Kaviya'));

// reverse => this will reverse the array and also it will update the original
// let arr = [
//         "Karthika",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array
//       const result = arr.reverse();
//       console.log(result);
//       console.log(arr);

// slice ==> output will be an array and it will be a copy of what we need
// let arr = [
//         "Karthika",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array

// const result = arr.slice(1, 5); //upto 4th index wyou will get the output
// console.log(result);
// console.log(arr);

// some ===> output will be true, if anyone element satisfies the condition then output.
// let arr = [1,2,3,4,5];
// const result = arr.some((element) => {
//         return element === 1
// })
// console.log(result);

// sort ==> it will be used to make asc or desc order ==> output will be array
// ==> original array will be changed, default --> it will make asc order
// let arr = [2, 5, 1, 7, 4];
// If we apply a string char for sorting by using callback function {{(a, b) => { return b - a; }}} - it won't work

// let arr = [
//        'a', 'b'
//       ]; // original array
//       // (a, b) => { return b - a; }
// const result = arr.sort((a, b) => { return b - a; })
// console.log(result);
// console.log(arr);

// splice ==> It will cut the original array and provide in result and also the original array will be changed
// let arr = [
//         "Karthika",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array

// const result = arr.splice(4, 2, "Rishibha", "Shalini", "Abc");
// console.log(result);
// console.log(arr);

// toReversed ==> just to reverse the array but the original will NOT be changed
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array
// let result = arr.toReversed();
// console.log(result);
// console.log(arr);

// toSorted
// let arr = [
//   3, 2, 9, 5, 8, 1
// ]; // original array
// const result = arr.toSorted();
// console.log(result);
// console.log(arr);

// toSpliced
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array
// const result = arr.toSpliced(4, 2, "Rishibha", "Shalini", "Abc");
// console.log(result);
// console.log(arr);

// toString ==> it will convert array to string by comma separated ONLY.
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array
// const result = arr.toString("");
// console.log(result);
// console.log(arr);


// with ==> used to change the element using index.
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array
// const result = arr.with(0, "Rishibha");
// console.log(result);
// console.log(arr);

// keys ==> index is the key here
// let arr = [
//   "Karthika",
//   "Janani",
//   "Haniya",
//   "Saranya",
//   "Anupriya",
//   "Arulvindhiya",
//   "Jayapriya",
//   "Kaviya",
// ]; // original array

// const result = arr.keys(); //index
// for(const item of result){
//    console.log(item);
// }

// values
// let arr1 = [
//         "Karthika",
//         "Janani",
//         "Haniya",
//         "Saranya",
//         "Anupriya",
//         "Arulvindhiya",
//         "Jayapriya",
//         "Kaviya",
//       ]; // original array
//       const output = arr1.values(); //index
//       for(const item of output){
//          console.log(item);
//       }


// ### ==> Important
// map ==> array output
// let arr1 = [
//         1, 2, 3, 4, 5
//       ]; // original array

// const result = arr1.map((element, i) => {
//     return element * i
// })
// console.log(result);
// console.log(arr1);


// filter
// let arr = [
//     1, 2, 3, 4, 5
//   ]; // original array

// const result = arr.filter((element) => {
//     return element > 0
//   })
//   console.log(result);
//   console.log(arr);


// reduce

// let arr = [
//     1, 2, 3, 4
//   ]; // original array

// let result = 0;
// for(let i = 0; i < arr.length; i++){
//     result = result + arr[i];
// }
// console.log(result);

// const result = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue // 0 + 1 ==> 1 + 2 => 3 + 3 => 6 + 4 => 10
// }, 0)
// console.log(result);

// reduceRight
// const result1 = arr.reduceRight((accumulator, currentValue) => {
//     return accumulator + currentValue // 0 + 4 => 4 + 3 => 7 + 2 => 9 + 1 => 10
// }, 0)
// console.log(result1);
