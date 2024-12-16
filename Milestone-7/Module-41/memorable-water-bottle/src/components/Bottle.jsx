import "./bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h2>Name:{name}</h2>
      <img src={img}></img>
      <p>Price:{price}</p>

      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
