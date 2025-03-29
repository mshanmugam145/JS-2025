// Unary => only one operant/value
let value = 100;
// value++ // post increment ==> 101
// value-- // post decrement ==> 99
// ++value; // pre increment ==> 101
// --value; // pre decrement ==> 99

// console.log(--value); //99 ==> first minus then new value will be stored
// console.log(++value); //101 ==> first add by 1 then new value will be stored
// console.log(value--); //100 ==> 100 then minus by 1 then the new value will be stored
// console.log(value++); //100

// console.log(value+++10);
// console.log(value); //101
// value++ => token
// + => token
// 10 => token


// Binary Operator
// - Arithmatic Operator ==> +, -, *, /, %
// console.log(10 + 20); // 30
// console.log(20 - 10); // 10
// console.log(2 * 4); // 8

// console.log(4 / 2); // 2 (quotient)
// console.log(4 % 2); //0 (reminder)
// console.log(5 % 2); // 1

// console.log(10 + "10");
// console.log(10 - '1'); //9
// console.log('1' - 10); //9
// console.log("str" - 10); // NaN ==> Not A Number


// ------------------------------------------------------
// Rational Operator (<, <=, >, >=, ==, !=, ===, !==) : Output boolean
// console.log(20 < 10);
// console.log(10 <= 10);

// console.log(1 == '1'); // Don't use // just check the values on both side
// console.log(1 === '1'); // use this // it will check value and datatype

// -------------------------------------------------------
// Logical Operator (OR[||] , AND[&&], NOT[!]): Output boolean

// || => (false) || (false) || (true) ==> true
// && => (true) && (false) && (false) => false

// let age = 18;
// console.log(!(age >= 18));
// let age = 18;

// (age >= 18) && console.log("your eligible for voting")

// if(age >= 18){
//     console.log("your eligible for voting");
// }

// --------------------------------------------------------
// Assignment Operator (=, +=, -=, *=, /=, %=)
// let a = 20;

// a = a + 20;
// a += 20 // ==> a = a + 20;

// a = a - 10;
// a -= 10;

// a = a * 2;
// a *= 2;

// a = a / 10;
// a /= 10

// a = a % 10;
// a %= 10;
// console.log(a);

// -------------------------------------------------------
// Bitwise Operator
// Binary - 0 and 1
// hexadecimal = 16 => 0 to 9, a, b, c, d, e, f
// decimal - 10

// 1010 => 0 * 2 ^ 0 + 1 * 2 ^ 1 + 0 * 2 ^ 2 + 1 * 2 ^ 3
//      => 0 + 2 + 0 + 8
//      => 10

// 1. AND, OR, NOT Operator
//AND
// 1 AND 1 = 1
// 1 AND 0 = 0
// 0 AND 1 = 0
// 0 AND 0 = 0

// OR
// 0 OR 0 = 0
// 1 OR 1 = 1
// 1 OR 0 = 1
// 0 OR 1 = 1

// NOT
// !0 = 1
// !1 = 0

// 2. Left(<<) and right shift(>>)
//Left Shift
// let a = 20;
// console.log(a << 3); // a * 2 ^ k

// =>  10100 ==> 101000 
// console.log(2 ** 7);

// Right Shift
// let a = 20;
// console.log(a >> 1); // a / 2 ^ 3

// XOR Operator (^) (Xlusive OR operator)
// Truth
// 1 ^ 1 = 0
// 0 ^ 0 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1

// Properties
// 1. Commutative
// A ^ 0 = A (0 XOR identity) 
// A + 0 = A (0 identity addition)

// console.log(0 ^ 20);

// 1010 => 10
// 0000 => 0
// ----------
// 1010 => 10

// 2. A ^ A = 0

// console.log(10 ^ 10);
// 1010 => 10
// 1010 => 10
// ----
// 0000 => 0

// 3. A ^ A ^ A ^ A ^ A .... = if even = 0, ODD = A
// A ^ A ^ A ^ A = 0 ^ 0 = 0 (EVEN)
// A ^ A ^ A => 0 ^ A = A (ODD)

// 4. A ^ A ^ B = A ^ B ^ A = B ^ A ^ A = B
// Position does not matter.

// Problem - Use Case:
// Problem = 1,3,1,3,4,5,4,5,2











