// type coercion/coercio, truthy value and falsy value.
// type coercion ==> conversion of variables value from one dt to another dt (e.g: from string to number, string to boolean)

    // JS is loosely/weakly typed language

    // var name = "John";
    // console.log(name);
    // name = 2;
    // console.log(name);
    // name = true;
    // console.log(name);

    // implicit coercion
    // console.log("2" + 2); // concate ==> 22(string)

    // explicit coercion
    // let age = 22;
    // console.log(typeof age);
    // let newAge = age.toString(); /// Number(), parseFloat(), parseInt() => it will convert to number, toString() => convert to string dt
    // console.log(typeof newAge);

    // comparison coercion
    // ==, ===
    // "2" == 2 ==> true // comparison
    // "2" === 2 ==> false
// console.log("34534534");



    // boolean converted to number
    // console.log(Number(true)); // 1 ==> boolean converted to number
    // console.log(Number(false)); // 0
    // console.log(typeof NaN); // number

    // falsy values
    // "", undefined, null, 0, false, NaN
    // console.log(Number("str")); // NaN
    // if(!Number("str")){
    //     console.log("this is not a number");
    // }

