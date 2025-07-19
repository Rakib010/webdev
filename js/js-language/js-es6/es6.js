const object = {
  name: "YoYo",
  age: 20,
  color: "white",
};
// console.log(object);

/* function - default value ->
jodi 2ta value pass kori tahole default valu kaj korbi na,
jodi 1ta value pass kori thkhn default jei value ta ashe sei sathe sum hobe */

function addValue(num1, num2 = 5) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}
// const sum = addValue(5, 7);
const sum = addValue(5);
console.log(sum);

//string
const first = "jaan";
const last = "pakhi";
const name = `${first} ${last}`;
console.log(name);

//function deration
function add1(a, b) {
  return a + b;
}
//function expression
const add2 = function (a, b) {
  return a + b;
};
// arrow function
const add3 = (a, b) => a + b;

// arrow function using object
const getAge = (person) => person; // person return korese
const student = { name: "kid", age: 20 }; // object
console.log(getAge(student));

// arrow function no parameter
const getPI = () => Math.PI;

// using multiline arrow function
const multiLine = (a, b, c, d) => {
  const sum = a + b + c + d;
  const multi = a * b * c * d;
  console.log(sum, multi);
  return multi, sum;
};
console.log(multiLine(2, 3, 4, 5));

// spread operator
const max = Math.max(6, 45, 10, 2);
console.log(max);

const numbers = [3, 5, 23, 45, 63, 23, 40];
console.log(numbers);
console.log(Math.max(...numbers));

const cir = [10, 20, 30, 40, 50];
const bondhu = cir;
bondhu.push(60);
console.log(bondhu);
console.log(cir);

//now using spread operation
const friend = [10, 20, 30, 40, 50];
const circleFrnd = friend;
const newF = [...friend];
circleFrnd.push(70);
console.log(newF);
console.log(circleFrnd);

// advanced
const sonka = [...friend, 80];
console.log(sonka);

// destructuring object/array
// object / array theke kono kisu nie asha that called destructuring
const actor = {
  namee: "sakib khan",
  age: 40,
  phone: 0185555555,
  money: 123456789,
};
// if right slide is an object left side of destructuring will be object as well.
// use property name as a variable that contains the property value
const { phone, age: yers } = actor;

console.log(phone);
console.log(yers); // property name chang

// array destructuring
/* const num = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66]; */

function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

//
const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};
console.log(glass);
const keys = Object.keys(glass);
console.log(keys);
//output - [ 'name', 'color', 'price', 'isCleaned' ]

const values = Object.values(glass);
console.log(values);
//output -  [ 'glass', 'golden', 12, true ]

const pair = Object.entries(glass);
console.log(pair);
// array of array , two dimensional array
/* output - [
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
] */

delete glass.isCleaned;
console.log(glass);

// destructuring
const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

//freeze
Object.freeze(glass);
glass.price = 5000;
console.log(glass);

// seal
Object.seal(glass);
console.price = 200;
console.log(glass);

// loop
// for of use on array or string not in object
// for in use on object
