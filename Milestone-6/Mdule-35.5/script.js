/* const setAge = () => {
    localStorage.setItem("age", 21);
    window.setItem("age", 21);
  }; */

const addProduct = () => {
  const productField = document.getElementById("Product-name");
  const productCount = document.getElementById("Product-quantity");

  const product = productField.value;
  const quantity = productCount.value;

  productField.value = "";
  productCount.value = "";

  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};
// using local stores
const getStoreShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoreShoppingCart();
  cart[product] = quantity;
  const cartConvert = JSON.stringify(cart);
  localStorage.setItem("cart", cartConvert);
};

const displayProductFromLocalStorage = () => {
  const savedCart = getStoreShoppingCart();
  //   console.log(savedCart);
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
};

displayProductFromLocalStorage();
