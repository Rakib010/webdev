const Watches = ({ watch }) => {
  console.log(watch);
  const {name, brand, price} = watch;
  return (
    <div>
      <h2>Name:{name}</h2>
      <h3>Brand:{brand}</h3>
      <h3>Price:{price}</h3>
    </div>
  );
};

export default Watches;
