const getstoreCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const addToLS = (id) => {
  const cart = getstoreCart();
  cart.push(id);
  // save to local storage
  saveCartToLS(cart);
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

export {addToLS,getstoreCart}