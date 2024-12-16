const arr = [10, 20, 30, 40, 50];

/* for (let item of arr) {
  console.log(item);
} */

// forEach,
// forEach doesn't return value

// first approach using regular function
function show(a) {
  //   console.log(a);
}
arr.forEach(show);
// using arrow function another apporach
const showArr = (a) => console.log(a);
// arr.forEach(showArr);

//
arr.forEach((item) => {
  console.log(item);
});

// sum
let sum = 0;
arr.forEach((item) => {
  sum += item;
});
console.log(sum);

// callback parameters (item,index,whole array)
arr.forEach((item, index, array) => {
  console.log("item:", item, "index:", index, "array:", array);
});

// Map Methods
// Map same like forEach but map return value
const arr1 = [20, 30, 40, 50, 60];
const out = arr.map((a) => a);
console.log(out);

const maap = arr.map((item) => {
  return item + 3;
});
console.log(maap);

// Find same as like forEach & map
// jodi condition ture hoi tahole first tahole vitore dukbe 1ta value return korbe else undefind return korbe
const numbers = [12, 23, 45, 55, 78, 90];
const number = numbers.find((num) => num > 50 && num % 2 === 0);
console.log(number);

//filter
// condition false hole empty array  return kore
const num = numbers.filter((n) => n > 50 && n % 2 === 0);
console.log(num);

// reduce method

const numbers1 = [1, 2, 3, 4];

const sumValue = numbers1.reduce((prev, current) => prev * current, 1);

console.log(sumValue);

const num1 = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
const total = num1.reduce((prev, current) => prev + current.a, 0);
console.log(total);
