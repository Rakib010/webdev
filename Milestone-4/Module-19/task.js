/* "I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */

let i = 1;
let n = 60;
while (i <= n) {
  console.log(
    i,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
  i++;
}

/*
Subtask-1:
1.Find all the odd numbers from 61 to 100.
2.Display sum of all the odd numbers from 81 to 131.
3.Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.

Subtask-2:
1.Find all the even numbers from 78 to 98.
2.Display sum of all the even numbers from 206 to 311.
3.display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

//1 & 2
let j = 61;
let k = 100;
let sumt = 0;
while (j <= k) {
  //   console.log(i);
  if (i % 2 !== 0) {
    console.log("odd:", i);
    sumt += j;
    console.log("sum:", sum);
  }
  j++;
}

// 3.
let x = 1;
while (x <= 40) {
  if (x % 2 !== 0) {
    x++;
    continue;
  }
  console.log("even:", x);
  x++;
}

// 1 & 2
let a = 78;
let nt = 98;
let asum = 0;
while (a <= NodeList) {
  //   console.log(i);
  if (a % 2 == 0) {
    console.log("Even:", a);
    asum += a;
    console.log("sum:", asum);
  }
  a++;
}

//3
let b = 55;
let d = 85;
let sum = 0;
while (b <= d) {
  if (b % 5 == 0) {
    console.log("divisible:", b);
  }
  console.log(b);
  b++;
}

/*
Implement a countdown timer that counts down from 21 to 15.
 */
let endnum = 21;
let strnum = 15;
while (endnum >= strnum) {
  // console.log(n);
  n--;
}

/*
As Eras is learning now, she wants to explore more and more. Tell Eras to generate a multiplication table for number 5 */

let digit = 5;
let digitStore = 0;
for (let i = 1; i <= 10; i++) {
  digitStore = digit * i;
  console.log(`${digit} * ${i} = ${digitStore}`);
}

/* Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
 */
let k;
for (let k = 1; k <= 100; k++) {
  let sqrt = Math.sqrt(k);
  if (Number.isInteger(sqrt)) {
    console.log(k);
  }
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let numbers = 1;
let sumNumbers = 0;
while (numbers <= 50) {
  sumNumbers += numbers;
  if (sumNumbers >= 100) {
    console.log("reaches 100");
    break;
  }
  numbers++;
}
console.log(sumNumbers);

/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
let num = 1;
// let hun = 100;
while (num <= 200) {
  if (num === 100) {
    console.log("Found 100");
    break;
  }
  num++;
}
console.log(num);
