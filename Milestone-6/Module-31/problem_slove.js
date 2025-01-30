/*
 input: [1, 3, 5, 7, 9]
 output: [ 2, 4, 6, 8, 10 ]
 */
const arr = [1, 3, 5, 7, 9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    newArr.push(arr[i] + 1);
  }
}
console.log(newArr);

// using map
const result = arr.map((p) => p + 1);
console.log(result);

// using map
const output = arr.map((num) => {
  return num % 2 === 2 ? num + 1 : num;
});
console.log(newArr);

/*
 numbers = [33, 50, 79, 78, 90, 101, 30];
 divisible by 10 using filter method
*/
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers.filter((num) => num % 10 === 0);
console.log(divisible);

// display the instructor names that has the position senior
const instructor = [
  { name: "Nodi", age: 28, position: "senior" },
  { name: "sager", age: 28, position: "junior" },
  { name: "shobuj", age: 28, position: "senior" },
];

const senior = instructor.filter((str) => str.position == "senior");
console.log(senior);

// display 3 object age sum
const peoples = [
  { name: "Nodi", age: 20 },
  { name: "sager", age: 15 },
  { name: "shobuj", age: 22 },
];
let ageSum = 0;
for (let manush of peoples) {
  ageSum += manush.age;
}
console.log(ageSum);

const totalAge = peoples.reduce((sum, person) => sum + person.age, 0);
console.log(totalAge);

// task -1: console log the secondary school location of Sophia
let data = {
  Sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "Peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "St Lorence" },
        ],
      },
    ],
  },
};

console.log(data.Sophia.study[1].secondary[1].location);

// task-2: console .log  output: Petersburg, Herry

let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "UK",
    },
  },
  3333: {
    name: "Herry",
    section: "D",
    class: "X",
    address: {
      "building no": 85,
      street: "DC road",
      city: "Kachukhet",
      country: "Bangladesh",
    },
  },
};
console.log(students['2222'].address.city);

// task-3 : access and then show habluder adda
// show output Beginner
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "gobluder adda",
        category: "ABC",
        price: "40$",
      },
      bookCategory: "Beginner",
    },
  ],
};
console.log(data2.data[0].bookDetails.name)