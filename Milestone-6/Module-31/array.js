// this module we will learn these topic
/* 
 1. map
 2. forEach
 3. filter
 4. find 
 5. reduce


*/

// try to same output  different way
const numbers = [4, 5, 2, 8, 10];
// output like - [ 8, 10, 4, 16, 20 ]
// doubled each array
const doubled = [];
for (const num of numbers) {
  const double = num * 2;
  doubled.push(double);
}
console.log(doubled);

// map => loops through each element of the array and do the operation that you passed in the call function and hold the result from each operation in an array and finally returns you the array.
// another way doubled each array
function doubleIt(num) {
  return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);

// using arrow function
const double2 = (num) => num * 2;
const output = numbers.map(double2);
console.log(output);

// direct map method using arrow function short cut
const output2 = numbers.map((num) => num * 2);
console.log(output2);

// using map
const friends = ["tom", "kom", "jon"];
const length = friends.map((str) => str.length);
console.log(length); // output - [ 3, 3, 3 ]

const firstLetter = friends.map((letter) => letter[0]);
console.log(firstLetter); // output - [ 't', 'k', 'j' ]

//map -> each element er upor kaj ses kore new ekta array make kore, new array result die return kore
//forEach -> each element er upor kaj ses kore kisu return kore na
const number = [10, 20, 30, 40, 50];
const out = number.forEach((num) => console.log(num));

//filter
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const playersHight = [75, 65, 57, 72, 59];
const selected = playersHight.filter((player) => player > 60);
const evenPlayer = playersHight.filter((playerEven) => playerEven % 2 == 0);
console.log(selected);
console.log(evenPlayer);

const friend = ["kom", "tom", "jomjom", "sonkon"];
const oddFried = friend.filter((f) => f.length > 4);
console.log(oddFried);

//find method -> find hocche just condtion true hoile. sei conditon er first value ta dibe. na paile undefined dibe
const select = playersHight.find((p) => p > 70);
console.log(select);

// reduce -> total 3 parameter use korte  hoy
// 2ta call function r ekta initial value(0)
const arr = [4, 5, 7, 1, 3, 66];
const total = arr.reduce((previous, current) => previous + current, 0);

console.log(total);

//array of objects
//Map
const products = [
  { id: 1, name: "hp", price: 65000 },
  { id: 2, name: "dell", price: 75000 },
  { id: 3, name: "lenovo", price: 6000 },
  { id: 4, name: "mac", price: 165000 },
];

const names = products.map((product) => product.name);
console.log(names);

//array of objects using forEach
products.forEach((p) => console.log(p.id));

//filter
const price = products.filter((f) => f.price > 65000);
console.log(price);

//find
const affordable = products.find((p) => p.price < 50000);
console.log(affordable);

// reduce
const subtotal = products.reduce((acum, current) => acum + current.price, 0);

console.log(subtotal);
