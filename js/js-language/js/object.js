 const car = {
  brand: "bmw",
  color: "black",
  price: 45,
};

// console.log(car);

const subjec = {
  name: "math",
  teacher: "rasheda mam",
  xmDate: 22,
};

console.log(subject.name);

const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  sdd: "512gb",
};
const keys = Object.keys(computer);
console.log(keys);

const values = Object.values(computer);
console.log(values);

const college = {
  name: "vnc",
  class: ["11,12"],
  events: ["science fair", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

college.unique.result.merit = "top top top";
console.log(college);
delete college.class;
console.log(college); 

let subject = {
  name: "math",
  teacher: "rasheda mam",
  xmDate: 22,
};
// for in : object
for (const prop in subject) {
  console.log(prop);
//   console.log(subject[prop]);
}
const keys = Object.keys(subject);
console.log(keys);

for(const key of keys ){
    console.log(key, ':', subject[key]);
}

//What is the output of the following code snippet?

const myObject = {
 a: 1,
 b: 2,
 c: 3
};

for (let prop in myObject) {
 console.log(myObject[prop]);
}