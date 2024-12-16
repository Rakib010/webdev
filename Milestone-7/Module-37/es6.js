// template string
const num = [20, 40, 10, 80];
const person = {
  name: "Rakib",
  age: 24,
  gender: "male",
  eduction: ["ssc", "hsc", "bcs", "mcs"],
};

const about = `My Name is ${person.name} age of ${person.age} has number ${num[2]} also learn ${person.eduction[0]} `;
console.log(about);

// arrow function
const arrow = () => 55;
const arrowSignal = (x) => (x % 2 == 0 ? "even" : "odd");
console.log(arrowSignal(4));
const multiLine = (a, b) => {
  return a * b;
};
console.log(multiLine(5, 4));

// spread operation -> copy array from another array
// crate a new array  from an older array and add an element
console.log(num); // before array
const cpyNumber = [...num]; // copy new array
cpyNumber.push(100);
console.log(cpyNumber);

//Array Methods - Map,ForEach,Filter and Find

const products = [
  { name: "phone", price: 3200, brand: "nokia", color: "blue" },
  { name: "Mobile", price: 2000, brand: "MI", color: "black" },
  { name: "laptop", price: 32000, brand: "lenovo", color: "sliver" },
];
const brands = products.map((product) => {
  const brandName = product.brand;
  const price = product.price;
  //   return [brandName, price]; // array return
  return { brandName, price }; // object return
});
console.log(brands);

// forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.brand));

products.forEach((p) => {
  console.log(p);
  console.log(p.brand);
});

// filter
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);
const value = products.filter((p) => p.name.includes("M"));
console.log(value);

// find
const special = products.find((p) => p.name.includes("n"));
console.log(special);

