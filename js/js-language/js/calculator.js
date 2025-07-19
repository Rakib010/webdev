function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "Only 'add', 'subtract', 'multiply', 'divide'";
  }
}

const output = calculator(5, 7, "add");
// console.log(output);

// Handle unexpected function input parameter error

function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a number";
  }
  const mult = num1 * num2;
  return mult;
}
const result = multiply(5, "seven");
// console.log(result);

//
function fullName(first, second) {
  if (typeof first !== "string") {
    return "string";
  } else if (typeof second !== "string") {
    return "should be string";
  } else {
    const full = first + " " + second;
    return full;
  }
}
const full = fullName(3, 5);
console.log(full);

// checke there has any array or not 
function arr(numbers) {
  if (Array.isArray(numbers) === false) {
    return "provide an array";
  }
  const second = numbers[1];
  return second;
}
const second = arr(55);
// console.log(second);
