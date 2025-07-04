/* eslint-disable react/jsx-key */
const Cart = ({ selectProducts, handleDelete }) => {
  console.log(selectProducts);
  return (
    <div>
      {
        <div>
          {selectProducts.map((product) => (
            <div>
              <div className="flex mt-5 gap-4 items-center">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button onClick={()=>handleDelete(product.id)} className="btn">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Cart;
