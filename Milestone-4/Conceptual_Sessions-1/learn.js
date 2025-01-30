
/* let x = 5;
let y = '4';
let z = true;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z); */

//isNaN function

//truthy values => true , "Hello", number
// falsy values => false, " ", 0

/* let num = 3;
console.log(num **2) */

// toFixed use korle number theke string number convert hoye jay
// parseFloat, parseInt diye string to number convert kora jay
/* let a = 5;
let b = 3;
let c = a/b;

console.log(parseFloat(c.toFixed(2))); */

//isNaN() function check isnumber or not
//1. not number, and can not be transformed into number = true;
var check = 'mehady';
console.log(isNaN(check));

//2. number or can be transformed into number = false;
var check = 5.3;
console.log(isNaN(check));

//comparison operator (===, !==, >=, <=, >, <)


const isRaining = true;

if(isRaining){
    console.log("will not go outside")
} else{
    console.log("will go outside")
}

// condition ? if true : if false

isRaining === true ? console.log('will not go'):console.log('will go')

