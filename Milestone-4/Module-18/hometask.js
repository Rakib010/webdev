/* 
Task 1:
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burger = 560;
let coke;

if (burger > 500) {
  coke = 0;
  console.log("free coke");
} else {
  coke = 30;
  console.log(coke);
}

/*
Task 2:  BMI Calculator and Health Category - 
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let BMI;
const weight = 54;
const height = 5.7;

BMI = ((weight / height) * height) / 2;

// console.log(BMI.toFixed(3));

if (BMI < 18.5) {
  console.log("you are underweight");
} else if (BMI >= 18.5 && BMI <= 24.5) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight");
} else {
  console.log("You are obese");
}

/*
Task 3:
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

*/

let marks = 60;

if (marks >= 90 && marks <= 100) {
  console.log("Grad : A");
} else if (marks >= 80 && marks < 90) {
  console.log("Grad : B");
} else if (marks >= 70 && marks < 80) {
  console.log("Grad : B");
} else if (marks >= 60 && marks < 70) {
  console.log("Grad : B");
} else if (marks >= 0 && marks < 60) {
  console.log("Fail");
} else {
  console.log("xm dei nai");
}

/*
Task 4:
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const score = 85;
const friend = 78;

if (score > 80) {
  console.log("inside your friend score");
  if (friend > 80) {
    console.log("Go For a lunch");
  } else if (friend <= 80 && friend >= 60) {
    console.log("Good luck next time");
  } else if (friend < 60 && friend >= 40) {
    console.log("msg unseen");
  } else if (friend < 40) {
    console.log("block");
  }
} else {
  console.log("Ghuma");
}

/*
Task 5:

you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 5;
const num2 = 3;
let result;

result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

/*
Task 6:
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 3;
let student = true;
let ticket = 800;

if (age < 10) {
  ticket = 0;
} else if (student) {
  ticket = (ticket * 50) / 100;
} else if (age >= 60) {
  ticket = (ticket * 15) / 100;
} else {
  ticket = 800;
}
console.log(ticket);
