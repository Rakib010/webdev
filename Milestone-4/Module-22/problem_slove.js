/*  // inch to feet

function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch";
  return result;
}
const inch = 70;
// console.log(inchToFeet(inch));

// mile to kilo meter
function mileToKilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
// const a = 24;
// console.log(mileToKilo(a));

// kilo to mile
function kiloToMile(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const x = 24;
// console.log(kiloToMile(a));

// Leap year

function leapYear(year) {
  if (year % 400 == 0 || (year % 100 !== 0 && year % 400 == 0)) {
  }
  return true;
}
const year = 2050;
// console.log(leapYear(year));

// oddavg

function oddAverage(number) {
  let sum = 0;
  let cont = 0;
  for (const num of number) {
    if (num % 2 !== 0) {
      cont++;
      sum += num;
    }
  }
  const avg = sum / cont;
  return avg;
}
const number = [42, 13, 15, 20, 19, 1];
console.log("Sum:", oddAverage(number));
 

// math basic--------------

const min = Math.min(34, 56, 489, 23, 9, 45);
console.log("min:", min);

const max = Math.max(34, 56, 489, 23, 9, 45);
console.log("Max:", max);

console.log(Math.PI);
console.log(Math.abs(5 - 10));
console.log(Math.round(3.35));
console.log(Math.floor(2.95));
console.log(Math.ceil(2.15));

console.log(Math.random());
const rand = Math.round(Math.random() * 10);
console.log(rand);

//swap----------------

let a = 5;
let b = 8;
let temp;

console.log(a, b);

temp = a;
a = b;
b = temp;

console.log("a:", a, "b:", b);

//another-----------------------
console.log(a, b);
// a value next array b te bose, b value next array a te bose
[a, b] = [b, a];

console.log(a, b);
 */

//
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
     }, 100);
  }