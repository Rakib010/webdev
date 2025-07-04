import { useState } from "react";
import "./App.css";
import AllProducts from "./componets/AllProducts";
import CartContainer from "./componets/CartContainer";
import Navbar from "./componets/Navbar";

const App = () => {
  // toggle two buttons
  const [isActive, setActive] = useState({
    cart: true,
    status: "cart",
  });
  const handleIsActive = (status) => {
    if (status === "cart") {
      setActive({ cart: true, status: "cart" });
    } else {
      setActive({ cart: false, status: "about" });
    }
  };

  // sum price
  const [price, setPrice] = useState(500);

  const handlePrice = (pr) => {
    setPrice(price + pr);
  };

  //  price less
  const handleDeletePrice = (id) => {
    const product = selectProducts.find((p) => p.id == id);
    setPrice(product.price - price);
  };

  // products 
  const [selectProducts, setSelectProducts] = useState([]);

  const handleDelete = (id) => {
    handleDeletePrice(id);
    const remainProduct = selectProducts.filter((p) => p.id != id);
    setSelectProducts(remainProduct);
  };

  // products
  const handleSelectProduct = (product) => {
    const isExist = selectProducts.find((p) => p.id == product.id);

    if (isExist) {
      alert("Already Added");
    } else {
      handlePrice(product.price);
      const newProducts = [...selectProducts, product];
      setSelectProducts(newProducts);
    }
  };

  return (
    <>
      <Navbar selectProducts={selectProducts} price={price}></Navbar>

      <div className="flex gap-20 w-10/12 mx-auto">
        <AllProducts handleSelectProduct={handleSelectProduct}></AllProducts>
        <CartContainer
          selectProducts={selectProducts}
          isActive={isActive}
          handleIsActive={handleIsActive}
          handleDelete={handleDelete}
        ></CartContainer>
      </div>
    </>
  );
};

export default App;
