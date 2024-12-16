// JSON
const person = {
  name: "YoYo Boy",
  age: 24,
  gender: "male",
  eduction: ["ssc", "hsc", "bcs", "mcs"],
};

// convert object to jSON
const personJson = JSON.stringify(person);
console.log(person);
console.log(personJson);

// Convert JSON to object
const personObj = JSON.parse(personJson);
console.log(personObj);

// Fetch
/* fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data)); */

// object -> keys,value
const keys = Object.keys(person);
const value = Object.values(person);

// array like object like -alltagname,classnames -> for of loop use hobe
// object er property upor -> for in loop use hobe

// Add or Remove using dots
const products = [
  { name: "phone", price: 3200, brand: "nokia", color: "blue" },
  { name: "Mobile", price: 2000, brand: "MI", color: "black" },
  { name: "laptop", price: 32000, brand: "lenovo", color: "sliver" },
];
console.log(products);
// add new product
const newProduct = {
  name: "mac",
  price: 32000,
  brand: "apple",
  color: "sliver",
};
// copy products array andd then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// crate a new array without one specific item
// remove phones means create a new array without the phone

const remainingProducts = products.filter((p) => p.name !== "phone");
console.log(remainingProducts);
