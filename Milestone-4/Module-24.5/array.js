const products = [
  { name: "phone", price: "1200" },
  { name: "laptop", price: "2200" },
];

products[0];
products[1];

const product = {
  0: 15,
  1: 56,
  2: 40,
};

// Array like object
function add(n1, n2) {
  console.log(n1, n2);
  console.log(arguments);
}
add(12, 13, 15, 16, 28);

//
const numbers = [45, 65, 23, 98, 19];

for (const num of numbers) {
  //   console.log(numbers);
}

const productsPhn = [
  { id: 1, name: "xiaomi phone", price: 19000 },
  { id: 2, name: "iphone ", price: 19000 },
  { id: 3, name: "mac book air", price: 19000 },
  { id: 4, name: "lenovo yoga laptop 2025", price: 19000 },
  { id: 5, name: "samsung Phone note 7", price: 19000 },
  { id: 6, name: "nokia old age phone", price: 19000 },
  { id: 7, name: "phone one", price: 19000 },
  { id: 8, name: "nokia old", price: 19000 },
];

for (const product of productsPhn) {
  console.log(product);
}

function matchedProducts(product, search) {
  let matched = [];
  for (const product of productsPhn) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, "phone");
console.log(result);
