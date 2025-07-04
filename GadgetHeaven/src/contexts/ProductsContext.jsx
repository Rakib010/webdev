import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext();

const ProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((Items) => {
      const alreadyInCart = Items.find(
        (item) => item.product_id === product.product_id
      );

      if (alreadyInCart) {
        toast.warn("Item already in cart");
        return Items;
      }

      toast.success("Item added to cart");
      return [...Items, product];
    });
  };

  // Add to Wishlist
  const addToWishList = (product) => {
    setWishList((Items) => {
      if (Items.find((item) => item.product_id === product.product_id)) {
        toast.warn("Item already in wishlist");
        return Items;
      }
      toast.success("Item added to wishlist");
      return [...Items, product];
    });
  };

  // Calculate total cart price
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // Sort cart items
  const sortCartByPrice = () => {
    setCartItems((Item) => [...Item].sort((a, b) => b.price - a.price));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishList,
        addToCart,
        addToWishList,
        totalCartPrice,
        sortCartByPrice,
        setCartItems,
      }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </CartContext.Provider>
  );
};

export default ProductsContext;
