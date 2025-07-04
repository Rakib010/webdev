// Array and object Destructuring
const numbers = [20, 40, 10, 80];
/* const x = numbers[0];
const y = numbers[1]; */
// const [x, y] = [20, 40];
const [a, b, c] = numbers;
console.log(a, b, c);

const getValue = (a, b) => {
  const num = [a, b];
  return num;
};
console.log(getValue(90, 34));
const [first, second] = getValue(20, 40);
console.log(first, second);

// object er vitorer array ke -  (eduction result gula) destructuring kore eksathe pete pari.
const guy = {
  name: "Rakib",
  age: 24,
  gender: "male",
  eduction: ["ssc", "hsc", "bcs", "mcs"],
};
const [result1, result2, result3, result4] = guy.eduction;
console.log(result1, result2, result3, result4);

// object destructuring

const { name, age } = { name: "alu", age: 14, salary: 2000 };
console.log(name, age);
const employee = {
  ide: "vs code",
  designation: "developer",
  machine: "mac",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: 67,
    address: "dhaka",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
    },
  },
};

const { machine, ide } = employee;
console.log(machine, ide);

const { weight, height } = employee.specification;
console.log(weight, height);

const { color, price } = employee.specification.watch;
console.log(color, price);
