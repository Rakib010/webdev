import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Category = ({ item }) => {
  const { strCategory, strCategoryThumb } = item;

  return (
    <div>
      <div className="border p-4 rounded-xl shadow-lg">
        <img
          className="w-full h-30 object-cover"
          src={strCategoryThumb}
          alt=""
        />
        <p className="text-2xl font-bold">{strCategory}</p>
        <Link to={`/categoriesDetails/${item.strCategory}`}>
          <button className="btn mt-4 text-lg font-semibold">{`Show ${item.strCategory} Item`}</button>
        </Link>

        <Link
          to={`/try${item.strCategory}`}
          className="p-4 font-bold text-xl text-cyan-500"
        >
          Try
        </Link>
      </div>
    </div>
  );
};

export default Category;
