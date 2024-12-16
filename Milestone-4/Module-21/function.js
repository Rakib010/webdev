//
function square(number) {
  const a = number * number;
  console.log("square:", a);
}
square(10);
square(5);

function add(n1, n2) {
  const sum = n1 + n2;
  // console.log("sum:", sum);
}
add(2, 4);

//

function difference(num1, num2) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

const x = 45;
const y = 76;
const result = (x, y);
console.log(result);

function sumOfNumbers(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
const arr = [5, 7, 25, 60, 3];
const total = sumOfNumbers(arr);
console.log("sum:", total);

function myFun(theObject) {
  theObject.cname = "Toyota";
}
const myCar = {
  cname: "honda",
  model: "accord",
  year: 1998,
};
console.log(myCar.cname); // honda
myFun(myCar);
console.log(myCar.cname); // toyota

// A nested function example


function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return num1 * num2;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
