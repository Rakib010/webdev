/* Write a function to convert temperature from Celsius to Fahrenheit. */

function celsiusToFahrenheit(celsius) {
  const f = (celsius * 9) / 5 + 32;
  return f;
}
let celsius = 37;
// console.log(celsiusToFahrenheit(celsius));

/* You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
find: 25
output: 0 */

function countNumber(numbers) {
  let count = 0;
  let find = 11;
  for (const num of numbers) {
    if (num === find) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const result = countNumber(numbers);
// console.log(result);

/* Write a function to count the number of vowels in a string. */


/* Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming */

function longestStr(str) {

}
const str = "I am learning Programming to become a programmer";
const output = longestStr(str);
console.log(output);

/* Generate a random number between 10 to 20. */

function randomNumber(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
}
const values = randomNumber(10, 20);
// console.log(values);
