// Cheapest phon from array of phn object

const phones = [
  { name: "samasung", price: 20000, camera: "12mp", color: "black" },
  { name: "xoami", price: 30000, camera: "12mp", color: "black" },
  { name: "oppo", price: 10000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 120000, camera: "12mp", color: "black" },
  { name: "HTC", price: 5000, camera: "12mp", color: "black" },
];

function chicestPhn(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const cheap = chicestPhn(phones);
// console.log("cheapest phone:", cheap);

// max
function maxPhn(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}
const max = maxPhn(phones);
// console.log("high price:", max);

// object products price sum
const products = [
  { name: "shampoo", price: 200 },
  { name: "pant", price: 800 },
  { name: "shirt", price: 600 },
  { name: "chiron", price: 100 },
];

function shopping(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}
const total = shopping(products);
// console.log(total);

// quantity & price
const allProducts = [
  { name: "shampoo", price: 200, quantity: 2 },
  { name: "pant", price: 800, quantity: 3 },
  { name: "shirt", price: 600, quantity: 5 },
  { name: "chiron", price: 100, quantity: 1 },
];

function cartTotal(allProducts) {
  let sum = 0;
  for (const product of allProducts) {
    sum = sum + product.price * product.quantity;
  }
  return sum;
}
const shoppingCart = cartTotal(allProducts);
// console.log(shoppingCart);

/* discount price
upto : 100
more than 101 - 200 : 90
more than 200 : 70
*/

function discountedPrice(quantity) {
  if (quantity <= 100) {
    const total = quantity * 100;
    return total;
  } else if (quantity > 100 && quantity < 200) {
    const total = quantity * 90;
    return total;
  } else {
    const total = quantity * 70;
    return total;
  }
}
const all = discountedPrice(225);
// console.log(all);

// Multi-layer discount

/*
  first 100 = 100tk
  101 to 200 = 90tk
  above 200 = 70tk
*/

function layerDiscount(quantity) {
  const first100price = 100;
  const second100price = 90;
  const above200price = 70;

  if (quantity <= 100) {
    const total = quantity * first100price;
    return total;
  } else if (quantity <= 200) {
    const first100Total = first100price * 100;
    const remainingQuantity = quantity - 100;
    const remainingprice = remainingQuantity * second100price;
    const total = first100Total + remainingprice;
    return total;
  } else {
    const first100Total = first100price * 100;
    const second100Total = second100price * 90;
    const remainingQuantity = quantity - 200;
    const remainingTotal = remainingQuantity * above200price;
    const total = first100Total + second100Total + remainingTotal;
    return total;
  }
}
const result = layerDiscount(50);
console.log(result);
