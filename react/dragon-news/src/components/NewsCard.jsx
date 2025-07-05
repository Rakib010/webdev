import { AiOutlineEye, AiOutlineShareAlt } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  /*      (props = {})
    const {news} = props || {}  */

  const {
    title,
    author,
    published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 ">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-md font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <AiOutlineShareAlt className="text-gray-500 cursor-pointer" size={24} />
      </div>
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {/* Image */}
      <img
        src={thumbnail_url}
        alt="Thumbnail"
        className="w-full rounded-lg mb-4"
      />
      {/* Details */}
      <p className="text-gray-600 mb-4">
        {details.length > 100 ? `${details.substring(0, 100)}...` : details}
        <Link
          to={`/news/${news._id}`}
          className="text-primary font-semibold cursor-pointer"
        >
          Read More
        </Link>
      </p>
      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-yellow-500">
          {/* Rating */}
          {[...Array(Math.floor(rating.number))].map((_, index) => (
            <FaStar key={index} />
          ))}
          <span className="ml-2 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <AiOutlineEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
