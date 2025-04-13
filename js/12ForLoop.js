let arr = [
  "Karthika",
  "Janani",
  "Haniya",
  "Saranya",
  "Anupriya",
  "Arulvindhiya",
  "Jayapriya",
  "Kaviya",
]; // original array


// Methods-1: Simple for syntax
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let i = 0;
// for (;;) {
//   if (i < arr.length) {
//     console.log(arr[i]);
//     i++;
//   }
// }

// for(let i = 0; i < arr.length; i = i + 1){
//     console.log(arr[i]);
// }

//Methods-2: forEach() in built method
// arr.forEach((element, index, originalArray) => {
//     // console.log(originalArray);
//     console.log(`${index} - ${element}`);

// })

// Method-3: for...of syntax
// for(const element of arr ){
//     console.log(element);
// }


// Method-4 Basic while syntax;
// let i = 0;
// while(i < 0){
//     console.log(arr[i]);
//     i++;
// }


//Method-5: do...while syntax
// let i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// }
// while(i < arr.length)
