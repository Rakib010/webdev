import About from "./About";
import Cart from "./Cart";

const CartContainer = ({
  handleIsActive,
  isActive,
  selectProducts,
  handleDelete,
}) => {
  return (
    <div>
      <h1 className="text-2xl">Cart Container </h1>
      <div className="flex justify-around items-center mt-5">
        <div
          onClick={() => handleIsActive("cart")}
          className={`${isActive.cart ? "btn active" : "btn"}`}
        >
          Cart
        </div>
        <div
          onClick={() => handleIsActive("about")}
          className={`${isActive.cart ? "btn" : "active btn"}`}
        >
          About
        </div>
      </div>

      {isActive.cart ? (
        <Cart
          handleDelete={handleDelete}
          selectProducts={selectProducts}
        ></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

export default CartContainer;
