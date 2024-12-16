const Price = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-slate-200 p-4 border-2 rounded-lg flex flex-col">
      <h4 className="text-2xl font-bold text-center">{name}</h4>
      <h2>
        <span className="text-xl font-semibold flex items-center justify-center mt-2 mb-4">
          {price}
        </span>
      </h2>
      {features.map((feature, indx) => {
        return (
          <div key={indx} className="mt-2 flex-grow">
            <li>{feature}</li>
          </div>
        );
      })}
      <button className="btn mt-4 w-full hover:bg-slate-400 hover:text-white font-bold">
        Buy Now
      </button>
    </div>
  );
};

export default Price;
