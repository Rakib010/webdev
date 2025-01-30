// Find the lowest number in the array below.
/* 
function heightsNumber(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (lowest > numbers[i]) {
      lowest = numbers[i];
    }
  }
  return lowest;
}
const arr = [167, 190, 120, 165, 137];
const result = heightsNumber(arr); */
// console.log(result);

// Find the friend with the smallest name.

const strName = ["rahim", "robin", "rafi", "ron", "rashed"];



function smallestName(str) {
  // console.log(str);
}
const output = smallestName(strName);
// console.log(output);

/* Your task is to calculate the total budget required to buy electronics.
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
 */

/* function calculateElectronicsBudget(x, y, z) {
  const laptop = x * 2;
  const tablet = y * 3;
  const mobile = z * 2;
  return laptop + tablet + mobile;
}
const laptop = 3500;
const tablet = 1500;
const mobile = 2000;
const total = calculateElectronicsBudget(laptop, tablet, mobile);
// console.log(total); */

/* You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone. */

/* const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let sum = 0;
  let length = phones.length;
  for (const num of phones) {
    sum = sum + num.price;
  }
  return sum / length;
}
const avgPhn = findAveragePhonePrice(phones); */
// console.log(avgPhn);

/* For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month. */

// first way
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function incrementSalary(employees) {
  let person;
  let totalAmount = 0;
  for (const employee of employees) {
    if (employee.name) {
      person = employee.experience * employee.increment + employee.starting;
      console.log(person);
      totalAmount += person;
    }
  }
  return totalAmount;
}
const totalPay = incrementSalary(employees);
console.log("total pay:", totalPay);

// another way

function incrementSalary(employees) {
  let person1, person2, person3, person4;
  for (const employee of employees) {
    if (employee.name === "shahin") {
      person1 = employee.experience * employee.increment + employee.starting;
      console.log("shahin:", person1);
    } else if (employee.name === "shihab") {
      person2 = employee.experience * employee.increment + employee.starting;
      console.log("shihab:", person2);
    } else if (employee.name === "shikot") {
      person3 = employee.experience * employee.increment + employee.starting;
      console.log("shikot:", person3);
    } else if (employee.name === "shohel") {
      person4 = employee.experience * employee.increment + employee.starting;
      console.log("shohel:", person4);
    }
  }
  return person1 + person2 + person3 + person4;
}
const total = incrementSalary(employees);
console.log("totalAmount:", total);
