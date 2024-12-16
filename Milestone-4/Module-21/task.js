/* Take four parameters. Multiply the four numbers and then return the result */
function multiply(a, b, c, d) {
  return a * b * c * d;
}
const result = multiply(2, 3, 6, 5);
// console.log(result);

/* Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

function numberMultiply(n) {
  if (n % 2 == 0) {
    return n / 2;
  } else {
    return n * 2;
  }
}
const output = numberMultiply(15);
// console.log(output);

/* Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg(arr) {
  let x = arr.length;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  let y = sum / x;
  return y;
}
const arr = [5, 20, 40, 25, 10];
const res = make_avg(arr);
console.log(res);

/* Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.*/

function count_zero(str) {
  let zeroCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      zeroCount++;
    }
  }
  return zeroCount;
}
const str = "0100011100";
const cont = count_zero(str);
console.log(cont);

/* Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd */

function odd_even(num) {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "odd";
  }
}

console.log(odd_even(40));
console.log(odd_even(133));
