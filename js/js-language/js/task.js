/* 1. Declare an array
1.Declare an array with 5 elements containing fruits
2.console log the 3rd index element
3.change the value of the 2nd index element to jambura
4.console log the final array
 */

let arr = ["mango", "dalim", "licho", "anaros", "daaav"];
let i = 0;
console.log(arr[3]);
console.log(arr[2]);
arr[2] = "jambura";
while (i <= arr.length) {
  console.log(i, arr[i]);
  i++;
}

/* 2. Add or remove elements
1.Declare an array of 3 tourist destinations
2.Add a new tourist destination to your tourist array
3.Add two more to your array
4.Remove the last tourist destination you have added
5.display the final array as output */

const arr = ["usa", "dubai", "thailand"];
let i = 0;
arr.push("London");
arr.push("Switzerland");
arr.push("pakistan");
arr.pop();
console.log(arr.length);
while (i <= arr.length) {
  console.log(i, arr[i]);
  i++;
}

/* 3. Checking Array Membership with ‘includes’
Instructions:
1.Create an array of books containing different book.
2.Use the includes method to check if the array contains a javascript book.
3.Print a message to the console indicating whether the element is present in the array or not.
 */

const book = ["art", "mind", "time", "islam", "js book"];

console.log(book.includes("js book")); 
 
/* 4. Checking if it's an Array
Instructions:
1.Create different variables, each containing either an array or a non-array value.
2.Now use isArray to check if each variable is an array.
3.Print a message to the console indicating whether each variable is an array or not. */

let arr = [5, 10, 15];
let num = 30;

console.log(Array.isArray(arr));
console.log(Array.isArray(num));

 // Step 1: Create different variables
let fruits = ["apple", "banana", "orange"]; // Array
let name = "John Doe"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let address = { city: "New York", zip: "10001" }; // Object
let empty = []; // Empty Array
let nothing = null; // Null
let items = [1, 2, 3]; // Array

console.log(`fruits is an array: ${Array.isArray(fruits)}`); // true
console.log(`name is an array: ${Array.isArray(name)}`); // false
console.log(`age is an array: ${Array.isArray(age)}`); // false
console.log(`isStudent is an array: ${Array.isArray(isStudent)}`); // false
console.log(`address is an array: ${Array.isArray(address)}`); // false
console.log(`empty is an array: ${Array.isArray(empty)}`); // true
console.log(`nothing is an array: ${Array.isArray(nothing)}`); // false
console.log(`items is an array: ${Array.isArray(items)}`); // true
 

/* 5. Combining Arrays
Instructions:
1.Create two arrays of your choice.
2.Use the concat method to combine the two arrays into a new array.
3.Print both the original arrays and the combined array using console.log().
   */

const arr1 = [5, 25, 50];
const arr2 = [10, 20, 30];
console.log(arr1);
console.log(arr2);

console.log(arr1.concat(arr2));
