const SingleProducts = ({ product, handleSelectProduct }) => {
  const { name, image, price, description, isFeature } = product;

 /*  console.log(handleSelectProduct); */
  return (
    <div>
      <div className="card card-compact w-96 mb-4 border-2">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div>
            <p>{price}</p>
            <p>{isFeature ? "Feature category" : "not category"}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=>handleSelectProduct(product)} className="btn">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
