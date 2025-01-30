// loop -> for loop, while loop, for of(array), for in(object),

const arr = ["Elon", "Bill", "Mark", "Waren"];

for (let i = 0; i < arr.length; i++) {
  //   console.log(i, arr[i]);
}

// reverse

const number = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(number.reverse());

const rev_number = [];
for (const num of number) {
  rev_number.unshift(num);
}
console.log(rev_number);

//sort
const person = ["rakib", "sakib", "akib", "dakib"];
// console.log(person.sort());

const numberr = [23, 5, 67,93,56];

