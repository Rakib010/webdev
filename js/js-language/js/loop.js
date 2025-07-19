// For of loop
/*
const numbers = [13, 19, 20, 34, 45, 60];

for (let num of numbers) {
  console.log(num);
}
 */

//while loop
/* let  a = 0;
while(a < 5){
    console.log('loop')
    a++;
}
 */

/* let num = 1;
let sum = 0;

while (num <= 10) {
  console.log(num);
  sum += num;
  console.log("sum :", sum);
  num++;
}
 */

/* let num = 1;
while (num <= 10) {
//   console.log(num);
  if (num % 2 == 0) {
    console.log("Even num:", num);
  }
  num++;
} */

// For loop

/* let n = 10;
for (let i = 1; i <= n; i++) {
  //   console.log(i);
  if (i % 2 == 0) {
    console.log("Even:", i);
  } else {
    console.log("Odd", i);
  }
} */

// sum
/* let sum = 0;
for (i = 1; i <= n; i++) {
  sum += i;
  console.log("num:", i, "sum:", sum);
}
console.log("tsum:", sum); */

/* for (i = 10; i > 1; i--) {
  console.log(i);
}
 */

//give me the list number between 1 to 30 divisible by 5

/* for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
} */

// give me the sum of numbers from 1 to 20 that are divisible by 3
/* let sum = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
      console.log(i);
      sum+=i;
      console.log('sum:',sum)
    }
  } */

//break ->

/* for (let i = 1; i <= 30; i++) {
  console.log(i);
  if (i >= 10) {
    break;
  }
} */

// continue -> skip rest of the code for this iteration
/* for (let i = 1; i <= 30; i++) {
  // console.log(i);
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
 */

// Do while loop

/* let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);

 */
/* for (let i = 0; i < 5; i += 3) {
  console.log(i);
} */

/* const array = [1, 2, 3, 4, 5, 6, 7];
for (let i = 1; i < array.length; i++) {
  if (i == 5) {
    continue;
  }
  console.log(array[i]);
} */

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
