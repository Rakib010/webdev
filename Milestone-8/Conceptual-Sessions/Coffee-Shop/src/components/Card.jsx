import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Card = ({ coffeeItem, handleRemove }) => {
  const { pathname } = useLocation();

 
  const { name, image, category, origin, type, rating, popularity, id } =
    coffeeItem;

  return (
    <div className="relative">
      <Link to={`/coffee/${id}`}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <img className="w-full h-48 object-cover" src={image} alt={name} />

          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{name}</h1>

            <div className="space-y-1 text-gray-700">
              <p>
                <span className="font-semibold">Category:</span> {category}
              </p>
              <p>
                <span className="font-semibold">Type:</span> {type}
              </p>
              <p>
                <span className="font-semibold">Origin:</span> {origin}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> {rating}
              </p>
              <p>
                <span className="font-semibold">Popularity:</span> {popularity}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 rounded-full cursor-pointer bg-warning -top-5 -right-5"
        >
          <FaTrash size={20} />
        </div>
      )}
    </div>
  );
};

export default Card;
