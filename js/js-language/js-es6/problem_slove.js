// arrow function that will taka 3 parameters, will multiply the parameters and will return the result
const multi = (a, b, c) => a * b * c;
console.log(multi(2, 3, 4));

// template string
const str = `
  web dev
  love to code 
  eat biryani
 `;
console.log(str);

// default parameter using arrow function
const def = (a, b = 2) => a + b;
console.log(def(5));

//
const friend = ["kibb", "kid", "junayed", "middle"];
const newArr = [];
const bondhu = (friend) => {
  const arr = friend.length % 2 == 0;
  return newArr.push(arr);
};
const output = bondhu(friend);
// console.log(output);

//
const arr1 = [2, 5, 6, 9, 4];
const arr2 = [10, 15, 30, 29, 56];

const combine = [...arr1, ...arr2];
console.log(combine);
const maxValue = Math.max(...combine);
console.log(maxValue);
