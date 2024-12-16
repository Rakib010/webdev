// How to declare a variable using let and const
const fatherName = "Arnold";
let season = "rainy";
season = "winter";

// 6 basic condition : >,<,===,!==,<=,>=
// multiple condition : && , ||

if (fatherName === "Arnold" || season === "winter") {
  console.log("true");
} else {
  console.log("false");
}
// array - index,length,push,pop,join,
const number = [1, 2, 4, 5, 6];
for (num of number) {
  //   console.log(num);
}
console.log(number.indexOf(5));
console.log(number.length);
number.push(10);
console.log(number);
number.pop();
console.log(number);
console.log(number.join("*"));
number.shift(); // shift method remove first value from array
console.log(number);
number.unshift(20); // unshift add value first index
console.log(number);
console.log(number.slice(2)); // remove 2 index
console.log(number.slice(1, 3)); // 1 theke 3 number index projonto delete from array
console.log(number.toString()); // convert to string

// for loop
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
// function
function multiple(a, b) {
  return a * b;
}
console.log(multiple(10, 10));

// object
// 2 ways to access property by name
const person = {
  name: "Rakib",
  age: 24,
  gender: "male",
};
const yo = "age";
console.log(person.name); // direct by property
console.log(person["age"]); // access via property name string
console.log(person[yo]); // access via property name in a variable
