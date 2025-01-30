const WatchesShow = ({ Watches }) => {
  const [name, brand, price] = Watches;
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>{brand}</p>
      <p>{price}</p>
    </div>
  );
};

export default WatchesShow;
